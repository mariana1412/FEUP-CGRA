/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [0.5, -0.5, 0.5, //0 -> baixo direita frente
						0.5, -0.5, -0.5, //1 -> baixo direita tras
						-0.5, -0.5, -0.5, //2 -> baixo esquerda tras
						-0.5, -0.5, 0.5, //3 -> baixo esquerda frente
						0.5, 0.5, 0.5,
						0.5, 0.5, -0.5,
						-0.5, 0.5, -0.5,
						-0.5, 0.5, 0.5];	

		//Counter-clockwise reference of vertices
		this.indices = [0, 1, 4, // face do lado direito
						1, 5, 4, // face do lado direito
						1, 2, 5, // face de tras
						2, 6, 5,  // face de tras
						6, 2, 7, //face do lado esquerdo
						2, 3, 7, //face do lado esquerdo
						3, 0, 7, //face da frente
						0, 4, 7, //face da frente
						6, 7, 4, //face de cima
						4, 5, 6, //face de cima
						2, 3, 0, //face de baixo
						0, 1, 2  //face de baixo			
						];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

