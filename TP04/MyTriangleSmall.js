/**
 * MyTriangleSmall
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangleSmall extends CGFobject {
	constructor(scene,color) {
		super(scene);
		this.initBuffers(color);
	}
	initBuffers(color) {
		this.vertices = [
            0 , 1, 0,   //0
			-1, 0, 0,	//1
			1, 0, 0,		//2

			0 , 1, 0,   //0
			-1, 0, 0,	//1
			1, 0, 0		//2
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			2, 1, 0
		];

		this.normals=[
			0,0,1,
			0,0,1,
			0,0,1,

			0,0,-1,
			0,0,-1,
			0,0,-1
		];
		if(color=="red"){
			this.texCoords=[
				0.5,0.5,
				0.25,0.75,
				0.75,0.75,

				0.5,0.5,
				0.25,0.75,
				0.75,0.75
			];
		}
		else if (color == "purple"){
			this.texCoords=[
				0.25,0.25,
				0,0,
				0,0.5,
				0.25,0.25,
				0,0,
				0,0.5,
			];
		}

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES; //se em vez de TRIANGLES tivesse LINES, significa que ia ler de 2 em 2 e não de 3 em 3

		this.initGLBuffers();
	}
}

