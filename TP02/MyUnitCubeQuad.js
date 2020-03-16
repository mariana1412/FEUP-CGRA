/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangrMyUnitCubeQuadam extends CGFobject {
	constructor(scene) {
		super(scene);
		
	}
	
	display(){

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
		this.scene.setDiffuse(0, 255/255, 0, 0);
		this.greenSquare.display();
		
		this.scene.popMatrix();
		this.scene.pushMatrix();

		//Figura roxa
		
		this.scene.translate(Math.cos(Math.PI/4.0)*3.0, Math.cos(Math.PI/4.0)*3.0, 0)
		this.scene.rotate(3*Math.PI/4.0, 0, 0, 1);
		this.scene.setDiffuse(150/255, 80/255, 190/255, 0);
		this.purpleTriangle.display();

		this.scene.popMatrix();
		this.scene.pushMatrix();


		//Figura vermelha

		this.scene.translate(Math.cos(Math.PI/4.0), Math.cos(Math.PI/4.0), 0);
		this.scene.rotate(Math.PI/4.0, 0, 0, 1);
		this.scene.setDiffuse(255/255, 27/255, 27/255, 0);
		this.redTriangle.display();
		
		this.scene.popMatrix();
		this.scene.pushMatrix();


		//Figura rosa

		this.scene.translate(Math.cos(Math.PI/4.0)*2.0, 0, 0);
		this.scene.rotate(-Math.PI/4.0, 0, 0, 1);
		this.scene.setDiffuse(255/255, 155/255, 207/255, 0);
		this.pinkTriangle.display();

		this.scene.popMatrix();
		this.scene.pushMatrix();


		//Figura amarela

		this.scene.translate(Math.cos(Math.PI/4.0)*2.0, -Math.cos(Math.PI/4.0)*4.0, 0);
		this.scene.rotate(3*Math.PI/4.0, 0, 0, 1);
		this.scene.scale(1, -1, 1); //inverter o paralelogramo
		this.scene.setDiffuse(255/255, 255/255, 0, 0);
		this.yellowParallelogram.display();

		this.scene.popMatrix();
		this.scene.pushMatrix();


		//Figura azul

		this.scene.translate(-0.6, -Math.sqrt(2)-1.4, 0);
		this.scene.rotate(-Math.PI/2.0, 0, 0, 1);
		this.scene.setDiffuse(0, 155/255, 255/255, 0);
		this.blueTriangle.display();

		this.scene.popMatrix();
		this.scene.pushMatrix();


		//Figura laranja

		this.scene.translate(-0.6, -Math.sqrt(2)-1.4, 0);
		this.scene.rotate(Math.PI/2.0, 0, 0, 1);
		this.scene.setDiffuse(255/255, 155/255, 0, 0);
		this.orangeTriangle.display();

		this.scene.popMatrix();
	}
}

