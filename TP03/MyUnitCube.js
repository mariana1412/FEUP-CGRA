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
						0.5, 0.5, 0.5,  //4 -> cima direita frente
						0.5, 0.5, -0.5, //5 -> cima direita tras
						-0.5, 0.5, -0.5, //6 -> cima esquerda tras
						-0.5, 0.5, 0.5, //7 -> cima esquerda frente

						0.5, -0.5, 0.5, //0 -> baixo direita frente
						0.5, -0.5, -0.5, //1 -> baixo direita tras
						-0.5, -0.5, -0.5, //2 -> baixo esquerda tras
						-0.5, -0.5, 0.5, //3 -> baixo esquerda frente
						0.5, 0.5, 0.5,  //4 -> cima direita frente
						0.5, 0.5, -0.5, //5 -> cima direita tras
						-0.5, 0.5, -0.5, //6 -> cima esquerda tras
						-0.5, 0.5, 0.5, //7 -> cima esquerda frente

						0.5, -0.5, 0.5, //0 -> baixo direita frente
						0.5, -0.5, -0.5, //1 -> baixo direita tras
						-0.5, -0.5, -0.5, //2 -> baixo esquerda tras
						-0.5, -0.5, 0.5, //3 -> baixo esquerda frente
						0.5, 0.5, 0.5,  //4 -> cima direita frente
						0.5, 0.5, -0.5, //5 -> cima direita tras
						-0.5, 0.5, -0.5, //6 -> cima esquerda tras
						-0.5, 0.5, 0.5 //7 -> cima esquerda frente
						];	

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

		//foi feito tendo em conta a ordem dos vertices						
		this.normals = [ 

			//Normais baixo
			0, -1, 0,
			0, -1, 0,
			0, -1, 0,
			0, -1, 0,

			//Normais cima
			0, 1, 0,
			0, 1, 0,
			0, 1, 0,
			0, 1, 0,

		
			//Normais face direita
			1,0,0,
			1,0,0,

			//Normais face esquerda
			-1,0,0,
			-1,0,0,

			//Normais face direita
			1,0,0,
			1,0,0,

		   //Normais face esquerda
			-1,0,0,
			-1,0,0,

			//Normais face frente
			0, 0, 1,

			//Normais face trás
			0, 0, -1,
			0, 0, -1,

			//Normais face frente
			0, 0, 1,
			0, 0, 1,
			
			//Normais face trás
			0, 0, -1,
			0, 0, -1,

			//Normais face frente
			0, 0, 1
		];


		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}

	updateBuffers(complexity){	
        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}

