#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D waterTex;
uniform sampler2D waterMap;

uniform float timeFactor;



void main() {
    vec4 color = texture2D(waterTex, vTextureCoord + timeFactor * (0.01, -0.01));
	vec4 map = texture2D(waterMap, vec2(0.0,0.1) + vTextureCoord + timeFactor*(0.01, -0.01));

    color=vec4(color.r-map.r+0.4, color.g-map.g+0.4, color.b-map.b+0.4, 1.0);
	
	gl_FragColor = color;
}