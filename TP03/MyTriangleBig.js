/**
 * MyTriangleBig
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangleBig extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			0, 2, 0,	//0
			-2, 0, 0,	//1
			2, 0, 0,		//2

			0, 2, 0,	//0
			-2, 0, 0,	//1
			2, 0, 0		//2

		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			2, 1, 0
		];

		this.normals = [

			0,0,1,
			0,0,1,
			0,0,1,

			0,0,-1,
			0,0,-1,
			0,0,-1

		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES; //se em vez de TRIANGLES tivesse LINES, significa que ia ler de 2 em 2 e não de 3 em 3

		this.initGLBuffers();
	}
}

