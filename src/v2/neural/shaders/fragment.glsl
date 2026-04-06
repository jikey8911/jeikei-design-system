varying float vEnergy;
uniform vec3 uAccent;
uniform float uGlowIntensity;

void main() {
  float dist = distance(gl_PointCoord, vec2(0.5));
  if (dist > 0.5) discard;
  
  // Concentric bloom intensity
  float alpha = 0.0;
  
  // Core: 0.0-0.1
  if (dist < 0.1) {
    alpha = 1.0;
  } else {
    // Inverse exponential bloom for the halo
    float bloom = (1.0 - dist * 2.0);
    alpha = pow(bloom, 2.5);
  }
  
  // Pulse scaling via energy
  float energyBoost = vEnergy * 1.5;
  float ambientGlow = 0.08; // Ensure it's always faintly visible
  
  vec3 finalColor = mix(uAccent, vec3(1.0), vEnergy * 0.4);
  
  gl_FragColor = vec4(finalColor, alpha * (ambientGlow + energyBoost) * uGlowIntensity);
}
