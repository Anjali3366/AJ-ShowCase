import * as THREE from "three";

// create the scene

const scene = new THREE.Scene();
scene.background = new THREE.Color("#0F0F0F0");

// add the camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// create and add a cube object

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({
  color: "#468585",
  emissive: "468585",
});

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Add Lighting
const light = new THREE.DirectionalLight(0x9cdba6, 10);

light.position.set(1, 1, 1);
scene.add(light);

// Set up the rendered

const rendered = new THREE.WebGLRenderer();
rendered.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(rendered.domElement);

// Animate the scene
function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.03;
  cube.rotation.y += 0.01;
  rendered.render(scene, camera);
}
animate();
