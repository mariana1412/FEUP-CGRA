/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.tangram = new MyTangram(this);
        this.unitCube = new MyUnitCube(this);
        this.quad = new MyQuad(this);

        //Objects connected to MyInterface
        this.displayAxis = true;
        this.displayTangram = false;
        this.displayUnitCube = false;
        this.scaleFactor = 1;
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();
        
        // Draw axis
        if (this.displayAxis)
            this.axis.display();
        
        this.setDefaultAppearance();

        var sca = [this.scaleFactor, 0.0, 0.0, 0.0,
                    0.0, this.scaleFactor, 0.0, 0.0,
                    0.0, 0.0, this.scaleFactor, 0.0,
                    0.0, 0.0, 0.0, 1.0];
        
        this.pushMatrix();
        this.multMatrix(sca);

        // ---- BEGIN Primitive drawing section
        
        //vertice superior esquerdo da base na origem
        
        this.rotate(-Math.PI/2.0, 1, 0, 0); //rodar para que a face do tangram esteja paralela ao plano XZ
        this.translate(4, -4+0.9, 0); //coloca-lo de forma a que o vertice superior esquerdo da base (numero 7) esteja na origem
        
        this.pushMatrix();
        //colocar em cena o cubo e o tangram
        this.translate(0, -0.9, 0); //alinhar com o tangram
        this.scale(8, 8, 8); //escalamento para ficar com o tamanho certo para ser base
        this.translate(0, 0, -0.51); //arrastar o cubo para tras
        this.setDiffuse(128/255, 128/255, 128/255, 0); //cor bonitinha

        if(this.displayUnitCube)
            this.unitCube.display();

        this.popMatrix();

        if(this.displayTangram)
            this.tangram.display();
        
        this.popMatrix();

        this.quad.display();
        
        // ---- END Primitive drawing section
    }
}