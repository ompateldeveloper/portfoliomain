import * as THREE from "three";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"


export default class SceneInit {
  	constructor(canvasId) {
			
  	  	this.scene = new THREE.Scene();
  	  	this.camera = undefined;
  	  	this.renderer = undefined;
  	  	this.renderer1 = undefined;
  	  	this.renderer2 = undefined;
			
		this.renderScene= undefined;
		this.composer= undefined;
		this.composer1= undefined;
		this.composer2= undefined;
		this.clock = new THREE.Clock();
		this.outlinePass= undefined;
		
		this.width = undefined;
		this.height = undefined;
		this.canvasCompound = undefined;
		
		// NOTE: Camera params;
		this.fov = 35;
		this.nearPlane = 1;
		this.farPlane = 1000;
		this.canvasId = canvasId;
		this.clock = undefined;
		this.controls = undefined;
		this.mixer
		this.animations
		this.ambientLight = undefined;
		this.directionalLight = undefined;
		this.me = undefined;
    	this.glbModel = undefined;	
		this.count = 0
		this.dampingFactor=0.1;
		this.targetRotationX=0;
		this.targetRotationY=0;
		this.targetOrientation=0;

  	  	this.initialize();
		// this.loadGLBModel();

  	  	this.animate();
  	}





  	dispose() {
  	  	const container1 = document.querySelector(".hero-el-2");
		container1.removeChild(this.renderer.domElement);
  	  	const container2 = document.querySelector(".hero-el-3");
		container2.removeChild(this.renderer1.domElement);

  	  	this.scene = undefined;
  	  	this.camera = undefined; 
  	  	this.renderer.dispose();
  	  	this.renderer1.dispose();

  	  	this.clock = undefined;
  	  	this.controls = undefined;
  	  	this.ambientLight = undefined;
  	  	this.directionalLight = undefined;
  	  	this.me = undefined;
		this.mixer =undefined
		this.animations= undefined
  	  	window.removeEventListener("resize", this.onWindowResize);
  	  	this.isDisposed = true;

  	}





  	initialize() {
  	  	if (this.isDisposed) return;
  	  	this.clock = new THREE.Clock();
  	  	this.canvasCompound = window.getComputedStyle(
  	  	  document.querySelector(this.canvasId),
  	  	  null
  	  	);
  	  	this.width = parseFloat(this.canvasCompound.getPropertyValue("width"));
  	  	this.height = parseFloat(this.canvasCompound.getPropertyValue("height"));
  	  	this.scene = new THREE.Scene();
  	  	this.camera = new THREE.PerspectiveCamera(
  	  	  this.fov,
  	  	  this.width / this.height,
  	  	  1,
  	  	  100
  	  	);
  	  	this.camera.position.z = 48;

  	  	this.canvasCompound = window.getComputedStyle(
  	  	  document.querySelector(this.canvasId),
  	  	  null
  	  	);
  	  	this.width = parseFloat(this.canvasCompound.getPropertyValue("width"));
  	  	this.height = parseFloat(this.canvasCompound.getPropertyValue("height"));
  	  	// NOTE: Specify a canvas which is already created in the HTML.
  	  	this.renderer = new THREE.WebGLRenderer({ antialias: true });
  	  	this.renderer.setSize(this.width, this.height);
  	  	this.renderer.setClearColor(0xffffff, 0);

  	  	this.renderer1 = new THREE.WebGLRenderer({ antialias: true });
  	  	this.renderer1.setSize(this.width, this.height);
  	  	this.renderer1.setClearColor(0xffffff, 0);

			

  	  	const container1 = document.querySelector(".hero-el-2");
		container1.appendChild(this.renderer.domElement);
  	  	const container2 = document.querySelector(".hero-el-3");
		container2.appendChild(this.renderer1.domElement);

  	  	// this.controls = new OrbitControls(this.cssCamera, this.renderer2.domElement);
		// this.controls.enableDamping = true;
		// this.controls.dampingFactor = 0.02;
		// this.controls.rotateSpeed = 1;
		// this.controls.minPolarAngle = Math.PI / 2; 
		// this.controls.maxPolarAngle = Math.PI / 2; 
		// this.controls.enablePan = false; 
		// this.controls.enableZoom = false;
		
		this.directionalLightCyan = new THREE.DirectionalLight(new THREE.Color("rgb(0, 255, 229)"), 2);
		this.directionalLightCyan.position.set(16, 32, -64);
		this.scene.add(this.directionalLightCyan);
		this.directionalLightRed = new THREE.DirectionalLight(new THREE.Color("rgb(255, 0, 30)"), 2);
		this.directionalLightRed.position.set(-16, 32, -64);
		this.scene.add(this.directionalLightRed);


			new GLTFLoader().load('./me_ani_lowpoly.glb', (gltf) => {
				this.glbModel = gltf.scene;
				this.glbModel.scale.set(18, 18, 18);
				this.glbModel.position.set(0, -24, 0);

				this.mixer = new THREE.AnimationMixer(this.glbModel);
    			this.animations = gltf.animations;
    			const introAction = this.mixer.clipAction(this.animations[0]);
    			this.mixer.stopAllAction();
    			introAction.play();
    			introAction.setLoop(THREE.LoopOnce);
    			introAction.clampWhenFinished = true;

				this.glbModel.traverse((child) => {
					if (child.isMesh) {
					  child.material = new THREE.MeshPhysicalMaterial({ color: 0x000000,});	
					}
				});
				this.scene.add(this.glbModel);
				},
				undefined, (error) => {
					  console.error('Error loading GLB model:', error);
			});


			const screen1 = new THREE.Mesh(
				new THREE.PlaneGeometry(10,6,10,5),
				new THREE.MeshBasicMaterial({
					color:0xffffff,
					map: new THREE.TextureLoader().load('./texture3.svg'),
					transparent:true,
					opacity:1
				})
			)
			this.scene.add(screen1)
			screen1.rotateX(-Math.PI/6)
			screen1.position.set(0,5.5,-12)

			const screen2 = new THREE.Mesh(
				new THREE.PlaneGeometry(10,6,10,5),
				new THREE.MeshBasicMaterial({
					color:0xffffff,
					map: new THREE.TextureLoader().load('./texture3.svg'),
					transparent:true,
					opacity:1
				})
			)
			this.scene.add(screen2)
			// screen2.rotateX(-Math.PI/6)
			screen2.position.set(0,11,-13)


			const screen3 = new THREE.Mesh(
				new THREE.PlaneGeometry(10,6,10,5),
				new THREE.MeshBasicMaterial({
					color:0xffffff,
					map: new THREE.TextureLoader().load('./texture3.svg'),
					transparent:true,
					opacity:1
				})
			)
			this.scene.add(screen3)
			screen3.rotateY(-Math.PI/6)
			screen3.position.set(9.5,11,-10.5)


			const screen4 = new THREE.Mesh(
				new THREE.PlaneGeometry(10,6,10,5),
				new THREE.MeshBasicMaterial({
					color:0xffffff,
					map: new THREE.TextureLoader().load('./texture3.svg'),
					transparent:true,
					opacity:1
				})
			)
			this.scene.add(screen4)
			screen4.rotateY(Math.PI/6)
			screen4.position.set(-9.5,11,-10.5)


		


			const keyboard = new THREE.Mesh(
				new THREE.BoxGeometry(9,3,0.1,10,3,1),
				new THREE.MeshBasicMaterial({
					color:0xffffff,
					map: new THREE.TextureLoader().load('./keyboard.png'),
					
					transparent:true,
					// opacity:1
				})
			)
			this.scene.add(keyboard)
			keyboard.rotateX(-Math.PI/3)
			keyboard.position.set(0,2,-10) 




		document.addEventListener('mousemove', this.onMouseMove.bind(this));
		window.addEventListener("resize", () => this.onWindowResize(), false);

		if ('ondeviceorientation' in window) {
			window.addEventListener('deviceorientation',(event)=>this.onDeviceOrientation(event),false);
		} else {
			console.warn('Device orientation not supported.');
		}
  	}


	onMouseMove(event) {
		const centerX = this.width / 2;
		const centerY = this.height / 2;
		const mouseX = event.clientX - centerX;
		const mouseY = event.clientY - centerY;
		const rotationSpeed = 0.0005;
		this.targetRotationX = mouseX * rotationSpeed;
		this.targetRotationY = mouseY * 0.0002;
	}


	lerp(value1, value2, alpha) {
		return value1 * (1 - alpha) + value2 * alpha;
	}


	onDeviceOrientation(event) {
		if (event.alpha !== null && event.beta !== null && event.gamma !== null) {
		  const rotationSpeed = 0.02;
		  this.targetOrientation = - (event.gamma) * rotationSpeed;
		}
	  }
	  


	
  	animate() {
  	  	if (this.isDisposed) return;

        const delta = this.clock.getDelta();
		if (this.mixer) {
            this.mixer.update(delta);
        }
  	  	requestAnimationFrame(this.animate.bind(this));
  	  	this.render();
  	  	// this.controls.update();
		this.scene.rotation.y = this.lerp(this.scene.rotation.y, this.targetOrientation, 0.05);
		this.scene.rotation.set(this.lerp(this.scene.rotation.x, this.targetRotationY, 0.05),this.lerp(this.scene.rotation.y, this.targetRotationX, 0.05),0);
  	}

  	render() {
  	  	this.renderer.render(this.scene, this.camera);
  	  	this.renderer1.render(this.scene, this.camera);
  	}

  	onWindowResize() {
  	  	this.canvasCompound = window.getComputedStyle(
  	  	  document.querySelector(this.canvasId),
  	  	  null
  	  	);
  	  	this.width = parseFloat(this.canvasCompound.getPropertyValue("width"));
  	  	this.height = parseFloat(this.canvasCompound.getPropertyValue("height"));
  	  	this.camera.aspect = this.width / this.height;
  	  	this.camera.updateProjectionMatrix();
  	  	this.renderer.setSize(this.width, this.height);
  	  	this.renderer1.setSize(this.width, this.height);
  	}
}
