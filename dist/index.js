import Jo from "clsx";
import bi, { useEffect as Ai, useRef as _n, useState as mo, useMemo as Zs, useCallback as ua } from "react";
import { createPortal as Qo } from "react-dom";
const Sp = {
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
}, Ep = {
  soft: "shadow-glow",
  strong: "shadow-glow-strong"
}, yp = {
  xs: "neo-1",
  sm: "neo-2",
  md: "neo-3",
  lg: "neo-4",
  xl: "neo-5",
  "2xl": "neo-6"
}, Tp = {
  sm: "rounded-md",
  md: "rounded-neo-md",
  lg: "rounded-neo-lg",
  xl: "rounded-neo-xl"
}, bp = {
  glow: "shadow-glow",
  panel: "shadow-panel"
}, Ap = {
  pulse: "animate-pulse-glow",
  float: "animate-float-soft"
}, At = (...i) => Jo(...i);
var Fi = { exports: {} }, pi = {};
var ha;
function el() {
  if (ha) return pi;
  ha = 1;
  var i = bi, e = /* @__PURE__ */ Symbol.for("react.element"), t = /* @__PURE__ */ Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, r = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(o, l, c) {
    var h, f = {}, p = null, m = null;
    c !== void 0 && (p = "" + c), l.key !== void 0 && (p = "" + l.key), l.ref !== void 0 && (m = l.ref);
    for (h in l) n.call(l, h) && !s.hasOwnProperty(h) && (f[h] = l[h]);
    if (o && o.defaultProps) for (h in l = o.defaultProps, l) f[h] === void 0 && (f[h] = l[h]);
    return { $$typeof: e, type: o, key: p, ref: m, props: f, _owner: r.current };
  }
  return pi.Fragment = t, pi.jsx = a, pi.jsxs = a, pi;
}
var mi = {};
var da;
function tl() {
  return da || (da = 1, process.env.NODE_ENV !== "production" && (function() {
    var i = bi, e = /* @__PURE__ */ Symbol.for("react.element"), t = /* @__PURE__ */ Symbol.for("react.portal"), n = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), s = /* @__PURE__ */ Symbol.for("react.profiler"), a = /* @__PURE__ */ Symbol.for("react.provider"), o = /* @__PURE__ */ Symbol.for("react.context"), l = /* @__PURE__ */ Symbol.for("react.forward_ref"), c = /* @__PURE__ */ Symbol.for("react.suspense"), h = /* @__PURE__ */ Symbol.for("react.suspense_list"), f = /* @__PURE__ */ Symbol.for("react.memo"), p = /* @__PURE__ */ Symbol.for("react.lazy"), m = /* @__PURE__ */ Symbol.for("react.offscreen"), x = Symbol.iterator, M = "@@iterator";
    function d(A) {
      if (A === null || typeof A != "object")
        return null;
      var K = x && A[x] || A[M];
      return typeof K == "function" ? K : null;
    }
    var u = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(A) {
      {
        for (var K = arguments.length, ce = new Array(K > 1 ? K - 1 : 0), we = 1; we < K; we++)
          ce[we - 1] = arguments[we];
        E("error", A, ce);
      }
    }
    function E(A, K, ce) {
      {
        var we = u.ReactDebugCurrentFrame, Ye = we.getStackAddendum();
        Ye !== "" && (K += "%s", ce = ce.concat([Ye]));
        var Qe = ce.map(function(ke) {
          return String(ke);
        });
        Qe.unshift("Warning: " + K), Function.prototype.apply.call(console[A], console, Qe);
      }
    }
    var b = !1, G = !1, P = !1, w = !1, O = !1, ee;
    ee = /* @__PURE__ */ Symbol.for("react.module.reference");
    function g(A) {
      return !!(typeof A == "string" || typeof A == "function" || A === n || A === s || O || A === r || A === c || A === h || w || A === m || b || G || P || typeof A == "object" && A !== null && (A.$$typeof === p || A.$$typeof === f || A.$$typeof === a || A.$$typeof === o || A.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      A.$$typeof === ee || A.getModuleId !== void 0));
    }
    function S(A, K, ce) {
      var we = A.displayName;
      if (we)
        return we;
      var Ye = K.displayName || K.name || "";
      return Ye !== "" ? ce + "(" + Ye + ")" : ce;
    }
    function W(A) {
      return A.displayName || "Context";
    }
    function B(A) {
      if (A == null)
        return null;
      if (typeof A.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof A == "function")
        return A.displayName || A.name || null;
      if (typeof A == "string")
        return A;
      switch (A) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case s:
          return "Profiler";
        case r:
          return "StrictMode";
        case c:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof A == "object")
        switch (A.$$typeof) {
          case o:
            var K = A;
            return W(K) + ".Consumer";
          case a:
            var ce = A;
            return W(ce._context) + ".Provider";
          case l:
            return S(A, A.render, "ForwardRef");
          case f:
            var we = A.displayName || null;
            return we !== null ? we : B(A.type) || "Memo";
          case p: {
            var Ye = A, Qe = Ye._payload, ke = Ye._init;
            try {
              return B(ke(Qe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, $ = 0, z, te, V, ue, he, ie, Te;
    function Oe() {
    }
    Oe.__reactDisabledLog = !0;
    function X() {
      {
        if ($ === 0) {
          z = console.log, te = console.info, V = console.warn, ue = console.error, he = console.group, ie = console.groupCollapsed, Te = console.groupEnd;
          var A = {
            configurable: !0,
            enumerable: !0,
            value: Oe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: A,
            log: A,
            warn: A,
            error: A,
            group: A,
            groupCollapsed: A,
            groupEnd: A
          });
        }
        $++;
      }
    }
    function J() {
      {
        if ($--, $ === 0) {
          var A = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: k({}, A, {
              value: z
            }),
            info: k({}, A, {
              value: te
            }),
            warn: k({}, A, {
              value: V
            }),
            error: k({}, A, {
              value: ue
            }),
            group: k({}, A, {
              value: he
            }),
            groupCollapsed: k({}, A, {
              value: ie
            }),
            groupEnd: k({}, A, {
              value: Te
            })
          });
        }
        $ < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var pe = u.ReactCurrentDispatcher, me;
    function Le(A, K, ce) {
      {
        if (me === void 0)
          try {
            throw Error();
          } catch (Ye) {
            var we = Ye.stack.trim().match(/\n( *(at )?)/);
            me = we && we[1] || "";
          }
        return `
` + me + A;
      }
    }
    var be = !1, ze;
    {
      var Ke = typeof WeakMap == "function" ? WeakMap : Map;
      ze = new Ke();
    }
    function Ge(A, K) {
      if (!A || be)
        return "";
      {
        var ce = ze.get(A);
        if (ce !== void 0)
          return ce;
      }
      var we;
      be = !0;
      var Ye = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Qe;
      Qe = pe.current, pe.current = null, X();
      try {
        if (K) {
          var ke = function() {
            throw Error();
          };
          if (Object.defineProperty(ke.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ke, []);
            } catch (se) {
              we = se;
            }
            Reflect.construct(A, [], ke);
          } else {
            try {
              ke.call();
            } catch (se) {
              we = se;
            }
            A.call(ke.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (se) {
            we = se;
          }
          A();
        }
      } catch (se) {
        if (se && we && typeof se.stack == "string") {
          for (var _ = se.stack.split(`
`), C = we.stack.split(`
`), U = _.length - 1, I = C.length - 1; U >= 1 && I >= 0 && _[U] !== C[I]; )
            I--;
          for (; U >= 1 && I >= 0; U--, I--)
            if (_[U] !== C[I]) {
              if (U !== 1 || I !== 1)
                do
                  if (U--, I--, I < 0 || _[U] !== C[I]) {
                    var D = `
` + _[U].replace(" at new ", " at ");
                    return A.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", A.displayName)), typeof A == "function" && ze.set(A, D), D;
                  }
                while (U >= 1 && I >= 0);
              break;
            }
        }
      } finally {
        be = !1, pe.current = Qe, J(), Error.prepareStackTrace = Ye;
      }
      var Q = A ? A.displayName || A.name : "", re = Q ? Le(Q) : "";
      return typeof A == "function" && ze.set(A, re), re;
    }
    function R(A, K, ce) {
      return Ge(A, !1);
    }
    function Mt(A) {
      var K = A.prototype;
      return !!(K && K.isReactComponent);
    }
    function Be(A, K, ce) {
      if (A == null)
        return "";
      if (typeof A == "function")
        return Ge(A, Mt(A));
      if (typeof A == "string")
        return Le(A);
      switch (A) {
        case c:
          return Le("Suspense");
        case h:
          return Le("SuspenseList");
      }
      if (typeof A == "object")
        switch (A.$$typeof) {
          case l:
            return R(A.render);
          case f:
            return Be(A.type, K, ce);
          case p: {
            var we = A, Ye = we._payload, Qe = we._init;
            try {
              return Be(Qe(Ye), K, ce);
            } catch {
            }
          }
        }
      return "";
    }
    var He = Object.prototype.hasOwnProperty, Ce = {}, tt = u.ReactDebugCurrentFrame;
    function Ae(A) {
      if (A) {
        var K = A._owner, ce = Be(A.type, A._source, K ? K.type : null);
        tt.setExtraStackFrame(ce);
      } else
        tt.setExtraStackFrame(null);
    }
    function y(A, K, ce, we, Ye) {
      {
        var Qe = Function.call.bind(He);
        for (var ke in A)
          if (Qe(A, ke)) {
            var _ = void 0;
            try {
              if (typeof A[ke] != "function") {
                var C = Error((we || "React class") + ": " + ce + " type `" + ke + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof A[ke] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw C.name = "Invariant Violation", C;
              }
              _ = A[ke](K, ke, we, ce, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (U) {
              _ = U;
            }
            _ && !(_ instanceof Error) && (Ae(Ye), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", we || "React class", ce, ke, typeof _), Ae(null)), _ instanceof Error && !(_.message in Ce) && (Ce[_.message] = !0, Ae(Ye), T("Failed %s type: %s", ce, _.message), Ae(null));
          }
      }
    }
    var v = Array.isArray;
    function N(A) {
      return v(A);
    }
    function Y(A) {
      {
        var K = typeof Symbol == "function" && Symbol.toStringTag, ce = K && A[Symbol.toStringTag] || A.constructor.name || "Object";
        return ce;
      }
    }
    function Z(A) {
      try {
        return q(A), !1;
      } catch {
        return !0;
      }
    }
    function q(A) {
      return "" + A;
    }
    function Se(A) {
      if (Z(A))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Y(A)), q(A);
    }
    var ae = u.ReactCurrentOwner, ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, We, ne;
    function _e(A) {
      if (He.call(A, "ref")) {
        var K = Object.getOwnPropertyDescriptor(A, "ref").get;
        if (K && K.isReactWarning)
          return !1;
      }
      return A.ref !== void 0;
    }
    function De(A) {
      if (He.call(A, "key")) {
        var K = Object.getOwnPropertyDescriptor(A, "key").get;
        if (K && K.isReactWarning)
          return !1;
      }
      return A.key !== void 0;
    }
    function Ue(A, K) {
      typeof A.ref == "string" && ae.current;
    }
    function ve(A, K) {
      {
        var ce = function() {
          We || (We = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", K));
        };
        ce.isReactWarning = !0, Object.defineProperty(A, "key", {
          get: ce,
          configurable: !0
        });
      }
    }
    function Ve(A, K) {
      {
        var ce = function() {
          ne || (ne = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", K));
        };
        ce.isReactWarning = !0, Object.defineProperty(A, "ref", {
          get: ce,
          configurable: !0
        });
      }
    }
    var Ie = function(A, K, ce, we, Ye, Qe, ke) {
      var _ = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: A,
        key: K,
        ref: ce,
        props: ke,
        // Record the component responsible for creating this element.
        _owner: Qe
      };
      return _._store = {}, Object.defineProperty(_._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(_, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: we
      }), Object.defineProperty(_, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ye
      }), Object.freeze && (Object.freeze(_.props), Object.freeze(_)), _;
    };
    function nt(A, K, ce, we, Ye) {
      {
        var Qe, ke = {}, _ = null, C = null;
        ce !== void 0 && (Se(ce), _ = "" + ce), De(K) && (Se(K.key), _ = "" + K.key), _e(K) && (C = K.ref, Ue(K, Ye));
        for (Qe in K)
          He.call(K, Qe) && !ge.hasOwnProperty(Qe) && (ke[Qe] = K[Qe]);
        if (A && A.defaultProps) {
          var U = A.defaultProps;
          for (Qe in U)
            ke[Qe] === void 0 && (ke[Qe] = U[Qe]);
        }
        if (_ || C) {
          var I = typeof A == "function" ? A.displayName || A.name || "Unknown" : A;
          _ && ve(ke, I), C && Ve(ke, I);
        }
        return Ie(A, _, C, Ye, we, ae.current, ke);
      }
    }
    var L = u.ReactCurrentOwner, de = u.ReactDebugCurrentFrame;
    function H(A) {
      if (A) {
        var K = A._owner, ce = Be(A.type, A._source, K ? K.type : null);
        de.setExtraStackFrame(ce);
      } else
        de.setExtraStackFrame(null);
    }
    var j;
    j = !1;
    function le(A) {
      return typeof A == "object" && A !== null && A.$$typeof === e;
    }
    function fe() {
      {
        if (L.current) {
          var A = B(L.current.type);
          if (A)
            return `

Check the render method of \`` + A + "`.";
        }
        return "";
      }
    }
    function Xe(A) {
      return "";
    }
    var at = {};
    function _t(A) {
      {
        var K = fe();
        if (!K) {
          var ce = typeof A == "string" ? A : A.displayName || A.name;
          ce && (K = `

Check the top-level render call using <` + ce + ">.");
        }
        return K;
      }
    }
    function qe(A, K) {
      {
        if (!A._store || A._store.validated || A.key != null)
          return;
        A._store.validated = !0;
        var ce = _t(K);
        if (at[ce])
          return;
        at[ce] = !0;
        var we = "";
        A && A._owner && A._owner !== L.current && (we = " It was passed a child from " + B(A._owner.type) + "."), H(A), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ce, we), H(null);
      }
    }
    function mt(A, K) {
      {
        if (typeof A != "object")
          return;
        if (N(A))
          for (var ce = 0; ce < A.length; ce++) {
            var we = A[ce];
            le(we) && qe(we, K);
          }
        else if (le(A))
          A._store && (A._store.validated = !0);
        else if (A) {
          var Ye = d(A);
          if (typeof Ye == "function" && Ye !== A.entries)
            for (var Qe = Ye.call(A), ke; !(ke = Qe.next()).done; )
              le(ke.value) && qe(ke.value, K);
        }
      }
    }
    function Ft(A) {
      {
        var K = A.type;
        if (K == null || typeof K == "string")
          return;
        var ce;
        if (typeof K == "function")
          ce = K.propTypes;
        else if (typeof K == "object" && (K.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        K.$$typeof === f))
          ce = K.propTypes;
        else
          return;
        if (ce) {
          var we = B(K);
          y(ce, A.props, "prop", we, A);
        } else if (K.PropTypes !== void 0 && !j) {
          j = !0;
          var Ye = B(K);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ye || "Unknown");
        }
        typeof K.getDefaultProps == "function" && !K.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ui(A) {
      {
        for (var K = Object.keys(A.props), ce = 0; ce < K.length; ce++) {
          var we = K[ce];
          if (we !== "children" && we !== "key") {
            H(A), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", we), H(null);
            break;
          }
        }
        A.ref !== null && (H(A), T("Invalid attribute `ref` supplied to `React.Fragment`."), H(null));
      }
    }
    var di = {};
    function qt(A, K, ce, we, Ye, Qe) {
      {
        var ke = g(A);
        if (!ke) {
          var _ = "";
          (A === void 0 || typeof A == "object" && A !== null && Object.keys(A).length === 0) && (_ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var C = Xe();
          C ? _ += C : _ += fe();
          var U;
          A === null ? U = "null" : N(A) ? U = "array" : A !== void 0 && A.$$typeof === e ? (U = "<" + (B(A.type) || "Unknown") + " />", _ = " Did you accidentally export a JSX literal instead of a component?") : U = typeof A, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", U, _);
        }
        var I = nt(A, K, ce, Ye, Qe);
        if (I == null)
          return I;
        if (ke) {
          var D = K.children;
          if (D !== void 0)
            if (we)
              if (N(D)) {
                for (var Q = 0; Q < D.length; Q++)
                  mt(D[Q], A);
                Object.freeze && Object.freeze(D);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              mt(D, A);
        }
        if (He.call(K, "key")) {
          var re = B(A), se = Object.keys(K).filter(function(Pe) {
            return Pe !== "key";
          }), xe = se.length > 0 ? "{key: someKey, " + se.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!di[re + xe]) {
            var Re = se.length > 0 ? "{" + se.join(": ..., ") + ": ...}" : "{}";
            T(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, xe, re, Re, re), di[re + xe] = !0;
          }
        }
        return A === n ? Ui(I) : Ft(I), I;
      }
    }
    function fi(A, K, ce) {
      return qt(A, K, ce, !0);
    }
    function Ii(A, K, ce) {
      return qt(A, K, ce, !1);
    }
    var Ni = Ii, On = fi;
    mi.Fragment = n, mi.jsx = Ni, mi.jsxs = On;
  })()), mi;
}
var fa;
function nl() {
  return fa || (fa = 1, process.env.NODE_ENV === "production" ? Fi.exports = el() : Fi.exports = tl()), Fi.exports;
}
var Me = nl();
const go = ({ children: i, variant: e = "primary", className: t, ...n }) => {
  const r = "px-6 py-3 rounded-neo-md transition-all duration-300 font-bold uppercase tracking-widest text-[10px]", s = {
    primary: "bg-neo-accent text-neo-bg shadow-neon-primary hover:brightness-110 hover:scale-[1.02] border-none",
    secondary: "bg-neo-surface/40 text-neo-magenta border border-neo-magenta/30 backdrop-blur-md shadow-neon-magenta/20 hover:border-neo-magenta/60 hover:shadow-neon-magenta/40",
    outline: "bg-transparent text-neo-accent border border-neo-accent/50 hover:bg-neo-accent/10 hover:shadow-neon-cyan/30",
    ghost: "bg-transparent text-neo-muted hover:text-neo-accent hover:bg-white/5"
  };
  return /* @__PURE__ */ Me.jsx("button", { className: At(r, s[e], t), ...n, children: i });
}, wp = ({
  title: i,
  value: e,
  unit: t,
  trend: n,
  variant: r = "cyan",
  glass: s = !0,
  className: a,
  children: o,
  ...l
}) => {
  const c = r === "cyan" ? "shadow-neon-cyan/20 ring-1 ring-neo-accent/20" : "shadow-neon-magenta/20 ring-1 ring-neo-magenta/20", h = r === "cyan" ? "text-neo-accent" : "text-neo-magenta";
  return /* @__PURE__ */ Me.jsxs(
    "div",
    {
      className: At(
        "relative overflow-hidden rounded-neo-lg p-6 transition-all duration-500 hover:scale-[1.02]",
        s && "glass-surface",
        c,
        a
      ),
      ...l,
      children: [
        /* @__PURE__ */ Me.jsxs("div", { className: "flex flex-col gap-2", children: [
          i && /* @__PURE__ */ Me.jsx("h3", { className: "text-[10px] uppercase tracking-[0.3em] text-neo-muted font-bold mb-1", children: i }),
          /* @__PURE__ */ Me.jsxs("div", { className: "flex items-baseline gap-2", children: [
            e && /* @__PURE__ */ Me.jsx("span", { className: At("text-4xl font-mono font-bold tracking-tighter drop-shadow-[0_0_12px_rgba(0,255,255,0.3)]", h), children: e }),
            t && /* @__PURE__ */ Me.jsx("span", { className: "text-xs font-mono text-neo-muted lowercase", children: t })
          ] }),
          n && /* @__PURE__ */ Me.jsxs("div", { className: At("flex items-center gap-1 text-[10px] font-mono font-bold mt-1", n.up ? "text-neo-accent" : "text-neo-magenta"), children: [
            /* @__PURE__ */ Me.jsx("span", { children: n.up ? "↑" : "↓" }),
            /* @__PURE__ */ Me.jsx("span", { children: n.value })
          ] })
        ] }),
        o
      ]
    }
  );
}, il = bi.forwardRef(({ glow: i = !0, className: e, ...t }, n) => /* @__PURE__ */ Me.jsx(
  "input",
  {
    ref: n,
    className: At(
      "w-full rounded-xl px-4 py-3 text-cyan-50 placeholder:text-cyan-200/50 transition",
      "bg-white/3 border border-cyan-300/35",
      "backdrop-blur-[18px]",
      i && "shadow-[0_0_18px_rgba(0,255,255,0.25)]",
      e
    ),
    ...t
  }
));
il.displayName = "NeoInput";
const Rp = ({ variant: i = "accent", glow: e, className: t, children: n, ...r }) => {
  const s = {
    accent: "bg-neo-accent/15 text-neo-accent border border-neo-accent/40",
    glass: "bg-white/5 text-neo-text border border-white/10",
    danger: "bg-red-500/15 text-red-300 border border-red-400/40",
    warning: "bg-neo-amber/15 text-neo-amber border border-neo-amber/40",
    success: "bg-emerald-500/15 text-emerald-300 border border-emerald-400/40"
  };
  return /* @__PURE__ */ Me.jsx(
    "span",
    {
      className: At(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide",
        s[i],
        e && "shadow-glow",
        t
      ),
      ...r,
      children: n
    }
  );
}, Cp = ({
  title: i,
  actions: e,
  subdued: t,
  className: n,
  children: r,
  ...s
}) => /* @__PURE__ */ Me.jsxs(
  "section",
  {
    className: At(
      "glass-surface overflow-hidden transition-all duration-500",
      t && "bg-neo-surface/40 backdrop-blur-sm",
      n
    ),
    ...s,
    children: [
      /* @__PURE__ */ Me.jsxs("header", { className: "flex items-center justify-between px-6 py-5 border-b border-white/5 relative", children: [
        /* @__PURE__ */ Me.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ Me.jsx("div", { className: "w-1 h-8 bg-neo-accent shadow-neon-cyan rounded-full" }),
          /* @__PURE__ */ Me.jsxs("div", { children: [
            /* @__PURE__ */ Me.jsx("h4", { className: "text-xs font-bold text-neo-text uppercase tracking-[0.3em]", children: i }),
            /* @__PURE__ */ Me.jsx("p", { className: "text-[9px] text-neo-muted uppercase tracking-[0.2em] font-medium", children: "Neural Monitor Unit" })
          ] })
        ] }),
        e && /* @__PURE__ */ Me.jsx("div", { className: "flex items-center gap-2", children: e })
      ] }),
      /* @__PURE__ */ Me.jsx("div", { className: "p-6", children: r })
    ]
  }
), Pp = ({ open: i, title: e, onClose: t, footer: n, children: r }) => {
  const [s] = bi.useState(() => document.createElement("div"));
  if (Ai(() => (document.body.appendChild(s), () => {
    document.body.removeChild(s);
  }), [s]), !i) return null;
  const a = /* @__PURE__ */ Me.jsx(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm",
      role: "dialog",
      "aria-modal": "true",
      children: /* @__PURE__ */ Me.jsxs("div", { className: "glass-surface max-w-lg w-full mx-4 border border-white/10 shadow-panel", children: [
        /* @__PURE__ */ Me.jsxs("header", { className: "flex items-start justify-between p-6 pb-3", children: [
          e && /* @__PURE__ */ Me.jsx("h3", { className: "text-xl font-bold text-neo-text", children: e }),
          /* @__PURE__ */ Me.jsx(go, { variant: "ghost", size: "sm", "aria-label": "Close modal", onClick: t, children: "✕" })
        ] }),
        /* @__PURE__ */ Me.jsx("div", { className: "px-6 pb-4 text-neo-muted", children: r }),
        /* @__PURE__ */ Me.jsx("footer", { className: At("px-6 pb-6 flex justify-end gap-3", !n && "hidden"), children: n })
      ] })
    }
  );
  return Qo(a, s);
}, Lp = ({ tabs: i, value: e, defaultValue: t, onChange: n }) => {
  const [r, s] = bi.useState(t ?? i[0]?.id), a = e ?? r, o = (l, c) => {
    c || (s(l), n?.(l));
  };
  return /* @__PURE__ */ Me.jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ Me.jsx("div", { className: "flex gap-2 border-b border-white/10", children: i.map((l) => {
      const c = l.id === a;
      return /* @__PURE__ */ Me.jsx(
        "button",
        {
          className: At(
            "px-4 py-2 text-sm font-semibold rounded-t-md transition-colors",
            l.disabled && "opacity-50 cursor-not-allowed",
            c ? "text-neo-accent border-b-2 border-neo-accent" : "text-neo-muted hover:text-neo-text"
          ),
          "aria-selected": c,
          role: "tab",
          onClick: () => o(l.id, l.disabled),
          children: l.label
        },
        l.id
      );
    }) }),
    /* @__PURE__ */ Me.jsx("div", { className: "mt-4", children: i.map(
      (l) => l.id === a && /* @__PURE__ */ Me.jsx("div", { role: "tabpanel", className: "text-neo-text", children: l.content }, l.id)
    ) })
  ] });
}, Dp = ({
  columns: i = { base: 1, md: 2, lg: 3 },
  gap: e = "md",
  className: t,
  children: n,
  ...r
}) => {
  const s = { sm: "gap-4", md: "gap-6", lg: "gap-8" }, a = `grid-cols-${i.base ?? 1}`, o = i.md ? `md:grid-cols-${i.md}` : "", l = i.lg ? `lg:grid-cols-${i.lg}` : "";
  return /* @__PURE__ */ Me.jsx("div", { className: At("grid", a, o, l, s[e], t), ...r, children: n });
};
function Up({
  columns: i,
  data: e,
  striped: t = !0,
  dense: n = !1
}) {
  return /* @__PURE__ */ Me.jsx("div", { className: "overflow-hidden rounded-neo-lg border border-white/10 glass-surface", children: /* @__PURE__ */ Me.jsxs("table", { className: "min-w-full text-sm text-left", children: [
    /* @__PURE__ */ Me.jsx("thead", { className: "bg-white/5 text-neo-muted uppercase tracking-[0.2em] text-xs", children: /* @__PURE__ */ Me.jsx("tr", { children: i.map((r) => /* @__PURE__ */ Me.jsx("th", { className: At("px-4 py-3", r.align === "right" && "text-right"), children: r.header }, String(r.key))) }) }),
    /* @__PURE__ */ Me.jsx("tbody", { children: e.map((r, s) => /* @__PURE__ */ Me.jsx(
      "tr",
      {
        className: At(
          "transition-colors",
          t && s % 2 === 1 ? "bg-white/5" : "bg-transparent",
          "hover:bg-white/8"
        ),
        children: i.map((a) => /* @__PURE__ */ Me.jsx(
          "td",
          {
            className: At(
              "px-4",
              n ? "py-2.5" : "py-3.5",
              a.align === "right" && "text-right",
              a.align === "center" && "text-center"
            ),
            children: a.render ? a.render(r) : r[a.key]
          },
          String(a.key)
        ))
      },
      s
    )) })
  ] }) });
}
const Ip = ({
  message: i,
  description: e,
  variant: t = "info",
  actionLabel: n,
  onAction: r,
  onClose: s
}) => {
  const a = {
    success: "border-emerald-400/40 text-emerald-100",
    info: "border-neo-accent/40 text-neo-text",
    warning: "border-neo-amber/40 text-neo-amber",
    danger: "border-red-400/40 text-red-100"
  };
  return /* @__PURE__ */ Me.jsxs("div", { className: At("glass-surface border px-4 py-3 rounded-neo-lg flex items-start gap-3", a[t]), children: [
    /* @__PURE__ */ Me.jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ Me.jsx("p", { className: "font-semibold", children: i }),
      e && /* @__PURE__ */ Me.jsx("p", { className: "text-sm text-neo-muted mt-1", children: e })
    ] }),
    n && /* @__PURE__ */ Me.jsx(go, { size: "sm", variant: "outline", onClick: r, children: n }),
    s && /* @__PURE__ */ Me.jsx(
      "button",
      {
        "aria-label": "Close toast",
        onClick: s,
        className: "text-neo-muted hover:text-neo-text transition-colors",
        children: "✕"
      }
    )
  ] });
};
const Js = "169", rl = 0, pa = 1, sl = 2, _o = 1, al = 2, en = 3, Sn = 0, wt = 1, tn = 2, xn = 0, ei = 1, gr = 2, ma = 3, ga = 4, ol = 5, Ln = 100, ll = 101, cl = 102, ul = 103, hl = 104, dl = 200, fl = 201, pl = 202, ml = 203, cs = 204, us = 205, gl = 206, _l = 207, vl = 208, xl = 209, Ml = 210, Sl = 211, El = 212, yl = 213, Tl = 214, hs = 0, ds = 1, fs = 2, ii = 3, ps = 4, ms = 5, gs = 6, _s = 7, vo = 0, bl = 1, Al = 2, Mn = 0, wl = 1, Rl = 2, Cl = 3, Pl = 4, Ll = 5, Dl = 6, Ul = 7, xo = 300, ri = 301, si = 302, vs = 303, xs = 304, Tr = 306, Ms = 1e3, Un = 1001, Ss = 1002, Nt = 1003, Il = 1004, Oi = 1005, Vt = 1006, Lr = 1007, In = 1008, on = 1009, Mo = 1010, So = 1011, Ti = 1012, Qs = 1013, Nn = 1014, nn = 1015, wi = 1016, ea = 1017, ta = 1018, ai = 1020, Eo = 35902, yo = 1021, To = 1022, Wt = 1023, bo = 1024, Ao = 1025, ti = 1026, oi = 1027, wo = 1028, na = 1029, Ro = 1030, ia = 1031, ra = 1033, cr = 33776, ur = 33777, hr = 33778, dr = 33779, Es = 35840, ys = 35841, Ts = 35842, bs = 35843, As = 36196, ws = 37492, Rs = 37496, Cs = 37808, Ps = 37809, Ls = 37810, Ds = 37811, Us = 37812, Is = 37813, Ns = 37814, Fs = 37815, Os = 37816, Bs = 37817, zs = 37818, Hs = 37819, Gs = 37820, Vs = 37821, fr = 36492, ks = 36494, Ws = 36495, Co = 36283, Xs = 36284, qs = 36285, Ys = 36286, Nl = 3200, Fl = 3201, Ol = 0, Bl = 1, vn = "", Yt = "srgb", En = "srgb-linear", sa = "display-p3", br = "display-p3-linear", _r = "linear", st = "srgb", vr = "rec709", xr = "p3", zn = 7680, _a = 519, zl = 512, Hl = 513, Gl = 514, Po = 515, Vl = 516, kl = 517, Wl = 518, Xl = 519, va = 35044, xa = "300 es", rn = 2e3, Mr = 2001;
class ci {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const r = this._listeners[e];
    if (r !== void 0) {
      const s = r.indexOf(t);
      s !== -1 && r.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const r = n.slice(0);
      for (let s = 0, a = r.length; s < a; s++)
        r[s].call(this, e);
      e.target = null;
    }
  }
}
const vt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], Dr = Math.PI / 180, js = 180 / Math.PI;
function Ri() {
  const i = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (vt[i & 255] + vt[i >> 8 & 255] + vt[i >> 16 & 255] + vt[i >> 24 & 255] + "-" + vt[e & 255] + vt[e >> 8 & 255] + "-" + vt[e >> 16 & 15 | 64] + vt[e >> 24 & 255] + "-" + vt[t & 63 | 128] + vt[t >> 8 & 255] + "-" + vt[t >> 16 & 255] + vt[t >> 24 & 255] + vt[n & 255] + vt[n >> 8 & 255] + vt[n >> 16 & 255] + vt[n >> 24 & 255]).toLowerCase();
}
function Tt(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function ql(i, e) {
  return (i % e + e) % e;
}
function Ur(i, e, t) {
  return (1 - t) * i + t * e;
}
function gi(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return i / 4294967295;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int32Array:
      return Math.max(i / 2147483647, -1);
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function yt(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return Math.round(i * 4294967295);
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
      return Math.round(i * 255);
    case Int32Array:
      return Math.round(i * 2147483647);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
class it {
  constructor(e = 0, t = 0) {
    it.prototype.isVector2 = !0, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, r = e.elements;
    return this.x = r[0] * t + r[3] * n + r[6], this.y = r[1] * t + r[4] * n + r[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Tt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), r = Math.sin(t), s = this.x - e.x, a = this.y - e.y;
    return this.x = s * n - a * r + e.x, this.y = s * r + a * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Fe {
  constructor(e, t, n, r, s, a, o, l, c) {
    Fe.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, r, s, a, o, l, c);
  }
  set(e, t, n, r, s, a, o, l, c) {
    const h = this.elements;
    return h[0] = e, h[1] = r, h[2] = o, h[3] = t, h[4] = s, h[5] = l, h[6] = n, h[7] = a, h[8] = c, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, r = t.elements, s = this.elements, a = n[0], o = n[3], l = n[6], c = n[1], h = n[4], f = n[7], p = n[2], m = n[5], x = n[8], M = r[0], d = r[3], u = r[6], T = r[1], E = r[4], b = r[7], G = r[2], P = r[5], w = r[8];
    return s[0] = a * M + o * T + l * G, s[3] = a * d + o * E + l * P, s[6] = a * u + o * b + l * w, s[1] = c * M + h * T + f * G, s[4] = c * d + h * E + f * P, s[7] = c * u + h * b + f * w, s[2] = p * M + m * T + x * G, s[5] = p * d + m * E + x * P, s[8] = p * u + m * b + x * w, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8];
    return t * a * h - t * o * c - n * s * h + n * o * l + r * s * c - r * a * l;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8], f = h * a - o * c, p = o * l - h * s, m = c * s - a * l, x = t * f + n * p + r * m;
    if (x === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const M = 1 / x;
    return e[0] = f * M, e[1] = (r * c - h * n) * M, e[2] = (o * n - r * a) * M, e[3] = p * M, e[4] = (h * t - r * l) * M, e[5] = (r * s - o * t) * M, e[6] = m * M, e[7] = (n * l - c * t) * M, e[8] = (a * t - n * s) * M, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, r, s, a, o) {
    const l = Math.cos(s), c = Math.sin(s);
    return this.set(
      n * l,
      n * c,
      -n * (l * a + c * o) + a + e,
      -r * c,
      r * l,
      -r * (-c * a + l * o) + o + t,
      0,
      0,
      1
    ), this;
  }
  //
  scale(e, t) {
    return this.premultiply(Ir.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(Ir.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(Ir.makeTranslation(e, t)), this;
  }
  // for 2D Transforms
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(
      1,
      0,
      e.x,
      0,
      1,
      e.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      e,
      0,
      1,
      t,
      0,
      0,
      1
    ), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      n,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t) {
    return this.set(
      e,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  //
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let r = 0; r < 9; r++)
      if (t[r] !== n[r]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Ir = /* @__PURE__ */ new Fe();
function Lo(i) {
  for (let e = i.length - 1; e >= 0; --e)
    if (i[e] >= 65535) return !0;
  return !1;
}
function Sr(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function Yl() {
  const i = Sr("canvas");
  return i.style.display = "block", i;
}
const Ma = {};
function pr(i) {
  i in Ma || (Ma[i] = !0, console.warn(i));
}
function jl(i, e, t) {
  return new Promise(function(n, r) {
    function s() {
      switch (i.clientWaitSync(e, i.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case i.WAIT_FAILED:
          r();
          break;
        case i.TIMEOUT_EXPIRED:
          setTimeout(s, t);
          break;
        default:
          n();
      }
    }
    setTimeout(s, t);
  });
}
function Kl(i) {
  const e = i.elements;
  e[2] = 0.5 * e[2] + 0.5 * e[3], e[6] = 0.5 * e[6] + 0.5 * e[7], e[10] = 0.5 * e[10] + 0.5 * e[11], e[14] = 0.5 * e[14] + 0.5 * e[15];
}
function $l(i) {
  const e = i.elements;
  e[11] === -1 ? (e[10] = -e[10] - 1, e[14] = -e[14]) : (e[10] = -e[10], e[14] = -e[14] + 1);
}
const Sa = /* @__PURE__ */ new Fe().set(
  0.8224621,
  0.177538,
  0,
  0.0331941,
  0.9668058,
  0,
  0.0170827,
  0.0723974,
  0.9105199
), Ea = /* @__PURE__ */ new Fe().set(
  1.2249401,
  -0.2249404,
  0,
  -0.0420569,
  1.0420571,
  0,
  -0.0196376,
  -0.0786361,
  1.0982735
), _i = {
  [En]: {
    transfer: _r,
    primaries: vr,
    luminanceCoefficients: [0.2126, 0.7152, 0.0722],
    toReference: (i) => i,
    fromReference: (i) => i
  },
  [Yt]: {
    transfer: st,
    primaries: vr,
    luminanceCoefficients: [0.2126, 0.7152, 0.0722],
    toReference: (i) => i.convertSRGBToLinear(),
    fromReference: (i) => i.convertLinearToSRGB()
  },
  [br]: {
    transfer: _r,
    primaries: xr,
    luminanceCoefficients: [0.2289, 0.6917, 0.0793],
    toReference: (i) => i.applyMatrix3(Ea),
    fromReference: (i) => i.applyMatrix3(Sa)
  },
  [sa]: {
    transfer: st,
    primaries: xr,
    luminanceCoefficients: [0.2289, 0.6917, 0.0793],
    toReference: (i) => i.convertSRGBToLinear().applyMatrix3(Ea),
    fromReference: (i) => i.applyMatrix3(Sa).convertLinearToSRGB()
  }
}, Zl = /* @__PURE__ */ new Set([En, br]), Je = {
  enabled: !0,
  _workingColorSpace: En,
  get workingColorSpace() {
    return this._workingColorSpace;
  },
  set workingColorSpace(i) {
    if (!Zl.has(i))
      throw new Error(`Unsupported working color space, "${i}".`);
    this._workingColorSpace = i;
  },
  convert: function(i, e, t) {
    if (this.enabled === !1 || e === t || !e || !t)
      return i;
    const n = _i[e].toReference, r = _i[t].fromReference;
    return r(n(i));
  },
  fromWorkingColorSpace: function(i, e) {
    return this.convert(i, this._workingColorSpace, e);
  },
  toWorkingColorSpace: function(i, e) {
    return this.convert(i, e, this._workingColorSpace);
  },
  getPrimaries: function(i) {
    return _i[i].primaries;
  },
  getTransfer: function(i) {
    return i === vn ? _r : _i[i].transfer;
  },
  getLuminanceCoefficients: function(i, e = this._workingColorSpace) {
    return i.fromArray(_i[e].luminanceCoefficients);
  }
};
function ni(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function Nr(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let Hn;
class Jl {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      Hn === void 0 && (Hn = Sr("canvas")), Hn.width = e.width, Hn.height = e.height;
      const n = Hn.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Hn;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = Sr("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const r = n.getImageData(0, 0, e.width, e.height), s = r.data;
      for (let a = 0; a < s.length; a++)
        s[a] = ni(s[a] / 255) * 255;
      return n.putImageData(r, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(ni(t[n] / 255) * 255) : t[n] = ni(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let Ql = 0;
class Do {
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: Ql++ }), this.uuid = Ri(), this.data = e, this.dataReady = !0, this.version = 0;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, r = this.data;
    if (r !== null) {
      let s;
      if (Array.isArray(r)) {
        s = [];
        for (let a = 0, o = r.length; a < o; a++)
          r[a].isDataTexture ? s.push(Fr(r[a].image)) : s.push(Fr(r[a]));
      } else
        s = Fr(r);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Fr(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? Jl.getDataURL(i) : i.data ? {
    data: Array.from(i.data),
    width: i.width,
    height: i.height,
    type: i.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let ec = 0;
class Rt extends ci {
  constructor(e = Rt.DEFAULT_IMAGE, t = Rt.DEFAULT_MAPPING, n = Un, r = Un, s = Vt, a = In, o = Wt, l = on, c = Rt.DEFAULT_ANISOTROPY, h = vn) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: ec++ }), this.uuid = Ri(), this.name = "", this.source = new Do(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = r, this.magFilter = s, this.minFilter = a, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new it(0, 0), this.repeat = new it(1, 1), this.center = new it(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Fe(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.pmremVersion = 0;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.6,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== xo) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case Ms:
          e.x = e.x - Math.floor(e.x);
          break;
        case Un:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Ss:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Ms:
          e.y = e.y - Math.floor(e.y);
          break;
        case Un:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Ss:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  set needsPMREMUpdate(e) {
    e === !0 && this.pmremVersion++;
  }
}
Rt.DEFAULT_IMAGE = null;
Rt.DEFAULT_MAPPING = xo;
Rt.DEFAULT_ANISOTROPY = 1;
class ut {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    ut.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = r;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, r) {
    return this.x = e, this.y = t, this.z = n, this.w = r, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, r = this.z, s = this.w, a = e.elements;
    return this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * s, this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * s, this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * s, this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * s, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, r, s;
    const l = e.elements, c = l[0], h = l[4], f = l[8], p = l[1], m = l[5], x = l[9], M = l[2], d = l[6], u = l[10];
    if (Math.abs(h - p) < 0.01 && Math.abs(f - M) < 0.01 && Math.abs(x - d) < 0.01) {
      if (Math.abs(h + p) < 0.1 && Math.abs(f + M) < 0.1 && Math.abs(x + d) < 0.1 && Math.abs(c + m + u - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const E = (c + 1) / 2, b = (m + 1) / 2, G = (u + 1) / 2, P = (h + p) / 4, w = (f + M) / 4, O = (x + d) / 4;
      return E > b && E > G ? E < 0.01 ? (n = 0, r = 0.707106781, s = 0.707106781) : (n = Math.sqrt(E), r = P / n, s = w / n) : b > G ? b < 0.01 ? (n = 0.707106781, r = 0, s = 0.707106781) : (r = Math.sqrt(b), n = P / r, s = O / r) : G < 0.01 ? (n = 0.707106781, r = 0.707106781, s = 0) : (s = Math.sqrt(G), n = w / s, r = O / s), this.set(n, r, s, t), this;
    }
    let T = Math.sqrt((d - x) * (d - x) + (f - M) * (f - M) + (p - h) * (p - h));
    return Math.abs(T) < 1e-3 && (T = 1), this.x = (d - x) / T, this.y = (f - M) / T, this.z = (p - h) / T, this.w = Math.acos((c + m + u - 1) / 2), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class tc extends ci {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new ut(0, 0, e, t), this.scissorTest = !1, this.viewport = new ut(0, 0, e, t);
    const r = { width: e, height: t, depth: 1 };
    n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: Vt,
      depthBuffer: !0,
      stencilBuffer: !1,
      resolveDepthBuffer: !0,
      resolveStencilBuffer: !0,
      depthTexture: null,
      samples: 0,
      count: 1
    }, n);
    const s = new Rt(r, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
    s.flipY = !1, s.generateMipmaps = n.generateMipmaps, s.internalFormat = n.internalFormat, this.textures = [];
    const a = n.count;
    for (let o = 0; o < a; o++)
      this.textures[o] = s.clone(), this.textures[o].isRenderTargetTexture = !0;
    this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples;
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      this.width = e, this.height = t, this.depth = n;
      for (let r = 0, s = this.textures.length; r < s; r++)
        this.textures[r].image.width = e, this.textures[r].image.height = t, this.textures[r].image.depth = n;
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
    for (let n = 0, r = e.textures.length; n < r; n++)
      this.textures[n] = e.textures[n].clone(), this.textures[n].isRenderTargetTexture = !0;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new Do(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Fn extends tc {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = !0;
  }
}
class Uo extends Rt {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = Nt, this.minFilter = Nt, this.wrapR = Un, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class nc extends Rt {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = Nt, this.minFilter = Nt, this.wrapR = Un, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Ci {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = r;
  }
  static slerpFlat(e, t, n, r, s, a, o) {
    let l = n[r + 0], c = n[r + 1], h = n[r + 2], f = n[r + 3];
    const p = s[a + 0], m = s[a + 1], x = s[a + 2], M = s[a + 3];
    if (o === 0) {
      e[t + 0] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = f;
      return;
    }
    if (o === 1) {
      e[t + 0] = p, e[t + 1] = m, e[t + 2] = x, e[t + 3] = M;
      return;
    }
    if (f !== M || l !== p || c !== m || h !== x) {
      let d = 1 - o;
      const u = l * p + c * m + h * x + f * M, T = u >= 0 ? 1 : -1, E = 1 - u * u;
      if (E > Number.EPSILON) {
        const G = Math.sqrt(E), P = Math.atan2(G, u * T);
        d = Math.sin(d * P) / G, o = Math.sin(o * P) / G;
      }
      const b = o * T;
      if (l = l * d + p * b, c = c * d + m * b, h = h * d + x * b, f = f * d + M * b, d === 1 - o) {
        const G = 1 / Math.sqrt(l * l + c * c + h * h + f * f);
        l *= G, c *= G, h *= G, f *= G;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = f;
  }
  static multiplyQuaternionsFlat(e, t, n, r, s, a) {
    const o = n[r], l = n[r + 1], c = n[r + 2], h = n[r + 3], f = s[a], p = s[a + 1], m = s[a + 2], x = s[a + 3];
    return e[t] = o * x + h * f + l * m - c * p, e[t + 1] = l * x + h * p + c * f - o * m, e[t + 2] = c * x + h * m + o * p - l * f, e[t + 3] = h * x - o * f - l * p - c * m, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, r) {
    return this._x = e, this._y = t, this._z = n, this._w = r, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t = !0) {
    const n = e._x, r = e._y, s = e._z, a = e._order, o = Math.cos, l = Math.sin, c = o(n / 2), h = o(r / 2), f = o(s / 2), p = l(n / 2), m = l(r / 2), x = l(s / 2);
    switch (a) {
      case "XYZ":
        this._x = p * h * f + c * m * x, this._y = c * m * f - p * h * x, this._z = c * h * x + p * m * f, this._w = c * h * f - p * m * x;
        break;
      case "YXZ":
        this._x = p * h * f + c * m * x, this._y = c * m * f - p * h * x, this._z = c * h * x - p * m * f, this._w = c * h * f + p * m * x;
        break;
      case "ZXY":
        this._x = p * h * f - c * m * x, this._y = c * m * f + p * h * x, this._z = c * h * x + p * m * f, this._w = c * h * f - p * m * x;
        break;
      case "ZYX":
        this._x = p * h * f - c * m * x, this._y = c * m * f + p * h * x, this._z = c * h * x - p * m * f, this._w = c * h * f + p * m * x;
        break;
      case "YZX":
        this._x = p * h * f + c * m * x, this._y = c * m * f + p * h * x, this._z = c * h * x - p * m * f, this._w = c * h * f - p * m * x;
        break;
      case "XZY":
        this._x = p * h * f - c * m * x, this._y = c * m * f - p * h * x, this._z = c * h * x + p * m * f, this._w = c * h * f + p * m * x;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, r = Math.sin(n);
    return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], r = t[4], s = t[8], a = t[1], o = t[5], l = t[9], c = t[2], h = t[6], f = t[10], p = n + o + f;
    if (p > 0) {
      const m = 0.5 / Math.sqrt(p + 1);
      this._w = 0.25 / m, this._x = (h - l) * m, this._y = (s - c) * m, this._z = (a - r) * m;
    } else if (n > o && n > f) {
      const m = 2 * Math.sqrt(1 + n - o - f);
      this._w = (h - l) / m, this._x = 0.25 * m, this._y = (r + a) / m, this._z = (s + c) / m;
    } else if (o > f) {
      const m = 2 * Math.sqrt(1 + o - n - f);
      this._w = (s - c) / m, this._x = (r + a) / m, this._y = 0.25 * m, this._z = (l + h) / m;
    } else {
      const m = 2 * Math.sqrt(1 + f - n - o);
      this._w = (a - r) / m, this._x = (s + c) / m, this._y = (l + h) / m, this._z = 0.25 * m;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Tt(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const r = Math.min(1, t / n);
    return this.slerp(e, r), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, r = e._y, s = e._z, a = e._w, o = t._x, l = t._y, c = t._z, h = t._w;
    return this._x = n * h + a * o + r * c - s * l, this._y = r * h + a * l + s * o - n * c, this._z = s * h + a * c + n * l - r * o, this._w = a * h - n * o - r * l - s * c, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x, r = this._y, s = this._z, a = this._w;
    let o = a * e._w + n * e._x + r * e._y + s * e._z;
    if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1)
      return this._w = a, this._x = n, this._y = r, this._z = s, this;
    const l = 1 - o * o;
    if (l <= Number.EPSILON) {
      const m = 1 - t;
      return this._w = m * a + t * this._w, this._x = m * n + t * this._x, this._y = m * r + t * this._y, this._z = m * s + t * this._z, this.normalize(), this;
    }
    const c = Math.sqrt(l), h = Math.atan2(c, o), f = Math.sin((1 - t) * h) / c, p = Math.sin(t * h) / c;
    return this._w = a * f + this._w * p, this._x = n * f + this._x * p, this._y = r * f + this._y * p, this._z = s * f + this._z * p, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), r = Math.sqrt(1 - n), s = Math.sqrt(n);
    return this.set(
      r * Math.sin(e),
      r * Math.cos(e),
      s * Math.sin(t),
      s * Math.cos(t)
    );
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class F {
  constructor(e = 0, t = 0, n = 0) {
    F.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(ya.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(ya.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6] * r, this.y = s[1] * t + s[4] * n + s[7] * r, this.z = s[2] * t + s[5] * n + s[8] * r, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements, a = 1 / (s[3] * t + s[7] * n + s[11] * r + s[15]);
    return this.x = (s[0] * t + s[4] * n + s[8] * r + s[12]) * a, this.y = (s[1] * t + s[5] * n + s[9] * r + s[13]) * a, this.z = (s[2] * t + s[6] * n + s[10] * r + s[14]) * a, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, r = this.z, s = e.x, a = e.y, o = e.z, l = e.w, c = 2 * (a * r - o * n), h = 2 * (o * t - s * r), f = 2 * (s * n - a * t);
    return this.x = t + l * c + a * f - o * h, this.y = n + l * h + o * c - s * f, this.z = r + l * f + s * h - a * c, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements;
    return this.x = s[0] * t + s[4] * n + s[8] * r, this.y = s[1] * t + s[5] * n + s[9] * r, this.z = s[2] * t + s[6] * n + s[10] * r, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  // TODO lengthSquared?
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, r = e.y, s = e.z, a = t.x, o = t.y, l = t.z;
    return this.x = r * l - s * o, this.y = s * a - n * l, this.z = n * o - r * a, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return Or.copy(this).projectOnVector(e), this.sub(Or);
  }
  reflect(e) {
    return this.sub(Or.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Tt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, r = this.z - e.z;
    return t * t + n * n + r * r;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const r = Math.sin(t) * e;
    return this.x = r * Math.sin(n), this.y = Math.cos(t) * e, this.z = r * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), r = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = r, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t);
    return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Or = /* @__PURE__ */ new F(), ya = /* @__PURE__ */ new Ci();
class Pi {
  constructor(e = new F(1 / 0, 1 / 0, 1 / 0), t = new F(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(Bt.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(Bt.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Bt.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const s = n.getAttribute("position");
      if (t === !0 && s !== void 0 && e.isInstancedMesh !== !0)
        for (let a = 0, o = s.count; a < o; a++)
          e.isMesh === !0 ? e.getVertexPosition(a, Bt) : Bt.fromBufferAttribute(s, a), Bt.applyMatrix4(e.matrixWorld), this.expandByPoint(Bt);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), Bi.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Bi.copy(n.boundingBox)), Bi.applyMatrix4(e.matrixWorld), this.union(Bi);
    }
    const r = e.children;
    for (let s = 0, a = r.length; s < a; s++)
      this.expandByObject(r[s], t);
    return this;
  }
  containsPoint(e) {
    return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, Bt), Bt.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(vi), zi.subVectors(this.max, vi), Gn.subVectors(e.a, vi), Vn.subVectors(e.b, vi), kn.subVectors(e.c, vi), hn.subVectors(Vn, Gn), dn.subVectors(kn, Vn), yn.subVectors(Gn, kn);
    let t = [
      0,
      -hn.z,
      hn.y,
      0,
      -dn.z,
      dn.y,
      0,
      -yn.z,
      yn.y,
      hn.z,
      0,
      -hn.x,
      dn.z,
      0,
      -dn.x,
      yn.z,
      0,
      -yn.x,
      -hn.y,
      hn.x,
      0,
      -dn.y,
      dn.x,
      0,
      -yn.y,
      yn.x,
      0
    ];
    return !Br(t, Gn, Vn, kn, zi) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Br(t, Gn, Vn, kn, zi)) ? !1 : (Hi.crossVectors(hn, dn), t = [Hi.x, Hi.y, Hi.z], Br(t, Gn, Vn, kn, zi));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Bt).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Bt).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (Kt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Kt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Kt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Kt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Kt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Kt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Kt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Kt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Kt), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Kt = [
  /* @__PURE__ */ new F(),
  /* @__PURE__ */ new F(),
  /* @__PURE__ */ new F(),
  /* @__PURE__ */ new F(),
  /* @__PURE__ */ new F(),
  /* @__PURE__ */ new F(),
  /* @__PURE__ */ new F(),
  /* @__PURE__ */ new F()
], Bt = /* @__PURE__ */ new F(), Bi = /* @__PURE__ */ new Pi(), Gn = /* @__PURE__ */ new F(), Vn = /* @__PURE__ */ new F(), kn = /* @__PURE__ */ new F(), hn = /* @__PURE__ */ new F(), dn = /* @__PURE__ */ new F(), yn = /* @__PURE__ */ new F(), vi = /* @__PURE__ */ new F(), zi = /* @__PURE__ */ new F(), Hi = /* @__PURE__ */ new F(), Tn = /* @__PURE__ */ new F();
function Br(i, e, t, n, r) {
  for (let s = 0, a = i.length - 3; s <= a; s += 3) {
    Tn.fromArray(i, s);
    const o = r.x * Math.abs(Tn.x) + r.y * Math.abs(Tn.y) + r.z * Math.abs(Tn.z), l = e.dot(Tn), c = t.dot(Tn), h = n.dot(Tn);
    if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > o)
      return !1;
  }
  return !0;
}
const ic = /* @__PURE__ */ new Pi(), xi = /* @__PURE__ */ new F(), zr = /* @__PURE__ */ new F();
class Li {
  constructor(e = new F(), t = -1) {
    this.isSphere = !0, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : ic.setFromPoints(e).getCenter(n);
    let r = 0;
    for (let s = 0, a = e.length; s < a; s++)
      r = Math.max(r, n.distanceToSquared(e[s]));
    return this.radius = Math.sqrt(r), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    xi.subVectors(e, this.center);
    const t = xi.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), r = (n - this.radius) * 0.5;
      this.center.addScaledVector(xi, r / n), this.radius += r;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (zr.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(xi.copy(e.center).add(zr)), this.expandByPoint(xi.copy(e.center).sub(zr))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const $t = /* @__PURE__ */ new F(), Hr = /* @__PURE__ */ new F(), Gi = /* @__PURE__ */ new F(), fn = /* @__PURE__ */ new F(), Gr = /* @__PURE__ */ new F(), Vi = /* @__PURE__ */ new F(), Vr = /* @__PURE__ */ new F();
class aa {
  constructor(e = new F(), t = new F(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, $t)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = $t.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : ($t.copy(this.origin).addScaledVector(this.direction, t), $t.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, r) {
    Hr.copy(e).add(t).multiplyScalar(0.5), Gi.copy(t).sub(e).normalize(), fn.copy(this.origin).sub(Hr);
    const s = e.distanceTo(t) * 0.5, a = -this.direction.dot(Gi), o = fn.dot(this.direction), l = -fn.dot(Gi), c = fn.lengthSq(), h = Math.abs(1 - a * a);
    let f, p, m, x;
    if (h > 0)
      if (f = a * l - o, p = a * o - l, x = s * h, f >= 0)
        if (p >= -x)
          if (p <= x) {
            const M = 1 / h;
            f *= M, p *= M, m = f * (f + a * p + 2 * o) + p * (a * f + p + 2 * l) + c;
          } else
            p = s, f = Math.max(0, -(a * p + o)), m = -f * f + p * (p + 2 * l) + c;
        else
          p = -s, f = Math.max(0, -(a * p + o)), m = -f * f + p * (p + 2 * l) + c;
      else
        p <= -x ? (f = Math.max(0, -(-a * s + o)), p = f > 0 ? -s : Math.min(Math.max(-s, -l), s), m = -f * f + p * (p + 2 * l) + c) : p <= x ? (f = 0, p = Math.min(Math.max(-s, -l), s), m = p * (p + 2 * l) + c) : (f = Math.max(0, -(a * s + o)), p = f > 0 ? s : Math.min(Math.max(-s, -l), s), m = -f * f + p * (p + 2 * l) + c);
    else
      p = a > 0 ? -s : s, f = Math.max(0, -(a * p + o)), m = -f * f + p * (p + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, f), r && r.copy(Hr).addScaledVector(Gi, p), m;
  }
  intersectSphere(e, t) {
    $t.subVectors(e.center, this.origin);
    const n = $t.dot(this.direction), r = $t.dot($t) - n * n, s = e.radius * e.radius;
    if (r > s) return null;
    const a = Math.sqrt(s - r), o = n - a, l = n + a;
    return l < 0 ? null : o < 0 ? this.at(l, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, r, s, a, o, l;
    const c = 1 / this.direction.x, h = 1 / this.direction.y, f = 1 / this.direction.z, p = this.origin;
    return c >= 0 ? (n = (e.min.x - p.x) * c, r = (e.max.x - p.x) * c) : (n = (e.max.x - p.x) * c, r = (e.min.x - p.x) * c), h >= 0 ? (s = (e.min.y - p.y) * h, a = (e.max.y - p.y) * h) : (s = (e.max.y - p.y) * h, a = (e.min.y - p.y) * h), n > a || s > r || ((s > n || isNaN(n)) && (n = s), (a < r || isNaN(r)) && (r = a), f >= 0 ? (o = (e.min.z - p.z) * f, l = (e.max.z - p.z) * f) : (o = (e.max.z - p.z) * f, l = (e.min.z - p.z) * f), n > l || o > r) || ((o > n || n !== n) && (n = o), (l < r || r !== r) && (r = l), r < 0) ? null : this.at(n >= 0 ? n : r, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, $t) !== null;
  }
  intersectTriangle(e, t, n, r, s) {
    Gr.subVectors(t, e), Vi.subVectors(n, e), Vr.crossVectors(Gr, Vi);
    let a = this.direction.dot(Vr), o;
    if (a > 0) {
      if (r) return null;
      o = 1;
    } else if (a < 0)
      o = -1, a = -a;
    else
      return null;
    fn.subVectors(this.origin, e);
    const l = o * this.direction.dot(Vi.crossVectors(fn, Vi));
    if (l < 0)
      return null;
    const c = o * this.direction.dot(Gr.cross(fn));
    if (c < 0 || l + c > a)
      return null;
    const h = -o * fn.dot(Vr);
    return h < 0 ? null : this.at(h / a, s);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class lt {
  constructor(e, t, n, r, s, a, o, l, c, h, f, p, m, x, M, d) {
    lt.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, r, s, a, o, l, c, h, f, p, m, x, M, d);
  }
  set(e, t, n, r, s, a, o, l, c, h, f, p, m, x, M, d) {
    const u = this.elements;
    return u[0] = e, u[4] = t, u[8] = n, u[12] = r, u[1] = s, u[5] = a, u[9] = o, u[13] = l, u[2] = c, u[6] = h, u[10] = f, u[14] = p, u[3] = m, u[7] = x, u[11] = M, u[15] = d, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new lt().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, r = 1 / Wn.setFromMatrixColumn(e, 0).length(), s = 1 / Wn.setFromMatrixColumn(e, 1).length(), a = 1 / Wn.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, r = e.y, s = e.z, a = Math.cos(n), o = Math.sin(n), l = Math.cos(r), c = Math.sin(r), h = Math.cos(s), f = Math.sin(s);
    if (e.order === "XYZ") {
      const p = a * h, m = a * f, x = o * h, M = o * f;
      t[0] = l * h, t[4] = -l * f, t[8] = c, t[1] = m + x * c, t[5] = p - M * c, t[9] = -o * l, t[2] = M - p * c, t[6] = x + m * c, t[10] = a * l;
    } else if (e.order === "YXZ") {
      const p = l * h, m = l * f, x = c * h, M = c * f;
      t[0] = p + M * o, t[4] = x * o - m, t[8] = a * c, t[1] = a * f, t[5] = a * h, t[9] = -o, t[2] = m * o - x, t[6] = M + p * o, t[10] = a * l;
    } else if (e.order === "ZXY") {
      const p = l * h, m = l * f, x = c * h, M = c * f;
      t[0] = p - M * o, t[4] = -a * f, t[8] = x + m * o, t[1] = m + x * o, t[5] = a * h, t[9] = M - p * o, t[2] = -a * c, t[6] = o, t[10] = a * l;
    } else if (e.order === "ZYX") {
      const p = a * h, m = a * f, x = o * h, M = o * f;
      t[0] = l * h, t[4] = x * c - m, t[8] = p * c + M, t[1] = l * f, t[5] = M * c + p, t[9] = m * c - x, t[2] = -c, t[6] = o * l, t[10] = a * l;
    } else if (e.order === "YZX") {
      const p = a * l, m = a * c, x = o * l, M = o * c;
      t[0] = l * h, t[4] = M - p * f, t[8] = x * f + m, t[1] = f, t[5] = a * h, t[9] = -o * h, t[2] = -c * h, t[6] = m * f + x, t[10] = p - M * f;
    } else if (e.order === "XZY") {
      const p = a * l, m = a * c, x = o * l, M = o * c;
      t[0] = l * h, t[4] = -f, t[8] = c * h, t[1] = p * f + M, t[5] = a * h, t[9] = m * f - x, t[2] = x * f - m, t[6] = o * h, t[10] = M * f + p;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(rc, e, sc);
  }
  lookAt(e, t, n) {
    const r = this.elements;
    return Lt.subVectors(e, t), Lt.lengthSq() === 0 && (Lt.z = 1), Lt.normalize(), pn.crossVectors(n, Lt), pn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Lt.x += 1e-4 : Lt.z += 1e-4, Lt.normalize(), pn.crossVectors(n, Lt)), pn.normalize(), ki.crossVectors(Lt, pn), r[0] = pn.x, r[4] = ki.x, r[8] = Lt.x, r[1] = pn.y, r[5] = ki.y, r[9] = Lt.y, r[2] = pn.z, r[6] = ki.z, r[10] = Lt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, r = t.elements, s = this.elements, a = n[0], o = n[4], l = n[8], c = n[12], h = n[1], f = n[5], p = n[9], m = n[13], x = n[2], M = n[6], d = n[10], u = n[14], T = n[3], E = n[7], b = n[11], G = n[15], P = r[0], w = r[4], O = r[8], ee = r[12], g = r[1], S = r[5], W = r[9], B = r[13], k = r[2], $ = r[6], z = r[10], te = r[14], V = r[3], ue = r[7], he = r[11], ie = r[15];
    return s[0] = a * P + o * g + l * k + c * V, s[4] = a * w + o * S + l * $ + c * ue, s[8] = a * O + o * W + l * z + c * he, s[12] = a * ee + o * B + l * te + c * ie, s[1] = h * P + f * g + p * k + m * V, s[5] = h * w + f * S + p * $ + m * ue, s[9] = h * O + f * W + p * z + m * he, s[13] = h * ee + f * B + p * te + m * ie, s[2] = x * P + M * g + d * k + u * V, s[6] = x * w + M * S + d * $ + u * ue, s[10] = x * O + M * W + d * z + u * he, s[14] = x * ee + M * B + d * te + u * ie, s[3] = T * P + E * g + b * k + G * V, s[7] = T * w + E * S + b * $ + G * ue, s[11] = T * O + E * W + b * z + G * he, s[15] = T * ee + E * B + b * te + G * ie, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], r = e[8], s = e[12], a = e[1], o = e[5], l = e[9], c = e[13], h = e[2], f = e[6], p = e[10], m = e[14], x = e[3], M = e[7], d = e[11], u = e[15];
    return x * (+s * l * f - r * c * f - s * o * p + n * c * p + r * o * m - n * l * m) + M * (+t * l * m - t * c * p + s * a * p - r * a * m + r * c * h - s * l * h) + d * (+t * c * f - t * o * m - s * a * f + n * a * m + s * o * h - n * c * h) + u * (-r * o * h - t * l * f + t * o * p + r * a * f - n * a * p + n * l * h);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const r = this.elements;
    return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = t, r[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8], f = e[9], p = e[10], m = e[11], x = e[12], M = e[13], d = e[14], u = e[15], T = f * d * c - M * p * c + M * l * m - o * d * m - f * l * u + o * p * u, E = x * p * c - h * d * c - x * l * m + a * d * m + h * l * u - a * p * u, b = h * M * c - x * f * c + x * o * m - a * M * m - h * o * u + a * f * u, G = x * f * l - h * M * l - x * o * p + a * M * p + h * o * d - a * f * d, P = t * T + n * E + r * b + s * G;
    if (P === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const w = 1 / P;
    return e[0] = T * w, e[1] = (M * p * s - f * d * s - M * r * m + n * d * m + f * r * u - n * p * u) * w, e[2] = (o * d * s - M * l * s + M * r * c - n * d * c - o * r * u + n * l * u) * w, e[3] = (f * l * s - o * p * s - f * r * c + n * p * c + o * r * m - n * l * m) * w, e[4] = E * w, e[5] = (h * d * s - x * p * s + x * r * m - t * d * m - h * r * u + t * p * u) * w, e[6] = (x * l * s - a * d * s - x * r * c + t * d * c + a * r * u - t * l * u) * w, e[7] = (a * p * s - h * l * s + h * r * c - t * p * c - a * r * m + t * l * m) * w, e[8] = b * w, e[9] = (x * f * s - h * M * s - x * n * m + t * M * m + h * n * u - t * f * u) * w, e[10] = (a * M * s - x * o * s + x * n * c - t * M * c - a * n * u + t * o * u) * w, e[11] = (h * o * s - a * f * s - h * n * c + t * f * c + a * n * m - t * o * m) * w, e[12] = G * w, e[13] = (h * M * r - x * f * r + x * n * p - t * M * p - h * n * d + t * f * d) * w, e[14] = (x * o * r - a * M * r - x * n * l + t * M * l + a * n * d - t * o * d) * w, e[15] = (a * f * r - h * o * r + h * n * l - t * f * l - a * n * p + t * o * p) * w, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, r = e.y, s = e.z;
    return t[0] *= n, t[4] *= r, t[8] *= s, t[1] *= n, t[5] *= r, t[9] *= s, t[2] *= n, t[6] *= r, t[10] *= s, t[3] *= n, t[7] *= r, t[11] *= s, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, r));
  }
  makeTranslation(e, t, n) {
    return e.isVector3 ? this.set(
      1,
      0,
      0,
      e.x,
      0,
      1,
      0,
      e.y,
      0,
      0,
      1,
      e.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), r = Math.sin(t), s = 1 - n, a = e.x, o = e.y, l = e.z, c = s * a, h = s * o;
    return this.set(
      c * a + n,
      c * o - r * l,
      c * l + r * o,
      0,
      c * o + r * l,
      h * o + n,
      h * l - r * a,
      0,
      c * l - r * o,
      h * l + r * a,
      s * l * l + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(e, t, n, r, s, a) {
    return this.set(
      1,
      n,
      s,
      0,
      e,
      1,
      a,
      0,
      t,
      r,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(e, t, n) {
    const r = this.elements, s = t._x, a = t._y, o = t._z, l = t._w, c = s + s, h = a + a, f = o + o, p = s * c, m = s * h, x = s * f, M = a * h, d = a * f, u = o * f, T = l * c, E = l * h, b = l * f, G = n.x, P = n.y, w = n.z;
    return r[0] = (1 - (M + u)) * G, r[1] = (m + b) * G, r[2] = (x - E) * G, r[3] = 0, r[4] = (m - b) * P, r[5] = (1 - (p + u)) * P, r[6] = (d + T) * P, r[7] = 0, r[8] = (x + E) * w, r[9] = (d - T) * w, r[10] = (1 - (p + M)) * w, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
  }
  decompose(e, t, n) {
    const r = this.elements;
    let s = Wn.set(r[0], r[1], r[2]).length();
    const a = Wn.set(r[4], r[5], r[6]).length(), o = Wn.set(r[8], r[9], r[10]).length();
    this.determinant() < 0 && (s = -s), e.x = r[12], e.y = r[13], e.z = r[14], zt.copy(this);
    const c = 1 / s, h = 1 / a, f = 1 / o;
    return zt.elements[0] *= c, zt.elements[1] *= c, zt.elements[2] *= c, zt.elements[4] *= h, zt.elements[5] *= h, zt.elements[6] *= h, zt.elements[8] *= f, zt.elements[9] *= f, zt.elements[10] *= f, t.setFromRotationMatrix(zt), n.x = s, n.y = a, n.z = o, this;
  }
  makePerspective(e, t, n, r, s, a, o = rn) {
    const l = this.elements, c = 2 * s / (t - e), h = 2 * s / (n - r), f = (t + e) / (t - e), p = (n + r) / (n - r);
    let m, x;
    if (o === rn)
      m = -(a + s) / (a - s), x = -2 * a * s / (a - s);
    else if (o === Mr)
      m = -a / (a - s), x = -a * s / (a - s);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return l[0] = c, l[4] = 0, l[8] = f, l[12] = 0, l[1] = 0, l[5] = h, l[9] = p, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = m, l[14] = x, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(e, t, n, r, s, a, o = rn) {
    const l = this.elements, c = 1 / (t - e), h = 1 / (n - r), f = 1 / (a - s), p = (t + e) * c, m = (n + r) * h;
    let x, M;
    if (o === rn)
      x = (a + s) * f, M = -2 * f;
    else if (o === Mr)
      x = s * f, M = -1 * f;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -p, l[1] = 0, l[5] = 2 * h, l[9] = 0, l[13] = -m, l[2] = 0, l[6] = 0, l[10] = M, l[14] = -x, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let r = 0; r < 16; r++)
      if (t[r] !== n[r]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const Wn = /* @__PURE__ */ new F(), zt = /* @__PURE__ */ new lt(), rc = /* @__PURE__ */ new F(0, 0, 0), sc = /* @__PURE__ */ new F(1, 1, 1), pn = /* @__PURE__ */ new F(), ki = /* @__PURE__ */ new F(), Lt = /* @__PURE__ */ new F(), Ta = /* @__PURE__ */ new lt(), ba = /* @__PURE__ */ new Ci();
class ln {
  constructor(e = 0, t = 0, n = 0, r = ln.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = r;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, n, r = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = r, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const r = e.elements, s = r[0], a = r[4], o = r[8], l = r[1], c = r[5], h = r[9], f = r[2], p = r[6], m = r[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(Tt(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-h, m), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(p, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Tt(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(o, m), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-f, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Tt(p, -1, 1)), Math.abs(p) < 0.9999999 ? (this._y = Math.atan2(-f, m), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, s));
        break;
      case "ZYX":
        this._y = Math.asin(-Tt(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._x = Math.atan2(p, m), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-a, c));
        break;
      case "YZX":
        this._z = Math.asin(Tt(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-f, s)) : (this._x = 0, this._y = Math.atan2(o, m));
        break;
      case "XZY":
        this._z = Math.asin(-Tt(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(p, c), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-h, m), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return Ta.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Ta, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return ba.setFromEuler(this), this.setFromQuaternion(ba, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
ln.DEFAULT_ORDER = "XYZ";
class Io {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let ac = 0;
const Aa = /* @__PURE__ */ new F(), Xn = /* @__PURE__ */ new Ci(), Zt = /* @__PURE__ */ new lt(), Wi = /* @__PURE__ */ new F(), Mi = /* @__PURE__ */ new F(), oc = /* @__PURE__ */ new F(), lc = /* @__PURE__ */ new Ci(), wa = /* @__PURE__ */ new F(1, 0, 0), Ra = /* @__PURE__ */ new F(0, 1, 0), Ca = /* @__PURE__ */ new F(0, 0, 1), Pa = { type: "added" }, cc = { type: "removed" }, qn = { type: "childadded", child: null }, kr = { type: "childremoved", child: null };
class Et extends ci {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: ac++ }), this.uuid = Ri(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Et.DEFAULT_UP.clone();
    const e = new F(), t = new ln(), n = new Ci(), r = new F(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function a() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s), n._onChange(a), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: r
      },
      modelViewMatrix: {
        value: new lt()
      },
      normalMatrix: {
        value: new Fe()
      }
    }), this.matrix = new lt(), this.matrixWorld = new lt(), this.matrixAutoUpdate = Et.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Io(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return Xn.setFromAxisAngle(e, t), this.quaternion.multiply(Xn), this;
  }
  rotateOnWorldAxis(e, t) {
    return Xn.setFromAxisAngle(e, t), this.quaternion.premultiply(Xn), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(wa, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Ra, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Ca, e);
  }
  translateOnAxis(e, t) {
    return Aa.copy(e).applyQuaternion(this.quaternion), this.position.add(Aa.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(wa, e);
  }
  translateY(e) {
    return this.translateOnAxis(Ra, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Ca, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(Zt.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? Wi.copy(e) : Wi.set(e, t, n);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1), Mi.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Zt.lookAt(Mi, Wi, this.up) : Zt.lookAt(Wi, Mi, this.up), this.quaternion.setFromRotationMatrix(Zt), r && (Zt.extractRotation(r.matrixWorld), Xn.setFromRotationMatrix(Zt), this.quaternion.premultiply(Xn.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(Pa), qn.child = e, this.dispatchEvent(qn), qn.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(cc), kr.child = e, this.dispatchEvent(kr), kr.child = null), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), Zt.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), Zt.multiply(e.parent.matrixWorld)), e.applyMatrix4(Zt), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(Pa), qn.child = e, this.dispatchEvent(qn), qn.child = null, this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, r = this.children.length; n < r; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0)
        return a;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const r = this.children;
    for (let s = 0, a = r.length; s < a; s++)
      r[s].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Mi, e, oc), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Mi, lc, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++)
      t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++)
      t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++)
      t[n].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === !0) {
      const r = this.children;
      for (let s = 0, a = r.length; s < a; s++)
        r[s].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.6,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const r = {};
    r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.castShadow === !0 && (r.castShadow = !0), this.receiveShadow === !0 && (r.receiveShadow = !0), this.visible === !1 && (r.visible = !1), this.frustumCulled === !1 && (r.frustumCulled = !1), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (r.type = "BatchedMesh", r.perObjectFrustumCulled = this.perObjectFrustumCulled, r.sortObjects = this.sortObjects, r.drawRanges = this._drawRanges, r.reservedRanges = this._reservedRanges, r.visibility = this._visibility, r.active = this._active, r.bounds = this._bounds.map((o) => ({
      boxInitialized: o.boxInitialized,
      boxMin: o.box.min.toArray(),
      boxMax: o.box.max.toArray(),
      sphereInitialized: o.sphereInitialized,
      sphereRadius: o.sphere.radius,
      sphereCenter: o.sphere.center.toArray()
    })), r.maxInstanceCount = this._maxInstanceCount, r.maxVertexCount = this._maxVertexCount, r.maxIndexCount = this._maxIndexCount, r.geometryInitialized = this._geometryInitialized, r.geometryCount = this._geometryCount, r.matricesTexture = this._matricesTexture.toJSON(e), this._colorsTexture !== null && (r.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (r.boundingSphere = {
      center: r.boundingSphere.center.toArray(),
      radius: r.boundingSphere.radius
    }), this.boundingBox !== null && (r.boundingBox = {
      min: r.boundingBox.min.toArray(),
      max: r.boundingBox.max.toArray()
    }));
    function s(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = s(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l))
          for (let c = 0, h = l.length; c < h; c++) {
            const f = l[c];
            s(e.shapes, f);
          }
        else
          s(e.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const o = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          o.push(s(e.materials, this.material[l]));
        r.material = o;
      } else
        r.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let o = 0; o < this.children.length; o++)
        r.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        r.animations.push(s(e.animations, l));
      }
    }
    if (t) {
      const o = a(e.geometries), l = a(e.materials), c = a(e.textures), h = a(e.images), f = a(e.shapes), p = a(e.skeletons), m = a(e.animations), x = a(e.nodes);
      o.length > 0 && (n.geometries = o), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), h.length > 0 && (n.images = h), f.length > 0 && (n.shapes = f), p.length > 0 && (n.skeletons = p), m.length > 0 && (n.animations = m), x.length > 0 && (n.nodes = x);
    }
    return n.object = r, n;
    function a(o) {
      const l = [];
      for (const c in o) {
        const h = o[c];
        delete h.metadata, l.push(h);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const r = e.children[n];
        this.add(r.clone());
      }
    return this;
  }
}
Et.DEFAULT_UP = /* @__PURE__ */ new F(0, 1, 0);
Et.DEFAULT_MATRIX_AUTO_UPDATE = !0;
Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Ht = /* @__PURE__ */ new F(), Jt = /* @__PURE__ */ new F(), Wr = /* @__PURE__ */ new F(), Qt = /* @__PURE__ */ new F(), Yn = /* @__PURE__ */ new F(), jn = /* @__PURE__ */ new F(), La = /* @__PURE__ */ new F(), Xr = /* @__PURE__ */ new F(), qr = /* @__PURE__ */ new F(), Yr = /* @__PURE__ */ new F(), jr = /* @__PURE__ */ new ut(), Kr = /* @__PURE__ */ new ut(), $r = /* @__PURE__ */ new ut();
class kt {
  constructor(e = new F(), t = new F(), n = new F()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, r) {
    r.subVectors(n, t), Ht.subVectors(e, t), r.cross(Ht);
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(e, t, n, r, s) {
    Ht.subVectors(r, t), Jt.subVectors(n, t), Wr.subVectors(e, t);
    const a = Ht.dot(Ht), o = Ht.dot(Jt), l = Ht.dot(Wr), c = Jt.dot(Jt), h = Jt.dot(Wr), f = a * c - o * o;
    if (f === 0)
      return s.set(0, 0, 0), null;
    const p = 1 / f, m = (c * l - o * h) * p, x = (a * h - o * l) * p;
    return s.set(1 - m - x, x, m);
  }
  static containsPoint(e, t, n, r) {
    return this.getBarycoord(e, t, n, r, Qt) === null ? !1 : Qt.x >= 0 && Qt.y >= 0 && Qt.x + Qt.y <= 1;
  }
  static getInterpolation(e, t, n, r, s, a, o, l) {
    return this.getBarycoord(e, t, n, r, Qt) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(s, Qt.x), l.addScaledVector(a, Qt.y), l.addScaledVector(o, Qt.z), l);
  }
  static getInterpolatedAttribute(e, t, n, r, s, a) {
    return jr.setScalar(0), Kr.setScalar(0), $r.setScalar(0), jr.fromBufferAttribute(e, t), Kr.fromBufferAttribute(e, n), $r.fromBufferAttribute(e, r), a.setScalar(0), a.addScaledVector(jr, s.x), a.addScaledVector(Kr, s.y), a.addScaledVector($r, s.z), a;
  }
  static isFrontFacing(e, t, n, r) {
    return Ht.subVectors(n, t), Jt.subVectors(e, t), Ht.cross(Jt).dot(r) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, r) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this;
  }
  setFromAttributeAndIndices(e, t, n, r) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, r), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return Ht.subVectors(this.c, this.b), Jt.subVectors(this.a, this.b), Ht.cross(Jt).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return kt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return kt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, r, s) {
    return kt.getInterpolation(e, this.a, this.b, this.c, t, n, r, s);
  }
  containsPoint(e) {
    return kt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return kt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, r = this.b, s = this.c;
    let a, o;
    Yn.subVectors(r, n), jn.subVectors(s, n), Xr.subVectors(e, n);
    const l = Yn.dot(Xr), c = jn.dot(Xr);
    if (l <= 0 && c <= 0)
      return t.copy(n);
    qr.subVectors(e, r);
    const h = Yn.dot(qr), f = jn.dot(qr);
    if (h >= 0 && f <= h)
      return t.copy(r);
    const p = l * f - h * c;
    if (p <= 0 && l >= 0 && h <= 0)
      return a = l / (l - h), t.copy(n).addScaledVector(Yn, a);
    Yr.subVectors(e, s);
    const m = Yn.dot(Yr), x = jn.dot(Yr);
    if (x >= 0 && m <= x)
      return t.copy(s);
    const M = m * c - l * x;
    if (M <= 0 && c >= 0 && x <= 0)
      return o = c / (c - x), t.copy(n).addScaledVector(jn, o);
    const d = h * x - m * f;
    if (d <= 0 && f - h >= 0 && m - x >= 0)
      return La.subVectors(s, r), o = (f - h) / (f - h + (m - x)), t.copy(r).addScaledVector(La, o);
    const u = 1 / (d + M + p);
    return a = M * u, o = p * u, t.copy(n).addScaledVector(Yn, a).addScaledVector(jn, o);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const No = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, mn = { h: 0, s: 0, l: 0 }, Xi = { h: 0, s: 0, l: 0 };
function Zr(i, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? i + (e - i) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? i + (e - i) * 6 * (2 / 3 - t) : i;
}
class je {
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const r = e;
      r && r.isColor ? this.copy(r) : typeof r == "number" ? this.setHex(r) : typeof r == "string" && this.setStyle(r);
    } else
      this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = Yt) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, Je.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, r = Je.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, Je.toWorkingColorSpace(this, r), this;
  }
  setHSL(e, t, n, r = Je.workingColorSpace) {
    if (e = ql(e, 1), t = Tt(t, 0, 1), n = Tt(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - s;
      this.r = Zr(a, s, e + 1 / 3), this.g = Zr(a, s, e), this.b = Zr(a, s, e - 1 / 3);
    }
    return Je.toWorkingColorSpace(this, r), this;
  }
  setStyle(e, t = Yt) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let r;
    if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let s;
      const a = r[1], o = r[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setRGB(
              Math.min(255, parseInt(s[1], 10)) / 255,
              Math.min(255, parseInt(s[2], 10)) / 255,
              Math.min(255, parseInt(s[3], 10)) / 255,
              t
            );
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setRGB(
              Math.min(100, parseInt(s[1], 10)) / 100,
              Math.min(100, parseInt(s[2], 10)) / 100,
              Math.min(100, parseInt(s[3], 10)) / 100,
              t
            );
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setHSL(
              parseFloat(s[1]) / 360,
              parseFloat(s[2]) / 100,
              parseFloat(s[3]) / 100,
              t
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const s = r[1], a = s.length;
      if (a === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          t
        );
      if (a === 6)
        return this.setHex(parseInt(s, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0)
      return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = Yt) {
    const n = No[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = ni(e.r), this.g = ni(e.g), this.b = ni(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = Nr(e.r), this.g = Nr(e.g), this.b = Nr(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Yt) {
    return Je.fromWorkingColorSpace(xt.copy(this), e), Math.round(Tt(xt.r * 255, 0, 255)) * 65536 + Math.round(Tt(xt.g * 255, 0, 255)) * 256 + Math.round(Tt(xt.b * 255, 0, 255));
  }
  getHexString(e = Yt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Je.workingColorSpace) {
    Je.fromWorkingColorSpace(xt.copy(this), t);
    const n = xt.r, r = xt.g, s = xt.b, a = Math.max(n, r, s), o = Math.min(n, r, s);
    let l, c;
    const h = (o + a) / 2;
    if (o === a)
      l = 0, c = 0;
    else {
      const f = a - o;
      switch (c = h <= 0.5 ? f / (a + o) : f / (2 - a - o), a) {
        case n:
          l = (r - s) / f + (r < s ? 6 : 0);
          break;
        case r:
          l = (s - n) / f + 2;
          break;
        case s:
          l = (n - r) / f + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = h, e;
  }
  getRGB(e, t = Je.workingColorSpace) {
    return Je.fromWorkingColorSpace(xt.copy(this), t), e.r = xt.r, e.g = xt.g, e.b = xt.b, e;
  }
  getStyle(e = Yt) {
    Je.fromWorkingColorSpace(xt.copy(this), e);
    const t = xt.r, n = xt.g, r = xt.b;
    return e !== Yt ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(mn), this.setHSL(mn.h + e, mn.s + t, mn.l + n);
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(mn), e.getHSL(Xi);
    const n = Ur(mn.h, Xi.h, t), r = Ur(mn.s, Xi.s, t), s = Ur(mn.l, Xi.l, t);
    return this.setHSL(n, r, s), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, n = this.g, r = this.b, s = e.elements;
    return this.r = s[0] * t + s[3] * n + s[6] * r, this.g = s[1] * t + s[4] * n + s[7] * r, this.b = s[2] * t + s[5] * n + s[8] * r, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const xt = /* @__PURE__ */ new je();
je.NAMES = No;
let uc = 0;
class ui extends ci {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: uc++ }), this.uuid = Ri(), this.name = "", this.type = "Material", this.blending = ei, this.side = Sn, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = cs, this.blendDst = us, this.blendEquation = Ln, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new je(0, 0, 0), this.blendAlpha = 0, this.depthFunc = ii, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = _a, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = zn, this.stencilZFail = zn, this.stencilZPass = zn, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  // onBeforeRender and onBeforeCompile only supported in WebGLRenderer
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const r = this[t];
        if (r === void 0) {
          console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n;
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== ei && (n.blending = this.blending), this.side !== Sn && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== cs && (n.blendSrc = this.blendSrc), this.blendDst !== us && (n.blendDst = this.blendDst), this.blendEquation !== Ln && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== ii && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== _a && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== zn && (n.stencilFail = this.stencilFail), this.stencilZFail !== zn && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== zn && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function r(s) {
      const a = [];
      for (const o in s) {
        const l = s[o];
        delete l.metadata, a.push(l);
      }
      return a;
    }
    if (t) {
      const s = r(e.textures), a = r(e.images);
      s.length > 0 && (n.textures = s), a.length > 0 && (n.images = a);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const r = t.length;
      n = new Array(r);
      for (let s = 0; s !== r; ++s)
        n[s] = t[s].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  onBuild() {
    console.warn("Material: onBuild() has been removed.");
  }
}
class Fo extends ui {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new je(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new ln(), this.combine = vo, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const ht = /* @__PURE__ */ new F(), qi = /* @__PURE__ */ new it();
class bt {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = va, this.updateRanges = [], this.gpuType = nn, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let r = 0, s = this.itemSize; r < s; r++)
      this.array[e + r] = t.array[n + r];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        qi.fromBufferAttribute(this, t), qi.applyMatrix3(e), this.setXY(t, qi.x, qi.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        ht.fromBufferAttribute(this, t), ht.applyMatrix3(e), this.setXYZ(t, ht.x, ht.y, ht.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ht.fromBufferAttribute(this, t), ht.applyMatrix4(e), this.setXYZ(t, ht.x, ht.y, ht.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ht.fromBufferAttribute(this, t), ht.applyNormalMatrix(e), this.setXYZ(t, ht.x, ht.y, ht.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ht.fromBufferAttribute(this, t), ht.transformDirection(e), this.setXYZ(t, ht.x, ht.y, ht.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = gi(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = yt(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = gi(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = yt(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = gi(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = yt(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = gi(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = yt(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = gi(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = yt(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = yt(t, this.array), n = yt(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, r) {
    return e *= this.itemSize, this.normalized && (t = yt(t, this.array), n = yt(n, this.array), r = yt(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this;
  }
  setXYZW(e, t, n, r, s) {
    return e *= this.itemSize, this.normalized && (t = yt(t, this.array), n = yt(n, this.array), r = yt(r, this.array), s = yt(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = s, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== va && (e.usage = this.usage), e;
  }
}
class Oo extends bt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Bo extends bt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class an extends bt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let hc = 0;
const It = /* @__PURE__ */ new lt(), Jr = /* @__PURE__ */ new Et(), Kn = /* @__PURE__ */ new F(), Dt = /* @__PURE__ */ new Pi(), Si = /* @__PURE__ */ new Pi(), pt = /* @__PURE__ */ new F();
class Xt extends ci {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: hc++ }), this.uuid = Ri(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (Lo(e) ? Bo : Oo)(e, 1) : this.index = e, this;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new Fe().getNormalMatrix(e);
      n.applyNormalMatrix(s), n.needsUpdate = !0;
    }
    const r = this.attributes.tangent;
    return r !== void 0 && (r.transformDirection(e), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return It.makeRotationFromQuaternion(e), this.applyMatrix4(It), this;
  }
  rotateX(e) {
    return It.makeRotationX(e), this.applyMatrix4(It), this;
  }
  rotateY(e) {
    return It.makeRotationY(e), this.applyMatrix4(It), this;
  }
  rotateZ(e) {
    return It.makeRotationZ(e), this.applyMatrix4(It), this;
  }
  translate(e, t, n) {
    return It.makeTranslation(e, t, n), this.applyMatrix4(It), this;
  }
  scale(e, t, n) {
    return It.makeScale(e, t, n), this.applyMatrix4(It), this;
  }
  lookAt(e) {
    return Jr.lookAt(e), Jr.updateMatrix(), this.applyMatrix4(Jr.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Kn).negate(), this.translate(Kn.x, Kn.y, Kn.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, r = e.length; n < r; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new an(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Pi());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(
        new F(-1 / 0, -1 / 0, -1 / 0),
        new F(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, r = t.length; n < r; n++) {
          const s = t[n];
          Dt.setFromBufferAttribute(s), this.morphTargetsRelative ? (pt.addVectors(this.boundingBox.min, Dt.min), this.boundingBox.expandByPoint(pt), pt.addVectors(this.boundingBox.max, Dt.max), this.boundingBox.expandByPoint(pt)) : (this.boundingBox.expandByPoint(Dt.min), this.boundingBox.expandByPoint(Dt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Li());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new F(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (Dt.setFromBufferAttribute(e), t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s];
          Si.setFromBufferAttribute(o), this.morphTargetsRelative ? (pt.addVectors(Dt.min, Si.min), Dt.expandByPoint(pt), pt.addVectors(Dt.max, Si.max), Dt.expandByPoint(pt)) : (Dt.expandByPoint(Si.min), Dt.expandByPoint(Si.max));
        }
      Dt.getCenter(n);
      let r = 0;
      for (let s = 0, a = e.count; s < a; s++)
        pt.fromBufferAttribute(e, s), r = Math.max(r, n.distanceToSquared(pt));
      if (t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s], l = this.morphTargetsRelative;
          for (let c = 0, h = o.count; c < h; c++)
            pt.fromBufferAttribute(o, c), l && (Kn.fromBufferAttribute(e, c), pt.add(Kn)), r = Math.max(r, n.distanceToSquared(pt));
        }
      this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = t.position, r = t.normal, s = t.uv;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new bt(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"), o = [], l = [];
    for (let O = 0; O < n.count; O++)
      o[O] = new F(), l[O] = new F();
    const c = new F(), h = new F(), f = new F(), p = new it(), m = new it(), x = new it(), M = new F(), d = new F();
    function u(O, ee, g) {
      c.fromBufferAttribute(n, O), h.fromBufferAttribute(n, ee), f.fromBufferAttribute(n, g), p.fromBufferAttribute(s, O), m.fromBufferAttribute(s, ee), x.fromBufferAttribute(s, g), h.sub(c), f.sub(c), m.sub(p), x.sub(p);
      const S = 1 / (m.x * x.y - x.x * m.y);
      isFinite(S) && (M.copy(h).multiplyScalar(x.y).addScaledVector(f, -m.y).multiplyScalar(S), d.copy(f).multiplyScalar(m.x).addScaledVector(h, -x.x).multiplyScalar(S), o[O].add(M), o[ee].add(M), o[g].add(M), l[O].add(d), l[ee].add(d), l[g].add(d));
    }
    let T = this.groups;
    T.length === 0 && (T = [{
      start: 0,
      count: e.count
    }]);
    for (let O = 0, ee = T.length; O < ee; ++O) {
      const g = T[O], S = g.start, W = g.count;
      for (let B = S, k = S + W; B < k; B += 3)
        u(
          e.getX(B + 0),
          e.getX(B + 1),
          e.getX(B + 2)
        );
    }
    const E = new F(), b = new F(), G = new F(), P = new F();
    function w(O) {
      G.fromBufferAttribute(r, O), P.copy(G);
      const ee = o[O];
      E.copy(ee), E.sub(G.multiplyScalar(G.dot(ee))).normalize(), b.crossVectors(P, ee);
      const S = b.dot(l[O]) < 0 ? -1 : 1;
      a.setXYZW(O, E.x, E.y, E.z, S);
    }
    for (let O = 0, ee = T.length; O < ee; ++O) {
      const g = T[O], S = g.start, W = g.count;
      for (let B = S, k = S + W; B < k; B += 3)
        w(e.getX(B + 0)), w(e.getX(B + 1)), w(e.getX(B + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new bt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let p = 0, m = n.count; p < m; p++)
          n.setXYZ(p, 0, 0, 0);
      const r = new F(), s = new F(), a = new F(), o = new F(), l = new F(), c = new F(), h = new F(), f = new F();
      if (e)
        for (let p = 0, m = e.count; p < m; p += 3) {
          const x = e.getX(p + 0), M = e.getX(p + 1), d = e.getX(p + 2);
          r.fromBufferAttribute(t, x), s.fromBufferAttribute(t, M), a.fromBufferAttribute(t, d), h.subVectors(a, s), f.subVectors(r, s), h.cross(f), o.fromBufferAttribute(n, x), l.fromBufferAttribute(n, M), c.fromBufferAttribute(n, d), o.add(h), l.add(h), c.add(h), n.setXYZ(x, o.x, o.y, o.z), n.setXYZ(M, l.x, l.y, l.z), n.setXYZ(d, c.x, c.y, c.z);
        }
      else
        for (let p = 0, m = t.count; p < m; p += 3)
          r.fromBufferAttribute(t, p + 0), s.fromBufferAttribute(t, p + 1), a.fromBufferAttribute(t, p + 2), h.subVectors(a, s), f.subVectors(r, s), h.cross(f), n.setXYZ(p + 0, h.x, h.y, h.z), n.setXYZ(p + 1, h.x, h.y, h.z), n.setXYZ(p + 2, h.x, h.y, h.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      pt.fromBufferAttribute(e, t), pt.normalize(), e.setXYZ(t, pt.x, pt.y, pt.z);
  }
  toNonIndexed() {
    function e(o, l) {
      const c = o.array, h = o.itemSize, f = o.normalized, p = new c.constructor(l.length * h);
      let m = 0, x = 0;
      for (let M = 0, d = l.length; M < d; M++) {
        o.isInterleavedBufferAttribute ? m = l[M] * o.data.stride + o.offset : m = l[M] * h;
        for (let u = 0; u < h; u++)
          p[x++] = c[m++];
      }
      return new bt(p, h, f);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Xt(), n = this.index.array, r = this.attributes;
    for (const o in r) {
      const l = r[o], c = e(l, n);
      t.setAttribute(o, c);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const l = [], c = s[o];
      for (let h = 0, f = c.length; h < f; h++) {
        const p = c[h], m = e(p, n);
        l.push(m);
      }
      t.morphAttributes[o] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, l = a.length; o < l; o++) {
      const c = a[o];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const l = this.parameters;
      for (const c in l)
        l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const r = {};
    let s = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], h = [];
      for (let f = 0, p = c.length; f < p; f++) {
        const m = c[f];
        h.push(m.toJSON(e.data));
      }
      h.length > 0 && (r[l] = h, s = !0);
    }
    s && (e.data.morphAttributes = r, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (e.data.boundingSphere = {
      center: o.center.toArray(),
      radius: o.radius
    }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const r = e.attributes;
    for (const c in r) {
      const h = r[c];
      this.setAttribute(c, h.clone(t));
    }
    const s = e.morphAttributes;
    for (const c in s) {
      const h = [], f = s[c];
      for (let p = 0, m = f.length; p < m; p++)
        h.push(f[p].clone(t));
      this.morphAttributes[c] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let c = 0, h = a.length; c < h; c++) {
      const f = a[c];
      this.addGroup(f.start, f.count, f.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = e.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Da = /* @__PURE__ */ new lt(), bn = /* @__PURE__ */ new aa(), Yi = /* @__PURE__ */ new Li(), Ua = /* @__PURE__ */ new F(), ji = /* @__PURE__ */ new F(), Ki = /* @__PURE__ */ new F(), $i = /* @__PURE__ */ new F(), Qr = /* @__PURE__ */ new F(), Zi = /* @__PURE__ */ new F(), Ia = /* @__PURE__ */ new F(), Ji = /* @__PURE__ */ new F();
class sn extends Et {
  constructor(e = new Xt(), t = new Fo()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, r = n.attributes.position, s = n.morphAttributes.position, a = n.morphTargetsRelative;
    t.fromBufferAttribute(r, e);
    const o = this.morphTargetInfluences;
    if (s && o) {
      Zi.set(0, 0, 0);
      for (let l = 0, c = s.length; l < c; l++) {
        const h = o[l], f = s[l];
        h !== 0 && (Qr.fromBufferAttribute(f, e), a ? Zi.addScaledVector(Qr, h) : Zi.addScaledVector(Qr.sub(t), h));
      }
      t.add(Zi);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, r = this.material, s = this.matrixWorld;
    r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Yi.copy(n.boundingSphere), Yi.applyMatrix4(s), bn.copy(e.ray).recast(e.near), !(Yi.containsPoint(bn.origin) === !1 && (bn.intersectSphere(Yi, Ua) === null || bn.origin.distanceToSquared(Ua) > (e.far - e.near) ** 2)) && (Da.copy(s).invert(), bn.copy(e.ray).applyMatrix4(Da), !(n.boundingBox !== null && bn.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, bn)));
  }
  _computeIntersections(e, t, n) {
    let r;
    const s = this.geometry, a = this.material, o = s.index, l = s.attributes.position, c = s.attributes.uv, h = s.attributes.uv1, f = s.attributes.normal, p = s.groups, m = s.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let x = 0, M = p.length; x < M; x++) {
          const d = p[x], u = a[d.materialIndex], T = Math.max(d.start, m.start), E = Math.min(o.count, Math.min(d.start + d.count, m.start + m.count));
          for (let b = T, G = E; b < G; b += 3) {
            const P = o.getX(b), w = o.getX(b + 1), O = o.getX(b + 2);
            r = Qi(this, u, e, n, c, h, f, P, w, O), r && (r.faceIndex = Math.floor(b / 3), r.face.materialIndex = d.materialIndex, t.push(r));
          }
        }
      else {
        const x = Math.max(0, m.start), M = Math.min(o.count, m.start + m.count);
        for (let d = x, u = M; d < u; d += 3) {
          const T = o.getX(d), E = o.getX(d + 1), b = o.getX(d + 2);
          r = Qi(this, a, e, n, c, h, f, T, E, b), r && (r.faceIndex = Math.floor(d / 3), t.push(r));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(a))
        for (let x = 0, M = p.length; x < M; x++) {
          const d = p[x], u = a[d.materialIndex], T = Math.max(d.start, m.start), E = Math.min(l.count, Math.min(d.start + d.count, m.start + m.count));
          for (let b = T, G = E; b < G; b += 3) {
            const P = b, w = b + 1, O = b + 2;
            r = Qi(this, u, e, n, c, h, f, P, w, O), r && (r.faceIndex = Math.floor(b / 3), r.face.materialIndex = d.materialIndex, t.push(r));
          }
        }
      else {
        const x = Math.max(0, m.start), M = Math.min(l.count, m.start + m.count);
        for (let d = x, u = M; d < u; d += 3) {
          const T = d, E = d + 1, b = d + 2;
          r = Qi(this, a, e, n, c, h, f, T, E, b), r && (r.faceIndex = Math.floor(d / 3), t.push(r));
        }
      }
  }
}
function dc(i, e, t, n, r, s, a, o) {
  let l;
  if (e.side === wt ? l = n.intersectTriangle(a, s, r, !0, o) : l = n.intersectTriangle(r, s, a, e.side === Sn, o), l === null) return null;
  Ji.copy(o), Ji.applyMatrix4(i.matrixWorld);
  const c = t.ray.origin.distanceTo(Ji);
  return c < t.near || c > t.far ? null : {
    distance: c,
    point: Ji.clone(),
    object: i
  };
}
function Qi(i, e, t, n, r, s, a, o, l, c) {
  i.getVertexPosition(o, ji), i.getVertexPosition(l, Ki), i.getVertexPosition(c, $i);
  const h = dc(i, e, t, n, ji, Ki, $i, Ia);
  if (h) {
    const f = new F();
    kt.getBarycoord(Ia, ji, Ki, $i, f), r && (h.uv = kt.getInterpolatedAttribute(r, o, l, c, f, new it())), s && (h.uv1 = kt.getInterpolatedAttribute(s, o, l, c, f, new it())), a && (h.normal = kt.getInterpolatedAttribute(a, o, l, c, f, new F()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const p = {
      a: o,
      b: l,
      c,
      normal: new F(),
      materialIndex: 0
    };
    kt.getNormal(ji, Ki, $i, p.normal), h.face = p, h.barycoord = f;
  }
  return h;
}
class Di extends Xt {
  constructor(e = 1, t = 1, n = 1, r = 1, s = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: r,
      heightSegments: s,
      depthSegments: a
    };
    const o = this;
    r = Math.floor(r), s = Math.floor(s), a = Math.floor(a);
    const l = [], c = [], h = [], f = [];
    let p = 0, m = 0;
    x("z", "y", "x", -1, -1, n, t, e, a, s, 0), x("z", "y", "x", 1, -1, n, t, -e, a, s, 1), x("x", "z", "y", 1, 1, e, n, t, r, a, 2), x("x", "z", "y", 1, -1, e, n, -t, r, a, 3), x("x", "y", "z", 1, -1, e, t, n, r, s, 4), x("x", "y", "z", -1, -1, e, t, -n, r, s, 5), this.setIndex(l), this.setAttribute("position", new an(c, 3)), this.setAttribute("normal", new an(h, 3)), this.setAttribute("uv", new an(f, 2));
    function x(M, d, u, T, E, b, G, P, w, O, ee) {
      const g = b / w, S = G / O, W = b / 2, B = G / 2, k = P / 2, $ = w + 1, z = O + 1;
      let te = 0, V = 0;
      const ue = new F();
      for (let he = 0; he < z; he++) {
        const ie = he * S - B;
        for (let Te = 0; Te < $; Te++) {
          const Oe = Te * g - W;
          ue[M] = Oe * T, ue[d] = ie * E, ue[u] = k, c.push(ue.x, ue.y, ue.z), ue[M] = 0, ue[d] = 0, ue[u] = P > 0 ? 1 : -1, h.push(ue.x, ue.y, ue.z), f.push(Te / w), f.push(1 - he / O), te += 1;
        }
      }
      for (let he = 0; he < O; he++)
        for (let ie = 0; ie < w; ie++) {
          const Te = p + ie + $ * he, Oe = p + ie + $ * (he + 1), X = p + (ie + 1) + $ * (he + 1), J = p + (ie + 1) + $ * he;
          l.push(Te, Oe, J), l.push(Oe, X, J), V += 6;
        }
      o.addGroup(m, V, ee), m += V, p += te;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Di(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function li(i) {
  const e = {};
  for (const t in i) {
    e[t] = {};
    for (const n in i[t]) {
      const r = i[t][n];
      r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? r.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = r.clone() : Array.isArray(r) ? e[t][n] = r.slice() : e[t][n] = r;
    }
  }
  return e;
}
function St(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = li(i[t]);
    for (const r in n)
      e[r] = n[r];
  }
  return e;
}
function fc(i) {
  const e = [];
  for (let t = 0; t < i.length; t++)
    e.push(i[t].clone());
  return e;
}
function zo(i) {
  const e = i.getRenderTarget();
  return e === null ? i.outputColorSpace : e.isXRRenderTarget === !0 ? e.texture.colorSpace : Je.workingColorSpace;
}
const pc = { clone: li, merge: St };
var mc = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, gc = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class cn extends ui {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = mc, this.fragmentShader = gc, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      clipCullDistance: !1,
      // set to use vertex shader clipping
      multiDraw: !1
      // set to use vertex shader multi_draw / enable gl_DrawID
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = li(e.uniforms), this.uniformsGroups = fc(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const r in this.uniforms) {
      const a = this.uniforms[r].value;
      a && a.isTexture ? t.uniforms[r] = {
        type: "t",
        value: a.toJSON(e).uuid
      } : a && a.isColor ? t.uniforms[r] = {
        type: "c",
        value: a.getHex()
      } : a && a.isVector2 ? t.uniforms[r] = {
        type: "v2",
        value: a.toArray()
      } : a && a.isVector3 ? t.uniforms[r] = {
        type: "v3",
        value: a.toArray()
      } : a && a.isVector4 ? t.uniforms[r] = {
        type: "v4",
        value: a.toArray()
      } : a && a.isMatrix3 ? t.uniforms[r] = {
        type: "m3",
        value: a.toArray()
      } : a && a.isMatrix4 ? t.uniforms[r] = {
        type: "m4",
        value: a.toArray()
      } : t.uniforms[r] = {
        value: a
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const r in this.extensions)
      this.extensions[r] === !0 && (n[r] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class Ho extends Et {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new lt(), this.projectionMatrix = new lt(), this.projectionMatrixInverse = new lt(), this.coordinateSystem = rn;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const gn = /* @__PURE__ */ new F(), Na = /* @__PURE__ */ new it(), Fa = /* @__PURE__ */ new it();
class Gt extends Ho {
  constructor(e = 50, t = 1, n = 0.1, r = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current .filmGauge.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = js * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const e = Math.tan(Dr * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return js * 2 * Math.atan(
      Math.tan(Dr * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Computes the 2D bounds of the camera's viewable rectangle at a given distance along the viewing direction.
   * Sets minTarget and maxTarget to the coordinates of the lower-left and upper-right corners of the view rectangle.
   */
  getViewBounds(e, t, n) {
    gn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(gn.x, gn.y).multiplyScalar(-e / gn.z), gn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(gn.x, gn.y).multiplyScalar(-e / gn.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   * Copies the result into the target Vector2, where x is width and y is height.
   */
  getViewSize(e, t) {
    return this.getViewBounds(e, Na, Fa), t.subVectors(Fa, Na);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *
   * then for each monitor you would call it like this
   *
   *   const w = 1920;
   *   const h = 1080;
   *   const fullWidth = w * 3;
   *   const fullHeight = h * 2;
   *
   *   --A--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   *   --B--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   *   --C--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   *   --D--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   *   --E--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   *   --F--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   *
   *   Note there is no reason monitors have to be the same size or in a grid.
   */
  setViewOffset(e, t, n, r, s, a) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(Dr * 0.5 * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, s = -0.5 * r;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = a.fullWidth, c = a.fullHeight;
      s += a.offsetX * r / l, t -= a.offsetY * n / c, r *= a.width / l, n *= a.height / c;
    }
    const o = this.filmOffset;
    o !== 0 && (s += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + r, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const $n = -90, Zn = 1;
class _c extends Et {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const r = new Gt($n, Zn, e, t);
    r.layers = this.layers, this.add(r);
    const s = new Gt($n, Zn, e, t);
    s.layers = this.layers, this.add(s);
    const a = new Gt($n, Zn, e, t);
    a.layers = this.layers, this.add(a);
    const o = new Gt($n, Zn, e, t);
    o.layers = this.layers, this.add(o);
    const l = new Gt($n, Zn, e, t);
    l.layers = this.layers, this.add(l);
    const c = new Gt($n, Zn, e, t);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, r, s, a, o, l] = t;
    for (const c of t) this.remove(c);
    if (e === rn)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (e === Mr)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const c of t)
      this.add(c), c.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: r } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [s, a, o, l, c, h] = this.children, f = e.getRenderTarget(), p = e.getActiveCubeFace(), m = e.getActiveMipmapLevel(), x = e.xr.enabled;
    e.xr.enabled = !1;
    const M = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0, r), e.render(t, s), e.setRenderTarget(n, 1, r), e.render(t, a), e.setRenderTarget(n, 2, r), e.render(t, o), e.setRenderTarget(n, 3, r), e.render(t, l), e.setRenderTarget(n, 4, r), e.render(t, c), n.texture.generateMipmaps = M, e.setRenderTarget(n, 5, r), e.render(t, h), e.setRenderTarget(f, p, m), e.xr.enabled = x, n.texture.needsPMREMUpdate = !0;
  }
}
class Go extends Rt {
  constructor(e, t, n, r, s, a, o, l, c, h) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : ri, super(e, t, n, r, s, a, o, l, c, h), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class vc extends Fn {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, r = [n, n, n, n, n, n];
    this.texture = new Go(r, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : Vt;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, r = new Di(5, 5, 5), s = new cn({
      name: "CubemapFromEquirect",
      uniforms: li(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: wt,
      blending: xn
    });
    s.uniforms.tEquirect.value = t;
    const a = new sn(r, s), o = t.minFilter;
    return t.minFilter === In && (t.minFilter = Vt), new _c(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(e, t, n, r) {
    const s = e.getRenderTarget();
    for (let a = 0; a < 6; a++)
      e.setRenderTarget(this, a), e.clear(t, n, r);
    e.setRenderTarget(s);
  }
}
const es = /* @__PURE__ */ new F(), xc = /* @__PURE__ */ new F(), Mc = /* @__PURE__ */ new Fe();
class Cn {
  constructor(e = new F(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, r) {
    return this.normal.set(e, t, n), this.constant = r, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const r = es.subVectors(n, t).cross(xc.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(r, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(es), r = this.normal.dot(n);
    if (r === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / r;
    return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || Mc.getNormalMatrix(e), r = this.coplanarPoint(es).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
    return this.constant = -r.dot(s), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const An = /* @__PURE__ */ new Li(), er = /* @__PURE__ */ new F();
class Vo {
  constructor(e = new Cn(), t = new Cn(), n = new Cn(), r = new Cn(), s = new Cn(), a = new Cn()) {
    this.planes = [e, t, n, r, s, a];
  }
  set(e, t, n, r, s, a) {
    const o = this.planes;
    return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(r), o[4].copy(s), o[5].copy(a), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = rn) {
    const n = this.planes, r = e.elements, s = r[0], a = r[1], o = r[2], l = r[3], c = r[4], h = r[5], f = r[6], p = r[7], m = r[8], x = r[9], M = r[10], d = r[11], u = r[12], T = r[13], E = r[14], b = r[15];
    if (n[0].setComponents(l - s, p - c, d - m, b - u).normalize(), n[1].setComponents(l + s, p + c, d + m, b + u).normalize(), n[2].setComponents(l + a, p + h, d + x, b + T).normalize(), n[3].setComponents(l - a, p - h, d - x, b - T).normalize(), n[4].setComponents(l - o, p - f, d - M, b - E).normalize(), t === rn)
      n[5].setComponents(l + o, p + f, d + M, b + E).normalize();
    else if (t === Mr)
      n[5].setComponents(o, f, M, E).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), An.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), An.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(An);
  }
  intersectsSprite(e) {
    return An.center.set(0, 0, 0), An.radius = 0.7071067811865476, An.applyMatrix4(e.matrixWorld), this.intersectsSphere(An);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, r = -e.radius;
    for (let s = 0; s < 6; s++)
      if (t[s].distanceToPoint(n) < r)
        return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const r = t[n];
      if (er.x = r.normal.x > 0 ? e.max.x : e.min.x, er.y = r.normal.y > 0 ? e.max.y : e.min.y, er.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(er) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function ko() {
  let i = null, e = !1, t = null, n = null;
  function r(s, a) {
    t(s, a), n = i.requestAnimationFrame(r);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = i.requestAnimationFrame(r), e = !0);
    },
    stop: function() {
      i.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(s) {
      t = s;
    },
    setContext: function(s) {
      i = s;
    }
  };
}
function Sc(i) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(o, l) {
    const c = o.array, h = o.usage, f = c.byteLength, p = i.createBuffer();
    i.bindBuffer(l, p), i.bufferData(l, c, h), o.onUploadCallback();
    let m;
    if (c instanceof Float32Array)
      m = i.FLOAT;
    else if (c instanceof Uint16Array)
      o.isFloat16BufferAttribute ? m = i.HALF_FLOAT : m = i.UNSIGNED_SHORT;
    else if (c instanceof Int16Array)
      m = i.SHORT;
    else if (c instanceof Uint32Array)
      m = i.UNSIGNED_INT;
    else if (c instanceof Int32Array)
      m = i.INT;
    else if (c instanceof Int8Array)
      m = i.BYTE;
    else if (c instanceof Uint8Array)
      m = i.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray)
      m = i.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
    return {
      buffer: p,
      type: m,
      bytesPerElement: c.BYTES_PER_ELEMENT,
      version: o.version,
      size: f
    };
  }
  function n(o, l, c) {
    const h = l.array, f = l.updateRanges;
    if (i.bindBuffer(c, o), f.length === 0)
      i.bufferSubData(c, 0, h);
    else {
      f.sort((m, x) => m.start - x.start);
      let p = 0;
      for (let m = 1; m < f.length; m++) {
        const x = f[p], M = f[m];
        M.start <= x.start + x.count + 1 ? x.count = Math.max(
          x.count,
          M.start + M.count - x.start
        ) : (++p, f[p] = M);
      }
      f.length = p + 1;
      for (let m = 0, x = f.length; m < x; m++) {
        const M = f[m];
        i.bufferSubData(
          c,
          M.start * h.BYTES_PER_ELEMENT,
          h,
          M.start,
          M.count
        );
      }
      l.clearUpdateRanges();
    }
    l.onUploadCallback();
  }
  function r(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), e.get(o);
  }
  function s(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const l = e.get(o);
    l && (i.deleteBuffer(l.buffer), e.delete(o));
  }
  function a(o, l) {
    if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
      const h = e.get(o);
      (!h || h.version < o.version) && e.set(o, {
        buffer: o.buffer,
        type: o.type,
        bytesPerElement: o.elementSize,
        version: o.version
      });
      return;
    }
    const c = e.get(o);
    if (c === void 0)
      e.set(o, t(o, l));
    else if (c.version < o.version) {
      if (c.size !== o.array.byteLength)
        throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(c.buffer, o, l), c.version = o.version;
    }
  }
  return {
    get: r,
    remove: s,
    update: a
  };
}
class Ar extends Xt {
  constructor(e = 1, t = 1, n = 1, r = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: r
    };
    const s = e / 2, a = t / 2, o = Math.floor(n), l = Math.floor(r), c = o + 1, h = l + 1, f = e / o, p = t / l, m = [], x = [], M = [], d = [];
    for (let u = 0; u < h; u++) {
      const T = u * p - a;
      for (let E = 0; E < c; E++) {
        const b = E * f - s;
        x.push(b, -T, 0), M.push(0, 0, 1), d.push(E / o), d.push(1 - u / l);
      }
    }
    for (let u = 0; u < l; u++)
      for (let T = 0; T < o; T++) {
        const E = T + c * u, b = T + c * (u + 1), G = T + 1 + c * (u + 1), P = T + 1 + c * u;
        m.push(E, b, P), m.push(b, G, P);
      }
    this.setIndex(m), this.setAttribute("position", new an(x, 3)), this.setAttribute("normal", new an(M, 3)), this.setAttribute("uv", new an(d, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Ar(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var Ec = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, yc = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, Tc = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, bc = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Ac = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, wc = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Rc = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, Cc = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Pc = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`, Lc = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, Dc = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Uc = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Ic = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, Nc = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, Fc = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Oc = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, Bc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, zc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Hc = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Gc = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Vc = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, kc = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, Wc = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`, Xc = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, qc = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, Yc = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, jc = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Kc = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, $c = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Zc = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Jc = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Qc = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, eu = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, tu = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, nu = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, iu = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, ru = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, su = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, au = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, ou = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, lu = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, cu = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, uu = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, hu = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, du = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, fu = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, pu = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, mu = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, gu = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, _u = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, vu = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, xu = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, Mu = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, Su = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, Eu = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, yu = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, Tu = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, bu = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Au = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, wu = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, Ru = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Cu = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Pu = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, Lu = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Du = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Uu = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Iu = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, Nu = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Fu = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Ou = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, Bu = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, zu = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, Hu = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, Gu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Vu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, ku = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Wu = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, Xu = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, qu = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Yu = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, ju = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Ku = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, $u = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, Zu = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Ju = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Qu = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, eh = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, th = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, nh = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, ih = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`, rh = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, sh = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, ah = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, oh = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, lh = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, ch = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, uh = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, hh = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, dh = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, fh = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, ph = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, mh = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, gh = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, _h = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, vh = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, xh = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, Mh = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Sh = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Eh = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, yh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Th = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, bh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Ah = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, wh = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, Rh = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, Ch = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, Ph = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, Lh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Dh = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Uh = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Ih = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Nh = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, Fh = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Oh = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Bh = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, zh = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Hh = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Gh = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Vh = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, kh = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Wh = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Xh = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, qh = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Yh = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, jh = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Kh = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, $h = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Zh = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Jh = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Qh = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, ed = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Ne = {
  alphahash_fragment: Ec,
  alphahash_pars_fragment: yc,
  alphamap_fragment: Tc,
  alphamap_pars_fragment: bc,
  alphatest_fragment: Ac,
  alphatest_pars_fragment: wc,
  aomap_fragment: Rc,
  aomap_pars_fragment: Cc,
  batching_pars_vertex: Pc,
  batching_vertex: Lc,
  begin_vertex: Dc,
  beginnormal_vertex: Uc,
  bsdfs: Ic,
  iridescence_fragment: Nc,
  bumpmap_pars_fragment: Fc,
  clipping_planes_fragment: Oc,
  clipping_planes_pars_fragment: Bc,
  clipping_planes_pars_vertex: zc,
  clipping_planes_vertex: Hc,
  color_fragment: Gc,
  color_pars_fragment: Vc,
  color_pars_vertex: kc,
  color_vertex: Wc,
  common: Xc,
  cube_uv_reflection_fragment: qc,
  defaultnormal_vertex: Yc,
  displacementmap_pars_vertex: jc,
  displacementmap_vertex: Kc,
  emissivemap_fragment: $c,
  emissivemap_pars_fragment: Zc,
  colorspace_fragment: Jc,
  colorspace_pars_fragment: Qc,
  envmap_fragment: eu,
  envmap_common_pars_fragment: tu,
  envmap_pars_fragment: nu,
  envmap_pars_vertex: iu,
  envmap_physical_pars_fragment: pu,
  envmap_vertex: ru,
  fog_vertex: su,
  fog_pars_vertex: au,
  fog_fragment: ou,
  fog_pars_fragment: lu,
  gradientmap_pars_fragment: cu,
  lightmap_pars_fragment: uu,
  lights_lambert_fragment: hu,
  lights_lambert_pars_fragment: du,
  lights_pars_begin: fu,
  lights_toon_fragment: mu,
  lights_toon_pars_fragment: gu,
  lights_phong_fragment: _u,
  lights_phong_pars_fragment: vu,
  lights_physical_fragment: xu,
  lights_physical_pars_fragment: Mu,
  lights_fragment_begin: Su,
  lights_fragment_maps: Eu,
  lights_fragment_end: yu,
  logdepthbuf_fragment: Tu,
  logdepthbuf_pars_fragment: bu,
  logdepthbuf_pars_vertex: Au,
  logdepthbuf_vertex: wu,
  map_fragment: Ru,
  map_pars_fragment: Cu,
  map_particle_fragment: Pu,
  map_particle_pars_fragment: Lu,
  metalnessmap_fragment: Du,
  metalnessmap_pars_fragment: Uu,
  morphinstance_vertex: Iu,
  morphcolor_vertex: Nu,
  morphnormal_vertex: Fu,
  morphtarget_pars_vertex: Ou,
  morphtarget_vertex: Bu,
  normal_fragment_begin: zu,
  normal_fragment_maps: Hu,
  normal_pars_fragment: Gu,
  normal_pars_vertex: Vu,
  normal_vertex: ku,
  normalmap_pars_fragment: Wu,
  clearcoat_normal_fragment_begin: Xu,
  clearcoat_normal_fragment_maps: qu,
  clearcoat_pars_fragment: Yu,
  iridescence_pars_fragment: ju,
  opaque_fragment: Ku,
  packing: $u,
  premultiplied_alpha_fragment: Zu,
  project_vertex: Ju,
  dithering_fragment: Qu,
  dithering_pars_fragment: eh,
  roughnessmap_fragment: th,
  roughnessmap_pars_fragment: nh,
  shadowmap_pars_fragment: ih,
  shadowmap_pars_vertex: rh,
  shadowmap_vertex: sh,
  shadowmask_pars_fragment: ah,
  skinbase_vertex: oh,
  skinning_pars_vertex: lh,
  skinning_vertex: ch,
  skinnormal_vertex: uh,
  specularmap_fragment: hh,
  specularmap_pars_fragment: dh,
  tonemapping_fragment: fh,
  tonemapping_pars_fragment: ph,
  transmission_fragment: mh,
  transmission_pars_fragment: gh,
  uv_pars_fragment: _h,
  uv_pars_vertex: vh,
  uv_vertex: xh,
  worldpos_vertex: Mh,
  background_vert: Sh,
  background_frag: Eh,
  backgroundCube_vert: yh,
  backgroundCube_frag: Th,
  cube_vert: bh,
  cube_frag: Ah,
  depth_vert: wh,
  depth_frag: Rh,
  distanceRGBA_vert: Ch,
  distanceRGBA_frag: Ph,
  equirect_vert: Lh,
  equirect_frag: Dh,
  linedashed_vert: Uh,
  linedashed_frag: Ih,
  meshbasic_vert: Nh,
  meshbasic_frag: Fh,
  meshlambert_vert: Oh,
  meshlambert_frag: Bh,
  meshmatcap_vert: zh,
  meshmatcap_frag: Hh,
  meshnormal_vert: Gh,
  meshnormal_frag: Vh,
  meshphong_vert: kh,
  meshphong_frag: Wh,
  meshphysical_vert: Xh,
  meshphysical_frag: qh,
  meshtoon_vert: Yh,
  meshtoon_frag: jh,
  points_vert: Kh,
  points_frag: $h,
  shadow_vert: Zh,
  shadow_frag: Jh,
  sprite_vert: Qh,
  sprite_frag: ed
}, oe = {
  common: {
    diffuse: { value: /* @__PURE__ */ new je(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Fe() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Fe() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Fe() }
  },
  envmap: {
    envMap: { value: null },
    envMapRotation: { value: /* @__PURE__ */ new Fe() },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 }
    // basic, lambert, phong
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new Fe() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Fe() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Fe() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Fe() },
    normalScale: { value: /* @__PURE__ */ new it(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Fe() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Fe() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Fe() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Fe() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new je(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new je(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Fe() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Fe() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new je(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new it(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Fe() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Fe() },
    alphaTest: { value: 0 }
  }
}, jt = {
  basic: {
    uniforms: /* @__PURE__ */ St([
      oe.common,
      oe.specularmap,
      oe.envmap,
      oe.aomap,
      oe.lightmap,
      oe.fog
    ]),
    vertexShader: Ne.meshbasic_vert,
    fragmentShader: Ne.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ St([
      oe.common,
      oe.specularmap,
      oe.envmap,
      oe.aomap,
      oe.lightmap,
      oe.emissivemap,
      oe.bumpmap,
      oe.normalmap,
      oe.displacementmap,
      oe.fog,
      oe.lights,
      {
        emissive: { value: /* @__PURE__ */ new je(0) }
      }
    ]),
    vertexShader: Ne.meshlambert_vert,
    fragmentShader: Ne.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ St([
      oe.common,
      oe.specularmap,
      oe.envmap,
      oe.aomap,
      oe.lightmap,
      oe.emissivemap,
      oe.bumpmap,
      oe.normalmap,
      oe.displacementmap,
      oe.fog,
      oe.lights,
      {
        emissive: { value: /* @__PURE__ */ new je(0) },
        specular: { value: /* @__PURE__ */ new je(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Ne.meshphong_vert,
    fragmentShader: Ne.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ St([
      oe.common,
      oe.envmap,
      oe.aomap,
      oe.lightmap,
      oe.emissivemap,
      oe.bumpmap,
      oe.normalmap,
      oe.displacementmap,
      oe.roughnessmap,
      oe.metalnessmap,
      oe.fog,
      oe.lights,
      {
        emissive: { value: /* @__PURE__ */ new je(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Ne.meshphysical_vert,
    fragmentShader: Ne.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ St([
      oe.common,
      oe.aomap,
      oe.lightmap,
      oe.emissivemap,
      oe.bumpmap,
      oe.normalmap,
      oe.displacementmap,
      oe.gradientmap,
      oe.fog,
      oe.lights,
      {
        emissive: { value: /* @__PURE__ */ new je(0) }
      }
    ]),
    vertexShader: Ne.meshtoon_vert,
    fragmentShader: Ne.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ St([
      oe.common,
      oe.bumpmap,
      oe.normalmap,
      oe.displacementmap,
      oe.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Ne.meshmatcap_vert,
    fragmentShader: Ne.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ St([
      oe.points,
      oe.fog
    ]),
    vertexShader: Ne.points_vert,
    fragmentShader: Ne.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ St([
      oe.common,
      oe.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Ne.linedashed_vert,
    fragmentShader: Ne.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ St([
      oe.common,
      oe.displacementmap
    ]),
    vertexShader: Ne.depth_vert,
    fragmentShader: Ne.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ St([
      oe.common,
      oe.bumpmap,
      oe.normalmap,
      oe.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ne.meshnormal_vert,
    fragmentShader: Ne.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ St([
      oe.sprite,
      oe.fog
    ]),
    vertexShader: Ne.sprite_vert,
    fragmentShader: Ne.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Fe() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Ne.background_vert,
    fragmentShader: Ne.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 },
      backgroundRotation: { value: /* @__PURE__ */ new Fe() }
    },
    vertexShader: Ne.backgroundCube_vert,
    fragmentShader: Ne.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Ne.cube_vert,
    fragmentShader: Ne.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Ne.equirect_vert,
    fragmentShader: Ne.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ St([
      oe.common,
      oe.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new F() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Ne.distanceRGBA_vert,
    fragmentShader: Ne.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ St([
      oe.lights,
      oe.fog,
      {
        color: { value: /* @__PURE__ */ new je(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ne.shadow_vert,
    fragmentShader: Ne.shadow_frag
  }
};
jt.physical = {
  uniforms: /* @__PURE__ */ St([
    jt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Fe() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Fe() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new it(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Fe() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new Fe() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Fe() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new je(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Fe() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Fe() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Fe() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new it() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Fe() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new je(0) },
      specularColor: { value: /* @__PURE__ */ new je(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Fe() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Fe() },
      anisotropyVector: { value: /* @__PURE__ */ new it() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Fe() }
    }
  ]),
  vertexShader: Ne.meshphysical_vert,
  fragmentShader: Ne.meshphysical_frag
};
const tr = { r: 0, b: 0, g: 0 }, wn = /* @__PURE__ */ new ln(), td = /* @__PURE__ */ new lt();
function nd(i, e, t, n, r, s, a) {
  const o = new je(0);
  let l = s === !0 ? 0 : 1, c, h, f = null, p = 0, m = null;
  function x(T) {
    let E = T.isScene === !0 ? T.background : null;
    return E && E.isTexture && (E = (T.backgroundBlurriness > 0 ? t : e).get(E)), E;
  }
  function M(T) {
    let E = !1;
    const b = x(T);
    b === null ? u(o, l) : b && b.isColor && (u(b, 1), E = !0);
    const G = i.xr.getEnvironmentBlendMode();
    G === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : G === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (i.autoClear || E) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil));
  }
  function d(T, E) {
    const b = x(E);
    b && (b.isCubeTexture || b.mapping === Tr) ? (h === void 0 && (h = new sn(
      new Di(1, 1, 1),
      new cn({
        name: "BackgroundCubeMaterial",
        uniforms: li(jt.backgroundCube.uniforms),
        vertexShader: jt.backgroundCube.vertexShader,
        fragmentShader: jt.backgroundCube.fragmentShader,
        side: wt,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(G, P, w) {
      this.matrixWorld.copyPosition(w.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), r.update(h)), wn.copy(E.backgroundRotation), wn.x *= -1, wn.y *= -1, wn.z *= -1, b.isCubeTexture && b.isRenderTargetTexture === !1 && (wn.y *= -1, wn.z *= -1), h.material.uniforms.envMap.value = b, h.material.uniforms.flipEnvMap.value = b.isCubeTexture && b.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = E.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = E.backgroundIntensity, h.material.uniforms.backgroundRotation.value.setFromMatrix4(td.makeRotationFromEuler(wn)), h.material.toneMapped = Je.getTransfer(b.colorSpace) !== st, (f !== b || p !== b.version || m !== i.toneMapping) && (h.material.needsUpdate = !0, f = b, p = b.version, m = i.toneMapping), h.layers.enableAll(), T.unshift(h, h.geometry, h.material, 0, 0, null)) : b && b.isTexture && (c === void 0 && (c = new sn(
      new Ar(2, 2),
      new cn({
        name: "BackgroundMaterial",
        uniforms: li(jt.background.uniforms),
        vertexShader: jt.background.vertexShader,
        fragmentShader: jt.background.fragmentShader,
        side: Sn,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), r.update(c)), c.material.uniforms.t2D.value = b, c.material.uniforms.backgroundIntensity.value = E.backgroundIntensity, c.material.toneMapped = Je.getTransfer(b.colorSpace) !== st, b.matrixAutoUpdate === !0 && b.updateMatrix(), c.material.uniforms.uvTransform.value.copy(b.matrix), (f !== b || p !== b.version || m !== i.toneMapping) && (c.material.needsUpdate = !0, f = b, p = b.version, m = i.toneMapping), c.layers.enableAll(), T.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function u(T, E) {
    T.getRGB(tr, zo(i)), n.buffers.color.setClear(tr.r, tr.g, tr.b, E, a);
  }
  return {
    getClearColor: function() {
      return o;
    },
    setClearColor: function(T, E = 1) {
      o.set(T), l = E, u(o, l);
    },
    getClearAlpha: function() {
      return l;
    },
    setClearAlpha: function(T) {
      l = T, u(o, l);
    },
    render: M,
    addToRenderList: d
  };
}
function id(i, e) {
  const t = i.getParameter(i.MAX_VERTEX_ATTRIBS), n = {}, r = p(null);
  let s = r, a = !1;
  function o(g, S, W, B, k) {
    let $ = !1;
    const z = f(B, W, S);
    s !== z && (s = z, c(s.object)), $ = m(g, B, W, k), $ && x(g, B, W, k), k !== null && e.update(k, i.ELEMENT_ARRAY_BUFFER), ($ || a) && (a = !1, b(g, S, W, B), k !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.get(k).buffer));
  }
  function l() {
    return i.createVertexArray();
  }
  function c(g) {
    return i.bindVertexArray(g);
  }
  function h(g) {
    return i.deleteVertexArray(g);
  }
  function f(g, S, W) {
    const B = W.wireframe === !0;
    let k = n[g.id];
    k === void 0 && (k = {}, n[g.id] = k);
    let $ = k[S.id];
    $ === void 0 && ($ = {}, k[S.id] = $);
    let z = $[B];
    return z === void 0 && (z = p(l()), $[B] = z), z;
  }
  function p(g) {
    const S = [], W = [], B = [];
    for (let k = 0; k < t; k++)
      S[k] = 0, W[k] = 0, B[k] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: S,
      enabledAttributes: W,
      attributeDivisors: B,
      object: g,
      attributes: {},
      index: null
    };
  }
  function m(g, S, W, B) {
    const k = s.attributes, $ = S.attributes;
    let z = 0;
    const te = W.getAttributes();
    for (const V in te)
      if (te[V].location >= 0) {
        const he = k[V];
        let ie = $[V];
        if (ie === void 0 && (V === "instanceMatrix" && g.instanceMatrix && (ie = g.instanceMatrix), V === "instanceColor" && g.instanceColor && (ie = g.instanceColor)), he === void 0 || he.attribute !== ie || ie && he.data !== ie.data) return !0;
        z++;
      }
    return s.attributesNum !== z || s.index !== B;
  }
  function x(g, S, W, B) {
    const k = {}, $ = S.attributes;
    let z = 0;
    const te = W.getAttributes();
    for (const V in te)
      if (te[V].location >= 0) {
        let he = $[V];
        he === void 0 && (V === "instanceMatrix" && g.instanceMatrix && (he = g.instanceMatrix), V === "instanceColor" && g.instanceColor && (he = g.instanceColor));
        const ie = {};
        ie.attribute = he, he && he.data && (ie.data = he.data), k[V] = ie, z++;
      }
    s.attributes = k, s.attributesNum = z, s.index = B;
  }
  function M() {
    const g = s.newAttributes;
    for (let S = 0, W = g.length; S < W; S++)
      g[S] = 0;
  }
  function d(g) {
    u(g, 0);
  }
  function u(g, S) {
    const W = s.newAttributes, B = s.enabledAttributes, k = s.attributeDivisors;
    W[g] = 1, B[g] === 0 && (i.enableVertexAttribArray(g), B[g] = 1), k[g] !== S && (i.vertexAttribDivisor(g, S), k[g] = S);
  }
  function T() {
    const g = s.newAttributes, S = s.enabledAttributes;
    for (let W = 0, B = S.length; W < B; W++)
      S[W] !== g[W] && (i.disableVertexAttribArray(W), S[W] = 0);
  }
  function E(g, S, W, B, k, $, z) {
    z === !0 ? i.vertexAttribIPointer(g, S, W, k, $) : i.vertexAttribPointer(g, S, W, B, k, $);
  }
  function b(g, S, W, B) {
    M();
    const k = B.attributes, $ = W.getAttributes(), z = S.defaultAttributeValues;
    for (const te in $) {
      const V = $[te];
      if (V.location >= 0) {
        let ue = k[te];
        if (ue === void 0 && (te === "instanceMatrix" && g.instanceMatrix && (ue = g.instanceMatrix), te === "instanceColor" && g.instanceColor && (ue = g.instanceColor)), ue !== void 0) {
          const he = ue.normalized, ie = ue.itemSize, Te = e.get(ue);
          if (Te === void 0) continue;
          const Oe = Te.buffer, X = Te.type, J = Te.bytesPerElement, pe = X === i.INT || X === i.UNSIGNED_INT || ue.gpuType === Qs;
          if (ue.isInterleavedBufferAttribute) {
            const me = ue.data, Le = me.stride, be = ue.offset;
            if (me.isInstancedInterleavedBuffer) {
              for (let ze = 0; ze < V.locationSize; ze++)
                u(V.location + ze, me.meshPerAttribute);
              g.isInstancedMesh !== !0 && B._maxInstanceCount === void 0 && (B._maxInstanceCount = me.meshPerAttribute * me.count);
            } else
              for (let ze = 0; ze < V.locationSize; ze++)
                d(V.location + ze);
            i.bindBuffer(i.ARRAY_BUFFER, Oe);
            for (let ze = 0; ze < V.locationSize; ze++)
              E(
                V.location + ze,
                ie / V.locationSize,
                X,
                he,
                Le * J,
                (be + ie / V.locationSize * ze) * J,
                pe
              );
          } else {
            if (ue.isInstancedBufferAttribute) {
              for (let me = 0; me < V.locationSize; me++)
                u(V.location + me, ue.meshPerAttribute);
              g.isInstancedMesh !== !0 && B._maxInstanceCount === void 0 && (B._maxInstanceCount = ue.meshPerAttribute * ue.count);
            } else
              for (let me = 0; me < V.locationSize; me++)
                d(V.location + me);
            i.bindBuffer(i.ARRAY_BUFFER, Oe);
            for (let me = 0; me < V.locationSize; me++)
              E(
                V.location + me,
                ie / V.locationSize,
                X,
                he,
                ie * J,
                ie / V.locationSize * me * J,
                pe
              );
          }
        } else if (z !== void 0) {
          const he = z[te];
          if (he !== void 0)
            switch (he.length) {
              case 2:
                i.vertexAttrib2fv(V.location, he);
                break;
              case 3:
                i.vertexAttrib3fv(V.location, he);
                break;
              case 4:
                i.vertexAttrib4fv(V.location, he);
                break;
              default:
                i.vertexAttrib1fv(V.location, he);
            }
        }
      }
    }
    T();
  }
  function G() {
    O();
    for (const g in n) {
      const S = n[g];
      for (const W in S) {
        const B = S[W];
        for (const k in B)
          h(B[k].object), delete B[k];
        delete S[W];
      }
      delete n[g];
    }
  }
  function P(g) {
    if (n[g.id] === void 0) return;
    const S = n[g.id];
    for (const W in S) {
      const B = S[W];
      for (const k in B)
        h(B[k].object), delete B[k];
      delete S[W];
    }
    delete n[g.id];
  }
  function w(g) {
    for (const S in n) {
      const W = n[S];
      if (W[g.id] === void 0) continue;
      const B = W[g.id];
      for (const k in B)
        h(B[k].object), delete B[k];
      delete W[g.id];
    }
  }
  function O() {
    ee(), a = !0, s !== r && (s = r, c(s.object));
  }
  function ee() {
    r.geometry = null, r.program = null, r.wireframe = !1;
  }
  return {
    setup: o,
    reset: O,
    resetDefaultState: ee,
    dispose: G,
    releaseStatesOfGeometry: P,
    releaseStatesOfProgram: w,
    initAttributes: M,
    enableAttribute: d,
    disableUnusedAttributes: T
  };
}
function rd(i, e, t) {
  let n;
  function r(c) {
    n = c;
  }
  function s(c, h) {
    i.drawArrays(n, c, h), t.update(h, n, 1);
  }
  function a(c, h, f) {
    f !== 0 && (i.drawArraysInstanced(n, c, h, f), t.update(h, n, f));
  }
  function o(c, h, f) {
    if (f === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, h, 0, f);
    let m = 0;
    for (let x = 0; x < f; x++)
      m += h[x];
    t.update(m, n, 1);
  }
  function l(c, h, f, p) {
    if (f === 0) return;
    const m = e.get("WEBGL_multi_draw");
    if (m === null)
      for (let x = 0; x < c.length; x++)
        a(c[x], h[x], p[x]);
    else {
      m.multiDrawArraysInstancedWEBGL(n, c, 0, h, 0, p, 0, f);
      let x = 0;
      for (let M = 0; M < f; M++)
        x += h[M];
      for (let M = 0; M < p.length; M++)
        t.update(x, n, p[M]);
    }
  }
  this.setMode = r, this.render = s, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = l;
}
function sd(i, e, t, n) {
  let r;
  function s() {
    if (r !== void 0) return r;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const w = e.get("EXT_texture_filter_anisotropic");
      r = i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      r = 0;
    return r;
  }
  function a(w) {
    return !(w !== Wt && n.convert(w) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(w) {
    const O = w === wi && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(w !== on && n.convert(w) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
    w !== nn && !O);
  }
  function l(w) {
    if (w === "highp") {
      if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0)
        return "highp";
      w = "mediump";
    }
    return w === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let c = t.precision !== void 0 ? t.precision : "highp";
  const h = l(c);
  h !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", h, "instead."), c = h);
  const f = t.logarithmicDepthBuffer === !0, p = t.reverseDepthBuffer === !0 && e.has("EXT_clip_control");
  if (p === !0) {
    const w = e.get("EXT_clip_control");
    w.clipControlEXT(w.LOWER_LEFT_EXT, w.ZERO_TO_ONE_EXT);
  }
  const m = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), x = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), M = i.getParameter(i.MAX_TEXTURE_SIZE), d = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), u = i.getParameter(i.MAX_VERTEX_ATTRIBS), T = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), E = i.getParameter(i.MAX_VARYING_VECTORS), b = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), G = x > 0, P = i.getParameter(i.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    // keeping this for backwards compatibility
    getMaxAnisotropy: s,
    getMaxPrecision: l,
    textureFormatReadable: a,
    textureTypeReadable: o,
    precision: c,
    logarithmicDepthBuffer: f,
    reverseDepthBuffer: p,
    maxTextures: m,
    maxVertexTextures: x,
    maxTextureSize: M,
    maxCubemapSize: d,
    maxAttributes: u,
    maxVertexUniforms: T,
    maxVaryings: E,
    maxFragmentUniforms: b,
    vertexTextures: G,
    maxSamples: P
  };
}
function ad(i) {
  const e = this;
  let t = null, n = 0, r = !1, s = !1;
  const a = new Cn(), o = new Fe(), l = { value: null, needsUpdate: !1 };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(f, p) {
    const m = f.length !== 0 || p || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || r;
    return r = p, n = f.length, m;
  }, this.beginShadows = function() {
    s = !0, h(null);
  }, this.endShadows = function() {
    s = !1;
  }, this.setGlobalState = function(f, p) {
    t = h(f, p, 0);
  }, this.setState = function(f, p, m) {
    const x = f.clippingPlanes, M = f.clipIntersection, d = f.clipShadows, u = i.get(f);
    if (!r || x === null || x.length === 0 || s && !d)
      s ? h(null) : c();
    else {
      const T = s ? 0 : n, E = T * 4;
      let b = u.clippingState || null;
      l.value = b, b = h(x, p, E, m);
      for (let G = 0; G !== E; ++G)
        b[G] = t[G];
      u.clippingState = b, this.numIntersection = M ? this.numPlanes : 0, this.numPlanes += T;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function h(f, p, m, x) {
    const M = f !== null ? f.length : 0;
    let d = null;
    if (M !== 0) {
      if (d = l.value, x !== !0 || d === null) {
        const u = m + M * 4, T = p.matrixWorldInverse;
        o.getNormalMatrix(T), (d === null || d.length < u) && (d = new Float32Array(u));
        for (let E = 0, b = m; E !== M; ++E, b += 4)
          a.copy(f[E]).applyMatrix4(T, o), a.normal.toArray(d, b), d[b + 3] = a.constant;
      }
      l.value = d, l.needsUpdate = !0;
    }
    return e.numPlanes = M, e.numIntersection = 0, d;
  }
}
function od(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(a, o) {
    return o === vs ? a.mapping = ri : o === xs && (a.mapping = si), a;
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === vs || o === xs)
        if (e.has(a)) {
          const l = e.get(a).texture;
          return t(l, a.mapping);
        } else {
          const l = a.image;
          if (l && l.height > 0) {
            const c = new vc(l.height);
            return c.fromEquirectangularTexture(i, a), e.set(a, c), a.addEventListener("dispose", r), t(c.texture, a.mapping);
          } else
            return null;
        }
    }
    return a;
  }
  function r(a) {
    const o = a.target;
    o.removeEventListener("dispose", r);
    const l = e.get(o);
    l !== void 0 && (e.delete(o), l.dispose());
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: s
  };
}
class Wo extends Ho {
  constructor(e = -1, t = 1, n = 1, r = -1, s = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = r, this.near = s, this.far = a, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, r, s, a) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2;
    let s = n - e, a = n + e, o = r + t, l = r - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += c * this.view.offsetX, a = s + c * this.view.width, o -= h * this.view.offsetY, l = o - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, a, o, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const Qn = 4, Oa = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], Dn = 20, ts = /* @__PURE__ */ new Wo(), Ba = /* @__PURE__ */ new je();
let ns = null, is = 0, rs = 0, ss = !1;
const Pn = (1 + Math.sqrt(5)) / 2, Jn = 1 / Pn, za = [
  /* @__PURE__ */ new F(-Pn, Jn, 0),
  /* @__PURE__ */ new F(Pn, Jn, 0),
  /* @__PURE__ */ new F(-Jn, 0, Pn),
  /* @__PURE__ */ new F(Jn, 0, Pn),
  /* @__PURE__ */ new F(0, Pn, -Jn),
  /* @__PURE__ */ new F(0, Pn, Jn),
  /* @__PURE__ */ new F(-1, 1, -1),
  /* @__PURE__ */ new F(1, 1, -1),
  /* @__PURE__ */ new F(-1, 1, 1),
  /* @__PURE__ */ new F(1, 1, 1)
];
class Ha {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety (the cubeCamera
   * is placed at the origin).
   */
  fromScene(e, t = 0, n = 0.1, r = 100) {
    ns = this._renderer.getRenderTarget(), is = this._renderer.getActiveCubeFace(), rs = this._renderer.getActiveMipmapLevel(), ss = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(256);
    const s = this._allocateTargets();
    return s.depthBuffer = !0, this._sceneToCubeUV(e, n, r, s), t > 0 && this._blur(s, 0, 0, t), this._applyPMREM(s), this._cleanup(s), s;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   * The smallest supported equirectangular image size is 64 x 32.
   */
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   * The smallest supported cube size is 16 x 16.
   */
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = ka(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Va(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  // private interface
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(ns, is, rs), this._renderer.xr.enabled = ss, e.scissorTest = !1, nr(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === ri || e.mapping === si ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), ns = this._renderer.getRenderTarget(), is = this._renderer.getActiveCubeFace(), rs = this._renderer.getActiveMipmapLevel(), ss = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: Vt,
      minFilter: Vt,
      generateMipmaps: !1,
      type: wi,
      format: Wt,
      colorSpace: En,
      depthBuffer: !1
    }, r = Ga(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Ga(e, t, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = ld(s)), this._blurMaterial = cd(s, e, t);
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new sn(this._lodPlanes[0], e);
    this._renderer.compile(t, ts);
  }
  _sceneToCubeUV(e, t, n, r) {
    const o = new Gt(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], h = this._renderer, f = h.autoClear, p = h.toneMapping;
    h.getClearColor(Ba), h.toneMapping = Mn, h.autoClear = !1;
    const m = new Fo({
      name: "PMREM.Background",
      side: wt,
      depthWrite: !1,
      depthTest: !1
    }), x = new sn(new Di(), m);
    let M = !1;
    const d = e.background;
    d ? d.isColor && (m.color.copy(d), e.background = null, M = !0) : (m.color.copy(Ba), M = !0);
    for (let u = 0; u < 6; u++) {
      const T = u % 3;
      T === 0 ? (o.up.set(0, l[u], 0), o.lookAt(c[u], 0, 0)) : T === 1 ? (o.up.set(0, 0, l[u]), o.lookAt(0, c[u], 0)) : (o.up.set(0, l[u], 0), o.lookAt(0, 0, c[u]));
      const E = this._cubeSize;
      nr(r, T * E, u > 2 ? E : 0, E, E), h.setRenderTarget(r), M && h.render(x, o), h.render(e, o);
    }
    x.geometry.dispose(), x.material.dispose(), h.toneMapping = p, h.autoClear = f, e.background = d;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, r = e.mapping === ri || e.mapping === si;
    r ? (this._cubemapMaterial === null && (this._cubemapMaterial = ka()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Va());
    const s = r ? this._cubemapMaterial : this._equirectMaterial, a = new sn(this._lodPlanes[0], s), o = s.uniforms;
    o.envMap.value = e;
    const l = this._cubeSize;
    nr(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(a, ts);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    const r = this._lodPlanes.length;
    for (let s = 1; s < r; s++) {
      const a = Math.sqrt(this._sigmas[s] * this._sigmas[s] - this._sigmas[s - 1] * this._sigmas[s - 1]), o = za[(r - s - 1) % za.length];
      this._blur(e, s - 1, s, a, o);
    }
    t.autoClear = n;
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   */
  _blur(e, t, n, r, s) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      a,
      t,
      n,
      r,
      "latitudinal",
      s
    ), this._halfBlur(
      a,
      e,
      n,
      n,
      r,
      "longitudinal",
      s
    );
  }
  _halfBlur(e, t, n, r, s, a, o) {
    const l = this._renderer, c = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const h = 3, f = new sn(this._lodPlanes[r], c), p = c.uniforms, m = this._sizeLods[n] - 1, x = isFinite(s) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * Dn - 1), M = s / x, d = isFinite(s) ? 1 + Math.floor(h * M) : Dn;
    d > Dn && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Dn}`);
    const u = [];
    let T = 0;
    for (let w = 0; w < Dn; ++w) {
      const O = w / M, ee = Math.exp(-O * O / 2);
      u.push(ee), w === 0 ? T += ee : w < d && (T += 2 * ee);
    }
    for (let w = 0; w < u.length; w++)
      u[w] = u[w] / T;
    p.envMap.value = e.texture, p.samples.value = d, p.weights.value = u, p.latitudinal.value = a === "latitudinal", o && (p.poleAxis.value = o);
    const { _lodMax: E } = this;
    p.dTheta.value = x, p.mipInt.value = E - n;
    const b = this._sizeLods[r], G = 3 * b * (r > E - Qn ? r - E + Qn : 0), P = 4 * (this._cubeSize - b);
    nr(t, G, P, 3 * b, 2 * b), l.setRenderTarget(t), l.render(f, ts);
  }
}
function ld(i) {
  const e = [], t = [], n = [];
  let r = i;
  const s = i - Qn + 1 + Oa.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, r);
    t.push(o);
    let l = 1 / o;
    a > i - Qn ? l = Oa[a - i + Qn - 1] : a === 0 && (l = 0), n.push(l);
    const c = 1 / (o - 2), h = -c, f = 1 + c, p = [h, h, f, h, f, f, h, h, f, f, h, f], m = 6, x = 6, M = 3, d = 2, u = 1, T = new Float32Array(M * x * m), E = new Float32Array(d * x * m), b = new Float32Array(u * x * m);
    for (let P = 0; P < m; P++) {
      const w = P % 3 * 2 / 3 - 1, O = P > 2 ? 0 : -1, ee = [
        w,
        O,
        0,
        w + 2 / 3,
        O,
        0,
        w + 2 / 3,
        O + 1,
        0,
        w,
        O,
        0,
        w + 2 / 3,
        O + 1,
        0,
        w,
        O + 1,
        0
      ];
      T.set(ee, M * x * P), E.set(p, d * x * P);
      const g = [P, P, P, P, P, P];
      b.set(g, u * x * P);
    }
    const G = new Xt();
    G.setAttribute("position", new bt(T, M)), G.setAttribute("uv", new bt(E, d)), G.setAttribute("faceIndex", new bt(b, u)), e.push(G), r > Qn && r--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Ga(i, e, t) {
  const n = new Fn(i, e, t);
  return n.texture.mapping = Tr, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function nr(i, e, t, n, r) {
  i.viewport.set(e, t, n, r), i.scissor.set(e, t, n, r);
}
function cd(i, e, t) {
  const n = new Float32Array(Dn), r = new F(0, 1, 0);
  return new cn({
    name: "SphericalGaussianBlur",
    defines: {
      n: Dn,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: r }
    },
    vertexShader: oa(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`
    ),
    blending: xn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Va() {
  return new cn({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: oa(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`
    ),
    blending: xn,
    depthTest: !1,
    depthWrite: !1
  });
}
function ka() {
  return new cn({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: oa(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`
    ),
    blending: xn,
    depthTest: !1,
    depthWrite: !1
  });
}
function oa() {
  return (
    /* glsl */
    `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
  );
}
function ud(i) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(o) {
    if (o && o.isTexture) {
      const l = o.mapping, c = l === vs || l === xs, h = l === ri || l === si;
      if (c || h) {
        let f = e.get(o);
        const p = f !== void 0 ? f.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== p)
          return t === null && (t = new Ha(i)), f = c ? t.fromEquirectangular(o, f) : t.fromCubemap(o, f), f.texture.pmremVersion = o.pmremVersion, e.set(o, f), f.texture;
        if (f !== void 0)
          return f.texture;
        {
          const m = o.image;
          return c && m && m.height > 0 || h && m && r(m) ? (t === null && (t = new Ha(i)), f = c ? t.fromEquirectangular(o) : t.fromCubemap(o), f.texture.pmremVersion = o.pmremVersion, e.set(o, f), o.addEventListener("dispose", s), f.texture) : null;
        }
      }
    }
    return o;
  }
  function r(o) {
    let l = 0;
    const c = 6;
    for (let h = 0; h < c; h++)
      o[h] !== void 0 && l++;
    return l === c;
  }
  function s(o) {
    const l = o.target;
    l.removeEventListener("dispose", s);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function a() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: n,
    dispose: a
  };
}
function hd(i) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    let r;
    switch (n) {
      case "WEBGL_depth_texture":
        r = i.getExtension("WEBGL_depth_texture") || i.getExtension("MOZ_WEBGL_depth_texture") || i.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        r = i.getExtension("EXT_texture_filter_anisotropic") || i.getExtension("MOZ_EXT_texture_filter_anisotropic") || i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        r = i.getExtension("WEBGL_compressed_texture_s3tc") || i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        r = i.getExtension("WEBGL_compressed_texture_pvrtc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        r = i.getExtension(n);
    }
    return e[n] = r, r;
  }
  return {
    has: function(n) {
      return t(n) !== null;
    },
    init: function() {
      t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture"), t("WEBGL_render_shared_exponent");
    },
    get: function(n) {
      const r = t(n);
      return r === null && pr("THREE.WebGLRenderer: " + n + " extension not supported."), r;
    }
  };
}
function dd(i, e, t, n) {
  const r = {}, s = /* @__PURE__ */ new WeakMap();
  function a(f) {
    const p = f.target;
    p.index !== null && e.remove(p.index);
    for (const x in p.attributes)
      e.remove(p.attributes[x]);
    for (const x in p.morphAttributes) {
      const M = p.morphAttributes[x];
      for (let d = 0, u = M.length; d < u; d++)
        e.remove(M[d]);
    }
    p.removeEventListener("dispose", a), delete r[p.id];
    const m = s.get(p);
    m && (e.remove(m), s.delete(p)), n.releaseStatesOfGeometry(p), p.isInstancedBufferGeometry === !0 && delete p._maxInstanceCount, t.memory.geometries--;
  }
  function o(f, p) {
    return r[p.id] === !0 || (p.addEventListener("dispose", a), r[p.id] = !0, t.memory.geometries++), p;
  }
  function l(f) {
    const p = f.attributes;
    for (const x in p)
      e.update(p[x], i.ARRAY_BUFFER);
    const m = f.morphAttributes;
    for (const x in m) {
      const M = m[x];
      for (let d = 0, u = M.length; d < u; d++)
        e.update(M[d], i.ARRAY_BUFFER);
    }
  }
  function c(f) {
    const p = [], m = f.index, x = f.attributes.position;
    let M = 0;
    if (m !== null) {
      const T = m.array;
      M = m.version;
      for (let E = 0, b = T.length; E < b; E += 3) {
        const G = T[E + 0], P = T[E + 1], w = T[E + 2];
        p.push(G, P, P, w, w, G);
      }
    } else if (x !== void 0) {
      const T = x.array;
      M = x.version;
      for (let E = 0, b = T.length / 3 - 1; E < b; E += 3) {
        const G = E + 0, P = E + 1, w = E + 2;
        p.push(G, P, P, w, w, G);
      }
    } else
      return;
    const d = new (Lo(p) ? Bo : Oo)(p, 1);
    d.version = M;
    const u = s.get(f);
    u && e.remove(u), s.set(f, d);
  }
  function h(f) {
    const p = s.get(f);
    if (p) {
      const m = f.index;
      m !== null && p.version < m.version && c(f);
    } else
      c(f);
    return s.get(f);
  }
  return {
    get: o,
    update: l,
    getWireframeAttribute: h
  };
}
function fd(i, e, t) {
  let n;
  function r(p) {
    n = p;
  }
  let s, a;
  function o(p) {
    s = p.type, a = p.bytesPerElement;
  }
  function l(p, m) {
    i.drawElements(n, m, s, p * a), t.update(m, n, 1);
  }
  function c(p, m, x) {
    x !== 0 && (i.drawElementsInstanced(n, m, s, p * a, x), t.update(m, n, x));
  }
  function h(p, m, x) {
    if (x === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, m, 0, s, p, 0, x);
    let d = 0;
    for (let u = 0; u < x; u++)
      d += m[u];
    t.update(d, n, 1);
  }
  function f(p, m, x, M) {
    if (x === 0) return;
    const d = e.get("WEBGL_multi_draw");
    if (d === null)
      for (let u = 0; u < p.length; u++)
        c(p[u] / a, m[u], M[u]);
    else {
      d.multiDrawElementsInstancedWEBGL(n, m, 0, s, p, 0, M, 0, x);
      let u = 0;
      for (let T = 0; T < x; T++)
        u += m[T];
      for (let T = 0; T < M.length; T++)
        t.update(u, n, M[T]);
    }
  }
  this.setMode = r, this.setIndex = o, this.render = l, this.renderInstances = c, this.renderMultiDraw = h, this.renderMultiDrawInstances = f;
}
function pd(i) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(s, a, o) {
    switch (t.calls++, a) {
      case i.TRIANGLES:
        t.triangles += o * (s / 3);
        break;
      case i.LINES:
        t.lines += o * (s / 2);
        break;
      case i.LINE_STRIP:
        t.lines += o * (s - 1);
        break;
      case i.LINE_LOOP:
        t.lines += o * s;
        break;
      case i.POINTS:
        t.points += o * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function r() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: r,
    update: n
  };
}
function md(i, e, t) {
  const n = /* @__PURE__ */ new WeakMap(), r = new ut();
  function s(a, o, l) {
    const c = a.morphTargetInfluences, h = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, f = h !== void 0 ? h.length : 0;
    let p = n.get(o);
    if (p === void 0 || p.count !== f) {
      let ee = function() {
        w.dispose(), n.delete(o), o.removeEventListener("dispose", ee);
      };
      p !== void 0 && p.texture.dispose();
      const m = o.morphAttributes.position !== void 0, x = o.morphAttributes.normal !== void 0, M = o.morphAttributes.color !== void 0, d = o.morphAttributes.position || [], u = o.morphAttributes.normal || [], T = o.morphAttributes.color || [];
      let E = 0;
      m === !0 && (E = 1), x === !0 && (E = 2), M === !0 && (E = 3);
      let b = o.attributes.position.count * E, G = 1;
      b > e.maxTextureSize && (G = Math.ceil(b / e.maxTextureSize), b = e.maxTextureSize);
      const P = new Float32Array(b * G * 4 * f), w = new Uo(P, b, G, f);
      w.type = nn, w.needsUpdate = !0;
      const O = E * 4;
      for (let g = 0; g < f; g++) {
        const S = d[g], W = u[g], B = T[g], k = b * G * 4 * g;
        for (let $ = 0; $ < S.count; $++) {
          const z = $ * O;
          m === !0 && (r.fromBufferAttribute(S, $), P[k + z + 0] = r.x, P[k + z + 1] = r.y, P[k + z + 2] = r.z, P[k + z + 3] = 0), x === !0 && (r.fromBufferAttribute(W, $), P[k + z + 4] = r.x, P[k + z + 5] = r.y, P[k + z + 6] = r.z, P[k + z + 7] = 0), M === !0 && (r.fromBufferAttribute(B, $), P[k + z + 8] = r.x, P[k + z + 9] = r.y, P[k + z + 10] = r.z, P[k + z + 11] = B.itemSize === 4 ? r.w : 1);
        }
      }
      p = {
        count: f,
        texture: w,
        size: new it(b, G)
      }, n.set(o, p), o.addEventListener("dispose", ee);
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null)
      l.getUniforms().setValue(i, "morphTexture", a.morphTexture, t);
    else {
      let m = 0;
      for (let M = 0; M < c.length; M++)
        m += c[M];
      const x = o.morphTargetsRelative ? 1 : 1 - m;
      l.getUniforms().setValue(i, "morphTargetBaseInfluence", x), l.getUniforms().setValue(i, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(i, "morphTargetsTexture", p.texture, t), l.getUniforms().setValue(i, "morphTargetsTextureSize", p.size);
  }
  return {
    update: s
  };
}
function gd(i, e, t, n) {
  let r = /* @__PURE__ */ new WeakMap();
  function s(l) {
    const c = n.render.frame, h = l.geometry, f = e.get(l, h);
    if (r.get(f) !== c && (e.update(f), r.set(f, c)), l.isInstancedMesh && (l.hasEventListener("dispose", o) === !1 && l.addEventListener("dispose", o), r.get(l) !== c && (t.update(l.instanceMatrix, i.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, i.ARRAY_BUFFER), r.set(l, c))), l.isSkinnedMesh) {
      const p = l.skeleton;
      r.get(p) !== c && (p.update(), r.set(p, c));
    }
    return f;
  }
  function a() {
    r = /* @__PURE__ */ new WeakMap();
  }
  function o(l) {
    const c = l.target;
    c.removeEventListener("dispose", o), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return {
    update: s,
    dispose: a
  };
}
class Xo extends Rt {
  constructor(e, t, n, r, s, a, o, l, c, h = ti) {
    if (h !== ti && h !== oi)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && h === ti && (n = Nn), n === void 0 && h === oi && (n = ai), super(null, r, s, a, o, l, h, n, c), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = o !== void 0 ? o : Nt, this.minFilter = l !== void 0 ? l : Nt, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
const qo = /* @__PURE__ */ new Rt(), Wa = /* @__PURE__ */ new Xo(1, 1), Yo = /* @__PURE__ */ new Uo(), jo = /* @__PURE__ */ new nc(), Ko = /* @__PURE__ */ new Go(), Xa = [], qa = [], Ya = new Float32Array(16), ja = new Float32Array(9), Ka = new Float32Array(4);
function hi(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const r = e * t;
  let s = Xa[r];
  if (s === void 0 && (s = new Float32Array(r), Xa[r] = s), e !== 0) {
    n.toArray(s, 0);
    for (let a = 1, o = 0; a !== e; ++a)
      o += t, i[a].toArray(s, o);
  }
  return s;
}
function dt(i, e) {
  if (i.length !== e.length) return !1;
  for (let t = 0, n = i.length; t < n; t++)
    if (i[t] !== e[t]) return !1;
  return !0;
}
function ft(i, e) {
  for (let t = 0, n = e.length; t < n; t++)
    i[t] = e[t];
}
function wr(i, e) {
  let t = qa[e];
  t === void 0 && (t = new Int32Array(e), qa[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = i.allocateTextureUnit();
  return t;
}
function _d(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), t[0] = e);
}
function vd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (dt(t, e)) return;
    i.uniform2fv(this.addr, e), ft(t, e);
  }
}
function xd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (i.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (dt(t, e)) return;
    i.uniform3fv(this.addr, e), ft(t, e);
  }
}
function Md(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (dt(t, e)) return;
    i.uniform4fv(this.addr, e), ft(t, e);
  }
}
function Sd(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (dt(t, e)) return;
    i.uniformMatrix2fv(this.addr, !1, e), ft(t, e);
  } else {
    if (dt(t, n)) return;
    Ka.set(n), i.uniformMatrix2fv(this.addr, !1, Ka), ft(t, n);
  }
}
function Ed(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (dt(t, e)) return;
    i.uniformMatrix3fv(this.addr, !1, e), ft(t, e);
  } else {
    if (dt(t, n)) return;
    ja.set(n), i.uniformMatrix3fv(this.addr, !1, ja), ft(t, n);
  }
}
function yd(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (dt(t, e)) return;
    i.uniformMatrix4fv(this.addr, !1, e), ft(t, e);
  } else {
    if (dt(t, n)) return;
    Ya.set(n), i.uniformMatrix4fv(this.addr, !1, Ya), ft(t, n);
  }
}
function Td(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), t[0] = e);
}
function bd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (dt(t, e)) return;
    i.uniform2iv(this.addr, e), ft(t, e);
  }
}
function Ad(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (dt(t, e)) return;
    i.uniform3iv(this.addr, e), ft(t, e);
  }
}
function wd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (dt(t, e)) return;
    i.uniform4iv(this.addr, e), ft(t, e);
  }
}
function Rd(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), t[0] = e);
}
function Cd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (dt(t, e)) return;
    i.uniform2uiv(this.addr, e), ft(t, e);
  }
}
function Pd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (dt(t, e)) return;
    i.uniform3uiv(this.addr, e), ft(t, e);
  }
}
function Ld(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (dt(t, e)) return;
    i.uniform4uiv(this.addr, e), ft(t, e);
  }
}
function Dd(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r);
  let s;
  this.type === i.SAMPLER_2D_SHADOW ? (Wa.compareFunction = Po, s = Wa) : s = qo, t.setTexture2D(e || s, r);
}
function Ud(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture3D(e || jo, r);
}
function Id(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTextureCube(e || Ko, r);
}
function Nd(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture2DArray(e || Yo, r);
}
function Fd(i) {
  switch (i) {
    case 5126:
      return _d;
    // FLOAT
    case 35664:
      return vd;
    // _VEC2
    case 35665:
      return xd;
    // _VEC3
    case 35666:
      return Md;
    // _VEC4
    case 35674:
      return Sd;
    // _MAT2
    case 35675:
      return Ed;
    // _MAT3
    case 35676:
      return yd;
    // _MAT4
    case 5124:
    case 35670:
      return Td;
    // INT, BOOL
    case 35667:
    case 35671:
      return bd;
    // _VEC2
    case 35668:
    case 35672:
      return Ad;
    // _VEC3
    case 35669:
    case 35673:
      return wd;
    // _VEC4
    case 5125:
      return Rd;
    // UINT
    case 36294:
      return Cd;
    // _VEC2
    case 36295:
      return Pd;
    // _VEC3
    case 36296:
      return Ld;
    // _VEC4
    case 35678:
    // SAMPLER_2D
    case 36198:
    // SAMPLER_EXTERNAL_OES
    case 36298:
    // INT_SAMPLER_2D
    case 36306:
    // UNSIGNED_INT_SAMPLER_2D
    case 35682:
      return Dd;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return Ud;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return Id;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return Nd;
  }
}
function Od(i, e) {
  i.uniform1fv(this.addr, e);
}
function Bd(i, e) {
  const t = hi(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function zd(i, e) {
  const t = hi(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function Hd(i, e) {
  const t = hi(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function Gd(i, e) {
  const t = hi(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t);
}
function Vd(i, e) {
  const t = hi(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t);
}
function kd(i, e) {
  const t = hi(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t);
}
function Wd(i, e) {
  i.uniform1iv(this.addr, e);
}
function Xd(i, e) {
  i.uniform2iv(this.addr, e);
}
function qd(i, e) {
  i.uniform3iv(this.addr, e);
}
function Yd(i, e) {
  i.uniform4iv(this.addr, e);
}
function jd(i, e) {
  i.uniform1uiv(this.addr, e);
}
function Kd(i, e) {
  i.uniform2uiv(this.addr, e);
}
function $d(i, e) {
  i.uniform3uiv(this.addr, e);
}
function Zd(i, e) {
  i.uniform4uiv(this.addr, e);
}
function Jd(i, e, t) {
  const n = this.cache, r = e.length, s = wr(t, r);
  dt(n, s) || (i.uniform1iv(this.addr, s), ft(n, s));
  for (let a = 0; a !== r; ++a)
    t.setTexture2D(e[a] || qo, s[a]);
}
function Qd(i, e, t) {
  const n = this.cache, r = e.length, s = wr(t, r);
  dt(n, s) || (i.uniform1iv(this.addr, s), ft(n, s));
  for (let a = 0; a !== r; ++a)
    t.setTexture3D(e[a] || jo, s[a]);
}
function ef(i, e, t) {
  const n = this.cache, r = e.length, s = wr(t, r);
  dt(n, s) || (i.uniform1iv(this.addr, s), ft(n, s));
  for (let a = 0; a !== r; ++a)
    t.setTextureCube(e[a] || Ko, s[a]);
}
function tf(i, e, t) {
  const n = this.cache, r = e.length, s = wr(t, r);
  dt(n, s) || (i.uniform1iv(this.addr, s), ft(n, s));
  for (let a = 0; a !== r; ++a)
    t.setTexture2DArray(e[a] || Yo, s[a]);
}
function nf(i) {
  switch (i) {
    case 5126:
      return Od;
    // FLOAT
    case 35664:
      return Bd;
    // _VEC2
    case 35665:
      return zd;
    // _VEC3
    case 35666:
      return Hd;
    // _VEC4
    case 35674:
      return Gd;
    // _MAT2
    case 35675:
      return Vd;
    // _MAT3
    case 35676:
      return kd;
    // _MAT4
    case 5124:
    case 35670:
      return Wd;
    // INT, BOOL
    case 35667:
    case 35671:
      return Xd;
    // _VEC2
    case 35668:
    case 35672:
      return qd;
    // _VEC3
    case 35669:
    case 35673:
      return Yd;
    // _VEC4
    case 5125:
      return jd;
    // UINT
    case 36294:
      return Kd;
    // _VEC2
    case 36295:
      return $d;
    // _VEC3
    case 36296:
      return Zd;
    // _VEC4
    case 35678:
    // SAMPLER_2D
    case 36198:
    // SAMPLER_EXTERNAL_OES
    case 36298:
    // INT_SAMPLER_2D
    case 36306:
    // UNSIGNED_INT_SAMPLER_2D
    case 35682:
      return Jd;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return Qd;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return ef;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return tf;
  }
}
class rf {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = Fd(t.type);
  }
}
class sf {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = nf(t.type);
  }
}
class af {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const r = this.seq;
    for (let s = 0, a = r.length; s !== a; ++s) {
      const o = r[s];
      o.setValue(e, t[o.id], n);
    }
  }
}
const as = /(\w+)(\])?(\[|\.)?/g;
function $a(i, e) {
  i.seq.push(e), i.map[e.id] = e;
}
function of(i, e, t) {
  const n = i.name, r = n.length;
  for (as.lastIndex = 0; ; ) {
    const s = as.exec(n), a = as.lastIndex;
    let o = s[1];
    const l = s[2] === "]", c = s[3];
    if (l && (o = o | 0), c === void 0 || c === "[" && a + 2 === r) {
      $a(t, c === void 0 ? new rf(o, i, e) : new sf(o, i, e));
      break;
    } else {
      let f = t.map[o];
      f === void 0 && (f = new af(o), $a(t, f)), t = f;
    }
  }
}
class mr {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let r = 0; r < n; ++r) {
      const s = e.getActiveUniform(t, r), a = e.getUniformLocation(t, s.name);
      of(s, a, this);
    }
  }
  setValue(e, t, n, r) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, r);
  }
  setOptional(e, t, n) {
    const r = t[n];
    r !== void 0 && this.setValue(e, n, r);
  }
  static upload(e, t, n, r) {
    for (let s = 0, a = t.length; s !== a; ++s) {
      const o = t[s], l = n[o.id];
      l.needsUpdate !== !1 && o.setValue(e, l.value, r);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let r = 0, s = e.length; r !== s; ++r) {
      const a = e[r];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function Za(i, e, t) {
  const n = i.createShader(e);
  return i.shaderSource(n, t), i.compileShader(n), n;
}
const lf = 37297;
let cf = 0;
function uf(i, e) {
  const t = i.split(`
`), n = [], r = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let a = r; a < s; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
function hf(i) {
  const e = Je.getPrimaries(Je.workingColorSpace), t = Je.getPrimaries(i);
  let n;
  switch (e === t ? n = "" : e === xr && t === vr ? n = "LinearDisplayP3ToLinearSRGB" : e === vr && t === xr && (n = "LinearSRGBToLinearDisplayP3"), i) {
    case En:
    case br:
      return [n, "LinearTransferOETF"];
    case Yt:
    case sa:
      return [n, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", i), [n, "LinearTransferOETF"];
  }
}
function Ja(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS), r = i.getShaderInfoLog(e).trim();
  if (n && r === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(r);
  if (s) {
    const a = parseInt(s[1]);
    return t.toUpperCase() + `

` + r + `

` + uf(i.getShaderSource(e), a);
  } else
    return r;
}
function df(i, e) {
  const t = hf(e);
  return `vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`;
}
function ff(i, e) {
  let t;
  switch (e) {
    case wl:
      t = "Linear";
      break;
    case Rl:
      t = "Reinhard";
      break;
    case Cl:
      t = "Cineon";
      break;
    case Pl:
      t = "ACESFilmic";
      break;
    case Dl:
      t = "AgX";
      break;
    case Ul:
      t = "Neutral";
      break;
    case Ll:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const ir = /* @__PURE__ */ new F();
function pf() {
  Je.getLuminanceCoefficients(ir);
  const i = ir.x.toFixed(4), e = ir.y.toFixed(4), t = ir.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function mf(i) {
  return [
    i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(yi).join(`
`);
}
function gf(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function _f(i, e) {
  const t = {}, n = i.getProgramParameter(e, i.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < n; r++) {
    const s = i.getActiveAttrib(e, r), a = s.name;
    let o = 1;
    s.type === i.FLOAT_MAT2 && (o = 2), s.type === i.FLOAT_MAT3 && (o = 3), s.type === i.FLOAT_MAT4 && (o = 4), t[a] = {
      type: s.type,
      location: i.getAttribLocation(e, a),
      locationSize: o
    };
  }
  return t;
}
function yi(i) {
  return i !== "";
}
function Qa(i, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function eo(i, e) {
  return i.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const vf = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Ks(i) {
  return i.replace(vf, Mf);
}
const xf = /* @__PURE__ */ new Map();
function Mf(i, e) {
  let t = Ne[e];
  if (t === void 0) {
    const n = xf.get(e);
    if (n !== void 0)
      t = Ne[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return Ks(t);
}
const Sf = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function to(i) {
  return i.replace(Sf, Ef);
}
function Ef(i, e, t, n) {
  let r = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    r += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function no(i) {
  let e = `precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;
  return i.precision === "highp" ? e += `
#define HIGH_PRECISION` : i.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function yf(i) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return i.shadowMapType === _o ? e = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === al ? e = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === en && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function Tf(i) {
  let e = "ENVMAP_TYPE_CUBE";
  if (i.envMap)
    switch (i.envMapMode) {
      case ri:
      case si:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case Tr:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function bf(i) {
  let e = "ENVMAP_MODE_REFLECTION";
  return i.envMap && i.envMapMode === si && (e = "ENVMAP_MODE_REFRACTION"), e;
}
function Af(i) {
  let e = "ENVMAP_BLENDING_NONE";
  if (i.envMap)
    switch (i.combine) {
      case vo:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case bl:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case Al:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function wf(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 112)), texelHeight: n, maxMip: t };
}
function Rf(i, e, t, n) {
  const r = i.getContext(), s = t.defines;
  let a = t.vertexShader, o = t.fragmentShader;
  const l = yf(t), c = Tf(t), h = bf(t), f = Af(t), p = wf(t), m = mf(t), x = gf(s), M = r.createProgram();
  let d, u, T = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (d = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    x
  ].filter(yi).join(`
`), d.length > 0 && (d += `
`), u = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    x
  ].filter(yi).join(`
`), u.length > 0 && (u += `
`)) : (d = [
    no(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    x,
    t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
    t.batching ? "#define USE_BATCHING" : "",
    t.batchingColor ? "#define USE_BATCHING_COLOR" : "",
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + h : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    //
    t.mapUv ? "#define MAP_UV " + t.mapUv : "",
    t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
    t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
    t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
    t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
    t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
    t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
    t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "",
    t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
    t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
    t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "",
    t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
    t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "",
    t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "",
    t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "",
    t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "",
    t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "",
    t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "",
    t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
    t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "",
    t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "",
    t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "",
    t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
    //
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + l : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "#ifdef USE_INSTANCING_MORPH",
    "	uniform sampler2D morphTexture;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_UV1",
    "	attribute vec2 uv1;",
    "#endif",
    "#ifdef USE_UV2",
    "	attribute vec2 uv2;",
    "#endif",
    "#ifdef USE_UV3",
    "	attribute vec2 uv3;",
    "#endif",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(yi).join(`
`), u = [
    no(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    x,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + c : "",
    t.envMap ? "#define " + h : "",
    t.envMap ? "#define " + f : "",
    p ? "#define CUBEUV_TEXEL_WIDTH " + p.texelWidth : "",
    p ? "#define CUBEUV_TEXEL_HEIGHT " + p.texelHeight : "",
    p ? "#define CUBEUV_MAX_MIP " + p.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.dispersion ? "#define USE_DISPERSION" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor || t.batchingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + l : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== Mn ? "#define TONE_MAPPING" : "",
    t.toneMapping !== Mn ? Ne.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== Mn ? ff("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Ne.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    df("linearToOutputTexel", t.outputColorSpace),
    pf(),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(yi).join(`
`)), a = Ks(a), a = Qa(a, t), a = eo(a, t), o = Ks(o), o = Qa(o, t), o = eo(o, t), a = to(a), o = to(o), t.isRawShaderMaterial !== !0 && (T = `#version 300 es
`, d = [
    m,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + d, u = [
    "#define varying in",
    t.glslVersion === xa ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === xa ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + u);
  const E = T + d + a, b = T + u + o, G = Za(r, r.VERTEX_SHADER, E), P = Za(r, r.FRAGMENT_SHADER, b);
  r.attachShader(M, G), r.attachShader(M, P), t.index0AttributeName !== void 0 ? r.bindAttribLocation(M, 0, t.index0AttributeName) : t.morphTargets === !0 && r.bindAttribLocation(M, 0, "position"), r.linkProgram(M);
  function w(S) {
    if (i.debug.checkShaderErrors) {
      const W = r.getProgramInfoLog(M).trim(), B = r.getShaderInfoLog(G).trim(), k = r.getShaderInfoLog(P).trim();
      let $ = !0, z = !0;
      if (r.getProgramParameter(M, r.LINK_STATUS) === !1)
        if ($ = !1, typeof i.debug.onShaderError == "function")
          i.debug.onShaderError(r, M, G, P);
        else {
          const te = Ja(r, G, "vertex"), V = Ja(r, P, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(M, r.VALIDATE_STATUS) + `

Material Name: ` + S.name + `
Material Type: ` + S.type + `

Program Info Log: ` + W + `
` + te + `
` + V
          );
        }
      else W !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", W) : (B === "" || k === "") && (z = !1);
      z && (S.diagnostics = {
        runnable: $,
        programLog: W,
        vertexShader: {
          log: B,
          prefix: d
        },
        fragmentShader: {
          log: k,
          prefix: u
        }
      });
    }
    r.deleteShader(G), r.deleteShader(P), O = new mr(r, M), ee = _f(r, M);
  }
  let O;
  this.getUniforms = function() {
    return O === void 0 && w(this), O;
  };
  let ee;
  this.getAttributes = function() {
    return ee === void 0 && w(this), ee;
  };
  let g = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return g === !1 && (g = r.getProgramParameter(M, lf)), g;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), r.deleteProgram(M), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = cf++, this.cacheKey = e, this.usedTimes = 1, this.program = M, this.vertexShader = G, this.fragmentShader = P, this;
}
let Cf = 0;
class Pf {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, r = this._getShaderStage(t), s = this._getShaderStage(n), a = this._getShaderCacheForMaterial(e);
    return a.has(r) === !1 && (a.add(r), r.usedTimes++), a.has(s) === !1 && (a.add(s), s.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new Lf(e), t.set(e, n)), n;
  }
}
class Lf {
  constructor(e) {
    this.id = Cf++, this.code = e, this.usedTimes = 0;
  }
}
function Df(i, e, t, n, r, s, a) {
  const o = new Io(), l = new Pf(), c = /* @__PURE__ */ new Set(), h = [], f = r.logarithmicDepthBuffer, p = r.reverseDepthBuffer, m = r.vertexTextures;
  let x = r.precision;
  const M = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function d(g) {
    return c.add(g), g === 0 ? "uv" : `uv${g}`;
  }
  function u(g, S, W, B, k) {
    const $ = B.fog, z = k.geometry, te = g.isMeshStandardMaterial ? B.environment : null, V = (g.isMeshStandardMaterial ? t : e).get(g.envMap || te), ue = V && V.mapping === Tr ? V.image.height : null, he = M[g.type];
    g.precision !== null && (x = r.getMaxPrecision(g.precision), x !== g.precision && console.warn("THREE.WebGLProgram.getParameters:", g.precision, "not supported, using", x, "instead."));
    const ie = z.morphAttributes.position || z.morphAttributes.normal || z.morphAttributes.color, Te = ie !== void 0 ? ie.length : 0;
    let Oe = 0;
    z.morphAttributes.position !== void 0 && (Oe = 1), z.morphAttributes.normal !== void 0 && (Oe = 2), z.morphAttributes.color !== void 0 && (Oe = 3);
    let X, J, pe, me;
    if (he) {
      const mt = jt[he];
      X = mt.vertexShader, J = mt.fragmentShader;
    } else
      X = g.vertexShader, J = g.fragmentShader, l.update(g), pe = l.getVertexShaderID(g), me = l.getFragmentShaderID(g);
    const Le = i.getRenderTarget(), be = k.isInstancedMesh === !0, ze = k.isBatchedMesh === !0, Ke = !!g.map, Ge = !!g.matcap, R = !!V, Mt = !!g.aoMap, Be = !!g.lightMap, He = !!g.bumpMap, Ce = !!g.normalMap, tt = !!g.displacementMap, Ae = !!g.emissiveMap, y = !!g.metalnessMap, v = !!g.roughnessMap, N = g.anisotropy > 0, Y = g.clearcoat > 0, Z = g.dispersion > 0, q = g.iridescence > 0, Se = g.sheen > 0, ae = g.transmission > 0, ge = N && !!g.anisotropyMap, We = Y && !!g.clearcoatMap, ne = Y && !!g.clearcoatNormalMap, _e = Y && !!g.clearcoatRoughnessMap, De = q && !!g.iridescenceMap, Ue = q && !!g.iridescenceThicknessMap, ve = Se && !!g.sheenColorMap, Ve = Se && !!g.sheenRoughnessMap, Ie = !!g.specularMap, nt = !!g.specularColorMap, L = !!g.specularIntensityMap, de = ae && !!g.transmissionMap, H = ae && !!g.thicknessMap, j = !!g.gradientMap, le = !!g.alphaMap, fe = g.alphaTest > 0, Xe = !!g.alphaHash, at = !!g.extensions;
    let _t = Mn;
    g.toneMapped && (Le === null || Le.isXRRenderTarget === !0) && (_t = i.toneMapping);
    const qe = {
      shaderID: he,
      shaderType: g.type,
      shaderName: g.name,
      vertexShader: X,
      fragmentShader: J,
      defines: g.defines,
      customVertexShaderID: pe,
      customFragmentShaderID: me,
      isRawShaderMaterial: g.isRawShaderMaterial === !0,
      glslVersion: g.glslVersion,
      precision: x,
      batching: ze,
      batchingColor: ze && k._colorsTexture !== null,
      instancing: be,
      instancingColor: be && k.instanceColor !== null,
      instancingMorph: be && k.morphTexture !== null,
      supportsVertexTextures: m,
      outputColorSpace: Le === null ? i.outputColorSpace : Le.isXRRenderTarget === !0 ? Le.texture.colorSpace : En,
      alphaToCoverage: !!g.alphaToCoverage,
      map: Ke,
      matcap: Ge,
      envMap: R,
      envMapMode: R && V.mapping,
      envMapCubeUVHeight: ue,
      aoMap: Mt,
      lightMap: Be,
      bumpMap: He,
      normalMap: Ce,
      displacementMap: m && tt,
      emissiveMap: Ae,
      normalMapObjectSpace: Ce && g.normalMapType === Bl,
      normalMapTangentSpace: Ce && g.normalMapType === Ol,
      metalnessMap: y,
      roughnessMap: v,
      anisotropy: N,
      anisotropyMap: ge,
      clearcoat: Y,
      clearcoatMap: We,
      clearcoatNormalMap: ne,
      clearcoatRoughnessMap: _e,
      dispersion: Z,
      iridescence: q,
      iridescenceMap: De,
      iridescenceThicknessMap: Ue,
      sheen: Se,
      sheenColorMap: ve,
      sheenRoughnessMap: Ve,
      specularMap: Ie,
      specularColorMap: nt,
      specularIntensityMap: L,
      transmission: ae,
      transmissionMap: de,
      thicknessMap: H,
      gradientMap: j,
      opaque: g.transparent === !1 && g.blending === ei && g.alphaToCoverage === !1,
      alphaMap: le,
      alphaTest: fe,
      alphaHash: Xe,
      combine: g.combine,
      //
      mapUv: Ke && d(g.map.channel),
      aoMapUv: Mt && d(g.aoMap.channel),
      lightMapUv: Be && d(g.lightMap.channel),
      bumpMapUv: He && d(g.bumpMap.channel),
      normalMapUv: Ce && d(g.normalMap.channel),
      displacementMapUv: tt && d(g.displacementMap.channel),
      emissiveMapUv: Ae && d(g.emissiveMap.channel),
      metalnessMapUv: y && d(g.metalnessMap.channel),
      roughnessMapUv: v && d(g.roughnessMap.channel),
      anisotropyMapUv: ge && d(g.anisotropyMap.channel),
      clearcoatMapUv: We && d(g.clearcoatMap.channel),
      clearcoatNormalMapUv: ne && d(g.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: _e && d(g.clearcoatRoughnessMap.channel),
      iridescenceMapUv: De && d(g.iridescenceMap.channel),
      iridescenceThicknessMapUv: Ue && d(g.iridescenceThicknessMap.channel),
      sheenColorMapUv: ve && d(g.sheenColorMap.channel),
      sheenRoughnessMapUv: Ve && d(g.sheenRoughnessMap.channel),
      specularMapUv: Ie && d(g.specularMap.channel),
      specularColorMapUv: nt && d(g.specularColorMap.channel),
      specularIntensityMapUv: L && d(g.specularIntensityMap.channel),
      transmissionMapUv: de && d(g.transmissionMap.channel),
      thicknessMapUv: H && d(g.thicknessMap.channel),
      alphaMapUv: le && d(g.alphaMap.channel),
      //
      vertexTangents: !!z.attributes.tangent && (Ce || N),
      vertexColors: g.vertexColors,
      vertexAlphas: g.vertexColors === !0 && !!z.attributes.color && z.attributes.color.itemSize === 4,
      pointsUvs: k.isPoints === !0 && !!z.attributes.uv && (Ke || le),
      fog: !!$,
      useFog: g.fog === !0,
      fogExp2: !!$ && $.isFogExp2,
      flatShading: g.flatShading === !0,
      sizeAttenuation: g.sizeAttenuation === !0,
      logarithmicDepthBuffer: f,
      reverseDepthBuffer: p,
      skinning: k.isSkinnedMesh === !0,
      morphTargets: z.morphAttributes.position !== void 0,
      morphNormals: z.morphAttributes.normal !== void 0,
      morphColors: z.morphAttributes.color !== void 0,
      morphTargetsCount: Te,
      morphTextureStride: Oe,
      numDirLights: S.directional.length,
      numPointLights: S.point.length,
      numSpotLights: S.spot.length,
      numSpotLightMaps: S.spotLightMap.length,
      numRectAreaLights: S.rectArea.length,
      numHemiLights: S.hemi.length,
      numDirLightShadows: S.directionalShadowMap.length,
      numPointLightShadows: S.pointShadowMap.length,
      numSpotLightShadows: S.spotShadowMap.length,
      numSpotLightShadowsWithMaps: S.numSpotLightShadowsWithMaps,
      numLightProbes: S.numLightProbes,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: g.dithering,
      shadowMapEnabled: i.shadowMap.enabled && W.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: _t,
      decodeVideoTexture: Ke && g.map.isVideoTexture === !0 && Je.getTransfer(g.map.colorSpace) === st,
      premultipliedAlpha: g.premultipliedAlpha,
      doubleSided: g.side === tn,
      flipSided: g.side === wt,
      useDepthPacking: g.depthPacking >= 0,
      depthPacking: g.depthPacking || 0,
      index0AttributeName: g.index0AttributeName,
      extensionClipCullDistance: at && g.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (at && g.extensions.multiDraw === !0 || ze) && n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: g.customProgramCacheKey()
    };
    return qe.vertexUv1s = c.has(1), qe.vertexUv2s = c.has(2), qe.vertexUv3s = c.has(3), c.clear(), qe;
  }
  function T(g) {
    const S = [];
    if (g.shaderID ? S.push(g.shaderID) : (S.push(g.customVertexShaderID), S.push(g.customFragmentShaderID)), g.defines !== void 0)
      for (const W in g.defines)
        S.push(W), S.push(g.defines[W]);
    return g.isRawShaderMaterial === !1 && (E(S, g), b(S, g), S.push(i.outputColorSpace)), S.push(g.customProgramCacheKey), S.join();
  }
  function E(g, S) {
    g.push(S.precision), g.push(S.outputColorSpace), g.push(S.envMapMode), g.push(S.envMapCubeUVHeight), g.push(S.mapUv), g.push(S.alphaMapUv), g.push(S.lightMapUv), g.push(S.aoMapUv), g.push(S.bumpMapUv), g.push(S.normalMapUv), g.push(S.displacementMapUv), g.push(S.emissiveMapUv), g.push(S.metalnessMapUv), g.push(S.roughnessMapUv), g.push(S.anisotropyMapUv), g.push(S.clearcoatMapUv), g.push(S.clearcoatNormalMapUv), g.push(S.clearcoatRoughnessMapUv), g.push(S.iridescenceMapUv), g.push(S.iridescenceThicknessMapUv), g.push(S.sheenColorMapUv), g.push(S.sheenRoughnessMapUv), g.push(S.specularMapUv), g.push(S.specularColorMapUv), g.push(S.specularIntensityMapUv), g.push(S.transmissionMapUv), g.push(S.thicknessMapUv), g.push(S.combine), g.push(S.fogExp2), g.push(S.sizeAttenuation), g.push(S.morphTargetsCount), g.push(S.morphAttributeCount), g.push(S.numDirLights), g.push(S.numPointLights), g.push(S.numSpotLights), g.push(S.numSpotLightMaps), g.push(S.numHemiLights), g.push(S.numRectAreaLights), g.push(S.numDirLightShadows), g.push(S.numPointLightShadows), g.push(S.numSpotLightShadows), g.push(S.numSpotLightShadowsWithMaps), g.push(S.numLightProbes), g.push(S.shadowMapType), g.push(S.toneMapping), g.push(S.numClippingPlanes), g.push(S.numClipIntersection), g.push(S.depthPacking);
  }
  function b(g, S) {
    o.disableAll(), S.supportsVertexTextures && o.enable(0), S.instancing && o.enable(1), S.instancingColor && o.enable(2), S.instancingMorph && o.enable(3), S.matcap && o.enable(4), S.envMap && o.enable(5), S.normalMapObjectSpace && o.enable(6), S.normalMapTangentSpace && o.enable(7), S.clearcoat && o.enable(8), S.iridescence && o.enable(9), S.alphaTest && o.enable(10), S.vertexColors && o.enable(11), S.vertexAlphas && o.enable(12), S.vertexUv1s && o.enable(13), S.vertexUv2s && o.enable(14), S.vertexUv3s && o.enable(15), S.vertexTangents && o.enable(16), S.anisotropy && o.enable(17), S.alphaHash && o.enable(18), S.batching && o.enable(19), S.dispersion && o.enable(20), S.batchingColor && o.enable(21), g.push(o.mask), o.disableAll(), S.fog && o.enable(0), S.useFog && o.enable(1), S.flatShading && o.enable(2), S.logarithmicDepthBuffer && o.enable(3), S.reverseDepthBuffer && o.enable(4), S.skinning && o.enable(5), S.morphTargets && o.enable(6), S.morphNormals && o.enable(7), S.morphColors && o.enable(8), S.premultipliedAlpha && o.enable(9), S.shadowMapEnabled && o.enable(10), S.doubleSided && o.enable(11), S.flipSided && o.enable(12), S.useDepthPacking && o.enable(13), S.dithering && o.enable(14), S.transmission && o.enable(15), S.sheen && o.enable(16), S.opaque && o.enable(17), S.pointsUvs && o.enable(18), S.decodeVideoTexture && o.enable(19), S.alphaToCoverage && o.enable(20), g.push(o.mask);
  }
  function G(g) {
    const S = M[g.type];
    let W;
    if (S) {
      const B = jt[S];
      W = pc.clone(B.uniforms);
    } else
      W = g.uniforms;
    return W;
  }
  function P(g, S) {
    let W;
    for (let B = 0, k = h.length; B < k; B++) {
      const $ = h[B];
      if ($.cacheKey === S) {
        W = $, ++W.usedTimes;
        break;
      }
    }
    return W === void 0 && (W = new Rf(i, S, g, s), h.push(W)), W;
  }
  function w(g) {
    if (--g.usedTimes === 0) {
      const S = h.indexOf(g);
      h[S] = h[h.length - 1], h.pop(), g.destroy();
    }
  }
  function O(g) {
    l.remove(g);
  }
  function ee() {
    l.dispose();
  }
  return {
    getParameters: u,
    getProgramCacheKey: T,
    getUniforms: G,
    acquireProgram: P,
    releaseProgram: w,
    releaseShaderCache: O,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: h,
    dispose: ee
  };
}
function Uf() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(a) {
    return i.has(a);
  }
  function t(a) {
    let o = i.get(a);
    return o === void 0 && (o = {}, i.set(a, o)), o;
  }
  function n(a) {
    i.delete(a);
  }
  function r(a, o, l) {
    i.get(a)[o] = l;
  }
  function s() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    has: e,
    get: t,
    remove: n,
    update: r,
    dispose: s
  };
}
function If(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.material.id !== e.material.id ? i.material.id - e.material.id : i.z !== e.z ? i.z - e.z : i.id - e.id;
}
function io(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.z !== e.z ? e.z - i.z : i.id - e.id;
}
function ro() {
  const i = [];
  let e = 0;
  const t = [], n = [], r = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, r.length = 0;
  }
  function a(f, p, m, x, M, d) {
    let u = i[e];
    return u === void 0 ? (u = {
      id: f.id,
      object: f,
      geometry: p,
      material: m,
      groupOrder: x,
      renderOrder: f.renderOrder,
      z: M,
      group: d
    }, i[e] = u) : (u.id = f.id, u.object = f, u.geometry = p, u.material = m, u.groupOrder = x, u.renderOrder = f.renderOrder, u.z = M, u.group = d), e++, u;
  }
  function o(f, p, m, x, M, d) {
    const u = a(f, p, m, x, M, d);
    m.transmission > 0 ? n.push(u) : m.transparent === !0 ? r.push(u) : t.push(u);
  }
  function l(f, p, m, x, M, d) {
    const u = a(f, p, m, x, M, d);
    m.transmission > 0 ? n.unshift(u) : m.transparent === !0 ? r.unshift(u) : t.unshift(u);
  }
  function c(f, p) {
    t.length > 1 && t.sort(f || If), n.length > 1 && n.sort(p || io), r.length > 1 && r.sort(p || io);
  }
  function h() {
    for (let f = e, p = i.length; f < p; f++) {
      const m = i[f];
      if (m.id === null) break;
      m.id = null, m.object = null, m.geometry = null, m.material = null, m.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: r,
    init: s,
    push: o,
    unshift: l,
    finish: h,
    sort: c
  };
}
function Nf() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(n, r) {
    const s = i.get(n);
    let a;
    return s === void 0 ? (a = new ro(), i.set(n, [a])) : r >= s.length ? (a = new ro(), s.push(a)) : a = s[r], a;
  }
  function t() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function Ff() {
  const i = {};
  return {
    get: function(e) {
      if (i[e.id] !== void 0)
        return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new F(),
            color: new je()
          };
          break;
        case "SpotLight":
          t = {
            position: new F(),
            direction: new F(),
            color: new je(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new F(),
            color: new je(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new F(),
            skyColor: new je(),
            groundColor: new je()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new je(),
            position: new F(),
            halfWidth: new F(),
            halfHeight: new F()
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
function Of() {
  const i = {};
  return {
    get: function(e) {
      if (i[e.id] !== void 0)
        return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new it()
          };
          break;
        case "SpotLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new it()
          };
          break;
        case "PointLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new it(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
let Bf = 0;
function zf(i, e) {
  return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i.map ? 1 : 0);
}
function Hf(i) {
  const e = new Ff(), t = Of(), n = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1,
      numLightProbes: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0,
    numLightProbes: 0
  };
  for (let c = 0; c < 9; c++) n.probe.push(new F());
  const r = new F(), s = new lt(), a = new lt();
  function o(c) {
    let h = 0, f = 0, p = 0;
    for (let ee = 0; ee < 9; ee++) n.probe[ee].set(0, 0, 0);
    let m = 0, x = 0, M = 0, d = 0, u = 0, T = 0, E = 0, b = 0, G = 0, P = 0, w = 0;
    c.sort(zf);
    for (let ee = 0, g = c.length; ee < g; ee++) {
      const S = c[ee], W = S.color, B = S.intensity, k = S.distance, $ = S.shadow && S.shadow.map ? S.shadow.map.texture : null;
      if (S.isAmbientLight)
        h += W.r * B, f += W.g * B, p += W.b * B;
      else if (S.isLightProbe) {
        for (let z = 0; z < 9; z++)
          n.probe[z].addScaledVector(S.sh.coefficients[z], B);
        w++;
      } else if (S.isDirectionalLight) {
        const z = e.get(S);
        if (z.color.copy(S.color).multiplyScalar(S.intensity), S.castShadow) {
          const te = S.shadow, V = t.get(S);
          V.shadowIntensity = te.intensity, V.shadowBias = te.bias, V.shadowNormalBias = te.normalBias, V.shadowRadius = te.radius, V.shadowMapSize = te.mapSize, n.directionalShadow[m] = V, n.directionalShadowMap[m] = $, n.directionalShadowMatrix[m] = S.shadow.matrix, T++;
        }
        n.directional[m] = z, m++;
      } else if (S.isSpotLight) {
        const z = e.get(S);
        z.position.setFromMatrixPosition(S.matrixWorld), z.color.copy(W).multiplyScalar(B), z.distance = k, z.coneCos = Math.cos(S.angle), z.penumbraCos = Math.cos(S.angle * (1 - S.penumbra)), z.decay = S.decay, n.spot[M] = z;
        const te = S.shadow;
        if (S.map && (n.spotLightMap[G] = S.map, G++, te.updateMatrices(S), S.castShadow && P++), n.spotLightMatrix[M] = te.matrix, S.castShadow) {
          const V = t.get(S);
          V.shadowIntensity = te.intensity, V.shadowBias = te.bias, V.shadowNormalBias = te.normalBias, V.shadowRadius = te.radius, V.shadowMapSize = te.mapSize, n.spotShadow[M] = V, n.spotShadowMap[M] = $, b++;
        }
        M++;
      } else if (S.isRectAreaLight) {
        const z = e.get(S);
        z.color.copy(W).multiplyScalar(B), z.halfWidth.set(S.width * 0.5, 0, 0), z.halfHeight.set(0, S.height * 0.5, 0), n.rectArea[d] = z, d++;
      } else if (S.isPointLight) {
        const z = e.get(S);
        if (z.color.copy(S.color).multiplyScalar(S.intensity), z.distance = S.distance, z.decay = S.decay, S.castShadow) {
          const te = S.shadow, V = t.get(S);
          V.shadowIntensity = te.intensity, V.shadowBias = te.bias, V.shadowNormalBias = te.normalBias, V.shadowRadius = te.radius, V.shadowMapSize = te.mapSize, V.shadowCameraNear = te.camera.near, V.shadowCameraFar = te.camera.far, n.pointShadow[x] = V, n.pointShadowMap[x] = $, n.pointShadowMatrix[x] = S.shadow.matrix, E++;
        }
        n.point[x] = z, x++;
      } else if (S.isHemisphereLight) {
        const z = e.get(S);
        z.skyColor.copy(S.color).multiplyScalar(B), z.groundColor.copy(S.groundColor).multiplyScalar(B), n.hemi[u] = z, u++;
      }
    }
    d > 0 && (i.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = oe.LTC_FLOAT_1, n.rectAreaLTC2 = oe.LTC_FLOAT_2) : (n.rectAreaLTC1 = oe.LTC_HALF_1, n.rectAreaLTC2 = oe.LTC_HALF_2)), n.ambient[0] = h, n.ambient[1] = f, n.ambient[2] = p;
    const O = n.hash;
    (O.directionalLength !== m || O.pointLength !== x || O.spotLength !== M || O.rectAreaLength !== d || O.hemiLength !== u || O.numDirectionalShadows !== T || O.numPointShadows !== E || O.numSpotShadows !== b || O.numSpotMaps !== G || O.numLightProbes !== w) && (n.directional.length = m, n.spot.length = M, n.rectArea.length = d, n.point.length = x, n.hemi.length = u, n.directionalShadow.length = T, n.directionalShadowMap.length = T, n.pointShadow.length = E, n.pointShadowMap.length = E, n.spotShadow.length = b, n.spotShadowMap.length = b, n.directionalShadowMatrix.length = T, n.pointShadowMatrix.length = E, n.spotLightMatrix.length = b + G - P, n.spotLightMap.length = G, n.numSpotLightShadowsWithMaps = P, n.numLightProbes = w, O.directionalLength = m, O.pointLength = x, O.spotLength = M, O.rectAreaLength = d, O.hemiLength = u, O.numDirectionalShadows = T, O.numPointShadows = E, O.numSpotShadows = b, O.numSpotMaps = G, O.numLightProbes = w, n.version = Bf++);
  }
  function l(c, h) {
    let f = 0, p = 0, m = 0, x = 0, M = 0;
    const d = h.matrixWorldInverse;
    for (let u = 0, T = c.length; u < T; u++) {
      const E = c[u];
      if (E.isDirectionalLight) {
        const b = n.directional[f];
        b.direction.setFromMatrixPosition(E.matrixWorld), r.setFromMatrixPosition(E.target.matrixWorld), b.direction.sub(r), b.direction.transformDirection(d), f++;
      } else if (E.isSpotLight) {
        const b = n.spot[m];
        b.position.setFromMatrixPosition(E.matrixWorld), b.position.applyMatrix4(d), b.direction.setFromMatrixPosition(E.matrixWorld), r.setFromMatrixPosition(E.target.matrixWorld), b.direction.sub(r), b.direction.transformDirection(d), m++;
      } else if (E.isRectAreaLight) {
        const b = n.rectArea[x];
        b.position.setFromMatrixPosition(E.matrixWorld), b.position.applyMatrix4(d), a.identity(), s.copy(E.matrixWorld), s.premultiply(d), a.extractRotation(s), b.halfWidth.set(E.width * 0.5, 0, 0), b.halfHeight.set(0, E.height * 0.5, 0), b.halfWidth.applyMatrix4(a), b.halfHeight.applyMatrix4(a), x++;
      } else if (E.isPointLight) {
        const b = n.point[p];
        b.position.setFromMatrixPosition(E.matrixWorld), b.position.applyMatrix4(d), p++;
      } else if (E.isHemisphereLight) {
        const b = n.hemi[M];
        b.direction.setFromMatrixPosition(E.matrixWorld), b.direction.transformDirection(d), M++;
      }
    }
  }
  return {
    setup: o,
    setupView: l,
    state: n
  };
}
function so(i) {
  const e = new Hf(i), t = [], n = [];
  function r(h) {
    c.camera = h, t.length = 0, n.length = 0;
  }
  function s(h) {
    t.push(h);
  }
  function a(h) {
    n.push(h);
  }
  function o() {
    e.setup(t);
  }
  function l(h) {
    e.setupView(t, h);
  }
  const c = {
    lightsArray: t,
    shadowsArray: n,
    camera: null,
    lights: e,
    transmissionRenderTarget: {}
  };
  return {
    init: r,
    state: c,
    setupLights: o,
    setupLightsView: l,
    pushLight: s,
    pushShadow: a
  };
}
function Gf(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(r, s = 0) {
    const a = e.get(r);
    let o;
    return a === void 0 ? (o = new so(i), e.set(r, [o])) : s >= a.length ? (o = new so(i), a.push(o)) : o = a[s], o;
  }
  function n() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: n
  };
}
class Vf extends ui {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = Nl, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class kf extends ui {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const Wf = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Xf = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function qf(i, e, t) {
  let n = new Vo();
  const r = new it(), s = new it(), a = new ut(), o = new Vf({ depthPacking: Fl }), l = new kf(), c = {}, h = t.maxTextureSize, f = { [Sn]: wt, [wt]: Sn, [tn]: tn }, p = new cn({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new it() },
      radius: { value: 4 }
    },
    vertexShader: Wf,
    fragmentShader: Xf
  }), m = p.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const x = new Xt();
  x.setAttribute(
    "position",
    new bt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const M = new sn(x, p), d = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = _o;
  let u = this.type;
  this.render = function(P, w, O) {
    if (d.enabled === !1 || d.autoUpdate === !1 && d.needsUpdate === !1 || P.length === 0) return;
    const ee = i.getRenderTarget(), g = i.getActiveCubeFace(), S = i.getActiveMipmapLevel(), W = i.state;
    W.setBlending(xn), W.buffers.color.setClear(1, 1, 1, 1), W.buffers.depth.setTest(!0), W.setScissorTest(!1);
    const B = u !== en && this.type === en, k = u === en && this.type !== en;
    for (let $ = 0, z = P.length; $ < z; $++) {
      const te = P[$], V = te.shadow;
      if (V === void 0) {
        console.warn("THREE.WebGLShadowMap:", te, "has no shadow.");
        continue;
      }
      if (V.autoUpdate === !1 && V.needsUpdate === !1) continue;
      r.copy(V.mapSize);
      const ue = V.getFrameExtents();
      if (r.multiply(ue), s.copy(V.mapSize), (r.x > h || r.y > h) && (r.x > h && (s.x = Math.floor(h / ue.x), r.x = s.x * ue.x, V.mapSize.x = s.x), r.y > h && (s.y = Math.floor(h / ue.y), r.y = s.y * ue.y, V.mapSize.y = s.y)), V.map === null || B === !0 || k === !0) {
        const ie = this.type !== en ? { minFilter: Nt, magFilter: Nt } : {};
        V.map !== null && V.map.dispose(), V.map = new Fn(r.x, r.y, ie), V.map.texture.name = te.name + ".shadowMap", V.camera.updateProjectionMatrix();
      }
      i.setRenderTarget(V.map), i.clear();
      const he = V.getViewportCount();
      for (let ie = 0; ie < he; ie++) {
        const Te = V.getViewport(ie);
        a.set(
          s.x * Te.x,
          s.y * Te.y,
          s.x * Te.z,
          s.y * Te.w
        ), W.viewport(a), V.updateMatrices(te, ie), n = V.getFrustum(), b(w, O, V.camera, te, this.type);
      }
      V.isPointLightShadow !== !0 && this.type === en && T(V, O), V.needsUpdate = !1;
    }
    u = this.type, d.needsUpdate = !1, i.setRenderTarget(ee, g, S);
  };
  function T(P, w) {
    const O = e.update(M);
    p.defines.VSM_SAMPLES !== P.blurSamples && (p.defines.VSM_SAMPLES = P.blurSamples, m.defines.VSM_SAMPLES = P.blurSamples, p.needsUpdate = !0, m.needsUpdate = !0), P.mapPass === null && (P.mapPass = new Fn(r.x, r.y)), p.uniforms.shadow_pass.value = P.map.texture, p.uniforms.resolution.value = P.mapSize, p.uniforms.radius.value = P.radius, i.setRenderTarget(P.mapPass), i.clear(), i.renderBufferDirect(w, null, O, p, M, null), m.uniforms.shadow_pass.value = P.mapPass.texture, m.uniforms.resolution.value = P.mapSize, m.uniforms.radius.value = P.radius, i.setRenderTarget(P.map), i.clear(), i.renderBufferDirect(w, null, O, m, M, null);
  }
  function E(P, w, O, ee) {
    let g = null;
    const S = O.isPointLight === !0 ? P.customDistanceMaterial : P.customDepthMaterial;
    if (S !== void 0)
      g = S;
    else if (g = O.isPointLight === !0 ? l : o, i.localClippingEnabled && w.clipShadows === !0 && Array.isArray(w.clippingPlanes) && w.clippingPlanes.length !== 0 || w.displacementMap && w.displacementScale !== 0 || w.alphaMap && w.alphaTest > 0 || w.map && w.alphaTest > 0) {
      const W = g.uuid, B = w.uuid;
      let k = c[W];
      k === void 0 && (k = {}, c[W] = k);
      let $ = k[B];
      $ === void 0 && ($ = g.clone(), k[B] = $, w.addEventListener("dispose", G)), g = $;
    }
    if (g.visible = w.visible, g.wireframe = w.wireframe, ee === en ? g.side = w.shadowSide !== null ? w.shadowSide : w.side : g.side = w.shadowSide !== null ? w.shadowSide : f[w.side], g.alphaMap = w.alphaMap, g.alphaTest = w.alphaTest, g.map = w.map, g.clipShadows = w.clipShadows, g.clippingPlanes = w.clippingPlanes, g.clipIntersection = w.clipIntersection, g.displacementMap = w.displacementMap, g.displacementScale = w.displacementScale, g.displacementBias = w.displacementBias, g.wireframeLinewidth = w.wireframeLinewidth, g.linewidth = w.linewidth, O.isPointLight === !0 && g.isMeshDistanceMaterial === !0) {
      const W = i.properties.get(g);
      W.light = O;
    }
    return g;
  }
  function b(P, w, O, ee, g) {
    if (P.visible === !1) return;
    if (P.layers.test(w.layers) && (P.isMesh || P.isLine || P.isPoints) && (P.castShadow || P.receiveShadow && g === en) && (!P.frustumCulled || n.intersectsObject(P))) {
      P.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse, P.matrixWorld);
      const B = e.update(P), k = P.material;
      if (Array.isArray(k)) {
        const $ = B.groups;
        for (let z = 0, te = $.length; z < te; z++) {
          const V = $[z], ue = k[V.materialIndex];
          if (ue && ue.visible) {
            const he = E(P, ue, ee, g);
            P.onBeforeShadow(i, P, w, O, B, he, V), i.renderBufferDirect(O, null, B, he, P, V), P.onAfterShadow(i, P, w, O, B, he, V);
          }
        }
      } else if (k.visible) {
        const $ = E(P, k, ee, g);
        P.onBeforeShadow(i, P, w, O, B, $, null), i.renderBufferDirect(O, null, B, $, P, null), P.onAfterShadow(i, P, w, O, B, $, null);
      }
    }
    const W = P.children;
    for (let B = 0, k = W.length; B < k; B++)
      b(W[B], w, O, ee, g);
  }
  function G(P) {
    P.target.removeEventListener("dispose", G);
    for (const O in c) {
      const ee = c[O], g = P.target.uuid;
      g in ee && (ee[g].dispose(), delete ee[g]);
    }
  }
}
const Yf = {
  [hs]: ds,
  [fs]: gs,
  [ps]: _s,
  [ii]: ms,
  [ds]: hs,
  [gs]: fs,
  [_s]: ps,
  [ms]: ii
};
function jf(i) {
  function e() {
    let L = !1;
    const de = new ut();
    let H = null;
    const j = new ut(0, 0, 0, 0);
    return {
      setMask: function(le) {
        H !== le && !L && (i.colorMask(le, le, le, le), H = le);
      },
      setLocked: function(le) {
        L = le;
      },
      setClear: function(le, fe, Xe, at, _t) {
        _t === !0 && (le *= at, fe *= at, Xe *= at), de.set(le, fe, Xe, at), j.equals(de) === !1 && (i.clearColor(le, fe, Xe, at), j.copy(de));
      },
      reset: function() {
        L = !1, H = null, j.set(-1, 0, 0, 0);
      }
    };
  }
  function t() {
    let L = !1, de = !1, H = null, j = null, le = null;
    return {
      setReversed: function(fe) {
        de = fe;
      },
      setTest: function(fe) {
        fe ? pe(i.DEPTH_TEST) : me(i.DEPTH_TEST);
      },
      setMask: function(fe) {
        H !== fe && !L && (i.depthMask(fe), H = fe);
      },
      setFunc: function(fe) {
        if (de && (fe = Yf[fe]), j !== fe) {
          switch (fe) {
            case hs:
              i.depthFunc(i.NEVER);
              break;
            case ds:
              i.depthFunc(i.ALWAYS);
              break;
            case fs:
              i.depthFunc(i.LESS);
              break;
            case ii:
              i.depthFunc(i.LEQUAL);
              break;
            case ps:
              i.depthFunc(i.EQUAL);
              break;
            case ms:
              i.depthFunc(i.GEQUAL);
              break;
            case gs:
              i.depthFunc(i.GREATER);
              break;
            case _s:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          j = fe;
        }
      },
      setLocked: function(fe) {
        L = fe;
      },
      setClear: function(fe) {
        le !== fe && (i.clearDepth(fe), le = fe);
      },
      reset: function() {
        L = !1, H = null, j = null, le = null;
      }
    };
  }
  function n() {
    let L = !1, de = null, H = null, j = null, le = null, fe = null, Xe = null, at = null, _t = null;
    return {
      setTest: function(qe) {
        L || (qe ? pe(i.STENCIL_TEST) : me(i.STENCIL_TEST));
      },
      setMask: function(qe) {
        de !== qe && !L && (i.stencilMask(qe), de = qe);
      },
      setFunc: function(qe, mt, Ft) {
        (H !== qe || j !== mt || le !== Ft) && (i.stencilFunc(qe, mt, Ft), H = qe, j = mt, le = Ft);
      },
      setOp: function(qe, mt, Ft) {
        (fe !== qe || Xe !== mt || at !== Ft) && (i.stencilOp(qe, mt, Ft), fe = qe, Xe = mt, at = Ft);
      },
      setLocked: function(qe) {
        L = qe;
      },
      setClear: function(qe) {
        _t !== qe && (i.clearStencil(qe), _t = qe);
      },
      reset: function() {
        L = !1, de = null, H = null, j = null, le = null, fe = null, Xe = null, at = null, _t = null;
      }
    };
  }
  const r = new e(), s = new t(), a = new n(), o = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap();
  let c = {}, h = {}, f = /* @__PURE__ */ new WeakMap(), p = [], m = null, x = !1, M = null, d = null, u = null, T = null, E = null, b = null, G = null, P = new je(0, 0, 0), w = 0, O = !1, ee = null, g = null, S = null, W = null, B = null;
  const k = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let $ = !1, z = 0;
  const te = i.getParameter(i.VERSION);
  te.indexOf("WebGL") !== -1 ? (z = parseFloat(/^WebGL (\d)/.exec(te)[1]), $ = z >= 1) : te.indexOf("OpenGL ES") !== -1 && (z = parseFloat(/^OpenGL ES (\d)/.exec(te)[1]), $ = z >= 2);
  let V = null, ue = {};
  const he = i.getParameter(i.SCISSOR_BOX), ie = i.getParameter(i.VIEWPORT), Te = new ut().fromArray(he), Oe = new ut().fromArray(ie);
  function X(L, de, H, j) {
    const le = new Uint8Array(4), fe = i.createTexture();
    i.bindTexture(L, fe), i.texParameteri(L, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(L, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let Xe = 0; Xe < H; Xe++)
      L === i.TEXTURE_3D || L === i.TEXTURE_2D_ARRAY ? i.texImage3D(de, 0, i.RGBA, 1, 1, j, 0, i.RGBA, i.UNSIGNED_BYTE, le) : i.texImage2D(de + Xe, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, le);
    return fe;
  }
  const J = {};
  J[i.TEXTURE_2D] = X(i.TEXTURE_2D, i.TEXTURE_2D, 1), J[i.TEXTURE_CUBE_MAP] = X(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), J[i.TEXTURE_2D_ARRAY] = X(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), J[i.TEXTURE_3D] = X(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1), r.setClear(0, 0, 0, 1), s.setClear(1), a.setClear(0), pe(i.DEPTH_TEST), s.setFunc(ii), Be(!1), He(pa), pe(i.CULL_FACE), R(xn);
  function pe(L) {
    c[L] !== !0 && (i.enable(L), c[L] = !0);
  }
  function me(L) {
    c[L] !== !1 && (i.disable(L), c[L] = !1);
  }
  function Le(L, de) {
    return h[L] !== de ? (i.bindFramebuffer(L, de), h[L] = de, L === i.DRAW_FRAMEBUFFER && (h[i.FRAMEBUFFER] = de), L === i.FRAMEBUFFER && (h[i.DRAW_FRAMEBUFFER] = de), !0) : !1;
  }
  function be(L, de) {
    let H = p, j = !1;
    if (L) {
      H = f.get(de), H === void 0 && (H = [], f.set(de, H));
      const le = L.textures;
      if (H.length !== le.length || H[0] !== i.COLOR_ATTACHMENT0) {
        for (let fe = 0, Xe = le.length; fe < Xe; fe++)
          H[fe] = i.COLOR_ATTACHMENT0 + fe;
        H.length = le.length, j = !0;
      }
    } else
      H[0] !== i.BACK && (H[0] = i.BACK, j = !0);
    j && i.drawBuffers(H);
  }
  function ze(L) {
    return m !== L ? (i.useProgram(L), m = L, !0) : !1;
  }
  const Ke = {
    [Ln]: i.FUNC_ADD,
    [ll]: i.FUNC_SUBTRACT,
    [cl]: i.FUNC_REVERSE_SUBTRACT
  };
  Ke[ul] = i.MIN, Ke[hl] = i.MAX;
  const Ge = {
    [dl]: i.ZERO,
    [fl]: i.ONE,
    [pl]: i.SRC_COLOR,
    [cs]: i.SRC_ALPHA,
    [Ml]: i.SRC_ALPHA_SATURATE,
    [vl]: i.DST_COLOR,
    [gl]: i.DST_ALPHA,
    [ml]: i.ONE_MINUS_SRC_COLOR,
    [us]: i.ONE_MINUS_SRC_ALPHA,
    [xl]: i.ONE_MINUS_DST_COLOR,
    [_l]: i.ONE_MINUS_DST_ALPHA,
    [Sl]: i.CONSTANT_COLOR,
    [El]: i.ONE_MINUS_CONSTANT_COLOR,
    [yl]: i.CONSTANT_ALPHA,
    [Tl]: i.ONE_MINUS_CONSTANT_ALPHA
  };
  function R(L, de, H, j, le, fe, Xe, at, _t, qe) {
    if (L === xn) {
      x === !0 && (me(i.BLEND), x = !1);
      return;
    }
    if (x === !1 && (pe(i.BLEND), x = !0), L !== ol) {
      if (L !== M || qe !== O) {
        if ((d !== Ln || E !== Ln) && (i.blendEquation(i.FUNC_ADD), d = Ln, E = Ln), qe)
          switch (L) {
            case ei:
              i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case gr:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case ma:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case ga:
              i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", L);
              break;
          }
        else
          switch (L) {
            case ei:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case gr:
              i.blendFunc(i.SRC_ALPHA, i.ONE);
              break;
            case ma:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case ga:
              i.blendFunc(i.ZERO, i.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", L);
              break;
          }
        u = null, T = null, b = null, G = null, P.set(0, 0, 0), w = 0, M = L, O = qe;
      }
      return;
    }
    le = le || de, fe = fe || H, Xe = Xe || j, (de !== d || le !== E) && (i.blendEquationSeparate(Ke[de], Ke[le]), d = de, E = le), (H !== u || j !== T || fe !== b || Xe !== G) && (i.blendFuncSeparate(Ge[H], Ge[j], Ge[fe], Ge[Xe]), u = H, T = j, b = fe, G = Xe), (at.equals(P) === !1 || _t !== w) && (i.blendColor(at.r, at.g, at.b, _t), P.copy(at), w = _t), M = L, O = !1;
  }
  function Mt(L, de) {
    L.side === tn ? me(i.CULL_FACE) : pe(i.CULL_FACE);
    let H = L.side === wt;
    de && (H = !H), Be(H), L.blending === ei && L.transparent === !1 ? R(xn) : R(L.blending, L.blendEquation, L.blendSrc, L.blendDst, L.blendEquationAlpha, L.blendSrcAlpha, L.blendDstAlpha, L.blendColor, L.blendAlpha, L.premultipliedAlpha), s.setFunc(L.depthFunc), s.setTest(L.depthTest), s.setMask(L.depthWrite), r.setMask(L.colorWrite);
    const j = L.stencilWrite;
    a.setTest(j), j && (a.setMask(L.stencilWriteMask), a.setFunc(L.stencilFunc, L.stencilRef, L.stencilFuncMask), a.setOp(L.stencilFail, L.stencilZFail, L.stencilZPass)), tt(L.polygonOffset, L.polygonOffsetFactor, L.polygonOffsetUnits), L.alphaToCoverage === !0 ? pe(i.SAMPLE_ALPHA_TO_COVERAGE) : me(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Be(L) {
    ee !== L && (L ? i.frontFace(i.CW) : i.frontFace(i.CCW), ee = L);
  }
  function He(L) {
    L !== rl ? (pe(i.CULL_FACE), L !== g && (L === pa ? i.cullFace(i.BACK) : L === sl ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : me(i.CULL_FACE), g = L;
  }
  function Ce(L) {
    L !== S && ($ && i.lineWidth(L), S = L);
  }
  function tt(L, de, H) {
    L ? (pe(i.POLYGON_OFFSET_FILL), (W !== de || B !== H) && (i.polygonOffset(de, H), W = de, B = H)) : me(i.POLYGON_OFFSET_FILL);
  }
  function Ae(L) {
    L ? pe(i.SCISSOR_TEST) : me(i.SCISSOR_TEST);
  }
  function y(L) {
    L === void 0 && (L = i.TEXTURE0 + k - 1), V !== L && (i.activeTexture(L), V = L);
  }
  function v(L, de, H) {
    H === void 0 && (V === null ? H = i.TEXTURE0 + k - 1 : H = V);
    let j = ue[H];
    j === void 0 && (j = { type: void 0, texture: void 0 }, ue[H] = j), (j.type !== L || j.texture !== de) && (V !== H && (i.activeTexture(H), V = H), i.bindTexture(L, de || J[L]), j.type = L, j.texture = de);
  }
  function N() {
    const L = ue[V];
    L !== void 0 && L.type !== void 0 && (i.bindTexture(L.type, null), L.type = void 0, L.texture = void 0);
  }
  function Y() {
    try {
      i.compressedTexImage2D.apply(i, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function Z() {
    try {
      i.compressedTexImage3D.apply(i, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function q() {
    try {
      i.texSubImage2D.apply(i, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function Se() {
    try {
      i.texSubImage3D.apply(i, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function ae() {
    try {
      i.compressedTexSubImage2D.apply(i, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function ge() {
    try {
      i.compressedTexSubImage3D.apply(i, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function We() {
    try {
      i.texStorage2D.apply(i, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function ne() {
    try {
      i.texStorage3D.apply(i, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function _e() {
    try {
      i.texImage2D.apply(i, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function De() {
    try {
      i.texImage3D.apply(i, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function Ue(L) {
    Te.equals(L) === !1 && (i.scissor(L.x, L.y, L.z, L.w), Te.copy(L));
  }
  function ve(L) {
    Oe.equals(L) === !1 && (i.viewport(L.x, L.y, L.z, L.w), Oe.copy(L));
  }
  function Ve(L, de) {
    let H = l.get(de);
    H === void 0 && (H = /* @__PURE__ */ new WeakMap(), l.set(de, H));
    let j = H.get(L);
    j === void 0 && (j = i.getUniformBlockIndex(de, L.name), H.set(L, j));
  }
  function Ie(L, de) {
    const j = l.get(de).get(L);
    o.get(de) !== j && (i.uniformBlockBinding(de, j, L.__bindingPointIndex), o.set(de, j));
  }
  function nt() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), c = {}, V = null, ue = {}, h = {}, f = /* @__PURE__ */ new WeakMap(), p = [], m = null, x = !1, M = null, d = null, u = null, T = null, E = null, b = null, G = null, P = new je(0, 0, 0), w = 0, O = !1, ee = null, g = null, S = null, W = null, B = null, Te.set(0, 0, i.canvas.width, i.canvas.height), Oe.set(0, 0, i.canvas.width, i.canvas.height), r.reset(), s.reset(), a.reset();
  }
  return {
    buffers: {
      color: r,
      depth: s,
      stencil: a
    },
    enable: pe,
    disable: me,
    bindFramebuffer: Le,
    drawBuffers: be,
    useProgram: ze,
    setBlending: R,
    setMaterial: Mt,
    setFlipSided: Be,
    setCullFace: He,
    setLineWidth: Ce,
    setPolygonOffset: tt,
    setScissorTest: Ae,
    activeTexture: y,
    bindTexture: v,
    unbindTexture: N,
    compressedTexImage2D: Y,
    compressedTexImage3D: Z,
    texImage2D: _e,
    texImage3D: De,
    updateUBOMapping: Ve,
    uniformBlockBinding: Ie,
    texStorage2D: We,
    texStorage3D: ne,
    texSubImage2D: q,
    texSubImage3D: Se,
    compressedTexSubImage2D: ae,
    compressedTexSubImage3D: ge,
    scissor: Ue,
    viewport: ve,
    reset: nt
  };
}
function ao(i, e, t, n) {
  const r = Kf(n);
  switch (t) {
    // https://registry.khronos.org/OpenGL-Refpages/es3.0/html/glTexImage2D.xhtml
    case yo:
      return i * e;
    case bo:
      return i * e;
    case Ao:
      return i * e * 2;
    case wo:
      return i * e / r.components * r.byteLength;
    case na:
      return i * e / r.components * r.byteLength;
    case Ro:
      return i * e * 2 / r.components * r.byteLength;
    case ia:
      return i * e * 2 / r.components * r.byteLength;
    case To:
      return i * e * 3 / r.components * r.byteLength;
    case Wt:
      return i * e * 4 / r.components * r.byteLength;
    case ra:
      return i * e * 4 / r.components * r.byteLength;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_s3tc_srgb/
    case cr:
    case ur:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case hr:
    case dr:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_pvrtc/
    case ys:
    case bs:
      return Math.max(i, 16) * Math.max(e, 8) / 4;
    case Es:
    case Ts:
      return Math.max(i, 8) * Math.max(e, 8) / 2;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_etc/
    case As:
    case ws:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case Rs:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_astc/
    case Cs:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Ps:
      return Math.floor((i + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case Ls:
      return Math.floor((i + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case Ds:
      return Math.floor((i + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case Us:
      return Math.floor((i + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case Is:
      return Math.floor((i + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case Ns:
      return Math.floor((i + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case Fs:
      return Math.floor((i + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case Os:
      return Math.floor((i + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case Bs:
      return Math.floor((i + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case zs:
      return Math.floor((i + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case Hs:
      return Math.floor((i + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case Gs:
      return Math.floor((i + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case Vs:
      return Math.floor((i + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_bptc/
    case fr:
    case ks:
    case Ws:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_rgtc/
    case Co:
    case Xs:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 8;
    case qs:
    case Ys:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(
    `Unable to determine texture byte length for ${t} format.`
  );
}
function Kf(i) {
  switch (i) {
    case on:
    case Mo:
      return { byteLength: 1, components: 1 };
    case Ti:
    case So:
    case wi:
      return { byteLength: 2, components: 1 };
    case ea:
    case ta:
      return { byteLength: 2, components: 4 };
    case Nn:
    case Qs:
    case nn:
      return { byteLength: 4, components: 1 };
    case Eo:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${i}.`);
}
function $f(i, e, t, n, r, s, a) {
  const o = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), c = new it(), h = /* @__PURE__ */ new WeakMap();
  let f;
  const p = /* @__PURE__ */ new WeakMap();
  let m = !1;
  try {
    m = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function x(y, v) {
    return m ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(y, v)
    ) : Sr("canvas");
  }
  function M(y, v, N) {
    let Y = 1;
    const Z = Ae(y);
    if ((Z.width > N || Z.height > N) && (Y = N / Math.max(Z.width, Z.height)), Y < 1)
      if (typeof HTMLImageElement < "u" && y instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && y instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && y instanceof ImageBitmap || typeof VideoFrame < "u" && y instanceof VideoFrame) {
        const q = Math.floor(Y * Z.width), Se = Math.floor(Y * Z.height);
        f === void 0 && (f = x(q, Se));
        const ae = v ? x(q, Se) : f;
        return ae.width = q, ae.height = Se, ae.getContext("2d").drawImage(y, 0, 0, q, Se), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + Z.width + "x" + Z.height + ") to (" + q + "x" + Se + ")."), ae;
      } else
        return "data" in y && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + Z.width + "x" + Z.height + ")."), y;
    return y;
  }
  function d(y) {
    return y.generateMipmaps && y.minFilter !== Nt && y.minFilter !== Vt;
  }
  function u(y) {
    i.generateMipmap(y);
  }
  function T(y, v, N, Y, Z = !1) {
    if (y !== null) {
      if (i[y] !== void 0) return i[y];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + y + "'");
    }
    let q = v;
    if (v === i.RED && (N === i.FLOAT && (q = i.R32F), N === i.HALF_FLOAT && (q = i.R16F), N === i.UNSIGNED_BYTE && (q = i.R8)), v === i.RED_INTEGER && (N === i.UNSIGNED_BYTE && (q = i.R8UI), N === i.UNSIGNED_SHORT && (q = i.R16UI), N === i.UNSIGNED_INT && (q = i.R32UI), N === i.BYTE && (q = i.R8I), N === i.SHORT && (q = i.R16I), N === i.INT && (q = i.R32I)), v === i.RG && (N === i.FLOAT && (q = i.RG32F), N === i.HALF_FLOAT && (q = i.RG16F), N === i.UNSIGNED_BYTE && (q = i.RG8)), v === i.RG_INTEGER && (N === i.UNSIGNED_BYTE && (q = i.RG8UI), N === i.UNSIGNED_SHORT && (q = i.RG16UI), N === i.UNSIGNED_INT && (q = i.RG32UI), N === i.BYTE && (q = i.RG8I), N === i.SHORT && (q = i.RG16I), N === i.INT && (q = i.RG32I)), v === i.RGB_INTEGER && (N === i.UNSIGNED_BYTE && (q = i.RGB8UI), N === i.UNSIGNED_SHORT && (q = i.RGB16UI), N === i.UNSIGNED_INT && (q = i.RGB32UI), N === i.BYTE && (q = i.RGB8I), N === i.SHORT && (q = i.RGB16I), N === i.INT && (q = i.RGB32I)), v === i.RGBA_INTEGER && (N === i.UNSIGNED_BYTE && (q = i.RGBA8UI), N === i.UNSIGNED_SHORT && (q = i.RGBA16UI), N === i.UNSIGNED_INT && (q = i.RGBA32UI), N === i.BYTE && (q = i.RGBA8I), N === i.SHORT && (q = i.RGBA16I), N === i.INT && (q = i.RGBA32I)), v === i.RGB && N === i.UNSIGNED_INT_5_9_9_9_REV && (q = i.RGB9_E5), v === i.RGBA) {
      const Se = Z ? _r : Je.getTransfer(Y);
      N === i.FLOAT && (q = i.RGBA32F), N === i.HALF_FLOAT && (q = i.RGBA16F), N === i.UNSIGNED_BYTE && (q = Se === st ? i.SRGB8_ALPHA8 : i.RGBA8), N === i.UNSIGNED_SHORT_4_4_4_4 && (q = i.RGBA4), N === i.UNSIGNED_SHORT_5_5_5_1 && (q = i.RGB5_A1);
    }
    return (q === i.R16F || q === i.R32F || q === i.RG16F || q === i.RG32F || q === i.RGBA16F || q === i.RGBA32F) && e.get("EXT_color_buffer_float"), q;
  }
  function E(y, v) {
    let N;
    return y ? v === null || v === Nn || v === ai ? N = i.DEPTH24_STENCIL8 : v === nn ? N = i.DEPTH32F_STENCIL8 : v === Ti && (N = i.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : v === null || v === Nn || v === ai ? N = i.DEPTH_COMPONENT24 : v === nn ? N = i.DEPTH_COMPONENT32F : v === Ti && (N = i.DEPTH_COMPONENT16), N;
  }
  function b(y, v) {
    return d(y) === !0 || y.isFramebufferTexture && y.minFilter !== Nt && y.minFilter !== Vt ? Math.log2(Math.max(v.width, v.height)) + 1 : y.mipmaps !== void 0 && y.mipmaps.length > 0 ? y.mipmaps.length : y.isCompressedTexture && Array.isArray(y.image) ? v.mipmaps.length : 1;
  }
  function G(y) {
    const v = y.target;
    v.removeEventListener("dispose", G), w(v), v.isVideoTexture && h.delete(v);
  }
  function P(y) {
    const v = y.target;
    v.removeEventListener("dispose", P), ee(v);
  }
  function w(y) {
    const v = n.get(y);
    if (v.__webglInit === void 0) return;
    const N = y.source, Y = p.get(N);
    if (Y) {
      const Z = Y[v.__cacheKey];
      Z.usedTimes--, Z.usedTimes === 0 && O(y), Object.keys(Y).length === 0 && p.delete(N);
    }
    n.remove(y);
  }
  function O(y) {
    const v = n.get(y);
    i.deleteTexture(v.__webglTexture);
    const N = y.source, Y = p.get(N);
    delete Y[v.__cacheKey], a.memory.textures--;
  }
  function ee(y) {
    const v = n.get(y);
    if (y.depthTexture && y.depthTexture.dispose(), y.isWebGLCubeRenderTarget)
      for (let Y = 0; Y < 6; Y++) {
        if (Array.isArray(v.__webglFramebuffer[Y]))
          for (let Z = 0; Z < v.__webglFramebuffer[Y].length; Z++) i.deleteFramebuffer(v.__webglFramebuffer[Y][Z]);
        else
          i.deleteFramebuffer(v.__webglFramebuffer[Y]);
        v.__webglDepthbuffer && i.deleteRenderbuffer(v.__webglDepthbuffer[Y]);
      }
    else {
      if (Array.isArray(v.__webglFramebuffer))
        for (let Y = 0; Y < v.__webglFramebuffer.length; Y++) i.deleteFramebuffer(v.__webglFramebuffer[Y]);
      else
        i.deleteFramebuffer(v.__webglFramebuffer);
      if (v.__webglDepthbuffer && i.deleteRenderbuffer(v.__webglDepthbuffer), v.__webglMultisampledFramebuffer && i.deleteFramebuffer(v.__webglMultisampledFramebuffer), v.__webglColorRenderbuffer)
        for (let Y = 0; Y < v.__webglColorRenderbuffer.length; Y++)
          v.__webglColorRenderbuffer[Y] && i.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);
      v.__webglDepthRenderbuffer && i.deleteRenderbuffer(v.__webglDepthRenderbuffer);
    }
    const N = y.textures;
    for (let Y = 0, Z = N.length; Y < Z; Y++) {
      const q = n.get(N[Y]);
      q.__webglTexture && (i.deleteTexture(q.__webglTexture), a.memory.textures--), n.remove(N[Y]);
    }
    n.remove(y);
  }
  let g = 0;
  function S() {
    g = 0;
  }
  function W() {
    const y = g;
    return y >= r.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + y + " texture units while this GPU supports only " + r.maxTextures), g += 1, y;
  }
  function B(y) {
    const v = [];
    return v.push(y.wrapS), v.push(y.wrapT), v.push(y.wrapR || 0), v.push(y.magFilter), v.push(y.minFilter), v.push(y.anisotropy), v.push(y.internalFormat), v.push(y.format), v.push(y.type), v.push(y.generateMipmaps), v.push(y.premultiplyAlpha), v.push(y.flipY), v.push(y.unpackAlignment), v.push(y.colorSpace), v.join();
  }
  function k(y, v) {
    const N = n.get(y);
    if (y.isVideoTexture && Ce(y), y.isRenderTargetTexture === !1 && y.version > 0 && N.__version !== y.version) {
      const Y = y.image;
      if (Y === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (Y.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        Oe(N, y, v);
        return;
      }
    }
    t.bindTexture(i.TEXTURE_2D, N.__webglTexture, i.TEXTURE0 + v);
  }
  function $(y, v) {
    const N = n.get(y);
    if (y.version > 0 && N.__version !== y.version) {
      Oe(N, y, v);
      return;
    }
    t.bindTexture(i.TEXTURE_2D_ARRAY, N.__webglTexture, i.TEXTURE0 + v);
  }
  function z(y, v) {
    const N = n.get(y);
    if (y.version > 0 && N.__version !== y.version) {
      Oe(N, y, v);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, N.__webglTexture, i.TEXTURE0 + v);
  }
  function te(y, v) {
    const N = n.get(y);
    if (y.version > 0 && N.__version !== y.version) {
      X(N, y, v);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, N.__webglTexture, i.TEXTURE0 + v);
  }
  const V = {
    [Ms]: i.REPEAT,
    [Un]: i.CLAMP_TO_EDGE,
    [Ss]: i.MIRRORED_REPEAT
  }, ue = {
    [Nt]: i.NEAREST,
    [Il]: i.NEAREST_MIPMAP_NEAREST,
    [Oi]: i.NEAREST_MIPMAP_LINEAR,
    [Vt]: i.LINEAR,
    [Lr]: i.LINEAR_MIPMAP_NEAREST,
    [In]: i.LINEAR_MIPMAP_LINEAR
  }, he = {
    [zl]: i.NEVER,
    [Xl]: i.ALWAYS,
    [Hl]: i.LESS,
    [Po]: i.LEQUAL,
    [Gl]: i.EQUAL,
    [Wl]: i.GEQUAL,
    [Vl]: i.GREATER,
    [kl]: i.NOTEQUAL
  };
  function ie(y, v) {
    if (v.type === nn && e.has("OES_texture_float_linear") === !1 && (v.magFilter === Vt || v.magFilter === Lr || v.magFilter === Oi || v.magFilter === In || v.minFilter === Vt || v.minFilter === Lr || v.minFilter === Oi || v.minFilter === In) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i.texParameteri(y, i.TEXTURE_WRAP_S, V[v.wrapS]), i.texParameteri(y, i.TEXTURE_WRAP_T, V[v.wrapT]), (y === i.TEXTURE_3D || y === i.TEXTURE_2D_ARRAY) && i.texParameteri(y, i.TEXTURE_WRAP_R, V[v.wrapR]), i.texParameteri(y, i.TEXTURE_MAG_FILTER, ue[v.magFilter]), i.texParameteri(y, i.TEXTURE_MIN_FILTER, ue[v.minFilter]), v.compareFunction && (i.texParameteri(y, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(y, i.TEXTURE_COMPARE_FUNC, he[v.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      if (v.magFilter === Nt || v.minFilter !== Oi && v.minFilter !== In || v.type === nn && e.has("OES_texture_float_linear") === !1) return;
      if (v.anisotropy > 1 || n.get(v).__currentAnisotropy) {
        const N = e.get("EXT_texture_filter_anisotropic");
        i.texParameterf(y, N.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(v.anisotropy, r.getMaxAnisotropy())), n.get(v).__currentAnisotropy = v.anisotropy;
      }
    }
  }
  function Te(y, v) {
    let N = !1;
    y.__webglInit === void 0 && (y.__webglInit = !0, v.addEventListener("dispose", G));
    const Y = v.source;
    let Z = p.get(Y);
    Z === void 0 && (Z = {}, p.set(Y, Z));
    const q = B(v);
    if (q !== y.__cacheKey) {
      Z[q] === void 0 && (Z[q] = {
        texture: i.createTexture(),
        usedTimes: 0
      }, a.memory.textures++, N = !0), Z[q].usedTimes++;
      const Se = Z[y.__cacheKey];
      Se !== void 0 && (Z[y.__cacheKey].usedTimes--, Se.usedTimes === 0 && O(v)), y.__cacheKey = q, y.__webglTexture = Z[q].texture;
    }
    return N;
  }
  function Oe(y, v, N) {
    let Y = i.TEXTURE_2D;
    (v.isDataArrayTexture || v.isCompressedArrayTexture) && (Y = i.TEXTURE_2D_ARRAY), v.isData3DTexture && (Y = i.TEXTURE_3D);
    const Z = Te(y, v), q = v.source;
    t.bindTexture(Y, y.__webglTexture, i.TEXTURE0 + N);
    const Se = n.get(q);
    if (q.version !== Se.__version || Z === !0) {
      t.activeTexture(i.TEXTURE0 + N);
      const ae = Je.getPrimaries(Je.workingColorSpace), ge = v.colorSpace === vn ? null : Je.getPrimaries(v.colorSpace), We = v.colorSpace === vn || ae === ge ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, v.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, v.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, We);
      let ne = M(v.image, !1, r.maxTextureSize);
      ne = tt(v, ne);
      const _e = s.convert(v.format, v.colorSpace), De = s.convert(v.type);
      let Ue = T(v.internalFormat, _e, De, v.colorSpace, v.isVideoTexture);
      ie(Y, v);
      let ve;
      const Ve = v.mipmaps, Ie = v.isVideoTexture !== !0, nt = Se.__version === void 0 || Z === !0, L = q.dataReady, de = b(v, ne);
      if (v.isDepthTexture)
        Ue = E(v.format === oi, v.type), nt && (Ie ? t.texStorage2D(i.TEXTURE_2D, 1, Ue, ne.width, ne.height) : t.texImage2D(i.TEXTURE_2D, 0, Ue, ne.width, ne.height, 0, _e, De, null));
      else if (v.isDataTexture)
        if (Ve.length > 0) {
          Ie && nt && t.texStorage2D(i.TEXTURE_2D, de, Ue, Ve[0].width, Ve[0].height);
          for (let H = 0, j = Ve.length; H < j; H++)
            ve = Ve[H], Ie ? L && t.texSubImage2D(i.TEXTURE_2D, H, 0, 0, ve.width, ve.height, _e, De, ve.data) : t.texImage2D(i.TEXTURE_2D, H, Ue, ve.width, ve.height, 0, _e, De, ve.data);
          v.generateMipmaps = !1;
        } else
          Ie ? (nt && t.texStorage2D(i.TEXTURE_2D, de, Ue, ne.width, ne.height), L && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, ne.width, ne.height, _e, De, ne.data)) : t.texImage2D(i.TEXTURE_2D, 0, Ue, ne.width, ne.height, 0, _e, De, ne.data);
      else if (v.isCompressedTexture)
        if (v.isCompressedArrayTexture) {
          Ie && nt && t.texStorage3D(i.TEXTURE_2D_ARRAY, de, Ue, Ve[0].width, Ve[0].height, ne.depth);
          for (let H = 0, j = Ve.length; H < j; H++)
            if (ve = Ve[H], v.format !== Wt)
              if (_e !== null)
                if (Ie) {
                  if (L)
                    if (v.layerUpdates.size > 0) {
                      const le = ao(ve.width, ve.height, v.format, v.type);
                      for (const fe of v.layerUpdates) {
                        const Xe = ve.data.subarray(
                          fe * le / ve.data.BYTES_PER_ELEMENT,
                          (fe + 1) * le / ve.data.BYTES_PER_ELEMENT
                        );
                        t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, H, 0, 0, fe, ve.width, ve.height, 1, _e, Xe, 0, 0);
                      }
                      v.clearLayerUpdates();
                    } else
                      t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, H, 0, 0, 0, ve.width, ve.height, ne.depth, _e, ve.data, 0, 0);
                } else
                  t.compressedTexImage3D(i.TEXTURE_2D_ARRAY, H, Ue, ve.width, ve.height, ne.depth, 0, ve.data, 0, 0);
              else
                console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            else
              Ie ? L && t.texSubImage3D(i.TEXTURE_2D_ARRAY, H, 0, 0, 0, ve.width, ve.height, ne.depth, _e, De, ve.data) : t.texImage3D(i.TEXTURE_2D_ARRAY, H, Ue, ve.width, ve.height, ne.depth, 0, _e, De, ve.data);
        } else {
          Ie && nt && t.texStorage2D(i.TEXTURE_2D, de, Ue, Ve[0].width, Ve[0].height);
          for (let H = 0, j = Ve.length; H < j; H++)
            ve = Ve[H], v.format !== Wt ? _e !== null ? Ie ? L && t.compressedTexSubImage2D(i.TEXTURE_2D, H, 0, 0, ve.width, ve.height, _e, ve.data) : t.compressedTexImage2D(i.TEXTURE_2D, H, Ue, ve.width, ve.height, 0, ve.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Ie ? L && t.texSubImage2D(i.TEXTURE_2D, H, 0, 0, ve.width, ve.height, _e, De, ve.data) : t.texImage2D(i.TEXTURE_2D, H, Ue, ve.width, ve.height, 0, _e, De, ve.data);
        }
      else if (v.isDataArrayTexture)
        if (Ie) {
          if (nt && t.texStorage3D(i.TEXTURE_2D_ARRAY, de, Ue, ne.width, ne.height, ne.depth), L)
            if (v.layerUpdates.size > 0) {
              const H = ao(ne.width, ne.height, v.format, v.type);
              for (const j of v.layerUpdates) {
                const le = ne.data.subarray(
                  j * H / ne.data.BYTES_PER_ELEMENT,
                  (j + 1) * H / ne.data.BYTES_PER_ELEMENT
                );
                t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, j, ne.width, ne.height, 1, _e, De, le);
              }
              v.clearLayerUpdates();
            } else
              t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, ne.width, ne.height, ne.depth, _e, De, ne.data);
        } else
          t.texImage3D(i.TEXTURE_2D_ARRAY, 0, Ue, ne.width, ne.height, ne.depth, 0, _e, De, ne.data);
      else if (v.isData3DTexture)
        Ie ? (nt && t.texStorage3D(i.TEXTURE_3D, de, Ue, ne.width, ne.height, ne.depth), L && t.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, ne.width, ne.height, ne.depth, _e, De, ne.data)) : t.texImage3D(i.TEXTURE_3D, 0, Ue, ne.width, ne.height, ne.depth, 0, _e, De, ne.data);
      else if (v.isFramebufferTexture) {
        if (nt)
          if (Ie)
            t.texStorage2D(i.TEXTURE_2D, de, Ue, ne.width, ne.height);
          else {
            let H = ne.width, j = ne.height;
            for (let le = 0; le < de; le++)
              t.texImage2D(i.TEXTURE_2D, le, Ue, H, j, 0, _e, De, null), H >>= 1, j >>= 1;
          }
      } else if (Ve.length > 0) {
        if (Ie && nt) {
          const H = Ae(Ve[0]);
          t.texStorage2D(i.TEXTURE_2D, de, Ue, H.width, H.height);
        }
        for (let H = 0, j = Ve.length; H < j; H++)
          ve = Ve[H], Ie ? L && t.texSubImage2D(i.TEXTURE_2D, H, 0, 0, _e, De, ve) : t.texImage2D(i.TEXTURE_2D, H, Ue, _e, De, ve);
        v.generateMipmaps = !1;
      } else if (Ie) {
        if (nt) {
          const H = Ae(ne);
          t.texStorage2D(i.TEXTURE_2D, de, Ue, H.width, H.height);
        }
        L && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, _e, De, ne);
      } else
        t.texImage2D(i.TEXTURE_2D, 0, Ue, _e, De, ne);
      d(v) && u(Y), Se.__version = q.version, v.onUpdate && v.onUpdate(v);
    }
    y.__version = v.version;
  }
  function X(y, v, N) {
    if (v.image.length !== 6) return;
    const Y = Te(y, v), Z = v.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, y.__webglTexture, i.TEXTURE0 + N);
    const q = n.get(Z);
    if (Z.version !== q.__version || Y === !0) {
      t.activeTexture(i.TEXTURE0 + N);
      const Se = Je.getPrimaries(Je.workingColorSpace), ae = v.colorSpace === vn ? null : Je.getPrimaries(v.colorSpace), ge = v.colorSpace === vn || Se === ae ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, v.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, v.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, ge);
      const We = v.isCompressedTexture || v.image[0].isCompressedTexture, ne = v.image[0] && v.image[0].isDataTexture, _e = [];
      for (let j = 0; j < 6; j++)
        !We && !ne ? _e[j] = M(v.image[j], !0, r.maxCubemapSize) : _e[j] = ne ? v.image[j].image : v.image[j], _e[j] = tt(v, _e[j]);
      const De = _e[0], Ue = s.convert(v.format, v.colorSpace), ve = s.convert(v.type), Ve = T(v.internalFormat, Ue, ve, v.colorSpace), Ie = v.isVideoTexture !== !0, nt = q.__version === void 0 || Y === !0, L = Z.dataReady;
      let de = b(v, De);
      ie(i.TEXTURE_CUBE_MAP, v);
      let H;
      if (We) {
        Ie && nt && t.texStorage2D(i.TEXTURE_CUBE_MAP, de, Ve, De.width, De.height);
        for (let j = 0; j < 6; j++) {
          H = _e[j].mipmaps;
          for (let le = 0; le < H.length; le++) {
            const fe = H[le];
            v.format !== Wt ? Ue !== null ? Ie ? L && t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, le, 0, 0, fe.width, fe.height, Ue, fe.data) : t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, le, Ve, fe.width, fe.height, 0, fe.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Ie ? L && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, le, 0, 0, fe.width, fe.height, Ue, ve, fe.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, le, Ve, fe.width, fe.height, 0, Ue, ve, fe.data);
          }
        }
      } else {
        if (H = v.mipmaps, Ie && nt) {
          H.length > 0 && de++;
          const j = Ae(_e[0]);
          t.texStorage2D(i.TEXTURE_CUBE_MAP, de, Ve, j.width, j.height);
        }
        for (let j = 0; j < 6; j++)
          if (ne) {
            Ie ? L && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, 0, 0, 0, _e[j].width, _e[j].height, Ue, ve, _e[j].data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, 0, Ve, _e[j].width, _e[j].height, 0, Ue, ve, _e[j].data);
            for (let le = 0; le < H.length; le++) {
              const Xe = H[le].image[j].image;
              Ie ? L && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, le + 1, 0, 0, Xe.width, Xe.height, Ue, ve, Xe.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, le + 1, Ve, Xe.width, Xe.height, 0, Ue, ve, Xe.data);
            }
          } else {
            Ie ? L && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, 0, 0, 0, Ue, ve, _e[j]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, 0, Ve, Ue, ve, _e[j]);
            for (let le = 0; le < H.length; le++) {
              const fe = H[le];
              Ie ? L && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, le + 1, 0, 0, Ue, ve, fe.image[j]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, le + 1, Ve, Ue, ve, fe.image[j]);
            }
          }
      }
      d(v) && u(i.TEXTURE_CUBE_MAP), q.__version = Z.version, v.onUpdate && v.onUpdate(v);
    }
    y.__version = v.version;
  }
  function J(y, v, N, Y, Z, q) {
    const Se = s.convert(N.format, N.colorSpace), ae = s.convert(N.type), ge = T(N.internalFormat, Se, ae, N.colorSpace);
    if (!n.get(v).__hasExternalTextures) {
      const ne = Math.max(1, v.width >> q), _e = Math.max(1, v.height >> q);
      Z === i.TEXTURE_3D || Z === i.TEXTURE_2D_ARRAY ? t.texImage3D(Z, q, ge, ne, _e, v.depth, 0, Se, ae, null) : t.texImage2D(Z, q, ge, ne, _e, 0, Se, ae, null);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, y), He(v) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, Y, Z, n.get(N).__webglTexture, 0, Be(v)) : (Z === i.TEXTURE_2D || Z >= i.TEXTURE_CUBE_MAP_POSITIVE_X && Z <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, Y, Z, n.get(N).__webglTexture, q), t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function pe(y, v, N) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, y), v.depthBuffer) {
      const Y = v.depthTexture, Z = Y && Y.isDepthTexture ? Y.type : null, q = E(v.stencilBuffer, Z), Se = v.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, ae = Be(v);
      He(v) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, ae, q, v.width, v.height) : N ? i.renderbufferStorageMultisample(i.RENDERBUFFER, ae, q, v.width, v.height) : i.renderbufferStorage(i.RENDERBUFFER, q, v.width, v.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, Se, i.RENDERBUFFER, y);
    } else {
      const Y = v.textures;
      for (let Z = 0; Z < Y.length; Z++) {
        const q = Y[Z], Se = s.convert(q.format, q.colorSpace), ae = s.convert(q.type), ge = T(q.internalFormat, Se, ae, q.colorSpace), We = Be(v);
        N && He(v) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, We, ge, v.width, v.height) : He(v) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, We, ge, v.width, v.height) : i.renderbufferStorage(i.RENDERBUFFER, ge, v.width, v.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function me(y, v) {
    if (v && v.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(i.FRAMEBUFFER, y), !(v.depthTexture && v.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(v.depthTexture).__webglTexture || v.depthTexture.image.width !== v.width || v.depthTexture.image.height !== v.height) && (v.depthTexture.image.width = v.width, v.depthTexture.image.height = v.height, v.depthTexture.needsUpdate = !0), k(v.depthTexture, 0);
    const Y = n.get(v.depthTexture).__webglTexture, Z = Be(v);
    if (v.depthTexture.format === ti)
      He(v) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, Y, 0, Z) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, Y, 0);
    else if (v.depthTexture.format === oi)
      He(v) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, Y, 0, Z) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, Y, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function Le(y) {
    const v = n.get(y), N = y.isWebGLCubeRenderTarget === !0;
    if (v.__boundDepthTexture !== y.depthTexture) {
      const Y = y.depthTexture;
      if (v.__depthDisposeCallback && v.__depthDisposeCallback(), Y) {
        const Z = () => {
          delete v.__boundDepthTexture, delete v.__depthDisposeCallback, Y.removeEventListener("dispose", Z);
        };
        Y.addEventListener("dispose", Z), v.__depthDisposeCallback = Z;
      }
      v.__boundDepthTexture = Y;
    }
    if (y.depthTexture && !v.__autoAllocateDepthBuffer) {
      if (N) throw new Error("target.depthTexture not supported in Cube render targets");
      me(v.__webglFramebuffer, y);
    } else if (N) {
      v.__webglDepthbuffer = [];
      for (let Y = 0; Y < 6; Y++)
        if (t.bindFramebuffer(i.FRAMEBUFFER, v.__webglFramebuffer[Y]), v.__webglDepthbuffer[Y] === void 0)
          v.__webglDepthbuffer[Y] = i.createRenderbuffer(), pe(v.__webglDepthbuffer[Y], y, !1);
        else {
          const Z = y.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, q = v.__webglDepthbuffer[Y];
          i.bindRenderbuffer(i.RENDERBUFFER, q), i.framebufferRenderbuffer(i.FRAMEBUFFER, Z, i.RENDERBUFFER, q);
        }
    } else if (t.bindFramebuffer(i.FRAMEBUFFER, v.__webglFramebuffer), v.__webglDepthbuffer === void 0)
      v.__webglDepthbuffer = i.createRenderbuffer(), pe(v.__webglDepthbuffer, y, !1);
    else {
      const Y = y.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, Z = v.__webglDepthbuffer;
      i.bindRenderbuffer(i.RENDERBUFFER, Z), i.framebufferRenderbuffer(i.FRAMEBUFFER, Y, i.RENDERBUFFER, Z);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function be(y, v, N) {
    const Y = n.get(y);
    v !== void 0 && J(Y.__webglFramebuffer, y, y.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), N !== void 0 && Le(y);
  }
  function ze(y) {
    const v = y.texture, N = n.get(y), Y = n.get(v);
    y.addEventListener("dispose", P);
    const Z = y.textures, q = y.isWebGLCubeRenderTarget === !0, Se = Z.length > 1;
    if (Se || (Y.__webglTexture === void 0 && (Y.__webglTexture = i.createTexture()), Y.__version = v.version, a.memory.textures++), q) {
      N.__webglFramebuffer = [];
      for (let ae = 0; ae < 6; ae++)
        if (v.mipmaps && v.mipmaps.length > 0) {
          N.__webglFramebuffer[ae] = [];
          for (let ge = 0; ge < v.mipmaps.length; ge++)
            N.__webglFramebuffer[ae][ge] = i.createFramebuffer();
        } else
          N.__webglFramebuffer[ae] = i.createFramebuffer();
    } else {
      if (v.mipmaps && v.mipmaps.length > 0) {
        N.__webglFramebuffer = [];
        for (let ae = 0; ae < v.mipmaps.length; ae++)
          N.__webglFramebuffer[ae] = i.createFramebuffer();
      } else
        N.__webglFramebuffer = i.createFramebuffer();
      if (Se)
        for (let ae = 0, ge = Z.length; ae < ge; ae++) {
          const We = n.get(Z[ae]);
          We.__webglTexture === void 0 && (We.__webglTexture = i.createTexture(), a.memory.textures++);
        }
      if (y.samples > 0 && He(y) === !1) {
        N.__webglMultisampledFramebuffer = i.createFramebuffer(), N.__webglColorRenderbuffer = [], t.bindFramebuffer(i.FRAMEBUFFER, N.__webglMultisampledFramebuffer);
        for (let ae = 0; ae < Z.length; ae++) {
          const ge = Z[ae];
          N.__webglColorRenderbuffer[ae] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, N.__webglColorRenderbuffer[ae]);
          const We = s.convert(ge.format, ge.colorSpace), ne = s.convert(ge.type), _e = T(ge.internalFormat, We, ne, ge.colorSpace, y.isXRRenderTarget === !0), De = Be(y);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, De, _e, y.width, y.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ae, i.RENDERBUFFER, N.__webglColorRenderbuffer[ae]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), y.depthBuffer && (N.__webglDepthRenderbuffer = i.createRenderbuffer(), pe(N.__webglDepthRenderbuffer, y, !0)), t.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (q) {
      t.bindTexture(i.TEXTURE_CUBE_MAP, Y.__webglTexture), ie(i.TEXTURE_CUBE_MAP, v);
      for (let ae = 0; ae < 6; ae++)
        if (v.mipmaps && v.mipmaps.length > 0)
          for (let ge = 0; ge < v.mipmaps.length; ge++)
            J(N.__webglFramebuffer[ae][ge], y, v, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + ae, ge);
        else
          J(N.__webglFramebuffer[ae], y, v, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + ae, 0);
      d(v) && u(i.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (Se) {
      for (let ae = 0, ge = Z.length; ae < ge; ae++) {
        const We = Z[ae], ne = n.get(We);
        t.bindTexture(i.TEXTURE_2D, ne.__webglTexture), ie(i.TEXTURE_2D, We), J(N.__webglFramebuffer, y, We, i.COLOR_ATTACHMENT0 + ae, i.TEXTURE_2D, 0), d(We) && u(i.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let ae = i.TEXTURE_2D;
      if ((y.isWebGL3DRenderTarget || y.isWebGLArrayRenderTarget) && (ae = y.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), t.bindTexture(ae, Y.__webglTexture), ie(ae, v), v.mipmaps && v.mipmaps.length > 0)
        for (let ge = 0; ge < v.mipmaps.length; ge++)
          J(N.__webglFramebuffer[ge], y, v, i.COLOR_ATTACHMENT0, ae, ge);
      else
        J(N.__webglFramebuffer, y, v, i.COLOR_ATTACHMENT0, ae, 0);
      d(v) && u(ae), t.unbindTexture();
    }
    y.depthBuffer && Le(y);
  }
  function Ke(y) {
    const v = y.textures;
    for (let N = 0, Y = v.length; N < Y; N++) {
      const Z = v[N];
      if (d(Z)) {
        const q = y.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : i.TEXTURE_2D, Se = n.get(Z).__webglTexture;
        t.bindTexture(q, Se), u(q), t.unbindTexture();
      }
    }
  }
  const Ge = [], R = [];
  function Mt(y) {
    if (y.samples > 0) {
      if (He(y) === !1) {
        const v = y.textures, N = y.width, Y = y.height;
        let Z = i.COLOR_BUFFER_BIT;
        const q = y.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, Se = n.get(y), ae = v.length > 1;
        if (ae)
          for (let ge = 0; ge < v.length; ge++)
            t.bindFramebuffer(i.FRAMEBUFFER, Se.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ge, i.RENDERBUFFER, null), t.bindFramebuffer(i.FRAMEBUFFER, Se.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ge, i.TEXTURE_2D, null, 0);
        t.bindFramebuffer(i.READ_FRAMEBUFFER, Se.__webglMultisampledFramebuffer), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, Se.__webglFramebuffer);
        for (let ge = 0; ge < v.length; ge++) {
          if (y.resolveDepthBuffer && (y.depthBuffer && (Z |= i.DEPTH_BUFFER_BIT), y.stencilBuffer && y.resolveStencilBuffer && (Z |= i.STENCIL_BUFFER_BIT)), ae) {
            i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, Se.__webglColorRenderbuffer[ge]);
            const We = n.get(v[ge]).__webglTexture;
            i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, We, 0);
          }
          i.blitFramebuffer(0, 0, N, Y, 0, 0, N, Y, Z, i.NEAREST), l === !0 && (Ge.length = 0, R.length = 0, Ge.push(i.COLOR_ATTACHMENT0 + ge), y.depthBuffer && y.resolveDepthBuffer === !1 && (Ge.push(q), R.push(q), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, R)), i.invalidateFramebuffer(i.READ_FRAMEBUFFER, Ge));
        }
        if (t.bindFramebuffer(i.READ_FRAMEBUFFER, null), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), ae)
          for (let ge = 0; ge < v.length; ge++) {
            t.bindFramebuffer(i.FRAMEBUFFER, Se.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ge, i.RENDERBUFFER, Se.__webglColorRenderbuffer[ge]);
            const We = n.get(v[ge]).__webglTexture;
            t.bindFramebuffer(i.FRAMEBUFFER, Se.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ge, i.TEXTURE_2D, We, 0);
          }
        t.bindFramebuffer(i.DRAW_FRAMEBUFFER, Se.__webglMultisampledFramebuffer);
      } else if (y.depthBuffer && y.resolveDepthBuffer === !1 && l) {
        const v = y.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [v]);
      }
    }
  }
  function Be(y) {
    return Math.min(r.maxSamples, y.samples);
  }
  function He(y) {
    const v = n.get(y);
    return y.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && v.__useRenderToTexture !== !1;
  }
  function Ce(y) {
    const v = a.render.frame;
    h.get(y) !== v && (h.set(y, v), y.update());
  }
  function tt(y, v) {
    const N = y.colorSpace, Y = y.format, Z = y.type;
    return y.isCompressedTexture === !0 || y.isVideoTexture === !0 || N !== En && N !== vn && (Je.getTransfer(N) === st ? (Y !== Wt || Z !== on) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", N)), v;
  }
  function Ae(y) {
    return typeof HTMLImageElement < "u" && y instanceof HTMLImageElement ? (c.width = y.naturalWidth || y.width, c.height = y.naturalHeight || y.height) : typeof VideoFrame < "u" && y instanceof VideoFrame ? (c.width = y.displayWidth, c.height = y.displayHeight) : (c.width = y.width, c.height = y.height), c;
  }
  this.allocateTextureUnit = W, this.resetTextureUnits = S, this.setTexture2D = k, this.setTexture2DArray = $, this.setTexture3D = z, this.setTextureCube = te, this.rebindTextures = be, this.setupRenderTarget = ze, this.updateRenderTargetMipmap = Ke, this.updateMultisampleRenderTarget = Mt, this.setupDepthRenderbuffer = Le, this.setupFrameBufferTexture = J, this.useMultisampledRTT = He;
}
function Zf(i, e) {
  function t(n, r = vn) {
    let s;
    const a = Je.getTransfer(r);
    if (n === on) return i.UNSIGNED_BYTE;
    if (n === ea) return i.UNSIGNED_SHORT_4_4_4_4;
    if (n === ta) return i.UNSIGNED_SHORT_5_5_5_1;
    if (n === Eo) return i.UNSIGNED_INT_5_9_9_9_REV;
    if (n === Mo) return i.BYTE;
    if (n === So) return i.SHORT;
    if (n === Ti) return i.UNSIGNED_SHORT;
    if (n === Qs) return i.INT;
    if (n === Nn) return i.UNSIGNED_INT;
    if (n === nn) return i.FLOAT;
    if (n === wi) return i.HALF_FLOAT;
    if (n === yo) return i.ALPHA;
    if (n === To) return i.RGB;
    if (n === Wt) return i.RGBA;
    if (n === bo) return i.LUMINANCE;
    if (n === Ao) return i.LUMINANCE_ALPHA;
    if (n === ti) return i.DEPTH_COMPONENT;
    if (n === oi) return i.DEPTH_STENCIL;
    if (n === wo) return i.RED;
    if (n === na) return i.RED_INTEGER;
    if (n === Ro) return i.RG;
    if (n === ia) return i.RG_INTEGER;
    if (n === ra) return i.RGBA_INTEGER;
    if (n === cr || n === ur || n === hr || n === dr)
      if (a === st)
        if (s = e.get("WEBGL_compressed_texture_s3tc_srgb"), s !== null) {
          if (n === cr) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === ur) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === hr) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === dr) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (s = e.get("WEBGL_compressed_texture_s3tc"), s !== null) {
        if (n === cr) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === ur) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === hr) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === dr) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (n === Es || n === ys || n === Ts || n === bs)
      if (s = e.get("WEBGL_compressed_texture_pvrtc"), s !== null) {
        if (n === Es) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === ys) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === Ts) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === bs) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (n === As || n === ws || n === Rs)
      if (s = e.get("WEBGL_compressed_texture_etc"), s !== null) {
        if (n === As || n === ws) return a === st ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (n === Rs) return a === st ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (n === Cs || n === Ps || n === Ls || n === Ds || n === Us || n === Is || n === Ns || n === Fs || n === Os || n === Bs || n === zs || n === Hs || n === Gs || n === Vs)
      if (s = e.get("WEBGL_compressed_texture_astc"), s !== null) {
        if (n === Cs) return a === st ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === Ps) return a === st ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === Ls) return a === st ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === Ds) return a === st ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === Us) return a === st ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === Is) return a === st ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === Ns) return a === st ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === Fs) return a === st ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === Os) return a === st ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === Bs) return a === st ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === zs) return a === st ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === Hs) return a === st ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === Gs) return a === st ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === Vs) return a === st ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (n === fr || n === ks || n === Ws)
      if (s = e.get("EXT_texture_compression_bptc"), s !== null) {
        if (n === fr) return a === st ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === ks) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === Ws) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (n === Co || n === Xs || n === qs || n === Ys)
      if (s = e.get("EXT_texture_compression_rgtc"), s !== null) {
        if (n === fr) return s.COMPRESSED_RED_RGTC1_EXT;
        if (n === Xs) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === qs) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === Ys) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return n === ai ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null;
  }
  return { convert: t };
}
class Jf extends Gt {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class rr extends Et {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const Qf = { type: "move" };
class os {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new rr(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new rr(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new F(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new F()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new rr(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new F(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new F()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t)
        for (const n of e.hand.values())
          this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, n) {
    let r = null, s = null, a = null;
    const o = this._targetRay, l = this._grip, c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        a = !0;
        for (const M of e.hand.values()) {
          const d = t.getJointPose(M, n), u = this._getHandJoint(c, M);
          d !== null && (u.matrix.fromArray(d.transform.matrix), u.matrix.decompose(u.position, u.rotation, u.scale), u.matrixWorldNeedsUpdate = !0, u.jointRadius = d.radius), u.visible = d !== null;
        }
        const h = c.joints["index-finger-tip"], f = c.joints["thumb-tip"], p = h.position.distanceTo(f.position), m = 0.02, x = 5e-3;
        c.inputState.pinching && p > m + x ? (c.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !c.inputState.pinching && p <= m - x && (c.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        l !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (l.matrix.fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = !1, s.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = !1));
      o !== null && (r = t.getPose(e.targetRaySpace, n), r === null && s !== null && (r = s), r !== null && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(Qf)));
    }
    return o !== null && (o.visible = r !== null), l !== null && (l.visible = s !== null), c !== null && (c.visible = a !== null), this;
  }
  // private method
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new rr();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
const ep = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, tp = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class np {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e, t, n) {
    if (this.texture === null) {
      const r = new Rt(), s = e.properties.get(r);
      s.__webglTexture = t.texture, (t.depthNear != n.depthNear || t.depthFar != n.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = r;
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, n = new cn({
        vertexShader: ep,
        fragmentShader: tp,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: t.z },
          depthHeight: { value: t.w }
        }
      });
      this.mesh = new sn(new Ar(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}
class ip extends ci {
  constructor(e, t) {
    super();
    const n = this;
    let r = null, s = 1, a = null, o = "local-floor", l = 1, c = null, h = null, f = null, p = null, m = null, x = null;
    const M = new np(), d = t.getContextAttributes();
    let u = null, T = null;
    const E = [], b = [], G = new it();
    let P = null;
    const w = new Gt();
    w.layers.enable(1), w.viewport = new ut();
    const O = new Gt();
    O.layers.enable(2), O.viewport = new ut();
    const ee = [w, O], g = new Jf();
    g.layers.enable(1), g.layers.enable(2);
    let S = null, W = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(X) {
      let J = E[X];
      return J === void 0 && (J = new os(), E[X] = J), J.getTargetRaySpace();
    }, this.getControllerGrip = function(X) {
      let J = E[X];
      return J === void 0 && (J = new os(), E[X] = J), J.getGripSpace();
    }, this.getHand = function(X) {
      let J = E[X];
      return J === void 0 && (J = new os(), E[X] = J), J.getHandSpace();
    };
    function B(X) {
      const J = b.indexOf(X.inputSource);
      if (J === -1)
        return;
      const pe = E[J];
      pe !== void 0 && (pe.update(X.inputSource, X.frame, c || a), pe.dispatchEvent({ type: X.type, data: X.inputSource }));
    }
    function k() {
      r.removeEventListener("select", B), r.removeEventListener("selectstart", B), r.removeEventListener("selectend", B), r.removeEventListener("squeeze", B), r.removeEventListener("squeezestart", B), r.removeEventListener("squeezeend", B), r.removeEventListener("end", k), r.removeEventListener("inputsourceschange", $);
      for (let X = 0; X < E.length; X++) {
        const J = b[X];
        J !== null && (b[X] = null, E[X].disconnect(J));
      }
      S = null, W = null, M.reset(), e.setRenderTarget(u), m = null, p = null, f = null, r = null, T = null, Oe.stop(), n.isPresenting = !1, e.setPixelRatio(P), e.setSize(G.width, G.height, !1), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(X) {
      s = X, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(X) {
      o = X, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || a;
    }, this.setReferenceSpace = function(X) {
      c = X;
    }, this.getBaseLayer = function() {
      return p !== null ? p : m;
    }, this.getBinding = function() {
      return f;
    }, this.getFrame = function() {
      return x;
    }, this.getSession = function() {
      return r;
    }, this.setSession = async function(X) {
      if (r = X, r !== null) {
        if (u = e.getRenderTarget(), r.addEventListener("select", B), r.addEventListener("selectstart", B), r.addEventListener("selectend", B), r.addEventListener("squeeze", B), r.addEventListener("squeezestart", B), r.addEventListener("squeezeend", B), r.addEventListener("end", k), r.addEventListener("inputsourceschange", $), d.xrCompatible !== !0 && await t.makeXRCompatible(), P = e.getPixelRatio(), e.getSize(G), r.renderState.layers === void 0) {
          const J = {
            antialias: d.antialias,
            alpha: !0,
            depth: d.depth,
            stencil: d.stencil,
            framebufferScaleFactor: s
          };
          m = new XRWebGLLayer(r, t, J), r.updateRenderState({ baseLayer: m }), e.setPixelRatio(1), e.setSize(m.framebufferWidth, m.framebufferHeight, !1), T = new Fn(
            m.framebufferWidth,
            m.framebufferHeight,
            {
              format: Wt,
              type: on,
              colorSpace: e.outputColorSpace,
              stencilBuffer: d.stencil
            }
          );
        } else {
          let J = null, pe = null, me = null;
          d.depth && (me = d.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, J = d.stencil ? oi : ti, pe = d.stencil ? ai : Nn);
          const Le = {
            colorFormat: t.RGBA8,
            depthFormat: me,
            scaleFactor: s
          };
          f = new XRWebGLBinding(r, t), p = f.createProjectionLayer(Le), r.updateRenderState({ layers: [p] }), e.setPixelRatio(1), e.setSize(p.textureWidth, p.textureHeight, !1), T = new Fn(
            p.textureWidth,
            p.textureHeight,
            {
              format: Wt,
              type: on,
              depthTexture: new Xo(p.textureWidth, p.textureHeight, pe, void 0, void 0, void 0, void 0, void 0, void 0, J),
              stencilBuffer: d.stencil,
              colorSpace: e.outputColorSpace,
              samples: d.antialias ? 4 : 0,
              resolveDepthBuffer: p.ignoreDepthValues === !1
            }
          );
        }
        T.isXRRenderTarget = !0, this.setFoveation(l), c = null, a = await r.requestReferenceSpace(o), Oe.setContext(r), Oe.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (r !== null)
        return r.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return M.getDepthTexture();
    };
    function $(X) {
      for (let J = 0; J < X.removed.length; J++) {
        const pe = X.removed[J], me = b.indexOf(pe);
        me >= 0 && (b[me] = null, E[me].disconnect(pe));
      }
      for (let J = 0; J < X.added.length; J++) {
        const pe = X.added[J];
        let me = b.indexOf(pe);
        if (me === -1) {
          for (let be = 0; be < E.length; be++)
            if (be >= b.length) {
              b.push(pe), me = be;
              break;
            } else if (b[be] === null) {
              b[be] = pe, me = be;
              break;
            }
          if (me === -1) break;
        }
        const Le = E[me];
        Le && Le.connect(pe);
      }
    }
    const z = new F(), te = new F();
    function V(X, J, pe) {
      z.setFromMatrixPosition(J.matrixWorld), te.setFromMatrixPosition(pe.matrixWorld);
      const me = z.distanceTo(te), Le = J.projectionMatrix.elements, be = pe.projectionMatrix.elements, ze = Le[14] / (Le[10] - 1), Ke = Le[14] / (Le[10] + 1), Ge = (Le[9] + 1) / Le[5], R = (Le[9] - 1) / Le[5], Mt = (Le[8] - 1) / Le[0], Be = (be[8] + 1) / be[0], He = ze * Mt, Ce = ze * Be, tt = me / (-Mt + Be), Ae = tt * -Mt;
      if (J.matrixWorld.decompose(X.position, X.quaternion, X.scale), X.translateX(Ae), X.translateZ(tt), X.matrixWorld.compose(X.position, X.quaternion, X.scale), X.matrixWorldInverse.copy(X.matrixWorld).invert(), Le[10] === -1)
        X.projectionMatrix.copy(J.projectionMatrix), X.projectionMatrixInverse.copy(J.projectionMatrixInverse);
      else {
        const y = ze + tt, v = Ke + tt, N = He - Ae, Y = Ce + (me - Ae), Z = Ge * Ke / v * y, q = R * Ke / v * y;
        X.projectionMatrix.makePerspective(N, Y, Z, q, y, v), X.projectionMatrixInverse.copy(X.projectionMatrix).invert();
      }
    }
    function ue(X, J) {
      J === null ? X.matrixWorld.copy(X.matrix) : X.matrixWorld.multiplyMatrices(J.matrixWorld, X.matrix), X.matrixWorldInverse.copy(X.matrixWorld).invert();
    }
    this.updateCamera = function(X) {
      if (r === null) return;
      let J = X.near, pe = X.far;
      M.texture !== null && (M.depthNear > 0 && (J = M.depthNear), M.depthFar > 0 && (pe = M.depthFar)), g.near = O.near = w.near = J, g.far = O.far = w.far = pe, (S !== g.near || W !== g.far) && (r.updateRenderState({
        depthNear: g.near,
        depthFar: g.far
      }), S = g.near, W = g.far);
      const me = X.parent, Le = g.cameras;
      ue(g, me);
      for (let be = 0; be < Le.length; be++)
        ue(Le[be], me);
      Le.length === 2 ? V(g, w, O) : g.projectionMatrix.copy(w.projectionMatrix), he(X, g, me);
    };
    function he(X, J, pe) {
      pe === null ? X.matrix.copy(J.matrixWorld) : (X.matrix.copy(pe.matrixWorld), X.matrix.invert(), X.matrix.multiply(J.matrixWorld)), X.matrix.decompose(X.position, X.quaternion, X.scale), X.updateMatrixWorld(!0), X.projectionMatrix.copy(J.projectionMatrix), X.projectionMatrixInverse.copy(J.projectionMatrixInverse), X.isPerspectiveCamera && (X.fov = js * 2 * Math.atan(1 / X.projectionMatrix.elements[5]), X.zoom = 1);
    }
    this.getCamera = function() {
      return g;
    }, this.getFoveation = function() {
      if (!(p === null && m === null))
        return l;
    }, this.setFoveation = function(X) {
      l = X, p !== null && (p.fixedFoveation = X), m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = X);
    }, this.hasDepthSensing = function() {
      return M.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return M.getMesh(g);
    };
    let ie = null;
    function Te(X, J) {
      if (h = J.getViewerPose(c || a), x = J, h !== null) {
        const pe = h.views;
        m !== null && (e.setRenderTargetFramebuffer(T, m.framebuffer), e.setRenderTarget(T));
        let me = !1;
        pe.length !== g.cameras.length && (g.cameras.length = 0, me = !0);
        for (let be = 0; be < pe.length; be++) {
          const ze = pe[be];
          let Ke = null;
          if (m !== null)
            Ke = m.getViewport(ze);
          else {
            const R = f.getViewSubImage(p, ze);
            Ke = R.viewport, be === 0 && (e.setRenderTargetTextures(
              T,
              R.colorTexture,
              p.ignoreDepthValues ? void 0 : R.depthStencilTexture
            ), e.setRenderTarget(T));
          }
          let Ge = ee[be];
          Ge === void 0 && (Ge = new Gt(), Ge.layers.enable(be), Ge.viewport = new ut(), ee[be] = Ge), Ge.matrix.fromArray(ze.transform.matrix), Ge.matrix.decompose(Ge.position, Ge.quaternion, Ge.scale), Ge.projectionMatrix.fromArray(ze.projectionMatrix), Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(), Ge.viewport.set(Ke.x, Ke.y, Ke.width, Ke.height), be === 0 && (g.matrix.copy(Ge.matrix), g.matrix.decompose(g.position, g.quaternion, g.scale)), me === !0 && g.cameras.push(Ge);
        }
        const Le = r.enabledFeatures;
        if (Le && Le.includes("depth-sensing")) {
          const be = f.getDepthInformation(pe[0]);
          be && be.isValid && be.texture && M.init(e, be, r.renderState);
        }
      }
      for (let pe = 0; pe < E.length; pe++) {
        const me = b[pe], Le = E[pe];
        me !== null && Le !== void 0 && Le.update(me, J, c || a);
      }
      ie && ie(X, J), J.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: J }), x = null;
    }
    const Oe = new ko();
    Oe.setAnimationLoop(Te), this.setAnimationLoop = function(X) {
      ie = X;
    }, this.dispose = function() {
    };
  }
}
const Rn = /* @__PURE__ */ new ln(), rp = /* @__PURE__ */ new lt();
function sp(i, e) {
  function t(d, u) {
    d.matrixAutoUpdate === !0 && d.updateMatrix(), u.value.copy(d.matrix);
  }
  function n(d, u) {
    u.color.getRGB(d.fogColor.value, zo(i)), u.isFog ? (d.fogNear.value = u.near, d.fogFar.value = u.far) : u.isFogExp2 && (d.fogDensity.value = u.density);
  }
  function r(d, u, T, E, b) {
    u.isMeshBasicMaterial || u.isMeshLambertMaterial ? s(d, u) : u.isMeshToonMaterial ? (s(d, u), f(d, u)) : u.isMeshPhongMaterial ? (s(d, u), h(d, u)) : u.isMeshStandardMaterial ? (s(d, u), p(d, u), u.isMeshPhysicalMaterial && m(d, u, b)) : u.isMeshMatcapMaterial ? (s(d, u), x(d, u)) : u.isMeshDepthMaterial ? s(d, u) : u.isMeshDistanceMaterial ? (s(d, u), M(d, u)) : u.isMeshNormalMaterial ? s(d, u) : u.isLineBasicMaterial ? (a(d, u), u.isLineDashedMaterial && o(d, u)) : u.isPointsMaterial ? l(d, u, T, E) : u.isSpriteMaterial ? c(d, u) : u.isShadowMaterial ? (d.color.value.copy(u.color), d.opacity.value = u.opacity) : u.isShaderMaterial && (u.uniformsNeedUpdate = !1);
  }
  function s(d, u) {
    d.opacity.value = u.opacity, u.color && d.diffuse.value.copy(u.color), u.emissive && d.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity), u.map && (d.map.value = u.map, t(u.map, d.mapTransform)), u.alphaMap && (d.alphaMap.value = u.alphaMap, t(u.alphaMap, d.alphaMapTransform)), u.bumpMap && (d.bumpMap.value = u.bumpMap, t(u.bumpMap, d.bumpMapTransform), d.bumpScale.value = u.bumpScale, u.side === wt && (d.bumpScale.value *= -1)), u.normalMap && (d.normalMap.value = u.normalMap, t(u.normalMap, d.normalMapTransform), d.normalScale.value.copy(u.normalScale), u.side === wt && d.normalScale.value.negate()), u.displacementMap && (d.displacementMap.value = u.displacementMap, t(u.displacementMap, d.displacementMapTransform), d.displacementScale.value = u.displacementScale, d.displacementBias.value = u.displacementBias), u.emissiveMap && (d.emissiveMap.value = u.emissiveMap, t(u.emissiveMap, d.emissiveMapTransform)), u.specularMap && (d.specularMap.value = u.specularMap, t(u.specularMap, d.specularMapTransform)), u.alphaTest > 0 && (d.alphaTest.value = u.alphaTest);
    const T = e.get(u), E = T.envMap, b = T.envMapRotation;
    E && (d.envMap.value = E, Rn.copy(b), Rn.x *= -1, Rn.y *= -1, Rn.z *= -1, E.isCubeTexture && E.isRenderTargetTexture === !1 && (Rn.y *= -1, Rn.z *= -1), d.envMapRotation.value.setFromMatrix4(rp.makeRotationFromEuler(Rn)), d.flipEnvMap.value = E.isCubeTexture && E.isRenderTargetTexture === !1 ? -1 : 1, d.reflectivity.value = u.reflectivity, d.ior.value = u.ior, d.refractionRatio.value = u.refractionRatio), u.lightMap && (d.lightMap.value = u.lightMap, d.lightMapIntensity.value = u.lightMapIntensity, t(u.lightMap, d.lightMapTransform)), u.aoMap && (d.aoMap.value = u.aoMap, d.aoMapIntensity.value = u.aoMapIntensity, t(u.aoMap, d.aoMapTransform));
  }
  function a(d, u) {
    d.diffuse.value.copy(u.color), d.opacity.value = u.opacity, u.map && (d.map.value = u.map, t(u.map, d.mapTransform));
  }
  function o(d, u) {
    d.dashSize.value = u.dashSize, d.totalSize.value = u.dashSize + u.gapSize, d.scale.value = u.scale;
  }
  function l(d, u, T, E) {
    d.diffuse.value.copy(u.color), d.opacity.value = u.opacity, d.size.value = u.size * T, d.scale.value = E * 0.5, u.map && (d.map.value = u.map, t(u.map, d.uvTransform)), u.alphaMap && (d.alphaMap.value = u.alphaMap, t(u.alphaMap, d.alphaMapTransform)), u.alphaTest > 0 && (d.alphaTest.value = u.alphaTest);
  }
  function c(d, u) {
    d.diffuse.value.copy(u.color), d.opacity.value = u.opacity, d.rotation.value = u.rotation, u.map && (d.map.value = u.map, t(u.map, d.mapTransform)), u.alphaMap && (d.alphaMap.value = u.alphaMap, t(u.alphaMap, d.alphaMapTransform)), u.alphaTest > 0 && (d.alphaTest.value = u.alphaTest);
  }
  function h(d, u) {
    d.specular.value.copy(u.specular), d.shininess.value = Math.max(u.shininess, 1e-4);
  }
  function f(d, u) {
    u.gradientMap && (d.gradientMap.value = u.gradientMap);
  }
  function p(d, u) {
    d.metalness.value = u.metalness, u.metalnessMap && (d.metalnessMap.value = u.metalnessMap, t(u.metalnessMap, d.metalnessMapTransform)), d.roughness.value = u.roughness, u.roughnessMap && (d.roughnessMap.value = u.roughnessMap, t(u.roughnessMap, d.roughnessMapTransform)), u.envMap && (d.envMapIntensity.value = u.envMapIntensity);
  }
  function m(d, u, T) {
    d.ior.value = u.ior, u.sheen > 0 && (d.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen), d.sheenRoughness.value = u.sheenRoughness, u.sheenColorMap && (d.sheenColorMap.value = u.sheenColorMap, t(u.sheenColorMap, d.sheenColorMapTransform)), u.sheenRoughnessMap && (d.sheenRoughnessMap.value = u.sheenRoughnessMap, t(u.sheenRoughnessMap, d.sheenRoughnessMapTransform))), u.clearcoat > 0 && (d.clearcoat.value = u.clearcoat, d.clearcoatRoughness.value = u.clearcoatRoughness, u.clearcoatMap && (d.clearcoatMap.value = u.clearcoatMap, t(u.clearcoatMap, d.clearcoatMapTransform)), u.clearcoatRoughnessMap && (d.clearcoatRoughnessMap.value = u.clearcoatRoughnessMap, t(u.clearcoatRoughnessMap, d.clearcoatRoughnessMapTransform)), u.clearcoatNormalMap && (d.clearcoatNormalMap.value = u.clearcoatNormalMap, t(u.clearcoatNormalMap, d.clearcoatNormalMapTransform), d.clearcoatNormalScale.value.copy(u.clearcoatNormalScale), u.side === wt && d.clearcoatNormalScale.value.negate())), u.dispersion > 0 && (d.dispersion.value = u.dispersion), u.iridescence > 0 && (d.iridescence.value = u.iridescence, d.iridescenceIOR.value = u.iridescenceIOR, d.iridescenceThicknessMinimum.value = u.iridescenceThicknessRange[0], d.iridescenceThicknessMaximum.value = u.iridescenceThicknessRange[1], u.iridescenceMap && (d.iridescenceMap.value = u.iridescenceMap, t(u.iridescenceMap, d.iridescenceMapTransform)), u.iridescenceThicknessMap && (d.iridescenceThicknessMap.value = u.iridescenceThicknessMap, t(u.iridescenceThicknessMap, d.iridescenceThicknessMapTransform))), u.transmission > 0 && (d.transmission.value = u.transmission, d.transmissionSamplerMap.value = T.texture, d.transmissionSamplerSize.value.set(T.width, T.height), u.transmissionMap && (d.transmissionMap.value = u.transmissionMap, t(u.transmissionMap, d.transmissionMapTransform)), d.thickness.value = u.thickness, u.thicknessMap && (d.thicknessMap.value = u.thicknessMap, t(u.thicknessMap, d.thicknessMapTransform)), d.attenuationDistance.value = u.attenuationDistance, d.attenuationColor.value.copy(u.attenuationColor)), u.anisotropy > 0 && (d.anisotropyVector.value.set(u.anisotropy * Math.cos(u.anisotropyRotation), u.anisotropy * Math.sin(u.anisotropyRotation)), u.anisotropyMap && (d.anisotropyMap.value = u.anisotropyMap, t(u.anisotropyMap, d.anisotropyMapTransform))), d.specularIntensity.value = u.specularIntensity, d.specularColor.value.copy(u.specularColor), u.specularColorMap && (d.specularColorMap.value = u.specularColorMap, t(u.specularColorMap, d.specularColorMapTransform)), u.specularIntensityMap && (d.specularIntensityMap.value = u.specularIntensityMap, t(u.specularIntensityMap, d.specularIntensityMapTransform));
  }
  function x(d, u) {
    u.matcap && (d.matcap.value = u.matcap);
  }
  function M(d, u) {
    const T = e.get(u).light;
    d.referencePosition.value.setFromMatrixPosition(T.matrixWorld), d.nearDistance.value = T.shadow.camera.near, d.farDistance.value = T.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: r
  };
}
function ap(i, e, t, n) {
  let r = {}, s = {}, a = [];
  const o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(T, E) {
    const b = E.program;
    n.uniformBlockBinding(T, b);
  }
  function c(T, E) {
    let b = r[T.id];
    b === void 0 && (x(T), b = h(T), r[T.id] = b, T.addEventListener("dispose", d));
    const G = E.program;
    n.updateUBOMapping(T, G);
    const P = e.render.frame;
    s[T.id] !== P && (p(T), s[T.id] = P);
  }
  function h(T) {
    const E = f();
    T.__bindingPointIndex = E;
    const b = i.createBuffer(), G = T.__size, P = T.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, b), i.bufferData(i.UNIFORM_BUFFER, G, P), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, E, b), b;
  }
  function f() {
    for (let T = 0; T < o; T++)
      if (a.indexOf(T) === -1)
        return a.push(T), T;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function p(T) {
    const E = r[T.id], b = T.uniforms, G = T.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, E);
    for (let P = 0, w = b.length; P < w; P++) {
      const O = Array.isArray(b[P]) ? b[P] : [b[P]];
      for (let ee = 0, g = O.length; ee < g; ee++) {
        const S = O[ee];
        if (m(S, P, ee, G) === !0) {
          const W = S.__offset, B = Array.isArray(S.value) ? S.value : [S.value];
          let k = 0;
          for (let $ = 0; $ < B.length; $++) {
            const z = B[$], te = M(z);
            typeof z == "number" || typeof z == "boolean" ? (S.__data[0] = z, i.bufferSubData(i.UNIFORM_BUFFER, W + k, S.__data)) : z.isMatrix3 ? (S.__data[0] = z.elements[0], S.__data[1] = z.elements[1], S.__data[2] = z.elements[2], S.__data[3] = 0, S.__data[4] = z.elements[3], S.__data[5] = z.elements[4], S.__data[6] = z.elements[5], S.__data[7] = 0, S.__data[8] = z.elements[6], S.__data[9] = z.elements[7], S.__data[10] = z.elements[8], S.__data[11] = 0) : (z.toArray(S.__data, k), k += te.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          i.bufferSubData(i.UNIFORM_BUFFER, W, S.__data);
        }
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function m(T, E, b, G) {
    const P = T.value, w = E + "_" + b;
    if (G[w] === void 0)
      return typeof P == "number" || typeof P == "boolean" ? G[w] = P : G[w] = P.clone(), !0;
    {
      const O = G[w];
      if (typeof P == "number" || typeof P == "boolean") {
        if (O !== P)
          return G[w] = P, !0;
      } else if (O.equals(P) === !1)
        return O.copy(P), !0;
    }
    return !1;
  }
  function x(T) {
    const E = T.uniforms;
    let b = 0;
    const G = 16;
    for (let w = 0, O = E.length; w < O; w++) {
      const ee = Array.isArray(E[w]) ? E[w] : [E[w]];
      for (let g = 0, S = ee.length; g < S; g++) {
        const W = ee[g], B = Array.isArray(W.value) ? W.value : [W.value];
        for (let k = 0, $ = B.length; k < $; k++) {
          const z = B[k], te = M(z), V = b % G, ue = V % te.boundary, he = V + ue;
          b += ue, he !== 0 && G - he < te.storage && (b += G - he), W.__data = new Float32Array(te.storage / Float32Array.BYTES_PER_ELEMENT), W.__offset = b, b += te.storage;
        }
      }
    }
    const P = b % G;
    return P > 0 && (b += G - P), T.__size = b, T.__cache = {}, this;
  }
  function M(T) {
    const E = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof T == "number" || typeof T == "boolean" ? (E.boundary = 4, E.storage = 4) : T.isVector2 ? (E.boundary = 8, E.storage = 8) : T.isVector3 || T.isColor ? (E.boundary = 16, E.storage = 12) : T.isVector4 ? (E.boundary = 16, E.storage = 16) : T.isMatrix3 ? (E.boundary = 48, E.storage = 48) : T.isMatrix4 ? (E.boundary = 64, E.storage = 64) : T.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", T), E;
  }
  function d(T) {
    const E = T.target;
    E.removeEventListener("dispose", d);
    const b = a.indexOf(E.__bindingPointIndex);
    a.splice(b, 1), i.deleteBuffer(r[E.id]), delete r[E.id], delete s[E.id];
  }
  function u() {
    for (const T in r)
      i.deleteBuffer(r[T]);
    a = [], r = {}, s = {};
  }
  return {
    bind: l,
    update: c,
    dispose: u
  };
}
class op {
  constructor(e = {}) {
    const {
      canvas: t = Yl(),
      context: n = null,
      depth: r = !0,
      stencil: s = !1,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: h = "default",
      failIfMajorPerformanceCaveat: f = !1
    } = e;
    this.isWebGLRenderer = !0;
    let p;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext)
        throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      p = n.getContextAttributes().alpha;
    } else
      p = a;
    const m = new Uint32Array(4), x = new Int32Array(4);
    let M = null, d = null;
    const u = [], T = [];
    this.domElement = t, this.debug = {
      /**
       * Enables error checking and reporting when shader programs are being compiled
       * @type {boolean}
       */
      checkShaderErrors: !0,
      /**
       * Callback for custom error reporting.
       * @type {?Function}
       */
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = Yt, this.toneMapping = Mn, this.toneMappingExposure = 1;
    const E = this;
    let b = !1, G = 0, P = 0, w = null, O = -1, ee = null;
    const g = new ut(), S = new ut();
    let W = null;
    const B = new je(0);
    let k = 0, $ = t.width, z = t.height, te = 1, V = null, ue = null;
    const he = new ut(0, 0, $, z), ie = new ut(0, 0, $, z);
    let Te = !1;
    const Oe = new Vo();
    let X = !1, J = !1;
    const pe = new lt(), me = new lt(), Le = new F(), be = new ut(), ze = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    let Ke = !1;
    function Ge() {
      return w === null ? te : 1;
    }
    let R = n;
    function Mt(_, C) {
      return t.getContext(_, C);
    }
    try {
      const _ = {
        alpha: !0,
        depth: r,
        stencil: s,
        antialias: o,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: h,
        failIfMajorPerformanceCaveat: f
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${Js}`), t.addEventListener("webglcontextlost", j, !1), t.addEventListener("webglcontextrestored", le, !1), t.addEventListener("webglcontextcreationerror", fe, !1), R === null) {
        const C = "webgl2";
        if (R = Mt(C, _), R === null)
          throw Mt(C) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (_) {
      throw console.error("THREE.WebGLRenderer: " + _.message), _;
    }
    let Be, He, Ce, tt, Ae, y, v, N, Y, Z, q, Se, ae, ge, We, ne, _e, De, Ue, ve, Ve, Ie, nt, L;
    function de() {
      Be = new hd(R), Be.init(), Ie = new Zf(R, Be), He = new sd(R, Be, e, Ie), Ce = new jf(R), He.reverseDepthBuffer && Ce.buffers.depth.setReversed(!0), tt = new pd(R), Ae = new Uf(), y = new $f(R, Be, Ce, Ae, He, Ie, tt), v = new od(E), N = new ud(E), Y = new Sc(R), nt = new id(R, Y), Z = new dd(R, Y, tt, nt), q = new gd(R, Z, Y, tt), Ue = new md(R, He, y), ne = new ad(Ae), Se = new Df(E, v, N, Be, He, nt, ne), ae = new sp(E, Ae), ge = new Nf(), We = new Gf(Be), De = new nd(E, v, N, Ce, q, p, l), _e = new qf(E, q, He), L = new ap(R, tt, He, Ce), ve = new rd(R, Be, tt), Ve = new fd(R, Be, tt), tt.programs = Se.programs, E.capabilities = He, E.extensions = Be, E.properties = Ae, E.renderLists = ge, E.shadowMap = _e, E.state = Ce, E.info = tt;
    }
    de();
    const H = new ip(E, R);
    this.xr = H, this.getContext = function() {
      return R;
    }, this.getContextAttributes = function() {
      return R.getContextAttributes();
    }, this.forceContextLoss = function() {
      const _ = Be.get("WEBGL_lose_context");
      _ && _.loseContext();
    }, this.forceContextRestore = function() {
      const _ = Be.get("WEBGL_lose_context");
      _ && _.restoreContext();
    }, this.getPixelRatio = function() {
      return te;
    }, this.setPixelRatio = function(_) {
      _ !== void 0 && (te = _, this.setSize($, z, !1));
    }, this.getSize = function(_) {
      return _.set($, z);
    }, this.setSize = function(_, C, U = !0) {
      if (H.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      $ = _, z = C, t.width = Math.floor(_ * te), t.height = Math.floor(C * te), U === !0 && (t.style.width = _ + "px", t.style.height = C + "px"), this.setViewport(0, 0, _, C);
    }, this.getDrawingBufferSize = function(_) {
      return _.set($ * te, z * te).floor();
    }, this.setDrawingBufferSize = function(_, C, U) {
      $ = _, z = C, te = U, t.width = Math.floor(_ * U), t.height = Math.floor(C * U), this.setViewport(0, 0, _, C);
    }, this.getCurrentViewport = function(_) {
      return _.copy(g);
    }, this.getViewport = function(_) {
      return _.copy(he);
    }, this.setViewport = function(_, C, U, I) {
      _.isVector4 ? he.set(_.x, _.y, _.z, _.w) : he.set(_, C, U, I), Ce.viewport(g.copy(he).multiplyScalar(te).round());
    }, this.getScissor = function(_) {
      return _.copy(ie);
    }, this.setScissor = function(_, C, U, I) {
      _.isVector4 ? ie.set(_.x, _.y, _.z, _.w) : ie.set(_, C, U, I), Ce.scissor(S.copy(ie).multiplyScalar(te).round());
    }, this.getScissorTest = function() {
      return Te;
    }, this.setScissorTest = function(_) {
      Ce.setScissorTest(Te = _);
    }, this.setOpaqueSort = function(_) {
      V = _;
    }, this.setTransparentSort = function(_) {
      ue = _;
    }, this.getClearColor = function(_) {
      return _.copy(De.getClearColor());
    }, this.setClearColor = function() {
      De.setClearColor.apply(De, arguments);
    }, this.getClearAlpha = function() {
      return De.getClearAlpha();
    }, this.setClearAlpha = function() {
      De.setClearAlpha.apply(De, arguments);
    }, this.clear = function(_ = !0, C = !0, U = !0) {
      let I = 0;
      if (_) {
        let D = !1;
        if (w !== null) {
          const Q = w.texture.format;
          D = Q === ra || Q === ia || Q === na;
        }
        if (D) {
          const Q = w.texture.type, re = Q === on || Q === Nn || Q === Ti || Q === ai || Q === ea || Q === ta, se = De.getClearColor(), xe = De.getClearAlpha(), Re = se.r, Pe = se.g, Ee = se.b;
          re ? (m[0] = Re, m[1] = Pe, m[2] = Ee, m[3] = xe, R.clearBufferuiv(R.COLOR, 0, m)) : (x[0] = Re, x[1] = Pe, x[2] = Ee, x[3] = xe, R.clearBufferiv(R.COLOR, 0, x));
        } else
          I |= R.COLOR_BUFFER_BIT;
      }
      C && (I |= R.DEPTH_BUFFER_BIT, R.clearDepth(this.capabilities.reverseDepthBuffer ? 0 : 1)), U && (I |= R.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), R.clear(I);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", j, !1), t.removeEventListener("webglcontextrestored", le, !1), t.removeEventListener("webglcontextcreationerror", fe, !1), ge.dispose(), We.dispose(), Ae.dispose(), v.dispose(), N.dispose(), q.dispose(), nt.dispose(), L.dispose(), Se.dispose(), H.dispose(), H.removeEventListener("sessionstart", Ui), H.removeEventListener("sessionend", di), qt.stop();
    };
    function j(_) {
      _.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), b = !0;
    }
    function le() {
      console.log("THREE.WebGLRenderer: Context Restored."), b = !1;
      const _ = tt.autoReset, C = _e.enabled, U = _e.autoUpdate, I = _e.needsUpdate, D = _e.type;
      de(), tt.autoReset = _, _e.enabled = C, _e.autoUpdate = U, _e.needsUpdate = I, _e.type = D;
    }
    function fe(_) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", _.statusMessage);
    }
    function Xe(_) {
      const C = _.target;
      C.removeEventListener("dispose", Xe), at(C);
    }
    function at(_) {
      _t(_), Ae.remove(_);
    }
    function _t(_) {
      const C = Ae.get(_).programs;
      C !== void 0 && (C.forEach(function(U) {
        Se.releaseProgram(U);
      }), _.isShaderMaterial && Se.releaseShaderCache(_));
    }
    this.renderBufferDirect = function(_, C, U, I, D, Q) {
      C === null && (C = ze);
      const re = D.isMesh && D.matrixWorld.determinant() < 0, se = Ye(_, C, U, I, D);
      Ce.setMaterial(I, re);
      let xe = U.index, Re = 1;
      if (I.wireframe === !0) {
        if (xe = Z.getWireframeAttribute(U), xe === void 0) return;
        Re = 2;
      }
      const Pe = U.drawRange, Ee = U.attributes.position;
      let et = Pe.start * Re, rt = (Pe.start + Pe.count) * Re;
      Q !== null && (et = Math.max(et, Q.start * Re), rt = Math.min(rt, (Q.start + Q.count) * Re)), xe !== null ? (et = Math.max(et, 0), rt = Math.min(rt, xe.count)) : Ee != null && (et = Math.max(et, 0), rt = Math.min(rt, Ee.count));
      const ot = rt - et;
      if (ot < 0 || ot === 1 / 0) return;
      nt.setup(D, I, se, U, xe);
      let Ct, $e = ve;
      if (xe !== null && (Ct = Y.get(xe), $e = Ve, $e.setIndex(Ct)), D.isMesh)
        I.wireframe === !0 ? (Ce.setLineWidth(I.wireframeLinewidth * Ge()), $e.setMode(R.LINES)) : $e.setMode(R.TRIANGLES);
      else if (D.isLine) {
        let ye = I.linewidth;
        ye === void 0 && (ye = 1), Ce.setLineWidth(ye * Ge()), D.isLineSegments ? $e.setMode(R.LINES) : D.isLineLoop ? $e.setMode(R.LINE_LOOP) : $e.setMode(R.LINE_STRIP);
      } else D.isPoints ? $e.setMode(R.POINTS) : D.isSprite && $e.setMode(R.TRIANGLES);
      if (D.isBatchedMesh)
        if (D._multiDrawInstances !== null)
          $e.renderMultiDrawInstances(D._multiDrawStarts, D._multiDrawCounts, D._multiDrawCount, D._multiDrawInstances);
        else if (Be.get("WEBGL_multi_draw"))
          $e.renderMultiDraw(D._multiDrawStarts, D._multiDrawCounts, D._multiDrawCount);
        else {
          const ye = D._multiDrawStarts, gt = D._multiDrawCounts, Ze = D._multiDrawCount, Ot = xe ? Y.get(xe).bytesPerElement : 1, Bn = Ae.get(I).currentProgram.getUniforms();
          for (let Pt = 0; Pt < Ze; Pt++)
            Bn.setValue(R, "_gl_DrawID", Pt), $e.render(ye[Pt] / Ot, gt[Pt]);
        }
      else if (D.isInstancedMesh)
        $e.renderInstances(et, ot, D.count);
      else if (U.isInstancedBufferGeometry) {
        const ye = U._maxInstanceCount !== void 0 ? U._maxInstanceCount : 1 / 0, gt = Math.min(U.instanceCount, ye);
        $e.renderInstances(et, ot, gt);
      } else
        $e.render(et, ot);
    };
    function qe(_, C, U) {
      _.transparent === !0 && _.side === tn && _.forceSinglePass === !1 ? (_.side = wt, _.needsUpdate = !0, K(_, C, U), _.side = Sn, _.needsUpdate = !0, K(_, C, U), _.side = tn) : K(_, C, U);
    }
    this.compile = function(_, C, U = null) {
      U === null && (U = _), d = We.get(U), d.init(C), T.push(d), U.traverseVisible(function(D) {
        D.isLight && D.layers.test(C.layers) && (d.pushLight(D), D.castShadow && d.pushShadow(D));
      }), _ !== U && _.traverseVisible(function(D) {
        D.isLight && D.layers.test(C.layers) && (d.pushLight(D), D.castShadow && d.pushShadow(D));
      }), d.setupLights();
      const I = /* @__PURE__ */ new Set();
      return _.traverse(function(D) {
        if (!(D.isMesh || D.isPoints || D.isLine || D.isSprite))
          return;
        const Q = D.material;
        if (Q)
          if (Array.isArray(Q))
            for (let re = 0; re < Q.length; re++) {
              const se = Q[re];
              qe(se, U, D), I.add(se);
            }
          else
            qe(Q, U, D), I.add(Q);
      }), T.pop(), d = null, I;
    }, this.compileAsync = function(_, C, U = null) {
      const I = this.compile(_, C, U);
      return new Promise((D) => {
        function Q() {
          if (I.forEach(function(re) {
            Ae.get(re).currentProgram.isReady() && I.delete(re);
          }), I.size === 0) {
            D(_);
            return;
          }
          setTimeout(Q, 10);
        }
        Be.get("KHR_parallel_shader_compile") !== null ? Q() : setTimeout(Q, 10);
      });
    };
    let mt = null;
    function Ft(_) {
      mt && mt(_);
    }
    function Ui() {
      qt.stop();
    }
    function di() {
      qt.start();
    }
    const qt = new ko();
    qt.setAnimationLoop(Ft), typeof self < "u" && qt.setContext(self), this.setAnimationLoop = function(_) {
      mt = _, H.setAnimationLoop(_), _ === null ? qt.stop() : qt.start();
    }, H.addEventListener("sessionstart", Ui), H.addEventListener("sessionend", di), this.render = function(_, C) {
      if (C !== void 0 && C.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (b === !0) return;
      if (_.matrixWorldAutoUpdate === !0 && _.updateMatrixWorld(), C.parent === null && C.matrixWorldAutoUpdate === !0 && C.updateMatrixWorld(), H.enabled === !0 && H.isPresenting === !0 && (H.cameraAutoUpdate === !0 && H.updateCamera(C), C = H.getCamera()), _.isScene === !0 && _.onBeforeRender(E, _, C, w), d = We.get(_, T.length), d.init(C), T.push(d), me.multiplyMatrices(C.projectionMatrix, C.matrixWorldInverse), Oe.setFromProjectionMatrix(me), J = this.localClippingEnabled, X = ne.init(this.clippingPlanes, J), M = ge.get(_, u.length), M.init(), u.push(M), H.enabled === !0 && H.isPresenting === !0) {
        const Q = E.xr.getDepthSensingMesh();
        Q !== null && fi(Q, C, -1 / 0, E.sortObjects);
      }
      fi(_, C, 0, E.sortObjects), M.finish(), E.sortObjects === !0 && M.sort(V, ue), Ke = H.enabled === !1 || H.isPresenting === !1 || H.hasDepthSensing() === !1, Ke && De.addToRenderList(M, _), this.info.render.frame++, X === !0 && ne.beginShadows();
      const U = d.state.shadowsArray;
      _e.render(U, _, C), X === !0 && ne.endShadows(), this.info.autoReset === !0 && this.info.reset();
      const I = M.opaque, D = M.transmissive;
      if (d.setupLights(), C.isArrayCamera) {
        const Q = C.cameras;
        if (D.length > 0)
          for (let re = 0, se = Q.length; re < se; re++) {
            const xe = Q[re];
            Ni(I, D, _, xe);
          }
        Ke && De.render(_);
        for (let re = 0, se = Q.length; re < se; re++) {
          const xe = Q[re];
          Ii(M, _, xe, xe.viewport);
        }
      } else
        D.length > 0 && Ni(I, D, _, C), Ke && De.render(_), Ii(M, _, C);
      w !== null && (y.updateMultisampleRenderTarget(w), y.updateRenderTargetMipmap(w)), _.isScene === !0 && _.onAfterRender(E, _, C), nt.resetDefaultState(), O = -1, ee = null, T.pop(), T.length > 0 ? (d = T[T.length - 1], X === !0 && ne.setGlobalState(E.clippingPlanes, d.state.camera)) : d = null, u.pop(), u.length > 0 ? M = u[u.length - 1] : M = null;
    };
    function fi(_, C, U, I) {
      if (_.visible === !1) return;
      if (_.layers.test(C.layers)) {
        if (_.isGroup)
          U = _.renderOrder;
        else if (_.isLOD)
          _.autoUpdate === !0 && _.update(C);
        else if (_.isLight)
          d.pushLight(_), _.castShadow && d.pushShadow(_);
        else if (_.isSprite) {
          if (!_.frustumCulled || Oe.intersectsSprite(_)) {
            I && be.setFromMatrixPosition(_.matrixWorld).applyMatrix4(me);
            const re = q.update(_), se = _.material;
            se.visible && M.push(_, re, se, U, be.z, null);
          }
        } else if ((_.isMesh || _.isLine || _.isPoints) && (!_.frustumCulled || Oe.intersectsObject(_))) {
          const re = q.update(_), se = _.material;
          if (I && (_.boundingSphere !== void 0 ? (_.boundingSphere === null && _.computeBoundingSphere(), be.copy(_.boundingSphere.center)) : (re.boundingSphere === null && re.computeBoundingSphere(), be.copy(re.boundingSphere.center)), be.applyMatrix4(_.matrixWorld).applyMatrix4(me)), Array.isArray(se)) {
            const xe = re.groups;
            for (let Re = 0, Pe = xe.length; Re < Pe; Re++) {
              const Ee = xe[Re], et = se[Ee.materialIndex];
              et && et.visible && M.push(_, re, et, U, be.z, Ee);
            }
          } else se.visible && M.push(_, re, se, U, be.z, null);
        }
      }
      const Q = _.children;
      for (let re = 0, se = Q.length; re < se; re++)
        fi(Q[re], C, U, I);
    }
    function Ii(_, C, U, I) {
      const D = _.opaque, Q = _.transmissive, re = _.transparent;
      d.setupLightsView(U), X === !0 && ne.setGlobalState(E.clippingPlanes, U), I && Ce.viewport(g.copy(I)), D.length > 0 && On(D, C, U), Q.length > 0 && On(Q, C, U), re.length > 0 && On(re, C, U), Ce.buffers.depth.setTest(!0), Ce.buffers.depth.setMask(!0), Ce.buffers.color.setMask(!0), Ce.setPolygonOffset(!1);
    }
    function Ni(_, C, U, I) {
      if ((U.isScene === !0 ? U.overrideMaterial : null) !== null)
        return;
      d.state.transmissionRenderTarget[I.id] === void 0 && (d.state.transmissionRenderTarget[I.id] = new Fn(1, 1, {
        generateMipmaps: !0,
        type: Be.has("EXT_color_buffer_half_float") || Be.has("EXT_color_buffer_float") ? wi : on,
        minFilter: In,
        samples: 4,
        stencilBuffer: s,
        resolveDepthBuffer: !1,
        resolveStencilBuffer: !1,
        colorSpace: Je.workingColorSpace
      }));
      const Q = d.state.transmissionRenderTarget[I.id], re = I.viewport || g;
      Q.setSize(re.z, re.w);
      const se = E.getRenderTarget();
      E.setRenderTarget(Q), E.getClearColor(B), k = E.getClearAlpha(), k < 1 && E.setClearColor(16777215, 0.5), E.clear(), Ke && De.render(U);
      const xe = E.toneMapping;
      E.toneMapping = Mn;
      const Re = I.viewport;
      if (I.viewport !== void 0 && (I.viewport = void 0), d.setupLightsView(I), X === !0 && ne.setGlobalState(E.clippingPlanes, I), On(_, U, I), y.updateMultisampleRenderTarget(Q), y.updateRenderTargetMipmap(Q), Be.has("WEBGL_multisampled_render_to_texture") === !1) {
        let Pe = !1;
        for (let Ee = 0, et = C.length; Ee < et; Ee++) {
          const rt = C[Ee], ot = rt.object, Ct = rt.geometry, $e = rt.material, ye = rt.group;
          if ($e.side === tn && ot.layers.test(I.layers)) {
            const gt = $e.side;
            $e.side = wt, $e.needsUpdate = !0, A(ot, U, I, Ct, $e, ye), $e.side = gt, $e.needsUpdate = !0, Pe = !0;
          }
        }
        Pe === !0 && (y.updateMultisampleRenderTarget(Q), y.updateRenderTargetMipmap(Q));
      }
      E.setRenderTarget(se), E.setClearColor(B, k), Re !== void 0 && (I.viewport = Re), E.toneMapping = xe;
    }
    function On(_, C, U) {
      const I = C.isScene === !0 ? C.overrideMaterial : null;
      for (let D = 0, Q = _.length; D < Q; D++) {
        const re = _[D], se = re.object, xe = re.geometry, Re = I === null ? re.material : I, Pe = re.group;
        se.layers.test(U.layers) && A(se, C, U, xe, Re, Pe);
      }
    }
    function A(_, C, U, I, D, Q) {
      _.onBeforeRender(E, C, U, I, D, Q), _.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse, _.matrixWorld), _.normalMatrix.getNormalMatrix(_.modelViewMatrix), D.onBeforeRender(E, C, U, I, _, Q), D.transparent === !0 && D.side === tn && D.forceSinglePass === !1 ? (D.side = wt, D.needsUpdate = !0, E.renderBufferDirect(U, C, I, D, _, Q), D.side = Sn, D.needsUpdate = !0, E.renderBufferDirect(U, C, I, D, _, Q), D.side = tn) : E.renderBufferDirect(U, C, I, D, _, Q), _.onAfterRender(E, C, U, I, D, Q);
    }
    function K(_, C, U) {
      C.isScene !== !0 && (C = ze);
      const I = Ae.get(_), D = d.state.lights, Q = d.state.shadowsArray, re = D.state.version, se = Se.getParameters(_, D.state, Q, C, U), xe = Se.getProgramCacheKey(se);
      let Re = I.programs;
      I.environment = _.isMeshStandardMaterial ? C.environment : null, I.fog = C.fog, I.envMap = (_.isMeshStandardMaterial ? N : v).get(_.envMap || I.environment), I.envMapRotation = I.environment !== null && _.envMap === null ? C.environmentRotation : _.envMapRotation, Re === void 0 && (_.addEventListener("dispose", Xe), Re = /* @__PURE__ */ new Map(), I.programs = Re);
      let Pe = Re.get(xe);
      if (Pe !== void 0) {
        if (I.currentProgram === Pe && I.lightsStateVersion === re)
          return we(_, se), Pe;
      } else
        se.uniforms = Se.getUniforms(_), _.onBeforeCompile(se, E), Pe = Se.acquireProgram(se, xe), Re.set(xe, Pe), I.uniforms = se.uniforms;
      const Ee = I.uniforms;
      return (!_.isShaderMaterial && !_.isRawShaderMaterial || _.clipping === !0) && (Ee.clippingPlanes = ne.uniform), we(_, se), I.needsLights = ke(_), I.lightsStateVersion = re, I.needsLights && (Ee.ambientLightColor.value = D.state.ambient, Ee.lightProbe.value = D.state.probe, Ee.directionalLights.value = D.state.directional, Ee.directionalLightShadows.value = D.state.directionalShadow, Ee.spotLights.value = D.state.spot, Ee.spotLightShadows.value = D.state.spotShadow, Ee.rectAreaLights.value = D.state.rectArea, Ee.ltc_1.value = D.state.rectAreaLTC1, Ee.ltc_2.value = D.state.rectAreaLTC2, Ee.pointLights.value = D.state.point, Ee.pointLightShadows.value = D.state.pointShadow, Ee.hemisphereLights.value = D.state.hemi, Ee.directionalShadowMap.value = D.state.directionalShadowMap, Ee.directionalShadowMatrix.value = D.state.directionalShadowMatrix, Ee.spotShadowMap.value = D.state.spotShadowMap, Ee.spotLightMatrix.value = D.state.spotLightMatrix, Ee.spotLightMap.value = D.state.spotLightMap, Ee.pointShadowMap.value = D.state.pointShadowMap, Ee.pointShadowMatrix.value = D.state.pointShadowMatrix), I.currentProgram = Pe, I.uniformsList = null, Pe;
    }
    function ce(_) {
      if (_.uniformsList === null) {
        const C = _.currentProgram.getUniforms();
        _.uniformsList = mr.seqWithValue(C.seq, _.uniforms);
      }
      return _.uniformsList;
    }
    function we(_, C) {
      const U = Ae.get(_);
      U.outputColorSpace = C.outputColorSpace, U.batching = C.batching, U.batchingColor = C.batchingColor, U.instancing = C.instancing, U.instancingColor = C.instancingColor, U.instancingMorph = C.instancingMorph, U.skinning = C.skinning, U.morphTargets = C.morphTargets, U.morphNormals = C.morphNormals, U.morphColors = C.morphColors, U.morphTargetsCount = C.morphTargetsCount, U.numClippingPlanes = C.numClippingPlanes, U.numIntersection = C.numClipIntersection, U.vertexAlphas = C.vertexAlphas, U.vertexTangents = C.vertexTangents, U.toneMapping = C.toneMapping;
    }
    function Ye(_, C, U, I, D) {
      C.isScene !== !0 && (C = ze), y.resetTextureUnits();
      const Q = C.fog, re = I.isMeshStandardMaterial ? C.environment : null, se = w === null ? E.outputColorSpace : w.isXRRenderTarget === !0 ? w.texture.colorSpace : En, xe = (I.isMeshStandardMaterial ? N : v).get(I.envMap || re), Re = I.vertexColors === !0 && !!U.attributes.color && U.attributes.color.itemSize === 4, Pe = !!U.attributes.tangent && (!!I.normalMap || I.anisotropy > 0), Ee = !!U.morphAttributes.position, et = !!U.morphAttributes.normal, rt = !!U.morphAttributes.color;
      let ot = Mn;
      I.toneMapped && (w === null || w.isXRRenderTarget === !0) && (ot = E.toneMapping);
      const Ct = U.morphAttributes.position || U.morphAttributes.normal || U.morphAttributes.color, $e = Ct !== void 0 ? Ct.length : 0, ye = Ae.get(I), gt = d.state.lights;
      if (X === !0 && (J === !0 || _ !== ee)) {
        const Ut = _ === ee && I.id === O;
        ne.setState(I, _, Ut);
      }
      let Ze = !1;
      I.version === ye.__version ? (ye.needsLights && ye.lightsStateVersion !== gt.state.version || ye.outputColorSpace !== se || D.isBatchedMesh && ye.batching === !1 || !D.isBatchedMesh && ye.batching === !0 || D.isBatchedMesh && ye.batchingColor === !0 && D.colorTexture === null || D.isBatchedMesh && ye.batchingColor === !1 && D.colorTexture !== null || D.isInstancedMesh && ye.instancing === !1 || !D.isInstancedMesh && ye.instancing === !0 || D.isSkinnedMesh && ye.skinning === !1 || !D.isSkinnedMesh && ye.skinning === !0 || D.isInstancedMesh && ye.instancingColor === !0 && D.instanceColor === null || D.isInstancedMesh && ye.instancingColor === !1 && D.instanceColor !== null || D.isInstancedMesh && ye.instancingMorph === !0 && D.morphTexture === null || D.isInstancedMesh && ye.instancingMorph === !1 && D.morphTexture !== null || ye.envMap !== xe || I.fog === !0 && ye.fog !== Q || ye.numClippingPlanes !== void 0 && (ye.numClippingPlanes !== ne.numPlanes || ye.numIntersection !== ne.numIntersection) || ye.vertexAlphas !== Re || ye.vertexTangents !== Pe || ye.morphTargets !== Ee || ye.morphNormals !== et || ye.morphColors !== rt || ye.toneMapping !== ot || ye.morphTargetsCount !== $e) && (Ze = !0) : (Ze = !0, ye.__version = I.version);
      let Ot = ye.currentProgram;
      Ze === !0 && (Ot = K(I, C, D));
      let Bn = !1, Pt = !1, Rr = !1;
      const ct = Ot.getUniforms(), un = ye.uniforms;
      if (Ce.useProgram(Ot.program) && (Bn = !0, Pt = !0, Rr = !0), I.id !== O && (O = I.id, Pt = !0), Bn || ee !== _) {
        He.reverseDepthBuffer ? (pe.copy(_.projectionMatrix), Kl(pe), $l(pe), ct.setValue(R, "projectionMatrix", pe)) : ct.setValue(R, "projectionMatrix", _.projectionMatrix), ct.setValue(R, "viewMatrix", _.matrixWorldInverse);
        const Ut = ct.map.cameraPosition;
        Ut !== void 0 && Ut.setValue(R, Le.setFromMatrixPosition(_.matrixWorld)), He.logarithmicDepthBuffer && ct.setValue(
          R,
          "logDepthBufFC",
          2 / (Math.log(_.far + 1) / Math.LN2)
        ), (I.isMeshPhongMaterial || I.isMeshToonMaterial || I.isMeshLambertMaterial || I.isMeshBasicMaterial || I.isMeshStandardMaterial || I.isShaderMaterial) && ct.setValue(R, "isOrthographic", _.isOrthographicCamera === !0), ee !== _ && (ee = _, Pt = !0, Rr = !0);
      }
      if (D.isSkinnedMesh) {
        ct.setOptional(R, D, "bindMatrix"), ct.setOptional(R, D, "bindMatrixInverse");
        const Ut = D.skeleton;
        Ut && (Ut.boneTexture === null && Ut.computeBoneTexture(), ct.setValue(R, "boneTexture", Ut.boneTexture, y));
      }
      D.isBatchedMesh && (ct.setOptional(R, D, "batchingTexture"), ct.setValue(R, "batchingTexture", D._matricesTexture, y), ct.setOptional(R, D, "batchingIdTexture"), ct.setValue(R, "batchingIdTexture", D._indirectTexture, y), ct.setOptional(R, D, "batchingColorTexture"), D._colorsTexture !== null && ct.setValue(R, "batchingColorTexture", D._colorsTexture, y));
      const Cr = U.morphAttributes;
      if ((Cr.position !== void 0 || Cr.normal !== void 0 || Cr.color !== void 0) && Ue.update(D, U, Ot), (Pt || ye.receiveShadow !== D.receiveShadow) && (ye.receiveShadow = D.receiveShadow, ct.setValue(R, "receiveShadow", D.receiveShadow)), I.isMeshGouraudMaterial && I.envMap !== null && (un.envMap.value = xe, un.flipEnvMap.value = xe.isCubeTexture && xe.isRenderTargetTexture === !1 ? -1 : 1), I.isMeshStandardMaterial && I.envMap === null && C.environment !== null && (un.envMapIntensity.value = C.environmentIntensity), Pt && (ct.setValue(R, "toneMappingExposure", E.toneMappingExposure), ye.needsLights && Qe(un, Rr), Q && I.fog === !0 && ae.refreshFogUniforms(un, Q), ae.refreshMaterialUniforms(un, I, te, z, d.state.transmissionRenderTarget[_.id]), mr.upload(R, ce(ye), un, y)), I.isShaderMaterial && I.uniformsNeedUpdate === !0 && (mr.upload(R, ce(ye), un, y), I.uniformsNeedUpdate = !1), I.isSpriteMaterial && ct.setValue(R, "center", D.center), ct.setValue(R, "modelViewMatrix", D.modelViewMatrix), ct.setValue(R, "normalMatrix", D.normalMatrix), ct.setValue(R, "modelMatrix", D.matrixWorld), I.isShaderMaterial || I.isRawShaderMaterial) {
        const Ut = I.uniformsGroups;
        for (let Pr = 0, Zo = Ut.length; Pr < Zo; Pr++) {
          const ca = Ut[Pr];
          L.update(ca, Ot), L.bind(ca, Ot);
        }
      }
      return Ot;
    }
    function Qe(_, C) {
      _.ambientLightColor.needsUpdate = C, _.lightProbe.needsUpdate = C, _.directionalLights.needsUpdate = C, _.directionalLightShadows.needsUpdate = C, _.pointLights.needsUpdate = C, _.pointLightShadows.needsUpdate = C, _.spotLights.needsUpdate = C, _.spotLightShadows.needsUpdate = C, _.rectAreaLights.needsUpdate = C, _.hemisphereLights.needsUpdate = C;
    }
    function ke(_) {
      return _.isMeshLambertMaterial || _.isMeshToonMaterial || _.isMeshPhongMaterial || _.isMeshStandardMaterial || _.isShadowMaterial || _.isShaderMaterial && _.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return G;
    }, this.getActiveMipmapLevel = function() {
      return P;
    }, this.getRenderTarget = function() {
      return w;
    }, this.setRenderTargetTextures = function(_, C, U) {
      Ae.get(_.texture).__webglTexture = C, Ae.get(_.depthTexture).__webglTexture = U;
      const I = Ae.get(_);
      I.__hasExternalTextures = !0, I.__autoAllocateDepthBuffer = U === void 0, I.__autoAllocateDepthBuffer || Be.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), I.__useRenderToTexture = !1);
    }, this.setRenderTargetFramebuffer = function(_, C) {
      const U = Ae.get(_);
      U.__webglFramebuffer = C, U.__useDefaultFramebuffer = C === void 0;
    }, this.setRenderTarget = function(_, C = 0, U = 0) {
      w = _, G = C, P = U;
      let I = !0, D = null, Q = !1, re = !1;
      if (_) {
        const xe = Ae.get(_);
        if (xe.__useDefaultFramebuffer !== void 0)
          Ce.bindFramebuffer(R.FRAMEBUFFER, null), I = !1;
        else if (xe.__webglFramebuffer === void 0)
          y.setupRenderTarget(_);
        else if (xe.__hasExternalTextures)
          y.rebindTextures(_, Ae.get(_.texture).__webglTexture, Ae.get(_.depthTexture).__webglTexture);
        else if (_.depthBuffer) {
          const Ee = _.depthTexture;
          if (xe.__boundDepthTexture !== Ee) {
            if (Ee !== null && Ae.has(Ee) && (_.width !== Ee.image.width || _.height !== Ee.image.height))
              throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            y.setupDepthRenderbuffer(_);
          }
        }
        const Re = _.texture;
        (Re.isData3DTexture || Re.isDataArrayTexture || Re.isCompressedArrayTexture) && (re = !0);
        const Pe = Ae.get(_).__webglFramebuffer;
        _.isWebGLCubeRenderTarget ? (Array.isArray(Pe[C]) ? D = Pe[C][U] : D = Pe[C], Q = !0) : _.samples > 0 && y.useMultisampledRTT(_) === !1 ? D = Ae.get(_).__webglMultisampledFramebuffer : Array.isArray(Pe) ? D = Pe[U] : D = Pe, g.copy(_.viewport), S.copy(_.scissor), W = _.scissorTest;
      } else
        g.copy(he).multiplyScalar(te).floor(), S.copy(ie).multiplyScalar(te).floor(), W = Te;
      if (Ce.bindFramebuffer(R.FRAMEBUFFER, D) && I && Ce.drawBuffers(_, D), Ce.viewport(g), Ce.scissor(S), Ce.setScissorTest(W), Q) {
        const xe = Ae.get(_.texture);
        R.framebufferTexture2D(R.FRAMEBUFFER, R.COLOR_ATTACHMENT0, R.TEXTURE_CUBE_MAP_POSITIVE_X + C, xe.__webglTexture, U);
      } else if (re) {
        const xe = Ae.get(_.texture), Re = C || 0;
        R.framebufferTextureLayer(R.FRAMEBUFFER, R.COLOR_ATTACHMENT0, xe.__webglTexture, U || 0, Re);
      }
      O = -1;
    }, this.readRenderTargetPixels = function(_, C, U, I, D, Q, re) {
      if (!(_ && _.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let se = Ae.get(_).__webglFramebuffer;
      if (_.isWebGLCubeRenderTarget && re !== void 0 && (se = se[re]), se) {
        Ce.bindFramebuffer(R.FRAMEBUFFER, se);
        try {
          const xe = _.texture, Re = xe.format, Pe = xe.type;
          if (!He.textureFormatReadable(Re)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!He.textureTypeReadable(Pe)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          C >= 0 && C <= _.width - I && U >= 0 && U <= _.height - D && R.readPixels(C, U, I, D, Ie.convert(Re), Ie.convert(Pe), Q);
        } finally {
          const xe = w !== null ? Ae.get(w).__webglFramebuffer : null;
          Ce.bindFramebuffer(R.FRAMEBUFFER, xe);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(_, C, U, I, D, Q, re) {
      if (!(_ && _.isWebGLRenderTarget))
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let se = Ae.get(_).__webglFramebuffer;
      if (_.isWebGLCubeRenderTarget && re !== void 0 && (se = se[re]), se) {
        const xe = _.texture, Re = xe.format, Pe = xe.type;
        if (!He.textureFormatReadable(Re))
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!He.textureTypeReadable(Pe))
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        if (C >= 0 && C <= _.width - I && U >= 0 && U <= _.height - D) {
          Ce.bindFramebuffer(R.FRAMEBUFFER, se);
          const Ee = R.createBuffer();
          R.bindBuffer(R.PIXEL_PACK_BUFFER, Ee), R.bufferData(R.PIXEL_PACK_BUFFER, Q.byteLength, R.STREAM_READ), R.readPixels(C, U, I, D, Ie.convert(Re), Ie.convert(Pe), 0);
          const et = w !== null ? Ae.get(w).__webglFramebuffer : null;
          Ce.bindFramebuffer(R.FRAMEBUFFER, et);
          const rt = R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return R.flush(), await jl(R, rt, 4), R.bindBuffer(R.PIXEL_PACK_BUFFER, Ee), R.getBufferSubData(R.PIXEL_PACK_BUFFER, 0, Q), R.deleteBuffer(Ee), R.deleteSync(rt), Q;
        } else
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
      }
    }, this.copyFramebufferToTexture = function(_, C = null, U = 0) {
      _.isTexture !== !0 && (pr("WebGLRenderer: copyFramebufferToTexture function signature has changed."), C = arguments[0] || null, _ = arguments[1]);
      const I = Math.pow(2, -U), D = Math.floor(_.image.width * I), Q = Math.floor(_.image.height * I), re = C !== null ? C.x : 0, se = C !== null ? C.y : 0;
      y.setTexture2D(_, 0), R.copyTexSubImage2D(R.TEXTURE_2D, U, 0, 0, re, se, D, Q), Ce.unbindTexture();
    }, this.copyTextureToTexture = function(_, C, U = null, I = null, D = 0) {
      _.isTexture !== !0 && (pr("WebGLRenderer: copyTextureToTexture function signature has changed."), I = arguments[0] || null, _ = arguments[1], C = arguments[2], D = arguments[3] || 0, U = null);
      let Q, re, se, xe, Re, Pe;
      U !== null ? (Q = U.max.x - U.min.x, re = U.max.y - U.min.y, se = U.min.x, xe = U.min.y) : (Q = _.image.width, re = _.image.height, se = 0, xe = 0), I !== null ? (Re = I.x, Pe = I.y) : (Re = 0, Pe = 0);
      const Ee = Ie.convert(C.format), et = Ie.convert(C.type);
      y.setTexture2D(C, 0), R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL, C.flipY), R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL, C.premultiplyAlpha), R.pixelStorei(R.UNPACK_ALIGNMENT, C.unpackAlignment);
      const rt = R.getParameter(R.UNPACK_ROW_LENGTH), ot = R.getParameter(R.UNPACK_IMAGE_HEIGHT), Ct = R.getParameter(R.UNPACK_SKIP_PIXELS), $e = R.getParameter(R.UNPACK_SKIP_ROWS), ye = R.getParameter(R.UNPACK_SKIP_IMAGES), gt = _.isCompressedTexture ? _.mipmaps[D] : _.image;
      R.pixelStorei(R.UNPACK_ROW_LENGTH, gt.width), R.pixelStorei(R.UNPACK_IMAGE_HEIGHT, gt.height), R.pixelStorei(R.UNPACK_SKIP_PIXELS, se), R.pixelStorei(R.UNPACK_SKIP_ROWS, xe), _.isDataTexture ? R.texSubImage2D(R.TEXTURE_2D, D, Re, Pe, Q, re, Ee, et, gt.data) : _.isCompressedTexture ? R.compressedTexSubImage2D(R.TEXTURE_2D, D, Re, Pe, gt.width, gt.height, Ee, gt.data) : R.texSubImage2D(R.TEXTURE_2D, D, Re, Pe, Q, re, Ee, et, gt), R.pixelStorei(R.UNPACK_ROW_LENGTH, rt), R.pixelStorei(R.UNPACK_IMAGE_HEIGHT, ot), R.pixelStorei(R.UNPACK_SKIP_PIXELS, Ct), R.pixelStorei(R.UNPACK_SKIP_ROWS, $e), R.pixelStorei(R.UNPACK_SKIP_IMAGES, ye), D === 0 && C.generateMipmaps && R.generateMipmap(R.TEXTURE_2D), Ce.unbindTexture();
    }, this.copyTextureToTexture3D = function(_, C, U = null, I = null, D = 0) {
      _.isTexture !== !0 && (pr("WebGLRenderer: copyTextureToTexture3D function signature has changed."), U = arguments[0] || null, I = arguments[1] || null, _ = arguments[2], C = arguments[3], D = arguments[4] || 0);
      let Q, re, se, xe, Re, Pe, Ee, et, rt;
      const ot = _.isCompressedTexture ? _.mipmaps[D] : _.image;
      U !== null ? (Q = U.max.x - U.min.x, re = U.max.y - U.min.y, se = U.max.z - U.min.z, xe = U.min.x, Re = U.min.y, Pe = U.min.z) : (Q = ot.width, re = ot.height, se = ot.depth, xe = 0, Re = 0, Pe = 0), I !== null ? (Ee = I.x, et = I.y, rt = I.z) : (Ee = 0, et = 0, rt = 0);
      const Ct = Ie.convert(C.format), $e = Ie.convert(C.type);
      let ye;
      if (C.isData3DTexture)
        y.setTexture3D(C, 0), ye = R.TEXTURE_3D;
      else if (C.isDataArrayTexture || C.isCompressedArrayTexture)
        y.setTexture2DArray(C, 0), ye = R.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL, C.flipY), R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL, C.premultiplyAlpha), R.pixelStorei(R.UNPACK_ALIGNMENT, C.unpackAlignment);
      const gt = R.getParameter(R.UNPACK_ROW_LENGTH), Ze = R.getParameter(R.UNPACK_IMAGE_HEIGHT), Ot = R.getParameter(R.UNPACK_SKIP_PIXELS), Bn = R.getParameter(R.UNPACK_SKIP_ROWS), Pt = R.getParameter(R.UNPACK_SKIP_IMAGES);
      R.pixelStorei(R.UNPACK_ROW_LENGTH, ot.width), R.pixelStorei(R.UNPACK_IMAGE_HEIGHT, ot.height), R.pixelStorei(R.UNPACK_SKIP_PIXELS, xe), R.pixelStorei(R.UNPACK_SKIP_ROWS, Re), R.pixelStorei(R.UNPACK_SKIP_IMAGES, Pe), _.isDataTexture || _.isData3DTexture ? R.texSubImage3D(ye, D, Ee, et, rt, Q, re, se, Ct, $e, ot.data) : C.isCompressedArrayTexture ? R.compressedTexSubImage3D(ye, D, Ee, et, rt, Q, re, se, Ct, ot.data) : R.texSubImage3D(ye, D, Ee, et, rt, Q, re, se, Ct, $e, ot), R.pixelStorei(R.UNPACK_ROW_LENGTH, gt), R.pixelStorei(R.UNPACK_IMAGE_HEIGHT, Ze), R.pixelStorei(R.UNPACK_SKIP_PIXELS, Ot), R.pixelStorei(R.UNPACK_SKIP_ROWS, Bn), R.pixelStorei(R.UNPACK_SKIP_IMAGES, Pt), D === 0 && C.generateMipmaps && R.generateMipmap(ye), Ce.unbindTexture();
    }, this.initRenderTarget = function(_) {
      Ae.get(_).__webglFramebuffer === void 0 && y.setupRenderTarget(_);
    }, this.initTexture = function(_) {
      _.isCubeTexture ? y.setTextureCube(_, 0) : _.isData3DTexture ? y.setTexture3D(_, 0) : _.isDataArrayTexture || _.isCompressedArrayTexture ? y.setTexture2DArray(_, 0) : y.setTexture2D(_, 0), Ce.unbindTexture();
    }, this.resetState = function() {
      G = 0, P = 0, w = null, Ce.reset(), nt.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return rn;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = e === sa ? "display-p3" : "srgb", t.unpackColorSpace = Je.workingColorSpace === br ? "display-p3" : "srgb";
  }
}
class lp extends Et {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new ln(), this.environmentIntensity = 1, this.environmentRotation = new ln(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
class $o extends ui {
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new je(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const Er = /* @__PURE__ */ new F(), yr = /* @__PURE__ */ new F(), oo = /* @__PURE__ */ new lt(), Ei = /* @__PURE__ */ new aa(), sr = /* @__PURE__ */ new Li(), ls = /* @__PURE__ */ new F(), lo = /* @__PURE__ */ new F();
class cp extends Et {
  constructor(e = new Xt(), t = new $o()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let r = 1, s = t.count; r < s; r++)
        Er.fromBufferAttribute(t, r - 1), yr.fromBufferAttribute(t, r), n[r] = n[r - 1], n[r] += Er.distanceTo(yr);
      e.setAttribute("lineDistance", new an(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, r = this.matrixWorld, s = e.params.Line.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), sr.copy(n.boundingSphere), sr.applyMatrix4(r), sr.radius += s, e.ray.intersectsSphere(sr) === !1) return;
    oo.copy(r).invert(), Ei.copy(e.ray).applyMatrix4(oo);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = this.isLineSegments ? 2 : 1, h = n.index, p = n.attributes.position;
    if (h !== null) {
      const m = Math.max(0, a.start), x = Math.min(h.count, a.start + a.count);
      for (let M = m, d = x - 1; M < d; M += c) {
        const u = h.getX(M), T = h.getX(M + 1), E = ar(this, e, Ei, l, u, T);
        E && t.push(E);
      }
      if (this.isLineLoop) {
        const M = h.getX(x - 1), d = h.getX(m), u = ar(this, e, Ei, l, M, d);
        u && t.push(u);
      }
    } else {
      const m = Math.max(0, a.start), x = Math.min(p.count, a.start + a.count);
      for (let M = m, d = x - 1; M < d; M += c) {
        const u = ar(this, e, Ei, l, M, M + 1);
        u && t.push(u);
      }
      if (this.isLineLoop) {
        const M = ar(this, e, Ei, l, x - 1, m);
        M && t.push(M);
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
}
function ar(i, e, t, n, r, s) {
  const a = i.geometry.attributes.position;
  if (Er.fromBufferAttribute(a, r), yr.fromBufferAttribute(a, s), t.distanceSqToSegment(Er, yr, ls, lo) > n) return;
  ls.applyMatrix4(i.matrixWorld);
  const l = e.ray.origin.distanceTo(ls);
  if (!(l < e.near || l > e.far))
    return {
      distance: l,
      // What do we want? intersection point on the ray or on the segment??
      // point: raycaster.ray.at( distance ),
      point: lo.clone().applyMatrix4(i.matrixWorld),
      index: r,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: i
    };
}
const co = /* @__PURE__ */ new F(), uo = /* @__PURE__ */ new F();
class up extends cp {
  constructor(e, t) {
    super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let r = 0, s = t.count; r < s; r += 2)
        co.fromBufferAttribute(t, r), uo.fromBufferAttribute(t, r + 1), n[r] = r === 0 ? 0 : n[r - 1], n[r + 1] = n[r] + co.distanceTo(uo);
      e.setAttribute("lineDistance", new an(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class hp extends ui {
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new je(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const ho = /* @__PURE__ */ new lt(), $s = /* @__PURE__ */ new aa(), or = /* @__PURE__ */ new Li(), lr = /* @__PURE__ */ new F();
class dp extends Et {
  constructor(e = new Xt(), t = new hp()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, r = this.matrixWorld, s = e.params.Points.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), or.copy(n.boundingSphere), or.applyMatrix4(r), or.radius += s, e.ray.intersectsSphere(or) === !1) return;
    ho.copy(r).invert(), $s.copy(e.ray).applyMatrix4(ho);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = n.index, f = n.attributes.position;
    if (c !== null) {
      const p = Math.max(0, a.start), m = Math.min(c.count, a.start + a.count);
      for (let x = p, M = m; x < M; x++) {
        const d = c.getX(x);
        lr.fromBufferAttribute(f, d), fo(lr, d, l, r, e, t, this);
      }
    } else {
      const p = Math.max(0, a.start), m = Math.min(f.count, a.start + a.count);
      for (let x = p, M = m; x < M; x++)
        lr.fromBufferAttribute(f, x), fo(lr, x, l, r, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
}
function fo(i, e, t, n, r, s, a) {
  const o = $s.distanceSqToPoint(i);
  if (o < t) {
    const l = new F();
    $s.closestPointToPoint(i, l), l.applyMatrix4(n);
    const c = r.ray.origin.distanceTo(l);
    if (c < r.near || c > r.far) return;
    s.push({
      distance: c,
      distanceToRay: Math.sqrt(o),
      point: l,
      index: e,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: a
    });
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: Js
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Js);
const fp = `precision mediump float;

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
`, pp = `precision mediump float;

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
`, po = {
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
}, la = (i = "nebula") => po[i] ?? po.nebula;
class mp {
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
  constructor({ width: e, height: t, preset: n = "nebula" }) {
    this.size = { width: e, height: t }, this.setPreset(n), this.seed();
  }
  setPreset(e) {
    this.preset = la(e);
  }
  seed() {
    const { width: e, height: t } = this.size, n = this.preset.spacing || 60, r = Math.max(6, Math.floor(e / n)), s = Math.max(4, Math.floor(t / n));
    this.nodes = [], this.velocities = [], this.energies = [], this.edges = [], this.lineEnergy = [];
    for (let o = 0; o < s; o++)
      for (let l = 0; l < r; l++) {
        const c = (l + 0.5) * n + (Math.random() - 0.5) * 12, h = (o + 0.5) * n + (Math.random() - 0.5) * 12;
        this.nodes.push([c, h, 0]), this.velocities.push([(Math.random() - 0.5) * 0.2, (Math.random() - 0.5) * 0.2, 0]), this.energies.push(Math.random() * 0.4);
      }
    const a = (o, l) => l * r + o;
    for (let o = 0; o < s; o++)
      for (let l = 0; l < r; l++) {
        const c = a(l, o);
        l < r - 1 && this.addEdge(c, a(l + 1, o)), o < s - 1 && this.addEdge(c, a(l, o + 1));
      }
    this.buildSpatial(n * 1.5);
  }
  resize(e, t) {
    this.size = { width: e, height: t }, this.seed();
  }
  addEdge(e, t) {
    this.edges.push([e, t]), this.lineEnergy.push(0.2);
  }
  buildSpatial(e) {
    this.cellSize = e, this.spatial = /* @__PURE__ */ new Map(), this.nodes.forEach(([t, n], r) => {
      const s = `${Math.floor(t / e)}:${Math.floor(n / e)}`;
      this.spatial.has(s) || this.spatial.set(s, []), this.spatial.get(s).push(r);
    });
  }
  neighborsAround(e, t) {
    const { cellSize: n } = this, r = Math.floor(e.x / n), s = Math.floor(e.y / n), a = [], o = Math.ceil(t / n);
    for (let l = -o; l <= o; l++)
      for (let c = -o; c <= o; c++) {
        const h = `${r + l}:${s + c}`, f = this.spatial.get(h);
        f && a.push(...f);
      }
    return a;
  }
  triggerPulse(e, t = 1.2) {
    const n = 0.35 / (this.preset.pulseSpeed || 1), r = (this.preset.spacing || 60) * 8;
    this.neighborsAround(e, r).forEach((a) => {
      const [o, l] = this.nodes[a], c = Math.hypot(o - e.x, l - e.y);
      if (c > r) return;
      const h = c * n, f = t * (1 - c / r * 0.4);
      this.pulses.push({
        node: a,
        at: performance.now() + h,
        intensity: f
      });
    });
  }
  microPulse(e) {
    this.triggerPulse(e, 0.4);
  }
  attract(e, t = this.preset.interactionStrength) {
    this.neighborsAround(e, (this.preset.spacing || 60) * 2.5).forEach((r) => {
      const s = this.nodes[r], a = this.velocities[r], o = e.x - s[0], l = e.y - s[1], c = Math.max(8, Math.hypot(o, l)), h = t / c * 0.35;
      a[0] += o / c * h, a[1] += l / c * h, this.energies[r] = Math.min(1, this.energies[r] + 0.02);
    });
  }
  update(e) {
    const t = performance.now();
    this.pulses = this.pulses.filter((n) => t >= n.at ? (this.energies[n.node] = Math.min(1, this.energies[n.node] + 0.5 * n.intensity), !1) : !0);
    for (let n = 0; n < this.nodes.length; n++) {
      const r = this.nodes[n], s = this.velocities[n];
      r[0] += s[0] * e, r[1] += s[1] * e, s[0] *= 0.95, s[1] *= 0.95, this.energies[n] = Math.max(0, this.energies[n] - e * 0.15);
    }
    this.edges.forEach(([n, r], s) => {
      const a = (this.energies[n] + this.energies[r]) * 0.5;
      this.lineEnergy[s] = a;
    });
  }
}
const gp = ({
  preset: i = "nebula",
  followMouse: e = !0,
  reactToTyping: t = !0,
  reactToClick: n = !0,
  className: r
}) => {
  const s = _n(null), a = _n(), o = _n(), l = _n(), c = _n(), h = _n(!0);
  return Ai(() => {
    const f = s.current;
    if (!f) return;
    const p = la(i), m = new op({ antialias: !0, alpha: !0 });
    m.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)), m.setClearColor(0, 0), m.domElement.className = "jk-neural-bg", f.appendChild(m.domElement), a.current = m;
    const x = new lp(), M = new Wo(-1, 1, 1, -1, 0.1, 10);
    M.position.z = 1;
    const d = () => {
      const { clientWidth: ie, clientHeight: Te } = f;
      m.setSize(ie, Te), M.left = -ie / 2, M.right = ie / 2, M.top = Te / 2, M.bottom = -Te / 2, M.updateProjectionMatrix(), h.current = !0;
    };
    d(), window.addEventListener("resize", d);
    const u = new mp({ width: m.domElement.width, height: m.domElement.height, preset: i });
    o.current = u;
    const T = new Float32Array(u.nodes.length * 3), E = new Float32Array(u.nodes.length), b = new bt(T, 3), G = new bt(E, 1), P = new Xt();
    P.setAttribute("position", b), P.setAttribute("aEnergy", G);
    const w = new cn({
      vertexShader: fp,
      fragmentShader: pp,
      transparent: !0,
      blending: gr,
      depthWrite: !1,
      uniforms: {
        uTime: { value: 0 },
        uSize: { value: 6 * p.glowIntensity }
      }
    }), O = new dp(P, w);
    l.current = O, x.add(O);
    const ee = new Float32Array(u.edges.length * 2 * 3), g = new Float32Array(u.edges.length), S = new Xt();
    S.setAttribute("position", new bt(ee, 3)), S.setAttribute("alpha", new bt(g, 1));
    const W = new $o({
      color: new je(63168),
      transparent: !0,
      opacity: 0.4,
      blending: gr
    }), B = new up(S, W);
    c.current = B, x.add(B);
    const k = () => {
      u.nodes.forEach((ie, Te) => {
        T[Te * 3] = ie[0] - u.size.width / 2, T[Te * 3 + 1] = ie[1] - u.size.height / 2, T[Te * 3 + 2] = ie[2], E[Te] = u.energies[Te];
      }), b.needsUpdate = !0, G.needsUpdate = !0, u.edges.forEach(([ie, Te], Oe) => {
        const X = u.nodes[ie], J = u.nodes[Te], pe = Oe * 6;
        ee[pe] = X[0] - u.size.width / 2, ee[pe + 1] = X[1] - u.size.height / 2, ee[pe + 3] = J[0] - u.size.width / 2, ee[pe + 4] = J[1] - u.size.height / 2, g[Oe] = u.lineEnergy[Oe];
      }), S.getAttribute("position").needsUpdate = !0, S.getAttribute("alpha").needsUpdate = !0, W.opacity = 0.2 + 0.5 * p.glowIntensity;
    };
    let $ = performance.now(), z;
    const te = () => {
      const ie = performance.now(), Te = Math.min(0.05, (ie - $) / 1e3);
      $ = ie, h.current && (u.resize(m.domElement.width, m.domElement.height), h.current = !1), u.update(Te), w.uniforms.uTime.value = ie * 1e-3, k(), m.render(x, M), z = requestAnimationFrame(te);
    };
    z = requestAnimationFrame(te);
    const V = (ie) => {
      const Te = m.domElement.getBoundingClientRect(), Oe = ie.clientX - Te.left, X = ie.clientY - Te.top;
      u.attract({ x: Oe, y: X }), e && u.microPulse({ x: Oe, y: X });
    }, ue = (ie) => {
      if (!n) return;
      const Te = m.domElement.getBoundingClientRect();
      u.triggerPulse({ x: ie.clientX - Te.left, y: ie.clientY - Te.top }, 1.2);
    }, he = () => {
      if (!t) return;
      const ie = m.domElement.getBoundingClientRect();
      u.triggerPulse(
        { x: Math.random() * ie.width, y: Math.random() * ie.height },
        0.8
      );
    };
    return window.addEventListener("mousemove", V), window.addEventListener("click", ue), window.addEventListener("keydown", he), () => {
      cancelAnimationFrame(z), window.removeEventListener("resize", d), window.removeEventListener("mousemove", V), window.removeEventListener("click", ue), window.removeEventListener("keydown", he), x.clear(), m.dispose(), f.contains(m.domElement) && f.removeChild(m.domElement);
    };
  }, [i, e, t, n]), /* @__PURE__ */ Me.jsx("div", { ref: s, className: r, style: { position: "absolute", inset: 0 } });
}, Np = ({ children: i }) => /* @__PURE__ */ Me.jsxs("div", { className: "relative min-h-screen bg-neo-bg text-neo-text overflow-hidden font-outfit", children: [
  /* @__PURE__ */ Me.jsx(gp, { preset: "nebula", className: "opacity-40" }),
  /* @__PURE__ */ Me.jsx("div", { className: "scanlines-overlay pointer-events-none" }),
  /* @__PURE__ */ Me.jsxs("div", { className: "fixed top-8 left-10 z-50 flex items-center gap-2 pointer-events-none opacity-30", children: [
    /* @__PURE__ */ Me.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-neo-accent animate-pulse shadow-neon-cyan" }),
    /* @__PURE__ */ Me.jsx("span", { className: "text-[9px] uppercase tracking-[0.4em] font-bold", children: "Neural Sync: Active" })
  ] }),
  /* @__PURE__ */ Me.jsxs("div", { className: "fixed bottom-8 right-10 z-50 flex flex-col items-end gap-1 pointer-events-none opacity-30 font-mono", children: [
    /* @__PURE__ */ Me.jsx("span", { className: "text-[8px] uppercase tracking-[0.3em] font-medium", children: "Core Integrity // 99.8%" }),
    /* @__PURE__ */ Me.jsx("span", { className: "text-[8px] uppercase tracking-[0.3em] font-medium text-neo-magenta", children: "Signal Strength // Optimized" })
  ] }),
  /* @__PURE__ */ Me.jsx("div", { className: "relative z-10 px-10 py-16 min-h-screen", children: i })
] });
class _p {
  nodes = [];
  pulses = [];
  subscribers = [];
  running = !1;
  frame = 0;
  options = {
    density: 0.6,
    speed: 1,
    interactive: !0,
    decay: 0.01,
    spacing: 80
  };
  raf;
  area = { w: 1200, h: 800 };
  constructor(e = {}) {
    this.options = { ...this.options, ...e }, this.seed();
  }
  seed() {
    const e = this.options.spacing;
    this.nodes = [];
    for (let t = e / 2; t < this.area.w; t += e)
      for (let n = e / 2; n < this.area.h; n += e)
        this.nodes.push({
          x: t + (Math.random() - 0.5) * 10,
          y: n + (Math.random() - 0.5) * 10,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          energy: Math.random() * 0.4
        });
  }
  setSize(e, t) {
    this.area = { w: e, h: t }, this.seed();
  }
  setInteractive(e) {
    this.options.interactive = e;
  }
  start() {
    if (this.running) return;
    this.running = !0;
    const e = () => {
      this.step(), this.raf = window.requestAnimationFrame(e);
    };
    this.raf = window.requestAnimationFrame(e);
  }
  stop() {
    this.running = !1, this.raf && window.cancelAnimationFrame(this.raf);
  }
  subscribe(e) {
    return this.subscribers.push(e), e({ nodes: this.nodes, pulses: this.pulses }), () => {
      this.subscribers = this.subscribers.filter((t) => t !== e);
    };
  }
  emit() {
    const e = {
      nodes: [...this.nodes],
      pulses: [...this.pulses]
    };
    this.subscribers.forEach((t) => t(e));
  }
  pulse(e) {
    this.pulses.push({ x: e.x, y: e.y, life: 1 });
    const t = this.options.spacing;
    this.nodes.forEach((n) => {
      const r = n.x - e.x, s = n.y - e.y, a = Math.hypot(r, s);
      a < t * 3 && setTimeout(() => {
        n.energy = 1, this.pulses.push({ x: n.x, y: n.y, life: 0.8 });
      }, a * 0.5);
    });
  }
  disperse() {
    this.nodes.forEach((e) => {
      e.vx += (Math.random() - 0.5) * 2, e.vy += (Math.random() - 0.5) * 2;
    });
  }
  step() {
    const { speed: e, decay: t } = this.options;
    this.frame++, this.nodes.forEach((n) => {
      n.x += n.vx * e, n.y += n.vy * e, n.vx *= 0.99, n.vy *= 0.99, n.energy = Math.max(0, n.energy - t), (n.x < 0 || n.x > this.area.w) && (n.vx *= -1), (n.y < 0 || n.y > this.area.h) && (n.vy *= -1), n.x = Math.max(0, Math.min(this.area.w, n.x)), n.y = Math.max(0, Math.min(this.area.h, n.y));
    }), this.pulses = this.pulses.map((n) => ({ ...n, life: n.life - 0.01 })).filter((n) => n.life > 0), this.frame % 3 === 0 && this.emit();
  }
}
const Fp = (i = {}) => {
  const e = _n(null), [t, n] = mo(null);
  return Ai(() => {
    e.current = new _p(i);
    const s = e.current, a = s.subscribe(n);
    return s.start(), () => {
      a(), s.stop();
    };
  }, [i.density, i.speed, i.interactive, i.decay]), Zs(
    () => ({
      addPulse: (s) => e.current?.pulse(s),
      disperse: () => e.current?.disperse(),
      setInteractive: (s) => e.current?.setInteractive(s),
      snapshot: t
    }),
    [t]
  );
}, Op = ({ preset: i = "mission-control", followMouse: e = !0, reactToTyping: t = !0, reactToClick: n = !0 } = {}) => Zs(
  () => ({
    preset: i,
    followMouse: e,
    reactToTyping: t,
    reactToClick: n,
    config: la(i)
  }),
  [i, e, t, n]
), Bp = () => {
  const i = _n(null);
  return Ai(() => {
    const e = i.current;
    if (!e) return;
    const t = e.getContext("2d");
    if (!t) return;
    const n = () => {
      e.width = window.innerWidth, e.height = window.innerHeight;
    };
    n();
    const r = Array.from({ length: 90 }, () => ({
      x: Math.random() * e.width,
      y: Math.random() * e.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35
    })), s = () => {
      t.clearRect(0, 0, e.width, e.height), t.globalCompositeOperation = "lighter";
      for (let a = 0; a < r.length; a++)
        for (let o = a + 1; o < r.length; o++) {
          const l = r[a], c = r[o], h = l.x - c.x, f = l.y - c.y, p = Math.sqrt(h * h + f * f);
          if (p < 140) {
            const m = 1 - p / 140;
            t.strokeStyle = `rgba(0,255,255,${m * 0.18})`, t.beginPath(), t.moveTo(l.x, l.y), t.lineTo(c.x, c.y), t.stroke();
          }
        }
      r.forEach((a) => {
        a.x += a.vx, a.y += a.vy, (a.x < 0 || a.x > e.width) && (a.vx *= -1), (a.y < 0 || a.y > e.height) && (a.vy *= -1);
        const o = 1.4, l = t.createRadialGradient(a.x, a.y, 0, a.x, a.y, o * 6);
        l.addColorStop(0, "rgba(0,255,255,0.9)"), l.addColorStop(1, "rgba(0,255,255,0)"), t.fillStyle = l, t.beginPath(), t.arc(a.x, a.y, o, 0, Math.PI * 2), t.fill();
      }), requestAnimationFrame(s);
    };
    return window.addEventListener("resize", n), s(), () => window.removeEventListener("resize", n);
  }, []), /* @__PURE__ */ Me.jsx("canvas", { ref: i, className: "fixed inset-0 -z-10 opacity-40 pointer-events-none" });
}, zp = (i = {}) => {
  const { strong: e, pulse: t } = i;
  return Zs(
    () => ({
      glowClass: `${e ? "shadow-glow-strong" : "shadow-glow"} ${t ? "animate-pulse-glow" : ""}`.trim()
    }),
    [e, t]
  );
}, Hp = () => {
  const [i, e] = mo(!1), t = {
    onMouseEnter: ua(() => e(!0), []),
    onMouseLeave: ua(() => e(!1), [])
  };
  return { hovered: i, bind: t };
}, Gp = ({ keys: i, onPulse: e } = {}) => {
  Ai(() => {
    const t = (n) => {
      i && !i.includes(n.key) || e?.(n.key);
    };
    return window.addEventListener("keydown", t), () => window.removeEventListener("keydown", t);
  }, [i, e]);
};
export {
  Rp as NeoBadge,
  go as NeoButton,
  wp as NeoCard,
  Dp as NeoGrid,
  il as NeoInput,
  Np as NeoLayout,
  Pp as NeoModal,
  Cp as NeoPanel,
  Up as NeoTable,
  Lp as NeoTabs,
  Ip as NeoToast,
  Bp as NeuralBackground,
  _p as NeuralEngine,
  mp as NeuralEngine3D,
  gp as NeuralGrid,
  Ap as animations,
  Sp as colors,
  At as cx,
  la as getPreset,
  Ep as glow,
  po as neuralPresets,
  Tp as radius,
  bp as shadows,
  yp as spacing,
  zp as useGlow,
  Hp as useHover,
  Gp as useKeyboardPulse,
  Op as useNeuralGrid,
  Fp as useNeuralSystem
};
//# sourceMappingURL=index.js.map
