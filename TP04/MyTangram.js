/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initTextures();
		this.greenSquare = new MyDiamond(this.scene);
		this.purpleTriangle = new MyTriangleSmall(this.scene,"purple");
		this.redTriangle = new MyTriangleSmall(this.scene,"red");
		this.pinkTriangle = new MyTriangle(this.scene);
		this.yellowParallelogram = new MyParallelogram(this.scene);
		this.blueTriangle = new MyTriangleBig(this.scene,"blue");
		this.orangeTriangle = new MyTriangleBig(this.scene,"orange");
	}

	initMaterials(scene){
		

		//green
		
        this.green = new CGFappearance(scene);
        this.green.setAmbient(0.1, 0.1, 0.1, 1);
        this.green.setDiffuse(0.9, 0.9, 0.9, 1);
        this.green.setSpecular(0.1, 0.1, 0.1, 1);
		this.green.setShininess(10.0);
		
		
        //purple
        this.purple = new CGFappearance(scene);
        this.purple.setAmbient(0.2, 0.2, 0.2, 1.0);
        this.purple.setDiffuse(150/225, 80/255, 190/255, 1.0);
        this.purple.setSpecular(150/225, 80/255, 190/255, 1.0);
		this.purple.setShininess(20.0);
		
        //red   
        this.red = new CGFappearance(scene);
        this.red.setAmbient(0.2, 0.2, 0.2, 1.0);
        this.red.setDiffuse(255/225, 27/255, 27/255, 1.0);
        this.red.setSpecular(255/225, 27/255, 27/255, 1.0);
		this.red.setShininess(20.0);
		
        //pink
        this.pink = new CGFappearance(scene);
        this.pink.setAmbient(0.2, 0.2, 0.2, 1.0);
        this.pink.setDiffuse(255/225, 155/255, 207/255, 1.0);
        this.pink.setSpecular(255/225, 155/255, 207/255, 1.0);
		this.pink.setShininess(20.0);
		
        //yellow
        this.yellow = new CGFappearance(scene);
        this.yellow.setAmbient(0.2, 0.2, 0.2, 1.0);
        this.yellow.setDiffuse(255/225, 255/255, 0, 1.0);
        this.yellow.setSpecular(255/225, 255/255, 0, 1.0);
		this.yellow.setShininess(20.0);
		
        //blue
        this.blue = new CGFappearance(scene);
        this.blue.setAmbient(0.2, 0.2, 0.2, 1.0);
        this.blue.setDiffuse(0, 155/255, 255/255, 1.0);
        this.blue.setSpecular(0, 155/255, 255/255, 1.0);
		this.blue.setShininess(20.0);
		
        //orange
        this.orange = new CGFappearance(scene);
        this.orange.setAmbient(0.2, 0.2, 0.2, 1.0);
        this.orange.setDiffuse(255/225, 155/255, 0, 1.0);
        this.orange.setSpecular(255/225, 155/255, 0, 1.0);
		this.orange.setShininess(20.0);
	}

	initTextures(){

        //tangram material 
        this.tangram = new CGFappearance(this.scene);
        this.tangram.setAmbient(0.1, 0.1, 0.1, 1);
        this.tangram.setDiffuse(0.9, 0.9, 0.9, 1);
        this.tangram.setSpecular(0.1, 0.1, 0.1, 1);
        this.tangram.setShininess(20.0);
        this.tangram.loadTexture('images/tangram.png');
        this.tangram.setTextureWrap('REPEAT', 'REPEAT');
        }

	
	display(){

		this.tangram.apply();

		this.scene.scale(0.3,0.3,0.3);
		//Tangram 81 -> centro da imagem é o vértice superior esquerdo do palindromo amarelo


		//Figura verde

		this.scene.pushMatrix();
		var trans = [1, 0, 0, 0,
			0, 1, 0, 0,
			0, 0, 1, 0,
			Math.cos(Math.PI/4.0), Math.cos(Math.PI/4.0)*3.0, 0, 1];

		this.scene.multMatrix(trans);

		var rot = [Math.cos(Math.PI/4.0), Math.sin(Math.PI/4.0), 0, 0,
					-Math.sin(Math.PI/4.0), Math.cos(Math.PI/4.0), 0, 0,
					0, 0, 1, 0,
					0, 0, 0, 1];

		this.scene.multMatrix(rot);
		//this.green.apply();
		this.greenSquare.display();
		
		this.scene.popMatrix();
		this.scene.pushMatrix();

		//Figura roxa
		
		this.scene.translate(Math.cos(Math.PI/4.0)*3.0, Math.cos(Math.PI/4.0)*3.0, 0)
		this.scene.rotate(3*Math.PI/4.0, 0, 0, 1);
		//this.purple.apply();
		this.purpleTriangle.display();

		this.scene.popMatrix();
		this.scene.pushMatrix();


		//Figura vermelha

		this.scene.translate(Math.cos(Math.PI/4.0), Math.cos(Math.PI/4.0), 0);
		this.scene.rotate(Math.PI/4.0, 0, 0, 1);
		//this.red.apply();
		this.redTriangle.display();
		
		this.scene.popMatrix();
		this.scene.pushMatrix();


		//Figura rosa

		this.scene.translate(Math.cos(Math.PI/4.0)*2.0, 0, 0);
		this.scene.rotate(-Math.PI/4.0, 0, 0, 1);
		//this.pink.apply();
		this.pinkTriangle.display();

		this.scene.popMatrix();
		this.scene.pushMatrix();


		//Figura amarela

		this.scene.translate(Math.cos(Math.PI/4.0)*2.0, -Math.cos(Math.PI/4.0)*4.0, 0);
		this.scene.rotate(3*Math.PI/4.0, 0, 0, 1);
		this.scene.scale(1, -1, 1); //inverter o paralelogramo
		//this.yellow.apply();
		this.yellowParallelogram.display();

		this.scene.popMatrix();
		this.scene.pushMatrix();


		//Figura azul

		this.scene.translate(-0.6, -Math.sqrt(2)-1.4, 0);
		this.scene.rotate(-Math.PI/2.0, 0, 0, 1);
		//this.blue.apply();
		this.blueTriangle.display();

		this.scene.popMatrix();
		this.scene.pushMatrix();


		//Figura laranja

		this.scene.translate(-0.6, -Math.sqrt(2)-1.4, 0);
		this.scene.rotate(Math.PI/2.0, 0, 0, 1);
		//this.orange.apply();
		this.orangeTriangle.display();

		this.scene.popMatrix();
	}

	enableNormalViz(){
		this.greenSquare.enableNormalViz();
		this.purpleTriangle.enableNormalViz();
		this.redTriangle.enableNormalViz();
		this.pinkTriangle.enableNormalViz();
		this.yellowParallelogram.enableNormalViz();
		this.blueTriangle.enableNormalViz();
		this.orangeTriangle.enableNormalViz();
	}

	

	disableNormalViz(){
		this.greenSquare.disableNormalViz();
		this.purpleTriangle.disableNormalViz();
		this.redTriangle.disableNormalViz();
		this.pinkTriangle.disableNormalViz();
		this.yellowParallelogram.disableNormalViz();
		this.blueTriangle.disableNormalViz();
		this.orangeTriangle.disableNormalViz();
	}

	updateBuffers(complexity){
		// reinitialize buffers
		this.initBuffers();
		this.initNormalVizBuffers();
	}
}

