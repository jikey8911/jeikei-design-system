(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();function Dm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var _c={exports:{}},Ro={},vc={exports:{}},ot={};var Mp;function $_(){if(Mp)return ot;Mp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.iterator;function y(b){return b===null||typeof b!="object"?null:(b=x&&b[x]||b["@@iterator"],typeof b=="function"?b:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,A={};function _(b,q,we){this.props=b,this.context=q,this.refs=A,this.updater=we||S}_.prototype.isReactComponent={},_.prototype.setState=function(b,q){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,q,"setState")},_.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function g(){}g.prototype=_.prototype;function I(b,q,we){this.props=b,this.context=q,this.refs=A,this.updater=we||S}var P=I.prototype=new g;P.constructor=I,w(P,_.prototype),P.isPureReactComponent=!0;var U=Array.isArray,J=Object.prototype.hasOwnProperty,z={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function Y(b,q,we){var X,ae={},ge=null,ye=null;if(q!=null)for(X in q.ref!==void 0&&(ye=q.ref),q.key!==void 0&&(ge=""+q.key),q)J.call(q,X)&&!N.hasOwnProperty(X)&&(ae[X]=q[X]);var Pe=arguments.length-2;if(Pe===1)ae.children=we;else if(1<Pe){for(var Le=Array(Pe),et=0;et<Pe;et++)Le[et]=arguments[et+2];ae.children=Le}if(b&&b.defaultProps)for(X in Pe=b.defaultProps,Pe)ae[X]===void 0&&(ae[X]=Pe[X]);return{$$typeof:s,type:b,key:ge,ref:ye,props:ae,_owner:z.current}}function xe(b,q){return{$$typeof:s,type:b.type,key:q,ref:b.ref,props:b.props,_owner:b._owner}}function E(b){return typeof b=="object"&&b!==null&&b.$$typeof===s}function C(b){var q={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(we){return q[we]})}var re=/\/+/g;function te(b,q){return typeof b=="object"&&b!==null&&b.key!=null?C(""+b.key):q.toString(36)}function le(b,q,we,X,ae){var ge=typeof b;(ge==="undefined"||ge==="boolean")&&(b=null);var ye=!1;if(b===null)ye=!0;else switch(ge){case"string":case"number":ye=!0;break;case"object":switch(b.$$typeof){case s:case e:ye=!0}}if(ye)return ye=b,ae=ae(ye),b=X===""?"."+te(ye,0):X,U(ae)?(we="",b!=null&&(we=b.replace(re,"$&/")+"/"),le(ae,q,we,"",function(et){return et})):ae!=null&&(E(ae)&&(ae=xe(ae,we+(!ae.key||ye&&ye.key===ae.key?"":(""+ae.key).replace(re,"$&/")+"/")+b)),q.push(ae)),1;if(ye=0,X=X===""?".":X+":",U(b))for(var Pe=0;Pe<b.length;Pe++){ge=b[Pe];var Le=X+te(ge,Pe);ye+=le(ge,q,we,Le,ae)}else if(Le=y(b),typeof Le=="function")for(b=Le.call(b),Pe=0;!(ge=b.next()).done;)ge=ge.value,Le=X+te(ge,Pe++),ye+=le(ge,q,we,Le,ae);else if(ge==="object")throw q=String(b),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return ye}function he(b,q,we){if(b==null)return b;var X=[],ae=0;return le(b,X,"","",function(ge){return q.call(we,ge,ae++)}),X}function ne(b){if(b._status===-1){var q=b._result;q=q(),q.then(function(we){(b._status===0||b._status===-1)&&(b._status=1,b._result=we)},function(we){(b._status===0||b._status===-1)&&(b._status=2,b._result=we)}),b._status===-1&&(b._status=0,b._result=q)}if(b._status===1)return b._result.default;throw b._result}var oe={current:null},k={transition:null},ue={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:k,ReactCurrentOwner:z};function ie(){throw Error("act(...) is not supported in production builds of React.")}return ot.Children={map:he,forEach:function(b,q,we){he(b,function(){q.apply(this,arguments)},we)},count:function(b){var q=0;return he(b,function(){q++}),q},toArray:function(b){return he(b,function(q){return q})||[]},only:function(b){if(!E(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},ot.Component=_,ot.Fragment=n,ot.Profiler=a,ot.PureComponent=I,ot.StrictMode=r,ot.Suspense=p,ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,ot.act=ie,ot.cloneElement=function(b,q,we){if(b==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+b+".");var X=w({},b.props),ae=b.key,ge=b.ref,ye=b._owner;if(q!=null){if(q.ref!==void 0&&(ge=q.ref,ye=z.current),q.key!==void 0&&(ae=""+q.key),b.type&&b.type.defaultProps)var Pe=b.type.defaultProps;for(Le in q)J.call(q,Le)&&!N.hasOwnProperty(Le)&&(X[Le]=q[Le]===void 0&&Pe!==void 0?Pe[Le]:q[Le])}var Le=arguments.length-2;if(Le===1)X.children=we;else if(1<Le){Pe=Array(Le);for(var et=0;et<Le;et++)Pe[et]=arguments[et+2];X.children=Pe}return{$$typeof:s,type:b.type,key:ae,ref:ge,props:X,_owner:ye}},ot.createContext=function(b){return b={$$typeof:f,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},b.Provider={$$typeof:u,_context:b},b.Consumer=b},ot.createElement=Y,ot.createFactory=function(b){var q=Y.bind(null,b);return q.type=b,q},ot.createRef=function(){return{current:null}},ot.forwardRef=function(b){return{$$typeof:d,render:b}},ot.isValidElement=E,ot.lazy=function(b){return{$$typeof:v,_payload:{_status:-1,_result:b},_init:ne}},ot.memo=function(b,q){return{$$typeof:m,type:b,compare:q===void 0?null:q}},ot.startTransition=function(b){var q=k.transition;k.transition={};try{b()}finally{k.transition=q}},ot.unstable_act=ie,ot.useCallback=function(b,q){return oe.current.useCallback(b,q)},ot.useContext=function(b){return oe.current.useContext(b)},ot.useDebugValue=function(){},ot.useDeferredValue=function(b){return oe.current.useDeferredValue(b)},ot.useEffect=function(b,q){return oe.current.useEffect(b,q)},ot.useId=function(){return oe.current.useId()},ot.useImperativeHandle=function(b,q,we){return oe.current.useImperativeHandle(b,q,we)},ot.useInsertionEffect=function(b,q){return oe.current.useInsertionEffect(b,q)},ot.useLayoutEffect=function(b,q){return oe.current.useLayoutEffect(b,q)},ot.useMemo=function(b,q){return oe.current.useMemo(b,q)},ot.useReducer=function(b,q,we){return oe.current.useReducer(b,q,we)},ot.useRef=function(b){return oe.current.useRef(b)},ot.useState=function(b){return oe.current.useState(b)},ot.useSyncExternalStore=function(b,q,we){return oe.current.useSyncExternalStore(b,q,we)},ot.useTransition=function(){return oe.current.useTransition()},ot.version="18.3.1",ot}var Ep;function Gf(){return Ep||(Ep=1,vc.exports=$_()),vc.exports}var Tp;function Z_(){if(Tp)return Ro;Tp=1;var s=Gf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(d,p,m){var v,x={},y=null,S=null;m!==void 0&&(y=""+m),p.key!==void 0&&(y=""+p.key),p.ref!==void 0&&(S=p.ref);for(v in p)r.call(p,v)&&!u.hasOwnProperty(v)&&(x[v]=p[v]);if(d&&d.defaultProps)for(v in p=d.defaultProps,p)x[v]===void 0&&(x[v]=p[v]);return{$$typeof:e,type:d,key:y,ref:S,props:x,_owner:a.current}}return Ro.Fragment=n,Ro.jsx=f,Ro.jsxs=f,Ro}var wp;function Q_(){return wp||(wp=1,_c.exports=Z_()),_c.exports}var He=Q_(),fi=Gf();const Um=Dm(fi);var Ya={},xc={exports:{}},Mn={},yc={exports:{}},Sc={};var Ap;function J_(){return Ap||(Ap=1,(function(s){function e(k,ue){var ie=k.length;k.push(ue);e:for(;0<ie;){var b=ie-1>>>1,q=k[b];if(0<a(q,ue))k[b]=ue,k[ie]=q,ie=b;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var ue=k[0],ie=k.pop();if(ie!==ue){k[0]=ie;e:for(var b=0,q=k.length,we=q>>>1;b<we;){var X=2*(b+1)-1,ae=k[X],ge=X+1,ye=k[ge];if(0>a(ae,ie))ge<q&&0>a(ye,ae)?(k[b]=ye,k[ge]=ie,b=ge):(k[b]=ae,k[X]=ie,b=X);else if(ge<q&&0>a(ye,ie))k[b]=ye,k[ge]=ie,b=ge;else break e}}return ue}function a(k,ue){var ie=k.sortIndex-ue.sortIndex;return ie!==0?ie:k.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var p=[],m=[],v=1,x=null,y=3,S=!1,w=!1,A=!1,_=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(k){for(var ue=n(m);ue!==null;){if(ue.callback===null)r(m);else if(ue.startTime<=k)r(m),ue.sortIndex=ue.expirationTime,e(p,ue);else break;ue=n(m)}}function U(k){if(A=!1,P(k),!w)if(n(p)!==null)w=!0,ne(J);else{var ue=n(m);ue!==null&&oe(U,ue.startTime-k)}}function J(k,ue){w=!1,A&&(A=!1,g(Y),Y=-1),S=!0;var ie=y;try{for(P(ue),x=n(p);x!==null&&(!(x.expirationTime>ue)||k&&!C());){var b=x.callback;if(typeof b=="function"){x.callback=null,y=x.priorityLevel;var q=b(x.expirationTime<=ue);ue=s.unstable_now(),typeof q=="function"?x.callback=q:x===n(p)&&r(p),P(ue)}else r(p);x=n(p)}if(x!==null)var we=!0;else{var X=n(m);X!==null&&oe(U,X.startTime-ue),we=!1}return we}finally{x=null,y=ie,S=!1}}var z=!1,N=null,Y=-1,xe=5,E=-1;function C(){return!(s.unstable_now()-E<xe)}function re(){if(N!==null){var k=s.unstable_now();E=k;var ue=!0;try{ue=N(!0,k)}finally{ue?te():(z=!1,N=null)}}else z=!1}var te;if(typeof I=="function")te=function(){I(re)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,he=le.port2;le.port1.onmessage=re,te=function(){he.postMessage(null)}}else te=function(){_(re,0)};function ne(k){N=k,z||(z=!0,te())}function oe(k,ue){Y=_(function(){k(s.unstable_now())},ue)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(k){k.callback=null},s.unstable_continueExecution=function(){w||S||(w=!0,ne(J))},s.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):xe=0<k?Math.floor(1e3/k):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(k){switch(y){case 1:case 2:case 3:var ue=3;break;default:ue=y}var ie=y;y=ue;try{return k()}finally{y=ie}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(k,ue){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var ie=y;y=k;try{return ue()}finally{y=ie}},s.unstable_scheduleCallback=function(k,ue,ie){var b=s.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?b+ie:b):ie=b,k){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=ie+q,k={id:v++,callback:ue,priorityLevel:k,startTime:ie,expirationTime:q,sortIndex:-1},ie>b?(k.sortIndex=ie,e(m,k),n(p)===null&&k===n(m)&&(A?(g(Y),Y=-1):A=!0,oe(U,ie-b))):(k.sortIndex=q,e(p,k),w||S||(w=!0,ne(J))),k},s.unstable_shouldYield=C,s.unstable_wrapCallback=function(k){var ue=y;return function(){var ie=y;y=ue;try{return k.apply(this,arguments)}finally{y=ie}}}})(Sc)),Sc}var Rp;function ev(){return Rp||(Rp=1,yc.exports=J_()),yc.exports}var Cp;function tv(){if(Cp)return Mn;Cp=1;var s=Gf(),e=ev();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},x={};function y(t){return p.call(x,t)?!0:p.call(v,t)?!1:m.test(t)?x[t]=!0:(v[t]=!0,!1)}function S(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,i,o,l){if(i===null||typeof i>"u"||S(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(t,i,o,l,c,h,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=M}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_[t]=new A(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];_[i]=new A(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){_[t]=new A(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_[t]=new A(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_[t]=new A(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){_[t]=new A(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){_[t]=new A(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){_[t]=new A(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){_[t]=new A(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function I(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,I);_[i]=new A(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,I);_[i]=new A(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,I);_[i]=new A(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){_[t]=new A(t,1,!1,t.toLowerCase(),null,!1,!1)}),_.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){_[t]=new A(t,1,!1,t.toLowerCase(),null,!0,!0)});function P(t,i,o,l){var c=_.hasOwnProperty(i)?_[i]:null;(c!==null?c.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,o,c,l)&&(o=null),l||c===null?y(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(i=c.attributeName,l=c.attributeNamespace,o===null?t.removeAttribute(i):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var U=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,J=Symbol.for("react.element"),z=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),xe=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),C=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),oe=Symbol.for("react.offscreen"),k=Symbol.iterator;function ue(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var ie=Object.assign,b;function q(t){if(b===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);b=i&&i[1]||""}return`
`+b+t}var we=!1;function X(t,i){if(!t||we)return"";we=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(Q){var l=Q}Reflect.construct(t,[],i)}else{try{i.call()}catch(Q){l=Q}t.call(i.prototype)}else{try{throw Error()}catch(Q){l=Q}t()}}catch(Q){if(Q&&l&&typeof Q.stack=="string"){for(var c=Q.stack.split(`
`),h=l.stack.split(`
`),M=c.length-1,D=h.length-1;1<=M&&0<=D&&c[M]!==h[D];)D--;for(;1<=M&&0<=D;M--,D--)if(c[M]!==h[D]){if(M!==1||D!==1)do if(M--,D--,0>D||c[M]!==h[D]){var F=`
`+c[M].replace(" at new "," at ");return t.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",t.displayName)),F}while(1<=M&&0<=D);break}}}finally{we=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?q(t):""}function ae(t){switch(t.tag){case 5:return q(t.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return t=X(t.type,!1),t;case 11:return t=X(t.type.render,!1),t;case 1:return t=X(t.type,!0),t;default:return""}}function ge(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case N:return"Fragment";case z:return"Portal";case xe:return"Profiler";case Y:return"StrictMode";case te:return"Suspense";case le:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case C:return(t.displayName||"Context")+".Consumer";case E:return(t._context.displayName||"Context")+".Provider";case re:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case he:return i=t.displayName||null,i!==null?i:ge(t.type)||"Memo";case ne:i=t._payload,t=t._init;try{return ge(t(i))}catch{}}return null}function ye(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ge(i);case 8:return i===Y?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Pe(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Le(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function et(t){var i=Le(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(M){l=""+M,h.call(this,M)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function pt(t){t._valueTracker||(t._valueTracker=et(t))}function lt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=Le(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function O(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function tn(t,i){var o=i.checked;return ie({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function at(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=Pe(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ft(t,i){i=i.checked,i!=null&&P(t,"checked",i,!1)}function $e(t,i){ft(t,i);var o=Pe(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Qe(t,i.type,o):i.hasOwnProperty("defaultValue")&&Qe(t,i.type,Pe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Tt(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Qe(t,i,o){(i!=="number"||O(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var L=Array.isArray;function T(t,i,o,l){if(t=t.options,i){i={};for(var c=0;c<o.length;c++)i["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=i.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&l&&(t[o].defaultSelected=!0)}else{for(o=""+Pe(o),i=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function K(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return ie({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function fe(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(L(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Pe(o)}}function _e(t,i){var o=Pe(i.value),l=Pe(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function ce(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function je(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ae(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?je(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ne,dt=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,c){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,c)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ne=Ne||document.createElement("div"),Ne.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ne.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Se(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Fe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tt=["Webkit","ms","Moz","O"];Object.keys(Fe).forEach(function(t){tt.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Fe[i]=Fe[t]})});function Je(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Fe.hasOwnProperty(t)&&Fe[t]?(""+i).trim():i+"px"}function ke(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,c=Je(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,c):t[o]=c}}var ut=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function it(t,i){if(i){if(ut[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function St(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var H=null;function be(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var se=null,de=null,Re=null;function Ue(t){if(t=fo(t)){if(typeof se!="function")throw Error(n(280));var i=t.stateNode;i&&(i=la(i),se(t.stateNode,t.type,i))}}function ct(t){de?Re?Re.push(t):Re=[t]:de=t}function Nt(){if(de){var t=de,i=Re;if(Re=de=null,Ue(t),i)for(t=0;t<i.length;t++)Ue(i[t])}}function nn(t,i){return t(i)}function ht(){}var Kt=!1;function Fn(t,i,o){if(Kt)return t(i,o);Kt=!0;try{return nn(t,i,o)}finally{Kt=!1,(de!==null||Re!==null)&&(ht(),Nt())}}function Bi(t,i){var o=t.stateNode;if(o===null)return null;var l=la(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var jr=!1;if(d)try{var Cn={};Object.defineProperty(Cn,"passive",{get:function(){jr=!0}}),window.addEventListener("test",Cn,Cn),window.removeEventListener("test",Cn,Cn)}catch{jr=!1}function js(t,i,o,l,c,h,M,D,F){var Q=Array.prototype.slice.call(arguments,3);try{i.apply(o,Q)}catch(me){this.onError(me)}}var zi=!1,vr=null,pi=!1,Yr=null,qr={onError:function(t){zi=!0,vr=t}};function Go(t,i,o,l,c,h,M,D,F){zi=!1,vr=null,js.apply(qr,arguments)}function Wo(t,i,o,l,c,h,M,D,F){if(Go.apply(this,arguments),zi){if(zi){var Q=vr;zi=!1,vr=null}else throw Error(n(198));pi||(pi=!0,Yr=Q)}}function mi(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Xo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function jo(t){if(mi(t)!==t)throw Error(n(188))}function R(t){var i=t.alternate;if(!i){if(i=mi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var c=o.return;if(c===null)break;var h=c.alternate;if(h===null){if(l=c.return,l!==null){o=l;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===o)return jo(c),t;if(h===l)return jo(c),i;h=h.sibling}throw Error(n(188))}if(o.return!==l.return)o=c,l=h;else{for(var M=!1,D=c.child;D;){if(D===o){M=!0,o=c,l=h;break}if(D===l){M=!0,l=c,o=h;break}D=D.sibling}if(!M){for(D=h.child;D;){if(D===o){M=!0,o=h,l=c;break}if(D===l){M=!0,l=h,o=c;break}D=D.sibling}if(!M)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function V(t){return t=R(t),t!==null?$(t):null}function $(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=$(t);if(i!==null)return i;t=t.sibling}return null}var Z=e.unstable_scheduleCallback,G=e.unstable_cancelCallback,Ee=e.unstable_shouldYield,De=e.unstable_requestPaint,Te=e.unstable_now,Ge=e.unstable_getCurrentPriorityLevel,Ke=e.unstable_ImmediatePriority,Ze=e.unstable_UserBlockingPriority,We=e.unstable_NormalPriority,xt=e.unstable_LowPriority,wt=e.unstable_IdlePriority,At=null,Ut=null;function gt(t){if(Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(At,t,void 0,(t.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:Pn,Wt=Math.log,_t=Math.LN2;function Pn(t){return t>>>=0,t===0?32:31-(Wt(t)/_t|0)|0}var Xn=64,$t=4194304;function gi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ct(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,c=t.suspendedLanes,h=t.pingedLanes,M=o&268435455;if(M!==0){var D=M&~c;D!==0?l=gi(D):(h&=M,h!==0&&(l=gi(h)))}else M=o&~c,M!==0?l=gi(M):h!==0&&(l=gi(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&c)===0&&(c=l&-l,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-Oe(i),c=1<<o,l|=t[o],i&=~c;return l}function oi(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ys(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var M=31-Oe(h),D=1<<M,F=c[M];F===-1?((D&o)===0||(D&l)!==0)&&(c[M]=oi(D,i)):F<=i&&(t.expiredLanes|=D),h&=~D}}function on(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Kr(){var t=Xn;return Xn<<=1,(Xn&4194240)===0&&(Xn=64),t}function qs(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Hi(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Oe(i),t[i]=o}function _g(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-Oe(o),h=1<<c;i[c]=0,l[c]=-1,t[c]=-1,o&=~h}}function zl(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-Oe(o),c=1<<l;c&i|t[l]&i&&(t[l]|=i),o&=~c}}var Et=0;function ed(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var td,Hl,nd,id,rd,Vl=!1,Yo=[],Vi=null,Gi=null,Wi=null,Ks=new Map,$s=new Map,Xi=[],vg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sd(t,i){switch(t){case"focusin":case"focusout":Vi=null;break;case"dragenter":case"dragleave":Gi=null;break;case"mouseover":case"mouseout":Wi=null;break;case"pointerover":case"pointerout":Ks.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":$s.delete(i.pointerId)}}function Zs(t,i,o,l,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:h,targetContainers:[c]},i!==null&&(i=fo(i),i!==null&&Hl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function xg(t,i,o,l,c){switch(i){case"focusin":return Vi=Zs(Vi,t,i,o,l,c),!0;case"dragenter":return Gi=Zs(Gi,t,i,o,l,c),!0;case"mouseover":return Wi=Zs(Wi,t,i,o,l,c),!0;case"pointerover":var h=c.pointerId;return Ks.set(h,Zs(Ks.get(h)||null,t,i,o,l,c)),!0;case"gotpointercapture":return h=c.pointerId,$s.set(h,Zs($s.get(h)||null,t,i,o,l,c)),!0}return!1}function od(t){var i=xr(t.target);if(i!==null){var o=mi(i);if(o!==null){if(i=o.tag,i===13){if(i=Xo(o),i!==null){t.blockedOn=i,rd(t.priority,function(){nd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Wl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);H=l,o.target.dispatchEvent(l),H=null}else return i=fo(o),i!==null&&Hl(i),t.blockedOn=o,!1;i.shift()}return!0}function ad(t,i,o){qo(t)&&o.delete(i)}function yg(){Vl=!1,Vi!==null&&qo(Vi)&&(Vi=null),Gi!==null&&qo(Gi)&&(Gi=null),Wi!==null&&qo(Wi)&&(Wi=null),Ks.forEach(ad),$s.forEach(ad)}function Qs(t,i){t.blockedOn===i&&(t.blockedOn=null,Vl||(Vl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,yg)))}function Js(t){function i(c){return Qs(c,t)}if(0<Yo.length){Qs(Yo[0],t);for(var o=1;o<Yo.length;o++){var l=Yo[o];l.blockedOn===t&&(l.blockedOn=null)}}for(Vi!==null&&Qs(Vi,t),Gi!==null&&Qs(Gi,t),Wi!==null&&Qs(Wi,t),Ks.forEach(i),$s.forEach(i),o=0;o<Xi.length;o++)l=Xi[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<Xi.length&&(o=Xi[0],o.blockedOn===null);)od(o),o.blockedOn===null&&Xi.shift()}var $r=U.ReactCurrentBatchConfig,Ko=!0;function Sg(t,i,o,l){var c=Et,h=$r.transition;$r.transition=null;try{Et=1,Gl(t,i,o,l)}finally{Et=c,$r.transition=h}}function Mg(t,i,o,l){var c=Et,h=$r.transition;$r.transition=null;try{Et=4,Gl(t,i,o,l)}finally{Et=c,$r.transition=h}}function Gl(t,i,o,l){if(Ko){var c=Wl(t,i,o,l);if(c===null)au(t,i,l,$o,o),sd(t,l);else if(xg(c,t,i,o,l))l.stopPropagation();else if(sd(t,l),i&4&&-1<vg.indexOf(t)){for(;c!==null;){var h=fo(c);if(h!==null&&td(h),h=Wl(t,i,o,l),h===null&&au(t,i,l,$o,o),h===c)break;c=h}c!==null&&l.stopPropagation()}else au(t,i,l,null,o)}}var $o=null;function Wl(t,i,o,l){if($o=null,t=be(l),t=xr(t),t!==null)if(i=mi(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Xo(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return $o=t,null}function ld(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ge()){case Ke:return 1;case Ze:return 4;case We:case xt:return 16;case wt:return 536870912;default:return 16}default:return 16}}var ji=null,Xl=null,Zo=null;function ud(){if(Zo)return Zo;var t,i=Xl,o=i.length,l,c="value"in ji?ji.value:ji.textContent,h=c.length;for(t=0;t<o&&i[t]===c[t];t++);var M=o-t;for(l=1;l<=M&&i[o-l]===c[h-l];l++);return Zo=c.slice(t,1<l?1-l:void 0)}function Qo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Jo(){return!0}function cd(){return!1}function Ln(t){function i(o,l,c,h,M){this._reactName=o,this._targetInst=c,this.type=l,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(o=t[D],this[D]=o?o(h):h[D]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Jo:cd,this.isPropagationStopped=cd,this}return ie(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Jo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Jo)},persist:function(){},isPersistent:Jo}),i}var Zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jl=Ln(Zr),eo=ie({},Zr,{view:0,detail:0}),Eg=Ln(eo),Yl,ql,to,ea=ie({},eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$l,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==to&&(to&&t.type==="mousemove"?(Yl=t.screenX-to.screenX,ql=t.screenY-to.screenY):ql=Yl=0,to=t),Yl)},movementY:function(t){return"movementY"in t?t.movementY:ql}}),fd=Ln(ea),Tg=ie({},ea,{dataTransfer:0}),wg=Ln(Tg),Ag=ie({},eo,{relatedTarget:0}),Kl=Ln(Ag),Rg=ie({},Zr,{animationName:0,elapsedTime:0,pseudoElement:0}),Cg=Ln(Rg),Pg=ie({},Zr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Lg=Ln(Pg),bg=ie({},Zr,{data:0}),dd=Ln(bg),Dg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ug={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ig={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ng(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Ig[t])?!!i[t]:!1}function $l(){return Ng}var Fg=ie({},eo,{key:function(t){if(t.key){var i=Dg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Qo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ug[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$l,charCode:function(t){return t.type==="keypress"?Qo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Og=Ln(Fg),kg=ie({},ea,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hd=Ln(kg),Bg=ie({},eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$l}),zg=Ln(Bg),Hg=ie({},Zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vg=Ln(Hg),Gg=ie({},ea,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Wg=Ln(Gg),Xg=[9,13,27,32],Zl=d&&"CompositionEvent"in window,no=null;d&&"documentMode"in document&&(no=document.documentMode);var jg=d&&"TextEvent"in window&&!no,pd=d&&(!Zl||no&&8<no&&11>=no),md=" ",gd=!1;function _d(t,i){switch(t){case"keyup":return Xg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qr=!1;function Yg(t,i){switch(t){case"compositionend":return vd(i);case"keypress":return i.which!==32?null:(gd=!0,md);case"textInput":return t=i.data,t===md&&gd?null:t;default:return null}}function qg(t,i){if(Qr)return t==="compositionend"||!Zl&&_d(t,i)?(t=ud(),Zo=Xl=ji=null,Qr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return pd&&i.locale!=="ko"?null:i.data;default:return null}}var Kg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Kg[t.type]:i==="textarea"}function yd(t,i,o,l){ct(l),i=sa(i,"onChange"),0<i.length&&(o=new jl("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var io=null,ro=null;function $g(t){kd(t,0)}function ta(t){var i=is(t);if(lt(i))return t}function Zg(t,i){if(t==="change")return i}var Sd=!1;if(d){var Ql;if(d){var Jl="oninput"in document;if(!Jl){var Md=document.createElement("div");Md.setAttribute("oninput","return;"),Jl=typeof Md.oninput=="function"}Ql=Jl}else Ql=!1;Sd=Ql&&(!document.documentMode||9<document.documentMode)}function Ed(){io&&(io.detachEvent("onpropertychange",Td),ro=io=null)}function Td(t){if(t.propertyName==="value"&&ta(ro)){var i=[];yd(i,ro,t,be(t)),Fn($g,i)}}function Qg(t,i,o){t==="focusin"?(Ed(),io=i,ro=o,io.attachEvent("onpropertychange",Td)):t==="focusout"&&Ed()}function Jg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ta(ro)}function e_(t,i){if(t==="click")return ta(i)}function t_(t,i){if(t==="input"||t==="change")return ta(i)}function n_(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var jn=typeof Object.is=="function"?Object.is:n_;function so(t,i){if(jn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var c=o[l];if(!p.call(i,c)||!jn(t[c],i[c]))return!1}return!0}function wd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ad(t,i){var o=wd(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=wd(o)}}function Rd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Rd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Cd(){for(var t=window,i=O();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=O(t.document)}return i}function eu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function i_(t){var i=Cd(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Rd(o.ownerDocument.documentElement,o)){if(l!==null&&eu(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,h=Math.min(l.start,c);l=l.end===void 0?h:Math.min(l.end,c),!t.extend&&h>l&&(c=l,l=h,h=c),c=Ad(o,h);var M=Ad(o,l);c&&M&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var r_=d&&"documentMode"in document&&11>=document.documentMode,Jr=null,tu=null,oo=null,nu=!1;function Pd(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;nu||Jr==null||Jr!==O(l)||(l=Jr,"selectionStart"in l&&eu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),oo&&so(oo,l)||(oo=l,l=sa(tu,"onSelect"),0<l.length&&(i=new jl("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=Jr)))}function na(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var es={animationend:na("Animation","AnimationEnd"),animationiteration:na("Animation","AnimationIteration"),animationstart:na("Animation","AnimationStart"),transitionend:na("Transition","TransitionEnd")},iu={},Ld={};d&&(Ld=document.createElement("div").style,"AnimationEvent"in window||(delete es.animationend.animation,delete es.animationiteration.animation,delete es.animationstart.animation),"TransitionEvent"in window||delete es.transitionend.transition);function ia(t){if(iu[t])return iu[t];if(!es[t])return t;var i=es[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Ld)return iu[t]=i[o];return t}var bd=ia("animationend"),Dd=ia("animationiteration"),Ud=ia("animationstart"),Id=ia("transitionend"),Nd=new Map,Fd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yi(t,i){Nd.set(t,i),u(i,[t])}for(var ru=0;ru<Fd.length;ru++){var su=Fd[ru],s_=su.toLowerCase(),o_=su[0].toUpperCase()+su.slice(1);Yi(s_,"on"+o_)}Yi(bd,"onAnimationEnd"),Yi(Dd,"onAnimationIteration"),Yi(Ud,"onAnimationStart"),Yi("dblclick","onDoubleClick"),Yi("focusin","onFocus"),Yi("focusout","onBlur"),Yi(Id,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),a_=new Set("cancel close invalid load scroll toggle".split(" ").concat(ao));function Od(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,Wo(l,i,void 0,t),t.currentTarget=null}function kd(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],c=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var M=l.length-1;0<=M;M--){var D=l[M],F=D.instance,Q=D.currentTarget;if(D=D.listener,F!==h&&c.isPropagationStopped())break e;Od(c,D,Q),h=F}else for(M=0;M<l.length;M++){if(D=l[M],F=D.instance,Q=D.currentTarget,D=D.listener,F!==h&&c.isPropagationStopped())break e;Od(c,D,Q),h=F}}}if(pi)throw t=Yr,pi=!1,Yr=null,t}function Lt(t,i){var o=i[hu];o===void 0&&(o=i[hu]=new Set);var l=t+"__bubble";o.has(l)||(Bd(i,t,2,!1),o.add(l))}function ou(t,i,o){var l=0;i&&(l|=4),Bd(o,t,l,i)}var ra="_reactListening"+Math.random().toString(36).slice(2);function lo(t){if(!t[ra]){t[ra]=!0,r.forEach(function(o){o!=="selectionchange"&&(a_.has(o)||ou(o,!1,t),ou(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ra]||(i[ra]=!0,ou("selectionchange",!1,i))}}function Bd(t,i,o,l){switch(ld(i)){case 1:var c=Sg;break;case 4:c=Mg;break;default:c=Gl}o=c.bind(null,i,o,t),c=void 0,!jr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(i,o,{capture:!0,passive:c}):t.addEventListener(i,o,!0):c!==void 0?t.addEventListener(i,o,{passive:c}):t.addEventListener(i,o,!1)}function au(t,i,o,l,c){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var D=l.stateNode.containerInfo;if(D===c||D.nodeType===8&&D.parentNode===c)break;if(M===4)for(M=l.return;M!==null;){var F=M.tag;if((F===3||F===4)&&(F=M.stateNode.containerInfo,F===c||F.nodeType===8&&F.parentNode===c))return;M=M.return}for(;D!==null;){if(M=xr(D),M===null)return;if(F=M.tag,F===5||F===6){l=h=M;continue e}D=D.parentNode}}l=l.return}Fn(function(){var Q=h,me=be(o),ve=[];e:{var pe=Nd.get(t);if(pe!==void 0){var Ie=jl,ze=t;switch(t){case"keypress":if(Qo(o)===0)break e;case"keydown":case"keyup":Ie=Og;break;case"focusin":ze="focus",Ie=Kl;break;case"focusout":ze="blur",Ie=Kl;break;case"beforeblur":case"afterblur":Ie=Kl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=fd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=wg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=zg;break;case bd:case Dd:case Ud:Ie=Cg;break;case Id:Ie=Vg;break;case"scroll":Ie=Eg;break;case"wheel":Ie=Wg;break;case"copy":case"cut":case"paste":Ie=Lg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=hd}var Ve=(i&4)!==0,zt=!Ve&&t==="scroll",W=Ve?pe!==null?pe+"Capture":null:pe;Ve=[];for(var B=Q,j;B!==null;){j=B;var Me=j.stateNode;if(j.tag===5&&Me!==null&&(j=Me,W!==null&&(Me=Bi(B,W),Me!=null&&Ve.push(uo(B,Me,j)))),zt)break;B=B.return}0<Ve.length&&(pe=new Ie(pe,ze,null,o,me),ve.push({event:pe,listeners:Ve}))}}if((i&7)===0){e:{if(pe=t==="mouseover"||t==="pointerover",Ie=t==="mouseout"||t==="pointerout",pe&&o!==H&&(ze=o.relatedTarget||o.fromElement)&&(xr(ze)||ze[_i]))break e;if((Ie||pe)&&(pe=me.window===me?me:(pe=me.ownerDocument)?pe.defaultView||pe.parentWindow:window,Ie?(ze=o.relatedTarget||o.toElement,Ie=Q,ze=ze?xr(ze):null,ze!==null&&(zt=mi(ze),ze!==zt||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(Ie=null,ze=Q),Ie!==ze)){if(Ve=fd,Me="onMouseLeave",W="onMouseEnter",B="mouse",(t==="pointerout"||t==="pointerover")&&(Ve=hd,Me="onPointerLeave",W="onPointerEnter",B="pointer"),zt=Ie==null?pe:is(Ie),j=ze==null?pe:is(ze),pe=new Ve(Me,B+"leave",Ie,o,me),pe.target=zt,pe.relatedTarget=j,Me=null,xr(me)===Q&&(Ve=new Ve(W,B+"enter",ze,o,me),Ve.target=j,Ve.relatedTarget=zt,Me=Ve),zt=Me,Ie&&ze)t:{for(Ve=Ie,W=ze,B=0,j=Ve;j;j=ts(j))B++;for(j=0,Me=W;Me;Me=ts(Me))j++;for(;0<B-j;)Ve=ts(Ve),B--;for(;0<j-B;)W=ts(W),j--;for(;B--;){if(Ve===W||W!==null&&Ve===W.alternate)break t;Ve=ts(Ve),W=ts(W)}Ve=null}else Ve=null;Ie!==null&&zd(ve,pe,Ie,Ve,!1),ze!==null&&zt!==null&&zd(ve,zt,ze,Ve,!0)}}e:{if(pe=Q?is(Q):window,Ie=pe.nodeName&&pe.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&pe.type==="file")var Xe=Zg;else if(xd(pe))if(Sd)Xe=t_;else{Xe=Jg;var Ye=Qg}else(Ie=pe.nodeName)&&Ie.toLowerCase()==="input"&&(pe.type==="checkbox"||pe.type==="radio")&&(Xe=e_);if(Xe&&(Xe=Xe(t,Q))){yd(ve,Xe,o,me);break e}Ye&&Ye(t,pe,Q),t==="focusout"&&(Ye=pe._wrapperState)&&Ye.controlled&&pe.type==="number"&&Qe(pe,"number",pe.value)}switch(Ye=Q?is(Q):window,t){case"focusin":(xd(Ye)||Ye.contentEditable==="true")&&(Jr=Ye,tu=Q,oo=null);break;case"focusout":oo=tu=Jr=null;break;case"mousedown":nu=!0;break;case"contextmenu":case"mouseup":case"dragend":nu=!1,Pd(ve,o,me);break;case"selectionchange":if(r_)break;case"keydown":case"keyup":Pd(ve,o,me)}var qe;if(Zl)e:{switch(t){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else Qr?_d(t,o)&&(nt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(nt="onCompositionStart");nt&&(pd&&o.locale!=="ko"&&(Qr||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&Qr&&(qe=ud()):(ji=me,Xl="value"in ji?ji.value:ji.textContent,Qr=!0)),Ye=sa(Q,nt),0<Ye.length&&(nt=new dd(nt,t,null,o,me),ve.push({event:nt,listeners:Ye}),qe?nt.data=qe:(qe=vd(o),qe!==null&&(nt.data=qe)))),(qe=jg?Yg(t,o):qg(t,o))&&(Q=sa(Q,"onBeforeInput"),0<Q.length&&(me=new dd("onBeforeInput","beforeinput",null,o,me),ve.push({event:me,listeners:Q}),me.data=qe))}kd(ve,i)})}function uo(t,i,o){return{instance:t,listener:i,currentTarget:o}}function sa(t,i){for(var o=i+"Capture",l=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=Bi(t,o),h!=null&&l.unshift(uo(t,h,c)),h=Bi(t,i),h!=null&&l.push(uo(t,h,c))),t=t.return}return l}function ts(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function zd(t,i,o,l,c){for(var h=i._reactName,M=[];o!==null&&o!==l;){var D=o,F=D.alternate,Q=D.stateNode;if(F!==null&&F===l)break;D.tag===5&&Q!==null&&(D=Q,c?(F=Bi(o,h),F!=null&&M.unshift(uo(o,F,D))):c||(F=Bi(o,h),F!=null&&M.push(uo(o,F,D)))),o=o.return}M.length!==0&&t.push({event:i,listeners:M})}var l_=/\r\n?/g,u_=/\u0000|\uFFFD/g;function Hd(t){return(typeof t=="string"?t:""+t).replace(l_,`
`).replace(u_,"")}function oa(t,i,o){if(i=Hd(i),Hd(t)!==i&&o)throw Error(n(425))}function aa(){}var lu=null,uu=null;function cu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var fu=typeof setTimeout=="function"?setTimeout:void 0,c_=typeof clearTimeout=="function"?clearTimeout:void 0,Vd=typeof Promise=="function"?Promise:void 0,f_=typeof queueMicrotask=="function"?queueMicrotask:typeof Vd<"u"?function(t){return Vd.resolve(null).then(t).catch(d_)}:fu;function d_(t){setTimeout(function(){throw t})}function du(t,i){var o=i,l=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(l===0){t.removeChild(c),Js(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=c}while(o);Js(i)}function qi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Gd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var ns=Math.random().toString(36).slice(2),ai="__reactFiber$"+ns,co="__reactProps$"+ns,_i="__reactContainer$"+ns,hu="__reactEvents$"+ns,h_="__reactListeners$"+ns,p_="__reactHandles$"+ns;function xr(t){var i=t[ai];if(i)return i;for(var o=t.parentNode;o;){if(i=o[_i]||o[ai]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Gd(t);t!==null;){if(o=t[ai])return o;t=Gd(t)}return i}t=o,o=t.parentNode}return null}function fo(t){return t=t[ai]||t[_i],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function is(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function la(t){return t[co]||null}var pu=[],rs=-1;function Ki(t){return{current:t}}function bt(t){0>rs||(t.current=pu[rs],pu[rs]=null,rs--)}function Pt(t,i){rs++,pu[rs]=t.current,t.current=i}var $i={},an=Ki($i),_n=Ki(!1),yr=$i;function ss(t,i){var o=t.type.contextTypes;if(!o)return $i;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in o)c[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function vn(t){return t=t.childContextTypes,t!=null}function ua(){bt(_n),bt(an)}function Wd(t,i,o){if(an.current!==$i)throw Error(n(168));Pt(an,i),Pt(_n,o)}function Xd(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var c in l)if(!(c in i))throw Error(n(108,ye(t)||"Unknown",c));return ie({},o,l)}function ca(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||$i,yr=an.current,Pt(an,t),Pt(_n,_n.current),!0}function jd(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=Xd(t,i,yr),l.__reactInternalMemoizedMergedChildContext=t,bt(_n),bt(an),Pt(an,t)):bt(_n),Pt(_n,o)}var vi=null,fa=!1,mu=!1;function Yd(t){vi===null?vi=[t]:vi.push(t)}function m_(t){fa=!0,Yd(t)}function Zi(){if(!mu&&vi!==null){mu=!0;var t=0,i=Et;try{var o=vi;for(Et=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}vi=null,fa=!1}catch(c){throw vi!==null&&(vi=vi.slice(t+1)),Z(Ke,Zi),c}finally{Et=i,mu=!1}}return null}var os=[],as=0,da=null,ha=0,On=[],kn=0,Sr=null,xi=1,yi="";function Mr(t,i){os[as++]=ha,os[as++]=da,da=t,ha=i}function qd(t,i,o){On[kn++]=xi,On[kn++]=yi,On[kn++]=Sr,Sr=t;var l=xi;t=yi;var c=32-Oe(l)-1;l&=~(1<<c),o+=1;var h=32-Oe(i)+c;if(30<h){var M=c-c%5;h=(l&(1<<M)-1).toString(32),l>>=M,c-=M,xi=1<<32-Oe(i)+c|o<<c|l,yi=h+t}else xi=1<<h|o<<c|l,yi=t}function gu(t){t.return!==null&&(Mr(t,1),qd(t,1,0))}function _u(t){for(;t===da;)da=os[--as],os[as]=null,ha=os[--as],os[as]=null;for(;t===Sr;)Sr=On[--kn],On[kn]=null,yi=On[--kn],On[kn]=null,xi=On[--kn],On[kn]=null}var bn=null,Dn=null,It=!1,Yn=null;function Kd(t,i){var o=Vn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function $d(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,bn=t,Dn=qi(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,bn=t,Dn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Sr!==null?{id:xi,overflow:yi}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Vn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,bn=t,Dn=null,!0):!1;default:return!1}}function vu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function xu(t){if(It){var i=Dn;if(i){var o=i;if(!$d(t,i)){if(vu(t))throw Error(n(418));i=qi(o.nextSibling);var l=bn;i&&$d(t,i)?Kd(l,o):(t.flags=t.flags&-4097|2,It=!1,bn=t)}}else{if(vu(t))throw Error(n(418));t.flags=t.flags&-4097|2,It=!1,bn=t}}}function Zd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;bn=t}function pa(t){if(t!==bn)return!1;if(!It)return Zd(t),It=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!cu(t.type,t.memoizedProps)),i&&(i=Dn)){if(vu(t))throw Qd(),Error(n(418));for(;i;)Kd(t,i),i=qi(i.nextSibling)}if(Zd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Dn=qi(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Dn=null}}else Dn=bn?qi(t.stateNode.nextSibling):null;return!0}function Qd(){for(var t=Dn;t;)t=qi(t.nextSibling)}function ls(){Dn=bn=null,It=!1}function yu(t){Yn===null?Yn=[t]:Yn.push(t)}var g_=U.ReactCurrentBatchConfig;function ho(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var c=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(M){var D=c.refs;M===null?delete D[h]:D[h]=M},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function ma(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Jd(t){var i=t._init;return i(t._payload)}function eh(t){function i(W,B){if(t){var j=W.deletions;j===null?(W.deletions=[B],W.flags|=16):j.push(B)}}function o(W,B){if(!t)return null;for(;B!==null;)i(W,B),B=B.sibling;return null}function l(W,B){for(W=new Map;B!==null;)B.key!==null?W.set(B.key,B):W.set(B.index,B),B=B.sibling;return W}function c(W,B){return W=sr(W,B),W.index=0,W.sibling=null,W}function h(W,B,j){return W.index=j,t?(j=W.alternate,j!==null?(j=j.index,j<B?(W.flags|=2,B):j):(W.flags|=2,B)):(W.flags|=1048576,B)}function M(W){return t&&W.alternate===null&&(W.flags|=2),W}function D(W,B,j,Me){return B===null||B.tag!==6?(B=fc(j,W.mode,Me),B.return=W,B):(B=c(B,j),B.return=W,B)}function F(W,B,j,Me){var Xe=j.type;return Xe===N?me(W,B,j.props.children,Me,j.key):B!==null&&(B.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===ne&&Jd(Xe)===B.type)?(Me=c(B,j.props),Me.ref=ho(W,B,j),Me.return=W,Me):(Me=Ba(j.type,j.key,j.props,null,W.mode,Me),Me.ref=ho(W,B,j),Me.return=W,Me)}function Q(W,B,j,Me){return B===null||B.tag!==4||B.stateNode.containerInfo!==j.containerInfo||B.stateNode.implementation!==j.implementation?(B=dc(j,W.mode,Me),B.return=W,B):(B=c(B,j.children||[]),B.return=W,B)}function me(W,B,j,Me,Xe){return B===null||B.tag!==7?(B=Lr(j,W.mode,Me,Xe),B.return=W,B):(B=c(B,j),B.return=W,B)}function ve(W,B,j){if(typeof B=="string"&&B!==""||typeof B=="number")return B=fc(""+B,W.mode,j),B.return=W,B;if(typeof B=="object"&&B!==null){switch(B.$$typeof){case J:return j=Ba(B.type,B.key,B.props,null,W.mode,j),j.ref=ho(W,null,B),j.return=W,j;case z:return B=dc(B,W.mode,j),B.return=W,B;case ne:var Me=B._init;return ve(W,Me(B._payload),j)}if(L(B)||ue(B))return B=Lr(B,W.mode,j,null),B.return=W,B;ma(W,B)}return null}function pe(W,B,j,Me){var Xe=B!==null?B.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return Xe!==null?null:D(W,B,""+j,Me);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case J:return j.key===Xe?F(W,B,j,Me):null;case z:return j.key===Xe?Q(W,B,j,Me):null;case ne:return Xe=j._init,pe(W,B,Xe(j._payload),Me)}if(L(j)||ue(j))return Xe!==null?null:me(W,B,j,Me,null);ma(W,j)}return null}function Ie(W,B,j,Me,Xe){if(typeof Me=="string"&&Me!==""||typeof Me=="number")return W=W.get(j)||null,D(B,W,""+Me,Xe);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case J:return W=W.get(Me.key===null?j:Me.key)||null,F(B,W,Me,Xe);case z:return W=W.get(Me.key===null?j:Me.key)||null,Q(B,W,Me,Xe);case ne:var Ye=Me._init;return Ie(W,B,j,Ye(Me._payload),Xe)}if(L(Me)||ue(Me))return W=W.get(j)||null,me(B,W,Me,Xe,null);ma(B,Me)}return null}function ze(W,B,j,Me){for(var Xe=null,Ye=null,qe=B,nt=B=0,Jt=null;qe!==null&&nt<j.length;nt++){qe.index>nt?(Jt=qe,qe=null):Jt=qe.sibling;var vt=pe(W,qe,j[nt],Me);if(vt===null){qe===null&&(qe=Jt);break}t&&qe&&vt.alternate===null&&i(W,qe),B=h(vt,B,nt),Ye===null?Xe=vt:Ye.sibling=vt,Ye=vt,qe=Jt}if(nt===j.length)return o(W,qe),It&&Mr(W,nt),Xe;if(qe===null){for(;nt<j.length;nt++)qe=ve(W,j[nt],Me),qe!==null&&(B=h(qe,B,nt),Ye===null?Xe=qe:Ye.sibling=qe,Ye=qe);return It&&Mr(W,nt),Xe}for(qe=l(W,qe);nt<j.length;nt++)Jt=Ie(qe,W,nt,j[nt],Me),Jt!==null&&(t&&Jt.alternate!==null&&qe.delete(Jt.key===null?nt:Jt.key),B=h(Jt,B,nt),Ye===null?Xe=Jt:Ye.sibling=Jt,Ye=Jt);return t&&qe.forEach(function(or){return i(W,or)}),It&&Mr(W,nt),Xe}function Ve(W,B,j,Me){var Xe=ue(j);if(typeof Xe!="function")throw Error(n(150));if(j=Xe.call(j),j==null)throw Error(n(151));for(var Ye=Xe=null,qe=B,nt=B=0,Jt=null,vt=j.next();qe!==null&&!vt.done;nt++,vt=j.next()){qe.index>nt?(Jt=qe,qe=null):Jt=qe.sibling;var or=pe(W,qe,vt.value,Me);if(or===null){qe===null&&(qe=Jt);break}t&&qe&&or.alternate===null&&i(W,qe),B=h(or,B,nt),Ye===null?Xe=or:Ye.sibling=or,Ye=or,qe=Jt}if(vt.done)return o(W,qe),It&&Mr(W,nt),Xe;if(qe===null){for(;!vt.done;nt++,vt=j.next())vt=ve(W,vt.value,Me),vt!==null&&(B=h(vt,B,nt),Ye===null?Xe=vt:Ye.sibling=vt,Ye=vt);return It&&Mr(W,nt),Xe}for(qe=l(W,qe);!vt.done;nt++,vt=j.next())vt=Ie(qe,W,nt,vt.value,Me),vt!==null&&(t&&vt.alternate!==null&&qe.delete(vt.key===null?nt:vt.key),B=h(vt,B,nt),Ye===null?Xe=vt:Ye.sibling=vt,Ye=vt);return t&&qe.forEach(function(K_){return i(W,K_)}),It&&Mr(W,nt),Xe}function zt(W,B,j,Me){if(typeof j=="object"&&j!==null&&j.type===N&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case J:e:{for(var Xe=j.key,Ye=B;Ye!==null;){if(Ye.key===Xe){if(Xe=j.type,Xe===N){if(Ye.tag===7){o(W,Ye.sibling),B=c(Ye,j.props.children),B.return=W,W=B;break e}}else if(Ye.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===ne&&Jd(Xe)===Ye.type){o(W,Ye.sibling),B=c(Ye,j.props),B.ref=ho(W,Ye,j),B.return=W,W=B;break e}o(W,Ye);break}else i(W,Ye);Ye=Ye.sibling}j.type===N?(B=Lr(j.props.children,W.mode,Me,j.key),B.return=W,W=B):(Me=Ba(j.type,j.key,j.props,null,W.mode,Me),Me.ref=ho(W,B,j),Me.return=W,W=Me)}return M(W);case z:e:{for(Ye=j.key;B!==null;){if(B.key===Ye)if(B.tag===4&&B.stateNode.containerInfo===j.containerInfo&&B.stateNode.implementation===j.implementation){o(W,B.sibling),B=c(B,j.children||[]),B.return=W,W=B;break e}else{o(W,B);break}else i(W,B);B=B.sibling}B=dc(j,W.mode,Me),B.return=W,W=B}return M(W);case ne:return Ye=j._init,zt(W,B,Ye(j._payload),Me)}if(L(j))return ze(W,B,j,Me);if(ue(j))return Ve(W,B,j,Me);ma(W,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,B!==null&&B.tag===6?(o(W,B.sibling),B=c(B,j),B.return=W,W=B):(o(W,B),B=fc(j,W.mode,Me),B.return=W,W=B),M(W)):o(W,B)}return zt}var us=eh(!0),th=eh(!1),ga=Ki(null),_a=null,cs=null,Su=null;function Mu(){Su=cs=_a=null}function Eu(t){var i=ga.current;bt(ga),t._currentValue=i}function Tu(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function fs(t,i){_a=t,Su=cs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(xn=!0),t.firstContext=null)}function Bn(t){var i=t._currentValue;if(Su!==t)if(t={context:t,memoizedValue:i,next:null},cs===null){if(_a===null)throw Error(n(308));cs=t,_a.dependencies={lanes:0,firstContext:t}}else cs=cs.next=t;return i}var Er=null;function wu(t){Er===null?Er=[t]:Er.push(t)}function nh(t,i,o,l){var c=i.interleaved;return c===null?(o.next=o,wu(i)):(o.next=c.next,c.next=o),i.interleaved=o,Si(t,l)}function Si(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Qi=!1;function Au(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ih(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Mi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Ji(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(mt&2)!==0){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,Si(t,o)}return c=l.interleaved,c===null?(i.next=i,wu(l)):(i.next=c.next,c.next=i),l.interleaved=i,Si(t,o)}function va(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,zl(t,o)}}function rh(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var c=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?c=h=M:h=h.next=M,o=o.next}while(o!==null);h===null?c=h=i:h=h.next=i}else c=h=i;o={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function xa(t,i,o,l){var c=t.updateQueue;Qi=!1;var h=c.firstBaseUpdate,M=c.lastBaseUpdate,D=c.shared.pending;if(D!==null){c.shared.pending=null;var F=D,Q=F.next;F.next=null,M===null?h=Q:M.next=Q,M=F;var me=t.alternate;me!==null&&(me=me.updateQueue,D=me.lastBaseUpdate,D!==M&&(D===null?me.firstBaseUpdate=Q:D.next=Q,me.lastBaseUpdate=F))}if(h!==null){var ve=c.baseState;M=0,me=Q=F=null,D=h;do{var pe=D.lane,Ie=D.eventTime;if((l&pe)===pe){me!==null&&(me=me.next={eventTime:Ie,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var ze=t,Ve=D;switch(pe=i,Ie=o,Ve.tag){case 1:if(ze=Ve.payload,typeof ze=="function"){ve=ze.call(Ie,ve,pe);break e}ve=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=Ve.payload,pe=typeof ze=="function"?ze.call(Ie,ve,pe):ze,pe==null)break e;ve=ie({},ve,pe);break e;case 2:Qi=!0}}D.callback!==null&&D.lane!==0&&(t.flags|=64,pe=c.effects,pe===null?c.effects=[D]:pe.push(D))}else Ie={eventTime:Ie,lane:pe,tag:D.tag,payload:D.payload,callback:D.callback,next:null},me===null?(Q=me=Ie,F=ve):me=me.next=Ie,M|=pe;if(D=D.next,D===null){if(D=c.shared.pending,D===null)break;pe=D,D=pe.next,pe.next=null,c.lastBaseUpdate=pe,c.shared.pending=null}}while(!0);if(me===null&&(F=ve),c.baseState=F,c.firstBaseUpdate=Q,c.lastBaseUpdate=me,i=c.shared.interleaved,i!==null){c=i;do M|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);Ar|=M,t.lanes=M,t.memoizedState=ve}}function sh(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],c=l.callback;if(c!==null){if(l.callback=null,l=o,typeof c!="function")throw Error(n(191,c));c.call(l)}}}var po={},li=Ki(po),mo=Ki(po),go=Ki(po);function Tr(t){if(t===po)throw Error(n(174));return t}function Ru(t,i){switch(Pt(go,i),Pt(mo,t),Pt(li,po),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ae(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ae(i,t)}bt(li),Pt(li,i)}function ds(){bt(li),bt(mo),bt(go)}function oh(t){Tr(go.current);var i=Tr(li.current),o=Ae(i,t.type);i!==o&&(Pt(mo,t),Pt(li,o))}function Cu(t){mo.current===t&&(bt(li),bt(mo))}var Ft=Ki(0);function ya(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Pu=[];function Lu(){for(var t=0;t<Pu.length;t++)Pu[t]._workInProgressVersionPrimary=null;Pu.length=0}var Sa=U.ReactCurrentDispatcher,bu=U.ReactCurrentBatchConfig,wr=0,Ot=null,Xt=null,Zt=null,Ma=!1,_o=!1,vo=0,__=0;function ln(){throw Error(n(321))}function Du(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!jn(t[o],i[o]))return!1;return!0}function Uu(t,i,o,l,c,h){if(wr=h,Ot=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Sa.current=t===null||t.memoizedState===null?S_:M_,t=o(l,c),_o){h=0;do{if(_o=!1,vo=0,25<=h)throw Error(n(301));h+=1,Zt=Xt=null,i.updateQueue=null,Sa.current=E_,t=o(l,c)}while(_o)}if(Sa.current=wa,i=Xt!==null&&Xt.next!==null,wr=0,Zt=Xt=Ot=null,Ma=!1,i)throw Error(n(300));return t}function Iu(){var t=vo!==0;return vo=0,t}function ui(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zt===null?Ot.memoizedState=Zt=t:Zt=Zt.next=t,Zt}function zn(){if(Xt===null){var t=Ot.alternate;t=t!==null?t.memoizedState:null}else t=Xt.next;var i=Zt===null?Ot.memoizedState:Zt.next;if(i!==null)Zt=i,Xt=t;else{if(t===null)throw Error(n(310));Xt=t,t={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},Zt===null?Ot.memoizedState=Zt=t:Zt=Zt.next=t}return Zt}function xo(t,i){return typeof i=="function"?i(t):i}function Nu(t){var i=zn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=Xt,c=l.baseQueue,h=o.pending;if(h!==null){if(c!==null){var M=c.next;c.next=h.next,h.next=M}l.baseQueue=c=h,o.pending=null}if(c!==null){h=c.next,l=l.baseState;var D=M=null,F=null,Q=h;do{var me=Q.lane;if((wr&me)===me)F!==null&&(F=F.next={lane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),l=Q.hasEagerState?Q.eagerState:t(l,Q.action);else{var ve={lane:me,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null};F===null?(D=F=ve,M=l):F=F.next=ve,Ot.lanes|=me,Ar|=me}Q=Q.next}while(Q!==null&&Q!==h);F===null?M=l:F.next=D,jn(l,i.memoizedState)||(xn=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=F,o.lastRenderedState=l}if(t=o.interleaved,t!==null){c=t;do h=c.lane,Ot.lanes|=h,Ar|=h,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Fu(t){var i=zn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,c=o.pending,h=i.memoizedState;if(c!==null){o.pending=null;var M=c=c.next;do h=t(h,M.action),M=M.next;while(M!==c);jn(h,i.memoizedState)||(xn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,l]}function ah(){}function lh(t,i){var o=Ot,l=zn(),c=i(),h=!jn(l.memoizedState,c);if(h&&(l.memoizedState=c,xn=!0),l=l.queue,Ou(fh.bind(null,o,l,t),[t]),l.getSnapshot!==i||h||Zt!==null&&Zt.memoizedState.tag&1){if(o.flags|=2048,yo(9,ch.bind(null,o,l,c,i),void 0,null),Qt===null)throw Error(n(349));(wr&30)!==0||uh(o,i,c)}return c}function uh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Ot.updateQueue,i===null?(i={lastEffect:null,stores:null},Ot.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function ch(t,i,o,l){i.value=o,i.getSnapshot=l,dh(i)&&hh(t)}function fh(t,i,o){return o(function(){dh(i)&&hh(t)})}function dh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!jn(t,o)}catch{return!0}}function hh(t){var i=Si(t,1);i!==null&&Zn(i,t,1,-1)}function ph(t){var i=ui();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xo,lastRenderedState:t},i.queue=t,t=t.dispatch=y_.bind(null,Ot,t),[i.memoizedState,t]}function yo(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=Ot.updateQueue,i===null?(i={lastEffect:null,stores:null},Ot.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function mh(){return zn().memoizedState}function Ea(t,i,o,l){var c=ui();Ot.flags|=t,c.memoizedState=yo(1|i,o,void 0,l===void 0?null:l)}function Ta(t,i,o,l){var c=zn();l=l===void 0?null:l;var h=void 0;if(Xt!==null){var M=Xt.memoizedState;if(h=M.destroy,l!==null&&Du(l,M.deps)){c.memoizedState=yo(i,o,h,l);return}}Ot.flags|=t,c.memoizedState=yo(1|i,o,h,l)}function gh(t,i){return Ea(8390656,8,t,i)}function Ou(t,i){return Ta(2048,8,t,i)}function _h(t,i){return Ta(4,2,t,i)}function vh(t,i){return Ta(4,4,t,i)}function xh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function yh(t,i,o){return o=o!=null?o.concat([t]):null,Ta(4,4,xh.bind(null,i,t),o)}function ku(){}function Sh(t,i){var o=zn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Du(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function Mh(t,i){var o=zn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Du(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function Eh(t,i,o){return(wr&21)===0?(t.baseState&&(t.baseState=!1,xn=!0),t.memoizedState=o):(jn(o,i)||(o=Kr(),Ot.lanes|=o,Ar|=o,t.baseState=!0),i)}function v_(t,i){var o=Et;Et=o!==0&&4>o?o:4,t(!0);var l=bu.transition;bu.transition={};try{t(!1),i()}finally{Et=o,bu.transition=l}}function Th(){return zn().memoizedState}function x_(t,i,o){var l=ir(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},wh(t))Ah(i,o);else if(o=nh(t,i,o,l),o!==null){var c=pn();Zn(o,t,l,c),Rh(o,i,l)}}function y_(t,i,o){var l=ir(t),c={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(wh(t))Ah(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var M=i.lastRenderedState,D=h(M,o);if(c.hasEagerState=!0,c.eagerState=D,jn(D,M)){var F=i.interleaved;F===null?(c.next=c,wu(i)):(c.next=F.next,F.next=c),i.interleaved=c;return}}catch{}o=nh(t,i,c,l),o!==null&&(c=pn(),Zn(o,t,l,c),Rh(o,i,l))}}function wh(t){var i=t.alternate;return t===Ot||i!==null&&i===Ot}function Ah(t,i){_o=Ma=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Rh(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,zl(t,o)}}var wa={readContext:Bn,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useInsertionEffect:ln,useLayoutEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useMutableSource:ln,useSyncExternalStore:ln,useId:ln,unstable_isNewReconciler:!1},S_={readContext:Bn,useCallback:function(t,i){return ui().memoizedState=[t,i===void 0?null:i],t},useContext:Bn,useEffect:gh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Ea(4194308,4,xh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Ea(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ea(4,2,t,i)},useMemo:function(t,i){var o=ui();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=ui();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=x_.bind(null,Ot,t),[l.memoizedState,t]},useRef:function(t){var i=ui();return t={current:t},i.memoizedState=t},useState:ph,useDebugValue:ku,useDeferredValue:function(t){return ui().memoizedState=t},useTransition:function(){var t=ph(!1),i=t[0];return t=v_.bind(null,t[1]),ui().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=Ot,c=ui();if(It){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),Qt===null)throw Error(n(349));(wr&30)!==0||uh(l,i,o)}c.memoizedState=o;var h={value:o,getSnapshot:i};return c.queue=h,gh(fh.bind(null,l,h,t),[t]),l.flags|=2048,yo(9,ch.bind(null,l,h,o,i),void 0,null),o},useId:function(){var t=ui(),i=Qt.identifierPrefix;if(It){var o=yi,l=xi;o=(l&~(1<<32-Oe(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=vo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=__++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},M_={readContext:Bn,useCallback:Sh,useContext:Bn,useEffect:Ou,useImperativeHandle:yh,useInsertionEffect:_h,useLayoutEffect:vh,useMemo:Mh,useReducer:Nu,useRef:mh,useState:function(){return Nu(xo)},useDebugValue:ku,useDeferredValue:function(t){var i=zn();return Eh(i,Xt.memoizedState,t)},useTransition:function(){var t=Nu(xo)[0],i=zn().memoizedState;return[t,i]},useMutableSource:ah,useSyncExternalStore:lh,useId:Th,unstable_isNewReconciler:!1},E_={readContext:Bn,useCallback:Sh,useContext:Bn,useEffect:Ou,useImperativeHandle:yh,useInsertionEffect:_h,useLayoutEffect:vh,useMemo:Mh,useReducer:Fu,useRef:mh,useState:function(){return Fu(xo)},useDebugValue:ku,useDeferredValue:function(t){var i=zn();return Xt===null?i.memoizedState=t:Eh(i,Xt.memoizedState,t)},useTransition:function(){var t=Fu(xo)[0],i=zn().memoizedState;return[t,i]},useMutableSource:ah,useSyncExternalStore:lh,useId:Th,unstable_isNewReconciler:!1};function qn(t,i){if(t&&t.defaultProps){i=ie({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Bu(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:ie({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Aa={isMounted:function(t){return(t=t._reactInternals)?mi(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=pn(),c=ir(t),h=Mi(l,c);h.payload=i,o!=null&&(h.callback=o),i=Ji(t,h,c),i!==null&&(Zn(i,t,c,l),va(i,t,c))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=pn(),c=ir(t),h=Mi(l,c);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=Ji(t,h,c),i!==null&&(Zn(i,t,c,l),va(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=pn(),l=ir(t),c=Mi(o,l);c.tag=2,i!=null&&(c.callback=i),i=Ji(t,c,l),i!==null&&(Zn(i,t,l,o),va(i,t,l))}};function Ch(t,i,o,l,c,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,M):i.prototype&&i.prototype.isPureReactComponent?!so(o,l)||!so(c,h):!0}function Ph(t,i,o){var l=!1,c=$i,h=i.contextType;return typeof h=="object"&&h!==null?h=Bn(h):(c=vn(i)?yr:an.current,l=i.contextTypes,h=(l=l!=null)?ss(t,c):$i),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Aa,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function Lh(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&Aa.enqueueReplaceState(i,i.state,null)}function zu(t,i,o,l){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},Au(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=Bn(h):(h=vn(i)?yr:an.current,c.context=ss(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Bu(t,i,h,o),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&Aa.enqueueReplaceState(c,c.state,null),xa(t,o,c,l),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function hs(t,i){try{var o="",l=i;do o+=ae(l),l=l.return;while(l);var c=o}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function Hu(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Vu(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var T_=typeof WeakMap=="function"?WeakMap:Map;function bh(t,i,o){o=Mi(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){Ua||(Ua=!0,ic=l),Vu(t,i)},o}function Dh(t,i,o){o=Mi(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=i.value;o.payload=function(){return l(c)},o.callback=function(){Vu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Vu(t,i),typeof l!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function Uh(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new T_;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(o)||(c.add(o),t=k_.bind(null,t,i,o),i.then(t,t))}function Ih(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Nh(t,i,o,l,c){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Mi(-1,1),i.tag=2,Ji(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=c,t)}var w_=U.ReactCurrentOwner,xn=!1;function hn(t,i,o,l){i.child=t===null?th(i,null,o,l):us(i,t.child,o,l)}function Fh(t,i,o,l,c){o=o.render;var h=i.ref;return fs(i,c),l=Uu(t,i,o,l,h,c),o=Iu(),t!==null&&!xn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Ei(t,i,c)):(It&&o&&gu(i),i.flags|=1,hn(t,i,l,c),i.child)}function Oh(t,i,o,l,c){if(t===null){var h=o.type;return typeof h=="function"&&!cc(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,kh(t,i,h,l,c)):(t=Ba(o.type,null,l,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&c)===0){var M=h.memoizedProps;if(o=o.compare,o=o!==null?o:so,o(M,l)&&t.ref===i.ref)return Ei(t,i,c)}return i.flags|=1,t=sr(h,l),t.ref=i.ref,t.return=i,i.child=t}function kh(t,i,o,l,c){if(t!==null){var h=t.memoizedProps;if(so(h,l)&&t.ref===i.ref)if(xn=!1,i.pendingProps=l=h,(t.lanes&c)!==0)(t.flags&131072)!==0&&(xn=!0);else return i.lanes=t.lanes,Ei(t,i,c)}return Gu(t,i,o,l,c)}function Bh(t,i,o){var l=i.pendingProps,c=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pt(ms,Un),Un|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Pt(ms,Un),Un|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:o,Pt(ms,Un),Un|=l}else h!==null?(l=h.baseLanes|o,i.memoizedState=null):l=o,Pt(ms,Un),Un|=l;return hn(t,i,c,o),i.child}function zh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Gu(t,i,o,l,c){var h=vn(o)?yr:an.current;return h=ss(i,h),fs(i,c),o=Uu(t,i,o,l,h,c),l=Iu(),t!==null&&!xn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Ei(t,i,c)):(It&&l&&gu(i),i.flags|=1,hn(t,i,o,c),i.child)}function Hh(t,i,o,l,c){if(vn(o)){var h=!0;ca(i)}else h=!1;if(fs(i,c),i.stateNode===null)Ca(t,i),Ph(i,o,l),zu(i,o,l,c),l=!0;else if(t===null){var M=i.stateNode,D=i.memoizedProps;M.props=D;var F=M.context,Q=o.contextType;typeof Q=="object"&&Q!==null?Q=Bn(Q):(Q=vn(o)?yr:an.current,Q=ss(i,Q));var me=o.getDerivedStateFromProps,ve=typeof me=="function"||typeof M.getSnapshotBeforeUpdate=="function";ve||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==l||F!==Q)&&Lh(i,M,l,Q),Qi=!1;var pe=i.memoizedState;M.state=pe,xa(i,l,M,c),F=i.memoizedState,D!==l||pe!==F||_n.current||Qi?(typeof me=="function"&&(Bu(i,o,me,l),F=i.memoizedState),(D=Qi||Ch(i,o,D,l,pe,F,Q))?(ve||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=F),M.props=l,M.state=F,M.context=Q,l=D):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,ih(t,i),D=i.memoizedProps,Q=i.type===i.elementType?D:qn(i.type,D),M.props=Q,ve=i.pendingProps,pe=M.context,F=o.contextType,typeof F=="object"&&F!==null?F=Bn(F):(F=vn(o)?yr:an.current,F=ss(i,F));var Ie=o.getDerivedStateFromProps;(me=typeof Ie=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==ve||pe!==F)&&Lh(i,M,l,F),Qi=!1,pe=i.memoizedState,M.state=pe,xa(i,l,M,c);var ze=i.memoizedState;D!==ve||pe!==ze||_n.current||Qi?(typeof Ie=="function"&&(Bu(i,o,Ie,l),ze=i.memoizedState),(Q=Qi||Ch(i,o,Q,l,pe,ze,F)||!1)?(me||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,ze,F),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,ze,F)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||D===t.memoizedProps&&pe===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&pe===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ze),M.props=l,M.state=ze,M.context=F,l=Q):(typeof M.componentDidUpdate!="function"||D===t.memoizedProps&&pe===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&pe===t.memoizedState||(i.flags|=1024),l=!1)}return Wu(t,i,o,l,h,c)}function Wu(t,i,o,l,c,h){zh(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return c&&jd(i,o,!1),Ei(t,i,h);l=i.stateNode,w_.current=i;var D=M&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=us(i,t.child,null,h),i.child=us(i,null,D,h)):hn(t,i,D,h),i.memoizedState=l.state,c&&jd(i,o,!0),i.child}function Vh(t){var i=t.stateNode;i.pendingContext?Wd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Wd(t,i.context,!1),Ru(t,i.containerInfo)}function Gh(t,i,o,l,c){return ls(),yu(c),i.flags|=256,hn(t,i,o,l),i.child}var Xu={dehydrated:null,treeContext:null,retryLane:0};function ju(t){return{baseLanes:t,cachePool:null,transitions:null}}function Wh(t,i,o){var l=i.pendingProps,c=Ft.current,h=!1,M=(i.flags&128)!==0,D;if((D=M)||(D=t!==null&&t.memoizedState===null?!1:(c&2)!==0),D?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Pt(Ft,c&1),t===null)return xu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,h?(l=i.mode,h=i.child,M={mode:"hidden",children:M},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=M):h=za(M,l,0,null),t=Lr(t,l,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=ju(o),i.memoizedState=Xu,t):Yu(i,M));if(c=t.memoizedState,c!==null&&(D=c.dehydrated,D!==null))return A_(t,i,M,l,D,c,o);if(h){h=l.fallback,M=i.mode,c=t.child,D=c.sibling;var F={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==c?(l=i.child,l.childLanes=0,l.pendingProps=F,i.deletions=null):(l=sr(c,F),l.subtreeFlags=c.subtreeFlags&14680064),D!==null?h=sr(D,h):(h=Lr(h,M,o,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,M=t.child.memoizedState,M=M===null?ju(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},h.memoizedState=M,h.childLanes=t.childLanes&~o,i.memoizedState=Xu,l}return h=t.child,t=h.sibling,l=sr(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function Yu(t,i){return i=za({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Ra(t,i,o,l){return l!==null&&yu(l),us(i,t.child,null,o),t=Yu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function A_(t,i,o,l,c,h,M){if(o)return i.flags&256?(i.flags&=-257,l=Hu(Error(n(422))),Ra(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,c=i.mode,l=za({mode:"visible",children:l.children},c,0,null),h=Lr(h,c,M,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&us(i,t.child,null,M),i.child.memoizedState=ju(M),i.memoizedState=Xu,h);if((i.mode&1)===0)return Ra(t,i,M,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var D=l.dgst;return l=D,h=Error(n(419)),l=Hu(h,l,void 0),Ra(t,i,M,l)}if(D=(M&t.childLanes)!==0,xn||D){if(l=Qt,l!==null){switch(M&-M){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(l.suspendedLanes|M))!==0?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,Si(t,c),Zn(l,t,c,-1))}return uc(),l=Hu(Error(n(421))),Ra(t,i,M,l)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=B_.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,Dn=qi(c.nextSibling),bn=i,It=!0,Yn=null,t!==null&&(On[kn++]=xi,On[kn++]=yi,On[kn++]=Sr,xi=t.id,yi=t.overflow,Sr=i),i=Yu(i,l.children),i.flags|=4096,i)}function Xh(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Tu(t.return,i,o)}function qu(t,i,o,l,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=o,h.tailMode=c)}function jh(t,i,o){var l=i.pendingProps,c=l.revealOrder,h=l.tail;if(hn(t,i,l.children,o),l=Ft.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xh(t,o,i);else if(t.tag===19)Xh(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Pt(Ft,l),(i.mode&1)===0)i.memoizedState=null;else switch(c){case"forwards":for(o=i.child,c=null;o!==null;)t=o.alternate,t!==null&&ya(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=i.child,i.child=null):(c=o.sibling,o.sibling=null),qu(i,!1,c,o,h);break;case"backwards":for(o=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&ya(t)===null){i.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}qu(i,!0,o,null,h);break;case"together":qu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ca(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ei(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Ar|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=sr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=sr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function R_(t,i,o){switch(i.tag){case 3:Vh(i),ls();break;case 5:oh(i);break;case 1:vn(i.type)&&ca(i);break;case 4:Ru(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,c=i.memoizedProps.value;Pt(ga,l._currentValue),l._currentValue=c;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Pt(Ft,Ft.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Wh(t,i,o):(Pt(Ft,Ft.current&1),t=Ei(t,i,o),t!==null?t.sibling:null);Pt(Ft,Ft.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return jh(t,i,o);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Pt(Ft,Ft.current),l)break;return null;case 22:case 23:return i.lanes=0,Bh(t,i,o)}return Ei(t,i,o)}var Yh,Ku,qh,Kh;Yh=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Ku=function(){},qh=function(t,i,o,l){var c=t.memoizedProps;if(c!==l){t=i.stateNode,Tr(li.current);var h=null;switch(o){case"input":c=tn(t,c),l=tn(t,l),h=[];break;case"select":c=ie({},c,{value:void 0}),l=ie({},l,{value:void 0}),h=[];break;case"textarea":c=K(t,c),l=K(t,l),h=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=aa)}it(o,l);var M;o=null;for(Q in c)if(!l.hasOwnProperty(Q)&&c.hasOwnProperty(Q)&&c[Q]!=null)if(Q==="style"){var D=c[Q];for(M in D)D.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else Q!=="dangerouslySetInnerHTML"&&Q!=="children"&&Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&Q!=="autoFocus"&&(a.hasOwnProperty(Q)?h||(h=[]):(h=h||[]).push(Q,null));for(Q in l){var F=l[Q];if(D=c?.[Q],l.hasOwnProperty(Q)&&F!==D&&(F!=null||D!=null))if(Q==="style")if(D){for(M in D)!D.hasOwnProperty(M)||F&&F.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in F)F.hasOwnProperty(M)&&D[M]!==F[M]&&(o||(o={}),o[M]=F[M])}else o||(h||(h=[]),h.push(Q,o)),o=F;else Q==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,D=D?D.__html:void 0,F!=null&&D!==F&&(h=h||[]).push(Q,F)):Q==="children"?typeof F!="string"&&typeof F!="number"||(h=h||[]).push(Q,""+F):Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&(a.hasOwnProperty(Q)?(F!=null&&Q==="onScroll"&&Lt("scroll",t),h||D===F||(h=[])):(h=h||[]).push(Q,F))}o&&(h=h||[]).push("style",o);var Q=h;(i.updateQueue=Q)&&(i.flags|=4)}},Kh=function(t,i,o,l){o!==l&&(i.flags|=4)};function So(t,i){if(!It)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function un(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function C_(t,i,o){var l=i.pendingProps;switch(_u(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return un(i),null;case 1:return vn(i.type)&&ua(),un(i),null;case 3:return l=i.stateNode,ds(),bt(_n),bt(an),Lu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(pa(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Yn!==null&&(oc(Yn),Yn=null))),Ku(t,i),un(i),null;case 5:Cu(i);var c=Tr(go.current);if(o=i.type,t!==null&&i.stateNode!=null)qh(t,i,o,l,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return un(i),null}if(t=Tr(li.current),pa(i)){l=i.stateNode,o=i.type;var h=i.memoizedProps;switch(l[ai]=i,l[co]=h,t=(i.mode&1)!==0,o){case"dialog":Lt("cancel",l),Lt("close",l);break;case"iframe":case"object":case"embed":Lt("load",l);break;case"video":case"audio":for(c=0;c<ao.length;c++)Lt(ao[c],l);break;case"source":Lt("error",l);break;case"img":case"image":case"link":Lt("error",l),Lt("load",l);break;case"details":Lt("toggle",l);break;case"input":at(l,h),Lt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Lt("invalid",l);break;case"textarea":fe(l,h),Lt("invalid",l)}it(o,h),c=null;for(var M in h)if(h.hasOwnProperty(M)){var D=h[M];M==="children"?typeof D=="string"?l.textContent!==D&&(h.suppressHydrationWarning!==!0&&oa(l.textContent,D,t),c=["children",D]):typeof D=="number"&&l.textContent!==""+D&&(h.suppressHydrationWarning!==!0&&oa(l.textContent,D,t),c=["children",""+D]):a.hasOwnProperty(M)&&D!=null&&M==="onScroll"&&Lt("scroll",l)}switch(o){case"input":pt(l),Tt(l,h,!0);break;case"textarea":pt(l),ce(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=aa)}l=c,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=je(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(o,{is:l.is}):(t=M.createElement(o),o==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,o),t[ai]=i,t[co]=l,Yh(t,i,!1,!1),i.stateNode=t;e:{switch(M=St(o,l),o){case"dialog":Lt("cancel",t),Lt("close",t),c=l;break;case"iframe":case"object":case"embed":Lt("load",t),c=l;break;case"video":case"audio":for(c=0;c<ao.length;c++)Lt(ao[c],t);c=l;break;case"source":Lt("error",t),c=l;break;case"img":case"image":case"link":Lt("error",t),Lt("load",t),c=l;break;case"details":Lt("toggle",t),c=l;break;case"input":at(t,l),c=tn(t,l),Lt("invalid",t);break;case"option":c=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},c=ie({},l,{value:void 0}),Lt("invalid",t);break;case"textarea":fe(t,l),c=K(t,l),Lt("invalid",t);break;default:c=l}it(o,c),D=c;for(h in D)if(D.hasOwnProperty(h)){var F=D[h];h==="style"?ke(t,F):h==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,F!=null&&dt(t,F)):h==="children"?typeof F=="string"?(o!=="textarea"||F!=="")&&Se(t,F):typeof F=="number"&&Se(t,""+F):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?F!=null&&h==="onScroll"&&Lt("scroll",t):F!=null&&P(t,h,F,M))}switch(o){case"input":pt(t),Tt(t,l,!1);break;case"textarea":pt(t),ce(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Pe(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?T(t,!!l.multiple,h,!1):l.defaultValue!=null&&T(t,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=aa)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return un(i),null;case 6:if(t&&i.stateNode!=null)Kh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=Tr(go.current),Tr(li.current),pa(i)){if(l=i.stateNode,o=i.memoizedProps,l[ai]=i,(h=l.nodeValue!==o)&&(t=bn,t!==null))switch(t.tag){case 3:oa(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&oa(l.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[ai]=i,i.stateNode=l}return un(i),null;case 13:if(bt(Ft),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(It&&Dn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Qd(),ls(),i.flags|=98560,h=!1;else if(h=pa(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[ai]=i}else ls(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;un(i),h=!1}else Yn!==null&&(oc(Yn),Yn=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Ft.current&1)!==0?jt===0&&(jt=3):uc())),i.updateQueue!==null&&(i.flags|=4),un(i),null);case 4:return ds(),Ku(t,i),t===null&&lo(i.stateNode.containerInfo),un(i),null;case 10:return Eu(i.type._context),un(i),null;case 17:return vn(i.type)&&ua(),un(i),null;case 19:if(bt(Ft),h=i.memoizedState,h===null)return un(i),null;if(l=(i.flags&128)!==0,M=h.rendering,M===null)if(l)So(h,!1);else{if(jt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=ya(t),M!==null){for(i.flags|=128,So(h,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)h=o,t=l,h.flags&=14680066,M=h.alternate,M===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=M.childLanes,h.lanes=M.lanes,h.child=M.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=M.memoizedProps,h.memoizedState=M.memoizedState,h.updateQueue=M.updateQueue,h.type=M.type,t=M.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Pt(Ft,Ft.current&1|2),i.child}t=t.sibling}h.tail!==null&&Te()>gs&&(i.flags|=128,l=!0,So(h,!1),i.lanes=4194304)}else{if(!l)if(t=ya(M),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),So(h,!0),h.tail===null&&h.tailMode==="hidden"&&!M.alternate&&!It)return un(i),null}else 2*Te()-h.renderingStartTime>gs&&o!==1073741824&&(i.flags|=128,l=!0,So(h,!1),i.lanes=4194304);h.isBackwards?(M.sibling=i.child,i.child=M):(o=h.last,o!==null?o.sibling=M:i.child=M,h.last=M)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Te(),i.sibling=null,o=Ft.current,Pt(Ft,l?o&1|2:o&1),i):(un(i),null);case 22:case 23:return lc(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Un&1073741824)!==0&&(un(i),i.subtreeFlags&6&&(i.flags|=8192)):un(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function P_(t,i){switch(_u(i),i.tag){case 1:return vn(i.type)&&ua(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ds(),bt(_n),bt(an),Lu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Cu(i),null;case 13:if(bt(Ft),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ls()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return bt(Ft),null;case 4:return ds(),null;case 10:return Eu(i.type._context),null;case 22:case 23:return lc(),null;case 24:return null;default:return null}}var Pa=!1,cn=!1,L_=typeof WeakSet=="function"?WeakSet:Set,Be=null;function ps(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){kt(t,i,l)}else o.current=null}function $u(t,i,o){try{o()}catch(l){kt(t,i,l)}}var $h=!1;function b_(t,i){if(lu=Ko,t=Cd(),eu(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var c=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var M=0,D=-1,F=-1,Q=0,me=0,ve=t,pe=null;t:for(;;){for(var Ie;ve!==o||c!==0&&ve.nodeType!==3||(D=M+c),ve!==h||l!==0&&ve.nodeType!==3||(F=M+l),ve.nodeType===3&&(M+=ve.nodeValue.length),(Ie=ve.firstChild)!==null;)pe=ve,ve=Ie;for(;;){if(ve===t)break t;if(pe===o&&++Q===c&&(D=M),pe===h&&++me===l&&(F=M),(Ie=ve.nextSibling)!==null)break;ve=pe,pe=ve.parentNode}ve=Ie}o=D===-1||F===-1?null:{start:D,end:F}}else o=null}o=o||{start:0,end:0}}else o=null;for(uu={focusedElem:t,selectionRange:o},Ko=!1,Be=i;Be!==null;)if(i=Be,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Be=t;else for(;Be!==null;){i=Be;try{var ze=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var Ve=ze.memoizedProps,zt=ze.memoizedState,W=i.stateNode,B=W.getSnapshotBeforeUpdate(i.elementType===i.type?Ve:qn(i.type,Ve),zt);W.__reactInternalSnapshotBeforeUpdate=B}break;case 3:var j=i.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Me){kt(i,i.return,Me)}if(t=i.sibling,t!==null){t.return=i.return,Be=t;break}Be=i.return}return ze=$h,$h=!1,ze}function Mo(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&$u(i,o,h)}c=c.next}while(c!==l)}}function La(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function Zu(t){var i=t.ref;if(i!==null){var o=t.stateNode;t.tag,t=o,typeof i=="function"?i(t):i.current=t}}function Zh(t){var i=t.alternate;i!==null&&(t.alternate=null,Zh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[ai],delete i[co],delete i[hu],delete i[h_],delete i[p_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Qh(t){return t.tag===5||t.tag===3||t.tag===4}function Jh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Qh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qu(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=aa));else if(l!==4&&(t=t.child,t!==null))for(Qu(t,i,o),t=t.sibling;t!==null;)Qu(t,i,o),t=t.sibling}function Ju(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Ju(t,i,o),t=t.sibling;t!==null;)Ju(t,i,o),t=t.sibling}var rn=null,Kn=!1;function er(t,i,o){for(o=o.child;o!==null;)ep(t,i,o),o=o.sibling}function ep(t,i,o){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(At,o)}catch{}switch(o.tag){case 5:cn||ps(o,i);case 6:var l=rn,c=Kn;rn=null,er(t,i,o),rn=l,Kn=c,rn!==null&&(Kn?(t=rn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):rn.removeChild(o.stateNode));break;case 18:rn!==null&&(Kn?(t=rn,o=o.stateNode,t.nodeType===8?du(t.parentNode,o):t.nodeType===1&&du(t,o),Js(t)):du(rn,o.stateNode));break;case 4:l=rn,c=Kn,rn=o.stateNode.containerInfo,Kn=!0,er(t,i,o),rn=l,Kn=c;break;case 0:case 11:case 14:case 15:if(!cn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var h=c,M=h.destroy;h=h.tag,M!==void 0&&((h&2)!==0||(h&4)!==0)&&$u(o,i,M),c=c.next}while(c!==l)}er(t,i,o);break;case 1:if(!cn&&(ps(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(D){kt(o,i,D)}er(t,i,o);break;case 21:er(t,i,o);break;case 22:o.mode&1?(cn=(l=cn)||o.memoizedState!==null,er(t,i,o),cn=l):er(t,i,o);break;default:er(t,i,o)}}function tp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new L_),i.forEach(function(l){var c=z_.bind(null,t,l);o.has(l)||(o.add(l),l.then(c,c))})}}function $n(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var c=o[l];try{var h=t,M=i,D=M;e:for(;D!==null;){switch(D.tag){case 5:rn=D.stateNode,Kn=!1;break e;case 3:rn=D.stateNode.containerInfo,Kn=!0;break e;case 4:rn=D.stateNode.containerInfo,Kn=!0;break e}D=D.return}if(rn===null)throw Error(n(160));ep(h,M,c),rn=null,Kn=!1;var F=c.alternate;F!==null&&(F.return=null),c.return=null}catch(Q){kt(c,i,Q)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)np(i,t),i=i.sibling}function np(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if($n(i,t),ci(t),l&4){try{Mo(3,t,t.return),La(3,t)}catch(Ve){kt(t,t.return,Ve)}try{Mo(5,t,t.return)}catch(Ve){kt(t,t.return,Ve)}}break;case 1:$n(i,t),ci(t),l&512&&o!==null&&ps(o,o.return);break;case 5:if($n(i,t),ci(t),l&512&&o!==null&&ps(o,o.return),t.flags&32){var c=t.stateNode;try{Se(c,"")}catch(Ve){kt(t,t.return,Ve)}}if(l&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,M=o!==null?o.memoizedProps:h,D=t.type,F=t.updateQueue;if(t.updateQueue=null,F!==null)try{D==="input"&&h.type==="radio"&&h.name!=null&&ft(c,h),St(D,M);var Q=St(D,h);for(M=0;M<F.length;M+=2){var me=F[M],ve=F[M+1];me==="style"?ke(c,ve):me==="dangerouslySetInnerHTML"?dt(c,ve):me==="children"?Se(c,ve):P(c,me,ve,Q)}switch(D){case"input":$e(c,h);break;case"textarea":_e(c,h);break;case"select":var pe=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var Ie=h.value;Ie!=null?T(c,!!h.multiple,Ie,!1):pe!==!!h.multiple&&(h.defaultValue!=null?T(c,!!h.multiple,h.defaultValue,!0):T(c,!!h.multiple,h.multiple?[]:"",!1))}c[co]=h}catch(Ve){kt(t,t.return,Ve)}}break;case 6:if($n(i,t),ci(t),l&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(Ve){kt(t,t.return,Ve)}}break;case 3:if($n(i,t),ci(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{Js(i.containerInfo)}catch(Ve){kt(t,t.return,Ve)}break;case 4:$n(i,t),ci(t);break;case 13:$n(i,t),ci(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(nc=Te())),l&4&&tp(t);break;case 22:if(me=o!==null&&o.memoizedState!==null,t.mode&1?(cn=(Q=cn)||me,$n(i,t),cn=Q):$n(i,t),ci(t),l&8192){if(Q=t.memoizedState!==null,(t.stateNode.isHidden=Q)&&!me&&(t.mode&1)!==0)for(Be=t,me=t.child;me!==null;){for(ve=Be=me;Be!==null;){switch(pe=Be,Ie=pe.child,pe.tag){case 0:case 11:case 14:case 15:Mo(4,pe,pe.return);break;case 1:ps(pe,pe.return);var ze=pe.stateNode;if(typeof ze.componentWillUnmount=="function"){l=pe,o=pe.return;try{i=l,ze.props=i.memoizedProps,ze.state=i.memoizedState,ze.componentWillUnmount()}catch(Ve){kt(l,o,Ve)}}break;case 5:ps(pe,pe.return);break;case 22:if(pe.memoizedState!==null){sp(ve);continue}}Ie!==null?(Ie.return=pe,Be=Ie):sp(ve)}me=me.sibling}e:for(me=null,ve=t;;){if(ve.tag===5){if(me===null){me=ve;try{c=ve.stateNode,Q?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(D=ve.stateNode,F=ve.memoizedProps.style,M=F!=null&&F.hasOwnProperty("display")?F.display:null,D.style.display=Je("display",M))}catch(Ve){kt(t,t.return,Ve)}}}else if(ve.tag===6){if(me===null)try{ve.stateNode.nodeValue=Q?"":ve.memoizedProps}catch(Ve){kt(t,t.return,Ve)}}else if((ve.tag!==22&&ve.tag!==23||ve.memoizedState===null||ve===t)&&ve.child!==null){ve.child.return=ve,ve=ve.child;continue}if(ve===t)break e;for(;ve.sibling===null;){if(ve.return===null||ve.return===t)break e;me===ve&&(me=null),ve=ve.return}me===ve&&(me=null),ve.sibling.return=ve.return,ve=ve.sibling}}break;case 19:$n(i,t),ci(t),l&4&&tp(t);break;case 21:break;default:$n(i,t),ci(t)}}function ci(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Qh(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(Se(c,""),l.flags&=-33);var h=Jh(t);Ju(t,h,c);break;case 3:case 4:var M=l.stateNode.containerInfo,D=Jh(t);Qu(t,D,M);break;default:throw Error(n(161))}}catch(F){kt(t,t.return,F)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function D_(t,i,o){Be=t,ip(t)}function ip(t,i,o){for(var l=(t.mode&1)!==0;Be!==null;){var c=Be,h=c.child;if(c.tag===22&&l){var M=c.memoizedState!==null||Pa;if(!M){var D=c.alternate,F=D!==null&&D.memoizedState!==null||cn;D=Pa;var Q=cn;if(Pa=M,(cn=F)&&!Q)for(Be=c;Be!==null;)M=Be,F=M.child,M.tag===22&&M.memoizedState!==null?op(c):F!==null?(F.return=M,Be=F):op(c);for(;h!==null;)Be=h,ip(h),h=h.sibling;Be=c,Pa=D,cn=Q}rp(t)}else(c.subtreeFlags&8772)!==0&&h!==null?(h.return=c,Be=h):rp(t)}}function rp(t){for(;Be!==null;){var i=Be;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:cn||La(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!cn)if(o===null)l.componentDidMount();else{var c=i.elementType===i.type?o.memoizedProps:qn(i.type,o.memoizedProps);l.componentDidUpdate(c,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&sh(i,h,l);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}sh(i,M,o)}break;case 5:var D=i.stateNode;if(o===null&&i.flags&4){o=D;var F=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":F.autoFocus&&o.focus();break;case"img":F.src&&(o.src=F.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var Q=i.alternate;if(Q!==null){var me=Q.memoizedState;if(me!==null){var ve=me.dehydrated;ve!==null&&Js(ve)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}cn||i.flags&512&&Zu(i)}catch(pe){kt(i,i.return,pe)}}if(i===t){Be=null;break}if(o=i.sibling,o!==null){o.return=i.return,Be=o;break}Be=i.return}}function sp(t){for(;Be!==null;){var i=Be;if(i===t){Be=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Be=o;break}Be=i.return}}function op(t){for(;Be!==null;){var i=Be;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{La(4,i)}catch(F){kt(i,o,F)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var c=i.return;try{l.componentDidMount()}catch(F){kt(i,c,F)}}var h=i.return;try{Zu(i)}catch(F){kt(i,h,F)}break;case 5:var M=i.return;try{Zu(i)}catch(F){kt(i,M,F)}}}catch(F){kt(i,i.return,F)}if(i===t){Be=null;break}var D=i.sibling;if(D!==null){D.return=i.return,Be=D;break}Be=i.return}}var U_=Math.ceil,ba=U.ReactCurrentDispatcher,ec=U.ReactCurrentOwner,Hn=U.ReactCurrentBatchConfig,mt=0,Qt=null,Vt=null,sn=0,Un=0,ms=Ki(0),jt=0,Eo=null,Ar=0,Da=0,tc=0,To=null,yn=null,nc=0,gs=1/0,Ti=null,Ua=!1,ic=null,tr=null,Ia=!1,nr=null,Na=0,wo=0,rc=null,Fa=-1,Oa=0;function pn(){return(mt&6)!==0?Te():Fa!==-1?Fa:Fa=Te()}function ir(t){return(t.mode&1)===0?1:(mt&2)!==0&&sn!==0?sn&-sn:g_.transition!==null?(Oa===0&&(Oa=Kr()),Oa):(t=Et,t!==0||(t=window.event,t=t===void 0?16:ld(t.type)),t)}function Zn(t,i,o,l){if(50<wo)throw wo=0,rc=null,Error(n(185));Hi(t,o,l),((mt&2)===0||t!==Qt)&&(t===Qt&&((mt&2)===0&&(Da|=o),jt===4&&rr(t,sn)),Sn(t,l),o===1&&mt===0&&(i.mode&1)===0&&(gs=Te()+500,fa&&Zi()))}function Sn(t,i){var o=t.callbackNode;Ys(t,i);var l=Ct(t,t===Qt?sn:0);if(l===0)o!==null&&G(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&G(o),i===1)t.tag===0?m_(lp.bind(null,t)):Yd(lp.bind(null,t)),f_(function(){(mt&6)===0&&Zi()}),o=null;else{switch(ed(l)){case 1:o=Ke;break;case 4:o=Ze;break;case 16:o=We;break;case 536870912:o=wt;break;default:o=We}o=gp(o,ap.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function ap(t,i){if(Fa=-1,Oa=0,(mt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(_s()&&t.callbackNode!==o)return null;var l=Ct(t,t===Qt?sn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=ka(t,l);else{i=l;var c=mt;mt|=2;var h=cp();(Qt!==t||sn!==i)&&(Ti=null,gs=Te()+500,Cr(t,i));do try{F_();break}catch(D){up(t,D)}while(!0);Mu(),ba.current=h,mt=c,Vt!==null?i=0:(Qt=null,sn=0,i=jt)}if(i!==0){if(i===2&&(c=on(t),c!==0&&(l=c,i=sc(t,c))),i===1)throw o=Eo,Cr(t,0),rr(t,l),Sn(t,Te()),o;if(i===6)rr(t,l);else{if(c=t.current.alternate,(l&30)===0&&!I_(c)&&(i=ka(t,l),i===2&&(h=on(t),h!==0&&(l=h,i=sc(t,h))),i===1))throw o=Eo,Cr(t,0),rr(t,l),Sn(t,Te()),o;switch(t.finishedWork=c,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Pr(t,yn,Ti);break;case 3:if(rr(t,l),(l&130023424)===l&&(i=nc+500-Te(),10<i)){if(Ct(t,0)!==0)break;if(c=t.suspendedLanes,(c&l)!==l){pn(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=fu(Pr.bind(null,t,yn,Ti),i);break}Pr(t,yn,Ti);break;case 4:if(rr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,c=-1;0<l;){var M=31-Oe(l);h=1<<M,M=i[M],M>c&&(c=M),l&=~h}if(l=c,l=Te()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*U_(l/1960))-l,10<l){t.timeoutHandle=fu(Pr.bind(null,t,yn,Ti),l);break}Pr(t,yn,Ti);break;case 5:Pr(t,yn,Ti);break;default:throw Error(n(329))}}}return Sn(t,Te()),t.callbackNode===o?ap.bind(null,t):null}function sc(t,i){var o=To;return t.current.memoizedState.isDehydrated&&(Cr(t,i).flags|=256),t=ka(t,i),t!==2&&(i=yn,yn=o,i!==null&&oc(i)),t}function oc(t){yn===null?yn=t:yn.push.apply(yn,t)}function I_(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var c=o[l],h=c.getSnapshot;c=c.value;try{if(!jn(h(),c))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function rr(t,i){for(i&=~tc,i&=~Da,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-Oe(i),l=1<<o;t[o]=-1,i&=~l}}function lp(t){if((mt&6)!==0)throw Error(n(327));_s();var i=Ct(t,0);if((i&1)===0)return Sn(t,Te()),null;var o=ka(t,i);if(t.tag!==0&&o===2){var l=on(t);l!==0&&(i=l,o=sc(t,l))}if(o===1)throw o=Eo,Cr(t,0),rr(t,i),Sn(t,Te()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Pr(t,yn,Ti),Sn(t,Te()),null}function ac(t,i){var o=mt;mt|=1;try{return t(i)}finally{mt=o,mt===0&&(gs=Te()+500,fa&&Zi())}}function Rr(t){nr!==null&&nr.tag===0&&(mt&6)===0&&_s();var i=mt;mt|=1;var o=Hn.transition,l=Et;try{if(Hn.transition=null,Et=1,t)return t()}finally{Et=l,Hn.transition=o,mt=i,(mt&6)===0&&Zi()}}function lc(){Un=ms.current,bt(ms)}function Cr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,c_(o)),Vt!==null)for(o=Vt.return;o!==null;){var l=o;switch(_u(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&ua();break;case 3:ds(),bt(_n),bt(an),Lu();break;case 5:Cu(l);break;case 4:ds();break;case 13:bt(Ft);break;case 19:bt(Ft);break;case 10:Eu(l.type._context);break;case 22:case 23:lc()}o=o.return}if(Qt=t,Vt=t=sr(t.current,null),sn=Un=i,jt=0,Eo=null,tc=Da=Ar=0,yn=To=null,Er!==null){for(i=0;i<Er.length;i++)if(o=Er[i],l=o.interleaved,l!==null){o.interleaved=null;var c=l.next,h=o.pending;if(h!==null){var M=h.next;h.next=c,l.next=M}o.pending=l}Er=null}return t}function up(t,i){do{var o=Vt;try{if(Mu(),Sa.current=wa,Ma){for(var l=Ot.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}Ma=!1}if(wr=0,Zt=Xt=Ot=null,_o=!1,vo=0,ec.current=null,o===null||o.return===null){jt=1,Eo=i,Vt=null;break}e:{var h=t,M=o.return,D=o,F=i;if(i=sn,D.flags|=32768,F!==null&&typeof F=="object"&&typeof F.then=="function"){var Q=F,me=D,ve=me.tag;if((me.mode&1)===0&&(ve===0||ve===11||ve===15)){var pe=me.alternate;pe?(me.updateQueue=pe.updateQueue,me.memoizedState=pe.memoizedState,me.lanes=pe.lanes):(me.updateQueue=null,me.memoizedState=null)}var Ie=Ih(M);if(Ie!==null){Ie.flags&=-257,Nh(Ie,M,D,h,i),Ie.mode&1&&Uh(h,Q,i),i=Ie,F=Q;var ze=i.updateQueue;if(ze===null){var Ve=new Set;Ve.add(F),i.updateQueue=Ve}else ze.add(F);break e}else{if((i&1)===0){Uh(h,Q,i),uc();break e}F=Error(n(426))}}else if(It&&D.mode&1){var zt=Ih(M);if(zt!==null){(zt.flags&65536)===0&&(zt.flags|=256),Nh(zt,M,D,h,i),yu(hs(F,D));break e}}h=F=hs(F,D),jt!==4&&(jt=2),To===null?To=[h]:To.push(h),h=M;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var W=bh(h,F,i);rh(h,W);break e;case 1:D=F;var B=h.type,j=h.stateNode;if((h.flags&128)===0&&(typeof B.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(tr===null||!tr.has(j)))){h.flags|=65536,i&=-i,h.lanes|=i;var Me=Dh(h,D,i);rh(h,Me);break e}}h=h.return}while(h!==null)}dp(o)}catch(Xe){i=Xe,Vt===o&&o!==null&&(Vt=o=o.return);continue}break}while(!0)}function cp(){var t=ba.current;return ba.current=wa,t===null?wa:t}function uc(){(jt===0||jt===3||jt===2)&&(jt=4),Qt===null||(Ar&268435455)===0&&(Da&268435455)===0||rr(Qt,sn)}function ka(t,i){var o=mt;mt|=2;var l=cp();(Qt!==t||sn!==i)&&(Ti=null,Cr(t,i));do try{N_();break}catch(c){up(t,c)}while(!0);if(Mu(),mt=o,ba.current=l,Vt!==null)throw Error(n(261));return Qt=null,sn=0,jt}function N_(){for(;Vt!==null;)fp(Vt)}function F_(){for(;Vt!==null&&!Ee();)fp(Vt)}function fp(t){var i=mp(t.alternate,t,Un);t.memoizedProps=t.pendingProps,i===null?dp(t):Vt=i,ec.current=null}function dp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=C_(o,i,Un),o!==null){Vt=o;return}}else{if(o=P_(o,i),o!==null){o.flags&=32767,Vt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{jt=6,Vt=null;return}}if(i=i.sibling,i!==null){Vt=i;return}Vt=i=t}while(i!==null);jt===0&&(jt=5)}function Pr(t,i,o){var l=Et,c=Hn.transition;try{Hn.transition=null,Et=1,O_(t,i,o,l)}finally{Hn.transition=c,Et=l}return null}function O_(t,i,o,l){do _s();while(nr!==null);if((mt&6)!==0)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(_g(t,h),t===Qt&&(Vt=Qt=null,sn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Ia||(Ia=!0,gp(We,function(){return _s(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=Hn.transition,Hn.transition=null;var M=Et;Et=1;var D=mt;mt|=4,ec.current=null,b_(t,o),np(o,t),i_(uu),Ko=!!lu,uu=lu=null,t.current=o,D_(o),De(),mt=D,Et=M,Hn.transition=h}else t.current=o;if(Ia&&(Ia=!1,nr=t,Na=c),h=t.pendingLanes,h===0&&(tr=null),gt(o.stateNode),Sn(t,Te()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)c=i[o],l(c.value,{componentStack:c.stack,digest:c.digest});if(Ua)throw Ua=!1,t=ic,ic=null,t;return(Na&1)!==0&&t.tag!==0&&_s(),h=t.pendingLanes,(h&1)!==0?t===rc?wo++:(wo=0,rc=t):wo=0,Zi(),null}function _s(){if(nr!==null){var t=ed(Na),i=Hn.transition,o=Et;try{if(Hn.transition=null,Et=16>t?16:t,nr===null)var l=!1;else{if(t=nr,nr=null,Na=0,(mt&6)!==0)throw Error(n(331));var c=mt;for(mt|=4,Be=t.current;Be!==null;){var h=Be,M=h.child;if((Be.flags&16)!==0){var D=h.deletions;if(D!==null){for(var F=0;F<D.length;F++){var Q=D[F];for(Be=Q;Be!==null;){var me=Be;switch(me.tag){case 0:case 11:case 15:Mo(8,me,h)}var ve=me.child;if(ve!==null)ve.return=me,Be=ve;else for(;Be!==null;){me=Be;var pe=me.sibling,Ie=me.return;if(Zh(me),me===Q){Be=null;break}if(pe!==null){pe.return=Ie,Be=pe;break}Be=Ie}}}var ze=h.alternate;if(ze!==null){var Ve=ze.child;if(Ve!==null){ze.child=null;do{var zt=Ve.sibling;Ve.sibling=null,Ve=zt}while(Ve!==null)}}Be=h}}if((h.subtreeFlags&2064)!==0&&M!==null)M.return=h,Be=M;else e:for(;Be!==null;){if(h=Be,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Mo(9,h,h.return)}var W=h.sibling;if(W!==null){W.return=h.return,Be=W;break e}Be=h.return}}var B=t.current;for(Be=B;Be!==null;){M=Be;var j=M.child;if((M.subtreeFlags&2064)!==0&&j!==null)j.return=M,Be=j;else e:for(M=B;Be!==null;){if(D=Be,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:La(9,D)}}catch(Xe){kt(D,D.return,Xe)}if(D===M){Be=null;break e}var Me=D.sibling;if(Me!==null){Me.return=D.return,Be=Me;break e}Be=D.return}}if(mt=c,Zi(),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(At,t)}catch{}l=!0}return l}finally{Et=o,Hn.transition=i}}return!1}function hp(t,i,o){i=hs(o,i),i=bh(t,i,1),t=Ji(t,i,1),i=pn(),t!==null&&(Hi(t,1,i),Sn(t,i))}function kt(t,i,o){if(t.tag===3)hp(t,t,o);else for(;i!==null;){if(i.tag===3){hp(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(tr===null||!tr.has(l))){t=hs(o,t),t=Dh(i,t,1),i=Ji(i,t,1),t=pn(),i!==null&&(Hi(i,1,t),Sn(i,t));break}}i=i.return}}function k_(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=pn(),t.pingedLanes|=t.suspendedLanes&o,Qt===t&&(sn&o)===o&&(jt===4||jt===3&&(sn&130023424)===sn&&500>Te()-nc?Cr(t,0):tc|=o),Sn(t,i)}function pp(t,i){i===0&&((t.mode&1)===0?i=1:(i=$t,$t<<=1,($t&130023424)===0&&($t=4194304)));var o=pn();t=Si(t,i),t!==null&&(Hi(t,i,o),Sn(t,o))}function B_(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),pp(t,o)}function z_(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),pp(t,o)}var mp;mp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||_n.current)xn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return xn=!1,R_(t,i,o);xn=(t.flags&131072)!==0}else xn=!1,It&&(i.flags&1048576)!==0&&qd(i,ha,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Ca(t,i),t=i.pendingProps;var c=ss(i,an.current);fs(i,o),c=Uu(null,i,l,t,c,o);var h=Iu();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,vn(l)?(h=!0,ca(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,Au(i),c.updater=Aa,i.stateNode=c,c._reactInternals=i,zu(i,l,t,o),i=Wu(null,i,l,!0,h,o)):(i.tag=0,It&&h&&gu(i),hn(null,i,c,o),i=i.child),i;case 16:l=i.elementType;e:{switch(Ca(t,i),t=i.pendingProps,c=l._init,l=c(l._payload),i.type=l,c=i.tag=V_(l),t=qn(l,t),c){case 0:i=Gu(null,i,l,t,o);break e;case 1:i=Hh(null,i,l,t,o);break e;case 11:i=Fh(null,i,l,t,o);break e;case 14:i=Oh(null,i,l,qn(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:qn(l,c),Gu(t,i,l,c,o);case 1:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:qn(l,c),Hh(t,i,l,c,o);case 3:e:{if(Vh(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,c=h.element,ih(t,i),xa(i,l,null,o);var M=i.memoizedState;if(l=M.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=hs(Error(n(423)),i),i=Gh(t,i,l,o,c);break e}else if(l!==c){c=hs(Error(n(424)),i),i=Gh(t,i,l,o,c);break e}else for(Dn=qi(i.stateNode.containerInfo.firstChild),bn=i,It=!0,Yn=null,o=th(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ls(),l===c){i=Ei(t,i,o);break e}hn(t,i,l,o)}i=i.child}return i;case 5:return oh(i),t===null&&xu(i),l=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,M=c.children,cu(l,c)?M=null:h!==null&&cu(l,h)&&(i.flags|=32),zh(t,i),hn(t,i,M,o),i.child;case 6:return t===null&&xu(i),null;case 13:return Wh(t,i,o);case 4:return Ru(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=us(i,null,l,o):hn(t,i,l,o),i.child;case 11:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:qn(l,c),Fh(t,i,l,c,o);case 7:return hn(t,i,i.pendingProps,o),i.child;case 8:return hn(t,i,i.pendingProps.children,o),i.child;case 12:return hn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,c=i.pendingProps,h=i.memoizedProps,M=c.value,Pt(ga,l._currentValue),l._currentValue=M,h!==null)if(jn(h.value,M)){if(h.children===c.children&&!_n.current){i=Ei(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var D=h.dependencies;if(D!==null){M=h.child;for(var F=D.firstContext;F!==null;){if(F.context===l){if(h.tag===1){F=Mi(-1,o&-o),F.tag=2;var Q=h.updateQueue;if(Q!==null){Q=Q.shared;var me=Q.pending;me===null?F.next=F:(F.next=me.next,me.next=F),Q.pending=F}}h.lanes|=o,F=h.alternate,F!==null&&(F.lanes|=o),Tu(h.return,o,i),D.lanes|=o;break}F=F.next}}else if(h.tag===10)M=h.type===i.type?null:h.child;else if(h.tag===18){if(M=h.return,M===null)throw Error(n(341));M.lanes|=o,D=M.alternate,D!==null&&(D.lanes|=o),Tu(M,o,i),M=h.sibling}else M=h.child;if(M!==null)M.return=h;else for(M=h;M!==null;){if(M===i){M=null;break}if(h=M.sibling,h!==null){h.return=M.return,M=h;break}M=M.return}h=M}hn(t,i,c.children,o),i=i.child}return i;case 9:return c=i.type,l=i.pendingProps.children,fs(i,o),c=Bn(c),l=l(c),i.flags|=1,hn(t,i,l,o),i.child;case 14:return l=i.type,c=qn(l,i.pendingProps),c=qn(l.type,c),Oh(t,i,l,c,o);case 15:return kh(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:qn(l,c),Ca(t,i),i.tag=1,vn(l)?(t=!0,ca(i)):t=!1,fs(i,o),Ph(i,l,c),zu(i,l,c,o),Wu(null,i,l,!0,t,o);case 19:return jh(t,i,o);case 22:return Bh(t,i,o)}throw Error(n(156,i.tag))};function gp(t,i){return Z(t,i)}function H_(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(t,i,o,l){return new H_(t,i,o,l)}function cc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function V_(t){if(typeof t=="function")return cc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===re)return 11;if(t===he)return 14}return 2}function sr(t,i){var o=t.alternate;return o===null?(o=Vn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Ba(t,i,o,l,c,h){var M=2;if(l=t,typeof t=="function")cc(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case N:return Lr(o.children,c,h,i);case Y:M=8,c|=8;break;case xe:return t=Vn(12,o,i,c|2),t.elementType=xe,t.lanes=h,t;case te:return t=Vn(13,o,i,c),t.elementType=te,t.lanes=h,t;case le:return t=Vn(19,o,i,c),t.elementType=le,t.lanes=h,t;case oe:return za(o,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case E:M=10;break e;case C:M=9;break e;case re:M=11;break e;case he:M=14;break e;case ne:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Vn(M,o,i,c),i.elementType=t,i.type=l,i.lanes=h,i}function Lr(t,i,o,l){return t=Vn(7,t,l,i),t.lanes=o,t}function za(t,i,o,l){return t=Vn(22,t,l,i),t.elementType=oe,t.lanes=o,t.stateNode={isHidden:!1},t}function fc(t,i,o){return t=Vn(6,t,null,i),t.lanes=o,t}function dc(t,i,o){return i=Vn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function G_(t,i,o,l,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qs(0),this.expirationTimes=qs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qs(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function hc(t,i,o,l,c,h,M,D,F){return t=new G_(t,i,o,D,F),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Vn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Au(h),t}function W_(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function _p(t){if(!t)return $i;t=t._reactInternals;e:{if(mi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(vn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(vn(o))return Xd(t,o,i)}return i}function vp(t,i,o,l,c,h,M,D,F){return t=hc(o,l,!0,t,c,h,M,D,F),t.context=_p(null),o=t.current,l=pn(),c=ir(o),h=Mi(l,c),h.callback=i??null,Ji(o,h,c),t.current.lanes=c,Hi(t,c,l),Sn(t,l),t}function Ha(t,i,o,l){var c=i.current,h=pn(),M=ir(c);return o=_p(o),i.context===null?i.context=o:i.pendingContext=o,i=Mi(h,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=Ji(c,i,M),t!==null&&(Zn(t,c,M,h),va(t,c,M)),M}function Va(t){return t=t.current,t.child?(t.child.tag===5,t.child.stateNode):null}function xp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function pc(t,i){xp(t,i),(t=t.alternate)&&xp(t,i)}function X_(){return null}var yp=typeof reportError=="function"?reportError:function(t){console.error(t)};function mc(t){this._internalRoot=t}Ga.prototype.render=mc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Ha(t,i,null,null)},Ga.prototype.unmount=mc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Rr(function(){Ha(null,t,null,null)}),i[_i]=null}};function Ga(t){this._internalRoot=t}Ga.prototype.unstable_scheduleHydration=function(t){if(t){var i=id();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Xi.length&&i!==0&&i<Xi[o].priority;o++);Xi.splice(o,0,t),o===0&&od(t)}};function gc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Wa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Sp(){}function j_(t,i,o,l,c){if(c){if(typeof l=="function"){var h=l;l=function(){var Q=Va(M);h.call(Q)}}var M=vp(i,l,t,0,null,!1,!1,"",Sp);return t._reactRootContainer=M,t[_i]=M.current,lo(t.nodeType===8?t.parentNode:t),Rr(),M}for(;c=t.lastChild;)t.removeChild(c);if(typeof l=="function"){var D=l;l=function(){var Q=Va(F);D.call(Q)}}var F=hc(t,0,!1,null,null,!1,!1,"",Sp);return t._reactRootContainer=F,t[_i]=F.current,lo(t.nodeType===8?t.parentNode:t),Rr(function(){Ha(i,F,o,l)}),F}function Xa(t,i,o,l,c){var h=o._reactRootContainer;if(h){var M=h;if(typeof c=="function"){var D=c;c=function(){var F=Va(M);D.call(F)}}Ha(i,M,t,c)}else M=j_(o,i,t,c,l);return Va(M)}td=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=gi(i.pendingLanes);o!==0&&(zl(i,o|1),Sn(i,Te()),(mt&6)===0&&(gs=Te()+500,Zi()))}break;case 13:Rr(function(){var l=Si(t,1);if(l!==null){var c=pn();Zn(l,t,1,c)}}),pc(t,1)}},Hl=function(t){if(t.tag===13){var i=Si(t,134217728);if(i!==null){var o=pn();Zn(i,t,134217728,o)}pc(t,134217728)}},nd=function(t){if(t.tag===13){var i=ir(t),o=Si(t,i);if(o!==null){var l=pn();Zn(o,t,i,l)}pc(t,i)}},id=function(){return Et},rd=function(t,i){var o=Et;try{return Et=t,i()}finally{Et=o}},se=function(t,i,o){switch(i){case"input":if($e(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var c=la(l);if(!c)throw Error(n(90));lt(l),$e(l,c)}}}break;case"textarea":_e(t,o);break;case"select":i=o.value,i!=null&&T(t,!!o.multiple,i,!1)}},nn=ac,ht=Rr;var Y_={usingClientEntryPoint:!1,Events:[fo,is,la,ct,Nt,ac]},Ao={findFiberByHostInstance:xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},q_={bundleType:Ao.bundleType,version:Ao.version,rendererPackageName:Ao.rendererPackageName,rendererConfig:Ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:U.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=V(t),t===null?null:t.stateNode},findFiberByHostInstance:Ao.findFiberByHostInstance||X_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ja=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ja.isDisabled&&ja.supportsFiber)try{At=ja.inject(q_),Ut=ja}catch{}}return Mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y_,Mn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gc(i))throw Error(n(200));return W_(t,i,null,o)},Mn.createRoot=function(t,i){if(!gc(t))throw Error(n(299));var o=!1,l="",c=yp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=hc(t,1,!1,null,null,o,!1,l,c),t[_i]=i.current,lo(t.nodeType===8?t.parentNode:t),new mc(i)},Mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=V(i),t=t===null?null:t.stateNode,t},Mn.flushSync=function(t){return Rr(t)},Mn.hydrate=function(t,i,o){if(!Wa(i))throw Error(n(200));return Xa(null,t,i,!0,o)},Mn.hydrateRoot=function(t,i,o){if(!gc(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,c=!1,h="",M=yp;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=vp(i,null,t,1,o??null,c,!1,h,M),t[_i]=i.current,lo(t),l)for(t=0;t<l.length;t++)o=l[t],c=o._getVersion,c=c(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,c]:i.mutableSourceEagerHydrationData.push(o,c);return new Ga(i)},Mn.render=function(t,i,o){if(!Wa(i))throw Error(n(200));return Xa(null,t,i,!1,o)},Mn.unmountComponentAtNode=function(t){if(!Wa(t))throw Error(n(40));return t._reactRootContainer?(Rr(function(){Xa(null,null,t,!1,function(){t._reactRootContainer=null,t[_i]=null})}),!0):!1},Mn.unstable_batchedUpdates=ac,Mn.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!Wa(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Xa(t,i,o,!1,l)},Mn.version="18.3.1-next-f1338f8080-20240426",Mn}var Pp;function Im(){if(Pp)return xc.exports;Pp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),xc.exports=tv(),xc.exports}var Lp;function nv(){if(Lp)return Ya;Lp=1;var s=Im();return Ya.createRoot=s.createRoot,Ya.hydrateRoot=s.hydrateRoot,Ya}var iv=nv();const rv=Dm(iv);function Nm(s){var e,n,r="";if(typeof s=="string"||typeof s=="number")r+=s;else if(typeof s=="object")if(Array.isArray(s)){var a=s.length;for(e=0;e<a;e++)s[e]&&(n=Nm(s[e]))&&(r&&(r+=" "),r+=n)}else for(n in s)s[n]&&(r&&(r+=" "),r+=n);return r}function sv(){for(var s,e,n=0,r="",a=arguments.length;n<a;n++)(s=arguments[n])&&(e=Nm(s))&&(r&&(r+=" "),r+=e);return r}const Gr=(...s)=>sv(...s),vs=({children:s,variant:e="primary",className:n,...r})=>{const a="px-6 py-3 rounded-neo-md transition-all duration-300 font-bold uppercase tracking-widest text-[10px]",u={primary:"bg-neo-accent text-neo-bg shadow-neon-primary hover:brightness-110 hover:scale-[1.02] border-none",secondary:"bg-neo-surface/40 text-neo-magenta border border-neo-magenta/30 backdrop-blur-md shadow-neon-magenta/20 hover:border-neo-magenta/60 hover:shadow-neon-magenta/40",outline:"bg-transparent text-neo-accent border border-neo-accent/50 hover:bg-neo-accent/10 hover:shadow-neon-cyan/30",ghost:"bg-transparent text-neo-muted hover:text-neo-accent hover:bg-white/5"};return He.jsx("button",{className:Gr(a,u[e],n),...r,children:s})},qa=({title:s,value:e,unit:n,trend:r,variant:a="cyan",glass:u=!0,className:f,children:d,...p})=>{const m=a==="cyan"?"shadow-neon-cyan/20 ring-1 ring-neo-accent/20":"shadow-neon-magenta/20 ring-1 ring-neo-magenta/20",v=a==="cyan"?"text-neo-accent":"text-neo-magenta";return He.jsxs("div",{className:Gr("relative overflow-hidden rounded-neo-lg p-6 transition-all duration-500 hover:scale-[1.02]",u&&"glass-surface",m,f),...p,children:[He.jsxs("div",{className:"flex flex-col gap-2",children:[s&&He.jsx("h3",{className:"text-[10px] uppercase tracking-[0.3em] text-neo-muted font-bold mb-1",children:s}),He.jsxs("div",{className:"flex items-baseline gap-2",children:[e&&He.jsx("span",{className:Gr("text-4xl font-mono font-bold tracking-tighter drop-shadow-[0_0_12px_rgba(0,255,255,0.3)]",v),children:e}),n&&He.jsx("span",{className:"text-xs font-mono text-neo-muted lowercase",children:n})]}),r&&He.jsxs("div",{className:Gr("flex items-center gap-1 text-[10px] font-mono font-bold mt-1",r.up?"text-neo-accent":"text-neo-magenta"),children:[He.jsx("span",{children:r.up?"↑":"↓"}),He.jsx("span",{children:r.value})]})]}),d]})},ov=Um.forwardRef(({glow:s=!0,className:e,...n},r)=>He.jsx("input",{ref:r,className:Gr("w-full rounded-xl px-4 py-3 text-cyan-50 placeholder:text-cyan-200/50 transition","bg-white/3 border border-cyan-300/35","backdrop-blur-[18px]",s&&"shadow-[0_0_18px_rgba(0,255,255,0.25)]",e),...n}));ov.displayName="NeoInput";const bp=({title:s,actions:e,subdued:n,className:r,children:a,...u})=>He.jsxs("section",{className:Gr("glass-surface overflow-hidden transition-all duration-500",n&&"bg-neo-surface/40 backdrop-blur-sm",r),...u,children:[He.jsxs("header",{className:"flex items-center justify-between px-6 py-5 border-b border-white/5 relative",children:[He.jsxs("div",{className:"flex items-center gap-4",children:[He.jsx("div",{className:"w-1 h-8 bg-neo-accent shadow-neon-cyan rounded-full"}),He.jsxs("div",{children:[He.jsx("h4",{className:"text-xs font-bold text-neo-text uppercase tracking-[0.3em]",children:s}),He.jsx("p",{className:"text-[9px] text-neo-muted uppercase tracking-[0.2em] font-medium",children:"Neural Monitor Unit"})]})]}),e&&He.jsx("div",{className:"flex items-center gap-2",children:e})]}),He.jsx("div",{className:"p-6",children:a})]});Im();const av=({columns:s={base:1,md:2,lg:3},gap:e="md",className:n,children:r,...a})=>{const u={sm:"gap-4",md:"gap-6",lg:"gap-8"},f=`grid-cols-${s.base??1}`,d=s.md?`md:grid-cols-${s.md}`:"",p=s.lg?`lg:grid-cols-${s.lg}`:"";return He.jsx("div",{className:Gr("grid",f,d,p,u[e],n),...a,children:r})};const Wf="169",lv=0,Dp=1,uv=2,Fm=1,cv=2,Li=3,gr=0,An=1,bi=2,pr=0,Is=1,Cl=2,Up=3,Ip=4,fv=5,Br=100,dv=101,hv=102,pv=103,mv=104,gv=200,_v=201,vv=202,xv=203,ef=204,tf=205,yv=206,Sv=207,Mv=208,Ev=209,Tv=210,wv=211,Av=212,Rv=213,Cv=214,nf=0,rf=1,sf=2,Os=3,of=4,af=5,lf=6,uf=7,Om=0,Pv=1,Lv=2,mr=0,bv=1,Dv=2,Uv=3,Iv=4,Nv=5,Fv=6,Ov=7,km=300,ks=301,Bs=302,cf=303,ff=304,Fl=306,df=1e3,Hr=1001,hf=1002,Wn=1003,kv=1004,Ka=1005,ni=1006,Mc=1007,Vr=1008,Fi=1009,Bm=1010,zm=1011,Fo=1012,Xf=1013,Wr=1014,Di=1015,Oo=1016,jf=1017,Yf=1018,zs=1020,Hm=35902,Vm=1021,Gm=1022,ri=1023,Wm=1024,Xm=1025,Ns=1026,Hs=1027,jm=1028,qf=1029,Ym=1030,Kf=1031,$f=1033,Sl=33776,Ml=33777,El=33778,Tl=33779,pf=35840,mf=35841,gf=35842,_f=35843,vf=36196,xf=37492,yf=37496,Sf=37808,Mf=37809,Ef=37810,Tf=37811,wf=37812,Af=37813,Rf=37814,Cf=37815,Pf=37816,Lf=37817,bf=37818,Df=37819,Uf=37820,If=37821,wl=36492,Nf=36494,Ff=36495,qm=36283,Of=36284,kf=36285,Bf=36286,Bv=3200,zv=3201,Hv=0,Vv=1,hr="",di="srgb",_r="srgb-linear",Zf="display-p3",Ol="display-p3-linear",Pl="linear",Dt="srgb",Ll="rec709",bl="p3",xs=7680,Np=519,Gv=512,Wv=513,Xv=514,Km=515,jv=516,Yv=517,qv=518,Kv=519,Fp=35044,Op="300 es",Ui=2e3,Dl=2001;class Gs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,f=a.length;u<f;u++)a[u].call(this,e);e.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ec=Math.PI/180,zf=180/Math.PI;function ko(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(fn[s&255]+fn[s>>8&255]+fn[s>>16&255]+fn[s>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[n&63|128]+fn[n>>8&255]+"-"+fn[n>>16&255]+fn[n>>24&255]+fn[r&255]+fn[r>>8&255]+fn[r>>16&255]+fn[r>>24&255]).toLowerCase()}function Tn(s,e,n){return Math.max(e,Math.min(n,s))}function $v(s,e){return(s%e+e)%e}function Tc(s,e,n){return(1-n)*s+n*e}function Co(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function En(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Rt{constructor(e=0,n=0){Rt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Tn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*a+e.x,this.y=u*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,n,r,a,u,f,d,p,m){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m)}set(e,n,r,a,u,f,d,p,m){const v=this.elements;return v[0]=e,v[1]=a,v[2]=d,v[3]=n,v[4]=u,v[5]=p,v[6]=r,v[7]=f,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[3],p=r[6],m=r[1],v=r[4],x=r[7],y=r[2],S=r[5],w=r[8],A=a[0],_=a[3],g=a[6],I=a[1],P=a[4],U=a[7],J=a[2],z=a[5],N=a[8];return u[0]=f*A+d*I+p*J,u[3]=f*_+d*P+p*z,u[6]=f*g+d*U+p*N,u[1]=m*A+v*I+x*J,u[4]=m*_+v*P+x*z,u[7]=m*g+v*U+x*N,u[2]=y*A+S*I+w*J,u[5]=y*_+S*P+w*z,u[8]=y*g+S*U+w*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],v=e[8];return n*f*v-n*d*m-r*u*v+r*d*p+a*u*m-a*f*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],v=e[8],x=v*f-d*m,y=d*p-v*u,S=m*u-f*p,w=n*x+r*y+a*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=x*A,e[1]=(a*m-v*r)*A,e[2]=(d*r-a*f)*A,e[3]=y*A,e[4]=(v*n-a*p)*A,e[5]=(a*u-d*n)*A,e[6]=S*A,e[7]=(r*p-m*n)*A,e[8]=(f*n-r*u)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,f,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*f+m*d)+f+e,-a*m,a*p,-a*(-m*f+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(wc.makeScale(e,n)),this}rotate(e){return this.premultiply(wc.makeRotation(-e)),this}translate(e,n){return this.premultiply(wc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wc=new st;function $m(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ul(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Zv(){const s=Ul("canvas");return s.style.display="block",s}const kp={};function Al(s){s in kp||(kp[s]=!0,console.warn(s))}function Qv(s,e,n){return new Promise(function(r,a){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}function Jv(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function e0(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Bp=new st().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zp=new st().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Po={[_r]:{transfer:Pl,primaries:Ll,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[di]:{transfer:Dt,primaries:Ll,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ol]:{transfer:Pl,primaries:bl,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(zp),fromReference:s=>s.applyMatrix3(Bp)},[Zf]:{transfer:Dt,primaries:bl,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(zp),fromReference:s=>s.applyMatrix3(Bp).convertLinearToSRGB()}},t0=new Set([_r,Ol]),Mt={enabled:!0,_workingColorSpace:_r,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!t0.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,n){if(this.enabled===!1||e===n||!e||!n)return s;const r=Po[e].toReference,a=Po[n].fromReference;return a(r(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Po[s].primaries},getTransfer:function(s){return s===hr?Pl:Po[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(Po[e].luminanceCoefficients)}};function Fs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ac(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ys;class n0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ys===void 0&&(ys=Ul("canvas")),ys.width=e.width,ys.height=e.height;const r=ys.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ys}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ul("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let f=0;f<u.length;f++)u[f]=Fs(u[f]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Fs(n[r]/255)*255):n[r]=Fs(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let i0=0;class Zm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=ko(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let f=0,d=a.length;f<d;f++)a[f].isDataTexture?u.push(Rc(a[f].image)):u.push(Rc(a[f]))}else u=Rc(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function Rc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?n0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let r0=0;class Rn extends Gs{constructor(e=Rn.DEFAULT_IMAGE,n=Rn.DEFAULT_MAPPING,r=Hr,a=Hr,u=ni,f=Vr,d=ri,p=Fi,m=Rn.DEFAULT_ANISOTROPY,v=hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=ko(),this.name="",this.source=new Zm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==km)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case df:e.x=e.x-Math.floor(e.x);break;case Hr:e.x=e.x<0?0:1;break;case hf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case df:e.y=e.y-Math.floor(e.y);break;case Hr:e.y=e.y<0?0:1;break;case hf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=km;Rn.DEFAULT_ANISOTROPY=1;class Ht{constructor(e=0,n=0,r=0,a=1){Ht.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*a+f[12]*u,this.y=f[1]*n+f[5]*r+f[9]*a+f[13]*u,this.z=f[2]*n+f[6]*r+f[10]*a+f[14]*u,this.w=f[3]*n+f[7]*r+f[11]*a+f[15]*u,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const p=e.elements,m=p[0],v=p[4],x=p[8],y=p[1],S=p[5],w=p[9],A=p[2],_=p[6],g=p[10];if(Math.abs(v-y)<.01&&Math.abs(x-A)<.01&&Math.abs(w-_)<.01){if(Math.abs(v+y)<.1&&Math.abs(x+A)<.1&&Math.abs(w+_)<.1&&Math.abs(m+S+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const P=(m+1)/2,U=(S+1)/2,J=(g+1)/2,z=(v+y)/4,N=(x+A)/4,Y=(w+_)/4;return P>U&&P>J?P<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(P),a=z/r,u=N/r):U>J?U<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(U),r=z/a,u=Y/a):J<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(J),r=N/u,a=Y/u),this.set(r,a,u,n),this}let I=Math.sqrt((_-w)*(_-w)+(x-A)*(x-A)+(y-v)*(y-v));return Math.abs(I)<.001&&(I=1),this.x=(_-w)/I,this.y=(x-A)/I,this.z=(y-v)/I,this.w=Math.acos((m+S+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class s0 extends Gs{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ht(0,0,e,n),this.scissorTest=!1,this.viewport=new Ht(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new Rn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Zm(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xr extends s0{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Qm extends Rn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class o0 extends Rn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bo{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,f,d){let p=r[a+0],m=r[a+1],v=r[a+2],x=r[a+3];const y=u[f+0],S=u[f+1],w=u[f+2],A=u[f+3];if(d===0){e[n+0]=p,e[n+1]=m,e[n+2]=v,e[n+3]=x;return}if(d===1){e[n+0]=y,e[n+1]=S,e[n+2]=w,e[n+3]=A;return}if(x!==A||p!==y||m!==S||v!==w){let _=1-d;const g=p*y+m*S+v*w+x*A,I=g>=0?1:-1,P=1-g*g;if(P>Number.EPSILON){const J=Math.sqrt(P),z=Math.atan2(J,g*I);_=Math.sin(_*z)/J,d=Math.sin(d*z)/J}const U=d*I;if(p=p*_+y*U,m=m*_+S*U,v=v*_+w*U,x=x*_+A*U,_===1-d){const J=1/Math.sqrt(p*p+m*m+v*v+x*x);p*=J,m*=J,v*=J,x*=J}}e[n]=p,e[n+1]=m,e[n+2]=v,e[n+3]=x}static multiplyQuaternionsFlat(e,n,r,a,u,f){const d=r[a],p=r[a+1],m=r[a+2],v=r[a+3],x=u[f],y=u[f+1],S=u[f+2],w=u[f+3];return e[n]=d*w+v*x+p*S-m*y,e[n+1]=p*w+v*y+m*x-d*S,e[n+2]=m*w+v*S+d*y-p*x,e[n+3]=v*w-d*x-p*y-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(r/2),v=d(a/2),x=d(u/2),y=p(r/2),S=p(a/2),w=p(u/2);switch(f){case"XYZ":this._x=y*v*x+m*S*w,this._y=m*S*x-y*v*w,this._z=m*v*w+y*S*x,this._w=m*v*x-y*S*w;break;case"YXZ":this._x=y*v*x+m*S*w,this._y=m*S*x-y*v*w,this._z=m*v*w-y*S*x,this._w=m*v*x+y*S*w;break;case"ZXY":this._x=y*v*x-m*S*w,this._y=m*S*x+y*v*w,this._z=m*v*w+y*S*x,this._w=m*v*x-y*S*w;break;case"ZYX":this._x=y*v*x-m*S*w,this._y=m*S*x+y*v*w,this._z=m*v*w-y*S*x,this._w=m*v*x+y*S*w;break;case"YZX":this._x=y*v*x+m*S*w,this._y=m*S*x+y*v*w,this._z=m*v*w-y*S*x,this._w=m*v*x-y*S*w;break;case"XZY":this._x=y*v*x-m*S*w,this._y=m*S*x-y*v*w,this._z=m*v*w+y*S*x,this._w=m*v*x+y*S*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],f=n[1],d=n[5],p=n[9],m=n[2],v=n[6],x=n[10],y=r+d+x;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(v-p)*S,this._y=(u-m)*S,this._z=(f-a)*S}else if(r>d&&r>x){const S=2*Math.sqrt(1+r-d-x);this._w=(v-p)/S,this._x=.25*S,this._y=(a+f)/S,this._z=(u+m)/S}else if(d>x){const S=2*Math.sqrt(1+d-r-x);this._w=(u-m)/S,this._x=(a+f)/S,this._y=.25*S,this._z=(p+v)/S}else{const S=2*Math.sqrt(1+x-r-d);this._w=(f-a)/S,this._x=(u+m)/S,this._y=(p+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,f=e._w,d=n._x,p=n._y,m=n._z,v=n._w;return this._x=r*v+f*d+a*m-u*p,this._y=a*v+f*p+u*d-r*m,this._z=u*v+f*m+r*p-a*d,this._w=f*v-r*d-a*p-u*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,f=this._w;let d=f*e._w+r*e._x+a*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=a,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-n;return this._w=S*f+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*u+n*this._z,this.normalize(),this}const m=Math.sqrt(p),v=Math.atan2(m,d),x=Math.sin((1-n)*v)/m,y=Math.sin(n*v)/m;return this._w=f*x+this._w*y,this._x=r*x+this._x*y,this._y=a*x+this._y*y,this._z=u*x+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(e=0,n=0,r=0){ee.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Hp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Hp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,f=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*f,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*f,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*a-d*r),v=2*(d*n-u*a),x=2*(u*r-f*n);return this.x=n+p*m+f*x-d*v,this.y=r+p*v+d*m-u*x,this.z=a+p*x+u*v-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,f=n.x,d=n.y,p=n.z;return this.x=a*p-u*d,this.y=u*f-r*p,this.z=r*d-a*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Cc.copy(this).projectOnVector(e),this.sub(Cc)}reflect(e){return this.sub(Cc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Tn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cc=new ee,Hp=new Bo;class zo{constructor(e=new ee(1/0,1/0,1/0),n=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Qn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Qn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Qn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,Qn):Qn.fromBufferAttribute(u,f),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$a.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),$a.copy(r.boundingBox)),$a.applyMatrix4(e.matrixWorld),this.union($a)}const a=e.children;for(let u=0,f=a.length;u<f;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lo),Za.subVectors(this.max,Lo),Ss.subVectors(e.a,Lo),Ms.subVectors(e.b,Lo),Es.subVectors(e.c,Lo),ar.subVectors(Ms,Ss),lr.subVectors(Es,Ms),br.subVectors(Ss,Es);let n=[0,-ar.z,ar.y,0,-lr.z,lr.y,0,-br.z,br.y,ar.z,0,-ar.x,lr.z,0,-lr.x,br.z,0,-br.x,-ar.y,ar.x,0,-lr.y,lr.x,0,-br.y,br.x,0];return!Pc(n,Ss,Ms,Es,Za)||(n=[1,0,0,0,1,0,0,0,1],!Pc(n,Ss,Ms,Es,Za))?!1:(Qa.crossVectors(ar,lr),n=[Qa.x,Qa.y,Qa.z],Pc(n,Ss,Ms,Es,Za))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wi=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],Qn=new ee,$a=new zo,Ss=new ee,Ms=new ee,Es=new ee,ar=new ee,lr=new ee,br=new ee,Lo=new ee,Za=new ee,Qa=new ee,Dr=new ee;function Pc(s,e,n,r,a){for(let u=0,f=s.length-3;u<=f;u+=3){Dr.fromArray(s,u);const d=a.x*Math.abs(Dr.x)+a.y*Math.abs(Dr.y)+a.z*Math.abs(Dr.z),p=e.dot(Dr),m=n.dot(Dr),v=r.dot(Dr);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>d)return!1}return!0}const a0=new zo,bo=new ee,Lc=new ee;class Ho{constructor(e=new ee,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):a0.setFromPoints(e).getCenter(r);let a=0;for(let u=0,f=e.length;u<f;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bo.subVectors(e,this.center);const n=bo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(bo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bo.copy(e.center).add(Lc)),this.expandByPoint(bo.copy(e.center).sub(Lc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ai=new ee,bc=new ee,Ja=new ee,ur=new ee,Dc=new ee,el=new ee,Uc=new ee;class Qf{constructor(e=new ee,n=new ee(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ai.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,n),Ai.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){bc.copy(e).add(n).multiplyScalar(.5),Ja.copy(n).sub(e).normalize(),ur.copy(this.origin).sub(bc);const u=e.distanceTo(n)*.5,f=-this.direction.dot(Ja),d=ur.dot(this.direction),p=-ur.dot(Ja),m=ur.lengthSq(),v=Math.abs(1-f*f);let x,y,S,w;if(v>0)if(x=f*p-d,y=f*d-p,w=u*v,x>=0)if(y>=-w)if(y<=w){const A=1/v;x*=A,y*=A,S=x*(x+f*y+2*d)+y*(f*x+y+2*p)+m}else y=u,x=Math.max(0,-(f*y+d)),S=-x*x+y*(y+2*p)+m;else y=-u,x=Math.max(0,-(f*y+d)),S=-x*x+y*(y+2*p)+m;else y<=-w?(x=Math.max(0,-(-f*u+d)),y=x>0?-u:Math.min(Math.max(-u,-p),u),S=-x*x+y*(y+2*p)+m):y<=w?(x=0,y=Math.min(Math.max(-u,-p),u),S=y*(y+2*p)+m):(x=Math.max(0,-(f*u+d)),y=x>0?u:Math.min(Math.max(-u,-p),u),S=-x*x+y*(y+2*p)+m);else y=f>0?-u:u,x=Math.max(0,-(f*y+d)),S=-x*x+y*(y+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,x),a&&a.copy(bc).addScaledVector(Ja,y),S}intersectSphere(e,n){Ai.subVectors(e.center,this.origin);const r=Ai.dot(this.direction),a=Ai.dot(Ai)-r*r,u=e.radius*e.radius;if(a>u)return null;const f=Math.sqrt(u-a),d=r-f,p=r+f;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,f,d,p;const m=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,y=this.origin;return m>=0?(r=(e.min.x-y.x)*m,a=(e.max.x-y.x)*m):(r=(e.max.x-y.x)*m,a=(e.min.x-y.x)*m),v>=0?(u=(e.min.y-y.y)*v,f=(e.max.y-y.y)*v):(u=(e.max.y-y.y)*v,f=(e.min.y-y.y)*v),r>f||u>a||((u>r||isNaN(r))&&(r=u),(f<a||isNaN(a))&&(a=f),x>=0?(d=(e.min.z-y.z)*x,p=(e.max.z-y.z)*x):(d=(e.max.z-y.z)*x,p=(e.min.z-y.z)*x),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,n,r,a,u){Dc.subVectors(n,e),el.subVectors(r,e),Uc.crossVectors(Dc,el);let f=this.direction.dot(Uc),d;if(f>0){if(a)return null;d=1}else if(f<0)d=-1,f=-f;else return null;ur.subVectors(this.origin,e);const p=d*this.direction.dot(el.crossVectors(ur,el));if(p<0)return null;const m=d*this.direction.dot(Dc.cross(ur));if(m<0||p+m>f)return null;const v=-d*ur.dot(Uc);return v<0?null:this.at(v/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,n,r,a,u,f,d,p,m,v,x,y,S,w,A,_){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m,v,x,y,S,w,A,_)}set(e,n,r,a,u,f,d,p,m,v,x,y,S,w,A,_){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=u,g[5]=f,g[9]=d,g[13]=p,g[2]=m,g[6]=v,g[10]=x,g[14]=y,g[3]=S,g[7]=w,g[11]=A,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Ts.setFromMatrixColumn(e,0).length(),u=1/Ts.setFromMatrixColumn(e,1).length(),f=1/Ts.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,f=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a),v=Math.cos(u),x=Math.sin(u);if(e.order==="XYZ"){const y=f*v,S=f*x,w=d*v,A=d*x;n[0]=p*v,n[4]=-p*x,n[8]=m,n[1]=S+w*m,n[5]=y-A*m,n[9]=-d*p,n[2]=A-y*m,n[6]=w+S*m,n[10]=f*p}else if(e.order==="YXZ"){const y=p*v,S=p*x,w=m*v,A=m*x;n[0]=y+A*d,n[4]=w*d-S,n[8]=f*m,n[1]=f*x,n[5]=f*v,n[9]=-d,n[2]=S*d-w,n[6]=A+y*d,n[10]=f*p}else if(e.order==="ZXY"){const y=p*v,S=p*x,w=m*v,A=m*x;n[0]=y-A*d,n[4]=-f*x,n[8]=w+S*d,n[1]=S+w*d,n[5]=f*v,n[9]=A-y*d,n[2]=-f*m,n[6]=d,n[10]=f*p}else if(e.order==="ZYX"){const y=f*v,S=f*x,w=d*v,A=d*x;n[0]=p*v,n[4]=w*m-S,n[8]=y*m+A,n[1]=p*x,n[5]=A*m+y,n[9]=S*m-w,n[2]=-m,n[6]=d*p,n[10]=f*p}else if(e.order==="YZX"){const y=f*p,S=f*m,w=d*p,A=d*m;n[0]=p*v,n[4]=A-y*x,n[8]=w*x+S,n[1]=x,n[5]=f*v,n[9]=-d*v,n[2]=-m*v,n[6]=S*x+w,n[10]=y-A*x}else if(e.order==="XZY"){const y=f*p,S=f*m,w=d*p,A=d*m;n[0]=p*v,n[4]=-x,n[8]=m*v,n[1]=y*x+A,n[5]=f*v,n[9]=S*x-w,n[2]=w*x-S,n[6]=d*v,n[10]=A*x+y}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(l0,e,u0)}lookAt(e,n,r){const a=this.elements;return In.subVectors(e,n),In.lengthSq()===0&&(In.z=1),In.normalize(),cr.crossVectors(r,In),cr.lengthSq()===0&&(Math.abs(r.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),cr.crossVectors(r,In)),cr.normalize(),tl.crossVectors(In,cr),a[0]=cr.x,a[4]=tl.x,a[8]=In.x,a[1]=cr.y,a[5]=tl.y,a[9]=In.y,a[2]=cr.z,a[6]=tl.z,a[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[4],p=r[8],m=r[12],v=r[1],x=r[5],y=r[9],S=r[13],w=r[2],A=r[6],_=r[10],g=r[14],I=r[3],P=r[7],U=r[11],J=r[15],z=a[0],N=a[4],Y=a[8],xe=a[12],E=a[1],C=a[5],re=a[9],te=a[13],le=a[2],he=a[6],ne=a[10],oe=a[14],k=a[3],ue=a[7],ie=a[11],b=a[15];return u[0]=f*z+d*E+p*le+m*k,u[4]=f*N+d*C+p*he+m*ue,u[8]=f*Y+d*re+p*ne+m*ie,u[12]=f*xe+d*te+p*oe+m*b,u[1]=v*z+x*E+y*le+S*k,u[5]=v*N+x*C+y*he+S*ue,u[9]=v*Y+x*re+y*ne+S*ie,u[13]=v*xe+x*te+y*oe+S*b,u[2]=w*z+A*E+_*le+g*k,u[6]=w*N+A*C+_*he+g*ue,u[10]=w*Y+A*re+_*ne+g*ie,u[14]=w*xe+A*te+_*oe+g*b,u[3]=I*z+P*E+U*le+J*k,u[7]=I*N+P*C+U*he+J*ue,u[11]=I*Y+P*re+U*ne+J*ie,u[15]=I*xe+P*te+U*oe+J*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],f=e[1],d=e[5],p=e[9],m=e[13],v=e[2],x=e[6],y=e[10],S=e[14],w=e[3],A=e[7],_=e[11],g=e[15];return w*(+u*p*x-a*m*x-u*d*y+r*m*y+a*d*S-r*p*S)+A*(+n*p*S-n*m*y+u*f*y-a*f*S+a*m*v-u*p*v)+_*(+n*m*x-n*d*S-u*f*x+r*f*S+u*d*v-r*m*v)+g*(-a*d*v-n*p*x+n*d*y+a*f*x-r*f*y+r*p*v)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],v=e[8],x=e[9],y=e[10],S=e[11],w=e[12],A=e[13],_=e[14],g=e[15],I=x*_*m-A*y*m+A*p*S-d*_*S-x*p*g+d*y*g,P=w*y*m-v*_*m-w*p*S+f*_*S+v*p*g-f*y*g,U=v*A*m-w*x*m+w*d*S-f*A*S-v*d*g+f*x*g,J=w*x*p-v*A*p-w*d*y+f*A*y+v*d*_-f*x*_,z=n*I+r*P+a*U+u*J;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/z;return e[0]=I*N,e[1]=(A*y*u-x*_*u-A*a*S+r*_*S+x*a*g-r*y*g)*N,e[2]=(d*_*u-A*p*u+A*a*m-r*_*m-d*a*g+r*p*g)*N,e[3]=(x*p*u-d*y*u-x*a*m+r*y*m+d*a*S-r*p*S)*N,e[4]=P*N,e[5]=(v*_*u-w*y*u+w*a*S-n*_*S-v*a*g+n*y*g)*N,e[6]=(w*p*u-f*_*u-w*a*m+n*_*m+f*a*g-n*p*g)*N,e[7]=(f*y*u-v*p*u+v*a*m-n*y*m-f*a*S+n*p*S)*N,e[8]=U*N,e[9]=(w*x*u-v*A*u-w*r*S+n*A*S+v*r*g-n*x*g)*N,e[10]=(f*A*u-w*d*u+w*r*m-n*A*m-f*r*g+n*d*g)*N,e[11]=(v*d*u-f*x*u-v*r*m+n*x*m+f*r*S-n*d*S)*N,e[12]=J*N,e[13]=(v*A*a-w*x*a+w*r*y-n*A*y-v*r*_+n*x*_)*N,e[14]=(w*d*a-f*A*a-w*r*p+n*A*p+f*r*_-n*d*_)*N,e[15]=(f*x*a-v*d*a+v*r*p-n*x*p-f*r*y+n*d*y)*N,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,f=e.x,d=e.y,p=e.z,m=u*f,v=u*d;return this.set(m*f+r,m*d-a*p,m*p+a*d,0,m*d+a*p,v*d+r,v*p-a*f,0,m*p-a*d,v*p+a*f,u*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,f){return this.set(1,r,u,0,e,1,f,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,f=n._y,d=n._z,p=n._w,m=u+u,v=f+f,x=d+d,y=u*m,S=u*v,w=u*x,A=f*v,_=f*x,g=d*x,I=p*m,P=p*v,U=p*x,J=r.x,z=r.y,N=r.z;return a[0]=(1-(A+g))*J,a[1]=(S+U)*J,a[2]=(w-P)*J,a[3]=0,a[4]=(S-U)*z,a[5]=(1-(y+g))*z,a[6]=(_+I)*z,a[7]=0,a[8]=(w+P)*N,a[9]=(_-I)*N,a[10]=(1-(y+A))*N,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=Ts.set(a[0],a[1],a[2]).length();const f=Ts.set(a[4],a[5],a[6]).length(),d=Ts.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],Jn.copy(this);const m=1/u,v=1/f,x=1/d;return Jn.elements[0]*=m,Jn.elements[1]*=m,Jn.elements[2]*=m,Jn.elements[4]*=v,Jn.elements[5]*=v,Jn.elements[6]*=v,Jn.elements[8]*=x,Jn.elements[9]*=x,Jn.elements[10]*=x,n.setFromRotationMatrix(Jn),r.x=u,r.y=f,r.z=d,this}makePerspective(e,n,r,a,u,f,d=Ui){const p=this.elements,m=2*u/(n-e),v=2*u/(r-a),x=(n+e)/(n-e),y=(r+a)/(r-a);let S,w;if(d===Ui)S=-(f+u)/(f-u),w=-2*f*u/(f-u);else if(d===Dl)S=-f/(f-u),w=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,u,f,d=Ui){const p=this.elements,m=1/(n-e),v=1/(r-a),x=1/(f-u),y=(n+e)*m,S=(r+a)*v;let w,A;if(d===Ui)w=(f+u)*x,A=-2*x;else if(d===Dl)w=u*x,A=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-y,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=A,p[14]=-w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ts=new ee,Jn=new Bt,l0=new ee(0,0,0),u0=new ee(1,1,1),cr=new ee,tl=new ee,In=new ee,Vp=new Bt,Gp=new Bo;class Oi{constructor(e=0,n=0,r=0,a=Oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],f=a[4],d=a[8],p=a[1],m=a[5],v=a[9],x=a[2],y=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(Tn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Tn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(Tn(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Tn(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(Tn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Tn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Vp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Gp.setFromEuler(this),this.setFromQuaternion(Gp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oi.DEFAULT_ORDER="XYZ";class Jm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let c0=0;const Wp=new ee,ws=new Bo,Ri=new Bt,nl=new ee,Do=new ee,f0=new ee,d0=new Bo,Xp=new ee(1,0,0),jp=new ee(0,1,0),Yp=new ee(0,0,1),qp={type:"added"},h0={type:"removed"},As={type:"childadded",child:null},Ic={type:"childremoved",child:null};class gn extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=ko(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const e=new ee,n=new Oi,r=new Bo,a=new ee(1,1,1);function u(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Bt},normalMatrix:{value:new st}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ws.setFromAxisAngle(e,n),this.quaternion.multiply(ws),this}rotateOnWorldAxis(e,n){return ws.setFromAxisAngle(e,n),this.quaternion.premultiply(ws),this}rotateX(e){return this.rotateOnAxis(Xp,e)}rotateY(e){return this.rotateOnAxis(jp,e)}rotateZ(e){return this.rotateOnAxis(Yp,e)}translateOnAxis(e,n){return Wp.copy(e).applyQuaternion(this.quaternion),this.position.add(Wp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Xp,e)}translateY(e){return this.translateOnAxis(jp,e)}translateZ(e){return this.translateOnAxis(Yp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?nl.copy(e):nl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(Do,nl,this.up):Ri.lookAt(nl,Do,this.up),this.quaternion.setFromRotationMatrix(Ri),a&&(Ri.extractRotation(a.matrixWorld),ws.setFromRotationMatrix(Ri),this.quaternion.premultiply(ws.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qp),As.child=e,this.dispatchEvent(As),As.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(h0),Ic.child=e,this.dispatchEvent(Ic),Ic.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qp),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,e,f0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,d0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const x=p[m];u(e.shapes,x)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));a.material=d}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(u(e.animations,p))}}if(n){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),v=f(e.images),x=f(e.shapes),y=f(e.skeletons),S=f(e.animations),w=f(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),x.length>0&&(r.shapes=x),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),w.length>0&&(r.nodes=w)}return r.object=a,r;function f(d){const p=[];for(const m in d){const v=d[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}gn.DEFAULT_UP=new ee(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ei=new ee,Ci=new ee,Nc=new ee,Pi=new ee,Rs=new ee,Cs=new ee,Kp=new ee,Fc=new ee,Oc=new ee,kc=new ee,Bc=new Ht,zc=new Ht,Hc=new Ht;class ii{constructor(e=new ee,n=new ee,r=new ee){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ei.subVectors(e,n),a.cross(ei);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){ei.subVectors(a,n),Ci.subVectors(r,n),Nc.subVectors(e,n);const f=ei.dot(ei),d=ei.dot(Ci),p=ei.dot(Nc),m=Ci.dot(Ci),v=Ci.dot(Nc),x=f*m-d*d;if(x===0)return u.set(0,0,0),null;const y=1/x,S=(m*p-d*v)*y,w=(f*v-d*p)*y;return u.set(1-S-w,w,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,n,r,a,u,f,d,p){return this.getBarycoord(e,n,r,a,Pi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Pi.x),p.addScaledVector(f,Pi.y),p.addScaledVector(d,Pi.z),p)}static getInterpolatedAttribute(e,n,r,a,u,f){return Bc.setScalar(0),zc.setScalar(0),Hc.setScalar(0),Bc.fromBufferAttribute(e,n),zc.fromBufferAttribute(e,r),Hc.fromBufferAttribute(e,a),f.setScalar(0),f.addScaledVector(Bc,u.x),f.addScaledVector(zc,u.y),f.addScaledVector(Hc,u.z),f}static isFrontFacing(e,n,r,a){return ei.subVectors(r,n),Ci.subVectors(e,n),ei.cross(Ci).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),ei.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ii.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return ii.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let f,d;Rs.subVectors(a,r),Cs.subVectors(u,r),Fc.subVectors(e,r);const p=Rs.dot(Fc),m=Cs.dot(Fc);if(p<=0&&m<=0)return n.copy(r);Oc.subVectors(e,a);const v=Rs.dot(Oc),x=Cs.dot(Oc);if(v>=0&&x<=v)return n.copy(a);const y=p*x-v*m;if(y<=0&&p>=0&&v<=0)return f=p/(p-v),n.copy(r).addScaledVector(Rs,f);kc.subVectors(e,u);const S=Rs.dot(kc),w=Cs.dot(kc);if(w>=0&&S<=w)return n.copy(u);const A=S*m-p*w;if(A<=0&&m>=0&&w<=0)return d=m/(m-w),n.copy(r).addScaledVector(Cs,d);const _=v*w-S*x;if(_<=0&&x-v>=0&&S-w>=0)return Kp.subVectors(u,a),d=(x-v)/(x-v+(S-w)),n.copy(a).addScaledVector(Kp,d);const g=1/(_+A+y);return f=A*g,d=y*g,n.copy(r).addScaledVector(Rs,f).addScaledVector(Cs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const eg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fr={h:0,s:0,l:0},il={h:0,s:0,l:0};function Vc(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class yt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Mt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Mt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Mt.workingColorSpace){if(e=$v(e,1),n=Tn(n,0,1),r=Tn(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,f=2*r-u;this.r=Vc(f,u,e+1/3),this.g=Vc(f,u,e),this.b=Vc(f,u,e-1/3)}return Mt.toWorkingColorSpace(this,a),this}setStyle(e,n=di){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=a[1],d=a[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=di){const r=eg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}copyLinearToSRGB(e){return this.r=Ac(e.r),this.g=Ac(e.g),this.b=Ac(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=di){return Mt.fromWorkingColorSpace(dn.copy(this),e),Math.round(Tn(dn.r*255,0,255))*65536+Math.round(Tn(dn.g*255,0,255))*256+Math.round(Tn(dn.b*255,0,255))}getHexString(e=di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Mt.workingColorSpace){Mt.fromWorkingColorSpace(dn.copy(this),n);const r=dn.r,a=dn.g,u=dn.b,f=Math.max(r,a,u),d=Math.min(r,a,u);let p,m;const v=(d+f)/2;if(d===f)p=0,m=0;else{const x=f-d;switch(m=v<=.5?x/(f+d):x/(2-f-d),f){case r:p=(a-u)/x+(a<u?6:0);break;case a:p=(u-r)/x+2;break;case u:p=(r-a)/x+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,n=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(dn.copy(this),n),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=di){Mt.fromWorkingColorSpace(dn.copy(this),e);const n=dn.r,r=dn.g,a=dn.b;return e!==di?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(fr),this.setHSL(fr.h+e,fr.s+n,fr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(fr),e.getHSL(il);const r=Tc(fr.h,il.h,n),a=Tc(fr.s,il.s,n),u=Tc(fr.l,il.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new yt;yt.NAMES=eg;let p0=0;class Ws extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=ko(),this.name="",this.type="Material",this.blending=Is,this.side=gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ef,this.blendDst=tf,this.blendEquation=Br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Np,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(r.blending=this.blending),this.side!==gr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ef&&(r.blendSrc=this.blendSrc),this.blendDst!==tf&&(r.blendDst=this.blendDst),this.blendEquation!==Br&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Np&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}if(n){const u=a(e.textures),f=a(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class tg extends Ws{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=Om,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new ee,rl=new Rt;class wn{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Fp,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)rl.fromBufferAttribute(this,n),rl.applyMatrix3(e),this.setXY(n,rl.x,rl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Gt.fromBufferAttribute(this,n),Gt.applyMatrix3(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Gt.fromBufferAttribute(this,n),Gt.applyMatrix4(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Gt.fromBufferAttribute(this,n),Gt.applyNormalMatrix(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Gt.fromBufferAttribute(this,n),Gt.transformDirection(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Co(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=En(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Co(n,this.array)),n}setX(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Co(n,this.array)),n}setY(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Co(n,this.array)),n}setZ(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Co(n,this.array)),n}setW(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),r=En(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),r=En(r,this.array),a=En(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),r=En(r,this.array),a=En(a,this.array),u=En(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fp&&(e.usage=this.usage),e}}class ng extends wn{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class ig extends wn{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Ni extends wn{constructor(e,n,r){super(new Float32Array(e),n,r)}}let m0=0;const Gn=new Bt,Gc=new gn,Ps=new ee,Nn=new zo,Uo=new zo,en=new ee;class si extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=ko(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($m(e)?ig:ng)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new st().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,n,r){return Gn.makeTranslation(e,n,r),this.applyMatrix4(Gn),this}scale(e,n,r){return Gn.makeScale(e,n,r),this.applyMatrix4(Gn),this}lookAt(e){return Gc.lookAt(e),Gc.updateMatrix(),this.applyMatrix4(Gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){const n=[];for(let r=0,a=e.length;r<a;r++){const u=e[r];n.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new Ni(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];Nn.setFromBufferAttribute(u),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ho);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const r=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),n)for(let u=0,f=n.length;u<f;u++){const d=n[u];Uo.setFromBufferAttribute(d),this.morphTargetsRelative?(en.addVectors(Nn.min,Uo.min),Nn.expandByPoint(en),en.addVectors(Nn.max,Uo.max),Nn.expandByPoint(en)):(Nn.expandByPoint(Uo.min),Nn.expandByPoint(Uo.max))}Nn.getCenter(r);let a=0;for(let u=0,f=e.count;u<f;u++)en.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(en));if(n)for(let u=0,f=n.length;u<f;u++){const d=n[u],p=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)en.fromBufferAttribute(d,m),p&&(Ps.fromBufferAttribute(e,m),en.add(Ps)),a=Math.max(a,r.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wn(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let Y=0;Y<r.count;Y++)d[Y]=new ee,p[Y]=new ee;const m=new ee,v=new ee,x=new ee,y=new Rt,S=new Rt,w=new Rt,A=new ee,_=new ee;function g(Y,xe,E){m.fromBufferAttribute(r,Y),v.fromBufferAttribute(r,xe),x.fromBufferAttribute(r,E),y.fromBufferAttribute(u,Y),S.fromBufferAttribute(u,xe),w.fromBufferAttribute(u,E),v.sub(m),x.sub(m),S.sub(y),w.sub(y);const C=1/(S.x*w.y-w.x*S.y);isFinite(C)&&(A.copy(v).multiplyScalar(w.y).addScaledVector(x,-S.y).multiplyScalar(C),_.copy(x).multiplyScalar(S.x).addScaledVector(v,-w.x).multiplyScalar(C),d[Y].add(A),d[xe].add(A),d[E].add(A),p[Y].add(_),p[xe].add(_),p[E].add(_))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let Y=0,xe=I.length;Y<xe;++Y){const E=I[Y],C=E.start,re=E.count;for(let te=C,le=C+re;te<le;te+=3)g(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const P=new ee,U=new ee,J=new ee,z=new ee;function N(Y){J.fromBufferAttribute(a,Y),z.copy(J);const xe=d[Y];P.copy(xe),P.sub(J.multiplyScalar(J.dot(xe))).normalize(),U.crossVectors(z,xe);const C=U.dot(p[Y])<0?-1:1;f.setXYZW(Y,P.x,P.y,P.z,C)}for(let Y=0,xe=I.length;Y<xe;++Y){const E=I[Y],C=E.start,re=E.count;for(let te=C,le=C+re;te<le;te+=3)N(e.getX(te+0)),N(e.getX(te+1)),N(e.getX(te+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new wn(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const a=new ee,u=new ee,f=new ee,d=new ee,p=new ee,m=new ee,v=new ee,x=new ee;if(e)for(let y=0,S=e.count;y<S;y+=3){const w=e.getX(y+0),A=e.getX(y+1),_=e.getX(y+2);a.fromBufferAttribute(n,w),u.fromBufferAttribute(n,A),f.fromBufferAttribute(n,_),v.subVectors(f,u),x.subVectors(a,u),v.cross(x),d.fromBufferAttribute(r,w),p.fromBufferAttribute(r,A),m.fromBufferAttribute(r,_),d.add(v),p.add(v),m.add(v),r.setXYZ(w,d.x,d.y,d.z),r.setXYZ(A,p.x,p.y,p.z),r.setXYZ(_,m.x,m.y,m.z)}else for(let y=0,S=n.count;y<S;y+=3)a.fromBufferAttribute(n,y+0),u.fromBufferAttribute(n,y+1),f.fromBufferAttribute(n,y+2),v.subVectors(f,u),x.subVectors(a,u),v.cross(x),r.setXYZ(y+0,v.x,v.y,v.z),r.setXYZ(y+1,v.x,v.y,v.z),r.setXYZ(y+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)en.fromBufferAttribute(e,n),en.normalize(),e.setXYZ(n,en.x,en.y,en.z)}toNonIndexed(){function e(d,p){const m=d.array,v=d.itemSize,x=d.normalized,y=new m.constructor(p.length*v);let S=0,w=0;for(let A=0,_=p.length;A<_;A++){d.isInterleavedBufferAttribute?S=p[A]*d.data.stride+d.offset:S=p[A]*v;for(let g=0;g<v;g++)y[w++]=m[S++]}return new wn(y,v,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new si,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,r);n.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let v=0,x=m.length;v<x;v++){const y=m[v],S=e(y,r);p.push(S)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let x=0,y=m.length;x<y;x++){const S=m[x];v.push(S.toJSON(e.data))}v.length>0&&(a[p]=v,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const v=a[m];this.setAttribute(m,v.clone(n))}const u=e.morphAttributes;for(const m in u){const v=[],x=u[m];for(let y=0,S=x.length;y<S;y++)v.push(x[y].clone(n));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,v=f.length;m<v;m++){const x=f[m];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $p=new Bt,Ur=new Qf,sl=new Ho,Zp=new ee,ol=new ee,al=new ee,ll=new ee,Wc=new ee,ul=new ee,Qp=new ee,cl=new ee;class Ii extends gn{constructor(e=new si,n=new tg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(u&&d){ul.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const v=d[p],x=u[p];v!==0&&(Wc.fromBufferAttribute(x,e),f?ul.addScaledVector(Wc,v):ul.addScaledVector(Wc.sub(n),v))}n.add(ul)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),sl.copy(r.boundingSphere),sl.applyMatrix4(u),Ur.copy(e.ray).recast(e.near),!(sl.containsPoint(Ur.origin)===!1&&(Ur.intersectSphere(sl,Zp)===null||Ur.origin.distanceToSquared(Zp)>(e.far-e.near)**2))&&($p.copy(u).invert(),Ur.copy(e.ray).applyMatrix4($p),!(r.boundingBox!==null&&Ur.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Ur)))}_computeIntersections(e,n,r){let a;const u=this.geometry,f=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,v=u.attributes.uv1,x=u.attributes.normal,y=u.groups,S=u.drawRange;if(d!==null)if(Array.isArray(f))for(let w=0,A=y.length;w<A;w++){const _=y[w],g=f[_.materialIndex],I=Math.max(_.start,S.start),P=Math.min(d.count,Math.min(_.start+_.count,S.start+S.count));for(let U=I,J=P;U<J;U+=3){const z=d.getX(U),N=d.getX(U+1),Y=d.getX(U+2);a=fl(this,g,e,r,m,v,x,z,N,Y),a&&(a.faceIndex=Math.floor(U/3),a.face.materialIndex=_.materialIndex,n.push(a))}}else{const w=Math.max(0,S.start),A=Math.min(d.count,S.start+S.count);for(let _=w,g=A;_<g;_+=3){const I=d.getX(_),P=d.getX(_+1),U=d.getX(_+2);a=fl(this,f,e,r,m,v,x,I,P,U),a&&(a.faceIndex=Math.floor(_/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(f))for(let w=0,A=y.length;w<A;w++){const _=y[w],g=f[_.materialIndex],I=Math.max(_.start,S.start),P=Math.min(p.count,Math.min(_.start+_.count,S.start+S.count));for(let U=I,J=P;U<J;U+=3){const z=U,N=U+1,Y=U+2;a=fl(this,g,e,r,m,v,x,z,N,Y),a&&(a.faceIndex=Math.floor(U/3),a.face.materialIndex=_.materialIndex,n.push(a))}}else{const w=Math.max(0,S.start),A=Math.min(p.count,S.start+S.count);for(let _=w,g=A;_<g;_+=3){const I=_,P=_+1,U=_+2;a=fl(this,f,e,r,m,v,x,I,P,U),a&&(a.faceIndex=Math.floor(_/3),n.push(a))}}}}function g0(s,e,n,r,a,u,f,d){let p;if(e.side===An?p=r.intersectTriangle(f,u,a,!0,d):p=r.intersectTriangle(a,u,f,e.side===gr,d),p===null)return null;cl.copy(d),cl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(cl);return m<n.near||m>n.far?null:{distance:m,point:cl.clone(),object:s}}function fl(s,e,n,r,a,u,f,d,p,m){s.getVertexPosition(d,ol),s.getVertexPosition(p,al),s.getVertexPosition(m,ll);const v=g0(s,e,n,r,ol,al,ll,Qp);if(v){const x=new ee;ii.getBarycoord(Qp,ol,al,ll,x),a&&(v.uv=ii.getInterpolatedAttribute(a,d,p,m,x,new Rt)),u&&(v.uv1=ii.getInterpolatedAttribute(u,d,p,m,x,new Rt)),f&&(v.normal=ii.getInterpolatedAttribute(f,d,p,m,x,new ee),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const y={a:d,b:p,c:m,normal:new ee,materialIndex:0};ii.getNormal(ol,al,ll,y.normal),v.face=y,v.barycoord=x}return v}class Vo extends si{constructor(e=1,n=1,r=1,a=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:f};const d=this;a=Math.floor(a),u=Math.floor(u),f=Math.floor(f);const p=[],m=[],v=[],x=[];let y=0,S=0;w("z","y","x",-1,-1,r,n,e,f,u,0),w("z","y","x",1,-1,r,n,-e,f,u,1),w("x","z","y",1,1,e,r,n,a,f,2),w("x","z","y",1,-1,e,r,-n,a,f,3),w("x","y","z",1,-1,e,n,r,a,u,4),w("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(p),this.setAttribute("position",new Ni(m,3)),this.setAttribute("normal",new Ni(v,3)),this.setAttribute("uv",new Ni(x,2));function w(A,_,g,I,P,U,J,z,N,Y,xe){const E=U/N,C=J/Y,re=U/2,te=J/2,le=z/2,he=N+1,ne=Y+1;let oe=0,k=0;const ue=new ee;for(let ie=0;ie<ne;ie++){const b=ie*C-te;for(let q=0;q<he;q++){const we=q*E-re;ue[A]=we*I,ue[_]=b*P,ue[g]=le,m.push(ue.x,ue.y,ue.z),ue[A]=0,ue[_]=0,ue[g]=z>0?1:-1,v.push(ue.x,ue.y,ue.z),x.push(q/N),x.push(1-ie/Y),oe+=1}}for(let ie=0;ie<Y;ie++)for(let b=0;b<N;b++){const q=y+b+he*ie,we=y+b+he*(ie+1),X=y+(b+1)+he*(ie+1),ae=y+(b+1)+he*ie;p.push(q,we,ae),p.push(we,X,ae),k+=6}d.addGroup(S,k,xe),S+=k,y+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vs(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function mn(s){const e={};for(let n=0;n<s.length;n++){const r=Vs(s[n]);for(const a in r)e[a]=r[a]}return e}function _0(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function rg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const v0={clone:Vs,merge:mn};var x0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,y0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends Ws{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=x0,this.fragmentShader=y0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=_0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?n.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[a]={type:"m4",value:f.toArray()}:n.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class sg extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=Ui}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const dr=new ee,Jp=new Rt,em=new Rt;class ti extends sg{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=zf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ec*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zf*2*Math.atan(Math.tan(Ec*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(dr.x,dr.y).multiplyScalar(-e/dr.z),dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(dr.x,dr.y).multiplyScalar(-e/dr.z)}getViewSize(e,n){return this.getViewBounds(e,Jp,em),n.subVectors(em,Jp)}setViewOffset(e,n,r,a,u,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ec*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;u+=f.offsetX*a/p,n-=f.offsetY*r/m,a*=f.width/p,r*=f.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ls=-90,bs=1;class S0 extends gn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ti(Ls,bs,e,n);a.layers=this.layers,this.add(a);const u=new ti(Ls,bs,e,n);u.layers=this.layers,this.add(u);const f=new ti(Ls,bs,e,n);f.layers=this.layers,this.add(f);const d=new ti(Ls,bs,e,n);d.layers=this.layers,this.add(d);const p=new ti(Ls,bs,e,n);p.layers=this.layers,this.add(p);const m=new ti(Ls,bs,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,f,d,p]=n;for(const m of n)this.remove(m);if(e===Ui)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Dl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,p,m,v]=this.children,x=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,f),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,a),e.render(n,v),e.setRenderTarget(x,y,S),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class og extends Rn{constructor(e,n,r,a,u,f,d,p,m,v){e=e!==void 0?e:[],n=n!==void 0?n:ks,super(e,n,r,a,u,f,d,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class M0 extends Xr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new og(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ni}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Vo(5,5,5),u=new ki({name:"CubemapFromEquirect",uniforms:Vs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:An,blending:pr});u.uniforms.tEquirect.value=n;const f=new Ii(a,u),d=n.minFilter;return n.minFilter===Vr&&(n.minFilter=ni),new S0(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n,r,a){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,a);e.setRenderTarget(u)}}const Xc=new ee,E0=new ee,T0=new st;class Or{constructor(e=new ee(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Xc.subVectors(r,n).cross(E0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Xc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||T0.getNormalMatrix(e),a=this.coplanarPoint(Xc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ir=new Ho,dl=new ee;class ag{constructor(e=new Or,n=new Or,r=new Or,a=new Or,u=new Or,f=new Or){this.planes=[e,n,r,a,u,f]}set(e,n,r,a,u,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(u),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Ui){const r=this.planes,a=e.elements,u=a[0],f=a[1],d=a[2],p=a[3],m=a[4],v=a[5],x=a[6],y=a[7],S=a[8],w=a[9],A=a[10],_=a[11],g=a[12],I=a[13],P=a[14],U=a[15];if(r[0].setComponents(p-u,y-m,_-S,U-g).normalize(),r[1].setComponents(p+u,y+m,_+S,U+g).normalize(),r[2].setComponents(p+f,y+v,_+w,U+I).normalize(),r[3].setComponents(p-f,y-v,_-w,U-I).normalize(),r[4].setComponents(p-d,y-x,_-A,U-P).normalize(),n===Ui)r[5].setComponents(p+d,y+x,_+A,U+P).normalize();else if(n===Dl)r[5].setComponents(d,x,A,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(e){return Ir.center.set(0,0,0),Ir.radius=.7071067811865476,Ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(dl.x=a.normal.x>0?e.max.x:e.min.x,dl.y=a.normal.y>0?e.max.y:e.min.y,dl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(dl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lg(){let s=null,e=!1,n=null,r=null;function a(u,f){n(u,f),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){s=u}}}function w0(s){const e=new WeakMap;function n(d,p){const m=d.array,v=d.usage,x=m.byteLength,y=s.createBuffer();s.bindBuffer(p,y),s.bufferData(p,m,v),d.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:x}}function r(d,p,m){const v=p.array,x=p.updateRanges;if(s.bindBuffer(m,d),x.length===0)s.bufferSubData(m,0,v);else{x.sort((S,w)=>S.start-w.start);let y=0;for(let S=1;S<x.length;S++){const w=x[y],A=x[S];A.start<=w.start+w.count+1?w.count=Math.max(w.count,A.start+A.count-w.start):(++y,x[y]=A)}x.length=y+1;for(let S=0,w=x.length;S<w;S++){const A=x[S];s.bufferSubData(m,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:a,remove:u,update:f}}class kl extends si{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,f=n/2,d=Math.floor(r),p=Math.floor(a),m=d+1,v=p+1,x=e/d,y=n/p,S=[],w=[],A=[],_=[];for(let g=0;g<v;g++){const I=g*y-f;for(let P=0;P<m;P++){const U=P*x-u;w.push(U,-I,0),A.push(0,0,1),_.push(P/d),_.push(1-g/p)}}for(let g=0;g<p;g++)for(let I=0;I<d;I++){const P=I+m*g,U=I+m*(g+1),J=I+1+m*(g+1),z=I+1+m*g;S.push(P,U,z),S.push(U,J,z)}this.setIndex(S),this.setAttribute("position",new Ni(w,3)),this.setAttribute("normal",new Ni(A,3)),this.setAttribute("uv",new Ni(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kl(e.width,e.height,e.widthSegments,e.heightSegments)}}var A0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,R0=`#ifdef USE_ALPHAHASH
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
#endif`,C0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,P0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,L0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,b0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,D0=`#ifdef USE_AOMAP
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
#endif`,U0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,I0=`#ifdef USE_BATCHING
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
#endif`,N0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,F0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,O0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,k0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,B0=`#ifdef USE_IRIDESCENCE
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
#endif`,z0=`#ifdef USE_BUMPMAP
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
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,X0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,j0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Y0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,q0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,K0=`#define PI 3.141592653589793
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
} // validated`,$0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Z0=`vec3 transformedNormal = objectNormal;
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
#endif`,Q0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,J0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ex=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nx="gl_FragColor = linearToOutputTexel( gl_FragColor );",ix=`
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
}`,rx=`#ifdef USE_ENVMAP
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
#endif`,sx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ox=`#ifdef USE_ENVMAP
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
#endif`,ax=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lx=`#ifdef USE_ENVMAP
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
#endif`,ux=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hx=`#ifdef USE_GRADIENTMAP
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
}`,px=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_x=`uniform bool receiveShadow;
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
#endif`,vx=`#ifdef USE_ENVMAP
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
#endif`,xx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ex=`PhysicalMaterial material;
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
#endif`,Tx=`struct PhysicalMaterial {
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
}`,wx=`
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
#endif`,Ax=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Px=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ux=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ix=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nx=`#if defined( USE_POINTS_UV )
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
#endif`,Fx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ox=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hx=`#ifdef USE_MORPHTARGETS
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
#endif`,Vx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qx=`#ifdef USE_NORMALMAP
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
#endif`,Kx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$x=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ey=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ty=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ny=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ry=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,oy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ay=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ly=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cy=`float getShadowMask() {
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
}`,fy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dy=`#ifdef USE_SKINNING
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
#endif`,hy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,py=`#ifdef USE_SKINNING
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
#endif`,my=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_y=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xy=`#ifdef USE_TRANSMISSION
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
#endif`,yy=`#ifdef USE_TRANSMISSION
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
#endif`,Sy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,My=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ty=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ay=`uniform sampler2D t2D;
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
}`,Ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Py=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ly=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,by=`#include <common>
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
}`,Dy=`#if DEPTH_PACKING == 3200
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
}`,Uy=`#define DISTANCE
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
}`,Iy=`#define DISTANCE
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
}`,Ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Oy=`uniform float scale;
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
}`,ky=`uniform vec3 diffuse;
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
}`,By=`#include <common>
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
}`,zy=`uniform vec3 diffuse;
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
}`,Hy=`#define LAMBERT
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
}`,Vy=`#define LAMBERT
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
}`,Gy=`#define MATCAP
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
}`,Wy=`#define MATCAP
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
}`,Xy=`#define NORMAL
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
}`,jy=`#define NORMAL
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
}`,Yy=`#define PHONG
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
}`,qy=`#define PHONG
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
}`,Ky=`#define STANDARD
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
}`,$y=`#define STANDARD
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
}`,Zy=`#define TOON
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
}`,Qy=`#define TOON
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
}`,Jy=`uniform float size;
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
}`,eS=`uniform vec3 diffuse;
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
}`,tS=`#include <common>
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
}`,nS=`uniform vec3 color;
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
}`,iS=`uniform float rotation;
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
}`,rS=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:A0,alphahash_pars_fragment:R0,alphamap_fragment:C0,alphamap_pars_fragment:P0,alphatest_fragment:L0,alphatest_pars_fragment:b0,aomap_fragment:D0,aomap_pars_fragment:U0,batching_pars_vertex:I0,batching_vertex:N0,begin_vertex:F0,beginnormal_vertex:O0,bsdfs:k0,iridescence_fragment:B0,bumpmap_pars_fragment:z0,clipping_planes_fragment:H0,clipping_planes_pars_fragment:V0,clipping_planes_pars_vertex:G0,clipping_planes_vertex:W0,color_fragment:X0,color_pars_fragment:j0,color_pars_vertex:Y0,color_vertex:q0,common:K0,cube_uv_reflection_fragment:$0,defaultnormal_vertex:Z0,displacementmap_pars_vertex:Q0,displacementmap_vertex:J0,emissivemap_fragment:ex,emissivemap_pars_fragment:tx,colorspace_fragment:nx,colorspace_pars_fragment:ix,envmap_fragment:rx,envmap_common_pars_fragment:sx,envmap_pars_fragment:ox,envmap_pars_vertex:ax,envmap_physical_pars_fragment:vx,envmap_vertex:lx,fog_vertex:ux,fog_pars_vertex:cx,fog_fragment:fx,fog_pars_fragment:dx,gradientmap_pars_fragment:hx,lightmap_pars_fragment:px,lights_lambert_fragment:mx,lights_lambert_pars_fragment:gx,lights_pars_begin:_x,lights_toon_fragment:xx,lights_toon_pars_fragment:yx,lights_phong_fragment:Sx,lights_phong_pars_fragment:Mx,lights_physical_fragment:Ex,lights_physical_pars_fragment:Tx,lights_fragment_begin:wx,lights_fragment_maps:Ax,lights_fragment_end:Rx,logdepthbuf_fragment:Cx,logdepthbuf_pars_fragment:Px,logdepthbuf_pars_vertex:Lx,logdepthbuf_vertex:bx,map_fragment:Dx,map_pars_fragment:Ux,map_particle_fragment:Ix,map_particle_pars_fragment:Nx,metalnessmap_fragment:Fx,metalnessmap_pars_fragment:Ox,morphinstance_vertex:kx,morphcolor_vertex:Bx,morphnormal_vertex:zx,morphtarget_pars_vertex:Hx,morphtarget_vertex:Vx,normal_fragment_begin:Gx,normal_fragment_maps:Wx,normal_pars_fragment:Xx,normal_pars_vertex:jx,normal_vertex:Yx,normalmap_pars_fragment:qx,clearcoat_normal_fragment_begin:Kx,clearcoat_normal_fragment_maps:$x,clearcoat_pars_fragment:Zx,iridescence_pars_fragment:Qx,opaque_fragment:Jx,packing:ey,premultiplied_alpha_fragment:ty,project_vertex:ny,dithering_fragment:iy,dithering_pars_fragment:ry,roughnessmap_fragment:sy,roughnessmap_pars_fragment:oy,shadowmap_pars_fragment:ay,shadowmap_pars_vertex:ly,shadowmap_vertex:uy,shadowmask_pars_fragment:cy,skinbase_vertex:fy,skinning_pars_vertex:dy,skinning_vertex:hy,skinnormal_vertex:py,specularmap_fragment:my,specularmap_pars_fragment:gy,tonemapping_fragment:_y,tonemapping_pars_fragment:vy,transmission_fragment:xy,transmission_pars_fragment:yy,uv_pars_fragment:Sy,uv_pars_vertex:My,uv_vertex:Ey,worldpos_vertex:Ty,background_vert:wy,background_frag:Ay,backgroundCube_vert:Ry,backgroundCube_frag:Cy,cube_vert:Py,cube_frag:Ly,depth_vert:by,depth_frag:Dy,distanceRGBA_vert:Uy,distanceRGBA_frag:Iy,equirect_vert:Ny,equirect_frag:Fy,linedashed_vert:Oy,linedashed_frag:ky,meshbasic_vert:By,meshbasic_frag:zy,meshlambert_vert:Hy,meshlambert_frag:Vy,meshmatcap_vert:Gy,meshmatcap_frag:Wy,meshnormal_vert:Xy,meshnormal_frag:jy,meshphong_vert:Yy,meshphong_frag:qy,meshphysical_vert:Ky,meshphysical_frag:$y,meshtoon_vert:Zy,meshtoon_frag:Qy,points_vert:Jy,points_frag:eS,shadow_vert:tS,shadow_frag:nS,sprite_vert:iS,sprite_frag:rS},Ce={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},hi={basic:{uniforms:mn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:mn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new yt(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:mn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:mn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:mn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new yt(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:mn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:mn([Ce.points,Ce.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:mn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:mn([Ce.common,Ce.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:mn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:mn([Ce.sprite,Ce.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:mn([Ce.common,Ce.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:mn([Ce.lights,Ce.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};hi.physical={uniforms:mn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const hl={r:0,b:0,g:0},Nr=new Oi,sS=new Bt;function oS(s,e,n,r,a,u,f){const d=new yt(0);let p=u===!0?0:1,m,v,x=null,y=0,S=null;function w(I){let P=I.isScene===!0?I.background:null;return P&&P.isTexture&&(P=(I.backgroundBlurriness>0?n:e).get(P)),P}function A(I){let P=!1;const U=w(I);U===null?g(d,p):U&&U.isColor&&(g(U,1),P=!0);const J=s.xr.getEnvironmentBlendMode();J==="additive"?r.buffers.color.setClear(0,0,0,1,f):J==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(I,P){const U=w(P);U&&(U.isCubeTexture||U.mapping===Fl)?(v===void 0&&(v=new Ii(new Vo(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:Vs(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(J,z,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(v)),Nr.copy(P.backgroundRotation),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),v.material.uniforms.envMap.value=U,v.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(sS.makeRotationFromEuler(Nr)),v.material.toneMapped=Mt.getTransfer(U.colorSpace)!==Dt,(x!==U||y!==U.version||S!==s.toneMapping)&&(v.material.needsUpdate=!0,x=U,y=U.version,S=s.toneMapping),v.layers.enableAll(),I.unshift(v,v.geometry,v.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new Ii(new kl(2,2),new ki({name:"BackgroundMaterial",uniforms:Vs(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:gr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Mt.getTransfer(U.colorSpace)!==Dt,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(x!==U||y!==U.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,x=U,y=U.version,S=s.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null))}function g(I,P){I.getRGB(hl,rg(s)),r.buffers.color.setClear(hl.r,hl.g,hl.b,P,f)}return{getClearColor:function(){return d},setClearColor:function(I,P=1){d.set(I),p=P,g(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(I){p=I,g(d,p)},render:A,addToRenderList:_}}function aS(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=y(null);let u=a,f=!1;function d(E,C,re,te,le){let he=!1;const ne=x(te,re,C);u!==ne&&(u=ne,m(u.object)),he=S(E,te,re,le),he&&w(E,te,re,le),le!==null&&e.update(le,s.ELEMENT_ARRAY_BUFFER),(he||f)&&(f=!1,U(E,C,re,te),le!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(le).buffer))}function p(){return s.createVertexArray()}function m(E){return s.bindVertexArray(E)}function v(E){return s.deleteVertexArray(E)}function x(E,C,re){const te=re.wireframe===!0;let le=r[E.id];le===void 0&&(le={},r[E.id]=le);let he=le[C.id];he===void 0&&(he={},le[C.id]=he);let ne=he[te];return ne===void 0&&(ne=y(p()),he[te]=ne),ne}function y(E){const C=[],re=[],te=[];for(let le=0;le<n;le++)C[le]=0,re[le]=0,te[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:re,attributeDivisors:te,object:E,attributes:{},index:null}}function S(E,C,re,te){const le=u.attributes,he=C.attributes;let ne=0;const oe=re.getAttributes();for(const k in oe)if(oe[k].location>=0){const ie=le[k];let b=he[k];if(b===void 0&&(k==="instanceMatrix"&&E.instanceMatrix&&(b=E.instanceMatrix),k==="instanceColor"&&E.instanceColor&&(b=E.instanceColor)),ie===void 0||ie.attribute!==b||b&&ie.data!==b.data)return!0;ne++}return u.attributesNum!==ne||u.index!==te}function w(E,C,re,te){const le={},he=C.attributes;let ne=0;const oe=re.getAttributes();for(const k in oe)if(oe[k].location>=0){let ie=he[k];ie===void 0&&(k==="instanceMatrix"&&E.instanceMatrix&&(ie=E.instanceMatrix),k==="instanceColor"&&E.instanceColor&&(ie=E.instanceColor));const b={};b.attribute=ie,ie&&ie.data&&(b.data=ie.data),le[k]=b,ne++}u.attributes=le,u.attributesNum=ne,u.index=te}function A(){const E=u.newAttributes;for(let C=0,re=E.length;C<re;C++)E[C]=0}function _(E){g(E,0)}function g(E,C){const re=u.newAttributes,te=u.enabledAttributes,le=u.attributeDivisors;re[E]=1,te[E]===0&&(s.enableVertexAttribArray(E),te[E]=1),le[E]!==C&&(s.vertexAttribDivisor(E,C),le[E]=C)}function I(){const E=u.newAttributes,C=u.enabledAttributes;for(let re=0,te=C.length;re<te;re++)C[re]!==E[re]&&(s.disableVertexAttribArray(re),C[re]=0)}function P(E,C,re,te,le,he,ne){ne===!0?s.vertexAttribIPointer(E,C,re,le,he):s.vertexAttribPointer(E,C,re,te,le,he)}function U(E,C,re,te){A();const le=te.attributes,he=re.getAttributes(),ne=C.defaultAttributeValues;for(const oe in he){const k=he[oe];if(k.location>=0){let ue=le[oe];if(ue===void 0&&(oe==="instanceMatrix"&&E.instanceMatrix&&(ue=E.instanceMatrix),oe==="instanceColor"&&E.instanceColor&&(ue=E.instanceColor)),ue!==void 0){const ie=ue.normalized,b=ue.itemSize,q=e.get(ue);if(q===void 0)continue;const we=q.buffer,X=q.type,ae=q.bytesPerElement,ge=X===s.INT||X===s.UNSIGNED_INT||ue.gpuType===Xf;if(ue.isInterleavedBufferAttribute){const ye=ue.data,Pe=ye.stride,Le=ue.offset;if(ye.isInstancedInterleavedBuffer){for(let et=0;et<k.locationSize;et++)g(k.location+et,ye.meshPerAttribute);E.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let et=0;et<k.locationSize;et++)_(k.location+et);s.bindBuffer(s.ARRAY_BUFFER,we);for(let et=0;et<k.locationSize;et++)P(k.location+et,b/k.locationSize,X,ie,Pe*ae,(Le+b/k.locationSize*et)*ae,ge)}else{if(ue.isInstancedBufferAttribute){for(let ye=0;ye<k.locationSize;ye++)g(k.location+ye,ue.meshPerAttribute);E.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ye=0;ye<k.locationSize;ye++)_(k.location+ye);s.bindBuffer(s.ARRAY_BUFFER,we);for(let ye=0;ye<k.locationSize;ye++)P(k.location+ye,b/k.locationSize,X,ie,b*ae,b/k.locationSize*ye*ae,ge)}}else if(ne!==void 0){const ie=ne[oe];if(ie!==void 0)switch(ie.length){case 2:s.vertexAttrib2fv(k.location,ie);break;case 3:s.vertexAttrib3fv(k.location,ie);break;case 4:s.vertexAttrib4fv(k.location,ie);break;default:s.vertexAttrib1fv(k.location,ie)}}}}I()}function J(){Y();for(const E in r){const C=r[E];for(const re in C){const te=C[re];for(const le in te)v(te[le].object),delete te[le];delete C[re]}delete r[E]}}function z(E){if(r[E.id]===void 0)return;const C=r[E.id];for(const re in C){const te=C[re];for(const le in te)v(te[le].object),delete te[le];delete C[re]}delete r[E.id]}function N(E){for(const C in r){const re=r[C];if(re[E.id]===void 0)continue;const te=re[E.id];for(const le in te)v(te[le].object),delete te[le];delete re[E.id]}}function Y(){xe(),f=!0,u!==a&&(u=a,m(u.object))}function xe(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:xe,dispose:J,releaseStatesOfGeometry:z,releaseStatesOfProgram:N,initAttributes:A,enableAttribute:_,disableUnusedAttributes:I}}function lS(s,e,n){let r;function a(m){r=m}function u(m,v){s.drawArrays(r,m,v),n.update(v,r,1)}function f(m,v,x){x!==0&&(s.drawArraysInstanced(r,m,v,x),n.update(v,r,x))}function d(m,v,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,v,0,x);let S=0;for(let w=0;w<x;w++)S+=v[w];n.update(S,r,1)}function p(m,v,x,y){if(x===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let w=0;w<m.length;w++)f(m[w],v[w],y[w]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,v,0,y,0,x);let w=0;for(let A=0;A<x;A++)w+=v[A];for(let A=0;A<y.length;A++)n.update(w,r,y[A])}}this.setMode=a,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function uS(s,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function f(N){return!(N!==ri&&r.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(N){const Y=N===Oo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Fi&&r.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Di&&!Y)}function p(N){if(N==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const v=p(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const x=n.logarithmicDepthBuffer===!0,y=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(y===!0){const N=e.get("EXT_clip_control");N.clipControlEXT(N.LOWER_LEFT_EXT,N.ZERO_TO_ONE_EXT)}const S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),I=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),U=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),J=w>0,z=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:x,reverseDepthBuffer:y,maxTextures:S,maxVertexTextures:w,maxTextureSize:A,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:I,maxVaryings:P,maxFragmentUniforms:U,vertexTextures:J,maxSamples:z}}function cS(s){const e=this;let n=null,r=0,a=!1,u=!1;const f=new Or,d=new st,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,y){const S=x.length!==0||y||r!==0||a;return a=y,r=x.length,S},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,y){n=v(x,y,0)},this.setState=function(x,y,S){const w=x.clippingPlanes,A=x.clipIntersection,_=x.clipShadows,g=s.get(x);if(!a||w===null||w.length===0||u&&!_)u?v(null):m();else{const I=u?0:r,P=I*4;let U=g.clippingState||null;p.value=U,U=v(w,y,P,S);for(let J=0;J!==P;++J)U[J]=n[J];g.clippingState=U,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=I}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(x,y,S,w){const A=x!==null?x.length:0;let _=null;if(A!==0){if(_=p.value,w!==!0||_===null){const g=S+A*4,I=y.matrixWorldInverse;d.getNormalMatrix(I),(_===null||_.length<g)&&(_=new Float32Array(g));for(let P=0,U=S;P!==A;++P,U+=4)f.copy(x[P]).applyMatrix4(I,d),f.normal.toArray(_,U),_[U+3]=f.constant}p.value=_,p.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,_}}function fS(s){let e=new WeakMap;function n(f,d){return d===cf?f.mapping=ks:d===ff&&(f.mapping=Bs),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===cf||d===ff)if(e.has(f)){const p=e.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new M0(p.height);return m.fromEquirectangularTexture(s,f),e.set(f,m),f.addEventListener("dispose",a),n(m.texture,f.mapping)}else return null}}return f}function a(f){const d=f.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class ug extends sg{constructor(e=-1,n=1,r=1,a=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,f=r+e,d=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Us=4,tm=[.125,.215,.35,.446,.526,.582],zr=20,jc=new ug,nm=new yt;let Yc=null,qc=0,Kc=0,$c=!1;const kr=(1+Math.sqrt(5))/2,Ds=1/kr,im=[new ee(-kr,Ds,0),new ee(kr,Ds,0),new ee(-Ds,0,kr),new ee(Ds,0,kr),new ee(0,kr,-Ds),new ee(0,kr,Ds),new ee(-1,1,-1),new ee(1,1,-1),new ee(-1,1,1),new ee(1,1,1)];class rm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Yc=this._renderer.getRenderTarget(),qc=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel(),$c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,a,u),n>0&&this._blur(u,0,0,n),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=am(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=om(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yc,qc,Kc),this._renderer.xr.enabled=$c,e.scissorTest=!1,pl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ks||e.mapping===Bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yc=this._renderer.getRenderTarget(),qc=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel(),$c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:ni,minFilter:ni,generateMipmaps:!1,type:Oo,format:ri,colorSpace:_r,depthBuffer:!1},a=sm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sm(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dS(u)),this._blurMaterial=hS(u,e,n)}return a}_compileMaterial(e){const n=new Ii(this._lodPlanes[0],e);this._renderer.compile(n,jc)}_sceneToCubeUV(e,n,r,a){const d=new ti(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,y=v.toneMapping;v.getClearColor(nm),v.toneMapping=mr,v.autoClear=!1;const S=new tg({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1}),w=new Ii(new Vo,S);let A=!1;const _=e.background;_?_.isColor&&(S.color.copy(_),e.background=null,A=!0):(S.color.copy(nm),A=!0);for(let g=0;g<6;g++){const I=g%3;I===0?(d.up.set(0,p[g],0),d.lookAt(m[g],0,0)):I===1?(d.up.set(0,0,p[g]),d.lookAt(0,m[g],0)):(d.up.set(0,p[g],0),d.lookAt(0,0,m[g]));const P=this._cubeSize;pl(a,I*P,g>2?P:0,P,P),v.setRenderTarget(a),A&&v.render(w,d),v.render(e,d)}w.geometry.dispose(),w.material.dispose(),v.toneMapping=y,v.autoClear=x,e.background=_}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===ks||e.mapping===Bs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=am()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=om());const u=a?this._cubemapMaterial:this._equirectMaterial,f=new Ii(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;pl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(f,jc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=im[(a-u-1)%im.length];this._blur(e,u-1,u,f,d)}n.autoClear=r}_blur(e,n,r,a,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,a,"latitudinal",u),this._halfBlur(f,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,x=new Ii(this._lodPlanes[a],m),y=m.uniforms,S=this._sizeLods[r]-1,w=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*zr-1),A=u/w,_=isFinite(u)?1+Math.floor(v*A):zr;_>zr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${zr}`);const g=[];let I=0;for(let N=0;N<zr;++N){const Y=N/A,xe=Math.exp(-Y*Y/2);g.push(xe),N===0?I+=xe:N<_&&(I+=2*xe)}for(let N=0;N<g.length;N++)g[N]=g[N]/I;y.envMap.value=e.texture,y.samples.value=_,y.weights.value=g,y.latitudinal.value=f==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:P}=this;y.dTheta.value=w,y.mipInt.value=P-r;const U=this._sizeLods[a],J=3*U*(a>P-Us?a-P+Us:0),z=4*(this._cubeSize-U);pl(n,J,z,3*U,2*U),p.setRenderTarget(n),p.render(x,jc)}}function dS(s){const e=[],n=[],r=[];let a=s;const u=s-Us+1+tm.length;for(let f=0;f<u;f++){const d=Math.pow(2,a);n.push(d);let p=1/d;f>s-Us?p=tm[f-s+Us-1]:f===0&&(p=0),r.push(p);const m=1/(d-2),v=-m,x=1+m,y=[v,v,x,v,x,x,v,v,x,x,v,x],S=6,w=6,A=3,_=2,g=1,I=new Float32Array(A*w*S),P=new Float32Array(_*w*S),U=new Float32Array(g*w*S);for(let z=0;z<S;z++){const N=z%3*2/3-1,Y=z>2?0:-1,xe=[N,Y,0,N+2/3,Y,0,N+2/3,Y+1,0,N,Y,0,N+2/3,Y+1,0,N,Y+1,0];I.set(xe,A*w*z),P.set(y,_*w*z);const E=[z,z,z,z,z,z];U.set(E,g*w*z)}const J=new si;J.setAttribute("position",new wn(I,A)),J.setAttribute("uv",new wn(P,_)),J.setAttribute("faceIndex",new wn(U,g)),e.push(J),a>Us&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function sm(s,e,n){const r=new Xr(s,e,n);return r.texture.mapping=Fl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function pl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function hS(s,e,n){const r=new Float32Array(zr),a=new ee(0,1,0);return new ki({name:"SphericalGaussianBlur",defines:{n:zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Jf(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function om(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jf(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function am(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Jf(){return`

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
	`}function pS(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===cf||p===ff,v=p===ks||p===Bs;if(m||v){let x=e.get(d);const y=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return n===null&&(n=new rm(s)),x=m?n.fromEquirectangular(d,x):n.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),x.texture;if(x!==void 0)return x.texture;{const S=d.image;return m&&S&&S.height>0||v&&S&&a(S)?(n===null&&(n=new rm(s)),x=m?n.fromEquirectangular(d):n.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),d.addEventListener("dispose",u),x.texture):null}}}return d}function a(d){let p=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function mS(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Al("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function gS(s,e,n,r){const a={},u=new WeakMap;function f(x){const y=x.target;y.index!==null&&e.remove(y.index);for(const w in y.attributes)e.remove(y.attributes[w]);for(const w in y.morphAttributes){const A=y.morphAttributes[w];for(let _=0,g=A.length;_<g;_++)e.remove(A[_])}y.removeEventListener("dispose",f),delete a[y.id];const S=u.get(y);S&&(e.remove(S),u.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,n.memory.geometries--}function d(x,y){return a[y.id]===!0||(y.addEventListener("dispose",f),a[y.id]=!0,n.memory.geometries++),y}function p(x){const y=x.attributes;for(const w in y)e.update(y[w],s.ARRAY_BUFFER);const S=x.morphAttributes;for(const w in S){const A=S[w];for(let _=0,g=A.length;_<g;_++)e.update(A[_],s.ARRAY_BUFFER)}}function m(x){const y=[],S=x.index,w=x.attributes.position;let A=0;if(S!==null){const I=S.array;A=S.version;for(let P=0,U=I.length;P<U;P+=3){const J=I[P+0],z=I[P+1],N=I[P+2];y.push(J,z,z,N,N,J)}}else if(w!==void 0){const I=w.array;A=w.version;for(let P=0,U=I.length/3-1;P<U;P+=3){const J=P+0,z=P+1,N=P+2;y.push(J,z,z,N,N,J)}}else return;const _=new($m(y)?ig:ng)(y,1);_.version=A;const g=u.get(x);g&&e.remove(g),u.set(x,_)}function v(x){const y=u.get(x);if(y){const S=x.index;S!==null&&y.version<S.version&&m(x)}else m(x);return u.get(x)}return{get:d,update:p,getWireframeAttribute:v}}function _S(s,e,n){let r;function a(y){r=y}let u,f;function d(y){u=y.type,f=y.bytesPerElement}function p(y,S){s.drawElements(r,S,u,y*f),n.update(S,r,1)}function m(y,S,w){w!==0&&(s.drawElementsInstanced(r,S,u,y*f,w),n.update(S,r,w))}function v(y,S,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,u,y,0,w);let _=0;for(let g=0;g<w;g++)_+=S[g];n.update(_,r,1)}function x(y,S,w,A){if(w===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<y.length;g++)m(y[g]/f,S[g],A[g]);else{_.multiDrawElementsInstancedWEBGL(r,S,0,u,y,0,A,0,w);let g=0;for(let I=0;I<w;I++)g+=S[I];for(let I=0;I<A.length;I++)n.update(g,r,A[I])}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=x}function vS(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(n.calls++,f){case s.TRIANGLES:n.triangles+=d*(u/3);break;case s.LINES:n.lines+=d*(u/2);break;case s.LINE_STRIP:n.lines+=d*(u-1);break;case s.LINE_LOOP:n.lines+=d*u;break;case s.POINTS:n.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function xS(s,e,n){const r=new WeakMap,a=new Ht;function u(f,d,p){const m=f.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=v!==void 0?v.length:0;let y=r.get(d);if(y===void 0||y.count!==x){let E=function(){Y.dispose(),r.delete(d),d.removeEventListener("dispose",E)};var S=E;y!==void 0&&y.texture.dispose();const w=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,_=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let U=0;w===!0&&(U=1),A===!0&&(U=2),_===!0&&(U=3);let J=d.attributes.position.count*U,z=1;J>e.maxTextureSize&&(z=Math.ceil(J/e.maxTextureSize),J=e.maxTextureSize);const N=new Float32Array(J*z*4*x),Y=new Qm(N,J,z,x);Y.type=Di,Y.needsUpdate=!0;const xe=U*4;for(let C=0;C<x;C++){const re=g[C],te=I[C],le=P[C],he=J*z*4*C;for(let ne=0;ne<re.count;ne++){const oe=ne*xe;w===!0&&(a.fromBufferAttribute(re,ne),N[he+oe+0]=a.x,N[he+oe+1]=a.y,N[he+oe+2]=a.z,N[he+oe+3]=0),A===!0&&(a.fromBufferAttribute(te,ne),N[he+oe+4]=a.x,N[he+oe+5]=a.y,N[he+oe+6]=a.z,N[he+oe+7]=0),_===!0&&(a.fromBufferAttribute(le,ne),N[he+oe+8]=a.x,N[he+oe+9]=a.y,N[he+oe+10]=a.z,N[he+oe+11]=le.itemSize===4?a.w:1)}}y={count:x,texture:Y,size:new Rt(J,z)},r.set(d,y),d.addEventListener("dispose",E)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",f.morphTexture,n);else{let w=0;for(let _=0;_<m.length;_++)w+=m[_];const A=d.morphTargetsRelative?1:1-w;p.getUniforms().setValue(s,"morphTargetBaseInfluence",A),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",y.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:u}}function yS(s,e,n,r){let a=new WeakMap;function u(p){const m=r.render.frame,v=p.geometry,x=e.get(p,v);if(a.get(x)!==m&&(e.update(x),a.set(x,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==m&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const y=p.skeleton;a.get(y)!==m&&(y.update(),a.set(y,m))}return x}function f(){a=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:f}}class cg extends Rn{constructor(e,n,r,a,u,f,d,p,m,v=Ns){if(v!==Ns&&v!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===Ns&&(r=Wr),r===void 0&&v===Hs&&(r=zs),super(null,a,u,f,d,p,v,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:Wn,this.minFilter=p!==void 0?p:Wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const fg=new Rn,lm=new cg(1,1),dg=new Qm,hg=new o0,pg=new og,um=[],cm=[],fm=new Float32Array(16),dm=new Float32Array(9),hm=new Float32Array(4);function Xs(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let u=um[a];if(u===void 0&&(u=new Float32Array(a),um[a]=u),e!==0){r.toArray(u,0);for(let f=1,d=0;f!==e;++f)d+=n,s[f].toArray(u,d)}return u}function Yt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function qt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Bl(s,e){let n=cm[e];n===void 0&&(n=new Int32Array(e),cm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function SS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function MS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;s.uniform2fv(this.addr,e),qt(n,e)}}function ES(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Yt(n,e))return;s.uniform3fv(this.addr,e),qt(n,e)}}function TS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;s.uniform4fv(this.addr,e),qt(n,e)}}function wS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Yt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),qt(n,e)}else{if(Yt(n,r))return;hm.set(r),s.uniformMatrix2fv(this.addr,!1,hm),qt(n,r)}}function AS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Yt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),qt(n,e)}else{if(Yt(n,r))return;dm.set(r),s.uniformMatrix3fv(this.addr,!1,dm),qt(n,r)}}function RS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Yt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),qt(n,e)}else{if(Yt(n,r))return;fm.set(r),s.uniformMatrix4fv(this.addr,!1,fm),qt(n,r)}}function CS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function PS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;s.uniform2iv(this.addr,e),qt(n,e)}}function LS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Yt(n,e))return;s.uniform3iv(this.addr,e),qt(n,e)}}function bS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;s.uniform4iv(this.addr,e),qt(n,e)}}function DS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function US(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;s.uniform2uiv(this.addr,e),qt(n,e)}}function IS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Yt(n,e))return;s.uniform3uiv(this.addr,e),qt(n,e)}}function NS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;s.uniform4uiv(this.addr,e),qt(n,e)}}function FS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let u;this.type===s.SAMPLER_2D_SHADOW?(lm.compareFunction=Km,u=lm):u=fg,n.setTexture2D(e||u,a)}function OS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||hg,a)}function kS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||pg,a)}function BS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||dg,a)}function zS(s){switch(s){case 5126:return SS;case 35664:return MS;case 35665:return ES;case 35666:return TS;case 35674:return wS;case 35675:return AS;case 35676:return RS;case 5124:case 35670:return CS;case 35667:case 35671:return PS;case 35668:case 35672:return LS;case 35669:case 35673:return bS;case 5125:return DS;case 36294:return US;case 36295:return IS;case 36296:return NS;case 35678:case 36198:case 36298:case 36306:case 35682:return FS;case 35679:case 36299:case 36307:return OS;case 35680:case 36300:case 36308:case 36293:return kS;case 36289:case 36303:case 36311:case 36292:return BS}}function HS(s,e){s.uniform1fv(this.addr,e)}function VS(s,e){const n=Xs(e,this.size,2);s.uniform2fv(this.addr,n)}function GS(s,e){const n=Xs(e,this.size,3);s.uniform3fv(this.addr,n)}function WS(s,e){const n=Xs(e,this.size,4);s.uniform4fv(this.addr,n)}function XS(s,e){const n=Xs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function jS(s,e){const n=Xs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function YS(s,e){const n=Xs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function qS(s,e){s.uniform1iv(this.addr,e)}function KS(s,e){s.uniform2iv(this.addr,e)}function $S(s,e){s.uniform3iv(this.addr,e)}function ZS(s,e){s.uniform4iv(this.addr,e)}function QS(s,e){s.uniform1uiv(this.addr,e)}function JS(s,e){s.uniform2uiv(this.addr,e)}function eM(s,e){s.uniform3uiv(this.addr,e)}function tM(s,e){s.uniform4uiv(this.addr,e)}function nM(s,e,n){const r=this.cache,a=e.length,u=Bl(n,a);Yt(r,u)||(s.uniform1iv(this.addr,u),qt(r,u));for(let f=0;f!==a;++f)n.setTexture2D(e[f]||fg,u[f])}function iM(s,e,n){const r=this.cache,a=e.length,u=Bl(n,a);Yt(r,u)||(s.uniform1iv(this.addr,u),qt(r,u));for(let f=0;f!==a;++f)n.setTexture3D(e[f]||hg,u[f])}function rM(s,e,n){const r=this.cache,a=e.length,u=Bl(n,a);Yt(r,u)||(s.uniform1iv(this.addr,u),qt(r,u));for(let f=0;f!==a;++f)n.setTextureCube(e[f]||pg,u[f])}function sM(s,e,n){const r=this.cache,a=e.length,u=Bl(n,a);Yt(r,u)||(s.uniform1iv(this.addr,u),qt(r,u));for(let f=0;f!==a;++f)n.setTexture2DArray(e[f]||dg,u[f])}function oM(s){switch(s){case 5126:return HS;case 35664:return VS;case 35665:return GS;case 35666:return WS;case 35674:return XS;case 35675:return jS;case 35676:return YS;case 5124:case 35670:return qS;case 35667:case 35671:return KS;case 35668:case 35672:return $S;case 35669:case 35673:return ZS;case 5125:return QS;case 36294:return JS;case 36295:return eM;case 36296:return tM;case 35678:case 36198:case 36298:case 36306:case 35682:return nM;case 35679:case 36299:case 36307:return iM;case 35680:case 36300:case 36308:case 36293:return rM;case 36289:case 36303:case 36311:case 36292:return sM}}class aM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=zS(n.type)}}class lM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=oM(n.type)}}class uM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,f=a.length;u!==f;++u){const d=a[u];d.setValue(e,n[d.id],r)}}}const Zc=/(\w+)(\])?(\[|\.)?/g;function pm(s,e){s.seq.push(e),s.map[e.id]=e}function cM(s,e,n){const r=s.name,a=r.length;for(Zc.lastIndex=0;;){const u=Zc.exec(r),f=Zc.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===a){pm(n,m===void 0?new aM(d,s,e):new lM(d,s,e));break}else{let x=n.map[d];x===void 0&&(x=new uM(d),pm(n,x)),n=x}}}class Rl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),f=e.getUniformLocation(n,u.name);cM(u,f,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,f=n.length;u!==f;++u){const d=n[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const f=e[a];f.id in n&&r.push(f)}return r}}function mm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const fM=37297;let dM=0;function hM(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let f=a;f<u;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}function pM(s){const e=Mt.getPrimaries(Mt.workingColorSpace),n=Mt.getPrimaries(s);let r;switch(e===n?r="":e===bl&&n===Ll?r="LinearDisplayP3ToLinearSRGB":e===Ll&&n===bl&&(r="LinearSRGBToLinearDisplayP3"),s){case _r:case Ol:return[r,"LinearTransferOETF"];case di:case Zf:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[r,"LinearTransferOETF"]}}function gm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+hM(s.getShaderSource(e),f)}else return a}function mM(s,e){const n=pM(e);return`vec4 ${s}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function gM(s,e){let n;switch(e){case bv:n="Linear";break;case Dv:n="Reinhard";break;case Uv:n="Cineon";break;case Iv:n="ACESFilmic";break;case Fv:n="AgX";break;case Ov:n="Neutral";break;case Nv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ml=new ee;function _M(){Mt.getLuminanceCoefficients(ml);const s=ml.x.toFixed(4),e=ml.y.toFixed(4),n=ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(No).join(`
`)}function xM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function yM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=s.getActiveAttrib(e,a),f=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),n[f]={type:u.type,location:s.getAttribLocation(e,f),locationSize:d}}return n}function No(s){return s!==""}function _m(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const SM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hf(s){return s.replace(SM,EM)}const MM=new Map;function EM(s,e){let n=rt[e];if(n===void 0){const r=MM.get(e);if(r!==void 0)n=rt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Hf(n)}const TM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xm(s){return s.replace(TM,wM)}function wM(s,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function ym(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function AM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Fm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===cv?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Li&&(e="SHADOWMAP_TYPE_VSM"),e}function RM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ks:case Bs:e="ENVMAP_TYPE_CUBE";break;case Fl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function CM(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Bs&&(e="ENVMAP_MODE_REFRACTION"),e}function PM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Om:e="ENVMAP_BLENDING_MULTIPLY";break;case Pv:e="ENVMAP_BLENDING_MIX";break;case Lv:e="ENVMAP_BLENDING_ADD";break}return e}function LM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function bM(s,e,n,r){const a=s.getContext(),u=n.defines;let f=n.vertexShader,d=n.fragmentShader;const p=AM(n),m=RM(n),v=CM(n),x=PM(n),y=LM(n),S=vM(n),w=xM(u),A=a.createProgram();let _,g,I=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(No).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(No).join(`
`),g.length>0&&(g+=`
`)):(_=[ym(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(No).join(`
`),g=[ym(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",n.envMap?"#define "+x:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==mr?"#define TONE_MAPPING":"",n.toneMapping!==mr?rt.tonemapping_pars_fragment:"",n.toneMapping!==mr?gM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,mM("linearToOutputTexel",n.outputColorSpace),_M(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(No).join(`
`)),f=Hf(f),f=_m(f,n),f=vm(f,n),d=Hf(d),d=_m(d,n),d=vm(d,n),f=xm(f),d=xm(d),n.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,_=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",n.glslVersion===Op?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Op?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const P=I+_+f,U=I+g+d,J=mm(a,a.VERTEX_SHADER,P),z=mm(a,a.FRAGMENT_SHADER,U);a.attachShader(A,J),a.attachShader(A,z),n.index0AttributeName!==void 0?a.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(A,0,"position"),a.linkProgram(A);function N(C){if(s.debug.checkShaderErrors){const re=a.getProgramInfoLog(A).trim(),te=a.getShaderInfoLog(J).trim(),le=a.getShaderInfoLog(z).trim();let he=!0,ne=!0;if(a.getProgramParameter(A,a.LINK_STATUS)===!1)if(he=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,A,J,z);else{const oe=gm(a,J,"vertex"),k=gm(a,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(A,a.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+re+`
`+oe+`
`+k)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(te===""||le==="")&&(ne=!1);ne&&(C.diagnostics={runnable:he,programLog:re,vertexShader:{log:te,prefix:_},fragmentShader:{log:le,prefix:g}})}a.deleteShader(J),a.deleteShader(z),Y=new Rl(a,A),xe=yM(a,A)}let Y;this.getUniforms=function(){return Y===void 0&&N(this),Y};let xe;this.getAttributes=function(){return xe===void 0&&N(this),xe};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=a.getProgramParameter(A,fM)),E},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=dM++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=J,this.fragmentShader=z,this}let DM=0;class UM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new IM(e),n.set(e,r)),r}}class IM{constructor(e){this.id=DM++,this.code=e,this.usedTimes=0}}function NM(s,e,n,r,a,u,f){const d=new Jm,p=new UM,m=new Set,v=[],x=a.logarithmicDepthBuffer,y=a.reverseDepthBuffer,S=a.vertexTextures;let w=a.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return m.add(E),E===0?"uv":`uv${E}`}function g(E,C,re,te,le){const he=te.fog,ne=le.geometry,oe=E.isMeshStandardMaterial?te.environment:null,k=(E.isMeshStandardMaterial?n:e).get(E.envMap||oe),ue=k&&k.mapping===Fl?k.image.height:null,ie=A[E.type];E.precision!==null&&(w=a.getMaxPrecision(E.precision),w!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",w,"instead."));const b=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,q=b!==void 0?b.length:0;let we=0;ne.morphAttributes.position!==void 0&&(we=1),ne.morphAttributes.normal!==void 0&&(we=2),ne.morphAttributes.color!==void 0&&(we=3);let X,ae,ge,ye;if(ie){const Kt=hi[ie];X=Kt.vertexShader,ae=Kt.fragmentShader}else X=E.vertexShader,ae=E.fragmentShader,p.update(E),ge=p.getVertexShaderID(E),ye=p.getFragmentShaderID(E);const Pe=s.getRenderTarget(),Le=le.isInstancedMesh===!0,et=le.isBatchedMesh===!0,pt=!!E.map,lt=!!E.matcap,O=!!k,tn=!!E.aoMap,at=!!E.lightMap,ft=!!E.bumpMap,$e=!!E.normalMap,Tt=!!E.displacementMap,Qe=!!E.emissiveMap,L=!!E.metalnessMap,T=!!E.roughnessMap,K=E.anisotropy>0,fe=E.clearcoat>0,_e=E.dispersion>0,ce=E.iridescence>0,je=E.sheen>0,Ae=E.transmission>0,Ne=K&&!!E.anisotropyMap,dt=fe&&!!E.clearcoatMap,Se=fe&&!!E.clearcoatNormalMap,Fe=fe&&!!E.clearcoatRoughnessMap,tt=ce&&!!E.iridescenceMap,Je=ce&&!!E.iridescenceThicknessMap,ke=je&&!!E.sheenColorMap,ut=je&&!!E.sheenRoughnessMap,it=!!E.specularMap,St=!!E.specularColorMap,H=!!E.specularIntensityMap,be=Ae&&!!E.transmissionMap,se=Ae&&!!E.thicknessMap,de=!!E.gradientMap,Re=!!E.alphaMap,Ue=E.alphaTest>0,ct=!!E.alphaHash,Nt=!!E.extensions;let nn=mr;E.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(nn=s.toneMapping);const ht={shaderID:ie,shaderType:E.type,shaderName:E.name,vertexShader:X,fragmentShader:ae,defines:E.defines,customVertexShaderID:ge,customFragmentShaderID:ye,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:w,batching:et,batchingColor:et&&le._colorsTexture!==null,instancing:Le,instancingColor:Le&&le.instanceColor!==null,instancingMorph:Le&&le.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:Pe===null?s.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:_r,alphaToCoverage:!!E.alphaToCoverage,map:pt,matcap:lt,envMap:O,envMapMode:O&&k.mapping,envMapCubeUVHeight:ue,aoMap:tn,lightMap:at,bumpMap:ft,normalMap:$e,displacementMap:S&&Tt,emissiveMap:Qe,normalMapObjectSpace:$e&&E.normalMapType===Vv,normalMapTangentSpace:$e&&E.normalMapType===Hv,metalnessMap:L,roughnessMap:T,anisotropy:K,anisotropyMap:Ne,clearcoat:fe,clearcoatMap:dt,clearcoatNormalMap:Se,clearcoatRoughnessMap:Fe,dispersion:_e,iridescence:ce,iridescenceMap:tt,iridescenceThicknessMap:Je,sheen:je,sheenColorMap:ke,sheenRoughnessMap:ut,specularMap:it,specularColorMap:St,specularIntensityMap:H,transmission:Ae,transmissionMap:be,thicknessMap:se,gradientMap:de,opaque:E.transparent===!1&&E.blending===Is&&E.alphaToCoverage===!1,alphaMap:Re,alphaTest:Ue,alphaHash:ct,combine:E.combine,mapUv:pt&&_(E.map.channel),aoMapUv:tn&&_(E.aoMap.channel),lightMapUv:at&&_(E.lightMap.channel),bumpMapUv:ft&&_(E.bumpMap.channel),normalMapUv:$e&&_(E.normalMap.channel),displacementMapUv:Tt&&_(E.displacementMap.channel),emissiveMapUv:Qe&&_(E.emissiveMap.channel),metalnessMapUv:L&&_(E.metalnessMap.channel),roughnessMapUv:T&&_(E.roughnessMap.channel),anisotropyMapUv:Ne&&_(E.anisotropyMap.channel),clearcoatMapUv:dt&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Se&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:ut&&_(E.sheenRoughnessMap.channel),specularMapUv:it&&_(E.specularMap.channel),specularColorMapUv:St&&_(E.specularColorMap.channel),specularIntensityMapUv:H&&_(E.specularIntensityMap.channel),transmissionMapUv:be&&_(E.transmissionMap.channel),thicknessMapUv:se&&_(E.thicknessMap.channel),alphaMapUv:Re&&_(E.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&($e||K),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:le.isPoints===!0&&!!ne.attributes.uv&&(pt||Re),fog:!!he,useFog:E.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:y,skinning:le.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:we,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&re.length>0,shadowMapType:s.shadowMap.type,toneMapping:nn,decodeVideoTexture:pt&&E.map.isVideoTexture===!0&&Mt.getTransfer(E.map.colorSpace)===Dt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===bi,flipSided:E.side===An,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Nt&&E.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&E.extensions.multiDraw===!0||et)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ht.vertexUv1s=m.has(1),ht.vertexUv2s=m.has(2),ht.vertexUv3s=m.has(3),m.clear(),ht}function I(E){const C=[];if(E.shaderID?C.push(E.shaderID):(C.push(E.customVertexShaderID),C.push(E.customFragmentShaderID)),E.defines!==void 0)for(const re in E.defines)C.push(re),C.push(E.defines[re]);return E.isRawShaderMaterial===!1&&(P(C,E),U(C,E),C.push(s.outputColorSpace)),C.push(E.customProgramCacheKey),C.join()}function P(E,C){E.push(C.precision),E.push(C.outputColorSpace),E.push(C.envMapMode),E.push(C.envMapCubeUVHeight),E.push(C.mapUv),E.push(C.alphaMapUv),E.push(C.lightMapUv),E.push(C.aoMapUv),E.push(C.bumpMapUv),E.push(C.normalMapUv),E.push(C.displacementMapUv),E.push(C.emissiveMapUv),E.push(C.metalnessMapUv),E.push(C.roughnessMapUv),E.push(C.anisotropyMapUv),E.push(C.clearcoatMapUv),E.push(C.clearcoatNormalMapUv),E.push(C.clearcoatRoughnessMapUv),E.push(C.iridescenceMapUv),E.push(C.iridescenceThicknessMapUv),E.push(C.sheenColorMapUv),E.push(C.sheenRoughnessMapUv),E.push(C.specularMapUv),E.push(C.specularColorMapUv),E.push(C.specularIntensityMapUv),E.push(C.transmissionMapUv),E.push(C.thicknessMapUv),E.push(C.combine),E.push(C.fogExp2),E.push(C.sizeAttenuation),E.push(C.morphTargetsCount),E.push(C.morphAttributeCount),E.push(C.numDirLights),E.push(C.numPointLights),E.push(C.numSpotLights),E.push(C.numSpotLightMaps),E.push(C.numHemiLights),E.push(C.numRectAreaLights),E.push(C.numDirLightShadows),E.push(C.numPointLightShadows),E.push(C.numSpotLightShadows),E.push(C.numSpotLightShadowsWithMaps),E.push(C.numLightProbes),E.push(C.shadowMapType),E.push(C.toneMapping),E.push(C.numClippingPlanes),E.push(C.numClipIntersection),E.push(C.depthPacking)}function U(E,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),E.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.alphaToCoverage&&d.enable(20),E.push(d.mask)}function J(E){const C=A[E.type];let re;if(C){const te=hi[C];re=v0.clone(te.uniforms)}else re=E.uniforms;return re}function z(E,C){let re;for(let te=0,le=v.length;te<le;te++){const he=v[te];if(he.cacheKey===C){re=he,++re.usedTimes;break}}return re===void 0&&(re=new bM(s,C,E,u),v.push(re)),re}function N(E){if(--E.usedTimes===0){const C=v.indexOf(E);v[C]=v[v.length-1],v.pop(),E.destroy()}}function Y(E){p.remove(E)}function xe(){p.dispose()}return{getParameters:g,getProgramCacheKey:I,getUniforms:J,acquireProgram:z,releaseProgram:N,releaseShaderCache:Y,programs:v,dispose:xe}}function FM(){let s=new WeakMap;function e(f){return s.has(f)}function n(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function r(f){s.delete(f)}function a(f,d,p){s.get(f)[d]=p}function u(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:u}}function OM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Sm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Mm(){const s=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function f(x,y,S,w,A,_){let g=s[e];return g===void 0?(g={id:x.id,object:x,geometry:y,material:S,groupOrder:w,renderOrder:x.renderOrder,z:A,group:_},s[e]=g):(g.id=x.id,g.object=x,g.geometry=y,g.material=S,g.groupOrder=w,g.renderOrder=x.renderOrder,g.z=A,g.group=_),e++,g}function d(x,y,S,w,A,_){const g=f(x,y,S,w,A,_);S.transmission>0?r.push(g):S.transparent===!0?a.push(g):n.push(g)}function p(x,y,S,w,A,_){const g=f(x,y,S,w,A,_);S.transmission>0?r.unshift(g):S.transparent===!0?a.unshift(g):n.unshift(g)}function m(x,y){n.length>1&&n.sort(x||OM),r.length>1&&r.sort(y||Sm),a.length>1&&a.sort(y||Sm)}function v(){for(let x=e,y=s.length;x<y;x++){const S=s[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:d,unshift:p,finish:v,sort:m}}function kM(){let s=new WeakMap;function e(r,a){const u=s.get(r);let f;return u===void 0?(f=new Mm,s.set(r,[f])):a>=u.length?(f=new Mm,u.push(f)):f=u[a],f}function n(){s=new WeakMap}return{get:e,dispose:n}}function BM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ee,color:new yt};break;case"SpotLight":n={position:new ee,direction:new ee,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ee,color:new yt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ee,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":n={color:new yt,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return s[e.id]=n,n}}}function zM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let HM=0;function VM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function GM(s){const e=new BM,n=zM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ee);const a=new ee,u=new Bt,f=new Bt;function d(m){let v=0,x=0,y=0;for(let xe=0;xe<9;xe++)r.probe[xe].set(0,0,0);let S=0,w=0,A=0,_=0,g=0,I=0,P=0,U=0,J=0,z=0,N=0;m.sort(VM);for(let xe=0,E=m.length;xe<E;xe++){const C=m[xe],re=C.color,te=C.intensity,le=C.distance,he=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)v+=re.r*te,x+=re.g*te,y+=re.b*te;else if(C.isLightProbe){for(let ne=0;ne<9;ne++)r.probe[ne].addScaledVector(C.sh.coefficients[ne],te);N++}else if(C.isDirectionalLight){const ne=e.get(C);if(ne.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const oe=C.shadow,k=n.get(C);k.shadowIntensity=oe.intensity,k.shadowBias=oe.bias,k.shadowNormalBias=oe.normalBias,k.shadowRadius=oe.radius,k.shadowMapSize=oe.mapSize,r.directionalShadow[S]=k,r.directionalShadowMap[S]=he,r.directionalShadowMatrix[S]=C.shadow.matrix,I++}r.directional[S]=ne,S++}else if(C.isSpotLight){const ne=e.get(C);ne.position.setFromMatrixPosition(C.matrixWorld),ne.color.copy(re).multiplyScalar(te),ne.distance=le,ne.coneCos=Math.cos(C.angle),ne.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),ne.decay=C.decay,r.spot[A]=ne;const oe=C.shadow;if(C.map&&(r.spotLightMap[J]=C.map,J++,oe.updateMatrices(C),C.castShadow&&z++),r.spotLightMatrix[A]=oe.matrix,C.castShadow){const k=n.get(C);k.shadowIntensity=oe.intensity,k.shadowBias=oe.bias,k.shadowNormalBias=oe.normalBias,k.shadowRadius=oe.radius,k.shadowMapSize=oe.mapSize,r.spotShadow[A]=k,r.spotShadowMap[A]=he,U++}A++}else if(C.isRectAreaLight){const ne=e.get(C);ne.color.copy(re).multiplyScalar(te),ne.halfWidth.set(C.width*.5,0,0),ne.halfHeight.set(0,C.height*.5,0),r.rectArea[_]=ne,_++}else if(C.isPointLight){const ne=e.get(C);if(ne.color.copy(C.color).multiplyScalar(C.intensity),ne.distance=C.distance,ne.decay=C.decay,C.castShadow){const oe=C.shadow,k=n.get(C);k.shadowIntensity=oe.intensity,k.shadowBias=oe.bias,k.shadowNormalBias=oe.normalBias,k.shadowRadius=oe.radius,k.shadowMapSize=oe.mapSize,k.shadowCameraNear=oe.camera.near,k.shadowCameraFar=oe.camera.far,r.pointShadow[w]=k,r.pointShadowMap[w]=he,r.pointShadowMatrix[w]=C.shadow.matrix,P++}r.point[w]=ne,w++}else if(C.isHemisphereLight){const ne=e.get(C);ne.skyColor.copy(C.color).multiplyScalar(te),ne.groundColor.copy(C.groundColor).multiplyScalar(te),r.hemi[g]=ne,g++}}_>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_FLOAT_1,r.rectAreaLTC2=Ce.LTC_FLOAT_2):(r.rectAreaLTC1=Ce.LTC_HALF_1,r.rectAreaLTC2=Ce.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=x,r.ambient[2]=y;const Y=r.hash;(Y.directionalLength!==S||Y.pointLength!==w||Y.spotLength!==A||Y.rectAreaLength!==_||Y.hemiLength!==g||Y.numDirectionalShadows!==I||Y.numPointShadows!==P||Y.numSpotShadows!==U||Y.numSpotMaps!==J||Y.numLightProbes!==N)&&(r.directional.length=S,r.spot.length=A,r.rectArea.length=_,r.point.length=w,r.hemi.length=g,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=U+J-z,r.spotLightMap.length=J,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=N,Y.directionalLength=S,Y.pointLength=w,Y.spotLength=A,Y.rectAreaLength=_,Y.hemiLength=g,Y.numDirectionalShadows=I,Y.numPointShadows=P,Y.numSpotShadows=U,Y.numSpotMaps=J,Y.numLightProbes=N,r.version=HM++)}function p(m,v){let x=0,y=0,S=0,w=0,A=0;const _=v.matrixWorldInverse;for(let g=0,I=m.length;g<I;g++){const P=m[g];if(P.isDirectionalLight){const U=r.directional[x];U.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(a),U.direction.transformDirection(_),x++}else if(P.isSpotLight){const U=r.spot[S];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(_),U.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(a),U.direction.transformDirection(_),S++}else if(P.isRectAreaLight){const U=r.rectArea[w];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(_),f.identity(),u.copy(P.matrixWorld),u.premultiply(_),f.extractRotation(u),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),U.halfWidth.applyMatrix4(f),U.halfHeight.applyMatrix4(f),w++}else if(P.isPointLight){const U=r.point[y];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(_),y++}else if(P.isHemisphereLight){const U=r.hemi[A];U.direction.setFromMatrixPosition(P.matrixWorld),U.direction.transformDirection(_),A++}}}return{setup:d,setupView:p,state:r}}function Em(s){const e=new GM(s),n=[],r=[];function a(v){m.camera=v,n.length=0,r.length=0}function u(v){n.push(v)}function f(v){r.push(v)}function d(){e.setup(n)}function p(v){e.setupView(n,v)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:f}}function WM(s){let e=new WeakMap;function n(a,u=0){const f=e.get(a);let d;return f===void 0?(d=new Em(s),e.set(a,[d])):u>=f.length?(d=new Em(s),f.push(d)):d=f[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}class XM extends Ws{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jM extends Ws{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const YM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qM=`uniform sampler2D shadow_pass;
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
}`;function KM(s,e,n){let r=new ag;const a=new Rt,u=new Rt,f=new Ht,d=new XM({depthPacking:zv}),p=new jM,m={},v=n.maxTextureSize,x={[gr]:An,[An]:gr,[bi]:bi},y=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:YM,fragmentShader:qM}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const w=new si;w.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Ii(w,y),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fm;let g=this.type;this.render=function(z,N,Y){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||z.length===0)return;const xe=s.getRenderTarget(),E=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),re=s.state;re.setBlending(pr),re.buffers.color.setClear(1,1,1,1),re.buffers.depth.setTest(!0),re.setScissorTest(!1);const te=g!==Li&&this.type===Li,le=g===Li&&this.type!==Li;for(let he=0,ne=z.length;he<ne;he++){const oe=z[he],k=oe.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;a.copy(k.mapSize);const ue=k.getFrameExtents();if(a.multiply(ue),u.copy(k.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(u.x=Math.floor(v/ue.x),a.x=u.x*ue.x,k.mapSize.x=u.x),a.y>v&&(u.y=Math.floor(v/ue.y),a.y=u.y*ue.y,k.mapSize.y=u.y)),k.map===null||te===!0||le===!0){const b=this.type!==Li?{minFilter:Wn,magFilter:Wn}:{};k.map!==null&&k.map.dispose(),k.map=new Xr(a.x,a.y,b),k.map.texture.name=oe.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();const ie=k.getViewportCount();for(let b=0;b<ie;b++){const q=k.getViewport(b);f.set(u.x*q.x,u.y*q.y,u.x*q.z,u.y*q.w),re.viewport(f),k.updateMatrices(oe,b),r=k.getFrustum(),U(N,Y,k.camera,oe,this.type)}k.isPointLightShadow!==!0&&this.type===Li&&I(k,Y),k.needsUpdate=!1}g=this.type,_.needsUpdate=!1,s.setRenderTarget(xe,E,C)};function I(z,N){const Y=e.update(A);y.defines.VSM_SAMPLES!==z.blurSamples&&(y.defines.VSM_SAMPLES=z.blurSamples,S.defines.VSM_SAMPLES=z.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Xr(a.x,a.y)),y.uniforms.shadow_pass.value=z.map.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,s.setRenderTarget(z.mapPass),s.clear(),s.renderBufferDirect(N,null,Y,y,A,null),S.uniforms.shadow_pass.value=z.mapPass.texture,S.uniforms.resolution.value=z.mapSize,S.uniforms.radius.value=z.radius,s.setRenderTarget(z.map),s.clear(),s.renderBufferDirect(N,null,Y,S,A,null)}function P(z,N,Y,xe){let E=null;const C=Y.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(C!==void 0)E=C;else if(E=Y.isPointLight===!0?p:d,s.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const re=E.uuid,te=N.uuid;let le=m[re];le===void 0&&(le={},m[re]=le);let he=le[te];he===void 0&&(he=E.clone(),le[te]=he,N.addEventListener("dispose",J)),E=he}if(E.visible=N.visible,E.wireframe=N.wireframe,xe===Li?E.side=N.shadowSide!==null?N.shadowSide:N.side:E.side=N.shadowSide!==null?N.shadowSide:x[N.side],E.alphaMap=N.alphaMap,E.alphaTest=N.alphaTest,E.map=N.map,E.clipShadows=N.clipShadows,E.clippingPlanes=N.clippingPlanes,E.clipIntersection=N.clipIntersection,E.displacementMap=N.displacementMap,E.displacementScale=N.displacementScale,E.displacementBias=N.displacementBias,E.wireframeLinewidth=N.wireframeLinewidth,E.linewidth=N.linewidth,Y.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const re=s.properties.get(E);re.light=Y}return E}function U(z,N,Y,xe,E){if(z.visible===!1)return;if(z.layers.test(N.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&E===Li)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,z.matrixWorld);const te=e.update(z),le=z.material;if(Array.isArray(le)){const he=te.groups;for(let ne=0,oe=he.length;ne<oe;ne++){const k=he[ne],ue=le[k.materialIndex];if(ue&&ue.visible){const ie=P(z,ue,xe,E);z.onBeforeShadow(s,z,N,Y,te,ie,k),s.renderBufferDirect(Y,null,te,ie,z,k),z.onAfterShadow(s,z,N,Y,te,ie,k)}}}else if(le.visible){const he=P(z,le,xe,E);z.onBeforeShadow(s,z,N,Y,te,he,null),s.renderBufferDirect(Y,null,te,he,z,null),z.onAfterShadow(s,z,N,Y,te,he,null)}}const re=z.children;for(let te=0,le=re.length;te<le;te++)U(re[te],N,Y,xe,E)}function J(z){z.target.removeEventListener("dispose",J);for(const Y in m){const xe=m[Y],E=z.target.uuid;E in xe&&(xe[E].dispose(),delete xe[E])}}}const $M={[nf]:rf,[sf]:lf,[of]:uf,[Os]:af,[rf]:nf,[lf]:sf,[uf]:of,[af]:Os};function ZM(s){function e(){let H=!1;const be=new Ht;let se=null;const de=new Ht(0,0,0,0);return{setMask:function(Re){se!==Re&&!H&&(s.colorMask(Re,Re,Re,Re),se=Re)},setLocked:function(Re){H=Re},setClear:function(Re,Ue,ct,Nt,nn){nn===!0&&(Re*=Nt,Ue*=Nt,ct*=Nt),be.set(Re,Ue,ct,Nt),de.equals(be)===!1&&(s.clearColor(Re,Ue,ct,Nt),de.copy(be))},reset:function(){H=!1,se=null,de.set(-1,0,0,0)}}}function n(){let H=!1,be=!1,se=null,de=null,Re=null;return{setReversed:function(Ue){be=Ue},setTest:function(Ue){Ue?ge(s.DEPTH_TEST):ye(s.DEPTH_TEST)},setMask:function(Ue){se!==Ue&&!H&&(s.depthMask(Ue),se=Ue)},setFunc:function(Ue){if(be&&(Ue=$M[Ue]),de!==Ue){switch(Ue){case nf:s.depthFunc(s.NEVER);break;case rf:s.depthFunc(s.ALWAYS);break;case sf:s.depthFunc(s.LESS);break;case Os:s.depthFunc(s.LEQUAL);break;case of:s.depthFunc(s.EQUAL);break;case af:s.depthFunc(s.GEQUAL);break;case lf:s.depthFunc(s.GREATER);break;case uf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}de=Ue}},setLocked:function(Ue){H=Ue},setClear:function(Ue){Re!==Ue&&(s.clearDepth(Ue),Re=Ue)},reset:function(){H=!1,se=null,de=null,Re=null}}}function r(){let H=!1,be=null,se=null,de=null,Re=null,Ue=null,ct=null,Nt=null,nn=null;return{setTest:function(ht){H||(ht?ge(s.STENCIL_TEST):ye(s.STENCIL_TEST))},setMask:function(ht){be!==ht&&!H&&(s.stencilMask(ht),be=ht)},setFunc:function(ht,Kt,Fn){(se!==ht||de!==Kt||Re!==Fn)&&(s.stencilFunc(ht,Kt,Fn),se=ht,de=Kt,Re=Fn)},setOp:function(ht,Kt,Fn){(Ue!==ht||ct!==Kt||Nt!==Fn)&&(s.stencilOp(ht,Kt,Fn),Ue=ht,ct=Kt,Nt=Fn)},setLocked:function(ht){H=ht},setClear:function(ht){nn!==ht&&(s.clearStencil(ht),nn=ht)},reset:function(){H=!1,be=null,se=null,de=null,Re=null,Ue=null,ct=null,Nt=null,nn=null}}}const a=new e,u=new n,f=new r,d=new WeakMap,p=new WeakMap;let m={},v={},x=new WeakMap,y=[],S=null,w=!1,A=null,_=null,g=null,I=null,P=null,U=null,J=null,z=new yt(0,0,0),N=0,Y=!1,xe=null,E=null,C=null,re=null,te=null;const le=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let he=!1,ne=0;const oe=s.getParameter(s.VERSION);oe.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(oe)[1]),he=ne>=1):oe.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),he=ne>=2);let k=null,ue={};const ie=s.getParameter(s.SCISSOR_BOX),b=s.getParameter(s.VIEWPORT),q=new Ht().fromArray(ie),we=new Ht().fromArray(b);function X(H,be,se,de){const Re=new Uint8Array(4),Ue=s.createTexture();s.bindTexture(H,Ue),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ct=0;ct<se;ct++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(be,0,s.RGBA,1,1,de,0,s.RGBA,s.UNSIGNED_BYTE,Re):s.texImage2D(be+ct,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Re);return Ue}const ae={};ae[s.TEXTURE_2D]=X(s.TEXTURE_2D,s.TEXTURE_2D,1),ae[s.TEXTURE_CUBE_MAP]=X(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[s.TEXTURE_2D_ARRAY]=X(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ae[s.TEXTURE_3D]=X(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ge(s.DEPTH_TEST),u.setFunc(Os),at(!1),ft(Dp),ge(s.CULL_FACE),O(pr);function ge(H){m[H]!==!0&&(s.enable(H),m[H]=!0)}function ye(H){m[H]!==!1&&(s.disable(H),m[H]=!1)}function Pe(H,be){return v[H]!==be?(s.bindFramebuffer(H,be),v[H]=be,H===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=be),H===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=be),!0):!1}function Le(H,be){let se=y,de=!1;if(H){se=x.get(be),se===void 0&&(se=[],x.set(be,se));const Re=H.textures;if(se.length!==Re.length||se[0]!==s.COLOR_ATTACHMENT0){for(let Ue=0,ct=Re.length;Ue<ct;Ue++)se[Ue]=s.COLOR_ATTACHMENT0+Ue;se.length=Re.length,de=!0}}else se[0]!==s.BACK&&(se[0]=s.BACK,de=!0);de&&s.drawBuffers(se)}function et(H){return S!==H?(s.useProgram(H),S=H,!0):!1}const pt={[Br]:s.FUNC_ADD,[dv]:s.FUNC_SUBTRACT,[hv]:s.FUNC_REVERSE_SUBTRACT};pt[pv]=s.MIN,pt[mv]=s.MAX;const lt={[gv]:s.ZERO,[_v]:s.ONE,[vv]:s.SRC_COLOR,[ef]:s.SRC_ALPHA,[Tv]:s.SRC_ALPHA_SATURATE,[Mv]:s.DST_COLOR,[yv]:s.DST_ALPHA,[xv]:s.ONE_MINUS_SRC_COLOR,[tf]:s.ONE_MINUS_SRC_ALPHA,[Ev]:s.ONE_MINUS_DST_COLOR,[Sv]:s.ONE_MINUS_DST_ALPHA,[wv]:s.CONSTANT_COLOR,[Av]:s.ONE_MINUS_CONSTANT_COLOR,[Rv]:s.CONSTANT_ALPHA,[Cv]:s.ONE_MINUS_CONSTANT_ALPHA};function O(H,be,se,de,Re,Ue,ct,Nt,nn,ht){if(H===pr){w===!0&&(ye(s.BLEND),w=!1);return}if(w===!1&&(ge(s.BLEND),w=!0),H!==fv){if(H!==A||ht!==Y){if((_!==Br||P!==Br)&&(s.blendEquation(s.FUNC_ADD),_=Br,P=Br),ht)switch(H){case Is:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Cl:s.blendFunc(s.ONE,s.ONE);break;case Up:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ip:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Is:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Cl:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Up:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ip:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}g=null,I=null,U=null,J=null,z.set(0,0,0),N=0,A=H,Y=ht}return}Re=Re||be,Ue=Ue||se,ct=ct||de,(be!==_||Re!==P)&&(s.blendEquationSeparate(pt[be],pt[Re]),_=be,P=Re),(se!==g||de!==I||Ue!==U||ct!==J)&&(s.blendFuncSeparate(lt[se],lt[de],lt[Ue],lt[ct]),g=se,I=de,U=Ue,J=ct),(Nt.equals(z)===!1||nn!==N)&&(s.blendColor(Nt.r,Nt.g,Nt.b,nn),z.copy(Nt),N=nn),A=H,Y=!1}function tn(H,be){H.side===bi?ye(s.CULL_FACE):ge(s.CULL_FACE);let se=H.side===An;be&&(se=!se),at(se),H.blending===Is&&H.transparent===!1?O(pr):O(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),a.setMask(H.colorWrite);const de=H.stencilWrite;f.setTest(de),de&&(f.setMask(H.stencilWriteMask),f.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),f.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Tt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ge(s.SAMPLE_ALPHA_TO_COVERAGE):ye(s.SAMPLE_ALPHA_TO_COVERAGE)}function at(H){xe!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),xe=H)}function ft(H){H!==lv?(ge(s.CULL_FACE),H!==E&&(H===Dp?s.cullFace(s.BACK):H===uv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ye(s.CULL_FACE),E=H}function $e(H){H!==C&&(he&&s.lineWidth(H),C=H)}function Tt(H,be,se){H?(ge(s.POLYGON_OFFSET_FILL),(re!==be||te!==se)&&(s.polygonOffset(be,se),re=be,te=se)):ye(s.POLYGON_OFFSET_FILL)}function Qe(H){H?ge(s.SCISSOR_TEST):ye(s.SCISSOR_TEST)}function L(H){H===void 0&&(H=s.TEXTURE0+le-1),k!==H&&(s.activeTexture(H),k=H)}function T(H,be,se){se===void 0&&(k===null?se=s.TEXTURE0+le-1:se=k);let de=ue[se];de===void 0&&(de={type:void 0,texture:void 0},ue[se]=de),(de.type!==H||de.texture!==be)&&(k!==se&&(s.activeTexture(se),k=se),s.bindTexture(H,be||ae[H]),de.type=H,de.texture=be)}function K(){const H=ue[k];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function fe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function _e(){try{s.compressedTexImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ce(){try{s.texSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function je(){try{s.texSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ae(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ne(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function dt(){try{s.texStorage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Se(){try{s.texStorage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Fe(){try{s.texImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function tt(){try{s.texImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Je(H){q.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),q.copy(H))}function ke(H){we.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),we.copy(H))}function ut(H,be){let se=p.get(be);se===void 0&&(se=new WeakMap,p.set(be,se));let de=se.get(H);de===void 0&&(de=s.getUniformBlockIndex(be,H.name),se.set(H,de))}function it(H,be){const de=p.get(be).get(H);d.get(be)!==de&&(s.uniformBlockBinding(be,de,H.__bindingPointIndex),d.set(be,de))}function St(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},k=null,ue={},v={},x=new WeakMap,y=[],S=null,w=!1,A=null,_=null,g=null,I=null,P=null,U=null,J=null,z=new yt(0,0,0),N=0,Y=!1,xe=null,E=null,C=null,re=null,te=null,q.set(0,0,s.canvas.width,s.canvas.height),we.set(0,0,s.canvas.width,s.canvas.height),a.reset(),u.reset(),f.reset()}return{buffers:{color:a,depth:u,stencil:f},enable:ge,disable:ye,bindFramebuffer:Pe,drawBuffers:Le,useProgram:et,setBlending:O,setMaterial:tn,setFlipSided:at,setCullFace:ft,setLineWidth:$e,setPolygonOffset:Tt,setScissorTest:Qe,activeTexture:L,bindTexture:T,unbindTexture:K,compressedTexImage2D:fe,compressedTexImage3D:_e,texImage2D:Fe,texImage3D:tt,updateUBOMapping:ut,uniformBlockBinding:it,texStorage2D:dt,texStorage3D:Se,texSubImage2D:ce,texSubImage3D:je,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Ne,scissor:Je,viewport:ke,reset:St}}function Tm(s,e,n,r){const a=QM(r);switch(n){case Vm:return s*e;case Wm:return s*e;case Xm:return s*e*2;case jm:return s*e/a.components*a.byteLength;case qf:return s*e/a.components*a.byteLength;case Ym:return s*e*2/a.components*a.byteLength;case Kf:return s*e*2/a.components*a.byteLength;case Gm:return s*e*3/a.components*a.byteLength;case ri:return s*e*4/a.components*a.byteLength;case $f:return s*e*4/a.components*a.byteLength;case Sl:case Ml:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case El:case Tl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case mf:case _f:return Math.max(s,16)*Math.max(e,8)/4;case pf:case gf:return Math.max(s,8)*Math.max(e,8)/2;case vf:case xf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case yf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Mf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ef:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Tf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case wf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Af:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Rf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Cf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Pf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Lf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case bf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Df:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Uf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case If:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case wl:case Nf:case Ff:return Math.ceil(s/4)*Math.ceil(e/4)*16;case qm:case Of:return Math.ceil(s/4)*Math.ceil(e/4)*8;case kf:case Bf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function QM(s){switch(s){case Fi:case Bm:return{byteLength:1,components:1};case Fo:case zm:case Oo:return{byteLength:2,components:1};case jf:case Yf:return{byteLength:2,components:4};case Wr:case Xf:case Di:return{byteLength:4,components:1};case Hm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function JM(s,e,n,r,a,u,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Rt,v=new WeakMap;let x;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(L,T){return S?new OffscreenCanvas(L,T):Ul("canvas")}function A(L,T,K){let fe=1;const _e=Qe(L);if((_e.width>K||_e.height>K)&&(fe=K/Math.max(_e.width,_e.height)),fe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ce=Math.floor(fe*_e.width),je=Math.floor(fe*_e.height);x===void 0&&(x=w(ce,je));const Ae=T?w(ce,je):x;return Ae.width=ce,Ae.height=je,Ae.getContext("2d").drawImage(L,0,0,ce,je),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+ce+"x"+je+")."),Ae}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),L;return L}function _(L){return L.generateMipmaps&&L.minFilter!==Wn&&L.minFilter!==ni}function g(L){s.generateMipmap(L)}function I(L,T,K,fe,_e=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ce=T;if(T===s.RED&&(K===s.FLOAT&&(ce=s.R32F),K===s.HALF_FLOAT&&(ce=s.R16F),K===s.UNSIGNED_BYTE&&(ce=s.R8)),T===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(ce=s.R8UI),K===s.UNSIGNED_SHORT&&(ce=s.R16UI),K===s.UNSIGNED_INT&&(ce=s.R32UI),K===s.BYTE&&(ce=s.R8I),K===s.SHORT&&(ce=s.R16I),K===s.INT&&(ce=s.R32I)),T===s.RG&&(K===s.FLOAT&&(ce=s.RG32F),K===s.HALF_FLOAT&&(ce=s.RG16F),K===s.UNSIGNED_BYTE&&(ce=s.RG8)),T===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(ce=s.RG8UI),K===s.UNSIGNED_SHORT&&(ce=s.RG16UI),K===s.UNSIGNED_INT&&(ce=s.RG32UI),K===s.BYTE&&(ce=s.RG8I),K===s.SHORT&&(ce=s.RG16I),K===s.INT&&(ce=s.RG32I)),T===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(ce=s.RGB8UI),K===s.UNSIGNED_SHORT&&(ce=s.RGB16UI),K===s.UNSIGNED_INT&&(ce=s.RGB32UI),K===s.BYTE&&(ce=s.RGB8I),K===s.SHORT&&(ce=s.RGB16I),K===s.INT&&(ce=s.RGB32I)),T===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(ce=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(ce=s.RGBA16UI),K===s.UNSIGNED_INT&&(ce=s.RGBA32UI),K===s.BYTE&&(ce=s.RGBA8I),K===s.SHORT&&(ce=s.RGBA16I),K===s.INT&&(ce=s.RGBA32I)),T===s.RGB&&K===s.UNSIGNED_INT_5_9_9_9_REV&&(ce=s.RGB9_E5),T===s.RGBA){const je=_e?Pl:Mt.getTransfer(fe);K===s.FLOAT&&(ce=s.RGBA32F),K===s.HALF_FLOAT&&(ce=s.RGBA16F),K===s.UNSIGNED_BYTE&&(ce=je===Dt?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT_4_4_4_4&&(ce=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(ce=s.RGB5_A1)}return(ce===s.R16F||ce===s.R32F||ce===s.RG16F||ce===s.RG32F||ce===s.RGBA16F||ce===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function P(L,T){let K;return L?T===null||T===Wr||T===zs?K=s.DEPTH24_STENCIL8:T===Di?K=s.DEPTH32F_STENCIL8:T===Fo&&(K=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Wr||T===zs?K=s.DEPTH_COMPONENT24:T===Di?K=s.DEPTH_COMPONENT32F:T===Fo&&(K=s.DEPTH_COMPONENT16),K}function U(L,T){return _(L)===!0||L.isFramebufferTexture&&L.minFilter!==Wn&&L.minFilter!==ni?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function J(L){const T=L.target;T.removeEventListener("dispose",J),N(T),T.isVideoTexture&&v.delete(T)}function z(L){const T=L.target;T.removeEventListener("dispose",z),xe(T)}function N(L){const T=r.get(L);if(T.__webglInit===void 0)return;const K=L.source,fe=y.get(K);if(fe){const _e=fe[T.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&Y(L),Object.keys(fe).length===0&&y.delete(K)}r.remove(L)}function Y(L){const T=r.get(L);s.deleteTexture(T.__webglTexture);const K=L.source,fe=y.get(K);delete fe[T.__cacheKey],f.memory.textures--}function xe(L){const T=r.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(T.__webglFramebuffer[fe]))for(let _e=0;_e<T.__webglFramebuffer[fe].length;_e++)s.deleteFramebuffer(T.__webglFramebuffer[fe][_e]);else s.deleteFramebuffer(T.__webglFramebuffer[fe]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[fe])}else{if(Array.isArray(T.__webglFramebuffer))for(let fe=0;fe<T.__webglFramebuffer.length;fe++)s.deleteFramebuffer(T.__webglFramebuffer[fe]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let fe=0;fe<T.__webglColorRenderbuffer.length;fe++)T.__webglColorRenderbuffer[fe]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[fe]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const K=L.textures;for(let fe=0,_e=K.length;fe<_e;fe++){const ce=r.get(K[fe]);ce.__webglTexture&&(s.deleteTexture(ce.__webglTexture),f.memory.textures--),r.remove(K[fe])}r.remove(L)}let E=0;function C(){E=0}function re(){const L=E;return L>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+a.maxTextures),E+=1,L}function te(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function le(L,T){const K=r.get(L);if(L.isVideoTexture&&$e(L),L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){const fe=L.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(K,L,T);return}}n.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+T)}function he(L,T){const K=r.get(L);if(L.version>0&&K.__version!==L.version){we(K,L,T);return}n.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+T)}function ne(L,T){const K=r.get(L);if(L.version>0&&K.__version!==L.version){we(K,L,T);return}n.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+T)}function oe(L,T){const K=r.get(L);if(L.version>0&&K.__version!==L.version){X(K,L,T);return}n.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+T)}const k={[df]:s.REPEAT,[Hr]:s.CLAMP_TO_EDGE,[hf]:s.MIRRORED_REPEAT},ue={[Wn]:s.NEAREST,[kv]:s.NEAREST_MIPMAP_NEAREST,[Ka]:s.NEAREST_MIPMAP_LINEAR,[ni]:s.LINEAR,[Mc]:s.LINEAR_MIPMAP_NEAREST,[Vr]:s.LINEAR_MIPMAP_LINEAR},ie={[Gv]:s.NEVER,[Kv]:s.ALWAYS,[Wv]:s.LESS,[Km]:s.LEQUAL,[Xv]:s.EQUAL,[qv]:s.GEQUAL,[jv]:s.GREATER,[Yv]:s.NOTEQUAL};function b(L,T){if(T.type===Di&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===ni||T.magFilter===Mc||T.magFilter===Ka||T.magFilter===Vr||T.minFilter===ni||T.minFilter===Mc||T.minFilter===Ka||T.minFilter===Vr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,k[T.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,k[T.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,k[T.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,ue[T.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,ue[T.minFilter]),T.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,ie[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Wn||T.minFilter!==Ka&&T.minFilter!==Vr||T.type===Di&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function q(L,T){let K=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",J));const fe=T.source;let _e=y.get(fe);_e===void 0&&(_e={},y.set(fe,_e));const ce=te(T);if(ce!==L.__cacheKey){_e[ce]===void 0&&(_e[ce]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,K=!0),_e[ce].usedTimes++;const je=_e[L.__cacheKey];je!==void 0&&(_e[L.__cacheKey].usedTimes--,je.usedTimes===0&&Y(T)),L.__cacheKey=ce,L.__webglTexture=_e[ce].texture}return K}function we(L,T,K){let fe=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(fe=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(fe=s.TEXTURE_3D);const _e=q(L,T),ce=T.source;n.bindTexture(fe,L.__webglTexture,s.TEXTURE0+K);const je=r.get(ce);if(ce.version!==je.__version||_e===!0){n.activeTexture(s.TEXTURE0+K);const Ae=Mt.getPrimaries(Mt.workingColorSpace),Ne=T.colorSpace===hr?null:Mt.getPrimaries(T.colorSpace),dt=T.colorSpace===hr||Ae===Ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Se=A(T.image,!1,a.maxTextureSize);Se=Tt(T,Se);const Fe=u.convert(T.format,T.colorSpace),tt=u.convert(T.type);let Je=I(T.internalFormat,Fe,tt,T.colorSpace,T.isVideoTexture);b(fe,T);let ke;const ut=T.mipmaps,it=T.isVideoTexture!==!0,St=je.__version===void 0||_e===!0,H=ce.dataReady,be=U(T,Se);if(T.isDepthTexture)Je=P(T.format===Hs,T.type),St&&(it?n.texStorage2D(s.TEXTURE_2D,1,Je,Se.width,Se.height):n.texImage2D(s.TEXTURE_2D,0,Je,Se.width,Se.height,0,Fe,tt,null));else if(T.isDataTexture)if(ut.length>0){it&&St&&n.texStorage2D(s.TEXTURE_2D,be,Je,ut[0].width,ut[0].height);for(let se=0,de=ut.length;se<de;se++)ke=ut[se],it?H&&n.texSubImage2D(s.TEXTURE_2D,se,0,0,ke.width,ke.height,Fe,tt,ke.data):n.texImage2D(s.TEXTURE_2D,se,Je,ke.width,ke.height,0,Fe,tt,ke.data);T.generateMipmaps=!1}else it?(St&&n.texStorage2D(s.TEXTURE_2D,be,Je,Se.width,Se.height),H&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Se.width,Se.height,Fe,tt,Se.data)):n.texImage2D(s.TEXTURE_2D,0,Je,Se.width,Se.height,0,Fe,tt,Se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){it&&St&&n.texStorage3D(s.TEXTURE_2D_ARRAY,be,Je,ut[0].width,ut[0].height,Se.depth);for(let se=0,de=ut.length;se<de;se++)if(ke=ut[se],T.format!==ri)if(Fe!==null)if(it){if(H)if(T.layerUpdates.size>0){const Re=Tm(ke.width,ke.height,T.format,T.type);for(const Ue of T.layerUpdates){const ct=ke.data.subarray(Ue*Re/ke.data.BYTES_PER_ELEMENT,(Ue+1)*Re/ke.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,Ue,ke.width,ke.height,1,Fe,ct,0,0)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,ke.width,ke.height,Se.depth,Fe,ke.data,0,0)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,se,Je,ke.width,ke.height,Se.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?H&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,ke.width,ke.height,Se.depth,Fe,tt,ke.data):n.texImage3D(s.TEXTURE_2D_ARRAY,se,Je,ke.width,ke.height,Se.depth,0,Fe,tt,ke.data)}else{it&&St&&n.texStorage2D(s.TEXTURE_2D,be,Je,ut[0].width,ut[0].height);for(let se=0,de=ut.length;se<de;se++)ke=ut[se],T.format!==ri?Fe!==null?it?H&&n.compressedTexSubImage2D(s.TEXTURE_2D,se,0,0,ke.width,ke.height,Fe,ke.data):n.compressedTexImage2D(s.TEXTURE_2D,se,Je,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?H&&n.texSubImage2D(s.TEXTURE_2D,se,0,0,ke.width,ke.height,Fe,tt,ke.data):n.texImage2D(s.TEXTURE_2D,se,Je,ke.width,ke.height,0,Fe,tt,ke.data)}else if(T.isDataArrayTexture)if(it){if(St&&n.texStorage3D(s.TEXTURE_2D_ARRAY,be,Je,Se.width,Se.height,Se.depth),H)if(T.layerUpdates.size>0){const se=Tm(Se.width,Se.height,T.format,T.type);for(const de of T.layerUpdates){const Re=Se.data.subarray(de*se/Se.data.BYTES_PER_ELEMENT,(de+1)*se/Se.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,de,Se.width,Se.height,1,Fe,tt,Re)}T.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Fe,tt,Se.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Je,Se.width,Se.height,Se.depth,0,Fe,tt,Se.data);else if(T.isData3DTexture)it?(St&&n.texStorage3D(s.TEXTURE_3D,be,Je,Se.width,Se.height,Se.depth),H&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Fe,tt,Se.data)):n.texImage3D(s.TEXTURE_3D,0,Je,Se.width,Se.height,Se.depth,0,Fe,tt,Se.data);else if(T.isFramebufferTexture){if(St)if(it)n.texStorage2D(s.TEXTURE_2D,be,Je,Se.width,Se.height);else{let se=Se.width,de=Se.height;for(let Re=0;Re<be;Re++)n.texImage2D(s.TEXTURE_2D,Re,Je,se,de,0,Fe,tt,null),se>>=1,de>>=1}}else if(ut.length>0){if(it&&St){const se=Qe(ut[0]);n.texStorage2D(s.TEXTURE_2D,be,Je,se.width,se.height)}for(let se=0,de=ut.length;se<de;se++)ke=ut[se],it?H&&n.texSubImage2D(s.TEXTURE_2D,se,0,0,Fe,tt,ke):n.texImage2D(s.TEXTURE_2D,se,Je,Fe,tt,ke);T.generateMipmaps=!1}else if(it){if(St){const se=Qe(Se);n.texStorage2D(s.TEXTURE_2D,be,Je,se.width,se.height)}H&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Fe,tt,Se)}else n.texImage2D(s.TEXTURE_2D,0,Je,Fe,tt,Se);_(T)&&g(fe),je.__version=ce.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function X(L,T,K){if(T.image.length!==6)return;const fe=q(L,T),_e=T.source;n.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+K);const ce=r.get(_e);if(_e.version!==ce.__version||fe===!0){n.activeTexture(s.TEXTURE0+K);const je=Mt.getPrimaries(Mt.workingColorSpace),Ae=T.colorSpace===hr?null:Mt.getPrimaries(T.colorSpace),Ne=T.colorSpace===hr||je===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const dt=T.isCompressedTexture||T.image[0].isCompressedTexture,Se=T.image[0]&&T.image[0].isDataTexture,Fe=[];for(let de=0;de<6;de++)!dt&&!Se?Fe[de]=A(T.image[de],!0,a.maxCubemapSize):Fe[de]=Se?T.image[de].image:T.image[de],Fe[de]=Tt(T,Fe[de]);const tt=Fe[0],Je=u.convert(T.format,T.colorSpace),ke=u.convert(T.type),ut=I(T.internalFormat,Je,ke,T.colorSpace),it=T.isVideoTexture!==!0,St=ce.__version===void 0||fe===!0,H=_e.dataReady;let be=U(T,tt);b(s.TEXTURE_CUBE_MAP,T);let se;if(dt){it&&St&&n.texStorage2D(s.TEXTURE_CUBE_MAP,be,ut,tt.width,tt.height);for(let de=0;de<6;de++){se=Fe[de].mipmaps;for(let Re=0;Re<se.length;Re++){const Ue=se[Re];T.format!==ri?Je!==null?it?H&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Re,0,0,Ue.width,Ue.height,Je,Ue.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Re,ut,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Re,0,0,Ue.width,Ue.height,Je,ke,Ue.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Re,ut,Ue.width,Ue.height,0,Je,ke,Ue.data)}}}else{if(se=T.mipmaps,it&&St){se.length>0&&be++;const de=Qe(Fe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,be,ut,de.width,de.height)}for(let de=0;de<6;de++)if(Se){it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Fe[de].width,Fe[de].height,Je,ke,Fe[de].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ut,Fe[de].width,Fe[de].height,0,Je,ke,Fe[de].data);for(let Re=0;Re<se.length;Re++){const ct=se[Re].image[de].image;it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Re+1,0,0,ct.width,ct.height,Je,ke,ct.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Re+1,ut,ct.width,ct.height,0,Je,ke,ct.data)}}else{it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Je,ke,Fe[de]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ut,Je,ke,Fe[de]);for(let Re=0;Re<se.length;Re++){const Ue=se[Re];it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Re+1,0,0,Je,ke,Ue.image[de]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Re+1,ut,Je,ke,Ue.image[de])}}}_(T)&&g(s.TEXTURE_CUBE_MAP),ce.__version=_e.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function ae(L,T,K,fe,_e,ce){const je=u.convert(K.format,K.colorSpace),Ae=u.convert(K.type),Ne=I(K.internalFormat,je,Ae,K.colorSpace);if(!r.get(T).__hasExternalTextures){const Se=Math.max(1,T.width>>ce),Fe=Math.max(1,T.height>>ce);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?n.texImage3D(_e,ce,Ne,Se,Fe,T.depth,0,je,Ae,null):n.texImage2D(_e,ce,Ne,Se,Fe,0,je,Ae,null)}n.bindFramebuffer(s.FRAMEBUFFER,L),ft(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,_e,r.get(K).__webglTexture,0,at(T)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,fe,_e,r.get(K).__webglTexture,ce),n.bindFramebuffer(s.FRAMEBUFFER,null)}function ge(L,T,K){if(s.bindRenderbuffer(s.RENDERBUFFER,L),T.depthBuffer){const fe=T.depthTexture,_e=fe&&fe.isDepthTexture?fe.type:null,ce=P(T.stencilBuffer,_e),je=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=at(T);ft(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,ce,T.width,T.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,ce,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ce,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,je,s.RENDERBUFFER,L)}else{const fe=T.textures;for(let _e=0;_e<fe.length;_e++){const ce=fe[_e],je=u.convert(ce.format,ce.colorSpace),Ae=u.convert(ce.type),Ne=I(ce.internalFormat,je,Ae,ce.colorSpace),dt=at(T);K&&ft(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,Ne,T.width,T.height):ft(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,Ne,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Ne,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ye(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),le(T.depthTexture,0);const fe=r.get(T.depthTexture).__webglTexture,_e=at(T);if(T.depthTexture.format===Ns)ft(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,fe,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,fe,0);else if(T.depthTexture.format===Hs)ft(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,fe,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function Pe(L){const T=r.get(L),K=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const fe=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),fe){const _e=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,fe.removeEventListener("dispose",_e)};fe.addEventListener("dispose",_e),T.__depthDisposeCallback=_e}T.__boundDepthTexture=fe}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");ye(T.__webglFramebuffer,L)}else if(K){T.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[fe]),T.__webglDepthbuffer[fe]===void 0)T.__webglDepthbuffer[fe]=s.createRenderbuffer(),ge(T.__webglDepthbuffer[fe],L,!1);else{const _e=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=T.__webglDepthbuffer[fe];s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,ce)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),ge(T.__webglDepthbuffer,L,!1);else{const fe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,_e),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,_e)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Le(L,T,K){const fe=r.get(L);T!==void 0&&ae(fe.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&Pe(L)}function et(L){const T=L.texture,K=r.get(L),fe=r.get(T);L.addEventListener("dispose",z);const _e=L.textures,ce=L.isWebGLCubeRenderTarget===!0,je=_e.length>1;if(je||(fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture()),fe.__version=T.version,f.memory.textures++),ce){K.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer[Ae]=[];for(let Ne=0;Ne<T.mipmaps.length;Ne++)K.__webglFramebuffer[Ae][Ne]=s.createFramebuffer()}else K.__webglFramebuffer[Ae]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer=[];for(let Ae=0;Ae<T.mipmaps.length;Ae++)K.__webglFramebuffer[Ae]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(je)for(let Ae=0,Ne=_e.length;Ae<Ne;Ae++){const dt=r.get(_e[Ae]);dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture(),f.memory.textures++)}if(L.samples>0&&ft(L)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Ae=0;Ae<_e.length;Ae++){const Ne=_e[Ae];K.__webglColorRenderbuffer[Ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[Ae]);const dt=u.convert(Ne.format,Ne.colorSpace),Se=u.convert(Ne.type),Fe=I(Ne.internalFormat,dt,Se,Ne.colorSpace,L.isXRRenderTarget===!0),tt=at(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,Fe,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,K.__webglColorRenderbuffer[Ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),ge(K.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ce){n.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),b(s.TEXTURE_CUBE_MAP,T);for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ne=0;Ne<T.mipmaps.length;Ne++)ae(K.__webglFramebuffer[Ae][Ne],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ne);else ae(K.__webglFramebuffer[Ae],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);_(T)&&g(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(je){for(let Ae=0,Ne=_e.length;Ae<Ne;Ae++){const dt=_e[Ae],Se=r.get(dt);n.bindTexture(s.TEXTURE_2D,Se.__webglTexture),b(s.TEXTURE_2D,dt),ae(K.__webglFramebuffer,L,dt,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,0),_(dt)&&g(s.TEXTURE_2D)}n.unbindTexture()}else{let Ae=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ae=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ae,fe.__webglTexture),b(Ae,T),T.mipmaps&&T.mipmaps.length>0)for(let Ne=0;Ne<T.mipmaps.length;Ne++)ae(K.__webglFramebuffer[Ne],L,T,s.COLOR_ATTACHMENT0,Ae,Ne);else ae(K.__webglFramebuffer,L,T,s.COLOR_ATTACHMENT0,Ae,0);_(T)&&g(Ae),n.unbindTexture()}L.depthBuffer&&Pe(L)}function pt(L){const T=L.textures;for(let K=0,fe=T.length;K<fe;K++){const _e=T[K];if(_(_e)){const ce=L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,je=r.get(_e).__webglTexture;n.bindTexture(ce,je),g(ce),n.unbindTexture()}}}const lt=[],O=[];function tn(L){if(L.samples>0){if(ft(L)===!1){const T=L.textures,K=L.width,fe=L.height;let _e=s.COLOR_BUFFER_BIT;const ce=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,je=r.get(L),Ae=T.length>1;if(Ae)for(let Ne=0;Ne<T.length;Ne++)n.bindFramebuffer(s.FRAMEBUFFER,je.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,je.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let Ne=0;Ne<T.length;Ne++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),Ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,je.__webglColorRenderbuffer[Ne]);const dt=r.get(T[Ne]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,dt,0)}s.blitFramebuffer(0,0,K,fe,0,0,K,fe,_e,s.NEAREST),p===!0&&(lt.length=0,O.length=0,lt.push(s.COLOR_ATTACHMENT0+Ne),L.depthBuffer&&L.resolveDepthBuffer===!1&&(lt.push(ce),O.push(ce),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,O)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,lt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ae)for(let Ne=0;Ne<T.length;Ne++){n.bindFramebuffer(s.FRAMEBUFFER,je.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,je.__webglColorRenderbuffer[Ne]);const dt=r.get(T[Ne]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,je.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,dt,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const T=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function at(L){return Math.min(a.maxSamples,L.samples)}function ft(L){const T=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function $e(L){const T=f.render.frame;v.get(L)!==T&&(v.set(L,T),L.update())}function Tt(L,T){const K=L.colorSpace,fe=L.format,_e=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||K!==_r&&K!==hr&&(Mt.getTransfer(K)===Dt?(fe!==ri||_e!==Fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),T}function Qe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=re,this.resetTextureUnits=C,this.setTexture2D=le,this.setTexture2DArray=he,this.setTexture3D=ne,this.setTextureCube=oe,this.rebindTextures=Le,this.setupRenderTarget=et,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=ft}function eE(s,e){function n(r,a=hr){let u;const f=Mt.getTransfer(a);if(r===Fi)return s.UNSIGNED_BYTE;if(r===jf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Yf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Hm)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Bm)return s.BYTE;if(r===zm)return s.SHORT;if(r===Fo)return s.UNSIGNED_SHORT;if(r===Xf)return s.INT;if(r===Wr)return s.UNSIGNED_INT;if(r===Di)return s.FLOAT;if(r===Oo)return s.HALF_FLOAT;if(r===Vm)return s.ALPHA;if(r===Gm)return s.RGB;if(r===ri)return s.RGBA;if(r===Wm)return s.LUMINANCE;if(r===Xm)return s.LUMINANCE_ALPHA;if(r===Ns)return s.DEPTH_COMPONENT;if(r===Hs)return s.DEPTH_STENCIL;if(r===jm)return s.RED;if(r===qf)return s.RED_INTEGER;if(r===Ym)return s.RG;if(r===Kf)return s.RG_INTEGER;if(r===$f)return s.RGBA_INTEGER;if(r===Sl||r===Ml||r===El||r===Tl)if(f===Dt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Sl)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ml)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===El)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Tl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Sl)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ml)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===El)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Tl)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===pf||r===mf||r===gf||r===_f)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===pf)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===mf)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===gf)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===_f)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===vf||r===xf||r===yf)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===vf||r===xf)return f===Dt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===yf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Sf||r===Mf||r===Ef||r===Tf||r===wf||r===Af||r===Rf||r===Cf||r===Pf||r===Lf||r===bf||r===Df||r===Uf||r===If)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Sf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Mf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ef)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Tf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===wf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Af)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Rf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Cf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Pf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Lf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===bf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Df)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Uf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===If)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===wl||r===Nf||r===Ff)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===wl)return f===Dt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Nf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ff)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===qm||r===Of||r===kf||r===Bf)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===wl)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Of)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===kf)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Bf)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===zs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class tE extends ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class gl extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nE={type:"move"};class Qc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const A of e.hand.values()){const _=n.getJointPose(A,r),g=this._getHandJoint(m,A);_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=_.radius),g.visible=_!==null}const v=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],y=v.position.distanceTo(x.position),S=.02,w=.005;m.inputState.pinching&&y>S+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&y<=S-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(nE)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new gl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const iE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rE=`
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

}`;class sE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Rn,u=e.properties.get(a);u.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new ki({vertexShader:iE,fragmentShader:rE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ii(new kl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oE extends Gs{constructor(e,n){super();const r=this;let a=null,u=1,f=null,d="local-floor",p=1,m=null,v=null,x=null,y=null,S=null,w=null;const A=new sE,_=n.getContextAttributes();let g=null,I=null;const P=[],U=[],J=new Rt;let z=null;const N=new ti;N.layers.enable(1),N.viewport=new Ht;const Y=new ti;Y.layers.enable(2),Y.viewport=new Ht;const xe=[N,Y],E=new tE;E.layers.enable(1),E.layers.enable(2);let C=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ae=P[X];return ae===void 0&&(ae=new Qc,P[X]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(X){let ae=P[X];return ae===void 0&&(ae=new Qc,P[X]=ae),ae.getGripSpace()},this.getHand=function(X){let ae=P[X];return ae===void 0&&(ae=new Qc,P[X]=ae),ae.getHandSpace()};function te(X){const ae=U.indexOf(X.inputSource);if(ae===-1)return;const ge=P[ae];ge!==void 0&&(ge.update(X.inputSource,X.frame,m||f),ge.dispatchEvent({type:X.type,data:X.inputSource}))}function le(){a.removeEventListener("select",te),a.removeEventListener("selectstart",te),a.removeEventListener("selectend",te),a.removeEventListener("squeeze",te),a.removeEventListener("squeezestart",te),a.removeEventListener("squeezeend",te),a.removeEventListener("end",le),a.removeEventListener("inputsourceschange",he);for(let X=0;X<P.length;X++){const ae=U[X];ae!==null&&(U[X]=null,P[X].disconnect(ae))}C=null,re=null,A.reset(),e.setRenderTarget(g),S=null,y=null,x=null,a=null,I=null,we.stop(),r.isPresenting=!1,e.setPixelRatio(z),e.setSize(J.width,J.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){u=X,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){d=X,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(X){m=X},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return x},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(X){if(a=X,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",te),a.addEventListener("selectstart",te),a.addEventListener("selectend",te),a.addEventListener("squeeze",te),a.addEventListener("squeezestart",te),a.addEventListener("squeezeend",te),a.addEventListener("end",le),a.addEventListener("inputsourceschange",he),_.xrCompatible!==!0&&await n.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(J),a.renderState.layers===void 0){const ae={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(a,n,ae),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),I=new Xr(S.framebufferWidth,S.framebufferHeight,{format:ri,type:Fi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ae=null,ge=null,ye=null;_.depth&&(ye=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ae=_.stencil?Hs:Ns,ge=_.stencil?zs:Wr);const Pe={colorFormat:n.RGBA8,depthFormat:ye,scaleFactor:u};x=new XRWebGLBinding(a,n),y=x.createProjectionLayer(Pe),a.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),I=new Xr(y.textureWidth,y.textureHeight,{format:ri,type:Fi,depthTexture:new cg(y.textureWidth,y.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await a.requestReferenceSpace(d),we.setContext(a),we.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function he(X){for(let ae=0;ae<X.removed.length;ae++){const ge=X.removed[ae],ye=U.indexOf(ge);ye>=0&&(U[ye]=null,P[ye].disconnect(ge))}for(let ae=0;ae<X.added.length;ae++){const ge=X.added[ae];let ye=U.indexOf(ge);if(ye===-1){for(let Le=0;Le<P.length;Le++)if(Le>=U.length){U.push(ge),ye=Le;break}else if(U[Le]===null){U[Le]=ge,ye=Le;break}if(ye===-1)break}const Pe=P[ye];Pe&&Pe.connect(ge)}}const ne=new ee,oe=new ee;function k(X,ae,ge){ne.setFromMatrixPosition(ae.matrixWorld),oe.setFromMatrixPosition(ge.matrixWorld);const ye=ne.distanceTo(oe),Pe=ae.projectionMatrix.elements,Le=ge.projectionMatrix.elements,et=Pe[14]/(Pe[10]-1),pt=Pe[14]/(Pe[10]+1),lt=(Pe[9]+1)/Pe[5],O=(Pe[9]-1)/Pe[5],tn=(Pe[8]-1)/Pe[0],at=(Le[8]+1)/Le[0],ft=et*tn,$e=et*at,Tt=ye/(-tn+at),Qe=Tt*-tn;if(ae.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Qe),X.translateZ(Tt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Pe[10]===-1)X.projectionMatrix.copy(ae.projectionMatrix),X.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const L=et+Tt,T=pt+Tt,K=ft-Qe,fe=$e+(ye-Qe),_e=lt*pt/T*L,ce=O*pt/T*L;X.projectionMatrix.makePerspective(K,fe,_e,ce,L,T),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ue(X,ae){ae===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ae.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(a===null)return;let ae=X.near,ge=X.far;A.texture!==null&&(A.depthNear>0&&(ae=A.depthNear),A.depthFar>0&&(ge=A.depthFar)),E.near=Y.near=N.near=ae,E.far=Y.far=N.far=ge,(C!==E.near||re!==E.far)&&(a.updateRenderState({depthNear:E.near,depthFar:E.far}),C=E.near,re=E.far);const ye=X.parent,Pe=E.cameras;ue(E,ye);for(let Le=0;Le<Pe.length;Le++)ue(Pe[Le],ye);Pe.length===2?k(E,N,Y):E.projectionMatrix.copy(N.projectionMatrix),ie(X,E,ye)};function ie(X,ae,ge){ge===null?X.matrix.copy(ae.matrixWorld):(X.matrix.copy(ge.matrixWorld),X.matrix.invert(),X.matrix.multiply(ae.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ae.projectionMatrix),X.projectionMatrixInverse.copy(ae.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=zf*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(y===null&&S===null))return p},this.setFoveation=function(X){p=X,y!==null&&(y.fixedFoveation=X),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=X)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(E)};let b=null;function q(X,ae){if(v=ae.getViewerPose(m||f),w=ae,v!==null){const ge=v.views;S!==null&&(e.setRenderTargetFramebuffer(I,S.framebuffer),e.setRenderTarget(I));let ye=!1;ge.length!==E.cameras.length&&(E.cameras.length=0,ye=!0);for(let Le=0;Le<ge.length;Le++){const et=ge[Le];let pt=null;if(S!==null)pt=S.getViewport(et);else{const O=x.getViewSubImage(y,et);pt=O.viewport,Le===0&&(e.setRenderTargetTextures(I,O.colorTexture,y.ignoreDepthValues?void 0:O.depthStencilTexture),e.setRenderTarget(I))}let lt=xe[Le];lt===void 0&&(lt=new ti,lt.layers.enable(Le),lt.viewport=new Ht,xe[Le]=lt),lt.matrix.fromArray(et.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(et.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(pt.x,pt.y,pt.width,pt.height),Le===0&&(E.matrix.copy(lt.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ye===!0&&E.cameras.push(lt)}const Pe=a.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const Le=x.getDepthInformation(ge[0]);Le&&Le.isValid&&Le.texture&&A.init(e,Le,a.renderState)}}for(let ge=0;ge<P.length;ge++){const ye=U[ge],Pe=P[ge];ye!==null&&Pe!==void 0&&Pe.update(ye,ae,m||f)}b&&b(X,ae),ae.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ae}),w=null}const we=new lg;we.setAnimationLoop(q),this.setAnimationLoop=function(X){b=X},this.dispose=function(){}}}const Fr=new Oi,aE=new Bt;function lE(s,e){function n(_,g){_.matrixAutoUpdate===!0&&_.updateMatrix(),g.value.copy(_.matrix)}function r(_,g){g.color.getRGB(_.fogColor.value,rg(s)),g.isFog?(_.fogNear.value=g.near,_.fogFar.value=g.far):g.isFogExp2&&(_.fogDensity.value=g.density)}function a(_,g,I,P,U){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(_,g):g.isMeshToonMaterial?(u(_,g),x(_,g)):g.isMeshPhongMaterial?(u(_,g),v(_,g)):g.isMeshStandardMaterial?(u(_,g),y(_,g),g.isMeshPhysicalMaterial&&S(_,g,U)):g.isMeshMatcapMaterial?(u(_,g),w(_,g)):g.isMeshDepthMaterial?u(_,g):g.isMeshDistanceMaterial?(u(_,g),A(_,g)):g.isMeshNormalMaterial?u(_,g):g.isLineBasicMaterial?(f(_,g),g.isLineDashedMaterial&&d(_,g)):g.isPointsMaterial?p(_,g,I,P):g.isSpriteMaterial?m(_,g):g.isShadowMaterial?(_.color.value.copy(g.color),_.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(_,g){_.opacity.value=g.opacity,g.color&&_.diffuse.value.copy(g.color),g.emissive&&_.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(_.map.value=g.map,n(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,n(g.alphaMap,_.alphaMapTransform)),g.bumpMap&&(_.bumpMap.value=g.bumpMap,n(g.bumpMap,_.bumpMapTransform),_.bumpScale.value=g.bumpScale,g.side===An&&(_.bumpScale.value*=-1)),g.normalMap&&(_.normalMap.value=g.normalMap,n(g.normalMap,_.normalMapTransform),_.normalScale.value.copy(g.normalScale),g.side===An&&_.normalScale.value.negate()),g.displacementMap&&(_.displacementMap.value=g.displacementMap,n(g.displacementMap,_.displacementMapTransform),_.displacementScale.value=g.displacementScale,_.displacementBias.value=g.displacementBias),g.emissiveMap&&(_.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,_.emissiveMapTransform)),g.specularMap&&(_.specularMap.value=g.specularMap,n(g.specularMap,_.specularMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest);const I=e.get(g),P=I.envMap,U=I.envMapRotation;P&&(_.envMap.value=P,Fr.copy(U),Fr.x*=-1,Fr.y*=-1,Fr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Fr.y*=-1,Fr.z*=-1),_.envMapRotation.value.setFromMatrix4(aE.makeRotationFromEuler(Fr)),_.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=g.reflectivity,_.ior.value=g.ior,_.refractionRatio.value=g.refractionRatio),g.lightMap&&(_.lightMap.value=g.lightMap,_.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,_.lightMapTransform)),g.aoMap&&(_.aoMap.value=g.aoMap,_.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,_.aoMapTransform))}function f(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,g.map&&(_.map.value=g.map,n(g.map,_.mapTransform))}function d(_,g){_.dashSize.value=g.dashSize,_.totalSize.value=g.dashSize+g.gapSize,_.scale.value=g.scale}function p(_,g,I,P){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.size.value=g.size*I,_.scale.value=P*.5,g.map&&(_.map.value=g.map,n(g.map,_.uvTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,n(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function m(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.rotation.value=g.rotation,g.map&&(_.map.value=g.map,n(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,n(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function v(_,g){_.specular.value.copy(g.specular),_.shininess.value=Math.max(g.shininess,1e-4)}function x(_,g){g.gradientMap&&(_.gradientMap.value=g.gradientMap)}function y(_,g){_.metalness.value=g.metalness,g.metalnessMap&&(_.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,_.metalnessMapTransform)),_.roughness.value=g.roughness,g.roughnessMap&&(_.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,_.roughnessMapTransform)),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)}function S(_,g,I){_.ior.value=g.ior,g.sheen>0&&(_.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),_.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(_.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,_.sheenColorMapTransform)),g.sheenRoughnessMap&&(_.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,_.sheenRoughnessMapTransform))),g.clearcoat>0&&(_.clearcoat.value=g.clearcoat,_.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(_.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,_.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(_.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===An&&_.clearcoatNormalScale.value.negate())),g.dispersion>0&&(_.dispersion.value=g.dispersion),g.iridescence>0&&(_.iridescence.value=g.iridescence,_.iridescenceIOR.value=g.iridescenceIOR,_.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(_.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,_.iridescenceMapTransform)),g.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),g.transmission>0&&(_.transmission.value=g.transmission,_.transmissionSamplerMap.value=I.texture,_.transmissionSamplerSize.value.set(I.width,I.height),g.transmissionMap&&(_.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,_.transmissionMapTransform)),_.thickness.value=g.thickness,g.thicknessMap&&(_.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=g.attenuationDistance,_.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(_.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(_.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=g.specularIntensity,_.specularColor.value.copy(g.specularColor),g.specularColorMap&&(_.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,_.specularColorMapTransform)),g.specularIntensityMap&&(_.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,_.specularIntensityMapTransform))}function w(_,g){g.matcap&&(_.matcap.value=g.matcap)}function A(_,g){const I=e.get(g).light;_.referencePosition.value.setFromMatrixPosition(I.matrixWorld),_.nearDistance.value=I.shadow.camera.near,_.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function uE(s,e,n,r){let a={},u={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(I,P){const U=P.program;r.uniformBlockBinding(I,U)}function m(I,P){let U=a[I.id];U===void 0&&(w(I),U=v(I),a[I.id]=U,I.addEventListener("dispose",_));const J=P.program;r.updateUBOMapping(I,J);const z=e.render.frame;u[I.id]!==z&&(y(I),u[I.id]=z)}function v(I){const P=x();I.__bindingPointIndex=P;const U=s.createBuffer(),J=I.__size,z=I.usage;return s.bindBuffer(s.UNIFORM_BUFFER,U),s.bufferData(s.UNIFORM_BUFFER,J,z),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,U),U}function x(){for(let I=0;I<d;I++)if(f.indexOf(I)===-1)return f.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(I){const P=a[I.id],U=I.uniforms,J=I.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let z=0,N=U.length;z<N;z++){const Y=Array.isArray(U[z])?U[z]:[U[z]];for(let xe=0,E=Y.length;xe<E;xe++){const C=Y[xe];if(S(C,z,xe,J)===!0){const re=C.__offset,te=Array.isArray(C.value)?C.value:[C.value];let le=0;for(let he=0;he<te.length;he++){const ne=te[he],oe=A(ne);typeof ne=="number"||typeof ne=="boolean"?(C.__data[0]=ne,s.bufferSubData(s.UNIFORM_BUFFER,re+le,C.__data)):ne.isMatrix3?(C.__data[0]=ne.elements[0],C.__data[1]=ne.elements[1],C.__data[2]=ne.elements[2],C.__data[3]=0,C.__data[4]=ne.elements[3],C.__data[5]=ne.elements[4],C.__data[6]=ne.elements[5],C.__data[7]=0,C.__data[8]=ne.elements[6],C.__data[9]=ne.elements[7],C.__data[10]=ne.elements[8],C.__data[11]=0):(ne.toArray(C.__data,le),le+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,re,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(I,P,U,J){const z=I.value,N=P+"_"+U;if(J[N]===void 0)return typeof z=="number"||typeof z=="boolean"?J[N]=z:J[N]=z.clone(),!0;{const Y=J[N];if(typeof z=="number"||typeof z=="boolean"){if(Y!==z)return J[N]=z,!0}else if(Y.equals(z)===!1)return Y.copy(z),!0}return!1}function w(I){const P=I.uniforms;let U=0;const J=16;for(let N=0,Y=P.length;N<Y;N++){const xe=Array.isArray(P[N])?P[N]:[P[N]];for(let E=0,C=xe.length;E<C;E++){const re=xe[E],te=Array.isArray(re.value)?re.value:[re.value];for(let le=0,he=te.length;le<he;le++){const ne=te[le],oe=A(ne),k=U%J,ue=k%oe.boundary,ie=k+ue;U+=ue,ie!==0&&J-ie<oe.storage&&(U+=J-ie),re.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=U,U+=oe.storage}}}const z=U%J;return z>0&&(U+=J-z),I.__size=U,I.__cache={},this}function A(I){const P={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(P.boundary=4,P.storage=4):I.isVector2?(P.boundary=8,P.storage=8):I.isVector3||I.isColor?(P.boundary=16,P.storage=12):I.isVector4?(P.boundary=16,P.storage=16):I.isMatrix3?(P.boundary=48,P.storage=48):I.isMatrix4?(P.boundary=64,P.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),P}function _(I){const P=I.target;P.removeEventListener("dispose",_);const U=f.indexOf(P.__bindingPointIndex);f.splice(U,1),s.deleteBuffer(a[P.id]),delete a[P.id],delete u[P.id]}function g(){for(const I in a)s.deleteBuffer(a[I]);f=[],a={},u={}}return{bind:p,update:m,dispose:g}}class cE{constructor(e={}){const{canvas:n=Zv(),context:r=null,depth:a=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=f;const S=new Uint32Array(4),w=new Int32Array(4);let A=null,_=null;const g=[],I=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=di,this.toneMapping=mr,this.toneMappingExposure=1;const P=this;let U=!1,J=0,z=0,N=null,Y=-1,xe=null;const E=new Ht,C=new Ht;let re=null;const te=new yt(0);let le=0,he=n.width,ne=n.height,oe=1,k=null,ue=null;const ie=new Ht(0,0,he,ne),b=new Ht(0,0,he,ne);let q=!1;const we=new ag;let X=!1,ae=!1;const ge=new Bt,ye=new Bt,Pe=new ee,Le=new Ht,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function lt(){return N===null?oe:1}let O=r;function tn(R,V){return n.getContext(R,V)}try{const R={alpha:!0,depth:a,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Wf}`),n.addEventListener("webglcontextlost",de,!1),n.addEventListener("webglcontextrestored",Re,!1),n.addEventListener("webglcontextcreationerror",Ue,!1),O===null){const V="webgl2";if(O=tn(V,R),O===null)throw tn(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let at,ft,$e,Tt,Qe,L,T,K,fe,_e,ce,je,Ae,Ne,dt,Se,Fe,tt,Je,ke,ut,it,St,H;function be(){at=new mS(O),at.init(),it=new eE(O,at),ft=new uS(O,at,e,it),$e=new ZM(O),ft.reverseDepthBuffer&&$e.buffers.depth.setReversed(!0),Tt=new vS(O),Qe=new FM,L=new JM(O,at,$e,Qe,ft,it,Tt),T=new fS(P),K=new pS(P),fe=new w0(O),St=new aS(O,fe),_e=new gS(O,fe,Tt,St),ce=new yS(O,_e,fe,Tt),Je=new xS(O,ft,L),Se=new cS(Qe),je=new NM(P,T,K,at,ft,St,Se),Ae=new lE(P,Qe),Ne=new kM,dt=new WM(at),tt=new oS(P,T,K,$e,ce,y,p),Fe=new KM(P,ce,ft),H=new uE(O,Tt,ft,$e),ke=new lS(O,at,Tt),ut=new _S(O,at,Tt),Tt.programs=je.programs,P.capabilities=ft,P.extensions=at,P.properties=Qe,P.renderLists=Ne,P.shadowMap=Fe,P.state=$e,P.info=Tt}be();const se=new oE(P,O);this.xr=se,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const R=at.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=at.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(R){R!==void 0&&(oe=R,this.setSize(he,ne,!1))},this.getSize=function(R){return R.set(he,ne)},this.setSize=function(R,V,$=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}he=R,ne=V,n.width=Math.floor(R*oe),n.height=Math.floor(V*oe),$===!0&&(n.style.width=R+"px",n.style.height=V+"px"),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(he*oe,ne*oe).floor()},this.setDrawingBufferSize=function(R,V,$){he=R,ne=V,oe=$,n.width=Math.floor(R*$),n.height=Math.floor(V*$),this.setViewport(0,0,R,V)},this.getCurrentViewport=function(R){return R.copy(E)},this.getViewport=function(R){return R.copy(ie)},this.setViewport=function(R,V,$,Z){R.isVector4?ie.set(R.x,R.y,R.z,R.w):ie.set(R,V,$,Z),$e.viewport(E.copy(ie).multiplyScalar(oe).round())},this.getScissor=function(R){return R.copy(b)},this.setScissor=function(R,V,$,Z){R.isVector4?b.set(R.x,R.y,R.z,R.w):b.set(R,V,$,Z),$e.scissor(C.copy(b).multiplyScalar(oe).round())},this.getScissorTest=function(){return q},this.setScissorTest=function(R){$e.setScissorTest(q=R)},this.setOpaqueSort=function(R){k=R},this.setTransparentSort=function(R){ue=R},this.getClearColor=function(R){return R.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(R=!0,V=!0,$=!0){let Z=0;if(R){let G=!1;if(N!==null){const Ee=N.texture.format;G=Ee===$f||Ee===Kf||Ee===qf}if(G){const Ee=N.texture.type,De=Ee===Fi||Ee===Wr||Ee===Fo||Ee===zs||Ee===jf||Ee===Yf,Te=tt.getClearColor(),Ge=tt.getClearAlpha(),Ke=Te.r,Ze=Te.g,We=Te.b;De?(S[0]=Ke,S[1]=Ze,S[2]=We,S[3]=Ge,O.clearBufferuiv(O.COLOR,0,S)):(w[0]=Ke,w[1]=Ze,w[2]=We,w[3]=Ge,O.clearBufferiv(O.COLOR,0,w))}else Z|=O.COLOR_BUFFER_BIT}V&&(Z|=O.DEPTH_BUFFER_BIT,O.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),$&&(Z|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",de,!1),n.removeEventListener("webglcontextrestored",Re,!1),n.removeEventListener("webglcontextcreationerror",Ue,!1),Ne.dispose(),dt.dispose(),Qe.dispose(),T.dispose(),K.dispose(),ce.dispose(),St.dispose(),H.dispose(),je.dispose(),se.dispose(),se.removeEventListener("sessionstart",Bi),se.removeEventListener("sessionend",jr),Cn.stop()};function de(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const R=Tt.autoReset,V=Fe.enabled,$=Fe.autoUpdate,Z=Fe.needsUpdate,G=Fe.type;be(),Tt.autoReset=R,Fe.enabled=V,Fe.autoUpdate=$,Fe.needsUpdate=Z,Fe.type=G}function Ue(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ct(R){const V=R.target;V.removeEventListener("dispose",ct),Nt(V)}function Nt(R){nn(R),Qe.remove(R)}function nn(R){const V=Qe.get(R).programs;V!==void 0&&(V.forEach(function($){je.releaseProgram($)}),R.isShaderMaterial&&je.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,$,Z,G,Ee){V===null&&(V=et);const De=G.isMesh&&G.matrixWorld.determinant()<0,Te=mi(R,V,$,Z,G);$e.setMaterial(Z,De);let Ge=$.index,Ke=1;if(Z.wireframe===!0){if(Ge=_e.getWireframeAttribute($),Ge===void 0)return;Ke=2}const Ze=$.drawRange,We=$.attributes.position;let xt=Ze.start*Ke,wt=(Ze.start+Ze.count)*Ke;Ee!==null&&(xt=Math.max(xt,Ee.start*Ke),wt=Math.min(wt,(Ee.start+Ee.count)*Ke)),Ge!==null?(xt=Math.max(xt,0),wt=Math.min(wt,Ge.count)):We!=null&&(xt=Math.max(xt,0),wt=Math.min(wt,We.count));const At=wt-xt;if(At<0||At===1/0)return;St.setup(G,Z,Te,$,Ge);let Ut,gt=ke;if(Ge!==null&&(Ut=fe.get(Ge),gt=ut,gt.setIndex(Ut)),G.isMesh)Z.wireframe===!0?($e.setLineWidth(Z.wireframeLinewidth*lt()),gt.setMode(O.LINES)):gt.setMode(O.TRIANGLES);else if(G.isLine){let Oe=Z.linewidth;Oe===void 0&&(Oe=1),$e.setLineWidth(Oe*lt()),G.isLineSegments?gt.setMode(O.LINES):G.isLineLoop?gt.setMode(O.LINE_LOOP):gt.setMode(O.LINE_STRIP)}else G.isPoints?gt.setMode(O.POINTS):G.isSprite&&gt.setMode(O.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)gt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))gt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Oe=G._multiDrawStarts,Wt=G._multiDrawCounts,_t=G._multiDrawCount,Pn=Ge?fe.get(Ge).bytesPerElement:1,Xn=Qe.get(Z).currentProgram.getUniforms();for(let $t=0;$t<_t;$t++)Xn.setValue(O,"_gl_DrawID",$t),gt.render(Oe[$t]/Pn,Wt[$t])}else if(G.isInstancedMesh)gt.renderInstances(xt,At,G.count);else if($.isInstancedBufferGeometry){const Oe=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Wt=Math.min($.instanceCount,Oe);gt.renderInstances(xt,At,Wt)}else gt.render(xt,At)};function ht(R,V,$){R.transparent===!0&&R.side===bi&&R.forceSinglePass===!1?(R.side=An,R.needsUpdate=!0,qr(R,V,$),R.side=gr,R.needsUpdate=!0,qr(R,V,$),R.side=bi):qr(R,V,$)}this.compile=function(R,V,$=null){$===null&&($=R),_=dt.get($),_.init(V),I.push(_),$.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(_.pushLight(G),G.castShadow&&_.pushShadow(G))}),R!==$&&R.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(_.pushLight(G),G.castShadow&&_.pushShadow(G))}),_.setupLights();const Z=new Set;return R.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const Ee=G.material;if(Ee)if(Array.isArray(Ee))for(let De=0;De<Ee.length;De++){const Te=Ee[De];ht(Te,$,G),Z.add(Te)}else ht(Ee,$,G),Z.add(Ee)}),I.pop(),_=null,Z},this.compileAsync=function(R,V,$=null){const Z=this.compile(R,V,$);return new Promise(G=>{function Ee(){if(Z.forEach(function(De){Qe.get(De).currentProgram.isReady()&&Z.delete(De)}),Z.size===0){G(R);return}setTimeout(Ee,10)}at.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Kt=null;function Fn(R){Kt&&Kt(R)}function Bi(){Cn.stop()}function jr(){Cn.start()}const Cn=new lg;Cn.setAnimationLoop(Fn),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(R){Kt=R,se.setAnimationLoop(R),R===null?Cn.stop():Cn.start()},se.addEventListener("sessionstart",Bi),se.addEventListener("sessionend",jr),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(V),V=se.getCamera()),R.isScene===!0&&R.onBeforeRender(P,R,V,N),_=dt.get(R,I.length),_.init(V),I.push(_),ye.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),we.setFromProjectionMatrix(ye),ae=this.localClippingEnabled,X=Se.init(this.clippingPlanes,ae),A=Ne.get(R,g.length),A.init(),g.push(A),se.enabled===!0&&se.isPresenting===!0){const Ee=P.xr.getDepthSensingMesh();Ee!==null&&js(Ee,V,-1/0,P.sortObjects)}js(R,V,0,P.sortObjects),A.finish(),P.sortObjects===!0&&A.sort(k,ue),pt=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,pt&&tt.addToRenderList(A,R),this.info.render.frame++,X===!0&&Se.beginShadows();const $=_.state.shadowsArray;Fe.render($,R,V),X===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=A.opaque,G=A.transmissive;if(_.setupLights(),V.isArrayCamera){const Ee=V.cameras;if(G.length>0)for(let De=0,Te=Ee.length;De<Te;De++){const Ge=Ee[De];vr(Z,G,R,Ge)}pt&&tt.render(R);for(let De=0,Te=Ee.length;De<Te;De++){const Ge=Ee[De];zi(A,R,Ge,Ge.viewport)}}else G.length>0&&vr(Z,G,R,V),pt&&tt.render(R),zi(A,R,V);N!==null&&(L.updateMultisampleRenderTarget(N),L.updateRenderTargetMipmap(N)),R.isScene===!0&&R.onAfterRender(P,R,V),St.resetDefaultState(),Y=-1,xe=null,I.pop(),I.length>0?(_=I[I.length-1],X===!0&&Se.setGlobalState(P.clippingPlanes,_.state.camera)):_=null,g.pop(),g.length>0?A=g[g.length-1]:A=null};function js(R,V,$,Z){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)$=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||we.intersectsSprite(R)){Z&&Le.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ye);const De=ce.update(R),Te=R.material;Te.visible&&A.push(R,De,Te,$,Le.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||we.intersectsObject(R))){const De=ce.update(R),Te=R.material;if(Z&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Le.copy(R.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Le.copy(De.boundingSphere.center)),Le.applyMatrix4(R.matrixWorld).applyMatrix4(ye)),Array.isArray(Te)){const Ge=De.groups;for(let Ke=0,Ze=Ge.length;Ke<Ze;Ke++){const We=Ge[Ke],xt=Te[We.materialIndex];xt&&xt.visible&&A.push(R,De,xt,$,Le.z,We)}}else Te.visible&&A.push(R,De,Te,$,Le.z,null)}}const Ee=R.children;for(let De=0,Te=Ee.length;De<Te;De++)js(Ee[De],V,$,Z)}function zi(R,V,$,Z){const G=R.opaque,Ee=R.transmissive,De=R.transparent;_.setupLightsView($),X===!0&&Se.setGlobalState(P.clippingPlanes,$),Z&&$e.viewport(E.copy(Z)),G.length>0&&pi(G,V,$),Ee.length>0&&pi(Ee,V,$),De.length>0&&pi(De,V,$),$e.buffers.depth.setTest(!0),$e.buffers.depth.setMask(!0),$e.buffers.color.setMask(!0),$e.setPolygonOffset(!1)}function vr(R,V,$,Z){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[Z.id]===void 0&&(_.state.transmissionRenderTarget[Z.id]=new Xr(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?Oo:Fi,minFilter:Vr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const Ee=_.state.transmissionRenderTarget[Z.id],De=Z.viewport||E;Ee.setSize(De.z,De.w);const Te=P.getRenderTarget();P.setRenderTarget(Ee),P.getClearColor(te),le=P.getClearAlpha(),le<1&&P.setClearColor(16777215,.5),P.clear(),pt&&tt.render($);const Ge=P.toneMapping;P.toneMapping=mr;const Ke=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),_.setupLightsView(Z),X===!0&&Se.setGlobalState(P.clippingPlanes,Z),pi(R,$,Z),L.updateMultisampleRenderTarget(Ee),L.updateRenderTargetMipmap(Ee),at.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let We=0,xt=V.length;We<xt;We++){const wt=V[We],At=wt.object,Ut=wt.geometry,gt=wt.material,Oe=wt.group;if(gt.side===bi&&At.layers.test(Z.layers)){const Wt=gt.side;gt.side=An,gt.needsUpdate=!0,Yr(At,$,Z,Ut,gt,Oe),gt.side=Wt,gt.needsUpdate=!0,Ze=!0}}Ze===!0&&(L.updateMultisampleRenderTarget(Ee),L.updateRenderTargetMipmap(Ee))}P.setRenderTarget(Te),P.setClearColor(te,le),Ke!==void 0&&(Z.viewport=Ke),P.toneMapping=Ge}function pi(R,V,$){const Z=V.isScene===!0?V.overrideMaterial:null;for(let G=0,Ee=R.length;G<Ee;G++){const De=R[G],Te=De.object,Ge=De.geometry,Ke=Z===null?De.material:Z,Ze=De.group;Te.layers.test($.layers)&&Yr(Te,V,$,Ge,Ke,Ze)}}function Yr(R,V,$,Z,G,Ee){R.onBeforeRender(P,V,$,Z,G,Ee),R.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),G.onBeforeRender(P,V,$,Z,R,Ee),G.transparent===!0&&G.side===bi&&G.forceSinglePass===!1?(G.side=An,G.needsUpdate=!0,P.renderBufferDirect($,V,Z,G,R,Ee),G.side=gr,G.needsUpdate=!0,P.renderBufferDirect($,V,Z,G,R,Ee),G.side=bi):P.renderBufferDirect($,V,Z,G,R,Ee),R.onAfterRender(P,V,$,Z,G,Ee)}function qr(R,V,$){V.isScene!==!0&&(V=et);const Z=Qe.get(R),G=_.state.lights,Ee=_.state.shadowsArray,De=G.state.version,Te=je.getParameters(R,G.state,Ee,V,$),Ge=je.getProgramCacheKey(Te);let Ke=Z.programs;Z.environment=R.isMeshStandardMaterial?V.environment:null,Z.fog=V.fog,Z.envMap=(R.isMeshStandardMaterial?K:T).get(R.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&R.envMap===null?V.environmentRotation:R.envMapRotation,Ke===void 0&&(R.addEventListener("dispose",ct),Ke=new Map,Z.programs=Ke);let Ze=Ke.get(Ge);if(Ze!==void 0){if(Z.currentProgram===Ze&&Z.lightsStateVersion===De)return Wo(R,Te),Ze}else Te.uniforms=je.getUniforms(R),R.onBeforeCompile(Te,P),Ze=je.acquireProgram(Te,Ge),Ke.set(Ge,Ze),Z.uniforms=Te.uniforms;const We=Z.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(We.clippingPlanes=Se.uniform),Wo(R,Te),Z.needsLights=jo(R),Z.lightsStateVersion=De,Z.needsLights&&(We.ambientLightColor.value=G.state.ambient,We.lightProbe.value=G.state.probe,We.directionalLights.value=G.state.directional,We.directionalLightShadows.value=G.state.directionalShadow,We.spotLights.value=G.state.spot,We.spotLightShadows.value=G.state.spotShadow,We.rectAreaLights.value=G.state.rectArea,We.ltc_1.value=G.state.rectAreaLTC1,We.ltc_2.value=G.state.rectAreaLTC2,We.pointLights.value=G.state.point,We.pointLightShadows.value=G.state.pointShadow,We.hemisphereLights.value=G.state.hemi,We.directionalShadowMap.value=G.state.directionalShadowMap,We.directionalShadowMatrix.value=G.state.directionalShadowMatrix,We.spotShadowMap.value=G.state.spotShadowMap,We.spotLightMatrix.value=G.state.spotLightMatrix,We.spotLightMap.value=G.state.spotLightMap,We.pointShadowMap.value=G.state.pointShadowMap,We.pointShadowMatrix.value=G.state.pointShadowMatrix),Z.currentProgram=Ze,Z.uniformsList=null,Ze}function Go(R){if(R.uniformsList===null){const V=R.currentProgram.getUniforms();R.uniformsList=Rl.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function Wo(R,V){const $=Qe.get(R);$.outputColorSpace=V.outputColorSpace,$.batching=V.batching,$.batchingColor=V.batchingColor,$.instancing=V.instancing,$.instancingColor=V.instancingColor,$.instancingMorph=V.instancingMorph,$.skinning=V.skinning,$.morphTargets=V.morphTargets,$.morphNormals=V.morphNormals,$.morphColors=V.morphColors,$.morphTargetsCount=V.morphTargetsCount,$.numClippingPlanes=V.numClippingPlanes,$.numIntersection=V.numClipIntersection,$.vertexAlphas=V.vertexAlphas,$.vertexTangents=V.vertexTangents,$.toneMapping=V.toneMapping}function mi(R,V,$,Z,G){V.isScene!==!0&&(V=et),L.resetTextureUnits();const Ee=V.fog,De=Z.isMeshStandardMaterial?V.environment:null,Te=N===null?P.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:_r,Ge=(Z.isMeshStandardMaterial?K:T).get(Z.envMap||De),Ke=Z.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ze=!!$.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),We=!!$.morphAttributes.position,xt=!!$.morphAttributes.normal,wt=!!$.morphAttributes.color;let At=mr;Z.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(At=P.toneMapping);const Ut=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,gt=Ut!==void 0?Ut.length:0,Oe=Qe.get(Z),Wt=_.state.lights;if(X===!0&&(ae===!0||R!==xe)){const on=R===xe&&Z.id===Y;Se.setState(Z,R,on)}let _t=!1;Z.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Wt.state.version||Oe.outputColorSpace!==Te||G.isBatchedMesh&&Oe.batching===!1||!G.isBatchedMesh&&Oe.batching===!0||G.isBatchedMesh&&Oe.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Oe.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Oe.instancing===!1||!G.isInstancedMesh&&Oe.instancing===!0||G.isSkinnedMesh&&Oe.skinning===!1||!G.isSkinnedMesh&&Oe.skinning===!0||G.isInstancedMesh&&Oe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Oe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Oe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Oe.instancingMorph===!1&&G.morphTexture!==null||Oe.envMap!==Ge||Z.fog===!0&&Oe.fog!==Ee||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==Se.numPlanes||Oe.numIntersection!==Se.numIntersection)||Oe.vertexAlphas!==Ke||Oe.vertexTangents!==Ze||Oe.morphTargets!==We||Oe.morphNormals!==xt||Oe.morphColors!==wt||Oe.toneMapping!==At||Oe.morphTargetsCount!==gt)&&(_t=!0):(_t=!0,Oe.__version=Z.version);let Pn=Oe.currentProgram;_t===!0&&(Pn=qr(Z,V,G));let Xn=!1,$t=!1,gi=!1;const Ct=Pn.getUniforms(),oi=Oe.uniforms;if($e.useProgram(Pn.program)&&(Xn=!0,$t=!0,gi=!0),Z.id!==Y&&(Y=Z.id,$t=!0),Xn||xe!==R){ft.reverseDepthBuffer?(ge.copy(R.projectionMatrix),Jv(ge),e0(ge),Ct.setValue(O,"projectionMatrix",ge)):Ct.setValue(O,"projectionMatrix",R.projectionMatrix),Ct.setValue(O,"viewMatrix",R.matrixWorldInverse);const on=Ct.map.cameraPosition;on!==void 0&&on.setValue(O,Pe.setFromMatrixPosition(R.matrixWorld)),ft.logarithmicDepthBuffer&&Ct.setValue(O,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Ct.setValue(O,"isOrthographic",R.isOrthographicCamera===!0),xe!==R&&(xe=R,$t=!0,gi=!0)}if(G.isSkinnedMesh){Ct.setOptional(O,G,"bindMatrix"),Ct.setOptional(O,G,"bindMatrixInverse");const on=G.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Ct.setValue(O,"boneTexture",on.boneTexture,L))}G.isBatchedMesh&&(Ct.setOptional(O,G,"batchingTexture"),Ct.setValue(O,"batchingTexture",G._matricesTexture,L),Ct.setOptional(O,G,"batchingIdTexture"),Ct.setValue(O,"batchingIdTexture",G._indirectTexture,L),Ct.setOptional(O,G,"batchingColorTexture"),G._colorsTexture!==null&&Ct.setValue(O,"batchingColorTexture",G._colorsTexture,L));const Ys=$.morphAttributes;if((Ys.position!==void 0||Ys.normal!==void 0||Ys.color!==void 0)&&Je.update(G,$,Pn),($t||Oe.receiveShadow!==G.receiveShadow)&&(Oe.receiveShadow=G.receiveShadow,Ct.setValue(O,"receiveShadow",G.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(oi.envMap.value=Ge,oi.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&V.environment!==null&&(oi.envMapIntensity.value=V.environmentIntensity),$t&&(Ct.setValue(O,"toneMappingExposure",P.toneMappingExposure),Oe.needsLights&&Xo(oi,gi),Ee&&Z.fog===!0&&Ae.refreshFogUniforms(oi,Ee),Ae.refreshMaterialUniforms(oi,Z,oe,ne,_.state.transmissionRenderTarget[R.id]),Rl.upload(O,Go(Oe),oi,L)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Rl.upload(O,Go(Oe),oi,L),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Ct.setValue(O,"center",G.center),Ct.setValue(O,"modelViewMatrix",G.modelViewMatrix),Ct.setValue(O,"normalMatrix",G.normalMatrix),Ct.setValue(O,"modelMatrix",G.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const on=Z.uniformsGroups;for(let Kr=0,qs=on.length;Kr<qs;Kr++){const Hi=on[Kr];H.update(Hi,Pn),H.bind(Hi,Pn)}}return Pn}function Xo(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function jo(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(R,V,$){Qe.get(R.texture).__webglTexture=V,Qe.get(R.depthTexture).__webglTexture=$;const Z=Qe.get(R);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=$===void 0,Z.__autoAllocateDepthBuffer||at.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,V){const $=Qe.get(R);$.__webglFramebuffer=V,$.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(R,V=0,$=0){N=R,J=V,z=$;let Z=!0,G=null,Ee=!1,De=!1;if(R){const Ge=Qe.get(R);if(Ge.__useDefaultFramebuffer!==void 0)$e.bindFramebuffer(O.FRAMEBUFFER,null),Z=!1;else if(Ge.__webglFramebuffer===void 0)L.setupRenderTarget(R);else if(Ge.__hasExternalTextures)L.rebindTextures(R,Qe.get(R.texture).__webglTexture,Qe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const We=R.depthTexture;if(Ge.__boundDepthTexture!==We){if(We!==null&&Qe.has(We)&&(R.width!==We.image.width||R.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(R)}}const Ke=R.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(De=!0);const Ze=Qe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ze[V])?G=Ze[V][$]:G=Ze[V],Ee=!0):R.samples>0&&L.useMultisampledRTT(R)===!1?G=Qe.get(R).__webglMultisampledFramebuffer:Array.isArray(Ze)?G=Ze[$]:G=Ze,E.copy(R.viewport),C.copy(R.scissor),re=R.scissorTest}else E.copy(ie).multiplyScalar(oe).floor(),C.copy(b).multiplyScalar(oe).floor(),re=q;if($e.bindFramebuffer(O.FRAMEBUFFER,G)&&Z&&$e.drawBuffers(R,G),$e.viewport(E),$e.scissor(C),$e.setScissorTest(re),Ee){const Ge=Qe.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ge.__webglTexture,$)}else if(De){const Ge=Qe.get(R.texture),Ke=V||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ge.__webglTexture,$||0,Ke)}Y=-1},this.readRenderTargetPixels=function(R,V,$,Z,G,Ee,De){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Qe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&De!==void 0&&(Te=Te[De]),Te){$e.bindFramebuffer(O.FRAMEBUFFER,Te);try{const Ge=R.texture,Ke=Ge.format,Ze=Ge.type;if(!ft.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-Z&&$>=0&&$<=R.height-G&&O.readPixels(V,$,Z,G,it.convert(Ke),it.convert(Ze),Ee)}finally{const Ge=N!==null?Qe.get(N).__webglFramebuffer:null;$e.bindFramebuffer(O.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(R,V,$,Z,G,Ee,De){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Qe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&De!==void 0&&(Te=Te[De]),Te){const Ge=R.texture,Ke=Ge.format,Ze=Ge.type;if(!ft.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=R.width-Z&&$>=0&&$<=R.height-G){$e.bindFramebuffer(O.FRAMEBUFFER,Te);const We=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,We),O.bufferData(O.PIXEL_PACK_BUFFER,Ee.byteLength,O.STREAM_READ),O.readPixels(V,$,Z,G,it.convert(Ke),it.convert(Ze),0);const xt=N!==null?Qe.get(N).__webglFramebuffer:null;$e.bindFramebuffer(O.FRAMEBUFFER,xt);const wt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Qv(O,wt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,We),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Ee),O.deleteBuffer(We),O.deleteSync(wt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,V=null,$=0){R.isTexture!==!0&&(Al("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,R=arguments[1]);const Z=Math.pow(2,-$),G=Math.floor(R.image.width*Z),Ee=Math.floor(R.image.height*Z),De=V!==null?V.x:0,Te=V!==null?V.y:0;L.setTexture2D(R,0),O.copyTexSubImage2D(O.TEXTURE_2D,$,0,0,De,Te,G,Ee),$e.unbindTexture()},this.copyTextureToTexture=function(R,V,$=null,Z=null,G=0){R.isTexture!==!0&&(Al("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,R=arguments[1],V=arguments[2],G=arguments[3]||0,$=null);let Ee,De,Te,Ge,Ke,Ze;$!==null?(Ee=$.max.x-$.min.x,De=$.max.y-$.min.y,Te=$.min.x,Ge=$.min.y):(Ee=R.image.width,De=R.image.height,Te=0,Ge=0),Z!==null?(Ke=Z.x,Ze=Z.y):(Ke=0,Ze=0);const We=it.convert(V.format),xt=it.convert(V.type);L.setTexture2D(V,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,V.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,V.unpackAlignment);const wt=O.getParameter(O.UNPACK_ROW_LENGTH),At=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ut=O.getParameter(O.UNPACK_SKIP_PIXELS),gt=O.getParameter(O.UNPACK_SKIP_ROWS),Oe=O.getParameter(O.UNPACK_SKIP_IMAGES),Wt=R.isCompressedTexture?R.mipmaps[G]:R.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,Wt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Wt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Te),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ge),R.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,G,Ke,Ze,Ee,De,We,xt,Wt.data):R.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,G,Ke,Ze,Wt.width,Wt.height,We,Wt.data):O.texSubImage2D(O.TEXTURE_2D,G,Ke,Ze,Ee,De,We,xt,Wt),O.pixelStorei(O.UNPACK_ROW_LENGTH,wt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,At),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ut),O.pixelStorei(O.UNPACK_SKIP_ROWS,gt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Oe),G===0&&V.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),$e.unbindTexture()},this.copyTextureToTexture3D=function(R,V,$=null,Z=null,G=0){R.isTexture!==!0&&(Al("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,Z=arguments[1]||null,R=arguments[2],V=arguments[3],G=arguments[4]||0);let Ee,De,Te,Ge,Ke,Ze,We,xt,wt;const At=R.isCompressedTexture?R.mipmaps[G]:R.image;$!==null?(Ee=$.max.x-$.min.x,De=$.max.y-$.min.y,Te=$.max.z-$.min.z,Ge=$.min.x,Ke=$.min.y,Ze=$.min.z):(Ee=At.width,De=At.height,Te=At.depth,Ge=0,Ke=0,Ze=0),Z!==null?(We=Z.x,xt=Z.y,wt=Z.z):(We=0,xt=0,wt=0);const Ut=it.convert(V.format),gt=it.convert(V.type);let Oe;if(V.isData3DTexture)L.setTexture3D(V,0),Oe=O.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)L.setTexture2DArray(V,0),Oe=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,V.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,V.unpackAlignment);const Wt=O.getParameter(O.UNPACK_ROW_LENGTH),_t=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Pn=O.getParameter(O.UNPACK_SKIP_PIXELS),Xn=O.getParameter(O.UNPACK_SKIP_ROWS),$t=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,At.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,At.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ge),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ke),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ze),R.isDataTexture||R.isData3DTexture?O.texSubImage3D(Oe,G,We,xt,wt,Ee,De,Te,Ut,gt,At.data):V.isCompressedArrayTexture?O.compressedTexSubImage3D(Oe,G,We,xt,wt,Ee,De,Te,Ut,At.data):O.texSubImage3D(Oe,G,We,xt,wt,Ee,De,Te,Ut,gt,At),O.pixelStorei(O.UNPACK_ROW_LENGTH,Wt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,_t),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Pn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Xn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,$t),G===0&&V.generateMipmaps&&O.generateMipmap(Oe),$e.unbindTexture()},this.initRenderTarget=function(R){Qe.get(R).__webglFramebuffer===void 0&&L.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?L.setTextureCube(R,0):R.isData3DTexture?L.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?L.setTexture2DArray(R,0):L.setTexture2D(R,0),$e.unbindTexture()},this.resetState=function(){J=0,z=0,N=null,$e.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Zf?"display-p3":"srgb",n.unpackColorSpace=Mt.workingColorSpace===Ol?"display-p3":"srgb"}}class fE extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class mg extends Ws{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Il=new ee,Nl=new ee,wm=new Bt,Io=new Qf,_l=new Ho,Jc=new ee,Am=new ee;class dE extends gn{constructor(e=new si,n=new mg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,u=n.count;a<u;a++)Il.fromBufferAttribute(n,a-1),Nl.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=Il.distanceTo(Nl);e.setAttribute("lineDistance",new Ni(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,u=e.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),_l.copy(r.boundingSphere),_l.applyMatrix4(a),_l.radius+=u,e.ray.intersectsSphere(_l)===!1)return;wm.copy(a).invert(),Io.copy(e.ray).applyMatrix4(wm);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,v=r.index,y=r.attributes.position;if(v!==null){const S=Math.max(0,f.start),w=Math.min(v.count,f.start+f.count);for(let A=S,_=w-1;A<_;A+=m){const g=v.getX(A),I=v.getX(A+1),P=vl(this,e,Io,p,g,I);P&&n.push(P)}if(this.isLineLoop){const A=v.getX(w-1),_=v.getX(S),g=vl(this,e,Io,p,A,_);g&&n.push(g)}}else{const S=Math.max(0,f.start),w=Math.min(y.count,f.start+f.count);for(let A=S,_=w-1;A<_;A+=m){const g=vl(this,e,Io,p,A,A+1);g&&n.push(g)}if(this.isLineLoop){const A=vl(this,e,Io,p,w-1,S);A&&n.push(A)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function vl(s,e,n,r,a,u){const f=s.geometry.attributes.position;if(Il.fromBufferAttribute(f,a),Nl.fromBufferAttribute(f,u),n.distanceSqToSegment(Il,Nl,Jc,Am)>r)return;Jc.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(Jc);if(!(p<e.near||p>e.far))return{distance:p,point:Am.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Rm=new ee,Cm=new ee;class hE extends dE{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let a=0,u=n.count;a<u;a+=2)Rm.fromBufferAttribute(n,a),Cm.fromBufferAttribute(n,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+Rm.distanceTo(Cm);e.setAttribute("lineDistance",new Ni(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class pE extends Ws{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Pm=new Bt,Vf=new Qf,xl=new Ho,yl=new ee;class mE extends gn{constructor(e=new si,n=new pE){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,u=e.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),xl.copy(r.boundingSphere),xl.applyMatrix4(a),xl.radius+=u,e.ray.intersectsSphere(xl)===!1)return;Pm.copy(a).invert(),Vf.copy(e.ray).applyMatrix4(Pm);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=r.index,x=r.attributes.position;if(m!==null){const y=Math.max(0,f.start),S=Math.min(m.count,f.start+f.count);for(let w=y,A=S;w<A;w++){const _=m.getX(w);yl.fromBufferAttribute(x,_),Lm(yl,_,p,a,e,n,this)}}else{const y=Math.max(0,f.start),S=Math.min(x.count,f.start+f.count);for(let w=y,A=S;w<A;w++)yl.fromBufferAttribute(x,w),Lm(yl,w,p,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Lm(s,e,n,r,a,u,f){const d=Vf.distanceSqToPoint(s);if(d<n){const p=new ee;Vf.closestPointToPoint(s,p),p.applyMatrix4(r);const m=a.ray.origin.distanceTo(p);if(m<a.near||m>a.far)return;u.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wf);const gE=`precision mediump float;

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
`,_E=`precision mediump float;

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
`,bm={dashboard:{nodeDensity:.55,glowIntensity:1,pulseSpeed:1,interactionStrength:.6,spacing:90},"mission-control":{nodeDensity:.65,glowIntensity:1.25,pulseSpeed:1.2,interactionStrength:.8,spacing:80},jarvis:{nodeDensity:.8,glowIntensity:1.6,pulseSpeed:1.6,interactionStrength:1.1,spacing:68},nebula:{nodeDensity:.95,glowIntensity:2.2,pulseSpeed:1.8,interactionStrength:1.2,spacing:55}},gg=(s="nebula")=>bm[s]??bm.nebula;class vE{size;preset;nodes=[];velocities=[];energies=[];edges=[];lineEnergy=[];pulses=[];spatial=new Map;cellSize=50;constructor({width:e,height:n,preset:r="nebula"}){this.size={width:e,height:n},this.setPreset(r),this.seed()}setPreset(e){this.preset=gg(e)}seed(){const{width:e,height:n}=this.size,r=this.preset.spacing||60,a=Math.max(6,Math.floor(e/r)),u=Math.max(4,Math.floor(n/r));this.nodes=[],this.velocities=[],this.energies=[],this.edges=[],this.lineEnergy=[];for(let d=0;d<u;d++)for(let p=0;p<a;p++){const m=(p+.5)*r+(Math.random()-.5)*12,v=(d+.5)*r+(Math.random()-.5)*12;this.nodes.push([m,v,0]),this.velocities.push([(Math.random()-.5)*.2,(Math.random()-.5)*.2,0]),this.energies.push(Math.random()*.4)}const f=(d,p)=>p*a+d;for(let d=0;d<u;d++)for(let p=0;p<a;p++){const m=f(p,d);p<a-1&&this.addEdge(m,f(p+1,d)),d<u-1&&this.addEdge(m,f(p,d+1))}this.buildSpatial(r*1.5)}resize(e,n){this.size={width:e,height:n},this.seed()}addEdge(e,n){this.edges.push([e,n]),this.lineEnergy.push(.2)}buildSpatial(e){this.cellSize=e,this.spatial=new Map,this.nodes.forEach(([n,r],a)=>{const u=`${Math.floor(n/e)}:${Math.floor(r/e)}`;this.spatial.has(u)||this.spatial.set(u,[]),this.spatial.get(u).push(a)})}neighborsAround(e,n){const{cellSize:r}=this,a=Math.floor(e.x/r),u=Math.floor(e.y/r),f=[],d=Math.ceil(n/r);for(let p=-d;p<=d;p++)for(let m=-d;m<=d;m++){const v=`${a+p}:${u+m}`,x=this.spatial.get(v);x&&f.push(...x)}return f}triggerPulse(e,n=1.2){const r=.35/(this.preset.pulseSpeed||1),a=(this.preset.spacing||60)*8;this.neighborsAround(e,a).forEach(f=>{const[d,p]=this.nodes[f],m=Math.hypot(d-e.x,p-e.y);if(m>a)return;const v=m*r,x=n*(1-m/a*.4);this.pulses.push({node:f,at:performance.now()+v,intensity:x})})}microPulse(e){this.triggerPulse(e,.4)}attract(e,n=this.preset.interactionStrength){this.neighborsAround(e,(this.preset.spacing||60)*2.5).forEach(a=>{const u=this.nodes[a],f=this.velocities[a],d=e.x-u[0],p=e.y-u[1],m=Math.max(8,Math.hypot(d,p)),v=n/m*.35;f[0]+=d/m*v,f[1]+=p/m*v,this.energies[a]=Math.min(1,this.energies[a]+.02)})}update(e){const n=performance.now();this.pulses=this.pulses.filter(r=>n>=r.at?(this.energies[r.node]=Math.min(1,this.energies[r.node]+.5*r.intensity),!1):!0);for(let r=0;r<this.nodes.length;r++){const a=this.nodes[r],u=this.velocities[r];a[0]+=u[0]*e,a[1]+=u[1]*e,u[0]*=.95,u[1]*=.95,this.energies[r]=Math.max(0,this.energies[r]-e*.15)}this.edges.forEach(([r,a],u)=>{const f=(this.energies[r]+this.energies[a])*.5;this.lineEnergy[u]=f})}}const xE=({preset:s="nebula",followMouse:e=!0,reactToTyping:n=!0,reactToClick:r=!0,className:a})=>{const u=fi.useRef(null),f=fi.useRef(),d=fi.useRef(),p=fi.useRef(),m=fi.useRef(),v=fi.useRef(!0);return fi.useEffect(()=>{const x=u.current;if(!x)return;const y=gg(s),S=new cE({antialias:!0,alpha:!0});S.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),S.setClearColor(0,0),S.domElement.className="jk-neural-bg",x.appendChild(S.domElement),f.current=S;const w=new fE,A=new ug(-1,1,1,-1,.1,10);A.position.z=1;const _=()=>{const{clientWidth:b,clientHeight:q}=x;S.setSize(b,q),A.left=-b/2,A.right=b/2,A.top=q/2,A.bottom=-q/2,A.updateProjectionMatrix(),v.current=!0};_(),window.addEventListener("resize",_);const g=new vE({width:S.domElement.width,height:S.domElement.height,preset:s});d.current=g;const I=new Float32Array(g.nodes.length*3),P=new Float32Array(g.nodes.length),U=new wn(I,3),J=new wn(P,1),z=new si;z.setAttribute("position",U),z.setAttribute("aEnergy",J);const N=new ki({vertexShader:gE,fragmentShader:_E,transparent:!0,blending:Cl,depthWrite:!1,uniforms:{uTime:{value:0},uSize:{value:6*y.glowIntensity}}}),Y=new mE(z,N);p.current=Y,w.add(Y);const xe=new Float32Array(g.edges.length*2*3),E=new Float32Array(g.edges.length),C=new si;C.setAttribute("position",new wn(xe,3)),C.setAttribute("alpha",new wn(E,1));const re=new mg({color:new yt(63168),transparent:!0,opacity:.4,blending:Cl}),te=new hE(C,re);m.current=te,w.add(te);const le=()=>{g.nodes.forEach((b,q)=>{I[q*3]=b[0]-g.size.width/2,I[q*3+1]=b[1]-g.size.height/2,I[q*3+2]=b[2],P[q]=g.energies[q]}),U.needsUpdate=!0,J.needsUpdate=!0,g.edges.forEach(([b,q],we)=>{const X=g.nodes[b],ae=g.nodes[q],ge=we*6;xe[ge]=X[0]-g.size.width/2,xe[ge+1]=X[1]-g.size.height/2,xe[ge+3]=ae[0]-g.size.width/2,xe[ge+4]=ae[1]-g.size.height/2,E[we]=g.lineEnergy[we]}),C.getAttribute("position").needsUpdate=!0,C.getAttribute("alpha").needsUpdate=!0,re.opacity=.2+.5*y.glowIntensity};let he=performance.now(),ne;const oe=()=>{const b=performance.now(),q=Math.min(.05,(b-he)/1e3);he=b,v.current&&(g.resize(S.domElement.width,S.domElement.height),v.current=!1),g.update(q),N.uniforms.uTime.value=b*.001,le(),S.render(w,A),ne=requestAnimationFrame(oe)};ne=requestAnimationFrame(oe);const k=b=>{const q=S.domElement.getBoundingClientRect(),we=b.clientX-q.left,X=b.clientY-q.top;g.attract({x:we,y:X}),e&&g.microPulse({x:we,y:X})},ue=b=>{if(!r)return;const q=S.domElement.getBoundingClientRect();g.triggerPulse({x:b.clientX-q.left,y:b.clientY-q.top},1.2)},ie=()=>{if(!n)return;const b=S.domElement.getBoundingClientRect();g.triggerPulse({x:Math.random()*b.width,y:Math.random()*b.height},.8)};return window.addEventListener("mousemove",k),window.addEventListener("click",ue),window.addEventListener("keydown",ie),()=>{cancelAnimationFrame(ne),window.removeEventListener("resize",_),window.removeEventListener("mousemove",k),window.removeEventListener("click",ue),window.removeEventListener("keydown",ie),w.clear(),S.dispose(),x.contains(S.domElement)&&x.removeChild(S.domElement)}},[s,e,n,r]),He.jsx("div",{ref:u,className:a,style:{position:"absolute",inset:0}})},yE=({children:s})=>He.jsxs("div",{className:"relative min-h-screen bg-neo-bg text-neo-text overflow-hidden font-outfit",children:[He.jsx(xE,{preset:"nebula",className:"opacity-40"}),He.jsx("div",{className:"scanlines-overlay pointer-events-none"}),He.jsxs("div",{className:"fixed top-8 left-10 z-50 flex items-center gap-2 pointer-events-none opacity-30",children:[He.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-neo-accent animate-pulse shadow-neon-cyan"}),He.jsx("span",{className:"text-[9px] uppercase tracking-[0.4em] font-bold",children:"Neural Sync: Active"})]}),He.jsxs("div",{className:"fixed bottom-8 right-10 z-50 flex flex-col items-end gap-1 pointer-events-none opacity-30 font-mono",children:[He.jsx("span",{className:"text-[8px] uppercase tracking-[0.3em] font-medium",children:"Core Integrity // 99.8%"}),He.jsx("span",{className:"text-[8px] uppercase tracking-[0.3em] font-medium text-neo-magenta",children:"Signal Strength // Optimized"})]}),He.jsx("div",{className:"relative z-10 px-10 py-16 min-h-screen",children:s})]}),SE=()=>{const[s,e]=fi.useState({cpu:62.4,latency:14,load:78,signal:91,latencyTrend:!0,cpuTrend:!0});return fi.useEffect(()=>{const n=setInterval(()=>{e(r=>({...r,cpu:+(62+Math.random()*3).toFixed(1),latency:Math.floor(12+Math.random()*5),load:Math.floor(75+Math.random()*10),signal:Math.floor(88+Math.random()*6),latencyTrend:Math.random()>.5,cpuTrend:Math.random()>.4}))},2e3);return()=>clearInterval(n)},[]),s};function ME(){const{cpu:s,latency:e,load:n,signal:r,latencyTrend:a,cpuTrend:u}=SE();return He.jsx(yE,{children:He.jsxs("div",{className:"max-w-7xl mx-auto space-y-10 font-outfit",children:[He.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/5",children:[He.jsxs("div",{children:[He.jsxs("h1",{className:"text-6xl font-bold tracking-tighter text-neo-text drop-shadow-[0_0_20px_rgba(0,255,255,0.4)]",children:["JEIKEI ",He.jsx("span",{className:"text-neo-accent",children:"OS"})]}),He.jsx("p",{className:"text-[10px] uppercase tracking-[0.5em] text-neo-muted mt-3 font-bold opacity-70",children:"Neural Network Management Interface // STABLE BUILD 2.0.4"})]}),He.jsxs("div",{className:"flex gap-4",children:[He.jsx(vs,{variant:"primary",className:"h-11 px-10",children:"Sync System"}),He.jsx(vs,{variant:"secondary",className:"h-11 px-10",children:"Diagnostics"})]})]}),He.jsxs(av,{columns:{base:1,md:2,lg:4},gap:"md",children:[He.jsx(qa,{title:"CPU Usage",value:s,unit:"%",trend:{value:"2.4%",up:u}}),He.jsx(qa,{title:"Net Latency",value:e,unit:"ms",variant:"magenta",trend:{value:"2ms",up:!a}}),He.jsx(qa,{title:"Neural Load",value:n,unit:"tps",trend:{value:"12%",up:!0}}),He.jsx(qa,{title:"Signal",value:r,unit:"dbm",trend:{value:"Optimal",up:!0}})]}),He.jsxs("div",{className:"grid lg:grid-cols-3 gap-8",children:[He.jsx(bp,{title:"Input Matrix",className:"lg:col-span-2",children:He.jsxs("div",{className:"space-y-6",children:[He.jsxs("p",{className:"text-sm text-neo-muted leading-relaxed max-w-2xl font-medium",children:["The neural grid is currently operating at ",He.jsx("span",{className:"text-neo-accent font-mono font-bold uppercase tracking-widest text-[11px]",children:"OPTIMAL"})," capacity. All nodes are synced with the global pulse. Interaction waves are enabled for all user events."]}),He.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4",children:[He.jsx(vs,{variant:"outline",children:"Reset Nodes"}),He.jsx(vs,{variant:"outline",children:"Purge Cache"}),He.jsx(vs,{variant:"outline",children:"Re-Route"}),He.jsx(vs,{variant:"ghost",children:"Advanced..."})]})]})}),He.jsx(bp,{title:"Active Threads",subdued:!0,children:He.jsx("div",{className:"space-y-4 font-mono",children:[{id:"TX-902",status:"ACTIVE",color:"text-neo-accent"},{id:"KB-114",status:"SYNCED",color:"text-neo-accent"},{id:"QM-772",status:"OVERLOAD",color:"text-neo-magenta"},{id:"LR-009",status:"IDLE",color:"text-neo-muted"}].map(f=>He.jsxs("div",{className:"flex justify-between items-center border-b border-white/5 pb-2 last:border-0",children:[He.jsxs("span",{className:"text-[10px] text-white/50 font-bold",children:["ID: ",f.id]}),He.jsx("span",{className:`text-[10px] font-bold tracking-widest ${f.color}`,children:f.status})]},f.id))})})]})]})})}rv.createRoot(document.getElementById("root")).render(He.jsx(Um.StrictMode,{children:He.jsx(ME,{})}));
