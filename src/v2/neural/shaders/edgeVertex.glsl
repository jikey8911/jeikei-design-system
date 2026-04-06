/**
 * JEIKEI NEURAL V2 - Edge Vertex Shader
 */
attribute float aActive;
uniform float uTime;

varying float vActive;

void main() {
  vActive = aActive;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
