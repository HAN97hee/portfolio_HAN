    import {GLTFLoader} from 'GLTFLoader';
    import * as THREE from 'three';
    import { OrbitControls } from '/three.js-master/examples/jsm/controls/OrbitControls.js';

    let scene = new THREE.Scene();
    let renderer = new THREE.WebGLRenderer({
        canvas : document.querySelector('#sship'),
        antialias : true,
        alpha : true
        });
                
    renderer.OutputEncoding = THREE.sRGBEncoding1;
    
    let camera = new THREE.PerspectiveCamera(35,1);
        camera.position.set(0,0,200)
        //순서대로 좌우값,상하값,인아웃값
        let light = new THREE.DirectionalLight(0xfffff0,10);
        scene.add(light);
                
        let controls = new OrbitControls( camera, renderer.domElement);
            controls.minDistance = 200;
            controls.maxDistance = 1000;

        let loader = new GLTFLoader();
        loader.load('spacecraft/scene.gltf', function(gltf){
        scene.add(gltf.scene);
            function animate(){
                requestAnimationFrame(animate)
                gltf.scene.rotation.y += 0.001;
                gltf.scene.rotation.x += 0.002;
                renderer.render(scene, camera);
                controls.update();
            }
            animate()
        });
    
    renderer.render(scene, camera);