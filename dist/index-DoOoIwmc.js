import { j as i, c as x, W as Z, S as ee, O as te, B as S, a as W, b as ne, A as q, P as se, L as oe, C as ie, d as ae } from "./three.module-wI8zIvu6.js";
import re, { useRef as y, useEffect as ce } from "react";
console.warn("JeiKei Legacy: NeoButton is deprecated. Use V2 components instead.");
const le = ({ children: c, variant: t = "primary", className: s, ...e }) => {
  const n = "px-6 py-3 rounded-neo-md transition-all duration-300 font-bold uppercase tracking-widest text-[10px]", o = {
    primary: "bg-neo-accent text-neo-bg shadow-neon-primary hover:brightness-110 hover:scale-[1.02] border-none",
    secondary: "bg-neo-surface/40 text-neo-magenta border border-neo-magenta/30 backdrop-blur-md shadow-neon-magenta/20 hover:border-neo-magenta/60 hover:shadow-neon-magenta/40",
    outline: "bg-transparent text-neo-accent border border-neo-accent/50 hover:bg-neo-accent/10 hover:shadow-neon-cyan/30",
    ghost: "bg-transparent text-neo-muted hover:text-neo-accent hover:bg-white/5"
  };
  return /* @__PURE__ */ i.jsx("button", { className: x(n, o[t], s), ...e, children: c });
};
console.warn("JeiKei Legacy: NeoCard is deprecated. Use V2 components instead.");
const de = ({
  title: c,
  value: t,
  unit: s,
  trend: e,
  variant: n = "cyan",
  glass: o = !0,
  className: h,
  children: a,
  ...r
}) => {
  const g = n === "cyan" ? "shadow-neon-cyan/20 ring-1 ring-neo-accent/20" : "shadow-neon-magenta/20 ring-1 ring-neo-magenta/20", u = n === "cyan" ? "text-neo-accent" : "text-neo-magenta";
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: x(
        "relative overflow-hidden rounded-neo-lg p-6 transition-all duration-500 hover:scale-[1.02]",
        o && "glass-surface",
        g,
        h
      ),
      ...r,
      children: [
        /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-2", children: [
          c && /* @__PURE__ */ i.jsx("h3", { className: "text-[10px] uppercase tracking-[0.3em] text-neo-muted font-bold mb-1", children: c }),
          /* @__PURE__ */ i.jsxs("div", { className: "flex items-baseline gap-2", children: [
            t && /* @__PURE__ */ i.jsx("span", { className: x("text-4xl font-mono font-bold tracking-tighter drop-shadow-[0_0_12px_rgba(0,255,255,0.3)]", u), children: t }),
            s && /* @__PURE__ */ i.jsx("span", { className: "text-xs font-mono text-neo-muted lowercase", children: s })
          ] }),
          e && /* @__PURE__ */ i.jsxs("div", { className: x("flex items-center gap-1 text-[10px] font-mono font-bold mt-1", e.up ? "text-neo-accent" : "text-neo-magenta"), children: [
            /* @__PURE__ */ i.jsx("span", { children: e.up ? "↑" : "↓" }),
            /* @__PURE__ */ i.jsx("span", { children: e.value })
          ] })
        ] }),
        a
      ]
    }
  );
};
console.warn("JeiKei Legacy: NeoInput is deprecated. Use V2 components instead.");
const X = re.forwardRef(({ glow: c = !0, className: t, ...s }, e) => /* @__PURE__ */ i.jsx(
  "input",
  {
    ref: e,
    className: x(
      "w-full rounded-xl px-4 py-3 text-cyan-50 placeholder:text-cyan-200/50 transition",
      "bg-white/3 border border-cyan-300/35",
      "backdrop-blur-[18px]",
      c && "shadow-[0_0_18px_rgba(0,255,255,0.25)]",
      t
    ),
    ...s
  }
));
X.displayName = "NeoInput";
console.warn("JeiKei Legacy: NeoPanel is deprecated. Use V2 components instead.");
const he = ({
  title: c,
  actions: t,
  subdued: s,
  className: e,
  children: n,
  ...o
}) => /* @__PURE__ */ i.jsxs(
  "section",
  {
    className: x(
      "glass-surface overflow-hidden transition-all duration-500",
      s && "bg-neo-surface/40 backdrop-blur-sm",
      e
    ),
    ...o,
    children: [
      /* @__PURE__ */ i.jsxs("header", { className: "flex items-center justify-between px-6 py-5 border-b border-white/5 relative", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ i.jsx("div", { className: "w-1 h-8 bg-neo-accent shadow-neon-cyan rounded-full" }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("h4", { className: "text-xs font-bold text-neo-text uppercase tracking-[0.3em]", children: c }),
            /* @__PURE__ */ i.jsx("p", { className: "text-[9px] text-neo-muted uppercase tracking-[0.2em] font-medium", children: "Neural Monitor Unit" })
          ] })
        ] }),
        t && /* @__PURE__ */ i.jsx("div", { className: "flex items-center gap-2", children: t })
      ] }),
      /* @__PURE__ */ i.jsx("div", { className: "p-6", children: n })
    ]
  }
);
console.warn("JeiKei Legacy: NeoGrid is deprecated. Use V2 components instead.");
const ge = ({
  columns: c = { base: 1, md: 2, lg: 3 },
  gap: t = "md",
  className: s,
  children: e,
  ...n
}) => {
  const o = { sm: "gap-4", md: "gap-6", lg: "gap-8" }, h = `grid-cols-${c.base ?? 1}`, a = c.md ? `md:grid-cols-${c.md}` : "", r = c.lg ? `lg:grid-cols-${c.lg}` : "";
  return /* @__PURE__ */ i.jsx("div", { className: x("grid", h, a, r, o[t], s), ...n, children: e });
};
console.warn("JeiKei Legacy: NeoBadge is deprecated. Use V2 components instead.");
const pe = ({ variant: c = "accent", glow: t, className: s, children: e, ...n }) => {
  const o = {
    accent: "bg-neo-accent/15 text-neo-accent border border-neo-accent/40",
    glass: "bg-white/5 text-neo-text border border-white/10",
    danger: "bg-red-500/15 text-red-300 border border-red-400/40",
    warning: "bg-neo-amber/15 text-neo-amber border border-neo-amber/40",
    success: "bg-emerald-500/15 text-emerald-300 border border-emerald-400/40"
  };
  return /* @__PURE__ */ i.jsx(
    "span",
    {
      className: x(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide",
        o[c],
        t && "shadow-glow",
        s
      ),
      ...n,
      children: e
    }
  );
}, me = `precision mediump float;

attribute float aEnergy;
attribute vec3 position;

uniform float uTime;
uniform float uSize;

varying float vEnergy;

float hash(float n) { return fract(sin(n) * 43758.5453123); }

void main() {
  vEnergy = aEnergy;
  // light jitter to avoid perfect grid
  float jitter = (hash(position.x + position.y + uTime) - 0.5) * 0.8;
  vec3 pos = position + vec3(jitter, jitter, 0.0);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  float size = uSize * (0.8 + vEnergy * 1.6);
  gl_PointSize = size;
}
`, ue = `precision mediump float;

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
`, T = {
  dashboard: {
    nodeDensity: 0.55,
    glowIntensity: 1,
    pulseSpeed: 1,
    interactionStrength: 0.6,
    spacing: 90
  },
  "mission-control": {
    nodeDensity: 0.65,
    glowIntensity: 1.25,
    pulseSpeed: 1.2,
    interactionStrength: 0.8,
    spacing: 80
  },
  jarvis: {
    nodeDensity: 0.8,
    glowIntensity: 1.6,
    pulseSpeed: 1.6,
    interactionStrength: 1.1,
    spacing: 68
  },
  nebula: {
    nodeDensity: 0.95,
    glowIntensity: 2.2,
    pulseSpeed: 1.8,
    interactionStrength: 1.2,
    spacing: 55
  }
}, Y = (c = "nebula") => T[c] ?? T.nebula;
class fe {
  size;
  preset;
  nodes = [];
  velocities = [];
  energies = [];
  edges = [];
  lineEnergy = [];
  pulses = [];
  spatial = /* @__PURE__ */ new Map();
  cellSize = 50;
  constructor({ width: t, height: s, preset: e = "nebula" }) {
    this.size = { width: t, height: s }, this.setPreset(e), this.seed();
  }
  setPreset(t) {
    this.preset = Y(t);
  }
  seed() {
    const { width: t, height: s } = this.size, e = this.preset.spacing || 60, n = Math.max(6, Math.floor(t / e)), o = Math.max(4, Math.floor(s / e));
    this.nodes = [], this.velocities = [], this.energies = [], this.edges = [], this.lineEnergy = [];
    for (let a = 0; a < o; a++)
      for (let r = 0; r < n; r++) {
        const g = (r + 0.5) * e + (Math.random() - 0.5) * 12, u = (a + 0.5) * e + (Math.random() - 0.5) * 12;
        this.nodes.push([g, u, 0]), this.velocities.push([(Math.random() - 0.5) * 0.2, (Math.random() - 0.5) * 0.2, 0]), this.energies.push(Math.random() * 0.4);
      }
    const h = (a, r) => r * n + a;
    for (let a = 0; a < o; a++)
      for (let r = 0; r < n; r++) {
        const g = h(r, a);
        r < n - 1 && this.addEdge(g, h(r + 1, a)), a < o - 1 && this.addEdge(g, h(r, a + 1));
      }
    this.buildSpatial(e * 1.5);
  }
  resize(t, s) {
    this.size = { width: t, height: s }, this.seed();
  }
  addEdge(t, s) {
    this.edges.push([t, s]), this.lineEnergy.push(0.2);
  }
  buildSpatial(t) {
    this.cellSize = t, this.spatial = /* @__PURE__ */ new Map(), this.nodes.forEach(([s, e], n) => {
      const o = `${Math.floor(s / t)}:${Math.floor(e / t)}`;
      this.spatial.has(o) || this.spatial.set(o, []), this.spatial.get(o).push(n);
    });
  }
  neighborsAround(t, s) {
    const { cellSize: e } = this, n = Math.floor(t.x / e), o = Math.floor(t.y / e), h = [], a = Math.ceil(s / e);
    for (let r = -a; r <= a; r++)
      for (let g = -a; g <= a; g++) {
        const u = `${n + r}:${o + g}`, f = this.spatial.get(u);
        f && h.push(...f);
      }
    return h;
  }
  triggerPulse(t, s = 1.2) {
    const e = 0.35 / (this.preset.pulseSpeed || 1), n = (this.preset.spacing || 60) * 8;
    this.neighborsAround(t, n).forEach((h) => {
      const [a, r] = this.nodes[h], g = Math.hypot(a - t.x, r - t.y);
      if (g > n) return;
      const u = g * e, f = s * (1 - g / n * 0.4);
      this.pulses.push({
        node: h,
        at: performance.now() + u,
        intensity: f
      });
    });
  }
  microPulse(t) {
    this.triggerPulse(t, 0.4);
  }
  attract(t, s = this.preset.interactionStrength) {
    this.neighborsAround(t, (this.preset.spacing || 60) * 2.5).forEach((n) => {
      const o = this.nodes[n], h = this.velocities[n], a = t.x - o[0], r = t.y - o[1], g = Math.max(8, Math.hypot(a, r)), u = s / g * 0.35;
      h[0] += a / g * u, h[1] += r / g * u, this.energies[n] = Math.min(1, this.energies[n] + 0.02);
    });
  }
  update(t) {
    const s = performance.now();
    this.pulses = this.pulses.filter((e) => s >= e.at ? (this.energies[e.node] = Math.min(1, this.energies[e.node] + 0.5 * e.intensity), !1) : !0);
    for (let e = 0; e < this.nodes.length; e++) {
      const n = this.nodes[e], o = this.velocities[e];
      n[0] += o[0] * t, n[1] += o[1] * t, o[0] *= 0.95, o[1] *= 0.95, this.energies[e] = Math.max(0, this.energies[e] - t * 0.15);
    }
    this.edges.forEach(([e, n], o) => {
      const h = (this.energies[e] + this.energies[n]) * 0.5;
      this.lineEnergy[o] = h;
    });
  }
}
const H = ({
  preset: c = "nebula",
  followMouse: t = !0,
  reactToTyping: s = !0,
  reactToClick: e = !0,
  className: n
}) => {
  const o = y(null), h = y(), a = y(), r = y(), g = y(), u = y(!0);
  return ce(() => {
    const f = o.current;
    if (!f) return;
    const L = Y(c), m = new Z({ antialias: !0, alpha: !0 });
    m.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)), m.setClearColor(0, 0), m.domElement.className = "jk-neural-bg", f.appendChild(m.domElement), h.current = m;
    const E = new ee(), w = new te(-1, 1, 1, -1, 0.1, 10);
    w.position.z = 1;
    const P = () => {
      const { clientWidth: d, clientHeight: p } = f;
      m.setSize(d, p), w.left = -d / 2, w.right = d / 2, w.top = p / 2, w.bottom = -p / 2, w.updateProjectionMatrix(), u.current = !0;
    };
    P(), window.addEventListener("resize", P);
    const l = new fe({ width: m.domElement.width, height: m.domElement.height, preset: c });
    a.current = l;
    const M = new Float32Array(l.nodes.length * 3), C = new Float32Array(l.nodes.length), R = new S(M, 3), B = new S(C, 1), A = new W();
    A.setAttribute("position", R), A.setAttribute("aEnergy", B);
    const _ = new ne({
      vertexShader: me,
      fragmentShader: ue,
      transparent: !0,
      blending: q,
      depthWrite: !1,
      uniforms: {
        uTime: { value: 0 },
        uSize: { value: 6 * L.glowIntensity }
      }
    }), I = new se(A, _);
    r.current = I, E.add(I);
    const v = new Float32Array(l.edges.length * 2 * 3), U = new Float32Array(l.edges.length), N = new W();
    N.setAttribute("position", new S(v, 3)), N.setAttribute("alpha", new S(U, 1));
    const $ = new oe({
      color: new ie(63168),
      transparent: !0,
      opacity: 0.4,
      blending: q
    }), F = new ae(N, $);
    g.current = F, E.add(F);
    const Q = () => {
      l.nodes.forEach((d, p) => {
        M[p * 3] = d[0] - l.size.width / 2, M[p * 3 + 1] = d[1] - l.size.height / 2, M[p * 3 + 2] = d[2], C[p] = l.energies[p];
      }), R.needsUpdate = !0, B.needsUpdate = !0, l.edges.forEach(([d, p], b) => {
        const j = l.nodes[d], O = l.nodes[p], z = b * 6;
        v[z] = j[0] - l.size.width / 2, v[z + 1] = j[1] - l.size.height / 2, v[z + 3] = O[0] - l.size.width / 2, v[z + 4] = O[1] - l.size.height / 2, U[b] = l.lineEnergy[b];
      }), N.getAttribute("position").needsUpdate = !0, N.getAttribute("alpha").needsUpdate = !0, $.opacity = 0.2 + 0.5 * L.glowIntensity;
    };
    let G = performance.now(), k;
    const V = () => {
      const d = performance.now(), p = Math.min(0.05, (d - G) / 1e3);
      G = d, u.current && (l.resize(m.domElement.width, m.domElement.height), u.current = !1), l.update(p), _.uniforms.uTime.value = d * 1e-3, Q(), m.render(E, w), k = requestAnimationFrame(V);
    };
    k = requestAnimationFrame(V);
    const D = (d) => {
      const p = m.domElement.getBoundingClientRect(), b = d.clientX - p.left, j = d.clientY - p.top;
      l.attract({ x: b, y: j }), t && l.microPulse({ x: b, y: j });
    }, J = (d) => {
      if (!e) return;
      const p = m.domElement.getBoundingClientRect();
      l.triggerPulse({ x: d.clientX - p.left, y: d.clientY - p.top }, 1.2);
    }, K = () => {
      if (!s) return;
      const d = m.domElement.getBoundingClientRect();
      l.triggerPulse(
        { x: Math.random() * d.width, y: Math.random() * d.height },
        0.8
      );
    };
    return window.addEventListener("mousemove", D), window.addEventListener("click", J), window.addEventListener("keydown", K), () => {
      cancelAnimationFrame(k), window.removeEventListener("resize", P), window.removeEventListener("mousemove", D), window.removeEventListener("click", J), window.removeEventListener("keydown", K), E.clear(), m.dispose(), f.contains(m.domElement) && f.removeChild(m.domElement);
    };
  }, [c, t, s, e]), /* @__PURE__ */ i.jsx("div", { ref: o, className: n, style: { position: "absolute", inset: 0 } });
}, xe = ({ children: c }) => /* @__PURE__ */ i.jsxs("div", { className: "relative min-h-screen bg-neo-bg text-neo-text overflow-hidden font-outfit", children: [
  /* @__PURE__ */ i.jsx(H, { preset: "nebula", className: "opacity-40" }),
  /* @__PURE__ */ i.jsx("div", { className: "scanlines-overlay pointer-events-none" }),
  /* @__PURE__ */ i.jsxs("div", { className: "fixed top-8 left-10 z-50 flex items-center gap-2 pointer-events-none opacity-30", children: [
    /* @__PURE__ */ i.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-neo-accent animate-pulse shadow-neon-cyan" }),
    /* @__PURE__ */ i.jsx("span", { className: "text-[9px] uppercase tracking-[0.4em] font-bold", children: "Neural Sync: Active" })
  ] }),
  /* @__PURE__ */ i.jsxs("div", { className: "fixed bottom-8 right-10 z-50 flex flex-col items-end gap-1 pointer-events-none opacity-30 font-mono", children: [
    /* @__PURE__ */ i.jsx("span", { className: "text-[8px] uppercase tracking-[0.3em] font-medium", children: "Core Integrity // 99.8%" }),
    /* @__PURE__ */ i.jsx("span", { className: "text-[8px] uppercase tracking-[0.3em] font-medium text-neo-magenta", children: "Signal Strength // Optimized" })
  ] }),
  /* @__PURE__ */ i.jsx("div", { className: "relative z-10 px-10 py-16 min-h-screen", children: c })
] }), ye = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NeoBadge: pe,
  NeoButton: le,
  NeoCard: de,
  NeoGrid: ge,
  NeoInput: X,
  NeoLayout: xe,
  NeoPanel: he,
  NeuralGrid: H
}, Symbol.toStringTag, { value: "Module" }));
export {
  pe as N,
  le as a,
  de as b,
  ge as c,
  X as d,
  xe as e,
  he as f,
  H as g,
  ye as i
};
//# sourceMappingURL=index-DoOoIwmc.js.map
