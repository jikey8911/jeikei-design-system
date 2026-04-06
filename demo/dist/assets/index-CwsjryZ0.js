(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();function Um(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var yc={exports:{}},Ro={},Sc={exports:{}},ot={};var Ap;function e_(){if(Ap)return ot;Ap=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function y(D){return D===null||typeof D!="object"?null:(D=x&&D[x]||D["@@iterator"],typeof D=="function"?D:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,A={};function v(D,ne,Pe){this.props=D,this.context=ne,this.refs=A,this.updater=Pe||S}v.prototype.isReactComponent={},v.prototype.setState=function(D,ne){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,ne,"setState")},v.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function _(){}_.prototype=v.prototype;function I(D,ne,Pe){this.props=D,this.context=ne,this.refs=A,this.updater=Pe||S}var P=I.prototype=new _;P.constructor=I,w(P,v.prototype),P.isPureReactComponent=!0;var N=Array.isArray,J=Object.prototype.hasOwnProperty,z={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function Y(D,ne,Pe){var j,ae={},xe=null,ye=null;if(ne!=null)for(j in ne.ref!==void 0&&(ye=ne.ref),ne.key!==void 0&&(xe=""+ne.key),ne)J.call(ne,j)&&!U.hasOwnProperty(j)&&(ae[j]=ne[j]);var be=arguments.length-2;if(be===1)ae.children=Pe;else if(1<be){for(var Le=Array(be),et=0;et<be;et++)Le[et]=arguments[et+2];ae.children=Le}if(D&&D.defaultProps)for(j in be=D.defaultProps,be)ae[j]===void 0&&(ae[j]=be[j]);return{$$typeof:s,type:D,key:xe,ref:ye,props:ae,_owner:z.current}}function Se(D,ne){return{$$typeof:s,type:D.type,key:ne,ref:D.ref,props:D.props,_owner:D._owner}}function E(D){return typeof D=="object"&&D!==null&&D.$$typeof===s}function R(D){var ne={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(Pe){return ne[Pe]})}var re=/\/+/g;function ee(D,ne){return typeof D=="object"&&D!==null&&D.key!=null?R(""+D.key):ne.toString(36)}function ue(D,ne,Pe,j,ae){var xe=typeof D;(xe==="undefined"||xe==="boolean")&&(D=null);var ye=!1;if(D===null)ye=!0;else switch(xe){case"string":case"number":ye=!0;break;case"object":switch(D.$$typeof){case s:case e:ye=!0}}if(ye)return ye=D,ae=ae(ye),D=j===""?"."+ee(ye,0):j,N(ae)?(Pe="",D!=null&&(Pe=D.replace(re,"$&/")+"/"),ue(ae,ne,Pe,"",function(et){return et})):ae!=null&&(E(ae)&&(ae=Se(ae,Pe+(!ae.key||ye&&ye.key===ae.key?"":(""+ae.key).replace(re,"$&/")+"/")+D)),ne.push(ae)),1;if(ye=0,j=j===""?".":j+":",N(D))for(var be=0;be<D.length;be++){xe=D[be];var Le=j+ee(xe,be);ye+=ue(xe,ne,Pe,Le,ae)}else if(Le=y(D),typeof Le=="function")for(D=Le.call(D),be=0;!(xe=D.next()).done;)xe=xe.value,Le=j+ee(xe,be++),ye+=ue(xe,ne,Pe,Le,ae);else if(xe==="object")throw ne=String(D),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return ye}function fe(D,ne,Pe){if(D==null)return D;var j=[],ae=0;return ue(D,j,"","",function(xe){return ne.call(Pe,xe,ae++)}),j}function te(D){if(D._status===-1){var ne=D._result;ne=ne(),ne.then(function(Pe){(D._status===0||D._status===-1)&&(D._status=1,D._result=Pe)},function(Pe){(D._status===0||D._status===-1)&&(D._status=2,D._result=Pe)}),D._status===-1&&(D._status=0,D._result=ne)}if(D._status===1)return D._result.default;throw D._result}var le={current:null},O={transition:null},ce={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:O,ReactCurrentOwner:z};function se(){throw Error("act(...) is not supported in production builds of React.")}return ot.Children={map:fe,forEach:function(D,ne,Pe){fe(D,function(){ne.apply(this,arguments)},Pe)},count:function(D){var ne=0;return fe(D,function(){ne++}),ne},toArray:function(D){return fe(D,function(ne){return ne})||[]},only:function(D){if(!E(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},ot.Component=v,ot.Fragment=n,ot.Profiler=a,ot.PureComponent=I,ot.StrictMode=r,ot.Suspense=p,ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,ot.act=se,ot.cloneElement=function(D,ne,Pe){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var j=w({},D.props),ae=D.key,xe=D.ref,ye=D._owner;if(ne!=null){if(ne.ref!==void 0&&(xe=ne.ref,ye=z.current),ne.key!==void 0&&(ae=""+ne.key),D.type&&D.type.defaultProps)var be=D.type.defaultProps;for(Le in ne)J.call(ne,Le)&&!U.hasOwnProperty(Le)&&(j[Le]=ne[Le]===void 0&&be!==void 0?be[Le]:ne[Le])}var Le=arguments.length-2;if(Le===1)j.children=Pe;else if(1<Le){be=Array(Le);for(var et=0;et<Le;et++)be[et]=arguments[et+2];j.children=be}return{$$typeof:s,type:D.type,key:ae,ref:xe,props:j,_owner:ye}},ot.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:u,_context:D},D.Consumer=D},ot.createElement=Y,ot.createFactory=function(D){var ne=Y.bind(null,D);return ne.type=D,ne},ot.createRef=function(){return{current:null}},ot.forwardRef=function(D){return{$$typeof:d,render:D}},ot.isValidElement=E,ot.lazy=function(D){return{$$typeof:g,_payload:{_status:-1,_result:D},_init:te}},ot.memo=function(D,ne){return{$$typeof:m,type:D,compare:ne===void 0?null:ne}},ot.startTransition=function(D){var ne=O.transition;O.transition={};try{D()}finally{O.transition=ne}},ot.unstable_act=se,ot.useCallback=function(D,ne){return le.current.useCallback(D,ne)},ot.useContext=function(D){return le.current.useContext(D)},ot.useDebugValue=function(){},ot.useDeferredValue=function(D){return le.current.useDeferredValue(D)},ot.useEffect=function(D,ne){return le.current.useEffect(D,ne)},ot.useId=function(){return le.current.useId()},ot.useImperativeHandle=function(D,ne,Pe){return le.current.useImperativeHandle(D,ne,Pe)},ot.useInsertionEffect=function(D,ne){return le.current.useInsertionEffect(D,ne)},ot.useLayoutEffect=function(D,ne){return le.current.useLayoutEffect(D,ne)},ot.useMemo=function(D,ne){return le.current.useMemo(D,ne)},ot.useReducer=function(D,ne,Pe){return le.current.useReducer(D,ne,Pe)},ot.useRef=function(D){return le.current.useRef(D)},ot.useState=function(D){return le.current.useState(D)},ot.useSyncExternalStore=function(D,ne,Pe){return le.current.useSyncExternalStore(D,ne,Pe)},ot.useTransition=function(){return le.current.useTransition()},ot.version="18.3.1",ot}var Cp;function jf(){return Cp||(Cp=1,Sc.exports=e_()),Sc.exports}var Rp;function t_(){if(Rp)return Ro;Rp=1;var s=jf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(d,p,m){var g,x={},y=null,S=null;m!==void 0&&(y=""+m),p.key!==void 0&&(y=""+p.key),p.ref!==void 0&&(S=p.ref);for(g in p)r.call(p,g)&&!u.hasOwnProperty(g)&&(x[g]=p[g]);if(d&&d.defaultProps)for(g in p=d.defaultProps,p)x[g]===void 0&&(x[g]=p[g]);return{$$typeof:e,type:d,key:y,ref:S,props:x,_owner:a.current}}return Ro.Fragment=n,Ro.jsx=f,Ro.jsxs=f,Ro}var Pp;function n_(){return Pp||(Pp=1,yc.exports=t_()),yc.exports}var ie=n_(),on=jf();const i_=Um(on);var $a={},Mc={exports:{}},En={},Ec={exports:{}},Tc={};var bp;function r_(){return bp||(bp=1,(function(s){function e(O,ce){var se=O.length;O.push(ce);e:for(;0<se;){var D=se-1>>>1,ne=O[D];if(0<a(ne,ce))O[D]=ce,O[se]=ne,se=D;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var ce=O[0],se=O.pop();if(se!==ce){O[0]=se;e:for(var D=0,ne=O.length,Pe=ne>>>1;D<Pe;){var j=2*(D+1)-1,ae=O[j],xe=j+1,ye=O[xe];if(0>a(ae,se))xe<ne&&0>a(ye,ae)?(O[D]=ye,O[xe]=se,D=xe):(O[D]=ae,O[j]=se,D=j);else if(xe<ne&&0>a(ye,se))O[D]=ye,O[xe]=se,D=xe;else break e}}return ce}function a(O,ce){var se=O.sortIndex-ce.sortIndex;return se!==0?se:O.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var p=[],m=[],g=1,x=null,y=3,S=!1,w=!1,A=!1,v=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(O){for(var ce=n(m);ce!==null;){if(ce.callback===null)r(m);else if(ce.startTime<=O)r(m),ce.sortIndex=ce.expirationTime,e(p,ce);else break;ce=n(m)}}function N(O){if(A=!1,P(O),!w)if(n(p)!==null)w=!0,te(J);else{var ce=n(m);ce!==null&&le(N,ce.startTime-O)}}function J(O,ce){w=!1,A&&(A=!1,_(Y),Y=-1),S=!0;var se=y;try{for(P(ce),x=n(p);x!==null&&(!(x.expirationTime>ce)||O&&!R());){var D=x.callback;if(typeof D=="function"){x.callback=null,y=x.priorityLevel;var ne=D(x.expirationTime<=ce);ce=s.unstable_now(),typeof ne=="function"?x.callback=ne:x===n(p)&&r(p),P(ce)}else r(p);x=n(p)}if(x!==null)var Pe=!0;else{var j=n(m);j!==null&&le(N,j.startTime-ce),Pe=!1}return Pe}finally{x=null,y=se,S=!1}}var z=!1,U=null,Y=-1,Se=5,E=-1;function R(){return!(s.unstable_now()-E<Se)}function re(){if(U!==null){var O=s.unstable_now();E=O;var ce=!0;try{ce=U(!0,O)}finally{ce?ee():(z=!1,U=null)}}else z=!1}var ee;if(typeof I=="function")ee=function(){I(re)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,fe=ue.port2;ue.port1.onmessage=re,ee=function(){fe.postMessage(null)}}else ee=function(){v(re,0)};function te(O){U=O,z||(z=!0,ee())}function le(O,ce){Y=v(function(){O(s.unstable_now())},ce)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_continueExecution=function(){w||S||(w=!0,te(J))},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Se=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(O){switch(y){case 1:case 2:case 3:var ce=3;break;default:ce=y}var se=y;y=ce;try{return O()}finally{y=se}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(O,ce){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var se=y;y=O;try{return ce()}finally{y=se}},s.unstable_scheduleCallback=function(O,ce,se){var D=s.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?D+se:D):se=D,O){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=se+ne,O={id:g++,callback:ce,priorityLevel:O,startTime:se,expirationTime:ne,sortIndex:-1},se>D?(O.sortIndex=se,e(m,O),n(p)===null&&O===n(m)&&(A?(_(Y),Y=-1):A=!0,le(N,se-D))):(O.sortIndex=ne,e(p,O),w||S||(w=!0,te(J))),O},s.unstable_shouldYield=R,s.unstable_wrapCallback=function(O){var ce=y;return function(){var se=y;y=ce;try{return O.apply(this,arguments)}finally{y=se}}}})(Tc)),Tc}var Lp;function s_(){return Lp||(Lp=1,Ec.exports=r_()),Ec.exports}var Dp;function o_(){if(Dp)return En;Dp=1;var s=jf(),e=s_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},x={};function y(t){return p.call(x,t)?!0:p.call(g,t)?!1:m.test(t)?x[t]=!0:(g[t]=!0,!1)}function S(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,i,o,l){if(i===null||typeof i>"u"||S(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(t,i,o,l,c,h,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=M}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){v[t]=new A(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];v[i]=new A(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){v[t]=new A(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){v[t]=new A(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){v[t]=new A(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){v[t]=new A(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){v[t]=new A(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){v[t]=new A(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){v[t]=new A(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function I(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(_,I);v[i]=new A(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(_,I);v[i]=new A(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(_,I);v[i]=new A(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){v[t]=new A(t,1,!1,t.toLowerCase(),null,!1,!1)}),v.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){v[t]=new A(t,1,!1,t.toLowerCase(),null,!0,!0)});function P(t,i,o,l){var c=v.hasOwnProperty(i)?v[i]:null;(c!==null?c.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,o,c,l)&&(o=null),l||c===null?y(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(i=c.attributeName,l=c.attributeNamespace,o===null?t.removeAttribute(i):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var N=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,J=Symbol.for("react.element"),z=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),Se=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),R=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),fe=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),O=Symbol.iterator;function ce(t){return t===null||typeof t!="object"?null:(t=O&&t[O]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,D;function ne(t){if(D===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);D=i&&i[1]||""}return`
`+D+t}var Pe=!1;function j(t,i){if(!t||Pe)return"";Pe=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(Z){var l=Z}Reflect.construct(t,[],i)}else{try{i.call()}catch(Z){l=Z}t.call(i.prototype)}else{try{throw Error()}catch(Z){l=Z}t()}}catch(Z){if(Z&&l&&typeof Z.stack=="string"){for(var c=Z.stack.split(`
`),h=l.stack.split(`
`),M=c.length-1,L=h.length-1;1<=M&&0<=L&&c[M]!==h[L];)L--;for(;1<=M&&0<=L;M--,L--)if(c[M]!==h[L]){if(M!==1||L!==1)do if(M--,L--,0>L||c[M]!==h[L]){var F=`
`+c[M].replace(" at new "," at ");return t.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",t.displayName)),F}while(1<=M&&0<=L);break}}}finally{Pe=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?ne(t):""}function ae(t){switch(t.tag){case 5:return ne(t.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return t=j(t.type,!1),t;case 11:return t=j(t.type.render,!1),t;case 1:return t=j(t.type,!0),t;default:return""}}function xe(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case U:return"Fragment";case z:return"Portal";case Se:return"Profiler";case Y:return"StrictMode";case ee:return"Suspense";case ue:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case R:return(t.displayName||"Context")+".Consumer";case E:return(t._context.displayName||"Context")+".Provider";case re:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case fe:return i=t.displayName||null,i!==null?i:xe(t.type)||"Memo";case te:i=t._payload,t=t._init;try{return xe(t(i))}catch{}}return null}function ye(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(i);case 8:return i===Y?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function be(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Le(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function et(t){var i=Le(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(M){l=""+M,h.call(this,M)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function pt(t){t._valueTracker||(t._valueTracker=et(t))}function lt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=Le(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function k(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function tn(t,i){var o=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function at(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=be(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ft(t,i){i=i.checked,i!=null&&P(t,"checked",i,!1)}function $e(t,i){ft(t,i);var o=be(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Qe(t,i.type,o):i.hasOwnProperty("defaultValue")&&Qe(t,i.type,be(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Tt(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Qe(t,i,o){(i!=="number"||k(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var b=Array.isArray;function T(t,i,o,l){if(t=t.options,i){i={};for(var c=0;c<o.length;c++)i["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=i.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&l&&(t[o].defaultSelected=!0)}else{for(o=""+be(o),i=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function q(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function he(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(b(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:be(o)}}function ve(t,i){var o=be(i.value),l=be(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function de(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function je(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ae(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?je(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Fe,dt=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,c){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,c)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Fe=Fe||document.createElement("div"),Fe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Fe.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Me(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Oe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tt=["Webkit","ms","Moz","O"];Object.keys(Oe).forEach(function(t){tt.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Oe[i]=Oe[t]})});function Je(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Oe.hasOwnProperty(t)&&Oe[t]?(""+i).trim():i+"px"}function Be(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,c=Je(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,c):t[o]=c}}var ut=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function it(t,i){if(i){if(ut[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function St(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var H=null;function De(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var oe=null,pe=null,Ce=null;function Ie(t){if(t=ho(t)){if(typeof oe!="function")throw Error(n(280));var i=t.stateNode;i&&(i=fa(i),oe(t.stateNode,t.type,i))}}function ct(t){pe?Ce?Ce.push(t):Ce=[t]:pe=t}function Ut(){if(pe){var t=pe,i=Ce;if(Ce=pe=null,Ie(t),i)for(t=0;t<i.length;t++)Ie(i[t])}}function nn(t,i){return t(i)}function ht(){}var Kt=!1;function On(t,i,o){if(Kt)return t(i,o);Kt=!0;try{return nn(t,i,o)}finally{Kt=!1,(pe!==null||Ce!==null)&&(ht(),Ut())}}function zi(t,i){var o=t.stateNode;if(o===null)return null;var l=fa(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Yr=!1;if(d)try{var Pn={};Object.defineProperty(Pn,"passive",{get:function(){Yr=!0}}),window.addEventListener("test",Pn,Pn),window.removeEventListener("test",Pn,Pn)}catch{Yr=!1}function Ys(t,i,o,l,c,h,M,L,F){var Z=Array.prototype.slice.call(arguments,3);try{i.apply(o,Z)}catch(ge){this.onError(ge)}}var Hi=!1,xr=null,gi=!1,qr=null,Kr={onError:function(t){Hi=!0,xr=t}};function jo(t,i,o,l,c,h,M,L,F){Hi=!1,xr=null,Ys.apply(Kr,arguments)}function Yo(t,i,o,l,c,h,M,L,F){if(jo.apply(this,arguments),Hi){if(Hi){var Z=xr;Hi=!1,xr=null}else throw Error(n(198));gi||(gi=!0,qr=Z)}}function vi(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function qo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Ko(t){if(vi(t)!==t)throw Error(n(188))}function C(t){var i=t.alternate;if(!i){if(i=vi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var c=o.return;if(c===null)break;var h=c.alternate;if(h===null){if(l=c.return,l!==null){o=l;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===o)return Ko(c),t;if(h===l)return Ko(c),i;h=h.sibling}throw Error(n(188))}if(o.return!==l.return)o=c,l=h;else{for(var M=!1,L=c.child;L;){if(L===o){M=!0,o=c,l=h;break}if(L===l){M=!0,l=c,o=h;break}L=L.sibling}if(!M){for(L=h.child;L;){if(L===o){M=!0,o=h,l=c;break}if(L===l){M=!0,l=h,o=c;break}L=L.sibling}if(!M)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function V(t){return t=C(t),t!==null?K(t):null}function K(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=K(t);if(i!==null)return i;t=t.sibling}return null}var $=e.unstable_scheduleCallback,G=e.unstable_cancelCallback,Te=e.unstable_shouldYield,Ne=e.unstable_requestPaint,we=e.unstable_now,Ge=e.unstable_getCurrentPriorityLevel,Ke=e.unstable_ImmediatePriority,Ze=e.unstable_UserBlockingPriority,We=e.unstable_NormalPriority,yt=e.unstable_LowPriority,wt=e.unstable_IdlePriority,Ct=null,Nt=null;function gt(t){if(Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(Ct,t,void 0,(t.current.flags&128)===128)}catch{}}var ke=Math.clz32?Math.clz32:bn,Wt=Math.log,vt=Math.LN2;function bn(t){return t>>>=0,t===0?32:31-(Wt(t)/vt|0)|0}var jn=64,$t=4194304;function _i(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Rt(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,c=t.suspendedLanes,h=t.pingedLanes,M=o&268435455;if(M!==0){var L=M&~c;L!==0?l=_i(L):(h&=M,h!==0&&(l=_i(h)))}else M=o&~c,M!==0?l=_i(M):h!==0&&(l=_i(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&c)===0&&(c=l&-l,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-ke(i),c=1<<o,l|=t[o],i&=~c;return l}function li(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qs(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var M=31-ke(h),L=1<<M,F=c[M];F===-1?((L&o)===0||(L&l)!==0)&&(c[M]=li(L,i)):F<=i&&(t.expiredLanes|=L),h&=~L}}function an(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function $r(){var t=jn;return jn<<=1,(jn&4194240)===0&&(jn=64),t}function Ks(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Vi(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-ke(i),t[i]=o}function Sg(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-ke(o),h=1<<c;i[c]=0,l[c]=-1,t[c]=-1,o&=~h}}function Gl(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-ke(o),c=1<<l;c&i|t[l]&i&&(t[l]|=i),o&=~c}}var Et=0;function rd(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var sd,Wl,od,ad,ld,Xl=!1,$o=[],Gi=null,Wi=null,Xi=null,$s=new Map,Zs=new Map,ji=[],Mg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ud(t,i){switch(t){case"focusin":case"focusout":Gi=null;break;case"dragenter":case"dragleave":Wi=null;break;case"mouseover":case"mouseout":Xi=null;break;case"pointerover":case"pointerout":$s.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zs.delete(i.pointerId)}}function Qs(t,i,o,l,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:h,targetContainers:[c]},i!==null&&(i=ho(i),i!==null&&Wl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function Eg(t,i,o,l,c){switch(i){case"focusin":return Gi=Qs(Gi,t,i,o,l,c),!0;case"dragenter":return Wi=Qs(Wi,t,i,o,l,c),!0;case"mouseover":return Xi=Qs(Xi,t,i,o,l,c),!0;case"pointerover":var h=c.pointerId;return $s.set(h,Qs($s.get(h)||null,t,i,o,l,c)),!0;case"gotpointercapture":return h=c.pointerId,Zs.set(h,Qs(Zs.get(h)||null,t,i,o,l,c)),!0}return!1}function cd(t){var i=yr(t.target);if(i!==null){var o=vi(i);if(o!==null){if(i=o.tag,i===13){if(i=qo(o),i!==null){t.blockedOn=i,ld(t.priority,function(){od(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Zo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Yl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);H=l,o.target.dispatchEvent(l),H=null}else return i=ho(o),i!==null&&Wl(i),t.blockedOn=o,!1;i.shift()}return!0}function fd(t,i,o){Zo(t)&&o.delete(i)}function Tg(){Xl=!1,Gi!==null&&Zo(Gi)&&(Gi=null),Wi!==null&&Zo(Wi)&&(Wi=null),Xi!==null&&Zo(Xi)&&(Xi=null),$s.forEach(fd),Zs.forEach(fd)}function Js(t,i){t.blockedOn===i&&(t.blockedOn=null,Xl||(Xl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Tg)))}function eo(t){function i(c){return Js(c,t)}if(0<$o.length){Js($o[0],t);for(var o=1;o<$o.length;o++){var l=$o[o];l.blockedOn===t&&(l.blockedOn=null)}}for(Gi!==null&&Js(Gi,t),Wi!==null&&Js(Wi,t),Xi!==null&&Js(Xi,t),$s.forEach(i),Zs.forEach(i),o=0;o<ji.length;o++)l=ji[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<ji.length&&(o=ji[0],o.blockedOn===null);)cd(o),o.blockedOn===null&&ji.shift()}var Zr=N.ReactCurrentBatchConfig,Qo=!0;function wg(t,i,o,l){var c=Et,h=Zr.transition;Zr.transition=null;try{Et=1,jl(t,i,o,l)}finally{Et=c,Zr.transition=h}}function Ag(t,i,o,l){var c=Et,h=Zr.transition;Zr.transition=null;try{Et=4,jl(t,i,o,l)}finally{Et=c,Zr.transition=h}}function jl(t,i,o,l){if(Qo){var c=Yl(t,i,o,l);if(c===null)cu(t,i,l,Jo,o),ud(t,l);else if(Eg(c,t,i,o,l))l.stopPropagation();else if(ud(t,l),i&4&&-1<Mg.indexOf(t)){for(;c!==null;){var h=ho(c);if(h!==null&&sd(h),h=Yl(t,i,o,l),h===null&&cu(t,i,l,Jo,o),h===c)break;c=h}c!==null&&l.stopPropagation()}else cu(t,i,l,null,o)}}var Jo=null;function Yl(t,i,o,l){if(Jo=null,t=De(l),t=yr(t),t!==null)if(i=vi(t),i===null)t=null;else if(o=i.tag,o===13){if(t=qo(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return Jo=t,null}function dd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ge()){case Ke:return 1;case Ze:return 4;case We:case yt:return 16;case wt:return 536870912;default:return 16}default:return 16}}var Yi=null,ql=null,ea=null;function hd(){if(ea)return ea;var t,i=ql,o=i.length,l,c="value"in Yi?Yi.value:Yi.textContent,h=c.length;for(t=0;t<o&&i[t]===c[t];t++);var M=o-t;for(l=1;l<=M&&i[o-l]===c[h-l];l++);return ea=c.slice(t,1<l?1-l:void 0)}function ta(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function na(){return!0}function pd(){return!1}function Ln(t){function i(o,l,c,h,M){this._reactName=o,this._targetInst=c,this.type=l,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var L in t)t.hasOwnProperty(L)&&(o=t[L],this[L]=o?o(h):h[L]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?na:pd,this.isPropagationStopped=pd,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=na)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=na)},persist:function(){},isPersistent:na}),i}var Qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kl=Ln(Qr),to=se({},Qr,{view:0,detail:0}),Cg=Ln(to),$l,Zl,no,ia=se({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==no&&(no&&t.type==="mousemove"?($l=t.screenX-no.screenX,Zl=t.screenY-no.screenY):Zl=$l=0,no=t),$l)},movementY:function(t){return"movementY"in t?t.movementY:Zl}}),md=Ln(ia),Rg=se({},ia,{dataTransfer:0}),Pg=Ln(Rg),bg=se({},to,{relatedTarget:0}),Ql=Ln(bg),Lg=se({},Qr,{animationName:0,elapsedTime:0,pseudoElement:0}),Dg=Ln(Lg),Ng=se({},Qr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ig=Ln(Ng),Ug=se({},Qr,{data:0}),gd=Ln(Ug),Fg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Og={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=kg[t])?!!i[t]:!1}function Jl(){return Bg}var zg=se({},to,{key:function(t){if(t.key){var i=Fg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ta(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Og[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jl,charCode:function(t){return t.type==="keypress"?ta(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ta(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Hg=Ln(zg),Vg=se({},ia,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vd=Ln(Vg),Gg=se({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jl}),Wg=Ln(Gg),Xg=se({},Qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),jg=Ln(Xg),Yg=se({},ia,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qg=Ln(Yg),Kg=[9,13,27,32],eu=d&&"CompositionEvent"in window,io=null;d&&"documentMode"in document&&(io=document.documentMode);var $g=d&&"TextEvent"in window&&!io,_d=d&&(!eu||io&&8<io&&11>=io),xd=" ",yd=!1;function Sd(t,i){switch(t){case"keyup":return Kg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Md(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Jr=!1;function Zg(t,i){switch(t){case"compositionend":return Md(i);case"keypress":return i.which!==32?null:(yd=!0,xd);case"textInput":return t=i.data,t===xd&&yd?null:t;default:return null}}function Qg(t,i){if(Jr)return t==="compositionend"||!eu&&Sd(t,i)?(t=hd(),ea=ql=Yi=null,Jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _d&&i.locale!=="ko"?null:i.data;default:return null}}var Jg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ed(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Jg[t.type]:i==="textarea"}function Td(t,i,o,l){ct(l),i=la(i,"onChange"),0<i.length&&(o=new Kl("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var ro=null,so=null;function ev(t){Vd(t,0)}function ra(t){var i=rs(t);if(lt(i))return t}function tv(t,i){if(t==="change")return i}var wd=!1;if(d){var tu;if(d){var nu="oninput"in document;if(!nu){var Ad=document.createElement("div");Ad.setAttribute("oninput","return;"),nu=typeof Ad.oninput=="function"}tu=nu}else tu=!1;wd=tu&&(!document.documentMode||9<document.documentMode)}function Cd(){ro&&(ro.detachEvent("onpropertychange",Rd),so=ro=null)}function Rd(t){if(t.propertyName==="value"&&ra(so)){var i=[];Td(i,so,t,De(t)),On(ev,i)}}function nv(t,i,o){t==="focusin"?(Cd(),ro=i,so=o,ro.attachEvent("onpropertychange",Rd)):t==="focusout"&&Cd()}function iv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ra(so)}function rv(t,i){if(t==="click")return ra(i)}function sv(t,i){if(t==="input"||t==="change")return ra(i)}function ov(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Yn=typeof Object.is=="function"?Object.is:ov;function oo(t,i){if(Yn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var c=o[l];if(!p.call(i,c)||!Yn(t[c],i[c]))return!1}return!0}function Pd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bd(t,i){var o=Pd(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Pd(o)}}function Ld(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Ld(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Dd(){for(var t=window,i=k();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=k(t.document)}return i}function iu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function av(t){var i=Dd(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Ld(o.ownerDocument.documentElement,o)){if(l!==null&&iu(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,h=Math.min(l.start,c);l=l.end===void 0?h:Math.min(l.end,c),!t.extend&&h>l&&(c=l,l=h,h=c),c=bd(o,h);var M=bd(o,l);c&&M&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var lv=d&&"documentMode"in document&&11>=document.documentMode,es=null,ru=null,ao=null,su=!1;function Nd(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;su||es==null||es!==k(l)||(l=es,"selectionStart"in l&&iu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ao&&oo(ao,l)||(ao=l,l=la(ru,"onSelect"),0<l.length&&(i=new Kl("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=es)))}function sa(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var ts={animationend:sa("Animation","AnimationEnd"),animationiteration:sa("Animation","AnimationIteration"),animationstart:sa("Animation","AnimationStart"),transitionend:sa("Transition","TransitionEnd")},ou={},Id={};d&&(Id=document.createElement("div").style,"AnimationEvent"in window||(delete ts.animationend.animation,delete ts.animationiteration.animation,delete ts.animationstart.animation),"TransitionEvent"in window||delete ts.transitionend.transition);function oa(t){if(ou[t])return ou[t];if(!ts[t])return t;var i=ts[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Id)return ou[t]=i[o];return t}var Ud=oa("animationend"),Fd=oa("animationiteration"),Od=oa("animationstart"),kd=oa("transitionend"),Bd=new Map,zd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qi(t,i){Bd.set(t,i),u(i,[t])}for(var au=0;au<zd.length;au++){var lu=zd[au],uv=lu.toLowerCase(),cv=lu[0].toUpperCase()+lu.slice(1);qi(uv,"on"+cv)}qi(Ud,"onAnimationEnd"),qi(Fd,"onAnimationIteration"),qi(Od,"onAnimationStart"),qi("dblclick","onDoubleClick"),qi("focusin","onFocus"),qi("focusout","onBlur"),qi(kd,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fv=new Set("cancel close invalid load scroll toggle".split(" ").concat(lo));function Hd(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,Yo(l,i,void 0,t),t.currentTarget=null}function Vd(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],c=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var M=l.length-1;0<=M;M--){var L=l[M],F=L.instance,Z=L.currentTarget;if(L=L.listener,F!==h&&c.isPropagationStopped())break e;Hd(c,L,Z),h=F}else for(M=0;M<l.length;M++){if(L=l[M],F=L.instance,Z=L.currentTarget,L=L.listener,F!==h&&c.isPropagationStopped())break e;Hd(c,L,Z),h=F}}}if(gi)throw t=qr,gi=!1,qr=null,t}function bt(t,i){var o=i[gu];o===void 0&&(o=i[gu]=new Set);var l=t+"__bubble";o.has(l)||(Gd(i,t,2,!1),o.add(l))}function uu(t,i,o){var l=0;i&&(l|=4),Gd(o,t,l,i)}var aa="_reactListening"+Math.random().toString(36).slice(2);function uo(t){if(!t[aa]){t[aa]=!0,r.forEach(function(o){o!=="selectionchange"&&(fv.has(o)||uu(o,!1,t),uu(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[aa]||(i[aa]=!0,uu("selectionchange",!1,i))}}function Gd(t,i,o,l){switch(dd(i)){case 1:var c=wg;break;case 4:c=Ag;break;default:c=jl}o=c.bind(null,i,o,t),c=void 0,!Yr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(i,o,{capture:!0,passive:c}):t.addEventListener(i,o,!0):c!==void 0?t.addEventListener(i,o,{passive:c}):t.addEventListener(i,o,!1)}function cu(t,i,o,l,c){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var L=l.stateNode.containerInfo;if(L===c||L.nodeType===8&&L.parentNode===c)break;if(M===4)for(M=l.return;M!==null;){var F=M.tag;if((F===3||F===4)&&(F=M.stateNode.containerInfo,F===c||F.nodeType===8&&F.parentNode===c))return;M=M.return}for(;L!==null;){if(M=yr(L),M===null)return;if(F=M.tag,F===5||F===6){l=h=M;continue e}L=L.parentNode}}l=l.return}On(function(){var Z=h,ge=De(o),_e=[];e:{var me=Bd.get(t);if(me!==void 0){var Ue=Kl,He=t;switch(t){case"keypress":if(ta(o)===0)break e;case"keydown":case"keyup":Ue=Hg;break;case"focusin":He="focus",Ue=Ql;break;case"focusout":He="blur",Ue=Ql;break;case"beforeblur":case"afterblur":Ue=Ql;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=md;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=Pg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=Wg;break;case Ud:case Fd:case Od:Ue=Dg;break;case kd:Ue=jg;break;case"scroll":Ue=Cg;break;case"wheel":Ue=qg;break;case"copy":case"cut":case"paste":Ue=Ig;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=vd}var Ve=(i&4)!==0,zt=!Ve&&t==="scroll",W=Ve?me!==null?me+"Capture":null:me;Ve=[];for(var B=Z,X;B!==null;){X=B;var Ee=X.stateNode;if(X.tag===5&&Ee!==null&&(X=Ee,W!==null&&(Ee=zi(B,W),Ee!=null&&Ve.push(co(B,Ee,X)))),zt)break;B=B.return}0<Ve.length&&(me=new Ue(me,He,null,o,ge),_e.push({event:me,listeners:Ve}))}}if((i&7)===0){e:{if(me=t==="mouseover"||t==="pointerover",Ue=t==="mouseout"||t==="pointerout",me&&o!==H&&(He=o.relatedTarget||o.fromElement)&&(yr(He)||He[xi]))break e;if((Ue||me)&&(me=ge.window===ge?ge:(me=ge.ownerDocument)?me.defaultView||me.parentWindow:window,Ue?(He=o.relatedTarget||o.toElement,Ue=Z,He=He?yr(He):null,He!==null&&(zt=vi(He),He!==zt||He.tag!==5&&He.tag!==6)&&(He=null)):(Ue=null,He=Z),Ue!==He)){if(Ve=md,Ee="onMouseLeave",W="onMouseEnter",B="mouse",(t==="pointerout"||t==="pointerover")&&(Ve=vd,Ee="onPointerLeave",W="onPointerEnter",B="pointer"),zt=Ue==null?me:rs(Ue),X=He==null?me:rs(He),me=new Ve(Ee,B+"leave",Ue,o,ge),me.target=zt,me.relatedTarget=X,Ee=null,yr(ge)===Z&&(Ve=new Ve(W,B+"enter",He,o,ge),Ve.target=X,Ve.relatedTarget=zt,Ee=Ve),zt=Ee,Ue&&He)t:{for(Ve=Ue,W=He,B=0,X=Ve;X;X=ns(X))B++;for(X=0,Ee=W;Ee;Ee=ns(Ee))X++;for(;0<B-X;)Ve=ns(Ve),B--;for(;0<X-B;)W=ns(W),X--;for(;B--;){if(Ve===W||W!==null&&Ve===W.alternate)break t;Ve=ns(Ve),W=ns(W)}Ve=null}else Ve=null;Ue!==null&&Wd(_e,me,Ue,Ve,!1),He!==null&&zt!==null&&Wd(_e,zt,He,Ve,!0)}}e:{if(me=Z?rs(Z):window,Ue=me.nodeName&&me.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&me.type==="file")var Xe=tv;else if(Ed(me))if(wd)Xe=sv;else{Xe=iv;var Ye=nv}else(Ue=me.nodeName)&&Ue.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(Xe=rv);if(Xe&&(Xe=Xe(t,Z))){Td(_e,Xe,o,ge);break e}Ye&&Ye(t,me,Z),t==="focusout"&&(Ye=me._wrapperState)&&Ye.controlled&&me.type==="number"&&Qe(me,"number",me.value)}switch(Ye=Z?rs(Z):window,t){case"focusin":(Ed(Ye)||Ye.contentEditable==="true")&&(es=Ye,ru=Z,ao=null);break;case"focusout":ao=ru=es=null;break;case"mousedown":su=!0;break;case"contextmenu":case"mouseup":case"dragend":su=!1,Nd(_e,o,ge);break;case"selectionchange":if(lv)break;case"keydown":case"keyup":Nd(_e,o,ge)}var qe;if(eu)e:{switch(t){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else Jr?Sd(t,o)&&(nt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(nt="onCompositionStart");nt&&(_d&&o.locale!=="ko"&&(Jr||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&Jr&&(qe=hd()):(Yi=ge,ql="value"in Yi?Yi.value:Yi.textContent,Jr=!0)),Ye=la(Z,nt),0<Ye.length&&(nt=new gd(nt,t,null,o,ge),_e.push({event:nt,listeners:Ye}),qe?nt.data=qe:(qe=Md(o),qe!==null&&(nt.data=qe)))),(qe=$g?Zg(t,o):Qg(t,o))&&(Z=la(Z,"onBeforeInput"),0<Z.length&&(ge=new gd("onBeforeInput","beforeinput",null,o,ge),_e.push({event:ge,listeners:Z}),ge.data=qe))}Vd(_e,i)})}function co(t,i,o){return{instance:t,listener:i,currentTarget:o}}function la(t,i){for(var o=i+"Capture",l=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=zi(t,o),h!=null&&l.unshift(co(t,h,c)),h=zi(t,i),h!=null&&l.push(co(t,h,c))),t=t.return}return l}function ns(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Wd(t,i,o,l,c){for(var h=i._reactName,M=[];o!==null&&o!==l;){var L=o,F=L.alternate,Z=L.stateNode;if(F!==null&&F===l)break;L.tag===5&&Z!==null&&(L=Z,c?(F=zi(o,h),F!=null&&M.unshift(co(o,F,L))):c||(F=zi(o,h),F!=null&&M.push(co(o,F,L)))),o=o.return}M.length!==0&&t.push({event:i,listeners:M})}var dv=/\r\n?/g,hv=/\u0000|\uFFFD/g;function Xd(t){return(typeof t=="string"?t:""+t).replace(dv,`
`).replace(hv,"")}function ua(t,i,o){if(i=Xd(i),Xd(t)!==i&&o)throw Error(n(425))}function ca(){}var fu=null,du=null;function hu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var pu=typeof setTimeout=="function"?setTimeout:void 0,pv=typeof clearTimeout=="function"?clearTimeout:void 0,jd=typeof Promise=="function"?Promise:void 0,mv=typeof queueMicrotask=="function"?queueMicrotask:typeof jd<"u"?function(t){return jd.resolve(null).then(t).catch(gv)}:pu;function gv(t){setTimeout(function(){throw t})}function mu(t,i){var o=i,l=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(l===0){t.removeChild(c),eo(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=c}while(o);eo(i)}function Ki(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Yd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var is=Math.random().toString(36).slice(2),ui="__reactFiber$"+is,fo="__reactProps$"+is,xi="__reactContainer$"+is,gu="__reactEvents$"+is,vv="__reactListeners$"+is,_v="__reactHandles$"+is;function yr(t){var i=t[ui];if(i)return i;for(var o=t.parentNode;o;){if(i=o[xi]||o[ui]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Yd(t);t!==null;){if(o=t[ui])return o;t=Yd(t)}return i}t=o,o=t.parentNode}return null}function ho(t){return t=t[ui]||t[xi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function rs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function fa(t){return t[fo]||null}var vu=[],ss=-1;function $i(t){return{current:t}}function Lt(t){0>ss||(t.current=vu[ss],vu[ss]=null,ss--)}function Pt(t,i){ss++,vu[ss]=t.current,t.current=i}var Zi={},ln=$i(Zi),_n=$i(!1),Sr=Zi;function os(t,i){var o=t.type.contextTypes;if(!o)return Zi;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in o)c[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function xn(t){return t=t.childContextTypes,t!=null}function da(){Lt(_n),Lt(ln)}function qd(t,i,o){if(ln.current!==Zi)throw Error(n(168));Pt(ln,i),Pt(_n,o)}function Kd(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var c in l)if(!(c in i))throw Error(n(108,ye(t)||"Unknown",c));return se({},o,l)}function ha(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zi,Sr=ln.current,Pt(ln,t),Pt(_n,_n.current),!0}function $d(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=Kd(t,i,Sr),l.__reactInternalMemoizedMergedChildContext=t,Lt(_n),Lt(ln),Pt(ln,t)):Lt(_n),Pt(_n,o)}var yi=null,pa=!1,_u=!1;function Zd(t){yi===null?yi=[t]:yi.push(t)}function xv(t){pa=!0,Zd(t)}function Qi(){if(!_u&&yi!==null){_u=!0;var t=0,i=Et;try{var o=yi;for(Et=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}yi=null,pa=!1}catch(c){throw yi!==null&&(yi=yi.slice(t+1)),$(Ke,Qi),c}finally{Et=i,_u=!1}}return null}var as=[],ls=0,ma=null,ga=0,kn=[],Bn=0,Mr=null,Si=1,Mi="";function Er(t,i){as[ls++]=ga,as[ls++]=ma,ma=t,ga=i}function Qd(t,i,o){kn[Bn++]=Si,kn[Bn++]=Mi,kn[Bn++]=Mr,Mr=t;var l=Si;t=Mi;var c=32-ke(l)-1;l&=~(1<<c),o+=1;var h=32-ke(i)+c;if(30<h){var M=c-c%5;h=(l&(1<<M)-1).toString(32),l>>=M,c-=M,Si=1<<32-ke(i)+c|o<<c|l,Mi=h+t}else Si=1<<h|o<<c|l,Mi=t}function xu(t){t.return!==null&&(Er(t,1),Qd(t,1,0))}function yu(t){for(;t===ma;)ma=as[--ls],as[ls]=null,ga=as[--ls],as[ls]=null;for(;t===Mr;)Mr=kn[--Bn],kn[Bn]=null,Mi=kn[--Bn],kn[Bn]=null,Si=kn[--Bn],kn[Bn]=null}var Dn=null,Nn=null,It=!1,qn=null;function Jd(t,i){var o=Gn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function eh(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Dn=t,Nn=Ki(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Dn=t,Nn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Mr!==null?{id:Si,overflow:Mi}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Gn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Dn=t,Nn=null,!0):!1;default:return!1}}function Su(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Mu(t){if(It){var i=Nn;if(i){var o=i;if(!eh(t,i)){if(Su(t))throw Error(n(418));i=Ki(o.nextSibling);var l=Dn;i&&eh(t,i)?Jd(l,o):(t.flags=t.flags&-4097|2,It=!1,Dn=t)}}else{if(Su(t))throw Error(n(418));t.flags=t.flags&-4097|2,It=!1,Dn=t}}}function th(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Dn=t}function va(t){if(t!==Dn)return!1;if(!It)return th(t),It=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!hu(t.type,t.memoizedProps)),i&&(i=Nn)){if(Su(t))throw nh(),Error(n(418));for(;i;)Jd(t,i),i=Ki(i.nextSibling)}if(th(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Nn=Ki(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Nn=null}}else Nn=Dn?Ki(t.stateNode.nextSibling):null;return!0}function nh(){for(var t=Nn;t;)t=Ki(t.nextSibling)}function us(){Nn=Dn=null,It=!1}function Eu(t){qn===null?qn=[t]:qn.push(t)}var yv=N.ReactCurrentBatchConfig;function po(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var c=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(M){var L=c.refs;M===null?delete L[h]:L[h]=M},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function _a(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function ih(t){var i=t._init;return i(t._payload)}function rh(t){function i(W,B){if(t){var X=W.deletions;X===null?(W.deletions=[B],W.flags|=16):X.push(B)}}function o(W,B){if(!t)return null;for(;B!==null;)i(W,B),B=B.sibling;return null}function l(W,B){for(W=new Map;B!==null;)B.key!==null?W.set(B.key,B):W.set(B.index,B),B=B.sibling;return W}function c(W,B){return W=or(W,B),W.index=0,W.sibling=null,W}function h(W,B,X){return W.index=X,t?(X=W.alternate,X!==null?(X=X.index,X<B?(W.flags|=2,B):X):(W.flags|=2,B)):(W.flags|=1048576,B)}function M(W){return t&&W.alternate===null&&(W.flags|=2),W}function L(W,B,X,Ee){return B===null||B.tag!==6?(B=pc(X,W.mode,Ee),B.return=W,B):(B=c(B,X),B.return=W,B)}function F(W,B,X,Ee){var Xe=X.type;return Xe===U?ge(W,B,X.props.children,Ee,X.key):B!==null&&(B.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===te&&ih(Xe)===B.type)?(Ee=c(B,X.props),Ee.ref=po(W,B,X),Ee.return=W,Ee):(Ee=Va(X.type,X.key,X.props,null,W.mode,Ee),Ee.ref=po(W,B,X),Ee.return=W,Ee)}function Z(W,B,X,Ee){return B===null||B.tag!==4||B.stateNode.containerInfo!==X.containerInfo||B.stateNode.implementation!==X.implementation?(B=mc(X,W.mode,Ee),B.return=W,B):(B=c(B,X.children||[]),B.return=W,B)}function ge(W,B,X,Ee,Xe){return B===null||B.tag!==7?(B=Lr(X,W.mode,Ee,Xe),B.return=W,B):(B=c(B,X),B.return=W,B)}function _e(W,B,X){if(typeof B=="string"&&B!==""||typeof B=="number")return B=pc(""+B,W.mode,X),B.return=W,B;if(typeof B=="object"&&B!==null){switch(B.$$typeof){case J:return X=Va(B.type,B.key,B.props,null,W.mode,X),X.ref=po(W,null,B),X.return=W,X;case z:return B=mc(B,W.mode,X),B.return=W,B;case te:var Ee=B._init;return _e(W,Ee(B._payload),X)}if(b(B)||ce(B))return B=Lr(B,W.mode,X,null),B.return=W,B;_a(W,B)}return null}function me(W,B,X,Ee){var Xe=B!==null?B.key:null;if(typeof X=="string"&&X!==""||typeof X=="number")return Xe!==null?null:L(W,B,""+X,Ee);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case J:return X.key===Xe?F(W,B,X,Ee):null;case z:return X.key===Xe?Z(W,B,X,Ee):null;case te:return Xe=X._init,me(W,B,Xe(X._payload),Ee)}if(b(X)||ce(X))return Xe!==null?null:ge(W,B,X,Ee,null);_a(W,X)}return null}function Ue(W,B,X,Ee,Xe){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return W=W.get(X)||null,L(B,W,""+Ee,Xe);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case J:return W=W.get(Ee.key===null?X:Ee.key)||null,F(B,W,Ee,Xe);case z:return W=W.get(Ee.key===null?X:Ee.key)||null,Z(B,W,Ee,Xe);case te:var Ye=Ee._init;return Ue(W,B,X,Ye(Ee._payload),Xe)}if(b(Ee)||ce(Ee))return W=W.get(X)||null,ge(B,W,Ee,Xe,null);_a(B,Ee)}return null}function He(W,B,X,Ee){for(var Xe=null,Ye=null,qe=B,nt=B=0,Jt=null;qe!==null&&nt<X.length;nt++){qe.index>nt?(Jt=qe,qe=null):Jt=qe.sibling;var _t=me(W,qe,X[nt],Ee);if(_t===null){qe===null&&(qe=Jt);break}t&&qe&&_t.alternate===null&&i(W,qe),B=h(_t,B,nt),Ye===null?Xe=_t:Ye.sibling=_t,Ye=_t,qe=Jt}if(nt===X.length)return o(W,qe),It&&Er(W,nt),Xe;if(qe===null){for(;nt<X.length;nt++)qe=_e(W,X[nt],Ee),qe!==null&&(B=h(qe,B,nt),Ye===null?Xe=qe:Ye.sibling=qe,Ye=qe);return It&&Er(W,nt),Xe}for(qe=l(W,qe);nt<X.length;nt++)Jt=Ue(qe,W,nt,X[nt],Ee),Jt!==null&&(t&&Jt.alternate!==null&&qe.delete(Jt.key===null?nt:Jt.key),B=h(Jt,B,nt),Ye===null?Xe=Jt:Ye.sibling=Jt,Ye=Jt);return t&&qe.forEach(function(ar){return i(W,ar)}),It&&Er(W,nt),Xe}function Ve(W,B,X,Ee){var Xe=ce(X);if(typeof Xe!="function")throw Error(n(150));if(X=Xe.call(X),X==null)throw Error(n(151));for(var Ye=Xe=null,qe=B,nt=B=0,Jt=null,_t=X.next();qe!==null&&!_t.done;nt++,_t=X.next()){qe.index>nt?(Jt=qe,qe=null):Jt=qe.sibling;var ar=me(W,qe,_t.value,Ee);if(ar===null){qe===null&&(qe=Jt);break}t&&qe&&ar.alternate===null&&i(W,qe),B=h(ar,B,nt),Ye===null?Xe=ar:Ye.sibling=ar,Ye=ar,qe=Jt}if(_t.done)return o(W,qe),It&&Er(W,nt),Xe;if(qe===null){for(;!_t.done;nt++,_t=X.next())_t=_e(W,_t.value,Ee),_t!==null&&(B=h(_t,B,nt),Ye===null?Xe=_t:Ye.sibling=_t,Ye=_t);return It&&Er(W,nt),Xe}for(qe=l(W,qe);!_t.done;nt++,_t=X.next())_t=Ue(qe,W,nt,_t.value,Ee),_t!==null&&(t&&_t.alternate!==null&&qe.delete(_t.key===null?nt:_t.key),B=h(_t,B,nt),Ye===null?Xe=_t:Ye.sibling=_t,Ye=_t);return t&&qe.forEach(function(Jv){return i(W,Jv)}),It&&Er(W,nt),Xe}function zt(W,B,X,Ee){if(typeof X=="object"&&X!==null&&X.type===U&&X.key===null&&(X=X.props.children),typeof X=="object"&&X!==null){switch(X.$$typeof){case J:e:{for(var Xe=X.key,Ye=B;Ye!==null;){if(Ye.key===Xe){if(Xe=X.type,Xe===U){if(Ye.tag===7){o(W,Ye.sibling),B=c(Ye,X.props.children),B.return=W,W=B;break e}}else if(Ye.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===te&&ih(Xe)===Ye.type){o(W,Ye.sibling),B=c(Ye,X.props),B.ref=po(W,Ye,X),B.return=W,W=B;break e}o(W,Ye);break}else i(W,Ye);Ye=Ye.sibling}X.type===U?(B=Lr(X.props.children,W.mode,Ee,X.key),B.return=W,W=B):(Ee=Va(X.type,X.key,X.props,null,W.mode,Ee),Ee.ref=po(W,B,X),Ee.return=W,W=Ee)}return M(W);case z:e:{for(Ye=X.key;B!==null;){if(B.key===Ye)if(B.tag===4&&B.stateNode.containerInfo===X.containerInfo&&B.stateNode.implementation===X.implementation){o(W,B.sibling),B=c(B,X.children||[]),B.return=W,W=B;break e}else{o(W,B);break}else i(W,B);B=B.sibling}B=mc(X,W.mode,Ee),B.return=W,W=B}return M(W);case te:return Ye=X._init,zt(W,B,Ye(X._payload),Ee)}if(b(X))return He(W,B,X,Ee);if(ce(X))return Ve(W,B,X,Ee);_a(W,X)}return typeof X=="string"&&X!==""||typeof X=="number"?(X=""+X,B!==null&&B.tag===6?(o(W,B.sibling),B=c(B,X),B.return=W,W=B):(o(W,B),B=pc(X,W.mode,Ee),B.return=W,W=B),M(W)):o(W,B)}return zt}var cs=rh(!0),sh=rh(!1),xa=$i(null),ya=null,fs=null,Tu=null;function wu(){Tu=fs=ya=null}function Au(t){var i=xa.current;Lt(xa),t._currentValue=i}function Cu(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function ds(t,i){ya=t,Tu=fs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(yn=!0),t.firstContext=null)}function zn(t){var i=t._currentValue;if(Tu!==t)if(t={context:t,memoizedValue:i,next:null},fs===null){if(ya===null)throw Error(n(308));fs=t,ya.dependencies={lanes:0,firstContext:t}}else fs=fs.next=t;return i}var Tr=null;function Ru(t){Tr===null?Tr=[t]:Tr.push(t)}function oh(t,i,o,l){var c=i.interleaved;return c===null?(o.next=o,Ru(i)):(o.next=c.next,c.next=o),i.interleaved=o,Ei(t,l)}function Ei(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Ji=!1;function Pu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ah(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ti(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function er(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(mt&2)!==0){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,Ei(t,o)}return c=l.interleaved,c===null?(i.next=i,Ru(l)):(i.next=c.next,c.next=i),l.interleaved=i,Ei(t,o)}function Sa(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Gl(t,o)}}function lh(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var c=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?c=h=M:h=h.next=M,o=o.next}while(o!==null);h===null?c=h=i:h=h.next=i}else c=h=i;o={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Ma(t,i,o,l){var c=t.updateQueue;Ji=!1;var h=c.firstBaseUpdate,M=c.lastBaseUpdate,L=c.shared.pending;if(L!==null){c.shared.pending=null;var F=L,Z=F.next;F.next=null,M===null?h=Z:M.next=Z,M=F;var ge=t.alternate;ge!==null&&(ge=ge.updateQueue,L=ge.lastBaseUpdate,L!==M&&(L===null?ge.firstBaseUpdate=Z:L.next=Z,ge.lastBaseUpdate=F))}if(h!==null){var _e=c.baseState;M=0,ge=Z=F=null,L=h;do{var me=L.lane,Ue=L.eventTime;if((l&me)===me){ge!==null&&(ge=ge.next={eventTime:Ue,lane:0,tag:L.tag,payload:L.payload,callback:L.callback,next:null});e:{var He=t,Ve=L;switch(me=i,Ue=o,Ve.tag){case 1:if(He=Ve.payload,typeof He=="function"){_e=He.call(Ue,_e,me);break e}_e=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=Ve.payload,me=typeof He=="function"?He.call(Ue,_e,me):He,me==null)break e;_e=se({},_e,me);break e;case 2:Ji=!0}}L.callback!==null&&L.lane!==0&&(t.flags|=64,me=c.effects,me===null?c.effects=[L]:me.push(L))}else Ue={eventTime:Ue,lane:me,tag:L.tag,payload:L.payload,callback:L.callback,next:null},ge===null?(Z=ge=Ue,F=_e):ge=ge.next=Ue,M|=me;if(L=L.next,L===null){if(L=c.shared.pending,L===null)break;me=L,L=me.next,me.next=null,c.lastBaseUpdate=me,c.shared.pending=null}}while(!0);if(ge===null&&(F=_e),c.baseState=F,c.firstBaseUpdate=Z,c.lastBaseUpdate=ge,i=c.shared.interleaved,i!==null){c=i;do M|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);Cr|=M,t.lanes=M,t.memoizedState=_e}}function uh(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],c=l.callback;if(c!==null){if(l.callback=null,l=o,typeof c!="function")throw Error(n(191,c));c.call(l)}}}var mo={},ci=$i(mo),go=$i(mo),vo=$i(mo);function wr(t){if(t===mo)throw Error(n(174));return t}function bu(t,i){switch(Pt(vo,i),Pt(go,t),Pt(ci,mo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ae(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ae(i,t)}Lt(ci),Pt(ci,i)}function hs(){Lt(ci),Lt(go),Lt(vo)}function ch(t){wr(vo.current);var i=wr(ci.current),o=Ae(i,t.type);i!==o&&(Pt(go,t),Pt(ci,o))}function Lu(t){go.current===t&&(Lt(ci),Lt(go))}var Ft=$i(0);function Ea(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Du=[];function Nu(){for(var t=0;t<Du.length;t++)Du[t]._workInProgressVersionPrimary=null;Du.length=0}var Ta=N.ReactCurrentDispatcher,Iu=N.ReactCurrentBatchConfig,Ar=0,Ot=null,Xt=null,Zt=null,wa=!1,_o=!1,xo=0,Sv=0;function un(){throw Error(n(321))}function Uu(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Yn(t[o],i[o]))return!1;return!0}function Fu(t,i,o,l,c,h){if(Ar=h,Ot=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ta.current=t===null||t.memoizedState===null?wv:Av,t=o(l,c),_o){h=0;do{if(_o=!1,xo=0,25<=h)throw Error(n(301));h+=1,Zt=Xt=null,i.updateQueue=null,Ta.current=Cv,t=o(l,c)}while(_o)}if(Ta.current=Ra,i=Xt!==null&&Xt.next!==null,Ar=0,Zt=Xt=Ot=null,wa=!1,i)throw Error(n(300));return t}function Ou(){var t=xo!==0;return xo=0,t}function fi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zt===null?Ot.memoizedState=Zt=t:Zt=Zt.next=t,Zt}function Hn(){if(Xt===null){var t=Ot.alternate;t=t!==null?t.memoizedState:null}else t=Xt.next;var i=Zt===null?Ot.memoizedState:Zt.next;if(i!==null)Zt=i,Xt=t;else{if(t===null)throw Error(n(310));Xt=t,t={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},Zt===null?Ot.memoizedState=Zt=t:Zt=Zt.next=t}return Zt}function yo(t,i){return typeof i=="function"?i(t):i}function ku(t){var i=Hn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=Xt,c=l.baseQueue,h=o.pending;if(h!==null){if(c!==null){var M=c.next;c.next=h.next,h.next=M}l.baseQueue=c=h,o.pending=null}if(c!==null){h=c.next,l=l.baseState;var L=M=null,F=null,Z=h;do{var ge=Z.lane;if((Ar&ge)===ge)F!==null&&(F=F.next={lane:0,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),l=Z.hasEagerState?Z.eagerState:t(l,Z.action);else{var _e={lane:ge,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null};F===null?(L=F=_e,M=l):F=F.next=_e,Ot.lanes|=ge,Cr|=ge}Z=Z.next}while(Z!==null&&Z!==h);F===null?M=l:F.next=L,Yn(l,i.memoizedState)||(yn=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=F,o.lastRenderedState=l}if(t=o.interleaved,t!==null){c=t;do h=c.lane,Ot.lanes|=h,Cr|=h,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Bu(t){var i=Hn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,c=o.pending,h=i.memoizedState;if(c!==null){o.pending=null;var M=c=c.next;do h=t(h,M.action),M=M.next;while(M!==c);Yn(h,i.memoizedState)||(yn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,l]}function fh(){}function dh(t,i){var o=Ot,l=Hn(),c=i(),h=!Yn(l.memoizedState,c);if(h&&(l.memoizedState=c,yn=!0),l=l.queue,zu(mh.bind(null,o,l,t),[t]),l.getSnapshot!==i||h||Zt!==null&&Zt.memoizedState.tag&1){if(o.flags|=2048,So(9,ph.bind(null,o,l,c,i),void 0,null),Qt===null)throw Error(n(349));(Ar&30)!==0||hh(o,i,c)}return c}function hh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Ot.updateQueue,i===null?(i={lastEffect:null,stores:null},Ot.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function ph(t,i,o,l){i.value=o,i.getSnapshot=l,gh(i)&&vh(t)}function mh(t,i,o){return o(function(){gh(i)&&vh(t)})}function gh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Yn(t,o)}catch{return!0}}function vh(t){var i=Ei(t,1);i!==null&&Qn(i,t,1,-1)}function _h(t){var i=fi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yo,lastRenderedState:t},i.queue=t,t=t.dispatch=Tv.bind(null,Ot,t),[i.memoizedState,t]}function So(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=Ot.updateQueue,i===null?(i={lastEffect:null,stores:null},Ot.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function xh(){return Hn().memoizedState}function Aa(t,i,o,l){var c=fi();Ot.flags|=t,c.memoizedState=So(1|i,o,void 0,l===void 0?null:l)}function Ca(t,i,o,l){var c=Hn();l=l===void 0?null:l;var h=void 0;if(Xt!==null){var M=Xt.memoizedState;if(h=M.destroy,l!==null&&Uu(l,M.deps)){c.memoizedState=So(i,o,h,l);return}}Ot.flags|=t,c.memoizedState=So(1|i,o,h,l)}function yh(t,i){return Aa(8390656,8,t,i)}function zu(t,i){return Ca(2048,8,t,i)}function Sh(t,i){return Ca(4,2,t,i)}function Mh(t,i){return Ca(4,4,t,i)}function Eh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Th(t,i,o){return o=o!=null?o.concat([t]):null,Ca(4,4,Eh.bind(null,i,t),o)}function Hu(){}function wh(t,i){var o=Hn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Uu(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function Ah(t,i){var o=Hn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Uu(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function Ch(t,i,o){return(Ar&21)===0?(t.baseState&&(t.baseState=!1,yn=!0),t.memoizedState=o):(Yn(o,i)||(o=$r(),Ot.lanes|=o,Cr|=o,t.baseState=!0),i)}function Mv(t,i){var o=Et;Et=o!==0&&4>o?o:4,t(!0);var l=Iu.transition;Iu.transition={};try{t(!1),i()}finally{Et=o,Iu.transition=l}}function Rh(){return Hn().memoizedState}function Ev(t,i,o){var l=rr(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},Ph(t))bh(i,o);else if(o=oh(t,i,o,l),o!==null){var c=mn();Qn(o,t,l,c),Lh(o,i,l)}}function Tv(t,i,o){var l=rr(t),c={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(Ph(t))bh(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var M=i.lastRenderedState,L=h(M,o);if(c.hasEagerState=!0,c.eagerState=L,Yn(L,M)){var F=i.interleaved;F===null?(c.next=c,Ru(i)):(c.next=F.next,F.next=c),i.interleaved=c;return}}catch{}o=oh(t,i,c,l),o!==null&&(c=mn(),Qn(o,t,l,c),Lh(o,i,l))}}function Ph(t){var i=t.alternate;return t===Ot||i!==null&&i===Ot}function bh(t,i){_o=wa=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Lh(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Gl(t,o)}}var Ra={readContext:zn,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useInsertionEffect:un,useLayoutEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useMutableSource:un,useSyncExternalStore:un,useId:un,unstable_isNewReconciler:!1},wv={readContext:zn,useCallback:function(t,i){return fi().memoizedState=[t,i===void 0?null:i],t},useContext:zn,useEffect:yh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Aa(4194308,4,Eh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Aa(4194308,4,t,i)},useInsertionEffect:function(t,i){return Aa(4,2,t,i)},useMemo:function(t,i){var o=fi();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=fi();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=Ev.bind(null,Ot,t),[l.memoizedState,t]},useRef:function(t){var i=fi();return t={current:t},i.memoizedState=t},useState:_h,useDebugValue:Hu,useDeferredValue:function(t){return fi().memoizedState=t},useTransition:function(){var t=_h(!1),i=t[0];return t=Mv.bind(null,t[1]),fi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=Ot,c=fi();if(It){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),Qt===null)throw Error(n(349));(Ar&30)!==0||hh(l,i,o)}c.memoizedState=o;var h={value:o,getSnapshot:i};return c.queue=h,yh(mh.bind(null,l,h,t),[t]),l.flags|=2048,So(9,ph.bind(null,l,h,o,i),void 0,null),o},useId:function(){var t=fi(),i=Qt.identifierPrefix;if(It){var o=Mi,l=Si;o=(l&~(1<<32-ke(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=xo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=Sv++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Av={readContext:zn,useCallback:wh,useContext:zn,useEffect:zu,useImperativeHandle:Th,useInsertionEffect:Sh,useLayoutEffect:Mh,useMemo:Ah,useReducer:ku,useRef:xh,useState:function(){return ku(yo)},useDebugValue:Hu,useDeferredValue:function(t){var i=Hn();return Ch(i,Xt.memoizedState,t)},useTransition:function(){var t=ku(yo)[0],i=Hn().memoizedState;return[t,i]},useMutableSource:fh,useSyncExternalStore:dh,useId:Rh,unstable_isNewReconciler:!1},Cv={readContext:zn,useCallback:wh,useContext:zn,useEffect:zu,useImperativeHandle:Th,useInsertionEffect:Sh,useLayoutEffect:Mh,useMemo:Ah,useReducer:Bu,useRef:xh,useState:function(){return Bu(yo)},useDebugValue:Hu,useDeferredValue:function(t){var i=Hn();return Xt===null?i.memoizedState=t:Ch(i,Xt.memoizedState,t)},useTransition:function(){var t=Bu(yo)[0],i=Hn().memoizedState;return[t,i]},useMutableSource:fh,useSyncExternalStore:dh,useId:Rh,unstable_isNewReconciler:!1};function Kn(t,i){if(t&&t.defaultProps){i=se({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Vu(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:se({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Pa={isMounted:function(t){return(t=t._reactInternals)?vi(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=mn(),c=rr(t),h=Ti(l,c);h.payload=i,o!=null&&(h.callback=o),i=er(t,h,c),i!==null&&(Qn(i,t,c,l),Sa(i,t,c))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=mn(),c=rr(t),h=Ti(l,c);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=er(t,h,c),i!==null&&(Qn(i,t,c,l),Sa(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=mn(),l=rr(t),c=Ti(o,l);c.tag=2,i!=null&&(c.callback=i),i=er(t,c,l),i!==null&&(Qn(i,t,l,o),Sa(i,t,l))}};function Dh(t,i,o,l,c,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,M):i.prototype&&i.prototype.isPureReactComponent?!oo(o,l)||!oo(c,h):!0}function Nh(t,i,o){var l=!1,c=Zi,h=i.contextType;return typeof h=="object"&&h!==null?h=zn(h):(c=xn(i)?Sr:ln.current,l=i.contextTypes,h=(l=l!=null)?os(t,c):Zi),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Pa,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function Ih(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&Pa.enqueueReplaceState(i,i.state,null)}function Gu(t,i,o,l){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},Pu(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=zn(h):(h=xn(i)?Sr:ln.current,c.context=os(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Vu(t,i,h,o),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&Pa.enqueueReplaceState(c,c.state,null),Ma(t,o,c,l),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function ps(t,i){try{var o="",l=i;do o+=ae(l),l=l.return;while(l);var c=o}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function Wu(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Xu(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var Rv=typeof WeakMap=="function"?WeakMap:Map;function Uh(t,i,o){o=Ti(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){Fa||(Fa=!0,oc=l),Xu(t,i)},o}function Fh(t,i,o){o=Ti(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=i.value;o.payload=function(){return l(c)},o.callback=function(){Xu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Xu(t,i),typeof l!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function Oh(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new Rv;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(o)||(c.add(o),t=Vv.bind(null,t,i,o),i.then(t,t))}function kh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Bh(t,i,o,l,c){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ti(-1,1),i.tag=2,er(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=c,t)}var Pv=N.ReactCurrentOwner,yn=!1;function pn(t,i,o,l){i.child=t===null?sh(i,null,o,l):cs(i,t.child,o,l)}function zh(t,i,o,l,c){o=o.render;var h=i.ref;return ds(i,c),l=Fu(t,i,o,l,h,c),o=Ou(),t!==null&&!yn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,wi(t,i,c)):(It&&o&&xu(i),i.flags|=1,pn(t,i,l,c),i.child)}function Hh(t,i,o,l,c){if(t===null){var h=o.type;return typeof h=="function"&&!hc(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,Vh(t,i,h,l,c)):(t=Va(o.type,null,l,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&c)===0){var M=h.memoizedProps;if(o=o.compare,o=o!==null?o:oo,o(M,l)&&t.ref===i.ref)return wi(t,i,c)}return i.flags|=1,t=or(h,l),t.ref=i.ref,t.return=i,i.child=t}function Vh(t,i,o,l,c){if(t!==null){var h=t.memoizedProps;if(oo(h,l)&&t.ref===i.ref)if(yn=!1,i.pendingProps=l=h,(t.lanes&c)!==0)(t.flags&131072)!==0&&(yn=!0);else return i.lanes=t.lanes,wi(t,i,c)}return ju(t,i,o,l,c)}function Gh(t,i,o){var l=i.pendingProps,c=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pt(gs,In),In|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Pt(gs,In),In|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:o,Pt(gs,In),In|=l}else h!==null?(l=h.baseLanes|o,i.memoizedState=null):l=o,Pt(gs,In),In|=l;return pn(t,i,c,o),i.child}function Wh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function ju(t,i,o,l,c){var h=xn(o)?Sr:ln.current;return h=os(i,h),ds(i,c),o=Fu(t,i,o,l,h,c),l=Ou(),t!==null&&!yn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,wi(t,i,c)):(It&&l&&xu(i),i.flags|=1,pn(t,i,o,c),i.child)}function Xh(t,i,o,l,c){if(xn(o)){var h=!0;ha(i)}else h=!1;if(ds(i,c),i.stateNode===null)La(t,i),Nh(i,o,l),Gu(i,o,l,c),l=!0;else if(t===null){var M=i.stateNode,L=i.memoizedProps;M.props=L;var F=M.context,Z=o.contextType;typeof Z=="object"&&Z!==null?Z=zn(Z):(Z=xn(o)?Sr:ln.current,Z=os(i,Z));var ge=o.getDerivedStateFromProps,_e=typeof ge=="function"||typeof M.getSnapshotBeforeUpdate=="function";_e||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==l||F!==Z)&&Ih(i,M,l,Z),Ji=!1;var me=i.memoizedState;M.state=me,Ma(i,l,M,c),F=i.memoizedState,L!==l||me!==F||_n.current||Ji?(typeof ge=="function"&&(Vu(i,o,ge,l),F=i.memoizedState),(L=Ji||Dh(i,o,L,l,me,F,Z))?(_e||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=F),M.props=l,M.state=F,M.context=Z,l=L):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,ah(t,i),L=i.memoizedProps,Z=i.type===i.elementType?L:Kn(i.type,L),M.props=Z,_e=i.pendingProps,me=M.context,F=o.contextType,typeof F=="object"&&F!==null?F=zn(F):(F=xn(o)?Sr:ln.current,F=os(i,F));var Ue=o.getDerivedStateFromProps;(ge=typeof Ue=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==_e||me!==F)&&Ih(i,M,l,F),Ji=!1,me=i.memoizedState,M.state=me,Ma(i,l,M,c);var He=i.memoizedState;L!==_e||me!==He||_n.current||Ji?(typeof Ue=="function"&&(Vu(i,o,Ue,l),He=i.memoizedState),(Z=Ji||Dh(i,o,Z,l,me,He,F)||!1)?(ge||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,He,F),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,He,F)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||L===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=He),M.props=l,M.state=He,M.context=F,l=Z):(typeof M.componentDidUpdate!="function"||L===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),l=!1)}return Yu(t,i,o,l,h,c)}function Yu(t,i,o,l,c,h){Wh(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return c&&$d(i,o,!1),wi(t,i,h);l=i.stateNode,Pv.current=i;var L=M&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=cs(i,t.child,null,h),i.child=cs(i,null,L,h)):pn(t,i,L,h),i.memoizedState=l.state,c&&$d(i,o,!0),i.child}function jh(t){var i=t.stateNode;i.pendingContext?qd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&qd(t,i.context,!1),bu(t,i.containerInfo)}function Yh(t,i,o,l,c){return us(),Eu(c),i.flags|=256,pn(t,i,o,l),i.child}var qu={dehydrated:null,treeContext:null,retryLane:0};function Ku(t){return{baseLanes:t,cachePool:null,transitions:null}}function qh(t,i,o){var l=i.pendingProps,c=Ft.current,h=!1,M=(i.flags&128)!==0,L;if((L=M)||(L=t!==null&&t.memoizedState===null?!1:(c&2)!==0),L?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Pt(Ft,c&1),t===null)return Mu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,h?(l=i.mode,h=i.child,M={mode:"hidden",children:M},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=M):h=Ga(M,l,0,null),t=Lr(t,l,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Ku(o),i.memoizedState=qu,t):$u(i,M));if(c=t.memoizedState,c!==null&&(L=c.dehydrated,L!==null))return bv(t,i,M,l,L,c,o);if(h){h=l.fallback,M=i.mode,c=t.child,L=c.sibling;var F={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==c?(l=i.child,l.childLanes=0,l.pendingProps=F,i.deletions=null):(l=or(c,F),l.subtreeFlags=c.subtreeFlags&14680064),L!==null?h=or(L,h):(h=Lr(h,M,o,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,M=t.child.memoizedState,M=M===null?Ku(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},h.memoizedState=M,h.childLanes=t.childLanes&~o,i.memoizedState=qu,l}return h=t.child,t=h.sibling,l=or(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function $u(t,i){return i=Ga({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function ba(t,i,o,l){return l!==null&&Eu(l),cs(i,t.child,null,o),t=$u(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function bv(t,i,o,l,c,h,M){if(o)return i.flags&256?(i.flags&=-257,l=Wu(Error(n(422))),ba(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,c=i.mode,l=Ga({mode:"visible",children:l.children},c,0,null),h=Lr(h,c,M,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&cs(i,t.child,null,M),i.child.memoizedState=Ku(M),i.memoizedState=qu,h);if((i.mode&1)===0)return ba(t,i,M,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var L=l.dgst;return l=L,h=Error(n(419)),l=Wu(h,l,void 0),ba(t,i,M,l)}if(L=(M&t.childLanes)!==0,yn||L){if(l=Qt,l!==null){switch(M&-M){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(l.suspendedLanes|M))!==0?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,Ei(t,c),Qn(l,t,c,-1))}return dc(),l=Wu(Error(n(421))),ba(t,i,M,l)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=Gv.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,Nn=Ki(c.nextSibling),Dn=i,It=!0,qn=null,t!==null&&(kn[Bn++]=Si,kn[Bn++]=Mi,kn[Bn++]=Mr,Si=t.id,Mi=t.overflow,Mr=i),i=$u(i,l.children),i.flags|=4096,i)}function Kh(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Cu(t.return,i,o)}function Zu(t,i,o,l,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=o,h.tailMode=c)}function $h(t,i,o){var l=i.pendingProps,c=l.revealOrder,h=l.tail;if(pn(t,i,l.children,o),l=Ft.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Kh(t,o,i);else if(t.tag===19)Kh(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Pt(Ft,l),(i.mode&1)===0)i.memoizedState=null;else switch(c){case"forwards":for(o=i.child,c=null;o!==null;)t=o.alternate,t!==null&&Ea(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=i.child,i.child=null):(c=o.sibling,o.sibling=null),Zu(i,!1,c,o,h);break;case"backwards":for(o=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&Ea(t)===null){i.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}Zu(i,!0,o,null,h);break;case"together":Zu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function La(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function wi(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Cr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=or(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=or(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function Lv(t,i,o){switch(i.tag){case 3:jh(i),us();break;case 5:ch(i);break;case 1:xn(i.type)&&ha(i);break;case 4:bu(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,c=i.memoizedProps.value;Pt(xa,l._currentValue),l._currentValue=c;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Pt(Ft,Ft.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?qh(t,i,o):(Pt(Ft,Ft.current&1),t=wi(t,i,o),t!==null?t.sibling:null);Pt(Ft,Ft.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return $h(t,i,o);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Pt(Ft,Ft.current),l)break;return null;case 22:case 23:return i.lanes=0,Gh(t,i,o)}return wi(t,i,o)}var Zh,Qu,Qh,Jh;Zh=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Qu=function(){},Qh=function(t,i,o,l){var c=t.memoizedProps;if(c!==l){t=i.stateNode,wr(ci.current);var h=null;switch(o){case"input":c=tn(t,c),l=tn(t,l),h=[];break;case"select":c=se({},c,{value:void 0}),l=se({},l,{value:void 0}),h=[];break;case"textarea":c=q(t,c),l=q(t,l),h=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=ca)}it(o,l);var M;o=null;for(Z in c)if(!l.hasOwnProperty(Z)&&c.hasOwnProperty(Z)&&c[Z]!=null)if(Z==="style"){var L=c[Z];for(M in L)L.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else Z!=="dangerouslySetInnerHTML"&&Z!=="children"&&Z!=="suppressContentEditableWarning"&&Z!=="suppressHydrationWarning"&&Z!=="autoFocus"&&(a.hasOwnProperty(Z)?h||(h=[]):(h=h||[]).push(Z,null));for(Z in l){var F=l[Z];if(L=c?.[Z],l.hasOwnProperty(Z)&&F!==L&&(F!=null||L!=null))if(Z==="style")if(L){for(M in L)!L.hasOwnProperty(M)||F&&F.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in F)F.hasOwnProperty(M)&&L[M]!==F[M]&&(o||(o={}),o[M]=F[M])}else o||(h||(h=[]),h.push(Z,o)),o=F;else Z==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,L=L?L.__html:void 0,F!=null&&L!==F&&(h=h||[]).push(Z,F)):Z==="children"?typeof F!="string"&&typeof F!="number"||(h=h||[]).push(Z,""+F):Z!=="suppressContentEditableWarning"&&Z!=="suppressHydrationWarning"&&(a.hasOwnProperty(Z)?(F!=null&&Z==="onScroll"&&bt("scroll",t),h||L===F||(h=[])):(h=h||[]).push(Z,F))}o&&(h=h||[]).push("style",o);var Z=h;(i.updateQueue=Z)&&(i.flags|=4)}},Jh=function(t,i,o,l){o!==l&&(i.flags|=4)};function Mo(t,i){if(!It)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function cn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function Dv(t,i,o){var l=i.pendingProps;switch(yu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(i),null;case 1:return xn(i.type)&&da(),cn(i),null;case 3:return l=i.stateNode,hs(),Lt(_n),Lt(ln),Nu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(va(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,qn!==null&&(uc(qn),qn=null))),Qu(t,i),cn(i),null;case 5:Lu(i);var c=wr(vo.current);if(o=i.type,t!==null&&i.stateNode!=null)Qh(t,i,o,l,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return cn(i),null}if(t=wr(ci.current),va(i)){l=i.stateNode,o=i.type;var h=i.memoizedProps;switch(l[ui]=i,l[fo]=h,t=(i.mode&1)!==0,o){case"dialog":bt("cancel",l),bt("close",l);break;case"iframe":case"object":case"embed":bt("load",l);break;case"video":case"audio":for(c=0;c<lo.length;c++)bt(lo[c],l);break;case"source":bt("error",l);break;case"img":case"image":case"link":bt("error",l),bt("load",l);break;case"details":bt("toggle",l);break;case"input":at(l,h),bt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},bt("invalid",l);break;case"textarea":he(l,h),bt("invalid",l)}it(o,h),c=null;for(var M in h)if(h.hasOwnProperty(M)){var L=h[M];M==="children"?typeof L=="string"?l.textContent!==L&&(h.suppressHydrationWarning!==!0&&ua(l.textContent,L,t),c=["children",L]):typeof L=="number"&&l.textContent!==""+L&&(h.suppressHydrationWarning!==!0&&ua(l.textContent,L,t),c=["children",""+L]):a.hasOwnProperty(M)&&L!=null&&M==="onScroll"&&bt("scroll",l)}switch(o){case"input":pt(l),Tt(l,h,!0);break;case"textarea":pt(l),de(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=ca)}l=c,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=je(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(o,{is:l.is}):(t=M.createElement(o),o==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,o),t[ui]=i,t[fo]=l,Zh(t,i,!1,!1),i.stateNode=t;e:{switch(M=St(o,l),o){case"dialog":bt("cancel",t),bt("close",t),c=l;break;case"iframe":case"object":case"embed":bt("load",t),c=l;break;case"video":case"audio":for(c=0;c<lo.length;c++)bt(lo[c],t);c=l;break;case"source":bt("error",t),c=l;break;case"img":case"image":case"link":bt("error",t),bt("load",t),c=l;break;case"details":bt("toggle",t),c=l;break;case"input":at(t,l),c=tn(t,l),bt("invalid",t);break;case"option":c=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},c=se({},l,{value:void 0}),bt("invalid",t);break;case"textarea":he(t,l),c=q(t,l),bt("invalid",t);break;default:c=l}it(o,c),L=c;for(h in L)if(L.hasOwnProperty(h)){var F=L[h];h==="style"?Be(t,F):h==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,F!=null&&dt(t,F)):h==="children"?typeof F=="string"?(o!=="textarea"||F!=="")&&Me(t,F):typeof F=="number"&&Me(t,""+F):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?F!=null&&h==="onScroll"&&bt("scroll",t):F!=null&&P(t,h,F,M))}switch(o){case"input":pt(t),Tt(t,l,!1);break;case"textarea":pt(t),de(t);break;case"option":l.value!=null&&t.setAttribute("value",""+be(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?T(t,!!l.multiple,h,!1):l.defaultValue!=null&&T(t,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=ca)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return cn(i),null;case 6:if(t&&i.stateNode!=null)Jh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=wr(vo.current),wr(ci.current),va(i)){if(l=i.stateNode,o=i.memoizedProps,l[ui]=i,(h=l.nodeValue!==o)&&(t=Dn,t!==null))switch(t.tag){case 3:ua(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ua(l.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[ui]=i,i.stateNode=l}return cn(i),null;case 13:if(Lt(Ft),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(It&&Nn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)nh(),us(),i.flags|=98560,h=!1;else if(h=va(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[ui]=i}else us(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;cn(i),h=!1}else qn!==null&&(uc(qn),qn=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Ft.current&1)!==0?jt===0&&(jt=3):dc())),i.updateQueue!==null&&(i.flags|=4),cn(i),null);case 4:return hs(),Qu(t,i),t===null&&uo(i.stateNode.containerInfo),cn(i),null;case 10:return Au(i.type._context),cn(i),null;case 17:return xn(i.type)&&da(),cn(i),null;case 19:if(Lt(Ft),h=i.memoizedState,h===null)return cn(i),null;if(l=(i.flags&128)!==0,M=h.rendering,M===null)if(l)Mo(h,!1);else{if(jt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=Ea(t),M!==null){for(i.flags|=128,Mo(h,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)h=o,t=l,h.flags&=14680066,M=h.alternate,M===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=M.childLanes,h.lanes=M.lanes,h.child=M.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=M.memoizedProps,h.memoizedState=M.memoizedState,h.updateQueue=M.updateQueue,h.type=M.type,t=M.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Pt(Ft,Ft.current&1|2),i.child}t=t.sibling}h.tail!==null&&we()>vs&&(i.flags|=128,l=!0,Mo(h,!1),i.lanes=4194304)}else{if(!l)if(t=Ea(M),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Mo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!M.alternate&&!It)return cn(i),null}else 2*we()-h.renderingStartTime>vs&&o!==1073741824&&(i.flags|=128,l=!0,Mo(h,!1),i.lanes=4194304);h.isBackwards?(M.sibling=i.child,i.child=M):(o=h.last,o!==null?o.sibling=M:i.child=M,h.last=M)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=we(),i.sibling=null,o=Ft.current,Pt(Ft,l?o&1|2:o&1),i):(cn(i),null);case 22:case 23:return fc(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(In&1073741824)!==0&&(cn(i),i.subtreeFlags&6&&(i.flags|=8192)):cn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Nv(t,i){switch(yu(i),i.tag){case 1:return xn(i.type)&&da(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return hs(),Lt(_n),Lt(ln),Nu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Lu(i),null;case 13:if(Lt(Ft),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));us()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Lt(Ft),null;case 4:return hs(),null;case 10:return Au(i.type._context),null;case 22:case 23:return fc(),null;case 24:return null;default:return null}}var Da=!1,fn=!1,Iv=typeof WeakSet=="function"?WeakSet:Set,ze=null;function ms(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){kt(t,i,l)}else o.current=null}function Ju(t,i,o){try{o()}catch(l){kt(t,i,l)}}var ep=!1;function Uv(t,i){if(fu=Qo,t=Dd(),iu(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var c=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var M=0,L=-1,F=-1,Z=0,ge=0,_e=t,me=null;t:for(;;){for(var Ue;_e!==o||c!==0&&_e.nodeType!==3||(L=M+c),_e!==h||l!==0&&_e.nodeType!==3||(F=M+l),_e.nodeType===3&&(M+=_e.nodeValue.length),(Ue=_e.firstChild)!==null;)me=_e,_e=Ue;for(;;){if(_e===t)break t;if(me===o&&++Z===c&&(L=M),me===h&&++ge===l&&(F=M),(Ue=_e.nextSibling)!==null)break;_e=me,me=_e.parentNode}_e=Ue}o=L===-1||F===-1?null:{start:L,end:F}}else o=null}o=o||{start:0,end:0}}else o=null;for(du={focusedElem:t,selectionRange:o},Qo=!1,ze=i;ze!==null;)if(i=ze,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,ze=t;else for(;ze!==null;){i=ze;try{var He=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var Ve=He.memoizedProps,zt=He.memoizedState,W=i.stateNode,B=W.getSnapshotBeforeUpdate(i.elementType===i.type?Ve:Kn(i.type,Ve),zt);W.__reactInternalSnapshotBeforeUpdate=B}break;case 3:var X=i.stateNode.containerInfo;X.nodeType===1?X.textContent="":X.nodeType===9&&X.documentElement&&X.removeChild(X.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){kt(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,ze=t;break}ze=i.return}return He=ep,ep=!1,He}function Eo(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&Ju(i,o,h)}c=c.next}while(c!==l)}}function Na(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function ec(t){var i=t.ref;if(i!==null){var o=t.stateNode;t.tag,t=o,typeof i=="function"?i(t):i.current=t}}function tp(t){var i=t.alternate;i!==null&&(t.alternate=null,tp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[ui],delete i[fo],delete i[gu],delete i[vv],delete i[_v])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function np(t){return t.tag===5||t.tag===3||t.tag===4}function ip(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||np(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function tc(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=ca));else if(l!==4&&(t=t.child,t!==null))for(tc(t,i,o),t=t.sibling;t!==null;)tc(t,i,o),t=t.sibling}function nc(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(nc(t,i,o),t=t.sibling;t!==null;)nc(t,i,o),t=t.sibling}var rn=null,$n=!1;function tr(t,i,o){for(o=o.child;o!==null;)rp(t,i,o),o=o.sibling}function rp(t,i,o){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(Ct,o)}catch{}switch(o.tag){case 5:fn||ms(o,i);case 6:var l=rn,c=$n;rn=null,tr(t,i,o),rn=l,$n=c,rn!==null&&($n?(t=rn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):rn.removeChild(o.stateNode));break;case 18:rn!==null&&($n?(t=rn,o=o.stateNode,t.nodeType===8?mu(t.parentNode,o):t.nodeType===1&&mu(t,o),eo(t)):mu(rn,o.stateNode));break;case 4:l=rn,c=$n,rn=o.stateNode.containerInfo,$n=!0,tr(t,i,o),rn=l,$n=c;break;case 0:case 11:case 14:case 15:if(!fn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var h=c,M=h.destroy;h=h.tag,M!==void 0&&((h&2)!==0||(h&4)!==0)&&Ju(o,i,M),c=c.next}while(c!==l)}tr(t,i,o);break;case 1:if(!fn&&(ms(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(L){kt(o,i,L)}tr(t,i,o);break;case 21:tr(t,i,o);break;case 22:o.mode&1?(fn=(l=fn)||o.memoizedState!==null,tr(t,i,o),fn=l):tr(t,i,o);break;default:tr(t,i,o)}}function sp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new Iv),i.forEach(function(l){var c=Wv.bind(null,t,l);o.has(l)||(o.add(l),l.then(c,c))})}}function Zn(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var c=o[l];try{var h=t,M=i,L=M;e:for(;L!==null;){switch(L.tag){case 5:rn=L.stateNode,$n=!1;break e;case 3:rn=L.stateNode.containerInfo,$n=!0;break e;case 4:rn=L.stateNode.containerInfo,$n=!0;break e}L=L.return}if(rn===null)throw Error(n(160));rp(h,M,c),rn=null,$n=!1;var F=c.alternate;F!==null&&(F.return=null),c.return=null}catch(Z){kt(c,i,Z)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)op(i,t),i=i.sibling}function op(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Zn(i,t),di(t),l&4){try{Eo(3,t,t.return),Na(3,t)}catch(Ve){kt(t,t.return,Ve)}try{Eo(5,t,t.return)}catch(Ve){kt(t,t.return,Ve)}}break;case 1:Zn(i,t),di(t),l&512&&o!==null&&ms(o,o.return);break;case 5:if(Zn(i,t),di(t),l&512&&o!==null&&ms(o,o.return),t.flags&32){var c=t.stateNode;try{Me(c,"")}catch(Ve){kt(t,t.return,Ve)}}if(l&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,M=o!==null?o.memoizedProps:h,L=t.type,F=t.updateQueue;if(t.updateQueue=null,F!==null)try{L==="input"&&h.type==="radio"&&h.name!=null&&ft(c,h),St(L,M);var Z=St(L,h);for(M=0;M<F.length;M+=2){var ge=F[M],_e=F[M+1];ge==="style"?Be(c,_e):ge==="dangerouslySetInnerHTML"?dt(c,_e):ge==="children"?Me(c,_e):P(c,ge,_e,Z)}switch(L){case"input":$e(c,h);break;case"textarea":ve(c,h);break;case"select":var me=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var Ue=h.value;Ue!=null?T(c,!!h.multiple,Ue,!1):me!==!!h.multiple&&(h.defaultValue!=null?T(c,!!h.multiple,h.defaultValue,!0):T(c,!!h.multiple,h.multiple?[]:"",!1))}c[fo]=h}catch(Ve){kt(t,t.return,Ve)}}break;case 6:if(Zn(i,t),di(t),l&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(Ve){kt(t,t.return,Ve)}}break;case 3:if(Zn(i,t),di(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{eo(i.containerInfo)}catch(Ve){kt(t,t.return,Ve)}break;case 4:Zn(i,t),di(t);break;case 13:Zn(i,t),di(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(sc=we())),l&4&&sp(t);break;case 22:if(ge=o!==null&&o.memoizedState!==null,t.mode&1?(fn=(Z=fn)||ge,Zn(i,t),fn=Z):Zn(i,t),di(t),l&8192){if(Z=t.memoizedState!==null,(t.stateNode.isHidden=Z)&&!ge&&(t.mode&1)!==0)for(ze=t,ge=t.child;ge!==null;){for(_e=ze=ge;ze!==null;){switch(me=ze,Ue=me.child,me.tag){case 0:case 11:case 14:case 15:Eo(4,me,me.return);break;case 1:ms(me,me.return);var He=me.stateNode;if(typeof He.componentWillUnmount=="function"){l=me,o=me.return;try{i=l,He.props=i.memoizedProps,He.state=i.memoizedState,He.componentWillUnmount()}catch(Ve){kt(l,o,Ve)}}break;case 5:ms(me,me.return);break;case 22:if(me.memoizedState!==null){up(_e);continue}}Ue!==null?(Ue.return=me,ze=Ue):up(_e)}ge=ge.sibling}e:for(ge=null,_e=t;;){if(_e.tag===5){if(ge===null){ge=_e;try{c=_e.stateNode,Z?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(L=_e.stateNode,F=_e.memoizedProps.style,M=F!=null&&F.hasOwnProperty("display")?F.display:null,L.style.display=Je("display",M))}catch(Ve){kt(t,t.return,Ve)}}}else if(_e.tag===6){if(ge===null)try{_e.stateNode.nodeValue=Z?"":_e.memoizedProps}catch(Ve){kt(t,t.return,Ve)}}else if((_e.tag!==22&&_e.tag!==23||_e.memoizedState===null||_e===t)&&_e.child!==null){_e.child.return=_e,_e=_e.child;continue}if(_e===t)break e;for(;_e.sibling===null;){if(_e.return===null||_e.return===t)break e;ge===_e&&(ge=null),_e=_e.return}ge===_e&&(ge=null),_e.sibling.return=_e.return,_e=_e.sibling}}break;case 19:Zn(i,t),di(t),l&4&&sp(t);break;case 21:break;default:Zn(i,t),di(t)}}function di(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(np(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(Me(c,""),l.flags&=-33);var h=ip(t);nc(t,h,c);break;case 3:case 4:var M=l.stateNode.containerInfo,L=ip(t);tc(t,L,M);break;default:throw Error(n(161))}}catch(F){kt(t,t.return,F)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Fv(t,i,o){ze=t,ap(t)}function ap(t,i,o){for(var l=(t.mode&1)!==0;ze!==null;){var c=ze,h=c.child;if(c.tag===22&&l){var M=c.memoizedState!==null||Da;if(!M){var L=c.alternate,F=L!==null&&L.memoizedState!==null||fn;L=Da;var Z=fn;if(Da=M,(fn=F)&&!Z)for(ze=c;ze!==null;)M=ze,F=M.child,M.tag===22&&M.memoizedState!==null?cp(c):F!==null?(F.return=M,ze=F):cp(c);for(;h!==null;)ze=h,ap(h),h=h.sibling;ze=c,Da=L,fn=Z}lp(t)}else(c.subtreeFlags&8772)!==0&&h!==null?(h.return=c,ze=h):lp(t)}}function lp(t){for(;ze!==null;){var i=ze;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:fn||Na(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!fn)if(o===null)l.componentDidMount();else{var c=i.elementType===i.type?o.memoizedProps:Kn(i.type,o.memoizedProps);l.componentDidUpdate(c,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&uh(i,h,l);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}uh(i,M,o)}break;case 5:var L=i.stateNode;if(o===null&&i.flags&4){o=L;var F=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":F.autoFocus&&o.focus();break;case"img":F.src&&(o.src=F.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var Z=i.alternate;if(Z!==null){var ge=Z.memoizedState;if(ge!==null){var _e=ge.dehydrated;_e!==null&&eo(_e)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}fn||i.flags&512&&ec(i)}catch(me){kt(i,i.return,me)}}if(i===t){ze=null;break}if(o=i.sibling,o!==null){o.return=i.return,ze=o;break}ze=i.return}}function up(t){for(;ze!==null;){var i=ze;if(i===t){ze=null;break}var o=i.sibling;if(o!==null){o.return=i.return,ze=o;break}ze=i.return}}function cp(t){for(;ze!==null;){var i=ze;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Na(4,i)}catch(F){kt(i,o,F)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var c=i.return;try{l.componentDidMount()}catch(F){kt(i,c,F)}}var h=i.return;try{ec(i)}catch(F){kt(i,h,F)}break;case 5:var M=i.return;try{ec(i)}catch(F){kt(i,M,F)}}}catch(F){kt(i,i.return,F)}if(i===t){ze=null;break}var L=i.sibling;if(L!==null){L.return=i.return,ze=L;break}ze=i.return}}var Ov=Math.ceil,Ia=N.ReactCurrentDispatcher,ic=N.ReactCurrentOwner,Vn=N.ReactCurrentBatchConfig,mt=0,Qt=null,Vt=null,sn=0,In=0,gs=$i(0),jt=0,To=null,Cr=0,Ua=0,rc=0,wo=null,Sn=null,sc=0,vs=1/0,Ai=null,Fa=!1,oc=null,nr=null,Oa=!1,ir=null,ka=0,Ao=0,ac=null,Ba=-1,za=0;function mn(){return(mt&6)!==0?we():Ba!==-1?Ba:Ba=we()}function rr(t){return(t.mode&1)===0?1:(mt&2)!==0&&sn!==0?sn&-sn:yv.transition!==null?(za===0&&(za=$r()),za):(t=Et,t!==0||(t=window.event,t=t===void 0?16:dd(t.type)),t)}function Qn(t,i,o,l){if(50<Ao)throw Ao=0,ac=null,Error(n(185));Vi(t,o,l),((mt&2)===0||t!==Qt)&&(t===Qt&&((mt&2)===0&&(Ua|=o),jt===4&&sr(t,sn)),Mn(t,l),o===1&&mt===0&&(i.mode&1)===0&&(vs=we()+500,pa&&Qi()))}function Mn(t,i){var o=t.callbackNode;qs(t,i);var l=Rt(t,t===Qt?sn:0);if(l===0)o!==null&&G(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&G(o),i===1)t.tag===0?xv(dp.bind(null,t)):Zd(dp.bind(null,t)),mv(function(){(mt&6)===0&&Qi()}),o=null;else{switch(rd(l)){case 1:o=Ke;break;case 4:o=Ze;break;case 16:o=We;break;case 536870912:o=wt;break;default:o=We}o=yp(o,fp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function fp(t,i){if(Ba=-1,za=0,(mt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(_s()&&t.callbackNode!==o)return null;var l=Rt(t,t===Qt?sn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Ha(t,l);else{i=l;var c=mt;mt|=2;var h=pp();(Qt!==t||sn!==i)&&(Ai=null,vs=we()+500,Pr(t,i));do try{zv();break}catch(L){hp(t,L)}while(!0);wu(),Ia.current=h,mt=c,Vt!==null?i=0:(Qt=null,sn=0,i=jt)}if(i!==0){if(i===2&&(c=an(t),c!==0&&(l=c,i=lc(t,c))),i===1)throw o=To,Pr(t,0),sr(t,l),Mn(t,we()),o;if(i===6)sr(t,l);else{if(c=t.current.alternate,(l&30)===0&&!kv(c)&&(i=Ha(t,l),i===2&&(h=an(t),h!==0&&(l=h,i=lc(t,h))),i===1))throw o=To,Pr(t,0),sr(t,l),Mn(t,we()),o;switch(t.finishedWork=c,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:br(t,Sn,Ai);break;case 3:if(sr(t,l),(l&130023424)===l&&(i=sc+500-we(),10<i)){if(Rt(t,0)!==0)break;if(c=t.suspendedLanes,(c&l)!==l){mn(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=pu(br.bind(null,t,Sn,Ai),i);break}br(t,Sn,Ai);break;case 4:if(sr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,c=-1;0<l;){var M=31-ke(l);h=1<<M,M=i[M],M>c&&(c=M),l&=~h}if(l=c,l=we()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Ov(l/1960))-l,10<l){t.timeoutHandle=pu(br.bind(null,t,Sn,Ai),l);break}br(t,Sn,Ai);break;case 5:br(t,Sn,Ai);break;default:throw Error(n(329))}}}return Mn(t,we()),t.callbackNode===o?fp.bind(null,t):null}function lc(t,i){var o=wo;return t.current.memoizedState.isDehydrated&&(Pr(t,i).flags|=256),t=Ha(t,i),t!==2&&(i=Sn,Sn=o,i!==null&&uc(i)),t}function uc(t){Sn===null?Sn=t:Sn.push.apply(Sn,t)}function kv(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var c=o[l],h=c.getSnapshot;c=c.value;try{if(!Yn(h(),c))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function sr(t,i){for(i&=~rc,i&=~Ua,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-ke(i),l=1<<o;t[o]=-1,i&=~l}}function dp(t){if((mt&6)!==0)throw Error(n(327));_s();var i=Rt(t,0);if((i&1)===0)return Mn(t,we()),null;var o=Ha(t,i);if(t.tag!==0&&o===2){var l=an(t);l!==0&&(i=l,o=lc(t,l))}if(o===1)throw o=To,Pr(t,0),sr(t,i),Mn(t,we()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,br(t,Sn,Ai),Mn(t,we()),null}function cc(t,i){var o=mt;mt|=1;try{return t(i)}finally{mt=o,mt===0&&(vs=we()+500,pa&&Qi())}}function Rr(t){ir!==null&&ir.tag===0&&(mt&6)===0&&_s();var i=mt;mt|=1;var o=Vn.transition,l=Et;try{if(Vn.transition=null,Et=1,t)return t()}finally{Et=l,Vn.transition=o,mt=i,(mt&6)===0&&Qi()}}function fc(){In=gs.current,Lt(gs)}function Pr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,pv(o)),Vt!==null)for(o=Vt.return;o!==null;){var l=o;switch(yu(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&da();break;case 3:hs(),Lt(_n),Lt(ln),Nu();break;case 5:Lu(l);break;case 4:hs();break;case 13:Lt(Ft);break;case 19:Lt(Ft);break;case 10:Au(l.type._context);break;case 22:case 23:fc()}o=o.return}if(Qt=t,Vt=t=or(t.current,null),sn=In=i,jt=0,To=null,rc=Ua=Cr=0,Sn=wo=null,Tr!==null){for(i=0;i<Tr.length;i++)if(o=Tr[i],l=o.interleaved,l!==null){o.interleaved=null;var c=l.next,h=o.pending;if(h!==null){var M=h.next;h.next=c,l.next=M}o.pending=l}Tr=null}return t}function hp(t,i){do{var o=Vt;try{if(wu(),Ta.current=Ra,wa){for(var l=Ot.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}wa=!1}if(Ar=0,Zt=Xt=Ot=null,_o=!1,xo=0,ic.current=null,o===null||o.return===null){jt=1,To=i,Vt=null;break}e:{var h=t,M=o.return,L=o,F=i;if(i=sn,L.flags|=32768,F!==null&&typeof F=="object"&&typeof F.then=="function"){var Z=F,ge=L,_e=ge.tag;if((ge.mode&1)===0&&(_e===0||_e===11||_e===15)){var me=ge.alternate;me?(ge.updateQueue=me.updateQueue,ge.memoizedState=me.memoizedState,ge.lanes=me.lanes):(ge.updateQueue=null,ge.memoizedState=null)}var Ue=kh(M);if(Ue!==null){Ue.flags&=-257,Bh(Ue,M,L,h,i),Ue.mode&1&&Oh(h,Z,i),i=Ue,F=Z;var He=i.updateQueue;if(He===null){var Ve=new Set;Ve.add(F),i.updateQueue=Ve}else He.add(F);break e}else{if((i&1)===0){Oh(h,Z,i),dc();break e}F=Error(n(426))}}else if(It&&L.mode&1){var zt=kh(M);if(zt!==null){(zt.flags&65536)===0&&(zt.flags|=256),Bh(zt,M,L,h,i),Eu(ps(F,L));break e}}h=F=ps(F,L),jt!==4&&(jt=2),wo===null?wo=[h]:wo.push(h),h=M;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var W=Uh(h,F,i);lh(h,W);break e;case 1:L=F;var B=h.type,X=h.stateNode;if((h.flags&128)===0&&(typeof B.getDerivedStateFromError=="function"||X!==null&&typeof X.componentDidCatch=="function"&&(nr===null||!nr.has(X)))){h.flags|=65536,i&=-i,h.lanes|=i;var Ee=Fh(h,L,i);lh(h,Ee);break e}}h=h.return}while(h!==null)}gp(o)}catch(Xe){i=Xe,Vt===o&&o!==null&&(Vt=o=o.return);continue}break}while(!0)}function pp(){var t=Ia.current;return Ia.current=Ra,t===null?Ra:t}function dc(){(jt===0||jt===3||jt===2)&&(jt=4),Qt===null||(Cr&268435455)===0&&(Ua&268435455)===0||sr(Qt,sn)}function Ha(t,i){var o=mt;mt|=2;var l=pp();(Qt!==t||sn!==i)&&(Ai=null,Pr(t,i));do try{Bv();break}catch(c){hp(t,c)}while(!0);if(wu(),mt=o,Ia.current=l,Vt!==null)throw Error(n(261));return Qt=null,sn=0,jt}function Bv(){for(;Vt!==null;)mp(Vt)}function zv(){for(;Vt!==null&&!Te();)mp(Vt)}function mp(t){var i=xp(t.alternate,t,In);t.memoizedProps=t.pendingProps,i===null?gp(t):Vt=i,ic.current=null}function gp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=Dv(o,i,In),o!==null){Vt=o;return}}else{if(o=Nv(o,i),o!==null){o.flags&=32767,Vt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{jt=6,Vt=null;return}}if(i=i.sibling,i!==null){Vt=i;return}Vt=i=t}while(i!==null);jt===0&&(jt=5)}function br(t,i,o){var l=Et,c=Vn.transition;try{Vn.transition=null,Et=1,Hv(t,i,o,l)}finally{Vn.transition=c,Et=l}return null}function Hv(t,i,o,l){do _s();while(ir!==null);if((mt&6)!==0)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(Sg(t,h),t===Qt&&(Vt=Qt=null,sn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Oa||(Oa=!0,yp(We,function(){return _s(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=Vn.transition,Vn.transition=null;var M=Et;Et=1;var L=mt;mt|=4,ic.current=null,Uv(t,o),op(o,t),av(du),Qo=!!fu,du=fu=null,t.current=o,Fv(o),Ne(),mt=L,Et=M,Vn.transition=h}else t.current=o;if(Oa&&(Oa=!1,ir=t,ka=c),h=t.pendingLanes,h===0&&(nr=null),gt(o.stateNode),Mn(t,we()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)c=i[o],l(c.value,{componentStack:c.stack,digest:c.digest});if(Fa)throw Fa=!1,t=oc,oc=null,t;return(ka&1)!==0&&t.tag!==0&&_s(),h=t.pendingLanes,(h&1)!==0?t===ac?Ao++:(Ao=0,ac=t):Ao=0,Qi(),null}function _s(){if(ir!==null){var t=rd(ka),i=Vn.transition,o=Et;try{if(Vn.transition=null,Et=16>t?16:t,ir===null)var l=!1;else{if(t=ir,ir=null,ka=0,(mt&6)!==0)throw Error(n(331));var c=mt;for(mt|=4,ze=t.current;ze!==null;){var h=ze,M=h.child;if((ze.flags&16)!==0){var L=h.deletions;if(L!==null){for(var F=0;F<L.length;F++){var Z=L[F];for(ze=Z;ze!==null;){var ge=ze;switch(ge.tag){case 0:case 11:case 15:Eo(8,ge,h)}var _e=ge.child;if(_e!==null)_e.return=ge,ze=_e;else for(;ze!==null;){ge=ze;var me=ge.sibling,Ue=ge.return;if(tp(ge),ge===Z){ze=null;break}if(me!==null){me.return=Ue,ze=me;break}ze=Ue}}}var He=h.alternate;if(He!==null){var Ve=He.child;if(Ve!==null){He.child=null;do{var zt=Ve.sibling;Ve.sibling=null,Ve=zt}while(Ve!==null)}}ze=h}}if((h.subtreeFlags&2064)!==0&&M!==null)M.return=h,ze=M;else e:for(;ze!==null;){if(h=ze,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Eo(9,h,h.return)}var W=h.sibling;if(W!==null){W.return=h.return,ze=W;break e}ze=h.return}}var B=t.current;for(ze=B;ze!==null;){M=ze;var X=M.child;if((M.subtreeFlags&2064)!==0&&X!==null)X.return=M,ze=X;else e:for(M=B;ze!==null;){if(L=ze,(L.flags&2048)!==0)try{switch(L.tag){case 0:case 11:case 15:Na(9,L)}}catch(Xe){kt(L,L.return,Xe)}if(L===M){ze=null;break e}var Ee=L.sibling;if(Ee!==null){Ee.return=L.return,ze=Ee;break e}ze=L.return}}if(mt=c,Qi(),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(Ct,t)}catch{}l=!0}return l}finally{Et=o,Vn.transition=i}}return!1}function vp(t,i,o){i=ps(o,i),i=Uh(t,i,1),t=er(t,i,1),i=mn(),t!==null&&(Vi(t,1,i),Mn(t,i))}function kt(t,i,o){if(t.tag===3)vp(t,t,o);else for(;i!==null;){if(i.tag===3){vp(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(nr===null||!nr.has(l))){t=ps(o,t),t=Fh(i,t,1),i=er(i,t,1),t=mn(),i!==null&&(Vi(i,1,t),Mn(i,t));break}}i=i.return}}function Vv(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=mn(),t.pingedLanes|=t.suspendedLanes&o,Qt===t&&(sn&o)===o&&(jt===4||jt===3&&(sn&130023424)===sn&&500>we()-sc?Pr(t,0):rc|=o),Mn(t,i)}function _p(t,i){i===0&&((t.mode&1)===0?i=1:(i=$t,$t<<=1,($t&130023424)===0&&($t=4194304)));var o=mn();t=Ei(t,i),t!==null&&(Vi(t,i,o),Mn(t,o))}function Gv(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),_p(t,o)}function Wv(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),_p(t,o)}var xp;xp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||_n.current)yn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return yn=!1,Lv(t,i,o);yn=(t.flags&131072)!==0}else yn=!1,It&&(i.flags&1048576)!==0&&Qd(i,ga,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;La(t,i),t=i.pendingProps;var c=os(i,ln.current);ds(i,o),c=Fu(null,i,l,t,c,o);var h=Ou();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,xn(l)?(h=!0,ha(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,Pu(i),c.updater=Pa,i.stateNode=c,c._reactInternals=i,Gu(i,l,t,o),i=Yu(null,i,l,!0,h,o)):(i.tag=0,It&&h&&xu(i),pn(null,i,c,o),i=i.child),i;case 16:l=i.elementType;e:{switch(La(t,i),t=i.pendingProps,c=l._init,l=c(l._payload),i.type=l,c=i.tag=jv(l),t=Kn(l,t),c){case 0:i=ju(null,i,l,t,o);break e;case 1:i=Xh(null,i,l,t,o);break e;case 11:i=zh(null,i,l,t,o);break e;case 14:i=Hh(null,i,l,Kn(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Kn(l,c),ju(t,i,l,c,o);case 1:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Kn(l,c),Xh(t,i,l,c,o);case 3:e:{if(jh(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,c=h.element,ah(t,i),Ma(i,l,null,o);var M=i.memoizedState;if(l=M.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=ps(Error(n(423)),i),i=Yh(t,i,l,o,c);break e}else if(l!==c){c=ps(Error(n(424)),i),i=Yh(t,i,l,o,c);break e}else for(Nn=Ki(i.stateNode.containerInfo.firstChild),Dn=i,It=!0,qn=null,o=sh(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(us(),l===c){i=wi(t,i,o);break e}pn(t,i,l,o)}i=i.child}return i;case 5:return ch(i),t===null&&Mu(i),l=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,M=c.children,hu(l,c)?M=null:h!==null&&hu(l,h)&&(i.flags|=32),Wh(t,i),pn(t,i,M,o),i.child;case 6:return t===null&&Mu(i),null;case 13:return qh(t,i,o);case 4:return bu(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=cs(i,null,l,o):pn(t,i,l,o),i.child;case 11:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Kn(l,c),zh(t,i,l,c,o);case 7:return pn(t,i,i.pendingProps,o),i.child;case 8:return pn(t,i,i.pendingProps.children,o),i.child;case 12:return pn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,c=i.pendingProps,h=i.memoizedProps,M=c.value,Pt(xa,l._currentValue),l._currentValue=M,h!==null)if(Yn(h.value,M)){if(h.children===c.children&&!_n.current){i=wi(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var L=h.dependencies;if(L!==null){M=h.child;for(var F=L.firstContext;F!==null;){if(F.context===l){if(h.tag===1){F=Ti(-1,o&-o),F.tag=2;var Z=h.updateQueue;if(Z!==null){Z=Z.shared;var ge=Z.pending;ge===null?F.next=F:(F.next=ge.next,ge.next=F),Z.pending=F}}h.lanes|=o,F=h.alternate,F!==null&&(F.lanes|=o),Cu(h.return,o,i),L.lanes|=o;break}F=F.next}}else if(h.tag===10)M=h.type===i.type?null:h.child;else if(h.tag===18){if(M=h.return,M===null)throw Error(n(341));M.lanes|=o,L=M.alternate,L!==null&&(L.lanes|=o),Cu(M,o,i),M=h.sibling}else M=h.child;if(M!==null)M.return=h;else for(M=h;M!==null;){if(M===i){M=null;break}if(h=M.sibling,h!==null){h.return=M.return,M=h;break}M=M.return}h=M}pn(t,i,c.children,o),i=i.child}return i;case 9:return c=i.type,l=i.pendingProps.children,ds(i,o),c=zn(c),l=l(c),i.flags|=1,pn(t,i,l,o),i.child;case 14:return l=i.type,c=Kn(l,i.pendingProps),c=Kn(l.type,c),Hh(t,i,l,c,o);case 15:return Vh(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Kn(l,c),La(t,i),i.tag=1,xn(l)?(t=!0,ha(i)):t=!1,ds(i,o),Nh(i,l,c),Gu(i,l,c,o),Yu(null,i,l,!0,t,o);case 19:return $h(t,i,o);case 22:return Gh(t,i,o)}throw Error(n(156,i.tag))};function yp(t,i){return $(t,i)}function Xv(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(t,i,o,l){return new Xv(t,i,o,l)}function hc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function jv(t){if(typeof t=="function")return hc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===re)return 11;if(t===fe)return 14}return 2}function or(t,i){var o=t.alternate;return o===null?(o=Gn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Va(t,i,o,l,c,h){var M=2;if(l=t,typeof t=="function")hc(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case U:return Lr(o.children,c,h,i);case Y:M=8,c|=8;break;case Se:return t=Gn(12,o,i,c|2),t.elementType=Se,t.lanes=h,t;case ee:return t=Gn(13,o,i,c),t.elementType=ee,t.lanes=h,t;case ue:return t=Gn(19,o,i,c),t.elementType=ue,t.lanes=h,t;case le:return Ga(o,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case E:M=10;break e;case R:M=9;break e;case re:M=11;break e;case fe:M=14;break e;case te:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Gn(M,o,i,c),i.elementType=t,i.type=l,i.lanes=h,i}function Lr(t,i,o,l){return t=Gn(7,t,l,i),t.lanes=o,t}function Ga(t,i,o,l){return t=Gn(22,t,l,i),t.elementType=le,t.lanes=o,t.stateNode={isHidden:!1},t}function pc(t,i,o){return t=Gn(6,t,null,i),t.lanes=o,t}function mc(t,i,o){return i=Gn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Yv(t,i,o,l,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ks(0),this.expirationTimes=Ks(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ks(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function gc(t,i,o,l,c,h,M,L,F){return t=new Yv(t,i,o,L,F),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Gn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pu(h),t}function qv(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function Sp(t){if(!t)return Zi;t=t._reactInternals;e:{if(vi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(xn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(xn(o))return Kd(t,o,i)}return i}function Mp(t,i,o,l,c,h,M,L,F){return t=gc(o,l,!0,t,c,h,M,L,F),t.context=Sp(null),o=t.current,l=mn(),c=rr(o),h=Ti(l,c),h.callback=i??null,er(o,h,c),t.current.lanes=c,Vi(t,c,l),Mn(t,l),t}function Wa(t,i,o,l){var c=i.current,h=mn(),M=rr(c);return o=Sp(o),i.context===null?i.context=o:i.pendingContext=o,i=Ti(h,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=er(c,i,M),t!==null&&(Qn(t,c,M,h),Sa(t,c,M)),M}function Xa(t){return t=t.current,t.child?(t.child.tag===5,t.child.stateNode):null}function Ep(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function vc(t,i){Ep(t,i),(t=t.alternate)&&Ep(t,i)}function Kv(){return null}var Tp=typeof reportError=="function"?reportError:function(t){console.error(t)};function _c(t){this._internalRoot=t}ja.prototype.render=_c.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Wa(t,i,null,null)},ja.prototype.unmount=_c.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Rr(function(){Wa(null,t,null,null)}),i[xi]=null}};function ja(t){this._internalRoot=t}ja.prototype.unstable_scheduleHydration=function(t){if(t){var i=ad();t={blockedOn:null,target:t,priority:i};for(var o=0;o<ji.length&&i!==0&&i<ji[o].priority;o++);ji.splice(o,0,t),o===0&&cd(t)}};function xc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ya(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function wp(){}function $v(t,i,o,l,c){if(c){if(typeof l=="function"){var h=l;l=function(){var Z=Xa(M);h.call(Z)}}var M=Mp(i,l,t,0,null,!1,!1,"",wp);return t._reactRootContainer=M,t[xi]=M.current,uo(t.nodeType===8?t.parentNode:t),Rr(),M}for(;c=t.lastChild;)t.removeChild(c);if(typeof l=="function"){var L=l;l=function(){var Z=Xa(F);L.call(Z)}}var F=gc(t,0,!1,null,null,!1,!1,"",wp);return t._reactRootContainer=F,t[xi]=F.current,uo(t.nodeType===8?t.parentNode:t),Rr(function(){Wa(i,F,o,l)}),F}function qa(t,i,o,l,c){var h=o._reactRootContainer;if(h){var M=h;if(typeof c=="function"){var L=c;c=function(){var F=Xa(M);L.call(F)}}Wa(i,M,t,c)}else M=$v(o,i,t,c,l);return Xa(M)}sd=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=_i(i.pendingLanes);o!==0&&(Gl(i,o|1),Mn(i,we()),(mt&6)===0&&(vs=we()+500,Qi()))}break;case 13:Rr(function(){var l=Ei(t,1);if(l!==null){var c=mn();Qn(l,t,1,c)}}),vc(t,1)}},Wl=function(t){if(t.tag===13){var i=Ei(t,134217728);if(i!==null){var o=mn();Qn(i,t,134217728,o)}vc(t,134217728)}},od=function(t){if(t.tag===13){var i=rr(t),o=Ei(t,i);if(o!==null){var l=mn();Qn(o,t,i,l)}vc(t,i)}},ad=function(){return Et},ld=function(t,i){var o=Et;try{return Et=t,i()}finally{Et=o}},oe=function(t,i,o){switch(i){case"input":if($e(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var c=fa(l);if(!c)throw Error(n(90));lt(l),$e(l,c)}}}break;case"textarea":ve(t,o);break;case"select":i=o.value,i!=null&&T(t,!!o.multiple,i,!1)}},nn=cc,ht=Rr;var Zv={usingClientEntryPoint:!1,Events:[ho,rs,fa,ct,Ut,cc]},Co={findFiberByHostInstance:yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qv={bundleType:Co.bundleType,version:Co.version,rendererPackageName:Co.rendererPackageName,rendererConfig:Co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:N.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=V(t),t===null?null:t.stateNode},findFiberByHostInstance:Co.findFiberByHostInstance||Kv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ka=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ka.isDisabled&&Ka.supportsFiber)try{Ct=Ka.inject(Qv),Nt=Ka}catch{}}return En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zv,En.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xc(i))throw Error(n(200));return qv(t,i,null,o)},En.createRoot=function(t,i){if(!xc(t))throw Error(n(299));var o=!1,l="",c=Tp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=gc(t,1,!1,null,null,o,!1,l,c),t[xi]=i.current,uo(t.nodeType===8?t.parentNode:t),new _c(i)},En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=V(i),t=t===null?null:t.stateNode,t},En.flushSync=function(t){return Rr(t)},En.hydrate=function(t,i,o){if(!Ya(i))throw Error(n(200));return qa(null,t,i,!0,o)},En.hydrateRoot=function(t,i,o){if(!xc(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,c=!1,h="",M=Tp;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=Mp(i,null,t,1,o??null,c,!1,h,M),t[xi]=i.current,uo(t),l)for(t=0;t<l.length;t++)o=l[t],c=o._getVersion,c=c(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,c]:i.mutableSourceEagerHydrationData.push(o,c);return new ja(i)},En.render=function(t,i,o){if(!Ya(i))throw Error(n(200));return qa(null,t,i,!1,o)},En.unmountComponentAtNode=function(t){if(!Ya(t))throw Error(n(40));return t._reactRootContainer?(Rr(function(){qa(null,null,t,!1,function(){t._reactRootContainer=null,t[xi]=null})}),!0):!1},En.unstable_batchedUpdates=cc,En.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!Ya(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return qa(t,i,o,!1,l)},En.version="18.3.1-next-f1338f8080-20240426",En}var Np;function Fm(){if(Np)return Mc.exports;Np=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Mc.exports=o_(),Mc.exports}var Ip;function a_(){if(Ip)return $a;Ip=1;var s=Fm();return $a.createRoot=s.createRoot,$a.hydrateRoot=s.hydrateRoot,$a}var l_=a_();const u_=Um(l_),Yf=on.createContext(void 0),Bo=()=>{const s=on.useContext(Yf);if(!s)throw new Error("useSystem must be used within a NeuralProvider");return s};function Om(s){var e,n,r="";if(typeof s=="string"||typeof s=="number")r+=s;else if(typeof s=="object")if(Array.isArray(s)){var a=s.length;for(e=0;e<a;e++)s[e]&&(n=Om(s[e]))&&(r&&(r+=" "),r+=n)}else for(n in s)s[n]&&(r&&(r+=" "),r+=n);return r}function c_(){for(var s,e,n=0,r="",a=arguments.length;n<a;n++)(s=arguments[n])&&(e=Om(s))&&(r&&(r+=" "),r+=e);return r}const bl=(...s)=>c_(...s),f_=({children:s,variant:e="primary",size:n="md",className:r,onClick:a,...u})=>{const{engine:f}=Bo(),d=x=>{if(f){const y=x.currentTarget.getBoundingClientRect(),S=y.left+y.width/2,w=y.top+y.height/2;f.emitPulse(S,w,1.25)}a&&a(x)},p="jk-neo-button relative inline-flex items-center justify-center overflow-hidden transition-all duration-300 font-bold uppercase tracking-widest",m={primary:"jk-neon-primary bg-neo-accent text-black font-bold uppercase tracking-[0.2em] shadow-neon-primary active:scale-95",secondary:"jk-glass text-white/90 hover:bg-white/5 border-white/5 active:scale-95",outline:"border border-white/20 text-white/50 hover:text-white hover:border-white/40 bg-transparent active:scale-95",ghost:"text-white/40 hover:text-white hover:bg-white/5 bg-transparent"},g={sm:"px-4 py-1.5 text-[8px]",md:"px-8 py-2.5 text-[10px]",lg:"px-12 py-4 text-[12px] font-black"};return ie.jsxs("button",{className:bl(p,m[e],g[n],r),onClick:d,...u,children:[ie.jsx("span",{className:"relative z-10",children:s}),ie.jsx("div",{className:"absolute inset-0 bg-white/10 opacity-0 active:opacity-100 transition-opacity"})]})},d_=({title:s,value:e,trend:n,children:r,className:a,glow:u=!0})=>{const{engine:f}=Bo(),d=p=>{if(f){const m=p.currentTarget.getBoundingClientRect(),g=m.left+m.width/2,x=m.top+m.height/2;f.emitPulse(g,x,.4)}};return ie.jsxs("div",{onMouseEnter:d,className:bl("jk-card-v2 jk-glass relative group overflow-hidden transition-all duration-500 rounded-[var(--neo-radius)] px-7 py-6 cursor-default border-white/5 active:scale-[0.99]",u&&"hover:border-white/20 hover:shadow-[0_0_40px_-10px_var(--neo-glow)]",a),children:[ie.jsx("div",{className:"absolute top-0 left-0 w-32 h-32 bg-white/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"}),ie.jsxs("div",{className:"relative z-10 flex flex-col space-y-4",children:[s&&ie.jsx("h3",{className:"jk-hud-heading text-[10px] tracking-[0.25em] text-white/50 uppercase group-hover:text-neo-accent transition-colors duration-500",children:s}),e!==void 0&&ie.jsxs("div",{className:"flex items-baseline gap-3",children:[ie.jsx("span",{className:"text-4xl font-bold tracking-tighter text-white group-hover:text-neo-accent transition-colors duration-500",children:e}),n&&ie.jsx("span",{className:bl("jk-data-label text-[9px] uppercase font-bold px-2 py-0.5 rounded-[2px] transition-all duration-500",n.direction==="up"?"text-green-400 bg-green-400/10 group-hover:bg-green-400/20":n.direction==="down"?"text-red-400 bg-red-400/10 group-hover:bg-red-400/20":"text-neo-accent bg-neo-accent/10 group-hover:bg-neo-accent/20"),children:n.value})]}),ie.jsx("div",{className:"text-sm text-white/60 group-hover:text-white/80 transition-colors duration-500",children:r})]}),ie.jsx("div",{className:"absolute -bottom-6 -right-6 w-24 h-24 bg-neo-accent/5 rounded-full blur-2xl group-hover:bg-neo-accent/20 transition-all duration-700"}),ie.jsx("div",{className:"absolute top-0 right-0 w-8 h-[1px] bg-white/10 group-hover:bg-neo-accent/30 transition-colors"}),ie.jsx("div",{className:"absolute top-0 right-0 h-4 w-[1px] bg-white/10 group-hover:bg-neo-accent/30 transition-colors"})]})},h_=({label:s,glow:e=!0,className:n,onFocus:r,onChange:a,...u})=>{const{engine:f}=Bo(),d=m=>{if(f){const g=m.currentTarget.getBoundingClientRect();f.emitPulse(g.left+g.width/2,g.top+g.height/2,.8)}r&&r(m)},p=m=>{if(f){const g=m.currentTarget.getBoundingClientRect();f.emitPulse(g.left+g.width/2,g.top+g.height/2,.4)}a&&a(m)};return ie.jsxs("div",{className:"jk-input-v2 flex flex-col space-y-3 group w-full",children:[s&&ie.jsx("label",{className:"jk-hud-heading text-[10px] tracking-[0.25em] text-white/40 uppercase pl-1",children:s}),ie.jsxs("div",{className:"relative",children:[ie.jsx("input",{onFocus:d,onChange:p,className:bl("w-full jk-glass bg-white/5 border-white/10 rounded-[var(--neo-radius)] px-5 py-4 text-white text-sm outline-none transition-all duration-300","placeholder:text-white/20",e&&"focus:border-neo-accent/50 focus:shadow-[0_0_30px_-5px_var(--neo-glow)] focus:bg-white/[0.08]",n),...u}),ie.jsx("div",{className:"absolute bottom-0 left-4 right-4 h-[1px] bg-neo-accent scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 shadow-[0_0_15px_var(--neo-glow)]"})]})]})};Fm();const qf="169",p_=0,Up=1,m_=2,km=1,g_=2,Di=3,vr=0,Cn=1,Ni=2,mr=0,Us=1,Ll=2,Fp=3,Op=4,v_=5,Hr=100,__=101,x_=102,y_=103,S_=104,M_=200,E_=201,T_=202,w_=203,rf=204,sf=205,A_=206,C_=207,R_=208,P_=209,b_=210,L_=211,D_=212,N_=213,I_=214,of=0,af=1,lf=2,ks=3,uf=4,cf=5,ff=6,df=7,Bm=0,U_=1,F_=2,gr=0,O_=1,k_=2,B_=3,z_=4,H_=5,V_=6,G_=7,zm=300,Bs=301,zs=302,hf=303,pf=304,Bl=306,mf=1e3,Gr=1001,gf=1002,Xn=1003,W_=1004,Za=1005,ri=1006,wc=1007,Wr=1008,ki=1009,Hm=1010,Vm=1011,ko=1012,Kf=1013,Xr=1014,Ii=1015,zo=1016,$f=1017,Zf=1018,Hs=1020,Gm=35902,Wm=1021,Xm=1022,oi=1023,jm=1024,Ym=1025,Fs=1026,Vs=1027,qm=1028,Qf=1029,Km=1030,Jf=1031,ed=1033,El=33776,Tl=33777,wl=33778,Al=33779,vf=35840,_f=35841,xf=35842,yf=35843,Sf=36196,Mf=37492,Ef=37496,Tf=37808,wf=37809,Af=37810,Cf=37811,Rf=37812,Pf=37813,bf=37814,Lf=37815,Df=37816,Nf=37817,If=37818,Uf=37819,Ff=37820,Of=37821,Cl=36492,kf=36494,Bf=36495,$m=36283,zf=36284,Hf=36285,Vf=36286,X_=3200,j_=3201,Y_=0,q_=1,pr="",hi="srgb",_r="srgb-linear",td="display-p3",zl="display-p3-linear",Dl="linear",Dt="srgb",Nl="rec709",Il="p3",xs=7680,kp=519,K_=512,$_=513,Z_=514,Zm=515,Q_=516,J_=517,e0=518,t0=519,Bp=35044,zp="300 es",Ui=2e3,Ul=2001;class Ws{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,f=a.length;u<f;u++)a[u].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ac=Math.PI/180,Gf=180/Math.PI;function Ho(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(dn[s&255]+dn[s>>8&255]+dn[s>>16&255]+dn[s>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[n&63|128]+dn[n>>8&255]+"-"+dn[n>>16&255]+dn[n>>24&255]+dn[r&255]+dn[r>>8&255]+dn[r>>16&255]+dn[r>>24&255]).toLowerCase()}function wn(s,e,n){return Math.max(e,Math.min(n,s))}function n0(s,e){return(s%e+e)%e}function Cc(s,e,n){return(1-n)*s+n*e}function Po(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Tn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class At{constructor(e=0,n=0){At.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(wn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*a+e.x,this.y=u*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,n,r,a,u,f,d,p,m){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m)}set(e,n,r,a,u,f,d,p,m){const g=this.elements;return g[0]=e,g[1]=a,g[2]=d,g[3]=n,g[4]=u,g[5]=p,g[6]=r,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[3],p=r[6],m=r[1],g=r[4],x=r[7],y=r[2],S=r[5],w=r[8],A=a[0],v=a[3],_=a[6],I=a[1],P=a[4],N=a[7],J=a[2],z=a[5],U=a[8];return u[0]=f*A+d*I+p*J,u[3]=f*v+d*P+p*z,u[6]=f*_+d*N+p*U,u[1]=m*A+g*I+x*J,u[4]=m*v+g*P+x*z,u[7]=m*_+g*N+x*U,u[2]=y*A+S*I+w*J,u[5]=y*v+S*P+w*z,u[8]=y*_+S*N+w*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],g=e[8];return n*f*g-n*d*m-r*u*g+r*d*p+a*u*m-a*f*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],g=e[8],x=g*f-d*m,y=d*p-g*u,S=m*u-f*p,w=n*x+r*y+a*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=x*A,e[1]=(a*m-g*r)*A,e[2]=(d*r-a*f)*A,e[3]=y*A,e[4]=(g*n-a*p)*A,e[5]=(a*u-d*n)*A,e[6]=S*A,e[7]=(r*p-m*n)*A,e[8]=(f*n-r*u)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,f,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*f+m*d)+f+e,-a*m,a*p,-a*(-m*f+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Rc.makeScale(e,n)),this}rotate(e){return this.premultiply(Rc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Rc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rc=new st;function Qm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Fl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function i0(){const s=Fl("canvas");return s.style.display="block",s}const Hp={};function Rl(s){s in Hp||(Hp[s]=!0,console.warn(s))}function r0(s,e,n){return new Promise(function(r,a){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}function s0(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function o0(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Vp=new st().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Gp=new st().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),bo={[_r]:{transfer:Dl,primaries:Nl,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[hi]:{transfer:Dt,primaries:Nl,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[zl]:{transfer:Dl,primaries:Il,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(Gp),fromReference:s=>s.applyMatrix3(Vp)},[td]:{transfer:Dt,primaries:Il,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(Gp),fromReference:s=>s.applyMatrix3(Vp).convertLinearToSRGB()}},a0=new Set([_r,zl]),Mt={enabled:!0,_workingColorSpace:_r,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!a0.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,n){if(this.enabled===!1||e===n||!e||!n)return s;const r=bo[e].toReference,a=bo[n].fromReference;return a(r(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return bo[s].primaries},getTransfer:function(s){return s===pr?Dl:bo[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(bo[e].luminanceCoefficients)}};function Os(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Pc(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ys;class l0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ys===void 0&&(ys=Fl("canvas")),ys.width=e.width,ys.height=e.height;const r=ys.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ys}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Fl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let f=0;f<u.length;f++)u[f]=Os(u[f]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Os(n[r]/255)*255):n[r]=Os(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let u0=0;class Jm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=Ho(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let f=0,d=a.length;f<d;f++)a[f].isDataTexture?u.push(bc(a[f].image)):u.push(bc(a[f]))}else u=bc(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function bc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?l0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let c0=0;class Rn extends Ws{constructor(e=Rn.DEFAULT_IMAGE,n=Rn.DEFAULT_MAPPING,r=Gr,a=Gr,u=ri,f=Wr,d=oi,p=ki,m=Rn.DEFAULT_ANISOTROPY,g=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=Ho(),this.name="",this.source=new Jm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mf:e.x=e.x-Math.floor(e.x);break;case Gr:e.x=e.x<0?0:1;break;case gf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mf:e.y=e.y-Math.floor(e.y);break;case Gr:e.y=e.y<0?0:1;break;case gf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=zm;Rn.DEFAULT_ANISOTROPY=1;class Ht{constructor(e=0,n=0,r=0,a=1){Ht.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*a+f[12]*u,this.y=f[1]*n+f[5]*r+f[9]*a+f[13]*u,this.z=f[2]*n+f[6]*r+f[10]*a+f[14]*u,this.w=f[3]*n+f[7]*r+f[11]*a+f[15]*u,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const p=e.elements,m=p[0],g=p[4],x=p[8],y=p[1],S=p[5],w=p[9],A=p[2],v=p[6],_=p[10];if(Math.abs(g-y)<.01&&Math.abs(x-A)<.01&&Math.abs(w-v)<.01){if(Math.abs(g+y)<.1&&Math.abs(x+A)<.1&&Math.abs(w+v)<.1&&Math.abs(m+S+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const P=(m+1)/2,N=(S+1)/2,J=(_+1)/2,z=(g+y)/4,U=(x+A)/4,Y=(w+v)/4;return P>N&&P>J?P<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(P),a=z/r,u=U/r):N>J?N<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(N),r=z/a,u=Y/a):J<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(J),r=U/u,a=Y/u),this.set(r,a,u,n),this}let I=Math.sqrt((v-w)*(v-w)+(x-A)*(x-A)+(y-g)*(y-g));return Math.abs(I)<.001&&(I=1),this.x=(v-w)/I,this.y=(x-A)/I,this.z=(y-g)/I,this.w=Math.acos((m+S+_-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class f0 extends Ws{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ht(0,0,e,n),this.scissorTest=!1,this.viewport=new Ht(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new Rn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Jm(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jr extends f0{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class eg extends Rn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class d0 extends Rn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vo{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,f,d){let p=r[a+0],m=r[a+1],g=r[a+2],x=r[a+3];const y=u[f+0],S=u[f+1],w=u[f+2],A=u[f+3];if(d===0){e[n+0]=p,e[n+1]=m,e[n+2]=g,e[n+3]=x;return}if(d===1){e[n+0]=y,e[n+1]=S,e[n+2]=w,e[n+3]=A;return}if(x!==A||p!==y||m!==S||g!==w){let v=1-d;const _=p*y+m*S+g*w+x*A,I=_>=0?1:-1,P=1-_*_;if(P>Number.EPSILON){const J=Math.sqrt(P),z=Math.atan2(J,_*I);v=Math.sin(v*z)/J,d=Math.sin(d*z)/J}const N=d*I;if(p=p*v+y*N,m=m*v+S*N,g=g*v+w*N,x=x*v+A*N,v===1-d){const J=1/Math.sqrt(p*p+m*m+g*g+x*x);p*=J,m*=J,g*=J,x*=J}}e[n]=p,e[n+1]=m,e[n+2]=g,e[n+3]=x}static multiplyQuaternionsFlat(e,n,r,a,u,f){const d=r[a],p=r[a+1],m=r[a+2],g=r[a+3],x=u[f],y=u[f+1],S=u[f+2],w=u[f+3];return e[n]=d*w+g*x+p*S-m*y,e[n+1]=p*w+g*y+m*x-d*S,e[n+2]=m*w+g*S+d*y-p*x,e[n+3]=g*w-d*x-p*y-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(r/2),g=d(a/2),x=d(u/2),y=p(r/2),S=p(a/2),w=p(u/2);switch(f){case"XYZ":this._x=y*g*x+m*S*w,this._y=m*S*x-y*g*w,this._z=m*g*w+y*S*x,this._w=m*g*x-y*S*w;break;case"YXZ":this._x=y*g*x+m*S*w,this._y=m*S*x-y*g*w,this._z=m*g*w-y*S*x,this._w=m*g*x+y*S*w;break;case"ZXY":this._x=y*g*x-m*S*w,this._y=m*S*x+y*g*w,this._z=m*g*w+y*S*x,this._w=m*g*x-y*S*w;break;case"ZYX":this._x=y*g*x-m*S*w,this._y=m*S*x+y*g*w,this._z=m*g*w-y*S*x,this._w=m*g*x+y*S*w;break;case"YZX":this._x=y*g*x+m*S*w,this._y=m*S*x+y*g*w,this._z=m*g*w-y*S*x,this._w=m*g*x-y*S*w;break;case"XZY":this._x=y*g*x-m*S*w,this._y=m*S*x-y*g*w,this._z=m*g*w+y*S*x,this._w=m*g*x+y*S*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],f=n[1],d=n[5],p=n[9],m=n[2],g=n[6],x=n[10],y=r+d+x;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(g-p)*S,this._y=(u-m)*S,this._z=(f-a)*S}else if(r>d&&r>x){const S=2*Math.sqrt(1+r-d-x);this._w=(g-p)/S,this._x=.25*S,this._y=(a+f)/S,this._z=(u+m)/S}else if(d>x){const S=2*Math.sqrt(1+d-r-x);this._w=(u-m)/S,this._x=(a+f)/S,this._y=.25*S,this._z=(p+g)/S}else{const S=2*Math.sqrt(1+x-r-d);this._w=(f-a)/S,this._x=(u+m)/S,this._y=(p+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,f=e._w,d=n._x,p=n._y,m=n._z,g=n._w;return this._x=r*g+f*d+a*m-u*p,this._y=a*g+f*p+u*d-r*m,this._z=u*g+f*m+r*p-a*d,this._w=f*g-r*d-a*p-u*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,f=this._w;let d=f*e._w+r*e._x+a*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=a,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-n;return this._w=S*f+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*u+n*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,d),x=Math.sin((1-n)*g)/m,y=Math.sin(n*g)/m;return this._w=f*x+this._w*y,this._x=r*x+this._x*y,this._y=a*x+this._y*y,this._z=u*x+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,n=0,r=0){Q.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Wp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Wp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,f=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*f,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*f,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*a-d*r),g=2*(d*n-u*a),x=2*(u*r-f*n);return this.x=n+p*m+f*x-d*g,this.y=r+p*g+d*m-u*x,this.z=a+p*x+u*g-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,f=n.x,d=n.y,p=n.z;return this.x=a*p-u*d,this.y=u*f-r*p,this.z=r*d-a*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Lc.copy(this).projectOnVector(e),this.sub(Lc)}reflect(e){return this.sub(Lc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(wn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lc=new Q,Wp=new Vo;class Go{constructor(e=new Q(1/0,1/0,1/0),n=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Jn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Jn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Jn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,Jn):Jn.fromBufferAttribute(u,f),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qa.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Qa.copy(r.boundingBox)),Qa.applyMatrix4(e.matrixWorld),this.union(Qa)}const a=e.children;for(let u=0,f=a.length;u<f;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lo),Ja.subVectors(this.max,Lo),Ss.subVectors(e.a,Lo),Ms.subVectors(e.b,Lo),Es.subVectors(e.c,Lo),lr.subVectors(Ms,Ss),ur.subVectors(Es,Ms),Dr.subVectors(Ss,Es);let n=[0,-lr.z,lr.y,0,-ur.z,ur.y,0,-Dr.z,Dr.y,lr.z,0,-lr.x,ur.z,0,-ur.x,Dr.z,0,-Dr.x,-lr.y,lr.x,0,-ur.y,ur.x,0,-Dr.y,Dr.x,0];return!Dc(n,Ss,Ms,Es,Ja)||(n=[1,0,0,0,1,0,0,0,1],!Dc(n,Ss,Ms,Es,Ja))?!1:(el.crossVectors(lr,ur),n=[el.x,el.y,el.z],Dc(n,Ss,Ms,Es,Ja))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ci=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Jn=new Q,Qa=new Go,Ss=new Q,Ms=new Q,Es=new Q,lr=new Q,ur=new Q,Dr=new Q,Lo=new Q,Ja=new Q,el=new Q,Nr=new Q;function Dc(s,e,n,r,a){for(let u=0,f=s.length-3;u<=f;u+=3){Nr.fromArray(s,u);const d=a.x*Math.abs(Nr.x)+a.y*Math.abs(Nr.y)+a.z*Math.abs(Nr.z),p=e.dot(Nr),m=n.dot(Nr),g=r.dot(Nr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>d)return!1}return!0}const h0=new Go,Do=new Q,Nc=new Q;class Wo{constructor(e=new Q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):h0.setFromPoints(e).getCenter(r);let a=0;for(let u=0,f=e.length;u<f;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Do.subVectors(e,this.center);const n=Do.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Do,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Do.copy(e.center).add(Nc)),this.expandByPoint(Do.copy(e.center).sub(Nc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ri=new Q,Ic=new Q,tl=new Q,cr=new Q,Uc=new Q,nl=new Q,Fc=new Q;class nd{constructor(e=new Q,n=new Q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ri.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,n),Ri.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Ic.copy(e).add(n).multiplyScalar(.5),tl.copy(n).sub(e).normalize(),cr.copy(this.origin).sub(Ic);const u=e.distanceTo(n)*.5,f=-this.direction.dot(tl),d=cr.dot(this.direction),p=-cr.dot(tl),m=cr.lengthSq(),g=Math.abs(1-f*f);let x,y,S,w;if(g>0)if(x=f*p-d,y=f*d-p,w=u*g,x>=0)if(y>=-w)if(y<=w){const A=1/g;x*=A,y*=A,S=x*(x+f*y+2*d)+y*(f*x+y+2*p)+m}else y=u,x=Math.max(0,-(f*y+d)),S=-x*x+y*(y+2*p)+m;else y=-u,x=Math.max(0,-(f*y+d)),S=-x*x+y*(y+2*p)+m;else y<=-w?(x=Math.max(0,-(-f*u+d)),y=x>0?-u:Math.min(Math.max(-u,-p),u),S=-x*x+y*(y+2*p)+m):y<=w?(x=0,y=Math.min(Math.max(-u,-p),u),S=y*(y+2*p)+m):(x=Math.max(0,-(f*u+d)),y=x>0?u:Math.min(Math.max(-u,-p),u),S=-x*x+y*(y+2*p)+m);else y=f>0?-u:u,x=Math.max(0,-(f*y+d)),S=-x*x+y*(y+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,x),a&&a.copy(Ic).addScaledVector(tl,y),S}intersectSphere(e,n){Ri.subVectors(e.center,this.origin);const r=Ri.dot(this.direction),a=Ri.dot(Ri)-r*r,u=e.radius*e.radius;if(a>u)return null;const f=Math.sqrt(u-a),d=r-f,p=r+f;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,f,d,p;const m=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,y=this.origin;return m>=0?(r=(e.min.x-y.x)*m,a=(e.max.x-y.x)*m):(r=(e.max.x-y.x)*m,a=(e.min.x-y.x)*m),g>=0?(u=(e.min.y-y.y)*g,f=(e.max.y-y.y)*g):(u=(e.max.y-y.y)*g,f=(e.min.y-y.y)*g),r>f||u>a||((u>r||isNaN(r))&&(r=u),(f<a||isNaN(a))&&(a=f),x>=0?(d=(e.min.z-y.z)*x,p=(e.max.z-y.z)*x):(d=(e.max.z-y.z)*x,p=(e.min.z-y.z)*x),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,n,r,a,u){Uc.subVectors(n,e),nl.subVectors(r,e),Fc.crossVectors(Uc,nl);let f=this.direction.dot(Fc),d;if(f>0){if(a)return null;d=1}else if(f<0)d=-1,f=-f;else return null;cr.subVectors(this.origin,e);const p=d*this.direction.dot(nl.crossVectors(cr,nl));if(p<0)return null;const m=d*this.direction.dot(Uc.cross(cr));if(m<0||p+m>f)return null;const g=-d*cr.dot(Fc);return g<0?null:this.at(g/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,n,r,a,u,f,d,p,m,g,x,y,S,w,A,v){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m,g,x,y,S,w,A,v)}set(e,n,r,a,u,f,d,p,m,g,x,y,S,w,A,v){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=a,_[1]=u,_[5]=f,_[9]=d,_[13]=p,_[2]=m,_[6]=g,_[10]=x,_[14]=y,_[3]=S,_[7]=w,_[11]=A,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Ts.setFromMatrixColumn(e,0).length(),u=1/Ts.setFromMatrixColumn(e,1).length(),f=1/Ts.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,f=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a),g=Math.cos(u),x=Math.sin(u);if(e.order==="XYZ"){const y=f*g,S=f*x,w=d*g,A=d*x;n[0]=p*g,n[4]=-p*x,n[8]=m,n[1]=S+w*m,n[5]=y-A*m,n[9]=-d*p,n[2]=A-y*m,n[6]=w+S*m,n[10]=f*p}else if(e.order==="YXZ"){const y=p*g,S=p*x,w=m*g,A=m*x;n[0]=y+A*d,n[4]=w*d-S,n[8]=f*m,n[1]=f*x,n[5]=f*g,n[9]=-d,n[2]=S*d-w,n[6]=A+y*d,n[10]=f*p}else if(e.order==="ZXY"){const y=p*g,S=p*x,w=m*g,A=m*x;n[0]=y-A*d,n[4]=-f*x,n[8]=w+S*d,n[1]=S+w*d,n[5]=f*g,n[9]=A-y*d,n[2]=-f*m,n[6]=d,n[10]=f*p}else if(e.order==="ZYX"){const y=f*g,S=f*x,w=d*g,A=d*x;n[0]=p*g,n[4]=w*m-S,n[8]=y*m+A,n[1]=p*x,n[5]=A*m+y,n[9]=S*m-w,n[2]=-m,n[6]=d*p,n[10]=f*p}else if(e.order==="YZX"){const y=f*p,S=f*m,w=d*p,A=d*m;n[0]=p*g,n[4]=A-y*x,n[8]=w*x+S,n[1]=x,n[5]=f*g,n[9]=-d*g,n[2]=-m*g,n[6]=S*x+w,n[10]=y-A*x}else if(e.order==="XZY"){const y=f*p,S=f*m,w=d*p,A=d*m;n[0]=p*g,n[4]=-x,n[8]=m*g,n[1]=y*x+A,n[5]=f*g,n[9]=S*x-w,n[2]=w*x-S,n[6]=d*g,n[10]=A*x+y}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(p0,e,m0)}lookAt(e,n,r){const a=this.elements;return Un.subVectors(e,n),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),fr.crossVectors(r,Un),fr.lengthSq()===0&&(Math.abs(r.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),fr.crossVectors(r,Un)),fr.normalize(),il.crossVectors(Un,fr),a[0]=fr.x,a[4]=il.x,a[8]=Un.x,a[1]=fr.y,a[5]=il.y,a[9]=Un.y,a[2]=fr.z,a[6]=il.z,a[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[4],p=r[8],m=r[12],g=r[1],x=r[5],y=r[9],S=r[13],w=r[2],A=r[6],v=r[10],_=r[14],I=r[3],P=r[7],N=r[11],J=r[15],z=a[0],U=a[4],Y=a[8],Se=a[12],E=a[1],R=a[5],re=a[9],ee=a[13],ue=a[2],fe=a[6],te=a[10],le=a[14],O=a[3],ce=a[7],se=a[11],D=a[15];return u[0]=f*z+d*E+p*ue+m*O,u[4]=f*U+d*R+p*fe+m*ce,u[8]=f*Y+d*re+p*te+m*se,u[12]=f*Se+d*ee+p*le+m*D,u[1]=g*z+x*E+y*ue+S*O,u[5]=g*U+x*R+y*fe+S*ce,u[9]=g*Y+x*re+y*te+S*se,u[13]=g*Se+x*ee+y*le+S*D,u[2]=w*z+A*E+v*ue+_*O,u[6]=w*U+A*R+v*fe+_*ce,u[10]=w*Y+A*re+v*te+_*se,u[14]=w*Se+A*ee+v*le+_*D,u[3]=I*z+P*E+N*ue+J*O,u[7]=I*U+P*R+N*fe+J*ce,u[11]=I*Y+P*re+N*te+J*se,u[15]=I*Se+P*ee+N*le+J*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],f=e[1],d=e[5],p=e[9],m=e[13],g=e[2],x=e[6],y=e[10],S=e[14],w=e[3],A=e[7],v=e[11],_=e[15];return w*(+u*p*x-a*m*x-u*d*y+r*m*y+a*d*S-r*p*S)+A*(+n*p*S-n*m*y+u*f*y-a*f*S+a*m*g-u*p*g)+v*(+n*m*x-n*d*S-u*f*x+r*f*S+u*d*g-r*m*g)+_*(-a*d*g-n*p*x+n*d*y+a*f*x-r*f*y+r*p*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],g=e[8],x=e[9],y=e[10],S=e[11],w=e[12],A=e[13],v=e[14],_=e[15],I=x*v*m-A*y*m+A*p*S-d*v*S-x*p*_+d*y*_,P=w*y*m-g*v*m-w*p*S+f*v*S+g*p*_-f*y*_,N=g*A*m-w*x*m+w*d*S-f*A*S-g*d*_+f*x*_,J=w*x*p-g*A*p-w*d*y+f*A*y+g*d*v-f*x*v,z=n*I+r*P+a*N+u*J;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/z;return e[0]=I*U,e[1]=(A*y*u-x*v*u-A*a*S+r*v*S+x*a*_-r*y*_)*U,e[2]=(d*v*u-A*p*u+A*a*m-r*v*m-d*a*_+r*p*_)*U,e[3]=(x*p*u-d*y*u-x*a*m+r*y*m+d*a*S-r*p*S)*U,e[4]=P*U,e[5]=(g*v*u-w*y*u+w*a*S-n*v*S-g*a*_+n*y*_)*U,e[6]=(w*p*u-f*v*u-w*a*m+n*v*m+f*a*_-n*p*_)*U,e[7]=(f*y*u-g*p*u+g*a*m-n*y*m-f*a*S+n*p*S)*U,e[8]=N*U,e[9]=(w*x*u-g*A*u-w*r*S+n*A*S+g*r*_-n*x*_)*U,e[10]=(f*A*u-w*d*u+w*r*m-n*A*m-f*r*_+n*d*_)*U,e[11]=(g*d*u-f*x*u-g*r*m+n*x*m+f*r*S-n*d*S)*U,e[12]=J*U,e[13]=(g*A*a-w*x*a+w*r*y-n*A*y-g*r*v+n*x*v)*U,e[14]=(w*d*a-f*A*a-w*r*p+n*A*p+f*r*v-n*d*v)*U,e[15]=(f*x*a-g*d*a+g*r*p-n*x*p-f*r*y+n*d*y)*U,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,f=e.x,d=e.y,p=e.z,m=u*f,g=u*d;return this.set(m*f+r,m*d-a*p,m*p+a*d,0,m*d+a*p,g*d+r,g*p-a*f,0,m*p-a*d,g*p+a*f,u*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,f){return this.set(1,r,u,0,e,1,f,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,f=n._y,d=n._z,p=n._w,m=u+u,g=f+f,x=d+d,y=u*m,S=u*g,w=u*x,A=f*g,v=f*x,_=d*x,I=p*m,P=p*g,N=p*x,J=r.x,z=r.y,U=r.z;return a[0]=(1-(A+_))*J,a[1]=(S+N)*J,a[2]=(w-P)*J,a[3]=0,a[4]=(S-N)*z,a[5]=(1-(y+_))*z,a[6]=(v+I)*z,a[7]=0,a[8]=(w+P)*U,a[9]=(v-I)*U,a[10]=(1-(y+A))*U,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=Ts.set(a[0],a[1],a[2]).length();const f=Ts.set(a[4],a[5],a[6]).length(),d=Ts.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],ei.copy(this);const m=1/u,g=1/f,x=1/d;return ei.elements[0]*=m,ei.elements[1]*=m,ei.elements[2]*=m,ei.elements[4]*=g,ei.elements[5]*=g,ei.elements[6]*=g,ei.elements[8]*=x,ei.elements[9]*=x,ei.elements[10]*=x,n.setFromRotationMatrix(ei),r.x=u,r.y=f,r.z=d,this}makePerspective(e,n,r,a,u,f,d=Ui){const p=this.elements,m=2*u/(n-e),g=2*u/(r-a),x=(n+e)/(n-e),y=(r+a)/(r-a);let S,w;if(d===Ui)S=-(f+u)/(f-u),w=-2*f*u/(f-u);else if(d===Ul)S=-f/(f-u),w=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,u,f,d=Ui){const p=this.elements,m=1/(n-e),g=1/(r-a),x=1/(f-u),y=(n+e)*m,S=(r+a)*g;let w,A;if(d===Ui)w=(f+u)*x,A=-2*x;else if(d===Ul)w=u*x,A=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-y,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=A,p[14]=-w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ts=new Q,ei=new Bt,p0=new Q(0,0,0),m0=new Q(1,1,1),fr=new Q,il=new Q,Un=new Q,Xp=new Bt,jp=new Vo;class Bi{constructor(e=0,n=0,r=0,a=Bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],f=a[4],d=a[8],p=a[1],m=a[5],g=a[9],x=a[2],y=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(wn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-wn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(wn(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-wn(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(wn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-wn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Xp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return jp.setFromEuler(this),this.setFromQuaternion(jp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bi.DEFAULT_ORDER="XYZ";class tg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let g0=0;const Yp=new Q,ws=new Vo,Pi=new Bt,rl=new Q,No=new Q,v0=new Q,_0=new Vo,qp=new Q(1,0,0),Kp=new Q(0,1,0),$p=new Q(0,0,1),Zp={type:"added"},x0={type:"removed"},As={type:"childadded",child:null},Oc={type:"childremoved",child:null};class vn extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=Ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const e=new Q,n=new Bi,r=new Vo,a=new Q(1,1,1);function u(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Bt},normalMatrix:{value:new st}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ws.setFromAxisAngle(e,n),this.quaternion.multiply(ws),this}rotateOnWorldAxis(e,n){return ws.setFromAxisAngle(e,n),this.quaternion.premultiply(ws),this}rotateX(e){return this.rotateOnAxis(qp,e)}rotateY(e){return this.rotateOnAxis(Kp,e)}rotateZ(e){return this.rotateOnAxis($p,e)}translateOnAxis(e,n){return Yp.copy(e).applyQuaternion(this.quaternion),this.position.add(Yp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(qp,e)}translateY(e){return this.translateOnAxis(Kp,e)}translateZ(e){return this.translateOnAxis($p,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?rl.copy(e):rl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(No,rl,this.up):Pi.lookAt(rl,No,this.up),this.quaternion.setFromRotationMatrix(Pi),a&&(Pi.extractRotation(a.matrixWorld),ws.setFromRotationMatrix(Pi),this.quaternion.premultiply(ws.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zp),As.child=e,this.dispatchEvent(As),As.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(x0),Oc.child=e,this.dispatchEvent(Oc),Oc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zp),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,e,v0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,_0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const x=p[m];u(e.shapes,x)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));a.material=d}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(u(e.animations,p))}}if(n){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),g=f(e.images),x=f(e.shapes),y=f(e.skeletons),S=f(e.animations),w=f(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),x.length>0&&(r.shapes=x),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),w.length>0&&(r.nodes=w)}return r.object=a,r;function f(d){const p=[];for(const m in d){const g=d[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}vn.DEFAULT_UP=new Q(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ti=new Q,bi=new Q,kc=new Q,Li=new Q,Cs=new Q,Rs=new Q,Qp=new Q,Bc=new Q,zc=new Q,Hc=new Q,Vc=new Ht,Gc=new Ht,Wc=new Ht;class si{constructor(e=new Q,n=new Q,r=new Q){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ti.subVectors(e,n),a.cross(ti);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){ti.subVectors(a,n),bi.subVectors(r,n),kc.subVectors(e,n);const f=ti.dot(ti),d=ti.dot(bi),p=ti.dot(kc),m=bi.dot(bi),g=bi.dot(kc),x=f*m-d*d;if(x===0)return u.set(0,0,0),null;const y=1/x,S=(m*p-d*g)*y,w=(f*g-d*p)*y;return u.set(1-S-w,w,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(e,n,r,a,u,f,d,p){return this.getBarycoord(e,n,r,a,Li)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Li.x),p.addScaledVector(f,Li.y),p.addScaledVector(d,Li.z),p)}static getInterpolatedAttribute(e,n,r,a,u,f){return Vc.setScalar(0),Gc.setScalar(0),Wc.setScalar(0),Vc.fromBufferAttribute(e,n),Gc.fromBufferAttribute(e,r),Wc.fromBufferAttribute(e,a),f.setScalar(0),f.addScaledVector(Vc,u.x),f.addScaledVector(Gc,u.y),f.addScaledVector(Wc,u.z),f}static isFrontFacing(e,n,r,a){return ti.subVectors(r,n),bi.subVectors(e,n),ti.cross(bi).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),ti.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return si.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return si.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let f,d;Cs.subVectors(a,r),Rs.subVectors(u,r),Bc.subVectors(e,r);const p=Cs.dot(Bc),m=Rs.dot(Bc);if(p<=0&&m<=0)return n.copy(r);zc.subVectors(e,a);const g=Cs.dot(zc),x=Rs.dot(zc);if(g>=0&&x<=g)return n.copy(a);const y=p*x-g*m;if(y<=0&&p>=0&&g<=0)return f=p/(p-g),n.copy(r).addScaledVector(Cs,f);Hc.subVectors(e,u);const S=Cs.dot(Hc),w=Rs.dot(Hc);if(w>=0&&S<=w)return n.copy(u);const A=S*m-p*w;if(A<=0&&m>=0&&w<=0)return d=m/(m-w),n.copy(r).addScaledVector(Rs,d);const v=g*w-S*x;if(v<=0&&x-g>=0&&S-w>=0)return Qp.subVectors(u,a),d=(x-g)/(x-g+(S-w)),n.copy(a).addScaledVector(Qp,d);const _=1/(v+A+y);return f=A*_,d=y*_,n.copy(r).addScaledVector(Cs,f).addScaledVector(Rs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ng={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dr={h:0,s:0,l:0},sl={h:0,s:0,l:0};function Xc(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class xt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Mt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Mt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Mt.workingColorSpace){if(e=n0(e,1),n=wn(n,0,1),r=wn(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,f=2*r-u;this.r=Xc(f,u,e+1/3),this.g=Xc(f,u,e),this.b=Xc(f,u,e-1/3)}return Mt.toWorkingColorSpace(this,a),this}setStyle(e,n=hi){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=a[1],d=a[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=hi){const r=ng[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}copyLinearToSRGB(e){return this.r=Pc(e.r),this.g=Pc(e.g),this.b=Pc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return Mt.fromWorkingColorSpace(hn.copy(this),e),Math.round(wn(hn.r*255,0,255))*65536+Math.round(wn(hn.g*255,0,255))*256+Math.round(wn(hn.b*255,0,255))}getHexString(e=hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Mt.workingColorSpace){Mt.fromWorkingColorSpace(hn.copy(this),n);const r=hn.r,a=hn.g,u=hn.b,f=Math.max(r,a,u),d=Math.min(r,a,u);let p,m;const g=(d+f)/2;if(d===f)p=0,m=0;else{const x=f-d;switch(m=g<=.5?x/(f+d):x/(2-f-d),f){case r:p=(a-u)/x+(a<u?6:0);break;case a:p=(u-r)/x+2;break;case u:p=(r-a)/x+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,n=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(hn.copy(this),n),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=hi){Mt.fromWorkingColorSpace(hn.copy(this),e);const n=hn.r,r=hn.g,a=hn.b;return e!==hi?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(dr),this.setHSL(dr.h+e,dr.s+n,dr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(dr),e.getHSL(sl);const r=Cc(dr.h,sl.h,n),a=Cc(dr.s,sl.s,n),u=Cc(dr.l,sl.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new xt;xt.NAMES=ng;let y0=0;class Xs extends Ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=Ho(),this.name="",this.type="Material",this.blending=Us,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rf,this.blendDst=sf,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(r.blending=this.blending),this.side!==vr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==rf&&(r.blendSrc=this.blendSrc),this.blendDst!==sf&&(r.blendDst=this.blendDst),this.blendEquation!==Hr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ks&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}if(n){const u=a(e.textures),f=a(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ig extends Xs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=Bm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new Q,ol=new At;class An{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Bp,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)ol.fromBufferAttribute(this,n),ol.applyMatrix3(e),this.setXY(n,ol.x,ol.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Gt.fromBufferAttribute(this,n),Gt.applyMatrix3(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Gt.fromBufferAttribute(this,n),Gt.applyMatrix4(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Gt.fromBufferAttribute(this,n),Gt.applyNormalMatrix(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Gt.fromBufferAttribute(this,n),Gt.transformDirection(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Po(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Tn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Po(n,this.array)),n}setX(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Po(n,this.array)),n}setY(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Po(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Po(n,this.array)),n}setW(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),r=Tn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),r=Tn(r,this.array),a=Tn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),r=Tn(r,this.array),a=Tn(a,this.array),u=Tn(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bp&&(e.usage=this.usage),e}}class rg extends An{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class sg extends An{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Oi extends An{constructor(e,n,r){super(new Float32Array(e),n,r)}}let S0=0;const Wn=new Bt,jc=new vn,Ps=new Q,Fn=new Go,Io=new Go,en=new Q;class ai extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=Ho(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qm(e)?sg:rg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new st().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,n,r){return Wn.makeTranslation(e,n,r),this.applyMatrix4(Wn),this}scale(e,n,r){return Wn.makeScale(e,n,r),this.applyMatrix4(Wn),this}lookAt(e){return jc.lookAt(e),jc.updateMatrix(),this.applyMatrix4(jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){const n=[];for(let r=0,a=e.length;r<a;r++){const u=e[r];n.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new Oi(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Go);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];Fn.setFromBufferAttribute(u),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const r=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),n)for(let u=0,f=n.length;u<f;u++){const d=n[u];Io.setFromBufferAttribute(d),this.morphTargetsRelative?(en.addVectors(Fn.min,Io.min),Fn.expandByPoint(en),en.addVectors(Fn.max,Io.max),Fn.expandByPoint(en)):(Fn.expandByPoint(Io.min),Fn.expandByPoint(Io.max))}Fn.getCenter(r);let a=0;for(let u=0,f=e.count;u<f;u++)en.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(en));if(n)for(let u=0,f=n.length;u<f;u++){const d=n[u],p=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)en.fromBufferAttribute(d,m),p&&(Ps.fromBufferAttribute(e,m),en.add(Ps)),a=Math.max(a,r.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let Y=0;Y<r.count;Y++)d[Y]=new Q,p[Y]=new Q;const m=new Q,g=new Q,x=new Q,y=new At,S=new At,w=new At,A=new Q,v=new Q;function _(Y,Se,E){m.fromBufferAttribute(r,Y),g.fromBufferAttribute(r,Se),x.fromBufferAttribute(r,E),y.fromBufferAttribute(u,Y),S.fromBufferAttribute(u,Se),w.fromBufferAttribute(u,E),g.sub(m),x.sub(m),S.sub(y),w.sub(y);const R=1/(S.x*w.y-w.x*S.y);isFinite(R)&&(A.copy(g).multiplyScalar(w.y).addScaledVector(x,-S.y).multiplyScalar(R),v.copy(x).multiplyScalar(S.x).addScaledVector(g,-w.x).multiplyScalar(R),d[Y].add(A),d[Se].add(A),d[E].add(A),p[Y].add(v),p[Se].add(v),p[E].add(v))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let Y=0,Se=I.length;Y<Se;++Y){const E=I[Y],R=E.start,re=E.count;for(let ee=R,ue=R+re;ee<ue;ee+=3)_(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const P=new Q,N=new Q,J=new Q,z=new Q;function U(Y){J.fromBufferAttribute(a,Y),z.copy(J);const Se=d[Y];P.copy(Se),P.sub(J.multiplyScalar(J.dot(Se))).normalize(),N.crossVectors(z,Se);const R=N.dot(p[Y])<0?-1:1;f.setXYZW(Y,P.x,P.y,P.z,R)}for(let Y=0,Se=I.length;Y<Se;++Y){const E=I[Y],R=E.start,re=E.count;for(let ee=R,ue=R+re;ee<ue;ee+=3)U(e.getX(ee+0)),U(e.getX(ee+1)),U(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new An(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const a=new Q,u=new Q,f=new Q,d=new Q,p=new Q,m=new Q,g=new Q,x=new Q;if(e)for(let y=0,S=e.count;y<S;y+=3){const w=e.getX(y+0),A=e.getX(y+1),v=e.getX(y+2);a.fromBufferAttribute(n,w),u.fromBufferAttribute(n,A),f.fromBufferAttribute(n,v),g.subVectors(f,u),x.subVectors(a,u),g.cross(x),d.fromBufferAttribute(r,w),p.fromBufferAttribute(r,A),m.fromBufferAttribute(r,v),d.add(g),p.add(g),m.add(g),r.setXYZ(w,d.x,d.y,d.z),r.setXYZ(A,p.x,p.y,p.z),r.setXYZ(v,m.x,m.y,m.z)}else for(let y=0,S=n.count;y<S;y+=3)a.fromBufferAttribute(n,y+0),u.fromBufferAttribute(n,y+1),f.fromBufferAttribute(n,y+2),g.subVectors(f,u),x.subVectors(a,u),g.cross(x),r.setXYZ(y+0,g.x,g.y,g.z),r.setXYZ(y+1,g.x,g.y,g.z),r.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)en.fromBufferAttribute(e,n),en.normalize(),e.setXYZ(n,en.x,en.y,en.z)}toNonIndexed(){function e(d,p){const m=d.array,g=d.itemSize,x=d.normalized,y=new m.constructor(p.length*g);let S=0,w=0;for(let A=0,v=p.length;A<v;A++){d.isInterleavedBufferAttribute?S=p[A]*d.data.stride+d.offset:S=p[A]*g;for(let _=0;_<g;_++)y[w++]=m[S++]}return new An(y,g,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ai,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,r);n.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let g=0,x=m.length;g<x;g++){const y=m[g],S=e(y,r);p.push(S)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let x=0,y=m.length;x<y;x++){const S=m[x];g.push(S.toJSON(e.data))}g.length>0&&(a[p]=g,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const g=a[m];this.setAttribute(m,g.clone(n))}const u=e.morphAttributes;for(const m in u){const g=[],x=u[m];for(let y=0,S=x.length;y<S;y++)g.push(x[y].clone(n));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,g=f.length;m<g;m++){const x=f[m];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jp=new Bt,Ir=new nd,al=new Wo,em=new Q,ll=new Q,ul=new Q,cl=new Q,Yc=new Q,fl=new Q,tm=new Q,dl=new Q;class Fi extends vn{constructor(e=new ai,n=new ig){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(u&&d){fl.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const g=d[p],x=u[p];g!==0&&(Yc.fromBufferAttribute(x,e),f?fl.addScaledVector(Yc,g):fl.addScaledVector(Yc.sub(n),g))}n.add(fl)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),al.copy(r.boundingSphere),al.applyMatrix4(u),Ir.copy(e.ray).recast(e.near),!(al.containsPoint(Ir.origin)===!1&&(Ir.intersectSphere(al,em)===null||Ir.origin.distanceToSquared(em)>(e.far-e.near)**2))&&(Jp.copy(u).invert(),Ir.copy(e.ray).applyMatrix4(Jp),!(r.boundingBox!==null&&Ir.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Ir)))}_computeIntersections(e,n,r){let a;const u=this.geometry,f=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,g=u.attributes.uv1,x=u.attributes.normal,y=u.groups,S=u.drawRange;if(d!==null)if(Array.isArray(f))for(let w=0,A=y.length;w<A;w++){const v=y[w],_=f[v.materialIndex],I=Math.max(v.start,S.start),P=Math.min(d.count,Math.min(v.start+v.count,S.start+S.count));for(let N=I,J=P;N<J;N+=3){const z=d.getX(N),U=d.getX(N+1),Y=d.getX(N+2);a=hl(this,_,e,r,m,g,x,z,U,Y),a&&(a.faceIndex=Math.floor(N/3),a.face.materialIndex=v.materialIndex,n.push(a))}}else{const w=Math.max(0,S.start),A=Math.min(d.count,S.start+S.count);for(let v=w,_=A;v<_;v+=3){const I=d.getX(v),P=d.getX(v+1),N=d.getX(v+2);a=hl(this,f,e,r,m,g,x,I,P,N),a&&(a.faceIndex=Math.floor(v/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(f))for(let w=0,A=y.length;w<A;w++){const v=y[w],_=f[v.materialIndex],I=Math.max(v.start,S.start),P=Math.min(p.count,Math.min(v.start+v.count,S.start+S.count));for(let N=I,J=P;N<J;N+=3){const z=N,U=N+1,Y=N+2;a=hl(this,_,e,r,m,g,x,z,U,Y),a&&(a.faceIndex=Math.floor(N/3),a.face.materialIndex=v.materialIndex,n.push(a))}}else{const w=Math.max(0,S.start),A=Math.min(p.count,S.start+S.count);for(let v=w,_=A;v<_;v+=3){const I=v,P=v+1,N=v+2;a=hl(this,f,e,r,m,g,x,I,P,N),a&&(a.faceIndex=Math.floor(v/3),n.push(a))}}}}function M0(s,e,n,r,a,u,f,d){let p;if(e.side===Cn?p=r.intersectTriangle(f,u,a,!0,d):p=r.intersectTriangle(a,u,f,e.side===vr,d),p===null)return null;dl.copy(d),dl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(dl);return m<n.near||m>n.far?null:{distance:m,point:dl.clone(),object:s}}function hl(s,e,n,r,a,u,f,d,p,m){s.getVertexPosition(d,ll),s.getVertexPosition(p,ul),s.getVertexPosition(m,cl);const g=M0(s,e,n,r,ll,ul,cl,tm);if(g){const x=new Q;si.getBarycoord(tm,ll,ul,cl,x),a&&(g.uv=si.getInterpolatedAttribute(a,d,p,m,x,new At)),u&&(g.uv1=si.getInterpolatedAttribute(u,d,p,m,x,new At)),f&&(g.normal=si.getInterpolatedAttribute(f,d,p,m,x,new Q),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const y={a:d,b:p,c:m,normal:new Q,materialIndex:0};si.getNormal(ll,ul,cl,y.normal),g.face=y,g.barycoord=x}return g}class Xo extends ai{constructor(e=1,n=1,r=1,a=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:f};const d=this;a=Math.floor(a),u=Math.floor(u),f=Math.floor(f);const p=[],m=[],g=[],x=[];let y=0,S=0;w("z","y","x",-1,-1,r,n,e,f,u,0),w("z","y","x",1,-1,r,n,-e,f,u,1),w("x","z","y",1,1,e,r,n,a,f,2),w("x","z","y",1,-1,e,r,-n,a,f,3),w("x","y","z",1,-1,e,n,r,a,u,4),w("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(p),this.setAttribute("position",new Oi(m,3)),this.setAttribute("normal",new Oi(g,3)),this.setAttribute("uv",new Oi(x,2));function w(A,v,_,I,P,N,J,z,U,Y,Se){const E=N/U,R=J/Y,re=N/2,ee=J/2,ue=z/2,fe=U+1,te=Y+1;let le=0,O=0;const ce=new Q;for(let se=0;se<te;se++){const D=se*R-ee;for(let ne=0;ne<fe;ne++){const Pe=ne*E-re;ce[A]=Pe*I,ce[v]=D*P,ce[_]=ue,m.push(ce.x,ce.y,ce.z),ce[A]=0,ce[v]=0,ce[_]=z>0?1:-1,g.push(ce.x,ce.y,ce.z),x.push(ne/U),x.push(1-se/Y),le+=1}}for(let se=0;se<Y;se++)for(let D=0;D<U;D++){const ne=y+D+fe*se,Pe=y+D+fe*(se+1),j=y+(D+1)+fe*(se+1),ae=y+(D+1)+fe*se;p.push(ne,Pe,ae),p.push(Pe,j,ae),O+=6}d.addGroup(S,O,Se),S+=O,y+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gs(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function gn(s){const e={};for(let n=0;n<s.length;n++){const r=Gs(s[n]);for(const a in r)e[a]=r[a]}return e}function E0(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function og(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const T0={clone:Gs,merge:gn};var w0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,A0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mi extends Xs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=w0,this.fragmentShader=A0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=E0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?n.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[a]={type:"m4",value:f.toArray()}:n.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class ag extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=Ui}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hr=new Q,nm=new At,im=new At;class ii extends ag{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Gf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ac*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gf*2*Math.atan(Math.tan(Ac*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hr.x,hr.y).multiplyScalar(-e/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(hr.x,hr.y).multiplyScalar(-e/hr.z)}getViewSize(e,n){return this.getViewBounds(e,nm,im),n.subVectors(im,nm)}setViewOffset(e,n,r,a,u,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ac*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;u+=f.offsetX*a/p,n-=f.offsetY*r/m,a*=f.width/p,r*=f.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const bs=-90,Ls=1;class C0 extends vn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ii(bs,Ls,e,n);a.layers=this.layers,this.add(a);const u=new ii(bs,Ls,e,n);u.layers=this.layers,this.add(u);const f=new ii(bs,Ls,e,n);f.layers=this.layers,this.add(f);const d=new ii(bs,Ls,e,n);d.layers=this.layers,this.add(d);const p=new ii(bs,Ls,e,n);p.layers=this.layers,this.add(p);const m=new ii(bs,Ls,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,f,d,p]=n;for(const m of n)this.remove(m);if(e===Ui)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Ul)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,p,m,g]=this.children,x=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,f),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,a),e.render(n,g),e.setRenderTarget(x,y,S),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class lg extends Rn{constructor(e,n,r,a,u,f,d,p,m,g){e=e!==void 0?e:[],n=n!==void 0?n:Bs,super(e,n,r,a,u,f,d,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class R0 extends jr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new lg(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ri}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Xo(5,5,5),u=new mi({name:"CubemapFromEquirect",uniforms:Gs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Cn,blending:mr});u.uniforms.tEquirect.value=n;const f=new Fi(a,u),d=n.minFilter;return n.minFilter===Wr&&(n.minFilter=ri),new C0(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n,r,a){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,a);e.setRenderTarget(u)}}const qc=new Q,P0=new Q,b0=new st;class Br{constructor(e=new Q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=qc.subVectors(r,n).cross(P0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(qc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||b0.getNormalMatrix(e),a=this.coplanarPoint(qc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ur=new Wo,pl=new Q;class ug{constructor(e=new Br,n=new Br,r=new Br,a=new Br,u=new Br,f=new Br){this.planes=[e,n,r,a,u,f]}set(e,n,r,a,u,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(u),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Ui){const r=this.planes,a=e.elements,u=a[0],f=a[1],d=a[2],p=a[3],m=a[4],g=a[5],x=a[6],y=a[7],S=a[8],w=a[9],A=a[10],v=a[11],_=a[12],I=a[13],P=a[14],N=a[15];if(r[0].setComponents(p-u,y-m,v-S,N-_).normalize(),r[1].setComponents(p+u,y+m,v+S,N+_).normalize(),r[2].setComponents(p+f,y+g,v+w,N+I).normalize(),r[3].setComponents(p-f,y-g,v-w,N-I).normalize(),r[4].setComponents(p-d,y-x,v-A,N-P).normalize(),n===Ui)r[5].setComponents(p+d,y+x,v+A,N+P).normalize();else if(n===Ul)r[5].setComponents(d,x,A,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(e){return Ur.center.set(0,0,0),Ur.radius=.7071067811865476,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(pl.x=a.normal.x>0?e.max.x:e.min.x,pl.y=a.normal.y>0?e.max.y:e.min.y,pl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(pl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cg(){let s=null,e=!1,n=null,r=null;function a(u,f){n(u,f),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){s=u}}}function L0(s){const e=new WeakMap;function n(d,p){const m=d.array,g=d.usage,x=m.byteLength,y=s.createBuffer();s.bindBuffer(p,y),s.bufferData(p,m,g),d.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:x}}function r(d,p,m){const g=p.array,x=p.updateRanges;if(s.bindBuffer(m,d),x.length===0)s.bufferSubData(m,0,g);else{x.sort((S,w)=>S.start-w.start);let y=0;for(let S=1;S<x.length;S++){const w=x[y],A=x[S];A.start<=w.start+w.count+1?w.count=Math.max(w.count,A.start+A.count-w.start):(++y,x[y]=A)}x.length=y+1;for(let S=0,w=x.length;S<w;S++){const A=x[S];s.bufferSubData(m,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:a,remove:u,update:f}}class Hl extends ai{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,f=n/2,d=Math.floor(r),p=Math.floor(a),m=d+1,g=p+1,x=e/d,y=n/p,S=[],w=[],A=[],v=[];for(let _=0;_<g;_++){const I=_*y-f;for(let P=0;P<m;P++){const N=P*x-u;w.push(N,-I,0),A.push(0,0,1),v.push(P/d),v.push(1-_/p)}}for(let _=0;_<p;_++)for(let I=0;I<d;I++){const P=I+m*_,N=I+m*(_+1),J=I+1+m*(_+1),z=I+1+m*_;S.push(P,N,z),S.push(N,J,z)}this.setIndex(S),this.setAttribute("position",new Oi(w,3)),this.setAttribute("normal",new Oi(A,3)),this.setAttribute("uv",new Oi(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hl(e.width,e.height,e.widthSegments,e.heightSegments)}}var D0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,N0=`#ifdef USE_ALPHAHASH
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
#endif`,U0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,F0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,O0=`#ifdef USE_ALPHATEST
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
#endif`,z0=`#ifdef USE_BATCHING
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
#endif`,H0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,V0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,G0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,W0=`float G_BlinnPhong_Implicit( ) {
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
#endif`,j0=`#ifdef USE_BUMPMAP
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
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,K0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Z0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Q0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,J0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ex=`#if defined( USE_COLOR_ALPHA )
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
#endif`,tx=`#define PI 3.141592653589793
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
#endif`,rx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ox=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ax=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lx="gl_FragColor = linearToOutputTexel( gl_FragColor );",ux=`
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
}`,cx=`#ifdef USE_ENVMAP
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
#endif`,fx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dx=`#ifdef USE_ENVMAP
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
#endif`,hx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,px=`#ifdef USE_ENVMAP
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
#endif`,mx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_x=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xx=`#ifdef USE_GRADIENTMAP
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
}`,yx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ex=`uniform bool receiveShadow;
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
#endif`,Tx=`#ifdef USE_ENVMAP
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
#endif`,wx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ax=`varying vec3 vViewPosition;
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
material.specularStrength = specularStrength;`,Rx=`varying vec3 vViewPosition;
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
#endif`,bx=`struct PhysicalMaterial {
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
}`,Lx=`
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
#endif`,Dx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ix=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ux=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ox=`#ifdef USE_LOGDEPTHBUF
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
#endif`,zx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hx=`#if defined( USE_POINTS_UV )
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
#endif`,Vx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wx=`#ifdef USE_INSTANCING_MORPH
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
#endif`,jx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yx=`#ifdef USE_MORPHTARGETS
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
#endif`,qx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#endif`,Zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ey=`#ifdef USE_NORMALMAP
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
#endif`,ty=`#ifdef USE_CLEARCOAT
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
#endif`,ry=`#ifdef USE_IRIDESCENCEMAP
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
}`,ay=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ly=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,py=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,my=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gy=`float getShadowMask() {
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
}`,vy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_y=`#ifdef USE_SKINNING
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
#endif`,xy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yy=`#ifdef USE_SKINNING
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
#endif`,Sy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,My=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ey=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ty=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wy=`#ifdef USE_TRANSMISSION
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
#endif`,Ay=`#ifdef USE_TRANSMISSION
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
#endif`,Ry=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,by=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ly=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dy=`uniform sampler2D t2D;
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
}`,Ny=`varying vec3 vWorldDirection;
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
}`,Uy=`varying vec3 vWorldDirection;
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
}`,Oy=`#include <common>
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
}`,zy=`#define DISTANCE
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
}`,Hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gy=`uniform float scale;
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
}`,Wy=`uniform vec3 diffuse;
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
}`,jy=`uniform vec3 diffuse;
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
}`,Yy=`#define LAMBERT
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
}`,qy=`#define LAMBERT
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
}`,Ky=`#define MATCAP
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
}`,Zy=`#define NORMAL
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
}`,Qy=`#define NORMAL
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
}`,Jy=`#define PHONG
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
}`,eS=`#define PHONG
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
}`,tS=`#define STANDARD
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
}`,rS=`#define TOON
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
}`,aS=`#include <common>
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
}`,lS=`uniform vec3 color;
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
}`,uS=`uniform float rotation;
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
}`,cS=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:D0,alphahash_pars_fragment:N0,alphamap_fragment:I0,alphamap_pars_fragment:U0,alphatest_fragment:F0,alphatest_pars_fragment:O0,aomap_fragment:k0,aomap_pars_fragment:B0,batching_pars_vertex:z0,batching_vertex:H0,begin_vertex:V0,beginnormal_vertex:G0,bsdfs:W0,iridescence_fragment:X0,bumpmap_pars_fragment:j0,clipping_planes_fragment:Y0,clipping_planes_pars_fragment:q0,clipping_planes_pars_vertex:K0,clipping_planes_vertex:$0,color_fragment:Z0,color_pars_fragment:Q0,color_pars_vertex:J0,color_vertex:ex,common:tx,cube_uv_reflection_fragment:nx,defaultnormal_vertex:ix,displacementmap_pars_vertex:rx,displacementmap_vertex:sx,emissivemap_fragment:ox,emissivemap_pars_fragment:ax,colorspace_fragment:lx,colorspace_pars_fragment:ux,envmap_fragment:cx,envmap_common_pars_fragment:fx,envmap_pars_fragment:dx,envmap_pars_vertex:hx,envmap_physical_pars_fragment:Tx,envmap_vertex:px,fog_vertex:mx,fog_pars_vertex:gx,fog_fragment:vx,fog_pars_fragment:_x,gradientmap_pars_fragment:xx,lightmap_pars_fragment:yx,lights_lambert_fragment:Sx,lights_lambert_pars_fragment:Mx,lights_pars_begin:Ex,lights_toon_fragment:wx,lights_toon_pars_fragment:Ax,lights_phong_fragment:Cx,lights_phong_pars_fragment:Rx,lights_physical_fragment:Px,lights_physical_pars_fragment:bx,lights_fragment_begin:Lx,lights_fragment_maps:Dx,lights_fragment_end:Nx,logdepthbuf_fragment:Ix,logdepthbuf_pars_fragment:Ux,logdepthbuf_pars_vertex:Fx,logdepthbuf_vertex:Ox,map_fragment:kx,map_pars_fragment:Bx,map_particle_fragment:zx,map_particle_pars_fragment:Hx,metalnessmap_fragment:Vx,metalnessmap_pars_fragment:Gx,morphinstance_vertex:Wx,morphcolor_vertex:Xx,morphnormal_vertex:jx,morphtarget_pars_vertex:Yx,morphtarget_vertex:qx,normal_fragment_begin:Kx,normal_fragment_maps:$x,normal_pars_fragment:Zx,normal_pars_vertex:Qx,normal_vertex:Jx,normalmap_pars_fragment:ey,clearcoat_normal_fragment_begin:ty,clearcoat_normal_fragment_maps:ny,clearcoat_pars_fragment:iy,iridescence_pars_fragment:ry,opaque_fragment:sy,packing:oy,premultiplied_alpha_fragment:ay,project_vertex:ly,dithering_fragment:uy,dithering_pars_fragment:cy,roughnessmap_fragment:fy,roughnessmap_pars_fragment:dy,shadowmap_pars_fragment:hy,shadowmap_pars_vertex:py,shadowmap_vertex:my,shadowmask_pars_fragment:gy,skinbase_vertex:vy,skinning_pars_vertex:_y,skinning_vertex:xy,skinnormal_vertex:yy,specularmap_fragment:Sy,specularmap_pars_fragment:My,tonemapping_fragment:Ey,tonemapping_pars_fragment:Ty,transmission_fragment:wy,transmission_pars_fragment:Ay,uv_pars_fragment:Cy,uv_pars_vertex:Ry,uv_vertex:Py,worldpos_vertex:by,background_vert:Ly,background_frag:Dy,backgroundCube_vert:Ny,backgroundCube_frag:Iy,cube_vert:Uy,cube_frag:Fy,depth_vert:Oy,depth_frag:ky,distanceRGBA_vert:By,distanceRGBA_frag:zy,equirect_vert:Hy,equirect_frag:Vy,linedashed_vert:Gy,linedashed_frag:Wy,meshbasic_vert:Xy,meshbasic_frag:jy,meshlambert_vert:Yy,meshlambert_frag:qy,meshmatcap_vert:Ky,meshmatcap_frag:$y,meshnormal_vert:Zy,meshnormal_frag:Qy,meshphong_vert:Jy,meshphong_frag:eS,meshphysical_vert:tS,meshphysical_frag:nS,meshtoon_vert:iS,meshtoon_frag:rS,points_vert:sS,points_frag:oS,shadow_vert:aS,shadow_frag:lS,sprite_vert:uS,sprite_frag:cS},Re={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},pi={basic:{uniforms:gn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:gn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new xt(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:gn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:gn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:gn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new xt(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:gn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:gn([Re.points,Re.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:gn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:gn([Re.common,Re.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:gn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:gn([Re.sprite,Re.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:gn([Re.common,Re.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:gn([Re.lights,Re.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};pi.physical={uniforms:gn([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const ml={r:0,b:0,g:0},Fr=new Bi,fS=new Bt;function dS(s,e,n,r,a,u,f){const d=new xt(0);let p=u===!0?0:1,m,g,x=null,y=0,S=null;function w(I){let P=I.isScene===!0?I.background:null;return P&&P.isTexture&&(P=(I.backgroundBlurriness>0?n:e).get(P)),P}function A(I){let P=!1;const N=w(I);N===null?_(d,p):N&&N.isColor&&(_(N,1),P=!0);const J=s.xr.getEnvironmentBlendMode();J==="additive"?r.buffers.color.setClear(0,0,0,1,f):J==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(I,P){const N=w(P);N&&(N.isCubeTexture||N.mapping===Bl)?(g===void 0&&(g=new Fi(new Xo(1,1,1),new mi({name:"BackgroundCubeMaterial",uniforms:Gs(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(J,z,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(g)),Fr.copy(P.backgroundRotation),Fr.x*=-1,Fr.y*=-1,Fr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Fr.y*=-1,Fr.z*=-1),g.material.uniforms.envMap.value=N,g.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(fS.makeRotationFromEuler(Fr)),g.material.toneMapped=Mt.getTransfer(N.colorSpace)!==Dt,(x!==N||y!==N.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,x=N,y=N.version,S=s.toneMapping),g.layers.enableAll(),I.unshift(g,g.geometry,g.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new Fi(new Hl(2,2),new mi({name:"BackgroundMaterial",uniforms:Gs(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Mt.getTransfer(N.colorSpace)!==Dt,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(x!==N||y!==N.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,x=N,y=N.version,S=s.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null))}function _(I,P){I.getRGB(ml,og(s)),r.buffers.color.setClear(ml.r,ml.g,ml.b,P,f)}return{getClearColor:function(){return d},setClearColor:function(I,P=1){d.set(I),p=P,_(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(I){p=I,_(d,p)},render:A,addToRenderList:v}}function hS(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=y(null);let u=a,f=!1;function d(E,R,re,ee,ue){let fe=!1;const te=x(ee,re,R);u!==te&&(u=te,m(u.object)),fe=S(E,ee,re,ue),fe&&w(E,ee,re,ue),ue!==null&&e.update(ue,s.ELEMENT_ARRAY_BUFFER),(fe||f)&&(f=!1,N(E,R,re,ee),ue!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function p(){return s.createVertexArray()}function m(E){return s.bindVertexArray(E)}function g(E){return s.deleteVertexArray(E)}function x(E,R,re){const ee=re.wireframe===!0;let ue=r[E.id];ue===void 0&&(ue={},r[E.id]=ue);let fe=ue[R.id];fe===void 0&&(fe={},ue[R.id]=fe);let te=fe[ee];return te===void 0&&(te=y(p()),fe[ee]=te),te}function y(E){const R=[],re=[],ee=[];for(let ue=0;ue<n;ue++)R[ue]=0,re[ue]=0,ee[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:re,attributeDivisors:ee,object:E,attributes:{},index:null}}function S(E,R,re,ee){const ue=u.attributes,fe=R.attributes;let te=0;const le=re.getAttributes();for(const O in le)if(le[O].location>=0){const se=ue[O];let D=fe[O];if(D===void 0&&(O==="instanceMatrix"&&E.instanceMatrix&&(D=E.instanceMatrix),O==="instanceColor"&&E.instanceColor&&(D=E.instanceColor)),se===void 0||se.attribute!==D||D&&se.data!==D.data)return!0;te++}return u.attributesNum!==te||u.index!==ee}function w(E,R,re,ee){const ue={},fe=R.attributes;let te=0;const le=re.getAttributes();for(const O in le)if(le[O].location>=0){let se=fe[O];se===void 0&&(O==="instanceMatrix"&&E.instanceMatrix&&(se=E.instanceMatrix),O==="instanceColor"&&E.instanceColor&&(se=E.instanceColor));const D={};D.attribute=se,se&&se.data&&(D.data=se.data),ue[O]=D,te++}u.attributes=ue,u.attributesNum=te,u.index=ee}function A(){const E=u.newAttributes;for(let R=0,re=E.length;R<re;R++)E[R]=0}function v(E){_(E,0)}function _(E,R){const re=u.newAttributes,ee=u.enabledAttributes,ue=u.attributeDivisors;re[E]=1,ee[E]===0&&(s.enableVertexAttribArray(E),ee[E]=1),ue[E]!==R&&(s.vertexAttribDivisor(E,R),ue[E]=R)}function I(){const E=u.newAttributes,R=u.enabledAttributes;for(let re=0,ee=R.length;re<ee;re++)R[re]!==E[re]&&(s.disableVertexAttribArray(re),R[re]=0)}function P(E,R,re,ee,ue,fe,te){te===!0?s.vertexAttribIPointer(E,R,re,ue,fe):s.vertexAttribPointer(E,R,re,ee,ue,fe)}function N(E,R,re,ee){A();const ue=ee.attributes,fe=re.getAttributes(),te=R.defaultAttributeValues;for(const le in fe){const O=fe[le];if(O.location>=0){let ce=ue[le];if(ce===void 0&&(le==="instanceMatrix"&&E.instanceMatrix&&(ce=E.instanceMatrix),le==="instanceColor"&&E.instanceColor&&(ce=E.instanceColor)),ce!==void 0){const se=ce.normalized,D=ce.itemSize,ne=e.get(ce);if(ne===void 0)continue;const Pe=ne.buffer,j=ne.type,ae=ne.bytesPerElement,xe=j===s.INT||j===s.UNSIGNED_INT||ce.gpuType===Kf;if(ce.isInterleavedBufferAttribute){const ye=ce.data,be=ye.stride,Le=ce.offset;if(ye.isInstancedInterleavedBuffer){for(let et=0;et<O.locationSize;et++)_(O.location+et,ye.meshPerAttribute);E.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let et=0;et<O.locationSize;et++)v(O.location+et);s.bindBuffer(s.ARRAY_BUFFER,Pe);for(let et=0;et<O.locationSize;et++)P(O.location+et,D/O.locationSize,j,se,be*ae,(Le+D/O.locationSize*et)*ae,xe)}else{if(ce.isInstancedBufferAttribute){for(let ye=0;ye<O.locationSize;ye++)_(O.location+ye,ce.meshPerAttribute);E.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ye=0;ye<O.locationSize;ye++)v(O.location+ye);s.bindBuffer(s.ARRAY_BUFFER,Pe);for(let ye=0;ye<O.locationSize;ye++)P(O.location+ye,D/O.locationSize,j,se,D*ae,D/O.locationSize*ye*ae,xe)}}else if(te!==void 0){const se=te[le];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(O.location,se);break;case 3:s.vertexAttrib3fv(O.location,se);break;case 4:s.vertexAttrib4fv(O.location,se);break;default:s.vertexAttrib1fv(O.location,se)}}}}I()}function J(){Y();for(const E in r){const R=r[E];for(const re in R){const ee=R[re];for(const ue in ee)g(ee[ue].object),delete ee[ue];delete R[re]}delete r[E]}}function z(E){if(r[E.id]===void 0)return;const R=r[E.id];for(const re in R){const ee=R[re];for(const ue in ee)g(ee[ue].object),delete ee[ue];delete R[re]}delete r[E.id]}function U(E){for(const R in r){const re=r[R];if(re[E.id]===void 0)continue;const ee=re[E.id];for(const ue in ee)g(ee[ue].object),delete ee[ue];delete re[E.id]}}function Y(){Se(),f=!0,u!==a&&(u=a,m(u.object))}function Se(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:Se,dispose:J,releaseStatesOfGeometry:z,releaseStatesOfProgram:U,initAttributes:A,enableAttribute:v,disableUnusedAttributes:I}}function pS(s,e,n){let r;function a(m){r=m}function u(m,g){s.drawArrays(r,m,g),n.update(g,r,1)}function f(m,g,x){x!==0&&(s.drawArraysInstanced(r,m,g,x),n.update(g,r,x))}function d(m,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,x);let S=0;for(let w=0;w<x;w++)S+=g[w];n.update(S,r,1)}function p(m,g,x,y){if(x===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let w=0;w<m.length;w++)f(m[w],g[w],y[w]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,g,0,y,0,x);let w=0;for(let A=0;A<x;A++)w+=g[A];for(let A=0;A<y.length;A++)n.update(w,r,y[A])}}this.setMode=a,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function mS(s,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function f(U){return!(U!==oi&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(U){const Y=U===zo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==ki&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Ii&&!Y)}function p(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const x=n.logarithmicDepthBuffer===!0,y=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(y===!0){const U=e.get("EXT_clip_control");U.clipControlEXT(U.LOWER_LEFT_EXT,U.ZERO_TO_ONE_EXT)}const S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),I=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),N=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),J=w>0,z=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:x,reverseDepthBuffer:y,maxTextures:S,maxVertexTextures:w,maxTextureSize:A,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:I,maxVaryings:P,maxFragmentUniforms:N,vertexTextures:J,maxSamples:z}}function gS(s){const e=this;let n=null,r=0,a=!1,u=!1;const f=new Br,d=new st,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,y){const S=x.length!==0||y||r!==0||a;return a=y,r=x.length,S},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,y){n=g(x,y,0)},this.setState=function(x,y,S){const w=x.clippingPlanes,A=x.clipIntersection,v=x.clipShadows,_=s.get(x);if(!a||w===null||w.length===0||u&&!v)u?g(null):m();else{const I=u?0:r,P=I*4;let N=_.clippingState||null;p.value=N,N=g(w,y,P,S);for(let J=0;J!==P;++J)N[J]=n[J];_.clippingState=N,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=I}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(x,y,S,w){const A=x!==null?x.length:0;let v=null;if(A!==0){if(v=p.value,w!==!0||v===null){const _=S+A*4,I=y.matrixWorldInverse;d.getNormalMatrix(I),(v===null||v.length<_)&&(v=new Float32Array(_));for(let P=0,N=S;P!==A;++P,N+=4)f.copy(x[P]).applyMatrix4(I,d),f.normal.toArray(v,N),v[N+3]=f.constant}p.value=v,p.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,v}}function vS(s){let e=new WeakMap;function n(f,d){return d===hf?f.mapping=Bs:d===pf&&(f.mapping=zs),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===hf||d===pf)if(e.has(f)){const p=e.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new R0(p.height);return m.fromEquirectangularTexture(s,f),e.set(f,m),f.addEventListener("dispose",a),n(m.texture,f.mapping)}else return null}}return f}function a(f){const d=f.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class fg extends ag{constructor(e=-1,n=1,r=1,a=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,f=r+e,d=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Is=4,rm=[.125,.215,.35,.446,.526,.582],Vr=20,Kc=new fg,sm=new xt;let $c=null,Zc=0,Qc=0,Jc=!1;const zr=(1+Math.sqrt(5))/2,Ds=1/zr,om=[new Q(-zr,Ds,0),new Q(zr,Ds,0),new Q(-Ds,0,zr),new Q(Ds,0,zr),new Q(0,zr,-Ds),new Q(0,zr,Ds),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)];class am{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){$c=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,a,u),n>0&&this._blur(u,0,0,n),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=um(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($c,Zc,Qc),this._renderer.xr.enabled=Jc,e.scissorTest=!1,gl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Bs||e.mapping===zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$c=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:ri,minFilter:ri,generateMipmaps:!1,type:zo,format:oi,colorSpace:_r,depthBuffer:!1},a=lm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lm(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_S(u)),this._blurMaterial=xS(u,e,n)}return a}_compileMaterial(e){const n=new Fi(this._lodPlanes[0],e);this._renderer.compile(n,Kc)}_sceneToCubeUV(e,n,r,a){const d=new ii(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,y=g.toneMapping;g.getClearColor(sm),g.toneMapping=gr,g.autoClear=!1;const S=new ig({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1}),w=new Fi(new Xo,S);let A=!1;const v=e.background;v?v.isColor&&(S.color.copy(v),e.background=null,A=!0):(S.color.copy(sm),A=!0);for(let _=0;_<6;_++){const I=_%3;I===0?(d.up.set(0,p[_],0),d.lookAt(m[_],0,0)):I===1?(d.up.set(0,0,p[_]),d.lookAt(0,m[_],0)):(d.up.set(0,p[_],0),d.lookAt(0,0,m[_]));const P=this._cubeSize;gl(a,I*P,_>2?P:0,P,P),g.setRenderTarget(a),A&&g.render(w,d),g.render(e,d)}w.geometry.dispose(),w.material.dispose(),g.toneMapping=y,g.autoClear=x,e.background=v}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Bs||e.mapping===zs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=cm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=um());const u=a?this._cubemapMaterial:this._equirectMaterial,f=new Fi(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;gl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(f,Kc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=om[(a-u-1)%om.length];this._blur(e,u-1,u,f,d)}n.autoClear=r}_blur(e,n,r,a,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,a,"latitudinal",u),this._halfBlur(f,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,x=new Fi(this._lodPlanes[a],m),y=m.uniforms,S=this._sizeLods[r]-1,w=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Vr-1),A=u/w,v=isFinite(u)?1+Math.floor(g*A):Vr;v>Vr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Vr}`);const _=[];let I=0;for(let U=0;U<Vr;++U){const Y=U/A,Se=Math.exp(-Y*Y/2);_.push(Se),U===0?I+=Se:U<v&&(I+=2*Se)}for(let U=0;U<_.length;U++)_[U]=_[U]/I;y.envMap.value=e.texture,y.samples.value=v,y.weights.value=_,y.latitudinal.value=f==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:P}=this;y.dTheta.value=w,y.mipInt.value=P-r;const N=this._sizeLods[a],J=3*N*(a>P-Is?a-P+Is:0),z=4*(this._cubeSize-N);gl(n,J,z,3*N,2*N),p.setRenderTarget(n),p.render(x,Kc)}}function _S(s){const e=[],n=[],r=[];let a=s;const u=s-Is+1+rm.length;for(let f=0;f<u;f++){const d=Math.pow(2,a);n.push(d);let p=1/d;f>s-Is?p=rm[f-s+Is-1]:f===0&&(p=0),r.push(p);const m=1/(d-2),g=-m,x=1+m,y=[g,g,x,g,x,x,g,g,x,x,g,x],S=6,w=6,A=3,v=2,_=1,I=new Float32Array(A*w*S),P=new Float32Array(v*w*S),N=new Float32Array(_*w*S);for(let z=0;z<S;z++){const U=z%3*2/3-1,Y=z>2?0:-1,Se=[U,Y,0,U+2/3,Y,0,U+2/3,Y+1,0,U,Y,0,U+2/3,Y+1,0,U,Y+1,0];I.set(Se,A*w*z),P.set(y,v*w*z);const E=[z,z,z,z,z,z];N.set(E,_*w*z)}const J=new ai;J.setAttribute("position",new An(I,A)),J.setAttribute("uv",new An(P,v)),J.setAttribute("faceIndex",new An(N,_)),e.push(J),a>Is&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function lm(s,e,n){const r=new jr(s,e,n);return r.texture.mapping=Bl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function gl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function xS(s,e,n){const r=new Float32Array(Vr),a=new Q(0,1,0);return new mi({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:id(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function um(){return new mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:id(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function cm(){return new mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function id(){return`

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
	`}function yS(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===hf||p===pf,g=p===Bs||p===zs;if(m||g){let x=e.get(d);const y=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return n===null&&(n=new am(s)),x=m?n.fromEquirectangular(d,x):n.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),x.texture;if(x!==void 0)return x.texture;{const S=d.image;return m&&S&&S.height>0||g&&S&&a(S)?(n===null&&(n=new am(s)),x=m?n.fromEquirectangular(d):n.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),d.addEventListener("dispose",u),x.texture):null}}}return d}function a(d){let p=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function SS(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Rl("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function MS(s,e,n,r){const a={},u=new WeakMap;function f(x){const y=x.target;y.index!==null&&e.remove(y.index);for(const w in y.attributes)e.remove(y.attributes[w]);for(const w in y.morphAttributes){const A=y.morphAttributes[w];for(let v=0,_=A.length;v<_;v++)e.remove(A[v])}y.removeEventListener("dispose",f),delete a[y.id];const S=u.get(y);S&&(e.remove(S),u.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,n.memory.geometries--}function d(x,y){return a[y.id]===!0||(y.addEventListener("dispose",f),a[y.id]=!0,n.memory.geometries++),y}function p(x){const y=x.attributes;for(const w in y)e.update(y[w],s.ARRAY_BUFFER);const S=x.morphAttributes;for(const w in S){const A=S[w];for(let v=0,_=A.length;v<_;v++)e.update(A[v],s.ARRAY_BUFFER)}}function m(x){const y=[],S=x.index,w=x.attributes.position;let A=0;if(S!==null){const I=S.array;A=S.version;for(let P=0,N=I.length;P<N;P+=3){const J=I[P+0],z=I[P+1],U=I[P+2];y.push(J,z,z,U,U,J)}}else if(w!==void 0){const I=w.array;A=w.version;for(let P=0,N=I.length/3-1;P<N;P+=3){const J=P+0,z=P+1,U=P+2;y.push(J,z,z,U,U,J)}}else return;const v=new(Qm(y)?sg:rg)(y,1);v.version=A;const _=u.get(x);_&&e.remove(_),u.set(x,v)}function g(x){const y=u.get(x);if(y){const S=x.index;S!==null&&y.version<S.version&&m(x)}else m(x);return u.get(x)}return{get:d,update:p,getWireframeAttribute:g}}function ES(s,e,n){let r;function a(y){r=y}let u,f;function d(y){u=y.type,f=y.bytesPerElement}function p(y,S){s.drawElements(r,S,u,y*f),n.update(S,r,1)}function m(y,S,w){w!==0&&(s.drawElementsInstanced(r,S,u,y*f,w),n.update(S,r,w))}function g(y,S,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,u,y,0,w);let v=0;for(let _=0;_<w;_++)v+=S[_];n.update(v,r,1)}function x(y,S,w,A){if(w===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let _=0;_<y.length;_++)m(y[_]/f,S[_],A[_]);else{v.multiDrawElementsInstancedWEBGL(r,S,0,u,y,0,A,0,w);let _=0;for(let I=0;I<w;I++)_+=S[I];for(let I=0;I<A.length;I++)n.update(_,r,A[I])}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function TS(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(n.calls++,f){case s.TRIANGLES:n.triangles+=d*(u/3);break;case s.LINES:n.lines+=d*(u/2);break;case s.LINE_STRIP:n.lines+=d*(u-1);break;case s.LINE_LOOP:n.lines+=d*u;break;case s.POINTS:n.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function wS(s,e,n){const r=new WeakMap,a=new Ht;function u(f,d,p){const m=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=g!==void 0?g.length:0;let y=r.get(d);if(y===void 0||y.count!==x){let E=function(){Y.dispose(),r.delete(d),d.removeEventListener("dispose",E)};var S=E;y!==void 0&&y.texture.dispose();const w=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,v=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let N=0;w===!0&&(N=1),A===!0&&(N=2),v===!0&&(N=3);let J=d.attributes.position.count*N,z=1;J>e.maxTextureSize&&(z=Math.ceil(J/e.maxTextureSize),J=e.maxTextureSize);const U=new Float32Array(J*z*4*x),Y=new eg(U,J,z,x);Y.type=Ii,Y.needsUpdate=!0;const Se=N*4;for(let R=0;R<x;R++){const re=_[R],ee=I[R],ue=P[R],fe=J*z*4*R;for(let te=0;te<re.count;te++){const le=te*Se;w===!0&&(a.fromBufferAttribute(re,te),U[fe+le+0]=a.x,U[fe+le+1]=a.y,U[fe+le+2]=a.z,U[fe+le+3]=0),A===!0&&(a.fromBufferAttribute(ee,te),U[fe+le+4]=a.x,U[fe+le+5]=a.y,U[fe+le+6]=a.z,U[fe+le+7]=0),v===!0&&(a.fromBufferAttribute(ue,te),U[fe+le+8]=a.x,U[fe+le+9]=a.y,U[fe+le+10]=a.z,U[fe+le+11]=ue.itemSize===4?a.w:1)}}y={count:x,texture:Y,size:new At(J,z)},r.set(d,y),d.addEventListener("dispose",E)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",f.morphTexture,n);else{let w=0;for(let v=0;v<m.length;v++)w+=m[v];const A=d.morphTargetsRelative?1:1-w;p.getUniforms().setValue(s,"morphTargetBaseInfluence",A),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",y.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:u}}function AS(s,e,n,r){let a=new WeakMap;function u(p){const m=r.render.frame,g=p.geometry,x=e.get(p,g);if(a.get(x)!==m&&(e.update(x),a.set(x,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==m&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const y=p.skeleton;a.get(y)!==m&&(y.update(),a.set(y,m))}return x}function f(){a=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:f}}class dg extends Rn{constructor(e,n,r,a,u,f,d,p,m,g=Fs){if(g!==Fs&&g!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===Fs&&(r=Xr),r===void 0&&g===Vs&&(r=Hs),super(null,a,u,f,d,p,g,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:Xn,this.minFilter=p!==void 0?p:Xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const hg=new Rn,fm=new dg(1,1),pg=new eg,mg=new d0,gg=new lg,dm=[],hm=[],pm=new Float32Array(16),mm=new Float32Array(9),gm=new Float32Array(4);function js(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let u=dm[a];if(u===void 0&&(u=new Float32Array(a),dm[a]=u),e!==0){r.toArray(u,0);for(let f=1,d=0;f!==e;++f)d+=n,s[f].toArray(u,d)}return u}function Yt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function qt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Vl(s,e){let n=hm[e];n===void 0&&(n=new Int32Array(e),hm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function CS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function RS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;s.uniform2fv(this.addr,e),qt(n,e)}}function PS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Yt(n,e))return;s.uniform3fv(this.addr,e),qt(n,e)}}function bS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;s.uniform4fv(this.addr,e),qt(n,e)}}function LS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Yt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),qt(n,e)}else{if(Yt(n,r))return;gm.set(r),s.uniformMatrix2fv(this.addr,!1,gm),qt(n,r)}}function DS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Yt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),qt(n,e)}else{if(Yt(n,r))return;mm.set(r),s.uniformMatrix3fv(this.addr,!1,mm),qt(n,r)}}function NS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Yt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),qt(n,e)}else{if(Yt(n,r))return;pm.set(r),s.uniformMatrix4fv(this.addr,!1,pm),qt(n,r)}}function IS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function US(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;s.uniform2iv(this.addr,e),qt(n,e)}}function FS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Yt(n,e))return;s.uniform3iv(this.addr,e),qt(n,e)}}function OS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;s.uniform4iv(this.addr,e),qt(n,e)}}function kS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function BS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;s.uniform2uiv(this.addr,e),qt(n,e)}}function zS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Yt(n,e))return;s.uniform3uiv(this.addr,e),qt(n,e)}}function HS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;s.uniform4uiv(this.addr,e),qt(n,e)}}function VS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let u;this.type===s.SAMPLER_2D_SHADOW?(fm.compareFunction=Zm,u=fm):u=hg,n.setTexture2D(e||u,a)}function GS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||mg,a)}function WS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||gg,a)}function XS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||pg,a)}function jS(s){switch(s){case 5126:return CS;case 35664:return RS;case 35665:return PS;case 35666:return bS;case 35674:return LS;case 35675:return DS;case 35676:return NS;case 5124:case 35670:return IS;case 35667:case 35671:return US;case 35668:case 35672:return FS;case 35669:case 35673:return OS;case 5125:return kS;case 36294:return BS;case 36295:return zS;case 36296:return HS;case 35678:case 36198:case 36298:case 36306:case 35682:return VS;case 35679:case 36299:case 36307:return GS;case 35680:case 36300:case 36308:case 36293:return WS;case 36289:case 36303:case 36311:case 36292:return XS}}function YS(s,e){s.uniform1fv(this.addr,e)}function qS(s,e){const n=js(e,this.size,2);s.uniform2fv(this.addr,n)}function KS(s,e){const n=js(e,this.size,3);s.uniform3fv(this.addr,n)}function $S(s,e){const n=js(e,this.size,4);s.uniform4fv(this.addr,n)}function ZS(s,e){const n=js(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function QS(s,e){const n=js(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function JS(s,e){const n=js(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function eM(s,e){s.uniform1iv(this.addr,e)}function tM(s,e){s.uniform2iv(this.addr,e)}function nM(s,e){s.uniform3iv(this.addr,e)}function iM(s,e){s.uniform4iv(this.addr,e)}function rM(s,e){s.uniform1uiv(this.addr,e)}function sM(s,e){s.uniform2uiv(this.addr,e)}function oM(s,e){s.uniform3uiv(this.addr,e)}function aM(s,e){s.uniform4uiv(this.addr,e)}function lM(s,e,n){const r=this.cache,a=e.length,u=Vl(n,a);Yt(r,u)||(s.uniform1iv(this.addr,u),qt(r,u));for(let f=0;f!==a;++f)n.setTexture2D(e[f]||hg,u[f])}function uM(s,e,n){const r=this.cache,a=e.length,u=Vl(n,a);Yt(r,u)||(s.uniform1iv(this.addr,u),qt(r,u));for(let f=0;f!==a;++f)n.setTexture3D(e[f]||mg,u[f])}function cM(s,e,n){const r=this.cache,a=e.length,u=Vl(n,a);Yt(r,u)||(s.uniform1iv(this.addr,u),qt(r,u));for(let f=0;f!==a;++f)n.setTextureCube(e[f]||gg,u[f])}function fM(s,e,n){const r=this.cache,a=e.length,u=Vl(n,a);Yt(r,u)||(s.uniform1iv(this.addr,u),qt(r,u));for(let f=0;f!==a;++f)n.setTexture2DArray(e[f]||pg,u[f])}function dM(s){switch(s){case 5126:return YS;case 35664:return qS;case 35665:return KS;case 35666:return $S;case 35674:return ZS;case 35675:return QS;case 35676:return JS;case 5124:case 35670:return eM;case 35667:case 35671:return tM;case 35668:case 35672:return nM;case 35669:case 35673:return iM;case 5125:return rM;case 36294:return sM;case 36295:return oM;case 36296:return aM;case 35678:case 36198:case 36298:case 36306:case 35682:return lM;case 35679:case 36299:case 36307:return uM;case 35680:case 36300:case 36308:case 36293:return cM;case 36289:case 36303:case 36311:case 36292:return fM}}class hM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=jS(n.type)}}class pM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=dM(n.type)}}class mM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,f=a.length;u!==f;++u){const d=a[u];d.setValue(e,n[d.id],r)}}}const ef=/(\w+)(\])?(\[|\.)?/g;function vm(s,e){s.seq.push(e),s.map[e.id]=e}function gM(s,e,n){const r=s.name,a=r.length;for(ef.lastIndex=0;;){const u=ef.exec(r),f=ef.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===a){vm(n,m===void 0?new hM(d,s,e):new pM(d,s,e));break}else{let x=n.map[d];x===void 0&&(x=new mM(d),vm(n,x)),n=x}}}class Pl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),f=e.getUniformLocation(n,u.name);gM(u,f,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,f=n.length;u!==f;++u){const d=n[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const f=e[a];f.id in n&&r.push(f)}return r}}function _m(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const vM=37297;let _M=0;function xM(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let f=a;f<u;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}function yM(s){const e=Mt.getPrimaries(Mt.workingColorSpace),n=Mt.getPrimaries(s);let r;switch(e===n?r="":e===Il&&n===Nl?r="LinearDisplayP3ToLinearSRGB":e===Nl&&n===Il&&(r="LinearSRGBToLinearDisplayP3"),s){case _r:case zl:return[r,"LinearTransferOETF"];case hi:case td:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[r,"LinearTransferOETF"]}}function xm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+xM(s.getShaderSource(e),f)}else return a}function SM(s,e){const n=yM(e);return`vec4 ${s}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function MM(s,e){let n;switch(e){case O_:n="Linear";break;case k_:n="Reinhard";break;case B_:n="Cineon";break;case z_:n="ACESFilmic";break;case V_:n="AgX";break;case G_:n="Neutral";break;case H_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const vl=new Q;function EM(){Mt.getLuminanceCoefficients(vl);const s=vl.x.toFixed(4),e=vl.y.toFixed(4),n=vl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function TM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oo).join(`
`)}function wM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function AM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=s.getActiveAttrib(e,a),f=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),n[f]={type:u.type,location:s.getAttribLocation(e,f),locationSize:d}}return n}function Oo(s){return s!==""}function ym(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const CM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wf(s){return s.replace(CM,PM)}const RM=new Map;function PM(s,e){let n=rt[e];if(n===void 0){const r=RM.get(e);if(r!==void 0)n=rt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Wf(n)}const bM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mm(s){return s.replace(bM,LM)}function LM(s,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function Em(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function DM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===km?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===g_?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Di&&(e="SHADOWMAP_TYPE_VSM"),e}function NM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Bs:case zs:e="ENVMAP_TYPE_CUBE";break;case Bl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function IM(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===zs&&(e="ENVMAP_MODE_REFRACTION"),e}function UM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Bm:e="ENVMAP_BLENDING_MULTIPLY";break;case U_:e="ENVMAP_BLENDING_MIX";break;case F_:e="ENVMAP_BLENDING_ADD";break}return e}function FM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function OM(s,e,n,r){const a=s.getContext(),u=n.defines;let f=n.vertexShader,d=n.fragmentShader;const p=DM(n),m=NM(n),g=IM(n),x=UM(n),y=FM(n),S=TM(n),w=wM(u),A=a.createProgram();let v,_,I=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Oo).join(`
`),v.length>0&&(v+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Oo).join(`
`),_.length>0&&(_+=`
`)):(v=[Em(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oo).join(`
`),_=[Em(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",n.envMap?"#define "+x:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==gr?"#define TONE_MAPPING":"",n.toneMapping!==gr?rt.tonemapping_pars_fragment:"",n.toneMapping!==gr?MM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,SM("linearToOutputTexel",n.outputColorSpace),EM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Oo).join(`
`)),f=Wf(f),f=ym(f,n),f=Sm(f,n),d=Wf(d),d=ym(d,n),d=Sm(d,n),f=Mm(f),d=Mm(d),n.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,v=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,_=["#define varying in",n.glslVersion===zp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===zp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const P=I+v+f,N=I+_+d,J=_m(a,a.VERTEX_SHADER,P),z=_m(a,a.FRAGMENT_SHADER,N);a.attachShader(A,J),a.attachShader(A,z),n.index0AttributeName!==void 0?a.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(A,0,"position"),a.linkProgram(A);function U(R){if(s.debug.checkShaderErrors){const re=a.getProgramInfoLog(A).trim(),ee=a.getShaderInfoLog(J).trim(),ue=a.getShaderInfoLog(z).trim();let fe=!0,te=!0;if(a.getProgramParameter(A,a.LINK_STATUS)===!1)if(fe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,A,J,z);else{const le=xm(a,J,"vertex"),O=xm(a,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(A,a.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+re+`
`+le+`
`+O)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(ee===""||ue==="")&&(te=!1);te&&(R.diagnostics={runnable:fe,programLog:re,vertexShader:{log:ee,prefix:v},fragmentShader:{log:ue,prefix:_}})}a.deleteShader(J),a.deleteShader(z),Y=new Pl(a,A),Se=AM(a,A)}let Y;this.getUniforms=function(){return Y===void 0&&U(this),Y};let Se;this.getAttributes=function(){return Se===void 0&&U(this),Se};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=a.getProgramParameter(A,vM)),E},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=_M++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=J,this.fragmentShader=z,this}let kM=0;class BM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new zM(e),n.set(e,r)),r}}class zM{constructor(e){this.id=kM++,this.code=e,this.usedTimes=0}}function HM(s,e,n,r,a,u,f){const d=new tg,p=new BM,m=new Set,g=[],x=a.logarithmicDepthBuffer,y=a.reverseDepthBuffer,S=a.vertexTextures;let w=a.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return m.add(E),E===0?"uv":`uv${E}`}function _(E,R,re,ee,ue){const fe=ee.fog,te=ue.geometry,le=E.isMeshStandardMaterial?ee.environment:null,O=(E.isMeshStandardMaterial?n:e).get(E.envMap||le),ce=O&&O.mapping===Bl?O.image.height:null,se=A[E.type];E.precision!==null&&(w=a.getMaxPrecision(E.precision),w!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",w,"instead."));const D=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,ne=D!==void 0?D.length:0;let Pe=0;te.morphAttributes.position!==void 0&&(Pe=1),te.morphAttributes.normal!==void 0&&(Pe=2),te.morphAttributes.color!==void 0&&(Pe=3);let j,ae,xe,ye;if(se){const Kt=pi[se];j=Kt.vertexShader,ae=Kt.fragmentShader}else j=E.vertexShader,ae=E.fragmentShader,p.update(E),xe=p.getVertexShaderID(E),ye=p.getFragmentShaderID(E);const be=s.getRenderTarget(),Le=ue.isInstancedMesh===!0,et=ue.isBatchedMesh===!0,pt=!!E.map,lt=!!E.matcap,k=!!O,tn=!!E.aoMap,at=!!E.lightMap,ft=!!E.bumpMap,$e=!!E.normalMap,Tt=!!E.displacementMap,Qe=!!E.emissiveMap,b=!!E.metalnessMap,T=!!E.roughnessMap,q=E.anisotropy>0,he=E.clearcoat>0,ve=E.dispersion>0,de=E.iridescence>0,je=E.sheen>0,Ae=E.transmission>0,Fe=q&&!!E.anisotropyMap,dt=he&&!!E.clearcoatMap,Me=he&&!!E.clearcoatNormalMap,Oe=he&&!!E.clearcoatRoughnessMap,tt=de&&!!E.iridescenceMap,Je=de&&!!E.iridescenceThicknessMap,Be=je&&!!E.sheenColorMap,ut=je&&!!E.sheenRoughnessMap,it=!!E.specularMap,St=!!E.specularColorMap,H=!!E.specularIntensityMap,De=Ae&&!!E.transmissionMap,oe=Ae&&!!E.thicknessMap,pe=!!E.gradientMap,Ce=!!E.alphaMap,Ie=E.alphaTest>0,ct=!!E.alphaHash,Ut=!!E.extensions;let nn=gr;E.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(nn=s.toneMapping);const ht={shaderID:se,shaderType:E.type,shaderName:E.name,vertexShader:j,fragmentShader:ae,defines:E.defines,customVertexShaderID:xe,customFragmentShaderID:ye,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:w,batching:et,batchingColor:et&&ue._colorsTexture!==null,instancing:Le,instancingColor:Le&&ue.instanceColor!==null,instancingMorph:Le&&ue.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:be===null?s.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:_r,alphaToCoverage:!!E.alphaToCoverage,map:pt,matcap:lt,envMap:k,envMapMode:k&&O.mapping,envMapCubeUVHeight:ce,aoMap:tn,lightMap:at,bumpMap:ft,normalMap:$e,displacementMap:S&&Tt,emissiveMap:Qe,normalMapObjectSpace:$e&&E.normalMapType===q_,normalMapTangentSpace:$e&&E.normalMapType===Y_,metalnessMap:b,roughnessMap:T,anisotropy:q,anisotropyMap:Fe,clearcoat:he,clearcoatMap:dt,clearcoatNormalMap:Me,clearcoatRoughnessMap:Oe,dispersion:ve,iridescence:de,iridescenceMap:tt,iridescenceThicknessMap:Je,sheen:je,sheenColorMap:Be,sheenRoughnessMap:ut,specularMap:it,specularColorMap:St,specularIntensityMap:H,transmission:Ae,transmissionMap:De,thicknessMap:oe,gradientMap:pe,opaque:E.transparent===!1&&E.blending===Us&&E.alphaToCoverage===!1,alphaMap:Ce,alphaTest:Ie,alphaHash:ct,combine:E.combine,mapUv:pt&&v(E.map.channel),aoMapUv:tn&&v(E.aoMap.channel),lightMapUv:at&&v(E.lightMap.channel),bumpMapUv:ft&&v(E.bumpMap.channel),normalMapUv:$e&&v(E.normalMap.channel),displacementMapUv:Tt&&v(E.displacementMap.channel),emissiveMapUv:Qe&&v(E.emissiveMap.channel),metalnessMapUv:b&&v(E.metalnessMap.channel),roughnessMapUv:T&&v(E.roughnessMap.channel),anisotropyMapUv:Fe&&v(E.anisotropyMap.channel),clearcoatMapUv:dt&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:Me&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:ut&&v(E.sheenRoughnessMap.channel),specularMapUv:it&&v(E.specularMap.channel),specularColorMapUv:St&&v(E.specularColorMap.channel),specularIntensityMapUv:H&&v(E.specularIntensityMap.channel),transmissionMapUv:De&&v(E.transmissionMap.channel),thicknessMapUv:oe&&v(E.thicknessMap.channel),alphaMapUv:Ce&&v(E.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&($e||q),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:ue.isPoints===!0&&!!te.attributes.uv&&(pt||Ce),fog:!!fe,useFog:E.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:y,skinning:ue.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:Pe,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&re.length>0,shadowMapType:s.shadowMap.type,toneMapping:nn,decodeVideoTexture:pt&&E.map.isVideoTexture===!0&&Mt.getTransfer(E.map.colorSpace)===Dt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ni,flipSided:E.side===Cn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ut&&E.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&E.extensions.multiDraw===!0||et)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ht.vertexUv1s=m.has(1),ht.vertexUv2s=m.has(2),ht.vertexUv3s=m.has(3),m.clear(),ht}function I(E){const R=[];if(E.shaderID?R.push(E.shaderID):(R.push(E.customVertexShaderID),R.push(E.customFragmentShaderID)),E.defines!==void 0)for(const re in E.defines)R.push(re),R.push(E.defines[re]);return E.isRawShaderMaterial===!1&&(P(R,E),N(R,E),R.push(s.outputColorSpace)),R.push(E.customProgramCacheKey),R.join()}function P(E,R){E.push(R.precision),E.push(R.outputColorSpace),E.push(R.envMapMode),E.push(R.envMapCubeUVHeight),E.push(R.mapUv),E.push(R.alphaMapUv),E.push(R.lightMapUv),E.push(R.aoMapUv),E.push(R.bumpMapUv),E.push(R.normalMapUv),E.push(R.displacementMapUv),E.push(R.emissiveMapUv),E.push(R.metalnessMapUv),E.push(R.roughnessMapUv),E.push(R.anisotropyMapUv),E.push(R.clearcoatMapUv),E.push(R.clearcoatNormalMapUv),E.push(R.clearcoatRoughnessMapUv),E.push(R.iridescenceMapUv),E.push(R.iridescenceThicknessMapUv),E.push(R.sheenColorMapUv),E.push(R.sheenRoughnessMapUv),E.push(R.specularMapUv),E.push(R.specularColorMapUv),E.push(R.specularIntensityMapUv),E.push(R.transmissionMapUv),E.push(R.thicknessMapUv),E.push(R.combine),E.push(R.fogExp2),E.push(R.sizeAttenuation),E.push(R.morphTargetsCount),E.push(R.morphAttributeCount),E.push(R.numDirLights),E.push(R.numPointLights),E.push(R.numSpotLights),E.push(R.numSpotLightMaps),E.push(R.numHemiLights),E.push(R.numRectAreaLights),E.push(R.numDirLightShadows),E.push(R.numPointLightShadows),E.push(R.numSpotLightShadows),E.push(R.numSpotLightShadowsWithMaps),E.push(R.numLightProbes),E.push(R.shadowMapType),E.push(R.toneMapping),E.push(R.numClippingPlanes),E.push(R.numClipIntersection),E.push(R.depthPacking)}function N(E,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),E.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.alphaToCoverage&&d.enable(20),E.push(d.mask)}function J(E){const R=A[E.type];let re;if(R){const ee=pi[R];re=T0.clone(ee.uniforms)}else re=E.uniforms;return re}function z(E,R){let re;for(let ee=0,ue=g.length;ee<ue;ee++){const fe=g[ee];if(fe.cacheKey===R){re=fe,++re.usedTimes;break}}return re===void 0&&(re=new OM(s,R,E,u),g.push(re)),re}function U(E){if(--E.usedTimes===0){const R=g.indexOf(E);g[R]=g[g.length-1],g.pop(),E.destroy()}}function Y(E){p.remove(E)}function Se(){p.dispose()}return{getParameters:_,getProgramCacheKey:I,getUniforms:J,acquireProgram:z,releaseProgram:U,releaseShaderCache:Y,programs:g,dispose:Se}}function VM(){let s=new WeakMap;function e(f){return s.has(f)}function n(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function r(f){s.delete(f)}function a(f,d,p){s.get(f)[d]=p}function u(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:u}}function GM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Tm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function wm(){const s=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function f(x,y,S,w,A,v){let _=s[e];return _===void 0?(_={id:x.id,object:x,geometry:y,material:S,groupOrder:w,renderOrder:x.renderOrder,z:A,group:v},s[e]=_):(_.id=x.id,_.object=x,_.geometry=y,_.material=S,_.groupOrder=w,_.renderOrder=x.renderOrder,_.z=A,_.group=v),e++,_}function d(x,y,S,w,A,v){const _=f(x,y,S,w,A,v);S.transmission>0?r.push(_):S.transparent===!0?a.push(_):n.push(_)}function p(x,y,S,w,A,v){const _=f(x,y,S,w,A,v);S.transmission>0?r.unshift(_):S.transparent===!0?a.unshift(_):n.unshift(_)}function m(x,y){n.length>1&&n.sort(x||GM),r.length>1&&r.sort(y||Tm),a.length>1&&a.sort(y||Tm)}function g(){for(let x=e,y=s.length;x<y;x++){const S=s[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:d,unshift:p,finish:g,sort:m}}function WM(){let s=new WeakMap;function e(r,a){const u=s.get(r);let f;return u===void 0?(f=new wm,s.set(r,[f])):a>=u.length?(f=new wm,u.push(f)):f=u[a],f}function n(){s=new WeakMap}return{get:e,dispose:n}}function XM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Q,color:new xt};break;case"SpotLight":n={position:new Q,direction:new Q,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Q,color:new xt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Q,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":n={color:new xt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return s[e.id]=n,n}}}function jM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let YM=0;function qM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function KM(s){const e=new XM,n=jM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Q);const a=new Q,u=new Bt,f=new Bt;function d(m){let g=0,x=0,y=0;for(let Se=0;Se<9;Se++)r.probe[Se].set(0,0,0);let S=0,w=0,A=0,v=0,_=0,I=0,P=0,N=0,J=0,z=0,U=0;m.sort(qM);for(let Se=0,E=m.length;Se<E;Se++){const R=m[Se],re=R.color,ee=R.intensity,ue=R.distance,fe=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)g+=re.r*ee,x+=re.g*ee,y+=re.b*ee;else if(R.isLightProbe){for(let te=0;te<9;te++)r.probe[te].addScaledVector(R.sh.coefficients[te],ee);U++}else if(R.isDirectionalLight){const te=e.get(R);if(te.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const le=R.shadow,O=n.get(R);O.shadowIntensity=le.intensity,O.shadowBias=le.bias,O.shadowNormalBias=le.normalBias,O.shadowRadius=le.radius,O.shadowMapSize=le.mapSize,r.directionalShadow[S]=O,r.directionalShadowMap[S]=fe,r.directionalShadowMatrix[S]=R.shadow.matrix,I++}r.directional[S]=te,S++}else if(R.isSpotLight){const te=e.get(R);te.position.setFromMatrixPosition(R.matrixWorld),te.color.copy(re).multiplyScalar(ee),te.distance=ue,te.coneCos=Math.cos(R.angle),te.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),te.decay=R.decay,r.spot[A]=te;const le=R.shadow;if(R.map&&(r.spotLightMap[J]=R.map,J++,le.updateMatrices(R),R.castShadow&&z++),r.spotLightMatrix[A]=le.matrix,R.castShadow){const O=n.get(R);O.shadowIntensity=le.intensity,O.shadowBias=le.bias,O.shadowNormalBias=le.normalBias,O.shadowRadius=le.radius,O.shadowMapSize=le.mapSize,r.spotShadow[A]=O,r.spotShadowMap[A]=fe,N++}A++}else if(R.isRectAreaLight){const te=e.get(R);te.color.copy(re).multiplyScalar(ee),te.halfWidth.set(R.width*.5,0,0),te.halfHeight.set(0,R.height*.5,0),r.rectArea[v]=te,v++}else if(R.isPointLight){const te=e.get(R);if(te.color.copy(R.color).multiplyScalar(R.intensity),te.distance=R.distance,te.decay=R.decay,R.castShadow){const le=R.shadow,O=n.get(R);O.shadowIntensity=le.intensity,O.shadowBias=le.bias,O.shadowNormalBias=le.normalBias,O.shadowRadius=le.radius,O.shadowMapSize=le.mapSize,O.shadowCameraNear=le.camera.near,O.shadowCameraFar=le.camera.far,r.pointShadow[w]=O,r.pointShadowMap[w]=fe,r.pointShadowMatrix[w]=R.shadow.matrix,P++}r.point[w]=te,w++}else if(R.isHemisphereLight){const te=e.get(R);te.skyColor.copy(R.color).multiplyScalar(ee),te.groundColor.copy(R.groundColor).multiplyScalar(ee),r.hemi[_]=te,_++}}v>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=x,r.ambient[2]=y;const Y=r.hash;(Y.directionalLength!==S||Y.pointLength!==w||Y.spotLength!==A||Y.rectAreaLength!==v||Y.hemiLength!==_||Y.numDirectionalShadows!==I||Y.numPointShadows!==P||Y.numSpotShadows!==N||Y.numSpotMaps!==J||Y.numLightProbes!==U)&&(r.directional.length=S,r.spot.length=A,r.rectArea.length=v,r.point.length=w,r.hemi.length=_,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=N+J-z,r.spotLightMap.length=J,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=U,Y.directionalLength=S,Y.pointLength=w,Y.spotLength=A,Y.rectAreaLength=v,Y.hemiLength=_,Y.numDirectionalShadows=I,Y.numPointShadows=P,Y.numSpotShadows=N,Y.numSpotMaps=J,Y.numLightProbes=U,r.version=YM++)}function p(m,g){let x=0,y=0,S=0,w=0,A=0;const v=g.matrixWorldInverse;for(let _=0,I=m.length;_<I;_++){const P=m[_];if(P.isDirectionalLight){const N=r.directional[x];N.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(a),N.direction.transformDirection(v),x++}else if(P.isSpotLight){const N=r.spot[S];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(v),N.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(a),N.direction.transformDirection(v),S++}else if(P.isRectAreaLight){const N=r.rectArea[w];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(v),f.identity(),u.copy(P.matrixWorld),u.premultiply(v),f.extractRotation(u),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),N.halfWidth.applyMatrix4(f),N.halfHeight.applyMatrix4(f),w++}else if(P.isPointLight){const N=r.point[y];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(v),y++}else if(P.isHemisphereLight){const N=r.hemi[A];N.direction.setFromMatrixPosition(P.matrixWorld),N.direction.transformDirection(v),A++}}}return{setup:d,setupView:p,state:r}}function Am(s){const e=new KM(s),n=[],r=[];function a(g){m.camera=g,n.length=0,r.length=0}function u(g){n.push(g)}function f(g){r.push(g)}function d(){e.setup(n)}function p(g){e.setupView(n,g)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:f}}function $M(s){let e=new WeakMap;function n(a,u=0){const f=e.get(a);let d;return f===void 0?(d=new Am(s),e.set(a,[d])):u>=f.length?(d=new Am(s),f.push(d)):d=f[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}class ZM extends Xs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=X_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class QM extends Xs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const JM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eE=`uniform sampler2D shadow_pass;
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
}`;function tE(s,e,n){let r=new ug;const a=new At,u=new At,f=new Ht,d=new ZM({depthPacking:j_}),p=new QM,m={},g=n.maxTextureSize,x={[vr]:Cn,[Cn]:vr,[Ni]:Ni},y=new mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:JM,fragmentShader:eE}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const w=new ai;w.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Fi(w,y),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=km;let _=this.type;this.render=function(z,U,Y){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||z.length===0)return;const Se=s.getRenderTarget(),E=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),re=s.state;re.setBlending(mr),re.buffers.color.setClear(1,1,1,1),re.buffers.depth.setTest(!0),re.setScissorTest(!1);const ee=_!==Di&&this.type===Di,ue=_===Di&&this.type!==Di;for(let fe=0,te=z.length;fe<te;fe++){const le=z[fe],O=le.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;a.copy(O.mapSize);const ce=O.getFrameExtents();if(a.multiply(ce),u.copy(O.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(u.x=Math.floor(g/ce.x),a.x=u.x*ce.x,O.mapSize.x=u.x),a.y>g&&(u.y=Math.floor(g/ce.y),a.y=u.y*ce.y,O.mapSize.y=u.y)),O.map===null||ee===!0||ue===!0){const D=this.type!==Di?{minFilter:Xn,magFilter:Xn}:{};O.map!==null&&O.map.dispose(),O.map=new jr(a.x,a.y,D),O.map.texture.name=le.name+".shadowMap",O.camera.updateProjectionMatrix()}s.setRenderTarget(O.map),s.clear();const se=O.getViewportCount();for(let D=0;D<se;D++){const ne=O.getViewport(D);f.set(u.x*ne.x,u.y*ne.y,u.x*ne.z,u.y*ne.w),re.viewport(f),O.updateMatrices(le,D),r=O.getFrustum(),N(U,Y,O.camera,le,this.type)}O.isPointLightShadow!==!0&&this.type===Di&&I(O,Y),O.needsUpdate=!1}_=this.type,v.needsUpdate=!1,s.setRenderTarget(Se,E,R)};function I(z,U){const Y=e.update(A);y.defines.VSM_SAMPLES!==z.blurSamples&&(y.defines.VSM_SAMPLES=z.blurSamples,S.defines.VSM_SAMPLES=z.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new jr(a.x,a.y)),y.uniforms.shadow_pass.value=z.map.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,s.setRenderTarget(z.mapPass),s.clear(),s.renderBufferDirect(U,null,Y,y,A,null),S.uniforms.shadow_pass.value=z.mapPass.texture,S.uniforms.resolution.value=z.mapSize,S.uniforms.radius.value=z.radius,s.setRenderTarget(z.map),s.clear(),s.renderBufferDirect(U,null,Y,S,A,null)}function P(z,U,Y,Se){let E=null;const R=Y.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(R!==void 0)E=R;else if(E=Y.isPointLight===!0?p:d,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const re=E.uuid,ee=U.uuid;let ue=m[re];ue===void 0&&(ue={},m[re]=ue);let fe=ue[ee];fe===void 0&&(fe=E.clone(),ue[ee]=fe,U.addEventListener("dispose",J)),E=fe}if(E.visible=U.visible,E.wireframe=U.wireframe,Se===Di?E.side=U.shadowSide!==null?U.shadowSide:U.side:E.side=U.shadowSide!==null?U.shadowSide:x[U.side],E.alphaMap=U.alphaMap,E.alphaTest=U.alphaTest,E.map=U.map,E.clipShadows=U.clipShadows,E.clippingPlanes=U.clippingPlanes,E.clipIntersection=U.clipIntersection,E.displacementMap=U.displacementMap,E.displacementScale=U.displacementScale,E.displacementBias=U.displacementBias,E.wireframeLinewidth=U.wireframeLinewidth,E.linewidth=U.linewidth,Y.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const re=s.properties.get(E);re.light=Y}return E}function N(z,U,Y,Se,E){if(z.visible===!1)return;if(z.layers.test(U.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&E===Di)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,z.matrixWorld);const ee=e.update(z),ue=z.material;if(Array.isArray(ue)){const fe=ee.groups;for(let te=0,le=fe.length;te<le;te++){const O=fe[te],ce=ue[O.materialIndex];if(ce&&ce.visible){const se=P(z,ce,Se,E);z.onBeforeShadow(s,z,U,Y,ee,se,O),s.renderBufferDirect(Y,null,ee,se,z,O),z.onAfterShadow(s,z,U,Y,ee,se,O)}}}else if(ue.visible){const fe=P(z,ue,Se,E);z.onBeforeShadow(s,z,U,Y,ee,fe,null),s.renderBufferDirect(Y,null,ee,fe,z,null),z.onAfterShadow(s,z,U,Y,ee,fe,null)}}const re=z.children;for(let ee=0,ue=re.length;ee<ue;ee++)N(re[ee],U,Y,Se,E)}function J(z){z.target.removeEventListener("dispose",J);for(const Y in m){const Se=m[Y],E=z.target.uuid;E in Se&&(Se[E].dispose(),delete Se[E])}}}const nE={[of]:af,[lf]:ff,[uf]:df,[ks]:cf,[af]:of,[ff]:lf,[df]:uf,[cf]:ks};function iE(s){function e(){let H=!1;const De=new Ht;let oe=null;const pe=new Ht(0,0,0,0);return{setMask:function(Ce){oe!==Ce&&!H&&(s.colorMask(Ce,Ce,Ce,Ce),oe=Ce)},setLocked:function(Ce){H=Ce},setClear:function(Ce,Ie,ct,Ut,nn){nn===!0&&(Ce*=Ut,Ie*=Ut,ct*=Ut),De.set(Ce,Ie,ct,Ut),pe.equals(De)===!1&&(s.clearColor(Ce,Ie,ct,Ut),pe.copy(De))},reset:function(){H=!1,oe=null,pe.set(-1,0,0,0)}}}function n(){let H=!1,De=!1,oe=null,pe=null,Ce=null;return{setReversed:function(Ie){De=Ie},setTest:function(Ie){Ie?xe(s.DEPTH_TEST):ye(s.DEPTH_TEST)},setMask:function(Ie){oe!==Ie&&!H&&(s.depthMask(Ie),oe=Ie)},setFunc:function(Ie){if(De&&(Ie=nE[Ie]),pe!==Ie){switch(Ie){case of:s.depthFunc(s.NEVER);break;case af:s.depthFunc(s.ALWAYS);break;case lf:s.depthFunc(s.LESS);break;case ks:s.depthFunc(s.LEQUAL);break;case uf:s.depthFunc(s.EQUAL);break;case cf:s.depthFunc(s.GEQUAL);break;case ff:s.depthFunc(s.GREATER);break;case df:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=Ie}},setLocked:function(Ie){H=Ie},setClear:function(Ie){Ce!==Ie&&(s.clearDepth(Ie),Ce=Ie)},reset:function(){H=!1,oe=null,pe=null,Ce=null}}}function r(){let H=!1,De=null,oe=null,pe=null,Ce=null,Ie=null,ct=null,Ut=null,nn=null;return{setTest:function(ht){H||(ht?xe(s.STENCIL_TEST):ye(s.STENCIL_TEST))},setMask:function(ht){De!==ht&&!H&&(s.stencilMask(ht),De=ht)},setFunc:function(ht,Kt,On){(oe!==ht||pe!==Kt||Ce!==On)&&(s.stencilFunc(ht,Kt,On),oe=ht,pe=Kt,Ce=On)},setOp:function(ht,Kt,On){(Ie!==ht||ct!==Kt||Ut!==On)&&(s.stencilOp(ht,Kt,On),Ie=ht,ct=Kt,Ut=On)},setLocked:function(ht){H=ht},setClear:function(ht){nn!==ht&&(s.clearStencil(ht),nn=ht)},reset:function(){H=!1,De=null,oe=null,pe=null,Ce=null,Ie=null,ct=null,Ut=null,nn=null}}}const a=new e,u=new n,f=new r,d=new WeakMap,p=new WeakMap;let m={},g={},x=new WeakMap,y=[],S=null,w=!1,A=null,v=null,_=null,I=null,P=null,N=null,J=null,z=new xt(0,0,0),U=0,Y=!1,Se=null,E=null,R=null,re=null,ee=null;const ue=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let fe=!1,te=0;const le=s.getParameter(s.VERSION);le.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(le)[1]),fe=te>=1):le.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),fe=te>=2);let O=null,ce={};const se=s.getParameter(s.SCISSOR_BOX),D=s.getParameter(s.VIEWPORT),ne=new Ht().fromArray(se),Pe=new Ht().fromArray(D);function j(H,De,oe,pe){const Ce=new Uint8Array(4),Ie=s.createTexture();s.bindTexture(H,Ie),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ct=0;ct<oe;ct++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(De,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,Ce):s.texImage2D(De+ct,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ce);return Ie}const ae={};ae[s.TEXTURE_2D]=j(s.TEXTURE_2D,s.TEXTURE_2D,1),ae[s.TEXTURE_CUBE_MAP]=j(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[s.TEXTURE_2D_ARRAY]=j(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ae[s.TEXTURE_3D]=j(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),u.setClear(1),f.setClear(0),xe(s.DEPTH_TEST),u.setFunc(ks),at(!1),ft(Up),xe(s.CULL_FACE),k(mr);function xe(H){m[H]!==!0&&(s.enable(H),m[H]=!0)}function ye(H){m[H]!==!1&&(s.disable(H),m[H]=!1)}function be(H,De){return g[H]!==De?(s.bindFramebuffer(H,De),g[H]=De,H===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=De),H===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=De),!0):!1}function Le(H,De){let oe=y,pe=!1;if(H){oe=x.get(De),oe===void 0&&(oe=[],x.set(De,oe));const Ce=H.textures;if(oe.length!==Ce.length||oe[0]!==s.COLOR_ATTACHMENT0){for(let Ie=0,ct=Ce.length;Ie<ct;Ie++)oe[Ie]=s.COLOR_ATTACHMENT0+Ie;oe.length=Ce.length,pe=!0}}else oe[0]!==s.BACK&&(oe[0]=s.BACK,pe=!0);pe&&s.drawBuffers(oe)}function et(H){return S!==H?(s.useProgram(H),S=H,!0):!1}const pt={[Hr]:s.FUNC_ADD,[__]:s.FUNC_SUBTRACT,[x_]:s.FUNC_REVERSE_SUBTRACT};pt[y_]=s.MIN,pt[S_]=s.MAX;const lt={[M_]:s.ZERO,[E_]:s.ONE,[T_]:s.SRC_COLOR,[rf]:s.SRC_ALPHA,[b_]:s.SRC_ALPHA_SATURATE,[R_]:s.DST_COLOR,[A_]:s.DST_ALPHA,[w_]:s.ONE_MINUS_SRC_COLOR,[sf]:s.ONE_MINUS_SRC_ALPHA,[P_]:s.ONE_MINUS_DST_COLOR,[C_]:s.ONE_MINUS_DST_ALPHA,[L_]:s.CONSTANT_COLOR,[D_]:s.ONE_MINUS_CONSTANT_COLOR,[N_]:s.CONSTANT_ALPHA,[I_]:s.ONE_MINUS_CONSTANT_ALPHA};function k(H,De,oe,pe,Ce,Ie,ct,Ut,nn,ht){if(H===mr){w===!0&&(ye(s.BLEND),w=!1);return}if(w===!1&&(xe(s.BLEND),w=!0),H!==v_){if(H!==A||ht!==Y){if((v!==Hr||P!==Hr)&&(s.blendEquation(s.FUNC_ADD),v=Hr,P=Hr),ht)switch(H){case Us:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ll:s.blendFunc(s.ONE,s.ONE);break;case Fp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Op:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Us:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ll:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Fp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Op:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}_=null,I=null,N=null,J=null,z.set(0,0,0),U=0,A=H,Y=ht}return}Ce=Ce||De,Ie=Ie||oe,ct=ct||pe,(De!==v||Ce!==P)&&(s.blendEquationSeparate(pt[De],pt[Ce]),v=De,P=Ce),(oe!==_||pe!==I||Ie!==N||ct!==J)&&(s.blendFuncSeparate(lt[oe],lt[pe],lt[Ie],lt[ct]),_=oe,I=pe,N=Ie,J=ct),(Ut.equals(z)===!1||nn!==U)&&(s.blendColor(Ut.r,Ut.g,Ut.b,nn),z.copy(Ut),U=nn),A=H,Y=!1}function tn(H,De){H.side===Ni?ye(s.CULL_FACE):xe(s.CULL_FACE);let oe=H.side===Cn;De&&(oe=!oe),at(oe),H.blending===Us&&H.transparent===!1?k(mr):k(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),a.setMask(H.colorWrite);const pe=H.stencilWrite;f.setTest(pe),pe&&(f.setMask(H.stencilWriteMask),f.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),f.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Tt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?xe(s.SAMPLE_ALPHA_TO_COVERAGE):ye(s.SAMPLE_ALPHA_TO_COVERAGE)}function at(H){Se!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),Se=H)}function ft(H){H!==p_?(xe(s.CULL_FACE),H!==E&&(H===Up?s.cullFace(s.BACK):H===m_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ye(s.CULL_FACE),E=H}function $e(H){H!==R&&(fe&&s.lineWidth(H),R=H)}function Tt(H,De,oe){H?(xe(s.POLYGON_OFFSET_FILL),(re!==De||ee!==oe)&&(s.polygonOffset(De,oe),re=De,ee=oe)):ye(s.POLYGON_OFFSET_FILL)}function Qe(H){H?xe(s.SCISSOR_TEST):ye(s.SCISSOR_TEST)}function b(H){H===void 0&&(H=s.TEXTURE0+ue-1),O!==H&&(s.activeTexture(H),O=H)}function T(H,De,oe){oe===void 0&&(O===null?oe=s.TEXTURE0+ue-1:oe=O);let pe=ce[oe];pe===void 0&&(pe={type:void 0,texture:void 0},ce[oe]=pe),(pe.type!==H||pe.texture!==De)&&(O!==oe&&(s.activeTexture(oe),O=oe),s.bindTexture(H,De||ae[H]),pe.type=H,pe.texture=De)}function q(){const H=ce[O];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function he(){try{s.compressedTexImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ve(){try{s.compressedTexImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function de(){try{s.texSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function je(){try{s.texSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ae(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Fe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function dt(){try{s.texStorage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Me(){try{s.texStorage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Oe(){try{s.texImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function tt(){try{s.texImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Je(H){ne.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),ne.copy(H))}function Be(H){Pe.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),Pe.copy(H))}function ut(H,De){let oe=p.get(De);oe===void 0&&(oe=new WeakMap,p.set(De,oe));let pe=oe.get(H);pe===void 0&&(pe=s.getUniformBlockIndex(De,H.name),oe.set(H,pe))}function it(H,De){const pe=p.get(De).get(H);d.get(De)!==pe&&(s.uniformBlockBinding(De,pe,H.__bindingPointIndex),d.set(De,pe))}function St(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},O=null,ce={},g={},x=new WeakMap,y=[],S=null,w=!1,A=null,v=null,_=null,I=null,P=null,N=null,J=null,z=new xt(0,0,0),U=0,Y=!1,Se=null,E=null,R=null,re=null,ee=null,ne.set(0,0,s.canvas.width,s.canvas.height),Pe.set(0,0,s.canvas.width,s.canvas.height),a.reset(),u.reset(),f.reset()}return{buffers:{color:a,depth:u,stencil:f},enable:xe,disable:ye,bindFramebuffer:be,drawBuffers:Le,useProgram:et,setBlending:k,setMaterial:tn,setFlipSided:at,setCullFace:ft,setLineWidth:$e,setPolygonOffset:Tt,setScissorTest:Qe,activeTexture:b,bindTexture:T,unbindTexture:q,compressedTexImage2D:he,compressedTexImage3D:ve,texImage2D:Oe,texImage3D:tt,updateUBOMapping:ut,uniformBlockBinding:it,texStorage2D:dt,texStorage3D:Me,texSubImage2D:de,texSubImage3D:je,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Fe,scissor:Je,viewport:Be,reset:St}}function Cm(s,e,n,r){const a=rE(r);switch(n){case Wm:return s*e;case jm:return s*e;case Ym:return s*e*2;case qm:return s*e/a.components*a.byteLength;case Qf:return s*e/a.components*a.byteLength;case Km:return s*e*2/a.components*a.byteLength;case Jf:return s*e*2/a.components*a.byteLength;case Xm:return s*e*3/a.components*a.byteLength;case oi:return s*e*4/a.components*a.byteLength;case ed:return s*e*4/a.components*a.byteLength;case El:case Tl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case wl:case Al:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case _f:case yf:return Math.max(s,16)*Math.max(e,8)/4;case vf:case xf:return Math.max(s,8)*Math.max(e,8)/2;case Sf:case Mf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ef:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Tf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Af:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Cf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Rf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Pf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case bf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Lf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Df:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Nf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case If:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Uf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ff:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Of:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Cl:case kf:case Bf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case $m:case zf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Hf:case Vf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function rE(s){switch(s){case ki:case Hm:return{byteLength:1,components:1};case ko:case Vm:case zo:return{byteLength:2,components:1};case $f:case Zf:return{byteLength:2,components:4};case Xr:case Kf:case Ii:return{byteLength:4,components:1};case Gm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function sE(s,e,n,r,a,u,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new At,g=new WeakMap;let x;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(b,T){return S?new OffscreenCanvas(b,T):Fl("canvas")}function A(b,T,q){let he=1;const ve=Qe(b);if((ve.width>q||ve.height>q)&&(he=q/Math.max(ve.width,ve.height)),he<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const de=Math.floor(he*ve.width),je=Math.floor(he*ve.height);x===void 0&&(x=w(de,je));const Ae=T?w(de,je):x;return Ae.width=de,Ae.height=je,Ae.getContext("2d").drawImage(b,0,0,de,je),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+de+"x"+je+")."),Ae}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),b;return b}function v(b){return b.generateMipmaps&&b.minFilter!==Xn&&b.minFilter!==ri}function _(b){s.generateMipmap(b)}function I(b,T,q,he,ve=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let de=T;if(T===s.RED&&(q===s.FLOAT&&(de=s.R32F),q===s.HALF_FLOAT&&(de=s.R16F),q===s.UNSIGNED_BYTE&&(de=s.R8)),T===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(de=s.R8UI),q===s.UNSIGNED_SHORT&&(de=s.R16UI),q===s.UNSIGNED_INT&&(de=s.R32UI),q===s.BYTE&&(de=s.R8I),q===s.SHORT&&(de=s.R16I),q===s.INT&&(de=s.R32I)),T===s.RG&&(q===s.FLOAT&&(de=s.RG32F),q===s.HALF_FLOAT&&(de=s.RG16F),q===s.UNSIGNED_BYTE&&(de=s.RG8)),T===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(de=s.RG8UI),q===s.UNSIGNED_SHORT&&(de=s.RG16UI),q===s.UNSIGNED_INT&&(de=s.RG32UI),q===s.BYTE&&(de=s.RG8I),q===s.SHORT&&(de=s.RG16I),q===s.INT&&(de=s.RG32I)),T===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(de=s.RGB8UI),q===s.UNSIGNED_SHORT&&(de=s.RGB16UI),q===s.UNSIGNED_INT&&(de=s.RGB32UI),q===s.BYTE&&(de=s.RGB8I),q===s.SHORT&&(de=s.RGB16I),q===s.INT&&(de=s.RGB32I)),T===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(de=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(de=s.RGBA16UI),q===s.UNSIGNED_INT&&(de=s.RGBA32UI),q===s.BYTE&&(de=s.RGBA8I),q===s.SHORT&&(de=s.RGBA16I),q===s.INT&&(de=s.RGBA32I)),T===s.RGB&&q===s.UNSIGNED_INT_5_9_9_9_REV&&(de=s.RGB9_E5),T===s.RGBA){const je=ve?Dl:Mt.getTransfer(he);q===s.FLOAT&&(de=s.RGBA32F),q===s.HALF_FLOAT&&(de=s.RGBA16F),q===s.UNSIGNED_BYTE&&(de=je===Dt?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(de=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(de=s.RGB5_A1)}return(de===s.R16F||de===s.R32F||de===s.RG16F||de===s.RG32F||de===s.RGBA16F||de===s.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function P(b,T){let q;return b?T===null||T===Xr||T===Hs?q=s.DEPTH24_STENCIL8:T===Ii?q=s.DEPTH32F_STENCIL8:T===ko&&(q=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Xr||T===Hs?q=s.DEPTH_COMPONENT24:T===Ii?q=s.DEPTH_COMPONENT32F:T===ko&&(q=s.DEPTH_COMPONENT16),q}function N(b,T){return v(b)===!0||b.isFramebufferTexture&&b.minFilter!==Xn&&b.minFilter!==ri?Math.log2(Math.max(T.width,T.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?T.mipmaps.length:1}function J(b){const T=b.target;T.removeEventListener("dispose",J),U(T),T.isVideoTexture&&g.delete(T)}function z(b){const T=b.target;T.removeEventListener("dispose",z),Se(T)}function U(b){const T=r.get(b);if(T.__webglInit===void 0)return;const q=b.source,he=y.get(q);if(he){const ve=he[T.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&Y(b),Object.keys(he).length===0&&y.delete(q)}r.remove(b)}function Y(b){const T=r.get(b);s.deleteTexture(T.__webglTexture);const q=b.source,he=y.get(q);delete he[T.__cacheKey],f.memory.textures--}function Se(b){const T=r.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(T.__webglFramebuffer[he]))for(let ve=0;ve<T.__webglFramebuffer[he].length;ve++)s.deleteFramebuffer(T.__webglFramebuffer[he][ve]);else s.deleteFramebuffer(T.__webglFramebuffer[he]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[he])}else{if(Array.isArray(T.__webglFramebuffer))for(let he=0;he<T.__webglFramebuffer.length;he++)s.deleteFramebuffer(T.__webglFramebuffer[he]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let he=0;he<T.__webglColorRenderbuffer.length;he++)T.__webglColorRenderbuffer[he]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[he]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const q=b.textures;for(let he=0,ve=q.length;he<ve;he++){const de=r.get(q[he]);de.__webglTexture&&(s.deleteTexture(de.__webglTexture),f.memory.textures--),r.remove(q[he])}r.remove(b)}let E=0;function R(){E=0}function re(){const b=E;return b>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+a.maxTextures),E+=1,b}function ee(b){const T=[];return T.push(b.wrapS),T.push(b.wrapT),T.push(b.wrapR||0),T.push(b.magFilter),T.push(b.minFilter),T.push(b.anisotropy),T.push(b.internalFormat),T.push(b.format),T.push(b.type),T.push(b.generateMipmaps),T.push(b.premultiplyAlpha),T.push(b.flipY),T.push(b.unpackAlignment),T.push(b.colorSpace),T.join()}function ue(b,T){const q=r.get(b);if(b.isVideoTexture&&$e(b),b.isRenderTargetTexture===!1&&b.version>0&&q.__version!==b.version){const he=b.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(q,b,T);return}}n.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+T)}function fe(b,T){const q=r.get(b);if(b.version>0&&q.__version!==b.version){Pe(q,b,T);return}n.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+T)}function te(b,T){const q=r.get(b);if(b.version>0&&q.__version!==b.version){Pe(q,b,T);return}n.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+T)}function le(b,T){const q=r.get(b);if(b.version>0&&q.__version!==b.version){j(q,b,T);return}n.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+T)}const O={[mf]:s.REPEAT,[Gr]:s.CLAMP_TO_EDGE,[gf]:s.MIRRORED_REPEAT},ce={[Xn]:s.NEAREST,[W_]:s.NEAREST_MIPMAP_NEAREST,[Za]:s.NEAREST_MIPMAP_LINEAR,[ri]:s.LINEAR,[wc]:s.LINEAR_MIPMAP_NEAREST,[Wr]:s.LINEAR_MIPMAP_LINEAR},se={[K_]:s.NEVER,[t0]:s.ALWAYS,[$_]:s.LESS,[Zm]:s.LEQUAL,[Z_]:s.EQUAL,[e0]:s.GEQUAL,[Q_]:s.GREATER,[J_]:s.NOTEQUAL};function D(b,T){if(T.type===Ii&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===ri||T.magFilter===wc||T.magFilter===Za||T.magFilter===Wr||T.minFilter===ri||T.minFilter===wc||T.minFilter===Za||T.minFilter===Wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,O[T.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,O[T.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,O[T.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,ce[T.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,ce[T.minFilter]),T.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,se[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Xn||T.minFilter!==Za&&T.minFilter!==Wr||T.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(b,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function ne(b,T){let q=!1;b.__webglInit===void 0&&(b.__webglInit=!0,T.addEventListener("dispose",J));const he=T.source;let ve=y.get(he);ve===void 0&&(ve={},y.set(he,ve));const de=ee(T);if(de!==b.__cacheKey){ve[de]===void 0&&(ve[de]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,q=!0),ve[de].usedTimes++;const je=ve[b.__cacheKey];je!==void 0&&(ve[b.__cacheKey].usedTimes--,je.usedTimes===0&&Y(T)),b.__cacheKey=de,b.__webglTexture=ve[de].texture}return q}function Pe(b,T,q){let he=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(he=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(he=s.TEXTURE_3D);const ve=ne(b,T),de=T.source;n.bindTexture(he,b.__webglTexture,s.TEXTURE0+q);const je=r.get(de);if(de.version!==je.__version||ve===!0){n.activeTexture(s.TEXTURE0+q);const Ae=Mt.getPrimaries(Mt.workingColorSpace),Fe=T.colorSpace===pr?null:Mt.getPrimaries(T.colorSpace),dt=T.colorSpace===pr||Ae===Fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Me=A(T.image,!1,a.maxTextureSize);Me=Tt(T,Me);const Oe=u.convert(T.format,T.colorSpace),tt=u.convert(T.type);let Je=I(T.internalFormat,Oe,tt,T.colorSpace,T.isVideoTexture);D(he,T);let Be;const ut=T.mipmaps,it=T.isVideoTexture!==!0,St=je.__version===void 0||ve===!0,H=de.dataReady,De=N(T,Me);if(T.isDepthTexture)Je=P(T.format===Vs,T.type),St&&(it?n.texStorage2D(s.TEXTURE_2D,1,Je,Me.width,Me.height):n.texImage2D(s.TEXTURE_2D,0,Je,Me.width,Me.height,0,Oe,tt,null));else if(T.isDataTexture)if(ut.length>0){it&&St&&n.texStorage2D(s.TEXTURE_2D,De,Je,ut[0].width,ut[0].height);for(let oe=0,pe=ut.length;oe<pe;oe++)Be=ut[oe],it?H&&n.texSubImage2D(s.TEXTURE_2D,oe,0,0,Be.width,Be.height,Oe,tt,Be.data):n.texImage2D(s.TEXTURE_2D,oe,Je,Be.width,Be.height,0,Oe,tt,Be.data);T.generateMipmaps=!1}else it?(St&&n.texStorage2D(s.TEXTURE_2D,De,Je,Me.width,Me.height),H&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Me.width,Me.height,Oe,tt,Me.data)):n.texImage2D(s.TEXTURE_2D,0,Je,Me.width,Me.height,0,Oe,tt,Me.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){it&&St&&n.texStorage3D(s.TEXTURE_2D_ARRAY,De,Je,ut[0].width,ut[0].height,Me.depth);for(let oe=0,pe=ut.length;oe<pe;oe++)if(Be=ut[oe],T.format!==oi)if(Oe!==null)if(it){if(H)if(T.layerUpdates.size>0){const Ce=Cm(Be.width,Be.height,T.format,T.type);for(const Ie of T.layerUpdates){const ct=Be.data.subarray(Ie*Ce/Be.data.BYTES_PER_ELEMENT,(Ie+1)*Ce/Be.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,Ie,Be.width,Be.height,1,Oe,ct,0,0)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,Be.width,Be.height,Me.depth,Oe,Be.data,0,0)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,oe,Je,Be.width,Be.height,Me.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?H&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,Be.width,Be.height,Me.depth,Oe,tt,Be.data):n.texImage3D(s.TEXTURE_2D_ARRAY,oe,Je,Be.width,Be.height,Me.depth,0,Oe,tt,Be.data)}else{it&&St&&n.texStorage2D(s.TEXTURE_2D,De,Je,ut[0].width,ut[0].height);for(let oe=0,pe=ut.length;oe<pe;oe++)Be=ut[oe],T.format!==oi?Oe!==null?it?H&&n.compressedTexSubImage2D(s.TEXTURE_2D,oe,0,0,Be.width,Be.height,Oe,Be.data):n.compressedTexImage2D(s.TEXTURE_2D,oe,Je,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?H&&n.texSubImage2D(s.TEXTURE_2D,oe,0,0,Be.width,Be.height,Oe,tt,Be.data):n.texImage2D(s.TEXTURE_2D,oe,Je,Be.width,Be.height,0,Oe,tt,Be.data)}else if(T.isDataArrayTexture)if(it){if(St&&n.texStorage3D(s.TEXTURE_2D_ARRAY,De,Je,Me.width,Me.height,Me.depth),H)if(T.layerUpdates.size>0){const oe=Cm(Me.width,Me.height,T.format,T.type);for(const pe of T.layerUpdates){const Ce=Me.data.subarray(pe*oe/Me.data.BYTES_PER_ELEMENT,(pe+1)*oe/Me.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,Me.width,Me.height,1,Oe,tt,Ce)}T.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Oe,tt,Me.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Je,Me.width,Me.height,Me.depth,0,Oe,tt,Me.data);else if(T.isData3DTexture)it?(St&&n.texStorage3D(s.TEXTURE_3D,De,Je,Me.width,Me.height,Me.depth),H&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Oe,tt,Me.data)):n.texImage3D(s.TEXTURE_3D,0,Je,Me.width,Me.height,Me.depth,0,Oe,tt,Me.data);else if(T.isFramebufferTexture){if(St)if(it)n.texStorage2D(s.TEXTURE_2D,De,Je,Me.width,Me.height);else{let oe=Me.width,pe=Me.height;for(let Ce=0;Ce<De;Ce++)n.texImage2D(s.TEXTURE_2D,Ce,Je,oe,pe,0,Oe,tt,null),oe>>=1,pe>>=1}}else if(ut.length>0){if(it&&St){const oe=Qe(ut[0]);n.texStorage2D(s.TEXTURE_2D,De,Je,oe.width,oe.height)}for(let oe=0,pe=ut.length;oe<pe;oe++)Be=ut[oe],it?H&&n.texSubImage2D(s.TEXTURE_2D,oe,0,0,Oe,tt,Be):n.texImage2D(s.TEXTURE_2D,oe,Je,Oe,tt,Be);T.generateMipmaps=!1}else if(it){if(St){const oe=Qe(Me);n.texStorage2D(s.TEXTURE_2D,De,Je,oe.width,oe.height)}H&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Oe,tt,Me)}else n.texImage2D(s.TEXTURE_2D,0,Je,Oe,tt,Me);v(T)&&_(he),je.__version=de.version,T.onUpdate&&T.onUpdate(T)}b.__version=T.version}function j(b,T,q){if(T.image.length!==6)return;const he=ne(b,T),ve=T.source;n.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+q);const de=r.get(ve);if(ve.version!==de.__version||he===!0){n.activeTexture(s.TEXTURE0+q);const je=Mt.getPrimaries(Mt.workingColorSpace),Ae=T.colorSpace===pr?null:Mt.getPrimaries(T.colorSpace),Fe=T.colorSpace===pr||je===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const dt=T.isCompressedTexture||T.image[0].isCompressedTexture,Me=T.image[0]&&T.image[0].isDataTexture,Oe=[];for(let pe=0;pe<6;pe++)!dt&&!Me?Oe[pe]=A(T.image[pe],!0,a.maxCubemapSize):Oe[pe]=Me?T.image[pe].image:T.image[pe],Oe[pe]=Tt(T,Oe[pe]);const tt=Oe[0],Je=u.convert(T.format,T.colorSpace),Be=u.convert(T.type),ut=I(T.internalFormat,Je,Be,T.colorSpace),it=T.isVideoTexture!==!0,St=de.__version===void 0||he===!0,H=ve.dataReady;let De=N(T,tt);D(s.TEXTURE_CUBE_MAP,T);let oe;if(dt){it&&St&&n.texStorage2D(s.TEXTURE_CUBE_MAP,De,ut,tt.width,tt.height);for(let pe=0;pe<6;pe++){oe=Oe[pe].mipmaps;for(let Ce=0;Ce<oe.length;Ce++){const Ie=oe[Ce];T.format!==oi?Je!==null?it?H&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce,0,0,Ie.width,Ie.height,Je,Ie.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce,ut,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce,0,0,Ie.width,Ie.height,Je,Be,Ie.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce,ut,Ie.width,Ie.height,0,Je,Be,Ie.data)}}}else{if(oe=T.mipmaps,it&&St){oe.length>0&&De++;const pe=Qe(Oe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,De,ut,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Me){it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Oe[pe].width,Oe[pe].height,Je,Be,Oe[pe].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ut,Oe[pe].width,Oe[pe].height,0,Je,Be,Oe[pe].data);for(let Ce=0;Ce<oe.length;Ce++){const ct=oe[Ce].image[pe].image;it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce+1,0,0,ct.width,ct.height,Je,Be,ct.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce+1,ut,ct.width,ct.height,0,Je,Be,ct.data)}}else{it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Je,Be,Oe[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ut,Je,Be,Oe[pe]);for(let Ce=0;Ce<oe.length;Ce++){const Ie=oe[Ce];it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce+1,0,0,Je,Be,Ie.image[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce+1,ut,Je,Be,Ie.image[pe])}}}v(T)&&_(s.TEXTURE_CUBE_MAP),de.__version=ve.version,T.onUpdate&&T.onUpdate(T)}b.__version=T.version}function ae(b,T,q,he,ve,de){const je=u.convert(q.format,q.colorSpace),Ae=u.convert(q.type),Fe=I(q.internalFormat,je,Ae,q.colorSpace);if(!r.get(T).__hasExternalTextures){const Me=Math.max(1,T.width>>de),Oe=Math.max(1,T.height>>de);ve===s.TEXTURE_3D||ve===s.TEXTURE_2D_ARRAY?n.texImage3D(ve,de,Fe,Me,Oe,T.depth,0,je,Ae,null):n.texImage2D(ve,de,Fe,Me,Oe,0,je,Ae,null)}n.bindFramebuffer(s.FRAMEBUFFER,b),ft(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,ve,r.get(q).__webglTexture,0,at(T)):(ve===s.TEXTURE_2D||ve>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,he,ve,r.get(q).__webglTexture,de),n.bindFramebuffer(s.FRAMEBUFFER,null)}function xe(b,T,q){if(s.bindRenderbuffer(s.RENDERBUFFER,b),T.depthBuffer){const he=T.depthTexture,ve=he&&he.isDepthTexture?he.type:null,de=P(T.stencilBuffer,ve),je=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=at(T);ft(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,de,T.width,T.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,de,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,de,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,je,s.RENDERBUFFER,b)}else{const he=T.textures;for(let ve=0;ve<he.length;ve++){const de=he[ve],je=u.convert(de.format,de.colorSpace),Ae=u.convert(de.type),Fe=I(de.internalFormat,je,Ae,de.colorSpace),dt=at(T);q&&ft(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,Fe,T.width,T.height):ft(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,Fe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Fe,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ye(b,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,b),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ue(T.depthTexture,0);const he=r.get(T.depthTexture).__webglTexture,ve=at(T);if(T.depthTexture.format===Fs)ft(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,he,0,ve):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,he,0);else if(T.depthTexture.format===Vs)ft(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,he,0,ve):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function be(b){const T=r.get(b),q=b.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==b.depthTexture){const he=b.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),he){const ve=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,he.removeEventListener("dispose",ve)};he.addEventListener("dispose",ve),T.__depthDisposeCallback=ve}T.__boundDepthTexture=he}if(b.depthTexture&&!T.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");ye(T.__webglFramebuffer,b)}else if(q){T.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[he]),T.__webglDepthbuffer[he]===void 0)T.__webglDepthbuffer[he]=s.createRenderbuffer(),xe(T.__webglDepthbuffer[he],b,!1);else{const ve=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=T.__webglDepthbuffer[he];s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,de)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),xe(T.__webglDepthbuffer,b,!1);else{const he=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ve),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,ve)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Le(b,T,q){const he=r.get(b);T!==void 0&&ae(he.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&be(b)}function et(b){const T=b.texture,q=r.get(b),he=r.get(T);b.addEventListener("dispose",z);const ve=b.textures,de=b.isWebGLCubeRenderTarget===!0,je=ve.length>1;if(je||(he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture()),he.__version=T.version,f.memory.textures++),de){q.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer[Ae]=[];for(let Fe=0;Fe<T.mipmaps.length;Fe++)q.__webglFramebuffer[Ae][Fe]=s.createFramebuffer()}else q.__webglFramebuffer[Ae]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer=[];for(let Ae=0;Ae<T.mipmaps.length;Ae++)q.__webglFramebuffer[Ae]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(je)for(let Ae=0,Fe=ve.length;Ae<Fe;Ae++){const dt=r.get(ve[Ae]);dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture(),f.memory.textures++)}if(b.samples>0&&ft(b)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ve.length;Ae++){const Fe=ve[Ae];q.__webglColorRenderbuffer[Ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[Ae]);const dt=u.convert(Fe.format,Fe.colorSpace),Me=u.convert(Fe.type),Oe=I(Fe.internalFormat,dt,Me,Fe.colorSpace,b.isXRRenderTarget===!0),tt=at(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,Oe,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,q.__webglColorRenderbuffer[Ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),xe(q.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(de){n.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),D(s.TEXTURE_CUBE_MAP,T);for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0)for(let Fe=0;Fe<T.mipmaps.length;Fe++)ae(q.__webglFramebuffer[Ae][Fe],b,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Fe);else ae(q.__webglFramebuffer[Ae],b,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);v(T)&&_(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(je){for(let Ae=0,Fe=ve.length;Ae<Fe;Ae++){const dt=ve[Ae],Me=r.get(dt);n.bindTexture(s.TEXTURE_2D,Me.__webglTexture),D(s.TEXTURE_2D,dt),ae(q.__webglFramebuffer,b,dt,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,0),v(dt)&&_(s.TEXTURE_2D)}n.unbindTexture()}else{let Ae=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Ae=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ae,he.__webglTexture),D(Ae,T),T.mipmaps&&T.mipmaps.length>0)for(let Fe=0;Fe<T.mipmaps.length;Fe++)ae(q.__webglFramebuffer[Fe],b,T,s.COLOR_ATTACHMENT0,Ae,Fe);else ae(q.__webglFramebuffer,b,T,s.COLOR_ATTACHMENT0,Ae,0);v(T)&&_(Ae),n.unbindTexture()}b.depthBuffer&&be(b)}function pt(b){const T=b.textures;for(let q=0,he=T.length;q<he;q++){const ve=T[q];if(v(ve)){const de=b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,je=r.get(ve).__webglTexture;n.bindTexture(de,je),_(de),n.unbindTexture()}}}const lt=[],k=[];function tn(b){if(b.samples>0){if(ft(b)===!1){const T=b.textures,q=b.width,he=b.height;let ve=s.COLOR_BUFFER_BIT;const de=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,je=r.get(b),Ae=T.length>1;if(Ae)for(let Fe=0;Fe<T.length;Fe++)n.bindFramebuffer(s.FRAMEBUFFER,je.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,je.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let Fe=0;Fe<T.length;Fe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ve|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ve|=s.STENCIL_BUFFER_BIT)),Ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,je.__webglColorRenderbuffer[Fe]);const dt=r.get(T[Fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,dt,0)}s.blitFramebuffer(0,0,q,he,0,0,q,he,ve,s.NEAREST),p===!0&&(lt.length=0,k.length=0,lt.push(s.COLOR_ATTACHMENT0+Fe),b.depthBuffer&&b.resolveDepthBuffer===!1&&(lt.push(de),k.push(de),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,k)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,lt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ae)for(let Fe=0;Fe<T.length;Fe++){n.bindFramebuffer(s.FRAMEBUFFER,je.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,je.__webglColorRenderbuffer[Fe]);const dt=r.get(T[Fe]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,je.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,dt,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&p){const T=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function at(b){return Math.min(a.maxSamples,b.samples)}function ft(b){const T=r.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function $e(b){const T=f.render.frame;g.get(b)!==T&&(g.set(b,T),b.update())}function Tt(b,T){const q=b.colorSpace,he=b.format,ve=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||q!==_r&&q!==pr&&(Mt.getTransfer(q)===Dt?(he!==oi||ve!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),T}function Qe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(m.width=b.naturalWidth||b.width,m.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(m.width=b.displayWidth,m.height=b.displayHeight):(m.width=b.width,m.height=b.height),m}this.allocateTextureUnit=re,this.resetTextureUnits=R,this.setTexture2D=ue,this.setTexture2DArray=fe,this.setTexture3D=te,this.setTextureCube=le,this.rebindTextures=Le,this.setupRenderTarget=et,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=ft}function oE(s,e){function n(r,a=pr){let u;const f=Mt.getTransfer(a);if(r===ki)return s.UNSIGNED_BYTE;if(r===$f)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Zf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Gm)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Hm)return s.BYTE;if(r===Vm)return s.SHORT;if(r===ko)return s.UNSIGNED_SHORT;if(r===Kf)return s.INT;if(r===Xr)return s.UNSIGNED_INT;if(r===Ii)return s.FLOAT;if(r===zo)return s.HALF_FLOAT;if(r===Wm)return s.ALPHA;if(r===Xm)return s.RGB;if(r===oi)return s.RGBA;if(r===jm)return s.LUMINANCE;if(r===Ym)return s.LUMINANCE_ALPHA;if(r===Fs)return s.DEPTH_COMPONENT;if(r===Vs)return s.DEPTH_STENCIL;if(r===qm)return s.RED;if(r===Qf)return s.RED_INTEGER;if(r===Km)return s.RG;if(r===Jf)return s.RG_INTEGER;if(r===ed)return s.RGBA_INTEGER;if(r===El||r===Tl||r===wl||r===Al)if(f===Dt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===El)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Tl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===wl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Al)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===El)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Tl)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===wl)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Al)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===vf||r===_f||r===xf||r===yf)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===vf)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===_f)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===xf)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===yf)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Sf||r===Mf||r===Ef)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Sf||r===Mf)return f===Dt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Ef)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Tf||r===wf||r===Af||r===Cf||r===Rf||r===Pf||r===bf||r===Lf||r===Df||r===Nf||r===If||r===Uf||r===Ff||r===Of)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Tf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===wf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Af)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Cf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Rf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Pf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===bf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Lf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Df)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Nf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===If)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Uf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ff)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Of)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Cl||r===kf||r===Bf)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Cl)return f===Dt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===kf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Bf)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===$m||r===zf||r===Hf||r===Vf)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Cl)return u.COMPRESSED_RED_RGTC1_EXT;if(r===zf)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Hf)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Vf)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Hs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class aE extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class _l extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lE={type:"move"};class tf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _l,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _l,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _l,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const A of e.hand.values()){const v=n.getJointPose(A,r),_=this._getHandJoint(m,A);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const g=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],y=g.position.distanceTo(x.position),S=.02,w=.005;m.inputState.pinching&&y>S+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&y<=S-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(lE)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new _l;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const uE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cE=`
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

}`;class fE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Rn,u=e.properties.get(a);u.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new mi({vertexShader:uE,fragmentShader:cE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Fi(new Hl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dE extends Ws{constructor(e,n){super();const r=this;let a=null,u=1,f=null,d="local-floor",p=1,m=null,g=null,x=null,y=null,S=null,w=null;const A=new fE,v=n.getContextAttributes();let _=null,I=null;const P=[],N=[],J=new At;let z=null;const U=new ii;U.layers.enable(1),U.viewport=new Ht;const Y=new ii;Y.layers.enable(2),Y.viewport=new Ht;const Se=[U,Y],E=new aE;E.layers.enable(1),E.layers.enable(2);let R=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ae=P[j];return ae===void 0&&(ae=new tf,P[j]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(j){let ae=P[j];return ae===void 0&&(ae=new tf,P[j]=ae),ae.getGripSpace()},this.getHand=function(j){let ae=P[j];return ae===void 0&&(ae=new tf,P[j]=ae),ae.getHandSpace()};function ee(j){const ae=N.indexOf(j.inputSource);if(ae===-1)return;const xe=P[ae];xe!==void 0&&(xe.update(j.inputSource,j.frame,m||f),xe.dispatchEvent({type:j.type,data:j.inputSource}))}function ue(){a.removeEventListener("select",ee),a.removeEventListener("selectstart",ee),a.removeEventListener("selectend",ee),a.removeEventListener("squeeze",ee),a.removeEventListener("squeezestart",ee),a.removeEventListener("squeezeend",ee),a.removeEventListener("end",ue),a.removeEventListener("inputsourceschange",fe);for(let j=0;j<P.length;j++){const ae=N[j];ae!==null&&(N[j]=null,P[j].disconnect(ae))}R=null,re=null,A.reset(),e.setRenderTarget(_),S=null,y=null,x=null,a=null,I=null,Pe.stop(),r.isPresenting=!1,e.setPixelRatio(z),e.setSize(J.width,J.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){u=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){d=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(j){m=j},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return x},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(j){if(a=j,a!==null){if(_=e.getRenderTarget(),a.addEventListener("select",ee),a.addEventListener("selectstart",ee),a.addEventListener("selectend",ee),a.addEventListener("squeeze",ee),a.addEventListener("squeezestart",ee),a.addEventListener("squeezeend",ee),a.addEventListener("end",ue),a.addEventListener("inputsourceschange",fe),v.xrCompatible!==!0&&await n.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(J),a.renderState.layers===void 0){const ae={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(a,n,ae),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),I=new jr(S.framebufferWidth,S.framebufferHeight,{format:oi,type:ki,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ae=null,xe=null,ye=null;v.depth&&(ye=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ae=v.stencil?Vs:Fs,xe=v.stencil?Hs:Xr);const be={colorFormat:n.RGBA8,depthFormat:ye,scaleFactor:u};x=new XRWebGLBinding(a,n),y=x.createProjectionLayer(be),a.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),I=new jr(y.textureWidth,y.textureHeight,{format:oi,type:ki,depthTexture:new dg(y.textureWidth,y.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await a.requestReferenceSpace(d),Pe.setContext(a),Pe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function fe(j){for(let ae=0;ae<j.removed.length;ae++){const xe=j.removed[ae],ye=N.indexOf(xe);ye>=0&&(N[ye]=null,P[ye].disconnect(xe))}for(let ae=0;ae<j.added.length;ae++){const xe=j.added[ae];let ye=N.indexOf(xe);if(ye===-1){for(let Le=0;Le<P.length;Le++)if(Le>=N.length){N.push(xe),ye=Le;break}else if(N[Le]===null){N[Le]=xe,ye=Le;break}if(ye===-1)break}const be=P[ye];be&&be.connect(xe)}}const te=new Q,le=new Q;function O(j,ae,xe){te.setFromMatrixPosition(ae.matrixWorld),le.setFromMatrixPosition(xe.matrixWorld);const ye=te.distanceTo(le),be=ae.projectionMatrix.elements,Le=xe.projectionMatrix.elements,et=be[14]/(be[10]-1),pt=be[14]/(be[10]+1),lt=(be[9]+1)/be[5],k=(be[9]-1)/be[5],tn=(be[8]-1)/be[0],at=(Le[8]+1)/Le[0],ft=et*tn,$e=et*at,Tt=ye/(-tn+at),Qe=Tt*-tn;if(ae.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Qe),j.translateZ(Tt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),be[10]===-1)j.projectionMatrix.copy(ae.projectionMatrix),j.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const b=et+Tt,T=pt+Tt,q=ft-Qe,he=$e+(ye-Qe),ve=lt*pt/T*b,de=k*pt/T*b;j.projectionMatrix.makePerspective(q,he,ve,de,b,T),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ce(j,ae){ae===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ae.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(a===null)return;let ae=j.near,xe=j.far;A.texture!==null&&(A.depthNear>0&&(ae=A.depthNear),A.depthFar>0&&(xe=A.depthFar)),E.near=Y.near=U.near=ae,E.far=Y.far=U.far=xe,(R!==E.near||re!==E.far)&&(a.updateRenderState({depthNear:E.near,depthFar:E.far}),R=E.near,re=E.far);const ye=j.parent,be=E.cameras;ce(E,ye);for(let Le=0;Le<be.length;Le++)ce(be[Le],ye);be.length===2?O(E,U,Y):E.projectionMatrix.copy(U.projectionMatrix),se(j,E,ye)};function se(j,ae,xe){xe===null?j.matrix.copy(ae.matrixWorld):(j.matrix.copy(xe.matrixWorld),j.matrix.invert(),j.matrix.multiply(ae.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ae.projectionMatrix),j.projectionMatrixInverse.copy(ae.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Gf*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(y===null&&S===null))return p},this.setFoveation=function(j){p=j,y!==null&&(y.fixedFoveation=j),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=j)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(E)};let D=null;function ne(j,ae){if(g=ae.getViewerPose(m||f),w=ae,g!==null){const xe=g.views;S!==null&&(e.setRenderTargetFramebuffer(I,S.framebuffer),e.setRenderTarget(I));let ye=!1;xe.length!==E.cameras.length&&(E.cameras.length=0,ye=!0);for(let Le=0;Le<xe.length;Le++){const et=xe[Le];let pt=null;if(S!==null)pt=S.getViewport(et);else{const k=x.getViewSubImage(y,et);pt=k.viewport,Le===0&&(e.setRenderTargetTextures(I,k.colorTexture,y.ignoreDepthValues?void 0:k.depthStencilTexture),e.setRenderTarget(I))}let lt=Se[Le];lt===void 0&&(lt=new ii,lt.layers.enable(Le),lt.viewport=new Ht,Se[Le]=lt),lt.matrix.fromArray(et.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(et.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(pt.x,pt.y,pt.width,pt.height),Le===0&&(E.matrix.copy(lt.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ye===!0&&E.cameras.push(lt)}const be=a.enabledFeatures;if(be&&be.includes("depth-sensing")){const Le=x.getDepthInformation(xe[0]);Le&&Le.isValid&&Le.texture&&A.init(e,Le,a.renderState)}}for(let xe=0;xe<P.length;xe++){const ye=N[xe],be=P[xe];ye!==null&&be!==void 0&&be.update(ye,ae,m||f)}D&&D(j,ae),ae.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ae}),w=null}const Pe=new cg;Pe.setAnimationLoop(ne),this.setAnimationLoop=function(j){D=j},this.dispose=function(){}}}const Or=new Bi,hE=new Bt;function pE(s,e){function n(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function r(v,_){_.color.getRGB(v.fogColor.value,og(s)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function a(v,_,I,P,N){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(v,_):_.isMeshToonMaterial?(u(v,_),x(v,_)):_.isMeshPhongMaterial?(u(v,_),g(v,_)):_.isMeshStandardMaterial?(u(v,_),y(v,_),_.isMeshPhysicalMaterial&&S(v,_,N)):_.isMeshMatcapMaterial?(u(v,_),w(v,_)):_.isMeshDepthMaterial?u(v,_):_.isMeshDistanceMaterial?(u(v,_),A(v,_)):_.isMeshNormalMaterial?u(v,_):_.isLineBasicMaterial?(f(v,_),_.isLineDashedMaterial&&d(v,_)):_.isPointsMaterial?p(v,_,I,P):_.isSpriteMaterial?m(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,n(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,n(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,n(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===Cn&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,n(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===Cn&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,n(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,n(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const I=e.get(_),P=I.envMap,N=I.envMapRotation;P&&(v.envMap.value=P,Or.copy(N),Or.x*=-1,Or.y*=-1,Or.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),v.envMapRotation.value.setFromMatrix4(hE.makeRotationFromEuler(Or)),v.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap&&(v.lightMap.value=_.lightMap,v.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,v.lightMapTransform)),_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,v.aoMapTransform))}function f(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,n(_.map,v.mapTransform))}function d(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function p(v,_,I,P){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*I,v.scale.value=P*.5,_.map&&(v.map.value=_.map,n(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,n(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function m(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,n(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,n(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function g(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function x(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function y(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,v.roughnessMapTransform)),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function S(v,_,I){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Cn&&v.clearcoatNormalScale.value.negate())),_.dispersion>0&&(v.dispersion.value=_.dispersion),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=I.texture,v.transmissionSamplerSize.value.set(I.width,I.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,v.specularIntensityMapTransform))}function w(v,_){_.matcap&&(v.matcap.value=_.matcap)}function A(v,_){const I=e.get(_).light;v.referencePosition.value.setFromMatrixPosition(I.matrixWorld),v.nearDistance.value=I.shadow.camera.near,v.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function mE(s,e,n,r){let a={},u={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(I,P){const N=P.program;r.uniformBlockBinding(I,N)}function m(I,P){let N=a[I.id];N===void 0&&(w(I),N=g(I),a[I.id]=N,I.addEventListener("dispose",v));const J=P.program;r.updateUBOMapping(I,J);const z=e.render.frame;u[I.id]!==z&&(y(I),u[I.id]=z)}function g(I){const P=x();I.__bindingPointIndex=P;const N=s.createBuffer(),J=I.__size,z=I.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,J,z),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,N),N}function x(){for(let I=0;I<d;I++)if(f.indexOf(I)===-1)return f.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(I){const P=a[I.id],N=I.uniforms,J=I.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let z=0,U=N.length;z<U;z++){const Y=Array.isArray(N[z])?N[z]:[N[z]];for(let Se=0,E=Y.length;Se<E;Se++){const R=Y[Se];if(S(R,z,Se,J)===!0){const re=R.__offset,ee=Array.isArray(R.value)?R.value:[R.value];let ue=0;for(let fe=0;fe<ee.length;fe++){const te=ee[fe],le=A(te);typeof te=="number"||typeof te=="boolean"?(R.__data[0]=te,s.bufferSubData(s.UNIFORM_BUFFER,re+ue,R.__data)):te.isMatrix3?(R.__data[0]=te.elements[0],R.__data[1]=te.elements[1],R.__data[2]=te.elements[2],R.__data[3]=0,R.__data[4]=te.elements[3],R.__data[5]=te.elements[4],R.__data[6]=te.elements[5],R.__data[7]=0,R.__data[8]=te.elements[6],R.__data[9]=te.elements[7],R.__data[10]=te.elements[8],R.__data[11]=0):(te.toArray(R.__data,ue),ue+=le.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,re,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(I,P,N,J){const z=I.value,U=P+"_"+N;if(J[U]===void 0)return typeof z=="number"||typeof z=="boolean"?J[U]=z:J[U]=z.clone(),!0;{const Y=J[U];if(typeof z=="number"||typeof z=="boolean"){if(Y!==z)return J[U]=z,!0}else if(Y.equals(z)===!1)return Y.copy(z),!0}return!1}function w(I){const P=I.uniforms;let N=0;const J=16;for(let U=0,Y=P.length;U<Y;U++){const Se=Array.isArray(P[U])?P[U]:[P[U]];for(let E=0,R=Se.length;E<R;E++){const re=Se[E],ee=Array.isArray(re.value)?re.value:[re.value];for(let ue=0,fe=ee.length;ue<fe;ue++){const te=ee[ue],le=A(te),O=N%J,ce=O%le.boundary,se=O+ce;N+=ce,se!==0&&J-se<le.storage&&(N+=J-se),re.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=N,N+=le.storage}}}const z=N%J;return z>0&&(N+=J-z),I.__size=N,I.__cache={},this}function A(I){const P={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(P.boundary=4,P.storage=4):I.isVector2?(P.boundary=8,P.storage=8):I.isVector3||I.isColor?(P.boundary=16,P.storage=12):I.isVector4?(P.boundary=16,P.storage=16):I.isMatrix3?(P.boundary=48,P.storage=48):I.isMatrix4?(P.boundary=64,P.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),P}function v(I){const P=I.target;P.removeEventListener("dispose",v);const N=f.indexOf(P.__bindingPointIndex);f.splice(N,1),s.deleteBuffer(a[P.id]),delete a[P.id],delete u[P.id]}function _(){for(const I in a)s.deleteBuffer(a[I]);f=[],a={},u={}}return{bind:p,update:m,dispose:_}}class gE{constructor(e={}){const{canvas:n=i0(),context:r=null,depth:a=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=f;const S=new Uint32Array(4),w=new Int32Array(4);let A=null,v=null;const _=[],I=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hi,this.toneMapping=gr,this.toneMappingExposure=1;const P=this;let N=!1,J=0,z=0,U=null,Y=-1,Se=null;const E=new Ht,R=new Ht;let re=null;const ee=new xt(0);let ue=0,fe=n.width,te=n.height,le=1,O=null,ce=null;const se=new Ht(0,0,fe,te),D=new Ht(0,0,fe,te);let ne=!1;const Pe=new ug;let j=!1,ae=!1;const xe=new Bt,ye=new Bt,be=new Q,Le=new Ht,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function lt(){return U===null?le:1}let k=r;function tn(C,V){return n.getContext(C,V)}try{const C={alpha:!0,depth:a,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${qf}`),n.addEventListener("webglcontextlost",pe,!1),n.addEventListener("webglcontextrestored",Ce,!1),n.addEventListener("webglcontextcreationerror",Ie,!1),k===null){const V="webgl2";if(k=tn(V,C),k===null)throw tn(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let at,ft,$e,Tt,Qe,b,T,q,he,ve,de,je,Ae,Fe,dt,Me,Oe,tt,Je,Be,ut,it,St,H;function De(){at=new SS(k),at.init(),it=new oE(k,at),ft=new mS(k,at,e,it),$e=new iE(k),ft.reverseDepthBuffer&&$e.buffers.depth.setReversed(!0),Tt=new TS(k),Qe=new VM,b=new sE(k,at,$e,Qe,ft,it,Tt),T=new vS(P),q=new yS(P),he=new L0(k),St=new hS(k,he),ve=new MS(k,he,Tt,St),de=new AS(k,ve,he,Tt),Je=new wS(k,ft,b),Me=new gS(Qe),je=new HM(P,T,q,at,ft,St,Me),Ae=new pE(P,Qe),Fe=new WM,dt=new $M(at),tt=new dS(P,T,q,$e,de,y,p),Oe=new tE(P,de,ft),H=new mE(k,Tt,ft,$e),Be=new pS(k,at,Tt),ut=new ES(k,at,Tt),Tt.programs=je.programs,P.capabilities=ft,P.extensions=at,P.properties=Qe,P.renderLists=Fe,P.shadowMap=Oe,P.state=$e,P.info=Tt}De();const oe=new dE(P,k);this.xr=oe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const C=at.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=at.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(C){C!==void 0&&(le=C,this.setSize(fe,te,!1))},this.getSize=function(C){return C.set(fe,te)},this.setSize=function(C,V,K=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}fe=C,te=V,n.width=Math.floor(C*le),n.height=Math.floor(V*le),K===!0&&(n.style.width=C+"px",n.style.height=V+"px"),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(fe*le,te*le).floor()},this.setDrawingBufferSize=function(C,V,K){fe=C,te=V,le=K,n.width=Math.floor(C*K),n.height=Math.floor(V*K),this.setViewport(0,0,C,V)},this.getCurrentViewport=function(C){return C.copy(E)},this.getViewport=function(C){return C.copy(se)},this.setViewport=function(C,V,K,$){C.isVector4?se.set(C.x,C.y,C.z,C.w):se.set(C,V,K,$),$e.viewport(E.copy(se).multiplyScalar(le).round())},this.getScissor=function(C){return C.copy(D)},this.setScissor=function(C,V,K,$){C.isVector4?D.set(C.x,C.y,C.z,C.w):D.set(C,V,K,$),$e.scissor(R.copy(D).multiplyScalar(le).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(C){$e.setScissorTest(ne=C)},this.setOpaqueSort=function(C){O=C},this.setTransparentSort=function(C){ce=C},this.getClearColor=function(C){return C.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(C=!0,V=!0,K=!0){let $=0;if(C){let G=!1;if(U!==null){const Te=U.texture.format;G=Te===ed||Te===Jf||Te===Qf}if(G){const Te=U.texture.type,Ne=Te===ki||Te===Xr||Te===ko||Te===Hs||Te===$f||Te===Zf,we=tt.getClearColor(),Ge=tt.getClearAlpha(),Ke=we.r,Ze=we.g,We=we.b;Ne?(S[0]=Ke,S[1]=Ze,S[2]=We,S[3]=Ge,k.clearBufferuiv(k.COLOR,0,S)):(w[0]=Ke,w[1]=Ze,w[2]=We,w[3]=Ge,k.clearBufferiv(k.COLOR,0,w))}else $|=k.COLOR_BUFFER_BIT}V&&($|=k.DEPTH_BUFFER_BIT,k.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),K&&($|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",pe,!1),n.removeEventListener("webglcontextrestored",Ce,!1),n.removeEventListener("webglcontextcreationerror",Ie,!1),Fe.dispose(),dt.dispose(),Qe.dispose(),T.dispose(),q.dispose(),de.dispose(),St.dispose(),H.dispose(),je.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",zi),oe.removeEventListener("sessionend",Yr),Pn.stop()};function pe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const C=Tt.autoReset,V=Oe.enabled,K=Oe.autoUpdate,$=Oe.needsUpdate,G=Oe.type;De(),Tt.autoReset=C,Oe.enabled=V,Oe.autoUpdate=K,Oe.needsUpdate=$,Oe.type=G}function Ie(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ct(C){const V=C.target;V.removeEventListener("dispose",ct),Ut(V)}function Ut(C){nn(C),Qe.remove(C)}function nn(C){const V=Qe.get(C).programs;V!==void 0&&(V.forEach(function(K){je.releaseProgram(K)}),C.isShaderMaterial&&je.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,K,$,G,Te){V===null&&(V=et);const Ne=G.isMesh&&G.matrixWorld.determinant()<0,we=vi(C,V,K,$,G);$e.setMaterial($,Ne);let Ge=K.index,Ke=1;if($.wireframe===!0){if(Ge=ve.getWireframeAttribute(K),Ge===void 0)return;Ke=2}const Ze=K.drawRange,We=K.attributes.position;let yt=Ze.start*Ke,wt=(Ze.start+Ze.count)*Ke;Te!==null&&(yt=Math.max(yt,Te.start*Ke),wt=Math.min(wt,(Te.start+Te.count)*Ke)),Ge!==null?(yt=Math.max(yt,0),wt=Math.min(wt,Ge.count)):We!=null&&(yt=Math.max(yt,0),wt=Math.min(wt,We.count));const Ct=wt-yt;if(Ct<0||Ct===1/0)return;St.setup(G,$,we,K,Ge);let Nt,gt=Be;if(Ge!==null&&(Nt=he.get(Ge),gt=ut,gt.setIndex(Nt)),G.isMesh)$.wireframe===!0?($e.setLineWidth($.wireframeLinewidth*lt()),gt.setMode(k.LINES)):gt.setMode(k.TRIANGLES);else if(G.isLine){let ke=$.linewidth;ke===void 0&&(ke=1),$e.setLineWidth(ke*lt()),G.isLineSegments?gt.setMode(k.LINES):G.isLineLoop?gt.setMode(k.LINE_LOOP):gt.setMode(k.LINE_STRIP)}else G.isPoints?gt.setMode(k.POINTS):G.isSprite&&gt.setMode(k.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)gt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))gt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const ke=G._multiDrawStarts,Wt=G._multiDrawCounts,vt=G._multiDrawCount,bn=Ge?he.get(Ge).bytesPerElement:1,jn=Qe.get($).currentProgram.getUniforms();for(let $t=0;$t<vt;$t++)jn.setValue(k,"_gl_DrawID",$t),gt.render(ke[$t]/bn,Wt[$t])}else if(G.isInstancedMesh)gt.renderInstances(yt,Ct,G.count);else if(K.isInstancedBufferGeometry){const ke=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Wt=Math.min(K.instanceCount,ke);gt.renderInstances(yt,Ct,Wt)}else gt.render(yt,Ct)};function ht(C,V,K){C.transparent===!0&&C.side===Ni&&C.forceSinglePass===!1?(C.side=Cn,C.needsUpdate=!0,Kr(C,V,K),C.side=vr,C.needsUpdate=!0,Kr(C,V,K),C.side=Ni):Kr(C,V,K)}this.compile=function(C,V,K=null){K===null&&(K=C),v=dt.get(K),v.init(V),I.push(v),K.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(v.pushLight(G),G.castShadow&&v.pushShadow(G))}),C!==K&&C.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(v.pushLight(G),G.castShadow&&v.pushShadow(G))}),v.setupLights();const $=new Set;return C.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const Te=G.material;if(Te)if(Array.isArray(Te))for(let Ne=0;Ne<Te.length;Ne++){const we=Te[Ne];ht(we,K,G),$.add(we)}else ht(Te,K,G),$.add(Te)}),I.pop(),v=null,$},this.compileAsync=function(C,V,K=null){const $=this.compile(C,V,K);return new Promise(G=>{function Te(){if($.forEach(function(Ne){Qe.get(Ne).currentProgram.isReady()&&$.delete(Ne)}),$.size===0){G(C);return}setTimeout(Te,10)}at.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Kt=null;function On(C){Kt&&Kt(C)}function zi(){Pn.stop()}function Yr(){Pn.start()}const Pn=new cg;Pn.setAnimationLoop(On),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(C){Kt=C,oe.setAnimationLoop(C),C===null?Pn.stop():Pn.start()},oe.addEventListener("sessionstart",zi),oe.addEventListener("sessionend",Yr),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(V),V=oe.getCamera()),C.isScene===!0&&C.onBeforeRender(P,C,V,U),v=dt.get(C,I.length),v.init(V),I.push(v),ye.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Pe.setFromProjectionMatrix(ye),ae=this.localClippingEnabled,j=Me.init(this.clippingPlanes,ae),A=Fe.get(C,_.length),A.init(),_.push(A),oe.enabled===!0&&oe.isPresenting===!0){const Te=P.xr.getDepthSensingMesh();Te!==null&&Ys(Te,V,-1/0,P.sortObjects)}Ys(C,V,0,P.sortObjects),A.finish(),P.sortObjects===!0&&A.sort(O,ce),pt=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,pt&&tt.addToRenderList(A,C),this.info.render.frame++,j===!0&&Me.beginShadows();const K=v.state.shadowsArray;Oe.render(K,C,V),j===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=A.opaque,G=A.transmissive;if(v.setupLights(),V.isArrayCamera){const Te=V.cameras;if(G.length>0)for(let Ne=0,we=Te.length;Ne<we;Ne++){const Ge=Te[Ne];xr($,G,C,Ge)}pt&&tt.render(C);for(let Ne=0,we=Te.length;Ne<we;Ne++){const Ge=Te[Ne];Hi(A,C,Ge,Ge.viewport)}}else G.length>0&&xr($,G,C,V),pt&&tt.render(C),Hi(A,C,V);U!==null&&(b.updateMultisampleRenderTarget(U),b.updateRenderTargetMipmap(U)),C.isScene===!0&&C.onAfterRender(P,C,V),St.resetDefaultState(),Y=-1,Se=null,I.pop(),I.length>0?(v=I[I.length-1],j===!0&&Me.setGlobalState(P.clippingPlanes,v.state.camera)):v=null,_.pop(),_.length>0?A=_[_.length-1]:A=null};function Ys(C,V,K,$){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)K=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)v.pushLight(C),C.castShadow&&v.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Pe.intersectsSprite(C)){$&&Le.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ye);const Ne=de.update(C),we=C.material;we.visible&&A.push(C,Ne,we,K,Le.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Pe.intersectsObject(C))){const Ne=de.update(C),we=C.material;if($&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Le.copy(C.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Le.copy(Ne.boundingSphere.center)),Le.applyMatrix4(C.matrixWorld).applyMatrix4(ye)),Array.isArray(we)){const Ge=Ne.groups;for(let Ke=0,Ze=Ge.length;Ke<Ze;Ke++){const We=Ge[Ke],yt=we[We.materialIndex];yt&&yt.visible&&A.push(C,Ne,yt,K,Le.z,We)}}else we.visible&&A.push(C,Ne,we,K,Le.z,null)}}const Te=C.children;for(let Ne=0,we=Te.length;Ne<we;Ne++)Ys(Te[Ne],V,K,$)}function Hi(C,V,K,$){const G=C.opaque,Te=C.transmissive,Ne=C.transparent;v.setupLightsView(K),j===!0&&Me.setGlobalState(P.clippingPlanes,K),$&&$e.viewport(E.copy($)),G.length>0&&gi(G,V,K),Te.length>0&&gi(Te,V,K),Ne.length>0&&gi(Ne,V,K),$e.buffers.depth.setTest(!0),$e.buffers.depth.setMask(!0),$e.buffers.color.setMask(!0),$e.setPolygonOffset(!1)}function xr(C,V,K,$){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[$.id]===void 0&&(v.state.transmissionRenderTarget[$.id]=new jr(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?zo:ki,minFilter:Wr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const Te=v.state.transmissionRenderTarget[$.id],Ne=$.viewport||E;Te.setSize(Ne.z,Ne.w);const we=P.getRenderTarget();P.setRenderTarget(Te),P.getClearColor(ee),ue=P.getClearAlpha(),ue<1&&P.setClearColor(16777215,.5),P.clear(),pt&&tt.render(K);const Ge=P.toneMapping;P.toneMapping=gr;const Ke=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),v.setupLightsView($),j===!0&&Me.setGlobalState(P.clippingPlanes,$),gi(C,K,$),b.updateMultisampleRenderTarget(Te),b.updateRenderTargetMipmap(Te),at.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let We=0,yt=V.length;We<yt;We++){const wt=V[We],Ct=wt.object,Nt=wt.geometry,gt=wt.material,ke=wt.group;if(gt.side===Ni&&Ct.layers.test($.layers)){const Wt=gt.side;gt.side=Cn,gt.needsUpdate=!0,qr(Ct,K,$,Nt,gt,ke),gt.side=Wt,gt.needsUpdate=!0,Ze=!0}}Ze===!0&&(b.updateMultisampleRenderTarget(Te),b.updateRenderTargetMipmap(Te))}P.setRenderTarget(we),P.setClearColor(ee,ue),Ke!==void 0&&($.viewport=Ke),P.toneMapping=Ge}function gi(C,V,K){const $=V.isScene===!0?V.overrideMaterial:null;for(let G=0,Te=C.length;G<Te;G++){const Ne=C[G],we=Ne.object,Ge=Ne.geometry,Ke=$===null?Ne.material:$,Ze=Ne.group;we.layers.test(K.layers)&&qr(we,V,K,Ge,Ke,Ze)}}function qr(C,V,K,$,G,Te){C.onBeforeRender(P,V,K,$,G,Te),C.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),G.onBeforeRender(P,V,K,$,C,Te),G.transparent===!0&&G.side===Ni&&G.forceSinglePass===!1?(G.side=Cn,G.needsUpdate=!0,P.renderBufferDirect(K,V,$,G,C,Te),G.side=vr,G.needsUpdate=!0,P.renderBufferDirect(K,V,$,G,C,Te),G.side=Ni):P.renderBufferDirect(K,V,$,G,C,Te),C.onAfterRender(P,V,K,$,G,Te)}function Kr(C,V,K){V.isScene!==!0&&(V=et);const $=Qe.get(C),G=v.state.lights,Te=v.state.shadowsArray,Ne=G.state.version,we=je.getParameters(C,G.state,Te,V,K),Ge=je.getProgramCacheKey(we);let Ke=$.programs;$.environment=C.isMeshStandardMaterial?V.environment:null,$.fog=V.fog,$.envMap=(C.isMeshStandardMaterial?q:T).get(C.envMap||$.environment),$.envMapRotation=$.environment!==null&&C.envMap===null?V.environmentRotation:C.envMapRotation,Ke===void 0&&(C.addEventListener("dispose",ct),Ke=new Map,$.programs=Ke);let Ze=Ke.get(Ge);if(Ze!==void 0){if($.currentProgram===Ze&&$.lightsStateVersion===Ne)return Yo(C,we),Ze}else we.uniforms=je.getUniforms(C),C.onBeforeCompile(we,P),Ze=je.acquireProgram(we,Ge),Ke.set(Ge,Ze),$.uniforms=we.uniforms;const We=$.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(We.clippingPlanes=Me.uniform),Yo(C,we),$.needsLights=Ko(C),$.lightsStateVersion=Ne,$.needsLights&&(We.ambientLightColor.value=G.state.ambient,We.lightProbe.value=G.state.probe,We.directionalLights.value=G.state.directional,We.directionalLightShadows.value=G.state.directionalShadow,We.spotLights.value=G.state.spot,We.spotLightShadows.value=G.state.spotShadow,We.rectAreaLights.value=G.state.rectArea,We.ltc_1.value=G.state.rectAreaLTC1,We.ltc_2.value=G.state.rectAreaLTC2,We.pointLights.value=G.state.point,We.pointLightShadows.value=G.state.pointShadow,We.hemisphereLights.value=G.state.hemi,We.directionalShadowMap.value=G.state.directionalShadowMap,We.directionalShadowMatrix.value=G.state.directionalShadowMatrix,We.spotShadowMap.value=G.state.spotShadowMap,We.spotLightMatrix.value=G.state.spotLightMatrix,We.spotLightMap.value=G.state.spotLightMap,We.pointShadowMap.value=G.state.pointShadowMap,We.pointShadowMatrix.value=G.state.pointShadowMatrix),$.currentProgram=Ze,$.uniformsList=null,Ze}function jo(C){if(C.uniformsList===null){const V=C.currentProgram.getUniforms();C.uniformsList=Pl.seqWithValue(V.seq,C.uniforms)}return C.uniformsList}function Yo(C,V){const K=Qe.get(C);K.outputColorSpace=V.outputColorSpace,K.batching=V.batching,K.batchingColor=V.batchingColor,K.instancing=V.instancing,K.instancingColor=V.instancingColor,K.instancingMorph=V.instancingMorph,K.skinning=V.skinning,K.morphTargets=V.morphTargets,K.morphNormals=V.morphNormals,K.morphColors=V.morphColors,K.morphTargetsCount=V.morphTargetsCount,K.numClippingPlanes=V.numClippingPlanes,K.numIntersection=V.numClipIntersection,K.vertexAlphas=V.vertexAlphas,K.vertexTangents=V.vertexTangents,K.toneMapping=V.toneMapping}function vi(C,V,K,$,G){V.isScene!==!0&&(V=et),b.resetTextureUnits();const Te=V.fog,Ne=$.isMeshStandardMaterial?V.environment:null,we=U===null?P.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:_r,Ge=($.isMeshStandardMaterial?q:T).get($.envMap||Ne),Ke=$.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ze=!!K.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),We=!!K.morphAttributes.position,yt=!!K.morphAttributes.normal,wt=!!K.morphAttributes.color;let Ct=gr;$.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Ct=P.toneMapping);const Nt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,gt=Nt!==void 0?Nt.length:0,ke=Qe.get($),Wt=v.state.lights;if(j===!0&&(ae===!0||C!==Se)){const an=C===Se&&$.id===Y;Me.setState($,C,an)}let vt=!1;$.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Wt.state.version||ke.outputColorSpace!==we||G.isBatchedMesh&&ke.batching===!1||!G.isBatchedMesh&&ke.batching===!0||G.isBatchedMesh&&ke.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&ke.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&ke.instancing===!1||!G.isInstancedMesh&&ke.instancing===!0||G.isSkinnedMesh&&ke.skinning===!1||!G.isSkinnedMesh&&ke.skinning===!0||G.isInstancedMesh&&ke.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&ke.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&ke.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&ke.instancingMorph===!1&&G.morphTexture!==null||ke.envMap!==Ge||$.fog===!0&&ke.fog!==Te||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Me.numPlanes||ke.numIntersection!==Me.numIntersection)||ke.vertexAlphas!==Ke||ke.vertexTangents!==Ze||ke.morphTargets!==We||ke.morphNormals!==yt||ke.morphColors!==wt||ke.toneMapping!==Ct||ke.morphTargetsCount!==gt)&&(vt=!0):(vt=!0,ke.__version=$.version);let bn=ke.currentProgram;vt===!0&&(bn=Kr($,V,G));let jn=!1,$t=!1,_i=!1;const Rt=bn.getUniforms(),li=ke.uniforms;if($e.useProgram(bn.program)&&(jn=!0,$t=!0,_i=!0),$.id!==Y&&(Y=$.id,$t=!0),jn||Se!==C){ft.reverseDepthBuffer?(xe.copy(C.projectionMatrix),s0(xe),o0(xe),Rt.setValue(k,"projectionMatrix",xe)):Rt.setValue(k,"projectionMatrix",C.projectionMatrix),Rt.setValue(k,"viewMatrix",C.matrixWorldInverse);const an=Rt.map.cameraPosition;an!==void 0&&an.setValue(k,be.setFromMatrixPosition(C.matrixWorld)),ft.logarithmicDepthBuffer&&Rt.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Rt.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),Se!==C&&(Se=C,$t=!0,_i=!0)}if(G.isSkinnedMesh){Rt.setOptional(k,G,"bindMatrix"),Rt.setOptional(k,G,"bindMatrixInverse");const an=G.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),Rt.setValue(k,"boneTexture",an.boneTexture,b))}G.isBatchedMesh&&(Rt.setOptional(k,G,"batchingTexture"),Rt.setValue(k,"batchingTexture",G._matricesTexture,b),Rt.setOptional(k,G,"batchingIdTexture"),Rt.setValue(k,"batchingIdTexture",G._indirectTexture,b),Rt.setOptional(k,G,"batchingColorTexture"),G._colorsTexture!==null&&Rt.setValue(k,"batchingColorTexture",G._colorsTexture,b));const qs=K.morphAttributes;if((qs.position!==void 0||qs.normal!==void 0||qs.color!==void 0)&&Je.update(G,K,bn),($t||ke.receiveShadow!==G.receiveShadow)&&(ke.receiveShadow=G.receiveShadow,Rt.setValue(k,"receiveShadow",G.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(li.envMap.value=Ge,li.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&V.environment!==null&&(li.envMapIntensity.value=V.environmentIntensity),$t&&(Rt.setValue(k,"toneMappingExposure",P.toneMappingExposure),ke.needsLights&&qo(li,_i),Te&&$.fog===!0&&Ae.refreshFogUniforms(li,Te),Ae.refreshMaterialUniforms(li,$,le,te,v.state.transmissionRenderTarget[C.id]),Pl.upload(k,jo(ke),li,b)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Pl.upload(k,jo(ke),li,b),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Rt.setValue(k,"center",G.center),Rt.setValue(k,"modelViewMatrix",G.modelViewMatrix),Rt.setValue(k,"normalMatrix",G.normalMatrix),Rt.setValue(k,"modelMatrix",G.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const an=$.uniformsGroups;for(let $r=0,Ks=an.length;$r<Ks;$r++){const Vi=an[$r];H.update(Vi,bn),H.bind(Vi,bn)}}return bn}function qo(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function Ko(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(C,V,K){Qe.get(C.texture).__webglTexture=V,Qe.get(C.depthTexture).__webglTexture=K;const $=Qe.get(C);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=K===void 0,$.__autoAllocateDepthBuffer||at.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,V){const K=Qe.get(C);K.__webglFramebuffer=V,K.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(C,V=0,K=0){U=C,J=V,z=K;let $=!0,G=null,Te=!1,Ne=!1;if(C){const Ge=Qe.get(C);if(Ge.__useDefaultFramebuffer!==void 0)$e.bindFramebuffer(k.FRAMEBUFFER,null),$=!1;else if(Ge.__webglFramebuffer===void 0)b.setupRenderTarget(C);else if(Ge.__hasExternalTextures)b.rebindTextures(C,Qe.get(C.texture).__webglTexture,Qe.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const We=C.depthTexture;if(Ge.__boundDepthTexture!==We){if(We!==null&&Qe.has(We)&&(C.width!==We.image.width||C.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(C)}}const Ke=C.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Ne=!0);const Ze=Qe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ze[V])?G=Ze[V][K]:G=Ze[V],Te=!0):C.samples>0&&b.useMultisampledRTT(C)===!1?G=Qe.get(C).__webglMultisampledFramebuffer:Array.isArray(Ze)?G=Ze[K]:G=Ze,E.copy(C.viewport),R.copy(C.scissor),re=C.scissorTest}else E.copy(se).multiplyScalar(le).floor(),R.copy(D).multiplyScalar(le).floor(),re=ne;if($e.bindFramebuffer(k.FRAMEBUFFER,G)&&$&&$e.drawBuffers(C,G),$e.viewport(E),$e.scissor(R),$e.setScissorTest(re),Te){const Ge=Qe.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ge.__webglTexture,K)}else if(Ne){const Ge=Qe.get(C.texture),Ke=V||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ge.__webglTexture,K||0,Ke)}Y=-1},this.readRenderTargetPixels=function(C,V,K,$,G,Te,Ne){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Qe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ne!==void 0&&(we=we[Ne]),we){$e.bindFramebuffer(k.FRAMEBUFFER,we);try{const Ge=C.texture,Ke=Ge.format,Ze=Ge.type;if(!ft.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-$&&K>=0&&K<=C.height-G&&k.readPixels(V,K,$,G,it.convert(Ke),it.convert(Ze),Te)}finally{const Ge=U!==null?Qe.get(U).__webglFramebuffer:null;$e.bindFramebuffer(k.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(C,V,K,$,G,Te,Ne){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Qe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ne!==void 0&&(we=we[Ne]),we){const Ge=C.texture,Ke=Ge.format,Ze=Ge.type;if(!ft.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=C.width-$&&K>=0&&K<=C.height-G){$e.bindFramebuffer(k.FRAMEBUFFER,we);const We=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,We),k.bufferData(k.PIXEL_PACK_BUFFER,Te.byteLength,k.STREAM_READ),k.readPixels(V,K,$,G,it.convert(Ke),it.convert(Ze),0);const yt=U!==null?Qe.get(U).__webglFramebuffer:null;$e.bindFramebuffer(k.FRAMEBUFFER,yt);const wt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await r0(k,wt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,We),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Te),k.deleteBuffer(We),k.deleteSync(wt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,V=null,K=0){C.isTexture!==!0&&(Rl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,C=arguments[1]);const $=Math.pow(2,-K),G=Math.floor(C.image.width*$),Te=Math.floor(C.image.height*$),Ne=V!==null?V.x:0,we=V!==null?V.y:0;b.setTexture2D(C,0),k.copyTexSubImage2D(k.TEXTURE_2D,K,0,0,Ne,we,G,Te),$e.unbindTexture()},this.copyTextureToTexture=function(C,V,K=null,$=null,G=0){C.isTexture!==!0&&(Rl("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,C=arguments[1],V=arguments[2],G=arguments[3]||0,K=null);let Te,Ne,we,Ge,Ke,Ze;K!==null?(Te=K.max.x-K.min.x,Ne=K.max.y-K.min.y,we=K.min.x,Ge=K.min.y):(Te=C.image.width,Ne=C.image.height,we=0,Ge=0),$!==null?(Ke=$.x,Ze=$.y):(Ke=0,Ze=0);const We=it.convert(V.format),yt=it.convert(V.type);b.setTexture2D(V,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,V.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,V.unpackAlignment);const wt=k.getParameter(k.UNPACK_ROW_LENGTH),Ct=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Nt=k.getParameter(k.UNPACK_SKIP_PIXELS),gt=k.getParameter(k.UNPACK_SKIP_ROWS),ke=k.getParameter(k.UNPACK_SKIP_IMAGES),Wt=C.isCompressedTexture?C.mipmaps[G]:C.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,Wt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Wt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,we),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ge),C.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,G,Ke,Ze,Te,Ne,We,yt,Wt.data):C.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,G,Ke,Ze,Wt.width,Wt.height,We,Wt.data):k.texSubImage2D(k.TEXTURE_2D,G,Ke,Ze,Te,Ne,We,yt,Wt),k.pixelStorei(k.UNPACK_ROW_LENGTH,wt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ct),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Nt),k.pixelStorei(k.UNPACK_SKIP_ROWS,gt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ke),G===0&&V.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),$e.unbindTexture()},this.copyTextureToTexture3D=function(C,V,K=null,$=null,G=0){C.isTexture!==!0&&(Rl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,$=arguments[1]||null,C=arguments[2],V=arguments[3],G=arguments[4]||0);let Te,Ne,we,Ge,Ke,Ze,We,yt,wt;const Ct=C.isCompressedTexture?C.mipmaps[G]:C.image;K!==null?(Te=K.max.x-K.min.x,Ne=K.max.y-K.min.y,we=K.max.z-K.min.z,Ge=K.min.x,Ke=K.min.y,Ze=K.min.z):(Te=Ct.width,Ne=Ct.height,we=Ct.depth,Ge=0,Ke=0,Ze=0),$!==null?(We=$.x,yt=$.y,wt=$.z):(We=0,yt=0,wt=0);const Nt=it.convert(V.format),gt=it.convert(V.type);let ke;if(V.isData3DTexture)b.setTexture3D(V,0),ke=k.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)b.setTexture2DArray(V,0),ke=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,V.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,V.unpackAlignment);const Wt=k.getParameter(k.UNPACK_ROW_LENGTH),vt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),bn=k.getParameter(k.UNPACK_SKIP_PIXELS),jn=k.getParameter(k.UNPACK_SKIP_ROWS),$t=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Ct.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ct.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ge),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ke),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ze),C.isDataTexture||C.isData3DTexture?k.texSubImage3D(ke,G,We,yt,wt,Te,Ne,we,Nt,gt,Ct.data):V.isCompressedArrayTexture?k.compressedTexSubImage3D(ke,G,We,yt,wt,Te,Ne,we,Nt,Ct.data):k.texSubImage3D(ke,G,We,yt,wt,Te,Ne,we,Nt,gt,Ct),k.pixelStorei(k.UNPACK_ROW_LENGTH,Wt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,vt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,bn),k.pixelStorei(k.UNPACK_SKIP_ROWS,jn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,$t),G===0&&V.generateMipmaps&&k.generateMipmap(ke),$e.unbindTexture()},this.initRenderTarget=function(C){Qe.get(C).__webglFramebuffer===void 0&&b.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?b.setTextureCube(C,0):C.isData3DTexture?b.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?b.setTexture2DArray(C,0):b.setTexture2D(C,0),$e.unbindTexture()},this.resetState=function(){J=0,z=0,U=null,$e.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===td?"display-p3":"srgb",n.unpackColorSpace=Mt.workingColorSpace===zl?"display-p3":"srgb"}}class vE extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class _E extends Xs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ol=new Q,kl=new Q,Rm=new Bt,Uo=new nd,xl=new Wo,nf=new Q,Pm=new Q;class xE extends vn{constructor(e=new ai,n=new _E){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,u=n.count;a<u;a++)Ol.fromBufferAttribute(n,a-1),kl.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=Ol.distanceTo(kl);e.setAttribute("lineDistance",new Oi(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,u=e.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),xl.copy(r.boundingSphere),xl.applyMatrix4(a),xl.radius+=u,e.ray.intersectsSphere(xl)===!1)return;Rm.copy(a).invert(),Uo.copy(e.ray).applyMatrix4(Rm);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,g=r.index,y=r.attributes.position;if(g!==null){const S=Math.max(0,f.start),w=Math.min(g.count,f.start+f.count);for(let A=S,v=w-1;A<v;A+=m){const _=g.getX(A),I=g.getX(A+1),P=yl(this,e,Uo,p,_,I);P&&n.push(P)}if(this.isLineLoop){const A=g.getX(w-1),v=g.getX(S),_=yl(this,e,Uo,p,A,v);_&&n.push(_)}}else{const S=Math.max(0,f.start),w=Math.min(y.count,f.start+f.count);for(let A=S,v=w-1;A<v;A+=m){const _=yl(this,e,Uo,p,A,A+1);_&&n.push(_)}if(this.isLineLoop){const A=yl(this,e,Uo,p,w-1,S);A&&n.push(A)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function yl(s,e,n,r,a,u){const f=s.geometry.attributes.position;if(Ol.fromBufferAttribute(f,a),kl.fromBufferAttribute(f,u),n.distanceSqToSegment(Ol,kl,nf,Pm)>r)return;nf.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(nf);if(!(p<e.near||p>e.far))return{distance:p,point:Pm.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const bm=new Q,Lm=new Q;class yE extends xE{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let a=0,u=n.count;a<u;a+=2)bm.fromBufferAttribute(n,a),Lm.fromBufferAttribute(n,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+bm.distanceTo(Lm);e.setAttribute("lineDistance",new Oi(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class SE extends Xs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Dm=new Bt,Xf=new nd,Sl=new Wo,Ml=new Q;class ME extends vn{constructor(e=new ai,n=new SE){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,u=e.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Sl.copy(r.boundingSphere),Sl.applyMatrix4(a),Sl.radius+=u,e.ray.intersectsSphere(Sl)===!1)return;Dm.copy(a).invert(),Xf.copy(e.ray).applyMatrix4(Dm);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=r.index,x=r.attributes.position;if(m!==null){const y=Math.max(0,f.start),S=Math.min(m.count,f.start+f.count);for(let w=y,A=S;w<A;w++){const v=m.getX(w);Ml.fromBufferAttribute(x,v),Nm(Ml,v,p,a,e,n,this)}}else{const y=Math.max(0,f.start),S=Math.min(x.count,f.start+f.count);for(let w=y,A=S;w<A;w++)Ml.fromBufferAttribute(x,w),Nm(Ml,w,p,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Nm(s,e,n,r,a,u,f){const d=Xf.distanceSqToPoint(s);if(d<n){const p=new Q;Xf.closestPointToPoint(s,p),p.applyMatrix4(r);const m=a.ray.origin.distanceTo(p);if(m<a.near||m>a.far)return;u.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qf);const EE=`/**
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
`,TE=`varying float vEnergy;
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
`,wE=`/**
 * JEIKEI NEURAL V2 - Edge Vertex Shader
 */
attribute float aActive;
uniform float uTime;

varying float vActive;

void main() {
  vActive = aActive;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,AE=`/**
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
`,vg=({mode:s="fullscreen",className:e=""})=>{const{engine:n,theme:r}=Bo(),a=on.useRef(null),u=on.useRef(),[f,d]=on.useState(0);on.useEffect(()=>{if(!a.current||!n)return;const m=a.current,g=s==="fullscreen",x=new gE({antialias:!0,alpha:!0,powerPreference:"high-performance"});x.setPixelRatio(Math.min(window.devicePixelRatio,2));const y=()=>{const R=g?window.innerWidth:m.clientWidth,re=g?window.innerHeight:m.clientHeight;return x.setSize(R,re),{width:R,height:re}},S=y();x.setClearColor(0,0),m.appendChild(x.domElement),u.current=x;const w=new vE,A=new fg(-S.width/2,S.width/2,S.height/2,-S.height/2,.1,1e3);A.position.z=10;const v=new ai,_=new mi({vertexShader:EE,fragmentShader:TE,transparent:!0,blending:Ll,depthWrite:!1,uniforms:{uTime:{value:0},uAccent:{value:new xt(r==="mission"?15907131:3463423)},uGlowIntensity:{value:2.5},uSize:{value:g?10:6}}}),I=new ME(v,_);w.add(I);const P=new ai,N=new mi({vertexShader:wE,fragmentShader:AE,transparent:!0,blending:Ll,depthWrite:!1,uniforms:{uTime:{value:0},uAccent:{value:new xt(r==="mission"?15907131:3463423)}}}),J=new yE(P,N);w.add(J);let z=0,U=performance.now();const Y=n.subscribe(R=>{const{nodes:re,edges:ee,activeEdges:ue}=R,fe=x.getSize(new At),te=new Float32Array(re.length*3),le=new Float32Array(re.length);re.forEach((D,ne)=>{te[ne*3]=D.position[0]-fe.x/2,te[ne*3+1]=D.position[1]-fe.y/2,te[ne*3+2]=D.position[2],le[ne]=D.energy}),v.setAttribute("position",new An(te,3)),v.setAttribute("aEnergy",new An(le,1));const O=new Float32Array(ee.length*6),ce=new Float32Array(ee.length*2);ee.forEach((D,ne)=>{const Pe=re[D.from],j=re[D.to];if(Pe&&j){const ae=ne*6;O[ae]=Pe.position[0]-fe.x/2,O[ae+1]=Pe.position[1]-fe.y/2,O[ae+2]=Pe.position[2],O[ae+3]=j.position[0]-fe.x/2,O[ae+4]=j.position[1]-fe.y/2,O[ae+5]=j.position[2];const xe=[D.from,D.to].sort((be,Le)=>be-Le).join("-"),ye=ue.has(xe)?1:0;ce[ne*2]=ye,ce[ne*2+1]=ye}}),P.setAttribute("position",new An(O,3)),P.setAttribute("aActive",new An(ce,1)),_.uniforms.uTime.value=performance.now()*.001,N.uniforms.uTime.value=performance.now()*.001,x.render(w,A),z++;const se=performance.now();se-U>1e3&&(d(z),z=0,U=se)}),Se=()=>{const R=y();A.left=-R.width/2,A.right=R.width/2,A.top=R.height/2,A.bottom=-R.height/2,A.updateProjectionMatrix()},E=new ResizeObserver(()=>{Se()});return g?window.addEventListener("resize",Se):E.observe(m),()=>{Y(),window.removeEventListener("resize",Se),E.disconnect(),x.dispose(),m.contains(x.domElement)&&m.removeChild(x.domElement)}},[n,r,s]);const p=s==="fullscreen"?"fixed inset-0 -z-10 bg-[#020202] pointer-events-none":"relative w-full h-full min-h-[300px] overflow-hidden rounded-xl border border-white/5 jk-glass pointer-events-none";return ie.jsxs("div",{ref:a,className:`${p} ${e}`,children:[ie.jsx("div",{className:"absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"}),s==="fullscreen"&&ie.jsxs("div",{className:"absolute top-4 right-6 font-mono text-[9px] tracking-widest text-neo-accent opacity-30 select-none",children:["SYSTEM_LOAD: ",f," FPS // ",r.toUpperCase(),"_MODE"]})]})},CE=({children:s,showScanlines:e=!0})=>ie.jsxs("div",{className:"jk-layout-v2 relative min-h-screen bg-black text-white font-outfit selection:bg-neo-accent selection:text-black",children:[e&&ie.jsx("div",{className:"jk-scanline"}),ie.jsx(vg,{}),ie.jsx("div",{className:"fixed inset-0 bg-black/40 pointer-events-none z-0"}),ie.jsx("div",{className:"fixed inset-0 pointer-events-none border-[1px] border-white/5 z-[99]"}),ie.jsxs("div",{className:"relative z-10",children:[ie.jsxs("header",{className:"sticky top-0 z-50 w-full px-8 py-4 bg-black/40 backdrop-blur-xl border-b border-white/5 flex justify-between items-center",children:[ie.jsxs("div",{className:"flex flex-col",children:[ie.jsx("span",{className:"jk-hud-heading text-neo-accent",children:"JK_SYSTEM_v2.0"}),ie.jsxs("div",{className:"flex gap-2 items-center",children:[ie.jsx("span",{className:"w-1 h-1 rounded-full bg-green-500 animate-pulse"}),ie.jsx("span",{className:"jk-data-label opacity-40",children:"PROTOCOL_LIVING_INTERFACE_ACTIVE"})]})]}),ie.jsx("div",{className:"flex gap-6 items-center"})]}),ie.jsx("main",{className:"mx-auto max-w-[1600px] p-8 min-h-[calc(100vh-80px)]",children:s}),ie.jsxs("footer",{className:"w-full px-8 py-4 border-t border-white/5 flex justify-between items-center",children:[ie.jsx("span",{className:"jk-data-label opacity-30",children:"© 2026 JEIKEI_LABS // ALL_SYSTEMS_GO"}),ie.jsxs("div",{className:"flex gap-4",children:[ie.jsx("span",{className:"jk-data-label text-cyan-500/40",children:"LATENCY: 12ms"}),ie.jsx("span",{className:"jk-data-label text-magenta-500/40",children:"THROUGHPUT: 4.8gbps"})]})]})]})]});class _g{nodes=[];edges=[];pulses=[];adjacency=new Map;activeEdges=new Set;listeners=new Set;width;height;density=45;constructor(e,n){this.width=e,this.height=n,this.initialize()}initialize(){this.nodes=[],this.edges=[],this.pulses=[],this.activeEdges.clear(),this.adjacency.clear();const e=Math.ceil(this.width/this.density)+1,n=Math.ceil(this.height/this.density)+1;for(let a=0;a<n;a++)for(let u=0;u<e;u++){const f=a*e+u,d=u*this.density+(Math.random()-.5)*20,p=a*this.density+(Math.random()-.5)*20,m=(Math.random()-.5)*10,g=(Math.random()-.5)*10;this.nodes.push({id:f,position:[d,p,0],velocity:[m,g,0],energy:0}),this.adjacency.set(f,[])}const r=(a,u)=>{const f=.7+Math.random()*.3;this.edges.push({from:a,to:u,weight:f}),this.adjacency.get(a)?.push(u),this.adjacency.get(u)?.push(a)};for(let a=0;a<n;a++)for(let u=0;u<e;u++){const f=a*e+u;u<e-1&&r(f,f+1),a<n-1&&r(f,f+e),u<e-1&&a<n-1&&Math.random()>.7&&r(f,f+e+1)}}update(e){this.updatePositions(e);const n=[];this.activeEdges.clear();for(const r of this.pulses){const a=this.nodes[r.nodeId];if(a&&(a.energy=Math.min(a.energy+r.strength,1.5),r.life>1&&r.strength>.05)){const u=this.adjacency.get(r.nodeId)||[];for(const f of u){if(f===r.originId)continue;const d=[r.nodeId,f].sort((p,m)=>p-m).join("-");this.activeEdges.add(d),n.push({nodeId:f,originId:r.nodeId,strength:r.strength*.75,life:r.life-1})}}}this.nodes.forEach(r=>{r.energy*=.92,r.energy<.001&&(r.energy=0)}),this.pulses=n.length>600?n.sort((r,a)=>a.strength-r.strength).slice(0,600):n,this.notify()}emitPulse(e,n,r=1){let a=-1,u=1/0;for(const f of this.nodes){const d=f.position[0]-e,p=f.position[1]-n,m=d*d+p*p;m<u&&(u=m,a=f.id)}a!==-1&&u<6e4&&this.pulses.push({nodeId:a,strength:r,life:6})}updatePositions(e){this.nodes.forEach(r=>{r.position[0]+=r.velocity[0]*e*.5,r.position[1]+=r.velocity[1]*e*.5;const a=100;r.position[0]<-a&&(r.position[0]=this.width+a),r.position[0]>this.width+a&&(r.position[0]=-a),r.position[1]<-a&&(r.position[1]=this.height+a),r.position[1]>this.height+a&&(r.position[1]=-a)})}getState(){return{nodes:this.nodes,edges:this.edges,pulses:this.pulses,activeEdges:this.activeEdges,totalEnergy:this.nodes.reduce((e,n)=>e+n.energy,0)}}notify(){const e=this.getState();this.listeners.forEach(n=>n(e))}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}resize(e,n){this.width=e,this.height=n,this.initialize()}destroy(){this.listeners.clear(),this.nodes=[],this.edges=[],this.pulses=[],this.adjacency.clear()}}const RE={mission:{accent:"#f2b93b",accentStrong:"#ffffff",bg:"#05070a",surface:"#0b0f15",magenta:"#ff00ff",cyan:"#00ffff",muted:"#4a5b7c",glow:"rgba(242, 185, 59, 0.45)"},nebula:{accent:"#34d8ff",accentStrong:"#ffffff",bg:"#02040a",surface:"#0b0f14",magenta:"#ff2bd6",cyan:"#34d8ff",muted:"#4a5b7c",glow:"rgba(52, 216, 255, 0.35)"}},PE=s=>{const e=RE[s];return{"--neo-accent":e.accent,"--neo-accent-strong":e.accentStrong,"--neo-bg":e.bg,"--neo-surface":e.surface,"--neo-magenta":e.magenta,"--neo-cyan":e.cyan,"--neo-muted":e.muted,"--neo-glow":e.glow}},bE=({children:s})=>{const[e,n]=on.useState("nebula"),r=on.useMemo(()=>{if(typeof window>"u")return null;const u=window.innerWidth||1920,f=window.innerHeight||1080;return new _g(u,f)},[]);on.useEffect(()=>{if(!r)return;let u=performance.now(),f;const d=m=>{const g=(m-u)/1e3;u=m;const x=Math.min(g,.1);r.update(x),f=requestAnimationFrame(d)},p=()=>{r.resize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",p),f=requestAnimationFrame(d),()=>{window.removeEventListener("resize",p),cancelAnimationFrame(f),r.destroy()}},[r]),on.useEffect(()=>{document.documentElement.setAttribute("data-theme",e)},[e]);const a=on.useMemo(()=>PE(e),[e]);return ie.jsx(Yf.Provider,{value:{engine:r,theme:e,setTheme:n},children:ie.jsx("div",{className:`jk-system-root jk-theme-${e}`,style:a,children:s})})},xg=Object.freeze(Object.defineProperty({__proto__:null,NeoButton:f_,NeoCard:d_,NeoInput:h_,NeoLayout:CE,NeuralBackground:vg,NeuralEngine:_g,SystemContext:Yf,SystemProvider:bE,useSystem:Bo},Symbol.toStringTag,{value:"Module"})),{NeoLayout:LE,NeoButton:Ns,NeoCard:ni,NeoInput:Im,useSystem:yg,NeuralBackground:DE}=xg,Fo=({icon:s,active:e=!1})=>{const{engine:n}=yg(),r=a=>{if(n){const u=a.currentTarget.getBoundingClientRect();n.emitPulse(u.left+u.width/2,u.top+u.height/2,1.5)}};return ie.jsx("div",{onClick:r,className:`w-12 h-12 flex items-center justify-center rounded-xl cursor-pointer transition-all duration-300 ${e?"bg-neo-accent text-black":"text-white/40 hover:bg-white/5 hover:text-white"}`,children:ie.jsx("span",{className:"text-xl",children:s})})},kr=({title:s,time:e,status:n="info"})=>ie.jsxs("div",{className:"flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 jk-glass",children:[ie.jsx("div",{className:`w-1.5 h-6 rounded-full mt-0.5 ${n==="success"?"bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]":n==="warning"?"bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]":"bg-neo-accent shadow-[0_0_10px_var(--neo-glow)]"}`}),ie.jsxs("div",{className:"flex flex-col",children:[ie.jsx("span",{className:"text-[11px] font-bold text-white/80 uppercase tracking-wider",children:s}),ie.jsxs("span",{className:"text-[9px] font-mono text-white/30 uppercase",children:[e," // SYSTEM_SECURE"]})]})]});function NE(){const{theme:s,setTheme:e,engine:n}=yg(),[r,a]=on.useState({energy:0,nodes:0}),[u,f]=on.useState("showcase"),[d,p]=on.useState(new Date().toLocaleTimeString());on.useEffect(()=>{const x=setInterval(()=>p(new Date().toLocaleTimeString()),1e3);return()=>clearInterval(x)},[]),on.useEffect(()=>n?n.subscribe(y=>{a({energy:y.totalEnergy,nodes:y.nodes.filter(S=>S.energy>.1).length})}):void 0,[n]);const m=()=>ie.jsxs("div",{className:"max-w-[1200px] mx-auto space-y-12 py-16 px-4 fade-in",children:[ie.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-8 mb-12",children:[ie.jsxs("div",{className:"flex flex-col items-center md:items-start space-y-1",children:[ie.jsx("div",{className:"text-5xl font-black tracking-[0.3em] text-white uppercase drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]",children:"JEIKEI"}),ie.jsx("div",{className:"text-[10px] tracking-[0.8em] text-white/40 uppercase ml-1",children:"LIVING_INTERFACE_v2.0"})]}),ie.jsxs("div",{className:"flex items-center gap-6",children:[ie.jsxs("div",{className:"flex gap-2 p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md",children:[ie.jsx("button",{onClick:()=>e("nebula"),className:`px-6 py-2 rounded-full text-[9px] font-bold uppercase tracking-widest transition-all ${s==="nebula"?"bg-neo-accent text-black shadow-neon-primary":"text-white/40 hover:text-white"}`,children:"NEBULA"}),ie.jsx("button",{onClick:()=>e("mission"),className:`px-6 py-2 rounded-full text-[9px] font-bold uppercase tracking-widest transition-all ${s==="mission"?"bg-neo-accent text-black shadow-neon-primary":"text-white/40 hover:text-white"}`,children:"MISSION"})]}),ie.jsx(Ns,{variant:"primary",size:"md",onClick:()=>f("dashboard"),children:"GO TO DASHBOARD"})]})]}),ie.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[ie.jsx(ni,{title:"System Energy",value:`${r.energy.toFixed(1)}GW`,trend:{value:"+12.4%",direction:"up"},children:"Active neural propagation energy detected in the global system grid."}),ie.jsx(ni,{title:"Neural Activity",value:r.nodes.toString(),trend:{value:"OPTIMAL",direction:"neutral"},children:"Currently active high-energy nodes reacting to user interaction."}),ie.jsx(ni,{title:"Global Latency",value:"12ms",trend:{value:"-2ms",direction:"up"},children:"Propagating pulses through the graph engine at sub-millisecond speeds."})]}),ie.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 items-start",children:[ie.jsx(ni,{title:"Pulse Emission Test",children:ie.jsxs("div",{className:"space-y-6 pt-4",children:[ie.jsx("p",{className:"text-white/40 text-[11px] leading-relaxed uppercase tracking-wider",children:"Interact with the components below to trigger real-time neural ripples."}),ie.jsxs("div",{className:"flex flex-wrap gap-4",children:[ie.jsx(Ns,{variant:"primary",size:"md",children:"Emit Signal"}),ie.jsx(Ns,{variant:"secondary",size:"md",children:"Calibrate"}),ie.jsx(Ns,{variant:"outline",size:"md",children:"Reset"})]})]})}),ie.jsx(ni,{title:"Data Input Sync",children:ie.jsxs("div",{className:"space-y-6 pt-4",children:[ie.jsx(Im,{label:"Network Identifier",placeholder:"Enter system hash..."}),ie.jsx(Im,{label:"Propagation Intensity",placeholder:"1.25"})]})})]})]}),g=()=>ie.jsxs("div",{className:"flex h-screen w-full overflow-hidden fade-in relative z-20",children:[ie.jsxs("div",{className:"w-20 flex flex-col items-center py-8 gap-8 border-r border-white/5 jk-glass relative z-50",children:[ie.jsx("div",{className:"w-10 h-10 bg-neo-accent flex items-center justify-center rounded-lg shadow-neon-primary text-black font-black text-xl mb-4",children:"JK"}),ie.jsx(Fo,{icon:"⟁",active:!0}),ie.jsx(Fo,{icon:"⦿"}),ie.jsx(Fo,{icon:"⧖"}),ie.jsx(Fo,{icon:"⚙"}),ie.jsx("div",{className:"mt-auto",children:ie.jsx(Fo,{icon:"⏻"})})]}),ie.jsxs("div",{className:"flex-1 flex flex-col relative overflow-y-auto",children:[ie.jsxs("div",{className:"h-20 flex items-center justify-between px-10 border-b border-white/5 jk-glass sticky top-0 z-40",children:[ie.jsxs("div",{className:"flex flex-col",children:[ie.jsx("span",{className:"jk-hud-heading text-neo-accent text-xs",children:"Command Center"}),ie.jsx("span",{className:"text-[10px] font-mono text-white/30 uppercase tracking-[0.4em]",children:"SYSTEM_VERSION_2.0.4 // LOCAL_HOST"})]}),ie.jsxs("div",{className:"flex items-center gap-8",children:[ie.jsxs("div",{className:"flex flex-col items-end",children:[ie.jsx("span",{className:"text-xl font-mono text-white font-bold tracking-tighter",children:d}),ie.jsx("span",{className:"text-[9px] text-white/20 uppercase tracking-widest font-bold",children:"Universal Time Standard"})]}),ie.jsx("div",{className:"h-8 w-[1px] bg-white/10"}),ie.jsx(Ns,{variant:"outline",size:"sm",onClick:()=>f("showcase"),children:"EXIT TO SHOWCASE"})]})]}),ie.jsxs("div",{className:"p-8 space-y-8",children:[ie.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:[ie.jsx(ni,{title:"Energy Output",value:`${r.energy.toFixed(2)}`,className:"py-4 px-6 scale-[0.95]",trend:{value:"+4.2%",direction:"up"}}),ie.jsx(ni,{title:"Active Segments",value:"84",className:"py-4 px-6 scale-[0.95]",trend:{value:"STABLE",direction:"neutral"}}),ie.jsx(ni,{title:"Node Density",value:`${(r.nodes/10).toFixed(1)}%`,className:"py-4 px-6 scale-[0.95]",trend:{value:"-0.8%",direction:"down"}}),ie.jsx(ni,{title:"Pulse Speed",value:"2.1ms",className:"py-4 px-6 scale-[0.95]",trend:{value:"+0.1",direction:"up"}})]}),ie.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-3 gap-8 h-full",children:[ie.jsx("div",{className:"xl:col-span-2 space-y-6",children:ie.jsxs(ni,{title:"Dynamic Neural Topology",className:"h-[500px] border-neo-accent/20 relative group",children:[ie.jsx("div",{className:"absolute inset-0 overflow-hidden rounded-xl bg-black",children:ie.jsx(DE,{mode:"contained"})}),ie.jsxs("div",{className:"relative z-10 w-full h-full flex flex-col justify-between pointer-events-none",children:[ie.jsxs("div",{className:"flex justify-between items-start",children:[ie.jsxs("div",{className:"p-4 border border-white/5 rounded-lg jk-glass backdrop-blur-md",children:[ie.jsx("div",{className:"jk-data-label text-neo-accent mb-1",children:"Grid Coordinates"}),ie.jsx("div",{className:"text-lg font-mono text-white tracking-widest",children:"34.09 // 118.24"})]}),ie.jsxs("div",{className:"flex gap-2 p-2 bg-black/40 rounded-full border border-white/5",children:[ie.jsx("div",{className:"w-2 h-2 rounded-full bg-green-500 animate-ping mt-1"}),ie.jsx("span",{className:"jk-data-label text-green-500",children:"Live_Stream"})]})]}),ie.jsx("div",{className:"flex justify-center items-center py-20 opacity-0 group-hover:opacity-100 transition-opacity",children:ie.jsxs("div",{className:"relative",children:[ie.jsx("div",{className:"absolute -inset-20 bg-neo-accent/5 rounded-full blur-3xl animate-pulse"}),ie.jsx("div",{className:"text-8xl font-black text-white/5 tracking-tighter select-none uppercase",children:"Topology"})]})}),ie.jsx("div",{className:"flex gap-4 p-4 border-t border-white/5",children:ie.jsxs("div",{className:"flex-1",children:[ie.jsx("div",{className:"jk-data-label mb-2",children:"Propagation Field"}),ie.jsx("div",{className:"w-full h-1.5 bg-white/5 rounded-full overflow-hidden",children:ie.jsx("div",{className:"h-full bg-neo-accent shadow-neon-primary",style:{width:"65%"}})})]})})]})]})}),ie.jsx("div",{className:"space-y-6",children:ie.jsxs(ni,{title:"System Activity Feed",className:"h-full",children:[ie.jsxs("div",{className:"space-y-2 mt-4",children:[ie.jsx(kr,{title:"Neural Handshake Verified",time:"14:02:11",status:"success"}),ie.jsx(kr,{title:"Energy Spike Detected (Sector 7)",time:"14:01:45",status:"warning"}),ie.jsx(kr,{title:"Kernel Optimization Complete",time:"13:58:20",status:"success"}),ie.jsx(kr,{title:"Pulse Buffer Reallocated",time:"13:55:12"}),ie.jsx(kr,{title:"External Request Blocked",time:"13:52:01",status:"warning"}),ie.jsx(kr,{title:"Heartbeat Sync Optimal",time:"13:48:59",status:"success"}),ie.jsx(kr,{title:"User Session Initiated",time:"13:45:33"})]}),ie.jsxs("div",{className:"mt-8 p-4 jk-glass rounded-xl border-neo-accent/20",children:[ie.jsx("div",{className:"jk-hud-heading text-neo-accent text-[9px] mb-2",children:"Security Override"}),ie.jsx(Ns,{variant:"primary",size:"sm",className:"w-full",children:"Request Auth"})]})]})})]})]})]})]});return ie.jsxs(LE,{showScanlines:!0,children:[ie.jsx("style",{children:`
        .fade-in { animation: fadeIn 0.8s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}),u==="showcase"?m():g()]})}const{SystemProvider:IE}=xg;u_.createRoot(document.getElementById("root")).render(ie.jsx(i_.StrictMode,{children:ie.jsx(IE,{children:ie.jsx(NE,{})})}));
