#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D waterTex;
uniform sampler2D waterMap;

uniform float timeFactor;



void main() {
    vec4 color = texture2D(waterTex, vTextureCoord + timeFactor * vec2(0.1, 0.1));
	vec4 map = texture2D(waterMap, vTextureCoord + timeFactor * vec2(0.1, 0.1));

   
	
	gl_FragColor = color*0.8 + map*0.2;
}