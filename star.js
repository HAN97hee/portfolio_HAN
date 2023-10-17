import {GLTFLoader} from 'GLTFLoader';
import * as THREE from 'three';
import { OrbitControls } from '/three.js-master/examples/jsm/controls/OrbitControls.js';



let scene = new THREE.Scene();
let renderer = new THREE.WebGLRenderer({
    canvas : document.querySelector('#star'),
    antialias : true
});
renderer.OutputEncoding = THREE.sRGBEncoding4;

let camera = new THREE.PerspectiveCamera(15, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(-20,0,1)
//순서대로 좌우값,상하값,인아웃값
scene.background = new THREE.Color('black');

let controls = new OrbitControls( camera, renderer.domElement );

let loader = new GLTFLoader();
loader.load('star/scene.gltf', function(gltf){
    scene.add(gltf.scene);
    function animate(){
        requestAnimationFrame(animate)


        renderer.render(scene, camera);
    }
    animate()
});

renderer.render(scene, camera);