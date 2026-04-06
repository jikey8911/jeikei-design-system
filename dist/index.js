import xr from "clsx";
import L, { useEffect as W, useRef as X, useState as De, useMemo as Ie, useCallback as Oe } from "react";
import { createPortal as yr } from "react-dom";
const Cr = {
  background: "#04060b",
  surface: "#0b0f14",
  glass: "rgba(12,16,24,0.65)",
  border: "#0f1b2d",
  accent: "#20f6b8",
  accentStrong: "#00ff9c",
  magenta: "#ff4bd8",
  cyan: "#34d8ff",
  amber: "#f2b93b",
  muted: "#8aa2c2",
  text: "#e5f0ff"
}, Nr = {
  soft: "shadow-glow",
  strong: "shadow-glow-strong"
}, Pr = {
  xs: "neo-1",
  sm: "neo-2",
  md: "neo-3",
  lg: "neo-4",
  xl: "neo-5",
  "2xl": "neo-6"
}, Or = {
  sm: "rounded-md",
  md: "rounded-neo-md",
  lg: "rounded-neo-lg",
  xl: "rounded-neo-xl"
}, Mr = {
  glow: "shadow-glow",
  panel: "shadow-panel"
}, Ar = {
  pulse: "animate-pulse-glow",
  float: "animate-float-soft"
}, T = (...o) => xr(...o);
var H = { exports: {} }, U = {};
var Me;
function wr() {
  if (Me) return U;
  Me = 1;
  var o = L, t = /* @__PURE__ */ Symbol.for("react.element"), s = /* @__PURE__ */ Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, d = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(j, i, b) {
    var y, C = {}, O = null, _ = null;
    b !== void 0 && (O = "" + b), i.key !== void 0 && (O = "" + i.key), i.ref !== void 0 && (_ = i.ref);
    for (y in i) a.call(i, y) && !c.hasOwnProperty(y) && (C[y] = i[y]);
    if (j && j.defaultProps) for (y in i = j.defaultProps, i) C[y] === void 0 && (C[y] = i[y]);
    return { $$typeof: t, type: j, key: O, ref: _, props: C, _owner: d.current };
  }
  return U.Fragment = s, U.jsx = f, U.jsxs = f, U;
}
var z = {};
var Ae;
function Er() {
  return Ae || (Ae = 1, process.env.NODE_ENV !== "production" && (function() {
    var o = L, t = /* @__PURE__ */ Symbol.for("react.element"), s = /* @__PURE__ */ Symbol.for("react.portal"), a = /* @__PURE__ */ Symbol.for("react.fragment"), d = /* @__PURE__ */ Symbol.for("react.strict_mode"), c = /* @__PURE__ */ Symbol.for("react.profiler"), f = /* @__PURE__ */ Symbol.for("react.provider"), j = /* @__PURE__ */ Symbol.for("react.context"), i = /* @__PURE__ */ Symbol.for("react.forward_ref"), b = /* @__PURE__ */ Symbol.for("react.suspense"), y = /* @__PURE__ */ Symbol.for("react.suspense_list"), C = /* @__PURE__ */ Symbol.for("react.memo"), O = /* @__PURE__ */ Symbol.for("react.lazy"), _ = /* @__PURE__ */ Symbol.for("react.offscreen"), m = Symbol.iterator, w = "@@iterator";
    function A(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = m && e[m] || e[w];
      return typeof r == "function" ? r : null;
    }
    var S = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++)
          n[u - 1] = arguments[u];
        B("error", e, n);
      }
    }
    function B(e, r, n) {
      {
        var u = S.ReactDebugCurrentFrame, v = u.getStackAddendum();
        v !== "" && (r += "%s", n = n.concat([v]));
        var g = n.map(function(p) {
          return String(p);
        });
        g.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, g);
      }
    }
    var We = !1, Le = !1, Ye = !1, Ve = !1, Ue = !1, ie;
    ie = /* @__PURE__ */ Symbol.for("react.module.reference");
    function ze(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === a || e === c || Ue || e === d || e === b || e === y || Ve || e === _ || We || Le || Ye || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === C || e.$$typeof === f || e.$$typeof === j || e.$$typeof === i || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ie || e.getModuleId !== void 0));
    }
    function Be(e, r, n) {
      var u = e.displayName;
      if (u)
        return u;
      var v = r.displayName || r.name || "";
      return v !== "" ? n + "(" + v + ")" : n;
    }
    function le(e) {
      return e.displayName || "Context";
    }
    function M(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case a:
          return "Fragment";
        case s:
          return "Portal";
        case c:
          return "Profiler";
        case d:
          return "StrictMode";
        case b:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case j:
            var r = e;
            return le(r) + ".Consumer";
          case f:
            var n = e;
            return le(n._context) + ".Provider";
          case i:
            return Be(e, e.render, "ForwardRef");
          case C:
            var u = e.displayName || null;
            return u !== null ? u : M(e.type) || "Memo";
          case O: {
            var v = e, g = v._payload, p = v._init;
            try {
              return M(p(g));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, Y = 0, ce, ue, de, fe, he, pe, me;
    function ve() {
    }
    ve.__reactDisabledLog = !0;
    function qe() {
      {
        if (Y === 0) {
          ce = console.log, ue = console.info, de = console.warn, fe = console.error, he = console.group, pe = console.groupCollapsed, me = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ve,
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
        Y++;
      }
    }
    function Je() {
      {
        if (Y--, Y === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, e, {
              value: ce
            }),
            info: F({}, e, {
              value: ue
            }),
            warn: F({}, e, {
              value: de
            }),
            error: F({}, e, {
              value: fe
            }),
            group: F({}, e, {
              value: he
            }),
            groupCollapsed: F({}, e, {
              value: pe
            }),
            groupEnd: F({}, e, {
              value: me
            })
          });
        }
        Y < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Z = S.ReactCurrentDispatcher, Q;
    function q(e, r, n) {
      {
        if (Q === void 0)
          try {
            throw Error();
          } catch (v) {
            var u = v.stack.trim().match(/\n( *(at )?)/);
            Q = u && u[1] || "";
          }
        return `
` + Q + e;
      }
    }
    var ee = !1, J;
    {
      var Ge = typeof WeakMap == "function" ? WeakMap : Map;
      J = new Ge();
    }
    function ge(e, r) {
      if (!e || ee)
        return "";
      {
        var n = J.get(e);
        if (n !== void 0)
          return n;
      }
      var u;
      ee = !0;
      var v = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var g;
      g = Z.current, Z.current = null, qe();
      try {
        if (r) {
          var p = function() {
            throw Error();
          };
          if (Object.defineProperty(p.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(p, []);
            } catch (N) {
              u = N;
            }
            Reflect.construct(e, [], p);
          } else {
            try {
              p.call();
            } catch (N) {
              u = N;
            }
            e.call(p.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (N) {
            u = N;
          }
          e();
        }
      } catch (N) {
        if (N && u && typeof N.stack == "string") {
          for (var h = N.stack.split(`
`), k = u.stack.split(`
`), E = h.length - 1, R = k.length - 1; E >= 1 && R >= 0 && h[E] !== k[R]; )
            R--;
          for (; E >= 1 && R >= 0; E--, R--)
            if (h[E] !== k[R]) {
              if (E !== 1 || R !== 1)
                do
                  if (E--, R--, R < 0 || h[E] !== k[R]) {
                    var P = `
` + h[E].replace(" at new ", " at ");
                    return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), typeof e == "function" && J.set(e, P), P;
                  }
                while (E >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        ee = !1, Z.current = g, Je(), Error.prepareStackTrace = v;
      }
      var $ = e ? e.displayName || e.name : "", D = $ ? q($) : "";
      return typeof e == "function" && J.set(e, D), D;
    }
    function Ke(e, r, n) {
      return ge(e, !1);
    }
    function He(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function G(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ge(e, He(e));
      if (typeof e == "string")
        return q(e);
      switch (e) {
        case b:
          return q("Suspense");
        case y:
          return q("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case i:
            return Ke(e.render);
          case C:
            return G(e.type, r, n);
          case O: {
            var u = e, v = u._payload, g = u._init;
            try {
              return G(g(v), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, be = {}, xe = S.ReactDebugCurrentFrame;
    function K(e) {
      if (e) {
        var r = e._owner, n = G(e.type, e._source, r ? r.type : null);
        xe.setExtraStackFrame(n);
      } else
        xe.setExtraStackFrame(null);
    }
    function Xe(e, r, n, u, v) {
      {
        var g = Function.call.bind(V);
        for (var p in e)
          if (g(e, p)) {
            var h = void 0;
            try {
              if (typeof e[p] != "function") {
                var k = Error((u || "React class") + ": " + n + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw k.name = "Invariant Violation", k;
              }
              h = e[p](r, p, u, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              h = E;
            }
            h && !(h instanceof Error) && (K(v), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", n, p, typeof h), K(null)), h instanceof Error && !(h.message in be) && (be[h.message] = !0, K(v), x("Failed %s type: %s", n, h.message), K(null));
          }
      }
    }
    var Ze = Array.isArray;
    function re(e) {
      return Ze(e);
    }
    function Qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, n = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function er(e) {
      try {
        return ye(e), !1;
      } catch {
        return !0;
      }
    }
    function ye(e) {
      return "" + e;
    }
    function we(e) {
      if (er(e))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(e)), ye(e);
    }
    var Ee = S.ReactCurrentOwner, rr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Re, je;
    function tr(e) {
      if (V.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function nr(e) {
      if (V.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ar(e, r) {
      typeof e.ref == "string" && Ee.current;
    }
    function sr(e, r) {
      {
        var n = function() {
          Re || (Re = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function or(e, r) {
      {
        var n = function() {
          je || (je = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var ir = function(e, r, n, u, v, g, p) {
      var h = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: n,
        props: p,
        // Record the component responsible for creating this element.
        _owner: g
      };
      return h._store = {}, Object.defineProperty(h._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(h, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.defineProperty(h, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
    };
    function lr(e, r, n, u, v) {
      {
        var g, p = {}, h = null, k = null;
        n !== void 0 && (we(n), h = "" + n), nr(r) && (we(r.key), h = "" + r.key), tr(r) && (k = r.ref, ar(r, v));
        for (g in r)
          V.call(r, g) && !rr.hasOwnProperty(g) && (p[g] = r[g]);
        if (e && e.defaultProps) {
          var E = e.defaultProps;
          for (g in E)
            p[g] === void 0 && (p[g] = E[g]);
        }
        if (h || k) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          h && sr(p, R), k && or(p, R);
        }
        return ir(e, h, k, v, u, Ee.current, p);
      }
    }
    var te = S.ReactCurrentOwner, _e = S.ReactDebugCurrentFrame;
    function I(e) {
      if (e) {
        var r = e._owner, n = G(e.type, e._source, r ? r.type : null);
        _e.setExtraStackFrame(n);
      } else
        _e.setExtraStackFrame(null);
    }
    var ne;
    ne = !1;
    function ae(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Se() {
      {
        if (te.current) {
          var e = M(te.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function cr(e) {
      return "";
    }
    var ke = {};
    function ur(e) {
      {
        var r = Se();
        if (!r) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (r = `

Check the top-level render call using <` + n + ">.");
        }
        return r;
      }
    }
    function Te(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = ur(r);
        if (ke[n])
          return;
        ke[n] = !0;
        var u = "";
        e && e._owner && e._owner !== te.current && (u = " It was passed a child from " + M(e._owner.type) + "."), I(e), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, u), I(null);
      }
    }
    function Ce(e, r) {
      {
        if (typeof e != "object")
          return;
        if (re(e))
          for (var n = 0; n < e.length; n++) {
            var u = e[n];
            ae(u) && Te(u, r);
          }
        else if (ae(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var v = A(e);
          if (typeof v == "function" && v !== e.entries)
            for (var g = v.call(e), p; !(p = g.next()).done; )
              ae(p.value) && Te(p.value, r);
        }
      }
    }
    function dr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var n;
        if (typeof r == "function")
          n = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === i || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === C))
          n = r.propTypes;
        else
          return;
        if (n) {
          var u = M(r);
          Xe(n, e.props, "prop", u, e);
        } else if (r.PropTypes !== void 0 && !ne) {
          ne = !0;
          var v = M(r);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", v || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function fr(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var u = r[n];
          if (u !== "children" && u !== "key") {
            I(e), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u), I(null);
            break;
          }
        }
        e.ref !== null && (I(e), x("Invalid attribute `ref` supplied to `React.Fragment`."), I(null));
      }
    }
    var Ne = {};
    function Pe(e, r, n, u, v, g) {
      {
        var p = ze(e);
        if (!p) {
          var h = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var k = cr();
          k ? h += k : h += Se();
          var E;
          e === null ? E = "null" : re(e) ? E = "array" : e !== void 0 && e.$$typeof === t ? (E = "<" + (M(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : E = typeof e, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, h);
        }
        var R = lr(e, r, n, v, g);
        if (R == null)
          return R;
        if (p) {
          var P = r.children;
          if (P !== void 0)
            if (u)
              if (re(P)) {
                for (var $ = 0; $ < P.length; $++)
                  Ce(P[$], e);
                Object.freeze && Object.freeze(P);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(P, e);
        }
        if (V.call(r, "key")) {
          var D = M(e), N = Object.keys(r).filter(function(br) {
            return br !== "key";
          }), se = N.length > 0 ? "{key: someKey, " + N.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ne[D + se]) {
            var gr = N.length > 0 ? "{" + N.join(": ..., ") + ": ...}" : "{}";
            x(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, se, D, gr, D), Ne[D + se] = !0;
          }
        }
        return e === a ? fr(R) : dr(R), R;
      }
    }
    function hr(e, r, n) {
      return Pe(e, r, n, !0);
    }
    function pr(e, r, n) {
      return Pe(e, r, n, !1);
    }
    var mr = pr, vr = hr;
    z.Fragment = a, z.jsx = mr, z.jsxs = vr;
  })()), z;
}
var Fe;
function Rr() {
  return Fe || (Fe = 1, process.env.NODE_ENV === "production" ? H.exports = wr() : H.exports = Er()), H.exports;
}
var l = Rr();
const jr = (o = {}) => {
  const { variant: t = "primary", glow: s, size: a = "md", fullWidth: d } = o, c = {
    xs: "text-xs px-3 py-1.5",
    sm: "text-sm px-3 py-2",
    md: "text-base px-4 py-2.5",
    lg: "text-lg px-5 py-3",
    xl: "text-xl px-6 py-3.5"
  }, f = {
    primary: "bg-neo-accent text-neo-bg hover:bg-neo-accent-strong",
    secondary: "bg-neo-surface text-neo-text border border-neo-border hover:border-neo-accent",
    outline: "border border-neo-accent text-neo-accent bg-transparent hover:bg-neo-accent/10",
    ghost: "text-neo-text bg-transparent hover:bg-white/5",
    danger: "bg-red-500 text-white hover:bg-red-400",
    success: "bg-emerald-500 text-white hover:bg-emerald-400"
  };
  return T(
    "rounded-neo-md font-semibold tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-neo-accent focus-visible:ring-offset-2 focus-visible:ring-offset-neo-bg",
    c[a],
    f[t],
    s && "shadow-glow",
    d && "w-full"
  );
}, oe = L.forwardRef(
  ({ variant: o, size: t, glow: s, fullWidth: a, leadingIcon: d, trailingIcon: c, className: f, disabled: j, children: i, ...b }, y) => /* @__PURE__ */ l.jsxs(
    "button",
    {
      ref: y,
      className: T(
        jr({ variant: o, size: t, glow: s, fullWidth: a }),
        "inline-flex items-center justify-center gap-2",
        j && "opacity-60 cursor-not-allowed",
        f
      ),
      disabled: j,
      ...b,
      children: [
        d && /* @__PURE__ */ l.jsx("span", { className: "shrink-0", children: d }),
        /* @__PURE__ */ l.jsx("span", { children: i }),
        c && /* @__PURE__ */ l.jsx("span", { className: "shrink-0", children: c })
      ]
    }
  )
);
oe.displayName = "NeoButton";
const Fr = ({
  title: o,
  description: t,
  footer: s,
  padding: a = "md",
  className: d,
  children: c,
  ...f
}) => {
  const j = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8"
  };
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: T(
        "glass-surface text-neo-text border border-white/5 shadow-panel",
        j[a],
        "flex flex-col gap-4",
        d
      ),
      ...f,
      children: [
        (o || t) && /* @__PURE__ */ l.jsxs("header", { className: "space-y-1", children: [
          o && /* @__PURE__ */ l.jsx("h3", { className: "text-lg font-bold tracking-tight", children: o }),
          t && /* @__PURE__ */ l.jsx("p", { className: "text-sm text-neo-muted", children: t })
        ] }),
        /* @__PURE__ */ l.jsx("div", { className: "flex-1", children: c }),
        s && /* @__PURE__ */ l.jsx("footer", { className: "pt-2 border-t border-white/5 text-sm", children: s })
      ]
    }
  );
}, _r = L.forwardRef(
  ({ label: o, helperText: t, error: s, className: a, ...d }, c) => /* @__PURE__ */ l.jsxs("label", { className: "block space-y-2 text-sm", children: [
    o && /* @__PURE__ */ l.jsx("span", { className: "text-neo-muted", children: o }),
    /* @__PURE__ */ l.jsx(
      "input",
      {
        ref: c,
        className: T(
          "w-full rounded-neo-md bg-neo-surface/80 border border-neo-border px-4 py-3 text-neo-text placeholder:text-slate-500",
          "focus:outline-none focus:ring-2 focus:ring-neo-accent focus:border-neo-accent",
          s && "border-red-500 focus:ring-red-500 focus:border-red-500",
          a
        ),
        ...d
      }
    ),
    (t || s) && /* @__PURE__ */ l.jsx("p", { className: T("text-xs", s ? "text-red-400" : "text-neo-muted"), children: s ?? t })
  ] })
);
_r.displayName = "NeoInput";
const Dr = ({ variant: o = "accent", glow: t, className: s, children: a, ...d }) => {
  const c = {
    accent: "bg-neo-accent/15 text-neo-accent border border-neo-accent/40",
    glass: "bg-white/5 text-neo-text border border-white/10",
    danger: "bg-red-500/15 text-red-300 border border-red-400/40",
    warning: "bg-neo-amber/15 text-neo-amber border border-neo-amber/40",
    success: "bg-emerald-500/15 text-emerald-300 border border-emerald-400/40"
  };
  return /* @__PURE__ */ l.jsx(
    "span",
    {
      className: T(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide",
        c[o],
        t && "shadow-glow",
        s
      ),
      ...d,
      children: a
    }
  );
}, Ir = ({
  title: o,
  actions: t,
  subdued: s,
  className: a,
  children: d,
  ...c
}) => /* @__PURE__ */ l.jsxs(
  "section",
  {
    className: T(
      "glass-surface border border-white/10 rounded-neo-lg shadow-panel",
      s && "bg-neo-surface/70",
      a
    ),
    ...c,
    children: [
      /* @__PURE__ */ l.jsxs("header", { className: "flex items-center justify-between px-6 py-4 border-b border-white/5", children: [
        /* @__PURE__ */ l.jsxs("div", { children: [
          /* @__PURE__ */ l.jsx("h4", { className: "text-lg font-semibold text-neo-text", children: o }),
          /* @__PURE__ */ l.jsx("p", { className: "text-xs text-neo-muted uppercase tracking-[0.2em]", children: "Neural Monitor" })
        ] }),
        t && /* @__PURE__ */ l.jsx("div", { className: "flex items-center gap-2", children: t })
      ] }),
      /* @__PURE__ */ l.jsx("div", { className: "p-6", children: d })
    ]
  }
), $r = ({ open: o, title: t, onClose: s, footer: a, children: d }) => {
  const [c] = L.useState(() => document.createElement("div"));
  if (W(() => (document.body.appendChild(c), () => {
    document.body.removeChild(c);
  }), [c]), !o) return null;
  const f = /* @__PURE__ */ l.jsx(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm",
      role: "dialog",
      "aria-modal": "true",
      children: /* @__PURE__ */ l.jsxs("div", { className: "glass-surface max-w-lg w-full mx-4 border border-white/10 shadow-panel", children: [
        /* @__PURE__ */ l.jsxs("header", { className: "flex items-start justify-between p-6 pb-3", children: [
          t && /* @__PURE__ */ l.jsx("h3", { className: "text-xl font-bold text-neo-text", children: t }),
          /* @__PURE__ */ l.jsx(oe, { variant: "ghost", size: "sm", "aria-label": "Close modal", onClick: s, children: "✕" })
        ] }),
        /* @__PURE__ */ l.jsx("div", { className: "px-6 pb-4 text-neo-muted", children: d }),
        /* @__PURE__ */ l.jsx("footer", { className: T("px-6 pb-6 flex justify-end gap-3", !a && "hidden"), children: a })
      ] })
    }
  );
  return yr(f, c);
}, Wr = ({ tabs: o, value: t, defaultValue: s, onChange: a }) => {
  const [d, c] = L.useState(s ?? o[0]?.id), f = t ?? d, j = (i, b) => {
    b || (c(i), a?.(i));
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ l.jsx("div", { className: "flex gap-2 border-b border-white/10", children: o.map((i) => {
      const b = i.id === f;
      return /* @__PURE__ */ l.jsx(
        "button",
        {
          className: T(
            "px-4 py-2 text-sm font-semibold rounded-t-md transition-colors",
            i.disabled && "opacity-50 cursor-not-allowed",
            b ? "text-neo-accent border-b-2 border-neo-accent" : "text-neo-muted hover:text-neo-text"
          ),
          "aria-selected": b,
          role: "tab",
          onClick: () => j(i.id, i.disabled),
          children: i.label
        },
        i.id
      );
    }) }),
    /* @__PURE__ */ l.jsx("div", { className: "mt-4", children: o.map(
      (i) => i.id === f && /* @__PURE__ */ l.jsx("div", { role: "tabpanel", className: "text-neo-text", children: i.content }, i.id)
    ) })
  ] });
}, Lr = ({
  columns: o = { base: 1, md: 2, lg: 3 },
  gap: t = "md",
  className: s,
  children: a,
  ...d
}) => {
  const c = { sm: "gap-4", md: "gap-6", lg: "gap-8" }, f = `grid-cols-${o.base ?? 1}`, j = o.md ? `md:grid-cols-${o.md}` : "", i = o.lg ? `lg:grid-cols-${o.lg}` : "";
  return /* @__PURE__ */ l.jsx("div", { className: T("grid", f, j, i, c[t], s), ...d, children: a });
};
function Yr({
  columns: o,
  data: t,
  striped: s = !0,
  dense: a = !1
}) {
  return /* @__PURE__ */ l.jsx("div", { className: "overflow-hidden rounded-neo-lg border border-white/10 glass-surface", children: /* @__PURE__ */ l.jsxs("table", { className: "min-w-full text-sm text-left", children: [
    /* @__PURE__ */ l.jsx("thead", { className: "bg-white/5 text-neo-muted uppercase tracking-[0.2em] text-xs", children: /* @__PURE__ */ l.jsx("tr", { children: o.map((d) => /* @__PURE__ */ l.jsx("th", { className: T("px-4 py-3", d.align === "right" && "text-right"), children: d.header }, String(d.key))) }) }),
    /* @__PURE__ */ l.jsx("tbody", { children: t.map((d, c) => /* @__PURE__ */ l.jsx(
      "tr",
      {
        className: T(
          "transition-colors",
          s && c % 2 === 1 ? "bg-white/5" : "bg-transparent",
          "hover:bg-white/8"
        ),
        children: o.map((f) => /* @__PURE__ */ l.jsx(
          "td",
          {
            className: T(
              "px-4",
              a ? "py-2.5" : "py-3.5",
              f.align === "right" && "text-right",
              f.align === "center" && "text-center"
            ),
            children: f.render ? f.render(d) : d[f.key]
          },
          String(f.key)
        ))
      },
      c
    )) })
  ] }) });
}
const Vr = ({
  message: o,
  description: t,
  variant: s = "info",
  actionLabel: a,
  onAction: d,
  onClose: c
}) => {
  const f = {
    success: "border-emerald-400/40 text-emerald-100",
    info: "border-neo-accent/40 text-neo-text",
    warning: "border-neo-amber/40 text-neo-amber",
    danger: "border-red-400/40 text-red-100"
  };
  return /* @__PURE__ */ l.jsxs("div", { className: T("glass-surface border px-4 py-3 rounded-neo-lg flex items-start gap-3", f[s]), children: [
    /* @__PURE__ */ l.jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ l.jsx("p", { className: "font-semibold", children: o }),
      t && /* @__PURE__ */ l.jsx("p", { className: "text-sm text-neo-muted mt-1", children: t })
    ] }),
    a && /* @__PURE__ */ l.jsx(oe, { size: "sm", variant: "outline", onClick: d, children: a }),
    c && /* @__PURE__ */ l.jsx(
      "button",
      {
        "aria-label": "Close toast",
        onClick: c,
        className: "text-neo-muted hover:text-neo-text transition-colors",
        children: "✕"
      }
    )
  ] });
};
class $e {
  nodes = [];
  pulses = [];
  subscribers = [];
  running = !1;
  frame = 0;
  options = {
    density: 0.6,
    speed: 1,
    interactive: !0,
    decay: 0.01
  };
  raf;
  area = { w: 1200, h: 800 };
  constructor(t = {}) {
    this.options = { ...this.options, ...t }, this.seed();
  }
  seed() {
    const t = Math.max(12, Math.floor(80 * this.options.density));
    this.nodes = Array.from({ length: t }).map(() => ({
      x: Math.random() * this.area.w,
      y: Math.random() * this.area.h,
      vx: (Math.random() - 0.5) * this.options.speed,
      vy: (Math.random() - 0.5) * this.options.speed,
      energy: Math.random()
    }));
  }
  setSize(t, s) {
    this.area = { w: t, h: s };
  }
  setInteractive(t) {
    this.options.interactive = t;
  }
  start() {
    if (this.running) return;
    this.running = !0;
    const t = () => {
      this.step(), this.raf = window.requestAnimationFrame(t);
    };
    this.raf = window.requestAnimationFrame(t);
  }
  stop() {
    this.running = !1, this.raf && window.cancelAnimationFrame(this.raf);
  }
  subscribe(t) {
    return this.subscribers.push(t), t({ nodes: this.nodes, pulses: this.pulses }), () => {
      this.subscribers = this.subscribers.filter((s) => s !== t);
    };
  }
  emit() {
    const t = {
      nodes: [...this.nodes],
      pulses: [...this.pulses]
    };
    this.subscribers.forEach((s) => s(t));
  }
  pulse(t) {
    this.pulses.push({ x: t.x, y: t.y, life: 1 }), this.nodes.forEach((s) => {
      const a = s.x - t.x, d = s.y - t.y, c = Math.hypot(a, d), f = Math.max(0, 1 - c / 200);
      s.vx += a / (c + 1e-3) * f * 0.5, s.vy += d / (c + 1e-3) * f * 0.5, s.energy = Math.min(1, s.energy + f);
    });
  }
  disperse() {
    this.nodes.forEach((t) => {
      t.vx += (Math.random() - 0.5) * 2, t.vy += (Math.random() - 0.5) * 2;
    });
  }
  step() {
    const { speed: t, decay: s } = this.options;
    this.frame++, this.nodes.forEach((a) => {
      a.x += a.vx * t, a.y += a.vy * t, a.vx *= 0.99, a.vy *= 0.99, a.energy = Math.max(0, a.energy - s), (a.x < 0 || a.x > this.area.w) && (a.vx *= -1), (a.y < 0 || a.y > this.area.h) && (a.vy *= -1), a.x = Math.max(0, Math.min(this.area.w, a.x)), a.y = Math.max(0, Math.min(this.area.h, a.y));
    }), this.pulses = this.pulses.map((a) => ({ ...a, life: a.life - 0.01 })).filter((a) => a.life > 0), this.frame % 3 === 0 && this.emit();
  }
}
const Ur = ({
  interactive: o = !0,
  density: t = 0.6,
  speed: s = 1,
  decay: a = 0.01,
  className: d
}) => {
  const c = X(null), f = X(), j = X();
  return W(() => {
    const i = c.current;
    if (!i) return;
    const b = new $e({ density: t, speed: s, interactive: o, decay: a });
    f.current = b;
    const y = () => {
      const { clientWidth: _, clientHeight: m } = i.parentElement ?? { clientWidth: 1200, clientHeight: 800 };
      i.width = _, i.height = m, b.setSize(_, m);
    };
    y();
    const C = b.subscribe((_) => {
      j.current = _;
    });
    b.start();
    const O = () => {
      const _ = j.current;
      if (i && _) {
        const m = i.getContext("2d");
        if (!m) return;
        m.clearRect(0, 0, i.width, i.height), m.fillStyle = "#05070a", m.fillRect(0, 0, i.width, i.height), m.strokeStyle = "rgba(32, 246, 184, 0.5)", m.lineWidth = 1;
        for (let w = 0; w < _.nodes.length; w++)
          for (let A = w + 1; A < _.nodes.length; A++) {
            const S = _.nodes[w], x = _.nodes[A], B = Math.hypot(S.x - x.x, S.y - x.y);
            B < 220 && (m.globalAlpha = 1 - B / 220, m.beginPath(), m.moveTo(S.x, S.y), m.lineTo(x.x, x.y), m.stroke());
          }
        _.nodes.forEach((w) => {
          const A = Math.min(1, w.energy + 0.2), S = 3 + w.energy * 3, x = m.createRadialGradient(w.x, w.y, 0, w.x, w.y, S * 4);
          x.addColorStop(0, `rgba(0,255,156,${A})`), x.addColorStop(1, "rgba(0,255,156,0)"), m.fillStyle = x, m.beginPath(), m.arc(w.x, w.y, S * 2.5, 0, Math.PI * 2), m.fill(), m.fillStyle = "#00ff9c", m.beginPath(), m.arc(w.x, w.y, S, 0, Math.PI * 2), m.fill();
        }), _.pulses.forEach((w) => {
          m.strokeStyle = `rgba(0,255,156,${w.life})`, m.beginPath(), m.arc(w.x, w.y, (1 - w.life) * 200, 0, Math.PI * 2), m.stroke();
        });
      }
      requestAnimationFrame(O);
    };
    return requestAnimationFrame(O), window.addEventListener("resize", y), () => {
      window.removeEventListener("resize", y), C(), b.stop();
    };
  }, [t, s, o, a]), W(() => {
    const i = c.current;
    if (!i) return;
    const b = (y) => {
      if (!o) return;
      const C = i.getBoundingClientRect();
      f.current?.pulse({ x: y.clientX - C.left, y: y.clientY - C.top });
    };
    return i.addEventListener("click", b), () => i.removeEventListener("click", b);
  }, [o]), W(() => {
    const i = (b) => {
      b.key === " " && f.current?.disperse(), b.key === "Enter" && f.current?.pulse({ x: Math.random() * 600, y: Math.random() * 400 });
    };
    return window.addEventListener("keydown", i), () => window.removeEventListener("keydown", i);
  }, []), /* @__PURE__ */ l.jsx("canvas", { ref: c, className: T("w-full h-full absolute inset-0", d) });
}, zr = (o = {}) => {
  const t = X(null), [s, a] = De(null);
  return W(() => {
    t.current = new $e(o);
    const c = t.current, f = c.subscribe(a);
    return c.start(), () => {
      f(), c.stop();
    };
  }, [o.density, o.speed, o.interactive, o.decay]), Ie(
    () => ({
      addPulse: (c) => t.current?.pulse(c),
      disperse: () => t.current?.disperse(),
      setInteractive: (c) => t.current?.setInteractive(c),
      snapshot: s
    }),
    [s]
  );
}, Br = (o = {}) => {
  const { strong: t, pulse: s } = o;
  return Ie(
    () => ({
      glowClass: `${t ? "shadow-glow-strong" : "shadow-glow"} ${s ? "animate-pulse-glow" : ""}`.trim()
    }),
    [t, s]
  );
}, qr = () => {
  const [o, t] = De(!1), s = {
    onMouseEnter: Oe(() => t(!0), []),
    onMouseLeave: Oe(() => t(!1), [])
  };
  return { hovered: o, bind: s };
}, Jr = ({ keys: o, onPulse: t } = {}) => {
  W(() => {
    const s = (a) => {
      o && !o.includes(a.key) || t?.(a.key);
    };
    return window.addEventListener("keydown", s), () => window.removeEventListener("keydown", s);
  }, [o, t]);
};
export {
  Dr as NeoBadge,
  oe as NeoButton,
  Fr as NeoCard,
  Lr as NeoGrid,
  _r as NeoInput,
  $r as NeoModal,
  Ir as NeoPanel,
  Yr as NeoTable,
  Wr as NeoTabs,
  Vr as NeoToast,
  $e as NeuralEngine,
  Ur as NeuralGrid,
  Ar as animations,
  Cr as colors,
  T as cx,
  Nr as glow,
  Or as radius,
  Mr as shadows,
  Pr as spacing,
  Br as useGlow,
  qr as useHover,
  Jr as useKeyboardPulse,
  zr as useNeuralSystem
};
//# sourceMappingURL=index.js.map
