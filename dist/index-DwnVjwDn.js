import { j as n, c as j, W as D, S as U, O as Y, a as R, b as J, C as K, A as L, P as q, L as $, d as Q, B as z } from "./three.module-wI8zIvu6.js";
import { createContext as X, useContext as Z, useRef as B, useState as H, useEffect as C, useMemo as W } from "react";
const _ = X(void 0), N = () => {
  const r = Z(_);
  if (!r)
    throw new Error("useSystem must be used within a NeuralProvider");
  return r;
}, ee = ({
  children: r,
  variant: e = "primary",
  size: i = "md",
  className: o,
  onClick: s,
  ...a
}) => {
  const { engine: t } = N(), h = (f) => {
    if (t) {
      const u = f.currentTarget.getBoundingClientRect(), E = u.left + u.width / 2, S = u.top + u.height / 2;
      t.emitPulse(E, S, 1.25);
    }
    s && s(f);
  }, c = "jk-neo-button relative inline-flex items-center justify-center overflow-hidden transition-all duration-300 font-bold uppercase tracking-widest", l = {
    primary: "jk-neon-primary bg-neo-accent text-black font-bold uppercase tracking-[0.2em] shadow-neon-primary active:scale-95",
    secondary: "jk-glass text-white/90 hover:bg-white/5 border-white/5 active:scale-95",
    outline: "border border-white/20 text-white/50 hover:text-white hover:border-white/40 bg-transparent active:scale-95",
    ghost: "text-white/40 hover:text-white hover:bg-white/5 bg-transparent"
  }, d = {
    sm: "px-4 py-1.5 text-[8px]",
    md: "px-8 py-2.5 text-[10px]",
    lg: "px-12 py-4 text-[12px] font-black"
  };
  return /* @__PURE__ */ n.jsxs(
    "button",
    {
      className: j(c, l[e], d[i], o),
      onClick: h,
      ...a,
      children: [
        /* @__PURE__ */ n.jsx("span", { className: "relative z-10", children: r }),
        /* @__PURE__ */ n.jsx("div", { className: "absolute inset-0 bg-white/10 opacity-0 active:opacity-100 transition-opacity" })
      ]
    }
  );
}, te = ({
  title: r,
  value: e,
  trend: i,
  children: o,
  className: s,
  glow: a = !0
}) => /* @__PURE__ */ n.jsxs("div", { className: j(
  "jk-card-v2 jk-glass relative group overflow-hidden transition-all duration-500 rounded-[var(--neo-radius)] px-7 py-6 cursor-default border-white/5 active:scale-[0.99]",
  a && "hover:border-white/20 hover:shadow-[0_0_40px_-10px_var(--neo-glow)]",
  s
), children: [
  /* @__PURE__ */ n.jsx("div", { className: "absolute top-0 left-0 w-32 h-32 bg-white/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" }),
  /* @__PURE__ */ n.jsxs("div", { className: "relative z-10 flex flex-col space-y-4", children: [
    r && /* @__PURE__ */ n.jsx("h3", { className: "jk-hud-heading text-[10px] tracking-[0.25em] text-white/50 uppercase group-hover:text-neo-accent transition-colors duration-500", children: r }),
    e !== void 0 && /* @__PURE__ */ n.jsxs("div", { className: "flex items-baseline gap-3", children: [
      /* @__PURE__ */ n.jsx("span", { className: "text-4xl font-bold tracking-tighter text-white group-hover:text-neo-accent transition-colors duration-500", children: e }),
      i && /* @__PURE__ */ n.jsx("span", { className: j(
        "jk-data-label text-[9px] uppercase font-bold px-2 py-0.5 rounded-[2px] transition-all duration-500",
        i.direction === "up" ? "text-green-400 bg-green-400/10 group-hover:bg-green-400/20" : i.direction === "down" ? "text-red-400 bg-red-400/10 group-hover:bg-red-400/20" : "text-neo-accent bg-neo-accent/10 group-hover:bg-neo-accent/20"
      ), children: i.value })
    ] }),
    /* @__PURE__ */ n.jsx("div", { className: "text-sm text-white/60 group-hover:text-white/80 transition-colors duration-500", children: o })
  ] }),
  /* @__PURE__ */ n.jsx("div", { className: "absolute -bottom-6 -right-6 w-24 h-24 bg-neo-accent/5 rounded-full blur-2xl group-hover:bg-neo-accent/20 transition-all duration-700" }),
  /* @__PURE__ */ n.jsx("div", { className: "absolute top-0 right-0 w-8 h-[1px] bg-white/10 group-hover:bg-neo-accent/30 transition-colors" }),
  /* @__PURE__ */ n.jsx("div", { className: "absolute top-0 right-0 h-4 w-[1px] bg-white/10 group-hover:bg-neo-accent/30 transition-colors" })
] }), ne = ({
  label: r,
  glow: e = !0,
  className: i,
  onFocus: o,
  onChange: s,
  ...a
}) => {
  const { engine: t } = N(), h = (l) => {
    if (t) {
      const d = l.currentTarget.getBoundingClientRect();
      t.emitPulse(d.left + d.width / 2, d.top + d.height / 2, 0.8);
    }
    o && o(l);
  }, c = (l) => {
    if (t) {
      const d = l.currentTarget.getBoundingClientRect();
      t.emitPulse(d.left + d.width / 2, d.top + d.height / 2, 0.4);
    }
    s && s(l);
  };
  return /* @__PURE__ */ n.jsxs("div", { className: "jk-input-v2 flex flex-col space-y-3 group w-full", children: [
    r && /* @__PURE__ */ n.jsx("label", { className: "jk-hud-heading text-[10px] tracking-[0.25em] text-white/40 uppercase pl-1", children: r }),
    /* @__PURE__ */ n.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          onFocus: h,
          onChange: c,
          className: j(
            "w-full jk-glass bg-white/5 border-white/10 rounded-[var(--neo-radius)] px-5 py-4 text-white text-sm outline-none transition-all duration-300",
            "placeholder:text-white/20",
            e && "focus:border-neo-accent/50 focus:shadow-[0_0_30px_-5px_var(--neo-glow)] focus:bg-white/[0.08]",
            i
          ),
          ...a
        }
      ),
      /* @__PURE__ */ n.jsx("div", { className: "absolute bottom-0 left-4 right-4 h-[1px] bg-neo-accent scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 shadow-[0_0_15px_var(--neo-glow)]" })
    ] })
  ] });
}, ie = `/**
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
`, se = `varying float vEnergy;
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
  float energyBoost = vEnergy * 2.0;
  vec3 finalColor = mix(uAccent, vec3(1.0), vEnergy * 0.5);
  
  gl_FragColor = vec4(finalColor, alpha * (0.5 + energyBoost) * uGlowIntensity);
}
`, O = () => {
  const { engine: r, theme: e } = N(), i = B(null), o = B(), [s, a] = H(0);
  return C(() => {
    if (!i.current || !r) return;
    const t = new D({
      antialias: !0,
      alpha: !0,
      powerPreference: "high-performance"
    });
    t.setPixelRatio(Math.min(window.devicePixelRatio, 2)), t.setSize(window.innerWidth, window.innerHeight), t.setClearColor(0, 0), i.current.appendChild(t.domElement), o.current = t;
    const h = new U(), c = new Y(
      -window.innerWidth / 2,
      window.innerWidth / 2,
      window.innerHeight / 2,
      -window.innerHeight / 2,
      0.1,
      1e3
    );
    c.position.z = 10;
    const l = new R(), d = new J({
      vertexShader: ie,
      fragmentShader: se,
      transparent: !0,
      blending: L,
      depthWrite: !1,
      uniforms: {
        uTime: { value: 0 },
        uAccent: { value: new K(e === "mission" ? 15907131 : 3463423) },
        uGlowIntensity: { value: 1.2 },
        uSize: { value: 5.5 }
      }
    }), f = new q(l, d);
    h.add(f);
    const u = new R(), E = new $({
      transparent: !0,
      blending: L,
      depthWrite: !1,
      color: e === "mission" ? 15907131 : 3463423,
      opacity: 0.12
    }), S = new Q(u, E);
    h.add(S);
    let k = 0, A = performance.now();
    const G = r.subscribe((V) => {
      const { nodes: x, edges: P } = V, b = new Float32Array(x.length * 3), T = new Float32Array(x.length);
      x.forEach((g, m) => {
        b[m * 3] = g.position[0] - window.innerWidth / 2, b[m * 3 + 1] = g.position[1] - window.innerHeight / 2, b[m * 3 + 2] = g.position[2], T[m] = g.energy;
      }), l.setAttribute("position", new z(b, 3)), l.setAttribute("aEnergy", new z(T, 1));
      const p = new Float32Array(P.length * 6);
      P.forEach((g, m) => {
        const v = x[g.from], y = x[g.to];
        if (v && y) {
          const w = m * 6;
          p[w] = v.position[0] - window.innerWidth / 2, p[w + 1] = v.position[1] - window.innerHeight / 2, p[w + 2] = v.position[2], p[w + 3] = y.position[0] - window.innerWidth / 2, p[w + 4] = y.position[1] - window.innerHeight / 2, p[w + 5] = y.position[2];
        }
      }), u.setAttribute("position", new z(p, 3)), d.uniforms.uTime.value = performance.now() * 1e-3, t.render(h, c), k++;
      const I = performance.now();
      I - A > 1e3 && (a(k), k = 0, A = I);
    }), M = () => {
      t.setSize(window.innerWidth, window.innerHeight), c.left = -window.innerWidth / 2, c.right = window.innerWidth / 2, c.top = window.innerHeight / 2, c.bottom = -window.innerHeight / 2, c.updateProjectionMatrix();
    };
    return window.addEventListener("resize", M), () => {
      G(), window.removeEventListener("resize", M), t.dispose(), i.current?.contains(t.domElement) && i.current.removeChild(t.domElement);
    };
  }, [r, e]), /* @__PURE__ */ n.jsxs("div", { ref: i, className: "fixed inset-0 -z-10 bg-[#020202] pointer-events-none", children: [
    /* @__PURE__ */ n.jsx("div", { className: "absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" }),
    /* @__PURE__ */ n.jsxs("div", { className: "absolute top-4 right-6 font-mono text-[9px] tracking-widest text-neo-accent opacity-30 select-none", children: [
      "SYSTEM_LOAD: ",
      s,
      " FPS // ",
      e.toUpperCase(),
      "_MODE"
    ] })
  ] });
}, oe = ({ children: r, showScanlines: e = !0 }) => /* @__PURE__ */ n.jsxs("div", { className: "jk-layout-v2 relative min-h-screen bg-black text-white font-outfit selection:bg-neo-accent selection:text-black", children: [
  e && /* @__PURE__ */ n.jsx("div", { className: "jk-scanline" }),
  /* @__PURE__ */ n.jsx(O, {}),
  /* @__PURE__ */ n.jsx("div", { className: "fixed inset-0 pointer-events-none border-[1px] border-white/5 z-[99]" }),
  /* @__PURE__ */ n.jsxs("div", { className: "relative z-10", children: [
    /* @__PURE__ */ n.jsxs("header", { className: "sticky top-0 z-50 w-full px-8 py-4 bg-black/40 backdrop-blur-xl border-b border-white/5 flex justify-between items-center", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ n.jsx("span", { className: "jk-hud-heading text-neo-accent", children: "JK_SYSTEM_v2.0" }),
        /* @__PURE__ */ n.jsxs("div", { className: "flex gap-2 items-center", children: [
          /* @__PURE__ */ n.jsx("span", { className: "w-1 h-1 rounded-full bg-green-500 animate-pulse" }),
          /* @__PURE__ */ n.jsx("span", { className: "jk-data-label opacity-40", children: "PROTOCOL_LIVING_INTERFACE_ACTIVE" })
        ] })
      ] }),
      /* @__PURE__ */ n.jsx("div", { className: "flex gap-6 items-center" })
    ] }),
    /* @__PURE__ */ n.jsx("main", { className: "mx-auto max-w-[1600px] p-8 min-h-[calc(100vh-80px)]", children: r }),
    /* @__PURE__ */ n.jsxs("footer", { className: "w-full px-8 py-4 border-t border-white/5 flex justify-between items-center", children: [
      /* @__PURE__ */ n.jsx("span", { className: "jk-data-label opacity-30", children: "© 2026 JEIKEI_LABS // ALL_SYSTEMS_GO" }),
      /* @__PURE__ */ n.jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ n.jsx("span", { className: "jk-data-label text-cyan-500/40", children: "LATENCY: 12ms" }),
        /* @__PURE__ */ n.jsx("span", { className: "jk-data-label text-magenta-500/40", children: "THROUGHPUT: 4.8gbps" })
      ] })
    ] })
  ] })
] });
class F {
  nodes = [];
  edges = [];
  pulses = [];
  adjacency = /* @__PURE__ */ new Map();
  listeners = /* @__PURE__ */ new Set();
  width;
  height;
  density = 45;
  // Pixels between nodes
  constructor(e, i) {
    this.width = e, this.height = i, this.initialize();
  }
  initialize() {
    this.nodes = [], this.edges = [], this.pulses = [], this.adjacency.clear();
    const e = Math.ceil(this.width / this.density) + 1, i = Math.ceil(this.height / this.density) + 1;
    for (let s = 0; s < i; s++)
      for (let a = 0; a < e; a++) {
        const t = s * e + a, h = a * this.density + (Math.random() - 0.5) * 20, c = s * this.density + (Math.random() - 0.5) * 20;
        this.nodes.push({
          id: t,
          position: [h, c, 0],
          velocity: [0, 0, 0],
          energy: 0
        }), this.adjacency.set(t, []);
      }
    const o = (s, a) => {
      const t = 0.7 + Math.random() * 0.3;
      this.edges.push({ from: s, to: a, weight: t }), this.adjacency.get(s)?.push(a), this.adjacency.get(a)?.push(s);
    };
    for (let s = 0; s < i; s++)
      for (let a = 0; a < e; a++) {
        const t = s * e + a;
        a < e - 1 && o(t, t + 1), s < i - 1 && o(t, t + e), a < e - 1 && s < i - 1 && Math.random() > 0.7 && o(t, t + e + 1);
      }
  }
  update(e) {
    const i = [];
    for (const o of this.pulses) {
      const s = this.nodes[o.nodeId];
      if (s && (s.energy = Math.min(s.energy + o.strength, 1.5), o.life > 1 && o.strength > 0.1)) {
        const a = this.adjacency.get(o.nodeId) || [];
        for (const t of a)
          i.push({
            nodeId: t,
            strength: o.strength * 0.65,
            life: o.life - 1
          });
      }
    }
    this.nodes.forEach((o) => {
      o.energy *= 0.94, o.energy < 1e-3 && (o.energy = 0);
    }), this.pulses = i.length > 400 ? i.sort((o, s) => s.strength - o.strength).slice(0, 400) : i, this.notify();
  }
  emitPulse(e, i, o = 1) {
    let s = -1, a = 1 / 0;
    for (const t of this.nodes) {
      const h = t.position[0] - e, c = t.position[1] - i, l = h * h + c * c;
      l < a && (a = l, s = t.id);
    }
    s !== -1 && a < 6e4 && this.pulses.push({
      nodeId: s,
      strength: o,
      life: 6
      // propagation steps
    });
  }
  getState() {
    return {
      nodes: this.nodes,
      edges: this.edges,
      pulses: this.pulses,
      totalEnergy: this.nodes.reduce((e, i) => e + i.energy, 0)
    };
  }
  notify() {
    const e = this.getState();
    this.listeners.forEach((i) => i(e));
  }
  subscribe(e) {
    return this.listeners.add(e), () => this.listeners.delete(e);
  }
  resize(e, i) {
    this.width = e, this.height = i, this.initialize();
  }
  destroy() {
    this.listeners.clear(), this.nodes = [], this.edges = [], this.pulses = [], this.adjacency.clear();
  }
}
const ae = {
  mission: {
    accent: "#f2b93b",
    accentStrong: "#ffffff",
    bg: "#05070a",
    surface: "#0b0f15",
    magenta: "#ff00ff",
    cyan: "#00ffff",
    muted: "#4a5b7c",
    glow: "rgba(242, 185, 59, 0.45)"
  },
  nebula: {
    accent: "#34d8ff",
    accentStrong: "#ffffff",
    bg: "#02040a",
    surface: "#0b0f14",
    magenta: "#ff2bd6",
    cyan: "#34d8ff",
    muted: "#4a5b7c",
    glow: "rgba(52, 216, 255, 0.35)"
  }
}, re = (r) => {
  const e = ae[r];
  return {
    "--neo-accent": e.accent,
    "--neo-accent-strong": e.accentStrong,
    "--neo-bg": e.bg,
    "--neo-surface": e.surface,
    "--neo-magenta": e.magenta,
    "--neo-cyan": e.cyan,
    "--neo-muted": e.muted,
    "--neo-glow": e.glow
  };
}, ce = ({ children: r }) => {
  const [e, i] = H("nebula"), o = W(() => {
    if (typeof window > "u") return null;
    const a = window.innerWidth || 1920, t = window.innerHeight || 1080;
    return new F(a, t);
  }, []);
  C(() => {
    if (!o) return;
    let a = performance.now(), t;
    const h = (l) => {
      const d = (l - a) / 1e3;
      a = l;
      const f = Math.min(d, 0.1);
      o.update(f), t = requestAnimationFrame(h);
    }, c = () => {
      o.resize(window.innerWidth, window.innerHeight);
    };
    return window.addEventListener("resize", c), t = requestAnimationFrame(h), () => {
      window.removeEventListener("resize", c), cancelAnimationFrame(t), o.destroy();
    };
  }, [o]), C(() => {
    document.documentElement.setAttribute("data-theme", e);
  }, [e]);
  const s = W(() => re(e), [e]);
  return /* @__PURE__ */ n.jsx(_.Provider, { value: { engine: o, theme: e, setTheme: i }, children: /* @__PURE__ */ n.jsx("div", { className: `jk-system-root jk-theme-${e}`, style: s, children: r }) });
}, he = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NeoButton: ee,
  NeoCard: te,
  NeoInput: ne,
  NeoLayout: oe,
  NeuralBackground: O,
  NeuralEngine: F,
  SystemContext: _,
  SystemProvider: ce,
  useSystem: N
}, Symbol.toStringTag, { value: "Module" }));
export {
  ee as N,
  _ as S,
  te as a,
  ne as b,
  oe as c,
  O as d,
  F as e,
  ce as f,
  he as i,
  N as u
};
//# sourceMappingURL=index-DwnVjwDn.js.map
