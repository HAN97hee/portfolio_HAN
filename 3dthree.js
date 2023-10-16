import {GLTFLoader} from 'GLTFLoader';
import * as THREE from 'three';

let scene = new THREE.Scene();
let renderer = new THREE.WebGLRenderer({
    canvas : document.querySelector('#three3'),
    antialias : true,
    alpha : true
    });
            
renderer.OutputEncoding = THREE.sRGBEncoding2;

let camera = new THREE.PerspectiveCamera(80,1);
    camera.position.set(0,0,100)
    //순서대로 좌우값,상하값,인아웃값
    let light = new THREE.DirectionalLight(0xfffff0,100);
    scene.add(light);
            
    let loader = new GLTFLoader();
    loader.load('three3d/scene.gltf', function(gltf){
    scene.add(gltf.scene);
        function animate(){
            requestAnimationFrame(animate)
            gltf.scene.rotation.y += 0.003;
            renderer.render(scene, camera);
        }
        animate()
    });

renderer.render(scene, camera);