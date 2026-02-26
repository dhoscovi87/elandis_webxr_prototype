import * as THREE from 'three';

// Dhosco WebXR Prototype for Elandis Africa
// Purpose: Demonstrate Tier 3 "Immersive" value

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// Villa Placeholder (The "Gravity" Experience)
// In a full build, this would be a 3D scan or GLTF model of the actual property
const geometry = new THREE.BoxGeometry(2, 1.5, 3);
const material = new THREE.MeshPhongMaterial({ color: 0xeeeeee, wireframe: true });
const villa = new THREE.Mesh(geometry, material);
scene.add(villa);

// Floor
const floorGeo = new THREE.PlaneGeometry(20, 20);
const floorMat = new THREE.MeshPhongMaterial({ color: 0x111111 });
const floor = new THREE.Mesh(floorGeo, floorMat);
floor.rotation.x = -Math.PI / 2;
floor.position.y = -1;
scene.add(floor);

camera.position.z = 5;
camera.position.y = 1;

function animate() {
    requestAnimationFrame(animate);
    
    // Slow cinematic rotation to show depth
    villa.rotation.y += 0.005;
    
    renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();
console.log("Dhosco WebXR Prototype Initialized for Elandis Africa");
