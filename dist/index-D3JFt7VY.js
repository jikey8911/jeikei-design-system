import { j as s, c as C, W as re, S as ce, O as le, a as D, b as J, C as K, A as Y, P as de, d as he, V as ue, B as z } from "./three.module-Cxqx3TnH.js";
import { createContext as ge, useContext as pe, useRef as $, useState as Q, useEffect as F, useMemo as q } from "react";
const L = ge(void 0), N = () => {
  const c = pe(L);
  if (!c)
    throw new Error("useSystem must be used within a NeuralProvider");
  return c;
}, fe = ({
  children: c,
  variant: t = "primary",
  size: o = "md",
  className: e,
  onClick: n,
  ...a
}) => {
  const { engine: i } = N(), d = (u) => {
    if (i) {
      const v = u.currentTarget.getBoundingClientRect(), b = v.left + v.width / 2, E = v.top + v.height / 2;
      i.emitPulse(b, E, 1.25);
    }
    n && n(u);
  }, h = "jk-neo-button relative inline-flex items-center justify-center overflow-hidden transition-all duration-300 font-bold uppercase tracking-widest", r = {
    primary: "jk-neon-primary bg-neo-accent text-black font-bold uppercase tracking-[0.2em] shadow-neon-primary active:scale-95",
    secondary: "jk-glass text-white/90 hover:bg-white/5 border-white/5 active:scale-95",
    outline: "border border-white/20 text-white/50 hover:text-white hover:border-white/40 bg-transparent active:scale-95",
    ghost: "text-white/40 hover:text-white hover:bg-white/5 bg-transparent"
  }, l = {
    sm: "px-4 py-1.5 text-[8px]",
    md: "px-8 py-2.5 text-[10px]",
    lg: "px-12 py-4 text-[12px] font-black"
  };
  return /* @__PURE__ */ s.jsxs(
    "button",
    {
      className: C(h, r[t], l[o], e),
      onClick: d,
      ...a,
      children: [
        /* @__PURE__ */ s.jsx("span", { className: "relative z-10", children: c }),
        /* @__PURE__ */ s.jsx("div", { className: "absolute inset-0 bg-white/10 opacity-0 active:opacity-100 transition-opacity" })
      ]
    }
  );
}, me = ({
  title: c,
  value: t,
  trend: o,
  children: e,
  className: n,
  glow: a = !0
}) => {
  const { engine: i } = N(), d = (h) => {
    if (i) {
      const r = h.currentTarget.getBoundingClientRect(), l = r.left + r.width / 2, u = r.top + r.height / 2;
      i.emitPulse(l, u, 0.4);
    }
  };
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      onMouseEnter: d,
      className: C(
        "jk-card-v2 jk-glass relative group overflow-hidden transition-all duration-500 rounded-[var(--neo-radius)] px-7 py-6 cursor-default border-white/5 active:scale-[0.99]",
        a && "hover:border-white/20 hover:shadow-[0_0_40px_-10px_var(--neo-glow)]",
        n
      ),
      children: [
        /* @__PURE__ */ s.jsx("div", { className: "absolute top-0 left-0 w-32 h-32 bg-white/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" }),
        /* @__PURE__ */ s.jsxs("div", { className: "relative z-10 flex flex-col space-y-4", children: [
          c && /* @__PURE__ */ s.jsx("h3", { className: "jk-hud-heading text-[10px] tracking-[0.25em] text-white/50 uppercase group-hover:text-neo-accent transition-colors duration-500", children: c }),
          t !== void 0 && /* @__PURE__ */ s.jsxs("div", { className: "flex items-baseline gap-3", children: [
            /* @__PURE__ */ s.jsx("span", { className: "text-4xl font-bold tracking-tighter text-white group-hover:text-neo-accent transition-colors duration-500", children: t }),
            o && /* @__PURE__ */ s.jsx("span", { className: C(
              "jk-data-label text-[9px] uppercase font-bold px-2 py-0.5 rounded-[2px] transition-all duration-500",
              o.direction === "up" ? "text-green-400 bg-green-400/10 group-hover:bg-green-400/20" : o.direction === "down" ? "text-red-400 bg-red-400/10 group-hover:bg-red-400/20" : "text-neo-accent bg-neo-accent/10 group-hover:bg-neo-accent/20"
            ), children: o.value })
          ] }),
          /* @__PURE__ */ s.jsx("div", { className: "text-sm text-white/60 group-hover:text-white/80 transition-colors duration-500", children: e })
        ] }),
        /* @__PURE__ */ s.jsx("div", { className: "absolute -bottom-6 -right-6 w-24 h-24 bg-neo-accent/5 rounded-full blur-2xl group-hover:bg-neo-accent/20 transition-all duration-700" }),
        /* @__PURE__ */ s.jsx("div", { className: "absolute top-0 right-0 w-8 h-[1px] bg-white/10 group-hover:bg-neo-accent/30 transition-colors" }),
        /* @__PURE__ */ s.jsx("div", { className: "absolute top-0 right-0 h-4 w-[1px] bg-white/10 group-hover:bg-neo-accent/30 transition-colors" })
      ]
    }
  );
}, ve = ({
  label: c,
  glow: t = !0,
  className: o,
  onFocus: e,
  onChange: n,
  ...a
}) => {
  const { engine: i } = N(), d = (r) => {
    if (i) {
      const l = r.currentTarget.getBoundingClientRect();
      i.emitPulse(l.left + l.width / 2, l.top + l.height / 2, 0.8);
    }
    e && e(r);
  }, h = (r) => {
    if (i) {
      const l = r.currentTarget.getBoundingClientRect();
      i.emitPulse(l.left + l.width / 2, l.top + l.height / 2, 0.4);
    }
    n && n(r);
  };
  return /* @__PURE__ */ s.jsxs("div", { className: "jk-input-v2 flex flex-col space-y-3 group w-full", children: [
    c && /* @__PURE__ */ s.jsx("label", { className: "jk-hud-heading text-[10px] tracking-[0.25em] text-white/40 uppercase pl-1", children: c }),
    /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ s.jsx(
        "input",
        {
          onFocus: d,
          onChange: h,
          className: C(
            "w-full jk-glass bg-white/5 border-white/10 rounded-[var(--neo-radius)] px-5 py-4 text-white text-sm outline-none transition-all duration-300",
            "placeholder:text-white/20",
            t && "focus:border-neo-accent/50 focus:shadow-[0_0_30px_-5px_var(--neo-glow)] focus:bg-white/[0.08]",
            o
          ),
          ...a
        }
      ),
      /* @__PURE__ */ s.jsx("div", { className: "absolute bottom-0 left-4 right-4 h-[1px] bg-neo-accent scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 shadow-[0_0_15px_var(--neo-glow)]" })
    ] })
  ] });
}, xe = `/**
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
`, we = `varying float vEnergy;
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
`, be = `/**
 * JEIKEI NEURAL V2 - Edge Vertex Shader
 */
attribute float aActive;
uniform float uTime;

varying float vActive;

void main() {
  vActive = aActive;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`, ye = `/**
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
`, X = ({
  mode: c = "fullscreen",
  className: t = ""
}) => {
  const { engine: o, theme: e } = N(), n = $(null), a = $(), [i, d] = Q(0);
  F(() => {
    if (!n.current || !o) return;
    const r = n.current, l = c === "fullscreen", u = new re({
      antialias: !0,
      alpha: !0,
      powerPreference: "high-performance"
    });
    u.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    const v = () => {
      const g = l ? window.innerWidth : r.clientWidth, f = l ? window.innerHeight : r.clientHeight;
      return u.setSize(g, f), { width: g, height: f };
    }, b = v();
    u.setClearColor(0, 0), r.appendChild(u.domElement), a.current = u;
    const E = new ce(), x = new le(
      -b.width / 2,
      b.width / 2,
      b.height / 2,
      -b.height / 2,
      0.1,
      1e3
    );
    x.position.z = 10;
    const M = new D(), O = new J({
      vertexShader: xe,
      fragmentShader: we,
      transparent: !0,
      blending: Y,
      depthWrite: !1,
      uniforms: {
        uTime: { value: 0 },
        uAccent: { value: new K(e === "mission" ? 15907131 : 3463423) },
        uGlowIntensity: { value: 2.5 },
        uSize: { value: l ? 10 : 6 }
      }
    }), ee = new de(M, O);
    E.add(ee);
    const I = new D(), B = new J({
      vertexShader: be,
      fragmentShader: ye,
      transparent: !0,
      blending: Y,
      depthWrite: !1,
      uniforms: {
        uTime: { value: 0 },
        uAccent: { value: new K(e === "mission" ? 15907131 : 3463423) }
      }
    }), te = new he(I, B);
    E.add(te);
    let P = 0, V = performance.now();
    const ne = o.subscribe((g) => {
      const { nodes: f, edges: T, activeEdges: se } = g, y = u.getSize(new ue()), S = new Float32Array(f.length * 3), U = new Float32Array(f.length);
      f.forEach((p, m) => {
        S[m * 3] = p.position[0] - y.x / 2, S[m * 3 + 1] = p.position[1] - y.y / 2, S[m * 3 + 2] = p.position[2], U[m] = p.energy;
      }), M.setAttribute("position", new z(S, 3)), M.setAttribute("aEnergy", new z(U, 1));
      const w = new Float32Array(T.length * 6), R = new Float32Array(T.length * 2);
      T.forEach((p, m) => {
        const A = f[p.from], k = f[p.to];
        if (A && k) {
          const j = m * 6;
          w[j] = A.position[0] - y.x / 2, w[j + 1] = A.position[1] - y.y / 2, w[j + 2] = A.position[2], w[j + 3] = k.position[0] - y.x / 2, w[j + 4] = k.position[1] - y.y / 2, w[j + 5] = k.position[2];
          const ie = [p.from, p.to].sort((oe, ae) => oe - ae).join("-"), H = se.has(ie) ? 1 : 0;
          R[m * 2] = H, R[m * 2 + 1] = H;
        }
      }), I.setAttribute("position", new z(w, 3)), I.setAttribute("aActive", new z(R, 1)), O.uniforms.uTime.value = performance.now() * 1e-3, B.uniforms.uTime.value = performance.now() * 1e-3, u.render(E, x), P++;
      const W = performance.now();
      W - V > 1e3 && (d(P), P = 0, V = W);
    }), _ = () => {
      const g = v();
      x.left = -g.width / 2, x.right = g.width / 2, x.top = g.height / 2, x.bottom = -g.height / 2, x.updateProjectionMatrix();
    }, G = new ResizeObserver(() => {
      _();
    });
    return l ? window.addEventListener("resize", _) : G.observe(r), () => {
      ne(), window.removeEventListener("resize", _), G.disconnect(), u.dispose(), r.contains(u.domElement) && r.removeChild(u.domElement);
    };
  }, [o, e, c]);
  const h = c === "fullscreen" ? "fixed inset-0 -z-10 bg-[#020202] pointer-events-none" : "relative w-full h-full min-h-[300px] overflow-hidden rounded-xl border border-white/5 jk-glass pointer-events-none";
  return /* @__PURE__ */ s.jsxs("div", { ref: n, className: `${h} ${t}`, children: [
    /* @__PURE__ */ s.jsx("div", { className: "absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" }),
    c === "fullscreen" && /* @__PURE__ */ s.jsxs("div", { className: "absolute top-4 right-6 font-mono text-[9px] tracking-widest text-neo-accent opacity-30 select-none", children: [
      "SYSTEM_LOAD: ",
      i,
      " FPS // ",
      e.toUpperCase(),
      "_MODE"
    ] })
  ] });
}, je = ({ children: c, showScanlines: t = !0 }) => /* @__PURE__ */ s.jsxs("div", { className: "jk-layout-v2 relative min-h-screen bg-black text-white font-outfit selection:bg-neo-accent selection:text-black", children: [
  t && /* @__PURE__ */ s.jsx("div", { className: "jk-scanline" }),
  /* @__PURE__ */ s.jsx(X, {}),
  /* @__PURE__ */ s.jsx("div", { className: "fixed inset-0 bg-black/40 pointer-events-none z-0" }),
  /* @__PURE__ */ s.jsx("div", { className: "fixed inset-0 pointer-events-none border-[1px] border-white/5 z-[99]" }),
  /* @__PURE__ */ s.jsxs("div", { className: "relative z-10", children: [
    /* @__PURE__ */ s.jsxs("header", { className: "sticky top-0 z-50 w-full px-8 py-4 bg-black/40 backdrop-blur-xl border-b border-white/5 flex justify-between items-center", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ s.jsx("span", { className: "jk-hud-heading text-neo-accent", children: "JK_SYSTEM_v2.0" }),
        /* @__PURE__ */ s.jsxs("div", { className: "flex gap-2 items-center", children: [
          /* @__PURE__ */ s.jsx("span", { className: "w-1 h-1 rounded-full bg-green-500 animate-pulse" }),
          /* @__PURE__ */ s.jsx("span", { className: "jk-data-label opacity-40", children: "PROTOCOL_LIVING_INTERFACE_ACTIVE" })
        ] })
      ] }),
      /* @__PURE__ */ s.jsx("div", { className: "flex gap-6 items-center" })
    ] }),
    /* @__PURE__ */ s.jsx("main", { className: "mx-auto max-w-[1600px] p-8 min-h-[calc(100vh-80px)]", children: c }),
    /* @__PURE__ */ s.jsxs("footer", { className: "w-full px-8 py-4 border-t border-white/5 flex justify-between items-center", children: [
      /* @__PURE__ */ s.jsx("span", { className: "jk-data-label opacity-30", children: "© 2026 JEIKEI_LABS // ALL_SYSTEMS_GO" }),
      /* @__PURE__ */ s.jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ s.jsx("span", { className: "jk-data-label text-cyan-500/40", children: "LATENCY: 12ms" }),
        /* @__PURE__ */ s.jsx("span", { className: "jk-data-label text-magenta-500/40", children: "THROUGHPUT: 4.8gbps" })
      ] })
    ] })
  ] })
] });
class Z {
  nodes = [];
  edges = [];
  pulses = [];
  adjacency = /* @__PURE__ */ new Map();
  activeEdges = /* @__PURE__ */ new Set();
  listeners = /* @__PURE__ */ new Set();
  width;
  height;
  density = 45;
  // Pixels between nodes
  constructor(t, o) {
    this.width = t, this.height = o, this.initialize();
  }
  initialize() {
    this.nodes = [], this.edges = [], this.pulses = [], this.activeEdges.clear(), this.adjacency.clear();
    const t = Math.ceil(this.width / this.density) + 1, o = Math.ceil(this.height / this.density) + 1;
    for (let n = 0; n < o; n++)
      for (let a = 0; a < t; a++) {
        const i = n * t + a, d = a * this.density + (Math.random() - 0.5) * 20, h = n * this.density + (Math.random() - 0.5) * 20, r = (Math.random() - 0.5) * 10, l = (Math.random() - 0.5) * 10;
        this.nodes.push({
          id: i,
          position: [d, h, 0],
          velocity: [r, l, 0],
          energy: 0
        }), this.adjacency.set(i, []);
      }
    const e = (n, a) => {
      const i = 0.7 + Math.random() * 0.3;
      this.edges.push({ from: n, to: a, weight: i }), this.adjacency.get(n)?.push(a), this.adjacency.get(a)?.push(n);
    };
    for (let n = 0; n < o; n++)
      for (let a = 0; a < t; a++) {
        const i = n * t + a;
        a < t - 1 && e(i, i + 1), n < o - 1 && e(i, i + t), a < t - 1 && n < o - 1 && Math.random() > 0.7 && e(i, i + t + 1);
      }
  }
  update(t) {
    this.updatePositions(t);
    const o = [];
    this.activeEdges.clear();
    for (const e of this.pulses) {
      const n = this.nodes[e.nodeId];
      if (n && (n.energy = Math.min(n.energy + e.strength, 1.5), e.life > 1 && e.strength > 0.05)) {
        const a = this.adjacency.get(e.nodeId) || [];
        for (const i of a) {
          if (i === e.originId) continue;
          const d = [e.nodeId, i].sort((h, r) => h - r).join("-");
          this.activeEdges.add(d), o.push({
            nodeId: i,
            originId: e.nodeId,
            strength: e.strength * 0.75,
            // Higher retention for longer trails
            life: e.life - 1
          });
        }
      }
    }
    this.nodes.forEach((e) => {
      e.energy *= 0.92, e.energy < 1e-3 && (e.energy = 0);
    }), this.pulses = o.length > 600 ? o.sort((e, n) => n.strength - e.strength).slice(0, 600) : o, this.notify();
  }
  emitPulse(t, o, e = 1) {
    let n = -1, a = 1 / 0;
    for (const i of this.nodes) {
      const d = i.position[0] - t, h = i.position[1] - o, r = d * d + h * h;
      r < a && (a = r, n = i.id);
    }
    n !== -1 && a < 6e4 && this.pulses.push({
      nodeId: n,
      strength: e,
      life: 6
      // propagation steps
    });
  }
  updatePositions(t) {
    this.nodes.forEach((e) => {
      e.position[0] += e.velocity[0] * t * 0.5, e.position[1] += e.velocity[1] * t * 0.5;
      const n = 100;
      e.position[0] < -n && (e.position[0] = this.width + n), e.position[0] > this.width + n && (e.position[0] = -n), e.position[1] < -n && (e.position[1] = this.height + n), e.position[1] > this.height + n && (e.position[1] = -n);
    });
  }
  getState() {
    return {
      nodes: this.nodes,
      edges: this.edges,
      pulses: this.pulses,
      activeEdges: this.activeEdges,
      totalEnergy: this.nodes.reduce((t, o) => t + o.energy, 0)
    };
  }
  notify() {
    const t = this.getState();
    this.listeners.forEach((o) => o(t));
  }
  subscribe(t) {
    return this.listeners.add(t), () => this.listeners.delete(t);
  }
  resize(t, o) {
    this.width = t, this.height = o, this.initialize();
  }
  destroy() {
    this.listeners.clear(), this.nodes = [], this.edges = [], this.pulses = [], this.adjacency.clear();
  }
}
const Ee = {
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
}, Ne = (c) => {
  const t = Ee[c];
  return {
    "--neo-accent": t.accent,
    "--neo-accent-strong": t.accentStrong,
    "--neo-bg": t.bg,
    "--neo-surface": t.surface,
    "--neo-magenta": t.magenta,
    "--neo-cyan": t.cyan,
    "--neo-muted": t.muted,
    "--neo-glow": t.glow
  };
}, Se = ({ children: c }) => {
  const [t, o] = Q("nebula"), e = q(() => {
    if (typeof window > "u") return null;
    const a = window.innerWidth || 1920, i = window.innerHeight || 1080;
    return new Z(a, i);
  }, []);
  F(() => {
    if (!e) return;
    let a = performance.now(), i;
    const d = (r) => {
      const l = (r - a) / 1e3;
      a = r;
      const u = Math.min(l, 0.1);
      e.update(u), i = requestAnimationFrame(d);
    }, h = () => {
      e.resize(window.innerWidth, window.innerHeight);
    };
    return window.addEventListener("resize", h), i = requestAnimationFrame(d), () => {
      window.removeEventListener("resize", h), cancelAnimationFrame(i), e.destroy();
    };
  }, [e]), F(() => {
    document.documentElement.setAttribute("data-theme", t);
  }, [t]);
  const n = q(() => Ne(t), [t]);
  return /* @__PURE__ */ s.jsx(L.Provider, { value: { engine: e, theme: t, setTheme: o }, children: /* @__PURE__ */ s.jsx("div", { className: `jk-system-root jk-theme-${t}`, style: n, children: c }) });
}, ze = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NeoButton: fe,
  NeoCard: me,
  NeoInput: ve,
  NeoLayout: je,
  NeuralBackground: X,
  NeuralEngine: Z,
  SystemContext: L,
  SystemProvider: Se,
  useSystem: N
}, Symbol.toStringTag, { value: "Module" }));
export {
  fe as N,
  L as S,
  me as a,
  ve as b,
  je as c,
  X as d,
  Z as e,
  Se as f,
  ze as i,
  N as u
};
//# sourceMappingURL=index-D3JFt7VY.js.map
