import * as THREE from "three";
  export default class TransparentCanvasWithIcosahedron {
  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(
      window.innerWidth / -2,
      window.innerWidth / 2,
      window.innerHeight / 2,
      window.innerHeight / -2,
      -100,
      100
    );
    this.renderer = new THREE.WebGLRenderer({ alpha: true,antialias:true});
    this.icosahedron = null;
    this.target={x:0,y:0}
    this.init();
  }
  dispose(){
    this.renderer.dispose();
    document.body.removeChild(this.renderer.domElement); 

  }
  init() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0x000000, 0); // Set the background to transparent
    document.body.appendChild(this.renderer.domElement);

    this.icosahedron = new THREE.Mesh(
      new THREE.IcosahedronGeometry(30),
      new THREE.MeshBasicMaterial({ color: 0xff0000,wireframe:true })
    );
    this.icosahedron.position.z= -40;
    this.scene.add(this.icosahedron);
    

    document.addEventListener("mousemove", this.onMouseMove.bind(this), false);

    this.camera.position.set(0, 0, 12);

    this.animate();
		window.addEventListener("resize", () => this.onWindowResize(), false);

  }

  onMouseMove(event) {
    // Calculate normalized device coordinates (NDC) from mous  e position
    const centerX = window.innerWidth / 2;
    const mouseX = event.clientX - centerX;
    // const mouseX = event.clientX 
    const centerY = window.innerHeight / 2;
    const mouseY = event.clientY - centerY;
    this.target = {x:mouseX,y:mouseY}
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.icosahedron.position.lerp(new THREE.Vector3(this.target.x, -this.target.y, 0), 0.2);
    this.icosahedron.rotation.x+=0.01;
    this.icosahedron.rotation.y+=0.01;
    this.renderer.render(this.scene, this.camera);
  }
  onWindowResize(){
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    console.log(".");
    this.camera.left = window.innerWidth / -2;
    this.camera.right = window.innerWidth / 2;
    this.camera.top = window.innerHeight / 2;
    this.camera.bottom = window.innerHeight / -2;
    this.camera.updateProjectionMatrix();
  }
}
