#ifdef GL_ES
precision highp float;
#endif

attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;

uniform sampler2D waterTex;
uniform sampler2D waterMap;

uniform float timeFactor;

void main() {

    vTextureCoord = aTextureCoord;
    vec4 watermap = texture2D(waterMap, vec2(0.0, 0.1) + vTextureCoord+timeFactor*(0.01,0.01));
    vec4 watertex = texture2D(waterTex, vTextureCoord+timeFactor*(0.01,0.01));     //moving the color


    vec3 offset = aVertexNormal*0.01*watermap.b;

    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + offset, 1.0);
}