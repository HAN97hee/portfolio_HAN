import {GLTFLoader} from 'GLTFLoader';
import * as THREE from 'three';
import { OrbitControls } from './three.js-master/examples/jsm/controls/OrbitControls.js';

let scene = new THREE.Scene();
let renderer = new THREE.WebGLRenderer({
    canvas : document.querySelector('#galaxy'),
    antialias : true
});
renderer.OutputEncoding = THREE.sRGBEncoding6;

let camera = new THREE.PerspectiveCamera(45,1);
camera.position.set(0,0,10)
//순서대로 좌우값,상하값,인아웃값
let light = new THREE.DirectionalLight(0xfffff0,3);
scene.add(light);

let controls = new OrbitControls( camera, renderer.domElement);
controls.minDistance = -10;
controls.maxDistance = 1;

let loader = new GLTFLoader();
loader.load('galaxy3d/scene.gltf', function(gltf){
    scene.add(gltf.scene);
    function animate(){
        requestAnimationFrame(animate)
        gltf.scene.rotation.y += 0.0002;
        gltf.scene.rotation.x += 0.0003;
        controls.update();
        renderer.render(scene, camera);
    }
    animate()
});

renderer.render(scene, camera);