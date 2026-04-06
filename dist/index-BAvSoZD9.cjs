"use strict";const e=require("./three.module-CsYOrt9F.cjs"),p=require("react"),C=p.createContext(void 0),R=()=>{const c=p.useContext(C);if(!c)throw new Error("useSystem must be used within a NeuralProvider");return c},D=({children:c,variant:n="primary",size:o="md",className:t,onClick:s,...r})=>{const{engine:i}=R(),d=h=>{if(i){const v=h.currentTarget.getBoundingClientRect(),y=v.left+v.width/2,N=v.top+v.height/2;i.emitPulse(y,N,1.25)}s&&s(h)},u="jk-neo-button relative inline-flex items-center justify-center overflow-hidden transition-all duration-300 font-bold uppercase tracking-widest",a={primary:"jk-neon-primary bg-neo-accent text-black font-bold uppercase tracking-[0.2em] shadow-neon-primary active:scale-95",secondary:"jk-glass text-white/90 hover:bg-white/5 border-white/5 active:scale-95",outline:"border border-white/20 text-white/50 hover:text-white hover:border-white/40 bg-transparent active:scale-95",ghost:"text-white/40 hover:text-white hover:bg-white/5 bg-transparent"},l={sm:"px-4 py-1.5 text-[8px]",md:"px-8 py-2.5 text-[10px]",lg:"px-12 py-4 text-[12px] font-black"};return e.jsxRuntimeExports.jsxs("button",{className:e.cx(u,a[n],l[o],t),onClick:d,...r,children:[e.jsxRuntimeExports.jsx("span",{className:"relative z-10",children:c}),e.jsxRuntimeExports.jsx("div",{className:"absolute inset-0 bg-white/10 opacity-0 active:opacity-100 transition-opacity"})]})},J=({title:c,value:n,trend:o,children:t,className:s,glow:r=!0})=>{const{engine:i}=R(),d=u=>{if(i){const a=u.currentTarget.getBoundingClientRect(),l=a.left+a.width/2,h=a.top+a.height/2;i.emitPulse(l,h,.4)}};return e.jsxRuntimeExports.jsxs("div",{onMouseEnter:d,className:e.cx("jk-card-v2 jk-glass relative group overflow-hidden transition-all duration-500 rounded-[var(--neo-radius)] px-7 py-6 cursor-default border-white/5 active:scale-[0.99]",r&&"hover:border-white/20 hover:shadow-[0_0_40px_-10px_var(--neo-glow)]",s),children:[e.jsxRuntimeExports.jsx("div",{className:"absolute top-0 left-0 w-32 h-32 bg-white/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"}),e.jsxRuntimeExports.jsxs("div",{className:"relative z-10 flex flex-col space-y-4",children:[c&&e.jsxRuntimeExports.jsx("h3",{className:"jk-hud-heading text-[10px] tracking-[0.25em] text-white/50 uppercase group-hover:text-neo-accent transition-colors duration-500",children:c}),n!==void 0&&e.jsxRuntimeExports.jsxs("div",{className:"flex items-baseline gap-3",children:[e.jsxRuntimeExports.jsx("span",{className:"text-4xl font-bold tracking-tighter text-white group-hover:text-neo-accent transition-colors duration-500",children:n}),o&&e.jsxRuntimeExports.jsx("span",{className:e.cx("jk-data-label text-[9px] uppercase font-bold px-2 py-0.5 rounded-[2px] transition-all duration-500",o.direction==="up"?"text-green-400 bg-green-400/10 group-hover:bg-green-400/20":o.direction==="down"?"text-red-400 bg-red-400/10 group-hover:bg-red-400/20":"text-neo-accent bg-neo-accent/10 group-hover:bg-neo-accent/20"),children:o.value})]}),e.jsxRuntimeExports.jsx("div",{className:"text-sm text-white/60 group-hover:text-white/80 transition-colors duration-500",children:t})]}),e.jsxRuntimeExports.jsx("div",{className:"absolute -bottom-6 -right-6 w-24 h-24 bg-neo-accent/5 rounded-full blur-2xl group-hover:bg-neo-accent/20 transition-all duration-700"}),e.jsxRuntimeExports.jsx("div",{className:"absolute top-0 right-0 w-8 h-[1px] bg-white/10 group-hover:bg-neo-accent/30 transition-colors"}),e.jsxRuntimeExports.jsx("div",{className:"absolute top-0 right-0 h-4 w-[1px] bg-white/10 group-hover:bg-neo-accent/30 transition-colors"})]})},K=({label:c,glow:n=!0,className:o,onFocus:t,onChange:s,...r})=>{const{engine:i}=R(),d=a=>{if(i){const l=a.currentTarget.getBoundingClientRect();i.emitPulse(l.left+l.width/2,l.top+l.height/2,.8)}t&&t(a)},u=a=>{if(i){const l=a.currentTarget.getBoundingClientRect();i.emitPulse(l.left+l.width/2,l.top+l.height/2,.4)}s&&s(a)};return e.jsxRuntimeExports.jsxs("div",{className:"jk-input-v2 flex flex-col space-y-3 group w-full",children:[c&&e.jsxRuntimeExports.jsx("label",{className:"jk-hud-heading text-[10px] tracking-[0.25em] text-white/40 uppercase pl-1",children:c}),e.jsxRuntimeExports.jsxs("div",{className:"relative",children:[e.jsxRuntimeExports.jsx("input",{onFocus:d,onChange:u,className:e.cx("w-full jk-glass bg-white/5 border-white/10 rounded-[var(--neo-radius)] px-5 py-4 text-white text-sm outline-none transition-all duration-300","placeholder:text-white/20",n&&"focus:border-neo-accent/50 focus:shadow-[0_0_30px_-5px_var(--neo-glow)] focus:bg-white/[0.08]",o),...r}),e.jsxRuntimeExports.jsx("div",{className:"absolute bottom-0 left-4 right-4 h-[1px] bg-neo-accent scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 shadow-[0_0_15px_var(--neo-glow)]"})]})]})},se=`/**
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
`,ie=`varying float vEnergy;
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
`,oe=`/**
 * JEIKEI NEURAL V2 - Edge Vertex Shader
 */
attribute float aActive;
uniform float uTime;

varying float vActive;

void main() {
  vActive = aActive;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,re=`/**
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
`,B=({mode:c="fullscreen",className:n=""})=>{const{engine:o,theme:t}=R(),s=p.useRef(null),r=p.useRef(),[i,d]=p.useState(0);p.useEffect(()=>{if(!s.current||!o)return;const a=s.current,l=c==="fullscreen",h=new e.WebGLRenderer({antialias:!0,alpha:!0,powerPreference:"high-performance"});h.setPixelRatio(Math.min(window.devicePixelRatio,2));const v=()=>{const x=l?window.innerWidth:a.clientWidth,m=l?window.innerHeight:a.clientHeight;return h.setSize(x,m),{width:x,height:m}},y=v();h.setClearColor(0,0),a.appendChild(h.domElement),r.current=h;const N=new e.Scene,w=new e.OrthographicCamera(-y.width/2,y.width/2,y.height/2,-y.height/2,.1,1e3);w.position.z=10;const z=new e.BufferGeometry,F=new e.ShaderMaterial({vertexShader:se,fragmentShader:ie,transparent:!0,blending:e.AdditiveBlending,depthWrite:!1,uniforms:{uTime:{value:0},uAccent:{value:new e.Color(t==="mission"?15907131:3463423)},uGlowIntensity:{value:2.5},uSize:{value:l?10:6}}}),$=new e.Points(z,F);N.add($);const M=new e.BufferGeometry,O=new e.ShaderMaterial({vertexShader:oe,fragmentShader:re,transparent:!0,blending:e.AdditiveBlending,depthWrite:!1,uniforms:{uTime:{value:0},uAccent:{value:new e.Color(t==="mission"?15907131:3463423)}}}),Q=new e.LineSegments(M,O);N.add(Q);let I=0,V=performance.now();const X=o.subscribe(x=>{const{nodes:m,edges:P,activeEdges:Z}=x,j=h.getSize(new e.Vector2),S=new Float32Array(m.length*3),U=new Float32Array(m.length);m.forEach((g,f)=>{S[f*3]=g.position[0]-j.x/2,S[f*3+1]=g.position[1]-j.y/2,S[f*3+2]=g.position[2],U[f]=g.energy}),z.setAttribute("position",new e.BufferAttribute(S,3)),z.setAttribute("aEnergy",new e.BufferAttribute(U,1));const b=new Float32Array(P.length*6),T=new Float32Array(P.length*2);P.forEach((g,f)=>{const A=m[g.from],k=m[g.to];if(A&&k){const E=f*6;b[E]=A.position[0]-j.x/2,b[E+1]=A.position[1]-j.y/2,b[E+2]=A.position[2],b[E+3]=k.position[0]-j.x/2,b[E+4]=k.position[1]-j.y/2,b[E+5]=k.position[2];const ee=[g.from,g.to].sort((te,ne)=>te-ne).join("-"),W=Z.has(ee)?1:0;T[f*2]=W,T[f*2+1]=W}}),M.setAttribute("position",new e.BufferAttribute(b,3)),M.setAttribute("aActive",new e.BufferAttribute(T,1)),F.uniforms.uTime.value=performance.now()*.001,O.uniforms.uTime.value=performance.now()*.001,h.render(N,w),I++;const H=performance.now();H-V>1e3&&(d(I),I=0,V=H)}),_=()=>{const x=v();w.left=-x.width/2,w.right=x.width/2,w.top=x.height/2,w.bottom=-x.height/2,w.updateProjectionMatrix()},G=new ResizeObserver(()=>{_()});return l?window.addEventListener("resize",_):G.observe(a),()=>{X(),window.removeEventListener("resize",_),G.disconnect(),h.dispose(),a.contains(h.domElement)&&a.removeChild(h.domElement)}},[o,t,c]);const u=c==="fullscreen"?"fixed inset-0 -z-10 bg-[#020202] pointer-events-none":"relative w-full h-full min-h-[300px] overflow-hidden rounded-xl border border-white/5 jk-glass pointer-events-none";return e.jsxRuntimeExports.jsxs("div",{ref:s,className:`${u} ${n}`,children:[e.jsxRuntimeExports.jsx("div",{className:"absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"}),c==="fullscreen"&&e.jsxRuntimeExports.jsxs("div",{className:"absolute top-4 right-6 font-mono text-[9px] tracking-widest text-neo-accent opacity-30 select-none",children:["SYSTEM_LOAD: ",i," FPS // ",t.toUpperCase(),"_MODE"]})]})},q=({children:c,showScanlines:n=!0})=>e.jsxRuntimeExports.jsxs("div",{className:"jk-layout-v2 relative min-h-screen bg-black text-white font-outfit selection:bg-neo-accent selection:text-black",children:[n&&e.jsxRuntimeExports.jsx("div",{className:"jk-scanline"}),e.jsxRuntimeExports.jsx(B,{}),e.jsxRuntimeExports.jsx("div",{className:"fixed inset-0 bg-black/40 pointer-events-none z-0"}),e.jsxRuntimeExports.jsx("div",{className:"fixed inset-0 pointer-events-none border-[1px] border-white/5 z-[99]"}),e.jsxRuntimeExports.jsxs("div",{className:"relative z-10",children:[e.jsxRuntimeExports.jsxs("header",{className:"sticky top-0 z-50 w-full px-8 py-4 bg-black/40 backdrop-blur-xl border-b border-white/5 flex justify-between items-center",children:[e.jsxRuntimeExports.jsxs("div",{className:"flex flex-col",children:[e.jsxRuntimeExports.jsx("span",{className:"jk-hud-heading text-neo-accent",children:"JK_SYSTEM_v2.0"}),e.jsxRuntimeExports.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsxRuntimeExports.jsx("span",{className:"w-1 h-1 rounded-full bg-green-500 animate-pulse"}),e.jsxRuntimeExports.jsx("span",{className:"jk-data-label opacity-40",children:"PROTOCOL_LIVING_INTERFACE_ACTIVE"})]})]}),e.jsxRuntimeExports.jsx("div",{className:"flex gap-6 items-center"})]}),e.jsxRuntimeExports.jsx("main",{className:"mx-auto max-w-[1600px] p-8 min-h-[calc(100vh-80px)]",children:c}),e.jsxRuntimeExports.jsxs("footer",{className:"w-full px-8 py-4 border-t border-white/5 flex justify-between items-center",children:[e.jsxRuntimeExports.jsx("span",{className:"jk-data-label opacity-30",children:"© 2026 JEIKEI_LABS // ALL_SYSTEMS_GO"}),e.jsxRuntimeExports.jsxs("div",{className:"flex gap-4",children:[e.jsxRuntimeExports.jsx("span",{className:"jk-data-label text-cyan-500/40",children:"LATENCY: 12ms"}),e.jsxRuntimeExports.jsx("span",{className:"jk-data-label text-magenta-500/40",children:"THROUGHPUT: 4.8gbps"})]})]})]})]});class L{nodes=[];edges=[];pulses=[];adjacency=new Map;activeEdges=new Set;listeners=new Set;width;height;density=45;constructor(n,o){this.width=n,this.height=o,this.initialize()}initialize(){this.nodes=[],this.edges=[],this.pulses=[],this.activeEdges.clear(),this.adjacency.clear();const n=Math.ceil(this.width/this.density)+1,o=Math.ceil(this.height/this.density)+1;for(let s=0;s<o;s++)for(let r=0;r<n;r++){const i=s*n+r,d=r*this.density+(Math.random()-.5)*20,u=s*this.density+(Math.random()-.5)*20,a=(Math.random()-.5)*10,l=(Math.random()-.5)*10;this.nodes.push({id:i,position:[d,u,0],velocity:[a,l,0],energy:0}),this.adjacency.set(i,[])}const t=(s,r)=>{const i=.7+Math.random()*.3;this.edges.push({from:s,to:r,weight:i}),this.adjacency.get(s)?.push(r),this.adjacency.get(r)?.push(s)};for(let s=0;s<o;s++)for(let r=0;r<n;r++){const i=s*n+r;r<n-1&&t(i,i+1),s<o-1&&t(i,i+n),r<n-1&&s<o-1&&Math.random()>.7&&t(i,i+n+1)}}update(n){this.updatePositions(n);const o=[];this.activeEdges.clear();for(const t of this.pulses){const s=this.nodes[t.nodeId];if(s&&(s.energy=Math.min(s.energy+t.strength,1.5),t.life>1&&t.strength>.05)){const r=this.adjacency.get(t.nodeId)||[];for(const i of r){if(i===t.originId)continue;const d=[t.nodeId,i].sort((u,a)=>u-a).join("-");this.activeEdges.add(d),o.push({nodeId:i,originId:t.nodeId,strength:t.strength*.75,life:t.life-1})}}}this.nodes.forEach(t=>{t.energy*=.92,t.energy<.001&&(t.energy=0)}),this.pulses=o.length>600?o.sort((t,s)=>s.strength-t.strength).slice(0,600):o,this.notify()}emitPulse(n,o,t=1){let s=-1,r=1/0;for(const i of this.nodes){const d=i.position[0]-n,u=i.position[1]-o,a=d*d+u*u;a<r&&(r=a,s=i.id)}s!==-1&&r<6e4&&this.pulses.push({nodeId:s,strength:t,life:6})}updatePositions(n){this.nodes.forEach(t=>{t.position[0]+=t.velocity[0]*n*.5,t.position[1]+=t.velocity[1]*n*.5;const s=100;t.position[0]<-s&&(t.position[0]=this.width+s),t.position[0]>this.width+s&&(t.position[0]=-s),t.position[1]<-s&&(t.position[1]=this.height+s),t.position[1]>this.height+s&&(t.position[1]=-s)})}getState(){return{nodes:this.nodes,edges:this.edges,pulses:this.pulses,activeEdges:this.activeEdges,totalEnergy:this.nodes.reduce((n,o)=>n+o.energy,0)}}notify(){const n=this.getState();this.listeners.forEach(o=>o(n))}subscribe(n){return this.listeners.add(n),()=>this.listeners.delete(n)}resize(n,o){this.width=n,this.height=o,this.initialize()}destroy(){this.listeners.clear(),this.nodes=[],this.edges=[],this.pulses=[],this.adjacency.clear()}}const ae={mission:{accent:"#f2b93b",accentStrong:"#ffffff",bg:"#05070a",surface:"#0b0f15",magenta:"#ff00ff",cyan:"#00ffff",muted:"#4a5b7c",glow:"rgba(242, 185, 59, 0.45)"},nebula:{accent:"#34d8ff",accentStrong:"#ffffff",bg:"#02040a",surface:"#0b0f14",magenta:"#ff2bd6",cyan:"#34d8ff",muted:"#4a5b7c",glow:"rgba(52, 216, 255, 0.35)"}},ce=c=>{const n=ae[c];return{"--neo-accent":n.accent,"--neo-accent-strong":n.accentStrong,"--neo-bg":n.bg,"--neo-surface":n.surface,"--neo-magenta":n.magenta,"--neo-cyan":n.cyan,"--neo-muted":n.muted,"--neo-glow":n.glow}},Y=({children:c})=>{const[n,o]=p.useState("nebula"),t=p.useMemo(()=>{if(typeof window>"u")return null;const r=window.innerWidth||1920,i=window.innerHeight||1080;return new L(r,i)},[]);p.useEffect(()=>{if(!t)return;let r=performance.now(),i;const d=a=>{const l=(a-r)/1e3;r=a;const h=Math.min(l,.1);t.update(h),i=requestAnimationFrame(d)},u=()=>{t.resize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",u),i=requestAnimationFrame(d),()=>{window.removeEventListener("resize",u),cancelAnimationFrame(i),t.destroy()}},[t]),p.useEffect(()=>{document.documentElement.setAttribute("data-theme",n)},[n]);const s=p.useMemo(()=>ce(n),[n]);return e.jsxRuntimeExports.jsx(C.Provider,{value:{engine:t,theme:n,setTheme:o},children:e.jsxRuntimeExports.jsx("div",{className:`jk-system-root jk-theme-${n}`,style:s,children:c})})},le=Object.freeze(Object.defineProperty({__proto__:null,NeoButton:D,NeoCard:J,NeoInput:K,NeoLayout:q,NeuralBackground:B,NeuralEngine:L,SystemContext:C,SystemProvider:Y,useSystem:R},Symbol.toStringTag,{value:"Module"}));exports.NeoButton=D;exports.NeoCard=J;exports.NeoInput=K;exports.NeoLayout=q;exports.NeuralBackground=B;exports.NeuralEngine=L;exports.SystemContext=C;exports.SystemProvider=Y;exports.index=le;exports.useSystem=R;
//# sourceMappingURL=index-BAvSoZD9.cjs.map
