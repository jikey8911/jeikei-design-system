precision mediump float;

varying float vEnergy;

void main() {
  // softer radial falloff for "nebula star" look
  vec2 uv = gl_PointCoord - vec2(0.5);
  float dist = length(uv);
  float alpha = smoothstep(0.5, 0.0, dist);
  float glow = pow(alpha, 2.2) * (0.3 + vEnergy * 2.2);

  // Cyan (energy=1.0) -> Deep Blue (energy=0.0)
  vec3 color = mix(vec3(0.0, 0.4, 1.0), vec3(0.0, 1.0, 1.0), vEnergy);
  gl_FragColor = vec4(color, glow);
}
