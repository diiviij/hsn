

let clock = new THREE.Clock();

const imgLoc = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/";
let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000),
light = new THREE.PointLight(0xFFFFFF, 2, 5000);
camera.position.set(1300, 0, 0),
scene = new THREE.Scene();

camera.lookAt(scene.position);
light.position.set(2000, 2000, 1500);
scene.add(light);

let marsGeo = new THREE.SphereGeometry (500, 32, 32),
marsMaterial = new THREE.MeshPhongMaterial(),
marsMesh = new THREE.Mesh(marsGeo, marsMaterial);
scene.add(marsMesh);   

let loader = new THREE.TextureLoader();
marsMaterial.map = loader.load(imgLoc+'mars-map.jpg');
marsMaterial.bumpMap = loader.load(imgLoc+'mars-bump.jpg');
marsMaterial.bumpScale = 8;
marsMaterial.specular = new THREE.Color('#000000');

let renderer = new THREE.WebGLRenderer({antialiasing : true});
renderer.setSize(window.innerWidth - 40, window.innerHeight -40)       
marsloc.appendChild(renderer.domElement);

let controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', render);

function animate(){
  requestAnimationFrame(animate);
  controls.update();
  render();       
}
            
function render(){
   var delta = clock.getDelta();
   marsMesh.rotation.y += 0.1 * delta;
   renderer.clear();
   renderer.render(scene, camera); 
}

animate();

marsloc.addEventListener('mousedown', function() { 
  marsloc.style.cursor = "-moz-grabbing";
  marsloc.style.cursor = "-webkit-grabbing";
  marsloc.style.cursor = "grabbing";
})

marsloc.addEventListener('mouseup', function() { 
  marsloc.style.cursor = "-moz-grab";
  marsloc.style.cursor = "-webkit-grab";
  marsloc.style.cursor = "grab";
})

window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth - 40, window.innerHeight - 40);
}

