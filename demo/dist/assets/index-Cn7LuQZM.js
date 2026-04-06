(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function r(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function i(o){if(o.ep)return;o.ep=!0;const u=r(o);fetch(o.href,u)}})();function Hm(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Sc={exports:{}},Cs={},Mc={exports:{}},ot={};var Cp;function a_(){if(Cp)return ot;Cp=1;var a=Symbol.for("react.element"),e=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function x(N){return N===null||typeof N!="object"?null:(N=y&&N[y]||N["@@iterator"],typeof N=="function"?N:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,A={};function v(N,Y,be){this.props=N,this.context=Y,this.refs=A,this.updater=be||S}v.prototype.isReactComponent={},v.prototype.setState=function(N,Y){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,Y,"setState")},v.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function _(){}_.prototype=v.prototype;function D(N,Y,be){this.props=N,this.context=Y,this.refs=A,this.updater=be||S}var b=D.prototype=new _;b.constructor=D,w(b,v.prototype),b.isPureReactComponent=!0;var U=Array.isArray,te=Object.prototype.hasOwnProperty,B={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function q(N,Y,be){var K,le={},ge=null,Se=null;if(Y!=null)for(K in Y.ref!==void 0&&(Se=Y.ref),Y.key!==void 0&&(ge=""+Y.key),Y)te.call(Y,K)&&!I.hasOwnProperty(K)&&(le[K]=Y[K]);var Pe=arguments.length-2;if(Pe===1)le.children=be;else if(1<Pe){for(var Le=Array(Pe),tt=0;tt<Pe;tt++)Le[tt]=arguments[tt+2];le.children=Le}if(N&&N.defaultProps)for(K in Pe=N.defaultProps,Pe)le[K]===void 0&&(le[K]=Pe[K]);return{$$typeof:a,type:N,key:ge,ref:Se,props:le,_owner:B.current}}function _e(N,Y){return{$$typeof:a,type:N.type,key:Y,ref:N.ref,props:N.props,_owner:N._owner}}function E(N){return typeof N=="object"&&N!==null&&N.$$typeof===a}function C(N){var Y={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(be){return Y[be]})}var re=/\/+/g;function ne(N,Y){return typeof N=="object"&&N!==null&&N.key!=null?C(""+N.key):Y.toString(36)}function ae(N,Y,be,K,le){var ge=typeof N;(ge==="undefined"||ge==="boolean")&&(N=null);var Se=!1;if(N===null)Se=!0;else switch(ge){case"string":case"number":Se=!0;break;case"object":switch(N.$$typeof){case a:case e:Se=!0}}if(Se)return Se=N,le=le(Se),N=K===""?"."+ne(Se,0):K,U(le)?(be="",N!=null&&(be=N.replace(re,"$&/")+"/"),ae(le,Y,be,"",function(tt){return tt})):le!=null&&(E(le)&&(le=_e(le,be+(!le.key||Se&&Se.key===le.key?"":(""+le.key).replace(re,"$&/")+"/")+N)),Y.push(le)),1;if(Se=0,K=K===""?".":K+":",U(N))for(var Pe=0;Pe<N.length;Pe++){ge=N[Pe];var Le=K+ne(ge,Pe);Se+=ae(ge,Y,be,Le,le)}else if(Le=x(N),typeof Le=="function")for(N=Le.call(N),Pe=0;!(ge=N.next()).done;)ge=ge.value,Le=K+ne(ge,Pe++),Se+=ae(ge,Y,be,Le,le);else if(ge==="object")throw Y=String(N),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.");return Se}function pe(N,Y,be){if(N==null)return N;var K=[],le=0;return ae(N,K,"","",function(ge){return Y.call(be,ge,le++)}),K}function ee(N){if(N._status===-1){var Y=N._result;Y=Y(),Y.then(function(be){(N._status===0||N._status===-1)&&(N._status=1,N._result=be)},function(be){(N._status===0||N._status===-1)&&(N._status=2,N._result=be)}),N._status===-1&&(N._status=0,N._result=Y)}if(N._status===1)return N._result.default;throw N._result}var ce={current:null},k={transition:null},oe={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:k,ReactCurrentOwner:B};function se(){throw Error("act(...) is not supported in production builds of React.")}return ot.Children={map:pe,forEach:function(N,Y,be){pe(N,function(){Y.apply(this,arguments)},be)},count:function(N){var Y=0;return pe(N,function(){Y++}),Y},toArray:function(N){return pe(N,function(Y){return Y})||[]},only:function(N){if(!E(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},ot.Component=v,ot.Fragment=r,ot.Profiler=o,ot.PureComponent=D,ot.StrictMode=i,ot.Suspense=f,ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,ot.act=se,ot.cloneElement=function(N,Y,be){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var K=w({},N.props),le=N.key,ge=N.ref,Se=N._owner;if(Y!=null){if(Y.ref!==void 0&&(ge=Y.ref,Se=B.current),Y.key!==void 0&&(le=""+Y.key),N.type&&N.type.defaultProps)var Pe=N.type.defaultProps;for(Le in Y)te.call(Y,Le)&&!I.hasOwnProperty(Le)&&(K[Le]=Y[Le]===void 0&&Pe!==void 0?Pe[Le]:Y[Le])}var Le=arguments.length-2;if(Le===1)K.children=be;else if(1<Le){Pe=Array(Le);for(var tt=0;tt<Le;tt++)Pe[tt]=arguments[tt+2];K.children=Pe}return{$$typeof:a,type:N.type,key:le,ref:ge,props:K,_owner:Se}},ot.createContext=function(N){return N={$$typeof:d,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:u,_context:N},N.Consumer=N},ot.createElement=q,ot.createFactory=function(N){var Y=q.bind(null,N);return Y.type=N,Y},ot.createRef=function(){return{current:null}},ot.forwardRef=function(N){return{$$typeof:h,render:N}},ot.isValidElement=E,ot.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:ee}},ot.memo=function(N,Y){return{$$typeof:m,type:N,compare:Y===void 0?null:Y}},ot.startTransition=function(N){var Y=k.transition;k.transition={};try{N()}finally{k.transition=Y}},ot.unstable_act=se,ot.useCallback=function(N,Y){return ce.current.useCallback(N,Y)},ot.useContext=function(N){return ce.current.useContext(N)},ot.useDebugValue=function(){},ot.useDeferredValue=function(N){return ce.current.useDeferredValue(N)},ot.useEffect=function(N,Y){return ce.current.useEffect(N,Y)},ot.useId=function(){return ce.current.useId()},ot.useImperativeHandle=function(N,Y,be){return ce.current.useImperativeHandle(N,Y,be)},ot.useInsertionEffect=function(N,Y){return ce.current.useInsertionEffect(N,Y)},ot.useLayoutEffect=function(N,Y){return ce.current.useLayoutEffect(N,Y)},ot.useMemo=function(N,Y){return ce.current.useMemo(N,Y)},ot.useReducer=function(N,Y,be){return ce.current.useReducer(N,Y,be)},ot.useRef=function(N){return ce.current.useRef(N)},ot.useState=function(N){return ce.current.useState(N)},ot.useSyncExternalStore=function(N,Y,be){return ce.current.useSyncExternalStore(N,Y,be)},ot.useTransition=function(){return ce.current.useTransition()},ot.version="18.3.1",ot}var bp;function qd(){return bp||(bp=1,Mc.exports=a_()),Mc.exports}var Pp;function s_(){if(Pp)return Cs;Pp=1;var a=qd(),e=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(h,f,m){var g,y={},x=null,S=null;m!==void 0&&(x=""+m),f.key!==void 0&&(x=""+f.key),f.ref!==void 0&&(S=f.ref);for(g in f)i.call(f,g)&&!u.hasOwnProperty(g)&&(y[g]=f[g]);if(h&&h.defaultProps)for(g in f=h.defaultProps,f)y[g]===void 0&&(y[g]=f[g]);return{$$typeof:e,type:h,key:x,ref:S,props:y,_owner:o.current}}return Cs.Fragment=r,Cs.jsx=d,Cs.jsxs=d,Cs}var Lp;function o_(){return Lp||(Lp=1,Sc.exports=s_()),Sc.exports}var je=o_(),Or=qd();const xi=Hm(Or);var $o={},Ec={exports:{}},Sr={},Tc={exports:{}},wc={};var Np;function l_(){return Np||(Np=1,(function(a){function e(k,oe){var se=k.length;k.push(oe);e:for(;0<se;){var N=se-1>>>1,Y=k[N];if(0<o(Y,oe))k[N]=oe,k[se]=Y,se=N;else break e}}function r(k){return k.length===0?null:k[0]}function i(k){if(k.length===0)return null;var oe=k[0],se=k.pop();if(se!==oe){k[0]=se;e:for(var N=0,Y=k.length,be=Y>>>1;N<be;){var K=2*(N+1)-1,le=k[K],ge=K+1,Se=k[ge];if(0>o(le,se))ge<Y&&0>o(Se,le)?(k[N]=Se,k[ge]=se,N=ge):(k[N]=le,k[K]=se,N=K);else if(ge<Y&&0>o(Se,se))k[N]=Se,k[ge]=se,N=ge;else break e}}return oe}function o(k,oe){var se=k.sortIndex-oe.sortIndex;return se!==0?se:k.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;a.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();a.unstable_now=function(){return d.now()-h}}var f=[],m=[],g=1,y=null,x=3,S=!1,w=!1,A=!1,v=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(k){for(var oe=r(m);oe!==null;){if(oe.callback===null)i(m);else if(oe.startTime<=k)i(m),oe.sortIndex=oe.expirationTime,e(f,oe);else break;oe=r(m)}}function U(k){if(A=!1,b(k),!w)if(r(f)!==null)w=!0,ee(te);else{var oe=r(m);oe!==null&&ce(U,oe.startTime-k)}}function te(k,oe){w=!1,A&&(A=!1,_(q),q=-1),S=!0;var se=x;try{for(b(oe),y=r(f);y!==null&&(!(y.expirationTime>oe)||k&&!C());){var N=y.callback;if(typeof N=="function"){y.callback=null,x=y.priorityLevel;var Y=N(y.expirationTime<=oe);oe=a.unstable_now(),typeof Y=="function"?y.callback=Y:y===r(f)&&i(f),b(oe)}else i(f);y=r(f)}if(y!==null)var be=!0;else{var K=r(m);K!==null&&ce(U,K.startTime-oe),be=!1}return be}finally{y=null,x=se,S=!1}}var B=!1,I=null,q=-1,_e=5,E=-1;function C(){return!(a.unstable_now()-E<_e)}function re(){if(I!==null){var k=a.unstable_now();E=k;var oe=!0;try{oe=I(!0,k)}finally{oe?ne():(B=!1,I=null)}}else B=!1}var ne;if(typeof D=="function")ne=function(){D(re)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,pe=ae.port2;ae.port1.onmessage=re,ne=function(){pe.postMessage(null)}}else ne=function(){v(re,0)};function ee(k){I=k,B||(B=!0,ne())}function ce(k,oe){q=v(function(){k(a.unstable_now())},oe)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(k){k.callback=null},a.unstable_continueExecution=function(){w||S||(w=!0,ee(te))},a.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_e=0<k?Math.floor(1e3/k):5},a.unstable_getCurrentPriorityLevel=function(){return x},a.unstable_getFirstCallbackNode=function(){return r(f)},a.unstable_next=function(k){switch(x){case 1:case 2:case 3:var oe=3;break;default:oe=x}var se=x;x=oe;try{return k()}finally{x=se}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(k,oe){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var se=x;x=k;try{return oe()}finally{x=se}},a.unstable_scheduleCallback=function(k,oe,se){var N=a.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?N+se:N):se=N,k){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=se+Y,k={id:g++,callback:oe,priorityLevel:k,startTime:se,expirationTime:Y,sortIndex:-1},se>N?(k.sortIndex=se,e(m,k),r(f)===null&&k===r(m)&&(A?(_(q),q=-1):A=!0,ce(U,se-N))):(k.sortIndex=Y,e(f,k),w||S||(w=!0,ee(te))),k},a.unstable_shouldYield=C,a.unstable_wrapCallback=function(k){var oe=x;return function(){var se=x;x=oe;try{return k.apply(this,arguments)}finally{x=se}}}})(wc)),wc}var Up;function u_(){return Up||(Up=1,Tc.exports=l_()),Tc.exports}var Dp;function c_(){if(Dp)return Sr;Dp=1;var a=qd(),e=u_();function r(t){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+t,s=1;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function u(t,n){d(t,n),d(t+"Capture",n)}function d(t,n){for(o[t]=n,t=0;t<n.length;t++)i.add(n[t])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},y={};function x(t){return f.call(y,t)?!0:f.call(g,t)?!1:m.test(t)?y[t]=!0:(g[t]=!0,!1)}function S(t,n,s,l){if(s!==null&&s.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return l?!1:s!==null?!s.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,n,s,l){if(n===null||typeof n>"u"||S(t,n,s,l))return!0;if(l)return!1;if(s!==null)switch(s.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function A(t,n,s,l,c,p,M){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=s,this.propertyName=t,this.type=n,this.sanitizeURL=p,this.removeEmptyString=M}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){v[t]=new A(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var n=t[0];v[n]=new A(n,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){v[t]=new A(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){v[t]=new A(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){v[t]=new A(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){v[t]=new A(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){v[t]=new A(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){v[t]=new A(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){v[t]=new A(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function D(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var n=t.replace(_,D);v[n]=new A(n,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var n=t.replace(_,D);v[n]=new A(n,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var n=t.replace(_,D);v[n]=new A(n,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){v[t]=new A(t,1,!1,t.toLowerCase(),null,!1,!1)}),v.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){v[t]=new A(t,1,!1,t.toLowerCase(),null,!0,!0)});function b(t,n,s,l){var c=v.hasOwnProperty(n)?v[n]:null;(c!==null?c.type!==0:l||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(w(n,s,c,l)&&(s=null),l||c===null?x(n)&&(s===null?t.removeAttribute(n):t.setAttribute(n,""+s)):c.mustUseProperty?t[c.propertyName]=s===null?c.type===3?!1:"":s:(n=c.attributeName,l=c.attributeNamespace,s===null?t.removeAttribute(n):(c=c.type,s=c===3||c===4&&s===!0?"":""+s,l?t.setAttributeNS(l,n,s):t.setAttribute(n,s))))}var U=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,te=Symbol.for("react.element"),B=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),_e=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),C=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),pe=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),k=Symbol.iterator;function oe(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,N;function Y(t){if(N===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);N=n&&n[1]||""}return`
`+N+t}var be=!1;function K(t,n){if(!t||be)return"";be=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(Q){var l=Q}Reflect.construct(t,[],n)}else{try{n.call()}catch(Q){l=Q}t.call(n.prototype)}else{try{throw Error()}catch(Q){l=Q}t()}}catch(Q){if(Q&&l&&typeof Q.stack=="string"){for(var c=Q.stack.split(`
`),p=l.stack.split(`
`),M=c.length-1,L=p.length-1;1<=M&&0<=L&&c[M]!==p[L];)L--;for(;1<=M&&0<=L;M--,L--)if(c[M]!==p[L]){if(M!==1||L!==1)do if(M--,L--,0>L||c[M]!==p[L]){var O=`
`+c[M].replace(" at new "," at ");return t.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",t.displayName)),O}while(1<=M&&0<=L);break}}}finally{be=!1,Error.prepareStackTrace=s}return(t=t?t.displayName||t.name:"")?Y(t):""}function le(t){switch(t.tag){case 5:return Y(t.type);case 16:return Y("Lazy");case 13:return Y("Suspense");case 19:return Y("SuspenseList");case 0:case 2:case 15:return t=K(t.type,!1),t;case 11:return t=K(t.type.render,!1),t;case 1:return t=K(t.type,!0),t;default:return""}}function ge(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case I:return"Fragment";case B:return"Portal";case _e:return"Profiler";case q:return"StrictMode";case ne:return"Suspense";case ae:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case C:return(t.displayName||"Context")+".Consumer";case E:return(t._context.displayName||"Context")+".Provider";case re:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case pe:return n=t.displayName||null,n!==null?n:ge(t.type)||"Memo";case ee:n=t._payload,t=t._init;try{return ge(t(n))}catch{}}return null}function Se(t){var n=t.type;switch(t.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=n.render,t=t.displayName||t.name||"",n.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ge(n);case 8:return n===q?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Pe(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Le(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function tt(t){var n=Le(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),l=""+t[n];if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,p=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(M){l=""+M,p.call(this,M)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function pt(t){t._valueTracker||(t._valueTracker=tt(t))}function ct(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var s=n.getValue(),l="";return t&&(l=Le(t)?t.checked?"true":"false":t.value),t=l,t!==s?(n.setValue(t),!0):!1}function F(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function er(t,n){var s=n.checked;return se({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??t._wrapperState.initialChecked})}function lt(t,n){var s=n.defaultValue==null?"":n.defaultValue,l=n.checked!=null?n.checked:n.defaultChecked;s=Pe(n.value!=null?n.value:s),t._wrapperState={initialChecked:l,initialValue:s,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function ht(t,n){n=n.checked,n!=null&&b(t,"checked",n,!1)}function Qe(t,n){ht(t,n);var s=Pe(n.value),l=n.type;if(s!=null)l==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+s):t.value!==""+s&&(t.value=""+s);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}n.hasOwnProperty("value")?Je(t,n.type,s):n.hasOwnProperty("defaultValue")&&Je(t,n.type,Pe(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(t.defaultChecked=!!n.defaultChecked)}function Tt(t,n,s){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var l=n.type;if(!(l!=="submit"&&l!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+t._wrapperState.initialValue,s||n===t.value||(t.value=n),t.defaultValue=n}s=t.name,s!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,s!==""&&(t.name=s)}function Je(t,n,s){(n!=="number"||F(t.ownerDocument)!==t)&&(s==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+s&&(t.defaultValue=""+s))}var P=Array.isArray;function T(t,n,s,l){if(t=t.options,n){n={};for(var c=0;c<s.length;c++)n["$"+s[c]]=!0;for(s=0;s<t.length;s++)c=n.hasOwnProperty("$"+t[s].value),t[s].selected!==c&&(t[s].selected=c),c&&l&&(t[s].defaultSelected=!0)}else{for(s=""+Pe(s),n=null,c=0;c<t.length;c++){if(t[c].value===s){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function j(t,n){if(n.dangerouslySetInnerHTML!=null)throw Error(r(91));return se({},n,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function de(t,n){var s=n.value;if(s==null){if(s=n.children,n=n.defaultValue,s!=null){if(n!=null)throw Error(r(92));if(P(s)){if(1<s.length)throw Error(r(93));s=s[0]}n=s}n==null&&(n=""),s=n}t._wrapperState={initialValue:Pe(s)}}function xe(t,n){var s=Pe(n.value),l=Pe(n.defaultValue);s!=null&&(s=""+s,s!==t.value&&(t.value=s),n.defaultValue==null&&t.defaultValue!==s&&(t.defaultValue=s)),l!=null&&(t.defaultValue=""+l)}function ue(t){var n=t.textContent;n===t._wrapperState.initialValue&&n!==""&&n!==null&&(t.value=n)}function Ge(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function we(t,n){return t==null||t==="http://www.w3.org/1999/xhtml"?Ge(n):t==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var De,ut=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,s,l,c){MSApp.execUnsafeLocalFunction(function(){return t(n,s,l,c)})}:t})(function(t,n){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=n;else{for(De=De||document.createElement("div"),De.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=De.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;n.firstChild;)t.appendChild(n.firstChild)}});function Me(t,n){if(n){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=n;return}}t.textContent=n}var Fe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rt=["Webkit","ms","Moz","O"];Object.keys(Fe).forEach(function(t){rt.forEach(function(n){n=n+t.charAt(0).toUpperCase()+t.substring(1),Fe[n]=Fe[t]})});function et(t,n,s){return n==null||typeof n=="boolean"||n===""?"":s||typeof n!="number"||n===0||Fe.hasOwnProperty(t)&&Fe[t]?(""+n).trim():n+"px"}function ke(t,n){t=t.style;for(var s in n)if(n.hasOwnProperty(s)){var l=s.indexOf("--")===0,c=et(s,n[s],l);s==="float"&&(s="cssFloat"),l?t.setProperty(s,c):t[s]=c}}var dt=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function it(t,n){if(n){if(dt[t]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(r(137,t));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(r(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(r(61))}if(n.style!=null&&typeof n.style!="object")throw Error(r(62))}}function _t(t,n){if(t.indexOf("-")===-1)return typeof n.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var H=null;function Ne(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ie=null,he=null,Ae=null;function Re(t){if(t=fs(t)){if(typeof ie!="function")throw Error(r(280));var n=t.stateNode;n&&(n=ho(n),ie(t.stateNode,t.type,n))}}function Mt(t){he?Ae?Ae.push(t):Ae=[t]:he=t}function It(){if(he){var t=he,n=Ae;if(Ae=he=null,Re(t),n)for(t=0;t<n.length;t++)Re(n[t])}}function tr(t,n){return t(n)}function ft(){}var qt=!1;function kr(t,n,s){if(qt)return t(n,s);qt=!0;try{return tr(t,n,s)}finally{qt=!1,(he!==null||Ae!==null)&&(ft(),It())}}function Vn(t,n){var s=t.stateNode;if(s===null)return null;var l=ho(s);if(l===null)return null;s=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,n,typeof s));return s}var Ki=!1;if(h)try{var Cr={};Object.defineProperty(Cr,"passive",{get:function(){Ki=!0}}),window.addEventListener("test",Cr,Cr),window.removeEventListener("test",Cr,Cr)}catch{Ki=!1}function qa(t,n,s,l,c,p,M,L,O){var Q=Array.prototype.slice.call(arguments,3);try{n.apply(s,Q)}catch(me){this.onError(me)}}var Gn=!1,Mi=null,gn=!1,Zi=null,$i={onError:function(t){Gn=!0,Mi=t}};function Xs(t,n,s,l,c,p,M,L,O){Gn=!1,Mi=null,qa.apply($i,arguments)}function Ys(t,n,s,l,c,p,M,L,O){if(Xs.apply(this,arguments),Gn){if(Gn){var Q=Mi;Gn=!1,Mi=null}else throw Error(r(198));gn||(gn=!0,Zi=Q)}}function vn(t){var n=t,s=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(s=n.return),t=n.return;while(t)}return n.tag===3?s:null}function qs(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function Ks(t){if(vn(t)!==t)throw Error(r(188))}function R(t){var n=t.alternate;if(!n){if(n=vn(t),n===null)throw Error(r(188));return n!==t?null:t}for(var s=t,l=n;;){var c=s.return;if(c===null)break;var p=c.alternate;if(p===null){if(l=c.return,l!==null){s=l;continue}break}if(c.child===p.child){for(p=c.child;p;){if(p===s)return Ks(c),t;if(p===l)return Ks(c),n;p=p.sibling}throw Error(r(188))}if(s.return!==l.return)s=c,l=p;else{for(var M=!1,L=c.child;L;){if(L===s){M=!0,s=c,l=p;break}if(L===l){M=!0,l=c,s=p;break}L=L.sibling}if(!M){for(L=p.child;L;){if(L===s){M=!0,s=p,l=c;break}if(L===l){M=!0,l=p,s=c;break}L=L.sibling}if(!M)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:n}function G(t){return t=R(t),t!==null?Z(t):null}function Z(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var n=Z(t);if(n!==null)return n;t=t.sibling}return null}var $=e.unstable_scheduleCallback,V=e.unstable_cancelCallback,ye=e.unstable_shouldYield,Ie=e.unstable_requestPaint,Te=e.unstable_now,We=e.unstable_getCurrentPriorityLevel,Ke=e.unstable_ImmediatePriority,Ze=e.unstable_UserBlockingPriority,Xe=e.unstable_NormalPriority,xt=e.unstable_LowPriority,At=e.unstable_IdlePriority,Rt=null,yt=null;function Ct(t){if(yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(Rt,t,void 0,(t.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:br,rr=Math.log,_n=Math.LN2;function br(t){return t>>>=0,t===0?32:31-(rr(t)/_n|0)|0}var Yr=64,Kt=4194304;function xn(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function bt(t,n){var s=t.pendingLanes;if(s===0)return 0;var l=0,c=t.suspendedLanes,p=t.pingedLanes,M=s&268435455;if(M!==0){var L=M&~c;L!==0?l=xn(L):(p&=M,p!==0&&(l=xn(p)))}else M=s&~c,M!==0?l=xn(M):p!==0&&(l=xn(p));if(l===0)return 0;if(n!==0&&n!==l&&(n&c)===0&&(c=l&-l,p=n&-n,c>=p||c===16&&(p&4194240)!==0))return n;if((l&4)!==0&&(l|=s&16),n=t.entangledLanes,n!==0)for(t=t.entanglements,n&=l;0<n;)s=31-Oe(n),c=1<<s,l|=t[s],n&=~c;return l}function un(t,n){switch(t){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ka(t,n){for(var s=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,p=t.pendingLanes;0<p;){var M=31-Oe(p),L=1<<M,O=c[M];O===-1?((L&s)===0||(L&l)!==0)&&(c[M]=un(L,n)):O<=n&&(t.expiredLanes|=L),p&=~L}}function ar(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Qi(){var t=Yr;return Yr<<=1,(Yr&4194240)===0&&(Yr=64),t}function Za(t){for(var n=[],s=0;31>s;s++)n.push(t);return n}function Wn(t,n,s){t.pendingLanes|=n,n!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,n=31-Oe(n),t[n]=s}function Ag(t,n){var s=t.pendingLanes&~n;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=n,t.mutableReadLanes&=n,t.entangledLanes&=n,n=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<s;){var c=31-Oe(s),p=1<<c;n[c]=0,l[c]=-1,t[c]=-1,s&=~p}}function Wl(t,n){var s=t.entangledLanes|=n;for(t=t.entanglements;s;){var l=31-Oe(s),c=1<<l;c&n|t[l]&n&&(t[l]|=n),s&=~c}}var Et=0;function ah(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var sh,jl,oh,lh,uh,Xl=!1,Zs=[],jn=null,Xn=null,Yn=null,$a=new Map,Qa=new Map,qn=[],Rg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ch(t,n){switch(t){case"focusin":case"focusout":jn=null;break;case"dragenter":case"dragleave":Xn=null;break;case"mouseover":case"mouseout":Yn=null;break;case"pointerover":case"pointerout":$a.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qa.delete(n.pointerId)}}function Ja(t,n,s,l,c,p){return t===null||t.nativeEvent!==p?(t={blockedOn:n,domEventName:s,eventSystemFlags:l,nativeEvent:p,targetContainers:[c]},n!==null&&(n=fs(n),n!==null&&jl(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function Cg(t,n,s,l,c){switch(n){case"focusin":return jn=Ja(jn,t,n,s,l,c),!0;case"dragenter":return Xn=Ja(Xn,t,n,s,l,c),!0;case"mouseover":return Yn=Ja(Yn,t,n,s,l,c),!0;case"pointerover":var p=c.pointerId;return $a.set(p,Ja($a.get(p)||null,t,n,s,l,c)),!0;case"gotpointercapture":return p=c.pointerId,Qa.set(p,Ja(Qa.get(p)||null,t,n,s,l,c)),!0}return!1}function dh(t){var n=Ei(t.target);if(n!==null){var s=vn(n);if(s!==null){if(n=s.tag,n===13){if(n=qs(s),n!==null){t.blockedOn=n,uh(t.priority,function(){oh(s)});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $s(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var s=ql(t.domEventName,t.eventSystemFlags,n[0],t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);H=l,s.target.dispatchEvent(l),H=null}else return n=fs(s),n!==null&&jl(n),t.blockedOn=s,!1;n.shift()}return!0}function hh(t,n,s){$s(t)&&s.delete(n)}function bg(){Xl=!1,jn!==null&&$s(jn)&&(jn=null),Xn!==null&&$s(Xn)&&(Xn=null),Yn!==null&&$s(Yn)&&(Yn=null),$a.forEach(hh),Qa.forEach(hh)}function es(t,n){t.blockedOn===n&&(t.blockedOn=null,Xl||(Xl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,bg)))}function ts(t){function n(c){return es(c,t)}if(0<Zs.length){es(Zs[0],t);for(var s=1;s<Zs.length;s++){var l=Zs[s];l.blockedOn===t&&(l.blockedOn=null)}}for(jn!==null&&es(jn,t),Xn!==null&&es(Xn,t),Yn!==null&&es(Yn,t),$a.forEach(n),Qa.forEach(n),s=0;s<qn.length;s++)l=qn[s],l.blockedOn===t&&(l.blockedOn=null);for(;0<qn.length&&(s=qn[0],s.blockedOn===null);)dh(s),s.blockedOn===null&&qn.shift()}var Ji=U.ReactCurrentBatchConfig,Qs=!0;function Pg(t,n,s,l){var c=Et,p=Ji.transition;Ji.transition=null;try{Et=1,Yl(t,n,s,l)}finally{Et=c,Ji.transition=p}}function Lg(t,n,s,l){var c=Et,p=Ji.transition;Ji.transition=null;try{Et=4,Yl(t,n,s,l)}finally{Et=c,Ji.transition=p}}function Yl(t,n,s,l){if(Qs){var c=ql(t,n,s,l);if(c===null)du(t,n,l,Js,s),ch(t,l);else if(Cg(c,t,n,s,l))l.stopPropagation();else if(ch(t,l),n&4&&-1<Rg.indexOf(t)){for(;c!==null;){var p=fs(c);if(p!==null&&sh(p),p=ql(t,n,s,l),p===null&&du(t,n,l,Js,s),p===c)break;c=p}c!==null&&l.stopPropagation()}else du(t,n,l,null,s)}}var Js=null;function ql(t,n,s,l){if(Js=null,t=Ne(l),t=Ei(t),t!==null)if(n=vn(t),n===null)t=null;else if(s=n.tag,s===13){if(t=qs(n),t!==null)return t;t=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null);return Js=t,null}function fh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(We()){case Ke:return 1;case Ze:return 4;case Xe:case xt:return 16;case At:return 536870912;default:return 16}default:return 16}}var Kn=null,Kl=null,eo=null;function ph(){if(eo)return eo;var t,n=Kl,s=n.length,l,c="value"in Kn?Kn.value:Kn.textContent,p=c.length;for(t=0;t<s&&n[t]===c[t];t++);var M=s-t;for(l=1;l<=M&&n[s-l]===c[p-l];l++);return eo=c.slice(t,1<l?1-l:void 0)}function to(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ro(){return!0}function mh(){return!1}function Pr(t){function n(s,l,c,p,M){this._reactName=s,this._targetInst=c,this.type=l,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var L in t)t.hasOwnProperty(L)&&(s=t[L],this[L]=s?s(p):p[L]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?ro:mh,this.isPropagationStopped=mh,this}return se(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=ro)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=ro)},persist:function(){},isPersistent:ro}),n}var ea={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zl=Pr(ea),rs=se({},ea,{view:0,detail:0}),Ng=Pr(rs),$l,Ql,ns,no=se({},rs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ns&&(ns&&t.type==="mousemove"?($l=t.screenX-ns.screenX,Ql=t.screenY-ns.screenY):Ql=$l=0,ns=t),$l)},movementY:function(t){return"movementY"in t?t.movementY:Ql}}),gh=Pr(no),Ug=se({},no,{dataTransfer:0}),Dg=Pr(Ug),Ig=se({},rs,{relatedTarget:0}),Jl=Pr(Ig),Og=se({},ea,{animationName:0,elapsedTime:0,pseudoElement:0}),Fg=Pr(Og),kg=se({},ea,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zg=Pr(kg),Bg=se({},ea,{data:0}),vh=Pr(Bg),Hg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wg(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Gg[t])?!!n[t]:!1}function eu(){return Wg}var jg=se({},rs,{key:function(t){if(t.key){var n=Hg[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=to(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Vg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eu,charCode:function(t){return t.type==="keypress"?to(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?to(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Xg=Pr(jg),Yg=se({},no,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_h=Pr(Yg),qg=se({},rs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eu}),Kg=Pr(qg),Zg=se({},ea,{propertyName:0,elapsedTime:0,pseudoElement:0}),$g=Pr(Zg),Qg=se({},no,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Jg=Pr(Qg),ev=[9,13,27,32],tu=h&&"CompositionEvent"in window,is=null;h&&"documentMode"in document&&(is=document.documentMode);var tv=h&&"TextEvent"in window&&!is,xh=h&&(!tu||is&&8<is&&11>=is),yh=" ",Sh=!1;function Mh(t,n){switch(t){case"keyup":return ev.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Eh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ta=!1;function rv(t,n){switch(t){case"compositionend":return Eh(n);case"keypress":return n.which!==32?null:(Sh=!0,yh);case"textInput":return t=n.data,t===yh&&Sh?null:t;default:return null}}function nv(t,n){if(ta)return t==="compositionend"||!tu&&Mh(t,n)?(t=ph(),eo=Kl=Kn=null,ta=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return xh&&n.locale!=="ko"?null:n.data;default:return null}}var iv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Th(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!iv[t.type]:n==="textarea"}function wh(t,n,s,l){Mt(l),n=lo(n,"onChange"),0<n.length&&(s=new Zl("onChange","change",null,s,l),t.push({event:s,listeners:n}))}var as=null,ss=null;function av(t){Gh(t,0)}function io(t){var n=sa(t);if(ct(n))return t}function sv(t,n){if(t==="change")return n}var Ah=!1;if(h){var ru;if(h){var nu="oninput"in document;if(!nu){var Rh=document.createElement("div");Rh.setAttribute("oninput","return;"),nu=typeof Rh.oninput=="function"}ru=nu}else ru=!1;Ah=ru&&(!document.documentMode||9<document.documentMode)}function Ch(){as&&(as.detachEvent("onpropertychange",bh),ss=as=null)}function bh(t){if(t.propertyName==="value"&&io(ss)){var n=[];wh(n,ss,t,Ne(t)),kr(av,n)}}function ov(t,n,s){t==="focusin"?(Ch(),as=n,ss=s,as.attachEvent("onpropertychange",bh)):t==="focusout"&&Ch()}function lv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return io(ss)}function uv(t,n){if(t==="click")return io(n)}function cv(t,n){if(t==="input"||t==="change")return io(n)}function dv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var qr=typeof Object.is=="function"?Object.is:dv;function os(t,n){if(qr(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var s=Object.keys(t),l=Object.keys(n);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var c=s[l];if(!f.call(n,c)||!qr(t[c],n[c]))return!1}return!0}function Ph(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Lh(t,n){var s=Ph(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=n&&l>=n)return{node:s,offset:n-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Ph(s)}}function Nh(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Nh(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Uh(){for(var t=window,n=F();n instanceof t.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)t=n.contentWindow;else break;n=F(t.document)}return n}function iu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function hv(t){var n=Uh(),s=t.focusedElem,l=t.selectionRange;if(n!==s&&s&&s.ownerDocument&&Nh(s.ownerDocument.documentElement,s)){if(l!==null&&iu(s)){if(n=l.start,t=l.end,t===void 0&&(t=n),"selectionStart"in s)s.selectionStart=n,s.selectionEnd=Math.min(t,s.value.length);else if(t=(n=s.ownerDocument||document)&&n.defaultView||window,t.getSelection){t=t.getSelection();var c=s.textContent.length,p=Math.min(l.start,c);l=l.end===void 0?p:Math.min(l.end,c),!t.extend&&p>l&&(c=l,l=p,p=c),c=Lh(s,p);var M=Lh(s,l);c&&M&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(n=n.createRange(),n.setStart(c.node,c.offset),t.removeAllRanges(),p>l?(t.addRange(n),t.extend(M.node,M.offset)):(n.setEnd(M.node,M.offset),t.addRange(n)))}}for(n=[],t=s;t=t.parentNode;)t.nodeType===1&&n.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<n.length;s++)t=n[s],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var fv=h&&"documentMode"in document&&11>=document.documentMode,ra=null,au=null,ls=null,su=!1;function Dh(t,n,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;su||ra==null||ra!==F(l)||(l=ra,"selectionStart"in l&&iu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ls&&os(ls,l)||(ls=l,l=lo(au,"onSelect"),0<l.length&&(n=new Zl("onSelect","select",null,n,s),t.push({event:n,listeners:l}),n.target=ra)))}function ao(t,n){var s={};return s[t.toLowerCase()]=n.toLowerCase(),s["Webkit"+t]="webkit"+n,s["Moz"+t]="moz"+n,s}var na={animationend:ao("Animation","AnimationEnd"),animationiteration:ao("Animation","AnimationIteration"),animationstart:ao("Animation","AnimationStart"),transitionend:ao("Transition","TransitionEnd")},ou={},Ih={};h&&(Ih=document.createElement("div").style,"AnimationEvent"in window||(delete na.animationend.animation,delete na.animationiteration.animation,delete na.animationstart.animation),"TransitionEvent"in window||delete na.transitionend.transition);function so(t){if(ou[t])return ou[t];if(!na[t])return t;var n=na[t],s;for(s in n)if(n.hasOwnProperty(s)&&s in Ih)return ou[t]=n[s];return t}var Oh=so("animationend"),Fh=so("animationiteration"),kh=so("animationstart"),zh=so("transitionend"),Bh=new Map,Hh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zn(t,n){Bh.set(t,n),u(n,[t])}for(var lu=0;lu<Hh.length;lu++){var uu=Hh[lu],pv=uu.toLowerCase(),mv=uu[0].toUpperCase()+uu.slice(1);Zn(pv,"on"+mv)}Zn(Oh,"onAnimationEnd"),Zn(Fh,"onAnimationIteration"),Zn(kh,"onAnimationStart"),Zn("dblclick","onDoubleClick"),Zn("focusin","onFocus"),Zn("focusout","onBlur"),Zn(zh,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var us="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gv=new Set("cancel close invalid load scroll toggle".split(" ").concat(us));function Vh(t,n,s){var l=t.type||"unknown-event";t.currentTarget=s,Ys(l,n,void 0,t),t.currentTarget=null}function Gh(t,n){n=(n&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],c=l.event;l=l.listeners;e:{var p=void 0;if(n)for(var M=l.length-1;0<=M;M--){var L=l[M],O=L.instance,Q=L.currentTarget;if(L=L.listener,O!==p&&c.isPropagationStopped())break e;Vh(c,L,Q),p=O}else for(M=0;M<l.length;M++){if(L=l[M],O=L.instance,Q=L.currentTarget,L=L.listener,O!==p&&c.isPropagationStopped())break e;Vh(c,L,Q),p=O}}}if(gn)throw t=Zi,gn=!1,Zi=null,t}function Lt(t,n){var s=n[vu];s===void 0&&(s=n[vu]=new Set);var l=t+"__bubble";s.has(l)||(Wh(n,t,2,!1),s.add(l))}function cu(t,n,s){var l=0;n&&(l|=4),Wh(s,t,l,n)}var oo="_reactListening"+Math.random().toString(36).slice(2);function cs(t){if(!t[oo]){t[oo]=!0,i.forEach(function(s){s!=="selectionchange"&&(gv.has(s)||cu(s,!1,t),cu(s,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[oo]||(n[oo]=!0,cu("selectionchange",!1,n))}}function Wh(t,n,s,l){switch(fh(n)){case 1:var c=Pg;break;case 4:c=Lg;break;default:c=Yl}s=c.bind(null,n,s,t),c=void 0,!Ki||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(n,s,{capture:!0,passive:c}):t.addEventListener(n,s,!0):c!==void 0?t.addEventListener(n,s,{passive:c}):t.addEventListener(n,s,!1)}function du(t,n,s,l,c){var p=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var L=l.stateNode.containerInfo;if(L===c||L.nodeType===8&&L.parentNode===c)break;if(M===4)for(M=l.return;M!==null;){var O=M.tag;if((O===3||O===4)&&(O=M.stateNode.containerInfo,O===c||O.nodeType===8&&O.parentNode===c))return;M=M.return}for(;L!==null;){if(M=Ei(L),M===null)return;if(O=M.tag,O===5||O===6){l=p=M;continue e}L=L.parentNode}}l=l.return}kr(function(){var Q=p,me=Ne(s),ve=[];e:{var fe=Bh.get(t);if(fe!==void 0){var Ue=Zl,Be=t;switch(t){case"keypress":if(to(s)===0)break e;case"keydown":case"keyup":Ue=Xg;break;case"focusin":Be="focus",Ue=Jl;break;case"focusout":Be="blur",Ue=Jl;break;case"beforeblur":case"afterblur":Ue=Jl;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=gh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=Dg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=Kg;break;case Oh:case Fh:case kh:Ue=Fg;break;case zh:Ue=$g;break;case"scroll":Ue=Ng;break;case"wheel":Ue=Jg;break;case"copy":case"cut":case"paste":Ue=zg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=_h}var He=(n&4)!==0,Bt=!He&&t==="scroll",W=He?fe!==null?fe+"Capture":null:fe;He=[];for(var z=Q,X;z!==null;){X=z;var Ee=X.stateNode;if(X.tag===5&&Ee!==null&&(X=Ee,W!==null&&(Ee=Vn(z,W),Ee!=null&&He.push(ds(z,Ee,X)))),Bt)break;z=z.return}0<He.length&&(fe=new Ue(fe,Be,null,s,me),ve.push({event:fe,listeners:He}))}}if((n&7)===0){e:{if(fe=t==="mouseover"||t==="pointerover",Ue=t==="mouseout"||t==="pointerout",fe&&s!==H&&(Be=s.relatedTarget||s.fromElement)&&(Ei(Be)||Be[yn]))break e;if((Ue||fe)&&(fe=me.window===me?me:(fe=me.ownerDocument)?fe.defaultView||fe.parentWindow:window,Ue?(Be=s.relatedTarget||s.toElement,Ue=Q,Be=Be?Ei(Be):null,Be!==null&&(Bt=vn(Be),Be!==Bt||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(Ue=null,Be=Q),Ue!==Be)){if(He=gh,Ee="onMouseLeave",W="onMouseEnter",z="mouse",(t==="pointerout"||t==="pointerover")&&(He=_h,Ee="onPointerLeave",W="onPointerEnter",z="pointer"),Bt=Ue==null?fe:sa(Ue),X=Be==null?fe:sa(Be),fe=new He(Ee,z+"leave",Ue,s,me),fe.target=Bt,fe.relatedTarget=X,Ee=null,Ei(me)===Q&&(He=new He(W,z+"enter",Be,s,me),He.target=X,He.relatedTarget=Bt,Ee=He),Bt=Ee,Ue&&Be)t:{for(He=Ue,W=Be,z=0,X=He;X;X=ia(X))z++;for(X=0,Ee=W;Ee;Ee=ia(Ee))X++;for(;0<z-X;)He=ia(He),z--;for(;0<X-z;)W=ia(W),X--;for(;z--;){if(He===W||W!==null&&He===W.alternate)break t;He=ia(He),W=ia(W)}He=null}else He=null;Ue!==null&&jh(ve,fe,Ue,He,!1),Be!==null&&Bt!==null&&jh(ve,Bt,Be,He,!0)}}e:{if(fe=Q?sa(Q):window,Ue=fe.nodeName&&fe.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&fe.type==="file")var Ve=sv;else if(Th(fe))if(Ah)Ve=cv;else{Ve=lv;var Ye=ov}else(Ue=fe.nodeName)&&Ue.toLowerCase()==="input"&&(fe.type==="checkbox"||fe.type==="radio")&&(Ve=uv);if(Ve&&(Ve=Ve(t,Q))){wh(ve,Ve,s,me);break e}Ye&&Ye(t,fe,Q),t==="focusout"&&(Ye=fe._wrapperState)&&Ye.controlled&&fe.type==="number"&&Je(fe,"number",fe.value)}switch(Ye=Q?sa(Q):window,t){case"focusin":(Th(Ye)||Ye.contentEditable==="true")&&(ra=Ye,au=Q,ls=null);break;case"focusout":ls=au=ra=null;break;case"mousedown":su=!0;break;case"contextmenu":case"mouseup":case"dragend":su=!1,Dh(ve,s,me);break;case"selectionchange":if(fv)break;case"keydown":case"keyup":Dh(ve,s,me)}var qe;if(tu)e:{switch(t){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else ta?Mh(t,s)&&(nt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(nt="onCompositionStart");nt&&(xh&&s.locale!=="ko"&&(ta||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&ta&&(qe=ph()):(Kn=me,Kl="value"in Kn?Kn.value:Kn.textContent,ta=!0)),Ye=lo(Q,nt),0<Ye.length&&(nt=new vh(nt,t,null,s,me),ve.push({event:nt,listeners:Ye}),qe?nt.data=qe:(qe=Eh(s),qe!==null&&(nt.data=qe)))),(qe=tv?rv(t,s):nv(t,s))&&(Q=lo(Q,"onBeforeInput"),0<Q.length&&(me=new vh("onBeforeInput","beforeinput",null,s,me),ve.push({event:me,listeners:Q}),me.data=qe))}Gh(ve,n)})}function ds(t,n,s){return{instance:t,listener:n,currentTarget:s}}function lo(t,n){for(var s=n+"Capture",l=[];t!==null;){var c=t,p=c.stateNode;c.tag===5&&p!==null&&(c=p,p=Vn(t,s),p!=null&&l.unshift(ds(t,p,c)),p=Vn(t,n),p!=null&&l.push(ds(t,p,c))),t=t.return}return l}function ia(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function jh(t,n,s,l,c){for(var p=n._reactName,M=[];s!==null&&s!==l;){var L=s,O=L.alternate,Q=L.stateNode;if(O!==null&&O===l)break;L.tag===5&&Q!==null&&(L=Q,c?(O=Vn(s,p),O!=null&&M.unshift(ds(s,O,L))):c||(O=Vn(s,p),O!=null&&M.push(ds(s,O,L)))),s=s.return}M.length!==0&&t.push({event:n,listeners:M})}var vv=/\r\n?/g,_v=/\u0000|\uFFFD/g;function Xh(t){return(typeof t=="string"?t:""+t).replace(vv,`
`).replace(_v,"")}function uo(t,n,s){if(n=Xh(n),Xh(t)!==n&&s)throw Error(r(425))}function co(){}var hu=null,fu=null;function pu(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var mu=typeof setTimeout=="function"?setTimeout:void 0,xv=typeof clearTimeout=="function"?clearTimeout:void 0,Yh=typeof Promise=="function"?Promise:void 0,yv=typeof queueMicrotask=="function"?queueMicrotask:typeof Yh<"u"?function(t){return Yh.resolve(null).then(t).catch(Sv)}:mu;function Sv(t){setTimeout(function(){throw t})}function gu(t,n){var s=n,l=0;do{var c=s.nextSibling;if(t.removeChild(s),c&&c.nodeType===8)if(s=c.data,s==="/$"){if(l===0){t.removeChild(c),ts(n);return}l--}else s!=="$"&&s!=="$?"&&s!=="$!"||l++;s=c}while(s);ts(n)}function $n(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return t}function qh(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(n===0)return t;n--}else s==="/$"&&n++}t=t.previousSibling}return null}var aa=Math.random().toString(36).slice(2),cn="__reactFiber$"+aa,hs="__reactProps$"+aa,yn="__reactContainer$"+aa,vu="__reactEvents$"+aa,Mv="__reactListeners$"+aa,Ev="__reactHandles$"+aa;function Ei(t){var n=t[cn];if(n)return n;for(var s=t.parentNode;s;){if(n=s[yn]||s[cn]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(t=qh(t);t!==null;){if(s=t[cn])return s;t=qh(t)}return n}t=s,s=t.parentNode}return null}function fs(t){return t=t[cn]||t[yn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function sa(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(r(33))}function ho(t){return t[hs]||null}var _u=[],oa=-1;function Qn(t){return{current:t}}function Nt(t){0>oa||(t.current=_u[oa],_u[oa]=null,oa--)}function Pt(t,n){oa++,_u[oa]=t.current,t.current=n}var Jn={},sr=Qn(Jn),gr=Qn(!1),Ti=Jn;function la(t,n){var s=t.type.contextTypes;if(!s)return Jn;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===n)return l.__reactInternalMemoizedMaskedChildContext;var c={},p;for(p in s)c[p]=n[p];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=n,t.__reactInternalMemoizedMaskedChildContext=c),c}function vr(t){return t=t.childContextTypes,t!=null}function fo(){Nt(gr),Nt(sr)}function Kh(t,n,s){if(sr.current!==Jn)throw Error(r(168));Pt(sr,n),Pt(gr,s)}function Zh(t,n,s){var l=t.stateNode;if(n=n.childContextTypes,typeof l.getChildContext!="function")return s;l=l.getChildContext();for(var c in l)if(!(c in n))throw Error(r(108,Se(t)||"Unknown",c));return se({},s,l)}function po(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Jn,Ti=sr.current,Pt(sr,t),Pt(gr,gr.current),!0}function $h(t,n,s){var l=t.stateNode;if(!l)throw Error(r(169));s?(t=Zh(t,n,Ti),l.__reactInternalMemoizedMergedChildContext=t,Nt(gr),Nt(sr),Pt(sr,t)):Nt(gr),Pt(gr,s)}var Sn=null,mo=!1,xu=!1;function Qh(t){Sn===null?Sn=[t]:Sn.push(t)}function Tv(t){mo=!0,Qh(t)}function ei(){if(!xu&&Sn!==null){xu=!0;var t=0,n=Et;try{var s=Sn;for(Et=1;t<s.length;t++){var l=s[t];do l=l(!0);while(l!==null)}Sn=null,mo=!1}catch(c){throw Sn!==null&&(Sn=Sn.slice(t+1)),$(Ke,ei),c}finally{Et=n,xu=!1}}return null}var ua=[],ca=0,go=null,vo=0,zr=[],Br=0,wi=null,Mn=1,En="";function Ai(t,n){ua[ca++]=vo,ua[ca++]=go,go=t,vo=n}function Jh(t,n,s){zr[Br++]=Mn,zr[Br++]=En,zr[Br++]=wi,wi=t;var l=Mn;t=En;var c=32-Oe(l)-1;l&=~(1<<c),s+=1;var p=32-Oe(n)+c;if(30<p){var M=c-c%5;p=(l&(1<<M)-1).toString(32),l>>=M,c-=M,Mn=1<<32-Oe(n)+c|s<<c|l,En=p+t}else Mn=1<<p|s<<c|l,En=t}function yu(t){t.return!==null&&(Ai(t,1),Jh(t,1,0))}function Su(t){for(;t===go;)go=ua[--ca],ua[ca]=null,vo=ua[--ca],ua[ca]=null;for(;t===wi;)wi=zr[--Br],zr[Br]=null,En=zr[--Br],zr[Br]=null,Mn=zr[--Br],zr[Br]=null}var Lr=null,Nr=null,Dt=!1,Kr=null;function ef(t,n){var s=Wr(5,null,null,0);s.elementType="DELETED",s.stateNode=n,s.return=t,n=t.deletions,n===null?(t.deletions=[s],t.flags|=16):n.push(s)}function tf(t,n){switch(t.tag){case 5:var s=t.type;return n=n.nodeType!==1||s.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(t.stateNode=n,Lr=t,Nr=$n(n.firstChild),!0):!1;case 6:return n=t.pendingProps===""||n.nodeType!==3?null:n,n!==null?(t.stateNode=n,Lr=t,Nr=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(s=wi!==null?{id:Mn,overflow:En}:null,t.memoizedState={dehydrated:n,treeContext:s,retryLane:1073741824},s=Wr(18,null,null,0),s.stateNode=n,s.return=t,t.child=s,Lr=t,Nr=null,!0):!1;default:return!1}}function Mu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Eu(t){if(Dt){var n=Nr;if(n){var s=n;if(!tf(t,n)){if(Mu(t))throw Error(r(418));n=$n(s.nextSibling);var l=Lr;n&&tf(t,n)?ef(l,s):(t.flags=t.flags&-4097|2,Dt=!1,Lr=t)}}else{if(Mu(t))throw Error(r(418));t.flags=t.flags&-4097|2,Dt=!1,Lr=t}}}function rf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Lr=t}function _o(t){if(t!==Lr)return!1;if(!Dt)return rf(t),Dt=!0,!1;var n;if((n=t.tag!==3)&&!(n=t.tag!==5)&&(n=t.type,n=n!=="head"&&n!=="body"&&!pu(t.type,t.memoizedProps)),n&&(n=Nr)){if(Mu(t))throw nf(),Error(r(418));for(;n;)ef(t,n),n=$n(n.nextSibling)}if(rf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"){if(n===0){Nr=$n(t.nextSibling);break e}n--}else s!=="$"&&s!=="$!"&&s!=="$?"||n++}t=t.nextSibling}Nr=null}}else Nr=Lr?$n(t.stateNode.nextSibling):null;return!0}function nf(){for(var t=Nr;t;)t=$n(t.nextSibling)}function da(){Nr=Lr=null,Dt=!1}function Tu(t){Kr===null?Kr=[t]:Kr.push(t)}var wv=U.ReactCurrentBatchConfig;function ps(t,n,s){if(t=s.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(r(309));var l=s.stateNode}if(!l)throw Error(r(147,t));var c=l,p=""+t;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===p?n.ref:(n=function(M){var L=c.refs;M===null?delete L[p]:L[p]=M},n._stringRef=p,n)}if(typeof t!="string")throw Error(r(284));if(!s._owner)throw Error(r(290,t))}return t}function xo(t,n){throw t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t))}function af(t){var n=t._init;return n(t._payload)}function sf(t){function n(W,z){if(t){var X=W.deletions;X===null?(W.deletions=[z],W.flags|=16):X.push(z)}}function s(W,z){if(!t)return null;for(;z!==null;)n(W,z),z=z.sibling;return null}function l(W,z){for(W=new Map;z!==null;)z.key!==null?W.set(z.key,z):W.set(z.index,z),z=z.sibling;return W}function c(W,z){return W=li(W,z),W.index=0,W.sibling=null,W}function p(W,z,X){return W.index=X,t?(X=W.alternate,X!==null?(X=X.index,X<z?(W.flags|=2,z):X):(W.flags|=2,z)):(W.flags|=1048576,z)}function M(W){return t&&W.alternate===null&&(W.flags|=2),W}function L(W,z,X,Ee){return z===null||z.tag!==6?(z=mc(X,W.mode,Ee),z.return=W,z):(z=c(z,X),z.return=W,z)}function O(W,z,X,Ee){var Ve=X.type;return Ve===I?me(W,z,X.props.children,Ee,X.key):z!==null&&(z.elementType===Ve||typeof Ve=="object"&&Ve!==null&&Ve.$$typeof===ee&&af(Ve)===z.type)?(Ee=c(z,X.props),Ee.ref=ps(W,z,X),Ee.return=W,Ee):(Ee=Go(X.type,X.key,X.props,null,W.mode,Ee),Ee.ref=ps(W,z,X),Ee.return=W,Ee)}function Q(W,z,X,Ee){return z===null||z.tag!==4||z.stateNode.containerInfo!==X.containerInfo||z.stateNode.implementation!==X.implementation?(z=gc(X,W.mode,Ee),z.return=W,z):(z=c(z,X.children||[]),z.return=W,z)}function me(W,z,X,Ee,Ve){return z===null||z.tag!==7?(z=Di(X,W.mode,Ee,Ve),z.return=W,z):(z=c(z,X),z.return=W,z)}function ve(W,z,X){if(typeof z=="string"&&z!==""||typeof z=="number")return z=mc(""+z,W.mode,X),z.return=W,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case te:return X=Go(z.type,z.key,z.props,null,W.mode,X),X.ref=ps(W,null,z),X.return=W,X;case B:return z=gc(z,W.mode,X),z.return=W,z;case ee:var Ee=z._init;return ve(W,Ee(z._payload),X)}if(P(z)||oe(z))return z=Di(z,W.mode,X,null),z.return=W,z;xo(W,z)}return null}function fe(W,z,X,Ee){var Ve=z!==null?z.key:null;if(typeof X=="string"&&X!==""||typeof X=="number")return Ve!==null?null:L(W,z,""+X,Ee);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case te:return X.key===Ve?O(W,z,X,Ee):null;case B:return X.key===Ve?Q(W,z,X,Ee):null;case ee:return Ve=X._init,fe(W,z,Ve(X._payload),Ee)}if(P(X)||oe(X))return Ve!==null?null:me(W,z,X,Ee,null);xo(W,X)}return null}function Ue(W,z,X,Ee,Ve){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return W=W.get(X)||null,L(z,W,""+Ee,Ve);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case te:return W=W.get(Ee.key===null?X:Ee.key)||null,O(z,W,Ee,Ve);case B:return W=W.get(Ee.key===null?X:Ee.key)||null,Q(z,W,Ee,Ve);case ee:var Ye=Ee._init;return Ue(W,z,X,Ye(Ee._payload),Ve)}if(P(Ee)||oe(Ee))return W=W.get(X)||null,me(z,W,Ee,Ve,null);xo(z,Ee)}return null}function Be(W,z,X,Ee){for(var Ve=null,Ye=null,qe=z,nt=z=0,Qt=null;qe!==null&&nt<X.length;nt++){qe.index>nt?(Qt=qe,qe=null):Qt=qe.sibling;var gt=fe(W,qe,X[nt],Ee);if(gt===null){qe===null&&(qe=Qt);break}t&&qe&&gt.alternate===null&&n(W,qe),z=p(gt,z,nt),Ye===null?Ve=gt:Ye.sibling=gt,Ye=gt,qe=Qt}if(nt===X.length)return s(W,qe),Dt&&Ai(W,nt),Ve;if(qe===null){for(;nt<X.length;nt++)qe=ve(W,X[nt],Ee),qe!==null&&(z=p(qe,z,nt),Ye===null?Ve=qe:Ye.sibling=qe,Ye=qe);return Dt&&Ai(W,nt),Ve}for(qe=l(W,qe);nt<X.length;nt++)Qt=Ue(qe,W,nt,X[nt],Ee),Qt!==null&&(t&&Qt.alternate!==null&&qe.delete(Qt.key===null?nt:Qt.key),z=p(Qt,z,nt),Ye===null?Ve=Qt:Ye.sibling=Qt,Ye=Qt);return t&&qe.forEach(function(ui){return n(W,ui)}),Dt&&Ai(W,nt),Ve}function He(W,z,X,Ee){var Ve=oe(X);if(typeof Ve!="function")throw Error(r(150));if(X=Ve.call(X),X==null)throw Error(r(151));for(var Ye=Ve=null,qe=z,nt=z=0,Qt=null,gt=X.next();qe!==null&&!gt.done;nt++,gt=X.next()){qe.index>nt?(Qt=qe,qe=null):Qt=qe.sibling;var ui=fe(W,qe,gt.value,Ee);if(ui===null){qe===null&&(qe=Qt);break}t&&qe&&ui.alternate===null&&n(W,qe),z=p(ui,z,nt),Ye===null?Ve=ui:Ye.sibling=ui,Ye=ui,qe=Qt}if(gt.done)return s(W,qe),Dt&&Ai(W,nt),Ve;if(qe===null){for(;!gt.done;nt++,gt=X.next())gt=ve(W,gt.value,Ee),gt!==null&&(z=p(gt,z,nt),Ye===null?Ve=gt:Ye.sibling=gt,Ye=gt);return Dt&&Ai(W,nt),Ve}for(qe=l(W,qe);!gt.done;nt++,gt=X.next())gt=Ue(qe,W,nt,gt.value,Ee),gt!==null&&(t&&gt.alternate!==null&&qe.delete(gt.key===null?nt:gt.key),z=p(gt,z,nt),Ye===null?Ve=gt:Ye.sibling=gt,Ye=gt);return t&&qe.forEach(function(i_){return n(W,i_)}),Dt&&Ai(W,nt),Ve}function Bt(W,z,X,Ee){if(typeof X=="object"&&X!==null&&X.type===I&&X.key===null&&(X=X.props.children),typeof X=="object"&&X!==null){switch(X.$$typeof){case te:e:{for(var Ve=X.key,Ye=z;Ye!==null;){if(Ye.key===Ve){if(Ve=X.type,Ve===I){if(Ye.tag===7){s(W,Ye.sibling),z=c(Ye,X.props.children),z.return=W,W=z;break e}}else if(Ye.elementType===Ve||typeof Ve=="object"&&Ve!==null&&Ve.$$typeof===ee&&af(Ve)===Ye.type){s(W,Ye.sibling),z=c(Ye,X.props),z.ref=ps(W,Ye,X),z.return=W,W=z;break e}s(W,Ye);break}else n(W,Ye);Ye=Ye.sibling}X.type===I?(z=Di(X.props.children,W.mode,Ee,X.key),z.return=W,W=z):(Ee=Go(X.type,X.key,X.props,null,W.mode,Ee),Ee.ref=ps(W,z,X),Ee.return=W,W=Ee)}return M(W);case B:e:{for(Ye=X.key;z!==null;){if(z.key===Ye)if(z.tag===4&&z.stateNode.containerInfo===X.containerInfo&&z.stateNode.implementation===X.implementation){s(W,z.sibling),z=c(z,X.children||[]),z.return=W,W=z;break e}else{s(W,z);break}else n(W,z);z=z.sibling}z=gc(X,W.mode,Ee),z.return=W,W=z}return M(W);case ee:return Ye=X._init,Bt(W,z,Ye(X._payload),Ee)}if(P(X))return Be(W,z,X,Ee);if(oe(X))return He(W,z,X,Ee);xo(W,X)}return typeof X=="string"&&X!==""||typeof X=="number"?(X=""+X,z!==null&&z.tag===6?(s(W,z.sibling),z=c(z,X),z.return=W,W=z):(s(W,z),z=mc(X,W.mode,Ee),z.return=W,W=z),M(W)):s(W,z)}return Bt}var ha=sf(!0),of=sf(!1),yo=Qn(null),So=null,fa=null,wu=null;function Au(){wu=fa=So=null}function Ru(t){var n=yo.current;Nt(yo),t._currentValue=n}function Cu(t,n,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===s)break;t=t.return}}function pa(t,n){So=t,wu=fa=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&n)!==0&&(_r=!0),t.firstContext=null)}function Hr(t){var n=t._currentValue;if(wu!==t)if(t={context:t,memoizedValue:n,next:null},fa===null){if(So===null)throw Error(r(308));fa=t,So.dependencies={lanes:0,firstContext:t}}else fa=fa.next=t;return n}var Ri=null;function bu(t){Ri===null?Ri=[t]:Ri.push(t)}function lf(t,n,s,l){var c=n.interleaved;return c===null?(s.next=s,bu(n)):(s.next=c.next,c.next=s),n.interleaved=s,Tn(t,l)}function Tn(t,n){t.lanes|=n;var s=t.alternate;for(s!==null&&(s.lanes|=n),s=t,t=t.return;t!==null;)t.childLanes|=n,s=t.alternate,s!==null&&(s.childLanes|=n),s=t,t=t.return;return s.tag===3?s.stateNode:null}var ti=!1;function Pu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wn(t,n){return{eventTime:t,lane:n,tag:0,payload:null,callback:null,next:null}}function ri(t,n,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(mt&2)!==0){var c=l.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),l.pending=n,Tn(t,s)}return c=l.interleaved,c===null?(n.next=n,bu(l)):(n.next=c.next,c.next=n),l.interleaved=n,Tn(t,s)}function Mo(t,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194240)!==0)){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,Wl(t,s)}}function cf(t,n){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var c=null,p=null;if(s=s.firstBaseUpdate,s!==null){do{var M={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};p===null?c=p=M:p=p.next=M,s=s.next}while(s!==null);p===null?c=p=n:p=p.next=n}else c=p=n;s={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:p,shared:l.shared,effects:l.effects},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=n:t.next=n,s.lastBaseUpdate=n}function Eo(t,n,s,l){var c=t.updateQueue;ti=!1;var p=c.firstBaseUpdate,M=c.lastBaseUpdate,L=c.shared.pending;if(L!==null){c.shared.pending=null;var O=L,Q=O.next;O.next=null,M===null?p=Q:M.next=Q,M=O;var me=t.alternate;me!==null&&(me=me.updateQueue,L=me.lastBaseUpdate,L!==M&&(L===null?me.firstBaseUpdate=Q:L.next=Q,me.lastBaseUpdate=O))}if(p!==null){var ve=c.baseState;M=0,me=Q=O=null,L=p;do{var fe=L.lane,Ue=L.eventTime;if((l&fe)===fe){me!==null&&(me=me.next={eventTime:Ue,lane:0,tag:L.tag,payload:L.payload,callback:L.callback,next:null});e:{var Be=t,He=L;switch(fe=n,Ue=s,He.tag){case 1:if(Be=He.payload,typeof Be=="function"){ve=Be.call(Ue,ve,fe);break e}ve=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=He.payload,fe=typeof Be=="function"?Be.call(Ue,ve,fe):Be,fe==null)break e;ve=se({},ve,fe);break e;case 2:ti=!0}}L.callback!==null&&L.lane!==0&&(t.flags|=64,fe=c.effects,fe===null?c.effects=[L]:fe.push(L))}else Ue={eventTime:Ue,lane:fe,tag:L.tag,payload:L.payload,callback:L.callback,next:null},me===null?(Q=me=Ue,O=ve):me=me.next=Ue,M|=fe;if(L=L.next,L===null){if(L=c.shared.pending,L===null)break;fe=L,L=fe.next,fe.next=null,c.lastBaseUpdate=fe,c.shared.pending=null}}while(!0);if(me===null&&(O=ve),c.baseState=O,c.firstBaseUpdate=Q,c.lastBaseUpdate=me,n=c.shared.interleaved,n!==null){c=n;do M|=c.lane,c=c.next;while(c!==n)}else p===null&&(c.shared.lanes=0);Pi|=M,t.lanes=M,t.memoizedState=ve}}function df(t,n,s){if(t=n.effects,n.effects=null,t!==null)for(n=0;n<t.length;n++){var l=t[n],c=l.callback;if(c!==null){if(l.callback=null,l=s,typeof c!="function")throw Error(r(191,c));c.call(l)}}}var ms={},dn=Qn(ms),gs=Qn(ms),vs=Qn(ms);function Ci(t){if(t===ms)throw Error(r(174));return t}function Lu(t,n){switch(Pt(vs,n),Pt(gs,t),Pt(dn,ms),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:we(null,"");break;default:t=t===8?n.parentNode:n,n=t.namespaceURI||null,t=t.tagName,n=we(n,t)}Nt(dn),Pt(dn,n)}function ma(){Nt(dn),Nt(gs),Nt(vs)}function hf(t){Ci(vs.current);var n=Ci(dn.current),s=we(n,t.type);n!==s&&(Pt(gs,t),Pt(dn,s))}function Nu(t){gs.current===t&&(Nt(dn),Nt(gs))}var Ot=Qn(0);function To(t){for(var n=t;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Uu=[];function Du(){for(var t=0;t<Uu.length;t++)Uu[t]._workInProgressVersionPrimary=null;Uu.length=0}var wo=U.ReactCurrentDispatcher,Iu=U.ReactCurrentBatchConfig,bi=0,Ft=null,Wt=null,Zt=null,Ao=!1,_s=!1,xs=0,Av=0;function or(){throw Error(r(321))}function Ou(t,n){if(n===null)return!1;for(var s=0;s<n.length&&s<t.length;s++)if(!qr(t[s],n[s]))return!1;return!0}function Fu(t,n,s,l,c,p){if(bi=p,Ft=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,wo.current=t===null||t.memoizedState===null?Pv:Lv,t=s(l,c),_s){p=0;do{if(_s=!1,xs=0,25<=p)throw Error(r(301));p+=1,Zt=Wt=null,n.updateQueue=null,wo.current=Nv,t=s(l,c)}while(_s)}if(wo.current=bo,n=Wt!==null&&Wt.next!==null,bi=0,Zt=Wt=Ft=null,Ao=!1,n)throw Error(r(300));return t}function ku(){var t=xs!==0;return xs=0,t}function hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zt===null?Ft.memoizedState=Zt=t:Zt=Zt.next=t,Zt}function Vr(){if(Wt===null){var t=Ft.alternate;t=t!==null?t.memoizedState:null}else t=Wt.next;var n=Zt===null?Ft.memoizedState:Zt.next;if(n!==null)Zt=n,Wt=t;else{if(t===null)throw Error(r(310));Wt=t,t={memoizedState:Wt.memoizedState,baseState:Wt.baseState,baseQueue:Wt.baseQueue,queue:Wt.queue,next:null},Zt===null?Ft.memoizedState=Zt=t:Zt=Zt.next=t}return Zt}function ys(t,n){return typeof n=="function"?n(t):n}function zu(t){var n=Vr(),s=n.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=Wt,c=l.baseQueue,p=s.pending;if(p!==null){if(c!==null){var M=c.next;c.next=p.next,p.next=M}l.baseQueue=c=p,s.pending=null}if(c!==null){p=c.next,l=l.baseState;var L=M=null,O=null,Q=p;do{var me=Q.lane;if((bi&me)===me)O!==null&&(O=O.next={lane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),l=Q.hasEagerState?Q.eagerState:t(l,Q.action);else{var ve={lane:me,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null};O===null?(L=O=ve,M=l):O=O.next=ve,Ft.lanes|=me,Pi|=me}Q=Q.next}while(Q!==null&&Q!==p);O===null?M=l:O.next=L,qr(l,n.memoizedState)||(_r=!0),n.memoizedState=l,n.baseState=M,n.baseQueue=O,s.lastRenderedState=l}if(t=s.interleaved,t!==null){c=t;do p=c.lane,Ft.lanes|=p,Pi|=p,c=c.next;while(c!==t)}else c===null&&(s.lanes=0);return[n.memoizedState,s.dispatch]}function Bu(t){var n=Vr(),s=n.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,c=s.pending,p=n.memoizedState;if(c!==null){s.pending=null;var M=c=c.next;do p=t(p,M.action),M=M.next;while(M!==c);qr(p,n.memoizedState)||(_r=!0),n.memoizedState=p,n.baseQueue===null&&(n.baseState=p),s.lastRenderedState=p}return[p,l]}function ff(){}function pf(t,n){var s=Ft,l=Vr(),c=n(),p=!qr(l.memoizedState,c);if(p&&(l.memoizedState=c,_r=!0),l=l.queue,Hu(vf.bind(null,s,l,t),[t]),l.getSnapshot!==n||p||Zt!==null&&Zt.memoizedState.tag&1){if(s.flags|=2048,Ss(9,gf.bind(null,s,l,c,n),void 0,null),$t===null)throw Error(r(349));(bi&30)!==0||mf(s,n,c)}return c}function mf(t,n,s){t.flags|=16384,t={getSnapshot:n,value:s},n=Ft.updateQueue,n===null?(n={lastEffect:null,stores:null},Ft.updateQueue=n,n.stores=[t]):(s=n.stores,s===null?n.stores=[t]:s.push(t))}function gf(t,n,s,l){n.value=s,n.getSnapshot=l,_f(n)&&xf(t)}function vf(t,n,s){return s(function(){_f(n)&&xf(t)})}function _f(t){var n=t.getSnapshot;t=t.value;try{var s=n();return!qr(t,s)}catch{return!0}}function xf(t){var n=Tn(t,1);n!==null&&Jr(n,t,1,-1)}function yf(t){var n=hn();return typeof t=="function"&&(t=t()),n.memoizedState=n.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ys,lastRenderedState:t},n.queue=t,t=t.dispatch=bv.bind(null,Ft,t),[n.memoizedState,t]}function Ss(t,n,s,l){return t={tag:t,create:n,destroy:s,deps:l,next:null},n=Ft.updateQueue,n===null?(n={lastEffect:null,stores:null},Ft.updateQueue=n,n.lastEffect=t.next=t):(s=n.lastEffect,s===null?n.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,n.lastEffect=t)),t}function Sf(){return Vr().memoizedState}function Ro(t,n,s,l){var c=hn();Ft.flags|=t,c.memoizedState=Ss(1|n,s,void 0,l===void 0?null:l)}function Co(t,n,s,l){var c=Vr();l=l===void 0?null:l;var p=void 0;if(Wt!==null){var M=Wt.memoizedState;if(p=M.destroy,l!==null&&Ou(l,M.deps)){c.memoizedState=Ss(n,s,p,l);return}}Ft.flags|=t,c.memoizedState=Ss(1|n,s,p,l)}function Mf(t,n){return Ro(8390656,8,t,n)}function Hu(t,n){return Co(2048,8,t,n)}function Ef(t,n){return Co(4,2,t,n)}function Tf(t,n){return Co(4,4,t,n)}function wf(t,n){if(typeof n=="function")return t=t(),n(t),function(){n(null)};if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Af(t,n,s){return s=s!=null?s.concat([t]):null,Co(4,4,wf.bind(null,n,t),s)}function Vu(){}function Rf(t,n){var s=Vr();n=n===void 0?null:n;var l=s.memoizedState;return l!==null&&n!==null&&Ou(n,l[1])?l[0]:(s.memoizedState=[t,n],t)}function Cf(t,n){var s=Vr();n=n===void 0?null:n;var l=s.memoizedState;return l!==null&&n!==null&&Ou(n,l[1])?l[0]:(t=t(),s.memoizedState=[t,n],t)}function bf(t,n,s){return(bi&21)===0?(t.baseState&&(t.baseState=!1,_r=!0),t.memoizedState=s):(qr(s,n)||(s=Qi(),Ft.lanes|=s,Pi|=s,t.baseState=!0),n)}function Rv(t,n){var s=Et;Et=s!==0&&4>s?s:4,t(!0);var l=Iu.transition;Iu.transition={};try{t(!1),n()}finally{Et=s,Iu.transition=l}}function Pf(){return Vr().memoizedState}function Cv(t,n,s){var l=si(t);if(s={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null},Lf(t))Nf(n,s);else if(s=lf(t,n,s,l),s!==null){var c=fr();Jr(s,t,l,c),Uf(s,n,l)}}function bv(t,n,s){var l=si(t),c={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null};if(Lf(t))Nf(n,c);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=n.lastRenderedReducer,p!==null))try{var M=n.lastRenderedState,L=p(M,s);if(c.hasEagerState=!0,c.eagerState=L,qr(L,M)){var O=n.interleaved;O===null?(c.next=c,bu(n)):(c.next=O.next,O.next=c),n.interleaved=c;return}}catch{}s=lf(t,n,c,l),s!==null&&(c=fr(),Jr(s,t,l,c),Uf(s,n,l))}}function Lf(t){var n=t.alternate;return t===Ft||n!==null&&n===Ft}function Nf(t,n){_s=Ao=!0;var s=t.pending;s===null?n.next=n:(n.next=s.next,s.next=n),t.pending=n}function Uf(t,n,s){if((s&4194240)!==0){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,Wl(t,s)}}var bo={readContext:Hr,useCallback:or,useContext:or,useEffect:or,useImperativeHandle:or,useInsertionEffect:or,useLayoutEffect:or,useMemo:or,useReducer:or,useRef:or,useState:or,useDebugValue:or,useDeferredValue:or,useTransition:or,useMutableSource:or,useSyncExternalStore:or,useId:or,unstable_isNewReconciler:!1},Pv={readContext:Hr,useCallback:function(t,n){return hn().memoizedState=[t,n===void 0?null:n],t},useContext:Hr,useEffect:Mf,useImperativeHandle:function(t,n,s){return s=s!=null?s.concat([t]):null,Ro(4194308,4,wf.bind(null,n,t),s)},useLayoutEffect:function(t,n){return Ro(4194308,4,t,n)},useInsertionEffect:function(t,n){return Ro(4,2,t,n)},useMemo:function(t,n){var s=hn();return n=n===void 0?null:n,t=t(),s.memoizedState=[t,n],t},useReducer:function(t,n,s){var l=hn();return n=s!==void 0?s(n):n,l.memoizedState=l.baseState=n,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},l.queue=t,t=t.dispatch=Cv.bind(null,Ft,t),[l.memoizedState,t]},useRef:function(t){var n=hn();return t={current:t},n.memoizedState=t},useState:yf,useDebugValue:Vu,useDeferredValue:function(t){return hn().memoizedState=t},useTransition:function(){var t=yf(!1),n=t[0];return t=Rv.bind(null,t[1]),hn().memoizedState=t,[n,t]},useMutableSource:function(){},useSyncExternalStore:function(t,n,s){var l=Ft,c=hn();if(Dt){if(s===void 0)throw Error(r(407));s=s()}else{if(s=n(),$t===null)throw Error(r(349));(bi&30)!==0||mf(l,n,s)}c.memoizedState=s;var p={value:s,getSnapshot:n};return c.queue=p,Mf(vf.bind(null,l,p,t),[t]),l.flags|=2048,Ss(9,gf.bind(null,l,p,s,n),void 0,null),s},useId:function(){var t=hn(),n=$t.identifierPrefix;if(Dt){var s=En,l=Mn;s=(l&~(1<<32-Oe(l)-1)).toString(32)+s,n=":"+n+"R"+s,s=xs++,0<s&&(n+="H"+s.toString(32)),n+=":"}else s=Av++,n=":"+n+"r"+s.toString(32)+":";return t.memoizedState=n},unstable_isNewReconciler:!1},Lv={readContext:Hr,useCallback:Rf,useContext:Hr,useEffect:Hu,useImperativeHandle:Af,useInsertionEffect:Ef,useLayoutEffect:Tf,useMemo:Cf,useReducer:zu,useRef:Sf,useState:function(){return zu(ys)},useDebugValue:Vu,useDeferredValue:function(t){var n=Vr();return bf(n,Wt.memoizedState,t)},useTransition:function(){var t=zu(ys)[0],n=Vr().memoizedState;return[t,n]},useMutableSource:ff,useSyncExternalStore:pf,useId:Pf,unstable_isNewReconciler:!1},Nv={readContext:Hr,useCallback:Rf,useContext:Hr,useEffect:Hu,useImperativeHandle:Af,useInsertionEffect:Ef,useLayoutEffect:Tf,useMemo:Cf,useReducer:Bu,useRef:Sf,useState:function(){return Bu(ys)},useDebugValue:Vu,useDeferredValue:function(t){var n=Vr();return Wt===null?n.memoizedState=t:bf(n,Wt.memoizedState,t)},useTransition:function(){var t=Bu(ys)[0],n=Vr().memoizedState;return[t,n]},useMutableSource:ff,useSyncExternalStore:pf,useId:Pf,unstable_isNewReconciler:!1};function Zr(t,n){if(t&&t.defaultProps){n=se({},n),t=t.defaultProps;for(var s in t)n[s]===void 0&&(n[s]=t[s]);return n}return n}function Gu(t,n,s,l){n=t.memoizedState,s=s(l,n),s=s==null?n:se({},n,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Po={isMounted:function(t){return(t=t._reactInternals)?vn(t)===t:!1},enqueueSetState:function(t,n,s){t=t._reactInternals;var l=fr(),c=si(t),p=wn(l,c);p.payload=n,s!=null&&(p.callback=s),n=ri(t,p,c),n!==null&&(Jr(n,t,c,l),Mo(n,t,c))},enqueueReplaceState:function(t,n,s){t=t._reactInternals;var l=fr(),c=si(t),p=wn(l,c);p.tag=1,p.payload=n,s!=null&&(p.callback=s),n=ri(t,p,c),n!==null&&(Jr(n,t,c,l),Mo(n,t,c))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var s=fr(),l=si(t),c=wn(s,l);c.tag=2,n!=null&&(c.callback=n),n=ri(t,c,l),n!==null&&(Jr(n,t,l,s),Mo(n,t,l))}};function Df(t,n,s,l,c,p,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,M):n.prototype&&n.prototype.isPureReactComponent?!os(s,l)||!os(c,p):!0}function If(t,n,s){var l=!1,c=Jn,p=n.contextType;return typeof p=="object"&&p!==null?p=Hr(p):(c=vr(n)?Ti:sr.current,l=n.contextTypes,p=(l=l!=null)?la(t,c):Jn),n=new n(s,p),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Po,t.stateNode=n,n._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=p),n}function Of(t,n,s,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,l),n.state!==t&&Po.enqueueReplaceState(n,n.state,null)}function Wu(t,n,s,l){var c=t.stateNode;c.props=s,c.state=t.memoizedState,c.refs={},Pu(t);var p=n.contextType;typeof p=="object"&&p!==null?c.context=Hr(p):(p=vr(n)?Ti:sr.current,c.context=la(t,p)),c.state=t.memoizedState,p=n.getDerivedStateFromProps,typeof p=="function"&&(Gu(t,n,p,s),c.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(n=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),n!==c.state&&Po.enqueueReplaceState(c,c.state,null),Eo(t,s,c,l),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function ga(t,n){try{var s="",l=n;do s+=le(l),l=l.return;while(l);var c=s}catch(p){c=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:n,stack:c,digest:null}}function ju(t,n,s){return{value:t,source:null,stack:s??null,digest:n??null}}function Xu(t,n){try{console.error(n.value)}catch(s){setTimeout(function(){throw s})}}var Uv=typeof WeakMap=="function"?WeakMap:Map;function Ff(t,n,s){s=wn(-1,s),s.tag=3,s.payload={element:null};var l=n.value;return s.callback=function(){Fo||(Fo=!0,oc=l),Xu(t,n)},s}function kf(t,n,s){s=wn(-1,s),s.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=n.value;s.payload=function(){return l(c)},s.callback=function(){Xu(t,n)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(s.callback=function(){Xu(t,n),typeof l!="function"&&(ii===null?ii=new Set([this]):ii.add(this));var M=n.stack;this.componentDidCatch(n.value,{componentStack:M!==null?M:""})}),s}function zf(t,n,s){var l=t.pingCache;if(l===null){l=t.pingCache=new Uv;var c=new Set;l.set(n,c)}else c=l.get(n),c===void 0&&(c=new Set,l.set(n,c));c.has(s)||(c.add(s),t=Yv.bind(null,t,n,s),n.then(t,t))}function Bf(t){do{var n;if((n=t.tag===13)&&(n=t.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return t;t=t.return}while(t!==null);return null}function Hf(t,n,s,l,c){return(t.mode&1)===0?(t===n?t.flags|=65536:(t.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(n=wn(-1,1),n.tag=2,ri(s,n,1))),s.lanes|=1),t):(t.flags|=65536,t.lanes=c,t)}var Dv=U.ReactCurrentOwner,_r=!1;function hr(t,n,s,l){n.child=t===null?of(n,null,s,l):ha(n,t.child,s,l)}function Vf(t,n,s,l,c){s=s.render;var p=n.ref;return pa(n,c),l=Fu(t,n,s,l,p,c),s=ku(),t!==null&&!_r?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~c,An(t,n,c)):(Dt&&s&&yu(n),n.flags|=1,hr(t,n,l,c),n.child)}function Gf(t,n,s,l,c){if(t===null){var p=s.type;return typeof p=="function"&&!pc(p)&&p.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(n.tag=15,n.type=p,Wf(t,n,p,l,c)):(t=Go(s.type,null,l,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(p=t.child,(t.lanes&c)===0){var M=p.memoizedProps;if(s=s.compare,s=s!==null?s:os,s(M,l)&&t.ref===n.ref)return An(t,n,c)}return n.flags|=1,t=li(p,l),t.ref=n.ref,t.return=n,n.child=t}function Wf(t,n,s,l,c){if(t!==null){var p=t.memoizedProps;if(os(p,l)&&t.ref===n.ref)if(_r=!1,n.pendingProps=l=p,(t.lanes&c)!==0)(t.flags&131072)!==0&&(_r=!0);else return n.lanes=t.lanes,An(t,n,c)}return Yu(t,n,s,l,c)}function jf(t,n,s){var l=n.pendingProps,c=l.children,p=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pt(_a,Ur),Ur|=s;else{if((s&1073741824)===0)return t=p!==null?p.baseLanes|s:s,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:t,cachePool:null,transitions:null},n.updateQueue=null,Pt(_a,Ur),Ur|=t,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:s,Pt(_a,Ur),Ur|=l}else p!==null?(l=p.baseLanes|s,n.memoizedState=null):l=s,Pt(_a,Ur),Ur|=l;return hr(t,n,c,s),n.child}function Xf(t,n){var s=n.ref;(t===null&&s!==null||t!==null&&t.ref!==s)&&(n.flags|=512,n.flags|=2097152)}function Yu(t,n,s,l,c){var p=vr(s)?Ti:sr.current;return p=la(n,p),pa(n,c),s=Fu(t,n,s,l,p,c),l=ku(),t!==null&&!_r?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~c,An(t,n,c)):(Dt&&l&&yu(n),n.flags|=1,hr(t,n,s,c),n.child)}function Yf(t,n,s,l,c){if(vr(s)){var p=!0;po(n)}else p=!1;if(pa(n,c),n.stateNode===null)No(t,n),If(n,s,l),Wu(n,s,l,c),l=!0;else if(t===null){var M=n.stateNode,L=n.memoizedProps;M.props=L;var O=M.context,Q=s.contextType;typeof Q=="object"&&Q!==null?Q=Hr(Q):(Q=vr(s)?Ti:sr.current,Q=la(n,Q));var me=s.getDerivedStateFromProps,ve=typeof me=="function"||typeof M.getSnapshotBeforeUpdate=="function";ve||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==l||O!==Q)&&Of(n,M,l,Q),ti=!1;var fe=n.memoizedState;M.state=fe,Eo(n,l,M,c),O=n.memoizedState,L!==l||fe!==O||gr.current||ti?(typeof me=="function"&&(Gu(n,s,me,l),O=n.memoizedState),(L=ti||Df(n,s,L,l,fe,O,Q))?(ve||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(n.flags|=4194308)):(typeof M.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=O),M.props=l,M.state=O,M.context=Q,l=L):(typeof M.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{M=n.stateNode,uf(t,n),L=n.memoizedProps,Q=n.type===n.elementType?L:Zr(n.type,L),M.props=Q,ve=n.pendingProps,fe=M.context,O=s.contextType,typeof O=="object"&&O!==null?O=Hr(O):(O=vr(s)?Ti:sr.current,O=la(n,O));var Ue=s.getDerivedStateFromProps;(me=typeof Ue=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==ve||fe!==O)&&Of(n,M,l,O),ti=!1,fe=n.memoizedState,M.state=fe,Eo(n,l,M,c);var Be=n.memoizedState;L!==ve||fe!==Be||gr.current||ti?(typeof Ue=="function"&&(Gu(n,s,Ue,l),Be=n.memoizedState),(Q=ti||Df(n,s,Q,l,fe,Be,O)||!1)?(me||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,Be,O),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,Be,O)),typeof M.componentDidUpdate=="function"&&(n.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof M.componentDidUpdate!="function"||L===t.memoizedProps&&fe===t.memoizedState||(n.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&fe===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=Be),M.props=l,M.state=Be,M.context=O,l=Q):(typeof M.componentDidUpdate!="function"||L===t.memoizedProps&&fe===t.memoizedState||(n.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&fe===t.memoizedState||(n.flags|=1024),l=!1)}return qu(t,n,s,l,p,c)}function qu(t,n,s,l,c,p){Xf(t,n);var M=(n.flags&128)!==0;if(!l&&!M)return c&&$h(n,s,!1),An(t,n,p);l=n.stateNode,Dv.current=n;var L=M&&typeof s.getDerivedStateFromError!="function"?null:l.render();return n.flags|=1,t!==null&&M?(n.child=ha(n,t.child,null,p),n.child=ha(n,null,L,p)):hr(t,n,L,p),n.memoizedState=l.state,c&&$h(n,s,!0),n.child}function qf(t){var n=t.stateNode;n.pendingContext?Kh(t,n.pendingContext,n.pendingContext!==n.context):n.context&&Kh(t,n.context,!1),Lu(t,n.containerInfo)}function Kf(t,n,s,l,c){return da(),Tu(c),n.flags|=256,hr(t,n,s,l),n.child}var Ku={dehydrated:null,treeContext:null,retryLane:0};function Zu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Zf(t,n,s){var l=n.pendingProps,c=Ot.current,p=!1,M=(n.flags&128)!==0,L;if((L=M)||(L=t!==null&&t.memoizedState===null?!1:(c&2)!==0),L?(p=!0,n.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Pt(Ot,c&1),t===null)return Eu(n),t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((n.mode&1)===0?n.lanes=1:t.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(M=l.children,t=l.fallback,p?(l=n.mode,p=n.child,M={mode:"hidden",children:M},(l&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=M):p=Wo(M,l,0,null),t=Di(t,l,s,null),p.return=n,t.return=n,p.sibling=t,n.child=p,n.child.memoizedState=Zu(s),n.memoizedState=Ku,t):$u(n,M));if(c=t.memoizedState,c!==null&&(L=c.dehydrated,L!==null))return Iv(t,n,M,l,L,c,s);if(p){p=l.fallback,M=n.mode,c=t.child,L=c.sibling;var O={mode:"hidden",children:l.children};return(M&1)===0&&n.child!==c?(l=n.child,l.childLanes=0,l.pendingProps=O,n.deletions=null):(l=li(c,O),l.subtreeFlags=c.subtreeFlags&14680064),L!==null?p=li(L,p):(p=Di(p,M,s,null),p.flags|=2),p.return=n,l.return=n,l.sibling=p,n.child=l,l=p,p=n.child,M=t.child.memoizedState,M=M===null?Zu(s):{baseLanes:M.baseLanes|s,cachePool:null,transitions:M.transitions},p.memoizedState=M,p.childLanes=t.childLanes&~s,n.memoizedState=Ku,l}return p=t.child,t=p.sibling,l=li(p,{mode:"visible",children:l.children}),(n.mode&1)===0&&(l.lanes=s),l.return=n,l.sibling=null,t!==null&&(s=n.deletions,s===null?(n.deletions=[t],n.flags|=16):s.push(t)),n.child=l,n.memoizedState=null,l}function $u(t,n){return n=Wo({mode:"visible",children:n},t.mode,0,null),n.return=t,t.child=n}function Lo(t,n,s,l){return l!==null&&Tu(l),ha(n,t.child,null,s),t=$u(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Iv(t,n,s,l,c,p,M){if(s)return n.flags&256?(n.flags&=-257,l=ju(Error(r(422))),Lo(t,n,M,l)):n.memoizedState!==null?(n.child=t.child,n.flags|=128,null):(p=l.fallback,c=n.mode,l=Wo({mode:"visible",children:l.children},c,0,null),p=Di(p,c,M,null),p.flags|=2,l.return=n,p.return=n,l.sibling=p,n.child=l,(n.mode&1)!==0&&ha(n,t.child,null,M),n.child.memoizedState=Zu(M),n.memoizedState=Ku,p);if((n.mode&1)===0)return Lo(t,n,M,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var L=l.dgst;return l=L,p=Error(r(419)),l=ju(p,l,void 0),Lo(t,n,M,l)}if(L=(M&t.childLanes)!==0,_r||L){if(l=$t,l!==null){switch(M&-M){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(l.suspendedLanes|M))!==0?0:c,c!==0&&c!==p.retryLane&&(p.retryLane=c,Tn(t,c),Jr(l,t,c,-1))}return fc(),l=ju(Error(r(421))),Lo(t,n,M,l)}return c.data==="$?"?(n.flags|=128,n.child=t.child,n=qv.bind(null,t),c._reactRetry=n,null):(t=p.treeContext,Nr=$n(c.nextSibling),Lr=n,Dt=!0,Kr=null,t!==null&&(zr[Br++]=Mn,zr[Br++]=En,zr[Br++]=wi,Mn=t.id,En=t.overflow,wi=n),n=$u(n,l.children),n.flags|=4096,n)}function $f(t,n,s){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),Cu(t.return,n,s)}function Qu(t,n,s,l,c){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:c}:(p.isBackwards=n,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=s,p.tailMode=c)}function Qf(t,n,s){var l=n.pendingProps,c=l.revealOrder,p=l.tail;if(hr(t,n,l.children,s),l=Ot.current,(l&2)!==0)l=l&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$f(t,s,n);else if(t.tag===19)$f(t,s,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Pt(Ot,l),(n.mode&1)===0)n.memoizedState=null;else switch(c){case"forwards":for(s=n.child,c=null;s!==null;)t=s.alternate,t!==null&&To(t)===null&&(c=s),s=s.sibling;s=c,s===null?(c=n.child,n.child=null):(c=s.sibling,s.sibling=null),Qu(n,!1,c,s,p);break;case"backwards":for(s=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&To(t)===null){n.child=c;break}t=c.sibling,c.sibling=s,s=c,c=t}Qu(n,!0,s,null,p);break;case"together":Qu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function No(t,n){(n.mode&1)===0&&t!==null&&(t.alternate=null,n.alternate=null,n.flags|=2)}function An(t,n,s){if(t!==null&&(n.dependencies=t.dependencies),Pi|=n.lanes,(s&n.childLanes)===0)return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,s=li(t,t.pendingProps),n.child=s,s.return=n;t.sibling!==null;)t=t.sibling,s=s.sibling=li(t,t.pendingProps),s.return=n;s.sibling=null}return n.child}function Ov(t,n,s){switch(n.tag){case 3:qf(n),da();break;case 5:hf(n);break;case 1:vr(n.type)&&po(n);break;case 4:Lu(n,n.stateNode.containerInfo);break;case 10:var l=n.type._context,c=n.memoizedProps.value;Pt(yo,l._currentValue),l._currentValue=c;break;case 13:if(l=n.memoizedState,l!==null)return l.dehydrated!==null?(Pt(Ot,Ot.current&1),n.flags|=128,null):(s&n.child.childLanes)!==0?Zf(t,n,s):(Pt(Ot,Ot.current&1),t=An(t,n,s),t!==null?t.sibling:null);Pt(Ot,Ot.current&1);break;case 19:if(l=(s&n.childLanes)!==0,(t.flags&128)!==0){if(l)return Qf(t,n,s);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Pt(Ot,Ot.current),l)break;return null;case 22:case 23:return n.lanes=0,jf(t,n,s)}return An(t,n,s)}var Jf,Ju,ep,tp;Jf=function(t,n){for(var s=n.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},Ju=function(){},ep=function(t,n,s,l){var c=t.memoizedProps;if(c!==l){t=n.stateNode,Ci(dn.current);var p=null;switch(s){case"input":c=er(t,c),l=er(t,l),p=[];break;case"select":c=se({},c,{value:void 0}),l=se({},l,{value:void 0}),p=[];break;case"textarea":c=j(t,c),l=j(t,l),p=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=co)}it(s,l);var M;s=null;for(Q in c)if(!l.hasOwnProperty(Q)&&c.hasOwnProperty(Q)&&c[Q]!=null)if(Q==="style"){var L=c[Q];for(M in L)L.hasOwnProperty(M)&&(s||(s={}),s[M]="")}else Q!=="dangerouslySetInnerHTML"&&Q!=="children"&&Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&Q!=="autoFocus"&&(o.hasOwnProperty(Q)?p||(p=[]):(p=p||[]).push(Q,null));for(Q in l){var O=l[Q];if(L=c?.[Q],l.hasOwnProperty(Q)&&O!==L&&(O!=null||L!=null))if(Q==="style")if(L){for(M in L)!L.hasOwnProperty(M)||O&&O.hasOwnProperty(M)||(s||(s={}),s[M]="");for(M in O)O.hasOwnProperty(M)&&L[M]!==O[M]&&(s||(s={}),s[M]=O[M])}else s||(p||(p=[]),p.push(Q,s)),s=O;else Q==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,L=L?L.__html:void 0,O!=null&&L!==O&&(p=p||[]).push(Q,O)):Q==="children"?typeof O!="string"&&typeof O!="number"||(p=p||[]).push(Q,""+O):Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&(o.hasOwnProperty(Q)?(O!=null&&Q==="onScroll"&&Lt("scroll",t),p||L===O||(p=[])):(p=p||[]).push(Q,O))}s&&(p=p||[]).push("style",s);var Q=p;(n.updateQueue=Q)&&(n.flags|=4)}},tp=function(t,n,s,l){s!==l&&(n.flags|=4)};function Ms(t,n){if(!Dt)switch(t.tailMode){case"hidden":n=t.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function lr(t){var n=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(n)for(var c=t.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=s,n}function Fv(t,n,s){var l=n.pendingProps;switch(Su(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lr(n),null;case 1:return vr(n.type)&&fo(),lr(n),null;case 3:return l=n.stateNode,ma(),Nt(gr),Nt(sr),Du(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(_o(n)?n.flags|=4:t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Kr!==null&&(cc(Kr),Kr=null))),Ju(t,n),lr(n),null;case 5:Nu(n);var c=Ci(vs.current);if(s=n.type,t!==null&&n.stateNode!=null)ep(t,n,s,l,c),t.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!l){if(n.stateNode===null)throw Error(r(166));return lr(n),null}if(t=Ci(dn.current),_o(n)){l=n.stateNode,s=n.type;var p=n.memoizedProps;switch(l[cn]=n,l[hs]=p,t=(n.mode&1)!==0,s){case"dialog":Lt("cancel",l),Lt("close",l);break;case"iframe":case"object":case"embed":Lt("load",l);break;case"video":case"audio":for(c=0;c<us.length;c++)Lt(us[c],l);break;case"source":Lt("error",l);break;case"img":case"image":case"link":Lt("error",l),Lt("load",l);break;case"details":Lt("toggle",l);break;case"input":lt(l,p),Lt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},Lt("invalid",l);break;case"textarea":de(l,p),Lt("invalid",l)}it(s,p),c=null;for(var M in p)if(p.hasOwnProperty(M)){var L=p[M];M==="children"?typeof L=="string"?l.textContent!==L&&(p.suppressHydrationWarning!==!0&&uo(l.textContent,L,t),c=["children",L]):typeof L=="number"&&l.textContent!==""+L&&(p.suppressHydrationWarning!==!0&&uo(l.textContent,L,t),c=["children",""+L]):o.hasOwnProperty(M)&&L!=null&&M==="onScroll"&&Lt("scroll",l)}switch(s){case"input":pt(l),Tt(l,p,!0);break;case"textarea":pt(l),ue(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=co)}l=c,n.updateQueue=l,l!==null&&(n.flags|=4)}else{M=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ge(s)),t==="http://www.w3.org/1999/xhtml"?s==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(s,{is:l.is}):(t=M.createElement(s),s==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,s),t[cn]=n,t[hs]=l,Jf(t,n,!1,!1),n.stateNode=t;e:{switch(M=_t(s,l),s){case"dialog":Lt("cancel",t),Lt("close",t),c=l;break;case"iframe":case"object":case"embed":Lt("load",t),c=l;break;case"video":case"audio":for(c=0;c<us.length;c++)Lt(us[c],t);c=l;break;case"source":Lt("error",t),c=l;break;case"img":case"image":case"link":Lt("error",t),Lt("load",t),c=l;break;case"details":Lt("toggle",t),c=l;break;case"input":lt(t,l),c=er(t,l),Lt("invalid",t);break;case"option":c=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},c=se({},l,{value:void 0}),Lt("invalid",t);break;case"textarea":de(t,l),c=j(t,l),Lt("invalid",t);break;default:c=l}it(s,c),L=c;for(p in L)if(L.hasOwnProperty(p)){var O=L[p];p==="style"?ke(t,O):p==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&ut(t,O)):p==="children"?typeof O=="string"?(s!=="textarea"||O!=="")&&Me(t,O):typeof O=="number"&&Me(t,""+O):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?O!=null&&p==="onScroll"&&Lt("scroll",t):O!=null&&b(t,p,O,M))}switch(s){case"input":pt(t),Tt(t,l,!1);break;case"textarea":pt(t),ue(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Pe(l.value));break;case"select":t.multiple=!!l.multiple,p=l.value,p!=null?T(t,!!l.multiple,p,!1):l.defaultValue!=null&&T(t,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=co)}switch(s){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return lr(n),null;case 6:if(t&&n.stateNode!=null)tp(t,n,t.memoizedProps,l);else{if(typeof l!="string"&&n.stateNode===null)throw Error(r(166));if(s=Ci(vs.current),Ci(dn.current),_o(n)){if(l=n.stateNode,s=n.memoizedProps,l[cn]=n,(p=l.nodeValue!==s)&&(t=Lr,t!==null))switch(t.tag){case 3:uo(l.nodeValue,s,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&uo(l.nodeValue,s,(t.mode&1)!==0)}p&&(n.flags|=4)}else l=(s.nodeType===9?s:s.ownerDocument).createTextNode(l),l[cn]=n,n.stateNode=l}return lr(n),null;case 13:if(Nt(Ot),l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Dt&&Nr!==null&&(n.mode&1)!==0&&(n.flags&128)===0)nf(),da(),n.flags|=98560,p=!1;else if(p=_o(n),l!==null&&l.dehydrated!==null){if(t===null){if(!p)throw Error(r(318));if(p=n.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(r(317));p[cn]=n}else da(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;lr(n),p=!1}else Kr!==null&&(cc(Kr),Kr=null),p=!0;if(!p)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=s,n):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(n.child.flags|=8192,(n.mode&1)!==0&&(t===null||(Ot.current&1)!==0?jt===0&&(jt=3):fc())),n.updateQueue!==null&&(n.flags|=4),lr(n),null);case 4:return ma(),Ju(t,n),t===null&&cs(n.stateNode.containerInfo),lr(n),null;case 10:return Ru(n.type._context),lr(n),null;case 17:return vr(n.type)&&fo(),lr(n),null;case 19:if(Nt(Ot),p=n.memoizedState,p===null)return lr(n),null;if(l=(n.flags&128)!==0,M=p.rendering,M===null)if(l)Ms(p,!1);else{if(jt!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(M=To(t),M!==null){for(n.flags|=128,Ms(p,!1),l=M.updateQueue,l!==null&&(n.updateQueue=l,n.flags|=4),n.subtreeFlags=0,l=s,s=n.child;s!==null;)p=s,t=l,p.flags&=14680066,M=p.alternate,M===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=M.childLanes,p.lanes=M.lanes,p.child=M.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=M.memoizedProps,p.memoizedState=M.memoizedState,p.updateQueue=M.updateQueue,p.type=M.type,t=M.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),s=s.sibling;return Pt(Ot,Ot.current&1|2),n.child}t=t.sibling}p.tail!==null&&Te()>xa&&(n.flags|=128,l=!0,Ms(p,!1),n.lanes=4194304)}else{if(!l)if(t=To(M),t!==null){if(n.flags|=128,l=!0,s=t.updateQueue,s!==null&&(n.updateQueue=s,n.flags|=4),Ms(p,!0),p.tail===null&&p.tailMode==="hidden"&&!M.alternate&&!Dt)return lr(n),null}else 2*Te()-p.renderingStartTime>xa&&s!==1073741824&&(n.flags|=128,l=!0,Ms(p,!1),n.lanes=4194304);p.isBackwards?(M.sibling=n.child,n.child=M):(s=p.last,s!==null?s.sibling=M:n.child=M,p.last=M)}return p.tail!==null?(n=p.tail,p.rendering=n,p.tail=n.sibling,p.renderingStartTime=Te(),n.sibling=null,s=Ot.current,Pt(Ot,l?s&1|2:s&1),n):(lr(n),null);case 22:case 23:return hc(),l=n.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(n.flags|=8192),l&&(n.mode&1)!==0?(Ur&1073741824)!==0&&(lr(n),n.subtreeFlags&6&&(n.flags|=8192)):lr(n),null;case 24:return null;case 25:return null}throw Error(r(156,n.tag))}function kv(t,n){switch(Su(n),n.tag){case 1:return vr(n.type)&&fo(),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ma(),Nt(gr),Nt(sr),Du(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 5:return Nu(n),null;case 13:if(Nt(Ot),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));da()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Nt(Ot),null;case 4:return ma(),null;case 10:return Ru(n.type._context),null;case 22:case 23:return hc(),null;case 24:return null;default:return null}}var Uo=!1,ur=!1,zv=typeof WeakSet=="function"?WeakSet:Set,ze=null;function va(t,n){var s=t.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(l){kt(t,n,l)}else s.current=null}function ec(t,n,s){try{s()}catch(l){kt(t,n,l)}}var rp=!1;function Bv(t,n){if(hu=Qs,t=Uh(),iu(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var c=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{s.nodeType,p.nodeType}catch{s=null;break e}var M=0,L=-1,O=-1,Q=0,me=0,ve=t,fe=null;t:for(;;){for(var Ue;ve!==s||c!==0&&ve.nodeType!==3||(L=M+c),ve!==p||l!==0&&ve.nodeType!==3||(O=M+l),ve.nodeType===3&&(M+=ve.nodeValue.length),(Ue=ve.firstChild)!==null;)fe=ve,ve=Ue;for(;;){if(ve===t)break t;if(fe===s&&++Q===c&&(L=M),fe===p&&++me===l&&(O=M),(Ue=ve.nextSibling)!==null)break;ve=fe,fe=ve.parentNode}ve=Ue}s=L===-1||O===-1?null:{start:L,end:O}}else s=null}s=s||{start:0,end:0}}else s=null;for(fu={focusedElem:t,selectionRange:s},Qs=!1,ze=n;ze!==null;)if(n=ze,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,ze=t;else for(;ze!==null;){n=ze;try{var Be=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var He=Be.memoizedProps,Bt=Be.memoizedState,W=n.stateNode,z=W.getSnapshotBeforeUpdate(n.elementType===n.type?He:Zr(n.type,He),Bt);W.__reactInternalSnapshotBeforeUpdate=z}break;case 3:var X=n.stateNode.containerInfo;X.nodeType===1?X.textContent="":X.nodeType===9&&X.documentElement&&X.removeChild(X.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(Ee){kt(n,n.return,Ee)}if(t=n.sibling,t!==null){t.return=n.return,ze=t;break}ze=n.return}return Be=rp,rp=!1,Be}function Es(t,n,s){var l=n.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&t)===t){var p=c.destroy;c.destroy=void 0,p!==void 0&&ec(n,s,p)}c=c.next}while(c!==l)}}function Do(t,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var s=n=n.next;do{if((s.tag&t)===t){var l=s.create;s.destroy=l()}s=s.next}while(s!==n)}}function tc(t){var n=t.ref;if(n!==null){var s=t.stateNode;t.tag,t=s,typeof n=="function"?n(t):n.current=t}}function np(t){var n=t.alternate;n!==null&&(t.alternate=null,np(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&(delete n[cn],delete n[hs],delete n[vu],delete n[Mv],delete n[Ev])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ip(t){return t.tag===5||t.tag===3||t.tag===4}function ap(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ip(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rc(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?s.nodeType===8?s.parentNode.insertBefore(t,n):s.insertBefore(t,n):(s.nodeType===8?(n=s.parentNode,n.insertBefore(t,s)):(n=s,n.appendChild(t)),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=co));else if(l!==4&&(t=t.child,t!==null))for(rc(t,n,s),t=t.sibling;t!==null;)rc(t,n,s),t=t.sibling}function nc(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?s.insertBefore(t,n):s.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(nc(t,n,s),t=t.sibling;t!==null;)nc(t,n,s),t=t.sibling}var nr=null,$r=!1;function ni(t,n,s){for(s=s.child;s!==null;)sp(t,n,s),s=s.sibling}function sp(t,n,s){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(Rt,s)}catch{}switch(s.tag){case 5:ur||va(s,n);case 6:var l=nr,c=$r;nr=null,ni(t,n,s),nr=l,$r=c,nr!==null&&($r?(t=nr,s=s.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)):nr.removeChild(s.stateNode));break;case 18:nr!==null&&($r?(t=nr,s=s.stateNode,t.nodeType===8?gu(t.parentNode,s):t.nodeType===1&&gu(t,s),ts(t)):gu(nr,s.stateNode));break;case 4:l=nr,c=$r,nr=s.stateNode.containerInfo,$r=!0,ni(t,n,s),nr=l,$r=c;break;case 0:case 11:case 14:case 15:if(!ur&&(l=s.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var p=c,M=p.destroy;p=p.tag,M!==void 0&&((p&2)!==0||(p&4)!==0)&&ec(s,n,M),c=c.next}while(c!==l)}ni(t,n,s);break;case 1:if(!ur&&(va(s,n),l=s.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=s.memoizedProps,l.state=s.memoizedState,l.componentWillUnmount()}catch(L){kt(s,n,L)}ni(t,n,s);break;case 21:ni(t,n,s);break;case 22:s.mode&1?(ur=(l=ur)||s.memoizedState!==null,ni(t,n,s),ur=l):ni(t,n,s);break;default:ni(t,n,s)}}function op(t){var n=t.updateQueue;if(n!==null){t.updateQueue=null;var s=t.stateNode;s===null&&(s=t.stateNode=new zv),n.forEach(function(l){var c=Kv.bind(null,t,l);s.has(l)||(s.add(l),l.then(c,c))})}}function Qr(t,n){var s=n.deletions;if(s!==null)for(var l=0;l<s.length;l++){var c=s[l];try{var p=t,M=n,L=M;e:for(;L!==null;){switch(L.tag){case 5:nr=L.stateNode,$r=!1;break e;case 3:nr=L.stateNode.containerInfo,$r=!0;break e;case 4:nr=L.stateNode.containerInfo,$r=!0;break e}L=L.return}if(nr===null)throw Error(r(160));sp(p,M,c),nr=null,$r=!1;var O=c.alternate;O!==null&&(O.return=null),c.return=null}catch(Q){kt(c,n,Q)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)lp(n,t),n=n.sibling}function lp(t,n){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Qr(n,t),fn(t),l&4){try{Es(3,t,t.return),Do(3,t)}catch(He){kt(t,t.return,He)}try{Es(5,t,t.return)}catch(He){kt(t,t.return,He)}}break;case 1:Qr(n,t),fn(t),l&512&&s!==null&&va(s,s.return);break;case 5:if(Qr(n,t),fn(t),l&512&&s!==null&&va(s,s.return),t.flags&32){var c=t.stateNode;try{Me(c,"")}catch(He){kt(t,t.return,He)}}if(l&4&&(c=t.stateNode,c!=null)){var p=t.memoizedProps,M=s!==null?s.memoizedProps:p,L=t.type,O=t.updateQueue;if(t.updateQueue=null,O!==null)try{L==="input"&&p.type==="radio"&&p.name!=null&&ht(c,p),_t(L,M);var Q=_t(L,p);for(M=0;M<O.length;M+=2){var me=O[M],ve=O[M+1];me==="style"?ke(c,ve):me==="dangerouslySetInnerHTML"?ut(c,ve):me==="children"?Me(c,ve):b(c,me,ve,Q)}switch(L){case"input":Qe(c,p);break;case"textarea":xe(c,p);break;case"select":var fe=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!p.multiple;var Ue=p.value;Ue!=null?T(c,!!p.multiple,Ue,!1):fe!==!!p.multiple&&(p.defaultValue!=null?T(c,!!p.multiple,p.defaultValue,!0):T(c,!!p.multiple,p.multiple?[]:"",!1))}c[hs]=p}catch(He){kt(t,t.return,He)}}break;case 6:if(Qr(n,t),fn(t),l&4){if(t.stateNode===null)throw Error(r(162));c=t.stateNode,p=t.memoizedProps;try{c.nodeValue=p}catch(He){kt(t,t.return,He)}}break;case 3:if(Qr(n,t),fn(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{ts(n.containerInfo)}catch(He){kt(t,t.return,He)}break;case 4:Qr(n,t),fn(t);break;case 13:Qr(n,t),fn(t),c=t.child,c.flags&8192&&(p=c.memoizedState!==null,c.stateNode.isHidden=p,!p||c.alternate!==null&&c.alternate.memoizedState!==null||(sc=Te())),l&4&&op(t);break;case 22:if(me=s!==null&&s.memoizedState!==null,t.mode&1?(ur=(Q=ur)||me,Qr(n,t),ur=Q):Qr(n,t),fn(t),l&8192){if(Q=t.memoizedState!==null,(t.stateNode.isHidden=Q)&&!me&&(t.mode&1)!==0)for(ze=t,me=t.child;me!==null;){for(ve=ze=me;ze!==null;){switch(fe=ze,Ue=fe.child,fe.tag){case 0:case 11:case 14:case 15:Es(4,fe,fe.return);break;case 1:va(fe,fe.return);var Be=fe.stateNode;if(typeof Be.componentWillUnmount=="function"){l=fe,s=fe.return;try{n=l,Be.props=n.memoizedProps,Be.state=n.memoizedState,Be.componentWillUnmount()}catch(He){kt(l,s,He)}}break;case 5:va(fe,fe.return);break;case 22:if(fe.memoizedState!==null){dp(ve);continue}}Ue!==null?(Ue.return=fe,ze=Ue):dp(ve)}me=me.sibling}e:for(me=null,ve=t;;){if(ve.tag===5){if(me===null){me=ve;try{c=ve.stateNode,Q?(p=c.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(L=ve.stateNode,O=ve.memoizedProps.style,M=O!=null&&O.hasOwnProperty("display")?O.display:null,L.style.display=et("display",M))}catch(He){kt(t,t.return,He)}}}else if(ve.tag===6){if(me===null)try{ve.stateNode.nodeValue=Q?"":ve.memoizedProps}catch(He){kt(t,t.return,He)}}else if((ve.tag!==22&&ve.tag!==23||ve.memoizedState===null||ve===t)&&ve.child!==null){ve.child.return=ve,ve=ve.child;continue}if(ve===t)break e;for(;ve.sibling===null;){if(ve.return===null||ve.return===t)break e;me===ve&&(me=null),ve=ve.return}me===ve&&(me=null),ve.sibling.return=ve.return,ve=ve.sibling}}break;case 19:Qr(n,t),fn(t),l&4&&op(t);break;case 21:break;default:Qr(n,t),fn(t)}}function fn(t){var n=t.flags;if(n&2){try{e:{for(var s=t.return;s!==null;){if(ip(s)){var l=s;break e}s=s.return}throw Error(r(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(Me(c,""),l.flags&=-33);var p=ap(t);nc(t,p,c);break;case 3:case 4:var M=l.stateNode.containerInfo,L=ap(t);rc(t,L,M);break;default:throw Error(r(161))}}catch(O){kt(t,t.return,O)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Hv(t,n,s){ze=t,up(t)}function up(t,n,s){for(var l=(t.mode&1)!==0;ze!==null;){var c=ze,p=c.child;if(c.tag===22&&l){var M=c.memoizedState!==null||Uo;if(!M){var L=c.alternate,O=L!==null&&L.memoizedState!==null||ur;L=Uo;var Q=ur;if(Uo=M,(ur=O)&&!Q)for(ze=c;ze!==null;)M=ze,O=M.child,M.tag===22&&M.memoizedState!==null?hp(c):O!==null?(O.return=M,ze=O):hp(c);for(;p!==null;)ze=p,up(p),p=p.sibling;ze=c,Uo=L,ur=Q}cp(t)}else(c.subtreeFlags&8772)!==0&&p!==null?(p.return=c,ze=p):cp(t)}}function cp(t){for(;ze!==null;){var n=ze;if((n.flags&8772)!==0){var s=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:ur||Do(5,n);break;case 1:var l=n.stateNode;if(n.flags&4&&!ur)if(s===null)l.componentDidMount();else{var c=n.elementType===n.type?s.memoizedProps:Zr(n.type,s.memoizedProps);l.componentDidUpdate(c,s.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=n.updateQueue;p!==null&&df(n,p,l);break;case 3:var M=n.updateQueue;if(M!==null){if(s=null,n.child!==null)switch(n.child.tag){case 5:s=n.child.stateNode;break;case 1:s=n.child.stateNode}df(n,M,s)}break;case 5:var L=n.stateNode;if(s===null&&n.flags&4){s=L;var O=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&s.focus();break;case"img":O.src&&(s.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var Q=n.alternate;if(Q!==null){var me=Q.memoizedState;if(me!==null){var ve=me.dehydrated;ve!==null&&ts(ve)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}ur||n.flags&512&&tc(n)}catch(fe){kt(n,n.return,fe)}}if(n===t){ze=null;break}if(s=n.sibling,s!==null){s.return=n.return,ze=s;break}ze=n.return}}function dp(t){for(;ze!==null;){var n=ze;if(n===t){ze=null;break}var s=n.sibling;if(s!==null){s.return=n.return,ze=s;break}ze=n.return}}function hp(t){for(;ze!==null;){var n=ze;try{switch(n.tag){case 0:case 11:case 15:var s=n.return;try{Do(4,n)}catch(O){kt(n,s,O)}break;case 1:var l=n.stateNode;if(typeof l.componentDidMount=="function"){var c=n.return;try{l.componentDidMount()}catch(O){kt(n,c,O)}}var p=n.return;try{tc(n)}catch(O){kt(n,p,O)}break;case 5:var M=n.return;try{tc(n)}catch(O){kt(n,M,O)}}}catch(O){kt(n,n.return,O)}if(n===t){ze=null;break}var L=n.sibling;if(L!==null){L.return=n.return,ze=L;break}ze=n.return}}var Vv=Math.ceil,Io=U.ReactCurrentDispatcher,ic=U.ReactCurrentOwner,Gr=U.ReactCurrentBatchConfig,mt=0,$t=null,Vt=null,ir=0,Ur=0,_a=Qn(0),jt=0,Ts=null,Pi=0,Oo=0,ac=0,ws=null,xr=null,sc=0,xa=1/0,Rn=null,Fo=!1,oc=null,ii=null,ko=!1,ai=null,zo=0,As=0,lc=null,Bo=-1,Ho=0;function fr(){return(mt&6)!==0?Te():Bo!==-1?Bo:Bo=Te()}function si(t){return(t.mode&1)===0?1:(mt&2)!==0&&ir!==0?ir&-ir:wv.transition!==null?(Ho===0&&(Ho=Qi()),Ho):(t=Et,t!==0||(t=window.event,t=t===void 0?16:fh(t.type)),t)}function Jr(t,n,s,l){if(50<As)throw As=0,lc=null,Error(r(185));Wn(t,s,l),((mt&2)===0||t!==$t)&&(t===$t&&((mt&2)===0&&(Oo|=s),jt===4&&oi(t,ir)),yr(t,l),s===1&&mt===0&&(n.mode&1)===0&&(xa=Te()+500,mo&&ei()))}function yr(t,n){var s=t.callbackNode;Ka(t,n);var l=bt(t,t===$t?ir:0);if(l===0)s!==null&&V(s),t.callbackNode=null,t.callbackPriority=0;else if(n=l&-l,t.callbackPriority!==n){if(s!=null&&V(s),n===1)t.tag===0?Tv(pp.bind(null,t)):Qh(pp.bind(null,t)),yv(function(){(mt&6)===0&&ei()}),s=null;else{switch(ah(l)){case 1:s=Ke;break;case 4:s=Ze;break;case 16:s=Xe;break;case 536870912:s=At;break;default:s=Xe}s=Mp(s,fp.bind(null,t))}t.callbackPriority=n,t.callbackNode=s}}function fp(t,n){if(Bo=-1,Ho=0,(mt&6)!==0)throw Error(r(327));var s=t.callbackNode;if(ya()&&t.callbackNode!==s)return null;var l=bt(t,t===$t?ir:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||n)n=Vo(t,l);else{n=l;var c=mt;mt|=2;var p=gp();($t!==t||ir!==n)&&(Rn=null,xa=Te()+500,Ni(t,n));do try{jv();break}catch(L){mp(t,L)}while(!0);Au(),Io.current=p,mt=c,Vt!==null?n=0:($t=null,ir=0,n=jt)}if(n!==0){if(n===2&&(c=ar(t),c!==0&&(l=c,n=uc(t,c))),n===1)throw s=Ts,Ni(t,0),oi(t,l),yr(t,Te()),s;if(n===6)oi(t,l);else{if(c=t.current.alternate,(l&30)===0&&!Gv(c)&&(n=Vo(t,l),n===2&&(p=ar(t),p!==0&&(l=p,n=uc(t,p))),n===1))throw s=Ts,Ni(t,0),oi(t,l),yr(t,Te()),s;switch(t.finishedWork=c,t.finishedLanes=l,n){case 0:case 1:throw Error(r(345));case 2:Ui(t,xr,Rn);break;case 3:if(oi(t,l),(l&130023424)===l&&(n=sc+500-Te(),10<n)){if(bt(t,0)!==0)break;if(c=t.suspendedLanes,(c&l)!==l){fr(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=mu(Ui.bind(null,t,xr,Rn),n);break}Ui(t,xr,Rn);break;case 4:if(oi(t,l),(l&4194240)===l)break;for(n=t.eventTimes,c=-1;0<l;){var M=31-Oe(l);p=1<<M,M=n[M],M>c&&(c=M),l&=~p}if(l=c,l=Te()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Vv(l/1960))-l,10<l){t.timeoutHandle=mu(Ui.bind(null,t,xr,Rn),l);break}Ui(t,xr,Rn);break;case 5:Ui(t,xr,Rn);break;default:throw Error(r(329))}}}return yr(t,Te()),t.callbackNode===s?fp.bind(null,t):null}function uc(t,n){var s=ws;return t.current.memoizedState.isDehydrated&&(Ni(t,n).flags|=256),t=Vo(t,n),t!==2&&(n=xr,xr=s,n!==null&&cc(n)),t}function cc(t){xr===null?xr=t:xr.push.apply(xr,t)}function Gv(t){for(var n=t;;){if(n.flags&16384){var s=n.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var l=0;l<s.length;l++){var c=s[l],p=c.getSnapshot;c=c.value;try{if(!qr(p(),c))return!1}catch{return!1}}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function oi(t,n){for(n&=~ac,n&=~Oo,t.suspendedLanes|=n,t.pingedLanes&=~n,t=t.expirationTimes;0<n;){var s=31-Oe(n),l=1<<s;t[s]=-1,n&=~l}}function pp(t){if((mt&6)!==0)throw Error(r(327));ya();var n=bt(t,0);if((n&1)===0)return yr(t,Te()),null;var s=Vo(t,n);if(t.tag!==0&&s===2){var l=ar(t);l!==0&&(n=l,s=uc(t,l))}if(s===1)throw s=Ts,Ni(t,0),oi(t,n),yr(t,Te()),s;if(s===6)throw Error(r(345));return t.finishedWork=t.current.alternate,t.finishedLanes=n,Ui(t,xr,Rn),yr(t,Te()),null}function dc(t,n){var s=mt;mt|=1;try{return t(n)}finally{mt=s,mt===0&&(xa=Te()+500,mo&&ei())}}function Li(t){ai!==null&&ai.tag===0&&(mt&6)===0&&ya();var n=mt;mt|=1;var s=Gr.transition,l=Et;try{if(Gr.transition=null,Et=1,t)return t()}finally{Et=l,Gr.transition=s,mt=n,(mt&6)===0&&ei()}}function hc(){Ur=_a.current,Nt(_a)}function Ni(t,n){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;if(s!==-1&&(t.timeoutHandle=-1,xv(s)),Vt!==null)for(s=Vt.return;s!==null;){var l=s;switch(Su(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&fo();break;case 3:ma(),Nt(gr),Nt(sr),Du();break;case 5:Nu(l);break;case 4:ma();break;case 13:Nt(Ot);break;case 19:Nt(Ot);break;case 10:Ru(l.type._context);break;case 22:case 23:hc()}s=s.return}if($t=t,Vt=t=li(t.current,null),ir=Ur=n,jt=0,Ts=null,ac=Oo=Pi=0,xr=ws=null,Ri!==null){for(n=0;n<Ri.length;n++)if(s=Ri[n],l=s.interleaved,l!==null){s.interleaved=null;var c=l.next,p=s.pending;if(p!==null){var M=p.next;p.next=c,l.next=M}s.pending=l}Ri=null}return t}function mp(t,n){do{var s=Vt;try{if(Au(),wo.current=bo,Ao){for(var l=Ft.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}Ao=!1}if(bi=0,Zt=Wt=Ft=null,_s=!1,xs=0,ic.current=null,s===null||s.return===null){jt=1,Ts=n,Vt=null;break}e:{var p=t,M=s.return,L=s,O=n;if(n=ir,L.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var Q=O,me=L,ve=me.tag;if((me.mode&1)===0&&(ve===0||ve===11||ve===15)){var fe=me.alternate;fe?(me.updateQueue=fe.updateQueue,me.memoizedState=fe.memoizedState,me.lanes=fe.lanes):(me.updateQueue=null,me.memoizedState=null)}var Ue=Bf(M);if(Ue!==null){Ue.flags&=-257,Hf(Ue,M,L,p,n),Ue.mode&1&&zf(p,Q,n),n=Ue,O=Q;var Be=n.updateQueue;if(Be===null){var He=new Set;He.add(O),n.updateQueue=He}else Be.add(O);break e}else{if((n&1)===0){zf(p,Q,n),fc();break e}O=Error(r(426))}}else if(Dt&&L.mode&1){var Bt=Bf(M);if(Bt!==null){(Bt.flags&65536)===0&&(Bt.flags|=256),Hf(Bt,M,L,p,n),Tu(ga(O,L));break e}}p=O=ga(O,L),jt!==4&&(jt=2),ws===null?ws=[p]:ws.push(p),p=M;do{switch(p.tag){case 3:p.flags|=65536,n&=-n,p.lanes|=n;var W=Ff(p,O,n);cf(p,W);break e;case 1:L=O;var z=p.type,X=p.stateNode;if((p.flags&128)===0&&(typeof z.getDerivedStateFromError=="function"||X!==null&&typeof X.componentDidCatch=="function"&&(ii===null||!ii.has(X)))){p.flags|=65536,n&=-n,p.lanes|=n;var Ee=kf(p,L,n);cf(p,Ee);break e}}p=p.return}while(p!==null)}_p(s)}catch(Ve){n=Ve,Vt===s&&s!==null&&(Vt=s=s.return);continue}break}while(!0)}function gp(){var t=Io.current;return Io.current=bo,t===null?bo:t}function fc(){(jt===0||jt===3||jt===2)&&(jt=4),$t===null||(Pi&268435455)===0&&(Oo&268435455)===0||oi($t,ir)}function Vo(t,n){var s=mt;mt|=2;var l=gp();($t!==t||ir!==n)&&(Rn=null,Ni(t,n));do try{Wv();break}catch(c){mp(t,c)}while(!0);if(Au(),mt=s,Io.current=l,Vt!==null)throw Error(r(261));return $t=null,ir=0,jt}function Wv(){for(;Vt!==null;)vp(Vt)}function jv(){for(;Vt!==null&&!ye();)vp(Vt)}function vp(t){var n=Sp(t.alternate,t,Ur);t.memoizedProps=t.pendingProps,n===null?_p(t):Vt=n,ic.current=null}function _p(t){var n=t;do{var s=n.alternate;if(t=n.return,(n.flags&32768)===0){if(s=Fv(s,n,Ur),s!==null){Vt=s;return}}else{if(s=kv(s,n),s!==null){s.flags&=32767,Vt=s;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{jt=6,Vt=null;return}}if(n=n.sibling,n!==null){Vt=n;return}Vt=n=t}while(n!==null);jt===0&&(jt=5)}function Ui(t,n,s){var l=Et,c=Gr.transition;try{Gr.transition=null,Et=1,Xv(t,n,s,l)}finally{Gr.transition=c,Et=l}return null}function Xv(t,n,s,l){do ya();while(ai!==null);if((mt&6)!==0)throw Error(r(327));s=t.finishedWork;var c=t.finishedLanes;if(s===null)return null;if(t.finishedWork=null,t.finishedLanes=0,s===t.current)throw Error(r(177));t.callbackNode=null,t.callbackPriority=0;var p=s.lanes|s.childLanes;if(Ag(t,p),t===$t&&(Vt=$t=null,ir=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||ko||(ko=!0,Mp(Xe,function(){return ya(),null})),p=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||p){p=Gr.transition,Gr.transition=null;var M=Et;Et=1;var L=mt;mt|=4,ic.current=null,Bv(t,s),lp(s,t),hv(fu),Qs=!!hu,fu=hu=null,t.current=s,Hv(s),Ie(),mt=L,Et=M,Gr.transition=p}else t.current=s;if(ko&&(ko=!1,ai=t,zo=c),p=t.pendingLanes,p===0&&(ii=null),Ct(s.stateNode),yr(t,Te()),n!==null)for(l=t.onRecoverableError,s=0;s<n.length;s++)c=n[s],l(c.value,{componentStack:c.stack,digest:c.digest});if(Fo)throw Fo=!1,t=oc,oc=null,t;return(zo&1)!==0&&t.tag!==0&&ya(),p=t.pendingLanes,(p&1)!==0?t===lc?As++:(As=0,lc=t):As=0,ei(),null}function ya(){if(ai!==null){var t=ah(zo),n=Gr.transition,s=Et;try{if(Gr.transition=null,Et=16>t?16:t,ai===null)var l=!1;else{if(t=ai,ai=null,zo=0,(mt&6)!==0)throw Error(r(331));var c=mt;for(mt|=4,ze=t.current;ze!==null;){var p=ze,M=p.child;if((ze.flags&16)!==0){var L=p.deletions;if(L!==null){for(var O=0;O<L.length;O++){var Q=L[O];for(ze=Q;ze!==null;){var me=ze;switch(me.tag){case 0:case 11:case 15:Es(8,me,p)}var ve=me.child;if(ve!==null)ve.return=me,ze=ve;else for(;ze!==null;){me=ze;var fe=me.sibling,Ue=me.return;if(np(me),me===Q){ze=null;break}if(fe!==null){fe.return=Ue,ze=fe;break}ze=Ue}}}var Be=p.alternate;if(Be!==null){var He=Be.child;if(He!==null){Be.child=null;do{var Bt=He.sibling;He.sibling=null,He=Bt}while(He!==null)}}ze=p}}if((p.subtreeFlags&2064)!==0&&M!==null)M.return=p,ze=M;else e:for(;ze!==null;){if(p=ze,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Es(9,p,p.return)}var W=p.sibling;if(W!==null){W.return=p.return,ze=W;break e}ze=p.return}}var z=t.current;for(ze=z;ze!==null;){M=ze;var X=M.child;if((M.subtreeFlags&2064)!==0&&X!==null)X.return=M,ze=X;else e:for(M=z;ze!==null;){if(L=ze,(L.flags&2048)!==0)try{switch(L.tag){case 0:case 11:case 15:Do(9,L)}}catch(Ve){kt(L,L.return,Ve)}if(L===M){ze=null;break e}var Ee=L.sibling;if(Ee!==null){Ee.return=L.return,ze=Ee;break e}ze=L.return}}if(mt=c,ei(),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(Rt,t)}catch{}l=!0}return l}finally{Et=s,Gr.transition=n}}return!1}function xp(t,n,s){n=ga(s,n),n=Ff(t,n,1),t=ri(t,n,1),n=fr(),t!==null&&(Wn(t,1,n),yr(t,n))}function kt(t,n,s){if(t.tag===3)xp(t,t,s);else for(;n!==null;){if(n.tag===3){xp(n,t,s);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ii===null||!ii.has(l))){t=ga(s,t),t=kf(n,t,1),n=ri(n,t,1),t=fr(),n!==null&&(Wn(n,1,t),yr(n,t));break}}n=n.return}}function Yv(t,n,s){var l=t.pingCache;l!==null&&l.delete(n),n=fr(),t.pingedLanes|=t.suspendedLanes&s,$t===t&&(ir&s)===s&&(jt===4||jt===3&&(ir&130023424)===ir&&500>Te()-sc?Ni(t,0):ac|=s),yr(t,n)}function yp(t,n){n===0&&((t.mode&1)===0?n=1:(n=Kt,Kt<<=1,(Kt&130023424)===0&&(Kt=4194304)));var s=fr();t=Tn(t,n),t!==null&&(Wn(t,n,s),yr(t,s))}function qv(t){var n=t.memoizedState,s=0;n!==null&&(s=n.retryLane),yp(t,s)}function Kv(t,n){var s=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(s=c.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(r(314))}l!==null&&l.delete(n),yp(t,s)}var Sp;Sp=function(t,n,s){if(t!==null)if(t.memoizedProps!==n.pendingProps||gr.current)_r=!0;else{if((t.lanes&s)===0&&(n.flags&128)===0)return _r=!1,Ov(t,n,s);_r=(t.flags&131072)!==0}else _r=!1,Dt&&(n.flags&1048576)!==0&&Jh(n,vo,n.index);switch(n.lanes=0,n.tag){case 2:var l=n.type;No(t,n),t=n.pendingProps;var c=la(n,sr.current);pa(n,s),c=Fu(null,n,l,t,c,s);var p=ku();return n.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,vr(l)?(p=!0,po(n)):p=!1,n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,Pu(n),c.updater=Po,n.stateNode=c,c._reactInternals=n,Wu(n,l,t,s),n=qu(null,n,l,!0,p,s)):(n.tag=0,Dt&&p&&yu(n),hr(null,n,c,s),n=n.child),n;case 16:l=n.elementType;e:{switch(No(t,n),t=n.pendingProps,c=l._init,l=c(l._payload),n.type=l,c=n.tag=$v(l),t=Zr(l,t),c){case 0:n=Yu(null,n,l,t,s);break e;case 1:n=Yf(null,n,l,t,s);break e;case 11:n=Vf(null,n,l,t,s);break e;case 14:n=Gf(null,n,l,Zr(l.type,t),s);break e}throw Error(r(306,l,""))}return n;case 0:return l=n.type,c=n.pendingProps,c=n.elementType===l?c:Zr(l,c),Yu(t,n,l,c,s);case 1:return l=n.type,c=n.pendingProps,c=n.elementType===l?c:Zr(l,c),Yf(t,n,l,c,s);case 3:e:{if(qf(n),t===null)throw Error(r(387));l=n.pendingProps,p=n.memoizedState,c=p.element,uf(t,n),Eo(n,l,null,s);var M=n.memoizedState;if(l=M.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},n.updateQueue.baseState=p,n.memoizedState=p,n.flags&256){c=ga(Error(r(423)),n),n=Kf(t,n,l,s,c);break e}else if(l!==c){c=ga(Error(r(424)),n),n=Kf(t,n,l,s,c);break e}else for(Nr=$n(n.stateNode.containerInfo.firstChild),Lr=n,Dt=!0,Kr=null,s=of(n,null,l,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(da(),l===c){n=An(t,n,s);break e}hr(t,n,l,s)}n=n.child}return n;case 5:return hf(n),t===null&&Eu(n),l=n.type,c=n.pendingProps,p=t!==null?t.memoizedProps:null,M=c.children,pu(l,c)?M=null:p!==null&&pu(l,p)&&(n.flags|=32),Xf(t,n),hr(t,n,M,s),n.child;case 6:return t===null&&Eu(n),null;case 13:return Zf(t,n,s);case 4:return Lu(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=ha(n,null,l,s):hr(t,n,l,s),n.child;case 11:return l=n.type,c=n.pendingProps,c=n.elementType===l?c:Zr(l,c),Vf(t,n,l,c,s);case 7:return hr(t,n,n.pendingProps,s),n.child;case 8:return hr(t,n,n.pendingProps.children,s),n.child;case 12:return hr(t,n,n.pendingProps.children,s),n.child;case 10:e:{if(l=n.type._context,c=n.pendingProps,p=n.memoizedProps,M=c.value,Pt(yo,l._currentValue),l._currentValue=M,p!==null)if(qr(p.value,M)){if(p.children===c.children&&!gr.current){n=An(t,n,s);break e}}else for(p=n.child,p!==null&&(p.return=n);p!==null;){var L=p.dependencies;if(L!==null){M=p.child;for(var O=L.firstContext;O!==null;){if(O.context===l){if(p.tag===1){O=wn(-1,s&-s),O.tag=2;var Q=p.updateQueue;if(Q!==null){Q=Q.shared;var me=Q.pending;me===null?O.next=O:(O.next=me.next,me.next=O),Q.pending=O}}p.lanes|=s,O=p.alternate,O!==null&&(O.lanes|=s),Cu(p.return,s,n),L.lanes|=s;break}O=O.next}}else if(p.tag===10)M=p.type===n.type?null:p.child;else if(p.tag===18){if(M=p.return,M===null)throw Error(r(341));M.lanes|=s,L=M.alternate,L!==null&&(L.lanes|=s),Cu(M,s,n),M=p.sibling}else M=p.child;if(M!==null)M.return=p;else for(M=p;M!==null;){if(M===n){M=null;break}if(p=M.sibling,p!==null){p.return=M.return,M=p;break}M=M.return}p=M}hr(t,n,c.children,s),n=n.child}return n;case 9:return c=n.type,l=n.pendingProps.children,pa(n,s),c=Hr(c),l=l(c),n.flags|=1,hr(t,n,l,s),n.child;case 14:return l=n.type,c=Zr(l,n.pendingProps),c=Zr(l.type,c),Gf(t,n,l,c,s);case 15:return Wf(t,n,n.type,n.pendingProps,s);case 17:return l=n.type,c=n.pendingProps,c=n.elementType===l?c:Zr(l,c),No(t,n),n.tag=1,vr(l)?(t=!0,po(n)):t=!1,pa(n,s),If(n,l,c),Wu(n,l,c,s),qu(null,n,l,!0,t,s);case 19:return Qf(t,n,s);case 22:return jf(t,n,s)}throw Error(r(156,n.tag))};function Mp(t,n){return $(t,n)}function Zv(t,n,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wr(t,n,s,l){return new Zv(t,n,s,l)}function pc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $v(t){if(typeof t=="function")return pc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===re)return 11;if(t===pe)return 14}return 2}function li(t,n){var s=t.alternate;return s===null?(s=Wr(t.tag,n,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=n,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&14680064,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,n=t.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s}function Go(t,n,s,l,c,p){var M=2;if(l=t,typeof t=="function")pc(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case I:return Di(s.children,c,p,n);case q:M=8,c|=8;break;case _e:return t=Wr(12,s,n,c|2),t.elementType=_e,t.lanes=p,t;case ne:return t=Wr(13,s,n,c),t.elementType=ne,t.lanes=p,t;case ae:return t=Wr(19,s,n,c),t.elementType=ae,t.lanes=p,t;case ce:return Wo(s,c,p,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case E:M=10;break e;case C:M=9;break e;case re:M=11;break e;case pe:M=14;break e;case ee:M=16,l=null;break e}throw Error(r(130,t==null?t:typeof t,""))}return n=Wr(M,s,n,c),n.elementType=t,n.type=l,n.lanes=p,n}function Di(t,n,s,l){return t=Wr(7,t,l,n),t.lanes=s,t}function Wo(t,n,s,l){return t=Wr(22,t,l,n),t.elementType=ce,t.lanes=s,t.stateNode={isHidden:!1},t}function mc(t,n,s){return t=Wr(6,t,null,n),t.lanes=s,t}function gc(t,n,s){return n=Wr(4,t.children!==null?t.children:[],t.key,n),n.lanes=s,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function Qv(t,n,s,l,c){this.tag=n,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Za(0),this.expirationTimes=Za(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Za(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function vc(t,n,s,l,c,p,M,L,O){return t=new Qv(t,n,s,L,O),n===1?(n=1,p===!0&&(n|=8)):n=0,p=Wr(3,null,null,n),t.current=p,p.stateNode=t,p.memoizedState={element:l,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pu(p),t}function Jv(t,n,s){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:l==null?null:""+l,children:t,containerInfo:n,implementation:s}}function Ep(t){if(!t)return Jn;t=t._reactInternals;e:{if(vn(t)!==t||t.tag!==1)throw Error(r(170));var n=t;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(vr(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(r(171))}if(t.tag===1){var s=t.type;if(vr(s))return Zh(t,s,n)}return n}function Tp(t,n,s,l,c,p,M,L,O){return t=vc(s,l,!0,t,c,p,M,L,O),t.context=Ep(null),s=t.current,l=fr(),c=si(s),p=wn(l,c),p.callback=n??null,ri(s,p,c),t.current.lanes=c,Wn(t,c,l),yr(t,l),t}function jo(t,n,s,l){var c=n.current,p=fr(),M=si(c);return s=Ep(s),n.context===null?n.context=s:n.pendingContext=s,n=wn(p,M),n.payload={element:t},l=l===void 0?null:l,l!==null&&(n.callback=l),t=ri(c,n,M),t!==null&&(Jr(t,c,M,p),Mo(t,c,M)),M}function Xo(t){return t=t.current,t.child?(t.child.tag===5,t.child.stateNode):null}function wp(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<n?s:n}}function _c(t,n){wp(t,n),(t=t.alternate)&&wp(t,n)}function e_(){return null}var Ap=typeof reportError=="function"?reportError:function(t){console.error(t)};function xc(t){this._internalRoot=t}Yo.prototype.render=xc.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));jo(t,n,null,null)},Yo.prototype.unmount=xc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Li(function(){jo(null,t,null,null)}),n[yn]=null}};function Yo(t){this._internalRoot=t}Yo.prototype.unstable_scheduleHydration=function(t){if(t){var n=lh();t={blockedOn:null,target:t,priority:n};for(var s=0;s<qn.length&&n!==0&&n<qn[s].priority;s++);qn.splice(s,0,t),s===0&&dh(t)}};function yc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function qo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Rp(){}function t_(t,n,s,l,c){if(c){if(typeof l=="function"){var p=l;l=function(){var Q=Xo(M);p.call(Q)}}var M=Tp(n,l,t,0,null,!1,!1,"",Rp);return t._reactRootContainer=M,t[yn]=M.current,cs(t.nodeType===8?t.parentNode:t),Li(),M}for(;c=t.lastChild;)t.removeChild(c);if(typeof l=="function"){var L=l;l=function(){var Q=Xo(O);L.call(Q)}}var O=vc(t,0,!1,null,null,!1,!1,"",Rp);return t._reactRootContainer=O,t[yn]=O.current,cs(t.nodeType===8?t.parentNode:t),Li(function(){jo(n,O,s,l)}),O}function Ko(t,n,s,l,c){var p=s._reactRootContainer;if(p){var M=p;if(typeof c=="function"){var L=c;c=function(){var O=Xo(M);L.call(O)}}jo(n,M,t,c)}else M=t_(s,n,t,c,l);return Xo(M)}sh=function(t){switch(t.tag){case 3:var n=t.stateNode;if(n.current.memoizedState.isDehydrated){var s=xn(n.pendingLanes);s!==0&&(Wl(n,s|1),yr(n,Te()),(mt&6)===0&&(xa=Te()+500,ei()))}break;case 13:Li(function(){var l=Tn(t,1);if(l!==null){var c=fr();Jr(l,t,1,c)}}),_c(t,1)}},jl=function(t){if(t.tag===13){var n=Tn(t,134217728);if(n!==null){var s=fr();Jr(n,t,134217728,s)}_c(t,134217728)}},oh=function(t){if(t.tag===13){var n=si(t),s=Tn(t,n);if(s!==null){var l=fr();Jr(s,t,n,l)}_c(t,n)}},lh=function(){return Et},uh=function(t,n){var s=Et;try{return Et=t,n()}finally{Et=s}},ie=function(t,n,s){switch(n){case"input":if(Qe(t,s),n=s.name,s.type==="radio"&&n!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<s.length;n++){var l=s[n];if(l!==t&&l.form===t.form){var c=ho(l);if(!c)throw Error(r(90));ct(l),Qe(l,c)}}}break;case"textarea":xe(t,s);break;case"select":n=s.value,n!=null&&T(t,!!s.multiple,n,!1)}},tr=dc,ft=Li;var r_={usingClientEntryPoint:!1,Events:[fs,sa,ho,Mt,It,dc]},Rs={findFiberByHostInstance:Ei,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},n_={bundleType:Rs.bundleType,version:Rs.version,rendererPackageName:Rs.rendererPackageName,rendererConfig:Rs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:U.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=G(t),t===null?null:t.stateNode},findFiberByHostInstance:Rs.findFiberByHostInstance||e_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zo.isDisabled&&Zo.supportsFiber)try{Rt=Zo.inject(n_),yt=Zo}catch{}}return Sr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r_,Sr.createPortal=function(t,n){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yc(n))throw Error(r(200));return Jv(t,n,null,s)},Sr.createRoot=function(t,n){if(!yc(t))throw Error(r(299));var s=!1,l="",c=Ap;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(c=n.onRecoverableError)),n=vc(t,1,!1,null,null,s,!1,l,c),t[yn]=n.current,cs(t.nodeType===8?t.parentNode:t),new xc(n)},Sr.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=G(n),t=t===null?null:t.stateNode,t},Sr.flushSync=function(t){return Li(t)},Sr.hydrate=function(t,n,s){if(!qo(n))throw Error(r(200));return Ko(null,t,n,!0,s)},Sr.hydrateRoot=function(t,n,s){if(!yc(t))throw Error(r(405));var l=s!=null&&s.hydratedSources||null,c=!1,p="",M=Ap;if(s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(p=s.identifierPrefix),s.onRecoverableError!==void 0&&(M=s.onRecoverableError)),n=Tp(n,null,t,1,s??null,c,!1,p,M),t[yn]=n.current,cs(t),l)for(t=0;t<l.length;t++)s=l[t],c=s._getVersion,c=c(s._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[s,c]:n.mutableSourceEagerHydrationData.push(s,c);return new Yo(n)},Sr.render=function(t,n,s){if(!qo(n))throw Error(r(200));return Ko(null,t,n,!1,s)},Sr.unmountComponentAtNode=function(t){if(!qo(t))throw Error(r(40));return t._reactRootContainer?(Li(function(){Ko(null,null,t,!1,function(){t._reactRootContainer=null,t[yn]=null})}),!0):!1},Sr.unstable_batchedUpdates=dc,Sr.unstable_renderSubtreeIntoContainer=function(t,n,s,l){if(!qo(s))throw Error(r(200));if(t==null||t._reactInternals===void 0)throw Error(r(38));return Ko(t,n,s,!1,l)},Sr.version="18.3.1-next-f1338f8080-20240426",Sr}var Ip;function Vm(){if(Ip)return Ec.exports;Ip=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Ec.exports=c_(),Ec.exports}var Op;function d_(){if(Op)return $o;Op=1;var a=Vm();return $o.createRoot=a.createRoot,$o.hydrateRoot=a.hydrateRoot,$o}var h_=d_();const f_=Hm(h_);function Gm(a){var e,r,i="";if(typeof a=="string"||typeof a=="number")i+=a;else if(typeof a=="object")if(Array.isArray(a)){var o=a.length;for(e=0;e<o;e++)a[e]&&(r=Gm(a[e]))&&(i&&(i+=" "),i+=r)}else for(r in a)a[r]&&(i&&(i+=" "),i+=r);return i}function p_(){for(var a,e,r=0,i="",o=arguments.length;r<o;r++)(a=arguments[r])&&(e=Gm(a))&&(i&&(i+=" "),i+=e);return i}var m_=Vm();const wr=(...a)=>p_(...a);var Fp={exports:{}},bs={},kp;function g_(){if(kp)return bs;kp=1;var a=xi,e=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(h,f,m){var g,y={},x=null,S=null;m!==void 0&&(x=""+m),f.key!==void 0&&(x=""+f.key),f.ref!==void 0&&(S=f.ref);for(g in f)i.call(f,g)&&!u.hasOwnProperty(g)&&(y[g]=f[g]);if(h&&h.defaultProps)for(g in f=h.defaultProps,f)y[g]===void 0&&(y[g]=f[g]);return{$$typeof:e,type:h,key:x,ref:S,props:y,_owner:o.current}}return bs.Fragment=r,bs.jsx=d,bs.jsxs=d,bs}var zp;function v_(){return zp||(zp=1,Fp.exports=g_()),Fp.exports}var $e=v_();const __=(a={})=>{const{variant:e="primary",glow:r,size:i="md",fullWidth:o}=a,u={xs:"text-xs px-3 py-1.5",sm:"text-sm px-3 py-2",md:"text-base px-4 py-2.5",lg:"text-lg px-5 py-3",xl:"text-xl px-6 py-3.5"},d={primary:"bg-neo-accent text-neo-bg hover:bg-neo-accent-strong",secondary:"bg-neo-surface text-neo-text border border-neo-border hover:border-neo-accent",outline:"border border-neo-accent text-neo-accent bg-transparent hover:bg-neo-accent/10",ghost:"text-neo-text bg-transparent hover:bg-white/5",danger:"bg-red-500 text-white hover:bg-red-400",success:"bg-emerald-500 text-white hover:bg-emerald-400"};return wr("rounded-neo-md font-semibold tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-neo-accent focus-visible:ring-offset-2 focus-visible:ring-offset-neo-bg",u[i],d[e],r&&"shadow-glow",o&&"w-full")},Fr=xi.forwardRef(({variant:a,size:e,glow:r,fullWidth:i,leadingIcon:o,trailingIcon:u,className:d,disabled:h,children:f,...m},g)=>$e.jsxs("button",{ref:g,className:wr(__({variant:a,size:e,glow:r,fullWidth:i}),"inline-flex items-center justify-center gap-2",h&&"opacity-60 cursor-not-allowed",d),disabled:h,...m,children:[o&&$e.jsx("span",{className:"shrink-0",children:o}),$e.jsx("span",{children:f}),u&&$e.jsx("span",{className:"shrink-0",children:u})]}));Fr.displayName="NeoButton";const Qo=({title:a,description:e,footer:r,padding:i="md",className:o,children:u,...d})=>{const h={sm:"p-4",md:"p-6",lg:"p-8"};return $e.jsxs("div",{className:wr("glass-surface jk-card text-neo-text border border-white/5 shadow-panel",h[i],"flex flex-col gap-4",o),...d,children:[(a||e)&&$e.jsxs("header",{className:"space-y-1",children:[a&&$e.jsx("h3",{className:"text-lg font-bold tracking-tight",children:a}),e&&$e.jsx("p",{className:"text-sm text-neo-muted",children:e})]}),$e.jsx("div",{className:"flex-1",children:u}),r&&$e.jsx("footer",{className:"pt-2 border-t border-white/5 text-sm",children:r})]})},ad=xi.forwardRef(({label:a,helperText:e,error:r,className:i,...o},u)=>$e.jsxs("label",{className:"block space-y-2 text-sm",children:[a&&$e.jsx("span",{className:"text-neo-muted",children:a}),$e.jsx("input",{ref:u,className:wr("w-full rounded-neo-md bg-neo-surface/80 border border-neo-border px-4 py-3 text-neo-text placeholder:text-slate-500","focus:outline-none focus:ring-2 focus:ring-neo-accent focus:border-neo-accent",r&&"border-red-500 focus:ring-red-500 focus:border-red-500",i),...o}),(e||r)&&$e.jsx("p",{className:wr("text-xs",r?"text-red-400":"text-neo-muted"),children:r??e})]}));ad.displayName="NeoInput";const Fs=({variant:a="accent",glow:e,className:r,children:i,...o})=>{const u={accent:"bg-neo-accent/15 text-neo-accent border border-neo-accent/40",glass:"bg-white/5 text-neo-text border border-white/10",danger:"bg-red-500/15 text-red-300 border border-red-400/40",warning:"bg-neo-amber/15 text-neo-amber border border-neo-amber/40",success:"bg-emerald-500/15 text-emerald-300 border border-emerald-400/40"};return $e.jsx("span",{className:wr("inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide",u[a],e&&"shadow-glow",r),...o,children:i})},Bp=({title:a,actions:e,subdued:r,className:i,children:o,...u})=>$e.jsxs("section",{className:wr("glass-surface border border-white/10 rounded-neo-lg shadow-panel",r&&"bg-neo-surface/70",i),...u,children:[$e.jsxs("header",{className:"flex items-center justify-between px-6 py-4 border-b border-white/5",children:[$e.jsxs("div",{children:[$e.jsx("h4",{className:"text-lg font-semibold text-neo-text",children:a}),$e.jsx("p",{className:"text-xs text-neo-muted uppercase tracking-[0.2em]",children:"Neural Monitor"})]}),e&&$e.jsx("div",{className:"flex items-center gap-2",children:e})]}),$e.jsx("div",{className:"p-6",children:o})]}),x_=({open:a,title:e,onClose:r,footer:i,children:o})=>{const[u]=xi.useState(()=>document.createElement("div"));if(Or.useEffect(()=>(document.body.appendChild(u),()=>{document.body.removeChild(u)}),[u]),!a)return null;const d=$e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm",role:"dialog","aria-modal":"true",children:$e.jsxs("div",{className:"glass-surface max-w-lg w-full mx-4 border border-white/10 shadow-panel",children:[$e.jsxs("header",{className:"flex items-start justify-between p-6 pb-3",children:[e&&$e.jsx("h3",{className:"text-xl font-bold text-neo-text",children:e}),$e.jsx(Fr,{variant:"ghost",size:"sm","aria-label":"Close modal",onClick:r,children:"✕"})]}),$e.jsx("div",{className:"px-6 pb-4 text-neo-muted",children:o}),$e.jsx("footer",{className:wr("px-6 pb-6 flex justify-end gap-3",!i&&"hidden"),children:i})]})});return m_.createPortal(d,u)},y_=({tabs:a,value:e,defaultValue:r,onChange:i})=>{const[o,u]=xi.useState(r??a[0]?.id),d=e??o,h=(f,m)=>{m||(u(f),i?.(f))};return $e.jsxs("div",{className:"w-full",children:[$e.jsx("div",{className:"flex gap-2 border-b border-white/10",children:a.map(f=>{const m=f.id===d;return $e.jsx("button",{className:wr("px-4 py-2 text-sm font-semibold rounded-t-md transition-colors",f.disabled&&"opacity-50 cursor-not-allowed",m?"text-neo-accent border-b-2 border-neo-accent":"text-neo-muted hover:text-neo-text"),"aria-selected":m,role:"tab",onClick:()=>h(f.id,f.disabled),children:f.label},f.id)})}),$e.jsx("div",{className:"mt-4",children:a.map(f=>f.id===d&&$e.jsx("div",{role:"tabpanel",className:"text-neo-text",children:f.content},f.id))})]})},Wm=({columns:a={base:1,md:2,lg:3},gap:e="md",className:r,children:i,...o})=>{const u={sm:"gap-4",md:"gap-6",lg:"gap-8"},d=`grid-cols-${a.base??1}`,h=a.md?`md:grid-cols-${a.md}`:"",f=a.lg?`lg:grid-cols-${a.lg}`:"";return $e.jsx("div",{className:wr("grid",d,h,f,u[e],r),...o,children:i})};function S_({columns:a,data:e,striped:r=!0,dense:i=!1}){return $e.jsx("div",{className:"overflow-hidden rounded-neo-lg border border-white/10 glass-surface",children:$e.jsxs("table",{className:"min-w-full text-sm text-left",children:[$e.jsx("thead",{className:"bg-white/5 text-neo-muted uppercase tracking-[0.2em] text-xs",children:$e.jsx("tr",{children:a.map(o=>$e.jsx("th",{className:wr("px-4 py-3",o.align==="right"&&"text-right"),children:o.header},String(o.key)))})}),$e.jsx("tbody",{children:e.map((o,u)=>$e.jsx("tr",{className:wr("transition-colors",r&&u%2===1?"bg-white/5":"bg-transparent","hover:bg-white/8"),children:a.map(d=>$e.jsx("td",{className:wr("px-4",i?"py-2.5":"py-3.5",d.align==="right"&&"text-right",d.align==="center"&&"text-center"),children:d.render?d.render(o):o[d.key]},String(d.key)))},u))})]})})}const M_=({message:a,description:e,variant:r="info",actionLabel:i,onAction:o,onClose:u})=>{const d={success:"border-emerald-400/40 text-emerald-100",info:"border-neo-accent/40 text-neo-text",warning:"border-neo-amber/40 text-neo-amber",danger:"border-red-400/40 text-red-100"};return $e.jsxs("div",{className:wr("glass-surface border px-4 py-3 rounded-neo-lg flex items-start gap-3",d[r]),children:[$e.jsxs("div",{className:"flex-1",children:[$e.jsx("p",{className:"font-semibold",children:a}),e&&$e.jsx("p",{className:"text-sm text-neo-muted mt-1",children:e})]}),i&&$e.jsx(Fr,{size:"sm",variant:"outline",onClick:o,children:i}),u&&$e.jsx("button",{"aria-label":"Close toast",onClick:u,className:"text-neo-muted hover:text-neo-text transition-colors",children:"✕"})]})},Kd="169",E_=0,Hp=1,T_=2,jm=1,w_=2,Un=3,yi=0,Ar=1,Dn=2,vi=0,Oa=1,Nl=2,Vp=3,Gp=4,A_=5,Gi=100,R_=101,C_=102,b_=103,P_=104,L_=200,N_=201,U_=202,D_=203,sd=204,od=205,I_=206,O_=207,F_=208,k_=209,z_=210,B_=211,H_=212,V_=213,G_=214,ld=0,ud=1,cd=2,za=3,dd=4,hd=5,fd=6,pd=7,Xm=0,W_=1,j_=2,_i=0,X_=1,Y_=2,q_=3,K_=4,Z_=5,$_=6,Q_=7,Ym=300,Ba=301,Ha=302,md=303,gd=304,Bl=306,vd=1e3,ji=1001,_d=1002,Xr=1003,J_=1004,Jo=1005,an=1006,Ac=1007,Xi=1008,zn=1009,qm=1010,Km=1011,zs=1012,Zd=1013,Yi=1014,In=1015,Bs=1016,$d=1017,Qd=1018,Va=1020,Zm=35902,$m=1021,Qm=1022,on=1023,Jm=1024,eg=1025,Fa=1026,Ga=1027,tg=1028,Jd=1029,rg=1030,eh=1031,th=1033,wl=33776,Al=33777,Rl=33778,Cl=33779,xd=35840,yd=35841,Sd=35842,Md=35843,Ed=36196,Td=37492,wd=37496,Ad=37808,Rd=37809,Cd=37810,bd=37811,Pd=37812,Ld=37813,Nd=37814,Ud=37815,Dd=37816,Id=37817,Od=37818,Fd=37819,kd=37820,zd=37821,bl=36492,Bd=36494,Hd=36495,ng=36283,Vd=36284,Gd=36285,Wd=36286,e0=3200,t0=3201,r0=0,n0=1,gi="",pn="srgb",Si="srgb-linear",rh="display-p3",Hl="display-p3-linear",Ul="linear",Ut="srgb",Dl="rec709",Il="p3",Sa=7680,Wp=519,i0=512,a0=513,s0=514,ig=515,o0=516,l0=517,u0=518,c0=519,jp=35044,Xp="300 es",On=2e3,Ol=2001;class ja{addEventListener(e,r){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(r)===-1&&i[e].push(r)}hasEventListener(e,r){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(r)!==-1}removeEventListener(e,r){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const o=i.indexOf(r);o!==-1&&i.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const i=r.slice(0);for(let o=0,u=i.length;o<u;o++)i[o].call(this,e);e.target=null}}}const cr=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rc=Math.PI/180,jd=180/Math.PI;function Hs(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,r=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(cr[a&255]+cr[a>>8&255]+cr[a>>16&255]+cr[a>>24&255]+"-"+cr[e&255]+cr[e>>8&255]+"-"+cr[e>>16&15|64]+cr[e>>24&255]+"-"+cr[r&63|128]+cr[r>>8&255]+"-"+cr[r>>16&255]+cr[r>>24&255]+cr[i&255]+cr[i>>8&255]+cr[i>>16&255]+cr[i>>24&255]).toLowerCase()}function Er(a,e,r){return Math.max(e,Math.min(r,a))}function d0(a,e){return(a%e+e)%e}function Cc(a,e,r){return(1-r)*a+r*e}function Ps(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Mr(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class wt{constructor(e=0,r=0){wt.prototype.isVector2=!0,this.x=e,this.y=r}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,r){return this.x=e,this.y=r,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const r=this.x,i=this.y,o=e.elements;return this.x=o[0]*r+o[3]*i+o[6],this.y=o[1]*r+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,r){return this.x=Math.max(e.x,Math.min(r.x,this.x)),this.y=Math.max(e.y,Math.min(r.y,this.y)),this}clampScalar(e,r){return this.x=Math.max(e,Math.min(r,this.x)),this.y=Math.max(e,Math.min(r,this.y)),this}clampLength(e,r){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(r,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const r=Math.sqrt(this.lengthSq()*e.lengthSq());if(r===0)return Math.PI/2;const i=this.dot(e)/r;return Math.acos(Er(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const r=this.x-e.x,i=this.y-e.y;return r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this}lerpVectors(e,r,i){return this.x=e.x+(r.x-e.x)*i,this.y=e.y+(r.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this}rotateAround(e,r){const i=Math.cos(r),o=Math.sin(r),u=this.x-e.x,d=this.y-e.y;return this.x=u*i-d*o+e.x,this.y=u*o+d*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,r,i,o,u,d,h,f,m){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,r,i,o,u,d,h,f,m)}set(e,r,i,o,u,d,h,f,m){const g=this.elements;return g[0]=e,g[1]=o,g[2]=h,g[3]=r,g[4]=u,g[5]=f,g[6]=i,g[7]=d,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const r=this.elements,i=e.elements;return r[0]=i[0],r[1]=i[1],r[2]=i[2],r[3]=i[3],r[4]=i[4],r[5]=i[5],r[6]=i[6],r[7]=i[7],r[8]=i[8],this}extractBasis(e,r,i){return e.setFromMatrix3Column(this,0),r.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const r=e.elements;return this.set(r[0],r[4],r[8],r[1],r[5],r[9],r[2],r[6],r[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,r){const i=e.elements,o=r.elements,u=this.elements,d=i[0],h=i[3],f=i[6],m=i[1],g=i[4],y=i[7],x=i[2],S=i[5],w=i[8],A=o[0],v=o[3],_=o[6],D=o[1],b=o[4],U=o[7],te=o[2],B=o[5],I=o[8];return u[0]=d*A+h*D+f*te,u[3]=d*v+h*b+f*B,u[6]=d*_+h*U+f*I,u[1]=m*A+g*D+y*te,u[4]=m*v+g*b+y*B,u[7]=m*_+g*U+y*I,u[2]=x*A+S*D+w*te,u[5]=x*v+S*b+w*B,u[8]=x*_+S*U+w*I,this}multiplyScalar(e){const r=this.elements;return r[0]*=e,r[3]*=e,r[6]*=e,r[1]*=e,r[4]*=e,r[7]*=e,r[2]*=e,r[5]*=e,r[8]*=e,this}determinant(){const e=this.elements,r=e[0],i=e[1],o=e[2],u=e[3],d=e[4],h=e[5],f=e[6],m=e[7],g=e[8];return r*d*g-r*h*m-i*u*g+i*h*f+o*u*m-o*d*f}invert(){const e=this.elements,r=e[0],i=e[1],o=e[2],u=e[3],d=e[4],h=e[5],f=e[6],m=e[7],g=e[8],y=g*d-h*m,x=h*f-g*u,S=m*u-d*f,w=r*y+i*x+o*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=y*A,e[1]=(o*m-g*i)*A,e[2]=(h*i-o*d)*A,e[3]=x*A,e[4]=(g*r-o*f)*A,e[5]=(o*u-h*r)*A,e[6]=S*A,e[7]=(i*f-m*r)*A,e[8]=(d*r-i*u)*A,this}transpose(){let e;const r=this.elements;return e=r[1],r[1]=r[3],r[3]=e,e=r[2],r[2]=r[6],r[6]=e,e=r[5],r[5]=r[7],r[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const r=this.elements;return e[0]=r[0],e[1]=r[3],e[2]=r[6],e[3]=r[1],e[4]=r[4],e[5]=r[7],e[6]=r[2],e[7]=r[5],e[8]=r[8],this}setUvTransform(e,r,i,o,u,d,h){const f=Math.cos(u),m=Math.sin(u);return this.set(i*f,i*m,-i*(f*d+m*h)+d+e,-o*m,o*f,-o*(-m*d+f*h)+h+r,0,0,1),this}scale(e,r){return this.premultiply(bc.makeScale(e,r)),this}rotate(e){return this.premultiply(bc.makeRotation(-e)),this}translate(e,r){return this.premultiply(bc.makeTranslation(e,r)),this}makeTranslation(e,r){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,r,0,0,1),this}makeRotation(e){const r=Math.cos(e),i=Math.sin(e);return this.set(r,-i,0,i,r,0,0,0,1),this}makeScale(e,r){return this.set(e,0,0,0,r,0,0,0,1),this}equals(e){const r=this.elements,i=e.elements;for(let o=0;o<9;o++)if(r[o]!==i[o])return!1;return!0}fromArray(e,r=0){for(let i=0;i<9;i++)this.elements[i]=e[i+r];return this}toArray(e=[],r=0){const i=this.elements;return e[r]=i[0],e[r+1]=i[1],e[r+2]=i[2],e[r+3]=i[3],e[r+4]=i[4],e[r+5]=i[5],e[r+6]=i[6],e[r+7]=i[7],e[r+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bc=new st;function ag(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Fl(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function h0(){const a=Fl("canvas");return a.style.display="block",a}const Yp={};function Pl(a){a in Yp||(Yp[a]=!0,console.warn(a))}function f0(a,e,r){return new Promise(function(i,o){function u(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(u,r);break;default:i()}}setTimeout(u,r)})}function p0(a){const e=a.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function m0(a){const e=a.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const qp=new st().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Kp=new st().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ls={[Si]:{transfer:Ul,primaries:Dl,luminanceCoefficients:[.2126,.7152,.0722],toReference:a=>a,fromReference:a=>a},[pn]:{transfer:Ut,primaries:Dl,luminanceCoefficients:[.2126,.7152,.0722],toReference:a=>a.convertSRGBToLinear(),fromReference:a=>a.convertLinearToSRGB()},[Hl]:{transfer:Ul,primaries:Il,luminanceCoefficients:[.2289,.6917,.0793],toReference:a=>a.applyMatrix3(Kp),fromReference:a=>a.applyMatrix3(qp)},[rh]:{transfer:Ut,primaries:Il,luminanceCoefficients:[.2289,.6917,.0793],toReference:a=>a.convertSRGBToLinear().applyMatrix3(Kp),fromReference:a=>a.applyMatrix3(qp).convertLinearToSRGB()}},g0=new Set([Si,Hl]),St={enabled:!0,_workingColorSpace:Si,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(a){if(!g0.has(a))throw new Error(`Unsupported working color space, "${a}".`);this._workingColorSpace=a},convert:function(a,e,r){if(this.enabled===!1||e===r||!e||!r)return a;const i=Ls[e].toReference,o=Ls[r].fromReference;return o(i(a))},fromWorkingColorSpace:function(a,e){return this.convert(a,this._workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this._workingColorSpace)},getPrimaries:function(a){return Ls[a].primaries},getTransfer:function(a){return a===gi?Ul:Ls[a].transfer},getLuminanceCoefficients:function(a,e=this._workingColorSpace){return a.fromArray(Ls[e].luminanceCoefficients)}};function ka(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Pc(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Ma;class v0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ma===void 0&&(Ma=Fl("canvas")),Ma.width=e.width,Ma.height=e.height;const i=Ma.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),r=Ma}return r.width>2048||r.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),r.toDataURL("image/jpeg",.6)):r.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const r=Fl("canvas");r.width=e.width,r.height=e.height;const i=r.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height),u=o.data;for(let d=0;d<u.length;d++)u[d]=ka(u[d]/255)*255;return i.putImageData(o,0,0),r}else if(e.data){const r=e.data.slice(0);for(let i=0;i<r.length;i++)r instanceof Uint8Array||r instanceof Uint8ClampedArray?r[i]=Math.floor(ka(r[i]/255)*255):r[i]=ka(r[i]);return{data:r,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _0=0;class sg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=Hs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const r=e===void 0||typeof e=="string";if(!r&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let u;if(Array.isArray(o)){u=[];for(let d=0,h=o.length;d<h;d++)o[d].isDataTexture?u.push(Lc(o[d].image)):u.push(Lc(o[d]))}else u=Lc(o);i.url=u}return r||(e.images[this.uuid]=i),i}}function Lc(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?v0.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let x0=0;class Rr extends ja{constructor(e=Rr.DEFAULT_IMAGE,r=Rr.DEFAULT_MAPPING,i=ji,o=ji,u=an,d=Xi,h=on,f=zn,m=Rr.DEFAULT_ANISOTROPY,g=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=Hs(),this.name="",this.source=new sg(e),this.mipmaps=[],this.mapping=r,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=u,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=f,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const r=e===void 0||typeof e=="string";if(!r&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),r||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ym)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vd:e.x=e.x-Math.floor(e.x);break;case ji:e.x=e.x<0?0:1;break;case _d:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vd:e.y=e.y-Math.floor(e.y);break;case ji:e.y=e.y<0?0:1;break;case _d:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rr.DEFAULT_IMAGE=null;Rr.DEFAULT_MAPPING=Ym;Rr.DEFAULT_ANISOTROPY=1;class Ht{constructor(e=0,r=0,i=0,o=1){Ht.prototype.isVector4=!0,this.x=e,this.y=r,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,r,i,o){return this.x=e,this.y=r,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;case 3:this.w=r;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this.z=e.z+r.z,this.w=e.w+r.w,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this.z+=e.z*r,this.w+=e.w*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this.z=e.z-r.z,this.w=e.w-r.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const r=this.x,i=this.y,o=this.z,u=this.w,d=e.elements;return this.x=d[0]*r+d[4]*i+d[8]*o+d[12]*u,this.y=d[1]*r+d[5]*i+d[9]*o+d[13]*u,this.z=d[2]*r+d[6]*i+d[10]*o+d[14]*u,this.w=d[3]*r+d[7]*i+d[11]*o+d[15]*u,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const r=Math.sqrt(1-e.w*e.w);return r<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/r,this.y=e.y/r,this.z=e.z/r),this}setAxisAngleFromRotationMatrix(e){let r,i,o,u;const d=e.elements,h=d[0],f=d[4],m=d[8],g=d[1],y=d[5],x=d[9],S=d[2],w=d[6],A=d[10];if(Math.abs(f-g)<.01&&Math.abs(m-S)<.01&&Math.abs(x-w)<.01){if(Math.abs(f+g)<.1&&Math.abs(m+S)<.1&&Math.abs(x+w)<.1&&Math.abs(h+y+A-3)<.1)return this.set(1,0,0,0),this;r=Math.PI;const _=(h+1)/2,D=(y+1)/2,b=(A+1)/2,U=(f+g)/4,te=(m+S)/4,B=(x+w)/4;return _>D&&_>b?_<.01?(i=0,o=.707106781,u=.707106781):(i=Math.sqrt(_),o=U/i,u=te/i):D>b?D<.01?(i=.707106781,o=0,u=.707106781):(o=Math.sqrt(D),i=U/o,u=B/o):b<.01?(i=.707106781,o=.707106781,u=0):(u=Math.sqrt(b),i=te/u,o=B/u),this.set(i,o,u,r),this}let v=Math.sqrt((w-x)*(w-x)+(m-S)*(m-S)+(g-f)*(g-f));return Math.abs(v)<.001&&(v=1),this.x=(w-x)/v,this.y=(m-S)/v,this.z=(g-f)/v,this.w=Math.acos((h+y+A-1)/2),this}setFromMatrixPosition(e){const r=e.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this.w=r[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,r){return this.x=Math.max(e.x,Math.min(r.x,this.x)),this.y=Math.max(e.y,Math.min(r.y,this.y)),this.z=Math.max(e.z,Math.min(r.z,this.z)),this.w=Math.max(e.w,Math.min(r.w,this.w)),this}clampScalar(e,r){return this.x=Math.max(e,Math.min(r,this.x)),this.y=Math.max(e,Math.min(r,this.y)),this.z=Math.max(e,Math.min(r,this.z)),this.w=Math.max(e,Math.min(r,this.w)),this}clampLength(e,r){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(r,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this.z+=(e.z-this.z)*r,this.w+=(e.w-this.w)*r,this}lerpVectors(e,r,i){return this.x=e.x+(r.x-e.x)*i,this.y=e.y+(r.y-e.y)*i,this.z=e.z+(r.z-e.z)*i,this.w=e.w+(r.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this.z=e[r+2],this.w=e[r+3],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e[r+2]=this.z,e[r+3]=this.w,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this.z=e.getZ(r),this.w=e.getW(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class y0 extends ja{constructor(e=1,r=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=r,this.depth=1,this.scissor=new Ht(0,0,e,r),this.scissorTest=!1,this.viewport=new Ht(0,0,e,r);const o={width:e,height:r,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const u=new Rr(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);u.flipY=!1,u.generateMipmaps=i.generateMipmaps,u.internalFormat=i.internalFormat,this.textures=[];const d=i.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,r,i=1){if(this.width!==e||this.height!==r||this.depth!==i){this.width=e,this.height=r,this.depth=i;for(let o=0,u=this.textures.length;o<u;o++)this.textures[o].image.width=e,this.textures[o].image.height=r,this.textures[o].image.depth=i;this.dispose()}this.viewport.set(0,0,e,r),this.scissor.set(0,0,e,r)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,o=e.textures.length;i<o;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const r=Object.assign({},e.texture.image);return this.texture.source=new sg(r),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends y0{constructor(e=1,r=1,i={}){super(e,r,i),this.isWebGLRenderTarget=!0}}class og extends Rr{constructor(e=null,r=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:r,height:i,depth:o},this.magFilter=Xr,this.minFilter=Xr,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class S0 extends Rr{constructor(e=null,r=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:r,height:i,depth:o},this.magFilter=Xr,this.minFilter=Xr,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vs{constructor(e=0,r=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=r,this._z=i,this._w=o}static slerpFlat(e,r,i,o,u,d,h){let f=i[o+0],m=i[o+1],g=i[o+2],y=i[o+3];const x=u[d+0],S=u[d+1],w=u[d+2],A=u[d+3];if(h===0){e[r+0]=f,e[r+1]=m,e[r+2]=g,e[r+3]=y;return}if(h===1){e[r+0]=x,e[r+1]=S,e[r+2]=w,e[r+3]=A;return}if(y!==A||f!==x||m!==S||g!==w){let v=1-h;const _=f*x+m*S+g*w+y*A,D=_>=0?1:-1,b=1-_*_;if(b>Number.EPSILON){const te=Math.sqrt(b),B=Math.atan2(te,_*D);v=Math.sin(v*B)/te,h=Math.sin(h*B)/te}const U=h*D;if(f=f*v+x*U,m=m*v+S*U,g=g*v+w*U,y=y*v+A*U,v===1-h){const te=1/Math.sqrt(f*f+m*m+g*g+y*y);f*=te,m*=te,g*=te,y*=te}}e[r]=f,e[r+1]=m,e[r+2]=g,e[r+3]=y}static multiplyQuaternionsFlat(e,r,i,o,u,d){const h=i[o],f=i[o+1],m=i[o+2],g=i[o+3],y=u[d],x=u[d+1],S=u[d+2],w=u[d+3];return e[r]=h*w+g*y+f*S-m*x,e[r+1]=f*w+g*x+m*y-h*S,e[r+2]=m*w+g*S+h*x-f*y,e[r+3]=g*w-h*y-f*x-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,r,i,o){return this._x=e,this._y=r,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,r=!0){const i=e._x,o=e._y,u=e._z,d=e._order,h=Math.cos,f=Math.sin,m=h(i/2),g=h(o/2),y=h(u/2),x=f(i/2),S=f(o/2),w=f(u/2);switch(d){case"XYZ":this._x=x*g*y+m*S*w,this._y=m*S*y-x*g*w,this._z=m*g*w+x*S*y,this._w=m*g*y-x*S*w;break;case"YXZ":this._x=x*g*y+m*S*w,this._y=m*S*y-x*g*w,this._z=m*g*w-x*S*y,this._w=m*g*y+x*S*w;break;case"ZXY":this._x=x*g*y-m*S*w,this._y=m*S*y+x*g*w,this._z=m*g*w+x*S*y,this._w=m*g*y-x*S*w;break;case"ZYX":this._x=x*g*y-m*S*w,this._y=m*S*y+x*g*w,this._z=m*g*w-x*S*y,this._w=m*g*y+x*S*w;break;case"YZX":this._x=x*g*y+m*S*w,this._y=m*S*y+x*g*w,this._z=m*g*w-x*S*y,this._w=m*g*y-x*S*w;break;case"XZY":this._x=x*g*y-m*S*w,this._y=m*S*y-x*g*w,this._z=m*g*w+x*S*y,this._w=m*g*y+x*S*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return r===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,r){const i=r/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const r=e.elements,i=r[0],o=r[4],u=r[8],d=r[1],h=r[5],f=r[9],m=r[2],g=r[6],y=r[10],x=i+h+y;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(g-f)*S,this._y=(u-m)*S,this._z=(d-o)*S}else if(i>h&&i>y){const S=2*Math.sqrt(1+i-h-y);this._w=(g-f)/S,this._x=.25*S,this._y=(o+d)/S,this._z=(u+m)/S}else if(h>y){const S=2*Math.sqrt(1+h-i-y);this._w=(u-m)/S,this._x=(o+d)/S,this._y=.25*S,this._z=(f+g)/S}else{const S=2*Math.sqrt(1+y-i-h);this._w=(d-o)/S,this._x=(u+m)/S,this._y=(f+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,r){let i=e.dot(r)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*r.z-e.z*r.y,this._y=e.z*r.x-e.x*r.z,this._z=e.x*r.y-e.y*r.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Er(this.dot(e),-1,1)))}rotateTowards(e,r){const i=this.angleTo(e);if(i===0)return this;const o=Math.min(1,r/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,r){const i=e._x,o=e._y,u=e._z,d=e._w,h=r._x,f=r._y,m=r._z,g=r._w;return this._x=i*g+d*h+o*m-u*f,this._y=o*g+d*f+u*h-i*m,this._z=u*g+d*m+i*f-o*h,this._w=d*g-i*h-o*f-u*m,this._onChangeCallback(),this}slerp(e,r){if(r===0)return this;if(r===1)return this.copy(e);const i=this._x,o=this._y,u=this._z,d=this._w;let h=d*e._w+i*e._x+o*e._y+u*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=i,this._y=o,this._z=u,this;const f=1-h*h;if(f<=Number.EPSILON){const S=1-r;return this._w=S*d+r*this._w,this._x=S*i+r*this._x,this._y=S*o+r*this._y,this._z=S*u+r*this._z,this.normalize(),this}const m=Math.sqrt(f),g=Math.atan2(m,h),y=Math.sin((1-r)*g)/m,x=Math.sin(r*g)/m;return this._w=d*y+this._w*x,this._x=i*y+this._x*x,this._y=o*y+this._y*x,this._z=u*y+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,r,i){return this.copy(e).slerp(r,i)}random(){const e=2*Math.PI*Math.random(),r=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),u=Math.sqrt(i);return this.set(o*Math.sin(e),o*Math.cos(e),u*Math.sin(r),u*Math.cos(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,r=0){return this._x=e[r],this._y=e[r+1],this._z=e[r+2],this._w=e[r+3],this._onChangeCallback(),this}toArray(e=[],r=0){return e[r]=this._x,e[r+1]=this._y,e[r+2]=this._z,e[r+3]=this._w,e}fromBufferAttribute(e,r){return this._x=e.getX(r),this._y=e.getY(r),this._z=e.getZ(r),this._w=e.getW(r),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,r=0,i=0){J.prototype.isVector3=!0,this.x=e,this.y=r,this.z=i}set(e,r,i){return i===void 0&&(i=this.z),this.x=e,this.y=r,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this.z=e.z+r.z,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this.z+=e.z*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this.z=e.z-r.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,r){return this.x=e.x*r.x,this.y=e.y*r.y,this.z=e.z*r.z,this}applyEuler(e){return this.applyQuaternion(Zp.setFromEuler(e))}applyAxisAngle(e,r){return this.applyQuaternion(Zp.setFromAxisAngle(e,r))}applyMatrix3(e){const r=this.x,i=this.y,o=this.z,u=e.elements;return this.x=u[0]*r+u[3]*i+u[6]*o,this.y=u[1]*r+u[4]*i+u[7]*o,this.z=u[2]*r+u[5]*i+u[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const r=this.x,i=this.y,o=this.z,u=e.elements,d=1/(u[3]*r+u[7]*i+u[11]*o+u[15]);return this.x=(u[0]*r+u[4]*i+u[8]*o+u[12])*d,this.y=(u[1]*r+u[5]*i+u[9]*o+u[13])*d,this.z=(u[2]*r+u[6]*i+u[10]*o+u[14])*d,this}applyQuaternion(e){const r=this.x,i=this.y,o=this.z,u=e.x,d=e.y,h=e.z,f=e.w,m=2*(d*o-h*i),g=2*(h*r-u*o),y=2*(u*i-d*r);return this.x=r+f*m+d*y-h*g,this.y=i+f*g+h*m-u*y,this.z=o+f*y+u*g-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const r=this.x,i=this.y,o=this.z,u=e.elements;return this.x=u[0]*r+u[4]*i+u[8]*o,this.y=u[1]*r+u[5]*i+u[9]*o,this.z=u[2]*r+u[6]*i+u[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,r){return this.x=Math.max(e.x,Math.min(r.x,this.x)),this.y=Math.max(e.y,Math.min(r.y,this.y)),this.z=Math.max(e.z,Math.min(r.z,this.z)),this}clampScalar(e,r){return this.x=Math.max(e,Math.min(r,this.x)),this.y=Math.max(e,Math.min(r,this.y)),this.z=Math.max(e,Math.min(r,this.z)),this}clampLength(e,r){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(r,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this.z+=(e.z-this.z)*r,this}lerpVectors(e,r,i){return this.x=e.x+(r.x-e.x)*i,this.y=e.y+(r.y-e.y)*i,this.z=e.z+(r.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,r){const i=e.x,o=e.y,u=e.z,d=r.x,h=r.y,f=r.z;return this.x=o*f-u*h,this.y=u*d-i*f,this.z=i*h-o*d,this}projectOnVector(e){const r=e.lengthSq();if(r===0)return this.set(0,0,0);const i=e.dot(this)/r;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Nc.copy(this).projectOnVector(e),this.sub(Nc)}reflect(e){return this.sub(Nc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const r=Math.sqrt(this.lengthSq()*e.lengthSq());if(r===0)return Math.PI/2;const i=this.dot(e)/r;return Math.acos(Er(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const r=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return r*r+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,r,i){const o=Math.sin(r)*e;return this.x=o*Math.sin(i),this.y=Math.cos(r)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,r,i){return this.x=e*Math.sin(r),this.y=i,this.z=e*Math.cos(r),this}setFromMatrixPosition(e){const r=e.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this}setFromMatrixScale(e){const r=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=r,this.y=i,this.z=o,this}setFromMatrixColumn(e,r){return this.fromArray(e.elements,r*4)}setFromMatrix3Column(e,r){return this.fromArray(e.elements,r*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this.z=e[r+2],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e[r+2]=this.z,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this.z=e.getZ(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,r=Math.random()*2-1,i=Math.sqrt(1-r*r);return this.x=i*Math.cos(e),this.y=r,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nc=new J,Zp=new Vs;class Gs{constructor(e=new J(1/0,1/0,1/0),r=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=r}set(e,r){return this.min.copy(e),this.max.copy(r),this}setFromArray(e){this.makeEmpty();for(let r=0,i=e.length;r<i;r+=3)this.expandByPoint(en.fromArray(e,r));return this}setFromBufferAttribute(e){this.makeEmpty();for(let r=0,i=e.count;r<i;r++)this.expandByPoint(en.fromBufferAttribute(e,r));return this}setFromPoints(e){this.makeEmpty();for(let r=0,i=e.length;r<i;r++)this.expandByPoint(e[r]);return this}setFromCenterAndSize(e,r){const i=en.copy(r).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,r=!1){return this.makeEmpty(),this.expandByObject(e,r)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,r=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const u=i.getAttribute("position");if(r===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,en):en.fromBufferAttribute(u,d),en.applyMatrix4(e.matrixWorld),this.expandByPoint(en);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),el.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),el.copy(i.boundingBox)),el.applyMatrix4(e.matrixWorld),this.union(el)}const o=e.children;for(let u=0,d=o.length;u<d;u++)this.expandByObject(o[u],r);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,r){return r.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let r,i;return e.normal.x>0?(r=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(r=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(r+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(r+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(r+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(r+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),r<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ns),tl.subVectors(this.max,Ns),Ea.subVectors(e.a,Ns),Ta.subVectors(e.b,Ns),wa.subVectors(e.c,Ns),ci.subVectors(Ta,Ea),di.subVectors(wa,Ta),Ii.subVectors(Ea,wa);let r=[0,-ci.z,ci.y,0,-di.z,di.y,0,-Ii.z,Ii.y,ci.z,0,-ci.x,di.z,0,-di.x,Ii.z,0,-Ii.x,-ci.y,ci.x,0,-di.y,di.x,0,-Ii.y,Ii.x,0];return!Uc(r,Ea,Ta,wa,tl)||(r=[1,0,0,0,1,0,0,0,1],!Uc(r,Ea,Ta,wa,tl))?!1:(rl.crossVectors(ci,di),r=[rl.x,rl.y,rl.z],Uc(r,Ea,Ta,wa,tl))}clampPoint(e,r){return r.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,en).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(en).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Cn=[new J,new J,new J,new J,new J,new J,new J,new J],en=new J,el=new Gs,Ea=new J,Ta=new J,wa=new J,ci=new J,di=new J,Ii=new J,Ns=new J,tl=new J,rl=new J,Oi=new J;function Uc(a,e,r,i,o){for(let u=0,d=a.length-3;u<=d;u+=3){Oi.fromArray(a,u);const h=o.x*Math.abs(Oi.x)+o.y*Math.abs(Oi.y)+o.z*Math.abs(Oi.z),f=e.dot(Oi),m=r.dot(Oi),g=i.dot(Oi);if(Math.max(-Math.max(f,m,g),Math.min(f,m,g))>h)return!1}return!0}const M0=new Gs,Us=new J,Dc=new J;class Ws{constructor(e=new J,r=-1){this.isSphere=!0,this.center=e,this.radius=r}set(e,r){return this.center.copy(e),this.radius=r,this}setFromPoints(e,r){const i=this.center;r!==void 0?i.copy(r):M0.setFromPoints(e).getCenter(i);let o=0;for(let u=0,d=e.length;u<d;u++)o=Math.max(o,i.distanceToSquared(e[u]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const r=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=r*r}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,r){const i=this.center.distanceToSquared(e);return r.copy(e),i>this.radius*this.radius&&(r.sub(this.center).normalize(),r.multiplyScalar(this.radius).add(this.center)),r}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Us.subVectors(e,this.center);const r=Us.lengthSq();if(r>this.radius*this.radius){const i=Math.sqrt(r),o=(i-this.radius)*.5;this.center.addScaledVector(Us,o/i),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Us.copy(e.center).add(Dc)),this.expandByPoint(Us.copy(e.center).sub(Dc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bn=new J,Ic=new J,nl=new J,hi=new J,Oc=new J,il=new J,Fc=new J;class nh{constructor(e=new J,r=new J(0,0,-1)){this.origin=e,this.direction=r}set(e,r){return this.origin.copy(e),this.direction.copy(r),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,r){return r.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bn)),this}closestPointToPoint(e,r){r.subVectors(e,this.origin);const i=r.dot(this.direction);return i<0?r.copy(this.origin):r.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const r=bn.subVectors(e,this.origin).dot(this.direction);return r<0?this.origin.distanceToSquared(e):(bn.copy(this.origin).addScaledVector(this.direction,r),bn.distanceToSquared(e))}distanceSqToSegment(e,r,i,o){Ic.copy(e).add(r).multiplyScalar(.5),nl.copy(r).sub(e).normalize(),hi.copy(this.origin).sub(Ic);const u=e.distanceTo(r)*.5,d=-this.direction.dot(nl),h=hi.dot(this.direction),f=-hi.dot(nl),m=hi.lengthSq(),g=Math.abs(1-d*d);let y,x,S,w;if(g>0)if(y=d*f-h,x=d*h-f,w=u*g,y>=0)if(x>=-w)if(x<=w){const A=1/g;y*=A,x*=A,S=y*(y+d*x+2*h)+x*(d*y+x+2*f)+m}else x=u,y=Math.max(0,-(d*x+h)),S=-y*y+x*(x+2*f)+m;else x=-u,y=Math.max(0,-(d*x+h)),S=-y*y+x*(x+2*f)+m;else x<=-w?(y=Math.max(0,-(-d*u+h)),x=y>0?-u:Math.min(Math.max(-u,-f),u),S=-y*y+x*(x+2*f)+m):x<=w?(y=0,x=Math.min(Math.max(-u,-f),u),S=x*(x+2*f)+m):(y=Math.max(0,-(d*u+h)),x=y>0?u:Math.min(Math.max(-u,-f),u),S=-y*y+x*(x+2*f)+m);else x=d>0?-u:u,y=Math.max(0,-(d*x+h)),S=-y*y+x*(x+2*f)+m;return i&&i.copy(this.origin).addScaledVector(this.direction,y),o&&o.copy(Ic).addScaledVector(nl,x),S}intersectSphere(e,r){bn.subVectors(e.center,this.origin);const i=bn.dot(this.direction),o=bn.dot(bn)-i*i,u=e.radius*e.radius;if(o>u)return null;const d=Math.sqrt(u-o),h=i-d,f=i+d;return f<0?null:h<0?this.at(f,r):this.at(h,r)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const r=e.normal.dot(this.direction);if(r===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/r;return i>=0?i:null}intersectPlane(e,r){const i=this.distanceToPlane(e);return i===null?null:this.at(i,r)}intersectsPlane(e){const r=e.distanceToPoint(this.origin);return r===0||e.normal.dot(this.direction)*r<0}intersectBox(e,r){let i,o,u,d,h,f;const m=1/this.direction.x,g=1/this.direction.y,y=1/this.direction.z,x=this.origin;return m>=0?(i=(e.min.x-x.x)*m,o=(e.max.x-x.x)*m):(i=(e.max.x-x.x)*m,o=(e.min.x-x.x)*m),g>=0?(u=(e.min.y-x.y)*g,d=(e.max.y-x.y)*g):(u=(e.max.y-x.y)*g,d=(e.min.y-x.y)*g),i>d||u>o||((u>i||isNaN(i))&&(i=u),(d<o||isNaN(o))&&(o=d),y>=0?(h=(e.min.z-x.z)*y,f=(e.max.z-x.z)*y):(h=(e.max.z-x.z)*y,f=(e.min.z-x.z)*y),i>f||h>o)||((h>i||i!==i)&&(i=h),(f<o||o!==o)&&(o=f),o<0)?null:this.at(i>=0?i:o,r)}intersectsBox(e){return this.intersectBox(e,bn)!==null}intersectTriangle(e,r,i,o,u){Oc.subVectors(r,e),il.subVectors(i,e),Fc.crossVectors(Oc,il);let d=this.direction.dot(Fc),h;if(d>0){if(o)return null;h=1}else if(d<0)h=-1,d=-d;else return null;hi.subVectors(this.origin,e);const f=h*this.direction.dot(il.crossVectors(hi,il));if(f<0)return null;const m=h*this.direction.dot(Oc.cross(hi));if(m<0||f+m>d)return null;const g=-h*hi.dot(Fc);return g<0?null:this.at(g/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(e,r,i,o,u,d,h,f,m,g,y,x,S,w,A,v){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,r,i,o,u,d,h,f,m,g,y,x,S,w,A,v)}set(e,r,i,o,u,d,h,f,m,g,y,x,S,w,A,v){const _=this.elements;return _[0]=e,_[4]=r,_[8]=i,_[12]=o,_[1]=u,_[5]=d,_[9]=h,_[13]=f,_[2]=m,_[6]=g,_[10]=y,_[14]=x,_[3]=S,_[7]=w,_[11]=A,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(e){const r=this.elements,i=e.elements;return r[0]=i[0],r[1]=i[1],r[2]=i[2],r[3]=i[3],r[4]=i[4],r[5]=i[5],r[6]=i[6],r[7]=i[7],r[8]=i[8],r[9]=i[9],r[10]=i[10],r[11]=i[11],r[12]=i[12],r[13]=i[13],r[14]=i[14],r[15]=i[15],this}copyPosition(e){const r=this.elements,i=e.elements;return r[12]=i[12],r[13]=i[13],r[14]=i[14],this}setFromMatrix3(e){const r=e.elements;return this.set(r[0],r[3],r[6],0,r[1],r[4],r[7],0,r[2],r[5],r[8],0,0,0,0,1),this}extractBasis(e,r,i){return e.setFromMatrixColumn(this,0),r.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,r,i){return this.set(e.x,r.x,i.x,0,e.y,r.y,i.y,0,e.z,r.z,i.z,0,0,0,0,1),this}extractRotation(e){const r=this.elements,i=e.elements,o=1/Aa.setFromMatrixColumn(e,0).length(),u=1/Aa.setFromMatrixColumn(e,1).length(),d=1/Aa.setFromMatrixColumn(e,2).length();return r[0]=i[0]*o,r[1]=i[1]*o,r[2]=i[2]*o,r[3]=0,r[4]=i[4]*u,r[5]=i[5]*u,r[6]=i[6]*u,r[7]=0,r[8]=i[8]*d,r[9]=i[9]*d,r[10]=i[10]*d,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromEuler(e){const r=this.elements,i=e.x,o=e.y,u=e.z,d=Math.cos(i),h=Math.sin(i),f=Math.cos(o),m=Math.sin(o),g=Math.cos(u),y=Math.sin(u);if(e.order==="XYZ"){const x=d*g,S=d*y,w=h*g,A=h*y;r[0]=f*g,r[4]=-f*y,r[8]=m,r[1]=S+w*m,r[5]=x-A*m,r[9]=-h*f,r[2]=A-x*m,r[6]=w+S*m,r[10]=d*f}else if(e.order==="YXZ"){const x=f*g,S=f*y,w=m*g,A=m*y;r[0]=x+A*h,r[4]=w*h-S,r[8]=d*m,r[1]=d*y,r[5]=d*g,r[9]=-h,r[2]=S*h-w,r[6]=A+x*h,r[10]=d*f}else if(e.order==="ZXY"){const x=f*g,S=f*y,w=m*g,A=m*y;r[0]=x-A*h,r[4]=-d*y,r[8]=w+S*h,r[1]=S+w*h,r[5]=d*g,r[9]=A-x*h,r[2]=-d*m,r[6]=h,r[10]=d*f}else if(e.order==="ZYX"){const x=d*g,S=d*y,w=h*g,A=h*y;r[0]=f*g,r[4]=w*m-S,r[8]=x*m+A,r[1]=f*y,r[5]=A*m+x,r[9]=S*m-w,r[2]=-m,r[6]=h*f,r[10]=d*f}else if(e.order==="YZX"){const x=d*f,S=d*m,w=h*f,A=h*m;r[0]=f*g,r[4]=A-x*y,r[8]=w*y+S,r[1]=y,r[5]=d*g,r[9]=-h*g,r[2]=-m*g,r[6]=S*y+w,r[10]=x-A*y}else if(e.order==="XZY"){const x=d*f,S=d*m,w=h*f,A=h*m;r[0]=f*g,r[4]=-y,r[8]=m*g,r[1]=x*y+A,r[5]=d*g,r[9]=S*y-w,r[2]=w*y-S,r[6]=h*g,r[10]=A*y+x}return r[3]=0,r[7]=0,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromQuaternion(e){return this.compose(E0,e,T0)}lookAt(e,r,i){const o=this.elements;return Dr.subVectors(e,r),Dr.lengthSq()===0&&(Dr.z=1),Dr.normalize(),fi.crossVectors(i,Dr),fi.lengthSq()===0&&(Math.abs(i.z)===1?Dr.x+=1e-4:Dr.z+=1e-4,Dr.normalize(),fi.crossVectors(i,Dr)),fi.normalize(),al.crossVectors(Dr,fi),o[0]=fi.x,o[4]=al.x,o[8]=Dr.x,o[1]=fi.y,o[5]=al.y,o[9]=Dr.y,o[2]=fi.z,o[6]=al.z,o[10]=Dr.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,r){const i=e.elements,o=r.elements,u=this.elements,d=i[0],h=i[4],f=i[8],m=i[12],g=i[1],y=i[5],x=i[9],S=i[13],w=i[2],A=i[6],v=i[10],_=i[14],D=i[3],b=i[7],U=i[11],te=i[15],B=o[0],I=o[4],q=o[8],_e=o[12],E=o[1],C=o[5],re=o[9],ne=o[13],ae=o[2],pe=o[6],ee=o[10],ce=o[14],k=o[3],oe=o[7],se=o[11],N=o[15];return u[0]=d*B+h*E+f*ae+m*k,u[4]=d*I+h*C+f*pe+m*oe,u[8]=d*q+h*re+f*ee+m*se,u[12]=d*_e+h*ne+f*ce+m*N,u[1]=g*B+y*E+x*ae+S*k,u[5]=g*I+y*C+x*pe+S*oe,u[9]=g*q+y*re+x*ee+S*se,u[13]=g*_e+y*ne+x*ce+S*N,u[2]=w*B+A*E+v*ae+_*k,u[6]=w*I+A*C+v*pe+_*oe,u[10]=w*q+A*re+v*ee+_*se,u[14]=w*_e+A*ne+v*ce+_*N,u[3]=D*B+b*E+U*ae+te*k,u[7]=D*I+b*C+U*pe+te*oe,u[11]=D*q+b*re+U*ee+te*se,u[15]=D*_e+b*ne+U*ce+te*N,this}multiplyScalar(e){const r=this.elements;return r[0]*=e,r[4]*=e,r[8]*=e,r[12]*=e,r[1]*=e,r[5]*=e,r[9]*=e,r[13]*=e,r[2]*=e,r[6]*=e,r[10]*=e,r[14]*=e,r[3]*=e,r[7]*=e,r[11]*=e,r[15]*=e,this}determinant(){const e=this.elements,r=e[0],i=e[4],o=e[8],u=e[12],d=e[1],h=e[5],f=e[9],m=e[13],g=e[2],y=e[6],x=e[10],S=e[14],w=e[3],A=e[7],v=e[11],_=e[15];return w*(+u*f*y-o*m*y-u*h*x+i*m*x+o*h*S-i*f*S)+A*(+r*f*S-r*m*x+u*d*x-o*d*S+o*m*g-u*f*g)+v*(+r*m*y-r*h*S-u*d*y+i*d*S+u*h*g-i*m*g)+_*(-o*h*g-r*f*y+r*h*x+o*d*y-i*d*x+i*f*g)}transpose(){const e=this.elements;let r;return r=e[1],e[1]=e[4],e[4]=r,r=e[2],e[2]=e[8],e[8]=r,r=e[6],e[6]=e[9],e[9]=r,r=e[3],e[3]=e[12],e[12]=r,r=e[7],e[7]=e[13],e[13]=r,r=e[11],e[11]=e[14],e[14]=r,this}setPosition(e,r,i){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=r,o[14]=i),this}invert(){const e=this.elements,r=e[0],i=e[1],o=e[2],u=e[3],d=e[4],h=e[5],f=e[6],m=e[7],g=e[8],y=e[9],x=e[10],S=e[11],w=e[12],A=e[13],v=e[14],_=e[15],D=y*v*m-A*x*m+A*f*S-h*v*S-y*f*_+h*x*_,b=w*x*m-g*v*m-w*f*S+d*v*S+g*f*_-d*x*_,U=g*A*m-w*y*m+w*h*S-d*A*S-g*h*_+d*y*_,te=w*y*f-g*A*f-w*h*x+d*A*x+g*h*v-d*y*v,B=r*D+i*b+o*U+u*te;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/B;return e[0]=D*I,e[1]=(A*x*u-y*v*u-A*o*S+i*v*S+y*o*_-i*x*_)*I,e[2]=(h*v*u-A*f*u+A*o*m-i*v*m-h*o*_+i*f*_)*I,e[3]=(y*f*u-h*x*u-y*o*m+i*x*m+h*o*S-i*f*S)*I,e[4]=b*I,e[5]=(g*v*u-w*x*u+w*o*S-r*v*S-g*o*_+r*x*_)*I,e[6]=(w*f*u-d*v*u-w*o*m+r*v*m+d*o*_-r*f*_)*I,e[7]=(d*x*u-g*f*u+g*o*m-r*x*m-d*o*S+r*f*S)*I,e[8]=U*I,e[9]=(w*y*u-g*A*u-w*i*S+r*A*S+g*i*_-r*y*_)*I,e[10]=(d*A*u-w*h*u+w*i*m-r*A*m-d*i*_+r*h*_)*I,e[11]=(g*h*u-d*y*u-g*i*m+r*y*m+d*i*S-r*h*S)*I,e[12]=te*I,e[13]=(g*A*o-w*y*o+w*i*x-r*A*x-g*i*v+r*y*v)*I,e[14]=(w*h*o-d*A*o-w*i*f+r*A*f+d*i*v-r*h*v)*I,e[15]=(d*y*o-g*h*o+g*i*f-r*y*f-d*i*x+r*h*x)*I,this}scale(e){const r=this.elements,i=e.x,o=e.y,u=e.z;return r[0]*=i,r[4]*=o,r[8]*=u,r[1]*=i,r[5]*=o,r[9]*=u,r[2]*=i,r[6]*=o,r[10]*=u,r[3]*=i,r[7]*=o,r[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,r=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(r,i,o))}makeTranslation(e,r,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,r,0,0,1,i,0,0,0,1),this}makeRotationX(e){const r=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,r,-i,0,0,i,r,0,0,0,0,1),this}makeRotationY(e){const r=Math.cos(e),i=Math.sin(e);return this.set(r,0,i,0,0,1,0,0,-i,0,r,0,0,0,0,1),this}makeRotationZ(e){const r=Math.cos(e),i=Math.sin(e);return this.set(r,-i,0,0,i,r,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,r){const i=Math.cos(r),o=Math.sin(r),u=1-i,d=e.x,h=e.y,f=e.z,m=u*d,g=u*h;return this.set(m*d+i,m*h-o*f,m*f+o*h,0,m*h+o*f,g*h+i,g*f-o*d,0,m*f-o*h,g*f+o*d,u*f*f+i,0,0,0,0,1),this}makeScale(e,r,i){return this.set(e,0,0,0,0,r,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,r,i,o,u,d){return this.set(1,i,u,0,e,1,d,0,r,o,1,0,0,0,0,1),this}compose(e,r,i){const o=this.elements,u=r._x,d=r._y,h=r._z,f=r._w,m=u+u,g=d+d,y=h+h,x=u*m,S=u*g,w=u*y,A=d*g,v=d*y,_=h*y,D=f*m,b=f*g,U=f*y,te=i.x,B=i.y,I=i.z;return o[0]=(1-(A+_))*te,o[1]=(S+U)*te,o[2]=(w-b)*te,o[3]=0,o[4]=(S-U)*B,o[5]=(1-(x+_))*B,o[6]=(v+D)*B,o[7]=0,o[8]=(w+b)*I,o[9]=(v-D)*I,o[10]=(1-(x+A))*I,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,r,i){const o=this.elements;let u=Aa.set(o[0],o[1],o[2]).length();const d=Aa.set(o[4],o[5],o[6]).length(),h=Aa.set(o[8],o[9],o[10]).length();this.determinant()<0&&(u=-u),e.x=o[12],e.y=o[13],e.z=o[14],tn.copy(this);const f=1/u,m=1/d,g=1/h;return tn.elements[0]*=f,tn.elements[1]*=f,tn.elements[2]*=f,tn.elements[4]*=m,tn.elements[5]*=m,tn.elements[6]*=m,tn.elements[8]*=g,tn.elements[9]*=g,tn.elements[10]*=g,r.setFromRotationMatrix(tn),i.x=u,i.y=d,i.z=h,this}makePerspective(e,r,i,o,u,d,h=On){const f=this.elements,m=2*u/(r-e),g=2*u/(i-o),y=(r+e)/(r-e),x=(i+o)/(i-o);let S,w;if(h===On)S=-(d+u)/(d-u),w=-2*d*u/(d-u);else if(h===Ol)S=-d/(d-u),w=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return f[0]=m,f[4]=0,f[8]=y,f[12]=0,f[1]=0,f[5]=g,f[9]=x,f[13]=0,f[2]=0,f[6]=0,f[10]=S,f[14]=w,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,r,i,o,u,d,h=On){const f=this.elements,m=1/(r-e),g=1/(i-o),y=1/(d-u),x=(r+e)*m,S=(i+o)*g;let w,A;if(h===On)w=(d+u)*y,A=-2*y;else if(h===Ol)w=u*y,A=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return f[0]=2*m,f[4]=0,f[8]=0,f[12]=-x,f[1]=0,f[5]=2*g,f[9]=0,f[13]=-S,f[2]=0,f[6]=0,f[10]=A,f[14]=-w,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const r=this.elements,i=e.elements;for(let o=0;o<16;o++)if(r[o]!==i[o])return!1;return!0}fromArray(e,r=0){for(let i=0;i<16;i++)this.elements[i]=e[i+r];return this}toArray(e=[],r=0){const i=this.elements;return e[r]=i[0],e[r+1]=i[1],e[r+2]=i[2],e[r+3]=i[3],e[r+4]=i[4],e[r+5]=i[5],e[r+6]=i[6],e[r+7]=i[7],e[r+8]=i[8],e[r+9]=i[9],e[r+10]=i[10],e[r+11]=i[11],e[r+12]=i[12],e[r+13]=i[13],e[r+14]=i[14],e[r+15]=i[15],e}}const Aa=new J,tn=new zt,E0=new J(0,0,0),T0=new J(1,1,1),fi=new J,al=new J,Dr=new J,$p=new zt,Qp=new Vs;class Bn{constructor(e=0,r=0,i=0,o=Bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=r,this._z=i,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,r,i,o=this._order){return this._x=e,this._y=r,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,r=this._order,i=!0){const o=e.elements,u=o[0],d=o[4],h=o[8],f=o[1],m=o[5],g=o[9],y=o[2],x=o[6],S=o[10];switch(r){case"XYZ":this._y=Math.asin(Er(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Er(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(f,m)):(this._y=Math.atan2(-y,u),this._z=0);break;case"ZXY":this._x=Math.asin(Er(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-y,S),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(f,u));break;case"ZYX":this._y=Math.asin(-Er(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(f,u)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Er(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-y,u)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-Er(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+r)}return this._order=r,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,r,i){return $p.makeRotationFromQuaternion(e),this.setFromRotationMatrix($p,r,i)}setFromVector3(e,r=this._order){return this.set(e.x,e.y,e.z,r)}reorder(e){return Qp.setFromEuler(this),this.setFromQuaternion(Qp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],r=0){return e[r]=this._x,e[r+1]=this._y,e[r+2]=this._z,e[r+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bn.DEFAULT_ORDER="XYZ";class lg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let w0=0;const Jp=new J,Ra=new Vs,Pn=new zt,sl=new J,Ds=new J,A0=new J,R0=new Vs,em=new J(1,0,0),tm=new J(0,1,0),rm=new J(0,0,1),nm={type:"added"},C0={type:"removed"},Ca={type:"childadded",child:null},kc={type:"childremoved",child:null};class mr extends ja{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=Hs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mr.DEFAULT_UP.clone();const e=new J,r=new Bn,i=new Vs,o=new J(1,1,1);function u(){i.setFromEuler(r,!1)}function d(){r.setFromQuaternion(i,void 0,!1)}r._onChange(u),i._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:r},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new zt},normalMatrix:{value:new st}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=mr.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,r){this.quaternion.setFromAxisAngle(e,r)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,r){return Ra.setFromAxisAngle(e,r),this.quaternion.multiply(Ra),this}rotateOnWorldAxis(e,r){return Ra.setFromAxisAngle(e,r),this.quaternion.premultiply(Ra),this}rotateX(e){return this.rotateOnAxis(em,e)}rotateY(e){return this.rotateOnAxis(tm,e)}rotateZ(e){return this.rotateOnAxis(rm,e)}translateOnAxis(e,r){return Jp.copy(e).applyQuaternion(this.quaternion),this.position.add(Jp.multiplyScalar(r)),this}translateX(e){return this.translateOnAxis(em,e)}translateY(e){return this.translateOnAxis(tm,e)}translateZ(e){return this.translateOnAxis(rm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,r,i){e.isVector3?sl.copy(e):sl.set(e,r,i);const o=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(Ds,sl,this.up):Pn.lookAt(sl,Ds,this.up),this.quaternion.setFromRotationMatrix(Pn),o&&(Pn.extractRotation(o.matrixWorld),Ra.setFromRotationMatrix(Pn),this.quaternion.premultiply(Ra.invert()))}add(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.add(arguments[r]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nm),Ca.child=e,this.dispatchEvent(Ca),Ca.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const r=this.children.indexOf(e);return r!==-1&&(e.parent=null,this.children.splice(r,1),e.dispatchEvent(C0),kc.child=e,this.dispatchEvent(kc),kc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nm),Ca.child=e,this.dispatchEvent(Ca),Ca.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,r){if(this[e]===r)return this;for(let i=0,o=this.children.length;i<o;i++){const u=this.children[i].getObjectByProperty(e,r);if(u!==void 0)return u}}getObjectsByProperty(e,r,i=[]){this[e]===r&&i.push(this);const o=this.children;for(let u=0,d=o.length;u<d;u++)o[u].getObjectsByProperty(e,r,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,e,A0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,R0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const r=this.matrixWorld.elements;return e.set(r[8],r[9],r[10]).normalize()}raycast(){}traverse(e){e(this);const r=this.children;for(let i=0,o=r.length;i<o;i++)r[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const r=this.children;for(let i=0,o=r.length;i<o;i++)r[i].traverseVisible(e)}traverseAncestors(e){const r=this.parent;r!==null&&(e(r),r.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const r=this.children;for(let i=0,o=r.length;i<o;i++)r[i].updateMatrixWorld(e)}updateWorldMatrix(e,r){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),r===!0){const o=this.children;for(let u=0,d=o.length;u<d;u++)o[u].updateWorldMatrix(!1,!0)}}toJSON(e){const r=e===void 0||typeof e=="string",i={};r&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function u(h,f){return h[f.uuid]===void 0&&(h[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const f=h.shapes;if(Array.isArray(f))for(let m=0,g=f.length;m<g;m++){const y=f[m];u(e.shapes,y)}else u(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let f=0,m=this.material.length;f<m;f++)h.push(u(e.materials,this.material[f]));o.material=h}else o.material=u(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const f=this.animations[h];o.animations.push(u(e.animations,f))}}if(r){const h=d(e.geometries),f=d(e.materials),m=d(e.textures),g=d(e.images),y=d(e.shapes),x=d(e.skeletons),S=d(e.animations),w=d(e.nodes);h.length>0&&(i.geometries=h),f.length>0&&(i.materials=f),m.length>0&&(i.textures=m),g.length>0&&(i.images=g),y.length>0&&(i.shapes=y),x.length>0&&(i.skeletons=x),S.length>0&&(i.animations=S),w.length>0&&(i.nodes=w)}return i.object=o,i;function d(h){const f=[];for(const m in h){const g=h[m];delete g.metadata,f.push(g)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,r=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),r===!0)for(let i=0;i<e.children.length;i++){const o=e.children[i];this.add(o.clone())}return this}}mr.DEFAULT_UP=new J(0,1,0);mr.DEFAULT_MATRIX_AUTO_UPDATE=!0;mr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new J,Ln=new J,zc=new J,Nn=new J,ba=new J,Pa=new J,im=new J,Bc=new J,Hc=new J,Vc=new J,Gc=new Ht,Wc=new Ht,jc=new Ht;class sn{constructor(e=new J,r=new J,i=new J){this.a=e,this.b=r,this.c=i}static getNormal(e,r,i,o){o.subVectors(i,r),rn.subVectors(e,r),o.cross(rn);const u=o.lengthSq();return u>0?o.multiplyScalar(1/Math.sqrt(u)):o.set(0,0,0)}static getBarycoord(e,r,i,o,u){rn.subVectors(o,r),Ln.subVectors(i,r),zc.subVectors(e,r);const d=rn.dot(rn),h=rn.dot(Ln),f=rn.dot(zc),m=Ln.dot(Ln),g=Ln.dot(zc),y=d*m-h*h;if(y===0)return u.set(0,0,0),null;const x=1/y,S=(m*f-h*g)*x,w=(d*g-h*f)*x;return u.set(1-S-w,w,S)}static containsPoint(e,r,i,o){return this.getBarycoord(e,r,i,o,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(e,r,i,o,u,d,h,f){return this.getBarycoord(e,r,i,o,Nn)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(u,Nn.x),f.addScaledVector(d,Nn.y),f.addScaledVector(h,Nn.z),f)}static getInterpolatedAttribute(e,r,i,o,u,d){return Gc.setScalar(0),Wc.setScalar(0),jc.setScalar(0),Gc.fromBufferAttribute(e,r),Wc.fromBufferAttribute(e,i),jc.fromBufferAttribute(e,o),d.setScalar(0),d.addScaledVector(Gc,u.x),d.addScaledVector(Wc,u.y),d.addScaledVector(jc,u.z),d}static isFrontFacing(e,r,i,o){return rn.subVectors(i,r),Ln.subVectors(e,r),rn.cross(Ln).dot(o)<0}set(e,r,i){return this.a.copy(e),this.b.copy(r),this.c.copy(i),this}setFromPointsAndIndices(e,r,i,o){return this.a.copy(e[r]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,r,i,o){return this.a.fromBufferAttribute(e,r),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),rn.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,r){return sn.getBarycoord(e,this.a,this.b,this.c,r)}getInterpolation(e,r,i,o,u){return sn.getInterpolation(e,this.a,this.b,this.c,r,i,o,u)}containsPoint(e){return sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,r){const i=this.a,o=this.b,u=this.c;let d,h;ba.subVectors(o,i),Pa.subVectors(u,i),Bc.subVectors(e,i);const f=ba.dot(Bc),m=Pa.dot(Bc);if(f<=0&&m<=0)return r.copy(i);Hc.subVectors(e,o);const g=ba.dot(Hc),y=Pa.dot(Hc);if(g>=0&&y<=g)return r.copy(o);const x=f*y-g*m;if(x<=0&&f>=0&&g<=0)return d=f/(f-g),r.copy(i).addScaledVector(ba,d);Vc.subVectors(e,u);const S=ba.dot(Vc),w=Pa.dot(Vc);if(w>=0&&S<=w)return r.copy(u);const A=S*m-f*w;if(A<=0&&m>=0&&w<=0)return h=m/(m-w),r.copy(i).addScaledVector(Pa,h);const v=g*w-S*y;if(v<=0&&y-g>=0&&S-w>=0)return im.subVectors(u,o),h=(y-g)/(y-g+(S-w)),r.copy(o).addScaledVector(im,h);const _=1/(v+A+x);return d=A*_,h=x*_,r.copy(i).addScaledVector(ba,d).addScaledVector(Pa,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ug={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},ol={h:0,s:0,l:0};function Xc(a,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?a+(e-a)*6*r:r<1/2?e:r<2/3?a+(e-a)*6*(2/3-r):a}class vt{constructor(e,r,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,r,i)}set(e,r,i){if(r===void 0&&i===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,r,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,r=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,r),this}setRGB(e,r,i,o=St.workingColorSpace){return this.r=e,this.g=r,this.b=i,St.toWorkingColorSpace(this,o),this}setHSL(e,r,i,o=St.workingColorSpace){if(e=d0(e,1),r=Er(r,0,1),i=Er(i,0,1),r===0)this.r=this.g=this.b=i;else{const u=i<=.5?i*(1+r):i+r-i*r,d=2*i-u;this.r=Xc(d,u,e+1/3),this.g=Xc(d,u,e),this.b=Xc(d,u,e-1/3)}return St.toWorkingColorSpace(this,o),this}setStyle(e,r=pn){function i(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=o[1],h=o[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,r);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,r);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,r);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=o[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,r);if(d===6)return this.setHex(parseInt(u,16),r);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,r);return this}setColorName(e,r=pn){const i=ug[e.toLowerCase()];return i!==void 0?this.setHex(i,r):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ka(e.r),this.g=ka(e.g),this.b=ka(e.b),this}copyLinearToSRGB(e){return this.r=Pc(e.r),this.g=Pc(e.g),this.b=Pc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return St.fromWorkingColorSpace(dr.copy(this),e),Math.round(Er(dr.r*255,0,255))*65536+Math.round(Er(dr.g*255,0,255))*256+Math.round(Er(dr.b*255,0,255))}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,r=St.workingColorSpace){St.fromWorkingColorSpace(dr.copy(this),r);const i=dr.r,o=dr.g,u=dr.b,d=Math.max(i,o,u),h=Math.min(i,o,u);let f,m;const g=(h+d)/2;if(h===d)f=0,m=0;else{const y=d-h;switch(m=g<=.5?y/(d+h):y/(2-d-h),d){case i:f=(o-u)/y+(o<u?6:0);break;case o:f=(u-i)/y+2;break;case u:f=(i-o)/y+4;break}f/=6}return e.h=f,e.s=m,e.l=g,e}getRGB(e,r=St.workingColorSpace){return St.fromWorkingColorSpace(dr.copy(this),r),e.r=dr.r,e.g=dr.g,e.b=dr.b,e}getStyle(e=pn){St.fromWorkingColorSpace(dr.copy(this),e);const r=dr.r,i=dr.g,o=dr.b;return e!==pn?`color(${e} ${r.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(r*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(e,r,i){return this.getHSL(pi),this.setHSL(pi.h+e,pi.s+r,pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,r){return this.r=e.r+r.r,this.g=e.g+r.g,this.b=e.b+r.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,r){return this.r+=(e.r-this.r)*r,this.g+=(e.g-this.g)*r,this.b+=(e.b-this.b)*r,this}lerpColors(e,r,i){return this.r=e.r+(r.r-e.r)*i,this.g=e.g+(r.g-e.g)*i,this.b=e.b+(r.b-e.b)*i,this}lerpHSL(e,r){this.getHSL(pi),e.getHSL(ol);const i=Cc(pi.h,ol.h,r),o=Cc(pi.s,ol.s,r),u=Cc(pi.l,ol.l,r);return this.setHSL(i,o,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const r=this.r,i=this.g,o=this.b,u=e.elements;return this.r=u[0]*r+u[3]*i+u[6]*o,this.g=u[1]*r+u[4]*i+u[7]*o,this.b=u[2]*r+u[5]*i+u[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,r=0){return this.r=e[r],this.g=e[r+1],this.b=e[r+2],this}toArray(e=[],r=0){return e[r]=this.r,e[r+1]=this.g,e[r+2]=this.b,e}fromBufferAttribute(e,r){return this.r=e.getX(r),this.g=e.getY(r),this.b=e.getZ(r),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dr=new vt;vt.NAMES=ug;let b0=0;class Xa extends ja{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=Hs(),this.name="",this.type="Material",this.blending=Oa,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sd,this.blendDst=od,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sa,this.stencilZFail=Sa,this.stencilZPass=Sa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const r in e){const i=e[r];if(i===void 0){console.warn(`THREE.Material: parameter '${r}' has value of undefined.`);continue}const o=this[r];if(o===void 0){console.warn(`THREE.Material: '${r}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[r]=i}}toJSON(e){const r=e===void 0||typeof e=="string";r&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Oa&&(i.blending=this.blending),this.side!==yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sd&&(i.blendSrc=this.blendSrc),this.blendDst!==od&&(i.blendDst=this.blendDst),this.blendEquation!==Gi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==za&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Sa&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Sa&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Sa&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(u){const d=[];for(const h in u){const f=u[h];delete f.metadata,d.push(f)}return d}if(r){const u=o(e.textures),d=o(e.images);u.length>0&&(i.textures=u),d.length>0&&(i.images=d)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const r=e.clippingPlanes;let i=null;if(r!==null){const o=r.length;i=new Array(o);for(let u=0;u!==o;++u)i[u]=r[u].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class cg extends Xa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=Xm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new J,ll=new wt;class Tr{constructor(e,r,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=r,this.count=e!==void 0?e.length/r:0,this.normalized=i,this.usage=jp,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,r){this.updateRanges.push({start:e,count:r})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,r,i){e*=this.itemSize,i*=r.itemSize;for(let o=0,u=this.itemSize;o<u;o++)this.array[e+o]=r.array[i+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let r=0,i=this.count;r<i;r++)ll.fromBufferAttribute(this,r),ll.applyMatrix3(e),this.setXY(r,ll.x,ll.y);else if(this.itemSize===3)for(let r=0,i=this.count;r<i;r++)Gt.fromBufferAttribute(this,r),Gt.applyMatrix3(e),this.setXYZ(r,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let r=0,i=this.count;r<i;r++)Gt.fromBufferAttribute(this,r),Gt.applyMatrix4(e),this.setXYZ(r,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let r=0,i=this.count;r<i;r++)Gt.fromBufferAttribute(this,r),Gt.applyNormalMatrix(e),this.setXYZ(r,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let r=0,i=this.count;r<i;r++)Gt.fromBufferAttribute(this,r),Gt.transformDirection(e),this.setXYZ(r,Gt.x,Gt.y,Gt.z);return this}set(e,r=0){return this.array.set(e,r),this}getComponent(e,r){let i=this.array[e*this.itemSize+r];return this.normalized&&(i=Ps(i,this.array)),i}setComponent(e,r,i){return this.normalized&&(i=Mr(i,this.array)),this.array[e*this.itemSize+r]=i,this}getX(e){let r=this.array[e*this.itemSize];return this.normalized&&(r=Ps(r,this.array)),r}setX(e,r){return this.normalized&&(r=Mr(r,this.array)),this.array[e*this.itemSize]=r,this}getY(e){let r=this.array[e*this.itemSize+1];return this.normalized&&(r=Ps(r,this.array)),r}setY(e,r){return this.normalized&&(r=Mr(r,this.array)),this.array[e*this.itemSize+1]=r,this}getZ(e){let r=this.array[e*this.itemSize+2];return this.normalized&&(r=Ps(r,this.array)),r}setZ(e,r){return this.normalized&&(r=Mr(r,this.array)),this.array[e*this.itemSize+2]=r,this}getW(e){let r=this.array[e*this.itemSize+3];return this.normalized&&(r=Ps(r,this.array)),r}setW(e,r){return this.normalized&&(r=Mr(r,this.array)),this.array[e*this.itemSize+3]=r,this}setXY(e,r,i){return e*=this.itemSize,this.normalized&&(r=Mr(r,this.array),i=Mr(i,this.array)),this.array[e+0]=r,this.array[e+1]=i,this}setXYZ(e,r,i,o){return e*=this.itemSize,this.normalized&&(r=Mr(r,this.array),i=Mr(i,this.array),o=Mr(o,this.array)),this.array[e+0]=r,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,r,i,o,u){return e*=this.itemSize,this.normalized&&(r=Mr(r,this.array),i=Mr(i,this.array),o=Mr(o,this.array),u=Mr(u,this.array)),this.array[e+0]=r,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jp&&(e.usage=this.usage),e}}class dg extends Tr{constructor(e,r,i){super(new Uint16Array(e),r,i)}}class hg extends Tr{constructor(e,r,i){super(new Uint32Array(e),r,i)}}class kn extends Tr{constructor(e,r,i){super(new Float32Array(e),r,i)}}let P0=0;const jr=new zt,Yc=new mr,La=new J,Ir=new Gs,Is=new Gs,Jt=new J;class ln extends ja{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=Hs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ag(e)?hg:dg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,r){return this.attributes[e]=r,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,r,i=0){this.groups.push({start:e,count:r,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,r){this.drawRange.start=e,this.drawRange.count=r}applyMatrix4(e){const r=this.attributes.position;r!==void 0&&(r.applyMatrix4(e),r.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const u=new st().getNormalMatrix(e);i.applyNormalMatrix(u),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jr.makeRotationFromQuaternion(e),this.applyMatrix4(jr),this}rotateX(e){return jr.makeRotationX(e),this.applyMatrix4(jr),this}rotateY(e){return jr.makeRotationY(e),this.applyMatrix4(jr),this}rotateZ(e){return jr.makeRotationZ(e),this.applyMatrix4(jr),this}translate(e,r,i){return jr.makeTranslation(e,r,i),this.applyMatrix4(jr),this}scale(e,r,i){return jr.makeScale(e,r,i),this.applyMatrix4(jr),this}lookAt(e){return Yc.lookAt(e),Yc.updateMatrix(),this.applyMatrix4(Yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(La).negate(),this.translate(La.x,La.y,La.z),this}setFromPoints(e){const r=[];for(let i=0,o=e.length;i<o;i++){const u=e[i];r.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new kn(r,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gs);const e=this.attributes.position,r=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),r)for(let i=0,o=r.length;i<o;i++){const u=r[i];Ir.setFromBufferAttribute(u),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Ir.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Ir.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Ir.min),this.boundingBox.expandByPoint(Ir.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ws);const e=this.attributes.position,r=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const i=this.boundingSphere.center;if(Ir.setFromBufferAttribute(e),r)for(let u=0,d=r.length;u<d;u++){const h=r[u];Is.setFromBufferAttribute(h),this.morphTargetsRelative?(Jt.addVectors(Ir.min,Is.min),Ir.expandByPoint(Jt),Jt.addVectors(Ir.max,Is.max),Ir.expandByPoint(Jt)):(Ir.expandByPoint(Is.min),Ir.expandByPoint(Is.max))}Ir.getCenter(i);let o=0;for(let u=0,d=e.count;u<d;u++)Jt.fromBufferAttribute(e,u),o=Math.max(o,i.distanceToSquared(Jt));if(r)for(let u=0,d=r.length;u<d;u++){const h=r[u],f=this.morphTargetsRelative;for(let m=0,g=h.count;m<g;m++)Jt.fromBufferAttribute(h,m),f&&(La.fromBufferAttribute(e,m),Jt.add(La)),o=Math.max(o,i.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,r=this.attributes;if(e===null||r.position===void 0||r.normal===void 0||r.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=r.position,o=r.normal,u=r.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tr(new Float32Array(4*i.count),4));const d=this.getAttribute("tangent"),h=[],f=[];for(let q=0;q<i.count;q++)h[q]=new J,f[q]=new J;const m=new J,g=new J,y=new J,x=new wt,S=new wt,w=new wt,A=new J,v=new J;function _(q,_e,E){m.fromBufferAttribute(i,q),g.fromBufferAttribute(i,_e),y.fromBufferAttribute(i,E),x.fromBufferAttribute(u,q),S.fromBufferAttribute(u,_e),w.fromBufferAttribute(u,E),g.sub(m),y.sub(m),S.sub(x),w.sub(x);const C=1/(S.x*w.y-w.x*S.y);isFinite(C)&&(A.copy(g).multiplyScalar(w.y).addScaledVector(y,-S.y).multiplyScalar(C),v.copy(y).multiplyScalar(S.x).addScaledVector(g,-w.x).multiplyScalar(C),h[q].add(A),h[_e].add(A),h[E].add(A),f[q].add(v),f[_e].add(v),f[E].add(v))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let q=0,_e=D.length;q<_e;++q){const E=D[q],C=E.start,re=E.count;for(let ne=C,ae=C+re;ne<ae;ne+=3)_(e.getX(ne+0),e.getX(ne+1),e.getX(ne+2))}const b=new J,U=new J,te=new J,B=new J;function I(q){te.fromBufferAttribute(o,q),B.copy(te);const _e=h[q];b.copy(_e),b.sub(te.multiplyScalar(te.dot(_e))).normalize(),U.crossVectors(B,_e);const E=U.dot(f[q])<0?-1:1;d.setXYZW(q,b.x,b.y,b.z,E)}for(let q=0,_e=D.length;q<_e;++q){const E=D[q],C=E.start,re=E.count;for(let ne=C,ae=C+re;ne<ae;ne+=3)I(e.getX(ne+0)),I(e.getX(ne+1)),I(e.getX(ne+2))}}computeVertexNormals(){const e=this.index,r=this.getAttribute("position");if(r!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tr(new Float32Array(r.count*3),3),this.setAttribute("normal",i);else for(let x=0,S=i.count;x<S;x++)i.setXYZ(x,0,0,0);const o=new J,u=new J,d=new J,h=new J,f=new J,m=new J,g=new J,y=new J;if(e)for(let x=0,S=e.count;x<S;x+=3){const w=e.getX(x+0),A=e.getX(x+1),v=e.getX(x+2);o.fromBufferAttribute(r,w),u.fromBufferAttribute(r,A),d.fromBufferAttribute(r,v),g.subVectors(d,u),y.subVectors(o,u),g.cross(y),h.fromBufferAttribute(i,w),f.fromBufferAttribute(i,A),m.fromBufferAttribute(i,v),h.add(g),f.add(g),m.add(g),i.setXYZ(w,h.x,h.y,h.z),i.setXYZ(A,f.x,f.y,f.z),i.setXYZ(v,m.x,m.y,m.z)}else for(let x=0,S=r.count;x<S;x+=3)o.fromBufferAttribute(r,x+0),u.fromBufferAttribute(r,x+1),d.fromBufferAttribute(r,x+2),g.subVectors(d,u),y.subVectors(o,u),g.cross(y),i.setXYZ(x+0,g.x,g.y,g.z),i.setXYZ(x+1,g.x,g.y,g.z),i.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let r=0,i=e.count;r<i;r++)Jt.fromBufferAttribute(e,r),Jt.normalize(),e.setXYZ(r,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(h,f){const m=h.array,g=h.itemSize,y=h.normalized,x=new m.constructor(f.length*g);let S=0,w=0;for(let A=0,v=f.length;A<v;A++){h.isInterleavedBufferAttribute?S=f[A]*h.data.stride+h.offset:S=f[A]*g;for(let _=0;_<g;_++)x[w++]=m[S++]}return new Tr(x,g,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const r=new ln,i=this.index.array,o=this.attributes;for(const h in o){const f=o[h],m=e(f,i);r.setAttribute(h,m)}const u=this.morphAttributes;for(const h in u){const f=[],m=u[h];for(let g=0,y=m.length;g<y;g++){const x=m[g],S=e(x,i);f.push(S)}r.morphAttributes[h]=f}r.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,f=d.length;h<f;h++){const m=d[h];r.addGroup(m.start,m.count,m.materialIndex)}return r}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const m in f)f[m]!==void 0&&(e[m]=f[m]);return e}e.data={attributes:{}};const r=this.index;r!==null&&(e.data.index={type:r.array.constructor.name,array:Array.prototype.slice.call(r.array)});const i=this.attributes;for(const f in i){const m=i[f];e.data.attributes[f]=m.toJSON(e.data)}const o={};let u=!1;for(const f in this.morphAttributes){const m=this.morphAttributes[f],g=[];for(let y=0,x=m.length;y<x;y++){const S=m[y];g.push(S.toJSON(e.data))}g.length>0&&(o[f]=g,u=!0)}u&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const r={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(r));const o=e.attributes;for(const m in o){const g=o[m];this.setAttribute(m,g.clone(r))}const u=e.morphAttributes;for(const m in u){const g=[],y=u[m];for(let x=0,S=y.length;x<S;x++)g.push(y[x].clone(r));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,g=d.length;m<g;m++){const y=d[m];this.addGroup(y.start,y.count,y.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const am=new zt,Fi=new nh,ul=new Ws,sm=new J,cl=new J,dl=new J,hl=new J,qc=new J,fl=new J,om=new J,pl=new J;class Fn extends mr{constructor(e=new ln,r=new cg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=r,this.updateMorphTargets()}copy(e,r){return super.copy(e,r),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const i=e[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=i.length;o<u;o++){const d=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=o}}}}getVertexPosition(e,r){const i=this.geometry,o=i.attributes.position,u=i.morphAttributes.position,d=i.morphTargetsRelative;r.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(u&&h){fl.set(0,0,0);for(let f=0,m=u.length;f<m;f++){const g=h[f],y=u[f];g!==0&&(qc.fromBufferAttribute(y,e),d?fl.addScaledVector(qc,g):fl.addScaledVector(qc.sub(r),g))}r.add(fl)}return r}raycast(e,r){const i=this.geometry,o=this.material,u=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ul.copy(i.boundingSphere),ul.applyMatrix4(u),Fi.copy(e.ray).recast(e.near),!(ul.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(ul,sm)===null||Fi.origin.distanceToSquared(sm)>(e.far-e.near)**2))&&(am.copy(u).invert(),Fi.copy(e.ray).applyMatrix4(am),!(i.boundingBox!==null&&Fi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,r,Fi)))}_computeIntersections(e,r,i){let o;const u=this.geometry,d=this.material,h=u.index,f=u.attributes.position,m=u.attributes.uv,g=u.attributes.uv1,y=u.attributes.normal,x=u.groups,S=u.drawRange;if(h!==null)if(Array.isArray(d))for(let w=0,A=x.length;w<A;w++){const v=x[w],_=d[v.materialIndex],D=Math.max(v.start,S.start),b=Math.min(h.count,Math.min(v.start+v.count,S.start+S.count));for(let U=D,te=b;U<te;U+=3){const B=h.getX(U),I=h.getX(U+1),q=h.getX(U+2);o=ml(this,_,e,i,m,g,y,B,I,q),o&&(o.faceIndex=Math.floor(U/3),o.face.materialIndex=v.materialIndex,r.push(o))}}else{const w=Math.max(0,S.start),A=Math.min(h.count,S.start+S.count);for(let v=w,_=A;v<_;v+=3){const D=h.getX(v),b=h.getX(v+1),U=h.getX(v+2);o=ml(this,d,e,i,m,g,y,D,b,U),o&&(o.faceIndex=Math.floor(v/3),r.push(o))}}else if(f!==void 0)if(Array.isArray(d))for(let w=0,A=x.length;w<A;w++){const v=x[w],_=d[v.materialIndex],D=Math.max(v.start,S.start),b=Math.min(f.count,Math.min(v.start+v.count,S.start+S.count));for(let U=D,te=b;U<te;U+=3){const B=U,I=U+1,q=U+2;o=ml(this,_,e,i,m,g,y,B,I,q),o&&(o.faceIndex=Math.floor(U/3),o.face.materialIndex=v.materialIndex,r.push(o))}}else{const w=Math.max(0,S.start),A=Math.min(f.count,S.start+S.count);for(let v=w,_=A;v<_;v+=3){const D=v,b=v+1,U=v+2;o=ml(this,d,e,i,m,g,y,D,b,U),o&&(o.faceIndex=Math.floor(v/3),r.push(o))}}}}function L0(a,e,r,i,o,u,d,h){let f;if(e.side===Ar?f=i.intersectTriangle(d,u,o,!0,h):f=i.intersectTriangle(o,u,d,e.side===yi,h),f===null)return null;pl.copy(h),pl.applyMatrix4(a.matrixWorld);const m=r.ray.origin.distanceTo(pl);return m<r.near||m>r.far?null:{distance:m,point:pl.clone(),object:a}}function ml(a,e,r,i,o,u,d,h,f,m){a.getVertexPosition(h,cl),a.getVertexPosition(f,dl),a.getVertexPosition(m,hl);const g=L0(a,e,r,i,cl,dl,hl,om);if(g){const y=new J;sn.getBarycoord(om,cl,dl,hl,y),o&&(g.uv=sn.getInterpolatedAttribute(o,h,f,m,y,new wt)),u&&(g.uv1=sn.getInterpolatedAttribute(u,h,f,m,y,new wt)),d&&(g.normal=sn.getInterpolatedAttribute(d,h,f,m,y,new J),g.normal.dot(i.direction)>0&&g.normal.multiplyScalar(-1));const x={a:h,b:f,c:m,normal:new J,materialIndex:0};sn.getNormal(cl,dl,hl,x.normal),g.face=x,g.barycoord=y}return g}class js extends ln{constructor(e=1,r=1,i=1,o=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:r,depth:i,widthSegments:o,heightSegments:u,depthSegments:d};const h=this;o=Math.floor(o),u=Math.floor(u),d=Math.floor(d);const f=[],m=[],g=[],y=[];let x=0,S=0;w("z","y","x",-1,-1,i,r,e,d,u,0),w("z","y","x",1,-1,i,r,-e,d,u,1),w("x","z","y",1,1,e,i,r,o,d,2),w("x","z","y",1,-1,e,i,-r,o,d,3),w("x","y","z",1,-1,e,r,i,o,u,4),w("x","y","z",-1,-1,e,r,-i,o,u,5),this.setIndex(f),this.setAttribute("position",new kn(m,3)),this.setAttribute("normal",new kn(g,3)),this.setAttribute("uv",new kn(y,2));function w(A,v,_,D,b,U,te,B,I,q,_e){const E=U/I,C=te/q,re=U/2,ne=te/2,ae=B/2,pe=I+1,ee=q+1;let ce=0,k=0;const oe=new J;for(let se=0;se<ee;se++){const N=se*C-ne;for(let Y=0;Y<pe;Y++){const be=Y*E-re;oe[A]=be*D,oe[v]=N*b,oe[_]=ae,m.push(oe.x,oe.y,oe.z),oe[A]=0,oe[v]=0,oe[_]=B>0?1:-1,g.push(oe.x,oe.y,oe.z),y.push(Y/I),y.push(1-se/q),ce+=1}}for(let se=0;se<q;se++)for(let N=0;N<I;N++){const Y=x+N+pe*se,be=x+N+pe*(se+1),K=x+(N+1)+pe*(se+1),le=x+(N+1)+pe*se;f.push(Y,be,le),f.push(be,K,le),k+=6}h.addGroup(S,k,_e),S+=k,x+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new js(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Wa(a){const e={};for(const r in a){e[r]={};for(const i in a[r]){const o=a[r][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[r][i]=null):e[r][i]=o.clone():Array.isArray(o)?e[r][i]=o.slice():e[r][i]=o}}return e}function pr(a){const e={};for(let r=0;r<a.length;r++){const i=Wa(a[r]);for(const o in i)e[o]=i[o]}return e}function N0(a){const e=[];for(let r=0;r<a.length;r++)e.push(a[r].clone());return e}function fg(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const U0={clone:Wa,merge:pr};var D0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,I0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hn extends Xa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=D0,this.fragmentShader=I0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wa(e.uniforms),this.uniformsGroups=N0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const r=super.toJSON(e);r.glslVersion=this.glslVersion,r.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?r.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?r.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?r.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?r.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?r.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?r.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?r.uniforms[o]={type:"m4",value:u.toArray()}:r.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(r.defines=this.defines),r.vertexShader=this.vertexShader,r.fragmentShader=this.fragmentShader,r.lights=this.lights,r.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(r.extensions=i),r}}class pg extends mr{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=On}copy(e,r){return super.copy(e,r),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,r){super.updateWorldMatrix(e,r),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mi=new J,lm=new wt,um=new wt;class nn extends pg{constructor(e=50,r=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=r,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,r){return super.copy(e,r),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const r=.5*this.getFilmHeight()/e;this.fov=jd*2*Math.atan(r),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jd*2*Math.atan(Math.tan(Rc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,r,i){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(mi.x,mi.y).multiplyScalar(-e/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mi.x,mi.y).multiplyScalar(-e/mi.z)}getViewSize(e,r){return this.getViewBounds(e,lm,um),r.subVectors(um,lm)}setViewOffset(e,r,i,o,u,d){this.aspect=e/r,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=r,this.view.offsetX=i,this.view.offsetY=o,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let r=e*Math.tan(Rc*.5*this.fov)/this.zoom,i=2*r,o=this.aspect*i,u=-.5*o;const d=this.view;if(this.view!==null&&this.view.enabled){const f=d.fullWidth,m=d.fullHeight;u+=d.offsetX*o/f,r-=d.offsetY*i/m,o*=d.width/f,i*=d.height/m}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+o,r,r-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const r=super.toJSON(e);return r.object.fov=this.fov,r.object.zoom=this.zoom,r.object.near=this.near,r.object.far=this.far,r.object.focus=this.focus,r.object.aspect=this.aspect,this.view!==null&&(r.object.view=Object.assign({},this.view)),r.object.filmGauge=this.filmGauge,r.object.filmOffset=this.filmOffset,r}}const Na=-90,Ua=1;class O0 extends mr{constructor(e,r,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new nn(Na,Ua,e,r);o.layers=this.layers,this.add(o);const u=new nn(Na,Ua,e,r);u.layers=this.layers,this.add(u);const d=new nn(Na,Ua,e,r);d.layers=this.layers,this.add(d);const h=new nn(Na,Ua,e,r);h.layers=this.layers,this.add(h);const f=new nn(Na,Ua,e,r);f.layers=this.layers,this.add(f);const m=new nn(Na,Ua,e,r);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,r=this.children.concat(),[i,o,u,d,h,f]=r;for(const m of r)this.remove(m);if(e===On)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Ol)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of r)this.add(m),m.updateMatrixWorld()}update(e,r){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,f,m,g]=this.children,y=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const A=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,o),e.render(r,u),e.setRenderTarget(i,1,o),e.render(r,d),e.setRenderTarget(i,2,o),e.render(r,h),e.setRenderTarget(i,3,o),e.render(r,f),e.setRenderTarget(i,4,o),e.render(r,m),i.texture.generateMipmaps=A,e.setRenderTarget(i,5,o),e.render(r,g),e.setRenderTarget(y,x,S),e.xr.enabled=w,i.texture.needsPMREMUpdate=!0}}class mg extends Rr{constructor(e,r,i,o,u,d,h,f,m,g){e=e!==void 0?e:[],r=r!==void 0?r:Ba,super(e,r,i,o,u,d,h,f,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class F0 extends qi{constructor(e=1,r={}){super(e,e,r),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];this.texture=new mg(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:an}fromEquirectangularTexture(e,r){this.texture.type=r.type,this.texture.colorSpace=r.colorSpace,this.texture.generateMipmaps=r.generateMipmaps,this.texture.minFilter=r.minFilter,this.texture.magFilter=r.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new js(5,5,5),u=new Hn({name:"CubemapFromEquirect",uniforms:Wa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ar,blending:vi});u.uniforms.tEquirect.value=r;const d=new Fn(o,u),h=r.minFilter;return r.minFilter===Xi&&(r.minFilter=an),new O0(1,10,this).update(e,d),r.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,r,i,o){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(r,i,o);e.setRenderTarget(u)}}const Kc=new J,k0=new J,z0=new st;class Hi{constructor(e=new J(1,0,0),r=0){this.isPlane=!0,this.normal=e,this.constant=r}set(e,r){return this.normal.copy(e),this.constant=r,this}setComponents(e,r,i,o){return this.normal.set(e,r,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,r){return this.normal.copy(e),this.constant=-r.dot(this.normal),this}setFromCoplanarPoints(e,r,i){const o=Kc.subVectors(i,r).cross(k0.subVectors(e,r)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,r){return r.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,r){const i=e.delta(Kc),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(e.start)===0?r.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/o;return u<0||u>1?null:r.copy(e.start).addScaledVector(i,u)}intersectsLine(e){const r=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return r<0&&i>0||i<0&&r>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,r){const i=r||z0.getNormalMatrix(e),o=this.coplanarPoint(Kc).applyMatrix4(e),u=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new Ws,gl=new J;class gg{constructor(e=new Hi,r=new Hi,i=new Hi,o=new Hi,u=new Hi,d=new Hi){this.planes=[e,r,i,o,u,d]}set(e,r,i,o,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(r),h[2].copy(i),h[3].copy(o),h[4].copy(u),h[5].copy(d),this}copy(e){const r=this.planes;for(let i=0;i<6;i++)r[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,r=On){const i=this.planes,o=e.elements,u=o[0],d=o[1],h=o[2],f=o[3],m=o[4],g=o[5],y=o[6],x=o[7],S=o[8],w=o[9],A=o[10],v=o[11],_=o[12],D=o[13],b=o[14],U=o[15];if(i[0].setComponents(f-u,x-m,v-S,U-_).normalize(),i[1].setComponents(f+u,x+m,v+S,U+_).normalize(),i[2].setComponents(f+d,x+g,v+w,U+D).normalize(),i[3].setComponents(f-d,x-g,v-w,U-D).normalize(),i[4].setComponents(f-h,x-y,v-A,U-b).normalize(),r===On)i[5].setComponents(f+h,x+y,v+A,U+b).normalize();else if(r===Ol)i[5].setComponents(h,y,A,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+r);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const r=e.geometry;r.boundingSphere===null&&r.computeBoundingSphere(),ki.copy(r.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(e){return ki.center.set(0,0,0),ki.radius=.7071067811865476,ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){const r=this.planes,i=e.center,o=-e.radius;for(let u=0;u<6;u++)if(r[u].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){const r=this.planes;for(let i=0;i<6;i++){const o=r[i];if(gl.x=o.normal.x>0?e.max.x:e.min.x,gl.y=o.normal.y>0?e.max.y:e.min.y,gl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(gl)<0)return!1}return!0}containsPoint(e){const r=this.planes;for(let i=0;i<6;i++)if(r[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vg(){let a=null,e=!1,r=null,i=null;function o(u,d){r(u,d),i=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&r!==null&&(i=a.requestAnimationFrame(o),e=!0)},stop:function(){a.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(u){r=u},setContext:function(u){a=u}}}function B0(a){const e=new WeakMap;function r(h,f){const m=h.array,g=h.usage,y=m.byteLength,x=a.createBuffer();a.bindBuffer(f,x),a.bufferData(f,m,g),h.onUploadCallback();let S;if(m instanceof Float32Array)S=a.FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?S=a.HALF_FLOAT:S=a.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=a.SHORT;else if(m instanceof Uint32Array)S=a.UNSIGNED_INT;else if(m instanceof Int32Array)S=a.INT;else if(m instanceof Int8Array)S=a.BYTE;else if(m instanceof Uint8Array)S=a.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:y}}function i(h,f,m){const g=f.array,y=f.updateRanges;if(a.bindBuffer(m,h),y.length===0)a.bufferSubData(m,0,g);else{y.sort((S,w)=>S.start-w.start);let x=0;for(let S=1;S<y.length;S++){const w=y[x],A=y[S];A.start<=w.start+w.count+1?w.count=Math.max(w.count,A.start+A.count-w.start):(++x,y[x]=A)}y.length=x+1;for(let S=0,w=y.length;S<w;S++){const A=y[S];a.bufferSubData(m,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}f.clearUpdateRanges()}f.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const f=e.get(h);f&&(a.deleteBuffer(f.buffer),e.delete(h))}function d(h,f){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,r(h,f));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(m.buffer,h,f),m.version=h.version}}return{get:o,remove:u,update:d}}class Vl extends ln{constructor(e=1,r=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:r,widthSegments:i,heightSegments:o};const u=e/2,d=r/2,h=Math.floor(i),f=Math.floor(o),m=h+1,g=f+1,y=e/h,x=r/f,S=[],w=[],A=[],v=[];for(let _=0;_<g;_++){const D=_*x-d;for(let b=0;b<m;b++){const U=b*y-u;w.push(U,-D,0),A.push(0,0,1),v.push(b/h),v.push(1-_/f)}}for(let _=0;_<f;_++)for(let D=0;D<h;D++){const b=D+m*_,U=D+m*(_+1),te=D+1+m*(_+1),B=D+1+m*_;S.push(b,U,B),S.push(U,te,B)}this.setIndex(S),this.setAttribute("position",new kn(w,3)),this.setAttribute("normal",new kn(A,3)),this.setAttribute("uv",new kn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vl(e.width,e.height,e.widthSegments,e.heightSegments)}}var H0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,V0=`#ifdef USE_ALPHAHASH
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
#endif`,G0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,W0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,j0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,X0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Y0=`#ifdef USE_AOMAP
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
#endif`,q0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,K0=`#ifdef USE_BATCHING
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
#endif`,Z0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Q0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,J0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ex=`#ifdef USE_IRIDESCENCE
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
#endif`,tx=`#ifdef USE_BUMPMAP
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
#endif`,rx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ax=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ox=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ux=`#if defined( USE_COLOR_ALPHA )
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
#endif`,cx=`#define PI 3.141592653589793
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
} // validated`,dx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hx=`vec3 transformedNormal = objectNormal;
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
#endif`,fx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,px=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vx="gl_FragColor = linearToOutputTexel( gl_FragColor );",_x=`
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
}`,xx=`#ifdef USE_ENVMAP
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
#endif`,yx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sx=`#ifdef USE_ENVMAP
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
#endif`,Mx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ex=`#ifdef USE_ENVMAP
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
#endif`,Tx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ax=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cx=`#ifdef USE_GRADIENTMAP
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
}`,bx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Px=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nx=`uniform bool receiveShadow;
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
#endif`,Ux=`#ifdef USE_ENVMAP
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
#endif`,Dx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ix=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ox=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kx=`PhysicalMaterial material;
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
#endif`,zx=`struct PhysicalMaterial {
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
}`,Bx=`
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
#endif`,Hx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zx=`#if defined( USE_POINTS_UV )
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
#endif`,$x=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ey=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ty=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ry=`#ifdef USE_MORPHTARGETS
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
#endif`,ny=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ay=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ly=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uy=`#ifdef USE_NORMALMAP
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
#endif`,cy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,py=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,my=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_y=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,My=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ey=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ty=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wy=`float getShadowMask() {
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
}`,Ay=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ry=`#ifdef USE_SKINNING
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
#endif`,Cy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,by=`#ifdef USE_SKINNING
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
#endif`,Py=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ly=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ny=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Uy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dy=`#ifdef USE_TRANSMISSION
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
#endif`,Iy=`#ifdef USE_TRANSMISSION
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
#endif`,Oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const By=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hy=`uniform sampler2D t2D;
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
}`,Vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xy=`#include <common>
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
}`,Yy=`#if DEPTH_PACKING == 3200
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
}`,qy=`#define DISTANCE
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
}`,Ky=`#define DISTANCE
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
}`,Zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$y=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qy=`uniform float scale;
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
}`,Jy=`uniform vec3 diffuse;
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
}`,eS=`#include <common>
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
}`,tS=`uniform vec3 diffuse;
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
}`,rS=`#define LAMBERT
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
}`,nS=`#define LAMBERT
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
}`,iS=`#define MATCAP
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
}`,aS=`#define MATCAP
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
}`,sS=`#define NORMAL
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
}`,oS=`#define NORMAL
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
}`,lS=`#define PHONG
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
}`,uS=`#define PHONG
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
}`,cS=`#define STANDARD
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
}`,dS=`#define STANDARD
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
}`,hS=`#define TOON
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
}`,fS=`#define TOON
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
}`,pS=`uniform float size;
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
}`,mS=`uniform vec3 diffuse;
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
}`,gS=`#include <common>
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
}`,vS=`uniform vec3 color;
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
}`,_S=`uniform float rotation;
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
}`,xS=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:H0,alphahash_pars_fragment:V0,alphamap_fragment:G0,alphamap_pars_fragment:W0,alphatest_fragment:j0,alphatest_pars_fragment:X0,aomap_fragment:Y0,aomap_pars_fragment:q0,batching_pars_vertex:K0,batching_vertex:Z0,begin_vertex:$0,beginnormal_vertex:Q0,bsdfs:J0,iridescence_fragment:ex,bumpmap_pars_fragment:tx,clipping_planes_fragment:rx,clipping_planes_pars_fragment:nx,clipping_planes_pars_vertex:ix,clipping_planes_vertex:ax,color_fragment:sx,color_pars_fragment:ox,color_pars_vertex:lx,color_vertex:ux,common:cx,cube_uv_reflection_fragment:dx,defaultnormal_vertex:hx,displacementmap_pars_vertex:fx,displacementmap_vertex:px,emissivemap_fragment:mx,emissivemap_pars_fragment:gx,colorspace_fragment:vx,colorspace_pars_fragment:_x,envmap_fragment:xx,envmap_common_pars_fragment:yx,envmap_pars_fragment:Sx,envmap_pars_vertex:Mx,envmap_physical_pars_fragment:Ux,envmap_vertex:Ex,fog_vertex:Tx,fog_pars_vertex:wx,fog_fragment:Ax,fog_pars_fragment:Rx,gradientmap_pars_fragment:Cx,lightmap_pars_fragment:bx,lights_lambert_fragment:Px,lights_lambert_pars_fragment:Lx,lights_pars_begin:Nx,lights_toon_fragment:Dx,lights_toon_pars_fragment:Ix,lights_phong_fragment:Ox,lights_phong_pars_fragment:Fx,lights_physical_fragment:kx,lights_physical_pars_fragment:zx,lights_fragment_begin:Bx,lights_fragment_maps:Hx,lights_fragment_end:Vx,logdepthbuf_fragment:Gx,logdepthbuf_pars_fragment:Wx,logdepthbuf_pars_vertex:jx,logdepthbuf_vertex:Xx,map_fragment:Yx,map_pars_fragment:qx,map_particle_fragment:Kx,map_particle_pars_fragment:Zx,metalnessmap_fragment:$x,metalnessmap_pars_fragment:Qx,morphinstance_vertex:Jx,morphcolor_vertex:ey,morphnormal_vertex:ty,morphtarget_pars_vertex:ry,morphtarget_vertex:ny,normal_fragment_begin:iy,normal_fragment_maps:ay,normal_pars_fragment:sy,normal_pars_vertex:oy,normal_vertex:ly,normalmap_pars_fragment:uy,clearcoat_normal_fragment_begin:cy,clearcoat_normal_fragment_maps:dy,clearcoat_pars_fragment:hy,iridescence_pars_fragment:fy,opaque_fragment:py,packing:my,premultiplied_alpha_fragment:gy,project_vertex:vy,dithering_fragment:_y,dithering_pars_fragment:xy,roughnessmap_fragment:yy,roughnessmap_pars_fragment:Sy,shadowmap_pars_fragment:My,shadowmap_pars_vertex:Ey,shadowmap_vertex:Ty,shadowmask_pars_fragment:wy,skinbase_vertex:Ay,skinning_pars_vertex:Ry,skinning_vertex:Cy,skinnormal_vertex:by,specularmap_fragment:Py,specularmap_pars_fragment:Ly,tonemapping_fragment:Ny,tonemapping_pars_fragment:Uy,transmission_fragment:Dy,transmission_pars_fragment:Iy,uv_pars_fragment:Oy,uv_pars_vertex:Fy,uv_vertex:ky,worldpos_vertex:zy,background_vert:By,background_frag:Hy,backgroundCube_vert:Vy,backgroundCube_frag:Gy,cube_vert:Wy,cube_frag:jy,depth_vert:Xy,depth_frag:Yy,distanceRGBA_vert:qy,distanceRGBA_frag:Ky,equirect_vert:Zy,equirect_frag:$y,linedashed_vert:Qy,linedashed_frag:Jy,meshbasic_vert:eS,meshbasic_frag:tS,meshlambert_vert:rS,meshlambert_frag:nS,meshmatcap_vert:iS,meshmatcap_frag:aS,meshnormal_vert:sS,meshnormal_frag:oS,meshphong_vert:lS,meshphong_frag:uS,meshphysical_vert:cS,meshphysical_frag:dS,meshtoon_vert:hS,meshtoon_frag:fS,points_vert:pS,points_frag:mS,shadow_vert:gS,shadow_frag:vS,sprite_vert:_S,sprite_frag:xS},Ce={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},mn={basic:{uniforms:pr([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:pr([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new vt(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:pr([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:pr([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:pr([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new vt(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:pr([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:pr([Ce.points,Ce.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:pr([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:pr([Ce.common,Ce.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:pr([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:pr([Ce.sprite,Ce.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:pr([Ce.common,Ce.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:pr([Ce.lights,Ce.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};mn.physical={uniforms:pr([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const vl={r:0,b:0,g:0},zi=new Bn,yS=new zt;function SS(a,e,r,i,o,u,d){const h=new vt(0);let f=u===!0?0:1,m,g,y=null,x=0,S=null;function w(D){let b=D.isScene===!0?D.background:null;return b&&b.isTexture&&(b=(D.backgroundBlurriness>0?r:e).get(b)),b}function A(D){let b=!1;const U=w(D);U===null?_(h,f):U&&U.isColor&&(_(U,1),b=!0);const te=a.xr.getEnvironmentBlendMode();te==="additive"?i.buffers.color.setClear(0,0,0,1,d):te==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,d),(a.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function v(D,b){const U=w(b);U&&(U.isCubeTexture||U.mapping===Bl)?(g===void 0&&(g=new Fn(new js(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:Wa(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Ar,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(te,B,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),zi.copy(b.backgroundRotation),zi.x*=-1,zi.y*=-1,zi.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),g.material.uniforms.envMap.value=U,g.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(yS.makeRotationFromEuler(zi)),g.material.toneMapped=St.getTransfer(U.colorSpace)!==Ut,(y!==U||x!==U.version||S!==a.toneMapping)&&(g.material.needsUpdate=!0,y=U,x=U.version,S=a.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new Fn(new Vl(2,2),new Hn({name:"BackgroundMaterial",uniforms:Wa(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,m.material.toneMapped=St.getTransfer(U.colorSpace)!==Ut,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(y!==U||x!==U.version||S!==a.toneMapping)&&(m.material.needsUpdate=!0,y=U,x=U.version,S=a.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function _(D,b){D.getRGB(vl,fg(a)),i.buffers.color.setClear(vl.r,vl.g,vl.b,b,d)}return{getClearColor:function(){return h},setClearColor:function(D,b=1){h.set(D),f=b,_(h,f)},getClearAlpha:function(){return f},setClearAlpha:function(D){f=D,_(h,f)},render:A,addToRenderList:v}}function MS(a,e){const r=a.getParameter(a.MAX_VERTEX_ATTRIBS),i={},o=x(null);let u=o,d=!1;function h(E,C,re,ne,ae){let pe=!1;const ee=y(ne,re,C);u!==ee&&(u=ee,m(u.object)),pe=S(E,ne,re,ae),pe&&w(E,ne,re,ae),ae!==null&&e.update(ae,a.ELEMENT_ARRAY_BUFFER),(pe||d)&&(d=!1,U(E,C,re,ne),ae!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(ae).buffer))}function f(){return a.createVertexArray()}function m(E){return a.bindVertexArray(E)}function g(E){return a.deleteVertexArray(E)}function y(E,C,re){const ne=re.wireframe===!0;let ae=i[E.id];ae===void 0&&(ae={},i[E.id]=ae);let pe=ae[C.id];pe===void 0&&(pe={},ae[C.id]=pe);let ee=pe[ne];return ee===void 0&&(ee=x(f()),pe[ne]=ee),ee}function x(E){const C=[],re=[],ne=[];for(let ae=0;ae<r;ae++)C[ae]=0,re[ae]=0,ne[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:re,attributeDivisors:ne,object:E,attributes:{},index:null}}function S(E,C,re,ne){const ae=u.attributes,pe=C.attributes;let ee=0;const ce=re.getAttributes();for(const k in ce)if(ce[k].location>=0){const oe=ae[k];let se=pe[k];if(se===void 0&&(k==="instanceMatrix"&&E.instanceMatrix&&(se=E.instanceMatrix),k==="instanceColor"&&E.instanceColor&&(se=E.instanceColor)),oe===void 0||oe.attribute!==se||se&&oe.data!==se.data)return!0;ee++}return u.attributesNum!==ee||u.index!==ne}function w(E,C,re,ne){const ae={},pe=C.attributes;let ee=0;const ce=re.getAttributes();for(const k in ce)if(ce[k].location>=0){let oe=pe[k];oe===void 0&&(k==="instanceMatrix"&&E.instanceMatrix&&(oe=E.instanceMatrix),k==="instanceColor"&&E.instanceColor&&(oe=E.instanceColor));const se={};se.attribute=oe,oe&&oe.data&&(se.data=oe.data),ae[k]=se,ee++}u.attributes=ae,u.attributesNum=ee,u.index=ne}function A(){const E=u.newAttributes;for(let C=0,re=E.length;C<re;C++)E[C]=0}function v(E){_(E,0)}function _(E,C){const re=u.newAttributes,ne=u.enabledAttributes,ae=u.attributeDivisors;re[E]=1,ne[E]===0&&(a.enableVertexAttribArray(E),ne[E]=1),ae[E]!==C&&(a.vertexAttribDivisor(E,C),ae[E]=C)}function D(){const E=u.newAttributes,C=u.enabledAttributes;for(let re=0,ne=C.length;re<ne;re++)C[re]!==E[re]&&(a.disableVertexAttribArray(re),C[re]=0)}function b(E,C,re,ne,ae,pe,ee){ee===!0?a.vertexAttribIPointer(E,C,re,ae,pe):a.vertexAttribPointer(E,C,re,ne,ae,pe)}function U(E,C,re,ne){A();const ae=ne.attributes,pe=re.getAttributes(),ee=C.defaultAttributeValues;for(const ce in pe){const k=pe[ce];if(k.location>=0){let oe=ae[ce];if(oe===void 0&&(ce==="instanceMatrix"&&E.instanceMatrix&&(oe=E.instanceMatrix),ce==="instanceColor"&&E.instanceColor&&(oe=E.instanceColor)),oe!==void 0){const se=oe.normalized,N=oe.itemSize,Y=e.get(oe);if(Y===void 0)continue;const be=Y.buffer,K=Y.type,le=Y.bytesPerElement,ge=K===a.INT||K===a.UNSIGNED_INT||oe.gpuType===Zd;if(oe.isInterleavedBufferAttribute){const Se=oe.data,Pe=Se.stride,Le=oe.offset;if(Se.isInstancedInterleavedBuffer){for(let tt=0;tt<k.locationSize;tt++)_(k.location+tt,Se.meshPerAttribute);E.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let tt=0;tt<k.locationSize;tt++)v(k.location+tt);a.bindBuffer(a.ARRAY_BUFFER,be);for(let tt=0;tt<k.locationSize;tt++)b(k.location+tt,N/k.locationSize,K,se,Pe*le,(Le+N/k.locationSize*tt)*le,ge)}else{if(oe.isInstancedBufferAttribute){for(let Se=0;Se<k.locationSize;Se++)_(k.location+Se,oe.meshPerAttribute);E.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Se=0;Se<k.locationSize;Se++)v(k.location+Se);a.bindBuffer(a.ARRAY_BUFFER,be);for(let Se=0;Se<k.locationSize;Se++)b(k.location+Se,N/k.locationSize,K,se,N*le,N/k.locationSize*Se*le,ge)}}else if(ee!==void 0){const se=ee[ce];if(se!==void 0)switch(se.length){case 2:a.vertexAttrib2fv(k.location,se);break;case 3:a.vertexAttrib3fv(k.location,se);break;case 4:a.vertexAttrib4fv(k.location,se);break;default:a.vertexAttrib1fv(k.location,se)}}}}D()}function te(){q();for(const E in i){const C=i[E];for(const re in C){const ne=C[re];for(const ae in ne)g(ne[ae].object),delete ne[ae];delete C[re]}delete i[E]}}function B(E){if(i[E.id]===void 0)return;const C=i[E.id];for(const re in C){const ne=C[re];for(const ae in ne)g(ne[ae].object),delete ne[ae];delete C[re]}delete i[E.id]}function I(E){for(const C in i){const re=i[C];if(re[E.id]===void 0)continue;const ne=re[E.id];for(const ae in ne)g(ne[ae].object),delete ne[ae];delete re[E.id]}}function q(){_e(),d=!0,u!==o&&(u=o,m(u.object))}function _e(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:q,resetDefaultState:_e,dispose:te,releaseStatesOfGeometry:B,releaseStatesOfProgram:I,initAttributes:A,enableAttribute:v,disableUnusedAttributes:D}}function ES(a,e,r){let i;function o(m){i=m}function u(m,g){a.drawArrays(i,m,g),r.update(g,i,1)}function d(m,g,y){y!==0&&(a.drawArraysInstanced(i,m,g,y),r.update(g,i,y))}function h(m,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,m,0,g,0,y);let x=0;for(let S=0;S<y;S++)x+=g[S];r.update(x,i,1)}function f(m,g,y,x){if(y===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let w=0;w<m.length;w++)d(m[w],g[w],x[w]);else{S.multiDrawArraysInstancedWEBGL(i,m,0,g,0,x,0,y);let w=0;for(let A=0;A<y;A++)w+=g[A];for(let A=0;A<x.length;A++)r.update(w,i,x[A])}}this.setMode=o,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function TS(a,e,r,i){let o;function u(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function d(I){return!(I!==on&&i.convert(I)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const q=I===Bs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==zn&&i.convert(I)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==In&&!q)}function f(I){if(I==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=r.precision!==void 0?r.precision:"highp";const g=f(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const y=r.logarithmicDepthBuffer===!0,x=r.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(x===!0){const I=e.get("EXT_clip_control");I.clipControlEXT(I.LOWER_LEFT_EXT,I.ZERO_TO_ONE_EXT)}const S=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),w=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=a.getParameter(a.MAX_TEXTURE_SIZE),v=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),_=a.getParameter(a.MAX_VERTEX_ATTRIBS),D=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),b=a.getParameter(a.MAX_VARYING_VECTORS),U=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),te=w>0,B=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:f,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:y,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:w,maxTextureSize:A,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:D,maxVaryings:b,maxFragmentUniforms:U,vertexTextures:te,maxSamples:B}}function wS(a){const e=this;let r=null,i=0,o=!1,u=!1;const d=new Hi,h=new st,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(y,x){const S=y.length!==0||x||i!==0||o;return o=x,i=y.length,S},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(y,x){r=g(y,x,0)},this.setState=function(y,x,S){const w=y.clippingPlanes,A=y.clipIntersection,v=y.clipShadows,_=a.get(y);if(!o||w===null||w.length===0||u&&!v)u?g(null):m();else{const D=u?0:i,b=D*4;let U=_.clippingState||null;f.value=U,U=g(w,x,b,S);for(let te=0;te!==b;++te)U[te]=r[te];_.clippingState=U,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=D}};function m(){f.value!==r&&(f.value=r,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function g(y,x,S,w){const A=y!==null?y.length:0;let v=null;if(A!==0){if(v=f.value,w!==!0||v===null){const _=S+A*4,D=x.matrixWorldInverse;h.getNormalMatrix(D),(v===null||v.length<_)&&(v=new Float32Array(_));for(let b=0,U=S;b!==A;++b,U+=4)d.copy(y[b]).applyMatrix4(D,h),d.normal.toArray(v,U),v[U+3]=d.constant}f.value=v,f.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,v}}function AS(a){let e=new WeakMap;function r(d,h){return h===md?d.mapping=Ba:h===gd&&(d.mapping=Ha),d}function i(d){if(d&&d.isTexture){const h=d.mapping;if(h===md||h===gd)if(e.has(d)){const f=e.get(d).texture;return r(f,d.mapping)}else{const f=d.image;if(f&&f.height>0){const m=new F0(f.height);return m.fromEquirectangularTexture(a,d),e.set(d,m),d.addEventListener("dispose",o),r(m.texture,d.mapping)}else return null}}return d}function o(d){const h=d.target;h.removeEventListener("dispose",o);const f=e.get(h);f!==void 0&&(e.delete(h),f.dispose())}function u(){e=new WeakMap}return{get:i,dispose:u}}class _g extends pg{constructor(e=-1,r=1,i=1,o=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=r,this.top=i,this.bottom=o,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,r){return super.copy(e,r),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,r,i,o,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=r,this.view.offsetX=i,this.view.offsetY=o,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),r=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let u=i-e,d=i+e,h=o+r,f=o-r;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,d=u+m*this.view.width,h-=g*this.view.offsetY,f=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const r=super.toJSON(e);return r.object.zoom=this.zoom,r.object.left=this.left,r.object.right=this.right,r.object.top=this.top,r.object.bottom=this.bottom,r.object.near=this.near,r.object.far=this.far,this.view!==null&&(r.object.view=Object.assign({},this.view)),r}}const Ia=4,cm=[.125,.215,.35,.446,.526,.582],Wi=20,Zc=new _g,dm=new vt;let $c=null,Qc=0,Jc=0,ed=!1;const Vi=(1+Math.sqrt(5))/2,Da=1/Vi,hm=[new J(-Vi,Da,0),new J(Vi,Da,0),new J(-Da,0,Vi),new J(Da,0,Vi),new J(0,Vi,-Da),new J(0,Vi,Da),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)];class fm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,r=0,i=.1,o=100){$c=this._renderer.getRenderTarget(),Qc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,i,o,u),r>0&&this._blur(u,0,0,r),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,r=null){return this._fromTexture(e,r)}fromCubemap(e,r=null){return this._fromTexture(e,r)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($c,Qc,Jc),this._renderer.xr.enabled=ed,e.scissorTest=!1,_l(e,0,0,e.width,e.height)}_fromTexture(e,r){e.mapping===Ba||e.mapping===Ha?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$c=this._renderer.getRenderTarget(),Qc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=r||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),r=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:Bs,format:on,colorSpace:Si,depthBuffer:!1},o=pm(e,r,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==r){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pm(e,r,i);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=RS(u)),this._blurMaterial=CS(u,e,r)}return o}_compileMaterial(e){const r=new Fn(this._lodPlanes[0],e);this._renderer.compile(r,Zc)}_sceneToCubeUV(e,r,i,o){const u=new nn(90,1,r,i),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,m=f.autoClear,g=f.toneMapping;f.getClearColor(dm),f.toneMapping=_i,f.autoClear=!1;const y=new cg({name:"PMREM.Background",side:Ar,depthWrite:!1,depthTest:!1}),x=new Fn(new js,y);let S=!1;const w=e.background;w?w.isColor&&(y.color.copy(w),e.background=null,S=!0):(y.color.copy(dm),S=!0);for(let A=0;A<6;A++){const v=A%3;v===0?(u.up.set(0,d[A],0),u.lookAt(h[A],0,0)):v===1?(u.up.set(0,0,d[A]),u.lookAt(0,h[A],0)):(u.up.set(0,d[A],0),u.lookAt(0,0,h[A]));const _=this._cubeSize;_l(o,v*_,A>2?_:0,_,_),f.setRenderTarget(o),S&&f.render(x,u),f.render(e,u)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=g,f.autoClear=m,e.background=w}_textureToCubeUV(e,r){const i=this._renderer,o=e.mapping===Ba||e.mapping===Ha;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=gm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mm());const u=o?this._cubemapMaterial:this._equirectMaterial,d=new Fn(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=e;const f=this._cubeSize;_l(r,0,0,3*f,2*f),i.setRenderTarget(r),i.render(d,Zc)}_applyPMREM(e){const r=this._renderer,i=r.autoClear;r.autoClear=!1;const o=this._lodPlanes.length;for(let u=1;u<o;u++){const d=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=hm[(o-u-1)%hm.length];this._blur(e,u-1,u,d,h)}r.autoClear=i}_blur(e,r,i,o,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,r,i,o,"latitudinal",u),this._halfBlur(d,e,i,i,o,"longitudinal",u)}_halfBlur(e,r,i,o,u,d,h){const f=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,y=new Fn(this._lodPlanes[o],m),x=m.uniforms,S=this._sizeLods[i]-1,w=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Wi-1),A=u/w,v=isFinite(u)?1+Math.floor(g*A):Wi;v>Wi&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Wi}`);const _=[];let D=0;for(let I=0;I<Wi;++I){const q=I/A,_e=Math.exp(-q*q/2);_.push(_e),I===0?D+=_e:I<v&&(D+=2*_e)}for(let I=0;I<_.length;I++)_[I]=_[I]/D;x.envMap.value=e.texture,x.samples.value=v,x.weights.value=_,x.latitudinal.value=d==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:b}=this;x.dTheta.value=w,x.mipInt.value=b-i;const U=this._sizeLods[o],te=3*U*(o>b-Ia?o-b+Ia:0),B=4*(this._cubeSize-U);_l(r,te,B,3*U,2*U),f.setRenderTarget(r),f.render(y,Zc)}}function RS(a){const e=[],r=[],i=[];let o=a;const u=a-Ia+1+cm.length;for(let d=0;d<u;d++){const h=Math.pow(2,o);r.push(h);let f=1/h;d>a-Ia?f=cm[d-a+Ia-1]:d===0&&(f=0),i.push(f);const m=1/(h-2),g=-m,y=1+m,x=[g,g,y,g,y,y,g,g,y,y,g,y],S=6,w=6,A=3,v=2,_=1,D=new Float32Array(A*w*S),b=new Float32Array(v*w*S),U=new Float32Array(_*w*S);for(let B=0;B<S;B++){const I=B%3*2/3-1,q=B>2?0:-1,_e=[I,q,0,I+2/3,q,0,I+2/3,q+1,0,I,q,0,I+2/3,q+1,0,I,q+1,0];D.set(_e,A*w*B),b.set(x,v*w*B);const E=[B,B,B,B,B,B];U.set(E,_*w*B)}const te=new ln;te.setAttribute("position",new Tr(D,A)),te.setAttribute("uv",new Tr(b,v)),te.setAttribute("faceIndex",new Tr(U,_)),e.push(te),o>Ia&&o--}return{lodPlanes:e,sizeLods:r,sigmas:i}}function pm(a,e,r){const i=new qi(a,e,r);return i.texture.mapping=Bl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _l(a,e,r,i,o){a.viewport.set(e,r,i,o),a.scissor.set(e,r,i,o)}function CS(a,e,r){const i=new Float32Array(Wi),o=new J(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:Wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/r,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:ih(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function mm(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ih(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function gm(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function ih(){return`

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
	`}function bS(a){let e=new WeakMap,r=null;function i(h){if(h&&h.isTexture){const f=h.mapping,m=f===md||f===gd,g=f===Ba||f===Ha;if(m||g){let y=e.get(h);const x=y!==void 0?y.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return r===null&&(r=new fm(a)),y=m?r.fromEquirectangular(h,y):r.fromCubemap(h,y),y.texture.pmremVersion=h.pmremVersion,e.set(h,y),y.texture;if(y!==void 0)return y.texture;{const S=h.image;return m&&S&&S.height>0||g&&S&&o(S)?(r===null&&(r=new fm(a)),y=m?r.fromEquirectangular(h):r.fromCubemap(h),y.texture.pmremVersion=h.pmremVersion,e.set(h,y),h.addEventListener("dispose",u),y.texture):null}}}return h}function o(h){let f=0;const m=6;for(let g=0;g<m;g++)h[g]!==void 0&&f++;return f===m}function u(h){const f=h.target;f.removeEventListener("dispose",u);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){e=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function PS(a){const e={};function r(i){if(e[i]!==void 0)return e[i];let o;switch(i){case"WEBGL_depth_texture":o=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=a.getExtension(i)}return e[i]=o,o}return{has:function(i){return r(i)!==null},init:function(){r("EXT_color_buffer_float"),r("WEBGL_clip_cull_distance"),r("OES_texture_float_linear"),r("EXT_color_buffer_half_float"),r("WEBGL_multisampled_render_to_texture"),r("WEBGL_render_shared_exponent")},get:function(i){const o=r(i);return o===null&&Pl("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function LS(a,e,r,i){const o={},u=new WeakMap;function d(y){const x=y.target;x.index!==null&&e.remove(x.index);for(const w in x.attributes)e.remove(x.attributes[w]);for(const w in x.morphAttributes){const A=x.morphAttributes[w];for(let v=0,_=A.length;v<_;v++)e.remove(A[v])}x.removeEventListener("dispose",d),delete o[x.id];const S=u.get(x);S&&(e.remove(S),u.delete(x)),i.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,r.memory.geometries--}function h(y,x){return o[x.id]===!0||(x.addEventListener("dispose",d),o[x.id]=!0,r.memory.geometries++),x}function f(y){const x=y.attributes;for(const w in x)e.update(x[w],a.ARRAY_BUFFER);const S=y.morphAttributes;for(const w in S){const A=S[w];for(let v=0,_=A.length;v<_;v++)e.update(A[v],a.ARRAY_BUFFER)}}function m(y){const x=[],S=y.index,w=y.attributes.position;let A=0;if(S!==null){const D=S.array;A=S.version;for(let b=0,U=D.length;b<U;b+=3){const te=D[b+0],B=D[b+1],I=D[b+2];x.push(te,B,B,I,I,te)}}else if(w!==void 0){const D=w.array;A=w.version;for(let b=0,U=D.length/3-1;b<U;b+=3){const te=b+0,B=b+1,I=b+2;x.push(te,B,B,I,I,te)}}else return;const v=new(ag(x)?hg:dg)(x,1);v.version=A;const _=u.get(y);_&&e.remove(_),u.set(y,v)}function g(y){const x=u.get(y);if(x){const S=y.index;S!==null&&x.version<S.version&&m(y)}else m(y);return u.get(y)}return{get:h,update:f,getWireframeAttribute:g}}function NS(a,e,r){let i;function o(x){i=x}let u,d;function h(x){u=x.type,d=x.bytesPerElement}function f(x,S){a.drawElements(i,S,u,x*d),r.update(S,i,1)}function m(x,S,w){w!==0&&(a.drawElementsInstanced(i,S,u,x*d,w),r.update(S,i,w))}function g(x,S,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,S,0,u,x,0,w);let A=0;for(let v=0;v<w;v++)A+=S[v];r.update(A,i,1)}function y(x,S,w,A){if(w===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let _=0;_<x.length;_++)m(x[_]/d,S[_],A[_]);else{v.multiDrawElementsInstancedWEBGL(i,S,0,u,x,0,A,0,w);let _=0;for(let D=0;D<w;D++)_+=S[D];for(let D=0;D<A.length;D++)r.update(_,i,A[D])}}this.setMode=o,this.setIndex=h,this.render=f,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=y}function US(a){const e={geometries:0,textures:0},r={frame:0,calls:0,triangles:0,points:0,lines:0};function i(u,d,h){switch(r.calls++,d){case a.TRIANGLES:r.triangles+=h*(u/3);break;case a.LINES:r.lines+=h*(u/2);break;case a.LINE_STRIP:r.lines+=h*(u-1);break;case a.LINE_LOOP:r.lines+=h*u;break;case a.POINTS:r.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function o(){r.calls=0,r.triangles=0,r.points=0,r.lines=0}return{memory:e,render:r,programs:null,autoReset:!0,reset:o,update:i}}function DS(a,e,r){const i=new WeakMap,o=new Ht;function u(d,h,f){const m=d.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=g!==void 0?g.length:0;let x=i.get(h);if(x===void 0||x.count!==y){let S=function(){q.dispose(),i.delete(h),h.removeEventListener("dispose",S)};x!==void 0&&x.texture.dispose();const w=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,v=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],b=h.morphAttributes.color||[];let U=0;w===!0&&(U=1),A===!0&&(U=2),v===!0&&(U=3);let te=h.attributes.position.count*U,B=1;te>e.maxTextureSize&&(B=Math.ceil(te/e.maxTextureSize),te=e.maxTextureSize);const I=new Float32Array(te*B*4*y),q=new og(I,te,B,y);q.type=In,q.needsUpdate=!0;const _e=U*4;for(let E=0;E<y;E++){const C=_[E],re=D[E],ne=b[E],ae=te*B*4*E;for(let pe=0;pe<C.count;pe++){const ee=pe*_e;w===!0&&(o.fromBufferAttribute(C,pe),I[ae+ee+0]=o.x,I[ae+ee+1]=o.y,I[ae+ee+2]=o.z,I[ae+ee+3]=0),A===!0&&(o.fromBufferAttribute(re,pe),I[ae+ee+4]=o.x,I[ae+ee+5]=o.y,I[ae+ee+6]=o.z,I[ae+ee+7]=0),v===!0&&(o.fromBufferAttribute(ne,pe),I[ae+ee+8]=o.x,I[ae+ee+9]=o.y,I[ae+ee+10]=o.z,I[ae+ee+11]=ne.itemSize===4?o.w:1)}}x={count:y,texture:q,size:new wt(te,B)},i.set(h,x),h.addEventListener("dispose",S)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)f.getUniforms().setValue(a,"morphTexture",d.morphTexture,r);else{let S=0;for(let A=0;A<m.length;A++)S+=m[A];const w=h.morphTargetsRelative?1:1-S;f.getUniforms().setValue(a,"morphTargetBaseInfluence",w),f.getUniforms().setValue(a,"morphTargetInfluences",m)}f.getUniforms().setValue(a,"morphTargetsTexture",x.texture,r),f.getUniforms().setValue(a,"morphTargetsTextureSize",x.size)}return{update:u}}function IS(a,e,r,i){let o=new WeakMap;function u(f){const m=i.render.frame,g=f.geometry,y=e.get(f,g);if(o.get(y)!==m&&(e.update(y),o.set(y,m)),f.isInstancedMesh&&(f.hasEventListener("dispose",h)===!1&&f.addEventListener("dispose",h),o.get(f)!==m&&(r.update(f.instanceMatrix,a.ARRAY_BUFFER),f.instanceColor!==null&&r.update(f.instanceColor,a.ARRAY_BUFFER),o.set(f,m))),f.isSkinnedMesh){const x=f.skeleton;o.get(x)!==m&&(x.update(),o.set(x,m))}return y}function d(){o=new WeakMap}function h(f){const m=f.target;m.removeEventListener("dispose",h),r.remove(m.instanceMatrix),m.instanceColor!==null&&r.remove(m.instanceColor)}return{update:u,dispose:d}}class xg extends Rr{constructor(e,r,i,o,u,d,h,f,m,g=Fa){if(g!==Fa&&g!==Ga)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&g===Fa&&(i=Yi),i===void 0&&g===Ga&&(i=Va),super(null,o,u,d,h,f,g,i,m),this.isDepthTexture=!0,this.image={width:e,height:r},this.magFilter=h!==void 0?h:Xr,this.minFilter=f!==void 0?f:Xr,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const r=super.toJSON(e);return this.compareFunction!==null&&(r.compareFunction=this.compareFunction),r}}const yg=new Rr,vm=new xg(1,1),Sg=new og,Mg=new S0,Eg=new mg,_m=[],xm=[],ym=new Float32Array(16),Sm=new Float32Array(9),Mm=new Float32Array(4);function Ya(a,e,r){const i=a[0];if(i<=0||i>0)return a;const o=e*r;let u=_m[o];if(u===void 0&&(u=new Float32Array(o),_m[o]=u),e!==0){i.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=r,a[d].toArray(u,h)}return u}function Xt(a,e){if(a.length!==e.length)return!1;for(let r=0,i=a.length;r<i;r++)if(a[r]!==e[r])return!1;return!0}function Yt(a,e){for(let r=0,i=e.length;r<i;r++)a[r]=e[r]}function Gl(a,e){let r=xm[e];r===void 0&&(r=new Int32Array(e),xm[e]=r);for(let i=0;i!==e;++i)r[i]=a.allocateTextureUnit();return r}function OS(a,e){const r=this.cache;r[0]!==e&&(a.uniform1f(this.addr,e),r[0]=e)}function FS(a,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(Xt(r,e))return;a.uniform2fv(this.addr,e),Yt(r,e)}}function kS(a,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else if(e.r!==void 0)(r[0]!==e.r||r[1]!==e.g||r[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),r[0]=e.r,r[1]=e.g,r[2]=e.b);else{if(Xt(r,e))return;a.uniform3fv(this.addr,e),Yt(r,e)}}function zS(a,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(Xt(r,e))return;a.uniform4fv(this.addr,e),Yt(r,e)}}function BS(a,e){const r=this.cache,i=e.elements;if(i===void 0){if(Xt(r,e))return;a.uniformMatrix2fv(this.addr,!1,e),Yt(r,e)}else{if(Xt(r,i))return;Mm.set(i),a.uniformMatrix2fv(this.addr,!1,Mm),Yt(r,i)}}function HS(a,e){const r=this.cache,i=e.elements;if(i===void 0){if(Xt(r,e))return;a.uniformMatrix3fv(this.addr,!1,e),Yt(r,e)}else{if(Xt(r,i))return;Sm.set(i),a.uniformMatrix3fv(this.addr,!1,Sm),Yt(r,i)}}function VS(a,e){const r=this.cache,i=e.elements;if(i===void 0){if(Xt(r,e))return;a.uniformMatrix4fv(this.addr,!1,e),Yt(r,e)}else{if(Xt(r,i))return;ym.set(i),a.uniformMatrix4fv(this.addr,!1,ym),Yt(r,i)}}function GS(a,e){const r=this.cache;r[0]!==e&&(a.uniform1i(this.addr,e),r[0]=e)}function WS(a,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(Xt(r,e))return;a.uniform2iv(this.addr,e),Yt(r,e)}}function jS(a,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else{if(Xt(r,e))return;a.uniform3iv(this.addr,e),Yt(r,e)}}function XS(a,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(Xt(r,e))return;a.uniform4iv(this.addr,e),Yt(r,e)}}function YS(a,e){const r=this.cache;r[0]!==e&&(a.uniform1ui(this.addr,e),r[0]=e)}function qS(a,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(Xt(r,e))return;a.uniform2uiv(this.addr,e),Yt(r,e)}}function KS(a,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else{if(Xt(r,e))return;a.uniform3uiv(this.addr,e),Yt(r,e)}}function ZS(a,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(Xt(r,e))return;a.uniform4uiv(this.addr,e),Yt(r,e)}}function $S(a,e,r){const i=this.cache,o=r.allocateTextureUnit();i[0]!==o&&(a.uniform1i(this.addr,o),i[0]=o);let u;this.type===a.SAMPLER_2D_SHADOW?(vm.compareFunction=ig,u=vm):u=yg,r.setTexture2D(e||u,o)}function QS(a,e,r){const i=this.cache,o=r.allocateTextureUnit();i[0]!==o&&(a.uniform1i(this.addr,o),i[0]=o),r.setTexture3D(e||Mg,o)}function JS(a,e,r){const i=this.cache,o=r.allocateTextureUnit();i[0]!==o&&(a.uniform1i(this.addr,o),i[0]=o),r.setTextureCube(e||Eg,o)}function eM(a,e,r){const i=this.cache,o=r.allocateTextureUnit();i[0]!==o&&(a.uniform1i(this.addr,o),i[0]=o),r.setTexture2DArray(e||Sg,o)}function tM(a){switch(a){case 5126:return OS;case 35664:return FS;case 35665:return kS;case 35666:return zS;case 35674:return BS;case 35675:return HS;case 35676:return VS;case 5124:case 35670:return GS;case 35667:case 35671:return WS;case 35668:case 35672:return jS;case 35669:case 35673:return XS;case 5125:return YS;case 36294:return qS;case 36295:return KS;case 36296:return ZS;case 35678:case 36198:case 36298:case 36306:case 35682:return $S;case 35679:case 36299:case 36307:return QS;case 35680:case 36300:case 36308:case 36293:return JS;case 36289:case 36303:case 36311:case 36292:return eM}}function rM(a,e){a.uniform1fv(this.addr,e)}function nM(a,e){const r=Ya(e,this.size,2);a.uniform2fv(this.addr,r)}function iM(a,e){const r=Ya(e,this.size,3);a.uniform3fv(this.addr,r)}function aM(a,e){const r=Ya(e,this.size,4);a.uniform4fv(this.addr,r)}function sM(a,e){const r=Ya(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,r)}function oM(a,e){const r=Ya(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,r)}function lM(a,e){const r=Ya(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,r)}function uM(a,e){a.uniform1iv(this.addr,e)}function cM(a,e){a.uniform2iv(this.addr,e)}function dM(a,e){a.uniform3iv(this.addr,e)}function hM(a,e){a.uniform4iv(this.addr,e)}function fM(a,e){a.uniform1uiv(this.addr,e)}function pM(a,e){a.uniform2uiv(this.addr,e)}function mM(a,e){a.uniform3uiv(this.addr,e)}function gM(a,e){a.uniform4uiv(this.addr,e)}function vM(a,e,r){const i=this.cache,o=e.length,u=Gl(r,o);Xt(i,u)||(a.uniform1iv(this.addr,u),Yt(i,u));for(let d=0;d!==o;++d)r.setTexture2D(e[d]||yg,u[d])}function _M(a,e,r){const i=this.cache,o=e.length,u=Gl(r,o);Xt(i,u)||(a.uniform1iv(this.addr,u),Yt(i,u));for(let d=0;d!==o;++d)r.setTexture3D(e[d]||Mg,u[d])}function xM(a,e,r){const i=this.cache,o=e.length,u=Gl(r,o);Xt(i,u)||(a.uniform1iv(this.addr,u),Yt(i,u));for(let d=0;d!==o;++d)r.setTextureCube(e[d]||Eg,u[d])}function yM(a,e,r){const i=this.cache,o=e.length,u=Gl(r,o);Xt(i,u)||(a.uniform1iv(this.addr,u),Yt(i,u));for(let d=0;d!==o;++d)r.setTexture2DArray(e[d]||Sg,u[d])}function SM(a){switch(a){case 5126:return rM;case 35664:return nM;case 35665:return iM;case 35666:return aM;case 35674:return sM;case 35675:return oM;case 35676:return lM;case 5124:case 35670:return uM;case 35667:case 35671:return cM;case 35668:case 35672:return dM;case 35669:case 35673:return hM;case 5125:return fM;case 36294:return pM;case 36295:return mM;case 36296:return gM;case 35678:case 36198:case 36298:case 36306:case 35682:return vM;case 35679:case 36299:case 36307:return _M;case 35680:case 36300:case 36308:case 36293:return xM;case 36289:case 36303:case 36311:case 36292:return yM}}class MM{constructor(e,r,i){this.id=e,this.addr=i,this.cache=[],this.type=r.type,this.setValue=tM(r.type)}}class EM{constructor(e,r,i){this.id=e,this.addr=i,this.cache=[],this.type=r.type,this.size=r.size,this.setValue=SM(r.type)}}class TM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,r,i){const o=this.seq;for(let u=0,d=o.length;u!==d;++u){const h=o[u];h.setValue(e,r[h.id],i)}}}const td=/(\w+)(\])?(\[|\.)?/g;function Em(a,e){a.seq.push(e),a.map[e.id]=e}function wM(a,e,r){const i=a.name,o=i.length;for(td.lastIndex=0;;){const u=td.exec(i),d=td.lastIndex;let h=u[1];const f=u[2]==="]",m=u[3];if(f&&(h=h|0),m===void 0||m==="["&&d+2===o){Em(r,m===void 0?new MM(h,a,e):new EM(h,a,e));break}else{let g=r.map[h];g===void 0&&(g=new TM(h),Em(r,g)),r=g}}}class Ll{constructor(e,r){this.seq=[],this.map={};const i=e.getProgramParameter(r,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const u=e.getActiveUniform(r,o),d=e.getUniformLocation(r,u.name);wM(u,d,this)}}setValue(e,r,i,o){const u=this.map[r];u!==void 0&&u.setValue(e,i,o)}setOptional(e,r,i){const o=r[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,r,i,o){for(let u=0,d=r.length;u!==d;++u){const h=r[u],f=i[h.id];f.needsUpdate!==!1&&h.setValue(e,f.value,o)}}static seqWithValue(e,r){const i=[];for(let o=0,u=e.length;o!==u;++o){const d=e[o];d.id in r&&i.push(d)}return i}}function Tm(a,e,r){const i=a.createShader(e);return a.shaderSource(i,r),a.compileShader(i),i}const AM=37297;let RM=0;function CM(a,e){const r=a.split(`
`),i=[],o=Math.max(e-6,0),u=Math.min(e+6,r.length);for(let d=o;d<u;d++){const h=d+1;i.push(`${h===e?">":" "} ${h}: ${r[d]}`)}return i.join(`
`)}function bM(a){const e=St.getPrimaries(St.workingColorSpace),r=St.getPrimaries(a);let i;switch(e===r?i="":e===Il&&r===Dl?i="LinearDisplayP3ToLinearSRGB":e===Dl&&r===Il&&(i="LinearSRGBToLinearDisplayP3"),a){case Si:case Hl:return[i,"LinearTransferOETF"];case pn:case rh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",a),[i,"LinearTransferOETF"]}}function wm(a,e,r){const i=a.getShaderParameter(e,a.COMPILE_STATUS),o=a.getShaderInfoLog(e).trim();if(i&&o==="")return"";const u=/ERROR: 0:(\d+)/.exec(o);if(u){const d=parseInt(u[1]);return r.toUpperCase()+`

`+o+`

`+CM(a.getShaderSource(e),d)}else return o}function PM(a,e){const r=bM(e);return`vec4 ${a}( vec4 value ) { return ${r[0]}( ${r[1]}( value ) ); }`}function LM(a,e){let r;switch(e){case X_:r="Linear";break;case Y_:r="Reinhard";break;case q_:r="Cineon";break;case K_:r="ACESFilmic";break;case $_:r="AgX";break;case Q_:r="Neutral";break;case Z_:r="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),r="Linear"}return"vec3 "+a+"( vec3 color ) { return "+r+"ToneMapping( color ); }"}const xl=new J;function NM(){St.getLuminanceCoefficients(xl);const a=xl.x.toFixed(4),e=xl.y.toFixed(4),r=xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${r} );`,"	return dot( weights, rgb );","}"].join(`
`)}function UM(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ks).join(`
`)}function DM(a){const e=[];for(const r in a){const i=a[r];i!==!1&&e.push("#define "+r+" "+i)}return e.join(`
`)}function IM(a,e){const r={},i=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const u=a.getActiveAttrib(e,o),d=u.name;let h=1;u.type===a.FLOAT_MAT2&&(h=2),u.type===a.FLOAT_MAT3&&(h=3),u.type===a.FLOAT_MAT4&&(h=4),r[d]={type:u.type,location:a.getAttribLocation(e,d),locationSize:h}}return r}function ks(a){return a!==""}function Am(a,e){const r=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,r).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rm(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const OM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xd(a){return a.replace(OM,kM)}const FM=new Map;function kM(a,e){let r=at[e];if(r===void 0){const i=FM.get(e);if(i!==void 0)r=at[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Xd(r)}const zM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cm(a){return a.replace(zM,BM)}function BM(a,e,r,i){let o="";for(let u=parseInt(e);u<parseInt(r);u++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return o}function bm(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}function HM(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===jm?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===w_?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Un&&(e="SHADOWMAP_TYPE_VSM"),e}function VM(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Ba:case Ha:e="ENVMAP_TYPE_CUBE";break;case Bl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function GM(a){let e="ENVMAP_MODE_REFLECTION";return a.envMap&&a.envMapMode===Ha&&(e="ENVMAP_MODE_REFRACTION"),e}function WM(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Xm:e="ENVMAP_BLENDING_MULTIPLY";break;case W_:e="ENVMAP_BLENDING_MIX";break;case j_:e="ENVMAP_BLENDING_ADD";break}return e}function jM(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const r=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,r),112)),texelHeight:i,maxMip:r}}function XM(a,e,r,i){const o=a.getContext(),u=r.defines;let d=r.vertexShader,h=r.fragmentShader;const f=HM(r),m=VM(r),g=GM(r),y=WM(r),x=jM(r),S=UM(r),w=DM(u),A=o.createProgram();let v,_,D=r.glslVersion?"#version "+r.glslVersion+`
`:"";r.isRawShaderMaterial?(v=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,w].filter(ks).join(`
`),v.length>0&&(v+=`
`),_=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,w].filter(ks).join(`
`),_.length>0&&(_+=`
`)):(v=[bm(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,w,r.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",r.batching?"#define USE_BATCHING":"",r.batchingColor?"#define USE_BATCHING_COLOR":"",r.instancing?"#define USE_INSTANCING":"",r.instancingColor?"#define USE_INSTANCING_COLOR":"",r.instancingMorph?"#define USE_INSTANCING_MORPH":"",r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.map?"#define USE_MAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+g:"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.displacementMap?"#define USE_DISPLACEMENTMAP":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.mapUv?"#define MAP_UV "+r.mapUv:"",r.alphaMapUv?"#define ALPHAMAP_UV "+r.alphaMapUv:"",r.lightMapUv?"#define LIGHTMAP_UV "+r.lightMapUv:"",r.aoMapUv?"#define AOMAP_UV "+r.aoMapUv:"",r.emissiveMapUv?"#define EMISSIVEMAP_UV "+r.emissiveMapUv:"",r.bumpMapUv?"#define BUMPMAP_UV "+r.bumpMapUv:"",r.normalMapUv?"#define NORMALMAP_UV "+r.normalMapUv:"",r.displacementMapUv?"#define DISPLACEMENTMAP_UV "+r.displacementMapUv:"",r.metalnessMapUv?"#define METALNESSMAP_UV "+r.metalnessMapUv:"",r.roughnessMapUv?"#define ROUGHNESSMAP_UV "+r.roughnessMapUv:"",r.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+r.anisotropyMapUv:"",r.clearcoatMapUv?"#define CLEARCOATMAP_UV "+r.clearcoatMapUv:"",r.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+r.clearcoatNormalMapUv:"",r.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+r.clearcoatRoughnessMapUv:"",r.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+r.iridescenceMapUv:"",r.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+r.iridescenceThicknessMapUv:"",r.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+r.sheenColorMapUv:"",r.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+r.sheenRoughnessMapUv:"",r.specularMapUv?"#define SPECULARMAP_UV "+r.specularMapUv:"",r.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+r.specularColorMapUv:"",r.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+r.specularIntensityMapUv:"",r.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+r.transmissionMapUv:"",r.thicknessMapUv?"#define THICKNESSMAP_UV "+r.thicknessMapUv:"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.flatShading?"#define FLAT_SHADED":"",r.skinning?"#define USE_SKINNING":"",r.morphTargets?"#define USE_MORPHTARGETS":"",r.morphNormals&&r.flatShading===!1?"#define USE_MORPHNORMALS":"",r.morphColors?"#define USE_MORPHCOLORS":"",r.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+r.morphTextureStride:"",r.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+r.morphTargetsCount:"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+f:"",r.sizeAttenuation?"#define USE_SIZEATTENUATION":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ks).join(`
`),_=[bm(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,w,r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",r.map?"#define USE_MAP":"",r.matcap?"#define USE_MATCAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+m:"",r.envMap?"#define "+g:"",r.envMap?"#define "+y:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoat?"#define USE_CLEARCOAT":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.dispersion?"#define USE_DISPERSION":"",r.iridescence?"#define USE_IRIDESCENCE":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaTest?"#define USE_ALPHATEST":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.sheen?"#define USE_SHEEN":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors||r.instancingColor||r.batchingColor?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.gradientMap?"#define USE_GRADIENTMAP":"",r.flatShading?"#define FLAT_SHADED":"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+f:"",r.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",r.toneMapping!==_i?"#define TONE_MAPPING":"",r.toneMapping!==_i?at.tonemapping_pars_fragment:"",r.toneMapping!==_i?LM("toneMapping",r.toneMapping):"",r.dithering?"#define DITHERING":"",r.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,PM("linearToOutputTexel",r.outputColorSpace),NM(),r.useDepthPacking?"#define DEPTH_PACKING "+r.depthPacking:"",`
`].filter(ks).join(`
`)),d=Xd(d),d=Am(d,r),d=Rm(d,r),h=Xd(h),h=Am(h,r),h=Rm(h,r),d=Cm(d),h=Cm(h),r.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,v=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,_=["#define varying in",r.glslVersion===Xp?"":"layout(location = 0) out highp vec4 pc_fragColor;",r.glslVersion===Xp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const b=D+v+d,U=D+_+h,te=Tm(o,o.VERTEX_SHADER,b),B=Tm(o,o.FRAGMENT_SHADER,U);o.attachShader(A,te),o.attachShader(A,B),r.index0AttributeName!==void 0?o.bindAttribLocation(A,0,r.index0AttributeName):r.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function I(C){if(a.debug.checkShaderErrors){const re=o.getProgramInfoLog(A).trim(),ne=o.getShaderInfoLog(te).trim(),ae=o.getShaderInfoLog(B).trim();let pe=!0,ee=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(pe=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,A,te,B);else{const ce=wm(o,te,"vertex"),k=wm(o,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+re+`
`+ce+`
`+k)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(ne===""||ae==="")&&(ee=!1);ee&&(C.diagnostics={runnable:pe,programLog:re,vertexShader:{log:ne,prefix:v},fragmentShader:{log:ae,prefix:_}})}o.deleteShader(te),o.deleteShader(B),q=new Ll(o,A),_e=IM(o,A)}let q;this.getUniforms=function(){return q===void 0&&I(this),q};let _e;this.getAttributes=function(){return _e===void 0&&I(this),_e};let E=r.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=o.getProgramParameter(A,AM)),E},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=r.shaderType,this.name=r.shaderName,this.id=RM++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=te,this.fragmentShader=B,this}let YM=0;class qM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const r=e.vertexShader,i=e.fragmentShader,o=this._getShaderStage(r),u=this._getShaderStage(i),d=this._getShaderCacheForMaterial(e);return d.has(o)===!1&&(d.add(o),o.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const r=this.materialCache.get(e);for(const i of r)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const r=this.materialCache;let i=r.get(e);return i===void 0&&(i=new Set,r.set(e,i)),i}_getShaderStage(e){const r=this.shaderCache;let i=r.get(e);return i===void 0&&(i=new KM(e),r.set(e,i)),i}}class KM{constructor(e){this.id=YM++,this.code=e,this.usedTimes=0}}function ZM(a,e,r,i,o,u,d){const h=new lg,f=new qM,m=new Set,g=[],y=o.logarithmicDepthBuffer,x=o.reverseDepthBuffer,S=o.vertexTextures;let w=o.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return m.add(E),E===0?"uv":`uv${E}`}function _(E,C,re,ne,ae){const pe=ne.fog,ee=ae.geometry,ce=E.isMeshStandardMaterial?ne.environment:null,k=(E.isMeshStandardMaterial?r:e).get(E.envMap||ce),oe=k&&k.mapping===Bl?k.image.height:null,se=A[E.type];E.precision!==null&&(w=o.getMaxPrecision(E.precision),w!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",w,"instead."));const N=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Y=N!==void 0?N.length:0;let be=0;ee.morphAttributes.position!==void 0&&(be=1),ee.morphAttributes.normal!==void 0&&(be=2),ee.morphAttributes.color!==void 0&&(be=3);let K,le,ge,Se;if(se){const qt=mn[se];K=qt.vertexShader,le=qt.fragmentShader}else K=E.vertexShader,le=E.fragmentShader,f.update(E),ge=f.getVertexShaderID(E),Se=f.getFragmentShaderID(E);const Pe=a.getRenderTarget(),Le=ae.isInstancedMesh===!0,tt=ae.isBatchedMesh===!0,pt=!!E.map,ct=!!E.matcap,F=!!k,er=!!E.aoMap,lt=!!E.lightMap,ht=!!E.bumpMap,Qe=!!E.normalMap,Tt=!!E.displacementMap,Je=!!E.emissiveMap,P=!!E.metalnessMap,T=!!E.roughnessMap,j=E.anisotropy>0,de=E.clearcoat>0,xe=E.dispersion>0,ue=E.iridescence>0,Ge=E.sheen>0,we=E.transmission>0,De=j&&!!E.anisotropyMap,ut=de&&!!E.clearcoatMap,Me=de&&!!E.clearcoatNormalMap,Fe=de&&!!E.clearcoatRoughnessMap,rt=ue&&!!E.iridescenceMap,et=ue&&!!E.iridescenceThicknessMap,ke=Ge&&!!E.sheenColorMap,dt=Ge&&!!E.sheenRoughnessMap,it=!!E.specularMap,_t=!!E.specularColorMap,H=!!E.specularIntensityMap,Ne=we&&!!E.transmissionMap,ie=we&&!!E.thicknessMap,he=!!E.gradientMap,Ae=!!E.alphaMap,Re=E.alphaTest>0,Mt=!!E.alphaHash,It=!!E.extensions;let tr=_i;E.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(tr=a.toneMapping);const ft={shaderID:se,shaderType:E.type,shaderName:E.name,vertexShader:K,fragmentShader:le,defines:E.defines,customVertexShaderID:ge,customFragmentShaderID:Se,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:w,batching:tt,batchingColor:tt&&ae._colorsTexture!==null,instancing:Le,instancingColor:Le&&ae.instanceColor!==null,instancingMorph:Le&&ae.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:Pe===null?a.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:Si,alphaToCoverage:!!E.alphaToCoverage,map:pt,matcap:ct,envMap:F,envMapMode:F&&k.mapping,envMapCubeUVHeight:oe,aoMap:er,lightMap:lt,bumpMap:ht,normalMap:Qe,displacementMap:S&&Tt,emissiveMap:Je,normalMapObjectSpace:Qe&&E.normalMapType===n0,normalMapTangentSpace:Qe&&E.normalMapType===r0,metalnessMap:P,roughnessMap:T,anisotropy:j,anisotropyMap:De,clearcoat:de,clearcoatMap:ut,clearcoatNormalMap:Me,clearcoatRoughnessMap:Fe,dispersion:xe,iridescence:ue,iridescenceMap:rt,iridescenceThicknessMap:et,sheen:Ge,sheenColorMap:ke,sheenRoughnessMap:dt,specularMap:it,specularColorMap:_t,specularIntensityMap:H,transmission:we,transmissionMap:Ne,thicknessMap:ie,gradientMap:he,opaque:E.transparent===!1&&E.blending===Oa&&E.alphaToCoverage===!1,alphaMap:Ae,alphaTest:Re,alphaHash:Mt,combine:E.combine,mapUv:pt&&v(E.map.channel),aoMapUv:er&&v(E.aoMap.channel),lightMapUv:lt&&v(E.lightMap.channel),bumpMapUv:ht&&v(E.bumpMap.channel),normalMapUv:Qe&&v(E.normalMap.channel),displacementMapUv:Tt&&v(E.displacementMap.channel),emissiveMapUv:Je&&v(E.emissiveMap.channel),metalnessMapUv:P&&v(E.metalnessMap.channel),roughnessMapUv:T&&v(E.roughnessMap.channel),anisotropyMapUv:De&&v(E.anisotropyMap.channel),clearcoatMapUv:ut&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:Me&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:et&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:dt&&v(E.sheenRoughnessMap.channel),specularMapUv:it&&v(E.specularMap.channel),specularColorMapUv:_t&&v(E.specularColorMap.channel),specularIntensityMapUv:H&&v(E.specularIntensityMap.channel),transmissionMapUv:Ne&&v(E.transmissionMap.channel),thicknessMapUv:ie&&v(E.thicknessMap.channel),alphaMapUv:Ae&&v(E.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Qe||j),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:ae.isPoints===!0&&!!ee.attributes.uv&&(pt||Ae),fog:!!pe,useFog:E.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:y,reverseDepthBuffer:x,skinning:ae.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:be,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:E.dithering,shadowMapEnabled:a.shadowMap.enabled&&re.length>0,shadowMapType:a.shadowMap.type,toneMapping:tr,decodeVideoTexture:pt&&E.map.isVideoTexture===!0&&St.getTransfer(E.map.colorSpace)===Ut,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Dn,flipSided:E.side===Ar,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:It&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&E.extensions.multiDraw===!0||tt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ft.vertexUv1s=m.has(1),ft.vertexUv2s=m.has(2),ft.vertexUv3s=m.has(3),m.clear(),ft}function D(E){const C=[];if(E.shaderID?C.push(E.shaderID):(C.push(E.customVertexShaderID),C.push(E.customFragmentShaderID)),E.defines!==void 0)for(const re in E.defines)C.push(re),C.push(E.defines[re]);return E.isRawShaderMaterial===!1&&(b(C,E),U(C,E),C.push(a.outputColorSpace)),C.push(E.customProgramCacheKey),C.join()}function b(E,C){E.push(C.precision),E.push(C.outputColorSpace),E.push(C.envMapMode),E.push(C.envMapCubeUVHeight),E.push(C.mapUv),E.push(C.alphaMapUv),E.push(C.lightMapUv),E.push(C.aoMapUv),E.push(C.bumpMapUv),E.push(C.normalMapUv),E.push(C.displacementMapUv),E.push(C.emissiveMapUv),E.push(C.metalnessMapUv),E.push(C.roughnessMapUv),E.push(C.anisotropyMapUv),E.push(C.clearcoatMapUv),E.push(C.clearcoatNormalMapUv),E.push(C.clearcoatRoughnessMapUv),E.push(C.iridescenceMapUv),E.push(C.iridescenceThicknessMapUv),E.push(C.sheenColorMapUv),E.push(C.sheenRoughnessMapUv),E.push(C.specularMapUv),E.push(C.specularColorMapUv),E.push(C.specularIntensityMapUv),E.push(C.transmissionMapUv),E.push(C.thicknessMapUv),E.push(C.combine),E.push(C.fogExp2),E.push(C.sizeAttenuation),E.push(C.morphTargetsCount),E.push(C.morphAttributeCount),E.push(C.numDirLights),E.push(C.numPointLights),E.push(C.numSpotLights),E.push(C.numSpotLightMaps),E.push(C.numHemiLights),E.push(C.numRectAreaLights),E.push(C.numDirLightShadows),E.push(C.numPointLightShadows),E.push(C.numSpotLightShadows),E.push(C.numSpotLightShadowsWithMaps),E.push(C.numLightProbes),E.push(C.shadowMapType),E.push(C.toneMapping),E.push(C.numClippingPlanes),E.push(C.numClipIntersection),E.push(C.depthPacking)}function U(E,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),E.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reverseDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.alphaToCoverage&&h.enable(20),E.push(h.mask)}function te(E){const C=A[E.type];let re;if(C){const ne=mn[C];re=U0.clone(ne.uniforms)}else re=E.uniforms;return re}function B(E,C){let re;for(let ne=0,ae=g.length;ne<ae;ne++){const pe=g[ne];if(pe.cacheKey===C){re=pe,++re.usedTimes;break}}return re===void 0&&(re=new XM(a,C,E,u),g.push(re)),re}function I(E){if(--E.usedTimes===0){const C=g.indexOf(E);g[C]=g[g.length-1],g.pop(),E.destroy()}}function q(E){f.remove(E)}function _e(){f.dispose()}return{getParameters:_,getProgramCacheKey:D,getUniforms:te,acquireProgram:B,releaseProgram:I,releaseShaderCache:q,programs:g,dispose:_e}}function $M(){let a=new WeakMap;function e(d){return a.has(d)}function r(d){let h=a.get(d);return h===void 0&&(h={},a.set(d,h)),h}function i(d){a.delete(d)}function o(d,h,f){a.get(d)[h]=f}function u(){a=new WeakMap}return{has:e,get:r,remove:i,update:o,dispose:u}}function QM(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function Pm(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Lm(){const a=[];let e=0;const r=[],i=[],o=[];function u(){e=0,r.length=0,i.length=0,o.length=0}function d(y,x,S,w,A,v){let _=a[e];return _===void 0?(_={id:y.id,object:y,geometry:x,material:S,groupOrder:w,renderOrder:y.renderOrder,z:A,group:v},a[e]=_):(_.id=y.id,_.object=y,_.geometry=x,_.material=S,_.groupOrder=w,_.renderOrder=y.renderOrder,_.z=A,_.group=v),e++,_}function h(y,x,S,w,A,v){const _=d(y,x,S,w,A,v);S.transmission>0?i.push(_):S.transparent===!0?o.push(_):r.push(_)}function f(y,x,S,w,A,v){const _=d(y,x,S,w,A,v);S.transmission>0?i.unshift(_):S.transparent===!0?o.unshift(_):r.unshift(_)}function m(y,x){r.length>1&&r.sort(y||QM),i.length>1&&i.sort(x||Pm),o.length>1&&o.sort(x||Pm)}function g(){for(let y=e,x=a.length;y<x;y++){const S=a[y];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:r,transmissive:i,transparent:o,init:u,push:h,unshift:f,finish:g,sort:m}}function JM(){let a=new WeakMap;function e(i,o){const u=a.get(i);let d;return u===void 0?(d=new Lm,a.set(i,[d])):o>=u.length?(d=new Lm,u.push(d)):d=u[o],d}function r(){a=new WeakMap}return{get:e,dispose:r}}function eE(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let r;switch(e.type){case"DirectionalLight":r={direction:new J,color:new vt};break;case"SpotLight":r={position:new J,direction:new J,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":r={position:new J,color:new vt,distance:0,decay:0};break;case"HemisphereLight":r={direction:new J,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":r={color:new vt,position:new J,halfWidth:new J,halfHeight:new J};break}return a[e.id]=r,r}}}function tE(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let r;switch(e.type){case"DirectionalLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=r,r}}}let rE=0;function nE(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function iE(a){const e=new eE,r=tE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)i.probe.push(new J);const o=new J,u=new zt,d=new zt;function h(m){let g=0,y=0,x=0;for(let _e=0;_e<9;_e++)i.probe[_e].set(0,0,0);let S=0,w=0,A=0,v=0,_=0,D=0,b=0,U=0,te=0,B=0,I=0;m.sort(nE);for(let _e=0,E=m.length;_e<E;_e++){const C=m[_e],re=C.color,ne=C.intensity,ae=C.distance,pe=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)g+=re.r*ne,y+=re.g*ne,x+=re.b*ne;else if(C.isLightProbe){for(let ee=0;ee<9;ee++)i.probe[ee].addScaledVector(C.sh.coefficients[ee],ne);I++}else if(C.isDirectionalLight){const ee=e.get(C);if(ee.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const ce=C.shadow,k=r.get(C);k.shadowIntensity=ce.intensity,k.shadowBias=ce.bias,k.shadowNormalBias=ce.normalBias,k.shadowRadius=ce.radius,k.shadowMapSize=ce.mapSize,i.directionalShadow[S]=k,i.directionalShadowMap[S]=pe,i.directionalShadowMatrix[S]=C.shadow.matrix,D++}i.directional[S]=ee,S++}else if(C.isSpotLight){const ee=e.get(C);ee.position.setFromMatrixPosition(C.matrixWorld),ee.color.copy(re).multiplyScalar(ne),ee.distance=ae,ee.coneCos=Math.cos(C.angle),ee.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),ee.decay=C.decay,i.spot[A]=ee;const ce=C.shadow;if(C.map&&(i.spotLightMap[te]=C.map,te++,ce.updateMatrices(C),C.castShadow&&B++),i.spotLightMatrix[A]=ce.matrix,C.castShadow){const k=r.get(C);k.shadowIntensity=ce.intensity,k.shadowBias=ce.bias,k.shadowNormalBias=ce.normalBias,k.shadowRadius=ce.radius,k.shadowMapSize=ce.mapSize,i.spotShadow[A]=k,i.spotShadowMap[A]=pe,U++}A++}else if(C.isRectAreaLight){const ee=e.get(C);ee.color.copy(re).multiplyScalar(ne),ee.halfWidth.set(C.width*.5,0,0),ee.halfHeight.set(0,C.height*.5,0),i.rectArea[v]=ee,v++}else if(C.isPointLight){const ee=e.get(C);if(ee.color.copy(C.color).multiplyScalar(C.intensity),ee.distance=C.distance,ee.decay=C.decay,C.castShadow){const ce=C.shadow,k=r.get(C);k.shadowIntensity=ce.intensity,k.shadowBias=ce.bias,k.shadowNormalBias=ce.normalBias,k.shadowRadius=ce.radius,k.shadowMapSize=ce.mapSize,k.shadowCameraNear=ce.camera.near,k.shadowCameraFar=ce.camera.far,i.pointShadow[w]=k,i.pointShadowMap[w]=pe,i.pointShadowMatrix[w]=C.shadow.matrix,b++}i.point[w]=ee,w++}else if(C.isHemisphereLight){const ee=e.get(C);ee.skyColor.copy(C.color).multiplyScalar(ne),ee.groundColor.copy(C.groundColor).multiplyScalar(ne),i.hemi[_]=ee,_++}}v>0&&(a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2)),i.ambient[0]=g,i.ambient[1]=y,i.ambient[2]=x;const q=i.hash;(q.directionalLength!==S||q.pointLength!==w||q.spotLength!==A||q.rectAreaLength!==v||q.hemiLength!==_||q.numDirectionalShadows!==D||q.numPointShadows!==b||q.numSpotShadows!==U||q.numSpotMaps!==te||q.numLightProbes!==I)&&(i.directional.length=S,i.spot.length=A,i.rectArea.length=v,i.point.length=w,i.hemi.length=_,i.directionalShadow.length=D,i.directionalShadowMap.length=D,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=U,i.spotShadowMap.length=U,i.directionalShadowMatrix.length=D,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=U+te-B,i.spotLightMap.length=te,i.numSpotLightShadowsWithMaps=B,i.numLightProbes=I,q.directionalLength=S,q.pointLength=w,q.spotLength=A,q.rectAreaLength=v,q.hemiLength=_,q.numDirectionalShadows=D,q.numPointShadows=b,q.numSpotShadows=U,q.numSpotMaps=te,q.numLightProbes=I,i.version=rE++)}function f(m,g){let y=0,x=0,S=0,w=0,A=0;const v=g.matrixWorldInverse;for(let _=0,D=m.length;_<D;_++){const b=m[_];if(b.isDirectionalLight){const U=i.directional[y];U.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(v),y++}else if(b.isSpotLight){const U=i.spot[S];U.position.setFromMatrixPosition(b.matrixWorld),U.position.applyMatrix4(v),U.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(v),S++}else if(b.isRectAreaLight){const U=i.rectArea[w];U.position.setFromMatrixPosition(b.matrixWorld),U.position.applyMatrix4(v),d.identity(),u.copy(b.matrixWorld),u.premultiply(v),d.extractRotation(u),U.halfWidth.set(b.width*.5,0,0),U.halfHeight.set(0,b.height*.5,0),U.halfWidth.applyMatrix4(d),U.halfHeight.applyMatrix4(d),w++}else if(b.isPointLight){const U=i.point[x];U.position.setFromMatrixPosition(b.matrixWorld),U.position.applyMatrix4(v),x++}else if(b.isHemisphereLight){const U=i.hemi[A];U.direction.setFromMatrixPosition(b.matrixWorld),U.direction.transformDirection(v),A++}}}return{setup:h,setupView:f,state:i}}function Nm(a){const e=new iE(a),r=[],i=[];function o(g){m.camera=g,r.length=0,i.length=0}function u(g){r.push(g)}function d(g){i.push(g)}function h(){e.setup(r)}function f(g){e.setupView(r,g)}const m={lightsArray:r,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:h,setupLightsView:f,pushLight:u,pushShadow:d}}function aE(a){let e=new WeakMap;function r(o,u=0){const d=e.get(o);let h;return d===void 0?(h=new Nm(a),e.set(o,[h])):u>=d.length?(h=new Nm(a),d.push(h)):h=d[u],h}function i(){e=new WeakMap}return{get:r,dispose:i}}class sE extends Xa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=e0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class oE extends Xa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const lE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uE=`uniform sampler2D shadow_pass;
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
}`;function cE(a,e,r){let i=new gg;const o=new wt,u=new wt,d=new Ht,h=new sE({depthPacking:t0}),f=new oE,m={},g=r.maxTextureSize,y={[yi]:Ar,[Ar]:yi,[Dn]:Dn},x=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:lE,fragmentShader:uE}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const w=new ln;w.setAttribute("position",new Tr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Fn(w,x),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jm;let _=this.type;this.render=function(B,I,q){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||B.length===0)return;const _e=a.getRenderTarget(),E=a.getActiveCubeFace(),C=a.getActiveMipmapLevel(),re=a.state;re.setBlending(vi),re.buffers.color.setClear(1,1,1,1),re.buffers.depth.setTest(!0),re.setScissorTest(!1);const ne=_!==Un&&this.type===Un,ae=_===Un&&this.type!==Un;for(let pe=0,ee=B.length;pe<ee;pe++){const ce=B[pe],k=ce.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;o.copy(k.mapSize);const oe=k.getFrameExtents();if(o.multiply(oe),u.copy(k.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(u.x=Math.floor(g/oe.x),o.x=u.x*oe.x,k.mapSize.x=u.x),o.y>g&&(u.y=Math.floor(g/oe.y),o.y=u.y*oe.y,k.mapSize.y=u.y)),k.map===null||ne===!0||ae===!0){const N=this.type!==Un?{minFilter:Xr,magFilter:Xr}:{};k.map!==null&&k.map.dispose(),k.map=new qi(o.x,o.y,N),k.map.texture.name=ce.name+".shadowMap",k.camera.updateProjectionMatrix()}a.setRenderTarget(k.map),a.clear();const se=k.getViewportCount();for(let N=0;N<se;N++){const Y=k.getViewport(N);d.set(u.x*Y.x,u.y*Y.y,u.x*Y.z,u.y*Y.w),re.viewport(d),k.updateMatrices(ce,N),i=k.getFrustum(),U(I,q,k.camera,ce,this.type)}k.isPointLightShadow!==!0&&this.type===Un&&D(k,q),k.needsUpdate=!1}_=this.type,v.needsUpdate=!1,a.setRenderTarget(_e,E,C)};function D(B,I){const q=e.update(A);x.defines.VSM_SAMPLES!==B.blurSamples&&(x.defines.VSM_SAMPLES=B.blurSamples,S.defines.VSM_SAMPLES=B.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new qi(o.x,o.y)),x.uniforms.shadow_pass.value=B.map.texture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,a.setRenderTarget(B.mapPass),a.clear(),a.renderBufferDirect(I,null,q,x,A,null),S.uniforms.shadow_pass.value=B.mapPass.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,a.setRenderTarget(B.map),a.clear(),a.renderBufferDirect(I,null,q,S,A,null)}function b(B,I,q,_e){let E=null;const C=q.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(C!==void 0)E=C;else if(E=q.isPointLight===!0?f:h,a.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const re=E.uuid,ne=I.uuid;let ae=m[re];ae===void 0&&(ae={},m[re]=ae);let pe=ae[ne];pe===void 0&&(pe=E.clone(),ae[ne]=pe,I.addEventListener("dispose",te)),E=pe}if(E.visible=I.visible,E.wireframe=I.wireframe,_e===Un?E.side=I.shadowSide!==null?I.shadowSide:I.side:E.side=I.shadowSide!==null?I.shadowSide:y[I.side],E.alphaMap=I.alphaMap,E.alphaTest=I.alphaTest,E.map=I.map,E.clipShadows=I.clipShadows,E.clippingPlanes=I.clippingPlanes,E.clipIntersection=I.clipIntersection,E.displacementMap=I.displacementMap,E.displacementScale=I.displacementScale,E.displacementBias=I.displacementBias,E.wireframeLinewidth=I.wireframeLinewidth,E.linewidth=I.linewidth,q.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const re=a.properties.get(E);re.light=q}return E}function U(B,I,q,_e,E){if(B.visible===!1)return;if(B.layers.test(I.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&E===Un)&&(!B.frustumCulled||i.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,B.matrixWorld);const re=e.update(B),ne=B.material;if(Array.isArray(ne)){const ae=re.groups;for(let pe=0,ee=ae.length;pe<ee;pe++){const ce=ae[pe],k=ne[ce.materialIndex];if(k&&k.visible){const oe=b(B,k,_e,E);B.onBeforeShadow(a,B,I,q,re,oe,ce),a.renderBufferDirect(q,null,re,oe,B,ce),B.onAfterShadow(a,B,I,q,re,oe,ce)}}}else if(ne.visible){const ae=b(B,ne,_e,E);B.onBeforeShadow(a,B,I,q,re,ae,null),a.renderBufferDirect(q,null,re,ae,B,null),B.onAfterShadow(a,B,I,q,re,ae,null)}}const C=B.children;for(let re=0,ne=C.length;re<ne;re++)U(C[re],I,q,_e,E)}function te(B){B.target.removeEventListener("dispose",te);for(const I in m){const q=m[I],_e=B.target.uuid;_e in q&&(q[_e].dispose(),delete q[_e])}}}const dE={[ld]:ud,[cd]:fd,[dd]:pd,[za]:hd,[ud]:ld,[fd]:cd,[pd]:dd,[hd]:za};function hE(a){function e(){let H=!1;const Ne=new Ht;let ie=null;const he=new Ht(0,0,0,0);return{setMask:function(Ae){ie!==Ae&&!H&&(a.colorMask(Ae,Ae,Ae,Ae),ie=Ae)},setLocked:function(Ae){H=Ae},setClear:function(Ae,Re,Mt,It,tr){tr===!0&&(Ae*=It,Re*=It,Mt*=It),Ne.set(Ae,Re,Mt,It),he.equals(Ne)===!1&&(a.clearColor(Ae,Re,Mt,It),he.copy(Ne))},reset:function(){H=!1,ie=null,he.set(-1,0,0,0)}}}function r(){let H=!1,Ne=!1,ie=null,he=null,Ae=null;return{setReversed:function(Re){Ne=Re},setTest:function(Re){Re?ge(a.DEPTH_TEST):Se(a.DEPTH_TEST)},setMask:function(Re){ie!==Re&&!H&&(a.depthMask(Re),ie=Re)},setFunc:function(Re){if(Ne&&(Re=dE[Re]),he!==Re){switch(Re){case ld:a.depthFunc(a.NEVER);break;case ud:a.depthFunc(a.ALWAYS);break;case cd:a.depthFunc(a.LESS);break;case za:a.depthFunc(a.LEQUAL);break;case dd:a.depthFunc(a.EQUAL);break;case hd:a.depthFunc(a.GEQUAL);break;case fd:a.depthFunc(a.GREATER);break;case pd:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}he=Re}},setLocked:function(Re){H=Re},setClear:function(Re){Ae!==Re&&(a.clearDepth(Re),Ae=Re)},reset:function(){H=!1,ie=null,he=null,Ae=null}}}function i(){let H=!1,Ne=null,ie=null,he=null,Ae=null,Re=null,Mt=null,It=null,tr=null;return{setTest:function(ft){H||(ft?ge(a.STENCIL_TEST):Se(a.STENCIL_TEST))},setMask:function(ft){Ne!==ft&&!H&&(a.stencilMask(ft),Ne=ft)},setFunc:function(ft,qt,kr){(ie!==ft||he!==qt||Ae!==kr)&&(a.stencilFunc(ft,qt,kr),ie=ft,he=qt,Ae=kr)},setOp:function(ft,qt,kr){(Re!==ft||Mt!==qt||It!==kr)&&(a.stencilOp(ft,qt,kr),Re=ft,Mt=qt,It=kr)},setLocked:function(ft){H=ft},setClear:function(ft){tr!==ft&&(a.clearStencil(ft),tr=ft)},reset:function(){H=!1,Ne=null,ie=null,he=null,Ae=null,Re=null,Mt=null,It=null,tr=null}}}const o=new e,u=new r,d=new i,h=new WeakMap,f=new WeakMap;let m={},g={},y=new WeakMap,x=[],S=null,w=!1,A=null,v=null,_=null,D=null,b=null,U=null,te=null,B=new vt(0,0,0),I=0,q=!1,_e=null,E=null,C=null,re=null,ne=null;const ae=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let pe=!1,ee=0;const ce=a.getParameter(a.VERSION);ce.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(ce)[1]),pe=ee>=1):ce.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),pe=ee>=2);let k=null,oe={};const se=a.getParameter(a.SCISSOR_BOX),N=a.getParameter(a.VIEWPORT),Y=new Ht().fromArray(se),be=new Ht().fromArray(N);function K(H,Ne,ie,he){const Ae=new Uint8Array(4),Re=a.createTexture();a.bindTexture(H,Re),a.texParameteri(H,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(H,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Mt=0;Mt<ie;Mt++)H===a.TEXTURE_3D||H===a.TEXTURE_2D_ARRAY?a.texImage3D(Ne,0,a.RGBA,1,1,he,0,a.RGBA,a.UNSIGNED_BYTE,Ae):a.texImage2D(Ne+Mt,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Ae);return Re}const le={};le[a.TEXTURE_2D]=K(a.TEXTURE_2D,a.TEXTURE_2D,1),le[a.TEXTURE_CUBE_MAP]=K(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[a.TEXTURE_2D_ARRAY]=K(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),le[a.TEXTURE_3D]=K(a.TEXTURE_3D,a.TEXTURE_3D,1,1),o.setClear(0,0,0,1),u.setClear(1),d.setClear(0),ge(a.DEPTH_TEST),u.setFunc(za),lt(!1),ht(Hp),ge(a.CULL_FACE),F(vi);function ge(H){m[H]!==!0&&(a.enable(H),m[H]=!0)}function Se(H){m[H]!==!1&&(a.disable(H),m[H]=!1)}function Pe(H,Ne){return g[H]!==Ne?(a.bindFramebuffer(H,Ne),g[H]=Ne,H===a.DRAW_FRAMEBUFFER&&(g[a.FRAMEBUFFER]=Ne),H===a.FRAMEBUFFER&&(g[a.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Le(H,Ne){let ie=x,he=!1;if(H){ie=y.get(Ne),ie===void 0&&(ie=[],y.set(Ne,ie));const Ae=H.textures;if(ie.length!==Ae.length||ie[0]!==a.COLOR_ATTACHMENT0){for(let Re=0,Mt=Ae.length;Re<Mt;Re++)ie[Re]=a.COLOR_ATTACHMENT0+Re;ie.length=Ae.length,he=!0}}else ie[0]!==a.BACK&&(ie[0]=a.BACK,he=!0);he&&a.drawBuffers(ie)}function tt(H){return S!==H?(a.useProgram(H),S=H,!0):!1}const pt={[Gi]:a.FUNC_ADD,[R_]:a.FUNC_SUBTRACT,[C_]:a.FUNC_REVERSE_SUBTRACT};pt[b_]=a.MIN,pt[P_]=a.MAX;const ct={[L_]:a.ZERO,[N_]:a.ONE,[U_]:a.SRC_COLOR,[sd]:a.SRC_ALPHA,[z_]:a.SRC_ALPHA_SATURATE,[F_]:a.DST_COLOR,[I_]:a.DST_ALPHA,[D_]:a.ONE_MINUS_SRC_COLOR,[od]:a.ONE_MINUS_SRC_ALPHA,[k_]:a.ONE_MINUS_DST_COLOR,[O_]:a.ONE_MINUS_DST_ALPHA,[B_]:a.CONSTANT_COLOR,[H_]:a.ONE_MINUS_CONSTANT_COLOR,[V_]:a.CONSTANT_ALPHA,[G_]:a.ONE_MINUS_CONSTANT_ALPHA};function F(H,Ne,ie,he,Ae,Re,Mt,It,tr,ft){if(H===vi){w===!0&&(Se(a.BLEND),w=!1);return}if(w===!1&&(ge(a.BLEND),w=!0),H!==A_){if(H!==A||ft!==q){if((v!==Gi||b!==Gi)&&(a.blendEquation(a.FUNC_ADD),v=Gi,b=Gi),ft)switch(H){case Oa:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Nl:a.blendFunc(a.ONE,a.ONE);break;case Vp:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Gp:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Oa:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Nl:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case Vp:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Gp:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}_=null,D=null,U=null,te=null,B.set(0,0,0),I=0,A=H,q=ft}return}Ae=Ae||Ne,Re=Re||ie,Mt=Mt||he,(Ne!==v||Ae!==b)&&(a.blendEquationSeparate(pt[Ne],pt[Ae]),v=Ne,b=Ae),(ie!==_||he!==D||Re!==U||Mt!==te)&&(a.blendFuncSeparate(ct[ie],ct[he],ct[Re],ct[Mt]),_=ie,D=he,U=Re,te=Mt),(It.equals(B)===!1||tr!==I)&&(a.blendColor(It.r,It.g,It.b,tr),B.copy(It),I=tr),A=H,q=!1}function er(H,Ne){H.side===Dn?Se(a.CULL_FACE):ge(a.CULL_FACE);let ie=H.side===Ar;Ne&&(ie=!ie),lt(ie),H.blending===Oa&&H.transparent===!1?F(vi):F(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),o.setMask(H.colorWrite);const he=H.stencilWrite;d.setTest(he),he&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Tt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ge(a.SAMPLE_ALPHA_TO_COVERAGE):Se(a.SAMPLE_ALPHA_TO_COVERAGE)}function lt(H){_e!==H&&(H?a.frontFace(a.CW):a.frontFace(a.CCW),_e=H)}function ht(H){H!==E_?(ge(a.CULL_FACE),H!==E&&(H===Hp?a.cullFace(a.BACK):H===T_?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Se(a.CULL_FACE),E=H}function Qe(H){H!==C&&(pe&&a.lineWidth(H),C=H)}function Tt(H,Ne,ie){H?(ge(a.POLYGON_OFFSET_FILL),(re!==Ne||ne!==ie)&&(a.polygonOffset(Ne,ie),re=Ne,ne=ie)):Se(a.POLYGON_OFFSET_FILL)}function Je(H){H?ge(a.SCISSOR_TEST):Se(a.SCISSOR_TEST)}function P(H){H===void 0&&(H=a.TEXTURE0+ae-1),k!==H&&(a.activeTexture(H),k=H)}function T(H,Ne,ie){ie===void 0&&(k===null?ie=a.TEXTURE0+ae-1:ie=k);let he=oe[ie];he===void 0&&(he={type:void 0,texture:void 0},oe[ie]=he),(he.type!==H||he.texture!==Ne)&&(k!==ie&&(a.activeTexture(ie),k=ie),a.bindTexture(H,Ne||le[H]),he.type=H,he.texture=Ne)}function j(){const H=oe[k];H!==void 0&&H.type!==void 0&&(a.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function de(){try{a.compressedTexImage2D.apply(a,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function xe(){try{a.compressedTexImage3D.apply(a,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ue(){try{a.texSubImage2D.apply(a,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ge(){try{a.texSubImage3D.apply(a,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function we(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function De(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ut(){try{a.texStorage2D.apply(a,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Me(){try{a.texStorage3D.apply(a,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Fe(){try{a.texImage2D.apply(a,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function rt(){try{a.texImage3D.apply(a,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function et(H){Y.equals(H)===!1&&(a.scissor(H.x,H.y,H.z,H.w),Y.copy(H))}function ke(H){be.equals(H)===!1&&(a.viewport(H.x,H.y,H.z,H.w),be.copy(H))}function dt(H,Ne){let ie=f.get(Ne);ie===void 0&&(ie=new WeakMap,f.set(Ne,ie));let he=ie.get(H);he===void 0&&(he=a.getUniformBlockIndex(Ne,H.name),ie.set(H,he))}function it(H,Ne){const ie=f.get(Ne).get(H);h.get(Ne)!==ie&&(a.uniformBlockBinding(Ne,ie,H.__bindingPointIndex),h.set(Ne,ie))}function _t(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),m={},k=null,oe={},g={},y=new WeakMap,x=[],S=null,w=!1,A=null,v=null,_=null,D=null,b=null,U=null,te=null,B=new vt(0,0,0),I=0,q=!1,_e=null,E=null,C=null,re=null,ne=null,Y.set(0,0,a.canvas.width,a.canvas.height),be.set(0,0,a.canvas.width,a.canvas.height),o.reset(),u.reset(),d.reset()}return{buffers:{color:o,depth:u,stencil:d},enable:ge,disable:Se,bindFramebuffer:Pe,drawBuffers:Le,useProgram:tt,setBlending:F,setMaterial:er,setFlipSided:lt,setCullFace:ht,setLineWidth:Qe,setPolygonOffset:Tt,setScissorTest:Je,activeTexture:P,bindTexture:T,unbindTexture:j,compressedTexImage2D:de,compressedTexImage3D:xe,texImage2D:Fe,texImage3D:rt,updateUBOMapping:dt,uniformBlockBinding:it,texStorage2D:ut,texStorage3D:Me,texSubImage2D:ue,texSubImage3D:Ge,compressedTexSubImage2D:we,compressedTexSubImage3D:De,scissor:et,viewport:ke,reset:_t}}function Um(a,e,r,i){const o=fE(i);switch(r){case $m:return a*e;case Jm:return a*e;case eg:return a*e*2;case tg:return a*e/o.components*o.byteLength;case Jd:return a*e/o.components*o.byteLength;case rg:return a*e*2/o.components*o.byteLength;case eh:return a*e*2/o.components*o.byteLength;case Qm:return a*e*3/o.components*o.byteLength;case on:return a*e*4/o.components*o.byteLength;case th:return a*e*4/o.components*o.byteLength;case wl:case Al:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Rl:case Cl:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case yd:case Md:return Math.max(a,16)*Math.max(e,8)/4;case xd:case Sd:return Math.max(a,8)*Math.max(e,8)/2;case Ed:case Td:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case wd:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Ad:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Rd:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Cd:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case bd:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Ld:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Nd:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Ud:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Dd:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Id:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Od:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Fd:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case kd:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case zd:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case bl:case Bd:case Hd:return Math.ceil(a/4)*Math.ceil(e/4)*16;case ng:case Vd:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Gd:case Wd:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${r} format.`)}function fE(a){switch(a){case zn:case qm:return{byteLength:1,components:1};case zs:case Km:case Bs:return{byteLength:2,components:1};case $d:case Qd:return{byteLength:2,components:4};case Yi:case Zd:case In:return{byteLength:4,components:1};case Zm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}function pE(a,e,r,i,o,u,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new wt,g=new WeakMap;let y;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(P,T){return S?new OffscreenCanvas(P,T):Fl("canvas")}function A(P,T,j){let de=1;const xe=Je(P);if((xe.width>j||xe.height>j)&&(de=j/Math.max(xe.width,xe.height)),de<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ue=Math.floor(de*xe.width),Ge=Math.floor(de*xe.height);y===void 0&&(y=w(ue,Ge));const we=T?w(ue,Ge):y;return we.width=ue,we.height=Ge,we.getContext("2d").drawImage(P,0,0,ue,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+ue+"x"+Ge+")."),we}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),P;return P}function v(P){return P.generateMipmaps&&P.minFilter!==Xr&&P.minFilter!==an}function _(P){a.generateMipmap(P)}function D(P,T,j,de,xe=!1){if(P!==null){if(a[P]!==void 0)return a[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ue=T;if(T===a.RED&&(j===a.FLOAT&&(ue=a.R32F),j===a.HALF_FLOAT&&(ue=a.R16F),j===a.UNSIGNED_BYTE&&(ue=a.R8)),T===a.RED_INTEGER&&(j===a.UNSIGNED_BYTE&&(ue=a.R8UI),j===a.UNSIGNED_SHORT&&(ue=a.R16UI),j===a.UNSIGNED_INT&&(ue=a.R32UI),j===a.BYTE&&(ue=a.R8I),j===a.SHORT&&(ue=a.R16I),j===a.INT&&(ue=a.R32I)),T===a.RG&&(j===a.FLOAT&&(ue=a.RG32F),j===a.HALF_FLOAT&&(ue=a.RG16F),j===a.UNSIGNED_BYTE&&(ue=a.RG8)),T===a.RG_INTEGER&&(j===a.UNSIGNED_BYTE&&(ue=a.RG8UI),j===a.UNSIGNED_SHORT&&(ue=a.RG16UI),j===a.UNSIGNED_INT&&(ue=a.RG32UI),j===a.BYTE&&(ue=a.RG8I),j===a.SHORT&&(ue=a.RG16I),j===a.INT&&(ue=a.RG32I)),T===a.RGB_INTEGER&&(j===a.UNSIGNED_BYTE&&(ue=a.RGB8UI),j===a.UNSIGNED_SHORT&&(ue=a.RGB16UI),j===a.UNSIGNED_INT&&(ue=a.RGB32UI),j===a.BYTE&&(ue=a.RGB8I),j===a.SHORT&&(ue=a.RGB16I),j===a.INT&&(ue=a.RGB32I)),T===a.RGBA_INTEGER&&(j===a.UNSIGNED_BYTE&&(ue=a.RGBA8UI),j===a.UNSIGNED_SHORT&&(ue=a.RGBA16UI),j===a.UNSIGNED_INT&&(ue=a.RGBA32UI),j===a.BYTE&&(ue=a.RGBA8I),j===a.SHORT&&(ue=a.RGBA16I),j===a.INT&&(ue=a.RGBA32I)),T===a.RGB&&j===a.UNSIGNED_INT_5_9_9_9_REV&&(ue=a.RGB9_E5),T===a.RGBA){const Ge=xe?Ul:St.getTransfer(de);j===a.FLOAT&&(ue=a.RGBA32F),j===a.HALF_FLOAT&&(ue=a.RGBA16F),j===a.UNSIGNED_BYTE&&(ue=Ge===Ut?a.SRGB8_ALPHA8:a.RGBA8),j===a.UNSIGNED_SHORT_4_4_4_4&&(ue=a.RGBA4),j===a.UNSIGNED_SHORT_5_5_5_1&&(ue=a.RGB5_A1)}return(ue===a.R16F||ue===a.R32F||ue===a.RG16F||ue===a.RG32F||ue===a.RGBA16F||ue===a.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function b(P,T){let j;return P?T===null||T===Yi||T===Va?j=a.DEPTH24_STENCIL8:T===In?j=a.DEPTH32F_STENCIL8:T===zs&&(j=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Yi||T===Va?j=a.DEPTH_COMPONENT24:T===In?j=a.DEPTH_COMPONENT32F:T===zs&&(j=a.DEPTH_COMPONENT16),j}function U(P,T){return v(P)===!0||P.isFramebufferTexture&&P.minFilter!==Xr&&P.minFilter!==an?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function te(P){const T=P.target;T.removeEventListener("dispose",te),I(T),T.isVideoTexture&&g.delete(T)}function B(P){const T=P.target;T.removeEventListener("dispose",B),_e(T)}function I(P){const T=i.get(P);if(T.__webglInit===void 0)return;const j=P.source,de=x.get(j);if(de){const xe=de[T.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&q(P),Object.keys(de).length===0&&x.delete(j)}i.remove(P)}function q(P){const T=i.get(P);a.deleteTexture(T.__webglTexture);const j=P.source,de=x.get(j);delete de[T.__cacheKey],d.memory.textures--}function _e(P){const T=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(T.__webglFramebuffer[de]))for(let xe=0;xe<T.__webglFramebuffer[de].length;xe++)a.deleteFramebuffer(T.__webglFramebuffer[de][xe]);else a.deleteFramebuffer(T.__webglFramebuffer[de]);T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer[de])}else{if(Array.isArray(T.__webglFramebuffer))for(let de=0;de<T.__webglFramebuffer.length;de++)a.deleteFramebuffer(T.__webglFramebuffer[de]);else a.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&a.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let de=0;de<T.__webglColorRenderbuffer.length;de++)T.__webglColorRenderbuffer[de]&&a.deleteRenderbuffer(T.__webglColorRenderbuffer[de]);T.__webglDepthRenderbuffer&&a.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const j=P.textures;for(let de=0,xe=j.length;de<xe;de++){const ue=i.get(j[de]);ue.__webglTexture&&(a.deleteTexture(ue.__webglTexture),d.memory.textures--),i.remove(j[de])}i.remove(P)}let E=0;function C(){E=0}function re(){const P=E;return P>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),E+=1,P}function ne(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function ae(P,T){const j=i.get(P);if(P.isVideoTexture&&Qe(P),P.isRenderTargetTexture===!1&&P.version>0&&j.__version!==P.version){const de=P.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(j,P,T);return}}r.bindTexture(a.TEXTURE_2D,j.__webglTexture,a.TEXTURE0+T)}function pe(P,T){const j=i.get(P);if(P.version>0&&j.__version!==P.version){be(j,P,T);return}r.bindTexture(a.TEXTURE_2D_ARRAY,j.__webglTexture,a.TEXTURE0+T)}function ee(P,T){const j=i.get(P);if(P.version>0&&j.__version!==P.version){be(j,P,T);return}r.bindTexture(a.TEXTURE_3D,j.__webglTexture,a.TEXTURE0+T)}function ce(P,T){const j=i.get(P);if(P.version>0&&j.__version!==P.version){K(j,P,T);return}r.bindTexture(a.TEXTURE_CUBE_MAP,j.__webglTexture,a.TEXTURE0+T)}const k={[vd]:a.REPEAT,[ji]:a.CLAMP_TO_EDGE,[_d]:a.MIRRORED_REPEAT},oe={[Xr]:a.NEAREST,[J_]:a.NEAREST_MIPMAP_NEAREST,[Jo]:a.NEAREST_MIPMAP_LINEAR,[an]:a.LINEAR,[Ac]:a.LINEAR_MIPMAP_NEAREST,[Xi]:a.LINEAR_MIPMAP_LINEAR},se={[i0]:a.NEVER,[c0]:a.ALWAYS,[a0]:a.LESS,[ig]:a.LEQUAL,[s0]:a.EQUAL,[u0]:a.GEQUAL,[o0]:a.GREATER,[l0]:a.NOTEQUAL};function N(P,T){if(T.type===In&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===an||T.magFilter===Ac||T.magFilter===Jo||T.magFilter===Xi||T.minFilter===an||T.minFilter===Ac||T.minFilter===Jo||T.minFilter===Xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(P,a.TEXTURE_WRAP_S,k[T.wrapS]),a.texParameteri(P,a.TEXTURE_WRAP_T,k[T.wrapT]),(P===a.TEXTURE_3D||P===a.TEXTURE_2D_ARRAY)&&a.texParameteri(P,a.TEXTURE_WRAP_R,k[T.wrapR]),a.texParameteri(P,a.TEXTURE_MAG_FILTER,oe[T.magFilter]),a.texParameteri(P,a.TEXTURE_MIN_FILTER,oe[T.minFilter]),T.compareFunction&&(a.texParameteri(P,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(P,a.TEXTURE_COMPARE_FUNC,se[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Xr||T.minFilter!==Jo&&T.minFilter!==Xi||T.type===In&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");a.texParameterf(P,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Y(P,T){let j=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",te));const de=T.source;let xe=x.get(de);xe===void 0&&(xe={},x.set(de,xe));const ue=ne(T);if(ue!==P.__cacheKey){xe[ue]===void 0&&(xe[ue]={texture:a.createTexture(),usedTimes:0},d.memory.textures++,j=!0),xe[ue].usedTimes++;const Ge=xe[P.__cacheKey];Ge!==void 0&&(xe[P.__cacheKey].usedTimes--,Ge.usedTimes===0&&q(T)),P.__cacheKey=ue,P.__webglTexture=xe[ue].texture}return j}function be(P,T,j){let de=a.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(de=a.TEXTURE_2D_ARRAY),T.isData3DTexture&&(de=a.TEXTURE_3D);const xe=Y(P,T),ue=T.source;r.bindTexture(de,P.__webglTexture,a.TEXTURE0+j);const Ge=i.get(ue);if(ue.version!==Ge.__version||xe===!0){r.activeTexture(a.TEXTURE0+j);const we=St.getPrimaries(St.workingColorSpace),De=T.colorSpace===gi?null:St.getPrimaries(T.colorSpace),ut=T.colorSpace===gi||we===De?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Me=A(T.image,!1,o.maxTextureSize);Me=Tt(T,Me);const Fe=u.convert(T.format,T.colorSpace),rt=u.convert(T.type);let et=D(T.internalFormat,Fe,rt,T.colorSpace,T.isVideoTexture);N(de,T);let ke;const dt=T.mipmaps,it=T.isVideoTexture!==!0,_t=Ge.__version===void 0||xe===!0,H=ue.dataReady,Ne=U(T,Me);if(T.isDepthTexture)et=b(T.format===Ga,T.type),_t&&(it?r.texStorage2D(a.TEXTURE_2D,1,et,Me.width,Me.height):r.texImage2D(a.TEXTURE_2D,0,et,Me.width,Me.height,0,Fe,rt,null));else if(T.isDataTexture)if(dt.length>0){it&&_t&&r.texStorage2D(a.TEXTURE_2D,Ne,et,dt[0].width,dt[0].height);for(let ie=0,he=dt.length;ie<he;ie++)ke=dt[ie],it?H&&r.texSubImage2D(a.TEXTURE_2D,ie,0,0,ke.width,ke.height,Fe,rt,ke.data):r.texImage2D(a.TEXTURE_2D,ie,et,ke.width,ke.height,0,Fe,rt,ke.data);T.generateMipmaps=!1}else it?(_t&&r.texStorage2D(a.TEXTURE_2D,Ne,et,Me.width,Me.height),H&&r.texSubImage2D(a.TEXTURE_2D,0,0,0,Me.width,Me.height,Fe,rt,Me.data)):r.texImage2D(a.TEXTURE_2D,0,et,Me.width,Me.height,0,Fe,rt,Me.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){it&&_t&&r.texStorage3D(a.TEXTURE_2D_ARRAY,Ne,et,dt[0].width,dt[0].height,Me.depth);for(let ie=0,he=dt.length;ie<he;ie++)if(ke=dt[ie],T.format!==on)if(Fe!==null)if(it){if(H)if(T.layerUpdates.size>0){const Ae=Um(ke.width,ke.height,T.format,T.type);for(const Re of T.layerUpdates){const Mt=ke.data.subarray(Re*Ae/ke.data.BYTES_PER_ELEMENT,(Re+1)*Ae/ke.data.BYTES_PER_ELEMENT);r.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ie,0,0,Re,ke.width,ke.height,1,Fe,Mt,0,0)}T.clearLayerUpdates()}else r.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ie,0,0,0,ke.width,ke.height,Me.depth,Fe,ke.data,0,0)}else r.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ie,et,ke.width,ke.height,Me.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?H&&r.texSubImage3D(a.TEXTURE_2D_ARRAY,ie,0,0,0,ke.width,ke.height,Me.depth,Fe,rt,ke.data):r.texImage3D(a.TEXTURE_2D_ARRAY,ie,et,ke.width,ke.height,Me.depth,0,Fe,rt,ke.data)}else{it&&_t&&r.texStorage2D(a.TEXTURE_2D,Ne,et,dt[0].width,dt[0].height);for(let ie=0,he=dt.length;ie<he;ie++)ke=dt[ie],T.format!==on?Fe!==null?it?H&&r.compressedTexSubImage2D(a.TEXTURE_2D,ie,0,0,ke.width,ke.height,Fe,ke.data):r.compressedTexImage2D(a.TEXTURE_2D,ie,et,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?H&&r.texSubImage2D(a.TEXTURE_2D,ie,0,0,ke.width,ke.height,Fe,rt,ke.data):r.texImage2D(a.TEXTURE_2D,ie,et,ke.width,ke.height,0,Fe,rt,ke.data)}else if(T.isDataArrayTexture)if(it){if(_t&&r.texStorage3D(a.TEXTURE_2D_ARRAY,Ne,et,Me.width,Me.height,Me.depth),H)if(T.layerUpdates.size>0){const ie=Um(Me.width,Me.height,T.format,T.type);for(const he of T.layerUpdates){const Ae=Me.data.subarray(he*ie/Me.data.BYTES_PER_ELEMENT,(he+1)*ie/Me.data.BYTES_PER_ELEMENT);r.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,he,Me.width,Me.height,1,Fe,rt,Ae)}T.clearLayerUpdates()}else r.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Fe,rt,Me.data)}else r.texImage3D(a.TEXTURE_2D_ARRAY,0,et,Me.width,Me.height,Me.depth,0,Fe,rt,Me.data);else if(T.isData3DTexture)it?(_t&&r.texStorage3D(a.TEXTURE_3D,Ne,et,Me.width,Me.height,Me.depth),H&&r.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Fe,rt,Me.data)):r.texImage3D(a.TEXTURE_3D,0,et,Me.width,Me.height,Me.depth,0,Fe,rt,Me.data);else if(T.isFramebufferTexture){if(_t)if(it)r.texStorage2D(a.TEXTURE_2D,Ne,et,Me.width,Me.height);else{let ie=Me.width,he=Me.height;for(let Ae=0;Ae<Ne;Ae++)r.texImage2D(a.TEXTURE_2D,Ae,et,ie,he,0,Fe,rt,null),ie>>=1,he>>=1}}else if(dt.length>0){if(it&&_t){const ie=Je(dt[0]);r.texStorage2D(a.TEXTURE_2D,Ne,et,ie.width,ie.height)}for(let ie=0,he=dt.length;ie<he;ie++)ke=dt[ie],it?H&&r.texSubImage2D(a.TEXTURE_2D,ie,0,0,Fe,rt,ke):r.texImage2D(a.TEXTURE_2D,ie,et,Fe,rt,ke);T.generateMipmaps=!1}else if(it){if(_t){const ie=Je(Me);r.texStorage2D(a.TEXTURE_2D,Ne,et,ie.width,ie.height)}H&&r.texSubImage2D(a.TEXTURE_2D,0,0,0,Fe,rt,Me)}else r.texImage2D(a.TEXTURE_2D,0,et,Fe,rt,Me);v(T)&&_(de),Ge.__version=ue.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function K(P,T,j){if(T.image.length!==6)return;const de=Y(P,T),xe=T.source;r.bindTexture(a.TEXTURE_CUBE_MAP,P.__webglTexture,a.TEXTURE0+j);const ue=i.get(xe);if(xe.version!==ue.__version||de===!0){r.activeTexture(a.TEXTURE0+j);const Ge=St.getPrimaries(St.workingColorSpace),we=T.colorSpace===gi?null:St.getPrimaries(T.colorSpace),De=T.colorSpace===gi||Ge===we?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const ut=T.isCompressedTexture||T.image[0].isCompressedTexture,Me=T.image[0]&&T.image[0].isDataTexture,Fe=[];for(let he=0;he<6;he++)!ut&&!Me?Fe[he]=A(T.image[he],!0,o.maxCubemapSize):Fe[he]=Me?T.image[he].image:T.image[he],Fe[he]=Tt(T,Fe[he]);const rt=Fe[0],et=u.convert(T.format,T.colorSpace),ke=u.convert(T.type),dt=D(T.internalFormat,et,ke,T.colorSpace),it=T.isVideoTexture!==!0,_t=ue.__version===void 0||de===!0,H=xe.dataReady;let Ne=U(T,rt);N(a.TEXTURE_CUBE_MAP,T);let ie;if(ut){it&&_t&&r.texStorage2D(a.TEXTURE_CUBE_MAP,Ne,dt,rt.width,rt.height);for(let he=0;he<6;he++){ie=Fe[he].mipmaps;for(let Ae=0;Ae<ie.length;Ae++){const Re=ie[Ae];T.format!==on?et!==null?it?H&&r.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae,0,0,Re.width,Re.height,et,Re.data):r.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae,dt,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?H&&r.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae,0,0,Re.width,Re.height,et,ke,Re.data):r.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae,dt,Re.width,Re.height,0,et,ke,Re.data)}}}else{if(ie=T.mipmaps,it&&_t){ie.length>0&&Ne++;const he=Je(Fe[0]);r.texStorage2D(a.TEXTURE_CUBE_MAP,Ne,dt,he.width,he.height)}for(let he=0;he<6;he++)if(Me){it?H&&r.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Fe[he].width,Fe[he].height,et,ke,Fe[he].data):r.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,dt,Fe[he].width,Fe[he].height,0,et,ke,Fe[he].data);for(let Ae=0;Ae<ie.length;Ae++){const Re=ie[Ae].image[he].image;it?H&&r.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae+1,0,0,Re.width,Re.height,et,ke,Re.data):r.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae+1,dt,Re.width,Re.height,0,et,ke,Re.data)}}else{it?H&&r.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,et,ke,Fe[he]):r.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,dt,et,ke,Fe[he]);for(let Ae=0;Ae<ie.length;Ae++){const Re=ie[Ae];it?H&&r.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae+1,0,0,et,ke,Re.image[he]):r.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae+1,dt,et,ke,Re.image[he])}}}v(T)&&_(a.TEXTURE_CUBE_MAP),ue.__version=xe.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function le(P,T,j,de,xe,ue){const Ge=u.convert(j.format,j.colorSpace),we=u.convert(j.type),De=D(j.internalFormat,Ge,we,j.colorSpace);if(!i.get(T).__hasExternalTextures){const ut=Math.max(1,T.width>>ue),Me=Math.max(1,T.height>>ue);xe===a.TEXTURE_3D||xe===a.TEXTURE_2D_ARRAY?r.texImage3D(xe,ue,De,ut,Me,T.depth,0,Ge,we,null):r.texImage2D(xe,ue,De,ut,Me,0,Ge,we,null)}r.bindFramebuffer(a.FRAMEBUFFER,P),ht(T)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,de,xe,i.get(j).__webglTexture,0,lt(T)):(xe===a.TEXTURE_2D||xe>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,de,xe,i.get(j).__webglTexture,ue),r.bindFramebuffer(a.FRAMEBUFFER,null)}function ge(P,T,j){if(a.bindRenderbuffer(a.RENDERBUFFER,P),T.depthBuffer){const de=T.depthTexture,xe=de&&de.isDepthTexture?de.type:null,ue=b(T.stencilBuffer,xe),Ge=T.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,we=lt(T);ht(T)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,we,ue,T.width,T.height):j?a.renderbufferStorageMultisample(a.RENDERBUFFER,we,ue,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,ue,T.width,T.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ge,a.RENDERBUFFER,P)}else{const de=T.textures;for(let xe=0;xe<de.length;xe++){const ue=de[xe],Ge=u.convert(ue.format,ue.colorSpace),we=u.convert(ue.type),De=D(ue.internalFormat,Ge,we,ue.colorSpace),ut=lt(T);j&&ht(T)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,ut,De,T.width,T.height):ht(T)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ut,De,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,De,T.width,T.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Se(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(r.bindFramebuffer(a.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ae(T.depthTexture,0);const j=i.get(T.depthTexture).__webglTexture,de=lt(T);if(T.depthTexture.format===Fa)ht(T)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,j,0,de):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,j,0);else if(T.depthTexture.format===Ga)ht(T)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,j,0,de):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Pe(P){const T=i.get(P),j=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const de=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),de){const xe=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,de.removeEventListener("dispose",xe)};de.addEventListener("dispose",xe),T.__depthDisposeCallback=xe}T.__boundDepthTexture=de}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");Se(T.__webglFramebuffer,P)}else if(j){T.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(r.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer[de]),T.__webglDepthbuffer[de]===void 0)T.__webglDepthbuffer[de]=a.createRenderbuffer(),ge(T.__webglDepthbuffer[de],P,!1);else{const xe=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ue=T.__webglDepthbuffer[de];a.bindRenderbuffer(a.RENDERBUFFER,ue),a.framebufferRenderbuffer(a.FRAMEBUFFER,xe,a.RENDERBUFFER,ue)}}else if(r.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=a.createRenderbuffer(),ge(T.__webglDepthbuffer,P,!1);else{const de=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,xe=T.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,xe),a.framebufferRenderbuffer(a.FRAMEBUFFER,de,a.RENDERBUFFER,xe)}r.bindFramebuffer(a.FRAMEBUFFER,null)}function Le(P,T,j){const de=i.get(P);T!==void 0&&le(de.__webglFramebuffer,P,P.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),j!==void 0&&Pe(P)}function tt(P){const T=P.texture,j=i.get(P),de=i.get(T);P.addEventListener("dispose",B);const xe=P.textures,ue=P.isWebGLCubeRenderTarget===!0,Ge=xe.length>1;if(Ge||(de.__webglTexture===void 0&&(de.__webglTexture=a.createTexture()),de.__version=T.version,d.memory.textures++),ue){j.__webglFramebuffer=[];for(let we=0;we<6;we++)if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer[we]=[];for(let De=0;De<T.mipmaps.length;De++)j.__webglFramebuffer[we][De]=a.createFramebuffer()}else j.__webglFramebuffer[we]=a.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer=[];for(let we=0;we<T.mipmaps.length;we++)j.__webglFramebuffer[we]=a.createFramebuffer()}else j.__webglFramebuffer=a.createFramebuffer();if(Ge)for(let we=0,De=xe.length;we<De;we++){const ut=i.get(xe[we]);ut.__webglTexture===void 0&&(ut.__webglTexture=a.createTexture(),d.memory.textures++)}if(P.samples>0&&ht(P)===!1){j.__webglMultisampledFramebuffer=a.createFramebuffer(),j.__webglColorRenderbuffer=[],r.bindFramebuffer(a.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let we=0;we<xe.length;we++){const De=xe[we];j.__webglColorRenderbuffer[we]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,j.__webglColorRenderbuffer[we]);const ut=u.convert(De.format,De.colorSpace),Me=u.convert(De.type),Fe=D(De.internalFormat,ut,Me,De.colorSpace,P.isXRRenderTarget===!0),rt=lt(P);a.renderbufferStorageMultisample(a.RENDERBUFFER,rt,Fe,P.width,P.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.RENDERBUFFER,j.__webglColorRenderbuffer[we])}a.bindRenderbuffer(a.RENDERBUFFER,null),P.depthBuffer&&(j.__webglDepthRenderbuffer=a.createRenderbuffer(),ge(j.__webglDepthRenderbuffer,P,!0)),r.bindFramebuffer(a.FRAMEBUFFER,null)}}if(ue){r.bindTexture(a.TEXTURE_CUBE_MAP,de.__webglTexture),N(a.TEXTURE_CUBE_MAP,T);for(let we=0;we<6;we++)if(T.mipmaps&&T.mipmaps.length>0)for(let De=0;De<T.mipmaps.length;De++)le(j.__webglFramebuffer[we][De],P,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+we,De);else le(j.__webglFramebuffer[we],P,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);v(T)&&_(a.TEXTURE_CUBE_MAP),r.unbindTexture()}else if(Ge){for(let we=0,De=xe.length;we<De;we++){const ut=xe[we],Me=i.get(ut);r.bindTexture(a.TEXTURE_2D,Me.__webglTexture),N(a.TEXTURE_2D,ut),le(j.__webglFramebuffer,P,ut,a.COLOR_ATTACHMENT0+we,a.TEXTURE_2D,0),v(ut)&&_(a.TEXTURE_2D)}r.unbindTexture()}else{let we=a.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(we=P.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),r.bindTexture(we,de.__webglTexture),N(we,T),T.mipmaps&&T.mipmaps.length>0)for(let De=0;De<T.mipmaps.length;De++)le(j.__webglFramebuffer[De],P,T,a.COLOR_ATTACHMENT0,we,De);else le(j.__webglFramebuffer,P,T,a.COLOR_ATTACHMENT0,we,0);v(T)&&_(we),r.unbindTexture()}P.depthBuffer&&Pe(P)}function pt(P){const T=P.textures;for(let j=0,de=T.length;j<de;j++){const xe=T[j];if(v(xe)){const ue=P.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,Ge=i.get(xe).__webglTexture;r.bindTexture(ue,Ge),_(ue),r.unbindTexture()}}}const ct=[],F=[];function er(P){if(P.samples>0){if(ht(P)===!1){const T=P.textures,j=P.width,de=P.height;let xe=a.COLOR_BUFFER_BIT;const ue=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ge=i.get(P),we=T.length>1;if(we)for(let De=0;De<T.length;De++)r.bindFramebuffer(a.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+De,a.RENDERBUFFER,null),r.bindFramebuffer(a.FRAMEBUFFER,Ge.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+De,a.TEXTURE_2D,null,0);r.bindFramebuffer(a.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),r.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let De=0;De<T.length;De++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(xe|=a.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(xe|=a.STENCIL_BUFFER_BIT)),we){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Ge.__webglColorRenderbuffer[De]);const ut=i.get(T[De]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,ut,0)}a.blitFramebuffer(0,0,j,de,0,0,j,de,xe,a.NEAREST),f===!0&&(ct.length=0,F.length=0,ct.push(a.COLOR_ATTACHMENT0+De),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ct.push(ue),F.push(ue),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,F)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,ct))}if(r.bindFramebuffer(a.READ_FRAMEBUFFER,null),r.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),we)for(let De=0;De<T.length;De++){r.bindFramebuffer(a.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+De,a.RENDERBUFFER,Ge.__webglColorRenderbuffer[De]);const ut=i.get(T[De]).__webglTexture;r.bindFramebuffer(a.FRAMEBUFFER,Ge.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+De,a.TEXTURE_2D,ut,0)}r.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&f){const T=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[T])}}}function lt(P){return Math.min(o.maxSamples,P.samples)}function ht(P){const T=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Qe(P){const T=d.render.frame;g.get(P)!==T&&(g.set(P,T),P.update())}function Tt(P,T){const j=P.colorSpace,de=P.format,xe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||j!==Si&&j!==gi&&(St.getTransfer(j)===Ut?(de!==on||xe!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),T}function Je(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(m.width=P.naturalWidth||P.width,m.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(m.width=P.displayWidth,m.height=P.displayHeight):(m.width=P.width,m.height=P.height),m}this.allocateTextureUnit=re,this.resetTextureUnits=C,this.setTexture2D=ae,this.setTexture2DArray=pe,this.setTexture3D=ee,this.setTextureCube=ce,this.rebindTextures=Le,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=er,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=le,this.useMultisampledRTT=ht}function mE(a,e){function r(i,o=gi){let u;const d=St.getTransfer(o);if(i===zn)return a.UNSIGNED_BYTE;if(i===$d)return a.UNSIGNED_SHORT_4_4_4_4;if(i===Qd)return a.UNSIGNED_SHORT_5_5_5_1;if(i===Zm)return a.UNSIGNED_INT_5_9_9_9_REV;if(i===qm)return a.BYTE;if(i===Km)return a.SHORT;if(i===zs)return a.UNSIGNED_SHORT;if(i===Zd)return a.INT;if(i===Yi)return a.UNSIGNED_INT;if(i===In)return a.FLOAT;if(i===Bs)return a.HALF_FLOAT;if(i===$m)return a.ALPHA;if(i===Qm)return a.RGB;if(i===on)return a.RGBA;if(i===Jm)return a.LUMINANCE;if(i===eg)return a.LUMINANCE_ALPHA;if(i===Fa)return a.DEPTH_COMPONENT;if(i===Ga)return a.DEPTH_STENCIL;if(i===tg)return a.RED;if(i===Jd)return a.RED_INTEGER;if(i===rg)return a.RG;if(i===eh)return a.RG_INTEGER;if(i===th)return a.RGBA_INTEGER;if(i===wl||i===Al||i===Rl||i===Cl)if(d===Ut)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(i===wl)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Al)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Rl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Cl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(i===wl)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Al)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Rl)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Cl)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===xd||i===yd||i===Sd||i===Md)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(i===xd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Sd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Md)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ed||i===Td||i===wd)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(i===Ed||i===Td)return d===Ut?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(i===wd)return d===Ut?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ad||i===Rd||i===Cd||i===bd||i===Pd||i===Ld||i===Nd||i===Ud||i===Dd||i===Id||i===Od||i===Fd||i===kd||i===zd)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(i===Ad)return d===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rd)return d===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cd)return d===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bd)return d===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Pd)return d===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ld)return d===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nd)return d===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ud)return d===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Dd)return d===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Id)return d===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Od)return d===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Fd)return d===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kd)return d===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zd)return d===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===bl||i===Bd||i===Hd)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(i===bl)return d===Ut?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Bd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ng||i===Vd||i===Gd||i===Wd)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(i===bl)return u.COMPRESSED_RED_RGTC1_EXT;if(i===Vd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Gd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Wd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Va?a.UNSIGNED_INT_24_8:a[i]!==void 0?a[i]:null}return{convert:r}}class gE extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class yl extends mr{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vE={type:"move"};class rd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const r=this._hand;if(r)for(const i of e.hand.values())this._getHandJoint(r,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,r,i){let o=null,u=null,d=null;const h=this._targetRay,f=this._grip,m=this._hand;if(e&&r.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const A of e.hand.values()){const v=r.getJointPose(A,i),_=this._getHandJoint(m,A);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const g=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],x=g.position.distanceTo(y.position),S=.02,w=.005;m.inputState.pinching&&x>S+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=S-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(u=r.getPose(e.gripSpace,i),u!==null&&(f.matrix.fromArray(u.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,u.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(u.linearVelocity)):f.hasLinearVelocity=!1,u.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(u.angularVelocity)):f.hasAngularVelocity=!1));h!==null&&(o=r.getPose(e.targetRaySpace,i),o===null&&u!==null&&(o=u),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(vE)))}return h!==null&&(h.visible=o!==null),f!==null&&(f.visible=u!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,r){if(e.joints[r.jointName]===void 0){const i=new yl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[r.jointName]=i,e.add(i)}return e.joints[r.jointName]}}const _E=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xE=`
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

}`;class yE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,r,i){if(this.texture===null){const o=new Rr,u=e.properties.get(o);u.__webglTexture=r.texture,(r.depthNear!=i.depthNear||r.depthFar!=i.depthFar)&&(this.depthNear=r.depthNear,this.depthFar=r.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const r=e.cameras[0].viewport,i=new Hn({vertexShader:_E,fragmentShader:xE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new Fn(new Vl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class SE extends ja{constructor(e,r){super();const i=this;let o=null,u=1,d=null,h="local-floor",f=1,m=null,g=null,y=null,x=null,S=null,w=null;const A=new yE,v=r.getContextAttributes();let _=null,D=null;const b=[],U=[],te=new wt;let B=null;const I=new nn;I.layers.enable(1),I.viewport=new Ht;const q=new nn;q.layers.enable(2),q.viewport=new Ht;const _e=[I,q],E=new gE;E.layers.enable(1),E.layers.enable(2);let C=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let le=b[K];return le===void 0&&(le=new rd,b[K]=le),le.getTargetRaySpace()},this.getControllerGrip=function(K){let le=b[K];return le===void 0&&(le=new rd,b[K]=le),le.getGripSpace()},this.getHand=function(K){let le=b[K];return le===void 0&&(le=new rd,b[K]=le),le.getHandSpace()};function ne(K){const le=U.indexOf(K.inputSource);if(le===-1)return;const ge=b[le];ge!==void 0&&(ge.update(K.inputSource,K.frame,m||d),ge.dispatchEvent({type:K.type,data:K.inputSource}))}function ae(){o.removeEventListener("select",ne),o.removeEventListener("selectstart",ne),o.removeEventListener("selectend",ne),o.removeEventListener("squeeze",ne),o.removeEventListener("squeezestart",ne),o.removeEventListener("squeezeend",ne),o.removeEventListener("end",ae),o.removeEventListener("inputsourceschange",pe);for(let K=0;K<b.length;K++){const le=U[K];le!==null&&(U[K]=null,b[K].disconnect(le))}C=null,re=null,A.reset(),e.setRenderTarget(_),S=null,x=null,y=null,o=null,D=null,be.stop(),i.isPresenting=!1,e.setPixelRatio(B),e.setSize(te.width,te.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){u=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){h=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(K){m=K},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return y},this.getFrame=function(){return w},this.getSession=function(){return o},this.setSession=async function(K){if(o=K,o!==null){if(_=e.getRenderTarget(),o.addEventListener("select",ne),o.addEventListener("selectstart",ne),o.addEventListener("selectend",ne),o.addEventListener("squeeze",ne),o.addEventListener("squeezestart",ne),o.addEventListener("squeezeend",ne),o.addEventListener("end",ae),o.addEventListener("inputsourceschange",pe),v.xrCompatible!==!0&&await r.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(te),o.renderState.layers===void 0){const le={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(o,r,le),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),D=new qi(S.framebufferWidth,S.framebufferHeight,{format:on,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let le=null,ge=null,Se=null;v.depth&&(Se=v.stencil?r.DEPTH24_STENCIL8:r.DEPTH_COMPONENT24,le=v.stencil?Ga:Fa,ge=v.stencil?Va:Yi);const Pe={colorFormat:r.RGBA8,depthFormat:Se,scaleFactor:u};y=new XRWebGLBinding(o,r),x=y.createProjectionLayer(Pe),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),D=new qi(x.textureWidth,x.textureHeight,{format:on,type:zn,depthTexture:new xg(x.textureWidth,x.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(f),m=null,d=await o.requestReferenceSpace(h),be.setContext(o),be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function pe(K){for(let le=0;le<K.removed.length;le++){const ge=K.removed[le],Se=U.indexOf(ge);Se>=0&&(U[Se]=null,b[Se].disconnect(ge))}for(let le=0;le<K.added.length;le++){const ge=K.added[le];let Se=U.indexOf(ge);if(Se===-1){for(let Le=0;Le<b.length;Le++)if(Le>=U.length){U.push(ge),Se=Le;break}else if(U[Le]===null){U[Le]=ge,Se=Le;break}if(Se===-1)break}const Pe=b[Se];Pe&&Pe.connect(ge)}}const ee=new J,ce=new J;function k(K,le,ge){ee.setFromMatrixPosition(le.matrixWorld),ce.setFromMatrixPosition(ge.matrixWorld);const Se=ee.distanceTo(ce),Pe=le.projectionMatrix.elements,Le=ge.projectionMatrix.elements,tt=Pe[14]/(Pe[10]-1),pt=Pe[14]/(Pe[10]+1),ct=(Pe[9]+1)/Pe[5],F=(Pe[9]-1)/Pe[5],er=(Pe[8]-1)/Pe[0],lt=(Le[8]+1)/Le[0],ht=tt*er,Qe=tt*lt,Tt=Se/(-er+lt),Je=Tt*-er;if(le.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Je),K.translateZ(Tt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Pe[10]===-1)K.projectionMatrix.copy(le.projectionMatrix),K.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const P=tt+Tt,T=pt+Tt,j=ht-Je,de=Qe+(Se-Je),xe=ct*pt/T*P,ue=F*pt/T*P;K.projectionMatrix.makePerspective(j,de,xe,ue,P,T),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function oe(K,le){le===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(le.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(o===null)return;let le=K.near,ge=K.far;A.texture!==null&&(A.depthNear>0&&(le=A.depthNear),A.depthFar>0&&(ge=A.depthFar)),E.near=q.near=I.near=le,E.far=q.far=I.far=ge,(C!==E.near||re!==E.far)&&(o.updateRenderState({depthNear:E.near,depthFar:E.far}),C=E.near,re=E.far);const Se=K.parent,Pe=E.cameras;oe(E,Se);for(let Le=0;Le<Pe.length;Le++)oe(Pe[Le],Se);Pe.length===2?k(E,I,q):E.projectionMatrix.copy(I.projectionMatrix),se(K,E,Se)};function se(K,le,ge){ge===null?K.matrix.copy(le.matrixWorld):(K.matrix.copy(ge.matrixWorld),K.matrix.invert(),K.matrix.multiply(le.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(le.projectionMatrix),K.projectionMatrixInverse.copy(le.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=jd*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(x===null&&S===null))return f},this.setFoveation=function(K){f=K,x!==null&&(x.fixedFoveation=K),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=K)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(E)};let N=null;function Y(K,le){if(g=le.getViewerPose(m||d),w=le,g!==null){const ge=g.views;S!==null&&(e.setRenderTargetFramebuffer(D,S.framebuffer),e.setRenderTarget(D));let Se=!1;ge.length!==E.cameras.length&&(E.cameras.length=0,Se=!0);for(let Le=0;Le<ge.length;Le++){const tt=ge[Le];let pt=null;if(S!==null)pt=S.getViewport(tt);else{const F=y.getViewSubImage(x,tt);pt=F.viewport,Le===0&&(e.setRenderTargetTextures(D,F.colorTexture,x.ignoreDepthValues?void 0:F.depthStencilTexture),e.setRenderTarget(D))}let ct=_e[Le];ct===void 0&&(ct=new nn,ct.layers.enable(Le),ct.viewport=new Ht,_e[Le]=ct),ct.matrix.fromArray(tt.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(tt.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(pt.x,pt.y,pt.width,pt.height),Le===0&&(E.matrix.copy(ct.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Se===!0&&E.cameras.push(ct)}const Pe=o.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const Le=y.getDepthInformation(ge[0]);Le&&Le.isValid&&Le.texture&&A.init(e,Le,o.renderState)}}for(let ge=0;ge<b.length;ge++){const Se=U[ge],Pe=b[ge];Se!==null&&Pe!==void 0&&Pe.update(Se,le,m||d)}N&&N(K,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),w=null}const be=new vg;be.setAnimationLoop(Y),this.setAnimationLoop=function(K){N=K},this.dispose=function(){}}}const Bi=new Bn,ME=new zt;function EE(a,e){function r(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function i(v,_){_.color.getRGB(v.fogColor.value,fg(a)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function o(v,_,D,b,U){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(v,_):_.isMeshToonMaterial?(u(v,_),y(v,_)):_.isMeshPhongMaterial?(u(v,_),g(v,_)):_.isMeshStandardMaterial?(u(v,_),x(v,_),_.isMeshPhysicalMaterial&&S(v,_,U)):_.isMeshMatcapMaterial?(u(v,_),w(v,_)):_.isMeshDepthMaterial?u(v,_):_.isMeshDistanceMaterial?(u(v,_),A(v,_)):_.isMeshNormalMaterial?u(v,_):_.isLineBasicMaterial?(d(v,_),_.isLineDashedMaterial&&h(v,_)):_.isPointsMaterial?f(v,_,D,b):_.isSpriteMaterial?m(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,r(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,r(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,r(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===Ar&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,r(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===Ar&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,r(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,r(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,r(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const D=e.get(_),b=D.envMap,U=D.envMapRotation;b&&(v.envMap.value=b,Bi.copy(U),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),v.envMapRotation.value.setFromMatrix4(ME.makeRotationFromEuler(Bi)),v.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap&&(v.lightMap.value=_.lightMap,v.lightMapIntensity.value=_.lightMapIntensity,r(_.lightMap,v.lightMapTransform)),_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,r(_.aoMap,v.aoMapTransform))}function d(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,r(_.map,v.mapTransform))}function h(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function f(v,_,D,b){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*D,v.scale.value=b*.5,_.map&&(v.map.value=_.map,r(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,r(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function m(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,r(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,r(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function g(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function y(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function x(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,r(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,r(_.roughnessMap,v.roughnessMapTransform)),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function S(v,_,D){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,r(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,r(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,r(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,r(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,r(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Ar&&v.clearcoatNormalScale.value.negate())),_.dispersion>0&&(v.dispersion.value=_.dispersion),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,r(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,r(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=D.texture,v.transmissionSamplerSize.value.set(D.width,D.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,r(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,r(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,r(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,r(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,r(_.specularIntensityMap,v.specularIntensityMapTransform))}function w(v,_){_.matcap&&(v.matcap.value=_.matcap)}function A(v,_){const D=e.get(_).light;v.referencePosition.value.setFromMatrixPosition(D.matrixWorld),v.nearDistance.value=D.shadow.camera.near,v.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function TE(a,e,r,i){let o={},u={},d=[];const h=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function f(D,b){const U=b.program;i.uniformBlockBinding(D,U)}function m(D,b){let U=o[D.id];U===void 0&&(w(D),U=g(D),o[D.id]=U,D.addEventListener("dispose",v));const te=b.program;i.updateUBOMapping(D,te);const B=e.render.frame;u[D.id]!==B&&(x(D),u[D.id]=B)}function g(D){const b=y();D.__bindingPointIndex=b;const U=a.createBuffer(),te=D.__size,B=D.usage;return a.bindBuffer(a.UNIFORM_BUFFER,U),a.bufferData(a.UNIFORM_BUFFER,te,B),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,b,U),U}function y(){for(let D=0;D<h;D++)if(d.indexOf(D)===-1)return d.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(D){const b=o[D.id],U=D.uniforms,te=D.__cache;a.bindBuffer(a.UNIFORM_BUFFER,b);for(let B=0,I=U.length;B<I;B++){const q=Array.isArray(U[B])?U[B]:[U[B]];for(let _e=0,E=q.length;_e<E;_e++){const C=q[_e];if(S(C,B,_e,te)===!0){const re=C.__offset,ne=Array.isArray(C.value)?C.value:[C.value];let ae=0;for(let pe=0;pe<ne.length;pe++){const ee=ne[pe],ce=A(ee);typeof ee=="number"||typeof ee=="boolean"?(C.__data[0]=ee,a.bufferSubData(a.UNIFORM_BUFFER,re+ae,C.__data)):ee.isMatrix3?(C.__data[0]=ee.elements[0],C.__data[1]=ee.elements[1],C.__data[2]=ee.elements[2],C.__data[3]=0,C.__data[4]=ee.elements[3],C.__data[5]=ee.elements[4],C.__data[6]=ee.elements[5],C.__data[7]=0,C.__data[8]=ee.elements[6],C.__data[9]=ee.elements[7],C.__data[10]=ee.elements[8],C.__data[11]=0):(ee.toArray(C.__data,ae),ae+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,re,C.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function S(D,b,U,te){const B=D.value,I=b+"_"+U;if(te[I]===void 0)return typeof B=="number"||typeof B=="boolean"?te[I]=B:te[I]=B.clone(),!0;{const q=te[I];if(typeof B=="number"||typeof B=="boolean"){if(q!==B)return te[I]=B,!0}else if(q.equals(B)===!1)return q.copy(B),!0}return!1}function w(D){const b=D.uniforms;let U=0;const te=16;for(let I=0,q=b.length;I<q;I++){const _e=Array.isArray(b[I])?b[I]:[b[I]];for(let E=0,C=_e.length;E<C;E++){const re=_e[E],ne=Array.isArray(re.value)?re.value:[re.value];for(let ae=0,pe=ne.length;ae<pe;ae++){const ee=ne[ae],ce=A(ee),k=U%te,oe=k%ce.boundary,se=k+oe;U+=oe,se!==0&&te-se<ce.storage&&(U+=te-se),re.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=U,U+=ce.storage}}}const B=U%te;return B>0&&(U+=te-B),D.__size=U,D.__cache={},this}function A(D){const b={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(b.boundary=4,b.storage=4):D.isVector2?(b.boundary=8,b.storage=8):D.isVector3||D.isColor?(b.boundary=16,b.storage=12):D.isVector4?(b.boundary=16,b.storage=16):D.isMatrix3?(b.boundary=48,b.storage=48):D.isMatrix4?(b.boundary=64,b.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),b}function v(D){const b=D.target;b.removeEventListener("dispose",v);const U=d.indexOf(b.__bindingPointIndex);d.splice(U,1),a.deleteBuffer(o[b.id]),delete o[b.id],delete u[b.id]}function _(){for(const D in o)a.deleteBuffer(o[D]);d=[],o={},u={}}return{bind:f,update:m,dispose:_}}class wE{constructor(e={}){const{canvas:r=h0(),context:i=null,depth:o=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:y=!1}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=d;const S=new Uint32Array(4),w=new Int32Array(4);let A=null,v=null;const _=[],D=[];this.domElement=r,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pn,this.toneMapping=_i,this.toneMappingExposure=1;const b=this;let U=!1,te=0,B=0,I=null,q=-1,_e=null;const E=new Ht,C=new Ht;let re=null;const ne=new vt(0);let ae=0,pe=r.width,ee=r.height,ce=1,k=null,oe=null;const se=new Ht(0,0,pe,ee),N=new Ht(0,0,pe,ee);let Y=!1;const be=new gg;let K=!1,le=!1;const ge=new zt,Se=new zt,Pe=new J,Le=new Ht,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function ct(){return I===null?ce:1}let F=i;function er(R,G){return r.getContext(R,G)}try{const R={alpha:!0,depth:o,stencil:u,antialias:h,premultipliedAlpha:f,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:y};if("setAttribute"in r&&r.setAttribute("data-engine",`three.js r${Kd}`),r.addEventListener("webglcontextlost",he,!1),r.addEventListener("webglcontextrestored",Ae,!1),r.addEventListener("webglcontextcreationerror",Re,!1),F===null){const G="webgl2";if(F=er(G,R),F===null)throw er(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let lt,ht,Qe,Tt,Je,P,T,j,de,xe,ue,Ge,we,De,ut,Me,Fe,rt,et,ke,dt,it,_t,H;function Ne(){lt=new PS(F),lt.init(),it=new mE(F,lt),ht=new TS(F,lt,e,it),Qe=new hE(F),ht.reverseDepthBuffer&&Qe.buffers.depth.setReversed(!0),Tt=new US(F),Je=new $M,P=new pE(F,lt,Qe,Je,ht,it,Tt),T=new AS(b),j=new bS(b),de=new B0(F),_t=new MS(F,de),xe=new LS(F,de,Tt,_t),ue=new IS(F,xe,de,Tt),et=new DS(F,ht,P),Me=new wS(Je),Ge=new ZM(b,T,j,lt,ht,_t,Me),we=new EE(b,Je),De=new JM,ut=new aE(lt),rt=new SS(b,T,j,Qe,ue,x,f),Fe=new cE(b,ue,ht),H=new TE(F,Tt,ht,Qe),ke=new ES(F,lt,Tt),dt=new NS(F,lt,Tt),Tt.programs=Ge.programs,b.capabilities=ht,b.extensions=lt,b.properties=Je,b.renderLists=De,b.shadowMap=Fe,b.state=Qe,b.info=Tt}Ne();const ie=new SE(b,F);this.xr=ie,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=lt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=lt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(R){R!==void 0&&(ce=R,this.setSize(pe,ee,!1))},this.getSize=function(R){return R.set(pe,ee)},this.setSize=function(R,G,Z=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}pe=R,ee=G,r.width=Math.floor(R*ce),r.height=Math.floor(G*ce),Z===!0&&(r.style.width=R+"px",r.style.height=G+"px"),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(pe*ce,ee*ce).floor()},this.setDrawingBufferSize=function(R,G,Z){pe=R,ee=G,ce=Z,r.width=Math.floor(R*Z),r.height=Math.floor(G*Z),this.setViewport(0,0,R,G)},this.getCurrentViewport=function(R){return R.copy(E)},this.getViewport=function(R){return R.copy(se)},this.setViewport=function(R,G,Z,$){R.isVector4?se.set(R.x,R.y,R.z,R.w):se.set(R,G,Z,$),Qe.viewport(E.copy(se).multiplyScalar(ce).round())},this.getScissor=function(R){return R.copy(N)},this.setScissor=function(R,G,Z,$){R.isVector4?N.set(R.x,R.y,R.z,R.w):N.set(R,G,Z,$),Qe.scissor(C.copy(N).multiplyScalar(ce).round())},this.getScissorTest=function(){return Y},this.setScissorTest=function(R){Qe.setScissorTest(Y=R)},this.setOpaqueSort=function(R){k=R},this.setTransparentSort=function(R){oe=R},this.getClearColor=function(R){return R.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor.apply(rt,arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha.apply(rt,arguments)},this.clear=function(R=!0,G=!0,Z=!0){let $=0;if(R){let V=!1;if(I!==null){const ye=I.texture.format;V=ye===th||ye===eh||ye===Jd}if(V){const ye=I.texture.type,Ie=ye===zn||ye===Yi||ye===zs||ye===Va||ye===$d||ye===Qd,Te=rt.getClearColor(),We=rt.getClearAlpha(),Ke=Te.r,Ze=Te.g,Xe=Te.b;Ie?(S[0]=Ke,S[1]=Ze,S[2]=Xe,S[3]=We,F.clearBufferuiv(F.COLOR,0,S)):(w[0]=Ke,w[1]=Ze,w[2]=Xe,w[3]=We,F.clearBufferiv(F.COLOR,0,w))}else $|=F.COLOR_BUFFER_BIT}G&&($|=F.DEPTH_BUFFER_BIT,F.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Z&&($|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){r.removeEventListener("webglcontextlost",he,!1),r.removeEventListener("webglcontextrestored",Ae,!1),r.removeEventListener("webglcontextcreationerror",Re,!1),De.dispose(),ut.dispose(),Je.dispose(),T.dispose(),j.dispose(),ue.dispose(),_t.dispose(),H.dispose(),Ge.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Vn),ie.removeEventListener("sessionend",Ki),Cr.stop()};function he(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const R=Tt.autoReset,G=Fe.enabled,Z=Fe.autoUpdate,$=Fe.needsUpdate,V=Fe.type;Ne(),Tt.autoReset=R,Fe.enabled=G,Fe.autoUpdate=Z,Fe.needsUpdate=$,Fe.type=V}function Re(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Mt(R){const G=R.target;G.removeEventListener("dispose",Mt),It(G)}function It(R){tr(R),Je.remove(R)}function tr(R){const G=Je.get(R).programs;G!==void 0&&(G.forEach(function(Z){Ge.releaseProgram(Z)}),R.isShaderMaterial&&Ge.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,Z,$,V,ye){G===null&&(G=tt);const Ie=V.isMesh&&V.matrixWorld.determinant()<0,Te=vn(R,G,Z,$,V);Qe.setMaterial($,Ie);let We=Z.index,Ke=1;if($.wireframe===!0){if(We=xe.getWireframeAttribute(Z),We===void 0)return;Ke=2}const Ze=Z.drawRange,Xe=Z.attributes.position;let xt=Ze.start*Ke,At=(Ze.start+Ze.count)*Ke;ye!==null&&(xt=Math.max(xt,ye.start*Ke),At=Math.min(At,(ye.start+ye.count)*Ke)),We!==null?(xt=Math.max(xt,0),At=Math.min(At,We.count)):Xe!=null&&(xt=Math.max(xt,0),At=Math.min(At,Xe.count));const Rt=At-xt;if(Rt<0||Rt===1/0)return;_t.setup(V,$,Te,Z,We);let yt,Ct=ke;if(We!==null&&(yt=de.get(We),Ct=dt,Ct.setIndex(yt)),V.isMesh)$.wireframe===!0?(Qe.setLineWidth($.wireframeLinewidth*ct()),Ct.setMode(F.LINES)):Ct.setMode(F.TRIANGLES);else if(V.isLine){let Oe=$.linewidth;Oe===void 0&&(Oe=1),Qe.setLineWidth(Oe*ct()),V.isLineSegments?Ct.setMode(F.LINES):V.isLineLoop?Ct.setMode(F.LINE_LOOP):Ct.setMode(F.LINE_STRIP)}else V.isPoints?Ct.setMode(F.POINTS):V.isSprite&&Ct.setMode(F.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Ct.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(lt.get("WEBGL_multi_draw"))Ct.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Oe=V._multiDrawStarts,rr=V._multiDrawCounts,_n=V._multiDrawCount,br=We?de.get(We).bytesPerElement:1,Yr=Je.get($).currentProgram.getUniforms();for(let Kt=0;Kt<_n;Kt++)Yr.setValue(F,"_gl_DrawID",Kt),Ct.render(Oe[Kt]/br,rr[Kt])}else if(V.isInstancedMesh)Ct.renderInstances(xt,Rt,V.count);else if(Z.isInstancedBufferGeometry){const Oe=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,rr=Math.min(Z.instanceCount,Oe);Ct.renderInstances(xt,Rt,rr)}else Ct.render(xt,Rt)};function ft(R,G,Z){R.transparent===!0&&R.side===Dn&&R.forceSinglePass===!1?(R.side=Ar,R.needsUpdate=!0,$i(R,G,Z),R.side=yi,R.needsUpdate=!0,$i(R,G,Z),R.side=Dn):$i(R,G,Z)}this.compile=function(R,G,Z=null){Z===null&&(Z=R),v=ut.get(Z),v.init(G),D.push(v),Z.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(v.pushLight(V),V.castShadow&&v.pushShadow(V))}),R!==Z&&R.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(v.pushLight(V),V.castShadow&&v.pushShadow(V))}),v.setupLights();const $=new Set;return R.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ye=V.material;if(ye)if(Array.isArray(ye))for(let Ie=0;Ie<ye.length;Ie++){const Te=ye[Ie];ft(Te,Z,V),$.add(Te)}else ft(ye,Z,V),$.add(ye)}),D.pop(),v=null,$},this.compileAsync=function(R,G,Z=null){const $=this.compile(R,G,Z);return new Promise(V=>{function ye(){if($.forEach(function(Ie){Je.get(Ie).currentProgram.isReady()&&$.delete(Ie)}),$.size===0){V(R);return}setTimeout(ye,10)}lt.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let qt=null;function kr(R){qt&&qt(R)}function Vn(){Cr.stop()}function Ki(){Cr.start()}const Cr=new vg;Cr.setAnimationLoop(kr),typeof self<"u"&&Cr.setContext(self),this.setAnimationLoop=function(R){qt=R,ie.setAnimationLoop(R),R===null?Cr.stop():Cr.start()},ie.addEventListener("sessionstart",Vn),ie.addEventListener("sessionend",Ki),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(G),G=ie.getCamera()),R.isScene===!0&&R.onBeforeRender(b,R,G,I),v=ut.get(R,D.length),v.init(G),D.push(v),Se.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),be.setFromProjectionMatrix(Se),le=this.localClippingEnabled,K=Me.init(this.clippingPlanes,le),A=De.get(R,_.length),A.init(),_.push(A),ie.enabled===!0&&ie.isPresenting===!0){const ye=b.xr.getDepthSensingMesh();ye!==null&&qa(ye,G,-1/0,b.sortObjects)}qa(R,G,0,b.sortObjects),A.finish(),b.sortObjects===!0&&A.sort(k,oe),pt=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,pt&&rt.addToRenderList(A,R),this.info.render.frame++,K===!0&&Me.beginShadows();const Z=v.state.shadowsArray;Fe.render(Z,R,G),K===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=A.opaque,V=A.transmissive;if(v.setupLights(),G.isArrayCamera){const ye=G.cameras;if(V.length>0)for(let Ie=0,Te=ye.length;Ie<Te;Ie++){const We=ye[Ie];Mi($,V,R,We)}pt&&rt.render(R);for(let Ie=0,Te=ye.length;Ie<Te;Ie++){const We=ye[Ie];Gn(A,R,We,We.viewport)}}else V.length>0&&Mi($,V,R,G),pt&&rt.render(R),Gn(A,R,G);I!==null&&(P.updateMultisampleRenderTarget(I),P.updateRenderTargetMipmap(I)),R.isScene===!0&&R.onAfterRender(b,R,G),_t.resetDefaultState(),q=-1,_e=null,D.pop(),D.length>0?(v=D[D.length-1],K===!0&&Me.setGlobalState(b.clippingPlanes,v.state.camera)):v=null,_.pop(),_.length>0?A=_[_.length-1]:A=null};function qa(R,G,Z,$){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)Z=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||be.intersectsSprite(R)){$&&Le.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Se);const ye=ue.update(R),Ie=R.material;Ie.visible&&A.push(R,ye,Ie,Z,Le.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||be.intersectsObject(R))){const ye=ue.update(R),Ie=R.material;if($&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Le.copy(R.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Le.copy(ye.boundingSphere.center)),Le.applyMatrix4(R.matrixWorld).applyMatrix4(Se)),Array.isArray(Ie)){const Te=ye.groups;for(let We=0,Ke=Te.length;We<Ke;We++){const Ze=Te[We],Xe=Ie[Ze.materialIndex];Xe&&Xe.visible&&A.push(R,ye,Xe,Z,Le.z,Ze)}}else Ie.visible&&A.push(R,ye,Ie,Z,Le.z,null)}}const V=R.children;for(let ye=0,Ie=V.length;ye<Ie;ye++)qa(V[ye],G,Z,$)}function Gn(R,G,Z,$){const V=R.opaque,ye=R.transmissive,Ie=R.transparent;v.setupLightsView(Z),K===!0&&Me.setGlobalState(b.clippingPlanes,Z),$&&Qe.viewport(E.copy($)),V.length>0&&gn(V,G,Z),ye.length>0&&gn(ye,G,Z),Ie.length>0&&gn(Ie,G,Z),Qe.buffers.depth.setTest(!0),Qe.buffers.depth.setMask(!0),Qe.buffers.color.setMask(!0),Qe.setPolygonOffset(!1)}function Mi(R,G,Z,$){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[$.id]===void 0&&(v.state.transmissionRenderTarget[$.id]=new qi(1,1,{generateMipmaps:!0,type:lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float")?Bs:zn,minFilter:Xi,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace}));const V=v.state.transmissionRenderTarget[$.id],ye=$.viewport||E;V.setSize(ye.z,ye.w);const Ie=b.getRenderTarget();b.setRenderTarget(V),b.getClearColor(ne),ae=b.getClearAlpha(),ae<1&&b.setClearColor(16777215,.5),b.clear(),pt&&rt.render(Z);const Te=b.toneMapping;b.toneMapping=_i;const We=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),v.setupLightsView($),K===!0&&Me.setGlobalState(b.clippingPlanes,$),gn(R,Z,$),P.updateMultisampleRenderTarget(V),P.updateRenderTargetMipmap(V),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Ze=0,Xe=G.length;Ze<Xe;Ze++){const xt=G[Ze],At=xt.object,Rt=xt.geometry,yt=xt.material,Ct=xt.group;if(yt.side===Dn&&At.layers.test($.layers)){const Oe=yt.side;yt.side=Ar,yt.needsUpdate=!0,Zi(At,Z,$,Rt,yt,Ct),yt.side=Oe,yt.needsUpdate=!0,Ke=!0}}Ke===!0&&(P.updateMultisampleRenderTarget(V),P.updateRenderTargetMipmap(V))}b.setRenderTarget(Ie),b.setClearColor(ne,ae),We!==void 0&&($.viewport=We),b.toneMapping=Te}function gn(R,G,Z){const $=G.isScene===!0?G.overrideMaterial:null;for(let V=0,ye=R.length;V<ye;V++){const Ie=R[V],Te=Ie.object,We=Ie.geometry,Ke=$===null?Ie.material:$,Ze=Ie.group;Te.layers.test(Z.layers)&&Zi(Te,G,Z,We,Ke,Ze)}}function Zi(R,G,Z,$,V,ye){R.onBeforeRender(b,G,Z,$,V,ye),R.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),V.onBeforeRender(b,G,Z,$,R,ye),V.transparent===!0&&V.side===Dn&&V.forceSinglePass===!1?(V.side=Ar,V.needsUpdate=!0,b.renderBufferDirect(Z,G,$,V,R,ye),V.side=yi,V.needsUpdate=!0,b.renderBufferDirect(Z,G,$,V,R,ye),V.side=Dn):b.renderBufferDirect(Z,G,$,V,R,ye),R.onAfterRender(b,G,Z,$,V,ye)}function $i(R,G,Z){G.isScene!==!0&&(G=tt);const $=Je.get(R),V=v.state.lights,ye=v.state.shadowsArray,Ie=V.state.version,Te=Ge.getParameters(R,V.state,ye,G,Z),We=Ge.getProgramCacheKey(Te);let Ke=$.programs;$.environment=R.isMeshStandardMaterial?G.environment:null,$.fog=G.fog,$.envMap=(R.isMeshStandardMaterial?j:T).get(R.envMap||$.environment),$.envMapRotation=$.environment!==null&&R.envMap===null?G.environmentRotation:R.envMapRotation,Ke===void 0&&(R.addEventListener("dispose",Mt),Ke=new Map,$.programs=Ke);let Ze=Ke.get(We);if(Ze!==void 0){if($.currentProgram===Ze&&$.lightsStateVersion===Ie)return Ys(R,Te),Ze}else Te.uniforms=Ge.getUniforms(R),R.onBeforeCompile(Te,b),Ze=Ge.acquireProgram(Te,We),Ke.set(We,Ze),$.uniforms=Te.uniforms;const Xe=$.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Xe.clippingPlanes=Me.uniform),Ys(R,Te),$.needsLights=Ks(R),$.lightsStateVersion=Ie,$.needsLights&&(Xe.ambientLightColor.value=V.state.ambient,Xe.lightProbe.value=V.state.probe,Xe.directionalLights.value=V.state.directional,Xe.directionalLightShadows.value=V.state.directionalShadow,Xe.spotLights.value=V.state.spot,Xe.spotLightShadows.value=V.state.spotShadow,Xe.rectAreaLights.value=V.state.rectArea,Xe.ltc_1.value=V.state.rectAreaLTC1,Xe.ltc_2.value=V.state.rectAreaLTC2,Xe.pointLights.value=V.state.point,Xe.pointLightShadows.value=V.state.pointShadow,Xe.hemisphereLights.value=V.state.hemi,Xe.directionalShadowMap.value=V.state.directionalShadowMap,Xe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Xe.spotShadowMap.value=V.state.spotShadowMap,Xe.spotLightMatrix.value=V.state.spotLightMatrix,Xe.spotLightMap.value=V.state.spotLightMap,Xe.pointShadowMap.value=V.state.pointShadowMap,Xe.pointShadowMatrix.value=V.state.pointShadowMatrix),$.currentProgram=Ze,$.uniformsList=null,Ze}function Xs(R){if(R.uniformsList===null){const G=R.currentProgram.getUniforms();R.uniformsList=Ll.seqWithValue(G.seq,R.uniforms)}return R.uniformsList}function Ys(R,G){const Z=Je.get(R);Z.outputColorSpace=G.outputColorSpace,Z.batching=G.batching,Z.batchingColor=G.batchingColor,Z.instancing=G.instancing,Z.instancingColor=G.instancingColor,Z.instancingMorph=G.instancingMorph,Z.skinning=G.skinning,Z.morphTargets=G.morphTargets,Z.morphNormals=G.morphNormals,Z.morphColors=G.morphColors,Z.morphTargetsCount=G.morphTargetsCount,Z.numClippingPlanes=G.numClippingPlanes,Z.numIntersection=G.numClipIntersection,Z.vertexAlphas=G.vertexAlphas,Z.vertexTangents=G.vertexTangents,Z.toneMapping=G.toneMapping}function vn(R,G,Z,$,V){G.isScene!==!0&&(G=tt),P.resetTextureUnits();const ye=G.fog,Ie=$.isMeshStandardMaterial?G.environment:null,Te=I===null?b.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Si,We=($.isMeshStandardMaterial?j:T).get($.envMap||Ie),Ke=$.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ze=!!Z.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Xe=!!Z.morphAttributes.position,xt=!!Z.morphAttributes.normal,At=!!Z.morphAttributes.color;let Rt=_i;$.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Rt=b.toneMapping);const yt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ct=yt!==void 0?yt.length:0,Oe=Je.get($),rr=v.state.lights;if(K===!0&&(le===!0||R!==_e)){const ar=R===_e&&$.id===q;Me.setState($,R,ar)}let _n=!1;$.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==rr.state.version||Oe.outputColorSpace!==Te||V.isBatchedMesh&&Oe.batching===!1||!V.isBatchedMesh&&Oe.batching===!0||V.isBatchedMesh&&Oe.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Oe.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Oe.instancing===!1||!V.isInstancedMesh&&Oe.instancing===!0||V.isSkinnedMesh&&Oe.skinning===!1||!V.isSkinnedMesh&&Oe.skinning===!0||V.isInstancedMesh&&Oe.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Oe.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Oe.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Oe.instancingMorph===!1&&V.morphTexture!==null||Oe.envMap!==We||$.fog===!0&&Oe.fog!==ye||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==Me.numPlanes||Oe.numIntersection!==Me.numIntersection)||Oe.vertexAlphas!==Ke||Oe.vertexTangents!==Ze||Oe.morphTargets!==Xe||Oe.morphNormals!==xt||Oe.morphColors!==At||Oe.toneMapping!==Rt||Oe.morphTargetsCount!==Ct)&&(_n=!0):(_n=!0,Oe.__version=$.version);let br=Oe.currentProgram;_n===!0&&(br=$i($,G,V));let Yr=!1,Kt=!1,xn=!1;const bt=br.getUniforms(),un=Oe.uniforms;if(Qe.useProgram(br.program)&&(Yr=!0,Kt=!0,xn=!0),$.id!==q&&(q=$.id,Kt=!0),Yr||_e!==R){ht.reverseDepthBuffer?(ge.copy(R.projectionMatrix),p0(ge),m0(ge),bt.setValue(F,"projectionMatrix",ge)):bt.setValue(F,"projectionMatrix",R.projectionMatrix),bt.setValue(F,"viewMatrix",R.matrixWorldInverse);const ar=bt.map.cameraPosition;ar!==void 0&&ar.setValue(F,Pe.setFromMatrixPosition(R.matrixWorld)),ht.logarithmicDepthBuffer&&bt.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&bt.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),_e!==R&&(_e=R,Kt=!0,xn=!0)}if(V.isSkinnedMesh){bt.setOptional(F,V,"bindMatrix"),bt.setOptional(F,V,"bindMatrixInverse");const ar=V.skeleton;ar&&(ar.boneTexture===null&&ar.computeBoneTexture(),bt.setValue(F,"boneTexture",ar.boneTexture,P))}V.isBatchedMesh&&(bt.setOptional(F,V,"batchingTexture"),bt.setValue(F,"batchingTexture",V._matricesTexture,P),bt.setOptional(F,V,"batchingIdTexture"),bt.setValue(F,"batchingIdTexture",V._indirectTexture,P),bt.setOptional(F,V,"batchingColorTexture"),V._colorsTexture!==null&&bt.setValue(F,"batchingColorTexture",V._colorsTexture,P));const Ka=Z.morphAttributes;if((Ka.position!==void 0||Ka.normal!==void 0||Ka.color!==void 0)&&et.update(V,Z,br),(Kt||Oe.receiveShadow!==V.receiveShadow)&&(Oe.receiveShadow=V.receiveShadow,bt.setValue(F,"receiveShadow",V.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(un.envMap.value=We,un.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&G.environment!==null&&(un.envMapIntensity.value=G.environmentIntensity),Kt&&(bt.setValue(F,"toneMappingExposure",b.toneMappingExposure),Oe.needsLights&&qs(un,xn),ye&&$.fog===!0&&we.refreshFogUniforms(un,ye),we.refreshMaterialUniforms(un,$,ce,ee,v.state.transmissionRenderTarget[R.id]),Ll.upload(F,Xs(Oe),un,P)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Ll.upload(F,Xs(Oe),un,P),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&bt.setValue(F,"center",V.center),bt.setValue(F,"modelViewMatrix",V.modelViewMatrix),bt.setValue(F,"normalMatrix",V.normalMatrix),bt.setValue(F,"modelMatrix",V.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const ar=$.uniformsGroups;for(let Qi=0,Za=ar.length;Qi<Za;Qi++){const Wn=ar[Qi];H.update(Wn,br),H.bind(Wn,br)}}return br}function qs(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function Ks(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(R,G,Z){Je.get(R.texture).__webglTexture=G,Je.get(R.depthTexture).__webglTexture=Z;const $=Je.get(R);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=Z===void 0,$.__autoAllocateDepthBuffer||lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,G){const Z=Je.get(R);Z.__webglFramebuffer=G,Z.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(R,G=0,Z=0){I=R,te=G,B=Z;let $=!0,V=null,ye=!1,Ie=!1;if(R){const Te=Je.get(R);if(Te.__useDefaultFramebuffer!==void 0)Qe.bindFramebuffer(F.FRAMEBUFFER,null),$=!1;else if(Te.__webglFramebuffer===void 0)P.setupRenderTarget(R);else if(Te.__hasExternalTextures)P.rebindTextures(R,Je.get(R.texture).__webglTexture,Je.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ze=R.depthTexture;if(Te.__boundDepthTexture!==Ze){if(Ze!==null&&Je.has(Ze)&&(R.width!==Ze.image.width||R.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(R)}}const We=R.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ie=!0);const Ke=Je.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ke[G])?V=Ke[G][Z]:V=Ke[G],ye=!0):R.samples>0&&P.useMultisampledRTT(R)===!1?V=Je.get(R).__webglMultisampledFramebuffer:Array.isArray(Ke)?V=Ke[Z]:V=Ke,E.copy(R.viewport),C.copy(R.scissor),re=R.scissorTest}else E.copy(se).multiplyScalar(ce).floor(),C.copy(N).multiplyScalar(ce).floor(),re=Y;if(Qe.bindFramebuffer(F.FRAMEBUFFER,V)&&$&&Qe.drawBuffers(R,V),Qe.viewport(E),Qe.scissor(C),Qe.setScissorTest(re),ye){const Te=Je.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+G,Te.__webglTexture,Z)}else if(Ie){const Te=Je.get(R.texture),We=G||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Te.__webglTexture,Z||0,We)}q=-1},this.readRenderTargetPixels=function(R,G,Z,$,V,ye,Ie){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Je.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ie!==void 0&&(Te=Te[Ie]),Te){Qe.bindFramebuffer(F.FRAMEBUFFER,Te);try{const We=R.texture,Ke=We.format,Ze=We.type;if(!ht.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-$&&Z>=0&&Z<=R.height-V&&F.readPixels(G,Z,$,V,it.convert(Ke),it.convert(Ze),ye)}finally{const We=I!==null?Je.get(I).__webglFramebuffer:null;Qe.bindFramebuffer(F.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(R,G,Z,$,V,ye,Ie){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Je.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ie!==void 0&&(Te=Te[Ie]),Te){const We=R.texture,Ke=We.format,Ze=We.type;if(!ht.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=R.width-$&&Z>=0&&Z<=R.height-V){Qe.bindFramebuffer(F.FRAMEBUFFER,Te);const Xe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Xe),F.bufferData(F.PIXEL_PACK_BUFFER,ye.byteLength,F.STREAM_READ),F.readPixels(G,Z,$,V,it.convert(Ke),it.convert(Ze),0);const xt=I!==null?Je.get(I).__webglFramebuffer:null;Qe.bindFramebuffer(F.FRAMEBUFFER,xt);const At=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await f0(F,At,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Xe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ye),F.deleteBuffer(Xe),F.deleteSync(At),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,G=null,Z=0){R.isTexture!==!0&&(Pl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,R=arguments[1]);const $=Math.pow(2,-Z),V=Math.floor(R.image.width*$),ye=Math.floor(R.image.height*$),Ie=G!==null?G.x:0,Te=G!==null?G.y:0;P.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,Z,0,0,Ie,Te,V,ye),Qe.unbindTexture()},this.copyTextureToTexture=function(R,G,Z=null,$=null,V=0){R.isTexture!==!0&&(Pl("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,R=arguments[1],G=arguments[2],V=arguments[3]||0,Z=null);let ye,Ie,Te,We,Ke,Ze;Z!==null?(ye=Z.max.x-Z.min.x,Ie=Z.max.y-Z.min.y,Te=Z.min.x,We=Z.min.y):(ye=R.image.width,Ie=R.image.height,Te=0,We=0),$!==null?(Ke=$.x,Ze=$.y):(Ke=0,Ze=0);const Xe=it.convert(G.format),xt=it.convert(G.type);P.setTexture2D(G,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,G.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,G.unpackAlignment);const At=F.getParameter(F.UNPACK_ROW_LENGTH),Rt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),yt=F.getParameter(F.UNPACK_SKIP_PIXELS),Ct=F.getParameter(F.UNPACK_SKIP_ROWS),Oe=F.getParameter(F.UNPACK_SKIP_IMAGES),rr=R.isCompressedTexture?R.mipmaps[V]:R.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,rr.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,rr.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Te),F.pixelStorei(F.UNPACK_SKIP_ROWS,We),R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,V,Ke,Ze,ye,Ie,Xe,xt,rr.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,V,Ke,Ze,rr.width,rr.height,Xe,rr.data):F.texSubImage2D(F.TEXTURE_2D,V,Ke,Ze,ye,Ie,Xe,xt,rr),F.pixelStorei(F.UNPACK_ROW_LENGTH,At),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Rt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,yt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ct),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Oe),V===0&&G.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Qe.unbindTexture()},this.copyTextureToTexture3D=function(R,G,Z=null,$=null,V=0){R.isTexture!==!0&&(Pl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,$=arguments[1]||null,R=arguments[2],G=arguments[3],V=arguments[4]||0);let ye,Ie,Te,We,Ke,Ze,Xe,xt,At;const Rt=R.isCompressedTexture?R.mipmaps[V]:R.image;Z!==null?(ye=Z.max.x-Z.min.x,Ie=Z.max.y-Z.min.y,Te=Z.max.z-Z.min.z,We=Z.min.x,Ke=Z.min.y,Ze=Z.min.z):(ye=Rt.width,Ie=Rt.height,Te=Rt.depth,We=0,Ke=0,Ze=0),$!==null?(Xe=$.x,xt=$.y,At=$.z):(Xe=0,xt=0,At=0);const yt=it.convert(G.format),Ct=it.convert(G.type);let Oe;if(G.isData3DTexture)P.setTexture3D(G,0),Oe=F.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)P.setTexture2DArray(G,0),Oe=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,G.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,G.unpackAlignment);const rr=F.getParameter(F.UNPACK_ROW_LENGTH),_n=F.getParameter(F.UNPACK_IMAGE_HEIGHT),br=F.getParameter(F.UNPACK_SKIP_PIXELS),Yr=F.getParameter(F.UNPACK_SKIP_ROWS),Kt=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Rt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Rt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,We),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ke),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ze),R.isDataTexture||R.isData3DTexture?F.texSubImage3D(Oe,V,Xe,xt,At,ye,Ie,Te,yt,Ct,Rt.data):G.isCompressedArrayTexture?F.compressedTexSubImage3D(Oe,V,Xe,xt,At,ye,Ie,Te,yt,Rt.data):F.texSubImage3D(Oe,V,Xe,xt,At,ye,Ie,Te,yt,Ct,Rt),F.pixelStorei(F.UNPACK_ROW_LENGTH,rr),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,_n),F.pixelStorei(F.UNPACK_SKIP_PIXELS,br),F.pixelStorei(F.UNPACK_SKIP_ROWS,Yr),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Kt),V===0&&G.generateMipmaps&&F.generateMipmap(Oe),Qe.unbindTexture()},this.initRenderTarget=function(R){Je.get(R).__webglFramebuffer===void 0&&P.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?P.setTextureCube(R,0):R.isData3DTexture?P.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?P.setTexture2DArray(R,0):P.setTexture2D(R,0),Qe.unbindTexture()},this.resetState=function(){te=0,B=0,I=null,Qe.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const r=this.getContext();r.drawingBufferColorSpace=e===rh?"display-p3":"srgb",r.unpackColorSpace=St.workingColorSpace===Hl?"display-p3":"srgb"}}class AE extends mr{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,r){return super.copy(e,r),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const r=super.toJSON(e);return this.fog!==null&&(r.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(r.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(r.object.backgroundIntensity=this.backgroundIntensity),r.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(r.object.environmentIntensity=this.environmentIntensity),r.object.environmentRotation=this.environmentRotation.toArray(),r}}class Tg extends Xa{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const kl=new J,zl=new J,Dm=new zt,Os=new nh,Sl=new Ws,nd=new J,Im=new J;class RE extends mr{constructor(e=new ln,r=new Tg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=r,this.updateMorphTargets()}copy(e,r){return super.copy(e,r),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const r=e.attributes.position,i=[0];for(let o=1,u=r.count;o<u;o++)kl.fromBufferAttribute(r,o-1),zl.fromBufferAttribute(r,o),i[o]=i[o-1],i[o]+=kl.distanceTo(zl);e.setAttribute("lineDistance",new kn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,r){const i=this.geometry,o=this.matrixWorld,u=e.params.Line.threshold,d=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Sl.copy(i.boundingSphere),Sl.applyMatrix4(o),Sl.radius+=u,e.ray.intersectsSphere(Sl)===!1)return;Dm.copy(o).invert(),Os.copy(e.ray).applyMatrix4(Dm);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),f=h*h,m=this.isLineSegments?2:1,g=i.index,y=i.attributes.position;if(g!==null){const x=Math.max(0,d.start),S=Math.min(g.count,d.start+d.count);for(let w=x,A=S-1;w<A;w+=m){const v=g.getX(w),_=g.getX(w+1),D=Ml(this,e,Os,f,v,_);D&&r.push(D)}if(this.isLineLoop){const w=g.getX(S-1),A=g.getX(x),v=Ml(this,e,Os,f,w,A);v&&r.push(v)}}else{const x=Math.max(0,d.start),S=Math.min(y.count,d.start+d.count);for(let w=x,A=S-1;w<A;w+=m){const v=Ml(this,e,Os,f,w,w+1);v&&r.push(v)}if(this.isLineLoop){const w=Ml(this,e,Os,f,S-1,x);w&&r.push(w)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const i=e[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=i.length;o<u;o++){const d=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=o}}}}}function Ml(a,e,r,i,o,u){const d=a.geometry.attributes.position;if(kl.fromBufferAttribute(d,o),zl.fromBufferAttribute(d,u),r.distanceSqToSegment(kl,zl,nd,Im)>i)return;nd.applyMatrix4(a.matrixWorld);const h=e.ray.origin.distanceTo(nd);if(!(h<e.near||h>e.far))return{distance:h,point:Im.clone().applyMatrix4(a.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:a}}const Om=new J,Fm=new J;class CE extends RE{constructor(e,r){super(e,r),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const r=e.attributes.position,i=[];for(let o=0,u=r.count;o<u;o+=2)Om.fromBufferAttribute(r,o),Fm.fromBufferAttribute(r,o+1),i[o]=o===0?0:i[o-1],i[o+1]=i[o]+Om.distanceTo(Fm);e.setAttribute("lineDistance",new kn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class bE extends Xa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const km=new zt,Yd=new nh,El=new Ws,Tl=new J;class PE extends mr{constructor(e=new ln,r=new bE){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=r,this.updateMorphTargets()}copy(e,r){return super.copy(e,r),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,r){const i=this.geometry,o=this.matrixWorld,u=e.params.Points.threshold,d=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),El.copy(i.boundingSphere),El.applyMatrix4(o),El.radius+=u,e.ray.intersectsSphere(El)===!1)return;km.copy(o).invert(),Yd.copy(e.ray).applyMatrix4(km);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),f=h*h,m=i.index,g=i.attributes.position;if(m!==null){const y=Math.max(0,d.start),x=Math.min(m.count,d.start+d.count);for(let S=y,w=x;S<w;S++){const A=m.getX(S);Tl.fromBufferAttribute(g,A),zm(Tl,A,f,o,e,r,this)}}else{const y=Math.max(0,d.start),x=Math.min(g.count,d.start+d.count);for(let S=y,w=x;S<w;S++)Tl.fromBufferAttribute(g,S),zm(Tl,S,f,o,e,r,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const i=e[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=i.length;o<u;o++){const d=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=o}}}}}function zm(a,e,r,i,o,u,d){const h=Yd.distanceSqToPoint(a);if(h<r){const f=new J;Yd.closestPointToPoint(a,f),f.applyMatrix4(i);const m=o.ray.origin.distanceTo(f);if(m<o.near||m>o.far)return;u.push({distance:m,distanceToRay:Math.sqrt(h),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kd);const LE=`precision mediump float;

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
`,NE=`precision mediump float;

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
`,Bm={dashboard:{nodeDensity:.55,glowIntensity:1,pulseSpeed:1,interactionStrength:.6,spacing:90},"mission-control":{nodeDensity:.65,glowIntensity:1.25,pulseSpeed:1.2,interactionStrength:.8,spacing:80},jarvis:{nodeDensity:.75,glowIntensity:1.4,pulseSpeed:1.5,interactionStrength:1,spacing:70}},wg=(a="mission-control")=>Bm[a]??Bm["mission-control"];class UE{constructor({width:e,height:r,preset:i="mission-control"}){this.size={width:e,height:r},this.setPreset(i),this.nodes=[],this.velocities=[],this.energies=[],this.edges=[],this.lineEnergy=[],this.pulses=[],this.spatial=new Map,this.seed()}setPreset(e){this.preset=wg(e)}seed(){const{width:e,height:r}=this.size,i=this.preset.spacing,o=Math.max(6,Math.floor(e/i)),u=Math.max(4,Math.floor(r/i));this.nodes=[],this.velocities=[],this.energies=[],this.edges=[],this.lineEnergy=[];for(let h=0;h<u;h++)for(let f=0;f<o;f++){const m=(f+.5)*i+(Math.random()-.5)*12,g=(h+.5)*i+(Math.random()-.5)*12;this.nodes.push([m,g,0]),this.velocities.push([(Math.random()-.5)*.2,(Math.random()-.5)*.2,0]),this.energies.push(Math.random()*.4)}const d=(h,f)=>f*o+h;for(let h=0;h<u;h++)for(let f=0;f<o;f++){const m=d(f,h);f<o-1&&this.addEdge(m,d(f+1,h)),h<u-1&&this.addEdge(m,d(f,h+1))}this.buildSpatial(i*1.5)}resize(e,r){this.size={width:e,height:r},this.seed()}addEdge(e,r){this.edges.push([e,r]),this.lineEnergy.push(.2)}buildSpatial(e){this.cellSize=e,this.spatial=new Map,this.nodes.forEach(([r,i],o)=>{const u=`${Math.floor(r/e)}:${Math.floor(i/e)}`;this.spatial.has(u)||this.spatial.set(u,[]),this.spatial.get(u).push(o)})}neighborsAround(e,r){const{cellSize:i}=this,o=Math.floor(e.x/i),u=Math.floor(e.y/i),d=[],h=Math.ceil(r/i);for(let f=-h;f<=h;f++)for(let m=-h;m<=h;m++){const g=`${o+f}:${u+m}`;this.spatial.has(g)&&d.push(...this.spatial.get(g))}return d}triggerPulse(e,r=1){this.neighborsAround(e,this.preset.spacing*2).forEach(i=>{const[o,u]=this.nodes[i],d=Math.hypot(o-e.x,u-e.y)*(.4/this.preset.pulseSpeed);this.pulses.push({node:i,at:performance.now()+d,intensity:r})})}microPulse(e){this.triggerPulse(e,.4)}attract(e,r=this.preset.interactionStrength){this.neighborsAround(e,this.preset.spacing*2.5).forEach(i=>{const o=this.nodes[i],u=this.velocities[i],d=e.x-o[0],h=e.y-o[1],f=Math.max(8,Math.hypot(d,h)),m=r/f*.35;u[0]+=d/f*m,u[1]+=h/f*m,this.energies[i]=Math.min(1,this.energies[i]+.02)})}update(e){const r=performance.now();this.pulses=this.pulses.filter(i=>r>=i.at?(this.energies[i.node]=Math.min(1,this.energies[i.node]+.5*i.intensity),!1):!0);for(let i=0;i<this.nodes.length;i++){const o=this.nodes[i],u=this.velocities[i];o[0]+=u[0]*e,o[1]+=u[1]*e,u[0]*=.95,u[1]*=.95,this.energies[i]=Math.max(0,this.energies[i]-e*.15)}this.edges.forEach(([i,o],u)=>{const d=(this.energies[i]+this.energies[o])*.5;this.lineEnergy[u]=d})}}const DE=({preset:a="mission-control",followMouse:e=!0,reactToTyping:r=!0,reactToClick:i=!0,className:o})=>{const u=Or.useRef(null),d=Or.useRef(),h=Or.useRef(),f=Or.useRef(),m=Or.useRef(),g=Or.useRef(!0);return Or.useEffect(()=>{const y=u.current;if(!y)return;const x=wg(a),S=new wE({antialias:!0,alpha:!0});S.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),S.setClearColor(0,0),S.domElement.className="jk-neural-bg",y.appendChild(S.domElement),d.current=S;const w=new AE,A=new _g(-1,1,1,-1,.1,10);A.position.z=1;const v=()=>{const{clientWidth:N,clientHeight:Y}=y;S.setSize(N,Y),A.left=-N/2,A.right=N/2,A.top=Y/2,A.bottom=-Y/2,A.updateProjectionMatrix(),g.current=!0};v(),window.addEventListener("resize",v);const _=new UE({width:S.domElement.width,height:S.domElement.height,preset:a});h.current=_;const D=new Float32Array(_.nodes.length*3),b=new Float32Array(_.nodes.length),U=new Tr(D,3),te=new Tr(b,1),B=new ln;B.setAttribute("position",U),B.setAttribute("aEnergy",te);const I=new Hn({vertexShader:LE,fragmentShader:NE,transparent:!0,blending:Nl,depthWrite:!1,uniforms:{uTime:{value:0},uSize:{value:6*x.glowIntensity}}}),q=new PE(B,I);f.current=q,w.add(q);const _e=new Float32Array(_.edges.length*2*3),E=new Float32Array(_.edges.length),C=new ln;C.setAttribute("position",new Tr(_e,3)),C.setAttribute("alpha",new Tr(E,1));const re=new Tg({color:new vt(63168),transparent:!0,opacity:.4,blending:Nl}),ne=new CE(C,re);m.current=ne,w.add(ne);const ae=()=>{_.nodes.forEach((N,Y)=>{D[Y*3]=N[0]-_.size.width/2,D[Y*3+1]=N[1]-_.size.height/2,D[Y*3+2]=N[2],b[Y]=_.energies[Y]}),U.needsUpdate=!0,te.needsUpdate=!0,_.edges.forEach(([N,Y],be)=>{const K=_.nodes[N],le=_.nodes[Y],ge=be*6;_e[ge]=K[0]-_.size.width/2,_e[ge+1]=K[1]-_.size.height/2,_e[ge+3]=le[0]-_.size.width/2,_e[ge+4]=le[1]-_.size.height/2,E[be]=_.lineEnergy[be]}),C.getAttribute("position").needsUpdate=!0,C.getAttribute("alpha").needsUpdate=!0,re.opacity=.2+.5*x.glowIntensity};let pe=performance.now();const ee=()=>{const N=performance.now(),Y=Math.min(.05,(N-pe)/1e3);pe=N,g.current&&(_.resize(S.domElement.width,S.domElement.height),g.current=!1),_.update(Y),I.uniforms.uTime.value=N*.001,ae(),S.render(w,A),ce=requestAnimationFrame(ee)};let ce=requestAnimationFrame(ee);const k=N=>{const Y=S.domElement.getBoundingClientRect();_.attract({x:N.clientX-Y.left,y:N.clientY-Y.top}),e&&_.microPulse({x:N.clientX-Y.left,y:N.clientY-Y.top})},oe=N=>{if(!i)return;const Y=S.domElement.getBoundingClientRect();_.triggerPulse({x:N.clientX-Y.left,y:N.clientY-Y.top},1.2)},se=()=>{if(!r)return;const N=S.domElement.getBoundingClientRect();_.triggerPulse({x:Math.random()*N.width,y:Math.random()*N.height},.8)};return window.addEventListener("mousemove",k),window.addEventListener("click",oe),window.addEventListener("keydown",se),()=>{cancelAnimationFrame(ce),window.removeEventListener("resize",v),window.removeEventListener("mousemove",k),window.removeEventListener("click",oe),window.removeEventListener("keydown",se),w.clear(),S.dispose(),y.removeChild(S.domElement)}},[a,e,r,i]),$e.jsx("div",{ref:u,className:o,style:{position:"absolute",inset:0}})},IE=()=>{const[a,e]=Or.useState(!1),r={onMouseEnter:Or.useCallback(()=>e(!0),[]),onMouseLeave:Or.useCallback(()=>e(!1),[])};return{hovered:a,bind:r}},OE=({keys:a,onPulse:e}={})=>{Or.useEffect(()=>{const r=i=>{a&&!a.includes(i.key)||e?.(i.key)};return window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)},[a,e])},FE=[{id:"alpha",status:"Online",load:"42%",latency:"18ms"},{id:"beta",status:"Degraded",load:"73%",latency:"32ms"},{id:"gamma",status:"Offline",load:"0%",latency:"—"}];function kE(){const[a,e]=xi.useState(!1),[r,i]=xi.useState(""),{hovered:o,bind:u}=IE();OE({onPulse:h=>i(h)});const d=[{id:"components",label:"Components",content:je.jsx(zE,{onOpenModal:()=>e(!0)})},{id:"dashboard",label:"Dashboard",content:je.jsx(BE,{})}];return je.jsxs("div",{className:"min-h-screen bg-neo-bg text-neo-text relative overflow-hidden",children:[je.jsx(DE,{className:"pointer-events-none",preset:"mission-control"}),je.jsxs("div",{className:"relative z-10 max-w-6xl mx-auto px-6 py-10 space-y-8",children:[je.jsxs("header",{className:"flex items-center justify-between",children:[je.jsxs("div",{children:[je.jsx("p",{className:"text-xs uppercase tracking-[0.35em] text-neo-muted",children:"Neural UI // JeiKei"}),je.jsx("h1",{className:"text-4xl font-black tracking-tight",children:"Design System Demo"})]}),je.jsx(Fs,{variant:"accent",glow:!0,children:"Vite 7 + Tailwind"})]}),je.jsx(y_,{tabs:d,defaultValue:"components"}),je.jsx("div",{className:"flex items-center gap-3",...u,children:je.jsx(M_,{message:"Keyboard Pulse Listener",description:`Last key: ${r||"—"} | Hover: ${o?"yes":"no"}`,variant:"info"})})]}),je.jsx(x_,{open:a,title:"Neural Modal",onClose:()=>e(!1),footer:je.jsxs(je.Fragment,{children:[je.jsx(Fr,{variant:"ghost",onClick:()=>e(!1),children:"Cancel"}),je.jsx(Fr,{glow:!0,onClick:()=>e(!1),children:"Confirm"})]}),children:"This modal rides on top of the neural grid. Keyboard pulses will ripple through the system."})]})}const zE=({onOpenModal:a})=>je.jsxs(Wm,{gap:"lg",columns:{base:1,md:2},children:[je.jsx(Qo,{title:"Buttons",description:"Variants + glow + sizes",children:je.jsxs("div",{className:"flex flex-wrap gap-3",children:[je.jsx(Fr,{glow:!0,children:"Primary"}),je.jsx(Fr,{variant:"secondary",children:"Secondary"}),je.jsx(Fr,{variant:"outline",children:"Outline"}),je.jsx(Fr,{variant:"ghost",children:"Ghost"}),je.jsx(Fr,{variant:"danger",children:"Danger"})]})}),je.jsx(Qo,{title:"Inputs",description:"With helper and error",children:je.jsxs("div",{className:"space-y-3",children:[je.jsx(ad,{label:"Callsign",placeholder:"AR-42",helperText:"Neural authenticated"}),je.jsx(ad,{label:"Access Key",type:"password",error:"Key mismatch"})]})}),je.jsx(Qo,{title:"Badges & Toast",description:"Status chips",children:je.jsxs("div",{className:"flex flex-wrap gap-2",children:[je.jsx(Fs,{variant:"accent",glow:!0,children:"Active"}),je.jsx(Fs,{variant:"success",children:"Stable"}),je.jsx(Fs,{variant:"warning",children:"Warning"}),je.jsx(Fs,{variant:"danger",children:"Critical"})]})}),je.jsx(Qo,{title:"Modal",description:"Glass + glow",footer:je.jsx(Fr,{onClick:a,children:"Open Modal"}),children:"Trigger a modal with neon styling and keyboard traps."})]}),BE=()=>je.jsxs("div",{className:"space-y-6",children:[je.jsx(Bp,{title:"Neural Operations",actions:je.jsxs(je.Fragment,{children:[je.jsx(Fr,{size:"sm",variant:"outline",children:"Calibrate"}),je.jsx(Fr,{size:"sm",glow:!0,children:"Pulse"})]}),children:je.jsxs(Wm,{columns:{base:1,md:3},gap:"md",children:[je.jsx(id,{label:"Active Nodes",value:"128",delta:"+6"}),je.jsx(id,{label:"Signal Coherence",value:"93%",delta:"+2.1%"}),je.jsx(id,{label:"Latency",value:"14ms",delta:"-1.2ms"})]})}),je.jsx(Bp,{title:"Transmission Log",children:je.jsx(S_,{columns:[{key:"id",header:"Node"},{key:"status",header:"Status"},{key:"load",header:"Load",align:"right"},{key:"latency",header:"Latency",align:"right"}],data:FE})})]}),id=({label:a,value:e,delta:r})=>je.jsxs("div",{className:"glass-surface jk-card border border-white/5 rounded-neo-lg p-5",children:[je.jsx("p",{className:"text-sm text-neo-muted uppercase tracking-[0.2em]",children:a}),je.jsx("p",{className:"text-3xl font-black mt-2",children:e}),je.jsxs("p",{className:"text-xs text-neo-accent mt-1",children:["Δ ",r]})]});f_.createRoot(document.getElementById("root")).render(je.jsx(xi.StrictMode,{children:je.jsx(kE,{})}));
