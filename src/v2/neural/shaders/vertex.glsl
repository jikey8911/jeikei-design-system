attribute float aEnergy;

uniform float uTime;
uniform float uSize;

varying float vEnergy;
varying float vRandom;

float hash(float n) { return fract(sin(n) * 43758.5453123); }

void main() {
  vEnergy = aEnergy;
  vRandom = hash(position.x + position.y);
  
  // light jitter with time-based twinkle
  float twinkle = sin(uTime * 2.0 + vRandom * 10.0) * 0.1;
  vec3 pos = position + vec3(twinkle, twinkle, 0.0);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  
  // Dynamic size: pulsing stars + energy impact
  float pulse = 0.9 + 0.1 * sin(uTime * 1.5 + vRandom * 6.28);
  float size = uSize * pulse * (1.0 + vEnergy * 2.5);
  gl_PointSize = size;
}
