var cameraController = function() {
    this.frontView = function() {frontView();};
    this.planView = function() {planView();};
    this.leftSideView = function() {leftSideView();};
    this.rightSideView = function() { rightSideView();};
    this.defaultPerspectiveView = function() {defaultPerspectiveView();};
    this.secondPerspectiveView = function() {secondPerspectiveView();};
};

//create this for each object
var cubeController = function () {
    this.positionX = -4.00;
    this.positionY = 3.00;
    this.positionZ = 0.00;
    this.scaleX = 1;
    this.scaleY = 1;
    this.scaleZ = 1;
};

var sphereController = function () {
    this.positionX = 20;
    this.positionY = 4;
    this.positionZ = 2;
    this.scaleX = 1;
    this.scaleY = 1;
    this.scaleZ = 1;
};


    var cMenu = new cameraController();
    var cubeMenu = new cubeController();
    var sphereMenu = new sphereController();
    
window.onload = function() {

    var gui = new dat.GUI();
    //Todo add a folder based on object being added
    var cameraFolder = gui.addFolder('switch Cameras');   
    cameraFolder.add(cMenu, 'defaultPerspectiveView');
    cameraFolder.add(cMenu, 'secondPerspectiveView');
    cameraFolder.add(cMenu, 'frontView');
    cameraFolder.add(cMenu, 'planView');
    cameraFolder.add(cMenu, 'leftSideView');
    cameraFolder.add(cMenu, 'rightSideView');
    var cubeFolder = gui.addFolder('Cube Properties');
    cubeFolder.add(cubeMenu, 'positionX', -10, 10);
    cubeFolder.add(cubeMenu, 'positionY', -10, 10);
    cubeFolder.add(cubeMenu, 'positionZ', -10, 10);
    cubeFolder.add(cubeMenu, 'scaleX', 0, 10);
    cubeFolder.add(cubeMenu, 'scaleY', 0, 10);
    cubeFolder.add(cubeMenu, 'scaleZ', 0, 10);
    var sphereFolder = gui.addFolder('Sphere Properties');
    sphereFolder.add(sphereMenu, 'positionX', -20, 20);
    sphereFolder.add(sphereMenu, 'positionY', -10, 10);
    sphereFolder.add(sphereMenu, 'positionZ', -10, 10);
    sphereFolder.add(sphereMenu, 'scaleX', 0, 10);
    sphereFolder.add(sphereMenu, 'scaleY', 0, 10);
    sphereFolder.add(sphereMenu, 'scaleZ', 0, 10);
};



 
