import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const canvas = document.getElementById("canvas");

// 1. create the scene

const scene = new THREE.Scene();
scene.background = new THREE.Color("#F0F0F0");

// 2. camera

const camera = new THREE.PerspectiveCamera(
  85,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.z = 5;

// 3. Object
const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshLambertMaterial({
  color: "#468585",
  emissive: " #468585",
});

const dodecahedron = new THREE.Mesh(geometry, material);
const boxGeometry = new THREE.BoxGeometry(2, 0.1, 2);
const boxMaterial = new THREE.MeshStandardMaterial({
  color: "#B4B4B3",
});

const box = new THREE.Mesh(boxGeometry, boxMaterial);

box.position.y = -1.5;
scene.add(dodecahedron);
scene.add(box);

// add the light
const light = new THREE.SpotLight({ color: 0x006769, intensity: 100 });
light.position.set(1, 1, 1);
scene.add(light);

// add rendered

const rendered = new THREE.WebGLRenderer({ canvas });
rendered.setSize(window.innerWidth, window.innerHeight);
rendered.setPixelRatio(window.devicePixelRatio);

// add oribitControls

const controls = new OrbitControls(camera, rendered.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.enablePan = true;

// add animation n
function animate() {
  requestAnimationFrame(animate);

  dodecahedron.rotation.x += 0.01;
  dodecahedron.rotation.y += 0.01;

  box.rotation.y += 0.005;
  controls.update();

  rendered.render(scene, camera);
}

// handle window resizing

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  rendered.setSize(window.innerWidth, window.innerHeight);
});

animate();
