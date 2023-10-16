import {GLTFLoader} from 'GLTFLoader';
import * as THREE from 'three';

let scene = new THREE.Scene();
let renderer = new THREE.WebGLRenderer({
    canvas : document.querySelector('#home'),
    antialias : true,
    alpha : true
    });
            
renderer.OutputEncoding = THREE.sRGBEncoding3;

let camera = new THREE.PerspectiveCamera(20,1);
    camera.position.set(0,0,10)
    //순서대로 좌우값,상하값,인아웃값
    let light = new THREE.DirectionalLight(0xfffff0,5);
    scene.add(light);
            
    let loader = new GLTFLoader();
    loader.load('home/scene.gltf', function(gltf){
    scene.add(gltf.scene);
        function animate(){
            requestAnimationFrame(animate)
            gltf.scene.rotation.y += 0.005;
            renderer.render(scene, camera);
        }
        animate()
    });

renderer.render(scene, camera);