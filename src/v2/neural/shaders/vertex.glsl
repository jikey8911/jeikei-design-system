/**
 * JEIKEI NEURAL V2 - Vertex Shader
 * Corrected for Three.js ShaderMaterial compatibility.
 */

// Custom attribute for neural energy (provided by engine)
attribute float aEnergy;

// Uniforms provided by NeuralBackground
uniform float uTime;
uniform float uSize;

// Varyings to pass data to fragment shader
varying float vEnergy;
varying float vRandom;

// Helper to generate pseudo-random values per node
float hash(float n) { 
  return fract(sin(n) * 43758.5453123); 
}

void main() {
  // Built-in 'position' is automatically provided by Three.js ShaderMaterial.
  // DO NOT redefine 'attribute vec3 position;' here.
  
  vEnergy = aEnergy;
  vRandom = hash(position.x + position.y);
  
  // Apply light dynamic jitter (twinkle) based on time and random ID
  float twinkle = sin(uTime * 2.0 + vRandom * 10.0) * 0.1;
  vec3 animatedPos = position + vec3(twinkle, twinkle, 0.0);

  // Standard projection: projectionMatrix and modelViewMatrix are built-in
  gl_Position = projectionMatrix * modelViewMatrix * vec4(animatedPos, 1.0);
  
  // Dynamic size calculation: base size + pulsing + energy impact
  float pulse = 0.9 + 0.1 * sin(uTime * 1.5 + vRandom * 6.28);
  float size = uSize * pulse * (1.0 + vEnergy * 2.5);
  
  gl_PointSize = size;
}
