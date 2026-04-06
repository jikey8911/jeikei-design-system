precision mediump float;

varying float vEnergy;

void main() {
  // radial falloff
  vec2 uv = gl_PointCoord - vec2(0.5);
  float dist = length(uv);
  float alpha = smoothstep(0.5, 0.0, dist);
  float glow = pow(alpha, 1.5) * (0.4 + vEnergy * 0.8);

  vec3 color = mix(vec3(0.0, 0.7, 0.6), vec3(0.0, 1.0, 0.8), vEnergy);
  gl_FragColor = vec4(color, glow);
}
