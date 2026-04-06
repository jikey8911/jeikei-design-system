/**
 * JEIKEI NEURAL V2 - Edge Fragment Shader
 */
uniform vec3 uAccent;
varying float vActive;

void main() {
  float baseOpacity = 0.15;
  float activePulse = vActive * 0.85;
  
  vec3 finalColor = uAccent;
  if (vActive > 0.5) {
    finalColor = mix(uAccent, vec4(uAccent, 1.0).rgb * 2.0, 0.5);
  }
  
  gl_FragColor = vec4(finalColor, baseOpacity + activePulse);
}
