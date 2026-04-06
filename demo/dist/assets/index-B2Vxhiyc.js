(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function r(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function i(o){if(o.ep)return;o.ep=!0;const u=r(o);fetch(o.href,u)}})();function km(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var xc={exports:{}},As={},yc={exports:{}},at={};var wp;function n_(){if(wp)return at;wp=1;var a=Symbol.for("react.element"),e=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.iterator;function x(N){return N===null||typeof N!="object"?null:(N=y&&N[y]||N["@@iterator"],typeof N=="function"?N:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,A={};function g(N,Y,be){this.props=N,this.context=Y,this.refs=A,this.updater=be||S}g.prototype.isReactComponent={},g.prototype.setState=function(N,Y){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,Y,"setState")},g.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function _(){}_.prototype=g.prototype;function D(N,Y,be){this.props=N,this.context=Y,this.refs=A,this.updater=be||S}var b=D.prototype=new _;b.constructor=D,w(b,g.prototype),b.isPureReactComponent=!0;var U=Array.isArray,te=Object.prototype.hasOwnProperty,B={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function q(N,Y,be){var K,le={},ge=null,Se=null;if(Y!=null)for(K in Y.ref!==void 0&&(Se=Y.ref),Y.key!==void 0&&(ge=""+Y.key),Y)te.call(Y,K)&&!I.hasOwnProperty(K)&&(le[K]=Y[K]);var Pe=arguments.length-2;if(Pe===1)le.children=be;else if(1<Pe){for(var Le=Array(Pe),Je=0;Je<Pe;Je++)Le[Je]=arguments[Je+2];le.children=Le}if(N&&N.defaultProps)for(K in Pe=N.defaultProps,Pe)le[K]===void 0&&(le[K]=Pe[K]);return{$$typeof:a,type:N,key:ge,ref:Se,props:le,_owner:B.current}}function _e(N,Y){return{$$typeof:a,type:N.type,key:Y,ref:N.ref,props:N.props,_owner:N._owner}}function E(N){return typeof N=="object"&&N!==null&&N.$$typeof===a}function C(N){var Y={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(be){return Y[be]})}var re=/\/+/g;function ne(N,Y){return typeof N=="object"&&N!==null&&N.key!=null?C(""+N.key):Y.toString(36)}function ae(N,Y,be,K,le){var ge=typeof N;(ge==="undefined"||ge==="boolean")&&(N=null);var Se=!1;if(N===null)Se=!0;else switch(ge){case"string":case"number":Se=!0;break;case"object":switch(N.$$typeof){case a:case e:Se=!0}}if(Se)return Se=N,le=le(Se),N=K===""?"."+ne(Se,0):K,U(le)?(be="",N!=null&&(be=N.replace(re,"$&/")+"/"),ae(le,Y,be,"",function(Je){return Je})):le!=null&&(E(le)&&(le=_e(le,be+(!le.key||Se&&Se.key===le.key?"":(""+le.key).replace(re,"$&/")+"/")+N)),Y.push(le)),1;if(Se=0,K=K===""?".":K+":",U(N))for(var Pe=0;Pe<N.length;Pe++){ge=N[Pe];var Le=K+ne(ge,Pe);Se+=ae(ge,Y,be,Le,le)}else if(Le=x(N),typeof Le=="function")for(N=Le.call(N),Pe=0;!(ge=N.next()).done;)ge=ge.value,Le=K+ne(ge,Pe++),Se+=ae(ge,Y,be,Le,le);else if(ge==="object")throw Y=String(N),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.");return Se}function pe(N,Y,be){if(N==null)return N;var K=[],le=0;return ae(N,K,"","",function(ge){return Y.call(be,ge,le++)}),K}function ee(N){if(N._status===-1){var Y=N._result;Y=Y(),Y.then(function(be){(N._status===0||N._status===-1)&&(N._status=1,N._result=be)},function(be){(N._status===0||N._status===-1)&&(N._status=2,N._result=be)}),N._status===-1&&(N._status=0,N._result=Y)}if(N._status===1)return N._result.default;throw N._result}var ce={current:null},z={transition:null},oe={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:z,ReactCurrentOwner:B};function se(){throw Error("act(...) is not supported in production builds of React.")}return at.Children={map:pe,forEach:function(N,Y,be){pe(N,function(){Y.apply(this,arguments)},be)},count:function(N){var Y=0;return pe(N,function(){Y++}),Y},toArray:function(N){return pe(N,function(Y){return Y})||[]},only:function(N){if(!E(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},at.Component=g,at.Fragment=r,at.Profiler=o,at.PureComponent=D,at.StrictMode=i,at.Suspense=f,at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,at.act=se,at.cloneElement=function(N,Y,be){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var K=w({},N.props),le=N.key,ge=N.ref,Se=N._owner;if(Y!=null){if(Y.ref!==void 0&&(ge=Y.ref,Se=B.current),Y.key!==void 0&&(le=""+Y.key),N.type&&N.type.defaultProps)var Pe=N.type.defaultProps;for(Le in Y)te.call(Y,Le)&&!I.hasOwnProperty(Le)&&(K[Le]=Y[Le]===void 0&&Pe!==void 0?Pe[Le]:Y[Le])}var Le=arguments.length-2;if(Le===1)K.children=be;else if(1<Le){Pe=Array(Le);for(var Je=0;Je<Le;Je++)Pe[Je]=arguments[Je+2];K.children=Pe}return{$$typeof:a,type:N.type,key:le,ref:ge,props:K,_owner:Se}},at.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:u,_context:N},N.Consumer=N},at.createElement=q,at.createFactory=function(N){var Y=q.bind(null,N);return Y.type=N,Y},at.createRef=function(){return{current:null}},at.forwardRef=function(N){return{$$typeof:d,render:N}},at.isValidElement=E,at.lazy=function(N){return{$$typeof:v,_payload:{_status:-1,_result:N},_init:ee}},at.memo=function(N,Y){return{$$typeof:m,type:N,compare:Y===void 0?null:Y}},at.startTransition=function(N){var Y=z.transition;z.transition={};try{N()}finally{z.transition=Y}},at.unstable_act=se,at.useCallback=function(N,Y){return ce.current.useCallback(N,Y)},at.useContext=function(N){return ce.current.useContext(N)},at.useDebugValue=function(){},at.useDeferredValue=function(N){return ce.current.useDeferredValue(N)},at.useEffect=function(N,Y){return ce.current.useEffect(N,Y)},at.useId=function(){return ce.current.useId()},at.useImperativeHandle=function(N,Y,be){return ce.current.useImperativeHandle(N,Y,be)},at.useInsertionEffect=function(N,Y){return ce.current.useInsertionEffect(N,Y)},at.useLayoutEffect=function(N,Y){return ce.current.useLayoutEffect(N,Y)},at.useMemo=function(N,Y){return ce.current.useMemo(N,Y)},at.useReducer=function(N,Y,be){return ce.current.useReducer(N,Y,be)},at.useRef=function(N){return ce.current.useRef(N)},at.useState=function(N){return ce.current.useState(N)},at.useSyncExternalStore=function(N,Y,be){return ce.current.useSyncExternalStore(N,Y,be)},at.useTransition=function(){return ce.current.useTransition()},at.version="18.3.1",at}var Ap;function Wd(){return Ap||(Ap=1,yc.exports=n_()),yc.exports}var Rp;function i_(){if(Rp)return As;Rp=1;var a=Wd(),e=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(d,f,m){var v,y={},x=null,S=null;m!==void 0&&(x=""+m),f.key!==void 0&&(x=""+f.key),f.ref!==void 0&&(S=f.ref);for(v in f)i.call(f,v)&&!u.hasOwnProperty(v)&&(y[v]=f[v]);if(d&&d.defaultProps)for(v in f=d.defaultProps,f)y[v]===void 0&&(y[v]=f[v]);return{$$typeof:e,type:d,key:x,ref:S,props:y,_owner:o.current}}return As.Fragment=r,As.jsx=h,As.jsxs=h,As}var Cp;function a_(){return Cp||(Cp=1,xc.exports=i_()),xc.exports}var ht=a_(),hi=Wd();const jd=km(hi);var qo={},Sc={exports:{}},yr={},Mc={exports:{}},Ec={};var bp;function s_(){return bp||(bp=1,(function(a){function e(z,oe){var se=z.length;z.push(oe);e:for(;0<se;){var N=se-1>>>1,Y=z[N];if(0<o(Y,oe))z[N]=oe,z[se]=Y,se=N;else break e}}function r(z){return z.length===0?null:z[0]}function i(z){if(z.length===0)return null;var oe=z[0],se=z.pop();if(se!==oe){z[0]=se;e:for(var N=0,Y=z.length,be=Y>>>1;N<be;){var K=2*(N+1)-1,le=z[K],ge=K+1,Se=z[ge];if(0>o(le,se))ge<Y&&0>o(Se,le)?(z[N]=Se,z[ge]=se,N=ge):(z[N]=le,z[K]=se,N=K);else if(ge<Y&&0>o(Se,se))z[N]=Se,z[ge]=se,N=ge;else break e}}return oe}function o(z,oe){var se=z.sortIndex-oe.sortIndex;return se!==0?se:z.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;a.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();a.unstable_now=function(){return h.now()-d}}var f=[],m=[],v=1,y=null,x=3,S=!1,w=!1,A=!1,g=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(z){for(var oe=r(m);oe!==null;){if(oe.callback===null)i(m);else if(oe.startTime<=z)i(m),oe.sortIndex=oe.expirationTime,e(f,oe);else break;oe=r(m)}}function U(z){if(A=!1,b(z),!w)if(r(f)!==null)w=!0,ee(te);else{var oe=r(m);oe!==null&&ce(U,oe.startTime-z)}}function te(z,oe){w=!1,A&&(A=!1,_(q),q=-1),S=!0;var se=x;try{for(b(oe),y=r(f);y!==null&&(!(y.expirationTime>oe)||z&&!C());){var N=y.callback;if(typeof N=="function"){y.callback=null,x=y.priorityLevel;var Y=N(y.expirationTime<=oe);oe=a.unstable_now(),typeof Y=="function"?y.callback=Y:y===r(f)&&i(f),b(oe)}else i(f);y=r(f)}if(y!==null)var be=!0;else{var K=r(m);K!==null&&ce(U,K.startTime-oe),be=!1}return be}finally{y=null,x=se,S=!1}}var B=!1,I=null,q=-1,_e=5,E=-1;function C(){return!(a.unstable_now()-E<_e)}function re(){if(I!==null){var z=a.unstable_now();E=z;var oe=!0;try{oe=I(!0,z)}finally{oe?ne():(B=!1,I=null)}}else B=!1}var ne;if(typeof D=="function")ne=function(){D(re)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,pe=ae.port2;ae.port1.onmessage=re,ne=function(){pe.postMessage(null)}}else ne=function(){g(re,0)};function ee(z){I=z,B||(B=!0,ne())}function ce(z,oe){q=g(function(){z(a.unstable_now())},oe)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(z){z.callback=null},a.unstable_continueExecution=function(){w||S||(w=!0,ee(te))},a.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_e=0<z?Math.floor(1e3/z):5},a.unstable_getCurrentPriorityLevel=function(){return x},a.unstable_getFirstCallbackNode=function(){return r(f)},a.unstable_next=function(z){switch(x){case 1:case 2:case 3:var oe=3;break;default:oe=x}var se=x;x=oe;try{return z()}finally{x=se}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(z,oe){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var se=x;x=z;try{return oe()}finally{x=se}},a.unstable_scheduleCallback=function(z,oe,se){var N=a.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?N+se:N):se=N,z){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=se+Y,z={id:v++,callback:oe,priorityLevel:z,startTime:se,expirationTime:Y,sortIndex:-1},se>N?(z.sortIndex=se,e(m,z),r(f)===null&&z===r(m)&&(A?(_(q),q=-1):A=!0,ce(U,se-N))):(z.sortIndex=Y,e(f,z),w||S||(w=!0,ee(te))),z},a.unstable_shouldYield=C,a.unstable_wrapCallback=function(z){var oe=x;return function(){var se=x;x=oe;try{return z.apply(this,arguments)}finally{x=se}}}})(Ec)),Ec}var Pp;function o_(){return Pp||(Pp=1,Mc.exports=s_()),Mc.exports}var Lp;function l_(){if(Lp)return yr;Lp=1;var a=Wd(),e=o_();function r(t){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+t,s=1;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function u(t,n){h(t,n),h(t+"Capture",n)}function h(t,n){for(o[t]=n,t=0;t<n.length;t++)i.add(n[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},y={};function x(t){return f.call(y,t)?!0:f.call(v,t)?!1:m.test(t)?y[t]=!0:(v[t]=!0,!1)}function S(t,n,s,l){if(s!==null&&s.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return l?!1:s!==null?!s.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,n,s,l){if(n===null||typeof n>"u"||S(t,n,s,l))return!0;if(l)return!1;if(s!==null)switch(s.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function A(t,n,s,l,c,p,M){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=s,this.propertyName=t,this.type=n,this.sanitizeURL=p,this.removeEmptyString=M}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){g[t]=new A(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var n=t[0];g[n]=new A(n,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){g[t]=new A(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){g[t]=new A(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){g[t]=new A(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){g[t]=new A(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){g[t]=new A(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){g[t]=new A(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){g[t]=new A(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function D(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var n=t.replace(_,D);g[n]=new A(n,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var n=t.replace(_,D);g[n]=new A(n,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var n=t.replace(_,D);g[n]=new A(n,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){g[t]=new A(t,1,!1,t.toLowerCase(),null,!1,!1)}),g.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){g[t]=new A(t,1,!1,t.toLowerCase(),null,!0,!0)});function b(t,n,s,l){var c=g.hasOwnProperty(n)?g[n]:null;(c!==null?c.type!==0:l||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(w(n,s,c,l)&&(s=null),l||c===null?x(n)&&(s===null?t.removeAttribute(n):t.setAttribute(n,""+s)):c.mustUseProperty?t[c.propertyName]=s===null?c.type===3?!1:"":s:(n=c.attributeName,l=c.attributeNamespace,s===null?t.removeAttribute(n):(c=c.type,s=c===3||c===4&&s===!0?"":""+s,l?t.setAttributeNS(l,n,s):t.setAttribute(n,s))))}var U=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,te=Symbol.for("react.element"),B=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),_e=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),C=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),pe=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),z=Symbol.iterator;function oe(t){return t===null||typeof t!="object"?null:(t=z&&t[z]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,N;function Y(t){if(N===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);N=n&&n[1]||""}return`
`+N+t}var be=!1;function K(t,n){if(!t||be)return"";be=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(Q){var l=Q}Reflect.construct(t,[],n)}else{try{n.call()}catch(Q){l=Q}t.call(n.prototype)}else{try{throw Error()}catch(Q){l=Q}t()}}catch(Q){if(Q&&l&&typeof Q.stack=="string"){for(var c=Q.stack.split(`
`),p=l.stack.split(`
`),M=c.length-1,L=p.length-1;1<=M&&0<=L&&c[M]!==p[L];)L--;for(;1<=M&&0<=L;M--,L--)if(c[M]!==p[L]){if(M!==1||L!==1)do if(M--,L--,0>L||c[M]!==p[L]){var O=`
`+c[M].replace(" at new "," at ");return t.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",t.displayName)),O}while(1<=M&&0<=L);break}}}finally{be=!1,Error.prepareStackTrace=s}return(t=t?t.displayName||t.name:"")?Y(t):""}function le(t){switch(t.tag){case 5:return Y(t.type);case 16:return Y("Lazy");case 13:return Y("Suspense");case 19:return Y("SuspenseList");case 0:case 2:case 15:return t=K(t.type,!1),t;case 11:return t=K(t.type.render,!1),t;case 1:return t=K(t.type,!0),t;default:return""}}function ge(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case I:return"Fragment";case B:return"Portal";case _e:return"Profiler";case q:return"StrictMode";case ne:return"Suspense";case ae:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case C:return(t.displayName||"Context")+".Consumer";case E:return(t._context.displayName||"Context")+".Provider";case re:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case pe:return n=t.displayName||null,n!==null?n:ge(t.type)||"Memo";case ee:n=t._payload,t=t._init;try{return ge(t(n))}catch{}}return null}function Se(t){var n=t.type;switch(t.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=n.render,t=t.displayName||t.name||"",n.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ge(n);case 8:return n===q?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Pe(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Le(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Je(t){var n=Le(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),l=""+t[n];if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,p=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(M){l=""+M,p.call(this,M)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function ft(t){t._valueTracker||(t._valueTracker=Je(t))}function lt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var s=n.getValue(),l="";return t&&(l=Le(t)?t.checked?"true":"false":t.value),t=l,t!==s?(n.setValue(t),!0):!1}function F(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Jt(t,n){var s=n.checked;return se({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??t._wrapperState.initialChecked})}function st(t,n){var s=n.defaultValue==null?"":n.defaultValue,l=n.checked!=null?n.checked:n.defaultChecked;s=Pe(n.value!=null?n.value:s),t._wrapperState={initialChecked:l,initialValue:s,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function ct(t,n){n=n.checked,n!=null&&b(t,"checked",n,!1)}function Ze(t,n){ct(t,n);var s=Pe(n.value),l=n.type;if(s!=null)l==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+s):t.value!==""+s&&(t.value=""+s);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}n.hasOwnProperty("value")?$e(t,n.type,s):n.hasOwnProperty("defaultValue")&&$e(t,n.type,Pe(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(t.defaultChecked=!!n.defaultChecked)}function Et(t,n,s){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var l=n.type;if(!(l!=="submit"&&l!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+t._wrapperState.initialValue,s||n===t.value||(t.value=n),t.defaultValue=n}s=t.name,s!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,s!==""&&(t.name=s)}function $e(t,n,s){(n!=="number"||F(t.ownerDocument)!==t)&&(s==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+s&&(t.defaultValue=""+s))}var P=Array.isArray;function T(t,n,s,l){if(t=t.options,n){n={};for(var c=0;c<s.length;c++)n["$"+s[c]]=!0;for(s=0;s<t.length;s++)c=n.hasOwnProperty("$"+t[s].value),t[s].selected!==c&&(t[s].selected=c),c&&l&&(t[s].defaultSelected=!0)}else{for(s=""+Pe(s),n=null,c=0;c<t.length;c++){if(t[c].value===s){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function j(t,n){if(n.dangerouslySetInnerHTML!=null)throw Error(r(91));return se({},n,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function de(t,n){var s=n.value;if(s==null){if(s=n.children,n=n.defaultValue,s!=null){if(n!=null)throw Error(r(92));if(P(s)){if(1<s.length)throw Error(r(93));s=s[0]}n=s}n==null&&(n=""),s=n}t._wrapperState={initialValue:Pe(s)}}function xe(t,n){var s=Pe(n.value),l=Pe(n.defaultValue);s!=null&&(s=""+s,s!==t.value&&(t.value=s),n.defaultValue==null&&t.defaultValue!==s&&(t.defaultValue=s)),l!=null&&(t.defaultValue=""+l)}function ue(t){var n=t.textContent;n===t._wrapperState.initialValue&&n!==""&&n!==null&&(t.value=n)}function Ge(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function we(t,n){return t==null||t==="http://www.w3.org/1999/xhtml"?Ge(n):t==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var De,ot=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,s,l,c){MSApp.execUnsafeLocalFunction(function(){return t(n,s,l,c)})}:t})(function(t,n){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=n;else{for(De=De||document.createElement("div"),De.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=De.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;n.firstChild;)t.appendChild(n.firstChild)}});function Me(t,n){if(n){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=n;return}}t.textContent=n}var Fe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},et=["Webkit","ms","Moz","O"];Object.keys(Fe).forEach(function(t){et.forEach(function(n){n=n+t.charAt(0).toUpperCase()+t.substring(1),Fe[n]=Fe[t]})});function Qe(t,n,s){return n==null||typeof n=="boolean"||n===""?"":s||typeof n!="number"||n===0||Fe.hasOwnProperty(t)&&Fe[t]?(""+n).trim():n+"px"}function ze(t,n){t=t.style;for(var s in n)if(n.hasOwnProperty(s)){var l=s.indexOf("--")===0,c=Qe(s,n[s],l);s==="float"&&(s="cssFloat"),l?t.setProperty(s,c):t[s]=c}}var ut=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rt(t,n){if(n){if(ut[t]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(r(137,t));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(r(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(r(61))}if(n.style!=null&&typeof n.style!="object")throw Error(r(62))}}function vt(t,n){if(t.indexOf("-")===-1)return typeof n.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var H=null;function Ne(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ie=null,he=null,Ae=null;function Re(t){if(t=ds(t)){if(typeof ie!="function")throw Error(r(280));var n=t.stateNode;n&&(n=lo(n),ie(t.stateNode,t.type,n))}}function St(t){he?Ae?Ae.push(t):Ae=[t]:he=t}function Dt(){if(he){var t=he,n=Ae;if(Ae=he=null,Re(t),n)for(t=0;t<n.length;t++)Re(n[t])}}function er(t,n){return t(n)}function dt(){}var Yt=!1;function Dr(t,n,s){if(Yt)return t(n,s);Yt=!0;try{return er(t,n,s)}finally{Yt=!1,(he!==null||Ae!==null)&&(dt(),Dt())}}function zn(t,n){var s=t.stateNode;if(s===null)return null;var l=lo(s);if(l===null)return null;s=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,n,typeof s));return s}var Xi=!1;if(d)try{var Ar={};Object.defineProperty(Ar,"passive",{get:function(){Xi=!0}}),window.addEventListener("test",Ar,Ar),window.removeEventListener("test",Ar,Ar)}catch{Xi=!1}function Xa(t,n,s,l,c,p,M,L,O){var Q=Array.prototype.slice.call(arguments,3);try{n.apply(s,Q)}catch(me){this.onError(me)}}var kn=!1,_i=null,hn=!1,Yi=null,qi={onError:function(t){kn=!0,_i=t}};function Gs(t,n,s,l,c,p,M,L,O){kn=!1,_i=null,Xa.apply(qi,arguments)}function Ws(t,n,s,l,c,p,M,L,O){if(Gs.apply(this,arguments),kn){if(kn){var Q=_i;kn=!1,_i=null}else throw Error(r(198));hn||(hn=!0,Yi=Q)}}function fn(t){var n=t,s=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(s=n.return),t=n.return;while(t)}return n.tag===3?s:null}function js(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function Xs(t){if(fn(t)!==t)throw Error(r(188))}function R(t){var n=t.alternate;if(!n){if(n=fn(t),n===null)throw Error(r(188));return n!==t?null:t}for(var s=t,l=n;;){var c=s.return;if(c===null)break;var p=c.alternate;if(p===null){if(l=c.return,l!==null){s=l;continue}break}if(c.child===p.child){for(p=c.child;p;){if(p===s)return Xs(c),t;if(p===l)return Xs(c),n;p=p.sibling}throw Error(r(188))}if(s.return!==l.return)s=c,l=p;else{for(var M=!1,L=c.child;L;){if(L===s){M=!0,s=c,l=p;break}if(L===l){M=!0,l=c,s=p;break}L=L.sibling}if(!M){for(L=p.child;L;){if(L===s){M=!0,s=p,l=c;break}if(L===l){M=!0,l=p,s=c;break}L=L.sibling}if(!M)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:n}function G(t){return t=R(t),t!==null?Z(t):null}function Z(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var n=Z(t);if(n!==null)return n;t=t.sibling}return null}var $=e.unstable_scheduleCallback,V=e.unstable_cancelCallback,ye=e.unstable_shouldYield,Ie=e.unstable_requestPaint,Te=e.unstable_now,We=e.unstable_getCurrentPriorityLevel,qe=e.unstable_ImmediatePriority,Ke=e.unstable_UserBlockingPriority,je=e.unstable_NormalPriority,_t=e.unstable_LowPriority,wt=e.unstable_IdlePriority,At=null,xt=null;function Rt(t){if(xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(At,t,void 0,(t.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:Rr,tr=Math.log,pn=Math.LN2;function Rr(t){return t>>>=0,t===0?32:31-(tr(t)/pn|0)|0}var Gr=64,qt=4194304;function mn(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ct(t,n){var s=t.pendingLanes;if(s===0)return 0;var l=0,c=t.suspendedLanes,p=t.pingedLanes,M=s&268435455;if(M!==0){var L=M&~c;L!==0?l=mn(L):(p&=M,p!==0&&(l=mn(p)))}else M=s&~c,M!==0?l=mn(M):p!==0&&(l=mn(p));if(l===0)return 0;if(n!==0&&n!==l&&(n&c)===0&&(c=l&-l,p=n&-n,c>=p||c===16&&(p&4194240)!==0))return n;if((l&4)!==0&&(l|=s&16),n=t.entangledLanes,n!==0)for(t=t.entanglements,n&=l;0<n;)s=31-Oe(n),c=1<<s,l|=t[s],n&=~c;return l}function an(t,n){switch(t){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ya(t,n){for(var s=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,p=t.pendingLanes;0<p;){var M=31-Oe(p),L=1<<M,O=c[M];O===-1?((L&s)===0||(L&l)!==0)&&(c[M]=an(L,n)):O<=n&&(t.expiredLanes|=L),p&=~L}}function ir(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ki(){var t=Gr;return Gr<<=1,(Gr&4194240)===0&&(Gr=64),t}function qa(t){for(var n=[],s=0;31>s;s++)n.push(t);return n}function Bn(t,n,s){t.pendingLanes|=n,n!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,n=31-Oe(n),t[n]=s}function Tg(t,n){var s=t.pendingLanes&~n;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=n,t.mutableReadLanes&=n,t.entangledLanes&=n,n=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<s;){var c=31-Oe(s),p=1<<c;n[c]=0,l[c]=-1,t[c]=-1,s&=~p}}function Vl(t,n){var s=t.entangledLanes|=n;for(t=t.entanglements;s;){var l=31-Oe(s),c=1<<l;c&n|t[l]&n&&(t[l]|=n),s&=~c}}var Mt=0;function rh(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var nh,Gl,ih,ah,sh,Wl=!1,Ys=[],Hn=null,Vn=null,Gn=null,Ka=new Map,Za=new Map,Wn=[],wg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function oh(t,n){switch(t){case"focusin":case"focusout":Hn=null;break;case"dragenter":case"dragleave":Vn=null;break;case"mouseover":case"mouseout":Gn=null;break;case"pointerover":case"pointerout":Ka.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Za.delete(n.pointerId)}}function $a(t,n,s,l,c,p){return t===null||t.nativeEvent!==p?(t={blockedOn:n,domEventName:s,eventSystemFlags:l,nativeEvent:p,targetContainers:[c]},n!==null&&(n=ds(n),n!==null&&Gl(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function Ag(t,n,s,l,c){switch(n){case"focusin":return Hn=$a(Hn,t,n,s,l,c),!0;case"dragenter":return Vn=$a(Vn,t,n,s,l,c),!0;case"mouseover":return Gn=$a(Gn,t,n,s,l,c),!0;case"pointerover":var p=c.pointerId;return Ka.set(p,$a(Ka.get(p)||null,t,n,s,l,c)),!0;case"gotpointercapture":return p=c.pointerId,Za.set(p,$a(Za.get(p)||null,t,n,s,l,c)),!0}return!1}function lh(t){var n=xi(t.target);if(n!==null){var s=fn(n);if(s!==null){if(n=s.tag,n===13){if(n=js(s),n!==null){t.blockedOn=n,sh(t.priority,function(){ih(s)});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qs(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var s=Xl(t.domEventName,t.eventSystemFlags,n[0],t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);H=l,s.target.dispatchEvent(l),H=null}else return n=ds(s),n!==null&&Gl(n),t.blockedOn=s,!1;n.shift()}return!0}function uh(t,n,s){qs(t)&&s.delete(n)}function Rg(){Wl=!1,Hn!==null&&qs(Hn)&&(Hn=null),Vn!==null&&qs(Vn)&&(Vn=null),Gn!==null&&qs(Gn)&&(Gn=null),Ka.forEach(uh),Za.forEach(uh)}function Qa(t,n){t.blockedOn===n&&(t.blockedOn=null,Wl||(Wl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Rg)))}function Ja(t){function n(c){return Qa(c,t)}if(0<Ys.length){Qa(Ys[0],t);for(var s=1;s<Ys.length;s++){var l=Ys[s];l.blockedOn===t&&(l.blockedOn=null)}}for(Hn!==null&&Qa(Hn,t),Vn!==null&&Qa(Vn,t),Gn!==null&&Qa(Gn,t),Ka.forEach(n),Za.forEach(n),s=0;s<Wn.length;s++)l=Wn[s],l.blockedOn===t&&(l.blockedOn=null);for(;0<Wn.length&&(s=Wn[0],s.blockedOn===null);)lh(s),s.blockedOn===null&&Wn.shift()}var Zi=U.ReactCurrentBatchConfig,Ks=!0;function Cg(t,n,s,l){var c=Mt,p=Zi.transition;Zi.transition=null;try{Mt=1,jl(t,n,s,l)}finally{Mt=c,Zi.transition=p}}function bg(t,n,s,l){var c=Mt,p=Zi.transition;Zi.transition=null;try{Mt=4,jl(t,n,s,l)}finally{Mt=c,Zi.transition=p}}function jl(t,n,s,l){if(Ks){var c=Xl(t,n,s,l);if(c===null)uu(t,n,l,Zs,s),oh(t,l);else if(Ag(c,t,n,s,l))l.stopPropagation();else if(oh(t,l),n&4&&-1<wg.indexOf(t)){for(;c!==null;){var p=ds(c);if(p!==null&&nh(p),p=Xl(t,n,s,l),p===null&&uu(t,n,l,Zs,s),p===c)break;c=p}c!==null&&l.stopPropagation()}else uu(t,n,l,null,s)}}var Zs=null;function Xl(t,n,s,l){if(Zs=null,t=Ne(l),t=xi(t),t!==null)if(n=fn(t),n===null)t=null;else if(s=n.tag,s===13){if(t=js(n),t!==null)return t;t=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null);return Zs=t,null}function ch(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(We()){case qe:return 1;case Ke:return 4;case je:case _t:return 16;case wt:return 536870912;default:return 16}default:return 16}}var jn=null,Yl=null,$s=null;function dh(){if($s)return $s;var t,n=Yl,s=n.length,l,c="value"in jn?jn.value:jn.textContent,p=c.length;for(t=0;t<s&&n[t]===c[t];t++);var M=s-t;for(l=1;l<=M&&n[s-l]===c[p-l];l++);return $s=c.slice(t,1<l?1-l:void 0)}function Qs(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Js(){return!0}function hh(){return!1}function Cr(t){function n(s,l,c,p,M){this._reactName=s,this._targetInst=c,this.type=l,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var L in t)t.hasOwnProperty(L)&&(s=t[L],this[L]=s?s(p):p[L]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Js:hh,this.isPropagationStopped=hh,this}return se(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Js)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Js)},persist:function(){},isPersistent:Js}),n}var $i={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ql=Cr($i),es=se({},$i,{view:0,detail:0}),Pg=Cr(es),Kl,Zl,ts,eo=se({},es,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ql,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ts&&(ts&&t.type==="mousemove"?(Kl=t.screenX-ts.screenX,Zl=t.screenY-ts.screenY):Zl=Kl=0,ts=t),Kl)},movementY:function(t){return"movementY"in t?t.movementY:Zl}}),fh=Cr(eo),Lg=se({},eo,{dataTransfer:0}),Ng=Cr(Lg),Ug=se({},es,{relatedTarget:0}),$l=Cr(Ug),Dg=se({},$i,{animationName:0,elapsedTime:0,pseudoElement:0}),Ig=Cr(Dg),Og=se({},$i,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Fg=Cr(Og),zg=se({},$i,{data:0}),ph=Cr(zg),kg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vg(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Hg[t])?!!n[t]:!1}function Ql(){return Vg}var Gg=se({},es,{key:function(t){if(t.key){var n=kg[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Qs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Bg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ql,charCode:function(t){return t.type==="keypress"?Qs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Wg=Cr(Gg),jg=se({},eo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mh=Cr(jg),Xg=se({},es,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ql}),Yg=Cr(Xg),qg=se({},$i,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kg=Cr(qg),Zg=se({},eo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$g=Cr(Zg),Qg=[9,13,27,32],Jl=d&&"CompositionEvent"in window,rs=null;d&&"documentMode"in document&&(rs=document.documentMode);var Jg=d&&"TextEvent"in window&&!rs,gh=d&&(!Jl||rs&&8<rs&&11>=rs),vh=" ",_h=!1;function xh(t,n){switch(t){case"keyup":return Qg.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qi=!1;function ev(t,n){switch(t){case"compositionend":return yh(n);case"keypress":return n.which!==32?null:(_h=!0,vh);case"textInput":return t=n.data,t===vh&&_h?null:t;default:return null}}function tv(t,n){if(Qi)return t==="compositionend"||!Jl&&xh(t,n)?(t=dh(),$s=Yl=jn=null,Qi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return gh&&n.locale!=="ko"?null:n.data;default:return null}}var rv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sh(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!rv[t.type]:n==="textarea"}function Mh(t,n,s,l){St(l),n=ao(n,"onChange"),0<n.length&&(s=new ql("onChange","change",null,s,l),t.push({event:s,listeners:n}))}var ns=null,is=null;function nv(t){Bh(t,0)}function to(t){var n=na(t);if(lt(n))return t}function iv(t,n){if(t==="change")return n}var Eh=!1;if(d){var eu;if(d){var tu="oninput"in document;if(!tu){var Th=document.createElement("div");Th.setAttribute("oninput","return;"),tu=typeof Th.oninput=="function"}eu=tu}else eu=!1;Eh=eu&&(!document.documentMode||9<document.documentMode)}function wh(){ns&&(ns.detachEvent("onpropertychange",Ah),is=ns=null)}function Ah(t){if(t.propertyName==="value"&&to(is)){var n=[];Mh(n,is,t,Ne(t)),Dr(nv,n)}}function av(t,n,s){t==="focusin"?(wh(),ns=n,is=s,ns.attachEvent("onpropertychange",Ah)):t==="focusout"&&wh()}function sv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return to(is)}function ov(t,n){if(t==="click")return to(n)}function lv(t,n){if(t==="input"||t==="change")return to(n)}function uv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Wr=typeof Object.is=="function"?Object.is:uv;function as(t,n){if(Wr(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var s=Object.keys(t),l=Object.keys(n);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var c=s[l];if(!f.call(n,c)||!Wr(t[c],n[c]))return!1}return!0}function Rh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ch(t,n){var s=Rh(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=n&&l>=n)return{node:s,offset:n-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Rh(s)}}function bh(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?bh(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Ph(){for(var t=window,n=F();n instanceof t.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)t=n.contentWindow;else break;n=F(t.document)}return n}function ru(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function cv(t){var n=Ph(),s=t.focusedElem,l=t.selectionRange;if(n!==s&&s&&s.ownerDocument&&bh(s.ownerDocument.documentElement,s)){if(l!==null&&ru(s)){if(n=l.start,t=l.end,t===void 0&&(t=n),"selectionStart"in s)s.selectionStart=n,s.selectionEnd=Math.min(t,s.value.length);else if(t=(n=s.ownerDocument||document)&&n.defaultView||window,t.getSelection){t=t.getSelection();var c=s.textContent.length,p=Math.min(l.start,c);l=l.end===void 0?p:Math.min(l.end,c),!t.extend&&p>l&&(c=l,l=p,p=c),c=Ch(s,p);var M=Ch(s,l);c&&M&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(n=n.createRange(),n.setStart(c.node,c.offset),t.removeAllRanges(),p>l?(t.addRange(n),t.extend(M.node,M.offset)):(n.setEnd(M.node,M.offset),t.addRange(n)))}}for(n=[],t=s;t=t.parentNode;)t.nodeType===1&&n.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<n.length;s++)t=n[s],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var dv=d&&"documentMode"in document&&11>=document.documentMode,Ji=null,nu=null,ss=null,iu=!1;function Lh(t,n,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;iu||Ji==null||Ji!==F(l)||(l=Ji,"selectionStart"in l&&ru(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ss&&as(ss,l)||(ss=l,l=ao(nu,"onSelect"),0<l.length&&(n=new ql("onSelect","select",null,n,s),t.push({event:n,listeners:l}),n.target=Ji)))}function ro(t,n){var s={};return s[t.toLowerCase()]=n.toLowerCase(),s["Webkit"+t]="webkit"+n,s["Moz"+t]="moz"+n,s}var ea={animationend:ro("Animation","AnimationEnd"),animationiteration:ro("Animation","AnimationIteration"),animationstart:ro("Animation","AnimationStart"),transitionend:ro("Transition","TransitionEnd")},au={},Nh={};d&&(Nh=document.createElement("div").style,"AnimationEvent"in window||(delete ea.animationend.animation,delete ea.animationiteration.animation,delete ea.animationstart.animation),"TransitionEvent"in window||delete ea.transitionend.transition);function no(t){if(au[t])return au[t];if(!ea[t])return t;var n=ea[t],s;for(s in n)if(n.hasOwnProperty(s)&&s in Nh)return au[t]=n[s];return t}var Uh=no("animationend"),Dh=no("animationiteration"),Ih=no("animationstart"),Oh=no("transitionend"),Fh=new Map,zh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xn(t,n){Fh.set(t,n),u(n,[t])}for(var su=0;su<zh.length;su++){var ou=zh[su],hv=ou.toLowerCase(),fv=ou[0].toUpperCase()+ou.slice(1);Xn(hv,"on"+fv)}Xn(Uh,"onAnimationEnd"),Xn(Dh,"onAnimationIteration"),Xn(Ih,"onAnimationStart"),Xn("dblclick","onDoubleClick"),Xn("focusin","onFocus"),Xn("focusout","onBlur"),Xn(Oh,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var os="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pv=new Set("cancel close invalid load scroll toggle".split(" ").concat(os));function kh(t,n,s){var l=t.type||"unknown-event";t.currentTarget=s,Ws(l,n,void 0,t),t.currentTarget=null}function Bh(t,n){n=(n&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],c=l.event;l=l.listeners;e:{var p=void 0;if(n)for(var M=l.length-1;0<=M;M--){var L=l[M],O=L.instance,Q=L.currentTarget;if(L=L.listener,O!==p&&c.isPropagationStopped())break e;kh(c,L,Q),p=O}else for(M=0;M<l.length;M++){if(L=l[M],O=L.instance,Q=L.currentTarget,L=L.listener,O!==p&&c.isPropagationStopped())break e;kh(c,L,Q),p=O}}}if(hn)throw t=Yi,hn=!1,Yi=null,t}function Pt(t,n){var s=n[mu];s===void 0&&(s=n[mu]=new Set);var l=t+"__bubble";s.has(l)||(Hh(n,t,2,!1),s.add(l))}function lu(t,n,s){var l=0;n&&(l|=4),Hh(s,t,l,n)}var io="_reactListening"+Math.random().toString(36).slice(2);function ls(t){if(!t[io]){t[io]=!0,i.forEach(function(s){s!=="selectionchange"&&(pv.has(s)||lu(s,!1,t),lu(s,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[io]||(n[io]=!0,lu("selectionchange",!1,n))}}function Hh(t,n,s,l){switch(ch(n)){case 1:var c=Cg;break;case 4:c=bg;break;default:c=jl}s=c.bind(null,n,s,t),c=void 0,!Xi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(n,s,{capture:!0,passive:c}):t.addEventListener(n,s,!0):c!==void 0?t.addEventListener(n,s,{passive:c}):t.addEventListener(n,s,!1)}function uu(t,n,s,l,c){var p=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var L=l.stateNode.containerInfo;if(L===c||L.nodeType===8&&L.parentNode===c)break;if(M===4)for(M=l.return;M!==null;){var O=M.tag;if((O===3||O===4)&&(O=M.stateNode.containerInfo,O===c||O.nodeType===8&&O.parentNode===c))return;M=M.return}for(;L!==null;){if(M=xi(L),M===null)return;if(O=M.tag,O===5||O===6){l=p=M;continue e}L=L.parentNode}}l=l.return}Dr(function(){var Q=p,me=Ne(s),ve=[];e:{var fe=Fh.get(t);if(fe!==void 0){var Ue=ql,Be=t;switch(t){case"keypress":if(Qs(s)===0)break e;case"keydown":case"keyup":Ue=Wg;break;case"focusin":Be="focus",Ue=$l;break;case"focusout":Be="blur",Ue=$l;break;case"beforeblur":case"afterblur":Ue=$l;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=fh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=Ng;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=Yg;break;case Uh:case Dh:case Ih:Ue=Ig;break;case Oh:Ue=Kg;break;case"scroll":Ue=Pg;break;case"wheel":Ue=$g;break;case"copy":case"cut":case"paste":Ue=Fg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=mh}var He=(n&4)!==0,kt=!He&&t==="scroll",W=He?fe!==null?fe+"Capture":null:fe;He=[];for(var k=Q,X;k!==null;){X=k;var Ee=X.stateNode;if(X.tag===5&&Ee!==null&&(X=Ee,W!==null&&(Ee=zn(k,W),Ee!=null&&He.push(us(k,Ee,X)))),kt)break;k=k.return}0<He.length&&(fe=new Ue(fe,Be,null,s,me),ve.push({event:fe,listeners:He}))}}if((n&7)===0){e:{if(fe=t==="mouseover"||t==="pointerover",Ue=t==="mouseout"||t==="pointerout",fe&&s!==H&&(Be=s.relatedTarget||s.fromElement)&&(xi(Be)||Be[gn]))break e;if((Ue||fe)&&(fe=me.window===me?me:(fe=me.ownerDocument)?fe.defaultView||fe.parentWindow:window,Ue?(Be=s.relatedTarget||s.toElement,Ue=Q,Be=Be?xi(Be):null,Be!==null&&(kt=fn(Be),Be!==kt||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(Ue=null,Be=Q),Ue!==Be)){if(He=fh,Ee="onMouseLeave",W="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(He=mh,Ee="onPointerLeave",W="onPointerEnter",k="pointer"),kt=Ue==null?fe:na(Ue),X=Be==null?fe:na(Be),fe=new He(Ee,k+"leave",Ue,s,me),fe.target=kt,fe.relatedTarget=X,Ee=null,xi(me)===Q&&(He=new He(W,k+"enter",Be,s,me),He.target=X,He.relatedTarget=kt,Ee=He),kt=Ee,Ue&&Be)t:{for(He=Ue,W=Be,k=0,X=He;X;X=ta(X))k++;for(X=0,Ee=W;Ee;Ee=ta(Ee))X++;for(;0<k-X;)He=ta(He),k--;for(;0<X-k;)W=ta(W),X--;for(;k--;){if(He===W||W!==null&&He===W.alternate)break t;He=ta(He),W=ta(W)}He=null}else He=null;Ue!==null&&Vh(ve,fe,Ue,He,!1),Be!==null&&kt!==null&&Vh(ve,kt,Be,He,!0)}}e:{if(fe=Q?na(Q):window,Ue=fe.nodeName&&fe.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&fe.type==="file")var Ve=iv;else if(Sh(fe))if(Eh)Ve=lv;else{Ve=sv;var Xe=av}else(Ue=fe.nodeName)&&Ue.toLowerCase()==="input"&&(fe.type==="checkbox"||fe.type==="radio")&&(Ve=ov);if(Ve&&(Ve=Ve(t,Q))){Mh(ve,Ve,s,me);break e}Xe&&Xe(t,fe,Q),t==="focusout"&&(Xe=fe._wrapperState)&&Xe.controlled&&fe.type==="number"&&$e(fe,"number",fe.value)}switch(Xe=Q?na(Q):window,t){case"focusin":(Sh(Xe)||Xe.contentEditable==="true")&&(Ji=Xe,nu=Q,ss=null);break;case"focusout":ss=nu=Ji=null;break;case"mousedown":iu=!0;break;case"contextmenu":case"mouseup":case"dragend":iu=!1,Lh(ve,s,me);break;case"selectionchange":if(dv)break;case"keydown":case"keyup":Lh(ve,s,me)}var Ye;if(Jl)e:{switch(t){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else Qi?xh(t,s)&&(tt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(tt="onCompositionStart");tt&&(gh&&s.locale!=="ko"&&(Qi||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&Qi&&(Ye=dh()):(jn=me,Yl="value"in jn?jn.value:jn.textContent,Qi=!0)),Xe=ao(Q,tt),0<Xe.length&&(tt=new ph(tt,t,null,s,me),ve.push({event:tt,listeners:Xe}),Ye?tt.data=Ye:(Ye=yh(s),Ye!==null&&(tt.data=Ye)))),(Ye=Jg?ev(t,s):tv(t,s))&&(Q=ao(Q,"onBeforeInput"),0<Q.length&&(me=new ph("onBeforeInput","beforeinput",null,s,me),ve.push({event:me,listeners:Q}),me.data=Ye))}Bh(ve,n)})}function us(t,n,s){return{instance:t,listener:n,currentTarget:s}}function ao(t,n){for(var s=n+"Capture",l=[];t!==null;){var c=t,p=c.stateNode;c.tag===5&&p!==null&&(c=p,p=zn(t,s),p!=null&&l.unshift(us(t,p,c)),p=zn(t,n),p!=null&&l.push(us(t,p,c))),t=t.return}return l}function ta(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Vh(t,n,s,l,c){for(var p=n._reactName,M=[];s!==null&&s!==l;){var L=s,O=L.alternate,Q=L.stateNode;if(O!==null&&O===l)break;L.tag===5&&Q!==null&&(L=Q,c?(O=zn(s,p),O!=null&&M.unshift(us(s,O,L))):c||(O=zn(s,p),O!=null&&M.push(us(s,O,L)))),s=s.return}M.length!==0&&t.push({event:n,listeners:M})}var mv=/\r\n?/g,gv=/\u0000|\uFFFD/g;function Gh(t){return(typeof t=="string"?t:""+t).replace(mv,`
`).replace(gv,"")}function so(t,n,s){if(n=Gh(n),Gh(t)!==n&&s)throw Error(r(425))}function oo(){}var cu=null,du=null;function hu(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var fu=typeof setTimeout=="function"?setTimeout:void 0,vv=typeof clearTimeout=="function"?clearTimeout:void 0,Wh=typeof Promise=="function"?Promise:void 0,_v=typeof queueMicrotask=="function"?queueMicrotask:typeof Wh<"u"?function(t){return Wh.resolve(null).then(t).catch(xv)}:fu;function xv(t){setTimeout(function(){throw t})}function pu(t,n){var s=n,l=0;do{var c=s.nextSibling;if(t.removeChild(s),c&&c.nodeType===8)if(s=c.data,s==="/$"){if(l===0){t.removeChild(c),Ja(n);return}l--}else s!=="$"&&s!=="$?"&&s!=="$!"||l++;s=c}while(s);Ja(n)}function Yn(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return t}function jh(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(n===0)return t;n--}else s==="/$"&&n++}t=t.previousSibling}return null}var ra=Math.random().toString(36).slice(2),sn="__reactFiber$"+ra,cs="__reactProps$"+ra,gn="__reactContainer$"+ra,mu="__reactEvents$"+ra,yv="__reactListeners$"+ra,Sv="__reactHandles$"+ra;function xi(t){var n=t[sn];if(n)return n;for(var s=t.parentNode;s;){if(n=s[gn]||s[sn]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(t=jh(t);t!==null;){if(s=t[sn])return s;t=jh(t)}return n}t=s,s=t.parentNode}return null}function ds(t){return t=t[sn]||t[gn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function na(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(r(33))}function lo(t){return t[cs]||null}var gu=[],ia=-1;function qn(t){return{current:t}}function Lt(t){0>ia||(t.current=gu[ia],gu[ia]=null,ia--)}function bt(t,n){ia++,gu[ia]=t.current,t.current=n}var Kn={},ar=qn(Kn),mr=qn(!1),yi=Kn;function aa(t,n){var s=t.type.contextTypes;if(!s)return Kn;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===n)return l.__reactInternalMemoizedMaskedChildContext;var c={},p;for(p in s)c[p]=n[p];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=n,t.__reactInternalMemoizedMaskedChildContext=c),c}function gr(t){return t=t.childContextTypes,t!=null}function uo(){Lt(mr),Lt(ar)}function Xh(t,n,s){if(ar.current!==Kn)throw Error(r(168));bt(ar,n),bt(mr,s)}function Yh(t,n,s){var l=t.stateNode;if(n=n.childContextTypes,typeof l.getChildContext!="function")return s;l=l.getChildContext();for(var c in l)if(!(c in n))throw Error(r(108,Se(t)||"Unknown",c));return se({},s,l)}function co(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Kn,yi=ar.current,bt(ar,t),bt(mr,mr.current),!0}function qh(t,n,s){var l=t.stateNode;if(!l)throw Error(r(169));s?(t=Yh(t,n,yi),l.__reactInternalMemoizedMergedChildContext=t,Lt(mr),Lt(ar),bt(ar,t)):Lt(mr),bt(mr,s)}var vn=null,ho=!1,vu=!1;function Kh(t){vn===null?vn=[t]:vn.push(t)}function Mv(t){ho=!0,Kh(t)}function Zn(){if(!vu&&vn!==null){vu=!0;var t=0,n=Mt;try{var s=vn;for(Mt=1;t<s.length;t++){var l=s[t];do l=l(!0);while(l!==null)}vn=null,ho=!1}catch(c){throw vn!==null&&(vn=vn.slice(t+1)),$(qe,Zn),c}finally{Mt=n,vu=!1}}return null}var sa=[],oa=0,fo=null,po=0,Ir=[],Or=0,Si=null,_n=1,xn="";function Mi(t,n){sa[oa++]=po,sa[oa++]=fo,fo=t,po=n}function Zh(t,n,s){Ir[Or++]=_n,Ir[Or++]=xn,Ir[Or++]=Si,Si=t;var l=_n;t=xn;var c=32-Oe(l)-1;l&=~(1<<c),s+=1;var p=32-Oe(n)+c;if(30<p){var M=c-c%5;p=(l&(1<<M)-1).toString(32),l>>=M,c-=M,_n=1<<32-Oe(n)+c|s<<c|l,xn=p+t}else _n=1<<p|s<<c|l,xn=t}function _u(t){t.return!==null&&(Mi(t,1),Zh(t,1,0))}function xu(t){for(;t===fo;)fo=sa[--oa],sa[oa]=null,po=sa[--oa],sa[oa]=null;for(;t===Si;)Si=Ir[--Or],Ir[Or]=null,xn=Ir[--Or],Ir[Or]=null,_n=Ir[--Or],Ir[Or]=null}var br=null,Pr=null,Ut=!1,jr=null;function $h(t,n){var s=Br(5,null,null,0);s.elementType="DELETED",s.stateNode=n,s.return=t,n=t.deletions,n===null?(t.deletions=[s],t.flags|=16):n.push(s)}function Qh(t,n){switch(t.tag){case 5:var s=t.type;return n=n.nodeType!==1||s.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(t.stateNode=n,br=t,Pr=Yn(n.firstChild),!0):!1;case 6:return n=t.pendingProps===""||n.nodeType!==3?null:n,n!==null?(t.stateNode=n,br=t,Pr=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(s=Si!==null?{id:_n,overflow:xn}:null,t.memoizedState={dehydrated:n,treeContext:s,retryLane:1073741824},s=Br(18,null,null,0),s.stateNode=n,s.return=t,t.child=s,br=t,Pr=null,!0):!1;default:return!1}}function yu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Su(t){if(Ut){var n=Pr;if(n){var s=n;if(!Qh(t,n)){if(yu(t))throw Error(r(418));n=Yn(s.nextSibling);var l=br;n&&Qh(t,n)?$h(l,s):(t.flags=t.flags&-4097|2,Ut=!1,br=t)}}else{if(yu(t))throw Error(r(418));t.flags=t.flags&-4097|2,Ut=!1,br=t}}}function Jh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;br=t}function mo(t){if(t!==br)return!1;if(!Ut)return Jh(t),Ut=!0,!1;var n;if((n=t.tag!==3)&&!(n=t.tag!==5)&&(n=t.type,n=n!=="head"&&n!=="body"&&!hu(t.type,t.memoizedProps)),n&&(n=Pr)){if(yu(t))throw ef(),Error(r(418));for(;n;)$h(t,n),n=Yn(n.nextSibling)}if(Jh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"){if(n===0){Pr=Yn(t.nextSibling);break e}n--}else s!=="$"&&s!=="$!"&&s!=="$?"||n++}t=t.nextSibling}Pr=null}}else Pr=br?Yn(t.stateNode.nextSibling):null;return!0}function ef(){for(var t=Pr;t;)t=Yn(t.nextSibling)}function la(){Pr=br=null,Ut=!1}function Mu(t){jr===null?jr=[t]:jr.push(t)}var Ev=U.ReactCurrentBatchConfig;function hs(t,n,s){if(t=s.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(r(309));var l=s.stateNode}if(!l)throw Error(r(147,t));var c=l,p=""+t;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===p?n.ref:(n=function(M){var L=c.refs;M===null?delete L[p]:L[p]=M},n._stringRef=p,n)}if(typeof t!="string")throw Error(r(284));if(!s._owner)throw Error(r(290,t))}return t}function go(t,n){throw t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t))}function tf(t){var n=t._init;return n(t._payload)}function rf(t){function n(W,k){if(t){var X=W.deletions;X===null?(W.deletions=[k],W.flags|=16):X.push(k)}}function s(W,k){if(!t)return null;for(;k!==null;)n(W,k),k=k.sibling;return null}function l(W,k){for(W=new Map;k!==null;)k.key!==null?W.set(k.key,k):W.set(k.index,k),k=k.sibling;return W}function c(W,k){return W=ii(W,k),W.index=0,W.sibling=null,W}function p(W,k,X){return W.index=X,t?(X=W.alternate,X!==null?(X=X.index,X<k?(W.flags|=2,k):X):(W.flags|=2,k)):(W.flags|=1048576,k)}function M(W){return t&&W.alternate===null&&(W.flags|=2),W}function L(W,k,X,Ee){return k===null||k.tag!==6?(k=fc(X,W.mode,Ee),k.return=W,k):(k=c(k,X),k.return=W,k)}function O(W,k,X,Ee){var Ve=X.type;return Ve===I?me(W,k,X.props.children,Ee,X.key):k!==null&&(k.elementType===Ve||typeof Ve=="object"&&Ve!==null&&Ve.$$typeof===ee&&tf(Ve)===k.type)?(Ee=c(k,X.props),Ee.ref=hs(W,k,X),Ee.return=W,Ee):(Ee=Bo(X.type,X.key,X.props,null,W.mode,Ee),Ee.ref=hs(W,k,X),Ee.return=W,Ee)}function Q(W,k,X,Ee){return k===null||k.tag!==4||k.stateNode.containerInfo!==X.containerInfo||k.stateNode.implementation!==X.implementation?(k=pc(X,W.mode,Ee),k.return=W,k):(k=c(k,X.children||[]),k.return=W,k)}function me(W,k,X,Ee,Ve){return k===null||k.tag!==7?(k=Pi(X,W.mode,Ee,Ve),k.return=W,k):(k=c(k,X),k.return=W,k)}function ve(W,k,X){if(typeof k=="string"&&k!==""||typeof k=="number")return k=fc(""+k,W.mode,X),k.return=W,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case te:return X=Bo(k.type,k.key,k.props,null,W.mode,X),X.ref=hs(W,null,k),X.return=W,X;case B:return k=pc(k,W.mode,X),k.return=W,k;case ee:var Ee=k._init;return ve(W,Ee(k._payload),X)}if(P(k)||oe(k))return k=Pi(k,W.mode,X,null),k.return=W,k;go(W,k)}return null}function fe(W,k,X,Ee){var Ve=k!==null?k.key:null;if(typeof X=="string"&&X!==""||typeof X=="number")return Ve!==null?null:L(W,k,""+X,Ee);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case te:return X.key===Ve?O(W,k,X,Ee):null;case B:return X.key===Ve?Q(W,k,X,Ee):null;case ee:return Ve=X._init,fe(W,k,Ve(X._payload),Ee)}if(P(X)||oe(X))return Ve!==null?null:me(W,k,X,Ee,null);go(W,X)}return null}function Ue(W,k,X,Ee,Ve){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return W=W.get(X)||null,L(k,W,""+Ee,Ve);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case te:return W=W.get(Ee.key===null?X:Ee.key)||null,O(k,W,Ee,Ve);case B:return W=W.get(Ee.key===null?X:Ee.key)||null,Q(k,W,Ee,Ve);case ee:var Xe=Ee._init;return Ue(W,k,X,Xe(Ee._payload),Ve)}if(P(Ee)||oe(Ee))return W=W.get(X)||null,me(k,W,Ee,Ve,null);go(k,Ee)}return null}function Be(W,k,X,Ee){for(var Ve=null,Xe=null,Ye=k,tt=k=0,$t=null;Ye!==null&&tt<X.length;tt++){Ye.index>tt?($t=Ye,Ye=null):$t=Ye.sibling;var mt=fe(W,Ye,X[tt],Ee);if(mt===null){Ye===null&&(Ye=$t);break}t&&Ye&&mt.alternate===null&&n(W,Ye),k=p(mt,k,tt),Xe===null?Ve=mt:Xe.sibling=mt,Xe=mt,Ye=$t}if(tt===X.length)return s(W,Ye),Ut&&Mi(W,tt),Ve;if(Ye===null){for(;tt<X.length;tt++)Ye=ve(W,X[tt],Ee),Ye!==null&&(k=p(Ye,k,tt),Xe===null?Ve=Ye:Xe.sibling=Ye,Xe=Ye);return Ut&&Mi(W,tt),Ve}for(Ye=l(W,Ye);tt<X.length;tt++)$t=Ue(Ye,W,tt,X[tt],Ee),$t!==null&&(t&&$t.alternate!==null&&Ye.delete($t.key===null?tt:$t.key),k=p($t,k,tt),Xe===null?Ve=$t:Xe.sibling=$t,Xe=$t);return t&&Ye.forEach(function(ai){return n(W,ai)}),Ut&&Mi(W,tt),Ve}function He(W,k,X,Ee){var Ve=oe(X);if(typeof Ve!="function")throw Error(r(150));if(X=Ve.call(X),X==null)throw Error(r(151));for(var Xe=Ve=null,Ye=k,tt=k=0,$t=null,mt=X.next();Ye!==null&&!mt.done;tt++,mt=X.next()){Ye.index>tt?($t=Ye,Ye=null):$t=Ye.sibling;var ai=fe(W,Ye,mt.value,Ee);if(ai===null){Ye===null&&(Ye=$t);break}t&&Ye&&ai.alternate===null&&n(W,Ye),k=p(ai,k,tt),Xe===null?Ve=ai:Xe.sibling=ai,Xe=ai,Ye=$t}if(mt.done)return s(W,Ye),Ut&&Mi(W,tt),Ve;if(Ye===null){for(;!mt.done;tt++,mt=X.next())mt=ve(W,mt.value,Ee),mt!==null&&(k=p(mt,k,tt),Xe===null?Ve=mt:Xe.sibling=mt,Xe=mt);return Ut&&Mi(W,tt),Ve}for(Ye=l(W,Ye);!mt.done;tt++,mt=X.next())mt=Ue(Ye,W,tt,mt.value,Ee),mt!==null&&(t&&mt.alternate!==null&&Ye.delete(mt.key===null?tt:mt.key),k=p(mt,k,tt),Xe===null?Ve=mt:Xe.sibling=mt,Xe=mt);return t&&Ye.forEach(function(r_){return n(W,r_)}),Ut&&Mi(W,tt),Ve}function kt(W,k,X,Ee){if(typeof X=="object"&&X!==null&&X.type===I&&X.key===null&&(X=X.props.children),typeof X=="object"&&X!==null){switch(X.$$typeof){case te:e:{for(var Ve=X.key,Xe=k;Xe!==null;){if(Xe.key===Ve){if(Ve=X.type,Ve===I){if(Xe.tag===7){s(W,Xe.sibling),k=c(Xe,X.props.children),k.return=W,W=k;break e}}else if(Xe.elementType===Ve||typeof Ve=="object"&&Ve!==null&&Ve.$$typeof===ee&&tf(Ve)===Xe.type){s(W,Xe.sibling),k=c(Xe,X.props),k.ref=hs(W,Xe,X),k.return=W,W=k;break e}s(W,Xe);break}else n(W,Xe);Xe=Xe.sibling}X.type===I?(k=Pi(X.props.children,W.mode,Ee,X.key),k.return=W,W=k):(Ee=Bo(X.type,X.key,X.props,null,W.mode,Ee),Ee.ref=hs(W,k,X),Ee.return=W,W=Ee)}return M(W);case B:e:{for(Xe=X.key;k!==null;){if(k.key===Xe)if(k.tag===4&&k.stateNode.containerInfo===X.containerInfo&&k.stateNode.implementation===X.implementation){s(W,k.sibling),k=c(k,X.children||[]),k.return=W,W=k;break e}else{s(W,k);break}else n(W,k);k=k.sibling}k=pc(X,W.mode,Ee),k.return=W,W=k}return M(W);case ee:return Xe=X._init,kt(W,k,Xe(X._payload),Ee)}if(P(X))return Be(W,k,X,Ee);if(oe(X))return He(W,k,X,Ee);go(W,X)}return typeof X=="string"&&X!==""||typeof X=="number"?(X=""+X,k!==null&&k.tag===6?(s(W,k.sibling),k=c(k,X),k.return=W,W=k):(s(W,k),k=fc(X,W.mode,Ee),k.return=W,W=k),M(W)):s(W,k)}return kt}var ua=rf(!0),nf=rf(!1),vo=qn(null),_o=null,ca=null,Eu=null;function Tu(){Eu=ca=_o=null}function wu(t){var n=vo.current;Lt(vo),t._currentValue=n}function Au(t,n,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===s)break;t=t.return}}function da(t,n){_o=t,Eu=ca=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&n)!==0&&(vr=!0),t.firstContext=null)}function Fr(t){var n=t._currentValue;if(Eu!==t)if(t={context:t,memoizedValue:n,next:null},ca===null){if(_o===null)throw Error(r(308));ca=t,_o.dependencies={lanes:0,firstContext:t}}else ca=ca.next=t;return n}var Ei=null;function Ru(t){Ei===null?Ei=[t]:Ei.push(t)}function af(t,n,s,l){var c=n.interleaved;return c===null?(s.next=s,Ru(n)):(s.next=c.next,c.next=s),n.interleaved=s,yn(t,l)}function yn(t,n){t.lanes|=n;var s=t.alternate;for(s!==null&&(s.lanes|=n),s=t,t=t.return;t!==null;)t.childLanes|=n,s=t.alternate,s!==null&&(s.childLanes|=n),s=t,t=t.return;return s.tag===3?s.stateNode:null}var $n=!1;function Cu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Sn(t,n){return{eventTime:t,lane:n,tag:0,payload:null,callback:null,next:null}}function Qn(t,n,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(pt&2)!==0){var c=l.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),l.pending=n,yn(t,s)}return c=l.interleaved,c===null?(n.next=n,Ru(l)):(n.next=c.next,c.next=n),l.interleaved=n,yn(t,s)}function xo(t,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194240)!==0)){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,Vl(t,s)}}function of(t,n){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var c=null,p=null;if(s=s.firstBaseUpdate,s!==null){do{var M={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};p===null?c=p=M:p=p.next=M,s=s.next}while(s!==null);p===null?c=p=n:p=p.next=n}else c=p=n;s={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:p,shared:l.shared,effects:l.effects},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=n:t.next=n,s.lastBaseUpdate=n}function yo(t,n,s,l){var c=t.updateQueue;$n=!1;var p=c.firstBaseUpdate,M=c.lastBaseUpdate,L=c.shared.pending;if(L!==null){c.shared.pending=null;var O=L,Q=O.next;O.next=null,M===null?p=Q:M.next=Q,M=O;var me=t.alternate;me!==null&&(me=me.updateQueue,L=me.lastBaseUpdate,L!==M&&(L===null?me.firstBaseUpdate=Q:L.next=Q,me.lastBaseUpdate=O))}if(p!==null){var ve=c.baseState;M=0,me=Q=O=null,L=p;do{var fe=L.lane,Ue=L.eventTime;if((l&fe)===fe){me!==null&&(me=me.next={eventTime:Ue,lane:0,tag:L.tag,payload:L.payload,callback:L.callback,next:null});e:{var Be=t,He=L;switch(fe=n,Ue=s,He.tag){case 1:if(Be=He.payload,typeof Be=="function"){ve=Be.call(Ue,ve,fe);break e}ve=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=He.payload,fe=typeof Be=="function"?Be.call(Ue,ve,fe):Be,fe==null)break e;ve=se({},ve,fe);break e;case 2:$n=!0}}L.callback!==null&&L.lane!==0&&(t.flags|=64,fe=c.effects,fe===null?c.effects=[L]:fe.push(L))}else Ue={eventTime:Ue,lane:fe,tag:L.tag,payload:L.payload,callback:L.callback,next:null},me===null?(Q=me=Ue,O=ve):me=me.next=Ue,M|=fe;if(L=L.next,L===null){if(L=c.shared.pending,L===null)break;fe=L,L=fe.next,fe.next=null,c.lastBaseUpdate=fe,c.shared.pending=null}}while(!0);if(me===null&&(O=ve),c.baseState=O,c.firstBaseUpdate=Q,c.lastBaseUpdate=me,n=c.shared.interleaved,n!==null){c=n;do M|=c.lane,c=c.next;while(c!==n)}else p===null&&(c.shared.lanes=0);Ai|=M,t.lanes=M,t.memoizedState=ve}}function lf(t,n,s){if(t=n.effects,n.effects=null,t!==null)for(n=0;n<t.length;n++){var l=t[n],c=l.callback;if(c!==null){if(l.callback=null,l=s,typeof c!="function")throw Error(r(191,c));c.call(l)}}}var fs={},on=qn(fs),ps=qn(fs),ms=qn(fs);function Ti(t){if(t===fs)throw Error(r(174));return t}function bu(t,n){switch(bt(ms,n),bt(ps,t),bt(on,fs),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:we(null,"");break;default:t=t===8?n.parentNode:n,n=t.namespaceURI||null,t=t.tagName,n=we(n,t)}Lt(on),bt(on,n)}function ha(){Lt(on),Lt(ps),Lt(ms)}function uf(t){Ti(ms.current);var n=Ti(on.current),s=we(n,t.type);n!==s&&(bt(ps,t),bt(on,s))}function Pu(t){ps.current===t&&(Lt(on),Lt(ps))}var It=qn(0);function So(t){for(var n=t;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Lu=[];function Nu(){for(var t=0;t<Lu.length;t++)Lu[t]._workInProgressVersionPrimary=null;Lu.length=0}var Mo=U.ReactCurrentDispatcher,Uu=U.ReactCurrentBatchConfig,wi=0,Ot=null,Gt=null,Kt=null,Eo=!1,gs=!1,vs=0,Tv=0;function sr(){throw Error(r(321))}function Du(t,n){if(n===null)return!1;for(var s=0;s<n.length&&s<t.length;s++)if(!Wr(t[s],n[s]))return!1;return!0}function Iu(t,n,s,l,c,p){if(wi=p,Ot=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Mo.current=t===null||t.memoizedState===null?Cv:bv,t=s(l,c),gs){p=0;do{if(gs=!1,vs=0,25<=p)throw Error(r(301));p+=1,Kt=Gt=null,n.updateQueue=null,Mo.current=Pv,t=s(l,c)}while(gs)}if(Mo.current=Ao,n=Gt!==null&&Gt.next!==null,wi=0,Kt=Gt=Ot=null,Eo=!1,n)throw Error(r(300));return t}function Ou(){var t=vs!==0;return vs=0,t}function ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Kt===null?Ot.memoizedState=Kt=t:Kt=Kt.next=t,Kt}function zr(){if(Gt===null){var t=Ot.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var n=Kt===null?Ot.memoizedState:Kt.next;if(n!==null)Kt=n,Gt=t;else{if(t===null)throw Error(r(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},Kt===null?Ot.memoizedState=Kt=t:Kt=Kt.next=t}return Kt}function _s(t,n){return typeof n=="function"?n(t):n}function Fu(t){var n=zr(),s=n.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=Gt,c=l.baseQueue,p=s.pending;if(p!==null){if(c!==null){var M=c.next;c.next=p.next,p.next=M}l.baseQueue=c=p,s.pending=null}if(c!==null){p=c.next,l=l.baseState;var L=M=null,O=null,Q=p;do{var me=Q.lane;if((wi&me)===me)O!==null&&(O=O.next={lane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),l=Q.hasEagerState?Q.eagerState:t(l,Q.action);else{var ve={lane:me,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null};O===null?(L=O=ve,M=l):O=O.next=ve,Ot.lanes|=me,Ai|=me}Q=Q.next}while(Q!==null&&Q!==p);O===null?M=l:O.next=L,Wr(l,n.memoizedState)||(vr=!0),n.memoizedState=l,n.baseState=M,n.baseQueue=O,s.lastRenderedState=l}if(t=s.interleaved,t!==null){c=t;do p=c.lane,Ot.lanes|=p,Ai|=p,c=c.next;while(c!==t)}else c===null&&(s.lanes=0);return[n.memoizedState,s.dispatch]}function zu(t){var n=zr(),s=n.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,c=s.pending,p=n.memoizedState;if(c!==null){s.pending=null;var M=c=c.next;do p=t(p,M.action),M=M.next;while(M!==c);Wr(p,n.memoizedState)||(vr=!0),n.memoizedState=p,n.baseQueue===null&&(n.baseState=p),s.lastRenderedState=p}return[p,l]}function cf(){}function df(t,n){var s=Ot,l=zr(),c=n(),p=!Wr(l.memoizedState,c);if(p&&(l.memoizedState=c,vr=!0),l=l.queue,ku(pf.bind(null,s,l,t),[t]),l.getSnapshot!==n||p||Kt!==null&&Kt.memoizedState.tag&1){if(s.flags|=2048,xs(9,ff.bind(null,s,l,c,n),void 0,null),Zt===null)throw Error(r(349));(wi&30)!==0||hf(s,n,c)}return c}function hf(t,n,s){t.flags|=16384,t={getSnapshot:n,value:s},n=Ot.updateQueue,n===null?(n={lastEffect:null,stores:null},Ot.updateQueue=n,n.stores=[t]):(s=n.stores,s===null?n.stores=[t]:s.push(t))}function ff(t,n,s,l){n.value=s,n.getSnapshot=l,mf(n)&&gf(t)}function pf(t,n,s){return s(function(){mf(n)&&gf(t)})}function mf(t){var n=t.getSnapshot;t=t.value;try{var s=n();return!Wr(t,s)}catch{return!0}}function gf(t){var n=yn(t,1);n!==null&&Kr(n,t,1,-1)}function vf(t){var n=ln();return typeof t=="function"&&(t=t()),n.memoizedState=n.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_s,lastRenderedState:t},n.queue=t,t=t.dispatch=Rv.bind(null,Ot,t),[n.memoizedState,t]}function xs(t,n,s,l){return t={tag:t,create:n,destroy:s,deps:l,next:null},n=Ot.updateQueue,n===null?(n={lastEffect:null,stores:null},Ot.updateQueue=n,n.lastEffect=t.next=t):(s=n.lastEffect,s===null?n.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,n.lastEffect=t)),t}function _f(){return zr().memoizedState}function To(t,n,s,l){var c=ln();Ot.flags|=t,c.memoizedState=xs(1|n,s,void 0,l===void 0?null:l)}function wo(t,n,s,l){var c=zr();l=l===void 0?null:l;var p=void 0;if(Gt!==null){var M=Gt.memoizedState;if(p=M.destroy,l!==null&&Du(l,M.deps)){c.memoizedState=xs(n,s,p,l);return}}Ot.flags|=t,c.memoizedState=xs(1|n,s,p,l)}function xf(t,n){return To(8390656,8,t,n)}function ku(t,n){return wo(2048,8,t,n)}function yf(t,n){return wo(4,2,t,n)}function Sf(t,n){return wo(4,4,t,n)}function Mf(t,n){if(typeof n=="function")return t=t(),n(t),function(){n(null)};if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Ef(t,n,s){return s=s!=null?s.concat([t]):null,wo(4,4,Mf.bind(null,n,t),s)}function Bu(){}function Tf(t,n){var s=zr();n=n===void 0?null:n;var l=s.memoizedState;return l!==null&&n!==null&&Du(n,l[1])?l[0]:(s.memoizedState=[t,n],t)}function wf(t,n){var s=zr();n=n===void 0?null:n;var l=s.memoizedState;return l!==null&&n!==null&&Du(n,l[1])?l[0]:(t=t(),s.memoizedState=[t,n],t)}function Af(t,n,s){return(wi&21)===0?(t.baseState&&(t.baseState=!1,vr=!0),t.memoizedState=s):(Wr(s,n)||(s=Ki(),Ot.lanes|=s,Ai|=s,t.baseState=!0),n)}function wv(t,n){var s=Mt;Mt=s!==0&&4>s?s:4,t(!0);var l=Uu.transition;Uu.transition={};try{t(!1),n()}finally{Mt=s,Uu.transition=l}}function Rf(){return zr().memoizedState}function Av(t,n,s){var l=ri(t);if(s={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null},Cf(t))bf(n,s);else if(s=af(t,n,s,l),s!==null){var c=hr();Kr(s,t,l,c),Pf(s,n,l)}}function Rv(t,n,s){var l=ri(t),c={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null};if(Cf(t))bf(n,c);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=n.lastRenderedReducer,p!==null))try{var M=n.lastRenderedState,L=p(M,s);if(c.hasEagerState=!0,c.eagerState=L,Wr(L,M)){var O=n.interleaved;O===null?(c.next=c,Ru(n)):(c.next=O.next,O.next=c),n.interleaved=c;return}}catch{}s=af(t,n,c,l),s!==null&&(c=hr(),Kr(s,t,l,c),Pf(s,n,l))}}function Cf(t){var n=t.alternate;return t===Ot||n!==null&&n===Ot}function bf(t,n){gs=Eo=!0;var s=t.pending;s===null?n.next=n:(n.next=s.next,s.next=n),t.pending=n}function Pf(t,n,s){if((s&4194240)!==0){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,Vl(t,s)}}var Ao={readContext:Fr,useCallback:sr,useContext:sr,useEffect:sr,useImperativeHandle:sr,useInsertionEffect:sr,useLayoutEffect:sr,useMemo:sr,useReducer:sr,useRef:sr,useState:sr,useDebugValue:sr,useDeferredValue:sr,useTransition:sr,useMutableSource:sr,useSyncExternalStore:sr,useId:sr,unstable_isNewReconciler:!1},Cv={readContext:Fr,useCallback:function(t,n){return ln().memoizedState=[t,n===void 0?null:n],t},useContext:Fr,useEffect:xf,useImperativeHandle:function(t,n,s){return s=s!=null?s.concat([t]):null,To(4194308,4,Mf.bind(null,n,t),s)},useLayoutEffect:function(t,n){return To(4194308,4,t,n)},useInsertionEffect:function(t,n){return To(4,2,t,n)},useMemo:function(t,n){var s=ln();return n=n===void 0?null:n,t=t(),s.memoizedState=[t,n],t},useReducer:function(t,n,s){var l=ln();return n=s!==void 0?s(n):n,l.memoizedState=l.baseState=n,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},l.queue=t,t=t.dispatch=Av.bind(null,Ot,t),[l.memoizedState,t]},useRef:function(t){var n=ln();return t={current:t},n.memoizedState=t},useState:vf,useDebugValue:Bu,useDeferredValue:function(t){return ln().memoizedState=t},useTransition:function(){var t=vf(!1),n=t[0];return t=wv.bind(null,t[1]),ln().memoizedState=t,[n,t]},useMutableSource:function(){},useSyncExternalStore:function(t,n,s){var l=Ot,c=ln();if(Ut){if(s===void 0)throw Error(r(407));s=s()}else{if(s=n(),Zt===null)throw Error(r(349));(wi&30)!==0||hf(l,n,s)}c.memoizedState=s;var p={value:s,getSnapshot:n};return c.queue=p,xf(pf.bind(null,l,p,t),[t]),l.flags|=2048,xs(9,ff.bind(null,l,p,s,n),void 0,null),s},useId:function(){var t=ln(),n=Zt.identifierPrefix;if(Ut){var s=xn,l=_n;s=(l&~(1<<32-Oe(l)-1)).toString(32)+s,n=":"+n+"R"+s,s=vs++,0<s&&(n+="H"+s.toString(32)),n+=":"}else s=Tv++,n=":"+n+"r"+s.toString(32)+":";return t.memoizedState=n},unstable_isNewReconciler:!1},bv={readContext:Fr,useCallback:Tf,useContext:Fr,useEffect:ku,useImperativeHandle:Ef,useInsertionEffect:yf,useLayoutEffect:Sf,useMemo:wf,useReducer:Fu,useRef:_f,useState:function(){return Fu(_s)},useDebugValue:Bu,useDeferredValue:function(t){var n=zr();return Af(n,Gt.memoizedState,t)},useTransition:function(){var t=Fu(_s)[0],n=zr().memoizedState;return[t,n]},useMutableSource:cf,useSyncExternalStore:df,useId:Rf,unstable_isNewReconciler:!1},Pv={readContext:Fr,useCallback:Tf,useContext:Fr,useEffect:ku,useImperativeHandle:Ef,useInsertionEffect:yf,useLayoutEffect:Sf,useMemo:wf,useReducer:zu,useRef:_f,useState:function(){return zu(_s)},useDebugValue:Bu,useDeferredValue:function(t){var n=zr();return Gt===null?n.memoizedState=t:Af(n,Gt.memoizedState,t)},useTransition:function(){var t=zu(_s)[0],n=zr().memoizedState;return[t,n]},useMutableSource:cf,useSyncExternalStore:df,useId:Rf,unstable_isNewReconciler:!1};function Xr(t,n){if(t&&t.defaultProps){n=se({},n),t=t.defaultProps;for(var s in t)n[s]===void 0&&(n[s]=t[s]);return n}return n}function Hu(t,n,s,l){n=t.memoizedState,s=s(l,n),s=s==null?n:se({},n,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Ro={isMounted:function(t){return(t=t._reactInternals)?fn(t)===t:!1},enqueueSetState:function(t,n,s){t=t._reactInternals;var l=hr(),c=ri(t),p=Sn(l,c);p.payload=n,s!=null&&(p.callback=s),n=Qn(t,p,c),n!==null&&(Kr(n,t,c,l),xo(n,t,c))},enqueueReplaceState:function(t,n,s){t=t._reactInternals;var l=hr(),c=ri(t),p=Sn(l,c);p.tag=1,p.payload=n,s!=null&&(p.callback=s),n=Qn(t,p,c),n!==null&&(Kr(n,t,c,l),xo(n,t,c))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var s=hr(),l=ri(t),c=Sn(s,l);c.tag=2,n!=null&&(c.callback=n),n=Qn(t,c,l),n!==null&&(Kr(n,t,l,s),xo(n,t,l))}};function Lf(t,n,s,l,c,p,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,M):n.prototype&&n.prototype.isPureReactComponent?!as(s,l)||!as(c,p):!0}function Nf(t,n,s){var l=!1,c=Kn,p=n.contextType;return typeof p=="object"&&p!==null?p=Fr(p):(c=gr(n)?yi:ar.current,l=n.contextTypes,p=(l=l!=null)?aa(t,c):Kn),n=new n(s,p),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ro,t.stateNode=n,n._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=p),n}function Uf(t,n,s,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,l),n.state!==t&&Ro.enqueueReplaceState(n,n.state,null)}function Vu(t,n,s,l){var c=t.stateNode;c.props=s,c.state=t.memoizedState,c.refs={},Cu(t);var p=n.contextType;typeof p=="object"&&p!==null?c.context=Fr(p):(p=gr(n)?yi:ar.current,c.context=aa(t,p)),c.state=t.memoizedState,p=n.getDerivedStateFromProps,typeof p=="function"&&(Hu(t,n,p,s),c.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(n=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),n!==c.state&&Ro.enqueueReplaceState(c,c.state,null),yo(t,s,c,l),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function fa(t,n){try{var s="",l=n;do s+=le(l),l=l.return;while(l);var c=s}catch(p){c=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:n,stack:c,digest:null}}function Gu(t,n,s){return{value:t,source:null,stack:s??null,digest:n??null}}function Wu(t,n){try{console.error(n.value)}catch(s){setTimeout(function(){throw s})}}var Lv=typeof WeakMap=="function"?WeakMap:Map;function Df(t,n,s){s=Sn(-1,s),s.tag=3,s.payload={element:null};var l=n.value;return s.callback=function(){Do||(Do=!0,ac=l),Wu(t,n)},s}function If(t,n,s){s=Sn(-1,s),s.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=n.value;s.payload=function(){return l(c)},s.callback=function(){Wu(t,n)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(s.callback=function(){Wu(t,n),typeof l!="function"&&(ei===null?ei=new Set([this]):ei.add(this));var M=n.stack;this.componentDidCatch(n.value,{componentStack:M!==null?M:""})}),s}function Of(t,n,s){var l=t.pingCache;if(l===null){l=t.pingCache=new Lv;var c=new Set;l.set(n,c)}else c=l.get(n),c===void 0&&(c=new Set,l.set(n,c));c.has(s)||(c.add(s),t=jv.bind(null,t,n,s),n.then(t,t))}function Ff(t){do{var n;if((n=t.tag===13)&&(n=t.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return t;t=t.return}while(t!==null);return null}function zf(t,n,s,l,c){return(t.mode&1)===0?(t===n?t.flags|=65536:(t.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(n=Sn(-1,1),n.tag=2,Qn(s,n,1))),s.lanes|=1),t):(t.flags|=65536,t.lanes=c,t)}var Nv=U.ReactCurrentOwner,vr=!1;function dr(t,n,s,l){n.child=t===null?nf(n,null,s,l):ua(n,t.child,s,l)}function kf(t,n,s,l,c){s=s.render;var p=n.ref;return da(n,c),l=Iu(t,n,s,l,p,c),s=Ou(),t!==null&&!vr?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~c,Mn(t,n,c)):(Ut&&s&&_u(n),n.flags|=1,dr(t,n,l,c),n.child)}function Bf(t,n,s,l,c){if(t===null){var p=s.type;return typeof p=="function"&&!hc(p)&&p.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(n.tag=15,n.type=p,Hf(t,n,p,l,c)):(t=Bo(s.type,null,l,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(p=t.child,(t.lanes&c)===0){var M=p.memoizedProps;if(s=s.compare,s=s!==null?s:as,s(M,l)&&t.ref===n.ref)return Mn(t,n,c)}return n.flags|=1,t=ii(p,l),t.ref=n.ref,t.return=n,n.child=t}function Hf(t,n,s,l,c){if(t!==null){var p=t.memoizedProps;if(as(p,l)&&t.ref===n.ref)if(vr=!1,n.pendingProps=l=p,(t.lanes&c)!==0)(t.flags&131072)!==0&&(vr=!0);else return n.lanes=t.lanes,Mn(t,n,c)}return ju(t,n,s,l,c)}function Vf(t,n,s){var l=n.pendingProps,c=l.children,p=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},bt(ma,Lr),Lr|=s;else{if((s&1073741824)===0)return t=p!==null?p.baseLanes|s:s,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:t,cachePool:null,transitions:null},n.updateQueue=null,bt(ma,Lr),Lr|=t,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:s,bt(ma,Lr),Lr|=l}else p!==null?(l=p.baseLanes|s,n.memoizedState=null):l=s,bt(ma,Lr),Lr|=l;return dr(t,n,c,s),n.child}function Gf(t,n){var s=n.ref;(t===null&&s!==null||t!==null&&t.ref!==s)&&(n.flags|=512,n.flags|=2097152)}function ju(t,n,s,l,c){var p=gr(s)?yi:ar.current;return p=aa(n,p),da(n,c),s=Iu(t,n,s,l,p,c),l=Ou(),t!==null&&!vr?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~c,Mn(t,n,c)):(Ut&&l&&_u(n),n.flags|=1,dr(t,n,s,c),n.child)}function Wf(t,n,s,l,c){if(gr(s)){var p=!0;co(n)}else p=!1;if(da(n,c),n.stateNode===null)bo(t,n),Nf(n,s,l),Vu(n,s,l,c),l=!0;else if(t===null){var M=n.stateNode,L=n.memoizedProps;M.props=L;var O=M.context,Q=s.contextType;typeof Q=="object"&&Q!==null?Q=Fr(Q):(Q=gr(s)?yi:ar.current,Q=aa(n,Q));var me=s.getDerivedStateFromProps,ve=typeof me=="function"||typeof M.getSnapshotBeforeUpdate=="function";ve||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==l||O!==Q)&&Uf(n,M,l,Q),$n=!1;var fe=n.memoizedState;M.state=fe,yo(n,l,M,c),O=n.memoizedState,L!==l||fe!==O||mr.current||$n?(typeof me=="function"&&(Hu(n,s,me,l),O=n.memoizedState),(L=$n||Lf(n,s,L,l,fe,O,Q))?(ve||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(n.flags|=4194308)):(typeof M.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=O),M.props=l,M.state=O,M.context=Q,l=L):(typeof M.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{M=n.stateNode,sf(t,n),L=n.memoizedProps,Q=n.type===n.elementType?L:Xr(n.type,L),M.props=Q,ve=n.pendingProps,fe=M.context,O=s.contextType,typeof O=="object"&&O!==null?O=Fr(O):(O=gr(s)?yi:ar.current,O=aa(n,O));var Ue=s.getDerivedStateFromProps;(me=typeof Ue=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==ve||fe!==O)&&Uf(n,M,l,O),$n=!1,fe=n.memoizedState,M.state=fe,yo(n,l,M,c);var Be=n.memoizedState;L!==ve||fe!==Be||mr.current||$n?(typeof Ue=="function"&&(Hu(n,s,Ue,l),Be=n.memoizedState),(Q=$n||Lf(n,s,Q,l,fe,Be,O)||!1)?(me||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,Be,O),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,Be,O)),typeof M.componentDidUpdate=="function"&&(n.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof M.componentDidUpdate!="function"||L===t.memoizedProps&&fe===t.memoizedState||(n.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&fe===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=Be),M.props=l,M.state=Be,M.context=O,l=Q):(typeof M.componentDidUpdate!="function"||L===t.memoizedProps&&fe===t.memoizedState||(n.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&fe===t.memoizedState||(n.flags|=1024),l=!1)}return Xu(t,n,s,l,p,c)}function Xu(t,n,s,l,c,p){Gf(t,n);var M=(n.flags&128)!==0;if(!l&&!M)return c&&qh(n,s,!1),Mn(t,n,p);l=n.stateNode,Nv.current=n;var L=M&&typeof s.getDerivedStateFromError!="function"?null:l.render();return n.flags|=1,t!==null&&M?(n.child=ua(n,t.child,null,p),n.child=ua(n,null,L,p)):dr(t,n,L,p),n.memoizedState=l.state,c&&qh(n,s,!0),n.child}function jf(t){var n=t.stateNode;n.pendingContext?Xh(t,n.pendingContext,n.pendingContext!==n.context):n.context&&Xh(t,n.context,!1),bu(t,n.containerInfo)}function Xf(t,n,s,l,c){return la(),Mu(c),n.flags|=256,dr(t,n,s,l),n.child}var Yu={dehydrated:null,treeContext:null,retryLane:0};function qu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Yf(t,n,s){var l=n.pendingProps,c=It.current,p=!1,M=(n.flags&128)!==0,L;if((L=M)||(L=t!==null&&t.memoizedState===null?!1:(c&2)!==0),L?(p=!0,n.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),bt(It,c&1),t===null)return Su(n),t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((n.mode&1)===0?n.lanes=1:t.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(M=l.children,t=l.fallback,p?(l=n.mode,p=n.child,M={mode:"hidden",children:M},(l&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=M):p=Ho(M,l,0,null),t=Pi(t,l,s,null),p.return=n,t.return=n,p.sibling=t,n.child=p,n.child.memoizedState=qu(s),n.memoizedState=Yu,t):Ku(n,M));if(c=t.memoizedState,c!==null&&(L=c.dehydrated,L!==null))return Uv(t,n,M,l,L,c,s);if(p){p=l.fallback,M=n.mode,c=t.child,L=c.sibling;var O={mode:"hidden",children:l.children};return(M&1)===0&&n.child!==c?(l=n.child,l.childLanes=0,l.pendingProps=O,n.deletions=null):(l=ii(c,O),l.subtreeFlags=c.subtreeFlags&14680064),L!==null?p=ii(L,p):(p=Pi(p,M,s,null),p.flags|=2),p.return=n,l.return=n,l.sibling=p,n.child=l,l=p,p=n.child,M=t.child.memoizedState,M=M===null?qu(s):{baseLanes:M.baseLanes|s,cachePool:null,transitions:M.transitions},p.memoizedState=M,p.childLanes=t.childLanes&~s,n.memoizedState=Yu,l}return p=t.child,t=p.sibling,l=ii(p,{mode:"visible",children:l.children}),(n.mode&1)===0&&(l.lanes=s),l.return=n,l.sibling=null,t!==null&&(s=n.deletions,s===null?(n.deletions=[t],n.flags|=16):s.push(t)),n.child=l,n.memoizedState=null,l}function Ku(t,n){return n=Ho({mode:"visible",children:n},t.mode,0,null),n.return=t,t.child=n}function Co(t,n,s,l){return l!==null&&Mu(l),ua(n,t.child,null,s),t=Ku(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Uv(t,n,s,l,c,p,M){if(s)return n.flags&256?(n.flags&=-257,l=Gu(Error(r(422))),Co(t,n,M,l)):n.memoizedState!==null?(n.child=t.child,n.flags|=128,null):(p=l.fallback,c=n.mode,l=Ho({mode:"visible",children:l.children},c,0,null),p=Pi(p,c,M,null),p.flags|=2,l.return=n,p.return=n,l.sibling=p,n.child=l,(n.mode&1)!==0&&ua(n,t.child,null,M),n.child.memoizedState=qu(M),n.memoizedState=Yu,p);if((n.mode&1)===0)return Co(t,n,M,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var L=l.dgst;return l=L,p=Error(r(419)),l=Gu(p,l,void 0),Co(t,n,M,l)}if(L=(M&t.childLanes)!==0,vr||L){if(l=Zt,l!==null){switch(M&-M){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(l.suspendedLanes|M))!==0?0:c,c!==0&&c!==p.retryLane&&(p.retryLane=c,yn(t,c),Kr(l,t,c,-1))}return dc(),l=Gu(Error(r(421))),Co(t,n,M,l)}return c.data==="$?"?(n.flags|=128,n.child=t.child,n=Xv.bind(null,t),c._reactRetry=n,null):(t=p.treeContext,Pr=Yn(c.nextSibling),br=n,Ut=!0,jr=null,t!==null&&(Ir[Or++]=_n,Ir[Or++]=xn,Ir[Or++]=Si,_n=t.id,xn=t.overflow,Si=n),n=Ku(n,l.children),n.flags|=4096,n)}function qf(t,n,s){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),Au(t.return,n,s)}function Zu(t,n,s,l,c){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:c}:(p.isBackwards=n,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=s,p.tailMode=c)}function Kf(t,n,s){var l=n.pendingProps,c=l.revealOrder,p=l.tail;if(dr(t,n,l.children,s),l=It.current,(l&2)!==0)l=l&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qf(t,s,n);else if(t.tag===19)qf(t,s,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(bt(It,l),(n.mode&1)===0)n.memoizedState=null;else switch(c){case"forwards":for(s=n.child,c=null;s!==null;)t=s.alternate,t!==null&&So(t)===null&&(c=s),s=s.sibling;s=c,s===null?(c=n.child,n.child=null):(c=s.sibling,s.sibling=null),Zu(n,!1,c,s,p);break;case"backwards":for(s=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&So(t)===null){n.child=c;break}t=c.sibling,c.sibling=s,s=c,c=t}Zu(n,!0,s,null,p);break;case"together":Zu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function bo(t,n){(n.mode&1)===0&&t!==null&&(t.alternate=null,n.alternate=null,n.flags|=2)}function Mn(t,n,s){if(t!==null&&(n.dependencies=t.dependencies),Ai|=n.lanes,(s&n.childLanes)===0)return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,s=ii(t,t.pendingProps),n.child=s,s.return=n;t.sibling!==null;)t=t.sibling,s=s.sibling=ii(t,t.pendingProps),s.return=n;s.sibling=null}return n.child}function Dv(t,n,s){switch(n.tag){case 3:jf(n),la();break;case 5:uf(n);break;case 1:gr(n.type)&&co(n);break;case 4:bu(n,n.stateNode.containerInfo);break;case 10:var l=n.type._context,c=n.memoizedProps.value;bt(vo,l._currentValue),l._currentValue=c;break;case 13:if(l=n.memoizedState,l!==null)return l.dehydrated!==null?(bt(It,It.current&1),n.flags|=128,null):(s&n.child.childLanes)!==0?Yf(t,n,s):(bt(It,It.current&1),t=Mn(t,n,s),t!==null?t.sibling:null);bt(It,It.current&1);break;case 19:if(l=(s&n.childLanes)!==0,(t.flags&128)!==0){if(l)return Kf(t,n,s);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),bt(It,It.current),l)break;return null;case 22:case 23:return n.lanes=0,Vf(t,n,s)}return Mn(t,n,s)}var Zf,$u,$f,Qf;Zf=function(t,n){for(var s=n.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},$u=function(){},$f=function(t,n,s,l){var c=t.memoizedProps;if(c!==l){t=n.stateNode,Ti(on.current);var p=null;switch(s){case"input":c=Jt(t,c),l=Jt(t,l),p=[];break;case"select":c=se({},c,{value:void 0}),l=se({},l,{value:void 0}),p=[];break;case"textarea":c=j(t,c),l=j(t,l),p=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=oo)}rt(s,l);var M;s=null;for(Q in c)if(!l.hasOwnProperty(Q)&&c.hasOwnProperty(Q)&&c[Q]!=null)if(Q==="style"){var L=c[Q];for(M in L)L.hasOwnProperty(M)&&(s||(s={}),s[M]="")}else Q!=="dangerouslySetInnerHTML"&&Q!=="children"&&Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&Q!=="autoFocus"&&(o.hasOwnProperty(Q)?p||(p=[]):(p=p||[]).push(Q,null));for(Q in l){var O=l[Q];if(L=c?.[Q],l.hasOwnProperty(Q)&&O!==L&&(O!=null||L!=null))if(Q==="style")if(L){for(M in L)!L.hasOwnProperty(M)||O&&O.hasOwnProperty(M)||(s||(s={}),s[M]="");for(M in O)O.hasOwnProperty(M)&&L[M]!==O[M]&&(s||(s={}),s[M]=O[M])}else s||(p||(p=[]),p.push(Q,s)),s=O;else Q==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,L=L?L.__html:void 0,O!=null&&L!==O&&(p=p||[]).push(Q,O)):Q==="children"?typeof O!="string"&&typeof O!="number"||(p=p||[]).push(Q,""+O):Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&(o.hasOwnProperty(Q)?(O!=null&&Q==="onScroll"&&Pt("scroll",t),p||L===O||(p=[])):(p=p||[]).push(Q,O))}s&&(p=p||[]).push("style",s);var Q=p;(n.updateQueue=Q)&&(n.flags|=4)}},Qf=function(t,n,s,l){s!==l&&(n.flags|=4)};function ys(t,n){if(!Ut)switch(t.tailMode){case"hidden":n=t.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function or(t){var n=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(n)for(var c=t.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=s,n}function Iv(t,n,s){var l=n.pendingProps;switch(xu(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return or(n),null;case 1:return gr(n.type)&&uo(),or(n),null;case 3:return l=n.stateNode,ha(),Lt(mr),Lt(ar),Nu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(mo(n)?n.flags|=4:t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,jr!==null&&(lc(jr),jr=null))),$u(t,n),or(n),null;case 5:Pu(n);var c=Ti(ms.current);if(s=n.type,t!==null&&n.stateNode!=null)$f(t,n,s,l,c),t.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!l){if(n.stateNode===null)throw Error(r(166));return or(n),null}if(t=Ti(on.current),mo(n)){l=n.stateNode,s=n.type;var p=n.memoizedProps;switch(l[sn]=n,l[cs]=p,t=(n.mode&1)!==0,s){case"dialog":Pt("cancel",l),Pt("close",l);break;case"iframe":case"object":case"embed":Pt("load",l);break;case"video":case"audio":for(c=0;c<os.length;c++)Pt(os[c],l);break;case"source":Pt("error",l);break;case"img":case"image":case"link":Pt("error",l),Pt("load",l);break;case"details":Pt("toggle",l);break;case"input":st(l,p),Pt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},Pt("invalid",l);break;case"textarea":de(l,p),Pt("invalid",l)}rt(s,p),c=null;for(var M in p)if(p.hasOwnProperty(M)){var L=p[M];M==="children"?typeof L=="string"?l.textContent!==L&&(p.suppressHydrationWarning!==!0&&so(l.textContent,L,t),c=["children",L]):typeof L=="number"&&l.textContent!==""+L&&(p.suppressHydrationWarning!==!0&&so(l.textContent,L,t),c=["children",""+L]):o.hasOwnProperty(M)&&L!=null&&M==="onScroll"&&Pt("scroll",l)}switch(s){case"input":ft(l),Et(l,p,!0);break;case"textarea":ft(l),ue(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=oo)}l=c,n.updateQueue=l,l!==null&&(n.flags|=4)}else{M=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ge(s)),t==="http://www.w3.org/1999/xhtml"?s==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(s,{is:l.is}):(t=M.createElement(s),s==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,s),t[sn]=n,t[cs]=l,Zf(t,n,!1,!1),n.stateNode=t;e:{switch(M=vt(s,l),s){case"dialog":Pt("cancel",t),Pt("close",t),c=l;break;case"iframe":case"object":case"embed":Pt("load",t),c=l;break;case"video":case"audio":for(c=0;c<os.length;c++)Pt(os[c],t);c=l;break;case"source":Pt("error",t),c=l;break;case"img":case"image":case"link":Pt("error",t),Pt("load",t),c=l;break;case"details":Pt("toggle",t),c=l;break;case"input":st(t,l),c=Jt(t,l),Pt("invalid",t);break;case"option":c=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},c=se({},l,{value:void 0}),Pt("invalid",t);break;case"textarea":de(t,l),c=j(t,l),Pt("invalid",t);break;default:c=l}rt(s,c),L=c;for(p in L)if(L.hasOwnProperty(p)){var O=L[p];p==="style"?ze(t,O):p==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&ot(t,O)):p==="children"?typeof O=="string"?(s!=="textarea"||O!=="")&&Me(t,O):typeof O=="number"&&Me(t,""+O):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?O!=null&&p==="onScroll"&&Pt("scroll",t):O!=null&&b(t,p,O,M))}switch(s){case"input":ft(t),Et(t,l,!1);break;case"textarea":ft(t),ue(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Pe(l.value));break;case"select":t.multiple=!!l.multiple,p=l.value,p!=null?T(t,!!l.multiple,p,!1):l.defaultValue!=null&&T(t,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=oo)}switch(s){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return or(n),null;case 6:if(t&&n.stateNode!=null)Qf(t,n,t.memoizedProps,l);else{if(typeof l!="string"&&n.stateNode===null)throw Error(r(166));if(s=Ti(ms.current),Ti(on.current),mo(n)){if(l=n.stateNode,s=n.memoizedProps,l[sn]=n,(p=l.nodeValue!==s)&&(t=br,t!==null))switch(t.tag){case 3:so(l.nodeValue,s,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&so(l.nodeValue,s,(t.mode&1)!==0)}p&&(n.flags|=4)}else l=(s.nodeType===9?s:s.ownerDocument).createTextNode(l),l[sn]=n,n.stateNode=l}return or(n),null;case 13:if(Lt(It),l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ut&&Pr!==null&&(n.mode&1)!==0&&(n.flags&128)===0)ef(),la(),n.flags|=98560,p=!1;else if(p=mo(n),l!==null&&l.dehydrated!==null){if(t===null){if(!p)throw Error(r(318));if(p=n.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(r(317));p[sn]=n}else la(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;or(n),p=!1}else jr!==null&&(lc(jr),jr=null),p=!0;if(!p)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=s,n):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(n.child.flags|=8192,(n.mode&1)!==0&&(t===null||(It.current&1)!==0?Wt===0&&(Wt=3):dc())),n.updateQueue!==null&&(n.flags|=4),or(n),null);case 4:return ha(),$u(t,n),t===null&&ls(n.stateNode.containerInfo),or(n),null;case 10:return wu(n.type._context),or(n),null;case 17:return gr(n.type)&&uo(),or(n),null;case 19:if(Lt(It),p=n.memoizedState,p===null)return or(n),null;if(l=(n.flags&128)!==0,M=p.rendering,M===null)if(l)ys(p,!1);else{if(Wt!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(M=So(t),M!==null){for(n.flags|=128,ys(p,!1),l=M.updateQueue,l!==null&&(n.updateQueue=l,n.flags|=4),n.subtreeFlags=0,l=s,s=n.child;s!==null;)p=s,t=l,p.flags&=14680066,M=p.alternate,M===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=M.childLanes,p.lanes=M.lanes,p.child=M.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=M.memoizedProps,p.memoizedState=M.memoizedState,p.updateQueue=M.updateQueue,p.type=M.type,t=M.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),s=s.sibling;return bt(It,It.current&1|2),n.child}t=t.sibling}p.tail!==null&&Te()>ga&&(n.flags|=128,l=!0,ys(p,!1),n.lanes=4194304)}else{if(!l)if(t=So(M),t!==null){if(n.flags|=128,l=!0,s=t.updateQueue,s!==null&&(n.updateQueue=s,n.flags|=4),ys(p,!0),p.tail===null&&p.tailMode==="hidden"&&!M.alternate&&!Ut)return or(n),null}else 2*Te()-p.renderingStartTime>ga&&s!==1073741824&&(n.flags|=128,l=!0,ys(p,!1),n.lanes=4194304);p.isBackwards?(M.sibling=n.child,n.child=M):(s=p.last,s!==null?s.sibling=M:n.child=M,p.last=M)}return p.tail!==null?(n=p.tail,p.rendering=n,p.tail=n.sibling,p.renderingStartTime=Te(),n.sibling=null,s=It.current,bt(It,l?s&1|2:s&1),n):(or(n),null);case 22:case 23:return cc(),l=n.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(n.flags|=8192),l&&(n.mode&1)!==0?(Lr&1073741824)!==0&&(or(n),n.subtreeFlags&6&&(n.flags|=8192)):or(n),null;case 24:return null;case 25:return null}throw Error(r(156,n.tag))}function Ov(t,n){switch(xu(n),n.tag){case 1:return gr(n.type)&&uo(),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ha(),Lt(mr),Lt(ar),Nu(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 5:return Pu(n),null;case 13:if(Lt(It),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));la()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Lt(It),null;case 4:return ha(),null;case 10:return wu(n.type._context),null;case 22:case 23:return cc(),null;case 24:return null;default:return null}}var Po=!1,lr=!1,Fv=typeof WeakSet=="function"?WeakSet:Set,ke=null;function pa(t,n){var s=t.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(l){Ft(t,n,l)}else s.current=null}function Qu(t,n,s){try{s()}catch(l){Ft(t,n,l)}}var Jf=!1;function zv(t,n){if(cu=Ks,t=Ph(),ru(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var c=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{s.nodeType,p.nodeType}catch{s=null;break e}var M=0,L=-1,O=-1,Q=0,me=0,ve=t,fe=null;t:for(;;){for(var Ue;ve!==s||c!==0&&ve.nodeType!==3||(L=M+c),ve!==p||l!==0&&ve.nodeType!==3||(O=M+l),ve.nodeType===3&&(M+=ve.nodeValue.length),(Ue=ve.firstChild)!==null;)fe=ve,ve=Ue;for(;;){if(ve===t)break t;if(fe===s&&++Q===c&&(L=M),fe===p&&++me===l&&(O=M),(Ue=ve.nextSibling)!==null)break;ve=fe,fe=ve.parentNode}ve=Ue}s=L===-1||O===-1?null:{start:L,end:O}}else s=null}s=s||{start:0,end:0}}else s=null;for(du={focusedElem:t,selectionRange:s},Ks=!1,ke=n;ke!==null;)if(n=ke,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,ke=t;else for(;ke!==null;){n=ke;try{var Be=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var He=Be.memoizedProps,kt=Be.memoizedState,W=n.stateNode,k=W.getSnapshotBeforeUpdate(n.elementType===n.type?He:Xr(n.type,He),kt);W.__reactInternalSnapshotBeforeUpdate=k}break;case 3:var X=n.stateNode.containerInfo;X.nodeType===1?X.textContent="":X.nodeType===9&&X.documentElement&&X.removeChild(X.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(Ee){Ft(n,n.return,Ee)}if(t=n.sibling,t!==null){t.return=n.return,ke=t;break}ke=n.return}return Be=Jf,Jf=!1,Be}function Ss(t,n,s){var l=n.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&t)===t){var p=c.destroy;c.destroy=void 0,p!==void 0&&Qu(n,s,p)}c=c.next}while(c!==l)}}function Lo(t,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var s=n=n.next;do{if((s.tag&t)===t){var l=s.create;s.destroy=l()}s=s.next}while(s!==n)}}function Ju(t){var n=t.ref;if(n!==null){var s=t.stateNode;t.tag,t=s,typeof n=="function"?n(t):n.current=t}}function ep(t){var n=t.alternate;n!==null&&(t.alternate=null,ep(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&(delete n[sn],delete n[cs],delete n[mu],delete n[yv],delete n[Sv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function tp(t){return t.tag===5||t.tag===3||t.tag===4}function rp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||tp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ec(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?s.nodeType===8?s.parentNode.insertBefore(t,n):s.insertBefore(t,n):(s.nodeType===8?(n=s.parentNode,n.insertBefore(t,s)):(n=s,n.appendChild(t)),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=oo));else if(l!==4&&(t=t.child,t!==null))for(ec(t,n,s),t=t.sibling;t!==null;)ec(t,n,s),t=t.sibling}function tc(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?s.insertBefore(t,n):s.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(tc(t,n,s),t=t.sibling;t!==null;)tc(t,n,s),t=t.sibling}var rr=null,Yr=!1;function Jn(t,n,s){for(s=s.child;s!==null;)np(t,n,s),s=s.sibling}function np(t,n,s){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(At,s)}catch{}switch(s.tag){case 5:lr||pa(s,n);case 6:var l=rr,c=Yr;rr=null,Jn(t,n,s),rr=l,Yr=c,rr!==null&&(Yr?(t=rr,s=s.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)):rr.removeChild(s.stateNode));break;case 18:rr!==null&&(Yr?(t=rr,s=s.stateNode,t.nodeType===8?pu(t.parentNode,s):t.nodeType===1&&pu(t,s),Ja(t)):pu(rr,s.stateNode));break;case 4:l=rr,c=Yr,rr=s.stateNode.containerInfo,Yr=!0,Jn(t,n,s),rr=l,Yr=c;break;case 0:case 11:case 14:case 15:if(!lr&&(l=s.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var p=c,M=p.destroy;p=p.tag,M!==void 0&&((p&2)!==0||(p&4)!==0)&&Qu(s,n,M),c=c.next}while(c!==l)}Jn(t,n,s);break;case 1:if(!lr&&(pa(s,n),l=s.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=s.memoizedProps,l.state=s.memoizedState,l.componentWillUnmount()}catch(L){Ft(s,n,L)}Jn(t,n,s);break;case 21:Jn(t,n,s);break;case 22:s.mode&1?(lr=(l=lr)||s.memoizedState!==null,Jn(t,n,s),lr=l):Jn(t,n,s);break;default:Jn(t,n,s)}}function ip(t){var n=t.updateQueue;if(n!==null){t.updateQueue=null;var s=t.stateNode;s===null&&(s=t.stateNode=new Fv),n.forEach(function(l){var c=Yv.bind(null,t,l);s.has(l)||(s.add(l),l.then(c,c))})}}function qr(t,n){var s=n.deletions;if(s!==null)for(var l=0;l<s.length;l++){var c=s[l];try{var p=t,M=n,L=M;e:for(;L!==null;){switch(L.tag){case 5:rr=L.stateNode,Yr=!1;break e;case 3:rr=L.stateNode.containerInfo,Yr=!0;break e;case 4:rr=L.stateNode.containerInfo,Yr=!0;break e}L=L.return}if(rr===null)throw Error(r(160));np(p,M,c),rr=null,Yr=!1;var O=c.alternate;O!==null&&(O.return=null),c.return=null}catch(Q){Ft(c,n,Q)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)ap(n,t),n=n.sibling}function ap(t,n){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(qr(n,t),un(t),l&4){try{Ss(3,t,t.return),Lo(3,t)}catch(He){Ft(t,t.return,He)}try{Ss(5,t,t.return)}catch(He){Ft(t,t.return,He)}}break;case 1:qr(n,t),un(t),l&512&&s!==null&&pa(s,s.return);break;case 5:if(qr(n,t),un(t),l&512&&s!==null&&pa(s,s.return),t.flags&32){var c=t.stateNode;try{Me(c,"")}catch(He){Ft(t,t.return,He)}}if(l&4&&(c=t.stateNode,c!=null)){var p=t.memoizedProps,M=s!==null?s.memoizedProps:p,L=t.type,O=t.updateQueue;if(t.updateQueue=null,O!==null)try{L==="input"&&p.type==="radio"&&p.name!=null&&ct(c,p),vt(L,M);var Q=vt(L,p);for(M=0;M<O.length;M+=2){var me=O[M],ve=O[M+1];me==="style"?ze(c,ve):me==="dangerouslySetInnerHTML"?ot(c,ve):me==="children"?Me(c,ve):b(c,me,ve,Q)}switch(L){case"input":Ze(c,p);break;case"textarea":xe(c,p);break;case"select":var fe=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!p.multiple;var Ue=p.value;Ue!=null?T(c,!!p.multiple,Ue,!1):fe!==!!p.multiple&&(p.defaultValue!=null?T(c,!!p.multiple,p.defaultValue,!0):T(c,!!p.multiple,p.multiple?[]:"",!1))}c[cs]=p}catch(He){Ft(t,t.return,He)}}break;case 6:if(qr(n,t),un(t),l&4){if(t.stateNode===null)throw Error(r(162));c=t.stateNode,p=t.memoizedProps;try{c.nodeValue=p}catch(He){Ft(t,t.return,He)}}break;case 3:if(qr(n,t),un(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Ja(n.containerInfo)}catch(He){Ft(t,t.return,He)}break;case 4:qr(n,t),un(t);break;case 13:qr(n,t),un(t),c=t.child,c.flags&8192&&(p=c.memoizedState!==null,c.stateNode.isHidden=p,!p||c.alternate!==null&&c.alternate.memoizedState!==null||(ic=Te())),l&4&&ip(t);break;case 22:if(me=s!==null&&s.memoizedState!==null,t.mode&1?(lr=(Q=lr)||me,qr(n,t),lr=Q):qr(n,t),un(t),l&8192){if(Q=t.memoizedState!==null,(t.stateNode.isHidden=Q)&&!me&&(t.mode&1)!==0)for(ke=t,me=t.child;me!==null;){for(ve=ke=me;ke!==null;){switch(fe=ke,Ue=fe.child,fe.tag){case 0:case 11:case 14:case 15:Ss(4,fe,fe.return);break;case 1:pa(fe,fe.return);var Be=fe.stateNode;if(typeof Be.componentWillUnmount=="function"){l=fe,s=fe.return;try{n=l,Be.props=n.memoizedProps,Be.state=n.memoizedState,Be.componentWillUnmount()}catch(He){Ft(l,s,He)}}break;case 5:pa(fe,fe.return);break;case 22:if(fe.memoizedState!==null){lp(ve);continue}}Ue!==null?(Ue.return=fe,ke=Ue):lp(ve)}me=me.sibling}e:for(me=null,ve=t;;){if(ve.tag===5){if(me===null){me=ve;try{c=ve.stateNode,Q?(p=c.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(L=ve.stateNode,O=ve.memoizedProps.style,M=O!=null&&O.hasOwnProperty("display")?O.display:null,L.style.display=Qe("display",M))}catch(He){Ft(t,t.return,He)}}}else if(ve.tag===6){if(me===null)try{ve.stateNode.nodeValue=Q?"":ve.memoizedProps}catch(He){Ft(t,t.return,He)}}else if((ve.tag!==22&&ve.tag!==23||ve.memoizedState===null||ve===t)&&ve.child!==null){ve.child.return=ve,ve=ve.child;continue}if(ve===t)break e;for(;ve.sibling===null;){if(ve.return===null||ve.return===t)break e;me===ve&&(me=null),ve=ve.return}me===ve&&(me=null),ve.sibling.return=ve.return,ve=ve.sibling}}break;case 19:qr(n,t),un(t),l&4&&ip(t);break;case 21:break;default:qr(n,t),un(t)}}function un(t){var n=t.flags;if(n&2){try{e:{for(var s=t.return;s!==null;){if(tp(s)){var l=s;break e}s=s.return}throw Error(r(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(Me(c,""),l.flags&=-33);var p=rp(t);tc(t,p,c);break;case 3:case 4:var M=l.stateNode.containerInfo,L=rp(t);ec(t,L,M);break;default:throw Error(r(161))}}catch(O){Ft(t,t.return,O)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function kv(t,n,s){ke=t,sp(t)}function sp(t,n,s){for(var l=(t.mode&1)!==0;ke!==null;){var c=ke,p=c.child;if(c.tag===22&&l){var M=c.memoizedState!==null||Po;if(!M){var L=c.alternate,O=L!==null&&L.memoizedState!==null||lr;L=Po;var Q=lr;if(Po=M,(lr=O)&&!Q)for(ke=c;ke!==null;)M=ke,O=M.child,M.tag===22&&M.memoizedState!==null?up(c):O!==null?(O.return=M,ke=O):up(c);for(;p!==null;)ke=p,sp(p),p=p.sibling;ke=c,Po=L,lr=Q}op(t)}else(c.subtreeFlags&8772)!==0&&p!==null?(p.return=c,ke=p):op(t)}}function op(t){for(;ke!==null;){var n=ke;if((n.flags&8772)!==0){var s=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:lr||Lo(5,n);break;case 1:var l=n.stateNode;if(n.flags&4&&!lr)if(s===null)l.componentDidMount();else{var c=n.elementType===n.type?s.memoizedProps:Xr(n.type,s.memoizedProps);l.componentDidUpdate(c,s.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=n.updateQueue;p!==null&&lf(n,p,l);break;case 3:var M=n.updateQueue;if(M!==null){if(s=null,n.child!==null)switch(n.child.tag){case 5:s=n.child.stateNode;break;case 1:s=n.child.stateNode}lf(n,M,s)}break;case 5:var L=n.stateNode;if(s===null&&n.flags&4){s=L;var O=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&s.focus();break;case"img":O.src&&(s.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var Q=n.alternate;if(Q!==null){var me=Q.memoizedState;if(me!==null){var ve=me.dehydrated;ve!==null&&Ja(ve)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}lr||n.flags&512&&Ju(n)}catch(fe){Ft(n,n.return,fe)}}if(n===t){ke=null;break}if(s=n.sibling,s!==null){s.return=n.return,ke=s;break}ke=n.return}}function lp(t){for(;ke!==null;){var n=ke;if(n===t){ke=null;break}var s=n.sibling;if(s!==null){s.return=n.return,ke=s;break}ke=n.return}}function up(t){for(;ke!==null;){var n=ke;try{switch(n.tag){case 0:case 11:case 15:var s=n.return;try{Lo(4,n)}catch(O){Ft(n,s,O)}break;case 1:var l=n.stateNode;if(typeof l.componentDidMount=="function"){var c=n.return;try{l.componentDidMount()}catch(O){Ft(n,c,O)}}var p=n.return;try{Ju(n)}catch(O){Ft(n,p,O)}break;case 5:var M=n.return;try{Ju(n)}catch(O){Ft(n,M,O)}}}catch(O){Ft(n,n.return,O)}if(n===t){ke=null;break}var L=n.sibling;if(L!==null){L.return=n.return,ke=L;break}ke=n.return}}var Bv=Math.ceil,No=U.ReactCurrentDispatcher,rc=U.ReactCurrentOwner,kr=U.ReactCurrentBatchConfig,pt=0,Zt=null,Ht=null,nr=0,Lr=0,ma=qn(0),Wt=0,Ms=null,Ai=0,Uo=0,nc=0,Es=null,_r=null,ic=0,ga=1/0,En=null,Do=!1,ac=null,ei=null,Io=!1,ti=null,Oo=0,Ts=0,sc=null,Fo=-1,zo=0;function hr(){return(pt&6)!==0?Te():Fo!==-1?Fo:Fo=Te()}function ri(t){return(t.mode&1)===0?1:(pt&2)!==0&&nr!==0?nr&-nr:Ev.transition!==null?(zo===0&&(zo=Ki()),zo):(t=Mt,t!==0||(t=window.event,t=t===void 0?16:ch(t.type)),t)}function Kr(t,n,s,l){if(50<Ts)throw Ts=0,sc=null,Error(r(185));Bn(t,s,l),((pt&2)===0||t!==Zt)&&(t===Zt&&((pt&2)===0&&(Uo|=s),Wt===4&&ni(t,nr)),xr(t,l),s===1&&pt===0&&(n.mode&1)===0&&(ga=Te()+500,ho&&Zn()))}function xr(t,n){var s=t.callbackNode;Ya(t,n);var l=Ct(t,t===Zt?nr:0);if(l===0)s!==null&&V(s),t.callbackNode=null,t.callbackPriority=0;else if(n=l&-l,t.callbackPriority!==n){if(s!=null&&V(s),n===1)t.tag===0?Mv(dp.bind(null,t)):Kh(dp.bind(null,t)),_v(function(){(pt&6)===0&&Zn()}),s=null;else{switch(rh(l)){case 1:s=qe;break;case 4:s=Ke;break;case 16:s=je;break;case 536870912:s=wt;break;default:s=je}s=xp(s,cp.bind(null,t))}t.callbackPriority=n,t.callbackNode=s}}function cp(t,n){if(Fo=-1,zo=0,(pt&6)!==0)throw Error(r(327));var s=t.callbackNode;if(va()&&t.callbackNode!==s)return null;var l=Ct(t,t===Zt?nr:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||n)n=ko(t,l);else{n=l;var c=pt;pt|=2;var p=fp();(Zt!==t||nr!==n)&&(En=null,ga=Te()+500,Ci(t,n));do try{Gv();break}catch(L){hp(t,L)}while(!0);Tu(),No.current=p,pt=c,Ht!==null?n=0:(Zt=null,nr=0,n=Wt)}if(n!==0){if(n===2&&(c=ir(t),c!==0&&(l=c,n=oc(t,c))),n===1)throw s=Ms,Ci(t,0),ni(t,l),xr(t,Te()),s;if(n===6)ni(t,l);else{if(c=t.current.alternate,(l&30)===0&&!Hv(c)&&(n=ko(t,l),n===2&&(p=ir(t),p!==0&&(l=p,n=oc(t,p))),n===1))throw s=Ms,Ci(t,0),ni(t,l),xr(t,Te()),s;switch(t.finishedWork=c,t.finishedLanes=l,n){case 0:case 1:throw Error(r(345));case 2:bi(t,_r,En);break;case 3:if(ni(t,l),(l&130023424)===l&&(n=ic+500-Te(),10<n)){if(Ct(t,0)!==0)break;if(c=t.suspendedLanes,(c&l)!==l){hr(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=fu(bi.bind(null,t,_r,En),n);break}bi(t,_r,En);break;case 4:if(ni(t,l),(l&4194240)===l)break;for(n=t.eventTimes,c=-1;0<l;){var M=31-Oe(l);p=1<<M,M=n[M],M>c&&(c=M),l&=~p}if(l=c,l=Te()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Bv(l/1960))-l,10<l){t.timeoutHandle=fu(bi.bind(null,t,_r,En),l);break}bi(t,_r,En);break;case 5:bi(t,_r,En);break;default:throw Error(r(329))}}}return xr(t,Te()),t.callbackNode===s?cp.bind(null,t):null}function oc(t,n){var s=Es;return t.current.memoizedState.isDehydrated&&(Ci(t,n).flags|=256),t=ko(t,n),t!==2&&(n=_r,_r=s,n!==null&&lc(n)),t}function lc(t){_r===null?_r=t:_r.push.apply(_r,t)}function Hv(t){for(var n=t;;){if(n.flags&16384){var s=n.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var l=0;l<s.length;l++){var c=s[l],p=c.getSnapshot;c=c.value;try{if(!Wr(p(),c))return!1}catch{return!1}}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ni(t,n){for(n&=~nc,n&=~Uo,t.suspendedLanes|=n,t.pingedLanes&=~n,t=t.expirationTimes;0<n;){var s=31-Oe(n),l=1<<s;t[s]=-1,n&=~l}}function dp(t){if((pt&6)!==0)throw Error(r(327));va();var n=Ct(t,0);if((n&1)===0)return xr(t,Te()),null;var s=ko(t,n);if(t.tag!==0&&s===2){var l=ir(t);l!==0&&(n=l,s=oc(t,l))}if(s===1)throw s=Ms,Ci(t,0),ni(t,n),xr(t,Te()),s;if(s===6)throw Error(r(345));return t.finishedWork=t.current.alternate,t.finishedLanes=n,bi(t,_r,En),xr(t,Te()),null}function uc(t,n){var s=pt;pt|=1;try{return t(n)}finally{pt=s,pt===0&&(ga=Te()+500,ho&&Zn())}}function Ri(t){ti!==null&&ti.tag===0&&(pt&6)===0&&va();var n=pt;pt|=1;var s=kr.transition,l=Mt;try{if(kr.transition=null,Mt=1,t)return t()}finally{Mt=l,kr.transition=s,pt=n,(pt&6)===0&&Zn()}}function cc(){Lr=ma.current,Lt(ma)}function Ci(t,n){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;if(s!==-1&&(t.timeoutHandle=-1,vv(s)),Ht!==null)for(s=Ht.return;s!==null;){var l=s;switch(xu(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&uo();break;case 3:ha(),Lt(mr),Lt(ar),Nu();break;case 5:Pu(l);break;case 4:ha();break;case 13:Lt(It);break;case 19:Lt(It);break;case 10:wu(l.type._context);break;case 22:case 23:cc()}s=s.return}if(Zt=t,Ht=t=ii(t.current,null),nr=Lr=n,Wt=0,Ms=null,nc=Uo=Ai=0,_r=Es=null,Ei!==null){for(n=0;n<Ei.length;n++)if(s=Ei[n],l=s.interleaved,l!==null){s.interleaved=null;var c=l.next,p=s.pending;if(p!==null){var M=p.next;p.next=c,l.next=M}s.pending=l}Ei=null}return t}function hp(t,n){do{var s=Ht;try{if(Tu(),Mo.current=Ao,Eo){for(var l=Ot.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}Eo=!1}if(wi=0,Kt=Gt=Ot=null,gs=!1,vs=0,rc.current=null,s===null||s.return===null){Wt=1,Ms=n,Ht=null;break}e:{var p=t,M=s.return,L=s,O=n;if(n=nr,L.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var Q=O,me=L,ve=me.tag;if((me.mode&1)===0&&(ve===0||ve===11||ve===15)){var fe=me.alternate;fe?(me.updateQueue=fe.updateQueue,me.memoizedState=fe.memoizedState,me.lanes=fe.lanes):(me.updateQueue=null,me.memoizedState=null)}var Ue=Ff(M);if(Ue!==null){Ue.flags&=-257,zf(Ue,M,L,p,n),Ue.mode&1&&Of(p,Q,n),n=Ue,O=Q;var Be=n.updateQueue;if(Be===null){var He=new Set;He.add(O),n.updateQueue=He}else Be.add(O);break e}else{if((n&1)===0){Of(p,Q,n),dc();break e}O=Error(r(426))}}else if(Ut&&L.mode&1){var kt=Ff(M);if(kt!==null){(kt.flags&65536)===0&&(kt.flags|=256),zf(kt,M,L,p,n),Mu(fa(O,L));break e}}p=O=fa(O,L),Wt!==4&&(Wt=2),Es===null?Es=[p]:Es.push(p),p=M;do{switch(p.tag){case 3:p.flags|=65536,n&=-n,p.lanes|=n;var W=Df(p,O,n);of(p,W);break e;case 1:L=O;var k=p.type,X=p.stateNode;if((p.flags&128)===0&&(typeof k.getDerivedStateFromError=="function"||X!==null&&typeof X.componentDidCatch=="function"&&(ei===null||!ei.has(X)))){p.flags|=65536,n&=-n,p.lanes|=n;var Ee=If(p,L,n);of(p,Ee);break e}}p=p.return}while(p!==null)}mp(s)}catch(Ve){n=Ve,Ht===s&&s!==null&&(Ht=s=s.return);continue}break}while(!0)}function fp(){var t=No.current;return No.current=Ao,t===null?Ao:t}function dc(){(Wt===0||Wt===3||Wt===2)&&(Wt=4),Zt===null||(Ai&268435455)===0&&(Uo&268435455)===0||ni(Zt,nr)}function ko(t,n){var s=pt;pt|=2;var l=fp();(Zt!==t||nr!==n)&&(En=null,Ci(t,n));do try{Vv();break}catch(c){hp(t,c)}while(!0);if(Tu(),pt=s,No.current=l,Ht!==null)throw Error(r(261));return Zt=null,nr=0,Wt}function Vv(){for(;Ht!==null;)pp(Ht)}function Gv(){for(;Ht!==null&&!ye();)pp(Ht)}function pp(t){var n=_p(t.alternate,t,Lr);t.memoizedProps=t.pendingProps,n===null?mp(t):Ht=n,rc.current=null}function mp(t){var n=t;do{var s=n.alternate;if(t=n.return,(n.flags&32768)===0){if(s=Iv(s,n,Lr),s!==null){Ht=s;return}}else{if(s=Ov(s,n),s!==null){s.flags&=32767,Ht=s;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Wt=6,Ht=null;return}}if(n=n.sibling,n!==null){Ht=n;return}Ht=n=t}while(n!==null);Wt===0&&(Wt=5)}function bi(t,n,s){var l=Mt,c=kr.transition;try{kr.transition=null,Mt=1,Wv(t,n,s,l)}finally{kr.transition=c,Mt=l}return null}function Wv(t,n,s,l){do va();while(ti!==null);if((pt&6)!==0)throw Error(r(327));s=t.finishedWork;var c=t.finishedLanes;if(s===null)return null;if(t.finishedWork=null,t.finishedLanes=0,s===t.current)throw Error(r(177));t.callbackNode=null,t.callbackPriority=0;var p=s.lanes|s.childLanes;if(Tg(t,p),t===Zt&&(Ht=Zt=null,nr=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||Io||(Io=!0,xp(je,function(){return va(),null})),p=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||p){p=kr.transition,kr.transition=null;var M=Mt;Mt=1;var L=pt;pt|=4,rc.current=null,zv(t,s),ap(s,t),cv(du),Ks=!!cu,du=cu=null,t.current=s,kv(s),Ie(),pt=L,Mt=M,kr.transition=p}else t.current=s;if(Io&&(Io=!1,ti=t,Oo=c),p=t.pendingLanes,p===0&&(ei=null),Rt(s.stateNode),xr(t,Te()),n!==null)for(l=t.onRecoverableError,s=0;s<n.length;s++)c=n[s],l(c.value,{componentStack:c.stack,digest:c.digest});if(Do)throw Do=!1,t=ac,ac=null,t;return(Oo&1)!==0&&t.tag!==0&&va(),p=t.pendingLanes,(p&1)!==0?t===sc?Ts++:(Ts=0,sc=t):Ts=0,Zn(),null}function va(){if(ti!==null){var t=rh(Oo),n=kr.transition,s=Mt;try{if(kr.transition=null,Mt=16>t?16:t,ti===null)var l=!1;else{if(t=ti,ti=null,Oo=0,(pt&6)!==0)throw Error(r(331));var c=pt;for(pt|=4,ke=t.current;ke!==null;){var p=ke,M=p.child;if((ke.flags&16)!==0){var L=p.deletions;if(L!==null){for(var O=0;O<L.length;O++){var Q=L[O];for(ke=Q;ke!==null;){var me=ke;switch(me.tag){case 0:case 11:case 15:Ss(8,me,p)}var ve=me.child;if(ve!==null)ve.return=me,ke=ve;else for(;ke!==null;){me=ke;var fe=me.sibling,Ue=me.return;if(ep(me),me===Q){ke=null;break}if(fe!==null){fe.return=Ue,ke=fe;break}ke=Ue}}}var Be=p.alternate;if(Be!==null){var He=Be.child;if(He!==null){Be.child=null;do{var kt=He.sibling;He.sibling=null,He=kt}while(He!==null)}}ke=p}}if((p.subtreeFlags&2064)!==0&&M!==null)M.return=p,ke=M;else e:for(;ke!==null;){if(p=ke,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Ss(9,p,p.return)}var W=p.sibling;if(W!==null){W.return=p.return,ke=W;break e}ke=p.return}}var k=t.current;for(ke=k;ke!==null;){M=ke;var X=M.child;if((M.subtreeFlags&2064)!==0&&X!==null)X.return=M,ke=X;else e:for(M=k;ke!==null;){if(L=ke,(L.flags&2048)!==0)try{switch(L.tag){case 0:case 11:case 15:Lo(9,L)}}catch(Ve){Ft(L,L.return,Ve)}if(L===M){ke=null;break e}var Ee=L.sibling;if(Ee!==null){Ee.return=L.return,ke=Ee;break e}ke=L.return}}if(pt=c,Zn(),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(At,t)}catch{}l=!0}return l}finally{Mt=s,kr.transition=n}}return!1}function gp(t,n,s){n=fa(s,n),n=Df(t,n,1),t=Qn(t,n,1),n=hr(),t!==null&&(Bn(t,1,n),xr(t,n))}function Ft(t,n,s){if(t.tag===3)gp(t,t,s);else for(;n!==null;){if(n.tag===3){gp(n,t,s);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ei===null||!ei.has(l))){t=fa(s,t),t=If(n,t,1),n=Qn(n,t,1),t=hr(),n!==null&&(Bn(n,1,t),xr(n,t));break}}n=n.return}}function jv(t,n,s){var l=t.pingCache;l!==null&&l.delete(n),n=hr(),t.pingedLanes|=t.suspendedLanes&s,Zt===t&&(nr&s)===s&&(Wt===4||Wt===3&&(nr&130023424)===nr&&500>Te()-ic?Ci(t,0):nc|=s),xr(t,n)}function vp(t,n){n===0&&((t.mode&1)===0?n=1:(n=qt,qt<<=1,(qt&130023424)===0&&(qt=4194304)));var s=hr();t=yn(t,n),t!==null&&(Bn(t,n,s),xr(t,s))}function Xv(t){var n=t.memoizedState,s=0;n!==null&&(s=n.retryLane),vp(t,s)}function Yv(t,n){var s=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(s=c.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(r(314))}l!==null&&l.delete(n),vp(t,s)}var _p;_p=function(t,n,s){if(t!==null)if(t.memoizedProps!==n.pendingProps||mr.current)vr=!0;else{if((t.lanes&s)===0&&(n.flags&128)===0)return vr=!1,Dv(t,n,s);vr=(t.flags&131072)!==0}else vr=!1,Ut&&(n.flags&1048576)!==0&&Zh(n,po,n.index);switch(n.lanes=0,n.tag){case 2:var l=n.type;bo(t,n),t=n.pendingProps;var c=aa(n,ar.current);da(n,s),c=Iu(null,n,l,t,c,s);var p=Ou();return n.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,gr(l)?(p=!0,co(n)):p=!1,n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,Cu(n),c.updater=Ro,n.stateNode=c,c._reactInternals=n,Vu(n,l,t,s),n=Xu(null,n,l,!0,p,s)):(n.tag=0,Ut&&p&&_u(n),dr(null,n,c,s),n=n.child),n;case 16:l=n.elementType;e:{switch(bo(t,n),t=n.pendingProps,c=l._init,l=c(l._payload),n.type=l,c=n.tag=Kv(l),t=Xr(l,t),c){case 0:n=ju(null,n,l,t,s);break e;case 1:n=Wf(null,n,l,t,s);break e;case 11:n=kf(null,n,l,t,s);break e;case 14:n=Bf(null,n,l,Xr(l.type,t),s);break e}throw Error(r(306,l,""))}return n;case 0:return l=n.type,c=n.pendingProps,c=n.elementType===l?c:Xr(l,c),ju(t,n,l,c,s);case 1:return l=n.type,c=n.pendingProps,c=n.elementType===l?c:Xr(l,c),Wf(t,n,l,c,s);case 3:e:{if(jf(n),t===null)throw Error(r(387));l=n.pendingProps,p=n.memoizedState,c=p.element,sf(t,n),yo(n,l,null,s);var M=n.memoizedState;if(l=M.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},n.updateQueue.baseState=p,n.memoizedState=p,n.flags&256){c=fa(Error(r(423)),n),n=Xf(t,n,l,s,c);break e}else if(l!==c){c=fa(Error(r(424)),n),n=Xf(t,n,l,s,c);break e}else for(Pr=Yn(n.stateNode.containerInfo.firstChild),br=n,Ut=!0,jr=null,s=nf(n,null,l,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(la(),l===c){n=Mn(t,n,s);break e}dr(t,n,l,s)}n=n.child}return n;case 5:return uf(n),t===null&&Su(n),l=n.type,c=n.pendingProps,p=t!==null?t.memoizedProps:null,M=c.children,hu(l,c)?M=null:p!==null&&hu(l,p)&&(n.flags|=32),Gf(t,n),dr(t,n,M,s),n.child;case 6:return t===null&&Su(n),null;case 13:return Yf(t,n,s);case 4:return bu(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=ua(n,null,l,s):dr(t,n,l,s),n.child;case 11:return l=n.type,c=n.pendingProps,c=n.elementType===l?c:Xr(l,c),kf(t,n,l,c,s);case 7:return dr(t,n,n.pendingProps,s),n.child;case 8:return dr(t,n,n.pendingProps.children,s),n.child;case 12:return dr(t,n,n.pendingProps.children,s),n.child;case 10:e:{if(l=n.type._context,c=n.pendingProps,p=n.memoizedProps,M=c.value,bt(vo,l._currentValue),l._currentValue=M,p!==null)if(Wr(p.value,M)){if(p.children===c.children&&!mr.current){n=Mn(t,n,s);break e}}else for(p=n.child,p!==null&&(p.return=n);p!==null;){var L=p.dependencies;if(L!==null){M=p.child;for(var O=L.firstContext;O!==null;){if(O.context===l){if(p.tag===1){O=Sn(-1,s&-s),O.tag=2;var Q=p.updateQueue;if(Q!==null){Q=Q.shared;var me=Q.pending;me===null?O.next=O:(O.next=me.next,me.next=O),Q.pending=O}}p.lanes|=s,O=p.alternate,O!==null&&(O.lanes|=s),Au(p.return,s,n),L.lanes|=s;break}O=O.next}}else if(p.tag===10)M=p.type===n.type?null:p.child;else if(p.tag===18){if(M=p.return,M===null)throw Error(r(341));M.lanes|=s,L=M.alternate,L!==null&&(L.lanes|=s),Au(M,s,n),M=p.sibling}else M=p.child;if(M!==null)M.return=p;else for(M=p;M!==null;){if(M===n){M=null;break}if(p=M.sibling,p!==null){p.return=M.return,M=p;break}M=M.return}p=M}dr(t,n,c.children,s),n=n.child}return n;case 9:return c=n.type,l=n.pendingProps.children,da(n,s),c=Fr(c),l=l(c),n.flags|=1,dr(t,n,l,s),n.child;case 14:return l=n.type,c=Xr(l,n.pendingProps),c=Xr(l.type,c),Bf(t,n,l,c,s);case 15:return Hf(t,n,n.type,n.pendingProps,s);case 17:return l=n.type,c=n.pendingProps,c=n.elementType===l?c:Xr(l,c),bo(t,n),n.tag=1,gr(l)?(t=!0,co(n)):t=!1,da(n,s),Nf(n,l,c),Vu(n,l,c,s),Xu(null,n,l,!0,t,s);case 19:return Kf(t,n,s);case 22:return Vf(t,n,s)}throw Error(r(156,n.tag))};function xp(t,n){return $(t,n)}function qv(t,n,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Br(t,n,s,l){return new qv(t,n,s,l)}function hc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Kv(t){if(typeof t=="function")return hc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===re)return 11;if(t===pe)return 14}return 2}function ii(t,n){var s=t.alternate;return s===null?(s=Br(t.tag,n,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=n,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&14680064,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,n=t.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s}function Bo(t,n,s,l,c,p){var M=2;if(l=t,typeof t=="function")hc(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case I:return Pi(s.children,c,p,n);case q:M=8,c|=8;break;case _e:return t=Br(12,s,n,c|2),t.elementType=_e,t.lanes=p,t;case ne:return t=Br(13,s,n,c),t.elementType=ne,t.lanes=p,t;case ae:return t=Br(19,s,n,c),t.elementType=ae,t.lanes=p,t;case ce:return Ho(s,c,p,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case E:M=10;break e;case C:M=9;break e;case re:M=11;break e;case pe:M=14;break e;case ee:M=16,l=null;break e}throw Error(r(130,t==null?t:typeof t,""))}return n=Br(M,s,n,c),n.elementType=t,n.type=l,n.lanes=p,n}function Pi(t,n,s,l){return t=Br(7,t,l,n),t.lanes=s,t}function Ho(t,n,s,l){return t=Br(22,t,l,n),t.elementType=ce,t.lanes=s,t.stateNode={isHidden:!1},t}function fc(t,n,s){return t=Br(6,t,null,n),t.lanes=s,t}function pc(t,n,s){return n=Br(4,t.children!==null?t.children:[],t.key,n),n.lanes=s,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function Zv(t,n,s,l,c){this.tag=n,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qa(0),this.expirationTimes=qa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qa(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function mc(t,n,s,l,c,p,M,L,O){return t=new Zv(t,n,s,L,O),n===1?(n=1,p===!0&&(n|=8)):n=0,p=Br(3,null,null,n),t.current=p,p.stateNode=t,p.memoizedState={element:l,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cu(p),t}function $v(t,n,s){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:l==null?null:""+l,children:t,containerInfo:n,implementation:s}}function yp(t){if(!t)return Kn;t=t._reactInternals;e:{if(fn(t)!==t||t.tag!==1)throw Error(r(170));var n=t;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(gr(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(r(171))}if(t.tag===1){var s=t.type;if(gr(s))return Yh(t,s,n)}return n}function Sp(t,n,s,l,c,p,M,L,O){return t=mc(s,l,!0,t,c,p,M,L,O),t.context=yp(null),s=t.current,l=hr(),c=ri(s),p=Sn(l,c),p.callback=n??null,Qn(s,p,c),t.current.lanes=c,Bn(t,c,l),xr(t,l),t}function Vo(t,n,s,l){var c=n.current,p=hr(),M=ri(c);return s=yp(s),n.context===null?n.context=s:n.pendingContext=s,n=Sn(p,M),n.payload={element:t},l=l===void 0?null:l,l!==null&&(n.callback=l),t=Qn(c,n,M),t!==null&&(Kr(t,c,M,p),xo(t,c,M)),M}function Go(t){return t=t.current,t.child?(t.child.tag===5,t.child.stateNode):null}function Mp(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<n?s:n}}function gc(t,n){Mp(t,n),(t=t.alternate)&&Mp(t,n)}function Qv(){return null}var Ep=typeof reportError=="function"?reportError:function(t){console.error(t)};function vc(t){this._internalRoot=t}Wo.prototype.render=vc.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));Vo(t,n,null,null)},Wo.prototype.unmount=vc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Ri(function(){Vo(null,t,null,null)}),n[gn]=null}};function Wo(t){this._internalRoot=t}Wo.prototype.unstable_scheduleHydration=function(t){if(t){var n=ah();t={blockedOn:null,target:t,priority:n};for(var s=0;s<Wn.length&&n!==0&&n<Wn[s].priority;s++);Wn.splice(s,0,t),s===0&&lh(t)}};function _c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function jo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Tp(){}function Jv(t,n,s,l,c){if(c){if(typeof l=="function"){var p=l;l=function(){var Q=Go(M);p.call(Q)}}var M=Sp(n,l,t,0,null,!1,!1,"",Tp);return t._reactRootContainer=M,t[gn]=M.current,ls(t.nodeType===8?t.parentNode:t),Ri(),M}for(;c=t.lastChild;)t.removeChild(c);if(typeof l=="function"){var L=l;l=function(){var Q=Go(O);L.call(Q)}}var O=mc(t,0,!1,null,null,!1,!1,"",Tp);return t._reactRootContainer=O,t[gn]=O.current,ls(t.nodeType===8?t.parentNode:t),Ri(function(){Vo(n,O,s,l)}),O}function Xo(t,n,s,l,c){var p=s._reactRootContainer;if(p){var M=p;if(typeof c=="function"){var L=c;c=function(){var O=Go(M);L.call(O)}}Vo(n,M,t,c)}else M=Jv(s,n,t,c,l);return Go(M)}nh=function(t){switch(t.tag){case 3:var n=t.stateNode;if(n.current.memoizedState.isDehydrated){var s=mn(n.pendingLanes);s!==0&&(Vl(n,s|1),xr(n,Te()),(pt&6)===0&&(ga=Te()+500,Zn()))}break;case 13:Ri(function(){var l=yn(t,1);if(l!==null){var c=hr();Kr(l,t,1,c)}}),gc(t,1)}},Gl=function(t){if(t.tag===13){var n=yn(t,134217728);if(n!==null){var s=hr();Kr(n,t,134217728,s)}gc(t,134217728)}},ih=function(t){if(t.tag===13){var n=ri(t),s=yn(t,n);if(s!==null){var l=hr();Kr(s,t,n,l)}gc(t,n)}},ah=function(){return Mt},sh=function(t,n){var s=Mt;try{return Mt=t,n()}finally{Mt=s}},ie=function(t,n,s){switch(n){case"input":if(Ze(t,s),n=s.name,s.type==="radio"&&n!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<s.length;n++){var l=s[n];if(l!==t&&l.form===t.form){var c=lo(l);if(!c)throw Error(r(90));lt(l),Ze(l,c)}}}break;case"textarea":xe(t,s);break;case"select":n=s.value,n!=null&&T(t,!!s.multiple,n,!1)}},er=uc,dt=Ri;var e_={usingClientEntryPoint:!1,Events:[ds,na,lo,St,Dt,uc]},ws={findFiberByHostInstance:xi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},t_={bundleType:ws.bundleType,version:ws.version,rendererPackageName:ws.rendererPackageName,rendererConfig:ws.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:U.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=G(t),t===null?null:t.stateNode},findFiberByHostInstance:ws.findFiberByHostInstance||Qv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yo.isDisabled&&Yo.supportsFiber)try{At=Yo.inject(t_),xt=Yo}catch{}}return yr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=e_,yr.createPortal=function(t,n){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_c(n))throw Error(r(200));return $v(t,n,null,s)},yr.createRoot=function(t,n){if(!_c(t))throw Error(r(299));var s=!1,l="",c=Ep;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(c=n.onRecoverableError)),n=mc(t,1,!1,null,null,s,!1,l,c),t[gn]=n.current,ls(t.nodeType===8?t.parentNode:t),new vc(n)},yr.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=G(n),t=t===null?null:t.stateNode,t},yr.flushSync=function(t){return Ri(t)},yr.hydrate=function(t,n,s){if(!jo(n))throw Error(r(200));return Xo(null,t,n,!0,s)},yr.hydrateRoot=function(t,n,s){if(!_c(t))throw Error(r(405));var l=s!=null&&s.hydratedSources||null,c=!1,p="",M=Ep;if(s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(p=s.identifierPrefix),s.onRecoverableError!==void 0&&(M=s.onRecoverableError)),n=Sp(n,null,t,1,s??null,c,!1,p,M),t[gn]=n.current,ls(t),l)for(t=0;t<l.length;t++)s=l[t],c=s._getVersion,c=c(s._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[s,c]:n.mutableSourceEagerHydrationData.push(s,c);return new Wo(n)},yr.render=function(t,n,s){if(!jo(n))throw Error(r(200));return Xo(null,t,n,!1,s)},yr.unmountComponentAtNode=function(t){if(!jo(t))throw Error(r(40));return t._reactRootContainer?(Ri(function(){Xo(null,null,t,!1,function(){t._reactRootContainer=null,t[gn]=null})}),!0):!1},yr.unstable_batchedUpdates=uc,yr.unstable_renderSubtreeIntoContainer=function(t,n,s,l){if(!jo(s))throw Error(r(200));if(t==null||t._reactInternals===void 0)throw Error(r(38));return Xo(t,n,s,!1,l)},yr.version="18.3.1-next-f1338f8080-20240426",yr}var Np;function Bm(){if(Np)return Sc.exports;Np=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Sc.exports=l_(),Sc.exports}var Up;function u_(){if(Up)return qo;Up=1;var a=Bm();return qo.createRoot=a.createRoot,qo.hydrateRoot=a.hydrateRoot,qo}var c_=u_();const d_=km(c_);function Hm(a){var e,r,i="";if(typeof a=="string"||typeof a=="number")i+=a;else if(typeof a=="object")if(Array.isArray(a)){var o=a.length;for(e=0;e<o;e++)a[e]&&(r=Hm(a[e]))&&(i&&(i+=" "),i+=r)}else for(r in a)a[r]&&(i&&(i+=" "),i+=r);return i}function h_(){for(var a,e,r=0,i="",o=arguments.length;r<o;r++)(a=arguments[r])&&(e=Hm(a))&&(i&&(i+=" "),i+=e);return i}Bm();const Fl=(...a)=>h_(...a);var Dp={exports:{}},Rs={},Ip;function f_(){if(Ip)return Rs;Ip=1;var a=jd,e=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(d,f,m){var v,y={},x=null,S=null;m!==void 0&&(x=""+m),f.key!==void 0&&(x=""+f.key),f.ref!==void 0&&(S=f.ref);for(v in f)i.call(f,v)&&!u.hasOwnProperty(v)&&(y[v]=f[v]);if(d&&d.defaultProps)for(v in f=d.defaultProps,f)y[v]===void 0&&(y[v]=f[v]);return{$$typeof:e,type:d,key:x,ref:S,props:y,_owner:o.current}}return Rs.Fragment=r,Rs.jsx=h,Rs.jsxs=h,Rs}var Op;function p_(){return Op||(Op=1,Dp.exports=f_()),Dp.exports}var Gi=p_();const Ko=({children:a,variant:e="primary",className:r,...i})=>{const o="px-6 py-3 rounded-xl transition-all duration-300 font-semibold",u={primary:"bg-cyan-500/20 text-cyan-300 neon-glow hover:bg-cyan-400/30",secondary:"bg-purple-500/20 text-purple-300 neon-glow hover:bg-purple-400/30",outline:"border border-cyan-400 text-cyan-300 hover:bg-cyan-400/10"};return Gi.jsx("button",{className:Fl(o,u[e],r),...i,children:a})},_a=({title:a,value:e,glass:r=!0,glow:i=!0,className:o,children:u,...h})=>Gi.jsxs("div",{className:Fl("rounded-2xl p-6 transition hover:scale-[1.02]",r&&"glass",i&&"neon-glow",o),...h,children:[a&&Gi.jsx("h3",{className:"text-sm text-gray-200",children:a}),e&&Gi.jsx("p",{className:"text-3xl text-cyan-300 mt-2",children:e}),u]}),Vm=jd.forwardRef(({glow:a=!0,className:e,...r},i)=>Gi.jsx("input",{ref:i,className:Fl("w-full rounded-xl px-4 py-3 text-cyan-50 placeholder:text-cyan-200/50 transition","bg-white/5 border border-cyan-400/25","backdrop-blur-[18px]",a&&"neon-glow",e),...r}));Vm.displayName="NeoInput";const Fp=({columns:a={base:1,md:2,lg:3},gap:e="md",className:r,children:i,...o})=>{const u={sm:"gap-4",md:"gap-6",lg:"gap-8"},h=`grid-cols-${a.base??1}`,d=a.md?`md:grid-cols-${a.md}`:"",f=a.lg?`lg:grid-cols-${a.lg}`:"";return Gi.jsx("div",{className:Fl("grid",h,d,f,u[e],r),...o,children:i})},Xd="169",m_=0,zp=1,g_=2,Gm=1,v_=2,bn=3,gi=0,Tr=1,Pn=2,pi=0,Da=1,bl=2,kp=3,Bp=4,__=5,ki=100,x_=101,y_=102,S_=103,M_=104,E_=200,T_=201,w_=202,A_=203,rd=204,nd=205,R_=206,C_=207,b_=208,P_=209,L_=210,N_=211,U_=212,D_=213,I_=214,id=0,ad=1,sd=2,Fa=3,od=4,ld=5,ud=6,cd=7,Wm=0,O_=1,F_=2,mi=0,z_=1,k_=2,B_=3,H_=4,V_=5,G_=6,W_=7,jm=300,za=301,ka=302,dd=303,hd=304,zl=306,fd=1e3,Hi=1001,pd=1002,Vr=1003,j_=1004,Zo=1005,en=1006,Tc=1007,Vi=1008,In=1009,Xm=1010,Ym=1011,Os=1012,Yd=1013,Wi=1014,Ln=1015,Fs=1016,qd=1017,Kd=1018,Ba=1020,qm=35902,Km=1021,Zm=1022,rn=1023,$m=1024,Qm=1025,Ia=1026,Ha=1027,Jm=1028,Zd=1029,eg=1030,$d=1031,Qd=1033,Ml=33776,El=33777,Tl=33778,wl=33779,md=35840,gd=35841,vd=35842,_d=35843,xd=36196,yd=37492,Sd=37496,Md=37808,Ed=37809,Td=37810,wd=37811,Ad=37812,Rd=37813,Cd=37814,bd=37815,Pd=37816,Ld=37817,Nd=37818,Ud=37819,Dd=37820,Id=37821,Al=36492,Od=36494,Fd=36495,tg=36283,zd=36284,kd=36285,Bd=36286,X_=3200,Y_=3201,q_=0,K_=1,fi="",cn="srgb",vi="srgb-linear",Jd="display-p3",kl="display-p3-linear",Pl="linear",Nt="srgb",Ll="rec709",Nl="p3",xa=7680,Hp=519,Z_=512,$_=513,Q_=514,rg=515,J_=516,e0=517,t0=518,r0=519,Vp=35044,Gp="300 es",Nn=2e3,Ul=2001;class Ga{addEventListener(e,r){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(r)===-1&&i[e].push(r)}hasEventListener(e,r){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(r)!==-1}removeEventListener(e,r){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const o=i.indexOf(r);o!==-1&&i.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const i=r.slice(0);for(let o=0,u=i.length;o<u;o++)i[o].call(this,e);e.target=null}}}const ur=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wc=Math.PI/180,Hd=180/Math.PI;function zs(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,r=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ur[a&255]+ur[a>>8&255]+ur[a>>16&255]+ur[a>>24&255]+"-"+ur[e&255]+ur[e>>8&255]+"-"+ur[e>>16&15|64]+ur[e>>24&255]+"-"+ur[r&63|128]+ur[r>>8&255]+"-"+ur[r>>16&255]+ur[r>>24&255]+ur[i&255]+ur[i>>8&255]+ur[i>>16&255]+ur[i>>24&255]).toLowerCase()}function Mr(a,e,r){return Math.max(e,Math.min(r,a))}function n0(a,e){return(a%e+e)%e}function Ac(a,e,r){return(1-r)*a+r*e}function Cs(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Sr(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class Tt{constructor(e=0,r=0){Tt.prototype.isVector2=!0,this.x=e,this.y=r}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,r){return this.x=e,this.y=r,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const r=this.x,i=this.y,o=e.elements;return this.x=o[0]*r+o[3]*i+o[6],this.y=o[1]*r+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,r){return this.x=Math.max(e.x,Math.min(r.x,this.x)),this.y=Math.max(e.y,Math.min(r.y,this.y)),this}clampScalar(e,r){return this.x=Math.max(e,Math.min(r,this.x)),this.y=Math.max(e,Math.min(r,this.y)),this}clampLength(e,r){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(r,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const r=Math.sqrt(this.lengthSq()*e.lengthSq());if(r===0)return Math.PI/2;const i=this.dot(e)/r;return Math.acos(Mr(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const r=this.x-e.x,i=this.y-e.y;return r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this}lerpVectors(e,r,i){return this.x=e.x+(r.x-e.x)*i,this.y=e.y+(r.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this}rotateAround(e,r){const i=Math.cos(r),o=Math.sin(r),u=this.x-e.x,h=this.y-e.y;return this.x=u*i-h*o+e.x,this.y=u*o+h*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class it{constructor(e,r,i,o,u,h,d,f,m){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,r,i,o,u,h,d,f,m)}set(e,r,i,o,u,h,d,f,m){const v=this.elements;return v[0]=e,v[1]=o,v[2]=d,v[3]=r,v[4]=u,v[5]=f,v[6]=i,v[7]=h,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const r=this.elements,i=e.elements;return r[0]=i[0],r[1]=i[1],r[2]=i[2],r[3]=i[3],r[4]=i[4],r[5]=i[5],r[6]=i[6],r[7]=i[7],r[8]=i[8],this}extractBasis(e,r,i){return e.setFromMatrix3Column(this,0),r.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const r=e.elements;return this.set(r[0],r[4],r[8],r[1],r[5],r[9],r[2],r[6],r[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,r){const i=e.elements,o=r.elements,u=this.elements,h=i[0],d=i[3],f=i[6],m=i[1],v=i[4],y=i[7],x=i[2],S=i[5],w=i[8],A=o[0],g=o[3],_=o[6],D=o[1],b=o[4],U=o[7],te=o[2],B=o[5],I=o[8];return u[0]=h*A+d*D+f*te,u[3]=h*g+d*b+f*B,u[6]=h*_+d*U+f*I,u[1]=m*A+v*D+y*te,u[4]=m*g+v*b+y*B,u[7]=m*_+v*U+y*I,u[2]=x*A+S*D+w*te,u[5]=x*g+S*b+w*B,u[8]=x*_+S*U+w*I,this}multiplyScalar(e){const r=this.elements;return r[0]*=e,r[3]*=e,r[6]*=e,r[1]*=e,r[4]*=e,r[7]*=e,r[2]*=e,r[5]*=e,r[8]*=e,this}determinant(){const e=this.elements,r=e[0],i=e[1],o=e[2],u=e[3],h=e[4],d=e[5],f=e[6],m=e[7],v=e[8];return r*h*v-r*d*m-i*u*v+i*d*f+o*u*m-o*h*f}invert(){const e=this.elements,r=e[0],i=e[1],o=e[2],u=e[3],h=e[4],d=e[5],f=e[6],m=e[7],v=e[8],y=v*h-d*m,x=d*f-v*u,S=m*u-h*f,w=r*y+i*x+o*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=y*A,e[1]=(o*m-v*i)*A,e[2]=(d*i-o*h)*A,e[3]=x*A,e[4]=(v*r-o*f)*A,e[5]=(o*u-d*r)*A,e[6]=S*A,e[7]=(i*f-m*r)*A,e[8]=(h*r-i*u)*A,this}transpose(){let e;const r=this.elements;return e=r[1],r[1]=r[3],r[3]=e,e=r[2],r[2]=r[6],r[6]=e,e=r[5],r[5]=r[7],r[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const r=this.elements;return e[0]=r[0],e[1]=r[3],e[2]=r[6],e[3]=r[1],e[4]=r[4],e[5]=r[7],e[6]=r[2],e[7]=r[5],e[8]=r[8],this}setUvTransform(e,r,i,o,u,h,d){const f=Math.cos(u),m=Math.sin(u);return this.set(i*f,i*m,-i*(f*h+m*d)+h+e,-o*m,o*f,-o*(-m*h+f*d)+d+r,0,0,1),this}scale(e,r){return this.premultiply(Rc.makeScale(e,r)),this}rotate(e){return this.premultiply(Rc.makeRotation(-e)),this}translate(e,r){return this.premultiply(Rc.makeTranslation(e,r)),this}makeTranslation(e,r){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,r,0,0,1),this}makeRotation(e){const r=Math.cos(e),i=Math.sin(e);return this.set(r,-i,0,i,r,0,0,0,1),this}makeScale(e,r){return this.set(e,0,0,0,r,0,0,0,1),this}equals(e){const r=this.elements,i=e.elements;for(let o=0;o<9;o++)if(r[o]!==i[o])return!1;return!0}fromArray(e,r=0){for(let i=0;i<9;i++)this.elements[i]=e[i+r];return this}toArray(e=[],r=0){const i=this.elements;return e[r]=i[0],e[r+1]=i[1],e[r+2]=i[2],e[r+3]=i[3],e[r+4]=i[4],e[r+5]=i[5],e[r+6]=i[6],e[r+7]=i[7],e[r+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rc=new it;function ng(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Dl(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function i0(){const a=Dl("canvas");return a.style.display="block",a}const Wp={};function Rl(a){a in Wp||(Wp[a]=!0,console.warn(a))}function a0(a,e,r){return new Promise(function(i,o){function u(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(u,r);break;default:i()}}setTimeout(u,r)})}function s0(a){const e=a.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function o0(a){const e=a.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const jp=new it().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Xp=new it().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),bs={[vi]:{transfer:Pl,primaries:Ll,luminanceCoefficients:[.2126,.7152,.0722],toReference:a=>a,fromReference:a=>a},[cn]:{transfer:Nt,primaries:Ll,luminanceCoefficients:[.2126,.7152,.0722],toReference:a=>a.convertSRGBToLinear(),fromReference:a=>a.convertLinearToSRGB()},[kl]:{transfer:Pl,primaries:Nl,luminanceCoefficients:[.2289,.6917,.0793],toReference:a=>a.applyMatrix3(Xp),fromReference:a=>a.applyMatrix3(jp)},[Jd]:{transfer:Nt,primaries:Nl,luminanceCoefficients:[.2289,.6917,.0793],toReference:a=>a.convertSRGBToLinear().applyMatrix3(Xp),fromReference:a=>a.applyMatrix3(jp).convertLinearToSRGB()}},l0=new Set([vi,kl]),yt={enabled:!0,_workingColorSpace:vi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(a){if(!l0.has(a))throw new Error(`Unsupported working color space, "${a}".`);this._workingColorSpace=a},convert:function(a,e,r){if(this.enabled===!1||e===r||!e||!r)return a;const i=bs[e].toReference,o=bs[r].fromReference;return o(i(a))},fromWorkingColorSpace:function(a,e){return this.convert(a,this._workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this._workingColorSpace)},getPrimaries:function(a){return bs[a].primaries},getTransfer:function(a){return a===fi?Pl:bs[a].transfer},getLuminanceCoefficients:function(a,e=this._workingColorSpace){return a.fromArray(bs[e].luminanceCoefficients)}};function Oa(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Cc(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let ya;class u0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ya===void 0&&(ya=Dl("canvas")),ya.width=e.width,ya.height=e.height;const i=ya.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),r=ya}return r.width>2048||r.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),r.toDataURL("image/jpeg",.6)):r.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const r=Dl("canvas");r.width=e.width,r.height=e.height;const i=r.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height),u=o.data;for(let h=0;h<u.length;h++)u[h]=Oa(u[h]/255)*255;return i.putImageData(o,0,0),r}else if(e.data){const r=e.data.slice(0);for(let i=0;i<r.length;i++)r instanceof Uint8Array||r instanceof Uint8ClampedArray?r[i]=Math.floor(Oa(r[i]/255)*255):r[i]=Oa(r[i]);return{data:r,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let c0=0;class ig{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=zs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const r=e===void 0||typeof e=="string";if(!r&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let u;if(Array.isArray(o)){u=[];for(let h=0,d=o.length;h<d;h++)o[h].isDataTexture?u.push(bc(o[h].image)):u.push(bc(o[h]))}else u=bc(o);i.url=u}return r||(e.images[this.uuid]=i),i}}function bc(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?u0.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let d0=0;class wr extends Ga{constructor(e=wr.DEFAULT_IMAGE,r=wr.DEFAULT_MAPPING,i=Hi,o=Hi,u=en,h=Vi,d=rn,f=In,m=wr.DEFAULT_ANISOTROPY,v=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=zs(),this.name="",this.source=new ig(e),this.mipmaps=[],this.mapping=r,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=u,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=f,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const r=e===void 0||typeof e=="string";if(!r&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),r||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fd:e.x=e.x-Math.floor(e.x);break;case Hi:e.x=e.x<0?0:1;break;case pd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fd:e.y=e.y-Math.floor(e.y);break;case Hi:e.y=e.y<0?0:1;break;case pd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wr.DEFAULT_IMAGE=null;wr.DEFAULT_MAPPING=jm;wr.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,r=0,i=0,o=1){Bt.prototype.isVector4=!0,this.x=e,this.y=r,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,r,i,o){return this.x=e,this.y=r,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;case 3:this.w=r;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this.z=e.z+r.z,this.w=e.w+r.w,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this.z+=e.z*r,this.w+=e.w*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this.z=e.z-r.z,this.w=e.w-r.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const r=this.x,i=this.y,o=this.z,u=this.w,h=e.elements;return this.x=h[0]*r+h[4]*i+h[8]*o+h[12]*u,this.y=h[1]*r+h[5]*i+h[9]*o+h[13]*u,this.z=h[2]*r+h[6]*i+h[10]*o+h[14]*u,this.w=h[3]*r+h[7]*i+h[11]*o+h[15]*u,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const r=Math.sqrt(1-e.w*e.w);return r<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/r,this.y=e.y/r,this.z=e.z/r),this}setAxisAngleFromRotationMatrix(e){let r,i,o,u;const h=e.elements,d=h[0],f=h[4],m=h[8],v=h[1],y=h[5],x=h[9],S=h[2],w=h[6],A=h[10];if(Math.abs(f-v)<.01&&Math.abs(m-S)<.01&&Math.abs(x-w)<.01){if(Math.abs(f+v)<.1&&Math.abs(m+S)<.1&&Math.abs(x+w)<.1&&Math.abs(d+y+A-3)<.1)return this.set(1,0,0,0),this;r=Math.PI;const _=(d+1)/2,D=(y+1)/2,b=(A+1)/2,U=(f+v)/4,te=(m+S)/4,B=(x+w)/4;return _>D&&_>b?_<.01?(i=0,o=.707106781,u=.707106781):(i=Math.sqrt(_),o=U/i,u=te/i):D>b?D<.01?(i=.707106781,o=0,u=.707106781):(o=Math.sqrt(D),i=U/o,u=B/o):b<.01?(i=.707106781,o=.707106781,u=0):(u=Math.sqrt(b),i=te/u,o=B/u),this.set(i,o,u,r),this}let g=Math.sqrt((w-x)*(w-x)+(m-S)*(m-S)+(v-f)*(v-f));return Math.abs(g)<.001&&(g=1),this.x=(w-x)/g,this.y=(m-S)/g,this.z=(v-f)/g,this.w=Math.acos((d+y+A-1)/2),this}setFromMatrixPosition(e){const r=e.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this.w=r[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,r){return this.x=Math.max(e.x,Math.min(r.x,this.x)),this.y=Math.max(e.y,Math.min(r.y,this.y)),this.z=Math.max(e.z,Math.min(r.z,this.z)),this.w=Math.max(e.w,Math.min(r.w,this.w)),this}clampScalar(e,r){return this.x=Math.max(e,Math.min(r,this.x)),this.y=Math.max(e,Math.min(r,this.y)),this.z=Math.max(e,Math.min(r,this.z)),this.w=Math.max(e,Math.min(r,this.w)),this}clampLength(e,r){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(r,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this.z+=(e.z-this.z)*r,this.w+=(e.w-this.w)*r,this}lerpVectors(e,r,i){return this.x=e.x+(r.x-e.x)*i,this.y=e.y+(r.y-e.y)*i,this.z=e.z+(r.z-e.z)*i,this.w=e.w+(r.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this.z=e[r+2],this.w=e[r+3],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e[r+2]=this.z,e[r+3]=this.w,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this.z=e.getZ(r),this.w=e.getW(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class h0 extends Ga{constructor(e=1,r=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=r,this.depth=1,this.scissor=new Bt(0,0,e,r),this.scissorTest=!1,this.viewport=new Bt(0,0,e,r);const o={width:e,height:r,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const u=new wr(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);u.flipY=!1,u.generateMipmaps=i.generateMipmaps,u.internalFormat=i.internalFormat,this.textures=[];const h=i.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,r,i=1){if(this.width!==e||this.height!==r||this.depth!==i){this.width=e,this.height=r,this.depth=i;for(let o=0,u=this.textures.length;o<u;o++)this.textures[o].image.width=e,this.textures[o].image.height=r,this.textures[o].image.depth=i;this.dispose()}this.viewport.set(0,0,e,r),this.scissor.set(0,0,e,r)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,o=e.textures.length;i<o;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const r=Object.assign({},e.texture.image);return this.texture.source=new ig(r),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ji extends h0{constructor(e=1,r=1,i={}){super(e,r,i),this.isWebGLRenderTarget=!0}}class ag extends wr{constructor(e=null,r=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:r,height:i,depth:o},this.magFilter=Vr,this.minFilter=Vr,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class f0 extends wr{constructor(e=null,r=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:r,height:i,depth:o},this.magFilter=Vr,this.minFilter=Vr,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ks{constructor(e=0,r=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=r,this._z=i,this._w=o}static slerpFlat(e,r,i,o,u,h,d){let f=i[o+0],m=i[o+1],v=i[o+2],y=i[o+3];const x=u[h+0],S=u[h+1],w=u[h+2],A=u[h+3];if(d===0){e[r+0]=f,e[r+1]=m,e[r+2]=v,e[r+3]=y;return}if(d===1){e[r+0]=x,e[r+1]=S,e[r+2]=w,e[r+3]=A;return}if(y!==A||f!==x||m!==S||v!==w){let g=1-d;const _=f*x+m*S+v*w+y*A,D=_>=0?1:-1,b=1-_*_;if(b>Number.EPSILON){const te=Math.sqrt(b),B=Math.atan2(te,_*D);g=Math.sin(g*B)/te,d=Math.sin(d*B)/te}const U=d*D;if(f=f*g+x*U,m=m*g+S*U,v=v*g+w*U,y=y*g+A*U,g===1-d){const te=1/Math.sqrt(f*f+m*m+v*v+y*y);f*=te,m*=te,v*=te,y*=te}}e[r]=f,e[r+1]=m,e[r+2]=v,e[r+3]=y}static multiplyQuaternionsFlat(e,r,i,o,u,h){const d=i[o],f=i[o+1],m=i[o+2],v=i[o+3],y=u[h],x=u[h+1],S=u[h+2],w=u[h+3];return e[r]=d*w+v*y+f*S-m*x,e[r+1]=f*w+v*x+m*y-d*S,e[r+2]=m*w+v*S+d*x-f*y,e[r+3]=v*w-d*y-f*x-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,r,i,o){return this._x=e,this._y=r,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,r=!0){const i=e._x,o=e._y,u=e._z,h=e._order,d=Math.cos,f=Math.sin,m=d(i/2),v=d(o/2),y=d(u/2),x=f(i/2),S=f(o/2),w=f(u/2);switch(h){case"XYZ":this._x=x*v*y+m*S*w,this._y=m*S*y-x*v*w,this._z=m*v*w+x*S*y,this._w=m*v*y-x*S*w;break;case"YXZ":this._x=x*v*y+m*S*w,this._y=m*S*y-x*v*w,this._z=m*v*w-x*S*y,this._w=m*v*y+x*S*w;break;case"ZXY":this._x=x*v*y-m*S*w,this._y=m*S*y+x*v*w,this._z=m*v*w+x*S*y,this._w=m*v*y-x*S*w;break;case"ZYX":this._x=x*v*y-m*S*w,this._y=m*S*y+x*v*w,this._z=m*v*w-x*S*y,this._w=m*v*y+x*S*w;break;case"YZX":this._x=x*v*y+m*S*w,this._y=m*S*y+x*v*w,this._z=m*v*w-x*S*y,this._w=m*v*y-x*S*w;break;case"XZY":this._x=x*v*y-m*S*w,this._y=m*S*y-x*v*w,this._z=m*v*w+x*S*y,this._w=m*v*y+x*S*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return r===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,r){const i=r/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const r=e.elements,i=r[0],o=r[4],u=r[8],h=r[1],d=r[5],f=r[9],m=r[2],v=r[6],y=r[10],x=i+d+y;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(v-f)*S,this._y=(u-m)*S,this._z=(h-o)*S}else if(i>d&&i>y){const S=2*Math.sqrt(1+i-d-y);this._w=(v-f)/S,this._x=.25*S,this._y=(o+h)/S,this._z=(u+m)/S}else if(d>y){const S=2*Math.sqrt(1+d-i-y);this._w=(u-m)/S,this._x=(o+h)/S,this._y=.25*S,this._z=(f+v)/S}else{const S=2*Math.sqrt(1+y-i-d);this._w=(h-o)/S,this._x=(u+m)/S,this._y=(f+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,r){let i=e.dot(r)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*r.z-e.z*r.y,this._y=e.z*r.x-e.x*r.z,this._z=e.x*r.y-e.y*r.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mr(this.dot(e),-1,1)))}rotateTowards(e,r){const i=this.angleTo(e);if(i===0)return this;const o=Math.min(1,r/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,r){const i=e._x,o=e._y,u=e._z,h=e._w,d=r._x,f=r._y,m=r._z,v=r._w;return this._x=i*v+h*d+o*m-u*f,this._y=o*v+h*f+u*d-i*m,this._z=u*v+h*m+i*f-o*d,this._w=h*v-i*d-o*f-u*m,this._onChangeCallback(),this}slerp(e,r){if(r===0)return this;if(r===1)return this.copy(e);const i=this._x,o=this._y,u=this._z,h=this._w;let d=h*e._w+i*e._x+o*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=i,this._y=o,this._z=u,this;const f=1-d*d;if(f<=Number.EPSILON){const S=1-r;return this._w=S*h+r*this._w,this._x=S*i+r*this._x,this._y=S*o+r*this._y,this._z=S*u+r*this._z,this.normalize(),this}const m=Math.sqrt(f),v=Math.atan2(m,d),y=Math.sin((1-r)*v)/m,x=Math.sin(r*v)/m;return this._w=h*y+this._w*x,this._x=i*y+this._x*x,this._y=o*y+this._y*x,this._z=u*y+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,r,i){return this.copy(e).slerp(r,i)}random(){const e=2*Math.PI*Math.random(),r=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),u=Math.sqrt(i);return this.set(o*Math.sin(e),o*Math.cos(e),u*Math.sin(r),u*Math.cos(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,r=0){return this._x=e[r],this._y=e[r+1],this._z=e[r+2],this._w=e[r+3],this._onChangeCallback(),this}toArray(e=[],r=0){return e[r]=this._x,e[r+1]=this._y,e[r+2]=this._z,e[r+3]=this._w,e}fromBufferAttribute(e,r){return this._x=e.getX(r),this._y=e.getY(r),this._z=e.getZ(r),this._w=e.getW(r),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,r=0,i=0){J.prototype.isVector3=!0,this.x=e,this.y=r,this.z=i}set(e,r,i){return i===void 0&&(i=this.z),this.x=e,this.y=r,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this.z=e.z+r.z,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this.z+=e.z*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this.z=e.z-r.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,r){return this.x=e.x*r.x,this.y=e.y*r.y,this.z=e.z*r.z,this}applyEuler(e){return this.applyQuaternion(Yp.setFromEuler(e))}applyAxisAngle(e,r){return this.applyQuaternion(Yp.setFromAxisAngle(e,r))}applyMatrix3(e){const r=this.x,i=this.y,o=this.z,u=e.elements;return this.x=u[0]*r+u[3]*i+u[6]*o,this.y=u[1]*r+u[4]*i+u[7]*o,this.z=u[2]*r+u[5]*i+u[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const r=this.x,i=this.y,o=this.z,u=e.elements,h=1/(u[3]*r+u[7]*i+u[11]*o+u[15]);return this.x=(u[0]*r+u[4]*i+u[8]*o+u[12])*h,this.y=(u[1]*r+u[5]*i+u[9]*o+u[13])*h,this.z=(u[2]*r+u[6]*i+u[10]*o+u[14])*h,this}applyQuaternion(e){const r=this.x,i=this.y,o=this.z,u=e.x,h=e.y,d=e.z,f=e.w,m=2*(h*o-d*i),v=2*(d*r-u*o),y=2*(u*i-h*r);return this.x=r+f*m+h*y-d*v,this.y=i+f*v+d*m-u*y,this.z=o+f*y+u*v-h*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const r=this.x,i=this.y,o=this.z,u=e.elements;return this.x=u[0]*r+u[4]*i+u[8]*o,this.y=u[1]*r+u[5]*i+u[9]*o,this.z=u[2]*r+u[6]*i+u[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,r){return this.x=Math.max(e.x,Math.min(r.x,this.x)),this.y=Math.max(e.y,Math.min(r.y,this.y)),this.z=Math.max(e.z,Math.min(r.z,this.z)),this}clampScalar(e,r){return this.x=Math.max(e,Math.min(r,this.x)),this.y=Math.max(e,Math.min(r,this.y)),this.z=Math.max(e,Math.min(r,this.z)),this}clampLength(e,r){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(r,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this.z+=(e.z-this.z)*r,this}lerpVectors(e,r,i){return this.x=e.x+(r.x-e.x)*i,this.y=e.y+(r.y-e.y)*i,this.z=e.z+(r.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,r){const i=e.x,o=e.y,u=e.z,h=r.x,d=r.y,f=r.z;return this.x=o*f-u*d,this.y=u*h-i*f,this.z=i*d-o*h,this}projectOnVector(e){const r=e.lengthSq();if(r===0)return this.set(0,0,0);const i=e.dot(this)/r;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Pc.copy(this).projectOnVector(e),this.sub(Pc)}reflect(e){return this.sub(Pc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const r=Math.sqrt(this.lengthSq()*e.lengthSq());if(r===0)return Math.PI/2;const i=this.dot(e)/r;return Math.acos(Mr(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const r=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return r*r+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,r,i){const o=Math.sin(r)*e;return this.x=o*Math.sin(i),this.y=Math.cos(r)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,r,i){return this.x=e*Math.sin(r),this.y=i,this.z=e*Math.cos(r),this}setFromMatrixPosition(e){const r=e.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this}setFromMatrixScale(e){const r=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=r,this.y=i,this.z=o,this}setFromMatrixColumn(e,r){return this.fromArray(e.elements,r*4)}setFromMatrix3Column(e,r){return this.fromArray(e.elements,r*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this.z=e[r+2],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e[r+2]=this.z,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this.z=e.getZ(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,r=Math.random()*2-1,i=Math.sqrt(1-r*r);return this.x=i*Math.cos(e),this.y=r,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pc=new J,Yp=new ks;class Bs{constructor(e=new J(1/0,1/0,1/0),r=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=r}set(e,r){return this.min.copy(e),this.max.copy(r),this}setFromArray(e){this.makeEmpty();for(let r=0,i=e.length;r<i;r+=3)this.expandByPoint(Zr.fromArray(e,r));return this}setFromBufferAttribute(e){this.makeEmpty();for(let r=0,i=e.count;r<i;r++)this.expandByPoint(Zr.fromBufferAttribute(e,r));return this}setFromPoints(e){this.makeEmpty();for(let r=0,i=e.length;r<i;r++)this.expandByPoint(e[r]);return this}setFromCenterAndSize(e,r){const i=Zr.copy(r).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,r=!1){return this.makeEmpty(),this.expandByObject(e,r)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,r=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const u=i.getAttribute("position");if(r===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Zr):Zr.fromBufferAttribute(u,h),Zr.applyMatrix4(e.matrixWorld),this.expandByPoint(Zr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$o.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$o.copy(i.boundingBox)),$o.applyMatrix4(e.matrixWorld),this.union($o)}const o=e.children;for(let u=0,h=o.length;u<h;u++)this.expandByObject(o[u],r);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,r){return r.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zr),Zr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let r,i;return e.normal.x>0?(r=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(r=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(r+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(r+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(r+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(r+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),r<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ps),Qo.subVectors(this.max,Ps),Sa.subVectors(e.a,Ps),Ma.subVectors(e.b,Ps),Ea.subVectors(e.c,Ps),si.subVectors(Ma,Sa),oi.subVectors(Ea,Ma),Li.subVectors(Sa,Ea);let r=[0,-si.z,si.y,0,-oi.z,oi.y,0,-Li.z,Li.y,si.z,0,-si.x,oi.z,0,-oi.x,Li.z,0,-Li.x,-si.y,si.x,0,-oi.y,oi.x,0,-Li.y,Li.x,0];return!Lc(r,Sa,Ma,Ea,Qo)||(r=[1,0,0,0,1,0,0,0,1],!Lc(r,Sa,Ma,Ea,Qo))?!1:(Jo.crossVectors(si,oi),r=[Jo.x,Jo.y,Jo.z],Lc(r,Sa,Ma,Ea,Qo))}clampPoint(e,r){return r.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Tn=[new J,new J,new J,new J,new J,new J,new J,new J],Zr=new J,$o=new Bs,Sa=new J,Ma=new J,Ea=new J,si=new J,oi=new J,Li=new J,Ps=new J,Qo=new J,Jo=new J,Ni=new J;function Lc(a,e,r,i,o){for(let u=0,h=a.length-3;u<=h;u+=3){Ni.fromArray(a,u);const d=o.x*Math.abs(Ni.x)+o.y*Math.abs(Ni.y)+o.z*Math.abs(Ni.z),f=e.dot(Ni),m=r.dot(Ni),v=i.dot(Ni);if(Math.max(-Math.max(f,m,v),Math.min(f,m,v))>d)return!1}return!0}const p0=new Bs,Ls=new J,Nc=new J;class Hs{constructor(e=new J,r=-1){this.isSphere=!0,this.center=e,this.radius=r}set(e,r){return this.center.copy(e),this.radius=r,this}setFromPoints(e,r){const i=this.center;r!==void 0?i.copy(r):p0.setFromPoints(e).getCenter(i);let o=0;for(let u=0,h=e.length;u<h;u++)o=Math.max(o,i.distanceToSquared(e[u]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const r=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=r*r}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,r){const i=this.center.distanceToSquared(e);return r.copy(e),i>this.radius*this.radius&&(r.sub(this.center).normalize(),r.multiplyScalar(this.radius).add(this.center)),r}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ls.subVectors(e,this.center);const r=Ls.lengthSq();if(r>this.radius*this.radius){const i=Math.sqrt(r),o=(i-this.radius)*.5;this.center.addScaledVector(Ls,o/i),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ls.copy(e.center).add(Nc)),this.expandByPoint(Ls.copy(e.center).sub(Nc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wn=new J,Uc=new J,el=new J,li=new J,Dc=new J,tl=new J,Ic=new J;class eh{constructor(e=new J,r=new J(0,0,-1)){this.origin=e,this.direction=r}set(e,r){return this.origin.copy(e),this.direction.copy(r),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,r){return r.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wn)),this}closestPointToPoint(e,r){r.subVectors(e,this.origin);const i=r.dot(this.direction);return i<0?r.copy(this.origin):r.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const r=wn.subVectors(e,this.origin).dot(this.direction);return r<0?this.origin.distanceToSquared(e):(wn.copy(this.origin).addScaledVector(this.direction,r),wn.distanceToSquared(e))}distanceSqToSegment(e,r,i,o){Uc.copy(e).add(r).multiplyScalar(.5),el.copy(r).sub(e).normalize(),li.copy(this.origin).sub(Uc);const u=e.distanceTo(r)*.5,h=-this.direction.dot(el),d=li.dot(this.direction),f=-li.dot(el),m=li.lengthSq(),v=Math.abs(1-h*h);let y,x,S,w;if(v>0)if(y=h*f-d,x=h*d-f,w=u*v,y>=0)if(x>=-w)if(x<=w){const A=1/v;y*=A,x*=A,S=y*(y+h*x+2*d)+x*(h*y+x+2*f)+m}else x=u,y=Math.max(0,-(h*x+d)),S=-y*y+x*(x+2*f)+m;else x=-u,y=Math.max(0,-(h*x+d)),S=-y*y+x*(x+2*f)+m;else x<=-w?(y=Math.max(0,-(-h*u+d)),x=y>0?-u:Math.min(Math.max(-u,-f),u),S=-y*y+x*(x+2*f)+m):x<=w?(y=0,x=Math.min(Math.max(-u,-f),u),S=x*(x+2*f)+m):(y=Math.max(0,-(h*u+d)),x=y>0?u:Math.min(Math.max(-u,-f),u),S=-y*y+x*(x+2*f)+m);else x=h>0?-u:u,y=Math.max(0,-(h*x+d)),S=-y*y+x*(x+2*f)+m;return i&&i.copy(this.origin).addScaledVector(this.direction,y),o&&o.copy(Uc).addScaledVector(el,x),S}intersectSphere(e,r){wn.subVectors(e.center,this.origin);const i=wn.dot(this.direction),o=wn.dot(wn)-i*i,u=e.radius*e.radius;if(o>u)return null;const h=Math.sqrt(u-o),d=i-h,f=i+h;return f<0?null:d<0?this.at(f,r):this.at(d,r)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const r=e.normal.dot(this.direction);if(r===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/r;return i>=0?i:null}intersectPlane(e,r){const i=this.distanceToPlane(e);return i===null?null:this.at(i,r)}intersectsPlane(e){const r=e.distanceToPoint(this.origin);return r===0||e.normal.dot(this.direction)*r<0}intersectBox(e,r){let i,o,u,h,d,f;const m=1/this.direction.x,v=1/this.direction.y,y=1/this.direction.z,x=this.origin;return m>=0?(i=(e.min.x-x.x)*m,o=(e.max.x-x.x)*m):(i=(e.max.x-x.x)*m,o=(e.min.x-x.x)*m),v>=0?(u=(e.min.y-x.y)*v,h=(e.max.y-x.y)*v):(u=(e.max.y-x.y)*v,h=(e.min.y-x.y)*v),i>h||u>o||((u>i||isNaN(i))&&(i=u),(h<o||isNaN(o))&&(o=h),y>=0?(d=(e.min.z-x.z)*y,f=(e.max.z-x.z)*y):(d=(e.max.z-x.z)*y,f=(e.min.z-x.z)*y),i>f||d>o)||((d>i||i!==i)&&(i=d),(f<o||o!==o)&&(o=f),o<0)?null:this.at(i>=0?i:o,r)}intersectsBox(e){return this.intersectBox(e,wn)!==null}intersectTriangle(e,r,i,o,u){Dc.subVectors(r,e),tl.subVectors(i,e),Ic.crossVectors(Dc,tl);let h=this.direction.dot(Ic),d;if(h>0){if(o)return null;d=1}else if(h<0)d=-1,h=-h;else return null;li.subVectors(this.origin,e);const f=d*this.direction.dot(tl.crossVectors(li,tl));if(f<0)return null;const m=d*this.direction.dot(Dc.cross(li));if(m<0||f+m>h)return null;const v=-d*li.dot(Ic);return v<0?null:this.at(v/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(e,r,i,o,u,h,d,f,m,v,y,x,S,w,A,g){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,r,i,o,u,h,d,f,m,v,y,x,S,w,A,g)}set(e,r,i,o,u,h,d,f,m,v,y,x,S,w,A,g){const _=this.elements;return _[0]=e,_[4]=r,_[8]=i,_[12]=o,_[1]=u,_[5]=h,_[9]=d,_[13]=f,_[2]=m,_[6]=v,_[10]=y,_[14]=x,_[3]=S,_[7]=w,_[11]=A,_[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(e){const r=this.elements,i=e.elements;return r[0]=i[0],r[1]=i[1],r[2]=i[2],r[3]=i[3],r[4]=i[4],r[5]=i[5],r[6]=i[6],r[7]=i[7],r[8]=i[8],r[9]=i[9],r[10]=i[10],r[11]=i[11],r[12]=i[12],r[13]=i[13],r[14]=i[14],r[15]=i[15],this}copyPosition(e){const r=this.elements,i=e.elements;return r[12]=i[12],r[13]=i[13],r[14]=i[14],this}setFromMatrix3(e){const r=e.elements;return this.set(r[0],r[3],r[6],0,r[1],r[4],r[7],0,r[2],r[5],r[8],0,0,0,0,1),this}extractBasis(e,r,i){return e.setFromMatrixColumn(this,0),r.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,r,i){return this.set(e.x,r.x,i.x,0,e.y,r.y,i.y,0,e.z,r.z,i.z,0,0,0,0,1),this}extractRotation(e){const r=this.elements,i=e.elements,o=1/Ta.setFromMatrixColumn(e,0).length(),u=1/Ta.setFromMatrixColumn(e,1).length(),h=1/Ta.setFromMatrixColumn(e,2).length();return r[0]=i[0]*o,r[1]=i[1]*o,r[2]=i[2]*o,r[3]=0,r[4]=i[4]*u,r[5]=i[5]*u,r[6]=i[6]*u,r[7]=0,r[8]=i[8]*h,r[9]=i[9]*h,r[10]=i[10]*h,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromEuler(e){const r=this.elements,i=e.x,o=e.y,u=e.z,h=Math.cos(i),d=Math.sin(i),f=Math.cos(o),m=Math.sin(o),v=Math.cos(u),y=Math.sin(u);if(e.order==="XYZ"){const x=h*v,S=h*y,w=d*v,A=d*y;r[0]=f*v,r[4]=-f*y,r[8]=m,r[1]=S+w*m,r[5]=x-A*m,r[9]=-d*f,r[2]=A-x*m,r[6]=w+S*m,r[10]=h*f}else if(e.order==="YXZ"){const x=f*v,S=f*y,w=m*v,A=m*y;r[0]=x+A*d,r[4]=w*d-S,r[8]=h*m,r[1]=h*y,r[5]=h*v,r[9]=-d,r[2]=S*d-w,r[6]=A+x*d,r[10]=h*f}else if(e.order==="ZXY"){const x=f*v,S=f*y,w=m*v,A=m*y;r[0]=x-A*d,r[4]=-h*y,r[8]=w+S*d,r[1]=S+w*d,r[5]=h*v,r[9]=A-x*d,r[2]=-h*m,r[6]=d,r[10]=h*f}else if(e.order==="ZYX"){const x=h*v,S=h*y,w=d*v,A=d*y;r[0]=f*v,r[4]=w*m-S,r[8]=x*m+A,r[1]=f*y,r[5]=A*m+x,r[9]=S*m-w,r[2]=-m,r[6]=d*f,r[10]=h*f}else if(e.order==="YZX"){const x=h*f,S=h*m,w=d*f,A=d*m;r[0]=f*v,r[4]=A-x*y,r[8]=w*y+S,r[1]=y,r[5]=h*v,r[9]=-d*v,r[2]=-m*v,r[6]=S*y+w,r[10]=x-A*y}else if(e.order==="XZY"){const x=h*f,S=h*m,w=d*f,A=d*m;r[0]=f*v,r[4]=-y,r[8]=m*v,r[1]=x*y+A,r[5]=h*v,r[9]=S*y-w,r[2]=w*y-S,r[6]=d*v,r[10]=A*y+x}return r[3]=0,r[7]=0,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromQuaternion(e){return this.compose(m0,e,g0)}lookAt(e,r,i){const o=this.elements;return Nr.subVectors(e,r),Nr.lengthSq()===0&&(Nr.z=1),Nr.normalize(),ui.crossVectors(i,Nr),ui.lengthSq()===0&&(Math.abs(i.z)===1?Nr.x+=1e-4:Nr.z+=1e-4,Nr.normalize(),ui.crossVectors(i,Nr)),ui.normalize(),rl.crossVectors(Nr,ui),o[0]=ui.x,o[4]=rl.x,o[8]=Nr.x,o[1]=ui.y,o[5]=rl.y,o[9]=Nr.y,o[2]=ui.z,o[6]=rl.z,o[10]=Nr.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,r){const i=e.elements,o=r.elements,u=this.elements,h=i[0],d=i[4],f=i[8],m=i[12],v=i[1],y=i[5],x=i[9],S=i[13],w=i[2],A=i[6],g=i[10],_=i[14],D=i[3],b=i[7],U=i[11],te=i[15],B=o[0],I=o[4],q=o[8],_e=o[12],E=o[1],C=o[5],re=o[9],ne=o[13],ae=o[2],pe=o[6],ee=o[10],ce=o[14],z=o[3],oe=o[7],se=o[11],N=o[15];return u[0]=h*B+d*E+f*ae+m*z,u[4]=h*I+d*C+f*pe+m*oe,u[8]=h*q+d*re+f*ee+m*se,u[12]=h*_e+d*ne+f*ce+m*N,u[1]=v*B+y*E+x*ae+S*z,u[5]=v*I+y*C+x*pe+S*oe,u[9]=v*q+y*re+x*ee+S*se,u[13]=v*_e+y*ne+x*ce+S*N,u[2]=w*B+A*E+g*ae+_*z,u[6]=w*I+A*C+g*pe+_*oe,u[10]=w*q+A*re+g*ee+_*se,u[14]=w*_e+A*ne+g*ce+_*N,u[3]=D*B+b*E+U*ae+te*z,u[7]=D*I+b*C+U*pe+te*oe,u[11]=D*q+b*re+U*ee+te*se,u[15]=D*_e+b*ne+U*ce+te*N,this}multiplyScalar(e){const r=this.elements;return r[0]*=e,r[4]*=e,r[8]*=e,r[12]*=e,r[1]*=e,r[5]*=e,r[9]*=e,r[13]*=e,r[2]*=e,r[6]*=e,r[10]*=e,r[14]*=e,r[3]*=e,r[7]*=e,r[11]*=e,r[15]*=e,this}determinant(){const e=this.elements,r=e[0],i=e[4],o=e[8],u=e[12],h=e[1],d=e[5],f=e[9],m=e[13],v=e[2],y=e[6],x=e[10],S=e[14],w=e[3],A=e[7],g=e[11],_=e[15];return w*(+u*f*y-o*m*y-u*d*x+i*m*x+o*d*S-i*f*S)+A*(+r*f*S-r*m*x+u*h*x-o*h*S+o*m*v-u*f*v)+g*(+r*m*y-r*d*S-u*h*y+i*h*S+u*d*v-i*m*v)+_*(-o*d*v-r*f*y+r*d*x+o*h*y-i*h*x+i*f*v)}transpose(){const e=this.elements;let r;return r=e[1],e[1]=e[4],e[4]=r,r=e[2],e[2]=e[8],e[8]=r,r=e[6],e[6]=e[9],e[9]=r,r=e[3],e[3]=e[12],e[12]=r,r=e[7],e[7]=e[13],e[13]=r,r=e[11],e[11]=e[14],e[14]=r,this}setPosition(e,r,i){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=r,o[14]=i),this}invert(){const e=this.elements,r=e[0],i=e[1],o=e[2],u=e[3],h=e[4],d=e[5],f=e[6],m=e[7],v=e[8],y=e[9],x=e[10],S=e[11],w=e[12],A=e[13],g=e[14],_=e[15],D=y*g*m-A*x*m+A*f*S-d*g*S-y*f*_+d*x*_,b=w*x*m-v*g*m-w*f*S+h*g*S+v*f*_-h*x*_,U=v*A*m-w*y*m+w*d*S-h*A*S-v*d*_+h*y*_,te=w*y*f-v*A*f-w*d*x+h*A*x+v*d*g-h*y*g,B=r*D+i*b+o*U+u*te;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/B;return e[0]=D*I,e[1]=(A*x*u-y*g*u-A*o*S+i*g*S+y*o*_-i*x*_)*I,e[2]=(d*g*u-A*f*u+A*o*m-i*g*m-d*o*_+i*f*_)*I,e[3]=(y*f*u-d*x*u-y*o*m+i*x*m+d*o*S-i*f*S)*I,e[4]=b*I,e[5]=(v*g*u-w*x*u+w*o*S-r*g*S-v*o*_+r*x*_)*I,e[6]=(w*f*u-h*g*u-w*o*m+r*g*m+h*o*_-r*f*_)*I,e[7]=(h*x*u-v*f*u+v*o*m-r*x*m-h*o*S+r*f*S)*I,e[8]=U*I,e[9]=(w*y*u-v*A*u-w*i*S+r*A*S+v*i*_-r*y*_)*I,e[10]=(h*A*u-w*d*u+w*i*m-r*A*m-h*i*_+r*d*_)*I,e[11]=(v*d*u-h*y*u-v*i*m+r*y*m+h*i*S-r*d*S)*I,e[12]=te*I,e[13]=(v*A*o-w*y*o+w*i*x-r*A*x-v*i*g+r*y*g)*I,e[14]=(w*d*o-h*A*o-w*i*f+r*A*f+h*i*g-r*d*g)*I,e[15]=(h*y*o-v*d*o+v*i*f-r*y*f-h*i*x+r*d*x)*I,this}scale(e){const r=this.elements,i=e.x,o=e.y,u=e.z;return r[0]*=i,r[4]*=o,r[8]*=u,r[1]*=i,r[5]*=o,r[9]*=u,r[2]*=i,r[6]*=o,r[10]*=u,r[3]*=i,r[7]*=o,r[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,r=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(r,i,o))}makeTranslation(e,r,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,r,0,0,1,i,0,0,0,1),this}makeRotationX(e){const r=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,r,-i,0,0,i,r,0,0,0,0,1),this}makeRotationY(e){const r=Math.cos(e),i=Math.sin(e);return this.set(r,0,i,0,0,1,0,0,-i,0,r,0,0,0,0,1),this}makeRotationZ(e){const r=Math.cos(e),i=Math.sin(e);return this.set(r,-i,0,0,i,r,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,r){const i=Math.cos(r),o=Math.sin(r),u=1-i,h=e.x,d=e.y,f=e.z,m=u*h,v=u*d;return this.set(m*h+i,m*d-o*f,m*f+o*d,0,m*d+o*f,v*d+i,v*f-o*h,0,m*f-o*d,v*f+o*h,u*f*f+i,0,0,0,0,1),this}makeScale(e,r,i){return this.set(e,0,0,0,0,r,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,r,i,o,u,h){return this.set(1,i,u,0,e,1,h,0,r,o,1,0,0,0,0,1),this}compose(e,r,i){const o=this.elements,u=r._x,h=r._y,d=r._z,f=r._w,m=u+u,v=h+h,y=d+d,x=u*m,S=u*v,w=u*y,A=h*v,g=h*y,_=d*y,D=f*m,b=f*v,U=f*y,te=i.x,B=i.y,I=i.z;return o[0]=(1-(A+_))*te,o[1]=(S+U)*te,o[2]=(w-b)*te,o[3]=0,o[4]=(S-U)*B,o[5]=(1-(x+_))*B,o[6]=(g+D)*B,o[7]=0,o[8]=(w+b)*I,o[9]=(g-D)*I,o[10]=(1-(x+A))*I,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,r,i){const o=this.elements;let u=Ta.set(o[0],o[1],o[2]).length();const h=Ta.set(o[4],o[5],o[6]).length(),d=Ta.set(o[8],o[9],o[10]).length();this.determinant()<0&&(u=-u),e.x=o[12],e.y=o[13],e.z=o[14],$r.copy(this);const f=1/u,m=1/h,v=1/d;return $r.elements[0]*=f,$r.elements[1]*=f,$r.elements[2]*=f,$r.elements[4]*=m,$r.elements[5]*=m,$r.elements[6]*=m,$r.elements[8]*=v,$r.elements[9]*=v,$r.elements[10]*=v,r.setFromRotationMatrix($r),i.x=u,i.y=h,i.z=d,this}makePerspective(e,r,i,o,u,h,d=Nn){const f=this.elements,m=2*u/(r-e),v=2*u/(i-o),y=(r+e)/(r-e),x=(i+o)/(i-o);let S,w;if(d===Nn)S=-(h+u)/(h-u),w=-2*h*u/(h-u);else if(d===Ul)S=-h/(h-u),w=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return f[0]=m,f[4]=0,f[8]=y,f[12]=0,f[1]=0,f[5]=v,f[9]=x,f[13]=0,f[2]=0,f[6]=0,f[10]=S,f[14]=w,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,r,i,o,u,h,d=Nn){const f=this.elements,m=1/(r-e),v=1/(i-o),y=1/(h-u),x=(r+e)*m,S=(i+o)*v;let w,A;if(d===Nn)w=(h+u)*y,A=-2*y;else if(d===Ul)w=u*y,A=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return f[0]=2*m,f[4]=0,f[8]=0,f[12]=-x,f[1]=0,f[5]=2*v,f[9]=0,f[13]=-S,f[2]=0,f[6]=0,f[10]=A,f[14]=-w,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const r=this.elements,i=e.elements;for(let o=0;o<16;o++)if(r[o]!==i[o])return!1;return!0}fromArray(e,r=0){for(let i=0;i<16;i++)this.elements[i]=e[i+r];return this}toArray(e=[],r=0){const i=this.elements;return e[r]=i[0],e[r+1]=i[1],e[r+2]=i[2],e[r+3]=i[3],e[r+4]=i[4],e[r+5]=i[5],e[r+6]=i[6],e[r+7]=i[7],e[r+8]=i[8],e[r+9]=i[9],e[r+10]=i[10],e[r+11]=i[11],e[r+12]=i[12],e[r+13]=i[13],e[r+14]=i[14],e[r+15]=i[15],e}}const Ta=new J,$r=new zt,m0=new J(0,0,0),g0=new J(1,1,1),ui=new J,rl=new J,Nr=new J,qp=new zt,Kp=new ks;class On{constructor(e=0,r=0,i=0,o=On.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=r,this._z=i,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,r,i,o=this._order){return this._x=e,this._y=r,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,r=this._order,i=!0){const o=e.elements,u=o[0],h=o[4],d=o[8],f=o[1],m=o[5],v=o[9],y=o[2],x=o[6],S=o[10];switch(r){case"XYZ":this._y=Math.asin(Mr(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Mr(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(f,m)):(this._y=Math.atan2(-y,u),this._z=0);break;case"ZXY":this._x=Math.asin(Mr(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-y,S),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(f,u));break;case"ZYX":this._y=Math.asin(-Mr(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(f,u)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(Mr(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-y,u)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Mr(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+r)}return this._order=r,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,r,i){return qp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qp,r,i)}setFromVector3(e,r=this._order){return this.set(e.x,e.y,e.z,r)}reorder(e){return Kp.setFromEuler(this),this.setFromQuaternion(Kp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],r=0){return e[r]=this._x,e[r+1]=this._y,e[r+2]=this._z,e[r+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class sg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let v0=0;const Zp=new J,wa=new ks,An=new zt,nl=new J,Ns=new J,_0=new J,x0=new ks,$p=new J(1,0,0),Qp=new J(0,1,0),Jp=new J(0,0,1),em={type:"added"},y0={type:"removed"},Aa={type:"childadded",child:null},Oc={type:"childremoved",child:null};class pr extends Ga{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pr.DEFAULT_UP.clone();const e=new J,r=new On,i=new ks,o=new J(1,1,1);function u(){i.setFromEuler(r,!1)}function h(){r.setFromQuaternion(i,void 0,!1)}r._onChange(u),i._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:r},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new zt},normalMatrix:{value:new it}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=pr.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,r){this.quaternion.setFromAxisAngle(e,r)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,r){return wa.setFromAxisAngle(e,r),this.quaternion.multiply(wa),this}rotateOnWorldAxis(e,r){return wa.setFromAxisAngle(e,r),this.quaternion.premultiply(wa),this}rotateX(e){return this.rotateOnAxis($p,e)}rotateY(e){return this.rotateOnAxis(Qp,e)}rotateZ(e){return this.rotateOnAxis(Jp,e)}translateOnAxis(e,r){return Zp.copy(e).applyQuaternion(this.quaternion),this.position.add(Zp.multiplyScalar(r)),this}translateX(e){return this.translateOnAxis($p,e)}translateY(e){return this.translateOnAxis(Qp,e)}translateZ(e){return this.translateOnAxis(Jp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(e,r,i){e.isVector3?nl.copy(e):nl.set(e,r,i);const o=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(Ns,nl,this.up):An.lookAt(nl,Ns,this.up),this.quaternion.setFromRotationMatrix(An),o&&(An.extractRotation(o.matrixWorld),wa.setFromRotationMatrix(An),this.quaternion.premultiply(wa.invert()))}add(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.add(arguments[r]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(em),Aa.child=e,this.dispatchEvent(Aa),Aa.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const r=this.children.indexOf(e);return r!==-1&&(e.parent=null,this.children.splice(r,1),e.dispatchEvent(y0),Oc.child=e,this.dispatchEvent(Oc),Oc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),An.multiply(e.parent.matrixWorld)),e.applyMatrix4(An),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(em),Aa.child=e,this.dispatchEvent(Aa),Aa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,r){if(this[e]===r)return this;for(let i=0,o=this.children.length;i<o;i++){const u=this.children[i].getObjectByProperty(e,r);if(u!==void 0)return u}}getObjectsByProperty(e,r,i=[]){this[e]===r&&i.push(this);const o=this.children;for(let u=0,h=o.length;u<h;u++)o[u].getObjectsByProperty(e,r,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,e,_0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,x0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const r=this.matrixWorld.elements;return e.set(r[8],r[9],r[10]).normalize()}raycast(){}traverse(e){e(this);const r=this.children;for(let i=0,o=r.length;i<o;i++)r[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const r=this.children;for(let i=0,o=r.length;i<o;i++)r[i].traverseVisible(e)}traverseAncestors(e){const r=this.parent;r!==null&&(e(r),r.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const r=this.children;for(let i=0,o=r.length;i<o;i++)r[i].updateMatrixWorld(e)}updateWorldMatrix(e,r){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),r===!0){const o=this.children;for(let u=0,h=o.length;u<h;u++)o[u].updateWorldMatrix(!1,!0)}}toJSON(e){const r=e===void 0||typeof e=="string",i={};r&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function u(d,f){return d[f.uuid]===void 0&&(d[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const f=d.shapes;if(Array.isArray(f))for(let m=0,v=f.length;m<v;m++){const y=f[m];u(e.shapes,y)}else u(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let f=0,m=this.material.length;f<m;f++)d.push(u(e.materials,this.material[f]));o.material=d}else o.material=u(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const f=this.animations[d];o.animations.push(u(e.animations,f))}}if(r){const d=h(e.geometries),f=h(e.materials),m=h(e.textures),v=h(e.images),y=h(e.shapes),x=h(e.skeletons),S=h(e.animations),w=h(e.nodes);d.length>0&&(i.geometries=d),f.length>0&&(i.materials=f),m.length>0&&(i.textures=m),v.length>0&&(i.images=v),y.length>0&&(i.shapes=y),x.length>0&&(i.skeletons=x),S.length>0&&(i.animations=S),w.length>0&&(i.nodes=w)}return i.object=o,i;function h(d){const f=[];for(const m in d){const v=d[m];delete v.metadata,f.push(v)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,r=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),r===!0)for(let i=0;i<e.children.length;i++){const o=e.children[i];this.add(o.clone())}return this}}pr.DEFAULT_UP=new J(0,1,0);pr.DEFAULT_MATRIX_AUTO_UPDATE=!0;pr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qr=new J,Rn=new J,Fc=new J,Cn=new J,Ra=new J,Ca=new J,tm=new J,zc=new J,kc=new J,Bc=new J,Hc=new Bt,Vc=new Bt,Gc=new Bt;class tn{constructor(e=new J,r=new J,i=new J){this.a=e,this.b=r,this.c=i}static getNormal(e,r,i,o){o.subVectors(i,r),Qr.subVectors(e,r),o.cross(Qr);const u=o.lengthSq();return u>0?o.multiplyScalar(1/Math.sqrt(u)):o.set(0,0,0)}static getBarycoord(e,r,i,o,u){Qr.subVectors(o,r),Rn.subVectors(i,r),Fc.subVectors(e,r);const h=Qr.dot(Qr),d=Qr.dot(Rn),f=Qr.dot(Fc),m=Rn.dot(Rn),v=Rn.dot(Fc),y=h*m-d*d;if(y===0)return u.set(0,0,0),null;const x=1/y,S=(m*f-d*v)*x,w=(h*v-d*f)*x;return u.set(1-S-w,w,S)}static containsPoint(e,r,i,o){return this.getBarycoord(e,r,i,o,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(e,r,i,o,u,h,d,f){return this.getBarycoord(e,r,i,o,Cn)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(u,Cn.x),f.addScaledVector(h,Cn.y),f.addScaledVector(d,Cn.z),f)}static getInterpolatedAttribute(e,r,i,o,u,h){return Hc.setScalar(0),Vc.setScalar(0),Gc.setScalar(0),Hc.fromBufferAttribute(e,r),Vc.fromBufferAttribute(e,i),Gc.fromBufferAttribute(e,o),h.setScalar(0),h.addScaledVector(Hc,u.x),h.addScaledVector(Vc,u.y),h.addScaledVector(Gc,u.z),h}static isFrontFacing(e,r,i,o){return Qr.subVectors(i,r),Rn.subVectors(e,r),Qr.cross(Rn).dot(o)<0}set(e,r,i){return this.a.copy(e),this.b.copy(r),this.c.copy(i),this}setFromPointsAndIndices(e,r,i,o){return this.a.copy(e[r]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,r,i,o){return this.a.fromBufferAttribute(e,r),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qr.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),Qr.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,r){return tn.getBarycoord(e,this.a,this.b,this.c,r)}getInterpolation(e,r,i,o,u){return tn.getInterpolation(e,this.a,this.b,this.c,r,i,o,u)}containsPoint(e){return tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,r){const i=this.a,o=this.b,u=this.c;let h,d;Ra.subVectors(o,i),Ca.subVectors(u,i),zc.subVectors(e,i);const f=Ra.dot(zc),m=Ca.dot(zc);if(f<=0&&m<=0)return r.copy(i);kc.subVectors(e,o);const v=Ra.dot(kc),y=Ca.dot(kc);if(v>=0&&y<=v)return r.copy(o);const x=f*y-v*m;if(x<=0&&f>=0&&v<=0)return h=f/(f-v),r.copy(i).addScaledVector(Ra,h);Bc.subVectors(e,u);const S=Ra.dot(Bc),w=Ca.dot(Bc);if(w>=0&&S<=w)return r.copy(u);const A=S*m-f*w;if(A<=0&&m>=0&&w<=0)return d=m/(m-w),r.copy(i).addScaledVector(Ca,d);const g=v*w-S*y;if(g<=0&&y-v>=0&&S-w>=0)return tm.subVectors(u,o),d=(y-v)/(y-v+(S-w)),r.copy(o).addScaledVector(tm,d);const _=1/(g+A+x);return h=A*_,d=x*_,r.copy(i).addScaledVector(Ra,h).addScaledVector(Ca,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const og={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},il={h:0,s:0,l:0};function Wc(a,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?a+(e-a)*6*r:r<1/2?e:r<2/3?a+(e-a)*6*(2/3-r):a}class gt{constructor(e,r,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,r,i)}set(e,r,i){if(r===void 0&&i===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,r,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,r=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,r),this}setRGB(e,r,i,o=yt.workingColorSpace){return this.r=e,this.g=r,this.b=i,yt.toWorkingColorSpace(this,o),this}setHSL(e,r,i,o=yt.workingColorSpace){if(e=n0(e,1),r=Mr(r,0,1),i=Mr(i,0,1),r===0)this.r=this.g=this.b=i;else{const u=i<=.5?i*(1+r):i+r-i*r,h=2*i-u;this.r=Wc(h,u,e+1/3),this.g=Wc(h,u,e),this.b=Wc(h,u,e-1/3)}return yt.toWorkingColorSpace(this,o),this}setStyle(e,r=cn){function i(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=o[1],d=o[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return i(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,r);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return i(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,r);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return i(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,r);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=o[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,r);if(h===6)return this.setHex(parseInt(u,16),r);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,r);return this}setColorName(e,r=cn){const i=og[e.toLowerCase()];return i!==void 0?this.setHex(i,r):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oa(e.r),this.g=Oa(e.g),this.b=Oa(e.b),this}copyLinearToSRGB(e){return this.r=Cc(e.r),this.g=Cc(e.g),this.b=Cc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return yt.fromWorkingColorSpace(cr.copy(this),e),Math.round(Mr(cr.r*255,0,255))*65536+Math.round(Mr(cr.g*255,0,255))*256+Math.round(Mr(cr.b*255,0,255))}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,r=yt.workingColorSpace){yt.fromWorkingColorSpace(cr.copy(this),r);const i=cr.r,o=cr.g,u=cr.b,h=Math.max(i,o,u),d=Math.min(i,o,u);let f,m;const v=(d+h)/2;if(d===h)f=0,m=0;else{const y=h-d;switch(m=v<=.5?y/(h+d):y/(2-h-d),h){case i:f=(o-u)/y+(o<u?6:0);break;case o:f=(u-i)/y+2;break;case u:f=(i-o)/y+4;break}f/=6}return e.h=f,e.s=m,e.l=v,e}getRGB(e,r=yt.workingColorSpace){return yt.fromWorkingColorSpace(cr.copy(this),r),e.r=cr.r,e.g=cr.g,e.b=cr.b,e}getStyle(e=cn){yt.fromWorkingColorSpace(cr.copy(this),e);const r=cr.r,i=cr.g,o=cr.b;return e!==cn?`color(${e} ${r.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(r*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(e,r,i){return this.getHSL(ci),this.setHSL(ci.h+e,ci.s+r,ci.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,r){return this.r=e.r+r.r,this.g=e.g+r.g,this.b=e.b+r.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,r){return this.r+=(e.r-this.r)*r,this.g+=(e.g-this.g)*r,this.b+=(e.b-this.b)*r,this}lerpColors(e,r,i){return this.r=e.r+(r.r-e.r)*i,this.g=e.g+(r.g-e.g)*i,this.b=e.b+(r.b-e.b)*i,this}lerpHSL(e,r){this.getHSL(ci),e.getHSL(il);const i=Ac(ci.h,il.h,r),o=Ac(ci.s,il.s,r),u=Ac(ci.l,il.l,r);return this.setHSL(i,o,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const r=this.r,i=this.g,o=this.b,u=e.elements;return this.r=u[0]*r+u[3]*i+u[6]*o,this.g=u[1]*r+u[4]*i+u[7]*o,this.b=u[2]*r+u[5]*i+u[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,r=0){return this.r=e[r],this.g=e[r+1],this.b=e[r+2],this}toArray(e=[],r=0){return e[r]=this.r,e[r+1]=this.g,e[r+2]=this.b,e}fromBufferAttribute(e,r){return this.r=e.getX(r),this.g=e.getY(r),this.b=e.getZ(r),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cr=new gt;gt.NAMES=og;let S0=0;class Wa extends Ga{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=zs(),this.name="",this.type="Material",this.blending=Da,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rd,this.blendDst=nd,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=Fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xa,this.stencilZFail=xa,this.stencilZPass=xa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const r in e){const i=e[r];if(i===void 0){console.warn(`THREE.Material: parameter '${r}' has value of undefined.`);continue}const o=this[r];if(o===void 0){console.warn(`THREE.Material: '${r}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[r]=i}}toJSON(e){const r=e===void 0||typeof e=="string";r&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Da&&(i.blending=this.blending),this.side!==gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==rd&&(i.blendSrc=this.blendSrc),this.blendDst!==nd&&(i.blendDst=this.blendDst),this.blendEquation!==ki&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Fa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xa&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xa&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xa&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(u){const h=[];for(const d in u){const f=u[d];delete f.metadata,h.push(f)}return h}if(r){const u=o(e.textures),h=o(e.images);u.length>0&&(i.textures=u),h.length>0&&(i.images=h)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const r=e.clippingPlanes;let i=null;if(r!==null){const o=r.length;i=new Array(o);for(let u=0;u!==o;++u)i[u]=r[u].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class lg extends Wa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=Wm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new J,al=new Tt;class Er{constructor(e,r,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=r,this.count=e!==void 0?e.length/r:0,this.normalized=i,this.usage=Vp,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,r){this.updateRanges.push({start:e,count:r})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,r,i){e*=this.itemSize,i*=r.itemSize;for(let o=0,u=this.itemSize;o<u;o++)this.array[e+o]=r.array[i+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let r=0,i=this.count;r<i;r++)al.fromBufferAttribute(this,r),al.applyMatrix3(e),this.setXY(r,al.x,al.y);else if(this.itemSize===3)for(let r=0,i=this.count;r<i;r++)Vt.fromBufferAttribute(this,r),Vt.applyMatrix3(e),this.setXYZ(r,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let r=0,i=this.count;r<i;r++)Vt.fromBufferAttribute(this,r),Vt.applyMatrix4(e),this.setXYZ(r,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let r=0,i=this.count;r<i;r++)Vt.fromBufferAttribute(this,r),Vt.applyNormalMatrix(e),this.setXYZ(r,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let r=0,i=this.count;r<i;r++)Vt.fromBufferAttribute(this,r),Vt.transformDirection(e),this.setXYZ(r,Vt.x,Vt.y,Vt.z);return this}set(e,r=0){return this.array.set(e,r),this}getComponent(e,r){let i=this.array[e*this.itemSize+r];return this.normalized&&(i=Cs(i,this.array)),i}setComponent(e,r,i){return this.normalized&&(i=Sr(i,this.array)),this.array[e*this.itemSize+r]=i,this}getX(e){let r=this.array[e*this.itemSize];return this.normalized&&(r=Cs(r,this.array)),r}setX(e,r){return this.normalized&&(r=Sr(r,this.array)),this.array[e*this.itemSize]=r,this}getY(e){let r=this.array[e*this.itemSize+1];return this.normalized&&(r=Cs(r,this.array)),r}setY(e,r){return this.normalized&&(r=Sr(r,this.array)),this.array[e*this.itemSize+1]=r,this}getZ(e){let r=this.array[e*this.itemSize+2];return this.normalized&&(r=Cs(r,this.array)),r}setZ(e,r){return this.normalized&&(r=Sr(r,this.array)),this.array[e*this.itemSize+2]=r,this}getW(e){let r=this.array[e*this.itemSize+3];return this.normalized&&(r=Cs(r,this.array)),r}setW(e,r){return this.normalized&&(r=Sr(r,this.array)),this.array[e*this.itemSize+3]=r,this}setXY(e,r,i){return e*=this.itemSize,this.normalized&&(r=Sr(r,this.array),i=Sr(i,this.array)),this.array[e+0]=r,this.array[e+1]=i,this}setXYZ(e,r,i,o){return e*=this.itemSize,this.normalized&&(r=Sr(r,this.array),i=Sr(i,this.array),o=Sr(o,this.array)),this.array[e+0]=r,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,r,i,o,u){return e*=this.itemSize,this.normalized&&(r=Sr(r,this.array),i=Sr(i,this.array),o=Sr(o,this.array),u=Sr(u,this.array)),this.array[e+0]=r,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vp&&(e.usage=this.usage),e}}class ug extends Er{constructor(e,r,i){super(new Uint16Array(e),r,i)}}class cg extends Er{constructor(e,r,i){super(new Uint32Array(e),r,i)}}class Dn extends Er{constructor(e,r,i){super(new Float32Array(e),r,i)}}let M0=0;const Hr=new zt,jc=new pr,ba=new J,Ur=new Bs,Us=new Bs,Qt=new J;class nn extends Ga{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=zs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ng(e)?cg:ug)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,r){return this.attributes[e]=r,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,r,i=0){this.groups.push({start:e,count:r,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,r){this.drawRange.start=e,this.drawRange.count=r}applyMatrix4(e){const r=this.attributes.position;r!==void 0&&(r.applyMatrix4(e),r.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const u=new it().getNormalMatrix(e);i.applyNormalMatrix(u),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hr.makeRotationFromQuaternion(e),this.applyMatrix4(Hr),this}rotateX(e){return Hr.makeRotationX(e),this.applyMatrix4(Hr),this}rotateY(e){return Hr.makeRotationY(e),this.applyMatrix4(Hr),this}rotateZ(e){return Hr.makeRotationZ(e),this.applyMatrix4(Hr),this}translate(e,r,i){return Hr.makeTranslation(e,r,i),this.applyMatrix4(Hr),this}scale(e,r,i){return Hr.makeScale(e,r,i),this.applyMatrix4(Hr),this}lookAt(e){return jc.lookAt(e),jc.updateMatrix(),this.applyMatrix4(jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ba).negate(),this.translate(ba.x,ba.y,ba.z),this}setFromPoints(e){const r=[];for(let i=0,o=e.length;i<o;i++){const u=e[i];r.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new Dn(r,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bs);const e=this.attributes.position,r=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),r)for(let i=0,o=r.length;i<o;i++){const u=r[i];Ur.setFromBufferAttribute(u),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,Ur.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,Ur.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(Ur.min),this.boundingBox.expandByPoint(Ur.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hs);const e=this.attributes.position,r=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const i=this.boundingSphere.center;if(Ur.setFromBufferAttribute(e),r)for(let u=0,h=r.length;u<h;u++){const d=r[u];Us.setFromBufferAttribute(d),this.morphTargetsRelative?(Qt.addVectors(Ur.min,Us.min),Ur.expandByPoint(Qt),Qt.addVectors(Ur.max,Us.max),Ur.expandByPoint(Qt)):(Ur.expandByPoint(Us.min),Ur.expandByPoint(Us.max))}Ur.getCenter(i);let o=0;for(let u=0,h=e.count;u<h;u++)Qt.fromBufferAttribute(e,u),o=Math.max(o,i.distanceToSquared(Qt));if(r)for(let u=0,h=r.length;u<h;u++){const d=r[u],f=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)Qt.fromBufferAttribute(d,m),f&&(ba.fromBufferAttribute(e,m),Qt.add(ba)),o=Math.max(o,i.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,r=this.attributes;if(e===null||r.position===void 0||r.normal===void 0||r.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=r.position,o=r.normal,u=r.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Er(new Float32Array(4*i.count),4));const h=this.getAttribute("tangent"),d=[],f=[];for(let q=0;q<i.count;q++)d[q]=new J,f[q]=new J;const m=new J,v=new J,y=new J,x=new Tt,S=new Tt,w=new Tt,A=new J,g=new J;function _(q,_e,E){m.fromBufferAttribute(i,q),v.fromBufferAttribute(i,_e),y.fromBufferAttribute(i,E),x.fromBufferAttribute(u,q),S.fromBufferAttribute(u,_e),w.fromBufferAttribute(u,E),v.sub(m),y.sub(m),S.sub(x),w.sub(x);const C=1/(S.x*w.y-w.x*S.y);isFinite(C)&&(A.copy(v).multiplyScalar(w.y).addScaledVector(y,-S.y).multiplyScalar(C),g.copy(y).multiplyScalar(S.x).addScaledVector(v,-w.x).multiplyScalar(C),d[q].add(A),d[_e].add(A),d[E].add(A),f[q].add(g),f[_e].add(g),f[E].add(g))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let q=0,_e=D.length;q<_e;++q){const E=D[q],C=E.start,re=E.count;for(let ne=C,ae=C+re;ne<ae;ne+=3)_(e.getX(ne+0),e.getX(ne+1),e.getX(ne+2))}const b=new J,U=new J,te=new J,B=new J;function I(q){te.fromBufferAttribute(o,q),B.copy(te);const _e=d[q];b.copy(_e),b.sub(te.multiplyScalar(te.dot(_e))).normalize(),U.crossVectors(B,_e);const E=U.dot(f[q])<0?-1:1;h.setXYZW(q,b.x,b.y,b.z,E)}for(let q=0,_e=D.length;q<_e;++q){const E=D[q],C=E.start,re=E.count;for(let ne=C,ae=C+re;ne<ae;ne+=3)I(e.getX(ne+0)),I(e.getX(ne+1)),I(e.getX(ne+2))}}computeVertexNormals(){const e=this.index,r=this.getAttribute("position");if(r!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Er(new Float32Array(r.count*3),3),this.setAttribute("normal",i);else for(let x=0,S=i.count;x<S;x++)i.setXYZ(x,0,0,0);const o=new J,u=new J,h=new J,d=new J,f=new J,m=new J,v=new J,y=new J;if(e)for(let x=0,S=e.count;x<S;x+=3){const w=e.getX(x+0),A=e.getX(x+1),g=e.getX(x+2);o.fromBufferAttribute(r,w),u.fromBufferAttribute(r,A),h.fromBufferAttribute(r,g),v.subVectors(h,u),y.subVectors(o,u),v.cross(y),d.fromBufferAttribute(i,w),f.fromBufferAttribute(i,A),m.fromBufferAttribute(i,g),d.add(v),f.add(v),m.add(v),i.setXYZ(w,d.x,d.y,d.z),i.setXYZ(A,f.x,f.y,f.z),i.setXYZ(g,m.x,m.y,m.z)}else for(let x=0,S=r.count;x<S;x+=3)o.fromBufferAttribute(r,x+0),u.fromBufferAttribute(r,x+1),h.fromBufferAttribute(r,x+2),v.subVectors(h,u),y.subVectors(o,u),v.cross(y),i.setXYZ(x+0,v.x,v.y,v.z),i.setXYZ(x+1,v.x,v.y,v.z),i.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let r=0,i=e.count;r<i;r++)Qt.fromBufferAttribute(e,r),Qt.normalize(),e.setXYZ(r,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(d,f){const m=d.array,v=d.itemSize,y=d.normalized,x=new m.constructor(f.length*v);let S=0,w=0;for(let A=0,g=f.length;A<g;A++){d.isInterleavedBufferAttribute?S=f[A]*d.data.stride+d.offset:S=f[A]*v;for(let _=0;_<v;_++)x[w++]=m[S++]}return new Er(x,v,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const r=new nn,i=this.index.array,o=this.attributes;for(const d in o){const f=o[d],m=e(f,i);r.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const f=[],m=u[d];for(let v=0,y=m.length;v<y;v++){const x=m[v],S=e(x,i);f.push(S)}r.morphAttributes[d]=f}r.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,f=h.length;d<f;d++){const m=h[d];r.addGroup(m.start,m.count,m.materialIndex)}return r}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const m in f)f[m]!==void 0&&(e[m]=f[m]);return e}e.data={attributes:{}};const r=this.index;r!==null&&(e.data.index={type:r.array.constructor.name,array:Array.prototype.slice.call(r.array)});const i=this.attributes;for(const f in i){const m=i[f];e.data.attributes[f]=m.toJSON(e.data)}const o={};let u=!1;for(const f in this.morphAttributes){const m=this.morphAttributes[f],v=[];for(let y=0,x=m.length;y<x;y++){const S=m[y];v.push(S.toJSON(e.data))}v.length>0&&(o[f]=v,u=!0)}u&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const r={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(r));const o=e.attributes;for(const m in o){const v=o[m];this.setAttribute(m,v.clone(r))}const u=e.morphAttributes;for(const m in u){const v=[],y=u[m];for(let x=0,S=y.length;x<S;x++)v.push(y[x].clone(r));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let m=0,v=h.length;m<v;m++){const y=h[m];this.addGroup(y.start,y.count,y.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rm=new zt,Ui=new eh,sl=new Hs,nm=new J,ol=new J,ll=new J,ul=new J,Xc=new J,cl=new J,im=new J,dl=new J;class Un extends pr{constructor(e=new nn,r=new lg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=r,this.updateMorphTargets()}copy(e,r){return super.copy(e,r),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const i=e[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=i.length;o<u;o++){const h=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=o}}}}getVertexPosition(e,r){const i=this.geometry,o=i.attributes.position,u=i.morphAttributes.position,h=i.morphTargetsRelative;r.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(u&&d){cl.set(0,0,0);for(let f=0,m=u.length;f<m;f++){const v=d[f],y=u[f];v!==0&&(Xc.fromBufferAttribute(y,e),h?cl.addScaledVector(Xc,v):cl.addScaledVector(Xc.sub(r),v))}r.add(cl)}return r}raycast(e,r){const i=this.geometry,o=this.material,u=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),sl.copy(i.boundingSphere),sl.applyMatrix4(u),Ui.copy(e.ray).recast(e.near),!(sl.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(sl,nm)===null||Ui.origin.distanceToSquared(nm)>(e.far-e.near)**2))&&(rm.copy(u).invert(),Ui.copy(e.ray).applyMatrix4(rm),!(i.boundingBox!==null&&Ui.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,r,Ui)))}_computeIntersections(e,r,i){let o;const u=this.geometry,h=this.material,d=u.index,f=u.attributes.position,m=u.attributes.uv,v=u.attributes.uv1,y=u.attributes.normal,x=u.groups,S=u.drawRange;if(d!==null)if(Array.isArray(h))for(let w=0,A=x.length;w<A;w++){const g=x[w],_=h[g.materialIndex],D=Math.max(g.start,S.start),b=Math.min(d.count,Math.min(g.start+g.count,S.start+S.count));for(let U=D,te=b;U<te;U+=3){const B=d.getX(U),I=d.getX(U+1),q=d.getX(U+2);o=hl(this,_,e,i,m,v,y,B,I,q),o&&(o.faceIndex=Math.floor(U/3),o.face.materialIndex=g.materialIndex,r.push(o))}}else{const w=Math.max(0,S.start),A=Math.min(d.count,S.start+S.count);for(let g=w,_=A;g<_;g+=3){const D=d.getX(g),b=d.getX(g+1),U=d.getX(g+2);o=hl(this,h,e,i,m,v,y,D,b,U),o&&(o.faceIndex=Math.floor(g/3),r.push(o))}}else if(f!==void 0)if(Array.isArray(h))for(let w=0,A=x.length;w<A;w++){const g=x[w],_=h[g.materialIndex],D=Math.max(g.start,S.start),b=Math.min(f.count,Math.min(g.start+g.count,S.start+S.count));for(let U=D,te=b;U<te;U+=3){const B=U,I=U+1,q=U+2;o=hl(this,_,e,i,m,v,y,B,I,q),o&&(o.faceIndex=Math.floor(U/3),o.face.materialIndex=g.materialIndex,r.push(o))}}else{const w=Math.max(0,S.start),A=Math.min(f.count,S.start+S.count);for(let g=w,_=A;g<_;g+=3){const D=g,b=g+1,U=g+2;o=hl(this,h,e,i,m,v,y,D,b,U),o&&(o.faceIndex=Math.floor(g/3),r.push(o))}}}}function E0(a,e,r,i,o,u,h,d){let f;if(e.side===Tr?f=i.intersectTriangle(h,u,o,!0,d):f=i.intersectTriangle(o,u,h,e.side===gi,d),f===null)return null;dl.copy(d),dl.applyMatrix4(a.matrixWorld);const m=r.ray.origin.distanceTo(dl);return m<r.near||m>r.far?null:{distance:m,point:dl.clone(),object:a}}function hl(a,e,r,i,o,u,h,d,f,m){a.getVertexPosition(d,ol),a.getVertexPosition(f,ll),a.getVertexPosition(m,ul);const v=E0(a,e,r,i,ol,ll,ul,im);if(v){const y=new J;tn.getBarycoord(im,ol,ll,ul,y),o&&(v.uv=tn.getInterpolatedAttribute(o,d,f,m,y,new Tt)),u&&(v.uv1=tn.getInterpolatedAttribute(u,d,f,m,y,new Tt)),h&&(v.normal=tn.getInterpolatedAttribute(h,d,f,m,y,new J),v.normal.dot(i.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:f,c:m,normal:new J,materialIndex:0};tn.getNormal(ol,ll,ul,x.normal),v.face=x,v.barycoord=y}return v}class Vs extends nn{constructor(e=1,r=1,i=1,o=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:r,depth:i,widthSegments:o,heightSegments:u,depthSegments:h};const d=this;o=Math.floor(o),u=Math.floor(u),h=Math.floor(h);const f=[],m=[],v=[],y=[];let x=0,S=0;w("z","y","x",-1,-1,i,r,e,h,u,0),w("z","y","x",1,-1,i,r,-e,h,u,1),w("x","z","y",1,1,e,i,r,o,h,2),w("x","z","y",1,-1,e,i,-r,o,h,3),w("x","y","z",1,-1,e,r,i,o,u,4),w("x","y","z",-1,-1,e,r,-i,o,u,5),this.setIndex(f),this.setAttribute("position",new Dn(m,3)),this.setAttribute("normal",new Dn(v,3)),this.setAttribute("uv",new Dn(y,2));function w(A,g,_,D,b,U,te,B,I,q,_e){const E=U/I,C=te/q,re=U/2,ne=te/2,ae=B/2,pe=I+1,ee=q+1;let ce=0,z=0;const oe=new J;for(let se=0;se<ee;se++){const N=se*C-ne;for(let Y=0;Y<pe;Y++){const be=Y*E-re;oe[A]=be*D,oe[g]=N*b,oe[_]=ae,m.push(oe.x,oe.y,oe.z),oe[A]=0,oe[g]=0,oe[_]=B>0?1:-1,v.push(oe.x,oe.y,oe.z),y.push(Y/I),y.push(1-se/q),ce+=1}}for(let se=0;se<q;se++)for(let N=0;N<I;N++){const Y=x+N+pe*se,be=x+N+pe*(se+1),K=x+(N+1)+pe*(se+1),le=x+(N+1)+pe*se;f.push(Y,be,le),f.push(be,K,le),z+=6}d.addGroup(S,z,_e),S+=z,x+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Va(a){const e={};for(const r in a){e[r]={};for(const i in a[r]){const o=a[r][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[r][i]=null):e[r][i]=o.clone():Array.isArray(o)?e[r][i]=o.slice():e[r][i]=o}}return e}function fr(a){const e={};for(let r=0;r<a.length;r++){const i=Va(a[r]);for(const o in i)e[o]=i[o]}return e}function T0(a){const e=[];for(let r=0;r<a.length;r++)e.push(a[r].clone());return e}function dg(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const w0={clone:Va,merge:fr};var A0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,R0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fn extends Wa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=A0,this.fragmentShader=R0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Va(e.uniforms),this.uniformsGroups=T0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const r=super.toJSON(e);r.glslVersion=this.glslVersion,r.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?r.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?r.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?r.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?r.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?r.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?r.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?r.uniforms[o]={type:"m4",value:u.toArray()}:r.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(r.defines=this.defines),r.vertexShader=this.vertexShader,r.fragmentShader=this.fragmentShader,r.lights=this.lights,r.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(r.extensions=i),r}}class hg extends pr{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Nn}copy(e,r){return super.copy(e,r),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,r){super.updateWorldMatrix(e,r),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const di=new J,am=new Tt,sm=new Tt;class Jr extends hg{constructor(e=50,r=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=r,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,r){return super.copy(e,r),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const r=.5*this.getFilmHeight()/e;this.fov=Hd*2*Math.atan(r),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hd*2*Math.atan(Math.tan(wc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,r,i){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(di.x,di.y).multiplyScalar(-e/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(di.x,di.y).multiplyScalar(-e/di.z)}getViewSize(e,r){return this.getViewBounds(e,am,sm),r.subVectors(sm,am)}setViewOffset(e,r,i,o,u,h){this.aspect=e/r,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=r,this.view.offsetX=i,this.view.offsetY=o,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let r=e*Math.tan(wc*.5*this.fov)/this.zoom,i=2*r,o=this.aspect*i,u=-.5*o;const h=this.view;if(this.view!==null&&this.view.enabled){const f=h.fullWidth,m=h.fullHeight;u+=h.offsetX*o/f,r-=h.offsetY*i/m,o*=h.width/f,i*=h.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+o,r,r-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const r=super.toJSON(e);return r.object.fov=this.fov,r.object.zoom=this.zoom,r.object.near=this.near,r.object.far=this.far,r.object.focus=this.focus,r.object.aspect=this.aspect,this.view!==null&&(r.object.view=Object.assign({},this.view)),r.object.filmGauge=this.filmGauge,r.object.filmOffset=this.filmOffset,r}}const Pa=-90,La=1;class C0 extends pr{constructor(e,r,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Jr(Pa,La,e,r);o.layers=this.layers,this.add(o);const u=new Jr(Pa,La,e,r);u.layers=this.layers,this.add(u);const h=new Jr(Pa,La,e,r);h.layers=this.layers,this.add(h);const d=new Jr(Pa,La,e,r);d.layers=this.layers,this.add(d);const f=new Jr(Pa,La,e,r);f.layers=this.layers,this.add(f);const m=new Jr(Pa,La,e,r);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,r=this.children.concat(),[i,o,u,h,d,f]=r;for(const m of r)this.remove(m);if(e===Nn)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Ul)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of r)this.add(m),m.updateMatrixWorld()}update(e,r){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,f,m,v]=this.children,y=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const A=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,o),e.render(r,u),e.setRenderTarget(i,1,o),e.render(r,h),e.setRenderTarget(i,2,o),e.render(r,d),e.setRenderTarget(i,3,o),e.render(r,f),e.setRenderTarget(i,4,o),e.render(r,m),i.texture.generateMipmaps=A,e.setRenderTarget(i,5,o),e.render(r,v),e.setRenderTarget(y,x,S),e.xr.enabled=w,i.texture.needsPMREMUpdate=!0}}class fg extends wr{constructor(e,r,i,o,u,h,d,f,m,v){e=e!==void 0?e:[],r=r!==void 0?r:za,super(e,r,i,o,u,h,d,f,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class b0 extends ji{constructor(e=1,r={}){super(e,e,r),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];this.texture=new fg(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:en}fromEquirectangularTexture(e,r){this.texture.type=r.type,this.texture.colorSpace=r.colorSpace,this.texture.generateMipmaps=r.generateMipmaps,this.texture.minFilter=r.minFilter,this.texture.magFilter=r.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Vs(5,5,5),u=new Fn({name:"CubemapFromEquirect",uniforms:Va(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tr,blending:pi});u.uniforms.tEquirect.value=r;const h=new Un(o,u),d=r.minFilter;return r.minFilter===Vi&&(r.minFilter=en),new C0(1,10,this).update(e,h),r.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,r,i,o){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(r,i,o);e.setRenderTarget(u)}}const Yc=new J,P0=new J,L0=new it;class Fi{constructor(e=new J(1,0,0),r=0){this.isPlane=!0,this.normal=e,this.constant=r}set(e,r){return this.normal.copy(e),this.constant=r,this}setComponents(e,r,i,o){return this.normal.set(e,r,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,r){return this.normal.copy(e),this.constant=-r.dot(this.normal),this}setFromCoplanarPoints(e,r,i){const o=Yc.subVectors(i,r).cross(P0.subVectors(e,r)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,r){return r.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,r){const i=e.delta(Yc),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(e.start)===0?r.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/o;return u<0||u>1?null:r.copy(e.start).addScaledVector(i,u)}intersectsLine(e){const r=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return r<0&&i>0||i<0&&r>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,r){const i=r||L0.getNormalMatrix(e),o=this.coplanarPoint(Yc).applyMatrix4(e),u=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Di=new Hs,fl=new J;class pg{constructor(e=new Fi,r=new Fi,i=new Fi,o=new Fi,u=new Fi,h=new Fi){this.planes=[e,r,i,o,u,h]}set(e,r,i,o,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(r),d[2].copy(i),d[3].copy(o),d[4].copy(u),d[5].copy(h),this}copy(e){const r=this.planes;for(let i=0;i<6;i++)r[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,r=Nn){const i=this.planes,o=e.elements,u=o[0],h=o[1],d=o[2],f=o[3],m=o[4],v=o[5],y=o[6],x=o[7],S=o[8],w=o[9],A=o[10],g=o[11],_=o[12],D=o[13],b=o[14],U=o[15];if(i[0].setComponents(f-u,x-m,g-S,U-_).normalize(),i[1].setComponents(f+u,x+m,g+S,U+_).normalize(),i[2].setComponents(f+h,x+v,g+w,U+D).normalize(),i[3].setComponents(f-h,x-v,g-w,U-D).normalize(),i[4].setComponents(f-d,x-y,g-A,U-b).normalize(),r===Nn)i[5].setComponents(f+d,x+y,g+A,U+b).normalize();else if(r===Ul)i[5].setComponents(d,y,A,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+r);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const r=e.geometry;r.boundingSphere===null&&r.computeBoundingSphere(),Di.copy(r.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(e){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){const r=this.planes,i=e.center,o=-e.radius;for(let u=0;u<6;u++)if(r[u].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){const r=this.planes;for(let i=0;i<6;i++){const o=r[i];if(fl.x=o.normal.x>0?e.max.x:e.min.x,fl.y=o.normal.y>0?e.max.y:e.min.y,fl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(fl)<0)return!1}return!0}containsPoint(e){const r=this.planes;for(let i=0;i<6;i++)if(r[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function mg(){let a=null,e=!1,r=null,i=null;function o(u,h){r(u,h),i=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&r!==null&&(i=a.requestAnimationFrame(o),e=!0)},stop:function(){a.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(u){r=u},setContext:function(u){a=u}}}function N0(a){const e=new WeakMap;function r(d,f){const m=d.array,v=d.usage,y=m.byteLength,x=a.createBuffer();a.bindBuffer(f,x),a.bufferData(f,m,v),d.onUploadCallback();let S;if(m instanceof Float32Array)S=a.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=a.HALF_FLOAT:S=a.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=a.SHORT;else if(m instanceof Uint32Array)S=a.UNSIGNED_INT;else if(m instanceof Int32Array)S=a.INT;else if(m instanceof Int8Array)S=a.BYTE;else if(m instanceof Uint8Array)S=a.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:y}}function i(d,f,m){const v=f.array,y=f.updateRanges;if(a.bindBuffer(m,d),y.length===0)a.bufferSubData(m,0,v);else{y.sort((S,w)=>S.start-w.start);let x=0;for(let S=1;S<y.length;S++){const w=y[x],A=y[S];A.start<=w.start+w.count+1?w.count=Math.max(w.count,A.start+A.count-w.start):(++x,y[x]=A)}y.length=x+1;for(let S=0,w=y.length;S<w;S++){const A=y[S];a.bufferSubData(m,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}f.clearUpdateRanges()}f.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const f=e.get(d);f&&(a.deleteBuffer(f.buffer),e.delete(d))}function h(d,f){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,r(d,f));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(m.buffer,d,f),m.version=d.version}}return{get:o,remove:u,update:h}}class Bl extends nn{constructor(e=1,r=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:r,widthSegments:i,heightSegments:o};const u=e/2,h=r/2,d=Math.floor(i),f=Math.floor(o),m=d+1,v=f+1,y=e/d,x=r/f,S=[],w=[],A=[],g=[];for(let _=0;_<v;_++){const D=_*x-h;for(let b=0;b<m;b++){const U=b*y-u;w.push(U,-D,0),A.push(0,0,1),g.push(b/d),g.push(1-_/f)}}for(let _=0;_<f;_++)for(let D=0;D<d;D++){const b=D+m*_,U=D+m*(_+1),te=D+1+m*(_+1),B=D+1+m*_;S.push(b,U,B),S.push(U,te,B)}this.setIndex(S),this.setAttribute("position",new Dn(w,3)),this.setAttribute("normal",new Dn(A,3)),this.setAttribute("uv",new Dn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bl(e.width,e.height,e.widthSegments,e.heightSegments)}}var U0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,D0=`#ifdef USE_ALPHAHASH
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
#endif`,I0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,O0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,F0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,z0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,k0=`#ifdef USE_AOMAP
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
#endif`,B0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,H0=`#ifdef USE_BATCHING
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
#endif`,V0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,G0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,W0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,j0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,X0=`#ifdef USE_IRIDESCENCE
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
#endif`,Y0=`#ifdef USE_BUMPMAP
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
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,K0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Q0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,J0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ex=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,rx=`#define PI 3.141592653589793
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
} // validated`,nx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ix=`vec3 transformedNormal = objectNormal;
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
#endif`,ax=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ox=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ux="gl_FragColor = linearToOutputTexel( gl_FragColor );",cx=`
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
}`,dx=`#ifdef USE_ENVMAP
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
#endif`,hx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fx=`#ifdef USE_ENVMAP
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
#endif`,px=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mx=`#ifdef USE_ENVMAP
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
#endif`,gx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_x=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yx=`#ifdef USE_GRADIENTMAP
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
}`,Sx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ex=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tx=`uniform bool receiveShadow;
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
#endif`,wx=`#ifdef USE_ENVMAP
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
#endif`,Ax=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Px=`PhysicalMaterial material;
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
#endif`,Lx=`struct PhysicalMaterial {
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
}`,Nx=`
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
#endif`,Ux=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ix=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ox=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vx=`#if defined( USE_POINTS_UV )
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
#endif`,Gx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qx=`#ifdef USE_MORPHTARGETS
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
#endif`,Kx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$x=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ey=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ty=`#ifdef USE_NORMALMAP
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
#endif`,ry=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ny=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ay=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ly=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,py=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,my=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vy=`float getShadowMask() {
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
}`,_y=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xy=`#ifdef USE_SKINNING
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
#endif`,yy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sy=`#ifdef USE_SKINNING
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
#endif`,My=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ey=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ty=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ay=`#ifdef USE_TRANSMISSION
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
#endif`,Ry=`#ifdef USE_TRANSMISSION
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
#endif`,Cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,by=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Py=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ly=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ny=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Uy=`uniform sampler2D t2D;
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
}`,Dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Iy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Oy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zy=`#include <common>
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
}`,ky=`#if DEPTH_PACKING == 3200
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
}`,By=`#define DISTANCE
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
}`,Hy=`#define DISTANCE
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
}`,Vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wy=`uniform float scale;
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
}`,jy=`uniform vec3 diffuse;
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
}`,Xy=`#include <common>
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
}`,Yy=`uniform vec3 diffuse;
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
}`,qy=`#define LAMBERT
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
}`,Ky=`#define LAMBERT
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
}`,Zy=`#define MATCAP
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
}`,$y=`#define MATCAP
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
}`,Qy=`#define NORMAL
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
}`,Jy=`#define NORMAL
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
}`,eS=`#define PHONG
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
}`,tS=`#define PHONG
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
}`,rS=`#define STANDARD
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
}`,nS=`#define STANDARD
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
}`,iS=`#define TOON
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
}`,aS=`#define TOON
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
}`,sS=`uniform float size;
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
}`,oS=`uniform vec3 diffuse;
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
}`,lS=`#include <common>
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
}`,uS=`uniform vec3 color;
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
}`,cS=`uniform float rotation;
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
}`,dS=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:U0,alphahash_pars_fragment:D0,alphamap_fragment:I0,alphamap_pars_fragment:O0,alphatest_fragment:F0,alphatest_pars_fragment:z0,aomap_fragment:k0,aomap_pars_fragment:B0,batching_pars_vertex:H0,batching_vertex:V0,begin_vertex:G0,beginnormal_vertex:W0,bsdfs:j0,iridescence_fragment:X0,bumpmap_pars_fragment:Y0,clipping_planes_fragment:q0,clipping_planes_pars_fragment:K0,clipping_planes_pars_vertex:Z0,clipping_planes_vertex:$0,color_fragment:Q0,color_pars_fragment:J0,color_pars_vertex:ex,color_vertex:tx,common:rx,cube_uv_reflection_fragment:nx,defaultnormal_vertex:ix,displacementmap_pars_vertex:ax,displacementmap_vertex:sx,emissivemap_fragment:ox,emissivemap_pars_fragment:lx,colorspace_fragment:ux,colorspace_pars_fragment:cx,envmap_fragment:dx,envmap_common_pars_fragment:hx,envmap_pars_fragment:fx,envmap_pars_vertex:px,envmap_physical_pars_fragment:wx,envmap_vertex:mx,fog_vertex:gx,fog_pars_vertex:vx,fog_fragment:_x,fog_pars_fragment:xx,gradientmap_pars_fragment:yx,lightmap_pars_fragment:Sx,lights_lambert_fragment:Mx,lights_lambert_pars_fragment:Ex,lights_pars_begin:Tx,lights_toon_fragment:Ax,lights_toon_pars_fragment:Rx,lights_phong_fragment:Cx,lights_phong_pars_fragment:bx,lights_physical_fragment:Px,lights_physical_pars_fragment:Lx,lights_fragment_begin:Nx,lights_fragment_maps:Ux,lights_fragment_end:Dx,logdepthbuf_fragment:Ix,logdepthbuf_pars_fragment:Ox,logdepthbuf_pars_vertex:Fx,logdepthbuf_vertex:zx,map_fragment:kx,map_pars_fragment:Bx,map_particle_fragment:Hx,map_particle_pars_fragment:Vx,metalnessmap_fragment:Gx,metalnessmap_pars_fragment:Wx,morphinstance_vertex:jx,morphcolor_vertex:Xx,morphnormal_vertex:Yx,morphtarget_pars_vertex:qx,morphtarget_vertex:Kx,normal_fragment_begin:Zx,normal_fragment_maps:$x,normal_pars_fragment:Qx,normal_pars_vertex:Jx,normal_vertex:ey,normalmap_pars_fragment:ty,clearcoat_normal_fragment_begin:ry,clearcoat_normal_fragment_maps:ny,clearcoat_pars_fragment:iy,iridescence_pars_fragment:ay,opaque_fragment:sy,packing:oy,premultiplied_alpha_fragment:ly,project_vertex:uy,dithering_fragment:cy,dithering_pars_fragment:dy,roughnessmap_fragment:hy,roughnessmap_pars_fragment:fy,shadowmap_pars_fragment:py,shadowmap_pars_vertex:my,shadowmap_vertex:gy,shadowmask_pars_fragment:vy,skinbase_vertex:_y,skinning_pars_vertex:xy,skinning_vertex:yy,skinnormal_vertex:Sy,specularmap_fragment:My,specularmap_pars_fragment:Ey,tonemapping_fragment:Ty,tonemapping_pars_fragment:wy,transmission_fragment:Ay,transmission_pars_fragment:Ry,uv_pars_fragment:Cy,uv_pars_vertex:by,uv_vertex:Py,worldpos_vertex:Ly,background_vert:Ny,background_frag:Uy,backgroundCube_vert:Dy,backgroundCube_frag:Iy,cube_vert:Oy,cube_frag:Fy,depth_vert:zy,depth_frag:ky,distanceRGBA_vert:By,distanceRGBA_frag:Hy,equirect_vert:Vy,equirect_frag:Gy,linedashed_vert:Wy,linedashed_frag:jy,meshbasic_vert:Xy,meshbasic_frag:Yy,meshlambert_vert:qy,meshlambert_frag:Ky,meshmatcap_vert:Zy,meshmatcap_frag:$y,meshnormal_vert:Qy,meshnormal_frag:Jy,meshphong_vert:eS,meshphong_frag:tS,meshphysical_vert:rS,meshphysical_frag:nS,meshtoon_vert:iS,meshtoon_frag:aS,points_vert:sS,points_frag:oS,shadow_vert:lS,shadow_frag:uS,sprite_vert:cS,sprite_frag:dS},Ce={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},dn={basic:{uniforms:fr([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:fr([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new gt(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:fr([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:fr([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:fr([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new gt(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:fr([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:fr([Ce.points,Ce.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:fr([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:fr([Ce.common,Ce.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:fr([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:fr([Ce.sprite,Ce.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:fr([Ce.common,Ce.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:fr([Ce.lights,Ce.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};dn.physical={uniforms:fr([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const pl={r:0,b:0,g:0},Ii=new On,hS=new zt;function fS(a,e,r,i,o,u,h){const d=new gt(0);let f=u===!0?0:1,m,v,y=null,x=0,S=null;function w(D){let b=D.isScene===!0?D.background:null;return b&&b.isTexture&&(b=(D.backgroundBlurriness>0?r:e).get(b)),b}function A(D){let b=!1;const U=w(D);U===null?_(d,f):U&&U.isColor&&(_(U,1),b=!0);const te=a.xr.getEnvironmentBlendMode();te==="additive"?i.buffers.color.setClear(0,0,0,1,h):te==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,h),(a.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function g(D,b){const U=w(b);U&&(U.isCubeTexture||U.mapping===zl)?(v===void 0&&(v=new Un(new Vs(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:Va(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(te,B,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(v)),Ii.copy(b.backgroundRotation),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),v.material.uniforms.envMap.value=U,v.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(hS.makeRotationFromEuler(Ii)),v.material.toneMapped=yt.getTransfer(U.colorSpace)!==Nt,(y!==U||x!==U.version||S!==a.toneMapping)&&(v.material.needsUpdate=!0,y=U,x=U.version,S=a.toneMapping),v.layers.enableAll(),D.unshift(v,v.geometry,v.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new Un(new Bl(2,2),new Fn({name:"BackgroundMaterial",uniforms:Va(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,m.material.toneMapped=yt.getTransfer(U.colorSpace)!==Nt,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(y!==U||x!==U.version||S!==a.toneMapping)&&(m.material.needsUpdate=!0,y=U,x=U.version,S=a.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function _(D,b){D.getRGB(pl,dg(a)),i.buffers.color.setClear(pl.r,pl.g,pl.b,b,h)}return{getClearColor:function(){return d},setClearColor:function(D,b=1){d.set(D),f=b,_(d,f)},getClearAlpha:function(){return f},setClearAlpha:function(D){f=D,_(d,f)},render:A,addToRenderList:g}}function pS(a,e){const r=a.getParameter(a.MAX_VERTEX_ATTRIBS),i={},o=x(null);let u=o,h=!1;function d(E,C,re,ne,ae){let pe=!1;const ee=y(ne,re,C);u!==ee&&(u=ee,m(u.object)),pe=S(E,ne,re,ae),pe&&w(E,ne,re,ae),ae!==null&&e.update(ae,a.ELEMENT_ARRAY_BUFFER),(pe||h)&&(h=!1,U(E,C,re,ne),ae!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(ae).buffer))}function f(){return a.createVertexArray()}function m(E){return a.bindVertexArray(E)}function v(E){return a.deleteVertexArray(E)}function y(E,C,re){const ne=re.wireframe===!0;let ae=i[E.id];ae===void 0&&(ae={},i[E.id]=ae);let pe=ae[C.id];pe===void 0&&(pe={},ae[C.id]=pe);let ee=pe[ne];return ee===void 0&&(ee=x(f()),pe[ne]=ee),ee}function x(E){const C=[],re=[],ne=[];for(let ae=0;ae<r;ae++)C[ae]=0,re[ae]=0,ne[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:re,attributeDivisors:ne,object:E,attributes:{},index:null}}function S(E,C,re,ne){const ae=u.attributes,pe=C.attributes;let ee=0;const ce=re.getAttributes();for(const z in ce)if(ce[z].location>=0){const oe=ae[z];let se=pe[z];if(se===void 0&&(z==="instanceMatrix"&&E.instanceMatrix&&(se=E.instanceMatrix),z==="instanceColor"&&E.instanceColor&&(se=E.instanceColor)),oe===void 0||oe.attribute!==se||se&&oe.data!==se.data)return!0;ee++}return u.attributesNum!==ee||u.index!==ne}function w(E,C,re,ne){const ae={},pe=C.attributes;let ee=0;const ce=re.getAttributes();for(const z in ce)if(ce[z].location>=0){let oe=pe[z];oe===void 0&&(z==="instanceMatrix"&&E.instanceMatrix&&(oe=E.instanceMatrix),z==="instanceColor"&&E.instanceColor&&(oe=E.instanceColor));const se={};se.attribute=oe,oe&&oe.data&&(se.data=oe.data),ae[z]=se,ee++}u.attributes=ae,u.attributesNum=ee,u.index=ne}function A(){const E=u.newAttributes;for(let C=0,re=E.length;C<re;C++)E[C]=0}function g(E){_(E,0)}function _(E,C){const re=u.newAttributes,ne=u.enabledAttributes,ae=u.attributeDivisors;re[E]=1,ne[E]===0&&(a.enableVertexAttribArray(E),ne[E]=1),ae[E]!==C&&(a.vertexAttribDivisor(E,C),ae[E]=C)}function D(){const E=u.newAttributes,C=u.enabledAttributes;for(let re=0,ne=C.length;re<ne;re++)C[re]!==E[re]&&(a.disableVertexAttribArray(re),C[re]=0)}function b(E,C,re,ne,ae,pe,ee){ee===!0?a.vertexAttribIPointer(E,C,re,ae,pe):a.vertexAttribPointer(E,C,re,ne,ae,pe)}function U(E,C,re,ne){A();const ae=ne.attributes,pe=re.getAttributes(),ee=C.defaultAttributeValues;for(const ce in pe){const z=pe[ce];if(z.location>=0){let oe=ae[ce];if(oe===void 0&&(ce==="instanceMatrix"&&E.instanceMatrix&&(oe=E.instanceMatrix),ce==="instanceColor"&&E.instanceColor&&(oe=E.instanceColor)),oe!==void 0){const se=oe.normalized,N=oe.itemSize,Y=e.get(oe);if(Y===void 0)continue;const be=Y.buffer,K=Y.type,le=Y.bytesPerElement,ge=K===a.INT||K===a.UNSIGNED_INT||oe.gpuType===Yd;if(oe.isInterleavedBufferAttribute){const Se=oe.data,Pe=Se.stride,Le=oe.offset;if(Se.isInstancedInterleavedBuffer){for(let Je=0;Je<z.locationSize;Je++)_(z.location+Je,Se.meshPerAttribute);E.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Je=0;Je<z.locationSize;Je++)g(z.location+Je);a.bindBuffer(a.ARRAY_BUFFER,be);for(let Je=0;Je<z.locationSize;Je++)b(z.location+Je,N/z.locationSize,K,se,Pe*le,(Le+N/z.locationSize*Je)*le,ge)}else{if(oe.isInstancedBufferAttribute){for(let Se=0;Se<z.locationSize;Se++)_(z.location+Se,oe.meshPerAttribute);E.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Se=0;Se<z.locationSize;Se++)g(z.location+Se);a.bindBuffer(a.ARRAY_BUFFER,be);for(let Se=0;Se<z.locationSize;Se++)b(z.location+Se,N/z.locationSize,K,se,N*le,N/z.locationSize*Se*le,ge)}}else if(ee!==void 0){const se=ee[ce];if(se!==void 0)switch(se.length){case 2:a.vertexAttrib2fv(z.location,se);break;case 3:a.vertexAttrib3fv(z.location,se);break;case 4:a.vertexAttrib4fv(z.location,se);break;default:a.vertexAttrib1fv(z.location,se)}}}}D()}function te(){q();for(const E in i){const C=i[E];for(const re in C){const ne=C[re];for(const ae in ne)v(ne[ae].object),delete ne[ae];delete C[re]}delete i[E]}}function B(E){if(i[E.id]===void 0)return;const C=i[E.id];for(const re in C){const ne=C[re];for(const ae in ne)v(ne[ae].object),delete ne[ae];delete C[re]}delete i[E.id]}function I(E){for(const C in i){const re=i[C];if(re[E.id]===void 0)continue;const ne=re[E.id];for(const ae in ne)v(ne[ae].object),delete ne[ae];delete re[E.id]}}function q(){_e(),h=!0,u!==o&&(u=o,m(u.object))}function _e(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:q,resetDefaultState:_e,dispose:te,releaseStatesOfGeometry:B,releaseStatesOfProgram:I,initAttributes:A,enableAttribute:g,disableUnusedAttributes:D}}function mS(a,e,r){let i;function o(m){i=m}function u(m,v){a.drawArrays(i,m,v),r.update(v,i,1)}function h(m,v,y){y!==0&&(a.drawArraysInstanced(i,m,v,y),r.update(v,i,y))}function d(m,v,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,m,0,v,0,y);let x=0;for(let S=0;S<y;S++)x+=v[S];r.update(x,i,1)}function f(m,v,y,x){if(y===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let w=0;w<m.length;w++)h(m[w],v[w],x[w]);else{S.multiDrawArraysInstancedWEBGL(i,m,0,v,0,x,0,y);let w=0;for(let A=0;A<y;A++)w+=v[A];for(let A=0;A<x.length;A++)r.update(w,i,x[A])}}this.setMode=o,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function gS(a,e,r,i){let o;function u(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function h(I){return!(I!==rn&&i.convert(I)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const q=I===Fs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==In&&i.convert(I)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Ln&&!q)}function f(I){if(I==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=r.precision!==void 0?r.precision:"highp";const v=f(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const y=r.logarithmicDepthBuffer===!0,x=r.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(x===!0){const I=e.get("EXT_clip_control");I.clipControlEXT(I.LOWER_LEFT_EXT,I.ZERO_TO_ONE_EXT)}const S=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),w=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=a.getParameter(a.MAX_TEXTURE_SIZE),g=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),_=a.getParameter(a.MAX_VERTEX_ATTRIBS),D=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),b=a.getParameter(a.MAX_VARYING_VECTORS),U=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),te=w>0,B=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:f,textureFormatReadable:h,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:y,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:w,maxTextureSize:A,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:D,maxVaryings:b,maxFragmentUniforms:U,vertexTextures:te,maxSamples:B}}function vS(a){const e=this;let r=null,i=0,o=!1,u=!1;const h=new Fi,d=new it,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(y,x){const S=y.length!==0||x||i!==0||o;return o=x,i=y.length,S},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(y,x){r=v(y,x,0)},this.setState=function(y,x,S){const w=y.clippingPlanes,A=y.clipIntersection,g=y.clipShadows,_=a.get(y);if(!o||w===null||w.length===0||u&&!g)u?v(null):m();else{const D=u?0:i,b=D*4;let U=_.clippingState||null;f.value=U,U=v(w,x,b,S);for(let te=0;te!==b;++te)U[te]=r[te];_.clippingState=U,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=D}};function m(){f.value!==r&&(f.value=r,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function v(y,x,S,w){const A=y!==null?y.length:0;let g=null;if(A!==0){if(g=f.value,w!==!0||g===null){const _=S+A*4,D=x.matrixWorldInverse;d.getNormalMatrix(D),(g===null||g.length<_)&&(g=new Float32Array(_));for(let b=0,U=S;b!==A;++b,U+=4)h.copy(y[b]).applyMatrix4(D,d),h.normal.toArray(g,U),g[U+3]=h.constant}f.value=g,f.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,g}}function _S(a){let e=new WeakMap;function r(h,d){return d===dd?h.mapping=za:d===hd&&(h.mapping=ka),h}function i(h){if(h&&h.isTexture){const d=h.mapping;if(d===dd||d===hd)if(e.has(h)){const f=e.get(h).texture;return r(f,h.mapping)}else{const f=h.image;if(f&&f.height>0){const m=new b0(f.height);return m.fromEquirectangularTexture(a,h),e.set(h,m),h.addEventListener("dispose",o),r(m.texture,h.mapping)}else return null}}return h}function o(h){const d=h.target;d.removeEventListener("dispose",o);const f=e.get(d);f!==void 0&&(e.delete(d),f.dispose())}function u(){e=new WeakMap}return{get:i,dispose:u}}class gg extends hg{constructor(e=-1,r=1,i=1,o=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=r,this.top=i,this.bottom=o,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,r){return super.copy(e,r),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,r,i,o,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=r,this.view.offsetX=i,this.view.offsetY=o,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),r=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let u=i-e,h=i+e,d=o+r,f=o-r;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,h=u+m*this.view.width,d-=v*this.view.offsetY,f=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const r=super.toJSON(e);return r.object.zoom=this.zoom,r.object.left=this.left,r.object.right=this.right,r.object.top=this.top,r.object.bottom=this.bottom,r.object.near=this.near,r.object.far=this.far,this.view!==null&&(r.object.view=Object.assign({},this.view)),r}}const Ua=4,om=[.125,.215,.35,.446,.526,.582],Bi=20,qc=new gg,lm=new gt;let Kc=null,Zc=0,$c=0,Qc=!1;const zi=(1+Math.sqrt(5))/2,Na=1/zi,um=[new J(-zi,Na,0),new J(zi,Na,0),new J(-Na,0,zi),new J(Na,0,zi),new J(0,zi,-Na),new J(0,zi,Na),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)];class cm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,r=0,i=.1,o=100){Kc=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),$c=this._renderer.getActiveMipmapLevel(),Qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,i,o,u),r>0&&this._blur(u,0,0,r),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,r=null){return this._fromTexture(e,r)}fromCubemap(e,r=null){return this._fromTexture(e,r)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Kc,Zc,$c),this._renderer.xr.enabled=Qc,e.scissorTest=!1,ml(e,0,0,e.width,e.height)}_fromTexture(e,r){e.mapping===za||e.mapping===ka?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kc=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),$c=this._renderer.getActiveMipmapLevel(),Qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=r||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),r=4*this._cubeSize,i={magFilter:en,minFilter:en,generateMipmaps:!1,type:Fs,format:rn,colorSpace:vi,depthBuffer:!1},o=dm(e,r,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==r){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dm(e,r,i);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xS(u)),this._blurMaterial=yS(u,e,r)}return o}_compileMaterial(e){const r=new Un(this._lodPlanes[0],e);this._renderer.compile(r,qc)}_sceneToCubeUV(e,r,i,o){const u=new Jr(90,1,r,i),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,m=f.autoClear,v=f.toneMapping;f.getClearColor(lm),f.toneMapping=mi,f.autoClear=!1;const y=new lg({name:"PMREM.Background",side:Tr,depthWrite:!1,depthTest:!1}),x=new Un(new Vs,y);let S=!1;const w=e.background;w?w.isColor&&(y.color.copy(w),e.background=null,S=!0):(y.color.copy(lm),S=!0);for(let A=0;A<6;A++){const g=A%3;g===0?(u.up.set(0,h[A],0),u.lookAt(d[A],0,0)):g===1?(u.up.set(0,0,h[A]),u.lookAt(0,d[A],0)):(u.up.set(0,h[A],0),u.lookAt(0,0,d[A]));const _=this._cubeSize;ml(o,g*_,A>2?_:0,_,_),f.setRenderTarget(o),S&&f.render(x,u),f.render(e,u)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=v,f.autoClear=m,e.background=w}_textureToCubeUV(e,r){const i=this._renderer,o=e.mapping===za||e.mapping===ka;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=fm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hm());const u=o?this._cubemapMaterial:this._equirectMaterial,h=new Un(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const f=this._cubeSize;ml(r,0,0,3*f,2*f),i.setRenderTarget(r),i.render(h,qc)}_applyPMREM(e){const r=this._renderer,i=r.autoClear;r.autoClear=!1;const o=this._lodPlanes.length;for(let u=1;u<o;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=um[(o-u-1)%um.length];this._blur(e,u-1,u,h,d)}r.autoClear=i}_blur(e,r,i,o,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,r,i,o,"latitudinal",u),this._halfBlur(h,e,i,i,o,"longitudinal",u)}_halfBlur(e,r,i,o,u,h,d){const f=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,y=new Un(this._lodPlanes[o],m),x=m.uniforms,S=this._sizeLods[i]-1,w=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Bi-1),A=u/w,g=isFinite(u)?1+Math.floor(v*A):Bi;g>Bi&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Bi}`);const _=[];let D=0;for(let I=0;I<Bi;++I){const q=I/A,_e=Math.exp(-q*q/2);_.push(_e),I===0?D+=_e:I<g&&(D+=2*_e)}for(let I=0;I<_.length;I++)_[I]=_[I]/D;x.envMap.value=e.texture,x.samples.value=g,x.weights.value=_,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:b}=this;x.dTheta.value=w,x.mipInt.value=b-i;const U=this._sizeLods[o],te=3*U*(o>b-Ua?o-b+Ua:0),B=4*(this._cubeSize-U);ml(r,te,B,3*U,2*U),f.setRenderTarget(r),f.render(y,qc)}}function xS(a){const e=[],r=[],i=[];let o=a;const u=a-Ua+1+om.length;for(let h=0;h<u;h++){const d=Math.pow(2,o);r.push(d);let f=1/d;h>a-Ua?f=om[h-a+Ua-1]:h===0&&(f=0),i.push(f);const m=1/(d-2),v=-m,y=1+m,x=[v,v,y,v,y,y,v,v,y,y,v,y],S=6,w=6,A=3,g=2,_=1,D=new Float32Array(A*w*S),b=new Float32Array(g*w*S),U=new Float32Array(_*w*S);for(let B=0;B<S;B++){const I=B%3*2/3-1,q=B>2?0:-1,_e=[I,q,0,I+2/3,q,0,I+2/3,q+1,0,I,q,0,I+2/3,q+1,0,I,q+1,0];D.set(_e,A*w*B),b.set(x,g*w*B);const E=[B,B,B,B,B,B];U.set(E,_*w*B)}const te=new nn;te.setAttribute("position",new Er(D,A)),te.setAttribute("uv",new Er(b,g)),te.setAttribute("faceIndex",new Er(U,_)),e.push(te),o>Ua&&o--}return{lodPlanes:e,sizeLods:r,sigmas:i}}function dm(a,e,r){const i=new ji(a,e,r);return i.texture.mapping=zl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ml(a,e,r,i,o){a.viewport.set(e,r,i,o),a.scissor.set(e,r,i,o)}function yS(a,e,r){const i=new Float32Array(Bi),o=new J(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:Bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/r,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:th(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function hm(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:th(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function fm(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function th(){return`

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
	`}function SS(a){let e=new WeakMap,r=null;function i(d){if(d&&d.isTexture){const f=d.mapping,m=f===dd||f===hd,v=f===za||f===ka;if(m||v){let y=e.get(d);const x=y!==void 0?y.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return r===null&&(r=new cm(a)),y=m?r.fromEquirectangular(d,y):r.fromCubemap(d,y),y.texture.pmremVersion=d.pmremVersion,e.set(d,y),y.texture;if(y!==void 0)return y.texture;{const S=d.image;return m&&S&&S.height>0||v&&S&&o(S)?(r===null&&(r=new cm(a)),y=m?r.fromEquirectangular(d):r.fromCubemap(d),y.texture.pmremVersion=d.pmremVersion,e.set(d,y),d.addEventListener("dispose",u),y.texture):null}}}return d}function o(d){let f=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&f++;return f===m}function u(d){const f=d.target;f.removeEventListener("dispose",u);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(){e=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:h}}function MS(a){const e={};function r(i){if(e[i]!==void 0)return e[i];let o;switch(i){case"WEBGL_depth_texture":o=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=a.getExtension(i)}return e[i]=o,o}return{has:function(i){return r(i)!==null},init:function(){r("EXT_color_buffer_float"),r("WEBGL_clip_cull_distance"),r("OES_texture_float_linear"),r("EXT_color_buffer_half_float"),r("WEBGL_multisampled_render_to_texture"),r("WEBGL_render_shared_exponent")},get:function(i){const o=r(i);return o===null&&Rl("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function ES(a,e,r,i){const o={},u=new WeakMap;function h(y){const x=y.target;x.index!==null&&e.remove(x.index);for(const w in x.attributes)e.remove(x.attributes[w]);for(const w in x.morphAttributes){const A=x.morphAttributes[w];for(let g=0,_=A.length;g<_;g++)e.remove(A[g])}x.removeEventListener("dispose",h),delete o[x.id];const S=u.get(x);S&&(e.remove(S),u.delete(x)),i.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,r.memory.geometries--}function d(y,x){return o[x.id]===!0||(x.addEventListener("dispose",h),o[x.id]=!0,r.memory.geometries++),x}function f(y){const x=y.attributes;for(const w in x)e.update(x[w],a.ARRAY_BUFFER);const S=y.morphAttributes;for(const w in S){const A=S[w];for(let g=0,_=A.length;g<_;g++)e.update(A[g],a.ARRAY_BUFFER)}}function m(y){const x=[],S=y.index,w=y.attributes.position;let A=0;if(S!==null){const D=S.array;A=S.version;for(let b=0,U=D.length;b<U;b+=3){const te=D[b+0],B=D[b+1],I=D[b+2];x.push(te,B,B,I,I,te)}}else if(w!==void 0){const D=w.array;A=w.version;for(let b=0,U=D.length/3-1;b<U;b+=3){const te=b+0,B=b+1,I=b+2;x.push(te,B,B,I,I,te)}}else return;const g=new(ng(x)?cg:ug)(x,1);g.version=A;const _=u.get(y);_&&e.remove(_),u.set(y,g)}function v(y){const x=u.get(y);if(x){const S=y.index;S!==null&&x.version<S.version&&m(y)}else m(y);return u.get(y)}return{get:d,update:f,getWireframeAttribute:v}}function TS(a,e,r){let i;function o(x){i=x}let u,h;function d(x){u=x.type,h=x.bytesPerElement}function f(x,S){a.drawElements(i,S,u,x*h),r.update(S,i,1)}function m(x,S,w){w!==0&&(a.drawElementsInstanced(i,S,u,x*h,w),r.update(S,i,w))}function v(x,S,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,S,0,u,x,0,w);let A=0;for(let g=0;g<w;g++)A+=S[g];r.update(A,i,1)}function y(x,S,w,A){if(w===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<x.length;_++)m(x[_]/h,S[_],A[_]);else{g.multiDrawElementsInstancedWEBGL(i,S,0,u,x,0,A,0,w);let _=0;for(let D=0;D<w;D++)_+=S[D];for(let D=0;D<A.length;D++)r.update(_,i,A[D])}}this.setMode=o,this.setIndex=d,this.render=f,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=y}function wS(a){const e={geometries:0,textures:0},r={frame:0,calls:0,triangles:0,points:0,lines:0};function i(u,h,d){switch(r.calls++,h){case a.TRIANGLES:r.triangles+=d*(u/3);break;case a.LINES:r.lines+=d*(u/2);break;case a.LINE_STRIP:r.lines+=d*(u-1);break;case a.LINE_LOOP:r.lines+=d*u;break;case a.POINTS:r.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function o(){r.calls=0,r.triangles=0,r.points=0,r.lines=0}return{memory:e,render:r,programs:null,autoReset:!0,reset:o,update:i}}function AS(a,e,r){const i=new WeakMap,o=new Bt;function u(h,d,f){const m=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=v!==void 0?v.length:0;let x=i.get(d);if(x===void 0||x.count!==y){let S=function(){q.dispose(),i.delete(d),d.removeEventListener("dispose",S)};x!==void 0&&x.texture.dispose();const w=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,g=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],b=d.morphAttributes.color||[];let U=0;w===!0&&(U=1),A===!0&&(U=2),g===!0&&(U=3);let te=d.attributes.position.count*U,B=1;te>e.maxTextureSize&&(B=Math.ceil(te/e.maxTextureSize),te=e.maxTextureSize);const I=new Float32Array(te*B*4*y),q=new ag(I,te,B,y);q.type=Ln,q.needsUpdate=!0;const _e=U*4;for(let E=0;E<y;E++){const C=_[E],re=D[E],ne=b[E],ae=te*B*4*E;for(let pe=0;pe<C.count;pe++){const ee=pe*_e;w===!0&&(o.fromBufferAttribute(C,pe),I[ae+ee+0]=o.x,I[ae+ee+1]=o.y,I[ae+ee+2]=o.z,I[ae+ee+3]=0),A===!0&&(o.fromBufferAttribute(re,pe),I[ae+ee+4]=o.x,I[ae+ee+5]=o.y,I[ae+ee+6]=o.z,I[ae+ee+7]=0),g===!0&&(o.fromBufferAttribute(ne,pe),I[ae+ee+8]=o.x,I[ae+ee+9]=o.y,I[ae+ee+10]=o.z,I[ae+ee+11]=ne.itemSize===4?o.w:1)}}x={count:y,texture:q,size:new Tt(te,B)},i.set(d,x),d.addEventListener("dispose",S)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)f.getUniforms().setValue(a,"morphTexture",h.morphTexture,r);else{let S=0;for(let A=0;A<m.length;A++)S+=m[A];const w=d.morphTargetsRelative?1:1-S;f.getUniforms().setValue(a,"morphTargetBaseInfluence",w),f.getUniforms().setValue(a,"morphTargetInfluences",m)}f.getUniforms().setValue(a,"morphTargetsTexture",x.texture,r),f.getUniforms().setValue(a,"morphTargetsTextureSize",x.size)}return{update:u}}function RS(a,e,r,i){let o=new WeakMap;function u(f){const m=i.render.frame,v=f.geometry,y=e.get(f,v);if(o.get(y)!==m&&(e.update(y),o.set(y,m)),f.isInstancedMesh&&(f.hasEventListener("dispose",d)===!1&&f.addEventListener("dispose",d),o.get(f)!==m&&(r.update(f.instanceMatrix,a.ARRAY_BUFFER),f.instanceColor!==null&&r.update(f.instanceColor,a.ARRAY_BUFFER),o.set(f,m))),f.isSkinnedMesh){const x=f.skeleton;o.get(x)!==m&&(x.update(),o.set(x,m))}return y}function h(){o=new WeakMap}function d(f){const m=f.target;m.removeEventListener("dispose",d),r.remove(m.instanceMatrix),m.instanceColor!==null&&r.remove(m.instanceColor)}return{update:u,dispose:h}}class vg extends wr{constructor(e,r,i,o,u,h,d,f,m,v=Ia){if(v!==Ia&&v!==Ha)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&v===Ia&&(i=Wi),i===void 0&&v===Ha&&(i=Ba),super(null,o,u,h,d,f,v,i,m),this.isDepthTexture=!0,this.image={width:e,height:r},this.magFilter=d!==void 0?d:Vr,this.minFilter=f!==void 0?f:Vr,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const r=super.toJSON(e);return this.compareFunction!==null&&(r.compareFunction=this.compareFunction),r}}const _g=new wr,pm=new vg(1,1),xg=new ag,yg=new f0,Sg=new fg,mm=[],gm=[],vm=new Float32Array(16),_m=new Float32Array(9),xm=new Float32Array(4);function ja(a,e,r){const i=a[0];if(i<=0||i>0)return a;const o=e*r;let u=mm[o];if(u===void 0&&(u=new Float32Array(o),mm[o]=u),e!==0){i.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=r,a[h].toArray(u,d)}return u}function jt(a,e){if(a.length!==e.length)return!1;for(let r=0,i=a.length;r<i;r++)if(a[r]!==e[r])return!1;return!0}function Xt(a,e){for(let r=0,i=e.length;r<i;r++)a[r]=e[r]}function Hl(a,e){let r=gm[e];r===void 0&&(r=new Int32Array(e),gm[e]=r);for(let i=0;i!==e;++i)r[i]=a.allocateTextureUnit();return r}function CS(a,e){const r=this.cache;r[0]!==e&&(a.uniform1f(this.addr,e),r[0]=e)}function bS(a,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(jt(r,e))return;a.uniform2fv(this.addr,e),Xt(r,e)}}function PS(a,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else if(e.r!==void 0)(r[0]!==e.r||r[1]!==e.g||r[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),r[0]=e.r,r[1]=e.g,r[2]=e.b);else{if(jt(r,e))return;a.uniform3fv(this.addr,e),Xt(r,e)}}function LS(a,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(jt(r,e))return;a.uniform4fv(this.addr,e),Xt(r,e)}}function NS(a,e){const r=this.cache,i=e.elements;if(i===void 0){if(jt(r,e))return;a.uniformMatrix2fv(this.addr,!1,e),Xt(r,e)}else{if(jt(r,i))return;xm.set(i),a.uniformMatrix2fv(this.addr,!1,xm),Xt(r,i)}}function US(a,e){const r=this.cache,i=e.elements;if(i===void 0){if(jt(r,e))return;a.uniformMatrix3fv(this.addr,!1,e),Xt(r,e)}else{if(jt(r,i))return;_m.set(i),a.uniformMatrix3fv(this.addr,!1,_m),Xt(r,i)}}function DS(a,e){const r=this.cache,i=e.elements;if(i===void 0){if(jt(r,e))return;a.uniformMatrix4fv(this.addr,!1,e),Xt(r,e)}else{if(jt(r,i))return;vm.set(i),a.uniformMatrix4fv(this.addr,!1,vm),Xt(r,i)}}function IS(a,e){const r=this.cache;r[0]!==e&&(a.uniform1i(this.addr,e),r[0]=e)}function OS(a,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(jt(r,e))return;a.uniform2iv(this.addr,e),Xt(r,e)}}function FS(a,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else{if(jt(r,e))return;a.uniform3iv(this.addr,e),Xt(r,e)}}function zS(a,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(jt(r,e))return;a.uniform4iv(this.addr,e),Xt(r,e)}}function kS(a,e){const r=this.cache;r[0]!==e&&(a.uniform1ui(this.addr,e),r[0]=e)}function BS(a,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(jt(r,e))return;a.uniform2uiv(this.addr,e),Xt(r,e)}}function HS(a,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else{if(jt(r,e))return;a.uniform3uiv(this.addr,e),Xt(r,e)}}function VS(a,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(jt(r,e))return;a.uniform4uiv(this.addr,e),Xt(r,e)}}function GS(a,e,r){const i=this.cache,o=r.allocateTextureUnit();i[0]!==o&&(a.uniform1i(this.addr,o),i[0]=o);let u;this.type===a.SAMPLER_2D_SHADOW?(pm.compareFunction=rg,u=pm):u=_g,r.setTexture2D(e||u,o)}function WS(a,e,r){const i=this.cache,o=r.allocateTextureUnit();i[0]!==o&&(a.uniform1i(this.addr,o),i[0]=o),r.setTexture3D(e||yg,o)}function jS(a,e,r){const i=this.cache,o=r.allocateTextureUnit();i[0]!==o&&(a.uniform1i(this.addr,o),i[0]=o),r.setTextureCube(e||Sg,o)}function XS(a,e,r){const i=this.cache,o=r.allocateTextureUnit();i[0]!==o&&(a.uniform1i(this.addr,o),i[0]=o),r.setTexture2DArray(e||xg,o)}function YS(a){switch(a){case 5126:return CS;case 35664:return bS;case 35665:return PS;case 35666:return LS;case 35674:return NS;case 35675:return US;case 35676:return DS;case 5124:case 35670:return IS;case 35667:case 35671:return OS;case 35668:case 35672:return FS;case 35669:case 35673:return zS;case 5125:return kS;case 36294:return BS;case 36295:return HS;case 36296:return VS;case 35678:case 36198:case 36298:case 36306:case 35682:return GS;case 35679:case 36299:case 36307:return WS;case 35680:case 36300:case 36308:case 36293:return jS;case 36289:case 36303:case 36311:case 36292:return XS}}function qS(a,e){a.uniform1fv(this.addr,e)}function KS(a,e){const r=ja(e,this.size,2);a.uniform2fv(this.addr,r)}function ZS(a,e){const r=ja(e,this.size,3);a.uniform3fv(this.addr,r)}function $S(a,e){const r=ja(e,this.size,4);a.uniform4fv(this.addr,r)}function QS(a,e){const r=ja(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,r)}function JS(a,e){const r=ja(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,r)}function eM(a,e){const r=ja(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,r)}function tM(a,e){a.uniform1iv(this.addr,e)}function rM(a,e){a.uniform2iv(this.addr,e)}function nM(a,e){a.uniform3iv(this.addr,e)}function iM(a,e){a.uniform4iv(this.addr,e)}function aM(a,e){a.uniform1uiv(this.addr,e)}function sM(a,e){a.uniform2uiv(this.addr,e)}function oM(a,e){a.uniform3uiv(this.addr,e)}function lM(a,e){a.uniform4uiv(this.addr,e)}function uM(a,e,r){const i=this.cache,o=e.length,u=Hl(r,o);jt(i,u)||(a.uniform1iv(this.addr,u),Xt(i,u));for(let h=0;h!==o;++h)r.setTexture2D(e[h]||_g,u[h])}function cM(a,e,r){const i=this.cache,o=e.length,u=Hl(r,o);jt(i,u)||(a.uniform1iv(this.addr,u),Xt(i,u));for(let h=0;h!==o;++h)r.setTexture3D(e[h]||yg,u[h])}function dM(a,e,r){const i=this.cache,o=e.length,u=Hl(r,o);jt(i,u)||(a.uniform1iv(this.addr,u),Xt(i,u));for(let h=0;h!==o;++h)r.setTextureCube(e[h]||Sg,u[h])}function hM(a,e,r){const i=this.cache,o=e.length,u=Hl(r,o);jt(i,u)||(a.uniform1iv(this.addr,u),Xt(i,u));for(let h=0;h!==o;++h)r.setTexture2DArray(e[h]||xg,u[h])}function fM(a){switch(a){case 5126:return qS;case 35664:return KS;case 35665:return ZS;case 35666:return $S;case 35674:return QS;case 35675:return JS;case 35676:return eM;case 5124:case 35670:return tM;case 35667:case 35671:return rM;case 35668:case 35672:return nM;case 35669:case 35673:return iM;case 5125:return aM;case 36294:return sM;case 36295:return oM;case 36296:return lM;case 35678:case 36198:case 36298:case 36306:case 35682:return uM;case 35679:case 36299:case 36307:return cM;case 35680:case 36300:case 36308:case 36293:return dM;case 36289:case 36303:case 36311:case 36292:return hM}}class pM{constructor(e,r,i){this.id=e,this.addr=i,this.cache=[],this.type=r.type,this.setValue=YS(r.type)}}class mM{constructor(e,r,i){this.id=e,this.addr=i,this.cache=[],this.type=r.type,this.size=r.size,this.setValue=fM(r.type)}}class gM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,r,i){const o=this.seq;for(let u=0,h=o.length;u!==h;++u){const d=o[u];d.setValue(e,r[d.id],i)}}}const Jc=/(\w+)(\])?(\[|\.)?/g;function ym(a,e){a.seq.push(e),a.map[e.id]=e}function vM(a,e,r){const i=a.name,o=i.length;for(Jc.lastIndex=0;;){const u=Jc.exec(i),h=Jc.lastIndex;let d=u[1];const f=u[2]==="]",m=u[3];if(f&&(d=d|0),m===void 0||m==="["&&h+2===o){ym(r,m===void 0?new pM(d,a,e):new mM(d,a,e));break}else{let v=r.map[d];v===void 0&&(v=new gM(d),ym(r,v)),r=v}}}class Cl{constructor(e,r){this.seq=[],this.map={};const i=e.getProgramParameter(r,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const u=e.getActiveUniform(r,o),h=e.getUniformLocation(r,u.name);vM(u,h,this)}}setValue(e,r,i,o){const u=this.map[r];u!==void 0&&u.setValue(e,i,o)}setOptional(e,r,i){const o=r[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,r,i,o){for(let u=0,h=r.length;u!==h;++u){const d=r[u],f=i[d.id];f.needsUpdate!==!1&&d.setValue(e,f.value,o)}}static seqWithValue(e,r){const i=[];for(let o=0,u=e.length;o!==u;++o){const h=e[o];h.id in r&&i.push(h)}return i}}function Sm(a,e,r){const i=a.createShader(e);return a.shaderSource(i,r),a.compileShader(i),i}const _M=37297;let xM=0;function yM(a,e){const r=a.split(`
`),i=[],o=Math.max(e-6,0),u=Math.min(e+6,r.length);for(let h=o;h<u;h++){const d=h+1;i.push(`${d===e?">":" "} ${d}: ${r[h]}`)}return i.join(`
`)}function SM(a){const e=yt.getPrimaries(yt.workingColorSpace),r=yt.getPrimaries(a);let i;switch(e===r?i="":e===Nl&&r===Ll?i="LinearDisplayP3ToLinearSRGB":e===Ll&&r===Nl&&(i="LinearSRGBToLinearDisplayP3"),a){case vi:case kl:return[i,"LinearTransferOETF"];case cn:case Jd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",a),[i,"LinearTransferOETF"]}}function Mm(a,e,r){const i=a.getShaderParameter(e,a.COMPILE_STATUS),o=a.getShaderInfoLog(e).trim();if(i&&o==="")return"";const u=/ERROR: 0:(\d+)/.exec(o);if(u){const h=parseInt(u[1]);return r.toUpperCase()+`

`+o+`

`+yM(a.getShaderSource(e),h)}else return o}function MM(a,e){const r=SM(e);return`vec4 ${a}( vec4 value ) { return ${r[0]}( ${r[1]}( value ) ); }`}function EM(a,e){let r;switch(e){case z_:r="Linear";break;case k_:r="Reinhard";break;case B_:r="Cineon";break;case H_:r="ACESFilmic";break;case G_:r="AgX";break;case W_:r="Neutral";break;case V_:r="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),r="Linear"}return"vec3 "+a+"( vec3 color ) { return "+r+"ToneMapping( color ); }"}const gl=new J;function TM(){yt.getLuminanceCoefficients(gl);const a=gl.x.toFixed(4),e=gl.y.toFixed(4),r=gl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${r} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wM(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Is).join(`
`)}function AM(a){const e=[];for(const r in a){const i=a[r];i!==!1&&e.push("#define "+r+" "+i)}return e.join(`
`)}function RM(a,e){const r={},i=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const u=a.getActiveAttrib(e,o),h=u.name;let d=1;u.type===a.FLOAT_MAT2&&(d=2),u.type===a.FLOAT_MAT3&&(d=3),u.type===a.FLOAT_MAT4&&(d=4),r[h]={type:u.type,location:a.getAttribLocation(e,h),locationSize:d}}return r}function Is(a){return a!==""}function Em(a,e){const r=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,r).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tm(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const CM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vd(a){return a.replace(CM,PM)}const bM=new Map;function PM(a,e){let r=nt[e];if(r===void 0){const i=bM.get(e);if(i!==void 0)r=nt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Vd(r)}const LM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wm(a){return a.replace(LM,NM)}function NM(a,e,r,i){let o="";for(let u=parseInt(e);u<parseInt(r);u++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return o}function Am(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function UM(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Gm?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===v_?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===bn&&(e="SHADOWMAP_TYPE_VSM"),e}function DM(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case za:case ka:e="ENVMAP_TYPE_CUBE";break;case zl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function IM(a){let e="ENVMAP_MODE_REFLECTION";return a.envMap&&a.envMapMode===ka&&(e="ENVMAP_MODE_REFRACTION"),e}function OM(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Wm:e="ENVMAP_BLENDING_MULTIPLY";break;case O_:e="ENVMAP_BLENDING_MIX";break;case F_:e="ENVMAP_BLENDING_ADD";break}return e}function FM(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const r=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,r),112)),texelHeight:i,maxMip:r}}function zM(a,e,r,i){const o=a.getContext(),u=r.defines;let h=r.vertexShader,d=r.fragmentShader;const f=UM(r),m=DM(r),v=IM(r),y=OM(r),x=FM(r),S=wM(r),w=AM(u),A=o.createProgram();let g,_,D=r.glslVersion?"#version "+r.glslVersion+`
`:"";r.isRawShaderMaterial?(g=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,w].filter(Is).join(`
`),g.length>0&&(g+=`
`),_=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,w].filter(Is).join(`
`),_.length>0&&(_+=`
`)):(g=[Am(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,w,r.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",r.batching?"#define USE_BATCHING":"",r.batchingColor?"#define USE_BATCHING_COLOR":"",r.instancing?"#define USE_INSTANCING":"",r.instancingColor?"#define USE_INSTANCING_COLOR":"",r.instancingMorph?"#define USE_INSTANCING_MORPH":"",r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.map?"#define USE_MAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+v:"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.displacementMap?"#define USE_DISPLACEMENTMAP":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.mapUv?"#define MAP_UV "+r.mapUv:"",r.alphaMapUv?"#define ALPHAMAP_UV "+r.alphaMapUv:"",r.lightMapUv?"#define LIGHTMAP_UV "+r.lightMapUv:"",r.aoMapUv?"#define AOMAP_UV "+r.aoMapUv:"",r.emissiveMapUv?"#define EMISSIVEMAP_UV "+r.emissiveMapUv:"",r.bumpMapUv?"#define BUMPMAP_UV "+r.bumpMapUv:"",r.normalMapUv?"#define NORMALMAP_UV "+r.normalMapUv:"",r.displacementMapUv?"#define DISPLACEMENTMAP_UV "+r.displacementMapUv:"",r.metalnessMapUv?"#define METALNESSMAP_UV "+r.metalnessMapUv:"",r.roughnessMapUv?"#define ROUGHNESSMAP_UV "+r.roughnessMapUv:"",r.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+r.anisotropyMapUv:"",r.clearcoatMapUv?"#define CLEARCOATMAP_UV "+r.clearcoatMapUv:"",r.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+r.clearcoatNormalMapUv:"",r.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+r.clearcoatRoughnessMapUv:"",r.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+r.iridescenceMapUv:"",r.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+r.iridescenceThicknessMapUv:"",r.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+r.sheenColorMapUv:"",r.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+r.sheenRoughnessMapUv:"",r.specularMapUv?"#define SPECULARMAP_UV "+r.specularMapUv:"",r.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+r.specularColorMapUv:"",r.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+r.specularIntensityMapUv:"",r.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+r.transmissionMapUv:"",r.thicknessMapUv?"#define THICKNESSMAP_UV "+r.thicknessMapUv:"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.flatShading?"#define FLAT_SHADED":"",r.skinning?"#define USE_SKINNING":"",r.morphTargets?"#define USE_MORPHTARGETS":"",r.morphNormals&&r.flatShading===!1?"#define USE_MORPHNORMALS":"",r.morphColors?"#define USE_MORPHCOLORS":"",r.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+r.morphTextureStride:"",r.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+r.morphTargetsCount:"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+f:"",r.sizeAttenuation?"#define USE_SIZEATTENUATION":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),_=[Am(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,w,r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",r.map?"#define USE_MAP":"",r.matcap?"#define USE_MATCAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+m:"",r.envMap?"#define "+v:"",r.envMap?"#define "+y:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoat?"#define USE_CLEARCOAT":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.dispersion?"#define USE_DISPERSION":"",r.iridescence?"#define USE_IRIDESCENCE":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaTest?"#define USE_ALPHATEST":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.sheen?"#define USE_SHEEN":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors||r.instancingColor||r.batchingColor?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.gradientMap?"#define USE_GRADIENTMAP":"",r.flatShading?"#define FLAT_SHADED":"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+f:"",r.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",r.toneMapping!==mi?"#define TONE_MAPPING":"",r.toneMapping!==mi?nt.tonemapping_pars_fragment:"",r.toneMapping!==mi?EM("toneMapping",r.toneMapping):"",r.dithering?"#define DITHERING":"",r.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,MM("linearToOutputTexel",r.outputColorSpace),TM(),r.useDepthPacking?"#define DEPTH_PACKING "+r.depthPacking:"",`
`].filter(Is).join(`
`)),h=Vd(h),h=Em(h,r),h=Tm(h,r),d=Vd(d),d=Em(d,r),d=Tm(d,r),h=wm(h),d=wm(d),r.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,g=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,_=["#define varying in",r.glslVersion===Gp?"":"layout(location = 0) out highp vec4 pc_fragColor;",r.glslVersion===Gp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const b=D+g+h,U=D+_+d,te=Sm(o,o.VERTEX_SHADER,b),B=Sm(o,o.FRAGMENT_SHADER,U);o.attachShader(A,te),o.attachShader(A,B),r.index0AttributeName!==void 0?o.bindAttribLocation(A,0,r.index0AttributeName):r.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function I(C){if(a.debug.checkShaderErrors){const re=o.getProgramInfoLog(A).trim(),ne=o.getShaderInfoLog(te).trim(),ae=o.getShaderInfoLog(B).trim();let pe=!0,ee=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(pe=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,A,te,B);else{const ce=Mm(o,te,"vertex"),z=Mm(o,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+re+`
`+ce+`
`+z)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(ne===""||ae==="")&&(ee=!1);ee&&(C.diagnostics={runnable:pe,programLog:re,vertexShader:{log:ne,prefix:g},fragmentShader:{log:ae,prefix:_}})}o.deleteShader(te),o.deleteShader(B),q=new Cl(o,A),_e=RM(o,A)}let q;this.getUniforms=function(){return q===void 0&&I(this),q};let _e;this.getAttributes=function(){return _e===void 0&&I(this),_e};let E=r.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=o.getProgramParameter(A,_M)),E},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=r.shaderType,this.name=r.shaderName,this.id=xM++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=te,this.fragmentShader=B,this}let kM=0;class BM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const r=e.vertexShader,i=e.fragmentShader,o=this._getShaderStage(r),u=this._getShaderStage(i),h=this._getShaderCacheForMaterial(e);return h.has(o)===!1&&(h.add(o),o.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const r=this.materialCache.get(e);for(const i of r)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const r=this.materialCache;let i=r.get(e);return i===void 0&&(i=new Set,r.set(e,i)),i}_getShaderStage(e){const r=this.shaderCache;let i=r.get(e);return i===void 0&&(i=new HM(e),r.set(e,i)),i}}class HM{constructor(e){this.id=kM++,this.code=e,this.usedTimes=0}}function VM(a,e,r,i,o,u,h){const d=new sg,f=new BM,m=new Set,v=[],y=o.logarithmicDepthBuffer,x=o.reverseDepthBuffer,S=o.vertexTextures;let w=o.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return m.add(E),E===0?"uv":`uv${E}`}function _(E,C,re,ne,ae){const pe=ne.fog,ee=ae.geometry,ce=E.isMeshStandardMaterial?ne.environment:null,z=(E.isMeshStandardMaterial?r:e).get(E.envMap||ce),oe=z&&z.mapping===zl?z.image.height:null,se=A[E.type];E.precision!==null&&(w=o.getMaxPrecision(E.precision),w!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",w,"instead."));const N=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Y=N!==void 0?N.length:0;let be=0;ee.morphAttributes.position!==void 0&&(be=1),ee.morphAttributes.normal!==void 0&&(be=2),ee.morphAttributes.color!==void 0&&(be=3);let K,le,ge,Se;if(se){const Yt=dn[se];K=Yt.vertexShader,le=Yt.fragmentShader}else K=E.vertexShader,le=E.fragmentShader,f.update(E),ge=f.getVertexShaderID(E),Se=f.getFragmentShaderID(E);const Pe=a.getRenderTarget(),Le=ae.isInstancedMesh===!0,Je=ae.isBatchedMesh===!0,ft=!!E.map,lt=!!E.matcap,F=!!z,Jt=!!E.aoMap,st=!!E.lightMap,ct=!!E.bumpMap,Ze=!!E.normalMap,Et=!!E.displacementMap,$e=!!E.emissiveMap,P=!!E.metalnessMap,T=!!E.roughnessMap,j=E.anisotropy>0,de=E.clearcoat>0,xe=E.dispersion>0,ue=E.iridescence>0,Ge=E.sheen>0,we=E.transmission>0,De=j&&!!E.anisotropyMap,ot=de&&!!E.clearcoatMap,Me=de&&!!E.clearcoatNormalMap,Fe=de&&!!E.clearcoatRoughnessMap,et=ue&&!!E.iridescenceMap,Qe=ue&&!!E.iridescenceThicknessMap,ze=Ge&&!!E.sheenColorMap,ut=Ge&&!!E.sheenRoughnessMap,rt=!!E.specularMap,vt=!!E.specularColorMap,H=!!E.specularIntensityMap,Ne=we&&!!E.transmissionMap,ie=we&&!!E.thicknessMap,he=!!E.gradientMap,Ae=!!E.alphaMap,Re=E.alphaTest>0,St=!!E.alphaHash,Dt=!!E.extensions;let er=mi;E.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(er=a.toneMapping);const dt={shaderID:se,shaderType:E.type,shaderName:E.name,vertexShader:K,fragmentShader:le,defines:E.defines,customVertexShaderID:ge,customFragmentShaderID:Se,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:w,batching:Je,batchingColor:Je&&ae._colorsTexture!==null,instancing:Le,instancingColor:Le&&ae.instanceColor!==null,instancingMorph:Le&&ae.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:Pe===null?a.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:vi,alphaToCoverage:!!E.alphaToCoverage,map:ft,matcap:lt,envMap:F,envMapMode:F&&z.mapping,envMapCubeUVHeight:oe,aoMap:Jt,lightMap:st,bumpMap:ct,normalMap:Ze,displacementMap:S&&Et,emissiveMap:$e,normalMapObjectSpace:Ze&&E.normalMapType===K_,normalMapTangentSpace:Ze&&E.normalMapType===q_,metalnessMap:P,roughnessMap:T,anisotropy:j,anisotropyMap:De,clearcoat:de,clearcoatMap:ot,clearcoatNormalMap:Me,clearcoatRoughnessMap:Fe,dispersion:xe,iridescence:ue,iridescenceMap:et,iridescenceThicknessMap:Qe,sheen:Ge,sheenColorMap:ze,sheenRoughnessMap:ut,specularMap:rt,specularColorMap:vt,specularIntensityMap:H,transmission:we,transmissionMap:Ne,thicknessMap:ie,gradientMap:he,opaque:E.transparent===!1&&E.blending===Da&&E.alphaToCoverage===!1,alphaMap:Ae,alphaTest:Re,alphaHash:St,combine:E.combine,mapUv:ft&&g(E.map.channel),aoMapUv:Jt&&g(E.aoMap.channel),lightMapUv:st&&g(E.lightMap.channel),bumpMapUv:ct&&g(E.bumpMap.channel),normalMapUv:Ze&&g(E.normalMap.channel),displacementMapUv:Et&&g(E.displacementMap.channel),emissiveMapUv:$e&&g(E.emissiveMap.channel),metalnessMapUv:P&&g(E.metalnessMap.channel),roughnessMapUv:T&&g(E.roughnessMap.channel),anisotropyMapUv:De&&g(E.anisotropyMap.channel),clearcoatMapUv:ot&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:Me&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:ut&&g(E.sheenRoughnessMap.channel),specularMapUv:rt&&g(E.specularMap.channel),specularColorMapUv:vt&&g(E.specularColorMap.channel),specularIntensityMapUv:H&&g(E.specularIntensityMap.channel),transmissionMapUv:Ne&&g(E.transmissionMap.channel),thicknessMapUv:ie&&g(E.thicknessMap.channel),alphaMapUv:Ae&&g(E.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Ze||j),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:ae.isPoints===!0&&!!ee.attributes.uv&&(ft||Ae),fog:!!pe,useFog:E.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:y,reverseDepthBuffer:x,skinning:ae.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:be,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:E.dithering,shadowMapEnabled:a.shadowMap.enabled&&re.length>0,shadowMapType:a.shadowMap.type,toneMapping:er,decodeVideoTexture:ft&&E.map.isVideoTexture===!0&&yt.getTransfer(E.map.colorSpace)===Nt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Pn,flipSided:E.side===Tr,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Dt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&E.extensions.multiDraw===!0||Je)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return dt.vertexUv1s=m.has(1),dt.vertexUv2s=m.has(2),dt.vertexUv3s=m.has(3),m.clear(),dt}function D(E){const C=[];if(E.shaderID?C.push(E.shaderID):(C.push(E.customVertexShaderID),C.push(E.customFragmentShaderID)),E.defines!==void 0)for(const re in E.defines)C.push(re),C.push(E.defines[re]);return E.isRawShaderMaterial===!1&&(b(C,E),U(C,E),C.push(a.outputColorSpace)),C.push(E.customProgramCacheKey),C.join()}function b(E,C){E.push(C.precision),E.push(C.outputColorSpace),E.push(C.envMapMode),E.push(C.envMapCubeUVHeight),E.push(C.mapUv),E.push(C.alphaMapUv),E.push(C.lightMapUv),E.push(C.aoMapUv),E.push(C.bumpMapUv),E.push(C.normalMapUv),E.push(C.displacementMapUv),E.push(C.emissiveMapUv),E.push(C.metalnessMapUv),E.push(C.roughnessMapUv),E.push(C.anisotropyMapUv),E.push(C.clearcoatMapUv),E.push(C.clearcoatNormalMapUv),E.push(C.clearcoatRoughnessMapUv),E.push(C.iridescenceMapUv),E.push(C.iridescenceThicknessMapUv),E.push(C.sheenColorMapUv),E.push(C.sheenRoughnessMapUv),E.push(C.specularMapUv),E.push(C.specularColorMapUv),E.push(C.specularIntensityMapUv),E.push(C.transmissionMapUv),E.push(C.thicknessMapUv),E.push(C.combine),E.push(C.fogExp2),E.push(C.sizeAttenuation),E.push(C.morphTargetsCount),E.push(C.morphAttributeCount),E.push(C.numDirLights),E.push(C.numPointLights),E.push(C.numSpotLights),E.push(C.numSpotLightMaps),E.push(C.numHemiLights),E.push(C.numRectAreaLights),E.push(C.numDirLightShadows),E.push(C.numPointLightShadows),E.push(C.numSpotLightShadows),E.push(C.numSpotLightShadowsWithMaps),E.push(C.numLightProbes),E.push(C.shadowMapType),E.push(C.toneMapping),E.push(C.numClippingPlanes),E.push(C.numClipIntersection),E.push(C.depthPacking)}function U(E,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),E.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.alphaToCoverage&&d.enable(20),E.push(d.mask)}function te(E){const C=A[E.type];let re;if(C){const ne=dn[C];re=w0.clone(ne.uniforms)}else re=E.uniforms;return re}function B(E,C){let re;for(let ne=0,ae=v.length;ne<ae;ne++){const pe=v[ne];if(pe.cacheKey===C){re=pe,++re.usedTimes;break}}return re===void 0&&(re=new zM(a,C,E,u),v.push(re)),re}function I(E){if(--E.usedTimes===0){const C=v.indexOf(E);v[C]=v[v.length-1],v.pop(),E.destroy()}}function q(E){f.remove(E)}function _e(){f.dispose()}return{getParameters:_,getProgramCacheKey:D,getUniforms:te,acquireProgram:B,releaseProgram:I,releaseShaderCache:q,programs:v,dispose:_e}}function GM(){let a=new WeakMap;function e(h){return a.has(h)}function r(h){let d=a.get(h);return d===void 0&&(d={},a.set(h,d)),d}function i(h){a.delete(h)}function o(h,d,f){a.get(h)[d]=f}function u(){a=new WeakMap}return{has:e,get:r,remove:i,update:o,dispose:u}}function WM(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function Rm(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Cm(){const a=[];let e=0;const r=[],i=[],o=[];function u(){e=0,r.length=0,i.length=0,o.length=0}function h(y,x,S,w,A,g){let _=a[e];return _===void 0?(_={id:y.id,object:y,geometry:x,material:S,groupOrder:w,renderOrder:y.renderOrder,z:A,group:g},a[e]=_):(_.id=y.id,_.object=y,_.geometry=x,_.material=S,_.groupOrder=w,_.renderOrder=y.renderOrder,_.z=A,_.group=g),e++,_}function d(y,x,S,w,A,g){const _=h(y,x,S,w,A,g);S.transmission>0?i.push(_):S.transparent===!0?o.push(_):r.push(_)}function f(y,x,S,w,A,g){const _=h(y,x,S,w,A,g);S.transmission>0?i.unshift(_):S.transparent===!0?o.unshift(_):r.unshift(_)}function m(y,x){r.length>1&&r.sort(y||WM),i.length>1&&i.sort(x||Rm),o.length>1&&o.sort(x||Rm)}function v(){for(let y=e,x=a.length;y<x;y++){const S=a[y];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:r,transmissive:i,transparent:o,init:u,push:d,unshift:f,finish:v,sort:m}}function jM(){let a=new WeakMap;function e(i,o){const u=a.get(i);let h;return u===void 0?(h=new Cm,a.set(i,[h])):o>=u.length?(h=new Cm,u.push(h)):h=u[o],h}function r(){a=new WeakMap}return{get:e,dispose:r}}function XM(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let r;switch(e.type){case"DirectionalLight":r={direction:new J,color:new gt};break;case"SpotLight":r={position:new J,direction:new J,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":r={position:new J,color:new gt,distance:0,decay:0};break;case"HemisphereLight":r={direction:new J,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":r={color:new gt,position:new J,halfWidth:new J,halfHeight:new J};break}return a[e.id]=r,r}}}function YM(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let r;switch(e.type){case"DirectionalLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=r,r}}}let qM=0;function KM(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function ZM(a){const e=new XM,r=YM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)i.probe.push(new J);const o=new J,u=new zt,h=new zt;function d(m){let v=0,y=0,x=0;for(let _e=0;_e<9;_e++)i.probe[_e].set(0,0,0);let S=0,w=0,A=0,g=0,_=0,D=0,b=0,U=0,te=0,B=0,I=0;m.sort(KM);for(let _e=0,E=m.length;_e<E;_e++){const C=m[_e],re=C.color,ne=C.intensity,ae=C.distance,pe=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)v+=re.r*ne,y+=re.g*ne,x+=re.b*ne;else if(C.isLightProbe){for(let ee=0;ee<9;ee++)i.probe[ee].addScaledVector(C.sh.coefficients[ee],ne);I++}else if(C.isDirectionalLight){const ee=e.get(C);if(ee.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const ce=C.shadow,z=r.get(C);z.shadowIntensity=ce.intensity,z.shadowBias=ce.bias,z.shadowNormalBias=ce.normalBias,z.shadowRadius=ce.radius,z.shadowMapSize=ce.mapSize,i.directionalShadow[S]=z,i.directionalShadowMap[S]=pe,i.directionalShadowMatrix[S]=C.shadow.matrix,D++}i.directional[S]=ee,S++}else if(C.isSpotLight){const ee=e.get(C);ee.position.setFromMatrixPosition(C.matrixWorld),ee.color.copy(re).multiplyScalar(ne),ee.distance=ae,ee.coneCos=Math.cos(C.angle),ee.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),ee.decay=C.decay,i.spot[A]=ee;const ce=C.shadow;if(C.map&&(i.spotLightMap[te]=C.map,te++,ce.updateMatrices(C),C.castShadow&&B++),i.spotLightMatrix[A]=ce.matrix,C.castShadow){const z=r.get(C);z.shadowIntensity=ce.intensity,z.shadowBias=ce.bias,z.shadowNormalBias=ce.normalBias,z.shadowRadius=ce.radius,z.shadowMapSize=ce.mapSize,i.spotShadow[A]=z,i.spotShadowMap[A]=pe,U++}A++}else if(C.isRectAreaLight){const ee=e.get(C);ee.color.copy(re).multiplyScalar(ne),ee.halfWidth.set(C.width*.5,0,0),ee.halfHeight.set(0,C.height*.5,0),i.rectArea[g]=ee,g++}else if(C.isPointLight){const ee=e.get(C);if(ee.color.copy(C.color).multiplyScalar(C.intensity),ee.distance=C.distance,ee.decay=C.decay,C.castShadow){const ce=C.shadow,z=r.get(C);z.shadowIntensity=ce.intensity,z.shadowBias=ce.bias,z.shadowNormalBias=ce.normalBias,z.shadowRadius=ce.radius,z.shadowMapSize=ce.mapSize,z.shadowCameraNear=ce.camera.near,z.shadowCameraFar=ce.camera.far,i.pointShadow[w]=z,i.pointShadowMap[w]=pe,i.pointShadowMatrix[w]=C.shadow.matrix,b++}i.point[w]=ee,w++}else if(C.isHemisphereLight){const ee=e.get(C);ee.skyColor.copy(C.color).multiplyScalar(ne),ee.groundColor.copy(C.groundColor).multiplyScalar(ne),i.hemi[_]=ee,_++}}g>0&&(a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2)),i.ambient[0]=v,i.ambient[1]=y,i.ambient[2]=x;const q=i.hash;(q.directionalLength!==S||q.pointLength!==w||q.spotLength!==A||q.rectAreaLength!==g||q.hemiLength!==_||q.numDirectionalShadows!==D||q.numPointShadows!==b||q.numSpotShadows!==U||q.numSpotMaps!==te||q.numLightProbes!==I)&&(i.directional.length=S,i.spot.length=A,i.rectArea.length=g,i.point.length=w,i.hemi.length=_,i.directionalShadow.length=D,i.directionalShadowMap.length=D,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=U,i.spotShadowMap.length=U,i.directionalShadowMatrix.length=D,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=U+te-B,i.spotLightMap.length=te,i.numSpotLightShadowsWithMaps=B,i.numLightProbes=I,q.directionalLength=S,q.pointLength=w,q.spotLength=A,q.rectAreaLength=g,q.hemiLength=_,q.numDirectionalShadows=D,q.numPointShadows=b,q.numSpotShadows=U,q.numSpotMaps=te,q.numLightProbes=I,i.version=qM++)}function f(m,v){let y=0,x=0,S=0,w=0,A=0;const g=v.matrixWorldInverse;for(let _=0,D=m.length;_<D;_++){const b=m[_];if(b.isDirectionalLight){const U=i.directional[y];U.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(g),y++}else if(b.isSpotLight){const U=i.spot[S];U.position.setFromMatrixPosition(b.matrixWorld),U.position.applyMatrix4(g),U.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(g),S++}else if(b.isRectAreaLight){const U=i.rectArea[w];U.position.setFromMatrixPosition(b.matrixWorld),U.position.applyMatrix4(g),h.identity(),u.copy(b.matrixWorld),u.premultiply(g),h.extractRotation(u),U.halfWidth.set(b.width*.5,0,0),U.halfHeight.set(0,b.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),w++}else if(b.isPointLight){const U=i.point[x];U.position.setFromMatrixPosition(b.matrixWorld),U.position.applyMatrix4(g),x++}else if(b.isHemisphereLight){const U=i.hemi[A];U.direction.setFromMatrixPosition(b.matrixWorld),U.direction.transformDirection(g),A++}}}return{setup:d,setupView:f,state:i}}function bm(a){const e=new ZM(a),r=[],i=[];function o(v){m.camera=v,r.length=0,i.length=0}function u(v){r.push(v)}function h(v){i.push(v)}function d(){e.setup(r)}function f(v){e.setupView(r,v)}const m={lightsArray:r,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:d,setupLightsView:f,pushLight:u,pushShadow:h}}function $M(a){let e=new WeakMap;function r(o,u=0){const h=e.get(o);let d;return h===void 0?(d=new bm(a),e.set(o,[d])):u>=h.length?(d=new bm(a),h.push(d)):d=h[u],d}function i(){e=new WeakMap}return{get:r,dispose:i}}class QM extends Wa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=X_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class JM extends Wa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const eE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tE=`uniform sampler2D shadow_pass;
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
}`;function rE(a,e,r){let i=new pg;const o=new Tt,u=new Tt,h=new Bt,d=new QM({depthPacking:Y_}),f=new JM,m={},v=r.maxTextureSize,y={[gi]:Tr,[Tr]:gi,[Pn]:Pn},x=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:eE,fragmentShader:tE}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const w=new nn;w.setAttribute("position",new Er(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Un(w,x),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gm;let _=this.type;this.render=function(B,I,q){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||B.length===0)return;const _e=a.getRenderTarget(),E=a.getActiveCubeFace(),C=a.getActiveMipmapLevel(),re=a.state;re.setBlending(pi),re.buffers.color.setClear(1,1,1,1),re.buffers.depth.setTest(!0),re.setScissorTest(!1);const ne=_!==bn&&this.type===bn,ae=_===bn&&this.type!==bn;for(let pe=0,ee=B.length;pe<ee;pe++){const ce=B[pe],z=ce.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;o.copy(z.mapSize);const oe=z.getFrameExtents();if(o.multiply(oe),u.copy(z.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(u.x=Math.floor(v/oe.x),o.x=u.x*oe.x,z.mapSize.x=u.x),o.y>v&&(u.y=Math.floor(v/oe.y),o.y=u.y*oe.y,z.mapSize.y=u.y)),z.map===null||ne===!0||ae===!0){const N=this.type!==bn?{minFilter:Vr,magFilter:Vr}:{};z.map!==null&&z.map.dispose(),z.map=new ji(o.x,o.y,N),z.map.texture.name=ce.name+".shadowMap",z.camera.updateProjectionMatrix()}a.setRenderTarget(z.map),a.clear();const se=z.getViewportCount();for(let N=0;N<se;N++){const Y=z.getViewport(N);h.set(u.x*Y.x,u.y*Y.y,u.x*Y.z,u.y*Y.w),re.viewport(h),z.updateMatrices(ce,N),i=z.getFrustum(),U(I,q,z.camera,ce,this.type)}z.isPointLightShadow!==!0&&this.type===bn&&D(z,q),z.needsUpdate=!1}_=this.type,g.needsUpdate=!1,a.setRenderTarget(_e,E,C)};function D(B,I){const q=e.update(A);x.defines.VSM_SAMPLES!==B.blurSamples&&(x.defines.VSM_SAMPLES=B.blurSamples,S.defines.VSM_SAMPLES=B.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new ji(o.x,o.y)),x.uniforms.shadow_pass.value=B.map.texture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,a.setRenderTarget(B.mapPass),a.clear(),a.renderBufferDirect(I,null,q,x,A,null),S.uniforms.shadow_pass.value=B.mapPass.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,a.setRenderTarget(B.map),a.clear(),a.renderBufferDirect(I,null,q,S,A,null)}function b(B,I,q,_e){let E=null;const C=q.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(C!==void 0)E=C;else if(E=q.isPointLight===!0?f:d,a.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const re=E.uuid,ne=I.uuid;let ae=m[re];ae===void 0&&(ae={},m[re]=ae);let pe=ae[ne];pe===void 0&&(pe=E.clone(),ae[ne]=pe,I.addEventListener("dispose",te)),E=pe}if(E.visible=I.visible,E.wireframe=I.wireframe,_e===bn?E.side=I.shadowSide!==null?I.shadowSide:I.side:E.side=I.shadowSide!==null?I.shadowSide:y[I.side],E.alphaMap=I.alphaMap,E.alphaTest=I.alphaTest,E.map=I.map,E.clipShadows=I.clipShadows,E.clippingPlanes=I.clippingPlanes,E.clipIntersection=I.clipIntersection,E.displacementMap=I.displacementMap,E.displacementScale=I.displacementScale,E.displacementBias=I.displacementBias,E.wireframeLinewidth=I.wireframeLinewidth,E.linewidth=I.linewidth,q.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const re=a.properties.get(E);re.light=q}return E}function U(B,I,q,_e,E){if(B.visible===!1)return;if(B.layers.test(I.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&E===bn)&&(!B.frustumCulled||i.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,B.matrixWorld);const re=e.update(B),ne=B.material;if(Array.isArray(ne)){const ae=re.groups;for(let pe=0,ee=ae.length;pe<ee;pe++){const ce=ae[pe],z=ne[ce.materialIndex];if(z&&z.visible){const oe=b(B,z,_e,E);B.onBeforeShadow(a,B,I,q,re,oe,ce),a.renderBufferDirect(q,null,re,oe,B,ce),B.onAfterShadow(a,B,I,q,re,oe,ce)}}}else if(ne.visible){const ae=b(B,ne,_e,E);B.onBeforeShadow(a,B,I,q,re,ae,null),a.renderBufferDirect(q,null,re,ae,B,null),B.onAfterShadow(a,B,I,q,re,ae,null)}}const C=B.children;for(let re=0,ne=C.length;re<ne;re++)U(C[re],I,q,_e,E)}function te(B){B.target.removeEventListener("dispose",te);for(const I in m){const q=m[I],_e=B.target.uuid;_e in q&&(q[_e].dispose(),delete q[_e])}}}const nE={[id]:ad,[sd]:ud,[od]:cd,[Fa]:ld,[ad]:id,[ud]:sd,[cd]:od,[ld]:Fa};function iE(a){function e(){let H=!1;const Ne=new Bt;let ie=null;const he=new Bt(0,0,0,0);return{setMask:function(Ae){ie!==Ae&&!H&&(a.colorMask(Ae,Ae,Ae,Ae),ie=Ae)},setLocked:function(Ae){H=Ae},setClear:function(Ae,Re,St,Dt,er){er===!0&&(Ae*=Dt,Re*=Dt,St*=Dt),Ne.set(Ae,Re,St,Dt),he.equals(Ne)===!1&&(a.clearColor(Ae,Re,St,Dt),he.copy(Ne))},reset:function(){H=!1,ie=null,he.set(-1,0,0,0)}}}function r(){let H=!1,Ne=!1,ie=null,he=null,Ae=null;return{setReversed:function(Re){Ne=Re},setTest:function(Re){Re?ge(a.DEPTH_TEST):Se(a.DEPTH_TEST)},setMask:function(Re){ie!==Re&&!H&&(a.depthMask(Re),ie=Re)},setFunc:function(Re){if(Ne&&(Re=nE[Re]),he!==Re){switch(Re){case id:a.depthFunc(a.NEVER);break;case ad:a.depthFunc(a.ALWAYS);break;case sd:a.depthFunc(a.LESS);break;case Fa:a.depthFunc(a.LEQUAL);break;case od:a.depthFunc(a.EQUAL);break;case ld:a.depthFunc(a.GEQUAL);break;case ud:a.depthFunc(a.GREATER);break;case cd:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}he=Re}},setLocked:function(Re){H=Re},setClear:function(Re){Ae!==Re&&(a.clearDepth(Re),Ae=Re)},reset:function(){H=!1,ie=null,he=null,Ae=null}}}function i(){let H=!1,Ne=null,ie=null,he=null,Ae=null,Re=null,St=null,Dt=null,er=null;return{setTest:function(dt){H||(dt?ge(a.STENCIL_TEST):Se(a.STENCIL_TEST))},setMask:function(dt){Ne!==dt&&!H&&(a.stencilMask(dt),Ne=dt)},setFunc:function(dt,Yt,Dr){(ie!==dt||he!==Yt||Ae!==Dr)&&(a.stencilFunc(dt,Yt,Dr),ie=dt,he=Yt,Ae=Dr)},setOp:function(dt,Yt,Dr){(Re!==dt||St!==Yt||Dt!==Dr)&&(a.stencilOp(dt,Yt,Dr),Re=dt,St=Yt,Dt=Dr)},setLocked:function(dt){H=dt},setClear:function(dt){er!==dt&&(a.clearStencil(dt),er=dt)},reset:function(){H=!1,Ne=null,ie=null,he=null,Ae=null,Re=null,St=null,Dt=null,er=null}}}const o=new e,u=new r,h=new i,d=new WeakMap,f=new WeakMap;let m={},v={},y=new WeakMap,x=[],S=null,w=!1,A=null,g=null,_=null,D=null,b=null,U=null,te=null,B=new gt(0,0,0),I=0,q=!1,_e=null,E=null,C=null,re=null,ne=null;const ae=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let pe=!1,ee=0;const ce=a.getParameter(a.VERSION);ce.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(ce)[1]),pe=ee>=1):ce.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),pe=ee>=2);let z=null,oe={};const se=a.getParameter(a.SCISSOR_BOX),N=a.getParameter(a.VIEWPORT),Y=new Bt().fromArray(se),be=new Bt().fromArray(N);function K(H,Ne,ie,he){const Ae=new Uint8Array(4),Re=a.createTexture();a.bindTexture(H,Re),a.texParameteri(H,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(H,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let St=0;St<ie;St++)H===a.TEXTURE_3D||H===a.TEXTURE_2D_ARRAY?a.texImage3D(Ne,0,a.RGBA,1,1,he,0,a.RGBA,a.UNSIGNED_BYTE,Ae):a.texImage2D(Ne+St,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Ae);return Re}const le={};le[a.TEXTURE_2D]=K(a.TEXTURE_2D,a.TEXTURE_2D,1),le[a.TEXTURE_CUBE_MAP]=K(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[a.TEXTURE_2D_ARRAY]=K(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),le[a.TEXTURE_3D]=K(a.TEXTURE_3D,a.TEXTURE_3D,1,1),o.setClear(0,0,0,1),u.setClear(1),h.setClear(0),ge(a.DEPTH_TEST),u.setFunc(Fa),st(!1),ct(zp),ge(a.CULL_FACE),F(pi);function ge(H){m[H]!==!0&&(a.enable(H),m[H]=!0)}function Se(H){m[H]!==!1&&(a.disable(H),m[H]=!1)}function Pe(H,Ne){return v[H]!==Ne?(a.bindFramebuffer(H,Ne),v[H]=Ne,H===a.DRAW_FRAMEBUFFER&&(v[a.FRAMEBUFFER]=Ne),H===a.FRAMEBUFFER&&(v[a.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Le(H,Ne){let ie=x,he=!1;if(H){ie=y.get(Ne),ie===void 0&&(ie=[],y.set(Ne,ie));const Ae=H.textures;if(ie.length!==Ae.length||ie[0]!==a.COLOR_ATTACHMENT0){for(let Re=0,St=Ae.length;Re<St;Re++)ie[Re]=a.COLOR_ATTACHMENT0+Re;ie.length=Ae.length,he=!0}}else ie[0]!==a.BACK&&(ie[0]=a.BACK,he=!0);he&&a.drawBuffers(ie)}function Je(H){return S!==H?(a.useProgram(H),S=H,!0):!1}const ft={[ki]:a.FUNC_ADD,[x_]:a.FUNC_SUBTRACT,[y_]:a.FUNC_REVERSE_SUBTRACT};ft[S_]=a.MIN,ft[M_]=a.MAX;const lt={[E_]:a.ZERO,[T_]:a.ONE,[w_]:a.SRC_COLOR,[rd]:a.SRC_ALPHA,[L_]:a.SRC_ALPHA_SATURATE,[b_]:a.DST_COLOR,[R_]:a.DST_ALPHA,[A_]:a.ONE_MINUS_SRC_COLOR,[nd]:a.ONE_MINUS_SRC_ALPHA,[P_]:a.ONE_MINUS_DST_COLOR,[C_]:a.ONE_MINUS_DST_ALPHA,[N_]:a.CONSTANT_COLOR,[U_]:a.ONE_MINUS_CONSTANT_COLOR,[D_]:a.CONSTANT_ALPHA,[I_]:a.ONE_MINUS_CONSTANT_ALPHA};function F(H,Ne,ie,he,Ae,Re,St,Dt,er,dt){if(H===pi){w===!0&&(Se(a.BLEND),w=!1);return}if(w===!1&&(ge(a.BLEND),w=!0),H!==__){if(H!==A||dt!==q){if((g!==ki||b!==ki)&&(a.blendEquation(a.FUNC_ADD),g=ki,b=ki),dt)switch(H){case Da:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case bl:a.blendFunc(a.ONE,a.ONE);break;case kp:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Bp:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Da:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case bl:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case kp:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Bp:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}_=null,D=null,U=null,te=null,B.set(0,0,0),I=0,A=H,q=dt}return}Ae=Ae||Ne,Re=Re||ie,St=St||he,(Ne!==g||Ae!==b)&&(a.blendEquationSeparate(ft[Ne],ft[Ae]),g=Ne,b=Ae),(ie!==_||he!==D||Re!==U||St!==te)&&(a.blendFuncSeparate(lt[ie],lt[he],lt[Re],lt[St]),_=ie,D=he,U=Re,te=St),(Dt.equals(B)===!1||er!==I)&&(a.blendColor(Dt.r,Dt.g,Dt.b,er),B.copy(Dt),I=er),A=H,q=!1}function Jt(H,Ne){H.side===Pn?Se(a.CULL_FACE):ge(a.CULL_FACE);let ie=H.side===Tr;Ne&&(ie=!ie),st(ie),H.blending===Da&&H.transparent===!1?F(pi):F(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),o.setMask(H.colorWrite);const he=H.stencilWrite;h.setTest(he),he&&(h.setMask(H.stencilWriteMask),h.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),h.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Et(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ge(a.SAMPLE_ALPHA_TO_COVERAGE):Se(a.SAMPLE_ALPHA_TO_COVERAGE)}function st(H){_e!==H&&(H?a.frontFace(a.CW):a.frontFace(a.CCW),_e=H)}function ct(H){H!==m_?(ge(a.CULL_FACE),H!==E&&(H===zp?a.cullFace(a.BACK):H===g_?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Se(a.CULL_FACE),E=H}function Ze(H){H!==C&&(pe&&a.lineWidth(H),C=H)}function Et(H,Ne,ie){H?(ge(a.POLYGON_OFFSET_FILL),(re!==Ne||ne!==ie)&&(a.polygonOffset(Ne,ie),re=Ne,ne=ie)):Se(a.POLYGON_OFFSET_FILL)}function $e(H){H?ge(a.SCISSOR_TEST):Se(a.SCISSOR_TEST)}function P(H){H===void 0&&(H=a.TEXTURE0+ae-1),z!==H&&(a.activeTexture(H),z=H)}function T(H,Ne,ie){ie===void 0&&(z===null?ie=a.TEXTURE0+ae-1:ie=z);let he=oe[ie];he===void 0&&(he={type:void 0,texture:void 0},oe[ie]=he),(he.type!==H||he.texture!==Ne)&&(z!==ie&&(a.activeTexture(ie),z=ie),a.bindTexture(H,Ne||le[H]),he.type=H,he.texture=Ne)}function j(){const H=oe[z];H!==void 0&&H.type!==void 0&&(a.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function de(){try{a.compressedTexImage2D.apply(a,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function xe(){try{a.compressedTexImage3D.apply(a,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ue(){try{a.texSubImage2D.apply(a,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ge(){try{a.texSubImage3D.apply(a,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function we(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function De(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ot(){try{a.texStorage2D.apply(a,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Me(){try{a.texStorage3D.apply(a,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Fe(){try{a.texImage2D.apply(a,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function et(){try{a.texImage3D.apply(a,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Qe(H){Y.equals(H)===!1&&(a.scissor(H.x,H.y,H.z,H.w),Y.copy(H))}function ze(H){be.equals(H)===!1&&(a.viewport(H.x,H.y,H.z,H.w),be.copy(H))}function ut(H,Ne){let ie=f.get(Ne);ie===void 0&&(ie=new WeakMap,f.set(Ne,ie));let he=ie.get(H);he===void 0&&(he=a.getUniformBlockIndex(Ne,H.name),ie.set(H,he))}function rt(H,Ne){const ie=f.get(Ne).get(H);d.get(Ne)!==ie&&(a.uniformBlockBinding(Ne,ie,H.__bindingPointIndex),d.set(Ne,ie))}function vt(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),m={},z=null,oe={},v={},y=new WeakMap,x=[],S=null,w=!1,A=null,g=null,_=null,D=null,b=null,U=null,te=null,B=new gt(0,0,0),I=0,q=!1,_e=null,E=null,C=null,re=null,ne=null,Y.set(0,0,a.canvas.width,a.canvas.height),be.set(0,0,a.canvas.width,a.canvas.height),o.reset(),u.reset(),h.reset()}return{buffers:{color:o,depth:u,stencil:h},enable:ge,disable:Se,bindFramebuffer:Pe,drawBuffers:Le,useProgram:Je,setBlending:F,setMaterial:Jt,setFlipSided:st,setCullFace:ct,setLineWidth:Ze,setPolygonOffset:Et,setScissorTest:$e,activeTexture:P,bindTexture:T,unbindTexture:j,compressedTexImage2D:de,compressedTexImage3D:xe,texImage2D:Fe,texImage3D:et,updateUBOMapping:ut,uniformBlockBinding:rt,texStorage2D:ot,texStorage3D:Me,texSubImage2D:ue,texSubImage3D:Ge,compressedTexSubImage2D:we,compressedTexSubImage3D:De,scissor:Qe,viewport:ze,reset:vt}}function Pm(a,e,r,i){const o=aE(i);switch(r){case Km:return a*e;case $m:return a*e;case Qm:return a*e*2;case Jm:return a*e/o.components*o.byteLength;case Zd:return a*e/o.components*o.byteLength;case eg:return a*e*2/o.components*o.byteLength;case $d:return a*e*2/o.components*o.byteLength;case Zm:return a*e*3/o.components*o.byteLength;case rn:return a*e*4/o.components*o.byteLength;case Qd:return a*e*4/o.components*o.byteLength;case Ml:case El:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Tl:case wl:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case gd:case _d:return Math.max(a,16)*Math.max(e,8)/4;case md:case vd:return Math.max(a,8)*Math.max(e,8)/2;case xd:case yd:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Sd:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Md:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Ed:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Td:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case wd:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Ad:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Rd:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Cd:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case bd:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Pd:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Ld:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Nd:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Ud:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Dd:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Id:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Al:case Od:case Fd:return Math.ceil(a/4)*Math.ceil(e/4)*16;case tg:case zd:return Math.ceil(a/4)*Math.ceil(e/4)*8;case kd:case Bd:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${r} format.`)}function aE(a){switch(a){case In:case Xm:return{byteLength:1,components:1};case Os:case Ym:case Fs:return{byteLength:2,components:1};case qd:case Kd:return{byteLength:2,components:4};case Wi:case Yd:case Ln:return{byteLength:4,components:1};case qm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}function sE(a,e,r,i,o,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Tt,v=new WeakMap;let y;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(P,T){return S?new OffscreenCanvas(P,T):Dl("canvas")}function A(P,T,j){let de=1;const xe=$e(P);if((xe.width>j||xe.height>j)&&(de=j/Math.max(xe.width,xe.height)),de<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ue=Math.floor(de*xe.width),Ge=Math.floor(de*xe.height);y===void 0&&(y=w(ue,Ge));const we=T?w(ue,Ge):y;return we.width=ue,we.height=Ge,we.getContext("2d").drawImage(P,0,0,ue,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+ue+"x"+Ge+")."),we}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),P;return P}function g(P){return P.generateMipmaps&&P.minFilter!==Vr&&P.minFilter!==en}function _(P){a.generateMipmap(P)}function D(P,T,j,de,xe=!1){if(P!==null){if(a[P]!==void 0)return a[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ue=T;if(T===a.RED&&(j===a.FLOAT&&(ue=a.R32F),j===a.HALF_FLOAT&&(ue=a.R16F),j===a.UNSIGNED_BYTE&&(ue=a.R8)),T===a.RED_INTEGER&&(j===a.UNSIGNED_BYTE&&(ue=a.R8UI),j===a.UNSIGNED_SHORT&&(ue=a.R16UI),j===a.UNSIGNED_INT&&(ue=a.R32UI),j===a.BYTE&&(ue=a.R8I),j===a.SHORT&&(ue=a.R16I),j===a.INT&&(ue=a.R32I)),T===a.RG&&(j===a.FLOAT&&(ue=a.RG32F),j===a.HALF_FLOAT&&(ue=a.RG16F),j===a.UNSIGNED_BYTE&&(ue=a.RG8)),T===a.RG_INTEGER&&(j===a.UNSIGNED_BYTE&&(ue=a.RG8UI),j===a.UNSIGNED_SHORT&&(ue=a.RG16UI),j===a.UNSIGNED_INT&&(ue=a.RG32UI),j===a.BYTE&&(ue=a.RG8I),j===a.SHORT&&(ue=a.RG16I),j===a.INT&&(ue=a.RG32I)),T===a.RGB_INTEGER&&(j===a.UNSIGNED_BYTE&&(ue=a.RGB8UI),j===a.UNSIGNED_SHORT&&(ue=a.RGB16UI),j===a.UNSIGNED_INT&&(ue=a.RGB32UI),j===a.BYTE&&(ue=a.RGB8I),j===a.SHORT&&(ue=a.RGB16I),j===a.INT&&(ue=a.RGB32I)),T===a.RGBA_INTEGER&&(j===a.UNSIGNED_BYTE&&(ue=a.RGBA8UI),j===a.UNSIGNED_SHORT&&(ue=a.RGBA16UI),j===a.UNSIGNED_INT&&(ue=a.RGBA32UI),j===a.BYTE&&(ue=a.RGBA8I),j===a.SHORT&&(ue=a.RGBA16I),j===a.INT&&(ue=a.RGBA32I)),T===a.RGB&&j===a.UNSIGNED_INT_5_9_9_9_REV&&(ue=a.RGB9_E5),T===a.RGBA){const Ge=xe?Pl:yt.getTransfer(de);j===a.FLOAT&&(ue=a.RGBA32F),j===a.HALF_FLOAT&&(ue=a.RGBA16F),j===a.UNSIGNED_BYTE&&(ue=Ge===Nt?a.SRGB8_ALPHA8:a.RGBA8),j===a.UNSIGNED_SHORT_4_4_4_4&&(ue=a.RGBA4),j===a.UNSIGNED_SHORT_5_5_5_1&&(ue=a.RGB5_A1)}return(ue===a.R16F||ue===a.R32F||ue===a.RG16F||ue===a.RG32F||ue===a.RGBA16F||ue===a.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function b(P,T){let j;return P?T===null||T===Wi||T===Ba?j=a.DEPTH24_STENCIL8:T===Ln?j=a.DEPTH32F_STENCIL8:T===Os&&(j=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Wi||T===Ba?j=a.DEPTH_COMPONENT24:T===Ln?j=a.DEPTH_COMPONENT32F:T===Os&&(j=a.DEPTH_COMPONENT16),j}function U(P,T){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==Vr&&P.minFilter!==en?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function te(P){const T=P.target;T.removeEventListener("dispose",te),I(T),T.isVideoTexture&&v.delete(T)}function B(P){const T=P.target;T.removeEventListener("dispose",B),_e(T)}function I(P){const T=i.get(P);if(T.__webglInit===void 0)return;const j=P.source,de=x.get(j);if(de){const xe=de[T.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&q(P),Object.keys(de).length===0&&x.delete(j)}i.remove(P)}function q(P){const T=i.get(P);a.deleteTexture(T.__webglTexture);const j=P.source,de=x.get(j);delete de[T.__cacheKey],h.memory.textures--}function _e(P){const T=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(T.__webglFramebuffer[de]))for(let xe=0;xe<T.__webglFramebuffer[de].length;xe++)a.deleteFramebuffer(T.__webglFramebuffer[de][xe]);else a.deleteFramebuffer(T.__webglFramebuffer[de]);T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer[de])}else{if(Array.isArray(T.__webglFramebuffer))for(let de=0;de<T.__webglFramebuffer.length;de++)a.deleteFramebuffer(T.__webglFramebuffer[de]);else a.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&a.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let de=0;de<T.__webglColorRenderbuffer.length;de++)T.__webglColorRenderbuffer[de]&&a.deleteRenderbuffer(T.__webglColorRenderbuffer[de]);T.__webglDepthRenderbuffer&&a.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const j=P.textures;for(let de=0,xe=j.length;de<xe;de++){const ue=i.get(j[de]);ue.__webglTexture&&(a.deleteTexture(ue.__webglTexture),h.memory.textures--),i.remove(j[de])}i.remove(P)}let E=0;function C(){E=0}function re(){const P=E;return P>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),E+=1,P}function ne(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function ae(P,T){const j=i.get(P);if(P.isVideoTexture&&Ze(P),P.isRenderTargetTexture===!1&&P.version>0&&j.__version!==P.version){const de=P.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(j,P,T);return}}r.bindTexture(a.TEXTURE_2D,j.__webglTexture,a.TEXTURE0+T)}function pe(P,T){const j=i.get(P);if(P.version>0&&j.__version!==P.version){be(j,P,T);return}r.bindTexture(a.TEXTURE_2D_ARRAY,j.__webglTexture,a.TEXTURE0+T)}function ee(P,T){const j=i.get(P);if(P.version>0&&j.__version!==P.version){be(j,P,T);return}r.bindTexture(a.TEXTURE_3D,j.__webglTexture,a.TEXTURE0+T)}function ce(P,T){const j=i.get(P);if(P.version>0&&j.__version!==P.version){K(j,P,T);return}r.bindTexture(a.TEXTURE_CUBE_MAP,j.__webglTexture,a.TEXTURE0+T)}const z={[fd]:a.REPEAT,[Hi]:a.CLAMP_TO_EDGE,[pd]:a.MIRRORED_REPEAT},oe={[Vr]:a.NEAREST,[j_]:a.NEAREST_MIPMAP_NEAREST,[Zo]:a.NEAREST_MIPMAP_LINEAR,[en]:a.LINEAR,[Tc]:a.LINEAR_MIPMAP_NEAREST,[Vi]:a.LINEAR_MIPMAP_LINEAR},se={[Z_]:a.NEVER,[r0]:a.ALWAYS,[$_]:a.LESS,[rg]:a.LEQUAL,[Q_]:a.EQUAL,[t0]:a.GEQUAL,[J_]:a.GREATER,[e0]:a.NOTEQUAL};function N(P,T){if(T.type===Ln&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===en||T.magFilter===Tc||T.magFilter===Zo||T.magFilter===Vi||T.minFilter===en||T.minFilter===Tc||T.minFilter===Zo||T.minFilter===Vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(P,a.TEXTURE_WRAP_S,z[T.wrapS]),a.texParameteri(P,a.TEXTURE_WRAP_T,z[T.wrapT]),(P===a.TEXTURE_3D||P===a.TEXTURE_2D_ARRAY)&&a.texParameteri(P,a.TEXTURE_WRAP_R,z[T.wrapR]),a.texParameteri(P,a.TEXTURE_MAG_FILTER,oe[T.magFilter]),a.texParameteri(P,a.TEXTURE_MIN_FILTER,oe[T.minFilter]),T.compareFunction&&(a.texParameteri(P,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(P,a.TEXTURE_COMPARE_FUNC,se[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Vr||T.minFilter!==Zo&&T.minFilter!==Vi||T.type===Ln&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");a.texParameterf(P,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Y(P,T){let j=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",te));const de=T.source;let xe=x.get(de);xe===void 0&&(xe={},x.set(de,xe));const ue=ne(T);if(ue!==P.__cacheKey){xe[ue]===void 0&&(xe[ue]={texture:a.createTexture(),usedTimes:0},h.memory.textures++,j=!0),xe[ue].usedTimes++;const Ge=xe[P.__cacheKey];Ge!==void 0&&(xe[P.__cacheKey].usedTimes--,Ge.usedTimes===0&&q(T)),P.__cacheKey=ue,P.__webglTexture=xe[ue].texture}return j}function be(P,T,j){let de=a.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(de=a.TEXTURE_2D_ARRAY),T.isData3DTexture&&(de=a.TEXTURE_3D);const xe=Y(P,T),ue=T.source;r.bindTexture(de,P.__webglTexture,a.TEXTURE0+j);const Ge=i.get(ue);if(ue.version!==Ge.__version||xe===!0){r.activeTexture(a.TEXTURE0+j);const we=yt.getPrimaries(yt.workingColorSpace),De=T.colorSpace===fi?null:yt.getPrimaries(T.colorSpace),ot=T.colorSpace===fi||we===De?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let Me=A(T.image,!1,o.maxTextureSize);Me=Et(T,Me);const Fe=u.convert(T.format,T.colorSpace),et=u.convert(T.type);let Qe=D(T.internalFormat,Fe,et,T.colorSpace,T.isVideoTexture);N(de,T);let ze;const ut=T.mipmaps,rt=T.isVideoTexture!==!0,vt=Ge.__version===void 0||xe===!0,H=ue.dataReady,Ne=U(T,Me);if(T.isDepthTexture)Qe=b(T.format===Ha,T.type),vt&&(rt?r.texStorage2D(a.TEXTURE_2D,1,Qe,Me.width,Me.height):r.texImage2D(a.TEXTURE_2D,0,Qe,Me.width,Me.height,0,Fe,et,null));else if(T.isDataTexture)if(ut.length>0){rt&&vt&&r.texStorage2D(a.TEXTURE_2D,Ne,Qe,ut[0].width,ut[0].height);for(let ie=0,he=ut.length;ie<he;ie++)ze=ut[ie],rt?H&&r.texSubImage2D(a.TEXTURE_2D,ie,0,0,ze.width,ze.height,Fe,et,ze.data):r.texImage2D(a.TEXTURE_2D,ie,Qe,ze.width,ze.height,0,Fe,et,ze.data);T.generateMipmaps=!1}else rt?(vt&&r.texStorage2D(a.TEXTURE_2D,Ne,Qe,Me.width,Me.height),H&&r.texSubImage2D(a.TEXTURE_2D,0,0,0,Me.width,Me.height,Fe,et,Me.data)):r.texImage2D(a.TEXTURE_2D,0,Qe,Me.width,Me.height,0,Fe,et,Me.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){rt&&vt&&r.texStorage3D(a.TEXTURE_2D_ARRAY,Ne,Qe,ut[0].width,ut[0].height,Me.depth);for(let ie=0,he=ut.length;ie<he;ie++)if(ze=ut[ie],T.format!==rn)if(Fe!==null)if(rt){if(H)if(T.layerUpdates.size>0){const Ae=Pm(ze.width,ze.height,T.format,T.type);for(const Re of T.layerUpdates){const St=ze.data.subarray(Re*Ae/ze.data.BYTES_PER_ELEMENT,(Re+1)*Ae/ze.data.BYTES_PER_ELEMENT);r.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ie,0,0,Re,ze.width,ze.height,1,Fe,St,0,0)}T.clearLayerUpdates()}else r.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ie,0,0,0,ze.width,ze.height,Me.depth,Fe,ze.data,0,0)}else r.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ie,Qe,ze.width,ze.height,Me.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?H&&r.texSubImage3D(a.TEXTURE_2D_ARRAY,ie,0,0,0,ze.width,ze.height,Me.depth,Fe,et,ze.data):r.texImage3D(a.TEXTURE_2D_ARRAY,ie,Qe,ze.width,ze.height,Me.depth,0,Fe,et,ze.data)}else{rt&&vt&&r.texStorage2D(a.TEXTURE_2D,Ne,Qe,ut[0].width,ut[0].height);for(let ie=0,he=ut.length;ie<he;ie++)ze=ut[ie],T.format!==rn?Fe!==null?rt?H&&r.compressedTexSubImage2D(a.TEXTURE_2D,ie,0,0,ze.width,ze.height,Fe,ze.data):r.compressedTexImage2D(a.TEXTURE_2D,ie,Qe,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?H&&r.texSubImage2D(a.TEXTURE_2D,ie,0,0,ze.width,ze.height,Fe,et,ze.data):r.texImage2D(a.TEXTURE_2D,ie,Qe,ze.width,ze.height,0,Fe,et,ze.data)}else if(T.isDataArrayTexture)if(rt){if(vt&&r.texStorage3D(a.TEXTURE_2D_ARRAY,Ne,Qe,Me.width,Me.height,Me.depth),H)if(T.layerUpdates.size>0){const ie=Pm(Me.width,Me.height,T.format,T.type);for(const he of T.layerUpdates){const Ae=Me.data.subarray(he*ie/Me.data.BYTES_PER_ELEMENT,(he+1)*ie/Me.data.BYTES_PER_ELEMENT);r.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,he,Me.width,Me.height,1,Fe,et,Ae)}T.clearLayerUpdates()}else r.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Fe,et,Me.data)}else r.texImage3D(a.TEXTURE_2D_ARRAY,0,Qe,Me.width,Me.height,Me.depth,0,Fe,et,Me.data);else if(T.isData3DTexture)rt?(vt&&r.texStorage3D(a.TEXTURE_3D,Ne,Qe,Me.width,Me.height,Me.depth),H&&r.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Fe,et,Me.data)):r.texImage3D(a.TEXTURE_3D,0,Qe,Me.width,Me.height,Me.depth,0,Fe,et,Me.data);else if(T.isFramebufferTexture){if(vt)if(rt)r.texStorage2D(a.TEXTURE_2D,Ne,Qe,Me.width,Me.height);else{let ie=Me.width,he=Me.height;for(let Ae=0;Ae<Ne;Ae++)r.texImage2D(a.TEXTURE_2D,Ae,Qe,ie,he,0,Fe,et,null),ie>>=1,he>>=1}}else if(ut.length>0){if(rt&&vt){const ie=$e(ut[0]);r.texStorage2D(a.TEXTURE_2D,Ne,Qe,ie.width,ie.height)}for(let ie=0,he=ut.length;ie<he;ie++)ze=ut[ie],rt?H&&r.texSubImage2D(a.TEXTURE_2D,ie,0,0,Fe,et,ze):r.texImage2D(a.TEXTURE_2D,ie,Qe,Fe,et,ze);T.generateMipmaps=!1}else if(rt){if(vt){const ie=$e(Me);r.texStorage2D(a.TEXTURE_2D,Ne,Qe,ie.width,ie.height)}H&&r.texSubImage2D(a.TEXTURE_2D,0,0,0,Fe,et,Me)}else r.texImage2D(a.TEXTURE_2D,0,Qe,Fe,et,Me);g(T)&&_(de),Ge.__version=ue.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function K(P,T,j){if(T.image.length!==6)return;const de=Y(P,T),xe=T.source;r.bindTexture(a.TEXTURE_CUBE_MAP,P.__webglTexture,a.TEXTURE0+j);const ue=i.get(xe);if(xe.version!==ue.__version||de===!0){r.activeTexture(a.TEXTURE0+j);const Ge=yt.getPrimaries(yt.workingColorSpace),we=T.colorSpace===fi?null:yt.getPrimaries(T.colorSpace),De=T.colorSpace===fi||Ge===we?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const ot=T.isCompressedTexture||T.image[0].isCompressedTexture,Me=T.image[0]&&T.image[0].isDataTexture,Fe=[];for(let he=0;he<6;he++)!ot&&!Me?Fe[he]=A(T.image[he],!0,o.maxCubemapSize):Fe[he]=Me?T.image[he].image:T.image[he],Fe[he]=Et(T,Fe[he]);const et=Fe[0],Qe=u.convert(T.format,T.colorSpace),ze=u.convert(T.type),ut=D(T.internalFormat,Qe,ze,T.colorSpace),rt=T.isVideoTexture!==!0,vt=ue.__version===void 0||de===!0,H=xe.dataReady;let Ne=U(T,et);N(a.TEXTURE_CUBE_MAP,T);let ie;if(ot){rt&&vt&&r.texStorage2D(a.TEXTURE_CUBE_MAP,Ne,ut,et.width,et.height);for(let he=0;he<6;he++){ie=Fe[he].mipmaps;for(let Ae=0;Ae<ie.length;Ae++){const Re=ie[Ae];T.format!==rn?Qe!==null?rt?H&&r.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae,0,0,Re.width,Re.height,Qe,Re.data):r.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae,ut,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?H&&r.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae,0,0,Re.width,Re.height,Qe,ze,Re.data):r.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae,ut,Re.width,Re.height,0,Qe,ze,Re.data)}}}else{if(ie=T.mipmaps,rt&&vt){ie.length>0&&Ne++;const he=$e(Fe[0]);r.texStorage2D(a.TEXTURE_CUBE_MAP,Ne,ut,he.width,he.height)}for(let he=0;he<6;he++)if(Me){rt?H&&r.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Fe[he].width,Fe[he].height,Qe,ze,Fe[he].data):r.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ut,Fe[he].width,Fe[he].height,0,Qe,ze,Fe[he].data);for(let Ae=0;Ae<ie.length;Ae++){const Re=ie[Ae].image[he].image;rt?H&&r.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae+1,0,0,Re.width,Re.height,Qe,ze,Re.data):r.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae+1,ut,Re.width,Re.height,0,Qe,ze,Re.data)}}else{rt?H&&r.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Qe,ze,Fe[he]):r.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ut,Qe,ze,Fe[he]);for(let Ae=0;Ae<ie.length;Ae++){const Re=ie[Ae];rt?H&&r.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae+1,0,0,Qe,ze,Re.image[he]):r.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae+1,ut,Qe,ze,Re.image[he])}}}g(T)&&_(a.TEXTURE_CUBE_MAP),ue.__version=xe.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function le(P,T,j,de,xe,ue){const Ge=u.convert(j.format,j.colorSpace),we=u.convert(j.type),De=D(j.internalFormat,Ge,we,j.colorSpace);if(!i.get(T).__hasExternalTextures){const ot=Math.max(1,T.width>>ue),Me=Math.max(1,T.height>>ue);xe===a.TEXTURE_3D||xe===a.TEXTURE_2D_ARRAY?r.texImage3D(xe,ue,De,ot,Me,T.depth,0,Ge,we,null):r.texImage2D(xe,ue,De,ot,Me,0,Ge,we,null)}r.bindFramebuffer(a.FRAMEBUFFER,P),ct(T)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,de,xe,i.get(j).__webglTexture,0,st(T)):(xe===a.TEXTURE_2D||xe>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,de,xe,i.get(j).__webglTexture,ue),r.bindFramebuffer(a.FRAMEBUFFER,null)}function ge(P,T,j){if(a.bindRenderbuffer(a.RENDERBUFFER,P),T.depthBuffer){const de=T.depthTexture,xe=de&&de.isDepthTexture?de.type:null,ue=b(T.stencilBuffer,xe),Ge=T.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,we=st(T);ct(T)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,we,ue,T.width,T.height):j?a.renderbufferStorageMultisample(a.RENDERBUFFER,we,ue,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,ue,T.width,T.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ge,a.RENDERBUFFER,P)}else{const de=T.textures;for(let xe=0;xe<de.length;xe++){const ue=de[xe],Ge=u.convert(ue.format,ue.colorSpace),we=u.convert(ue.type),De=D(ue.internalFormat,Ge,we,ue.colorSpace),ot=st(T);j&&ct(T)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,ot,De,T.width,T.height):ct(T)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ot,De,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,De,T.width,T.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Se(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(r.bindFramebuffer(a.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ae(T.depthTexture,0);const j=i.get(T.depthTexture).__webglTexture,de=st(T);if(T.depthTexture.format===Ia)ct(T)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,j,0,de):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,j,0);else if(T.depthTexture.format===Ha)ct(T)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,j,0,de):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Pe(P){const T=i.get(P),j=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const de=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),de){const xe=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,de.removeEventListener("dispose",xe)};de.addEventListener("dispose",xe),T.__depthDisposeCallback=xe}T.__boundDepthTexture=de}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");Se(T.__webglFramebuffer,P)}else if(j){T.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(r.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer[de]),T.__webglDepthbuffer[de]===void 0)T.__webglDepthbuffer[de]=a.createRenderbuffer(),ge(T.__webglDepthbuffer[de],P,!1);else{const xe=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ue=T.__webglDepthbuffer[de];a.bindRenderbuffer(a.RENDERBUFFER,ue),a.framebufferRenderbuffer(a.FRAMEBUFFER,xe,a.RENDERBUFFER,ue)}}else if(r.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=a.createRenderbuffer(),ge(T.__webglDepthbuffer,P,!1);else{const de=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,xe=T.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,xe),a.framebufferRenderbuffer(a.FRAMEBUFFER,de,a.RENDERBUFFER,xe)}r.bindFramebuffer(a.FRAMEBUFFER,null)}function Le(P,T,j){const de=i.get(P);T!==void 0&&le(de.__webglFramebuffer,P,P.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),j!==void 0&&Pe(P)}function Je(P){const T=P.texture,j=i.get(P),de=i.get(T);P.addEventListener("dispose",B);const xe=P.textures,ue=P.isWebGLCubeRenderTarget===!0,Ge=xe.length>1;if(Ge||(de.__webglTexture===void 0&&(de.__webglTexture=a.createTexture()),de.__version=T.version,h.memory.textures++),ue){j.__webglFramebuffer=[];for(let we=0;we<6;we++)if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer[we]=[];for(let De=0;De<T.mipmaps.length;De++)j.__webglFramebuffer[we][De]=a.createFramebuffer()}else j.__webglFramebuffer[we]=a.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer=[];for(let we=0;we<T.mipmaps.length;we++)j.__webglFramebuffer[we]=a.createFramebuffer()}else j.__webglFramebuffer=a.createFramebuffer();if(Ge)for(let we=0,De=xe.length;we<De;we++){const ot=i.get(xe[we]);ot.__webglTexture===void 0&&(ot.__webglTexture=a.createTexture(),h.memory.textures++)}if(P.samples>0&&ct(P)===!1){j.__webglMultisampledFramebuffer=a.createFramebuffer(),j.__webglColorRenderbuffer=[],r.bindFramebuffer(a.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let we=0;we<xe.length;we++){const De=xe[we];j.__webglColorRenderbuffer[we]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,j.__webglColorRenderbuffer[we]);const ot=u.convert(De.format,De.colorSpace),Me=u.convert(De.type),Fe=D(De.internalFormat,ot,Me,De.colorSpace,P.isXRRenderTarget===!0),et=st(P);a.renderbufferStorageMultisample(a.RENDERBUFFER,et,Fe,P.width,P.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.RENDERBUFFER,j.__webglColorRenderbuffer[we])}a.bindRenderbuffer(a.RENDERBUFFER,null),P.depthBuffer&&(j.__webglDepthRenderbuffer=a.createRenderbuffer(),ge(j.__webglDepthRenderbuffer,P,!0)),r.bindFramebuffer(a.FRAMEBUFFER,null)}}if(ue){r.bindTexture(a.TEXTURE_CUBE_MAP,de.__webglTexture),N(a.TEXTURE_CUBE_MAP,T);for(let we=0;we<6;we++)if(T.mipmaps&&T.mipmaps.length>0)for(let De=0;De<T.mipmaps.length;De++)le(j.__webglFramebuffer[we][De],P,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+we,De);else le(j.__webglFramebuffer[we],P,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);g(T)&&_(a.TEXTURE_CUBE_MAP),r.unbindTexture()}else if(Ge){for(let we=0,De=xe.length;we<De;we++){const ot=xe[we],Me=i.get(ot);r.bindTexture(a.TEXTURE_2D,Me.__webglTexture),N(a.TEXTURE_2D,ot),le(j.__webglFramebuffer,P,ot,a.COLOR_ATTACHMENT0+we,a.TEXTURE_2D,0),g(ot)&&_(a.TEXTURE_2D)}r.unbindTexture()}else{let we=a.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(we=P.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),r.bindTexture(we,de.__webglTexture),N(we,T),T.mipmaps&&T.mipmaps.length>0)for(let De=0;De<T.mipmaps.length;De++)le(j.__webglFramebuffer[De],P,T,a.COLOR_ATTACHMENT0,we,De);else le(j.__webglFramebuffer,P,T,a.COLOR_ATTACHMENT0,we,0);g(T)&&_(we),r.unbindTexture()}P.depthBuffer&&Pe(P)}function ft(P){const T=P.textures;for(let j=0,de=T.length;j<de;j++){const xe=T[j];if(g(xe)){const ue=P.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,Ge=i.get(xe).__webglTexture;r.bindTexture(ue,Ge),_(ue),r.unbindTexture()}}}const lt=[],F=[];function Jt(P){if(P.samples>0){if(ct(P)===!1){const T=P.textures,j=P.width,de=P.height;let xe=a.COLOR_BUFFER_BIT;const ue=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ge=i.get(P),we=T.length>1;if(we)for(let De=0;De<T.length;De++)r.bindFramebuffer(a.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+De,a.RENDERBUFFER,null),r.bindFramebuffer(a.FRAMEBUFFER,Ge.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+De,a.TEXTURE_2D,null,0);r.bindFramebuffer(a.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),r.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let De=0;De<T.length;De++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(xe|=a.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(xe|=a.STENCIL_BUFFER_BIT)),we){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Ge.__webglColorRenderbuffer[De]);const ot=i.get(T[De]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,ot,0)}a.blitFramebuffer(0,0,j,de,0,0,j,de,xe,a.NEAREST),f===!0&&(lt.length=0,F.length=0,lt.push(a.COLOR_ATTACHMENT0+De),P.depthBuffer&&P.resolveDepthBuffer===!1&&(lt.push(ue),F.push(ue),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,F)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,lt))}if(r.bindFramebuffer(a.READ_FRAMEBUFFER,null),r.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),we)for(let De=0;De<T.length;De++){r.bindFramebuffer(a.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+De,a.RENDERBUFFER,Ge.__webglColorRenderbuffer[De]);const ot=i.get(T[De]).__webglTexture;r.bindFramebuffer(a.FRAMEBUFFER,Ge.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+De,a.TEXTURE_2D,ot,0)}r.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&f){const T=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[T])}}}function st(P){return Math.min(o.maxSamples,P.samples)}function ct(P){const T=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ze(P){const T=h.render.frame;v.get(P)!==T&&(v.set(P,T),P.update())}function Et(P,T){const j=P.colorSpace,de=P.format,xe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||j!==vi&&j!==fi&&(yt.getTransfer(j)===Nt?(de!==rn||xe!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),T}function $e(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(m.width=P.naturalWidth||P.width,m.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(m.width=P.displayWidth,m.height=P.displayHeight):(m.width=P.width,m.height=P.height),m}this.allocateTextureUnit=re,this.resetTextureUnits=C,this.setTexture2D=ae,this.setTexture2DArray=pe,this.setTexture3D=ee,this.setTextureCube=ce,this.rebindTextures=Le,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=le,this.useMultisampledRTT=ct}function oE(a,e){function r(i,o=fi){let u;const h=yt.getTransfer(o);if(i===In)return a.UNSIGNED_BYTE;if(i===qd)return a.UNSIGNED_SHORT_4_4_4_4;if(i===Kd)return a.UNSIGNED_SHORT_5_5_5_1;if(i===qm)return a.UNSIGNED_INT_5_9_9_9_REV;if(i===Xm)return a.BYTE;if(i===Ym)return a.SHORT;if(i===Os)return a.UNSIGNED_SHORT;if(i===Yd)return a.INT;if(i===Wi)return a.UNSIGNED_INT;if(i===Ln)return a.FLOAT;if(i===Fs)return a.HALF_FLOAT;if(i===Km)return a.ALPHA;if(i===Zm)return a.RGB;if(i===rn)return a.RGBA;if(i===$m)return a.LUMINANCE;if(i===Qm)return a.LUMINANCE_ALPHA;if(i===Ia)return a.DEPTH_COMPONENT;if(i===Ha)return a.DEPTH_STENCIL;if(i===Jm)return a.RED;if(i===Zd)return a.RED_INTEGER;if(i===eg)return a.RG;if(i===$d)return a.RG_INTEGER;if(i===Qd)return a.RGBA_INTEGER;if(i===Ml||i===El||i===Tl||i===wl)if(h===Nt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(i===Ml)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===El)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Tl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(i===Ml)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===El)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Tl)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wl)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===md||i===gd||i===vd||i===_d)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(i===md)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===gd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_d)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xd||i===yd||i===Sd)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(i===xd||i===yd)return h===Nt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(i===Sd)return h===Nt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Md||i===Ed||i===Td||i===wd||i===Ad||i===Rd||i===Cd||i===bd||i===Pd||i===Ld||i===Nd||i===Ud||i===Dd||i===Id)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(i===Md)return h===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ed)return h===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Td)return h===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wd)return h===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ad)return h===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Rd)return h===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cd)return h===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bd)return h===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pd)return h===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ld)return h===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Nd)return h===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ud)return h===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Dd)return h===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Id)return h===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Al||i===Od||i===Fd)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(i===Al)return h===Nt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Od)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===tg||i===zd||i===kd||i===Bd)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(i===Al)return u.COMPRESSED_RED_RGTC1_EXT;if(i===zd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===kd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ba?a.UNSIGNED_INT_24_8:a[i]!==void 0?a[i]:null}return{convert:r}}class lE extends Jr{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class vl extends pr{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uE={type:"move"};class ed{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const r=this._hand;if(r)for(const i of e.hand.values())this._getHandJoint(r,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,r,i){let o=null,u=null,h=null;const d=this._targetRay,f=this._grip,m=this._hand;if(e&&r.session.visibilityState!=="visible-blurred"){if(m&&e.hand){h=!0;for(const A of e.hand.values()){const g=r.getJointPose(A,i),_=this._getHandJoint(m,A);g!==null&&(_.matrix.fromArray(g.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=g.radius),_.visible=g!==null}const v=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],x=v.position.distanceTo(y.position),S=.02,w=.005;m.inputState.pinching&&x>S+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=S-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(u=r.getPose(e.gripSpace,i),u!==null&&(f.matrix.fromArray(u.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,u.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(u.linearVelocity)):f.hasLinearVelocity=!1,u.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(u.angularVelocity)):f.hasAngularVelocity=!1));d!==null&&(o=r.getPose(e.targetRaySpace,i),o===null&&u!==null&&(o=u),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(uE)))}return d!==null&&(d.visible=o!==null),f!==null&&(f.visible=u!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(e,r){if(e.joints[r.jointName]===void 0){const i=new vl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[r.jointName]=i,e.add(i)}return e.joints[r.jointName]}}const cE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dE=`
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

}`;class hE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,r,i){if(this.texture===null){const o=new wr,u=e.properties.get(o);u.__webglTexture=r.texture,(r.depthNear!=i.depthNear||r.depthFar!=i.depthFar)&&(this.depthNear=r.depthNear,this.depthFar=r.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const r=e.cameras[0].viewport,i=new Fn({vertexShader:cE,fragmentShader:dE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new Un(new Bl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fE extends Ga{constructor(e,r){super();const i=this;let o=null,u=1,h=null,d="local-floor",f=1,m=null,v=null,y=null,x=null,S=null,w=null;const A=new hE,g=r.getContextAttributes();let _=null,D=null;const b=[],U=[],te=new Tt;let B=null;const I=new Jr;I.layers.enable(1),I.viewport=new Bt;const q=new Jr;q.layers.enable(2),q.viewport=new Bt;const _e=[I,q],E=new lE;E.layers.enable(1),E.layers.enable(2);let C=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let le=b[K];return le===void 0&&(le=new ed,b[K]=le),le.getTargetRaySpace()},this.getControllerGrip=function(K){let le=b[K];return le===void 0&&(le=new ed,b[K]=le),le.getGripSpace()},this.getHand=function(K){let le=b[K];return le===void 0&&(le=new ed,b[K]=le),le.getHandSpace()};function ne(K){const le=U.indexOf(K.inputSource);if(le===-1)return;const ge=b[le];ge!==void 0&&(ge.update(K.inputSource,K.frame,m||h),ge.dispatchEvent({type:K.type,data:K.inputSource}))}function ae(){o.removeEventListener("select",ne),o.removeEventListener("selectstart",ne),o.removeEventListener("selectend",ne),o.removeEventListener("squeeze",ne),o.removeEventListener("squeezestart",ne),o.removeEventListener("squeezeend",ne),o.removeEventListener("end",ae),o.removeEventListener("inputsourceschange",pe);for(let K=0;K<b.length;K++){const le=U[K];le!==null&&(U[K]=null,b[K].disconnect(le))}C=null,re=null,A.reset(),e.setRenderTarget(_),S=null,x=null,y=null,o=null,D=null,be.stop(),i.isPresenting=!1,e.setPixelRatio(B),e.setSize(te.width,te.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){u=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){d=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(K){m=K},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return y},this.getFrame=function(){return w},this.getSession=function(){return o},this.setSession=async function(K){if(o=K,o!==null){if(_=e.getRenderTarget(),o.addEventListener("select",ne),o.addEventListener("selectstart",ne),o.addEventListener("selectend",ne),o.addEventListener("squeeze",ne),o.addEventListener("squeezestart",ne),o.addEventListener("squeezeend",ne),o.addEventListener("end",ae),o.addEventListener("inputsourceschange",pe),g.xrCompatible!==!0&&await r.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(te),o.renderState.layers===void 0){const le={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(o,r,le),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),D=new ji(S.framebufferWidth,S.framebufferHeight,{format:rn,type:In,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let le=null,ge=null,Se=null;g.depth&&(Se=g.stencil?r.DEPTH24_STENCIL8:r.DEPTH_COMPONENT24,le=g.stencil?Ha:Ia,ge=g.stencil?Ba:Wi);const Pe={colorFormat:r.RGBA8,depthFormat:Se,scaleFactor:u};y=new XRWebGLBinding(o,r),x=y.createProjectionLayer(Pe),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),D=new ji(x.textureWidth,x.textureHeight,{format:rn,type:In,depthTexture:new vg(x.textureWidth,x.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(f),m=null,h=await o.requestReferenceSpace(d),be.setContext(o),be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function pe(K){for(let le=0;le<K.removed.length;le++){const ge=K.removed[le],Se=U.indexOf(ge);Se>=0&&(U[Se]=null,b[Se].disconnect(ge))}for(let le=0;le<K.added.length;le++){const ge=K.added[le];let Se=U.indexOf(ge);if(Se===-1){for(let Le=0;Le<b.length;Le++)if(Le>=U.length){U.push(ge),Se=Le;break}else if(U[Le]===null){U[Le]=ge,Se=Le;break}if(Se===-1)break}const Pe=b[Se];Pe&&Pe.connect(ge)}}const ee=new J,ce=new J;function z(K,le,ge){ee.setFromMatrixPosition(le.matrixWorld),ce.setFromMatrixPosition(ge.matrixWorld);const Se=ee.distanceTo(ce),Pe=le.projectionMatrix.elements,Le=ge.projectionMatrix.elements,Je=Pe[14]/(Pe[10]-1),ft=Pe[14]/(Pe[10]+1),lt=(Pe[9]+1)/Pe[5],F=(Pe[9]-1)/Pe[5],Jt=(Pe[8]-1)/Pe[0],st=(Le[8]+1)/Le[0],ct=Je*Jt,Ze=Je*st,Et=Se/(-Jt+st),$e=Et*-Jt;if(le.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX($e),K.translateZ(Et),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Pe[10]===-1)K.projectionMatrix.copy(le.projectionMatrix),K.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const P=Je+Et,T=ft+Et,j=ct-$e,de=Ze+(Se-$e),xe=lt*ft/T*P,ue=F*ft/T*P;K.projectionMatrix.makePerspective(j,de,xe,ue,P,T),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function oe(K,le){le===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(le.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(o===null)return;let le=K.near,ge=K.far;A.texture!==null&&(A.depthNear>0&&(le=A.depthNear),A.depthFar>0&&(ge=A.depthFar)),E.near=q.near=I.near=le,E.far=q.far=I.far=ge,(C!==E.near||re!==E.far)&&(o.updateRenderState({depthNear:E.near,depthFar:E.far}),C=E.near,re=E.far);const Se=K.parent,Pe=E.cameras;oe(E,Se);for(let Le=0;Le<Pe.length;Le++)oe(Pe[Le],Se);Pe.length===2?z(E,I,q):E.projectionMatrix.copy(I.projectionMatrix),se(K,E,Se)};function se(K,le,ge){ge===null?K.matrix.copy(le.matrixWorld):(K.matrix.copy(ge.matrixWorld),K.matrix.invert(),K.matrix.multiply(le.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(le.projectionMatrix),K.projectionMatrixInverse.copy(le.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Hd*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(x===null&&S===null))return f},this.setFoveation=function(K){f=K,x!==null&&(x.fixedFoveation=K),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=K)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(E)};let N=null;function Y(K,le){if(v=le.getViewerPose(m||h),w=le,v!==null){const ge=v.views;S!==null&&(e.setRenderTargetFramebuffer(D,S.framebuffer),e.setRenderTarget(D));let Se=!1;ge.length!==E.cameras.length&&(E.cameras.length=0,Se=!0);for(let Le=0;Le<ge.length;Le++){const Je=ge[Le];let ft=null;if(S!==null)ft=S.getViewport(Je);else{const F=y.getViewSubImage(x,Je);ft=F.viewport,Le===0&&(e.setRenderTargetTextures(D,F.colorTexture,x.ignoreDepthValues?void 0:F.depthStencilTexture),e.setRenderTarget(D))}let lt=_e[Le];lt===void 0&&(lt=new Jr,lt.layers.enable(Le),lt.viewport=new Bt,_e[Le]=lt),lt.matrix.fromArray(Je.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(Je.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(ft.x,ft.y,ft.width,ft.height),Le===0&&(E.matrix.copy(lt.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Se===!0&&E.cameras.push(lt)}const Pe=o.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const Le=y.getDepthInformation(ge[0]);Le&&Le.isValid&&Le.texture&&A.init(e,Le,o.renderState)}}for(let ge=0;ge<b.length;ge++){const Se=U[ge],Pe=b[ge];Se!==null&&Pe!==void 0&&Pe.update(Se,le,m||h)}N&&N(K,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),w=null}const be=new mg;be.setAnimationLoop(Y),this.setAnimationLoop=function(K){N=K},this.dispose=function(){}}}const Oi=new On,pE=new zt;function mE(a,e){function r(g,_){g.matrixAutoUpdate===!0&&g.updateMatrix(),_.value.copy(g.matrix)}function i(g,_){_.color.getRGB(g.fogColor.value,dg(a)),_.isFog?(g.fogNear.value=_.near,g.fogFar.value=_.far):_.isFogExp2&&(g.fogDensity.value=_.density)}function o(g,_,D,b,U){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(g,_):_.isMeshToonMaterial?(u(g,_),y(g,_)):_.isMeshPhongMaterial?(u(g,_),v(g,_)):_.isMeshStandardMaterial?(u(g,_),x(g,_),_.isMeshPhysicalMaterial&&S(g,_,U)):_.isMeshMatcapMaterial?(u(g,_),w(g,_)):_.isMeshDepthMaterial?u(g,_):_.isMeshDistanceMaterial?(u(g,_),A(g,_)):_.isMeshNormalMaterial?u(g,_):_.isLineBasicMaterial?(h(g,_),_.isLineDashedMaterial&&d(g,_)):_.isPointsMaterial?f(g,_,D,b):_.isSpriteMaterial?m(g,_):_.isShadowMaterial?(g.color.value.copy(_.color),g.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(g,_){g.opacity.value=_.opacity,_.color&&g.diffuse.value.copy(_.color),_.emissive&&g.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(g.map.value=_.map,r(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,r(_.alphaMap,g.alphaMapTransform)),_.bumpMap&&(g.bumpMap.value=_.bumpMap,r(_.bumpMap,g.bumpMapTransform),g.bumpScale.value=_.bumpScale,_.side===Tr&&(g.bumpScale.value*=-1)),_.normalMap&&(g.normalMap.value=_.normalMap,r(_.normalMap,g.normalMapTransform),g.normalScale.value.copy(_.normalScale),_.side===Tr&&g.normalScale.value.negate()),_.displacementMap&&(g.displacementMap.value=_.displacementMap,r(_.displacementMap,g.displacementMapTransform),g.displacementScale.value=_.displacementScale,g.displacementBias.value=_.displacementBias),_.emissiveMap&&(g.emissiveMap.value=_.emissiveMap,r(_.emissiveMap,g.emissiveMapTransform)),_.specularMap&&(g.specularMap.value=_.specularMap,r(_.specularMap,g.specularMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest);const D=e.get(_),b=D.envMap,U=D.envMapRotation;b&&(g.envMap.value=b,Oi.copy(U),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),g.envMapRotation.value.setFromMatrix4(pE.makeRotationFromEuler(Oi)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=_.reflectivity,g.ior.value=_.ior,g.refractionRatio.value=_.refractionRatio),_.lightMap&&(g.lightMap.value=_.lightMap,g.lightMapIntensity.value=_.lightMapIntensity,r(_.lightMap,g.lightMapTransform)),_.aoMap&&(g.aoMap.value=_.aoMap,g.aoMapIntensity.value=_.aoMapIntensity,r(_.aoMap,g.aoMapTransform))}function h(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,_.map&&(g.map.value=_.map,r(_.map,g.mapTransform))}function d(g,_){g.dashSize.value=_.dashSize,g.totalSize.value=_.dashSize+_.gapSize,g.scale.value=_.scale}function f(g,_,D,b){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.size.value=_.size*D,g.scale.value=b*.5,_.map&&(g.map.value=_.map,r(_.map,g.uvTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,r(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function m(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.rotation.value=_.rotation,_.map&&(g.map.value=_.map,r(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,r(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function v(g,_){g.specular.value.copy(_.specular),g.shininess.value=Math.max(_.shininess,1e-4)}function y(g,_){_.gradientMap&&(g.gradientMap.value=_.gradientMap)}function x(g,_){g.metalness.value=_.metalness,_.metalnessMap&&(g.metalnessMap.value=_.metalnessMap,r(_.metalnessMap,g.metalnessMapTransform)),g.roughness.value=_.roughness,_.roughnessMap&&(g.roughnessMap.value=_.roughnessMap,r(_.roughnessMap,g.roughnessMapTransform)),_.envMap&&(g.envMapIntensity.value=_.envMapIntensity)}function S(g,_,D){g.ior.value=_.ior,_.sheen>0&&(g.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),g.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(g.sheenColorMap.value=_.sheenColorMap,r(_.sheenColorMap,g.sheenColorMapTransform)),_.sheenRoughnessMap&&(g.sheenRoughnessMap.value=_.sheenRoughnessMap,r(_.sheenRoughnessMap,g.sheenRoughnessMapTransform))),_.clearcoat>0&&(g.clearcoat.value=_.clearcoat,g.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(g.clearcoatMap.value=_.clearcoatMap,r(_.clearcoatMap,g.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,r(_.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(g.clearcoatNormalMap.value=_.clearcoatNormalMap,r(_.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Tr&&g.clearcoatNormalScale.value.negate())),_.dispersion>0&&(g.dispersion.value=_.dispersion),_.iridescence>0&&(g.iridescence.value=_.iridescence,g.iridescenceIOR.value=_.iridescenceIOR,g.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(g.iridescenceMap.value=_.iridescenceMap,r(_.iridescenceMap,g.iridescenceMapTransform)),_.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=_.iridescenceThicknessMap,r(_.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),_.transmission>0&&(g.transmission.value=_.transmission,g.transmissionSamplerMap.value=D.texture,g.transmissionSamplerSize.value.set(D.width,D.height),_.transmissionMap&&(g.transmissionMap.value=_.transmissionMap,r(_.transmissionMap,g.transmissionMapTransform)),g.thickness.value=_.thickness,_.thicknessMap&&(g.thicknessMap.value=_.thicknessMap,r(_.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=_.attenuationDistance,g.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(g.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(g.anisotropyMap.value=_.anisotropyMap,r(_.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=_.specularIntensity,g.specularColor.value.copy(_.specularColor),_.specularColorMap&&(g.specularColorMap.value=_.specularColorMap,r(_.specularColorMap,g.specularColorMapTransform)),_.specularIntensityMap&&(g.specularIntensityMap.value=_.specularIntensityMap,r(_.specularIntensityMap,g.specularIntensityMapTransform))}function w(g,_){_.matcap&&(g.matcap.value=_.matcap)}function A(g,_){const D=e.get(_).light;g.referencePosition.value.setFromMatrixPosition(D.matrixWorld),g.nearDistance.value=D.shadow.camera.near,g.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function gE(a,e,r,i){let o={},u={},h=[];const d=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function f(D,b){const U=b.program;i.uniformBlockBinding(D,U)}function m(D,b){let U=o[D.id];U===void 0&&(w(D),U=v(D),o[D.id]=U,D.addEventListener("dispose",g));const te=b.program;i.updateUBOMapping(D,te);const B=e.render.frame;u[D.id]!==B&&(x(D),u[D.id]=B)}function v(D){const b=y();D.__bindingPointIndex=b;const U=a.createBuffer(),te=D.__size,B=D.usage;return a.bindBuffer(a.UNIFORM_BUFFER,U),a.bufferData(a.UNIFORM_BUFFER,te,B),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,b,U),U}function y(){for(let D=0;D<d;D++)if(h.indexOf(D)===-1)return h.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(D){const b=o[D.id],U=D.uniforms,te=D.__cache;a.bindBuffer(a.UNIFORM_BUFFER,b);for(let B=0,I=U.length;B<I;B++){const q=Array.isArray(U[B])?U[B]:[U[B]];for(let _e=0,E=q.length;_e<E;_e++){const C=q[_e];if(S(C,B,_e,te)===!0){const re=C.__offset,ne=Array.isArray(C.value)?C.value:[C.value];let ae=0;for(let pe=0;pe<ne.length;pe++){const ee=ne[pe],ce=A(ee);typeof ee=="number"||typeof ee=="boolean"?(C.__data[0]=ee,a.bufferSubData(a.UNIFORM_BUFFER,re+ae,C.__data)):ee.isMatrix3?(C.__data[0]=ee.elements[0],C.__data[1]=ee.elements[1],C.__data[2]=ee.elements[2],C.__data[3]=0,C.__data[4]=ee.elements[3],C.__data[5]=ee.elements[4],C.__data[6]=ee.elements[5],C.__data[7]=0,C.__data[8]=ee.elements[6],C.__data[9]=ee.elements[7],C.__data[10]=ee.elements[8],C.__data[11]=0):(ee.toArray(C.__data,ae),ae+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,re,C.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function S(D,b,U,te){const B=D.value,I=b+"_"+U;if(te[I]===void 0)return typeof B=="number"||typeof B=="boolean"?te[I]=B:te[I]=B.clone(),!0;{const q=te[I];if(typeof B=="number"||typeof B=="boolean"){if(q!==B)return te[I]=B,!0}else if(q.equals(B)===!1)return q.copy(B),!0}return!1}function w(D){const b=D.uniforms;let U=0;const te=16;for(let I=0,q=b.length;I<q;I++){const _e=Array.isArray(b[I])?b[I]:[b[I]];for(let E=0,C=_e.length;E<C;E++){const re=_e[E],ne=Array.isArray(re.value)?re.value:[re.value];for(let ae=0,pe=ne.length;ae<pe;ae++){const ee=ne[ae],ce=A(ee),z=U%te,oe=z%ce.boundary,se=z+oe;U+=oe,se!==0&&te-se<ce.storage&&(U+=te-se),re.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=U,U+=ce.storage}}}const B=U%te;return B>0&&(U+=te-B),D.__size=U,D.__cache={},this}function A(D){const b={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(b.boundary=4,b.storage=4):D.isVector2?(b.boundary=8,b.storage=8):D.isVector3||D.isColor?(b.boundary=16,b.storage=12):D.isVector4?(b.boundary=16,b.storage=16):D.isMatrix3?(b.boundary=48,b.storage=48):D.isMatrix4?(b.boundary=64,b.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),b}function g(D){const b=D.target;b.removeEventListener("dispose",g);const U=h.indexOf(b.__bindingPointIndex);h.splice(U,1),a.deleteBuffer(o[b.id]),delete o[b.id],delete u[b.id]}function _(){for(const D in o)a.deleteBuffer(o[D]);h=[],o={},u={}}return{bind:f,update:m,dispose:_}}class vE{constructor(e={}){const{canvas:r=i0(),context:i=null,depth:o=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:y=!1}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=h;const S=new Uint32Array(4),w=new Int32Array(4);let A=null,g=null;const _=[],D=[];this.domElement=r,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=cn,this.toneMapping=mi,this.toneMappingExposure=1;const b=this;let U=!1,te=0,B=0,I=null,q=-1,_e=null;const E=new Bt,C=new Bt;let re=null;const ne=new gt(0);let ae=0,pe=r.width,ee=r.height,ce=1,z=null,oe=null;const se=new Bt(0,0,pe,ee),N=new Bt(0,0,pe,ee);let Y=!1;const be=new pg;let K=!1,le=!1;const ge=new zt,Se=new zt,Pe=new J,Le=new Bt,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function lt(){return I===null?ce:1}let F=i;function Jt(R,G){return r.getContext(R,G)}try{const R={alpha:!0,depth:o,stencil:u,antialias:d,premultipliedAlpha:f,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:y};if("setAttribute"in r&&r.setAttribute("data-engine",`three.js r${Xd}`),r.addEventListener("webglcontextlost",he,!1),r.addEventListener("webglcontextrestored",Ae,!1),r.addEventListener("webglcontextcreationerror",Re,!1),F===null){const G="webgl2";if(F=Jt(G,R),F===null)throw Jt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let st,ct,Ze,Et,$e,P,T,j,de,xe,ue,Ge,we,De,ot,Me,Fe,et,Qe,ze,ut,rt,vt,H;function Ne(){st=new MS(F),st.init(),rt=new oE(F,st),ct=new gS(F,st,e,rt),Ze=new iE(F),ct.reverseDepthBuffer&&Ze.buffers.depth.setReversed(!0),Et=new wS(F),$e=new GM,P=new sE(F,st,Ze,$e,ct,rt,Et),T=new _S(b),j=new SS(b),de=new N0(F),vt=new pS(F,de),xe=new ES(F,de,Et,vt),ue=new RS(F,xe,de,Et),Qe=new AS(F,ct,P),Me=new vS($e),Ge=new VM(b,T,j,st,ct,vt,Me),we=new mE(b,$e),De=new jM,ot=new $M(st),et=new fS(b,T,j,Ze,ue,x,f),Fe=new rE(b,ue,ct),H=new gE(F,Et,ct,Ze),ze=new mS(F,st,Et),ut=new TS(F,st,Et),Et.programs=Ge.programs,b.capabilities=ct,b.extensions=st,b.properties=$e,b.renderLists=De,b.shadowMap=Fe,b.state=Ze,b.info=Et}Ne();const ie=new fE(b,F);this.xr=ie,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=st.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=st.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(R){R!==void 0&&(ce=R,this.setSize(pe,ee,!1))},this.getSize=function(R){return R.set(pe,ee)},this.setSize=function(R,G,Z=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}pe=R,ee=G,r.width=Math.floor(R*ce),r.height=Math.floor(G*ce),Z===!0&&(r.style.width=R+"px",r.style.height=G+"px"),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(pe*ce,ee*ce).floor()},this.setDrawingBufferSize=function(R,G,Z){pe=R,ee=G,ce=Z,r.width=Math.floor(R*Z),r.height=Math.floor(G*Z),this.setViewport(0,0,R,G)},this.getCurrentViewport=function(R){return R.copy(E)},this.getViewport=function(R){return R.copy(se)},this.setViewport=function(R,G,Z,$){R.isVector4?se.set(R.x,R.y,R.z,R.w):se.set(R,G,Z,$),Ze.viewport(E.copy(se).multiplyScalar(ce).round())},this.getScissor=function(R){return R.copy(N)},this.setScissor=function(R,G,Z,$){R.isVector4?N.set(R.x,R.y,R.z,R.w):N.set(R,G,Z,$),Ze.scissor(C.copy(N).multiplyScalar(ce).round())},this.getScissorTest=function(){return Y},this.setScissorTest=function(R){Ze.setScissorTest(Y=R)},this.setOpaqueSort=function(R){z=R},this.setTransparentSort=function(R){oe=R},this.getClearColor=function(R){return R.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(R=!0,G=!0,Z=!0){let $=0;if(R){let V=!1;if(I!==null){const ye=I.texture.format;V=ye===Qd||ye===$d||ye===Zd}if(V){const ye=I.texture.type,Ie=ye===In||ye===Wi||ye===Os||ye===Ba||ye===qd||ye===Kd,Te=et.getClearColor(),We=et.getClearAlpha(),qe=Te.r,Ke=Te.g,je=Te.b;Ie?(S[0]=qe,S[1]=Ke,S[2]=je,S[3]=We,F.clearBufferuiv(F.COLOR,0,S)):(w[0]=qe,w[1]=Ke,w[2]=je,w[3]=We,F.clearBufferiv(F.COLOR,0,w))}else $|=F.COLOR_BUFFER_BIT}G&&($|=F.DEPTH_BUFFER_BIT,F.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Z&&($|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){r.removeEventListener("webglcontextlost",he,!1),r.removeEventListener("webglcontextrestored",Ae,!1),r.removeEventListener("webglcontextcreationerror",Re,!1),De.dispose(),ot.dispose(),$e.dispose(),T.dispose(),j.dispose(),ue.dispose(),vt.dispose(),H.dispose(),Ge.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",zn),ie.removeEventListener("sessionend",Xi),Ar.stop()};function he(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const R=Et.autoReset,G=Fe.enabled,Z=Fe.autoUpdate,$=Fe.needsUpdate,V=Fe.type;Ne(),Et.autoReset=R,Fe.enabled=G,Fe.autoUpdate=Z,Fe.needsUpdate=$,Fe.type=V}function Re(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function St(R){const G=R.target;G.removeEventListener("dispose",St),Dt(G)}function Dt(R){er(R),$e.remove(R)}function er(R){const G=$e.get(R).programs;G!==void 0&&(G.forEach(function(Z){Ge.releaseProgram(Z)}),R.isShaderMaterial&&Ge.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,Z,$,V,ye){G===null&&(G=Je);const Ie=V.isMesh&&V.matrixWorld.determinant()<0,Te=fn(R,G,Z,$,V);Ze.setMaterial($,Ie);let We=Z.index,qe=1;if($.wireframe===!0){if(We=xe.getWireframeAttribute(Z),We===void 0)return;qe=2}const Ke=Z.drawRange,je=Z.attributes.position;let _t=Ke.start*qe,wt=(Ke.start+Ke.count)*qe;ye!==null&&(_t=Math.max(_t,ye.start*qe),wt=Math.min(wt,(ye.start+ye.count)*qe)),We!==null?(_t=Math.max(_t,0),wt=Math.min(wt,We.count)):je!=null&&(_t=Math.max(_t,0),wt=Math.min(wt,je.count));const At=wt-_t;if(At<0||At===1/0)return;vt.setup(V,$,Te,Z,We);let xt,Rt=ze;if(We!==null&&(xt=de.get(We),Rt=ut,Rt.setIndex(xt)),V.isMesh)$.wireframe===!0?(Ze.setLineWidth($.wireframeLinewidth*lt()),Rt.setMode(F.LINES)):Rt.setMode(F.TRIANGLES);else if(V.isLine){let Oe=$.linewidth;Oe===void 0&&(Oe=1),Ze.setLineWidth(Oe*lt()),V.isLineSegments?Rt.setMode(F.LINES):V.isLineLoop?Rt.setMode(F.LINE_LOOP):Rt.setMode(F.LINE_STRIP)}else V.isPoints?Rt.setMode(F.POINTS):V.isSprite&&Rt.setMode(F.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Rt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))Rt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Oe=V._multiDrawStarts,tr=V._multiDrawCounts,pn=V._multiDrawCount,Rr=We?de.get(We).bytesPerElement:1,Gr=$e.get($).currentProgram.getUniforms();for(let qt=0;qt<pn;qt++)Gr.setValue(F,"_gl_DrawID",qt),Rt.render(Oe[qt]/Rr,tr[qt])}else if(V.isInstancedMesh)Rt.renderInstances(_t,At,V.count);else if(Z.isInstancedBufferGeometry){const Oe=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,tr=Math.min(Z.instanceCount,Oe);Rt.renderInstances(_t,At,tr)}else Rt.render(_t,At)};function dt(R,G,Z){R.transparent===!0&&R.side===Pn&&R.forceSinglePass===!1?(R.side=Tr,R.needsUpdate=!0,qi(R,G,Z),R.side=gi,R.needsUpdate=!0,qi(R,G,Z),R.side=Pn):qi(R,G,Z)}this.compile=function(R,G,Z=null){Z===null&&(Z=R),g=ot.get(Z),g.init(G),D.push(g),Z.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(g.pushLight(V),V.castShadow&&g.pushShadow(V))}),R!==Z&&R.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(g.pushLight(V),V.castShadow&&g.pushShadow(V))}),g.setupLights();const $=new Set;return R.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ye=V.material;if(ye)if(Array.isArray(ye))for(let Ie=0;Ie<ye.length;Ie++){const Te=ye[Ie];dt(Te,Z,V),$.add(Te)}else dt(ye,Z,V),$.add(ye)}),D.pop(),g=null,$},this.compileAsync=function(R,G,Z=null){const $=this.compile(R,G,Z);return new Promise(V=>{function ye(){if($.forEach(function(Ie){$e.get(Ie).currentProgram.isReady()&&$.delete(Ie)}),$.size===0){V(R);return}setTimeout(ye,10)}st.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Yt=null;function Dr(R){Yt&&Yt(R)}function zn(){Ar.stop()}function Xi(){Ar.start()}const Ar=new mg;Ar.setAnimationLoop(Dr),typeof self<"u"&&Ar.setContext(self),this.setAnimationLoop=function(R){Yt=R,ie.setAnimationLoop(R),R===null?Ar.stop():Ar.start()},ie.addEventListener("sessionstart",zn),ie.addEventListener("sessionend",Xi),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(G),G=ie.getCamera()),R.isScene===!0&&R.onBeforeRender(b,R,G,I),g=ot.get(R,D.length),g.init(G),D.push(g),Se.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),be.setFromProjectionMatrix(Se),le=this.localClippingEnabled,K=Me.init(this.clippingPlanes,le),A=De.get(R,_.length),A.init(),_.push(A),ie.enabled===!0&&ie.isPresenting===!0){const ye=b.xr.getDepthSensingMesh();ye!==null&&Xa(ye,G,-1/0,b.sortObjects)}Xa(R,G,0,b.sortObjects),A.finish(),b.sortObjects===!0&&A.sort(z,oe),ft=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,ft&&et.addToRenderList(A,R),this.info.render.frame++,K===!0&&Me.beginShadows();const Z=g.state.shadowsArray;Fe.render(Z,R,G),K===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=A.opaque,V=A.transmissive;if(g.setupLights(),G.isArrayCamera){const ye=G.cameras;if(V.length>0)for(let Ie=0,Te=ye.length;Ie<Te;Ie++){const We=ye[Ie];_i($,V,R,We)}ft&&et.render(R);for(let Ie=0,Te=ye.length;Ie<Te;Ie++){const We=ye[Ie];kn(A,R,We,We.viewport)}}else V.length>0&&_i($,V,R,G),ft&&et.render(R),kn(A,R,G);I!==null&&(P.updateMultisampleRenderTarget(I),P.updateRenderTargetMipmap(I)),R.isScene===!0&&R.onAfterRender(b,R,G),vt.resetDefaultState(),q=-1,_e=null,D.pop(),D.length>0?(g=D[D.length-1],K===!0&&Me.setGlobalState(b.clippingPlanes,g.state.camera)):g=null,_.pop(),_.length>0?A=_[_.length-1]:A=null};function Xa(R,G,Z,$){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)Z=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||be.intersectsSprite(R)){$&&Le.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Se);const ye=ue.update(R),Ie=R.material;Ie.visible&&A.push(R,ye,Ie,Z,Le.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||be.intersectsObject(R))){const ye=ue.update(R),Ie=R.material;if($&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Le.copy(R.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Le.copy(ye.boundingSphere.center)),Le.applyMatrix4(R.matrixWorld).applyMatrix4(Se)),Array.isArray(Ie)){const Te=ye.groups;for(let We=0,qe=Te.length;We<qe;We++){const Ke=Te[We],je=Ie[Ke.materialIndex];je&&je.visible&&A.push(R,ye,je,Z,Le.z,Ke)}}else Ie.visible&&A.push(R,ye,Ie,Z,Le.z,null)}}const V=R.children;for(let ye=0,Ie=V.length;ye<Ie;ye++)Xa(V[ye],G,Z,$)}function kn(R,G,Z,$){const V=R.opaque,ye=R.transmissive,Ie=R.transparent;g.setupLightsView(Z),K===!0&&Me.setGlobalState(b.clippingPlanes,Z),$&&Ze.viewport(E.copy($)),V.length>0&&hn(V,G,Z),ye.length>0&&hn(ye,G,Z),Ie.length>0&&hn(Ie,G,Z),Ze.buffers.depth.setTest(!0),Ze.buffers.depth.setMask(!0),Ze.buffers.color.setMask(!0),Ze.setPolygonOffset(!1)}function _i(R,G,Z,$){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[$.id]===void 0&&(g.state.transmissionRenderTarget[$.id]=new ji(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?Fs:In,minFilter:Vi,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:yt.workingColorSpace}));const V=g.state.transmissionRenderTarget[$.id],ye=$.viewport||E;V.setSize(ye.z,ye.w);const Ie=b.getRenderTarget();b.setRenderTarget(V),b.getClearColor(ne),ae=b.getClearAlpha(),ae<1&&b.setClearColor(16777215,.5),b.clear(),ft&&et.render(Z);const Te=b.toneMapping;b.toneMapping=mi;const We=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),g.setupLightsView($),K===!0&&Me.setGlobalState(b.clippingPlanes,$),hn(R,Z,$),P.updateMultisampleRenderTarget(V),P.updateRenderTargetMipmap(V),st.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Ke=0,je=G.length;Ke<je;Ke++){const _t=G[Ke],wt=_t.object,At=_t.geometry,xt=_t.material,Rt=_t.group;if(xt.side===Pn&&wt.layers.test($.layers)){const Oe=xt.side;xt.side=Tr,xt.needsUpdate=!0,Yi(wt,Z,$,At,xt,Rt),xt.side=Oe,xt.needsUpdate=!0,qe=!0}}qe===!0&&(P.updateMultisampleRenderTarget(V),P.updateRenderTargetMipmap(V))}b.setRenderTarget(Ie),b.setClearColor(ne,ae),We!==void 0&&($.viewport=We),b.toneMapping=Te}function hn(R,G,Z){const $=G.isScene===!0?G.overrideMaterial:null;for(let V=0,ye=R.length;V<ye;V++){const Ie=R[V],Te=Ie.object,We=Ie.geometry,qe=$===null?Ie.material:$,Ke=Ie.group;Te.layers.test(Z.layers)&&Yi(Te,G,Z,We,qe,Ke)}}function Yi(R,G,Z,$,V,ye){R.onBeforeRender(b,G,Z,$,V,ye),R.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),V.onBeforeRender(b,G,Z,$,R,ye),V.transparent===!0&&V.side===Pn&&V.forceSinglePass===!1?(V.side=Tr,V.needsUpdate=!0,b.renderBufferDirect(Z,G,$,V,R,ye),V.side=gi,V.needsUpdate=!0,b.renderBufferDirect(Z,G,$,V,R,ye),V.side=Pn):b.renderBufferDirect(Z,G,$,V,R,ye),R.onAfterRender(b,G,Z,$,V,ye)}function qi(R,G,Z){G.isScene!==!0&&(G=Je);const $=$e.get(R),V=g.state.lights,ye=g.state.shadowsArray,Ie=V.state.version,Te=Ge.getParameters(R,V.state,ye,G,Z),We=Ge.getProgramCacheKey(Te);let qe=$.programs;$.environment=R.isMeshStandardMaterial?G.environment:null,$.fog=G.fog,$.envMap=(R.isMeshStandardMaterial?j:T).get(R.envMap||$.environment),$.envMapRotation=$.environment!==null&&R.envMap===null?G.environmentRotation:R.envMapRotation,qe===void 0&&(R.addEventListener("dispose",St),qe=new Map,$.programs=qe);let Ke=qe.get(We);if(Ke!==void 0){if($.currentProgram===Ke&&$.lightsStateVersion===Ie)return Ws(R,Te),Ke}else Te.uniforms=Ge.getUniforms(R),R.onBeforeCompile(Te,b),Ke=Ge.acquireProgram(Te,We),qe.set(We,Ke),$.uniforms=Te.uniforms;const je=$.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(je.clippingPlanes=Me.uniform),Ws(R,Te),$.needsLights=Xs(R),$.lightsStateVersion=Ie,$.needsLights&&(je.ambientLightColor.value=V.state.ambient,je.lightProbe.value=V.state.probe,je.directionalLights.value=V.state.directional,je.directionalLightShadows.value=V.state.directionalShadow,je.spotLights.value=V.state.spot,je.spotLightShadows.value=V.state.spotShadow,je.rectAreaLights.value=V.state.rectArea,je.ltc_1.value=V.state.rectAreaLTC1,je.ltc_2.value=V.state.rectAreaLTC2,je.pointLights.value=V.state.point,je.pointLightShadows.value=V.state.pointShadow,je.hemisphereLights.value=V.state.hemi,je.directionalShadowMap.value=V.state.directionalShadowMap,je.directionalShadowMatrix.value=V.state.directionalShadowMatrix,je.spotShadowMap.value=V.state.spotShadowMap,je.spotLightMatrix.value=V.state.spotLightMatrix,je.spotLightMap.value=V.state.spotLightMap,je.pointShadowMap.value=V.state.pointShadowMap,je.pointShadowMatrix.value=V.state.pointShadowMatrix),$.currentProgram=Ke,$.uniformsList=null,Ke}function Gs(R){if(R.uniformsList===null){const G=R.currentProgram.getUniforms();R.uniformsList=Cl.seqWithValue(G.seq,R.uniforms)}return R.uniformsList}function Ws(R,G){const Z=$e.get(R);Z.outputColorSpace=G.outputColorSpace,Z.batching=G.batching,Z.batchingColor=G.batchingColor,Z.instancing=G.instancing,Z.instancingColor=G.instancingColor,Z.instancingMorph=G.instancingMorph,Z.skinning=G.skinning,Z.morphTargets=G.morphTargets,Z.morphNormals=G.morphNormals,Z.morphColors=G.morphColors,Z.morphTargetsCount=G.morphTargetsCount,Z.numClippingPlanes=G.numClippingPlanes,Z.numIntersection=G.numClipIntersection,Z.vertexAlphas=G.vertexAlphas,Z.vertexTangents=G.vertexTangents,Z.toneMapping=G.toneMapping}function fn(R,G,Z,$,V){G.isScene!==!0&&(G=Je),P.resetTextureUnits();const ye=G.fog,Ie=$.isMeshStandardMaterial?G.environment:null,Te=I===null?b.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:vi,We=($.isMeshStandardMaterial?j:T).get($.envMap||Ie),qe=$.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ke=!!Z.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),je=!!Z.morphAttributes.position,_t=!!Z.morphAttributes.normal,wt=!!Z.morphAttributes.color;let At=mi;$.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(At=b.toneMapping);const xt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Rt=xt!==void 0?xt.length:0,Oe=$e.get($),tr=g.state.lights;if(K===!0&&(le===!0||R!==_e)){const ir=R===_e&&$.id===q;Me.setState($,R,ir)}let pn=!1;$.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==tr.state.version||Oe.outputColorSpace!==Te||V.isBatchedMesh&&Oe.batching===!1||!V.isBatchedMesh&&Oe.batching===!0||V.isBatchedMesh&&Oe.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Oe.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Oe.instancing===!1||!V.isInstancedMesh&&Oe.instancing===!0||V.isSkinnedMesh&&Oe.skinning===!1||!V.isSkinnedMesh&&Oe.skinning===!0||V.isInstancedMesh&&Oe.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Oe.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Oe.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Oe.instancingMorph===!1&&V.morphTexture!==null||Oe.envMap!==We||$.fog===!0&&Oe.fog!==ye||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==Me.numPlanes||Oe.numIntersection!==Me.numIntersection)||Oe.vertexAlphas!==qe||Oe.vertexTangents!==Ke||Oe.morphTargets!==je||Oe.morphNormals!==_t||Oe.morphColors!==wt||Oe.toneMapping!==At||Oe.morphTargetsCount!==Rt)&&(pn=!0):(pn=!0,Oe.__version=$.version);let Rr=Oe.currentProgram;pn===!0&&(Rr=qi($,G,V));let Gr=!1,qt=!1,mn=!1;const Ct=Rr.getUniforms(),an=Oe.uniforms;if(Ze.useProgram(Rr.program)&&(Gr=!0,qt=!0,mn=!0),$.id!==q&&(q=$.id,qt=!0),Gr||_e!==R){ct.reverseDepthBuffer?(ge.copy(R.projectionMatrix),s0(ge),o0(ge),Ct.setValue(F,"projectionMatrix",ge)):Ct.setValue(F,"projectionMatrix",R.projectionMatrix),Ct.setValue(F,"viewMatrix",R.matrixWorldInverse);const ir=Ct.map.cameraPosition;ir!==void 0&&ir.setValue(F,Pe.setFromMatrixPosition(R.matrixWorld)),ct.logarithmicDepthBuffer&&Ct.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ct.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),_e!==R&&(_e=R,qt=!0,mn=!0)}if(V.isSkinnedMesh){Ct.setOptional(F,V,"bindMatrix"),Ct.setOptional(F,V,"bindMatrixInverse");const ir=V.skeleton;ir&&(ir.boneTexture===null&&ir.computeBoneTexture(),Ct.setValue(F,"boneTexture",ir.boneTexture,P))}V.isBatchedMesh&&(Ct.setOptional(F,V,"batchingTexture"),Ct.setValue(F,"batchingTexture",V._matricesTexture,P),Ct.setOptional(F,V,"batchingIdTexture"),Ct.setValue(F,"batchingIdTexture",V._indirectTexture,P),Ct.setOptional(F,V,"batchingColorTexture"),V._colorsTexture!==null&&Ct.setValue(F,"batchingColorTexture",V._colorsTexture,P));const Ya=Z.morphAttributes;if((Ya.position!==void 0||Ya.normal!==void 0||Ya.color!==void 0)&&Qe.update(V,Z,Rr),(qt||Oe.receiveShadow!==V.receiveShadow)&&(Oe.receiveShadow=V.receiveShadow,Ct.setValue(F,"receiveShadow",V.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(an.envMap.value=We,an.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&G.environment!==null&&(an.envMapIntensity.value=G.environmentIntensity),qt&&(Ct.setValue(F,"toneMappingExposure",b.toneMappingExposure),Oe.needsLights&&js(an,mn),ye&&$.fog===!0&&we.refreshFogUniforms(an,ye),we.refreshMaterialUniforms(an,$,ce,ee,g.state.transmissionRenderTarget[R.id]),Cl.upload(F,Gs(Oe),an,P)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Cl.upload(F,Gs(Oe),an,P),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ct.setValue(F,"center",V.center),Ct.setValue(F,"modelViewMatrix",V.modelViewMatrix),Ct.setValue(F,"normalMatrix",V.normalMatrix),Ct.setValue(F,"modelMatrix",V.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const ir=$.uniformsGroups;for(let Ki=0,qa=ir.length;Ki<qa;Ki++){const Bn=ir[Ki];H.update(Bn,Rr),H.bind(Bn,Rr)}}return Rr}function js(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function Xs(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(R,G,Z){$e.get(R.texture).__webglTexture=G,$e.get(R.depthTexture).__webglTexture=Z;const $=$e.get(R);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=Z===void 0,$.__autoAllocateDepthBuffer||st.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,G){const Z=$e.get(R);Z.__webglFramebuffer=G,Z.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(R,G=0,Z=0){I=R,te=G,B=Z;let $=!0,V=null,ye=!1,Ie=!1;if(R){const Te=$e.get(R);if(Te.__useDefaultFramebuffer!==void 0)Ze.bindFramebuffer(F.FRAMEBUFFER,null),$=!1;else if(Te.__webglFramebuffer===void 0)P.setupRenderTarget(R);else if(Te.__hasExternalTextures)P.rebindTextures(R,$e.get(R.texture).__webglTexture,$e.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ke=R.depthTexture;if(Te.__boundDepthTexture!==Ke){if(Ke!==null&&$e.has(Ke)&&(R.width!==Ke.image.width||R.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(R)}}const We=R.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ie=!0);const qe=$e.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(qe[G])?V=qe[G][Z]:V=qe[G],ye=!0):R.samples>0&&P.useMultisampledRTT(R)===!1?V=$e.get(R).__webglMultisampledFramebuffer:Array.isArray(qe)?V=qe[Z]:V=qe,E.copy(R.viewport),C.copy(R.scissor),re=R.scissorTest}else E.copy(se).multiplyScalar(ce).floor(),C.copy(N).multiplyScalar(ce).floor(),re=Y;if(Ze.bindFramebuffer(F.FRAMEBUFFER,V)&&$&&Ze.drawBuffers(R,V),Ze.viewport(E),Ze.scissor(C),Ze.setScissorTest(re),ye){const Te=$e.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+G,Te.__webglTexture,Z)}else if(Ie){const Te=$e.get(R.texture),We=G||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Te.__webglTexture,Z||0,We)}q=-1},this.readRenderTargetPixels=function(R,G,Z,$,V,ye,Ie){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=$e.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ie!==void 0&&(Te=Te[Ie]),Te){Ze.bindFramebuffer(F.FRAMEBUFFER,Te);try{const We=R.texture,qe=We.format,Ke=We.type;if(!ct.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-$&&Z>=0&&Z<=R.height-V&&F.readPixels(G,Z,$,V,rt.convert(qe),rt.convert(Ke),ye)}finally{const We=I!==null?$e.get(I).__webglFramebuffer:null;Ze.bindFramebuffer(F.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(R,G,Z,$,V,ye,Ie){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=$e.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ie!==void 0&&(Te=Te[Ie]),Te){const We=R.texture,qe=We.format,Ke=We.type;if(!ct.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=R.width-$&&Z>=0&&Z<=R.height-V){Ze.bindFramebuffer(F.FRAMEBUFFER,Te);const je=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,je),F.bufferData(F.PIXEL_PACK_BUFFER,ye.byteLength,F.STREAM_READ),F.readPixels(G,Z,$,V,rt.convert(qe),rt.convert(Ke),0);const _t=I!==null?$e.get(I).__webglFramebuffer:null;Ze.bindFramebuffer(F.FRAMEBUFFER,_t);const wt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await a0(F,wt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,je),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ye),F.deleteBuffer(je),F.deleteSync(wt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,G=null,Z=0){R.isTexture!==!0&&(Rl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,R=arguments[1]);const $=Math.pow(2,-Z),V=Math.floor(R.image.width*$),ye=Math.floor(R.image.height*$),Ie=G!==null?G.x:0,Te=G!==null?G.y:0;P.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,Z,0,0,Ie,Te,V,ye),Ze.unbindTexture()},this.copyTextureToTexture=function(R,G,Z=null,$=null,V=0){R.isTexture!==!0&&(Rl("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,R=arguments[1],G=arguments[2],V=arguments[3]||0,Z=null);let ye,Ie,Te,We,qe,Ke;Z!==null?(ye=Z.max.x-Z.min.x,Ie=Z.max.y-Z.min.y,Te=Z.min.x,We=Z.min.y):(ye=R.image.width,Ie=R.image.height,Te=0,We=0),$!==null?(qe=$.x,Ke=$.y):(qe=0,Ke=0);const je=rt.convert(G.format),_t=rt.convert(G.type);P.setTexture2D(G,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,G.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,G.unpackAlignment);const wt=F.getParameter(F.UNPACK_ROW_LENGTH),At=F.getParameter(F.UNPACK_IMAGE_HEIGHT),xt=F.getParameter(F.UNPACK_SKIP_PIXELS),Rt=F.getParameter(F.UNPACK_SKIP_ROWS),Oe=F.getParameter(F.UNPACK_SKIP_IMAGES),tr=R.isCompressedTexture?R.mipmaps[V]:R.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,tr.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,tr.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Te),F.pixelStorei(F.UNPACK_SKIP_ROWS,We),R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,V,qe,Ke,ye,Ie,je,_t,tr.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,V,qe,Ke,tr.width,tr.height,je,tr.data):F.texSubImage2D(F.TEXTURE_2D,V,qe,Ke,ye,Ie,je,_t,tr),F.pixelStorei(F.UNPACK_ROW_LENGTH,wt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,At),F.pixelStorei(F.UNPACK_SKIP_PIXELS,xt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Rt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Oe),V===0&&G.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Ze.unbindTexture()},this.copyTextureToTexture3D=function(R,G,Z=null,$=null,V=0){R.isTexture!==!0&&(Rl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,$=arguments[1]||null,R=arguments[2],G=arguments[3],V=arguments[4]||0);let ye,Ie,Te,We,qe,Ke,je,_t,wt;const At=R.isCompressedTexture?R.mipmaps[V]:R.image;Z!==null?(ye=Z.max.x-Z.min.x,Ie=Z.max.y-Z.min.y,Te=Z.max.z-Z.min.z,We=Z.min.x,qe=Z.min.y,Ke=Z.min.z):(ye=At.width,Ie=At.height,Te=At.depth,We=0,qe=0,Ke=0),$!==null?(je=$.x,_t=$.y,wt=$.z):(je=0,_t=0,wt=0);const xt=rt.convert(G.format),Rt=rt.convert(G.type);let Oe;if(G.isData3DTexture)P.setTexture3D(G,0),Oe=F.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)P.setTexture2DArray(G,0),Oe=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,G.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,G.unpackAlignment);const tr=F.getParameter(F.UNPACK_ROW_LENGTH),pn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Rr=F.getParameter(F.UNPACK_SKIP_PIXELS),Gr=F.getParameter(F.UNPACK_SKIP_ROWS),qt=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,At.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,At.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,We),F.pixelStorei(F.UNPACK_SKIP_ROWS,qe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ke),R.isDataTexture||R.isData3DTexture?F.texSubImage3D(Oe,V,je,_t,wt,ye,Ie,Te,xt,Rt,At.data):G.isCompressedArrayTexture?F.compressedTexSubImage3D(Oe,V,je,_t,wt,ye,Ie,Te,xt,At.data):F.texSubImage3D(Oe,V,je,_t,wt,ye,Ie,Te,xt,Rt,At),F.pixelStorei(F.UNPACK_ROW_LENGTH,tr),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,pn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Rr),F.pixelStorei(F.UNPACK_SKIP_ROWS,Gr),F.pixelStorei(F.UNPACK_SKIP_IMAGES,qt),V===0&&G.generateMipmaps&&F.generateMipmap(Oe),Ze.unbindTexture()},this.initRenderTarget=function(R){$e.get(R).__webglFramebuffer===void 0&&P.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?P.setTextureCube(R,0):R.isData3DTexture?P.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?P.setTexture2DArray(R,0):P.setTexture2D(R,0),Ze.unbindTexture()},this.resetState=function(){te=0,B=0,I=null,Ze.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const r=this.getContext();r.drawingBufferColorSpace=e===Jd?"display-p3":"srgb",r.unpackColorSpace=yt.workingColorSpace===kl?"display-p3":"srgb"}}class _E extends pr{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,r){return super.copy(e,r),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const r=super.toJSON(e);return this.fog!==null&&(r.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(r.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(r.object.backgroundIntensity=this.backgroundIntensity),r.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(r.object.environmentIntensity=this.environmentIntensity),r.object.environmentRotation=this.environmentRotation.toArray(),r}}class Mg extends Wa{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Il=new J,Ol=new J,Lm=new zt,Ds=new eh,_l=new Hs,td=new J,Nm=new J;class xE extends pr{constructor(e=new nn,r=new Mg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=r,this.updateMorphTargets()}copy(e,r){return super.copy(e,r),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const r=e.attributes.position,i=[0];for(let o=1,u=r.count;o<u;o++)Il.fromBufferAttribute(r,o-1),Ol.fromBufferAttribute(r,o),i[o]=i[o-1],i[o]+=Il.distanceTo(Ol);e.setAttribute("lineDistance",new Dn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,r){const i=this.geometry,o=this.matrixWorld,u=e.params.Line.threshold,h=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_l.copy(i.boundingSphere),_l.applyMatrix4(o),_l.radius+=u,e.ray.intersectsSphere(_l)===!1)return;Lm.copy(o).invert(),Ds.copy(e.ray).applyMatrix4(Lm);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),f=d*d,m=this.isLineSegments?2:1,v=i.index,y=i.attributes.position;if(v!==null){const x=Math.max(0,h.start),S=Math.min(v.count,h.start+h.count);for(let w=x,A=S-1;w<A;w+=m){const g=v.getX(w),_=v.getX(w+1),D=xl(this,e,Ds,f,g,_);D&&r.push(D)}if(this.isLineLoop){const w=v.getX(S-1),A=v.getX(x),g=xl(this,e,Ds,f,w,A);g&&r.push(g)}}else{const x=Math.max(0,h.start),S=Math.min(y.count,h.start+h.count);for(let w=x,A=S-1;w<A;w+=m){const g=xl(this,e,Ds,f,w,w+1);g&&r.push(g)}if(this.isLineLoop){const w=xl(this,e,Ds,f,S-1,x);w&&r.push(w)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const i=e[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=i.length;o<u;o++){const h=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=o}}}}}function xl(a,e,r,i,o,u){const h=a.geometry.attributes.position;if(Il.fromBufferAttribute(h,o),Ol.fromBufferAttribute(h,u),r.distanceSqToSegment(Il,Ol,td,Nm)>i)return;td.applyMatrix4(a.matrixWorld);const d=e.ray.origin.distanceTo(td);if(!(d<e.near||d>e.far))return{distance:d,point:Nm.clone().applyMatrix4(a.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:a}}const Um=new J,Dm=new J;class yE extends xE{constructor(e,r){super(e,r),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const r=e.attributes.position,i=[];for(let o=0,u=r.count;o<u;o+=2)Um.fromBufferAttribute(r,o),Dm.fromBufferAttribute(r,o+1),i[o]=o===0?0:i[o-1],i[o+1]=i[o]+Um.distanceTo(Dm);e.setAttribute("lineDistance",new Dn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class SE extends Wa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Im=new zt,Gd=new eh,yl=new Hs,Sl=new J;class ME extends pr{constructor(e=new nn,r=new SE){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=r,this.updateMorphTargets()}copy(e,r){return super.copy(e,r),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,r){const i=this.geometry,o=this.matrixWorld,u=e.params.Points.threshold,h=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yl.copy(i.boundingSphere),yl.applyMatrix4(o),yl.radius+=u,e.ray.intersectsSphere(yl)===!1)return;Im.copy(o).invert(),Gd.copy(e.ray).applyMatrix4(Im);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),f=d*d,m=i.index,v=i.attributes.position;if(m!==null){const y=Math.max(0,h.start),x=Math.min(m.count,h.start+h.count);for(let S=y,w=x;S<w;S++){const A=m.getX(S);Sl.fromBufferAttribute(v,A),Om(Sl,A,f,o,e,r,this)}}else{const y=Math.max(0,h.start),x=Math.min(v.count,h.start+h.count);for(let S=y,w=x;S<w;S++)Sl.fromBufferAttribute(v,S),Om(Sl,S,f,o,e,r,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const i=e[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=i.length;o<u;o++){const h=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=o}}}}}function Om(a,e,r,i,o,u,h){const d=Gd.distanceSqToPoint(a);if(d<r){const f=new J;Gd.closestPointToPoint(a,f),f.applyMatrix4(i);const m=o.ray.origin.distanceTo(f);if(m<o.near||m>o.far)return;u.push({distance:m,distanceToRay:Math.sqrt(d),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xd);const EE=`precision mediump float;

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
`,TE=`precision mediump float;

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
`,Fm={dashboard:{nodeDensity:.55,glowIntensity:1,pulseSpeed:1,interactionStrength:.6,spacing:90},"mission-control":{nodeDensity:.65,glowIntensity:1.25,pulseSpeed:1.2,interactionStrength:.8,spacing:80},jarvis:{nodeDensity:.8,glowIntensity:1.6,pulseSpeed:1.6,interactionStrength:1.1,spacing:68}},Eg=(a="mission-control")=>Fm[a]??Fm["mission-control"];class wE{constructor({width:e,height:r,preset:i="mission-control"}){this.size={width:e,height:r},this.setPreset(i),this.nodes=[],this.velocities=[],this.energies=[],this.edges=[],this.lineEnergy=[],this.pulses=[],this.spatial=new Map,this.seed()}setPreset(e){this.preset=Eg(e)}seed(){const{width:e,height:r}=this.size,i=this.preset.spacing,o=Math.max(6,Math.floor(e/i)),u=Math.max(4,Math.floor(r/i));this.nodes=[],this.velocities=[],this.energies=[],this.edges=[],this.lineEnergy=[];for(let d=0;d<u;d++)for(let f=0;f<o;f++){const m=(f+.5)*i+(Math.random()-.5)*12,v=(d+.5)*i+(Math.random()-.5)*12;this.nodes.push([m,v,0]),this.velocities.push([(Math.random()-.5)*.2,(Math.random()-.5)*.2,0]),this.energies.push(Math.random()*.4)}const h=(d,f)=>f*o+d;for(let d=0;d<u;d++)for(let f=0;f<o;f++){const m=h(f,d);f<o-1&&this.addEdge(m,h(f+1,d)),d<u-1&&this.addEdge(m,h(f,d+1))}this.buildSpatial(i*1.5)}resize(e,r){this.size={width:e,height:r},this.seed()}addEdge(e,r){this.edges.push([e,r]),this.lineEnergy.push(.2)}buildSpatial(e){this.cellSize=e,this.spatial=new Map,this.nodes.forEach(([r,i],o)=>{const u=`${Math.floor(r/e)}:${Math.floor(i/e)}`;this.spatial.has(u)||this.spatial.set(u,[]),this.spatial.get(u).push(o)})}neighborsAround(e,r){const{cellSize:i}=this,o=Math.floor(e.x/i),u=Math.floor(e.y/i),h=[],d=Math.ceil(r/i);for(let f=-d;f<=d;f++)for(let m=-d;m<=d;m++){const v=`${o+f}:${u+m}`;this.spatial.has(v)&&h.push(...this.spatial.get(v))}return h}triggerPulse(e,r=1){this.neighborsAround(e,this.preset.spacing*2).forEach(i=>{const[o,u]=this.nodes[i],h=Math.hypot(o-e.x,u-e.y)*(.4/this.preset.pulseSpeed);this.pulses.push({node:i,at:performance.now()+h,intensity:r})})}microPulse(e){this.triggerPulse(e,.4)}attract(e,r=this.preset.interactionStrength){this.neighborsAround(e,this.preset.spacing*2.5).forEach(i=>{const o=this.nodes[i],u=this.velocities[i],h=e.x-o[0],d=e.y-o[1],f=Math.max(8,Math.hypot(h,d)),m=r/f*.35;u[0]+=h/f*m,u[1]+=d/f*m,this.energies[i]=Math.min(1,this.energies[i]+.02)})}update(e){const r=performance.now();this.pulses=this.pulses.filter(i=>r>=i.at?(this.energies[i.node]=Math.min(1,this.energies[i.node]+.5*i.intensity),!1):!0);for(let i=0;i<this.nodes.length;i++){const o=this.nodes[i],u=this.velocities[i];o[0]+=u[0]*e,o[1]+=u[1]*e,u[0]*=.95,u[1]*=.95,this.energies[i]=Math.max(0,this.energies[i]-e*.15)}this.edges.forEach(([i,o],u)=>{const h=(this.energies[i]+this.energies[o])*.5;this.lineEnergy[u]=h})}}const zm=({preset:a="jarvis",followMouse:e=!0,reactToTyping:r=!0,reactToClick:i=!0,className:o})=>{const u=hi.useRef(null),h=hi.useRef(),d=hi.useRef(),f=hi.useRef(),m=hi.useRef(),v=hi.useRef(!0);return hi.useEffect(()=>{const y=u.current;if(!y)return;const x=Eg(a),S=new vE({antialias:!0,alpha:!0});S.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),S.setClearColor(0,0),S.domElement.className="jk-neural-bg",y.appendChild(S.domElement),h.current=S;const w=new _E,A=new gg(-1,1,1,-1,.1,10);A.position.z=1;const g=()=>{const{clientWidth:N,clientHeight:Y}=y;S.setSize(N,Y),A.left=-N/2,A.right=N/2,A.top=Y/2,A.bottom=-Y/2,A.updateProjectionMatrix(),v.current=!0};g(),window.addEventListener("resize",g);const _=new wE({width:S.domElement.width,height:S.domElement.height,preset:a});d.current=_;const D=new Float32Array(_.nodes.length*3),b=new Float32Array(_.nodes.length),U=new Er(D,3),te=new Er(b,1),B=new nn;B.setAttribute("position",U),B.setAttribute("aEnergy",te);const I=new Fn({vertexShader:EE,fragmentShader:TE,transparent:!0,blending:bl,depthWrite:!1,uniforms:{uTime:{value:0},uSize:{value:6*x.glowIntensity}}}),q=new ME(B,I);f.current=q,w.add(q);const _e=new Float32Array(_.edges.length*2*3),E=new Float32Array(_.edges.length),C=new nn;C.setAttribute("position",new Er(_e,3)),C.setAttribute("alpha",new Er(E,1));const re=new Mg({color:new gt(63168),transparent:!0,opacity:.4,blending:bl}),ne=new yE(C,re);m.current=ne,w.add(ne);const ae=()=>{_.nodes.forEach((N,Y)=>{D[Y*3]=N[0]-_.size.width/2,D[Y*3+1]=N[1]-_.size.height/2,D[Y*3+2]=N[2],b[Y]=_.energies[Y]}),U.needsUpdate=!0,te.needsUpdate=!0,_.edges.forEach(([N,Y],be)=>{const K=_.nodes[N],le=_.nodes[Y],ge=be*6;_e[ge]=K[0]-_.size.width/2,_e[ge+1]=K[1]-_.size.height/2,_e[ge+3]=le[0]-_.size.width/2,_e[ge+4]=le[1]-_.size.height/2,E[be]=_.lineEnergy[be]}),C.getAttribute("position").needsUpdate=!0,C.getAttribute("alpha").needsUpdate=!0,re.opacity=.2+.5*x.glowIntensity};let pe=performance.now();const ee=()=>{const N=performance.now(),Y=Math.min(.05,(N-pe)/1e3);pe=N,v.current&&(_.resize(S.domElement.width,S.domElement.height),v.current=!1),_.update(Y),I.uniforms.uTime.value=N*.001,ae(),S.render(w,A),ce=requestAnimationFrame(ee)};let ce=requestAnimationFrame(ee);const z=N=>{const Y=S.domElement.getBoundingClientRect();_.attract({x:N.clientX-Y.left,y:N.clientY-Y.top}),e&&_.microPulse({x:N.clientX-Y.left,y:N.clientY-Y.top})},oe=N=>{if(!i)return;const Y=S.domElement.getBoundingClientRect();_.triggerPulse({x:N.clientX-Y.left,y:N.clientY-Y.top},1.2)},se=()=>{if(!r)return;const N=S.domElement.getBoundingClientRect();_.triggerPulse({x:Math.random()*N.width,y:Math.random()*N.height},.8)};return window.addEventListener("mousemove",z),window.addEventListener("click",oe),window.addEventListener("keydown",se),()=>{cancelAnimationFrame(ce),window.removeEventListener("resize",g),window.removeEventListener("mousemove",z),window.removeEventListener("click",oe),window.removeEventListener("keydown",se),w.clear(),S.dispose(),y.removeChild(S.domElement)}},[a,e,r,i]),Gi.jsx("div",{ref:u,className:o,style:{position:"absolute",inset:0}})};function AE(){return ht.jsxs("div",{className:"min-h-screen relative overflow-hidden text-[#dceeff]",children:[ht.jsx(zm,{}),ht.jsxs("main",{className:"relative z-10 max-w-6xl mx-auto px-6 py-12 space-y-10",children:[ht.jsxs("header",{className:"text-center space-y-2",children:[ht.jsx("h1",{className:"text-3xl md:text-4xl font-black tracking-[0.35em] text-cyan-200",children:"JEIKEI"}),ht.jsx("p",{className:"text-sm tracking-[0.25em] text-cyan-100/80",children:"DESIGN SYSTEM"})]}),ht.jsxs(Fp,{columns:{base:1,md:2},gap:"md",className:"items-center",children:[ht.jsxs(_a,{glass:!0,glow:!0,children:[ht.jsx("h3",{className:"text-lg font-semibold text-white mb-4",children:"NeoButton"}),ht.jsxs("div",{className:"flex flex-wrap gap-3",children:[ht.jsx(Ko,{children:"Primary"}),ht.jsx(Ko,{variant:"secondary",children:"Secondary"}),ht.jsx(Ko,{variant:"outline",children:"Outline"})]})]}),ht.jsxs(_a,{glass:!0,glow:!0,children:[ht.jsx("h3",{className:"text-lg font-semibold text-white mb-4",children:"NeoInput"}),ht.jsx(Vm,{placeholder:"Type here..."})]})]}),ht.jsx("div",{className:"flex justify-center",children:ht.jsx(Ko,{className:"px-10 text-lg",glow:!0,children:"NeoButton"})}),ht.jsxs(Fp,{columns:{base:1,md:3},gap:"md",children:[ht.jsxs(_a,{title:"NeoCard",value:"1,250",glass:!0,glow:!0,children:[ht.jsx("p",{className:"text-sm text-gray-300",children:"Users Online"}),ht.jsx("p",{className:"text-3xl text-cyan-300 mt-1",children:"1,250"})]}),ht.jsxs(_a,{title:"NeoCard",value:"$32,400",glass:!0,glow:!0,children:[ht.jsx("p",{className:"text-sm text-gray-300",children:"Revenue"}),ht.jsx("p",{className:"text-3xl text-cyan-300 mt-1",children:"$32,400"})]}),ht.jsxs(_a,{title:"NeoCard",value:"62%",glass:!0,glow:!0,children:[ht.jsx("p",{className:"text-sm text-gray-300",children:"CPU Usage"}),ht.jsx("p",{className:"text-3xl text-cyan-300 mt-1",children:"62%"})]})]}),ht.jsxs(_a,{glass:!0,glow:!0,children:[ht.jsx("h3",{className:"text-lg font-semibold text-white mb-2",children:"Neural Grid Background"}),ht.jsx("div",{className:"h-56 relative rounded-2xl overflow-hidden",children:ht.jsx(zm,{})})]})]})]})}d_.createRoot(document.getElementById("root")).render(ht.jsx(jd.StrictMode,{children:ht.jsx(AE,{})}));
