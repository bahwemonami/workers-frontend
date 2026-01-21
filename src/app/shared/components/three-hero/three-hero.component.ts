import { Component, ElementRef, OnInit, OnDestroy, ViewChild, inject, PLATFORM_ID, AfterViewInit, NgZone } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

let THREE: typeof import('three') | null = null;

@Component({
  selector: 'app-three-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="absolute inset-0 z-0 pointer-events-none">
      <canvas #threeCanvas class="w-full h-full block"></canvas>
    </div>
  `,
  styles: [`:host { display: block; position: absolute; inset: 0; z-index: 0; }`]
})
export class ThreeHeroComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('threeCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;
  
  private platformId = inject(PLATFORM_ID);
  private ngZone = inject(NgZone);
  
  private renderer: any;
  private scene: any;
  private camera: any;
  private animationId: number | null = null;
  private lastTime = 0;
  private frameInterval = 1000 / 30;
  
  private particles: { mesh: any; speed: number; wobble: number }[] = [];
  private hotelObjects: { group: any; rotSpeed: number; floatOffset: number }[] = [];
  
  isBrowser = false;

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  async ngAfterViewInit(): Promise<void> {
    if (!this.isBrowser) return;
    
    // Attendre que le canvas soit disponible
    if (!this.canvasRef?.nativeElement) {
      setTimeout(() => this.ngAfterViewInit(), 100);
      return;
    }
    
    try {
      THREE = await import('three');
      requestAnimationFrame(() => {
        this.ngZone.runOutsideAngular(() => {
          this.initThree();
          this.createScene();
          this.animate(0);
        });
        this.setupResize();
      });
    } catch (e) {
      console.error('Erreur Three.js:', e);
    }
  }

  ngOnDestroy(): void {
    if (!this.isBrowser) return;
    if (this.animationId !== null) cancelAnimationFrame(this.animationId);
    if (this.renderer) {
      this.renderer.dispose();
      this.renderer.forceContextLoss();
    }
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize);
    }
  }

  private initThree(): void {
    if (!THREE || !this.isBrowser) return;
    
    const canvas = this.canvasRef?.nativeElement;
    if (!canvas) {
      console.error('Canvas not found');
      return;
    }
    
    const container = canvas.parentElement;
    const width = container?.clientWidth || window.innerWidth || 1200;
    const height = container?.clientHeight || window.innerHeight || 800;

    // Renderer avec antialiasing
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: 'default'
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(typeof window !== 'undefined' ? window.devicePixelRatio : 1, 1.5));
    // Couleur Workers Orange
    this.renderer.setClearColor(0xFF6B00, 1);

    this.scene = new THREE.Scene();

    // Camera
    this.camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    this.camera.position.set(0, 0, 22);

    // Éclairage
    const ambient = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambient);
    
    const mainLight = new THREE.DirectionalLight(0xffffff, 0.9);
    mainLight.position.set(5, 8, 10);
    this.scene.add(mainLight);
    
    const fillLight = new THREE.DirectionalLight(0xFF6B00, 0.2);
    fillLight.position.set(-5, -3, 5);
    this.scene.add(fillLight);
  }

  private createScene(): void {
    if (!THREE) return;
    
    this.createFloatingParticles();
    this.createBell();
    this.createTray();
    this.createSuitcase();
    this.createKeyCard();
  }

  // Particules flottantes dorées/orange
  private createFloatingParticles(): void {
    if (!THREE) return;
    const T = THREE;
    
    const count = this.isMobile() ? 15 : 25;
    const particleGeo = new T.SphereGeometry(0.08, 8, 8);
    
    for (let i = 0; i < count; i++) {
      const material = new T.MeshBasicMaterial({
        color: Math.random() > 0.5 ? 0xFF6B00 : 0xFFFFFF,
        transparent: true,
        opacity: 0.4 + Math.random() * 0.4
      });

      const particle = new T.Mesh(particleGeo, material);
      particle.position.set(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10
      );
      
      this.scene.add(particle);
      this.particles.push({
        mesh: particle,
        speed: 0.005 + Math.random() * 0.01,
        wobble: Math.random() * Math.PI * 2
      });
    }
  }

  // Cloche de réception
  private createBell(): void {
    if (!THREE) return;
    const T = THREE;
    
    const group = new T.Group();
    
    // Corps de la cloche
    const bellGeo = new T.ConeGeometry(1.2, 1.8, 24, 1, true);
    const bellMat = new T.MeshPhongMaterial({
      color: 0xFFD700,
      shininess: 100,
      specular: 0xFFFFFF
    });
    const bell = new T.Mesh(bellGeo, bellMat);
    bell.rotation.x = Math.PI;
    bell.position.y = 0.9;
    group.add(bell);
    
    // Battant de la cloche
    const clapperGeo = new T.SphereGeometry(0.15, 12, 12);
    const clapperMat = new T.MeshPhongMaterial({
      color: 0xC0C0C0,
      shininess: 80
    });
    const clapper = new T.Mesh(clapperGeo, clapperMat);
    clapper.position.y = 0.2;
    group.add(clapper);
    
    // Poignée
    const handleGeo = new T.CylinderGeometry(0.08, 0.08, 0.6, 12);
    const handleMat = new T.MeshPhongMaterial({
      color: 0xFFD700,
      shininess: 100
    });
    const handle = new T.Mesh(handleGeo, handleMat);
    handle.position.y = 1.8;
    group.add(handle);
    
    // Base de la poignée
    const baseGeo = new T.CylinderGeometry(0.15, 0.12, 0.2, 12);
    const base = new T.Mesh(baseGeo, handleMat);
    base.position.y = 2.1;
    group.add(base);
    
    group.position.set(-9, 3, -1);
    group.rotation.z = 0.1;
    group.scale.setScalar(1.4);
    this.scene.add(group);
    this.hotelObjects.push({ group, rotSpeed: 0.003, floatOffset: 0 });
  }

  // Plateau de service
  private createTray(): void {
    if (!THREE) return;
    const T = THREE;
    
    const group = new T.Group();
    
    // Plateau ovale
    const trayShape = new T.Shape();
    trayShape.ellipse(0, 0, 2, 1.2, 0, Math.PI * 2);
    const extrudeSettings = { depth: 0.1, bevelEnabled: true, bevelThickness: 0.05, bevelSize: 0.05 };
    const trayGeo = new T.ExtrudeGeometry(trayShape, extrudeSettings);
    const trayMat = new T.MeshPhongMaterial({
      color: 0xFFFFFF,
      shininess: 80,
      specular: 0x888888
    });
    const tray = new T.Mesh(trayGeo, trayMat);
    tray.rotation.x = -Math.PI / 2;
    group.add(tray);
    
    // Bordure du plateau
    const rimGeo = new T.TorusGeometry(2, 0.08, 12, 32);
    const rimMat = new T.MeshPhongMaterial({
      color: 0xC0C0C0,
      shininess: 100
    });
    const rim = new T.Mesh(rimGeo, rimMat);
    rim.rotation.x = Math.PI / 2;
    rim.position.y = 0.05;
    group.add(rim);
    
    // Tasse de café
    const cupGeo = new T.CylinderGeometry(0.4, 0.35, 0.6, 16);
    const cupMat = new T.MeshPhongMaterial({
      color: 0xFFFFFF,
      shininess: 60
    });
    const cup = new T.Mesh(cupGeo, cupMat);
    cup.position.set(-0.8, 0.4, 0);
    group.add(cup);
    
    // Anse de la tasse
    const handleGeo = new T.TorusGeometry(0.15, 0.05, 8, 16, Math.PI);
    const handle = new T.Mesh(handleGeo, cupMat);
    handle.rotation.z = Math.PI / 2;
    handle.position.set(-0.5, 0.4, 0);
    group.add(handle);
    
    // Vase avec fleur
    const vaseGeo = new T.CylinderGeometry(0.3, 0.25, 0.8, 16);
    const vaseMat = new T.MeshPhongMaterial({
      color: 0x2196F3,
      shininess: 70
    });
    const vase = new T.Mesh(vaseGeo, vaseMat);
    vase.position.set(0.8, 0.5, 0);
    group.add(vase);
    
    // Fleur
    const petalGeo = new T.SphereGeometry(0.15, 8, 8);
    const petalMat = new T.MeshPhongMaterial({
      color: 0xFF6B00,
      shininess: 30
    });
    for (let i = 0; i < 5; i++) {
      const petal = new T.Mesh(petalGeo, petalMat);
      const angle = (i / 5) * Math.PI * 2;
      petal.position.set(
        Math.cos(angle) * 0.2,
        0.9,
        Math.sin(angle) * 0.2
      );
      petal.scale.setScalar(0.8);
      group.add(petal);
    }
    
    group.position.set(10, -4, 0);
    group.rotation.y = 0.3;
    group.rotation.z = -0.1;
    group.scale.setScalar(1.3);
    this.scene.add(group);
    this.hotelObjects.push({ group, rotSpeed: 0.002, floatOffset: Math.PI * 0.5 });
  }

  // Valise
  private createSuitcase(): void {
    if (!THREE) return;
    const T = THREE;
    
    const group = new T.Group();
    
    // Corps de la valise
    const bodyGeo = new T.BoxGeometry(3, 2, 1.2);
    const bodyMat = new T.MeshPhongMaterial({
      color: 0x2C3E50,
      shininess: 60,
      specular: 0x444444
    });
    const body = new T.Mesh(bodyGeo, bodyMat);
    group.add(body);
    
    // Poignée supérieure
    const handleGeo = new T.BoxGeometry(0.8, 0.15, 0.2);
    const handleMat = new T.MeshPhongMaterial({
      color: 0xC0C0C0,
      shininess: 100
    });
    const handle = new T.Mesh(handleGeo, handleMat);
    handle.position.y = 1.1;
    group.add(handle);
    
    // Serrures
    const lockGeo = new T.BoxGeometry(0.3, 0.2, 0.1);
    const lockMat = new T.MeshPhongMaterial({
      color: 0xFFD700,
      shininess: 100
    });
    const lock1 = new T.Mesh(lockGeo, lockMat);
    lock1.position.set(-0.8, 0.3, 0.61);
    group.add(lock1);
    
    const lock2 = new T.Mesh(lockGeo, lockMat);
    lock2.position.set(0.8, 0.3, 0.61);
    group.add(lock2);
    
    // Bandes décoratives
    const stripeGeo = new T.BoxGeometry(2.8, 0.1, 0.05);
    const stripeMat = new T.MeshPhongMaterial({
      color: 0xFF6B00,
      shininess: 50
    });
    const stripe1 = new T.Mesh(stripeGeo, stripeMat);
    stripe1.position.set(0, 0.6, 0.61);
    group.add(stripe1);
    
    const stripe2 = new T.Mesh(stripeGeo, stripeMat);
    stripe2.position.set(0, -0.6, 0.61);
    group.add(stripe2);
    
    // Roulettes
    const wheelGeo = new T.CylinderGeometry(0.15, 0.15, 0.1, 12);
    const wheelMat = new T.MeshPhongMaterial({
      color: 0x1A1A1A,
      shininess: 30
    });
    const wheel1 = new T.Mesh(wheelGeo, wheelMat);
    wheel1.rotation.z = Math.PI / 2;
    wheel1.position.set(-1.2, -1.1, 0.5);
    group.add(wheel1);
    
    const wheel2 = new T.Mesh(wheelGeo, wheelMat);
    wheel2.rotation.z = Math.PI / 2;
    wheel2.position.set(1.2, -1.1, 0.5);
    group.add(wheel2);
    
    group.position.set(8, 5, -2);
    group.rotation.z = 0.2;
    group.scale.setScalar(1.2);
    this.scene.add(group);
    this.hotelObjects.push({ group, rotSpeed: 0.0015, floatOffset: Math.PI });
  }

  // Carte clé d'hôtel
  private createKeyCard(): void {
    if (!THREE) return;
    const T = THREE;
    
    const group = new T.Group();
    
    // Carte
    const cardGeo = new T.BoxGeometry(2.2, 1.4, 0.05);
    const cardMat = new T.MeshPhongMaterial({
      color: 0xFFFFFF,
      shininess: 80,
      specular: 0xFFFFFF
    });
    const card = new T.Mesh(cardGeo, cardMat);
    group.add(card);
    
    // Bande magnétique
    const stripeGeo = new T.BoxGeometry(1.8, 0.3, 0.06);
    const stripeMat = new T.MeshPhongMaterial({
      color: 0x1A1A1A,
      shininess: 10
    });
    const stripe = new T.Mesh(stripeGeo, stripeMat);
    stripe.position.y = 0.3;
    group.add(stripe);
    
    // Logo/texte
    const logoGeo = new T.BoxGeometry(0.8, 0.4, 0.06);
    const logoMat = new T.MeshPhongMaterial({
      color: 0xFF6B00,
      shininess: 50
    });
    const logo = new T.Mesh(logoGeo, logoMat);
    logo.position.set(-0.5, -0.3, 0.03);
    group.add(logo);
    
    // Trou pour porte-clés
    const holeGeo = new T.CylinderGeometry(0.08, 0.08, 0.08, 12);
    const holeMat = new T.MeshBasicMaterial({
      color: 0x000000
    });
    const hole = new T.Mesh(holeGeo, holeMat);
    hole.rotation.z = Math.PI / 2;
    hole.position.set(0.9, 0, 0);
    group.add(hole);
    
    group.position.set(-8, -5, 1);
    group.rotation.z = 0.4;
    group.scale.setScalar(1.1);
    this.scene.add(group);
    this.hotelObjects.push({ group, rotSpeed: 0.0025, floatOffset: Math.PI * 1.5 });
  }

  private animate = (currentTime: number): void => {
    if (!this.isBrowser || !this.renderer || !THREE) return;
    
    this.animationId = requestAnimationFrame(this.animate);
    
    const delta = currentTime - this.lastTime;
    if (delta < this.frameInterval) return;
    this.lastTime = currentTime - (delta % this.frameInterval);
    
    const time = currentTime * 0.001;
    
    // Particules
    this.particles.forEach((p, i) => {
      p.mesh.position.y += p.speed;
      p.mesh.position.x += Math.sin(time + i * 0.5) * 0.005;
      
      // Reset quand la particule sort de l'écran
      if (p.mesh.position.y > 12) {
        p.mesh.position.y = -12;
        p.mesh.position.x = (Math.random() - 0.5) * 30;
      }
    });
    
    // Objets hôteliers
    this.hotelObjects.forEach(obj => {
      obj.group.rotation.y += obj.rotSpeed;
      obj.group.position.y += Math.sin(time * 0.5 + obj.floatOffset) * 0.01;
    });
    
    // Mouvement subtil de la caméra
    this.camera.position.x = Math.sin(time * 0.08) * 0.6;
    this.camera.position.y = Math.cos(time * 0.06) * 0.4;

    this.renderer.render(this.scene, this.camera);
  };

  private onResize = (): void => {
    if (!this.renderer || typeof window === 'undefined') return;
    const canvas = this.canvasRef.nativeElement;
    const container = canvas.parentElement;
    const width = container?.clientWidth || window.innerWidth;
    const height = container?.clientHeight || window.innerHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  };

  private setupResize(): void {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.onResize);
    }
  }

  private isMobile(): boolean {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < 768;
  }
}
