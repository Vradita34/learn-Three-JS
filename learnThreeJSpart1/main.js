import * as THREE from 'three';

// Scene
const scene = new THREE.Scene();

// Create our sphere
const geometry = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshStandardMaterial({
  color: '#00ff83',
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Light
const light = new THREE.PointLight('#ffffff', 1, 100);
light.position.set(0, 10, 10);
scene.add(light);

// Camera
const camera = new THREE.PerspectiveCamera(45, 800 / 600, 0.1, 1000);
camera.position.z = 20;
scene.add(camera);

// Renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(800, 600);

// Animation loop
const animate = () => {
  requestAnimationFrame(animate);

  // Any animation logic goes here
  mesh.rotation.y += 0.01; // Example rotation animation

  renderer.render(scene, camera);
};

// Start animation loop
animate();
