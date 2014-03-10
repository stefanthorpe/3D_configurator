 function calcObjectMidHeight() {
    //this should calculate the width, height or depth to ensure that the product is visible 
 };
 
 function usePerspectiveCamera(){
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.x = -30;
    camera.position.y = 40;
    camera.position.z = 30;
    camera.lookAt(scene.position);
    return camera;
};

function useOrthographicCamera(){
    var camera = new THREE.OrthographicCamera( 
          window.innerWidth / - 16, window.innerWidth / 16,
          window.innerHeight / 16, window.innerHeight / - 16,
          -200, 500 );
    camera.position.x = 1;
    camera.position.y = 2;
    camera.position.z = 4;
    camera.lookAt(scene.position);
    return camera;
};
 
function defaultPerspectiveView() {
    removeAllGrids();
    if (camera instanceof THREE.OrthographicCamera) {
        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.x = -30;
        camera.position.y = 40;
        camera.position.z = 30;
        camera.lookAt(scene.position);
    } else {
        camera.position.x = -30;
        camera.position.y = 40;
        camera.position.z = 30;
        camera.lookAt(scene.position);
    };  
};

function secondPerspectiveView() {
    removeAllGrids();
    if (camera instanceof THREE.OrthographicCamera) {
        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.x = 60;
        camera.position.y = 40;
        camera.position.z = 60;
        camera.lookAt(scene.position);
    } else {
        camera.position.x = 60;
        camera.position.y = 40;
        camera.position.z = 60;
        camera.lookAt(scene.position);
    };  
};

function frontView() {
    removeAllGrids();
    if (camera instanceof THREE.PerspectiveCamera) {
        camera = new THREE.OrthographicCamera( 
            window.innerWidth / - 16, window.innerWidth / 16,
            window.innerHeight / 16, window.innerHeight / - 16,
            -200, 500 );
        camera.position.x = 0;
        camera.position.y = 0;
        camera.position.z = 3;
        camera.lookAt(scene.position);
    } else {
        camera.position.x = 0;
        camera.position.y = 0;
        camera.position.z = 3;
        camera.lookAt(scene.position);
    };
    displayVerticalGrid();
};

function planView() {
    removeAllGrids();
    if (camera instanceof THREE.PerspectiveCamera) {
        camera = new THREE.OrthographicCamera( 
            window.innerWidth / - 16, window.innerWidth / 16,
            window.innerHeight / 16, window.innerHeight / - 16,
            -200, 500 );
        camera.position.x = 0;
        camera.position.y = 2;
        camera.position.z = 0;
        camera.lookAt(scene.position);
    } else {
        camera.position.x = 0;
        camera.position.y = 2;
        camera.position.z = 0;
        camera.lookAt(scene.position);
    };
    displayHorizontalGrid();
};

function rightSideView() {
    removeAllGrids();
    if (camera instanceof THREE.PerspectiveCamera) {
        camera = new THREE.OrthographicCamera( 
            window.innerWidth / - 16, window.innerWidth / 16,
            window.innerHeight / 16, window.innerHeight / - 16,
            -200, 500 );
        camera.position.x = 2;
        camera.position.y = 0;
        camera.position.z = 0;
        camera.lookAt(scene.position);
    } else {
        camera.position.x = 2;
        camera.position.y = 0;
        camera.position.z = 0;
        camera.lookAt(scene.position);
    };
};

function leftSideView() {
    removeAllGrids();
    if (camera instanceof THREE.PerspectiveCamera) {
        camera = new THREE.OrthographicCamera( 
            window.innerWidth / - 16, window.innerWidth / 16,
            window.innerHeight / 16, window.innerHeight / - 16,
            -200, 500 );
        camera.position.x = -2;
        camera.position.y = 0;
        camera.position.z = 0;
        camera.lookAt(scene.position);
    } else {
        camera.position.x = -2;
        camera.position.y = 0;
        camera.position.z = 0;
        camera.lookAt(scene.position);
    };
};
