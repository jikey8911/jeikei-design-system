import Ne, { createContext as pr, useState as ne, useContext as br, useRef as mr, useEffect as J } from "react";
const Er = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  "2xl": "3rem",
  "3xl": "4rem"
}, jr = {
  xs: "4px",
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  full: "9999px"
}, Rr = {
  neural: {
    green: "#00ff9c",
    cyan: "#00ffe1",
    blue: "#00e5ff",
    bg: "#05070a",
    panel: "#0b0f14",
    border: "rgba(0, 255, 156, 0.2)",
    glass: "rgba(11, 15, 20, 0.45)"
  },
  status: {
    success: "#00ff9c",
    error: "#ff4d4d",
    warning: "#ffcc00",
    info: "#00ffe1"
  }
};
var G = { exports: {} }, W = {};
var Se;
function xr() {
  if (Se) return W;
  Se = 1;
  var s = Ne, n = /* @__PURE__ */ Symbol.for("react.element"), i = /* @__PURE__ */ Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, c = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(E, b, T) {
    var _, R = {}, S = null, O = null;
    T !== void 0 && (S = "" + T), b.key !== void 0 && (S = "" + b.key), b.ref !== void 0 && (O = b.ref);
    for (_ in b) o.call(b, _) && !m.hasOwnProperty(_) && (R[_] = b[_]);
    if (E && E.defaultProps) for (_ in b = E.defaultProps, b) R[_] === void 0 && (R[_] = b[_]);
    return { $$typeof: n, type: E, key: S, ref: O, props: R, _owner: c.current };
  }
  return W.Fragment = i, W.jsx = u, W.jsxs = u, W;
}
var Y = {};
var Ce;
function gr() {
  return Ce || (Ce = 1, process.env.NODE_ENV !== "production" && (function() {
    var s = Ne, n = /* @__PURE__ */ Symbol.for("react.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), m = /* @__PURE__ */ Symbol.for("react.profiler"), u = /* @__PURE__ */ Symbol.for("react.provider"), E = /* @__PURE__ */ Symbol.for("react.context"), b = /* @__PURE__ */ Symbol.for("react.forward_ref"), T = /* @__PURE__ */ Symbol.for("react.suspense"), _ = /* @__PURE__ */ Symbol.for("react.suspense_list"), R = /* @__PURE__ */ Symbol.for("react.memo"), S = /* @__PURE__ */ Symbol.for("react.lazy"), O = /* @__PURE__ */ Symbol.for("react.offscreen"), I = Symbol.iterator, p = "@@iterator";
    function D(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = I && e[I] || e[p];
      return typeof r == "function" ? r : null;
    }
    var P = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), l = 1; l < r; l++)
          t[l - 1] = arguments[l];
        De("error", e, t);
      }
    }
    function De(e, r, t) {
      {
        var l = P.ReactDebugCurrentFrame, h = l.getStackAddendum();
        h !== "" && (r += "%s", t = t.concat([h]));
        var v = t.map(function(d) {
          return String(d);
        });
        v.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, v);
      }
    }
    var Ae = !1, Fe = !1, Ie = !1, Me = !1, Le = !1, ae;
    ae = /* @__PURE__ */ Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === m || Le || e === c || e === T || e === _ || Me || e === O || Ae || Fe || Ie || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === R || e.$$typeof === u || e.$$typeof === E || e.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ae || e.getModuleId !== void 0));
    }
    function Ye(e, r, t) {
      var l = e.displayName;
      if (l)
        return l;
      var h = r.displayName || r.name || "";
      return h !== "" ? t + "(" + h + ")" : t;
    }
    function oe(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case o:
          return "Fragment";
        case i:
          return "Portal";
        case m:
          return "Profiler";
        case c:
          return "StrictMode";
        case T:
          return "Suspense";
        case _:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case E:
            var r = e;
            return oe(r) + ".Consumer";
          case u:
            var t = e;
            return oe(t._context) + ".Provider";
          case b:
            return Ye(e, e.render, "ForwardRef");
          case R:
            var l = e.displayName || null;
            return l !== null ? l : C(e.type) || "Memo";
          case S: {
            var h = e, v = h._payload, d = h._init;
            try {
              return C(d(v));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var N = Object.assign, M = 0, se, ie, le, ce, ue, fe, de;
    function he() {
    }
    he.__reactDisabledLog = !0;
    function Ve() {
      {
        if (M === 0) {
          se = console.log, ie = console.info, le = console.warn, ce = console.error, ue = console.group, fe = console.groupCollapsed, de = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: he,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        M++;
      }
    }
    function Ue() {
      {
        if (M--, M === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: N({}, e, {
              value: se
            }),
            info: N({}, e, {
              value: ie
            }),
            warn: N({}, e, {
              value: le
            }),
            error: N({}, e, {
              value: ce
            }),
            group: N({}, e, {
              value: ue
            }),
            groupCollapsed: N({}, e, {
              value: fe
            }),
            groupEnd: N({}, e, {
              value: de
            })
          });
        }
        M < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = P.ReactCurrentDispatcher, X;
    function V(e, r, t) {
      {
        if (X === void 0)
          try {
            throw Error();
          } catch (h) {
            var l = h.stack.trim().match(/\n( *(at )?)/);
            X = l && l[1] || "";
          }
        return `
` + X + e;
      }
    }
    var H = !1, U;
    {
      var Be = typeof WeakMap == "function" ? WeakMap : Map;
      U = new Be();
    }
    function ve(e, r) {
      if (!e || H)
        return "";
      {
        var t = U.get(e);
        if (t !== void 0)
          return t;
      }
      var l;
      H = !0;
      var h = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var v;
      v = K.current, K.current = null, Ve();
      try {
        if (r) {
          var d = function() {
            throw Error();
          };
          if (Object.defineProperty(d.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(d, []);
            } catch (j) {
              l = j;
            }
            Reflect.construct(e, [], d);
          } else {
            try {
              d.call();
            } catch (j) {
              l = j;
            }
            e.call(d.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (j) {
            l = j;
          }
          e();
        }
      } catch (j) {
        if (j && l && typeof j.stack == "string") {
          for (var f = j.stack.split(`
`), w = l.stack.split(`
`), x = f.length - 1, g = w.length - 1; x >= 1 && g >= 0 && f[x] !== w[g]; )
            g--;
          for (; x >= 1 && g >= 0; x--, g--)
            if (f[x] !== w[g]) {
              if (x !== 1 || g !== 1)
                do
                  if (x--, g--, g < 0 || f[x] !== w[g]) {
                    var k = `
` + f[x].replace(" at new ", " at ");
                    return e.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, k), k;
                  }
                while (x >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        H = !1, K.current = v, Ue(), Error.prepareStackTrace = h;
      }
      var F = e ? e.displayName || e.name : "", $ = F ? V(F) : "";
      return typeof e == "function" && U.set(e, $), $;
    }
    function qe(e, r, t) {
      return ve(e, !1);
    }
    function Ge(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function B(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ve(e, Ge(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case T:
          return V("Suspense");
        case _:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            return qe(e.render);
          case R:
            return B(e.type, r, t);
          case S: {
            var l = e, h = l._payload, v = l._init;
            try {
              return B(v(h), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var L = Object.prototype.hasOwnProperty, pe = {}, be = P.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var r = e._owner, t = B(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    function Je(e, r, t, l, h) {
      {
        var v = Function.call.bind(L);
        for (var d in e)
          if (v(e, d)) {
            var f = void 0;
            try {
              if (typeof e[d] != "function") {
                var w = Error((l || "React class") + ": " + t + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw w.name = "Invariant Violation", w;
              }
              f = e[d](r, d, l, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (x) {
              f = x;
            }
            f && !(f instanceof Error) && (q(h), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", t, d, typeof f), q(null)), f instanceof Error && !(f.message in pe) && (pe[f.message] = !0, q(h), y("Failed %s type: %s", t, f.message), q(null));
          }
      }
    }
    var ze = Array.isArray;
    function Z(e) {
      return ze(e);
    }
    function Ke(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Xe(e) {
      try {
        return me(e), !1;
      } catch {
        return !0;
      }
    }
    function me(e) {
      return "" + e;
    }
    function xe(e) {
      if (Xe(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(e)), me(e);
    }
    var ge = P.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, _e;
    function Ze(e) {
      if (L.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if (L.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function er(e, r) {
      typeof e.ref == "string" && ge.current;
    }
    function rr(e, r) {
      {
        var t = function() {
          ye || (ye = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function tr(e, r) {
      {
        var t = function() {
          _e || (_e = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var nr = function(e, r, t, l, h, v, d) {
      var f = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: d,
        // Record the component responsible for creating this element.
        _owner: v
      };
      return f._store = {}, Object.defineProperty(f._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(f, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.defineProperty(f, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
    };
    function ar(e, r, t, l, h) {
      {
        var v, d = {}, f = null, w = null;
        t !== void 0 && (xe(t), f = "" + t), Qe(r) && (xe(r.key), f = "" + r.key), Ze(r) && (w = r.ref, er(r, h));
        for (v in r)
          L.call(r, v) && !He.hasOwnProperty(v) && (d[v] = r[v]);
        if (e && e.defaultProps) {
          var x = e.defaultProps;
          for (v in x)
            d[v] === void 0 && (d[v] = x[v]);
        }
        if (f || w) {
          var g = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          f && rr(d, g), w && tr(d, g);
        }
        return nr(e, f, w, h, l, ge.current, d);
      }
    }
    var Q = P.ReactCurrentOwner, we = P.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var r = e._owner, t = B(e.type, e._source, r ? r.type : null);
        we.setExtraStackFrame(t);
      } else
        we.setExtraStackFrame(null);
    }
    var ee;
    ee = !1;
    function re(e) {
      return typeof e == "object" && e !== null && e.$$typeof === n;
    }
    function Ee() {
      {
        if (Q.current) {
          var e = C(Q.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function or(e) {
      return "";
    }
    var je = {};
    function sr(e) {
      {
        var r = Ee();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Re(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = sr(r);
        if (je[t])
          return;
        je[t] = !0;
        var l = "";
        e && e._owner && e._owner !== Q.current && (l = " It was passed a child from " + C(e._owner.type) + "."), A(e), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, l), A(null);
      }
    }
    function Te(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Z(e))
          for (var t = 0; t < e.length; t++) {
            var l = e[t];
            re(l) && Re(l, r);
          }
        else if (re(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var h = D(e);
          if (typeof h == "function" && h !== e.entries)
            for (var v = h.call(e), d; !(d = v.next()).done; )
              re(d.value) && Re(d.value, r);
        }
      }
    }
    function ir(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === b || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === R))
          t = r.propTypes;
        else
          return;
        if (t) {
          var l = C(r);
          Je(t, e.props, "prop", l, e);
        } else if (r.PropTypes !== void 0 && !ee) {
          ee = !0;
          var h = C(r);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", h || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function lr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var l = r[t];
          if (l !== "children" && l !== "key") {
            A(e), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", l), A(null);
            break;
          }
        }
        e.ref !== null && (A(e), y("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    var ke = {};
    function Pe(e, r, t, l, h, v) {
      {
        var d = We(e);
        if (!d) {
          var f = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (f += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var w = or();
          w ? f += w : f += Ee();
          var x;
          e === null ? x = "null" : Z(e) ? x = "array" : e !== void 0 && e.$$typeof === n ? (x = "<" + (C(e.type) || "Unknown") + " />", f = " Did you accidentally export a JSX literal instead of a component?") : x = typeof e, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", x, f);
        }
        var g = ar(e, r, t, h, v);
        if (g == null)
          return g;
        if (d) {
          var k = r.children;
          if (k !== void 0)
            if (l)
              if (Z(k)) {
                for (var F = 0; F < k.length; F++)
                  Te(k[F], e);
                Object.freeze && Object.freeze(k);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Te(k, e);
        }
        if (L.call(r, "key")) {
          var $ = C(e), j = Object.keys(r).filter(function(vr) {
            return vr !== "key";
          }), te = j.length > 0 ? "{key: someKey, " + j.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ke[$ + te]) {
            var hr = j.length > 0 ? "{" + j.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, te, $, hr, $), ke[$ + te] = !0;
          }
        }
        return e === o ? lr(g) : ir(g), g;
      }
    }
    function cr(e, r, t) {
      return Pe(e, r, t, !0);
    }
    function ur(e, r, t) {
      return Pe(e, r, t, !1);
    }
    var fr = ur, dr = cr;
    Y.Fragment = o, Y.jsx = fr, Y.jsxs = dr;
  })()), Y;
}
var Oe;
function yr() {
  return Oe || (Oe = 1, process.env.NODE_ENV === "production" ? G.exports = xr() : G.exports = gr()), G.exports;
}
var a = yr();
const $e = pr(void 0), Tr = ({ children: s }) => {
  const [n, i] = ne("neural");
  return /* @__PURE__ */ a.jsx($e.Provider, { value: { theme: n, setTheme: i }, children: /* @__PURE__ */ a.jsx("div", { className: `theme-${n} min-h-screen bg-[#05070a] text-white`, children: s }) });
}, kr = () => {
  const s = br($e);
  if (!s) throw new Error("useTheme must be used within a ThemeProvider");
  return s;
};
class _r {
  nodes = [];
  pulses = [];
  gridSize;
  constructor(n, i, o = 80) {
    this.gridSize = o, this.init(n, i);
  }
  init(n, i) {
    this.nodes = [];
    for (let o = 0; o <= n; o += this.gridSize)
      for (let c = 0; c <= i; c += this.gridSize)
        this.nodes.push({
          id: this.nodes.length,
          x: o,
          y: c
        });
  }
  createPulse() {
    if (this.nodes.length < 2) return;
    const n = this.nodes[Math.floor(Math.random() * this.nodes.length)], i = this.nodes.filter(
      (o) => o.id !== n.id && (Math.abs(o.x - n.x) === this.gridSize && o.y === n.y || Math.abs(o.y - n.y) === this.gridSize && o.x === n.x)
    );
    if (i.length > 0) {
      const o = i[Math.floor(Math.random() * i.length)];
      this.pulses.push({
        from: n,
        to: o,
        progress: 0,
        speed: 0.01 + Math.random() * 0.02
      });
    }
  }
  update() {
    this.pulses.forEach((n) => {
      n.progress += n.speed;
    }), this.pulses = this.pulses.filter((n) => n.progress < 1);
  }
}
const Pr = ({
  sparkles: s = !0,
  gridSize: n = 80,
  pulseInterval: i = 500,
  className: o = ""
}) => {
  const c = mr(null);
  return J(() => {
    const m = c.current;
    if (!m) return;
    const u = m.getContext("2d");
    if (!u) return;
    let E = m.width = window.innerWidth, b = m.height = window.innerHeight;
    const T = new _r(E, b, n), _ = () => {
      E = m.width = window.innerWidth, b = m.height = window.innerHeight, T.init(E, b);
    };
    window.addEventListener("resize", _);
    let R, S = 0;
    const O = (I) => {
      u.clearRect(0, 0, E, b), u.strokeStyle = "rgba(0, 255, 156, 0.05)", u.lineWidth = 1;
      for (let p = 0; p <= E; p += n)
        u.beginPath(), u.moveTo(p, 0), u.lineTo(p, b), u.stroke();
      for (let p = 0; p <= b; p += n)
        u.beginPath(), u.moveTo(0, p), u.lineTo(E, p), u.stroke();
      u.fillStyle = "rgba(0, 255, 156, 0.2)", T.nodes.forEach((p) => {
        u.beginPath(), u.arc(p.x, p.y, 1.5, 0, Math.PI * 2), u.fill();
      }), s && (I - S > i && (T.createPulse(), S = I), T.update(), T.pulses.forEach((p) => {
        const D = p.from.x + (p.to.x - p.from.x) * p.progress, P = p.from.y + (p.to.y - p.from.y) * p.progress, y = u.createRadialGradient(D, P, 0, D, P, 4);
        y.addColorStop(0, "rgba(0, 255, 225, 1)"), y.addColorStop(1, "rgba(0, 255, 225, 0)"), u.fillStyle = y, u.beginPath(), u.arc(D, P, 4, 0, Math.PI * 2), u.fill(), u.shadowBlur = 10, u.shadowColor = "rgba(0, 255, 225, 0.8)", u.beginPath(), u.arc(D, P, 2, 0, Math.PI * 2), u.fill(), u.shadowBlur = 0;
      })), R = requestAnimationFrame(O);
    };
    return R = requestAnimationFrame(O), () => {
      window.removeEventListener("resize", _), cancelAnimationFrame(R);
    };
  }, [s, n, i]), /* @__PURE__ */ a.jsx(
    "canvas",
    {
      ref: c,
      className: `fixed inset-0 pointer-events-none z-0 bg-[#05070a] ${o}`
    }
  );
}, Sr = (s = 1) => {
  const [n, i] = ne({
    isActive: !0,
    intensity: s
  });
  return J(() => {
    const o = () => {
      i((c) => ({ ...c, intensity: Math.min(c.intensity + 0.1, 2) })), setTimeout(() => {
        i((c) => ({ ...c, intensity: Math.max(c.intensity - 0.1, 0.5) }));
      }, 500);
    };
    return window.addEventListener("keydown", o), () => window.removeEventListener("keydown", o);
  }, []), n;
}, Cr = (s = !0) => {
  J(() => {
    if (s)
      return document.body.style.backgroundColor = "#05070a", document.body.style.color = "#ffffff", document.body.classList.add("neural-system-active"), () => {
        document.body.classList.remove("neural-system-active");
      };
  }, [s]);
}, Or = () => {
  const [s, n] = ne({ x: 0, y: 0 });
  return J(() => {
    const i = (o) => {
      n({ x: o.clientX, y: o.clientY });
    };
    return window.addEventListener("mousemove", i), () => window.removeEventListener("mousemove", i);
  }, []), s;
}, Nr = {
  size: 24,
  color: "#00ff9c",
  strokeWidth: 2
}, z = ({
  size: s = 24,
  color: n = "#00ff9c",
  children: i
}) => /* @__PURE__ */ a.jsx(
  "svg",
  {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: n,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: { filter: `drop-shadow(0 0 5px ${n})` },
    children: i
  }
), $r = (s) => /* @__PURE__ */ a.jsx(z, { ...s, children: /* @__PURE__ */ a.jsx("polyline", { points: "22 12 18 12 15 21 9 3 6 12 2 12" }) }), Dr = (s) => /* @__PURE__ */ a.jsxs(z, { ...s, children: [
  /* @__PURE__ */ a.jsx("path", { d: "M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3z" }),
  /* @__PURE__ */ a.jsx("path", { d: "M6 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3 3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z" })
] }), Ar = (s) => /* @__PURE__ */ a.jsx(z, { ...s, children: /* @__PURE__ */ a.jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) }), Fr = (s) => /* @__PURE__ */ a.jsxs(z, { ...s, children: [
  /* @__PURE__ */ a.jsx("polyline", { points: "4 17 10 11 4 5" }),
  /* @__PURE__ */ a.jsx("line", { x1: "12", y1: "19", x2: "20", y2: "19" })
] }), Ir = ({ children: s, className: n = "", glow: i = !0 }) => /* @__PURE__ */ a.jsx("div", { className: `
      bg-[rgba(10,15,20,0.45)]
      backdrop-blur-md
      rounded-[16px]
      border border-[rgba(0,255,156,0.2)]
      shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]
      p-6
      transition-all duration-300 ease
      hover:border-[rgba(0,255,156,0.4)]
      ${i ? "hover:shadow-[0_0_40px_rgba(0,255,156,0.1)]" : ""}
      ${n}
    `, children: s }), Mr = ({
  children: s,
  variant: n = "primary",
  glow: i = !0,
  className: o = "",
  ...c
}) => {
  const m = "px-6 py-2 rounded-full font-bold transition-all duration-200 active:scale-95", u = {
    primary: `bg-[#00ff9c] text-black hover:bg-[#00e58c] ${i ? "hover:shadow-[0_0_20px_#00ff9c]" : ""}`,
    secondary: `bg-transparent border border-[#00ff9c] text-[#00ff9c] hover:bg-[#00ff9c1a] ${i ? "hover:shadow-[0_0_15px_#00ff9c4d]" : ""}`,
    ghost: "bg-transparent text-[#00ff9c] hover:bg-[#00ff9c1a]"
  };
  return /* @__PURE__ */ a.jsx(
    "button",
    {
      className: `${m} ${u[n]} ${o}`,
      ...c,
      children: s
    }
  );
}, Lr = ({ label: s, error: n, className: i = "", ...o }) => /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col gap-1.5 w-full", children: [
  s && /* @__PURE__ */ a.jsx("label", { className: "text-xs text-[rgba(0,255,156,0.6)] font-mono uppercase tracking-wider ml-2", children: s }),
  /* @__PURE__ */ a.jsx(
    "input",
    {
      className: `
          bg-[rgba(0,0,0,0.6)]
          border border-[rgba(0,255,156,0.2)]
          rounded-xl
          px-5 py-3
          text-[#00ffe0]
          placeholder:text-[rgba(0,255,224,0.3)]
          outline-none
          transition-all duration-300
          focus:border-[rgba(0,255,224,0.5)]
          focus:shadow-[inset_0_0_15px_rgba(0,255,224,0.1),0_0_15px_rgba(0,255,224,0.1)]
          ${n ? "border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.3)]" : ""}
          ${i}
        `,
      ...o
    }
  ),
  n && /* @__PURE__ */ a.jsx("span", { className: "text-[10px] text-red-500 ml-2 font-mono", children: n })
] }), Wr = ({
  title: s,
  value: n,
  subtitle: i,
  trend: o,
  trendValue: c,
  className: m = ""
}) => /* @__PURE__ */ a.jsxs("div", { className: `
      bg-[#0b0f14]
      border border-[rgba(0,255,156,0.15)]
      rounded-xl p-6 backdrop-blur
      shadow-[0_0_20px_rgba(0,255,156,0.08)]
      transition-all duration-300
      hover:shadow-[0_0_30px_rgba(0,255,156,0.15)]
      hover:border-[rgba(0,255,156,0.3)]
      ${m}
    `, children: [
  /* @__PURE__ */ a.jsx("p", { className: "text-xs text-[rgba(0,255,156,0.6)] tracking-widest uppercase font-medium", children: s }),
  /* @__PURE__ */ a.jsxs("div", { className: "flex items-baseline gap-2 mt-2", children: [
    /* @__PURE__ */ a.jsx("h2", { className: "text-3xl font-bold text-[#00ff9c]", children: n }),
    o && /* @__PURE__ */ a.jsxs("span", { className: `text-xs ${o === "up" ? "text-[#00ff9c]" : "text-red-400"}`, children: [
      o === "up" ? "▲" : "▼",
      " ",
      c
    ] })
  ] }),
  i && /* @__PURE__ */ a.jsx("p", { className: "text-xs text-[rgba(0,255,156,0.4)] mt-2 font-mono", children: i })
] }), Yr = ({
  value: s,
  size: n = 160,
  strokeWidth: i = 10,
  className: o = ""
}) => {
  const c = (n - i) / 2, m = c * 2 * Math.PI, u = m - s / 100 * m;
  return /* @__PURE__ */ a.jsxs("div", { className: `relative flex items-center justify-center ${o}`, style: { width: n, height: n }, children: [
    /* @__PURE__ */ a.jsxs("svg", { width: n, height: n, className: "transform -rotate-90", children: [
      /* @__PURE__ */ a.jsx(
        "circle",
        {
          className: "text-[rgba(0,255,156,0.1)]",
          strokeWidth: i,
          stroke: "currentColor",
          fill: "transparent",
          r: c,
          cx: n / 2,
          cy: n / 2
        }
      ),
      /* @__PURE__ */ a.jsx(
        "circle",
        {
          className: "text-[#00ff9c] transition-all duration-500 ease-out",
          strokeWidth: i,
          strokeDasharray: m,
          strokeDashoffset: u,
          strokeLinecap: "round",
          stroke: "currentColor",
          fill: "transparent",
          r: c,
          cx: n / 2,
          cy: n / 2,
          style: {
            filter: "drop-shadow(0 0 8px rgba(0, 255, 156, 0.6))"
          }
        }
      )
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "absolute text-3xl font-bold text-[#00ff9c] font-mono", children: [
      Math.round(s),
      "%"
    ] })
  ] });
}, Vr = ({
  isOpen: s,
  onClose: n,
  title: i,
  children: o,
  className: c = ""
}) => s ? /* @__PURE__ */ a.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: [
  /* @__PURE__ */ a.jsx(
    "div",
    {
      className: "absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity",
      onClick: n
    }
  ),
  /* @__PURE__ */ a.jsxs("div", { className: `
        relative
        bg-[#0b0f14]
        border border-[rgba(0,255,156,0.3)]
        shadow-[0_0_50px_rgba(0,255,156,0.2)]
        rounded-2xl
        p-8
        w-full max-w-lg
        z-10
        animate-in fade-in zoom-in duration-300
        ${c}
      `, children: [
    i && /* @__PURE__ */ a.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
      /* @__PURE__ */ a.jsx("h2", { className: "text-xl font-bold text-[#00ff9c] uppercase tracking-widest font-mono", children: i }),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          onClick: n,
          className: "text-[rgba(0,255,156,0.6)] hover:text-[#00ff9c] transition-colors",
          children: "[✕]"
        }
      )
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "text-white font-light leading-relaxed", children: o })
  ] })
] }) : null, Ur = ({
  message: s,
  type: n = "info",
  onClose: i,
  className: o = ""
}) => {
  const c = {
    success: "border-[#00ff9c] text-[#00ff9c] bg-[#00ff9c1a] shadow-[0_0_15px_#00ff9c26]",
    error: "border-red-500 text-red-500 bg-red-5001a shadow-[0_0_15px_rgba(239,68,68,0.15)]",
    info: "border-cyan-400 text-cyan-400 bg-cyan-4001a shadow-[0_0_15px_rgba(34,211,238,0.15)]"
  };
  return /* @__PURE__ */ a.jsxs("div", { className: `
      flex items-center justify-between
      px-6 py-4
      rounded-xl border
      backdrop-blur-xl
      animate-in slide-in-from-right-4 fade-in duration-300
      ${c[n]}
      ${o}
    `, children: [
    /* @__PURE__ */ a.jsx("span", { className: "font-mono text-sm uppercase tracking-widest", children: s }),
    i && /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: i,
        className: "ml-4 opacity-60 hover:opacity-100 transition-opacity",
        children: "[X]"
      }
    )
  ] });
}, Br = ({
  tabs: s,
  activeTab: n,
  onChange: i,
  className: o = ""
}) => /* @__PURE__ */ a.jsxs("div", { className: `w-full ${o}`, children: [
  /* @__PURE__ */ a.jsx("div", { className: "flex gap-2 mb-6 border-b border-[rgba(0,255,156,0.1)] pb-2 overflow-x-auto", children: s.map((c) => {
    const m = c.id === n;
    return /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => i(c.id),
        className: `
                px-4 py-2 rounded-lg text-sm font-mono uppercase tracking-widest transition-all duration-300
                ${m ? "bg-[rgba(0,255,156,0.1)] text-[#00ff9c] border border-[rgba(0,255,156,0.3)] shadow-[0_0_15px_rgba(0,255,156,0.1)]" : "text-[rgba(0,255,156,0.4)] hover:text-[rgba(0,255,156,0.7)] hover:bg-[rgba(0,255,156,0.05)]"}
              `,
        children: c.label
      },
      c.id
    );
  }) }),
  /* @__PURE__ */ a.jsx("div", { className: "animate-in fade-in slide-in-from-bottom-2 duration-300", children: s.find((c) => c.id === n)?.content })
] }), qr = ({
  data: s,
  columns: n,
  className: i = ""
}) => /* @__PURE__ */ a.jsx("div", { className: `overflow-x-auto rounded-xl border border-[rgba(0,255,156,0.1)] bg-black/40 backdrop-blur ${i}`, children: /* @__PURE__ */ a.jsxs("table", { className: "w-full text-left border-collapse", children: [
  /* @__PURE__ */ a.jsx("thead", { className: "bg-[rgba(0,255,156,0.05)] text-[rgba(0,255,156,0.7)] font-mono text-xs uppercase tracking-widest", children: /* @__PURE__ */ a.jsx("tr", { children: n.map((o) => /* @__PURE__ */ a.jsx("th", { className: "px-6 py-4 font-medium border-b border-[rgba(0,255,156,0.1)]", children: o.header }, String(o.key))) }) }),
  /* @__PURE__ */ a.jsx("tbody", { className: "text-sm text-cyan-100", children: s.map((o) => /* @__PURE__ */ a.jsx(
    "tr",
    {
      className: "hover:bg-[rgba(0,255,156,0.03)] border-b border-[rgba(0,255,156,0.05)] transition-colors",
      children: n.map((c) => /* @__PURE__ */ a.jsx("td", { className: "px-6 py-4", children: c.render ? c.render(o[c.key], o) : String(o[c.key]) }, String(c.key)))
    },
    o.id
  )) })
] }) });
export {
  $r as ActivityIcon,
  Dr as CommandIcon,
  qr as DataGrid,
  Ir as GlassCard,
  Nr as IconProps,
  Vr as Modal,
  Mr as NeonButton,
  Lr as NeonInput,
  _r as NeuralEngine,
  Pr as NeuralGrid,
  z as NeuralIcon,
  Yr as ProgressRing,
  Ar as ShieldIcon,
  Wr as StatCard,
  Br as Tabs,
  Fr as TerminalIcon,
  Tr as ThemeProvider,
  Ur as Toast,
  Rr as colors,
  jr as radius,
  Er as spacing,
  Or as useMouseGlow,
  Sr as useNeuralNetwork,
  Cr as useNeuralSystem,
  kr as useTheme
};
//# sourceMappingURL=index.js.map
