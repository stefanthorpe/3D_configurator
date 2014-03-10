// once everything is loaded, we run our Three.js stuff.
  
        //initialise the stats
        var stats = initStats();
        // create a scene, that will hold all our elements such as objects, cameras and lights.
        var scene = new THREE.Scene();

        // create a camera, which defines where we're looking at.
        var camera = usePerspectiveCamera();
        // create a render and set the size
        var renderer;
        if(window.WebGLRenderingContext) renderer = new THREE.WebGLRenderer(); 
        else renderer = new THREE.CanvasRenderer();

        renderer.setClearColorHex(0xeeeeee, 1.0);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMapEnabled = true;


    function render() {
        stats.update();
        // this needs to be replaced by an object updater
        scene.getObjectByName('cube').position.x = cubeMenu.positionX;
        cube.position.y = cubeMenu.positionY;
        cube.position.z = cubeMenu.positionZ;
        cube.scale.x = cubeMenu.scaleX;
        cube.scale.y = cubeMenu.scaleY;
        cube.scale.z = cubeMenu.scaleZ;
        sphere.position.x = sphereMenu.positionX;
        sphere.position.y = sphereMenu.positionY;
        sphere.position.z = sphereMenu.positionZ;
        sphere.scale.x = sphereMenu.scaleX;
        sphere.scale.y = sphereMenu.scaleY;
        sphere.scale.z = sphereMenu.scaleZ;
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    };   
         
    function fisrtRender() {
        $("#WebGL-output").append(renderer.domElement);
        render();
        
    };
    

    var cube;
    var sphere;
    var plane;
    function addObjectToScene () {
        var axes = new THREE.AxisHelper( 20 );
        scene.add(axes);

        // create the ground plane
        var planeGeometry = new THREE.PlaneGeometry(60,20,1,1);
        var planeMaterial =    new THREE.MeshLambertMaterial({color: 0xffffff});
        var plane = new THREE.Mesh(planeGeometry,planeMaterial);
        plane.receiveShadow  = true;

        // rotate and position the plane
        plane.rotation.x=-0.5*Math.PI;
        plane.position.x=15;
        plane.position.y=0;
        plane.position.z=0;
        
        //create spotlight
        var spotLight = new THREE.SpotLight( 0xffffff);
        spotLight.position.set ( -40, 60, -10);
        spotLight.castShadow = true;
        scene.add(spotLight);
        


        // add the plane to the scene
        scene.add(plane);

        // create a cube
        var cubeGeometry = new THREE.CubeGeometry(4,4,4);
        var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xff0000});
        cube = new THREE.Mesh(cubeGeometry, cubeMaterial);


        // position the cube
        cube.position.x= cubeMenu.positionX;
        cube.position.y= cubeMenu.positionY;
        cube.position.z= cubeMenu.positionZ;
        cube.name = "cube";
        cube.castShadow = true;

        // add the cube to the scene
        scene.add(cube);

        var sphereGeometry = new THREE.SphereGeometry(4,20,20);
        var sphereMaterial = new THREE.MeshLambertMaterial({color: 0x7777ff});
        sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);
        sphere.name = "sphere";

        // position the sphere
        sphere.position.x=sphereMenu.positionX;
        sphere.position.y=sphereMenu.positionY;
        sphere.position.z=sphereMenu.positionZ;
        sphere.castShadow = true;


        // add the sphere to the scene
        scene.add(sphere);


        
    };
        
    function displayHorizontalGrid (vector3) {
        if (typeof vector3 === 'undefined') {
            vector3 = new THREE.Vector3(0,0,0);
        }
        //Error check for vector required here
        var hGrid = new THREE.GridHelper( 50, 2 ); 
        hGrid.position = vector3;
        hGrid.name = "hGrid"; 
        scene.add(hGrid);
    };
    
    function removeHorizontalGrid () {
        scene.remove(scene.getObjectByName("hGrid"));
    }
    
    function removeVerticalGrid() {
        scene.remove(scene.getObjectByName("vGrid"));
    }
    
    function removeAllGrids() {
        removeHorizontalGrid();
        removeVerticalGrid();
    }
    
    function displayVerticalGrid (vector3) {
        if (typeof vector3 === 'undefined') {
            vector3 = new THREE.Vector3(0,0,0);
        }
        //Error check for vector required here
        var vGrid = new THREE.GridHelper( 50, 2 ); 
        vGrid.position = vector3;
        vGrid.rotation.x = Math.PI/2; 
        vGrid.name = "vGrid";
        scene.add(vGrid);
    };
    
    function initStats() {
        var stats = new Stats();
        stats.setMode(0);
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';
        $("#Stats-output").append( stats.domElement);
        return stats;
    };

