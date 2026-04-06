(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();function Dm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var _c={exports:{}},wo={},vc={exports:{}},ot={};var Tp;function Z_(){if(Tp)return ot;Tp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),y=Symbol.iterator;function x(I){return I===null||typeof I!="object"?null:(I=y&&I[y]||I["@@iterator"],typeof I=="function"?I:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,C={};function g(I,ie,Ue){this.props=I,this.context=ie,this.refs=C,this.updater=Ue||S}g.prototype.isReactComponent={},g.prototype.setState=function(I,ie){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,ie,"setState")},g.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function v(){}v.prototype=g.prototype;function N(I,ie,Ue){this.props=I,this.context=ie,this.refs=C,this.updater=Ue||S}var P=N.prototype=new v;P.constructor=N,w(P,g.prototype),P.isPureReactComponent=!0;var D=Array.isArray,Q=Object.prototype.hasOwnProperty,B={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function X(I,ie,Ue){var q,le={},ve=null,ye=null;if(ie!=null)for(q in ie.ref!==void 0&&(ye=ie.ref),ie.key!==void 0&&(ve=""+ie.key),ie)Q.call(ie,q)&&!U.hasOwnProperty(q)&&(le[q]=ie[q]);var Pe=arguments.length-2;if(Pe===1)le.children=Ue;else if(1<Pe){for(var be=Array(Pe),et=0;et<Pe;et++)be[et]=arguments[et+2];le.children=be}if(I&&I.defaultProps)for(q in Pe=I.defaultProps,Pe)le[q]===void 0&&(le[q]=Pe[q]);return{$$typeof:s,type:I,key:ve,ref:ye,props:le,_owner:B.current}}function xe(I,ie){return{$$typeof:s,type:I.type,key:ie,ref:I.ref,props:I.props,_owner:I._owner}}function E(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function R(I){var ie={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Ue){return ie[Ue]})}var ne=/\/+/g;function J(I,ie){return typeof I=="object"&&I!==null&&I.key!=null?R(""+I.key):ie.toString(36)}function oe(I,ie,Ue,q,le){var ve=typeof I;(ve==="undefined"||ve==="boolean")&&(I=null);var ye=!1;if(I===null)ye=!0;else switch(ve){case"string":case"number":ye=!0;break;case"object":switch(I.$$typeof){case s:case e:ye=!0}}if(ye)return ye=I,le=le(ye),I=q===""?"."+J(ye,0):q,D(le)?(Ue="",I!=null&&(Ue=I.replace(ne,"$&/")+"/"),oe(le,ie,Ue,"",function(et){return et})):le!=null&&(E(le)&&(le=xe(le,Ue+(!le.key||ye&&ye.key===le.key?"":(""+le.key).replace(ne,"$&/")+"/")+I)),ie.push(le)),1;if(ye=0,q=q===""?".":q+":",D(I))for(var Pe=0;Pe<I.length;Pe++){ve=I[Pe];var be=q+J(ve,Pe);ye+=oe(ve,ie,Ue,be,le)}else if(be=x(I),typeof be=="function")for(I=be.call(I),Pe=0;!(ve=I.next()).done;)ve=ve.value,be=q+J(ve,Pe++),ye+=oe(ve,ie,Ue,be,le);else if(ve==="object")throw ie=String(I),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return ye}function he(I,ie,Ue){if(I==null)return I;var q=[],le=0;return oe(I,q,"","",function(ve){return ie.call(Ue,ve,le++)}),q}function te(I){if(I._status===-1){var ie=I._result;ie=ie(),ie.then(function(Ue){(I._status===0||I._status===-1)&&(I._status=1,I._result=Ue)},function(Ue){(I._status===0||I._status===-1)&&(I._status=2,I._result=Ue)}),I._status===-1&&(I._status=0,I._result=ie)}if(I._status===1)return I._result.default;throw I._result}var ae={current:null},k={transition:null},ue={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:k,ReactCurrentOwner:B};function se(){throw Error("act(...) is not supported in production builds of React.")}return ot.Children={map:he,forEach:function(I,ie,Ue){he(I,function(){ie.apply(this,arguments)},Ue)},count:function(I){var ie=0;return he(I,function(){ie++}),ie},toArray:function(I){return he(I,function(ie){return ie})||[]},only:function(I){if(!E(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},ot.Component=g,ot.Fragment=n,ot.Profiler=a,ot.PureComponent=N,ot.StrictMode=r,ot.Suspense=p,ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,ot.act=se,ot.cloneElement=function(I,ie,Ue){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var q=w({},I.props),le=I.key,ve=I.ref,ye=I._owner;if(ie!=null){if(ie.ref!==void 0&&(ve=ie.ref,ye=B.current),ie.key!==void 0&&(le=""+ie.key),I.type&&I.type.defaultProps)var Pe=I.type.defaultProps;for(be in ie)Q.call(ie,be)&&!U.hasOwnProperty(be)&&(q[be]=ie[be]===void 0&&Pe!==void 0?Pe[be]:ie[be])}var be=arguments.length-2;if(be===1)q.children=Ue;else if(1<be){Pe=Array(be);for(var et=0;et<be;et++)Pe[et]=arguments[et+2];q.children=Pe}return{$$typeof:s,type:I.type,key:le,ref:ve,props:q,_owner:ye}},ot.createContext=function(I){return I={$$typeof:f,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:u,_context:I},I.Consumer=I},ot.createElement=X,ot.createFactory=function(I){var ie=X.bind(null,I);return ie.type=I,ie},ot.createRef=function(){return{current:null}},ot.forwardRef=function(I){return{$$typeof:d,render:I}},ot.isValidElement=E,ot.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:te}},ot.memo=function(I,ie){return{$$typeof:m,type:I,compare:ie===void 0?null:ie}},ot.startTransition=function(I){var ie=k.transition;k.transition={};try{I()}finally{k.transition=ie}},ot.unstable_act=se,ot.useCallback=function(I,ie){return ae.current.useCallback(I,ie)},ot.useContext=function(I){return ae.current.useContext(I)},ot.useDebugValue=function(){},ot.useDeferredValue=function(I){return ae.current.useDeferredValue(I)},ot.useEffect=function(I,ie){return ae.current.useEffect(I,ie)},ot.useId=function(){return ae.current.useId()},ot.useImperativeHandle=function(I,ie,Ue){return ae.current.useImperativeHandle(I,ie,Ue)},ot.useInsertionEffect=function(I,ie){return ae.current.useInsertionEffect(I,ie)},ot.useLayoutEffect=function(I,ie){return ae.current.useLayoutEffect(I,ie)},ot.useMemo=function(I,ie){return ae.current.useMemo(I,ie)},ot.useReducer=function(I,ie,Ue){return ae.current.useReducer(I,ie,Ue)},ot.useRef=function(I){return ae.current.useRef(I)},ot.useState=function(I){return ae.current.useState(I)},ot.useSyncExternalStore=function(I,ie,Ue){return ae.current.useSyncExternalStore(I,ie,Ue)},ot.useTransition=function(){return ae.current.useTransition()},ot.version="18.3.1",ot}var wp;function Gf(){return wp||(wp=1,vc.exports=Z_()),vc.exports}var Ap;function Q_(){if(Ap)return wo;Ap=1;var s=Gf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(d,p,m){var _,y={},x=null,S=null;m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(S=p.ref);for(_ in p)r.call(p,_)&&!u.hasOwnProperty(_)&&(y[_]=p[_]);if(d&&d.defaultProps)for(_ in p=d.defaultProps,p)y[_]===void 0&&(y[_]=p[_]);return{$$typeof:e,type:d,key:x,ref:S,props:y,_owner:a.current}}return wo.Fragment=n,wo.jsx=f,wo.jsxs=f,wo}var Cp;function J_(){return Cp||(Cp=1,_c.exports=Q_()),_c.exports}var we=J_(),Wn=Gf();const Nm=Dm(Wn);var Ya={},xc={exports:{}},Mn={},yc={exports:{}},Sc={};var Rp;function ev(){return Rp||(Rp=1,(function(s){function e(k,ue){var se=k.length;k.push(ue);e:for(;0<se;){var I=se-1>>>1,ie=k[I];if(0<a(ie,ue))k[I]=ue,k[se]=ie,se=I;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var ue=k[0],se=k.pop();if(se!==ue){k[0]=se;e:for(var I=0,ie=k.length,Ue=ie>>>1;I<Ue;){var q=2*(I+1)-1,le=k[q],ve=q+1,ye=k[ve];if(0>a(le,se))ve<ie&&0>a(ye,le)?(k[I]=ye,k[ve]=se,I=ve):(k[I]=le,k[q]=se,I=q);else if(ve<ie&&0>a(ye,se))k[I]=ye,k[ve]=se,I=ve;else break e}}return ue}function a(k,ue){var se=k.sortIndex-ue.sortIndex;return se!==0?se:k.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var p=[],m=[],_=1,y=null,x=3,S=!1,w=!1,C=!1,g=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(k){for(var ue=n(m);ue!==null;){if(ue.callback===null)r(m);else if(ue.startTime<=k)r(m),ue.sortIndex=ue.expirationTime,e(p,ue);else break;ue=n(m)}}function D(k){if(C=!1,P(k),!w)if(n(p)!==null)w=!0,te(Q);else{var ue=n(m);ue!==null&&ae(D,ue.startTime-k)}}function Q(k,ue){w=!1,C&&(C=!1,v(X),X=-1),S=!0;var se=x;try{for(P(ue),y=n(p);y!==null&&(!(y.expirationTime>ue)||k&&!R());){var I=y.callback;if(typeof I=="function"){y.callback=null,x=y.priorityLevel;var ie=I(y.expirationTime<=ue);ue=s.unstable_now(),typeof ie=="function"?y.callback=ie:y===n(p)&&r(p),P(ue)}else r(p);y=n(p)}if(y!==null)var Ue=!0;else{var q=n(m);q!==null&&ae(D,q.startTime-ue),Ue=!1}return Ue}finally{y=null,x=se,S=!1}}var B=!1,U=null,X=-1,xe=5,E=-1;function R(){return!(s.unstable_now()-E<xe)}function ne(){if(U!==null){var k=s.unstable_now();E=k;var ue=!0;try{ue=U(!0,k)}finally{ue?J():(B=!1,U=null)}}else B=!1}var J;if(typeof N=="function")J=function(){N(ne)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,he=oe.port2;oe.port1.onmessage=ne,J=function(){he.postMessage(null)}}else J=function(){g(ne,0)};function te(k){U=k,B||(B=!0,J())}function ae(k,ue){X=g(function(){k(s.unstable_now())},ue)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(k){k.callback=null},s.unstable_continueExecution=function(){w||S||(w=!0,te(Q))},s.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):xe=0<k?Math.floor(1e3/k):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(k){switch(x){case 1:case 2:case 3:var ue=3;break;default:ue=x}var se=x;x=ue;try{return k()}finally{x=se}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(k,ue){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var se=x;x=k;try{return ue()}finally{x=se}},s.unstable_scheduleCallback=function(k,ue,se){var I=s.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?I+se:I):se=I,k){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=se+ie,k={id:_++,callback:ue,priorityLevel:k,startTime:se,expirationTime:ie,sortIndex:-1},se>I?(k.sortIndex=se,e(m,k),n(p)===null&&k===n(m)&&(C?(v(X),X=-1):C=!0,ae(D,se-I))):(k.sortIndex=ie,e(p,k),w||S||(w=!0,te(Q))),k},s.unstable_shouldYield=R,s.unstable_wrapCallback=function(k){var ue=x;return function(){var se=x;x=ue;try{return k.apply(this,arguments)}finally{x=se}}}})(Sc)),Sc}var Pp;function tv(){return Pp||(Pp=1,yc.exports=ev()),yc.exports}var bp;function nv(){if(bp)return Mn;bp=1;var s=Gf(),e=tv();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},y={};function x(t){return p.call(y,t)?!0:p.call(_,t)?!1:m.test(t)?y[t]=!0:(_[t]=!0,!1)}function S(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,i,o,l){if(i===null||typeof i>"u"||S(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(t,i,o,l,c,h,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=M}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){g[t]=new C(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];g[i]=new C(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){g[t]=new C(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){g[t]=new C(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){g[t]=new C(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){g[t]=new C(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){g[t]=new C(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){g[t]=new C(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){g[t]=new C(t,5,!1,t.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function N(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(v,N);g[i]=new C(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(v,N);g[i]=new C(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(v,N);g[i]=new C(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){g[t]=new C(t,1,!1,t.toLowerCase(),null,!1,!1)}),g.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){g[t]=new C(t,1,!1,t.toLowerCase(),null,!0,!0)});function P(t,i,o,l){var c=g.hasOwnProperty(i)?g[i]:null;(c!==null?c.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,o,c,l)&&(o=null),l||c===null?x(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(i=c.attributeName,l=c.attributeNamespace,o===null?t.removeAttribute(i):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var D=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Q=Symbol.for("react.element"),B=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),xe=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),R=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),ae=Symbol.for("react.offscreen"),k=Symbol.iterator;function ue(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,I;function ie(t){if(I===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+t}var Ue=!1;function q(t,i){if(!t||Ue)return"";Ue=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(Z){var l=Z}Reflect.construct(t,[],i)}else{try{i.call()}catch(Z){l=Z}t.call(i.prototype)}else{try{throw Error()}catch(Z){l=Z}t()}}catch(Z){if(Z&&l&&typeof Z.stack=="string"){for(var c=Z.stack.split(`
`),h=l.stack.split(`
`),M=c.length-1,L=h.length-1;1<=M&&0<=L&&c[M]!==h[L];)L--;for(;1<=M&&0<=L;M--,L--)if(c[M]!==h[L]){if(M!==1||L!==1)do if(M--,L--,0>L||c[M]!==h[L]){var F=`
`+c[M].replace(" at new "," at ");return t.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",t.displayName)),F}while(1<=M&&0<=L);break}}}finally{Ue=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?ie(t):""}function le(t){switch(t.tag){case 5:return ie(t.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return t=q(t.type,!1),t;case 11:return t=q(t.type.render,!1),t;case 1:return t=q(t.type,!0),t;default:return""}}function ve(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case U:return"Fragment";case B:return"Portal";case xe:return"Profiler";case X:return"StrictMode";case J:return"Suspense";case oe:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case R:return(t.displayName||"Context")+".Consumer";case E:return(t._context.displayName||"Context")+".Provider";case ne:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case he:return i=t.displayName||null,i!==null?i:ve(t.type)||"Memo";case te:i=t._payload,t=t._init;try{return ve(t(i))}catch{}}return null}function ye(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ve(i);case 8:return i===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Pe(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function be(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function et(t){var i=be(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(M){l=""+M,h.call(this,M)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function pt(t){t._valueTracker||(t._valueTracker=et(t))}function lt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=be(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function O(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function tn(t,i){var o=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function at(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=Pe(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ft(t,i){i=i.checked,i!=null&&P(t,"checked",i,!1)}function $e(t,i){ft(t,i);var o=Pe(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Qe(t,i.type,o):i.hasOwnProperty("defaultValue")&&Qe(t,i.type,Pe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Tt(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Qe(t,i,o){(i!=="number"||O(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var b=Array.isArray;function T(t,i,o,l){if(t=t.options,i){i={};for(var c=0;c<o.length;c++)i["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=i.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&l&&(t[o].defaultSelected=!0)}else{for(o=""+Pe(o),i=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function Y(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function fe(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(b(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Pe(o)}}function ge(t,i){var o=Pe(i.value),l=Pe(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function ce(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function je(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ae(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?je(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Fe,dt=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,c){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,c)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Fe=Fe||document.createElement("div"),Fe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Fe.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Se(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Oe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tt=["Webkit","ms","Moz","O"];Object.keys(Oe).forEach(function(t){tt.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Oe[i]=Oe[t]})});function Je(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Oe.hasOwnProperty(t)&&Oe[t]?(""+i).trim():i+"px"}function Be(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,c=Je(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,c):t[o]=c}}var ut=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function it(t,i){if(i){if(ut[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function St(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var H=null;function Le(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var re=null,de=null,Ce=null;function Ne(t){if(t=uo(t)){if(typeof re!="function")throw Error(n(280));var i=t.stateNode;i&&(i=la(i),re(t.stateNode,t.type,i))}}function ct(t){de?Ce?Ce.push(t):Ce=[t]:de=t}function Ut(){if(de){var t=de,i=Ce;if(Ce=de=null,Ne(t),i)for(t=0;t<i.length;t++)Ne(i[t])}}function nn(t,i){return t(i)}function ht(){}var Kt=!1;function Fn(t,i,o){if(Kt)return t(i,o);Kt=!0;try{return nn(t,i,o)}finally{Kt=!1,(de!==null||Ce!==null)&&(ht(),Ut())}}function Bi(t,i){var o=t.stateNode;if(o===null)return null;var l=la(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Xr=!1;if(d)try{var Cn={};Object.defineProperty(Cn,"passive",{get:function(){Xr=!0}}),window.addEventListener("test",Cn,Cn),window.removeEventListener("test",Cn,Cn)}catch{Xr=!1}function Ws(t,i,o,l,c,h,M,L,F){var Z=Array.prototype.slice.call(arguments,3);try{i.apply(o,Z)}catch(me){this.onError(me)}}var zi=!1,vr=null,pi=!1,jr=null,Yr={onError:function(t){zi=!0,vr=t}};function Go(t,i,o,l,c,h,M,L,F){zi=!1,vr=null,Ws.apply(Yr,arguments)}function Wo(t,i,o,l,c,h,M,L,F){if(Go.apply(this,arguments),zi){if(zi){var Z=vr;zi=!1,vr=null}else throw Error(n(198));pi||(pi=!0,jr=Z)}}function mi(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Xo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function jo(t){if(mi(t)!==t)throw Error(n(188))}function A(t){var i=t.alternate;if(!i){if(i=mi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var c=o.return;if(c===null)break;var h=c.alternate;if(h===null){if(l=c.return,l!==null){o=l;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===o)return jo(c),t;if(h===l)return jo(c),i;h=h.sibling}throw Error(n(188))}if(o.return!==l.return)o=c,l=h;else{for(var M=!1,L=c.child;L;){if(L===o){M=!0,o=c,l=h;break}if(L===l){M=!0,l=c,o=h;break}L=L.sibling}if(!M){for(L=h.child;L;){if(L===o){M=!0,o=h,l=c;break}if(L===l){M=!0,l=h,o=c;break}L=L.sibling}if(!M)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function V(t){return t=A(t),t!==null?K(t):null}function K(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=K(t);if(i!==null)return i;t=t.sibling}return null}var $=e.unstable_scheduleCallback,G=e.unstable_cancelCallback,Ee=e.unstable_shouldYield,De=e.unstable_requestPaint,Te=e.unstable_now,Ge=e.unstable_getCurrentPriorityLevel,Ke=e.unstable_ImmediatePriority,Ze=e.unstable_UserBlockingPriority,We=e.unstable_NormalPriority,xt=e.unstable_LowPriority,wt=e.unstable_IdlePriority,At=null,Nt=null;function gt(t){if(Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(At,t,void 0,(t.current.flags&128)===128)}catch{}}var ke=Math.clz32?Math.clz32:Rn,Wt=Math.log,_t=Math.LN2;function Rn(t){return t>>>=0,t===0?32:31-(Wt(t)/_t|0)|0}var jn=64,$t=4194304;function gi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Rt(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,c=t.suspendedLanes,h=t.pingedLanes,M=o&268435455;if(M!==0){var L=M&~c;L!==0?l=gi(L):(h&=M,h!==0&&(l=gi(h)))}else M=o&~c,M!==0?l=gi(M):h!==0&&(l=gi(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&c)===0&&(c=l&-l,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-ke(i),c=1<<o,l|=t[o],i&=~c;return l}function ai(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xs(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var M=31-ke(h),L=1<<M,F=c[M];F===-1?((L&o)===0||(L&l)!==0)&&(c[M]=ai(L,i)):F<=i&&(t.expiredLanes|=L),h&=~L}}function on(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function qr(){var t=jn;return jn<<=1,(jn&4194240)===0&&(jn=64),t}function js(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Hi(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-ke(i),t[i]=o}function vg(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-ke(o),h=1<<c;i[c]=0,l[c]=-1,t[c]=-1,o&=~h}}function zl(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-ke(o),c=1<<l;c&i|t[l]&i&&(t[l]|=i),o&=~c}}var Et=0;function nd(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var id,Hl,rd,sd,od,Vl=!1,Yo=[],Vi=null,Gi=null,Wi=null,Ys=new Map,qs=new Map,Xi=[],xg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ad(t,i){switch(t){case"focusin":case"focusout":Vi=null;break;case"dragenter":case"dragleave":Gi=null;break;case"mouseover":case"mouseout":Wi=null;break;case"pointerover":case"pointerout":Ys.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":qs.delete(i.pointerId)}}function Ks(t,i,o,l,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:h,targetContainers:[c]},i!==null&&(i=uo(i),i!==null&&Hl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function yg(t,i,o,l,c){switch(i){case"focusin":return Vi=Ks(Vi,t,i,o,l,c),!0;case"dragenter":return Gi=Ks(Gi,t,i,o,l,c),!0;case"mouseover":return Wi=Ks(Wi,t,i,o,l,c),!0;case"pointerover":var h=c.pointerId;return Ys.set(h,Ks(Ys.get(h)||null,t,i,o,l,c)),!0;case"gotpointercapture":return h=c.pointerId,qs.set(h,Ks(qs.get(h)||null,t,i,o,l,c)),!0}return!1}function ld(t){var i=xr(t.target);if(i!==null){var o=mi(i);if(o!==null){if(i=o.tag,i===13){if(i=Xo(o),i!==null){t.blockedOn=i,od(t.priority,function(){rd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Wl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);H=l,o.target.dispatchEvent(l),H=null}else return i=uo(o),i!==null&&Hl(i),t.blockedOn=o,!1;i.shift()}return!0}function ud(t,i,o){qo(t)&&o.delete(i)}function Sg(){Vl=!1,Vi!==null&&qo(Vi)&&(Vi=null),Gi!==null&&qo(Gi)&&(Gi=null),Wi!==null&&qo(Wi)&&(Wi=null),Ys.forEach(ud),qs.forEach(ud)}function $s(t,i){t.blockedOn===i&&(t.blockedOn=null,Vl||(Vl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Sg)))}function Zs(t){function i(c){return $s(c,t)}if(0<Yo.length){$s(Yo[0],t);for(var o=1;o<Yo.length;o++){var l=Yo[o];l.blockedOn===t&&(l.blockedOn=null)}}for(Vi!==null&&$s(Vi,t),Gi!==null&&$s(Gi,t),Wi!==null&&$s(Wi,t),Ys.forEach(i),qs.forEach(i),o=0;o<Xi.length;o++)l=Xi[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<Xi.length&&(o=Xi[0],o.blockedOn===null);)ld(o),o.blockedOn===null&&Xi.shift()}var Kr=D.ReactCurrentBatchConfig,Ko=!0;function Mg(t,i,o,l){var c=Et,h=Kr.transition;Kr.transition=null;try{Et=1,Gl(t,i,o,l)}finally{Et=c,Kr.transition=h}}function Eg(t,i,o,l){var c=Et,h=Kr.transition;Kr.transition=null;try{Et=4,Gl(t,i,o,l)}finally{Et=c,Kr.transition=h}}function Gl(t,i,o,l){if(Ko){var c=Wl(t,i,o,l);if(c===null)au(t,i,l,$o,o),ad(t,l);else if(yg(c,t,i,o,l))l.stopPropagation();else if(ad(t,l),i&4&&-1<xg.indexOf(t)){for(;c!==null;){var h=uo(c);if(h!==null&&id(h),h=Wl(t,i,o,l),h===null&&au(t,i,l,$o,o),h===c)break;c=h}c!==null&&l.stopPropagation()}else au(t,i,l,null,o)}}var $o=null;function Wl(t,i,o,l){if($o=null,t=Le(l),t=xr(t),t!==null)if(i=mi(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Xo(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return $o=t,null}function cd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ge()){case Ke:return 1;case Ze:return 4;case We:case xt:return 16;case wt:return 536870912;default:return 16}default:return 16}}var ji=null,Xl=null,Zo=null;function fd(){if(Zo)return Zo;var t,i=Xl,o=i.length,l,c="value"in ji?ji.value:ji.textContent,h=c.length;for(t=0;t<o&&i[t]===c[t];t++);var M=o-t;for(l=1;l<=M&&i[o-l]===c[h-l];l++);return Zo=c.slice(t,1<l?1-l:void 0)}function Qo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Jo(){return!0}function dd(){return!1}function Pn(t){function i(o,l,c,h,M){this._reactName=o,this._targetInst=c,this.type=l,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var L in t)t.hasOwnProperty(L)&&(o=t[L],this[L]=o?o(h):h[L]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Jo:dd,this.isPropagationStopped=dd,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Jo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Jo)},persist:function(){},isPersistent:Jo}),i}var $r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jl=Pn($r),Qs=se({},$r,{view:0,detail:0}),Tg=Pn(Qs),Yl,ql,Js,ea=se({},Qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$l,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Js&&(Js&&t.type==="mousemove"?(Yl=t.screenX-Js.screenX,ql=t.screenY-Js.screenY):ql=Yl=0,Js=t),Yl)},movementY:function(t){return"movementY"in t?t.movementY:ql}}),hd=Pn(ea),wg=se({},ea,{dataTransfer:0}),Ag=Pn(wg),Cg=se({},Qs,{relatedTarget:0}),Kl=Pn(Cg),Rg=se({},$r,{animationName:0,elapsedTime:0,pseudoElement:0}),Pg=Pn(Rg),bg=se({},$r,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Lg=Pn(bg),Dg=se({},$r,{data:0}),pd=Pn(Dg),Ng={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ig={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ug={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Ug[t])?!!i[t]:!1}function $l(){return Fg}var Og=se({},Qs,{key:function(t){if(t.key){var i=Ng[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Qo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ig[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$l,charCode:function(t){return t.type==="keypress"?Qo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),kg=Pn(Og),Bg=se({},ea,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),md=Pn(Bg),zg=se({},Qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$l}),Hg=Pn(zg),Vg=se({},$r,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gg=Pn(Vg),Wg=se({},ea,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Xg=Pn(Wg),jg=[9,13,27,32],Zl=d&&"CompositionEvent"in window,eo=null;d&&"documentMode"in document&&(eo=document.documentMode);var Yg=d&&"TextEvent"in window&&!eo,gd=d&&(!Zl||eo&&8<eo&&11>=eo),_d=" ",vd=!1;function xd(t,i){switch(t){case"keyup":return jg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zr=!1;function qg(t,i){switch(t){case"compositionend":return yd(i);case"keypress":return i.which!==32?null:(vd=!0,_d);case"textInput":return t=i.data,t===_d&&vd?null:t;default:return null}}function Kg(t,i){if(Zr)return t==="compositionend"||!Zl&&xd(t,i)?(t=fd(),Zo=Xl=ji=null,Zr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return gd&&i.locale!=="ko"?null:i.data;default:return null}}var $g={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!$g[t.type]:i==="textarea"}function Md(t,i,o,l){ct(l),i=sa(i,"onChange"),0<i.length&&(o=new jl("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var to=null,no=null;function Zg(t){zd(t,0)}function ta(t){var i=ns(t);if(lt(i))return t}function Qg(t,i){if(t==="change")return i}var Ed=!1;if(d){var Ql;if(d){var Jl="oninput"in document;if(!Jl){var Td=document.createElement("div");Td.setAttribute("oninput","return;"),Jl=typeof Td.oninput=="function"}Ql=Jl}else Ql=!1;Ed=Ql&&(!document.documentMode||9<document.documentMode)}function wd(){to&&(to.detachEvent("onpropertychange",Ad),no=to=null)}function Ad(t){if(t.propertyName==="value"&&ta(no)){var i=[];Md(i,no,t,Le(t)),Fn(Zg,i)}}function Jg(t,i,o){t==="focusin"?(wd(),to=i,no=o,to.attachEvent("onpropertychange",Ad)):t==="focusout"&&wd()}function e_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ta(no)}function t_(t,i){if(t==="click")return ta(i)}function n_(t,i){if(t==="input"||t==="change")return ta(i)}function i_(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Yn=typeof Object.is=="function"?Object.is:i_;function io(t,i){if(Yn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var c=o[l];if(!p.call(i,c)||!Yn(t[c],i[c]))return!1}return!0}function Cd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Rd(t,i){var o=Cd(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Cd(o)}}function Pd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Pd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function bd(){for(var t=window,i=O();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=O(t.document)}return i}function eu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function r_(t){var i=bd(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Pd(o.ownerDocument.documentElement,o)){if(l!==null&&eu(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,h=Math.min(l.start,c);l=l.end===void 0?h:Math.min(l.end,c),!t.extend&&h>l&&(c=l,l=h,h=c),c=Rd(o,h);var M=Rd(o,l);c&&M&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var s_=d&&"documentMode"in document&&11>=document.documentMode,Qr=null,tu=null,ro=null,nu=!1;function Ld(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;nu||Qr==null||Qr!==O(l)||(l=Qr,"selectionStart"in l&&eu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ro&&io(ro,l)||(ro=l,l=sa(tu,"onSelect"),0<l.length&&(i=new jl("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=Qr)))}function na(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var Jr={animationend:na("Animation","AnimationEnd"),animationiteration:na("Animation","AnimationIteration"),animationstart:na("Animation","AnimationStart"),transitionend:na("Transition","TransitionEnd")},iu={},Dd={};d&&(Dd=document.createElement("div").style,"AnimationEvent"in window||(delete Jr.animationend.animation,delete Jr.animationiteration.animation,delete Jr.animationstart.animation),"TransitionEvent"in window||delete Jr.transitionend.transition);function ia(t){if(iu[t])return iu[t];if(!Jr[t])return t;var i=Jr[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Dd)return iu[t]=i[o];return t}var Nd=ia("animationend"),Id=ia("animationiteration"),Ud=ia("animationstart"),Fd=ia("transitionend"),Od=new Map,kd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yi(t,i){Od.set(t,i),u(i,[t])}for(var ru=0;ru<kd.length;ru++){var su=kd[ru],o_=su.toLowerCase(),a_=su[0].toUpperCase()+su.slice(1);Yi(o_,"on"+a_)}Yi(Nd,"onAnimationEnd"),Yi(Id,"onAnimationIteration"),Yi(Ud,"onAnimationStart"),Yi("dblclick","onDoubleClick"),Yi("focusin","onFocus"),Yi("focusout","onBlur"),Yi(Fd,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var so="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),l_=new Set("cancel close invalid load scroll toggle".split(" ").concat(so));function Bd(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,Wo(l,i,void 0,t),t.currentTarget=null}function zd(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],c=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var M=l.length-1;0<=M;M--){var L=l[M],F=L.instance,Z=L.currentTarget;if(L=L.listener,F!==h&&c.isPropagationStopped())break e;Bd(c,L,Z),h=F}else for(M=0;M<l.length;M++){if(L=l[M],F=L.instance,Z=L.currentTarget,L=L.listener,F!==h&&c.isPropagationStopped())break e;Bd(c,L,Z),h=F}}}if(pi)throw t=jr,pi=!1,jr=null,t}function bt(t,i){var o=i[hu];o===void 0&&(o=i[hu]=new Set);var l=t+"__bubble";o.has(l)||(Hd(i,t,2,!1),o.add(l))}function ou(t,i,o){var l=0;i&&(l|=4),Hd(o,t,l,i)}var ra="_reactListening"+Math.random().toString(36).slice(2);function oo(t){if(!t[ra]){t[ra]=!0,r.forEach(function(o){o!=="selectionchange"&&(l_.has(o)||ou(o,!1,t),ou(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ra]||(i[ra]=!0,ou("selectionchange",!1,i))}}function Hd(t,i,o,l){switch(cd(i)){case 1:var c=Mg;break;case 4:c=Eg;break;default:c=Gl}o=c.bind(null,i,o,t),c=void 0,!Xr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(i,o,{capture:!0,passive:c}):t.addEventListener(i,o,!0):c!==void 0?t.addEventListener(i,o,{passive:c}):t.addEventListener(i,o,!1)}function au(t,i,o,l,c){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var L=l.stateNode.containerInfo;if(L===c||L.nodeType===8&&L.parentNode===c)break;if(M===4)for(M=l.return;M!==null;){var F=M.tag;if((F===3||F===4)&&(F=M.stateNode.containerInfo,F===c||F.nodeType===8&&F.parentNode===c))return;M=M.return}for(;L!==null;){if(M=xr(L),M===null)return;if(F=M.tag,F===5||F===6){l=h=M;continue e}L=L.parentNode}}l=l.return}Fn(function(){var Z=h,me=Le(o),_e=[];e:{var pe=Od.get(t);if(pe!==void 0){var Ie=jl,He=t;switch(t){case"keypress":if(Qo(o)===0)break e;case"keydown":case"keyup":Ie=kg;break;case"focusin":He="focus",Ie=Kl;break;case"focusout":He="blur",Ie=Kl;break;case"beforeblur":case"afterblur":Ie=Kl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=hd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=Ag;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=Hg;break;case Nd:case Id:case Ud:Ie=Pg;break;case Fd:Ie=Gg;break;case"scroll":Ie=Tg;break;case"wheel":Ie=Xg;break;case"copy":case"cut":case"paste":Ie=Lg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=md}var Ve=(i&4)!==0,zt=!Ve&&t==="scroll",W=Ve?pe!==null?pe+"Capture":null:pe;Ve=[];for(var z=Z,j;z!==null;){j=z;var Me=j.stateNode;if(j.tag===5&&Me!==null&&(j=Me,W!==null&&(Me=Bi(z,W),Me!=null&&Ve.push(ao(z,Me,j)))),zt)break;z=z.return}0<Ve.length&&(pe=new Ie(pe,He,null,o,me),_e.push({event:pe,listeners:Ve}))}}if((i&7)===0){e:{if(pe=t==="mouseover"||t==="pointerover",Ie=t==="mouseout"||t==="pointerout",pe&&o!==H&&(He=o.relatedTarget||o.fromElement)&&(xr(He)||He[_i]))break e;if((Ie||pe)&&(pe=me.window===me?me:(pe=me.ownerDocument)?pe.defaultView||pe.parentWindow:window,Ie?(He=o.relatedTarget||o.toElement,Ie=Z,He=He?xr(He):null,He!==null&&(zt=mi(He),He!==zt||He.tag!==5&&He.tag!==6)&&(He=null)):(Ie=null,He=Z),Ie!==He)){if(Ve=hd,Me="onMouseLeave",W="onMouseEnter",z="mouse",(t==="pointerout"||t==="pointerover")&&(Ve=md,Me="onPointerLeave",W="onPointerEnter",z="pointer"),zt=Ie==null?pe:ns(Ie),j=He==null?pe:ns(He),pe=new Ve(Me,z+"leave",Ie,o,me),pe.target=zt,pe.relatedTarget=j,Me=null,xr(me)===Z&&(Ve=new Ve(W,z+"enter",He,o,me),Ve.target=j,Ve.relatedTarget=zt,Me=Ve),zt=Me,Ie&&He)t:{for(Ve=Ie,W=He,z=0,j=Ve;j;j=es(j))z++;for(j=0,Me=W;Me;Me=es(Me))j++;for(;0<z-j;)Ve=es(Ve),z--;for(;0<j-z;)W=es(W),j--;for(;z--;){if(Ve===W||W!==null&&Ve===W.alternate)break t;Ve=es(Ve),W=es(W)}Ve=null}else Ve=null;Ie!==null&&Vd(_e,pe,Ie,Ve,!1),He!==null&&zt!==null&&Vd(_e,zt,He,Ve,!0)}}e:{if(pe=Z?ns(Z):window,Ie=pe.nodeName&&pe.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&pe.type==="file")var Xe=Qg;else if(Sd(pe))if(Ed)Xe=n_;else{Xe=e_;var Ye=Jg}else(Ie=pe.nodeName)&&Ie.toLowerCase()==="input"&&(pe.type==="checkbox"||pe.type==="radio")&&(Xe=t_);if(Xe&&(Xe=Xe(t,Z))){Md(_e,Xe,o,me);break e}Ye&&Ye(t,pe,Z),t==="focusout"&&(Ye=pe._wrapperState)&&Ye.controlled&&pe.type==="number"&&Qe(pe,"number",pe.value)}switch(Ye=Z?ns(Z):window,t){case"focusin":(Sd(Ye)||Ye.contentEditable==="true")&&(Qr=Ye,tu=Z,ro=null);break;case"focusout":ro=tu=Qr=null;break;case"mousedown":nu=!0;break;case"contextmenu":case"mouseup":case"dragend":nu=!1,Ld(_e,o,me);break;case"selectionchange":if(s_)break;case"keydown":case"keyup":Ld(_e,o,me)}var qe;if(Zl)e:{switch(t){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else Zr?xd(t,o)&&(nt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(nt="onCompositionStart");nt&&(gd&&o.locale!=="ko"&&(Zr||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&Zr&&(qe=fd()):(ji=me,Xl="value"in ji?ji.value:ji.textContent,Zr=!0)),Ye=sa(Z,nt),0<Ye.length&&(nt=new pd(nt,t,null,o,me),_e.push({event:nt,listeners:Ye}),qe?nt.data=qe:(qe=yd(o),qe!==null&&(nt.data=qe)))),(qe=Yg?qg(t,o):Kg(t,o))&&(Z=sa(Z,"onBeforeInput"),0<Z.length&&(me=new pd("onBeforeInput","beforeinput",null,o,me),_e.push({event:me,listeners:Z}),me.data=qe))}zd(_e,i)})}function ao(t,i,o){return{instance:t,listener:i,currentTarget:o}}function sa(t,i){for(var o=i+"Capture",l=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=Bi(t,o),h!=null&&l.unshift(ao(t,h,c)),h=Bi(t,i),h!=null&&l.push(ao(t,h,c))),t=t.return}return l}function es(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Vd(t,i,o,l,c){for(var h=i._reactName,M=[];o!==null&&o!==l;){var L=o,F=L.alternate,Z=L.stateNode;if(F!==null&&F===l)break;L.tag===5&&Z!==null&&(L=Z,c?(F=Bi(o,h),F!=null&&M.unshift(ao(o,F,L))):c||(F=Bi(o,h),F!=null&&M.push(ao(o,F,L)))),o=o.return}M.length!==0&&t.push({event:i,listeners:M})}var u_=/\r\n?/g,c_=/\u0000|\uFFFD/g;function Gd(t){return(typeof t=="string"?t:""+t).replace(u_,`
`).replace(c_,"")}function oa(t,i,o){if(i=Gd(i),Gd(t)!==i&&o)throw Error(n(425))}function aa(){}var lu=null,uu=null;function cu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var fu=typeof setTimeout=="function"?setTimeout:void 0,f_=typeof clearTimeout=="function"?clearTimeout:void 0,Wd=typeof Promise=="function"?Promise:void 0,d_=typeof queueMicrotask=="function"?queueMicrotask:typeof Wd<"u"?function(t){return Wd.resolve(null).then(t).catch(h_)}:fu;function h_(t){setTimeout(function(){throw t})}function du(t,i){var o=i,l=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(l===0){t.removeChild(c),Zs(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=c}while(o);Zs(i)}function qi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Xd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var ts=Math.random().toString(36).slice(2),li="__reactFiber$"+ts,lo="__reactProps$"+ts,_i="__reactContainer$"+ts,hu="__reactEvents$"+ts,p_="__reactListeners$"+ts,m_="__reactHandles$"+ts;function xr(t){var i=t[li];if(i)return i;for(var o=t.parentNode;o;){if(i=o[_i]||o[li]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Xd(t);t!==null;){if(o=t[li])return o;t=Xd(t)}return i}t=o,o=t.parentNode}return null}function uo(t){return t=t[li]||t[_i],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ns(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function la(t){return t[lo]||null}var pu=[],is=-1;function Ki(t){return{current:t}}function Lt(t){0>is||(t.current=pu[is],pu[is]=null,is--)}function Pt(t,i){is++,pu[is]=t.current,t.current=i}var $i={},an=Ki($i),_n=Ki(!1),yr=$i;function rs(t,i){var o=t.type.contextTypes;if(!o)return $i;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in o)c[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function vn(t){return t=t.childContextTypes,t!=null}function ua(){Lt(_n),Lt(an)}function jd(t,i,o){if(an.current!==$i)throw Error(n(168));Pt(an,i),Pt(_n,o)}function Yd(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var c in l)if(!(c in i))throw Error(n(108,ye(t)||"Unknown",c));return se({},o,l)}function ca(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||$i,yr=an.current,Pt(an,t),Pt(_n,_n.current),!0}function qd(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=Yd(t,i,yr),l.__reactInternalMemoizedMergedChildContext=t,Lt(_n),Lt(an),Pt(an,t)):Lt(_n),Pt(_n,o)}var vi=null,fa=!1,mu=!1;function Kd(t){vi===null?vi=[t]:vi.push(t)}function g_(t){fa=!0,Kd(t)}function Zi(){if(!mu&&vi!==null){mu=!0;var t=0,i=Et;try{var o=vi;for(Et=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}vi=null,fa=!1}catch(c){throw vi!==null&&(vi=vi.slice(t+1)),$(Ke,Zi),c}finally{Et=i,mu=!1}}return null}var ss=[],os=0,da=null,ha=0,On=[],kn=0,Sr=null,xi=1,yi="";function Mr(t,i){ss[os++]=ha,ss[os++]=da,da=t,ha=i}function $d(t,i,o){On[kn++]=xi,On[kn++]=yi,On[kn++]=Sr,Sr=t;var l=xi;t=yi;var c=32-ke(l)-1;l&=~(1<<c),o+=1;var h=32-ke(i)+c;if(30<h){var M=c-c%5;h=(l&(1<<M)-1).toString(32),l>>=M,c-=M,xi=1<<32-ke(i)+c|o<<c|l,yi=h+t}else xi=1<<h|o<<c|l,yi=t}function gu(t){t.return!==null&&(Mr(t,1),$d(t,1,0))}function _u(t){for(;t===da;)da=ss[--os],ss[os]=null,ha=ss[--os],ss[os]=null;for(;t===Sr;)Sr=On[--kn],On[kn]=null,yi=On[--kn],On[kn]=null,xi=On[--kn],On[kn]=null}var bn=null,Ln=null,It=!1,qn=null;function Zd(t,i){var o=Vn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Qd(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,bn=t,Ln=qi(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,bn=t,Ln=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Sr!==null?{id:xi,overflow:yi}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Vn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,bn=t,Ln=null,!0):!1;default:return!1}}function vu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function xu(t){if(It){var i=Ln;if(i){var o=i;if(!Qd(t,i)){if(vu(t))throw Error(n(418));i=qi(o.nextSibling);var l=bn;i&&Qd(t,i)?Zd(l,o):(t.flags=t.flags&-4097|2,It=!1,bn=t)}}else{if(vu(t))throw Error(n(418));t.flags=t.flags&-4097|2,It=!1,bn=t}}}function Jd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;bn=t}function pa(t){if(t!==bn)return!1;if(!It)return Jd(t),It=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!cu(t.type,t.memoizedProps)),i&&(i=Ln)){if(vu(t))throw eh(),Error(n(418));for(;i;)Zd(t,i),i=qi(i.nextSibling)}if(Jd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Ln=qi(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Ln=null}}else Ln=bn?qi(t.stateNode.nextSibling):null;return!0}function eh(){for(var t=Ln;t;)t=qi(t.nextSibling)}function as(){Ln=bn=null,It=!1}function yu(t){qn===null?qn=[t]:qn.push(t)}var __=D.ReactCurrentBatchConfig;function co(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var c=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(M){var L=c.refs;M===null?delete L[h]:L[h]=M},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function ma(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function th(t){var i=t._init;return i(t._payload)}function nh(t){function i(W,z){if(t){var j=W.deletions;j===null?(W.deletions=[z],W.flags|=16):j.push(z)}}function o(W,z){if(!t)return null;for(;z!==null;)i(W,z),z=z.sibling;return null}function l(W,z){for(W=new Map;z!==null;)z.key!==null?W.set(z.key,z):W.set(z.index,z),z=z.sibling;return W}function c(W,z){return W=sr(W,z),W.index=0,W.sibling=null,W}function h(W,z,j){return W.index=j,t?(j=W.alternate,j!==null?(j=j.index,j<z?(W.flags|=2,z):j):(W.flags|=2,z)):(W.flags|=1048576,z)}function M(W){return t&&W.alternate===null&&(W.flags|=2),W}function L(W,z,j,Me){return z===null||z.tag!==6?(z=fc(j,W.mode,Me),z.return=W,z):(z=c(z,j),z.return=W,z)}function F(W,z,j,Me){var Xe=j.type;return Xe===U?me(W,z,j.props.children,Me,j.key):z!==null&&(z.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===te&&th(Xe)===z.type)?(Me=c(z,j.props),Me.ref=co(W,z,j),Me.return=W,Me):(Me=Ba(j.type,j.key,j.props,null,W.mode,Me),Me.ref=co(W,z,j),Me.return=W,Me)}function Z(W,z,j,Me){return z===null||z.tag!==4||z.stateNode.containerInfo!==j.containerInfo||z.stateNode.implementation!==j.implementation?(z=dc(j,W.mode,Me),z.return=W,z):(z=c(z,j.children||[]),z.return=W,z)}function me(W,z,j,Me,Xe){return z===null||z.tag!==7?(z=br(j,W.mode,Me,Xe),z.return=W,z):(z=c(z,j),z.return=W,z)}function _e(W,z,j){if(typeof z=="string"&&z!==""||typeof z=="number")return z=fc(""+z,W.mode,j),z.return=W,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case Q:return j=Ba(z.type,z.key,z.props,null,W.mode,j),j.ref=co(W,null,z),j.return=W,j;case B:return z=dc(z,W.mode,j),z.return=W,z;case te:var Me=z._init;return _e(W,Me(z._payload),j)}if(b(z)||ue(z))return z=br(z,W.mode,j,null),z.return=W,z;ma(W,z)}return null}function pe(W,z,j,Me){var Xe=z!==null?z.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return Xe!==null?null:L(W,z,""+j,Me);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Q:return j.key===Xe?F(W,z,j,Me):null;case B:return j.key===Xe?Z(W,z,j,Me):null;case te:return Xe=j._init,pe(W,z,Xe(j._payload),Me)}if(b(j)||ue(j))return Xe!==null?null:me(W,z,j,Me,null);ma(W,j)}return null}function Ie(W,z,j,Me,Xe){if(typeof Me=="string"&&Me!==""||typeof Me=="number")return W=W.get(j)||null,L(z,W,""+Me,Xe);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case Q:return W=W.get(Me.key===null?j:Me.key)||null,F(z,W,Me,Xe);case B:return W=W.get(Me.key===null?j:Me.key)||null,Z(z,W,Me,Xe);case te:var Ye=Me._init;return Ie(W,z,j,Ye(Me._payload),Xe)}if(b(Me)||ue(Me))return W=W.get(j)||null,me(z,W,Me,Xe,null);ma(z,Me)}return null}function He(W,z,j,Me){for(var Xe=null,Ye=null,qe=z,nt=z=0,Jt=null;qe!==null&&nt<j.length;nt++){qe.index>nt?(Jt=qe,qe=null):Jt=qe.sibling;var vt=pe(W,qe,j[nt],Me);if(vt===null){qe===null&&(qe=Jt);break}t&&qe&&vt.alternate===null&&i(W,qe),z=h(vt,z,nt),Ye===null?Xe=vt:Ye.sibling=vt,Ye=vt,qe=Jt}if(nt===j.length)return o(W,qe),It&&Mr(W,nt),Xe;if(qe===null){for(;nt<j.length;nt++)qe=_e(W,j[nt],Me),qe!==null&&(z=h(qe,z,nt),Ye===null?Xe=qe:Ye.sibling=qe,Ye=qe);return It&&Mr(W,nt),Xe}for(qe=l(W,qe);nt<j.length;nt++)Jt=Ie(qe,W,nt,j[nt],Me),Jt!==null&&(t&&Jt.alternate!==null&&qe.delete(Jt.key===null?nt:Jt.key),z=h(Jt,z,nt),Ye===null?Xe=Jt:Ye.sibling=Jt,Ye=Jt);return t&&qe.forEach(function(or){return i(W,or)}),It&&Mr(W,nt),Xe}function Ve(W,z,j,Me){var Xe=ue(j);if(typeof Xe!="function")throw Error(n(150));if(j=Xe.call(j),j==null)throw Error(n(151));for(var Ye=Xe=null,qe=z,nt=z=0,Jt=null,vt=j.next();qe!==null&&!vt.done;nt++,vt=j.next()){qe.index>nt?(Jt=qe,qe=null):Jt=qe.sibling;var or=pe(W,qe,vt.value,Me);if(or===null){qe===null&&(qe=Jt);break}t&&qe&&or.alternate===null&&i(W,qe),z=h(or,z,nt),Ye===null?Xe=or:Ye.sibling=or,Ye=or,qe=Jt}if(vt.done)return o(W,qe),It&&Mr(W,nt),Xe;if(qe===null){for(;!vt.done;nt++,vt=j.next())vt=_e(W,vt.value,Me),vt!==null&&(z=h(vt,z,nt),Ye===null?Xe=vt:Ye.sibling=vt,Ye=vt);return It&&Mr(W,nt),Xe}for(qe=l(W,qe);!vt.done;nt++,vt=j.next())vt=Ie(qe,W,nt,vt.value,Me),vt!==null&&(t&&vt.alternate!==null&&qe.delete(vt.key===null?nt:vt.key),z=h(vt,z,nt),Ye===null?Xe=vt:Ye.sibling=vt,Ye=vt);return t&&qe.forEach(function($_){return i(W,$_)}),It&&Mr(W,nt),Xe}function zt(W,z,j,Me){if(typeof j=="object"&&j!==null&&j.type===U&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case Q:e:{for(var Xe=j.key,Ye=z;Ye!==null;){if(Ye.key===Xe){if(Xe=j.type,Xe===U){if(Ye.tag===7){o(W,Ye.sibling),z=c(Ye,j.props.children),z.return=W,W=z;break e}}else if(Ye.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===te&&th(Xe)===Ye.type){o(W,Ye.sibling),z=c(Ye,j.props),z.ref=co(W,Ye,j),z.return=W,W=z;break e}o(W,Ye);break}else i(W,Ye);Ye=Ye.sibling}j.type===U?(z=br(j.props.children,W.mode,Me,j.key),z.return=W,W=z):(Me=Ba(j.type,j.key,j.props,null,W.mode,Me),Me.ref=co(W,z,j),Me.return=W,W=Me)}return M(W);case B:e:{for(Ye=j.key;z!==null;){if(z.key===Ye)if(z.tag===4&&z.stateNode.containerInfo===j.containerInfo&&z.stateNode.implementation===j.implementation){o(W,z.sibling),z=c(z,j.children||[]),z.return=W,W=z;break e}else{o(W,z);break}else i(W,z);z=z.sibling}z=dc(j,W.mode,Me),z.return=W,W=z}return M(W);case te:return Ye=j._init,zt(W,z,Ye(j._payload),Me)}if(b(j))return He(W,z,j,Me);if(ue(j))return Ve(W,z,j,Me);ma(W,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,z!==null&&z.tag===6?(o(W,z.sibling),z=c(z,j),z.return=W,W=z):(o(W,z),z=fc(j,W.mode,Me),z.return=W,W=z),M(W)):o(W,z)}return zt}var ls=nh(!0),ih=nh(!1),ga=Ki(null),_a=null,us=null,Su=null;function Mu(){Su=us=_a=null}function Eu(t){var i=ga.current;Lt(ga),t._currentValue=i}function Tu(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function cs(t,i){_a=t,Su=us=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(xn=!0),t.firstContext=null)}function Bn(t){var i=t._currentValue;if(Su!==t)if(t={context:t,memoizedValue:i,next:null},us===null){if(_a===null)throw Error(n(308));us=t,_a.dependencies={lanes:0,firstContext:t}}else us=us.next=t;return i}var Er=null;function wu(t){Er===null?Er=[t]:Er.push(t)}function rh(t,i,o,l){var c=i.interleaved;return c===null?(o.next=o,wu(i)):(o.next=c.next,c.next=o),i.interleaved=o,Si(t,l)}function Si(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Qi=!1;function Au(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Mi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Ji(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(mt&2)!==0){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,Si(t,o)}return c=l.interleaved,c===null?(i.next=i,wu(l)):(i.next=c.next,c.next=i),l.interleaved=i,Si(t,o)}function va(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,zl(t,o)}}function oh(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var c=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?c=h=M:h=h.next=M,o=o.next}while(o!==null);h===null?c=h=i:h=h.next=i}else c=h=i;o={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function xa(t,i,o,l){var c=t.updateQueue;Qi=!1;var h=c.firstBaseUpdate,M=c.lastBaseUpdate,L=c.shared.pending;if(L!==null){c.shared.pending=null;var F=L,Z=F.next;F.next=null,M===null?h=Z:M.next=Z,M=F;var me=t.alternate;me!==null&&(me=me.updateQueue,L=me.lastBaseUpdate,L!==M&&(L===null?me.firstBaseUpdate=Z:L.next=Z,me.lastBaseUpdate=F))}if(h!==null){var _e=c.baseState;M=0,me=Z=F=null,L=h;do{var pe=L.lane,Ie=L.eventTime;if((l&pe)===pe){me!==null&&(me=me.next={eventTime:Ie,lane:0,tag:L.tag,payload:L.payload,callback:L.callback,next:null});e:{var He=t,Ve=L;switch(pe=i,Ie=o,Ve.tag){case 1:if(He=Ve.payload,typeof He=="function"){_e=He.call(Ie,_e,pe);break e}_e=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=Ve.payload,pe=typeof He=="function"?He.call(Ie,_e,pe):He,pe==null)break e;_e=se({},_e,pe);break e;case 2:Qi=!0}}L.callback!==null&&L.lane!==0&&(t.flags|=64,pe=c.effects,pe===null?c.effects=[L]:pe.push(L))}else Ie={eventTime:Ie,lane:pe,tag:L.tag,payload:L.payload,callback:L.callback,next:null},me===null?(Z=me=Ie,F=_e):me=me.next=Ie,M|=pe;if(L=L.next,L===null){if(L=c.shared.pending,L===null)break;pe=L,L=pe.next,pe.next=null,c.lastBaseUpdate=pe,c.shared.pending=null}}while(!0);if(me===null&&(F=_e),c.baseState=F,c.firstBaseUpdate=Z,c.lastBaseUpdate=me,i=c.shared.interleaved,i!==null){c=i;do M|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);Ar|=M,t.lanes=M,t.memoizedState=_e}}function ah(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],c=l.callback;if(c!==null){if(l.callback=null,l=o,typeof c!="function")throw Error(n(191,c));c.call(l)}}}var fo={},ui=Ki(fo),ho=Ki(fo),po=Ki(fo);function Tr(t){if(t===fo)throw Error(n(174));return t}function Cu(t,i){switch(Pt(po,i),Pt(ho,t),Pt(ui,fo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ae(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ae(i,t)}Lt(ui),Pt(ui,i)}function fs(){Lt(ui),Lt(ho),Lt(po)}function lh(t){Tr(po.current);var i=Tr(ui.current),o=Ae(i,t.type);i!==o&&(Pt(ho,t),Pt(ui,o))}function Ru(t){ho.current===t&&(Lt(ui),Lt(ho))}var Ft=Ki(0);function ya(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Pu=[];function bu(){for(var t=0;t<Pu.length;t++)Pu[t]._workInProgressVersionPrimary=null;Pu.length=0}var Sa=D.ReactCurrentDispatcher,Lu=D.ReactCurrentBatchConfig,wr=0,Ot=null,Xt=null,Zt=null,Ma=!1,mo=!1,go=0,v_=0;function ln(){throw Error(n(321))}function Du(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Yn(t[o],i[o]))return!1;return!0}function Nu(t,i,o,l,c,h){if(wr=h,Ot=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Sa.current=t===null||t.memoizedState===null?M_:E_,t=o(l,c),mo){h=0;do{if(mo=!1,go=0,25<=h)throw Error(n(301));h+=1,Zt=Xt=null,i.updateQueue=null,Sa.current=T_,t=o(l,c)}while(mo)}if(Sa.current=wa,i=Xt!==null&&Xt.next!==null,wr=0,Zt=Xt=Ot=null,Ma=!1,i)throw Error(n(300));return t}function Iu(){var t=go!==0;return go=0,t}function ci(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zt===null?Ot.memoizedState=Zt=t:Zt=Zt.next=t,Zt}function zn(){if(Xt===null){var t=Ot.alternate;t=t!==null?t.memoizedState:null}else t=Xt.next;var i=Zt===null?Ot.memoizedState:Zt.next;if(i!==null)Zt=i,Xt=t;else{if(t===null)throw Error(n(310));Xt=t,t={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},Zt===null?Ot.memoizedState=Zt=t:Zt=Zt.next=t}return Zt}function _o(t,i){return typeof i=="function"?i(t):i}function Uu(t){var i=zn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=Xt,c=l.baseQueue,h=o.pending;if(h!==null){if(c!==null){var M=c.next;c.next=h.next,h.next=M}l.baseQueue=c=h,o.pending=null}if(c!==null){h=c.next,l=l.baseState;var L=M=null,F=null,Z=h;do{var me=Z.lane;if((wr&me)===me)F!==null&&(F=F.next={lane:0,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),l=Z.hasEagerState?Z.eagerState:t(l,Z.action);else{var _e={lane:me,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null};F===null?(L=F=_e,M=l):F=F.next=_e,Ot.lanes|=me,Ar|=me}Z=Z.next}while(Z!==null&&Z!==h);F===null?M=l:F.next=L,Yn(l,i.memoizedState)||(xn=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=F,o.lastRenderedState=l}if(t=o.interleaved,t!==null){c=t;do h=c.lane,Ot.lanes|=h,Ar|=h,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Fu(t){var i=zn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,c=o.pending,h=i.memoizedState;if(c!==null){o.pending=null;var M=c=c.next;do h=t(h,M.action),M=M.next;while(M!==c);Yn(h,i.memoizedState)||(xn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,l]}function uh(){}function ch(t,i){var o=Ot,l=zn(),c=i(),h=!Yn(l.memoizedState,c);if(h&&(l.memoizedState=c,xn=!0),l=l.queue,Ou(hh.bind(null,o,l,t),[t]),l.getSnapshot!==i||h||Zt!==null&&Zt.memoizedState.tag&1){if(o.flags|=2048,vo(9,dh.bind(null,o,l,c,i),void 0,null),Qt===null)throw Error(n(349));(wr&30)!==0||fh(o,i,c)}return c}function fh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Ot.updateQueue,i===null?(i={lastEffect:null,stores:null},Ot.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function dh(t,i,o,l){i.value=o,i.getSnapshot=l,ph(i)&&mh(t)}function hh(t,i,o){return o(function(){ph(i)&&mh(t)})}function ph(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Yn(t,o)}catch{return!0}}function mh(t){var i=Si(t,1);i!==null&&Qn(i,t,1,-1)}function gh(t){var i=ci();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_o,lastRenderedState:t},i.queue=t,t=t.dispatch=S_.bind(null,Ot,t),[i.memoizedState,t]}function vo(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=Ot.updateQueue,i===null?(i={lastEffect:null,stores:null},Ot.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function _h(){return zn().memoizedState}function Ea(t,i,o,l){var c=ci();Ot.flags|=t,c.memoizedState=vo(1|i,o,void 0,l===void 0?null:l)}function Ta(t,i,o,l){var c=zn();l=l===void 0?null:l;var h=void 0;if(Xt!==null){var M=Xt.memoizedState;if(h=M.destroy,l!==null&&Du(l,M.deps)){c.memoizedState=vo(i,o,h,l);return}}Ot.flags|=t,c.memoizedState=vo(1|i,o,h,l)}function vh(t,i){return Ea(8390656,8,t,i)}function Ou(t,i){return Ta(2048,8,t,i)}function xh(t,i){return Ta(4,2,t,i)}function yh(t,i){return Ta(4,4,t,i)}function Sh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Mh(t,i,o){return o=o!=null?o.concat([t]):null,Ta(4,4,Sh.bind(null,i,t),o)}function ku(){}function Eh(t,i){var o=zn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Du(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function Th(t,i){var o=zn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Du(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function wh(t,i,o){return(wr&21)===0?(t.baseState&&(t.baseState=!1,xn=!0),t.memoizedState=o):(Yn(o,i)||(o=qr(),Ot.lanes|=o,Ar|=o,t.baseState=!0),i)}function x_(t,i){var o=Et;Et=o!==0&&4>o?o:4,t(!0);var l=Lu.transition;Lu.transition={};try{t(!1),i()}finally{Et=o,Lu.transition=l}}function Ah(){return zn().memoizedState}function y_(t,i,o){var l=ir(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},Ch(t))Rh(i,o);else if(o=rh(t,i,o,l),o!==null){var c=pn();Qn(o,t,l,c),Ph(o,i,l)}}function S_(t,i,o){var l=ir(t),c={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(Ch(t))Rh(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var M=i.lastRenderedState,L=h(M,o);if(c.hasEagerState=!0,c.eagerState=L,Yn(L,M)){var F=i.interleaved;F===null?(c.next=c,wu(i)):(c.next=F.next,F.next=c),i.interleaved=c;return}}catch{}o=rh(t,i,c,l),o!==null&&(c=pn(),Qn(o,t,l,c),Ph(o,i,l))}}function Ch(t){var i=t.alternate;return t===Ot||i!==null&&i===Ot}function Rh(t,i){mo=Ma=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Ph(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,zl(t,o)}}var wa={readContext:Bn,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useInsertionEffect:ln,useLayoutEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useMutableSource:ln,useSyncExternalStore:ln,useId:ln,unstable_isNewReconciler:!1},M_={readContext:Bn,useCallback:function(t,i){return ci().memoizedState=[t,i===void 0?null:i],t},useContext:Bn,useEffect:vh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Ea(4194308,4,Sh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Ea(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ea(4,2,t,i)},useMemo:function(t,i){var o=ci();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=ci();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=y_.bind(null,Ot,t),[l.memoizedState,t]},useRef:function(t){var i=ci();return t={current:t},i.memoizedState=t},useState:gh,useDebugValue:ku,useDeferredValue:function(t){return ci().memoizedState=t},useTransition:function(){var t=gh(!1),i=t[0];return t=x_.bind(null,t[1]),ci().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=Ot,c=ci();if(It){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),Qt===null)throw Error(n(349));(wr&30)!==0||fh(l,i,o)}c.memoizedState=o;var h={value:o,getSnapshot:i};return c.queue=h,vh(hh.bind(null,l,h,t),[t]),l.flags|=2048,vo(9,dh.bind(null,l,h,o,i),void 0,null),o},useId:function(){var t=ci(),i=Qt.identifierPrefix;if(It){var o=yi,l=xi;o=(l&~(1<<32-ke(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=go++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=v_++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},E_={readContext:Bn,useCallback:Eh,useContext:Bn,useEffect:Ou,useImperativeHandle:Mh,useInsertionEffect:xh,useLayoutEffect:yh,useMemo:Th,useReducer:Uu,useRef:_h,useState:function(){return Uu(_o)},useDebugValue:ku,useDeferredValue:function(t){var i=zn();return wh(i,Xt.memoizedState,t)},useTransition:function(){var t=Uu(_o)[0],i=zn().memoizedState;return[t,i]},useMutableSource:uh,useSyncExternalStore:ch,useId:Ah,unstable_isNewReconciler:!1},T_={readContext:Bn,useCallback:Eh,useContext:Bn,useEffect:Ou,useImperativeHandle:Mh,useInsertionEffect:xh,useLayoutEffect:yh,useMemo:Th,useReducer:Fu,useRef:_h,useState:function(){return Fu(_o)},useDebugValue:ku,useDeferredValue:function(t){var i=zn();return Xt===null?i.memoizedState=t:wh(i,Xt.memoizedState,t)},useTransition:function(){var t=Fu(_o)[0],i=zn().memoizedState;return[t,i]},useMutableSource:uh,useSyncExternalStore:ch,useId:Ah,unstable_isNewReconciler:!1};function Kn(t,i){if(t&&t.defaultProps){i=se({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Bu(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:se({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Aa={isMounted:function(t){return(t=t._reactInternals)?mi(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=pn(),c=ir(t),h=Mi(l,c);h.payload=i,o!=null&&(h.callback=o),i=Ji(t,h,c),i!==null&&(Qn(i,t,c,l),va(i,t,c))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=pn(),c=ir(t),h=Mi(l,c);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=Ji(t,h,c),i!==null&&(Qn(i,t,c,l),va(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=pn(),l=ir(t),c=Mi(o,l);c.tag=2,i!=null&&(c.callback=i),i=Ji(t,c,l),i!==null&&(Qn(i,t,l,o),va(i,t,l))}};function bh(t,i,o,l,c,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,M):i.prototype&&i.prototype.isPureReactComponent?!io(o,l)||!io(c,h):!0}function Lh(t,i,o){var l=!1,c=$i,h=i.contextType;return typeof h=="object"&&h!==null?h=Bn(h):(c=vn(i)?yr:an.current,l=i.contextTypes,h=(l=l!=null)?rs(t,c):$i),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Aa,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function Dh(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&Aa.enqueueReplaceState(i,i.state,null)}function zu(t,i,o,l){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},Au(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=Bn(h):(h=vn(i)?yr:an.current,c.context=rs(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Bu(t,i,h,o),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&Aa.enqueueReplaceState(c,c.state,null),xa(t,o,c,l),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function ds(t,i){try{var o="",l=i;do o+=le(l),l=l.return;while(l);var c=o}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function Hu(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Vu(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var w_=typeof WeakMap=="function"?WeakMap:Map;function Nh(t,i,o){o=Mi(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){Na||(Na=!0,ic=l),Vu(t,i)},o}function Ih(t,i,o){o=Mi(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=i.value;o.payload=function(){return l(c)},o.callback=function(){Vu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Vu(t,i),typeof l!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function Uh(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new w_;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(o)||(c.add(o),t=B_.bind(null,t,i,o),i.then(t,t))}function Fh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Oh(t,i,o,l,c){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Mi(-1,1),i.tag=2,Ji(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=c,t)}var A_=D.ReactCurrentOwner,xn=!1;function hn(t,i,o,l){i.child=t===null?ih(i,null,o,l):ls(i,t.child,o,l)}function kh(t,i,o,l,c){o=o.render;var h=i.ref;return cs(i,c),l=Nu(t,i,o,l,h,c),o=Iu(),t!==null&&!xn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Ei(t,i,c)):(It&&o&&gu(i),i.flags|=1,hn(t,i,l,c),i.child)}function Bh(t,i,o,l,c){if(t===null){var h=o.type;return typeof h=="function"&&!cc(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,zh(t,i,h,l,c)):(t=Ba(o.type,null,l,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&c)===0){var M=h.memoizedProps;if(o=o.compare,o=o!==null?o:io,o(M,l)&&t.ref===i.ref)return Ei(t,i,c)}return i.flags|=1,t=sr(h,l),t.ref=i.ref,t.return=i,i.child=t}function zh(t,i,o,l,c){if(t!==null){var h=t.memoizedProps;if(io(h,l)&&t.ref===i.ref)if(xn=!1,i.pendingProps=l=h,(t.lanes&c)!==0)(t.flags&131072)!==0&&(xn=!0);else return i.lanes=t.lanes,Ei(t,i,c)}return Gu(t,i,o,l,c)}function Hh(t,i,o){var l=i.pendingProps,c=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pt(ps,Dn),Dn|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Pt(ps,Dn),Dn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:o,Pt(ps,Dn),Dn|=l}else h!==null?(l=h.baseLanes|o,i.memoizedState=null):l=o,Pt(ps,Dn),Dn|=l;return hn(t,i,c,o),i.child}function Vh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Gu(t,i,o,l,c){var h=vn(o)?yr:an.current;return h=rs(i,h),cs(i,c),o=Nu(t,i,o,l,h,c),l=Iu(),t!==null&&!xn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Ei(t,i,c)):(It&&l&&gu(i),i.flags|=1,hn(t,i,o,c),i.child)}function Gh(t,i,o,l,c){if(vn(o)){var h=!0;ca(i)}else h=!1;if(cs(i,c),i.stateNode===null)Ra(t,i),Lh(i,o,l),zu(i,o,l,c),l=!0;else if(t===null){var M=i.stateNode,L=i.memoizedProps;M.props=L;var F=M.context,Z=o.contextType;typeof Z=="object"&&Z!==null?Z=Bn(Z):(Z=vn(o)?yr:an.current,Z=rs(i,Z));var me=o.getDerivedStateFromProps,_e=typeof me=="function"||typeof M.getSnapshotBeforeUpdate=="function";_e||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==l||F!==Z)&&Dh(i,M,l,Z),Qi=!1;var pe=i.memoizedState;M.state=pe,xa(i,l,M,c),F=i.memoizedState,L!==l||pe!==F||_n.current||Qi?(typeof me=="function"&&(Bu(i,o,me,l),F=i.memoizedState),(L=Qi||bh(i,o,L,l,pe,F,Z))?(_e||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=F),M.props=l,M.state=F,M.context=Z,l=L):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,sh(t,i),L=i.memoizedProps,Z=i.type===i.elementType?L:Kn(i.type,L),M.props=Z,_e=i.pendingProps,pe=M.context,F=o.contextType,typeof F=="object"&&F!==null?F=Bn(F):(F=vn(o)?yr:an.current,F=rs(i,F));var Ie=o.getDerivedStateFromProps;(me=typeof Ie=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==_e||pe!==F)&&Dh(i,M,l,F),Qi=!1,pe=i.memoizedState,M.state=pe,xa(i,l,M,c);var He=i.memoizedState;L!==_e||pe!==He||_n.current||Qi?(typeof Ie=="function"&&(Bu(i,o,Ie,l),He=i.memoizedState),(Z=Qi||bh(i,o,Z,l,pe,He,F)||!1)?(me||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,He,F),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,He,F)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||L===t.memoizedProps&&pe===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&pe===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=He),M.props=l,M.state=He,M.context=F,l=Z):(typeof M.componentDidUpdate!="function"||L===t.memoizedProps&&pe===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&pe===t.memoizedState||(i.flags|=1024),l=!1)}return Wu(t,i,o,l,h,c)}function Wu(t,i,o,l,c,h){Vh(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return c&&qd(i,o,!1),Ei(t,i,h);l=i.stateNode,A_.current=i;var L=M&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=ls(i,t.child,null,h),i.child=ls(i,null,L,h)):hn(t,i,L,h),i.memoizedState=l.state,c&&qd(i,o,!0),i.child}function Wh(t){var i=t.stateNode;i.pendingContext?jd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&jd(t,i.context,!1),Cu(t,i.containerInfo)}function Xh(t,i,o,l,c){return as(),yu(c),i.flags|=256,hn(t,i,o,l),i.child}var Xu={dehydrated:null,treeContext:null,retryLane:0};function ju(t){return{baseLanes:t,cachePool:null,transitions:null}}function jh(t,i,o){var l=i.pendingProps,c=Ft.current,h=!1,M=(i.flags&128)!==0,L;if((L=M)||(L=t!==null&&t.memoizedState===null?!1:(c&2)!==0),L?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Pt(Ft,c&1),t===null)return xu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,h?(l=i.mode,h=i.child,M={mode:"hidden",children:M},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=M):h=za(M,l,0,null),t=br(t,l,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=ju(o),i.memoizedState=Xu,t):Yu(i,M));if(c=t.memoizedState,c!==null&&(L=c.dehydrated,L!==null))return C_(t,i,M,l,L,c,o);if(h){h=l.fallback,M=i.mode,c=t.child,L=c.sibling;var F={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==c?(l=i.child,l.childLanes=0,l.pendingProps=F,i.deletions=null):(l=sr(c,F),l.subtreeFlags=c.subtreeFlags&14680064),L!==null?h=sr(L,h):(h=br(h,M,o,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,M=t.child.memoizedState,M=M===null?ju(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},h.memoizedState=M,h.childLanes=t.childLanes&~o,i.memoizedState=Xu,l}return h=t.child,t=h.sibling,l=sr(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function Yu(t,i){return i=za({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Ca(t,i,o,l){return l!==null&&yu(l),ls(i,t.child,null,o),t=Yu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function C_(t,i,o,l,c,h,M){if(o)return i.flags&256?(i.flags&=-257,l=Hu(Error(n(422))),Ca(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,c=i.mode,l=za({mode:"visible",children:l.children},c,0,null),h=br(h,c,M,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&ls(i,t.child,null,M),i.child.memoizedState=ju(M),i.memoizedState=Xu,h);if((i.mode&1)===0)return Ca(t,i,M,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var L=l.dgst;return l=L,h=Error(n(419)),l=Hu(h,l,void 0),Ca(t,i,M,l)}if(L=(M&t.childLanes)!==0,xn||L){if(l=Qt,l!==null){switch(M&-M){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(l.suspendedLanes|M))!==0?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,Si(t,c),Qn(l,t,c,-1))}return uc(),l=Hu(Error(n(421))),Ca(t,i,M,l)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=z_.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,Ln=qi(c.nextSibling),bn=i,It=!0,qn=null,t!==null&&(On[kn++]=xi,On[kn++]=yi,On[kn++]=Sr,xi=t.id,yi=t.overflow,Sr=i),i=Yu(i,l.children),i.flags|=4096,i)}function Yh(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Tu(t.return,i,o)}function qu(t,i,o,l,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=o,h.tailMode=c)}function qh(t,i,o){var l=i.pendingProps,c=l.revealOrder,h=l.tail;if(hn(t,i,l.children,o),l=Ft.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Yh(t,o,i);else if(t.tag===19)Yh(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Pt(Ft,l),(i.mode&1)===0)i.memoizedState=null;else switch(c){case"forwards":for(o=i.child,c=null;o!==null;)t=o.alternate,t!==null&&ya(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=i.child,i.child=null):(c=o.sibling,o.sibling=null),qu(i,!1,c,o,h);break;case"backwards":for(o=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&ya(t)===null){i.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}qu(i,!0,o,null,h);break;case"together":qu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ra(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ei(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Ar|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=sr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=sr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function R_(t,i,o){switch(i.tag){case 3:Wh(i),as();break;case 5:lh(i);break;case 1:vn(i.type)&&ca(i);break;case 4:Cu(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,c=i.memoizedProps.value;Pt(ga,l._currentValue),l._currentValue=c;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Pt(Ft,Ft.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?jh(t,i,o):(Pt(Ft,Ft.current&1),t=Ei(t,i,o),t!==null?t.sibling:null);Pt(Ft,Ft.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return qh(t,i,o);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Pt(Ft,Ft.current),l)break;return null;case 22:case 23:return i.lanes=0,Hh(t,i,o)}return Ei(t,i,o)}var Kh,Ku,$h,Zh;Kh=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Ku=function(){},$h=function(t,i,o,l){var c=t.memoizedProps;if(c!==l){t=i.stateNode,Tr(ui.current);var h=null;switch(o){case"input":c=tn(t,c),l=tn(t,l),h=[];break;case"select":c=se({},c,{value:void 0}),l=se({},l,{value:void 0}),h=[];break;case"textarea":c=Y(t,c),l=Y(t,l),h=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=aa)}it(o,l);var M;o=null;for(Z in c)if(!l.hasOwnProperty(Z)&&c.hasOwnProperty(Z)&&c[Z]!=null)if(Z==="style"){var L=c[Z];for(M in L)L.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else Z!=="dangerouslySetInnerHTML"&&Z!=="children"&&Z!=="suppressContentEditableWarning"&&Z!=="suppressHydrationWarning"&&Z!=="autoFocus"&&(a.hasOwnProperty(Z)?h||(h=[]):(h=h||[]).push(Z,null));for(Z in l){var F=l[Z];if(L=c?.[Z],l.hasOwnProperty(Z)&&F!==L&&(F!=null||L!=null))if(Z==="style")if(L){for(M in L)!L.hasOwnProperty(M)||F&&F.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in F)F.hasOwnProperty(M)&&L[M]!==F[M]&&(o||(o={}),o[M]=F[M])}else o||(h||(h=[]),h.push(Z,o)),o=F;else Z==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,L=L?L.__html:void 0,F!=null&&L!==F&&(h=h||[]).push(Z,F)):Z==="children"?typeof F!="string"&&typeof F!="number"||(h=h||[]).push(Z,""+F):Z!=="suppressContentEditableWarning"&&Z!=="suppressHydrationWarning"&&(a.hasOwnProperty(Z)?(F!=null&&Z==="onScroll"&&bt("scroll",t),h||L===F||(h=[])):(h=h||[]).push(Z,F))}o&&(h=h||[]).push("style",o);var Z=h;(i.updateQueue=Z)&&(i.flags|=4)}},Zh=function(t,i,o,l){o!==l&&(i.flags|=4)};function xo(t,i){if(!It)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function un(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function P_(t,i,o){var l=i.pendingProps;switch(_u(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return un(i),null;case 1:return vn(i.type)&&ua(),un(i),null;case 3:return l=i.stateNode,fs(),Lt(_n),Lt(an),bu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(pa(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,qn!==null&&(oc(qn),qn=null))),Ku(t,i),un(i),null;case 5:Ru(i);var c=Tr(po.current);if(o=i.type,t!==null&&i.stateNode!=null)$h(t,i,o,l,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return un(i),null}if(t=Tr(ui.current),pa(i)){l=i.stateNode,o=i.type;var h=i.memoizedProps;switch(l[li]=i,l[lo]=h,t=(i.mode&1)!==0,o){case"dialog":bt("cancel",l),bt("close",l);break;case"iframe":case"object":case"embed":bt("load",l);break;case"video":case"audio":for(c=0;c<so.length;c++)bt(so[c],l);break;case"source":bt("error",l);break;case"img":case"image":case"link":bt("error",l),bt("load",l);break;case"details":bt("toggle",l);break;case"input":at(l,h),bt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},bt("invalid",l);break;case"textarea":fe(l,h),bt("invalid",l)}it(o,h),c=null;for(var M in h)if(h.hasOwnProperty(M)){var L=h[M];M==="children"?typeof L=="string"?l.textContent!==L&&(h.suppressHydrationWarning!==!0&&oa(l.textContent,L,t),c=["children",L]):typeof L=="number"&&l.textContent!==""+L&&(h.suppressHydrationWarning!==!0&&oa(l.textContent,L,t),c=["children",""+L]):a.hasOwnProperty(M)&&L!=null&&M==="onScroll"&&bt("scroll",l)}switch(o){case"input":pt(l),Tt(l,h,!0);break;case"textarea":pt(l),ce(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=aa)}l=c,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=je(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(o,{is:l.is}):(t=M.createElement(o),o==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,o),t[li]=i,t[lo]=l,Kh(t,i,!1,!1),i.stateNode=t;e:{switch(M=St(o,l),o){case"dialog":bt("cancel",t),bt("close",t),c=l;break;case"iframe":case"object":case"embed":bt("load",t),c=l;break;case"video":case"audio":for(c=0;c<so.length;c++)bt(so[c],t);c=l;break;case"source":bt("error",t),c=l;break;case"img":case"image":case"link":bt("error",t),bt("load",t),c=l;break;case"details":bt("toggle",t),c=l;break;case"input":at(t,l),c=tn(t,l),bt("invalid",t);break;case"option":c=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},c=se({},l,{value:void 0}),bt("invalid",t);break;case"textarea":fe(t,l),c=Y(t,l),bt("invalid",t);break;default:c=l}it(o,c),L=c;for(h in L)if(L.hasOwnProperty(h)){var F=L[h];h==="style"?Be(t,F):h==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,F!=null&&dt(t,F)):h==="children"?typeof F=="string"?(o!=="textarea"||F!=="")&&Se(t,F):typeof F=="number"&&Se(t,""+F):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?F!=null&&h==="onScroll"&&bt("scroll",t):F!=null&&P(t,h,F,M))}switch(o){case"input":pt(t),Tt(t,l,!1);break;case"textarea":pt(t),ce(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Pe(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?T(t,!!l.multiple,h,!1):l.defaultValue!=null&&T(t,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=aa)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return un(i),null;case 6:if(t&&i.stateNode!=null)Zh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=Tr(po.current),Tr(ui.current),pa(i)){if(l=i.stateNode,o=i.memoizedProps,l[li]=i,(h=l.nodeValue!==o)&&(t=bn,t!==null))switch(t.tag){case 3:oa(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&oa(l.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[li]=i,i.stateNode=l}return un(i),null;case 13:if(Lt(Ft),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(It&&Ln!==null&&(i.mode&1)!==0&&(i.flags&128)===0)eh(),as(),i.flags|=98560,h=!1;else if(h=pa(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[li]=i}else as(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;un(i),h=!1}else qn!==null&&(oc(qn),qn=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Ft.current&1)!==0?jt===0&&(jt=3):uc())),i.updateQueue!==null&&(i.flags|=4),un(i),null);case 4:return fs(),Ku(t,i),t===null&&oo(i.stateNode.containerInfo),un(i),null;case 10:return Eu(i.type._context),un(i),null;case 17:return vn(i.type)&&ua(),un(i),null;case 19:if(Lt(Ft),h=i.memoizedState,h===null)return un(i),null;if(l=(i.flags&128)!==0,M=h.rendering,M===null)if(l)xo(h,!1);else{if(jt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=ya(t),M!==null){for(i.flags|=128,xo(h,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)h=o,t=l,h.flags&=14680066,M=h.alternate,M===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=M.childLanes,h.lanes=M.lanes,h.child=M.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=M.memoizedProps,h.memoizedState=M.memoizedState,h.updateQueue=M.updateQueue,h.type=M.type,t=M.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Pt(Ft,Ft.current&1|2),i.child}t=t.sibling}h.tail!==null&&Te()>ms&&(i.flags|=128,l=!0,xo(h,!1),i.lanes=4194304)}else{if(!l)if(t=ya(M),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),xo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!M.alternate&&!It)return un(i),null}else 2*Te()-h.renderingStartTime>ms&&o!==1073741824&&(i.flags|=128,l=!0,xo(h,!1),i.lanes=4194304);h.isBackwards?(M.sibling=i.child,i.child=M):(o=h.last,o!==null?o.sibling=M:i.child=M,h.last=M)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Te(),i.sibling=null,o=Ft.current,Pt(Ft,l?o&1|2:o&1),i):(un(i),null);case 22:case 23:return lc(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Dn&1073741824)!==0&&(un(i),i.subtreeFlags&6&&(i.flags|=8192)):un(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function b_(t,i){switch(_u(i),i.tag){case 1:return vn(i.type)&&ua(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return fs(),Lt(_n),Lt(an),bu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Ru(i),null;case 13:if(Lt(Ft),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));as()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Lt(Ft),null;case 4:return fs(),null;case 10:return Eu(i.type._context),null;case 22:case 23:return lc(),null;case 24:return null;default:return null}}var Pa=!1,cn=!1,L_=typeof WeakSet=="function"?WeakSet:Set,ze=null;function hs(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){kt(t,i,l)}else o.current=null}function $u(t,i,o){try{o()}catch(l){kt(t,i,l)}}var Qh=!1;function D_(t,i){if(lu=Ko,t=bd(),eu(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var c=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var M=0,L=-1,F=-1,Z=0,me=0,_e=t,pe=null;t:for(;;){for(var Ie;_e!==o||c!==0&&_e.nodeType!==3||(L=M+c),_e!==h||l!==0&&_e.nodeType!==3||(F=M+l),_e.nodeType===3&&(M+=_e.nodeValue.length),(Ie=_e.firstChild)!==null;)pe=_e,_e=Ie;for(;;){if(_e===t)break t;if(pe===o&&++Z===c&&(L=M),pe===h&&++me===l&&(F=M),(Ie=_e.nextSibling)!==null)break;_e=pe,pe=_e.parentNode}_e=Ie}o=L===-1||F===-1?null:{start:L,end:F}}else o=null}o=o||{start:0,end:0}}else o=null;for(uu={focusedElem:t,selectionRange:o},Ko=!1,ze=i;ze!==null;)if(i=ze,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,ze=t;else for(;ze!==null;){i=ze;try{var He=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var Ve=He.memoizedProps,zt=He.memoizedState,W=i.stateNode,z=W.getSnapshotBeforeUpdate(i.elementType===i.type?Ve:Kn(i.type,Ve),zt);W.__reactInternalSnapshotBeforeUpdate=z}break;case 3:var j=i.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Me){kt(i,i.return,Me)}if(t=i.sibling,t!==null){t.return=i.return,ze=t;break}ze=i.return}return He=Qh,Qh=!1,He}function yo(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&$u(i,o,h)}c=c.next}while(c!==l)}}function ba(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function Zu(t){var i=t.ref;if(i!==null){var o=t.stateNode;t.tag,t=o,typeof i=="function"?i(t):i.current=t}}function Jh(t){var i=t.alternate;i!==null&&(t.alternate=null,Jh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[li],delete i[lo],delete i[hu],delete i[p_],delete i[m_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ep(t){return t.tag===5||t.tag===3||t.tag===4}function tp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ep(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qu(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=aa));else if(l!==4&&(t=t.child,t!==null))for(Qu(t,i,o),t=t.sibling;t!==null;)Qu(t,i,o),t=t.sibling}function Ju(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Ju(t,i,o),t=t.sibling;t!==null;)Ju(t,i,o),t=t.sibling}var rn=null,$n=!1;function er(t,i,o){for(o=o.child;o!==null;)np(t,i,o),o=o.sibling}function np(t,i,o){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(At,o)}catch{}switch(o.tag){case 5:cn||hs(o,i);case 6:var l=rn,c=$n;rn=null,er(t,i,o),rn=l,$n=c,rn!==null&&($n?(t=rn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):rn.removeChild(o.stateNode));break;case 18:rn!==null&&($n?(t=rn,o=o.stateNode,t.nodeType===8?du(t.parentNode,o):t.nodeType===1&&du(t,o),Zs(t)):du(rn,o.stateNode));break;case 4:l=rn,c=$n,rn=o.stateNode.containerInfo,$n=!0,er(t,i,o),rn=l,$n=c;break;case 0:case 11:case 14:case 15:if(!cn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var h=c,M=h.destroy;h=h.tag,M!==void 0&&((h&2)!==0||(h&4)!==0)&&$u(o,i,M),c=c.next}while(c!==l)}er(t,i,o);break;case 1:if(!cn&&(hs(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(L){kt(o,i,L)}er(t,i,o);break;case 21:er(t,i,o);break;case 22:o.mode&1?(cn=(l=cn)||o.memoizedState!==null,er(t,i,o),cn=l):er(t,i,o);break;default:er(t,i,o)}}function ip(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new L_),i.forEach(function(l){var c=H_.bind(null,t,l);o.has(l)||(o.add(l),l.then(c,c))})}}function Zn(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var c=o[l];try{var h=t,M=i,L=M;e:for(;L!==null;){switch(L.tag){case 5:rn=L.stateNode,$n=!1;break e;case 3:rn=L.stateNode.containerInfo,$n=!0;break e;case 4:rn=L.stateNode.containerInfo,$n=!0;break e}L=L.return}if(rn===null)throw Error(n(160));np(h,M,c),rn=null,$n=!1;var F=c.alternate;F!==null&&(F.return=null),c.return=null}catch(Z){kt(c,i,Z)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)rp(i,t),i=i.sibling}function rp(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Zn(i,t),fi(t),l&4){try{yo(3,t,t.return),ba(3,t)}catch(Ve){kt(t,t.return,Ve)}try{yo(5,t,t.return)}catch(Ve){kt(t,t.return,Ve)}}break;case 1:Zn(i,t),fi(t),l&512&&o!==null&&hs(o,o.return);break;case 5:if(Zn(i,t),fi(t),l&512&&o!==null&&hs(o,o.return),t.flags&32){var c=t.stateNode;try{Se(c,"")}catch(Ve){kt(t,t.return,Ve)}}if(l&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,M=o!==null?o.memoizedProps:h,L=t.type,F=t.updateQueue;if(t.updateQueue=null,F!==null)try{L==="input"&&h.type==="radio"&&h.name!=null&&ft(c,h),St(L,M);var Z=St(L,h);for(M=0;M<F.length;M+=2){var me=F[M],_e=F[M+1];me==="style"?Be(c,_e):me==="dangerouslySetInnerHTML"?dt(c,_e):me==="children"?Se(c,_e):P(c,me,_e,Z)}switch(L){case"input":$e(c,h);break;case"textarea":ge(c,h);break;case"select":var pe=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var Ie=h.value;Ie!=null?T(c,!!h.multiple,Ie,!1):pe!==!!h.multiple&&(h.defaultValue!=null?T(c,!!h.multiple,h.defaultValue,!0):T(c,!!h.multiple,h.multiple?[]:"",!1))}c[lo]=h}catch(Ve){kt(t,t.return,Ve)}}break;case 6:if(Zn(i,t),fi(t),l&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(Ve){kt(t,t.return,Ve)}}break;case 3:if(Zn(i,t),fi(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{Zs(i.containerInfo)}catch(Ve){kt(t,t.return,Ve)}break;case 4:Zn(i,t),fi(t);break;case 13:Zn(i,t),fi(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(nc=Te())),l&4&&ip(t);break;case 22:if(me=o!==null&&o.memoizedState!==null,t.mode&1?(cn=(Z=cn)||me,Zn(i,t),cn=Z):Zn(i,t),fi(t),l&8192){if(Z=t.memoizedState!==null,(t.stateNode.isHidden=Z)&&!me&&(t.mode&1)!==0)for(ze=t,me=t.child;me!==null;){for(_e=ze=me;ze!==null;){switch(pe=ze,Ie=pe.child,pe.tag){case 0:case 11:case 14:case 15:yo(4,pe,pe.return);break;case 1:hs(pe,pe.return);var He=pe.stateNode;if(typeof He.componentWillUnmount=="function"){l=pe,o=pe.return;try{i=l,He.props=i.memoizedProps,He.state=i.memoizedState,He.componentWillUnmount()}catch(Ve){kt(l,o,Ve)}}break;case 5:hs(pe,pe.return);break;case 22:if(pe.memoizedState!==null){ap(_e);continue}}Ie!==null?(Ie.return=pe,ze=Ie):ap(_e)}me=me.sibling}e:for(me=null,_e=t;;){if(_e.tag===5){if(me===null){me=_e;try{c=_e.stateNode,Z?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(L=_e.stateNode,F=_e.memoizedProps.style,M=F!=null&&F.hasOwnProperty("display")?F.display:null,L.style.display=Je("display",M))}catch(Ve){kt(t,t.return,Ve)}}}else if(_e.tag===6){if(me===null)try{_e.stateNode.nodeValue=Z?"":_e.memoizedProps}catch(Ve){kt(t,t.return,Ve)}}else if((_e.tag!==22&&_e.tag!==23||_e.memoizedState===null||_e===t)&&_e.child!==null){_e.child.return=_e,_e=_e.child;continue}if(_e===t)break e;for(;_e.sibling===null;){if(_e.return===null||_e.return===t)break e;me===_e&&(me=null),_e=_e.return}me===_e&&(me=null),_e.sibling.return=_e.return,_e=_e.sibling}}break;case 19:Zn(i,t),fi(t),l&4&&ip(t);break;case 21:break;default:Zn(i,t),fi(t)}}function fi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(ep(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(Se(c,""),l.flags&=-33);var h=tp(t);Ju(t,h,c);break;case 3:case 4:var M=l.stateNode.containerInfo,L=tp(t);Qu(t,L,M);break;default:throw Error(n(161))}}catch(F){kt(t,t.return,F)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function N_(t,i,o){ze=t,sp(t)}function sp(t,i,o){for(var l=(t.mode&1)!==0;ze!==null;){var c=ze,h=c.child;if(c.tag===22&&l){var M=c.memoizedState!==null||Pa;if(!M){var L=c.alternate,F=L!==null&&L.memoizedState!==null||cn;L=Pa;var Z=cn;if(Pa=M,(cn=F)&&!Z)for(ze=c;ze!==null;)M=ze,F=M.child,M.tag===22&&M.memoizedState!==null?lp(c):F!==null?(F.return=M,ze=F):lp(c);for(;h!==null;)ze=h,sp(h),h=h.sibling;ze=c,Pa=L,cn=Z}op(t)}else(c.subtreeFlags&8772)!==0&&h!==null?(h.return=c,ze=h):op(t)}}function op(t){for(;ze!==null;){var i=ze;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:cn||ba(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!cn)if(o===null)l.componentDidMount();else{var c=i.elementType===i.type?o.memoizedProps:Kn(i.type,o.memoizedProps);l.componentDidUpdate(c,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&ah(i,h,l);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}ah(i,M,o)}break;case 5:var L=i.stateNode;if(o===null&&i.flags&4){o=L;var F=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":F.autoFocus&&o.focus();break;case"img":F.src&&(o.src=F.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var Z=i.alternate;if(Z!==null){var me=Z.memoizedState;if(me!==null){var _e=me.dehydrated;_e!==null&&Zs(_e)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}cn||i.flags&512&&Zu(i)}catch(pe){kt(i,i.return,pe)}}if(i===t){ze=null;break}if(o=i.sibling,o!==null){o.return=i.return,ze=o;break}ze=i.return}}function ap(t){for(;ze!==null;){var i=ze;if(i===t){ze=null;break}var o=i.sibling;if(o!==null){o.return=i.return,ze=o;break}ze=i.return}}function lp(t){for(;ze!==null;){var i=ze;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{ba(4,i)}catch(F){kt(i,o,F)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var c=i.return;try{l.componentDidMount()}catch(F){kt(i,c,F)}}var h=i.return;try{Zu(i)}catch(F){kt(i,h,F)}break;case 5:var M=i.return;try{Zu(i)}catch(F){kt(i,M,F)}}}catch(F){kt(i,i.return,F)}if(i===t){ze=null;break}var L=i.sibling;if(L!==null){L.return=i.return,ze=L;break}ze=i.return}}var I_=Math.ceil,La=D.ReactCurrentDispatcher,ec=D.ReactCurrentOwner,Hn=D.ReactCurrentBatchConfig,mt=0,Qt=null,Vt=null,sn=0,Dn=0,ps=Ki(0),jt=0,So=null,Ar=0,Da=0,tc=0,Mo=null,yn=null,nc=0,ms=1/0,Ti=null,Na=!1,ic=null,tr=null,Ia=!1,nr=null,Ua=0,Eo=0,rc=null,Fa=-1,Oa=0;function pn(){return(mt&6)!==0?Te():Fa!==-1?Fa:Fa=Te()}function ir(t){return(t.mode&1)===0?1:(mt&2)!==0&&sn!==0?sn&-sn:__.transition!==null?(Oa===0&&(Oa=qr()),Oa):(t=Et,t!==0||(t=window.event,t=t===void 0?16:cd(t.type)),t)}function Qn(t,i,o,l){if(50<Eo)throw Eo=0,rc=null,Error(n(185));Hi(t,o,l),((mt&2)===0||t!==Qt)&&(t===Qt&&((mt&2)===0&&(Da|=o),jt===4&&rr(t,sn)),Sn(t,l),o===1&&mt===0&&(i.mode&1)===0&&(ms=Te()+500,fa&&Zi()))}function Sn(t,i){var o=t.callbackNode;Xs(t,i);var l=Rt(t,t===Qt?sn:0);if(l===0)o!==null&&G(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&G(o),i===1)t.tag===0?g_(cp.bind(null,t)):Kd(cp.bind(null,t)),d_(function(){(mt&6)===0&&Zi()}),o=null;else{switch(nd(l)){case 1:o=Ke;break;case 4:o=Ze;break;case 16:o=We;break;case 536870912:o=wt;break;default:o=We}o=vp(o,up.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function up(t,i){if(Fa=-1,Oa=0,(mt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(gs()&&t.callbackNode!==o)return null;var l=Rt(t,t===Qt?sn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=ka(t,l);else{i=l;var c=mt;mt|=2;var h=dp();(Qt!==t||sn!==i)&&(Ti=null,ms=Te()+500,Rr(t,i));do try{O_();break}catch(L){fp(t,L)}while(!0);Mu(),La.current=h,mt=c,Vt!==null?i=0:(Qt=null,sn=0,i=jt)}if(i!==0){if(i===2&&(c=on(t),c!==0&&(l=c,i=sc(t,c))),i===1)throw o=So,Rr(t,0),rr(t,l),Sn(t,Te()),o;if(i===6)rr(t,l);else{if(c=t.current.alternate,(l&30)===0&&!U_(c)&&(i=ka(t,l),i===2&&(h=on(t),h!==0&&(l=h,i=sc(t,h))),i===1))throw o=So,Rr(t,0),rr(t,l),Sn(t,Te()),o;switch(t.finishedWork=c,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Pr(t,yn,Ti);break;case 3:if(rr(t,l),(l&130023424)===l&&(i=nc+500-Te(),10<i)){if(Rt(t,0)!==0)break;if(c=t.suspendedLanes,(c&l)!==l){pn(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=fu(Pr.bind(null,t,yn,Ti),i);break}Pr(t,yn,Ti);break;case 4:if(rr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,c=-1;0<l;){var M=31-ke(l);h=1<<M,M=i[M],M>c&&(c=M),l&=~h}if(l=c,l=Te()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*I_(l/1960))-l,10<l){t.timeoutHandle=fu(Pr.bind(null,t,yn,Ti),l);break}Pr(t,yn,Ti);break;case 5:Pr(t,yn,Ti);break;default:throw Error(n(329))}}}return Sn(t,Te()),t.callbackNode===o?up.bind(null,t):null}function sc(t,i){var o=Mo;return t.current.memoizedState.isDehydrated&&(Rr(t,i).flags|=256),t=ka(t,i),t!==2&&(i=yn,yn=o,i!==null&&oc(i)),t}function oc(t){yn===null?yn=t:yn.push.apply(yn,t)}function U_(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var c=o[l],h=c.getSnapshot;c=c.value;try{if(!Yn(h(),c))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function rr(t,i){for(i&=~tc,i&=~Da,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-ke(i),l=1<<o;t[o]=-1,i&=~l}}function cp(t){if((mt&6)!==0)throw Error(n(327));gs();var i=Rt(t,0);if((i&1)===0)return Sn(t,Te()),null;var o=ka(t,i);if(t.tag!==0&&o===2){var l=on(t);l!==0&&(i=l,o=sc(t,l))}if(o===1)throw o=So,Rr(t,0),rr(t,i),Sn(t,Te()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Pr(t,yn,Ti),Sn(t,Te()),null}function ac(t,i){var o=mt;mt|=1;try{return t(i)}finally{mt=o,mt===0&&(ms=Te()+500,fa&&Zi())}}function Cr(t){nr!==null&&nr.tag===0&&(mt&6)===0&&gs();var i=mt;mt|=1;var o=Hn.transition,l=Et;try{if(Hn.transition=null,Et=1,t)return t()}finally{Et=l,Hn.transition=o,mt=i,(mt&6)===0&&Zi()}}function lc(){Dn=ps.current,Lt(ps)}function Rr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,f_(o)),Vt!==null)for(o=Vt.return;o!==null;){var l=o;switch(_u(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&ua();break;case 3:fs(),Lt(_n),Lt(an),bu();break;case 5:Ru(l);break;case 4:fs();break;case 13:Lt(Ft);break;case 19:Lt(Ft);break;case 10:Eu(l.type._context);break;case 22:case 23:lc()}o=o.return}if(Qt=t,Vt=t=sr(t.current,null),sn=Dn=i,jt=0,So=null,tc=Da=Ar=0,yn=Mo=null,Er!==null){for(i=0;i<Er.length;i++)if(o=Er[i],l=o.interleaved,l!==null){o.interleaved=null;var c=l.next,h=o.pending;if(h!==null){var M=h.next;h.next=c,l.next=M}o.pending=l}Er=null}return t}function fp(t,i){do{var o=Vt;try{if(Mu(),Sa.current=wa,Ma){for(var l=Ot.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}Ma=!1}if(wr=0,Zt=Xt=Ot=null,mo=!1,go=0,ec.current=null,o===null||o.return===null){jt=1,So=i,Vt=null;break}e:{var h=t,M=o.return,L=o,F=i;if(i=sn,L.flags|=32768,F!==null&&typeof F=="object"&&typeof F.then=="function"){var Z=F,me=L,_e=me.tag;if((me.mode&1)===0&&(_e===0||_e===11||_e===15)){var pe=me.alternate;pe?(me.updateQueue=pe.updateQueue,me.memoizedState=pe.memoizedState,me.lanes=pe.lanes):(me.updateQueue=null,me.memoizedState=null)}var Ie=Fh(M);if(Ie!==null){Ie.flags&=-257,Oh(Ie,M,L,h,i),Ie.mode&1&&Uh(h,Z,i),i=Ie,F=Z;var He=i.updateQueue;if(He===null){var Ve=new Set;Ve.add(F),i.updateQueue=Ve}else He.add(F);break e}else{if((i&1)===0){Uh(h,Z,i),uc();break e}F=Error(n(426))}}else if(It&&L.mode&1){var zt=Fh(M);if(zt!==null){(zt.flags&65536)===0&&(zt.flags|=256),Oh(zt,M,L,h,i),yu(ds(F,L));break e}}h=F=ds(F,L),jt!==4&&(jt=2),Mo===null?Mo=[h]:Mo.push(h),h=M;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var W=Nh(h,F,i);oh(h,W);break e;case 1:L=F;var z=h.type,j=h.stateNode;if((h.flags&128)===0&&(typeof z.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(tr===null||!tr.has(j)))){h.flags|=65536,i&=-i,h.lanes|=i;var Me=Ih(h,L,i);oh(h,Me);break e}}h=h.return}while(h!==null)}pp(o)}catch(Xe){i=Xe,Vt===o&&o!==null&&(Vt=o=o.return);continue}break}while(!0)}function dp(){var t=La.current;return La.current=wa,t===null?wa:t}function uc(){(jt===0||jt===3||jt===2)&&(jt=4),Qt===null||(Ar&268435455)===0&&(Da&268435455)===0||rr(Qt,sn)}function ka(t,i){var o=mt;mt|=2;var l=dp();(Qt!==t||sn!==i)&&(Ti=null,Rr(t,i));do try{F_();break}catch(c){fp(t,c)}while(!0);if(Mu(),mt=o,La.current=l,Vt!==null)throw Error(n(261));return Qt=null,sn=0,jt}function F_(){for(;Vt!==null;)hp(Vt)}function O_(){for(;Vt!==null&&!Ee();)hp(Vt)}function hp(t){var i=_p(t.alternate,t,Dn);t.memoizedProps=t.pendingProps,i===null?pp(t):Vt=i,ec.current=null}function pp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=P_(o,i,Dn),o!==null){Vt=o;return}}else{if(o=b_(o,i),o!==null){o.flags&=32767,Vt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{jt=6,Vt=null;return}}if(i=i.sibling,i!==null){Vt=i;return}Vt=i=t}while(i!==null);jt===0&&(jt=5)}function Pr(t,i,o){var l=Et,c=Hn.transition;try{Hn.transition=null,Et=1,k_(t,i,o,l)}finally{Hn.transition=c,Et=l}return null}function k_(t,i,o,l){do gs();while(nr!==null);if((mt&6)!==0)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(vg(t,h),t===Qt&&(Vt=Qt=null,sn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Ia||(Ia=!0,vp(We,function(){return gs(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=Hn.transition,Hn.transition=null;var M=Et;Et=1;var L=mt;mt|=4,ec.current=null,D_(t,o),rp(o,t),r_(uu),Ko=!!lu,uu=lu=null,t.current=o,N_(o),De(),mt=L,Et=M,Hn.transition=h}else t.current=o;if(Ia&&(Ia=!1,nr=t,Ua=c),h=t.pendingLanes,h===0&&(tr=null),gt(o.stateNode),Sn(t,Te()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)c=i[o],l(c.value,{componentStack:c.stack,digest:c.digest});if(Na)throw Na=!1,t=ic,ic=null,t;return(Ua&1)!==0&&t.tag!==0&&gs(),h=t.pendingLanes,(h&1)!==0?t===rc?Eo++:(Eo=0,rc=t):Eo=0,Zi(),null}function gs(){if(nr!==null){var t=nd(Ua),i=Hn.transition,o=Et;try{if(Hn.transition=null,Et=16>t?16:t,nr===null)var l=!1;else{if(t=nr,nr=null,Ua=0,(mt&6)!==0)throw Error(n(331));var c=mt;for(mt|=4,ze=t.current;ze!==null;){var h=ze,M=h.child;if((ze.flags&16)!==0){var L=h.deletions;if(L!==null){for(var F=0;F<L.length;F++){var Z=L[F];for(ze=Z;ze!==null;){var me=ze;switch(me.tag){case 0:case 11:case 15:yo(8,me,h)}var _e=me.child;if(_e!==null)_e.return=me,ze=_e;else for(;ze!==null;){me=ze;var pe=me.sibling,Ie=me.return;if(Jh(me),me===Z){ze=null;break}if(pe!==null){pe.return=Ie,ze=pe;break}ze=Ie}}}var He=h.alternate;if(He!==null){var Ve=He.child;if(Ve!==null){He.child=null;do{var zt=Ve.sibling;Ve.sibling=null,Ve=zt}while(Ve!==null)}}ze=h}}if((h.subtreeFlags&2064)!==0&&M!==null)M.return=h,ze=M;else e:for(;ze!==null;){if(h=ze,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:yo(9,h,h.return)}var W=h.sibling;if(W!==null){W.return=h.return,ze=W;break e}ze=h.return}}var z=t.current;for(ze=z;ze!==null;){M=ze;var j=M.child;if((M.subtreeFlags&2064)!==0&&j!==null)j.return=M,ze=j;else e:for(M=z;ze!==null;){if(L=ze,(L.flags&2048)!==0)try{switch(L.tag){case 0:case 11:case 15:ba(9,L)}}catch(Xe){kt(L,L.return,Xe)}if(L===M){ze=null;break e}var Me=L.sibling;if(Me!==null){Me.return=L.return,ze=Me;break e}ze=L.return}}if(mt=c,Zi(),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(At,t)}catch{}l=!0}return l}finally{Et=o,Hn.transition=i}}return!1}function mp(t,i,o){i=ds(o,i),i=Nh(t,i,1),t=Ji(t,i,1),i=pn(),t!==null&&(Hi(t,1,i),Sn(t,i))}function kt(t,i,o){if(t.tag===3)mp(t,t,o);else for(;i!==null;){if(i.tag===3){mp(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(tr===null||!tr.has(l))){t=ds(o,t),t=Ih(i,t,1),i=Ji(i,t,1),t=pn(),i!==null&&(Hi(i,1,t),Sn(i,t));break}}i=i.return}}function B_(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=pn(),t.pingedLanes|=t.suspendedLanes&o,Qt===t&&(sn&o)===o&&(jt===4||jt===3&&(sn&130023424)===sn&&500>Te()-nc?Rr(t,0):tc|=o),Sn(t,i)}function gp(t,i){i===0&&((t.mode&1)===0?i=1:(i=$t,$t<<=1,($t&130023424)===0&&($t=4194304)));var o=pn();t=Si(t,i),t!==null&&(Hi(t,i,o),Sn(t,o))}function z_(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),gp(t,o)}function H_(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),gp(t,o)}var _p;_p=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||_n.current)xn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return xn=!1,R_(t,i,o);xn=(t.flags&131072)!==0}else xn=!1,It&&(i.flags&1048576)!==0&&$d(i,ha,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Ra(t,i),t=i.pendingProps;var c=rs(i,an.current);cs(i,o),c=Nu(null,i,l,t,c,o);var h=Iu();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,vn(l)?(h=!0,ca(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,Au(i),c.updater=Aa,i.stateNode=c,c._reactInternals=i,zu(i,l,t,o),i=Wu(null,i,l,!0,h,o)):(i.tag=0,It&&h&&gu(i),hn(null,i,c,o),i=i.child),i;case 16:l=i.elementType;e:{switch(Ra(t,i),t=i.pendingProps,c=l._init,l=c(l._payload),i.type=l,c=i.tag=G_(l),t=Kn(l,t),c){case 0:i=Gu(null,i,l,t,o);break e;case 1:i=Gh(null,i,l,t,o);break e;case 11:i=kh(null,i,l,t,o);break e;case 14:i=Bh(null,i,l,Kn(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Kn(l,c),Gu(t,i,l,c,o);case 1:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Kn(l,c),Gh(t,i,l,c,o);case 3:e:{if(Wh(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,c=h.element,sh(t,i),xa(i,l,null,o);var M=i.memoizedState;if(l=M.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=ds(Error(n(423)),i),i=Xh(t,i,l,o,c);break e}else if(l!==c){c=ds(Error(n(424)),i),i=Xh(t,i,l,o,c);break e}else for(Ln=qi(i.stateNode.containerInfo.firstChild),bn=i,It=!0,qn=null,o=ih(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(as(),l===c){i=Ei(t,i,o);break e}hn(t,i,l,o)}i=i.child}return i;case 5:return lh(i),t===null&&xu(i),l=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,M=c.children,cu(l,c)?M=null:h!==null&&cu(l,h)&&(i.flags|=32),Vh(t,i),hn(t,i,M,o),i.child;case 6:return t===null&&xu(i),null;case 13:return jh(t,i,o);case 4:return Cu(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=ls(i,null,l,o):hn(t,i,l,o),i.child;case 11:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Kn(l,c),kh(t,i,l,c,o);case 7:return hn(t,i,i.pendingProps,o),i.child;case 8:return hn(t,i,i.pendingProps.children,o),i.child;case 12:return hn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,c=i.pendingProps,h=i.memoizedProps,M=c.value,Pt(ga,l._currentValue),l._currentValue=M,h!==null)if(Yn(h.value,M)){if(h.children===c.children&&!_n.current){i=Ei(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var L=h.dependencies;if(L!==null){M=h.child;for(var F=L.firstContext;F!==null;){if(F.context===l){if(h.tag===1){F=Mi(-1,o&-o),F.tag=2;var Z=h.updateQueue;if(Z!==null){Z=Z.shared;var me=Z.pending;me===null?F.next=F:(F.next=me.next,me.next=F),Z.pending=F}}h.lanes|=o,F=h.alternate,F!==null&&(F.lanes|=o),Tu(h.return,o,i),L.lanes|=o;break}F=F.next}}else if(h.tag===10)M=h.type===i.type?null:h.child;else if(h.tag===18){if(M=h.return,M===null)throw Error(n(341));M.lanes|=o,L=M.alternate,L!==null&&(L.lanes|=o),Tu(M,o,i),M=h.sibling}else M=h.child;if(M!==null)M.return=h;else for(M=h;M!==null;){if(M===i){M=null;break}if(h=M.sibling,h!==null){h.return=M.return,M=h;break}M=M.return}h=M}hn(t,i,c.children,o),i=i.child}return i;case 9:return c=i.type,l=i.pendingProps.children,cs(i,o),c=Bn(c),l=l(c),i.flags|=1,hn(t,i,l,o),i.child;case 14:return l=i.type,c=Kn(l,i.pendingProps),c=Kn(l.type,c),Bh(t,i,l,c,o);case 15:return zh(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Kn(l,c),Ra(t,i),i.tag=1,vn(l)?(t=!0,ca(i)):t=!1,cs(i,o),Lh(i,l,c),zu(i,l,c,o),Wu(null,i,l,!0,t,o);case 19:return qh(t,i,o);case 22:return Hh(t,i,o)}throw Error(n(156,i.tag))};function vp(t,i){return $(t,i)}function V_(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(t,i,o,l){return new V_(t,i,o,l)}function cc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function G_(t){if(typeof t=="function")return cc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ne)return 11;if(t===he)return 14}return 2}function sr(t,i){var o=t.alternate;return o===null?(o=Vn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Ba(t,i,o,l,c,h){var M=2;if(l=t,typeof t=="function")cc(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case U:return br(o.children,c,h,i);case X:M=8,c|=8;break;case xe:return t=Vn(12,o,i,c|2),t.elementType=xe,t.lanes=h,t;case J:return t=Vn(13,o,i,c),t.elementType=J,t.lanes=h,t;case oe:return t=Vn(19,o,i,c),t.elementType=oe,t.lanes=h,t;case ae:return za(o,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case E:M=10;break e;case R:M=9;break e;case ne:M=11;break e;case he:M=14;break e;case te:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Vn(M,o,i,c),i.elementType=t,i.type=l,i.lanes=h,i}function br(t,i,o,l){return t=Vn(7,t,l,i),t.lanes=o,t}function za(t,i,o,l){return t=Vn(22,t,l,i),t.elementType=ae,t.lanes=o,t.stateNode={isHidden:!1},t}function fc(t,i,o){return t=Vn(6,t,null,i),t.lanes=o,t}function dc(t,i,o){return i=Vn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function W_(t,i,o,l,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=js(0),this.expirationTimes=js(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=js(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function hc(t,i,o,l,c,h,M,L,F){return t=new W_(t,i,o,L,F),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Vn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Au(h),t}function X_(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function xp(t){if(!t)return $i;t=t._reactInternals;e:{if(mi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(vn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(vn(o))return Yd(t,o,i)}return i}function yp(t,i,o,l,c,h,M,L,F){return t=hc(o,l,!0,t,c,h,M,L,F),t.context=xp(null),o=t.current,l=pn(),c=ir(o),h=Mi(l,c),h.callback=i??null,Ji(o,h,c),t.current.lanes=c,Hi(t,c,l),Sn(t,l),t}function Ha(t,i,o,l){var c=i.current,h=pn(),M=ir(c);return o=xp(o),i.context===null?i.context=o:i.pendingContext=o,i=Mi(h,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=Ji(c,i,M),t!==null&&(Qn(t,c,M,h),va(t,c,M)),M}function Va(t){return t=t.current,t.child?(t.child.tag===5,t.child.stateNode):null}function Sp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function pc(t,i){Sp(t,i),(t=t.alternate)&&Sp(t,i)}function j_(){return null}var Mp=typeof reportError=="function"?reportError:function(t){console.error(t)};function mc(t){this._internalRoot=t}Ga.prototype.render=mc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Ha(t,i,null,null)},Ga.prototype.unmount=mc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Cr(function(){Ha(null,t,null,null)}),i[_i]=null}};function Ga(t){this._internalRoot=t}Ga.prototype.unstable_scheduleHydration=function(t){if(t){var i=sd();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Xi.length&&i!==0&&i<Xi[o].priority;o++);Xi.splice(o,0,t),o===0&&ld(t)}};function gc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Wa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ep(){}function Y_(t,i,o,l,c){if(c){if(typeof l=="function"){var h=l;l=function(){var Z=Va(M);h.call(Z)}}var M=yp(i,l,t,0,null,!1,!1,"",Ep);return t._reactRootContainer=M,t[_i]=M.current,oo(t.nodeType===8?t.parentNode:t),Cr(),M}for(;c=t.lastChild;)t.removeChild(c);if(typeof l=="function"){var L=l;l=function(){var Z=Va(F);L.call(Z)}}var F=hc(t,0,!1,null,null,!1,!1,"",Ep);return t._reactRootContainer=F,t[_i]=F.current,oo(t.nodeType===8?t.parentNode:t),Cr(function(){Ha(i,F,o,l)}),F}function Xa(t,i,o,l,c){var h=o._reactRootContainer;if(h){var M=h;if(typeof c=="function"){var L=c;c=function(){var F=Va(M);L.call(F)}}Ha(i,M,t,c)}else M=Y_(o,i,t,c,l);return Va(M)}id=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=gi(i.pendingLanes);o!==0&&(zl(i,o|1),Sn(i,Te()),(mt&6)===0&&(ms=Te()+500,Zi()))}break;case 13:Cr(function(){var l=Si(t,1);if(l!==null){var c=pn();Qn(l,t,1,c)}}),pc(t,1)}},Hl=function(t){if(t.tag===13){var i=Si(t,134217728);if(i!==null){var o=pn();Qn(i,t,134217728,o)}pc(t,134217728)}},rd=function(t){if(t.tag===13){var i=ir(t),o=Si(t,i);if(o!==null){var l=pn();Qn(o,t,i,l)}pc(t,i)}},sd=function(){return Et},od=function(t,i){var o=Et;try{return Et=t,i()}finally{Et=o}},re=function(t,i,o){switch(i){case"input":if($e(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var c=la(l);if(!c)throw Error(n(90));lt(l),$e(l,c)}}}break;case"textarea":ge(t,o);break;case"select":i=o.value,i!=null&&T(t,!!o.multiple,i,!1)}},nn=ac,ht=Cr;var q_={usingClientEntryPoint:!1,Events:[uo,ns,la,ct,Ut,ac]},To={findFiberByHostInstance:xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},K_={bundleType:To.bundleType,version:To.version,rendererPackageName:To.rendererPackageName,rendererConfig:To.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=V(t),t===null?null:t.stateNode},findFiberByHostInstance:To.findFiberByHostInstance||j_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ja=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ja.isDisabled&&ja.supportsFiber)try{At=ja.inject(K_),Nt=ja}catch{}}return Mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q_,Mn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gc(i))throw Error(n(200));return X_(t,i,null,o)},Mn.createRoot=function(t,i){if(!gc(t))throw Error(n(299));var o=!1,l="",c=Mp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=hc(t,1,!1,null,null,o,!1,l,c),t[_i]=i.current,oo(t.nodeType===8?t.parentNode:t),new mc(i)},Mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=V(i),t=t===null?null:t.stateNode,t},Mn.flushSync=function(t){return Cr(t)},Mn.hydrate=function(t,i,o){if(!Wa(i))throw Error(n(200));return Xa(null,t,i,!0,o)},Mn.hydrateRoot=function(t,i,o){if(!gc(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,c=!1,h="",M=Mp;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=yp(i,null,t,1,o??null,c,!1,h,M),t[_i]=i.current,oo(t),l)for(t=0;t<l.length;t++)o=l[t],c=o._getVersion,c=c(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,c]:i.mutableSourceEagerHydrationData.push(o,c);return new Ga(i)},Mn.render=function(t,i,o){if(!Wa(i))throw Error(n(200));return Xa(null,t,i,!1,o)},Mn.unmountComponentAtNode=function(t){if(!Wa(t))throw Error(n(40));return t._reactRootContainer?(Cr(function(){Xa(null,null,t,!1,function(){t._reactRootContainer=null,t[_i]=null})}),!0):!1},Mn.unstable_batchedUpdates=ac,Mn.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!Wa(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Xa(t,i,o,!1,l)},Mn.version="18.3.1-next-f1338f8080-20240426",Mn}var Lp;function iv(){if(Lp)return xc.exports;Lp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),xc.exports=nv(),xc.exports}var Dp;function rv(){if(Dp)return Ya;Dp=1;var s=iv();return Ya.createRoot=s.createRoot,Ya.hydrateRoot=s.hydrateRoot,Ya}var sv=rv();const ov=Dm(sv),Wf=Wn.createContext(void 0),Xf=()=>{const s=Wn.useContext(Wf);if(!s)throw new Error("useSystem must be used within a NeuralProvider");return s};function Im(s){var e,n,r="";if(typeof s=="string"||typeof s=="number")r+=s;else if(typeof s=="object")if(Array.isArray(s)){var a=s.length;for(e=0;e<a;e++)s[e]&&(n=Im(s[e]))&&(r&&(r+=" "),r+=n)}else for(n in s)s[n]&&(r&&(r+=" "),r+=n);return r}function av(){for(var s,e,n=0,r="",a=arguments.length;n<a;n++)(s=arguments[n])&&(e=Im(s))&&(r&&(r+=" "),r+=e);return r}const Uo=(...s)=>av(...s),lv=({children:s,variant:e="primary",size:n="md",className:r,onClick:a,...u})=>{const{engine:f}=Xf(),d=y=>{if(f){const x=y.currentTarget.getBoundingClientRect(),S=x.left+x.width/2,w=x.top+x.height/2;f.emitPulse(S,w,1.25)}a&&a(y)},p="jk-neo-button relative inline-flex items-center justify-center overflow-hidden transition-all duration-300 font-bold uppercase tracking-widest",m={primary:"jk-neon-primary bg-neo-accent text-black font-bold uppercase tracking-[0.2em] shadow-neon-primary active:scale-95",secondary:"jk-glass text-white/90 hover:bg-white/5 border-white/5 active:scale-95",outline:"border border-white/20 text-white/50 hover:text-white hover:border-white/40 bg-transparent active:scale-95",ghost:"text-white/40 hover:text-white hover:bg-white/5 bg-transparent"},_={sm:"px-4 py-1.5 text-[8px]",md:"px-8 py-2.5 text-[10px]",lg:"px-12 py-4 text-[12px] font-black"};return we.jsxs("button",{className:Uo(p,m[e],_[n],r),onClick:d,...u,children:[we.jsx("span",{className:"relative z-10",children:s}),we.jsx("div",{className:"absolute inset-0 bg-white/10 opacity-0 active:opacity-100 transition-opacity"})]})},uv=({title:s,value:e,trend:n,children:r,className:a,glow:u=!0})=>we.jsxs("div",{className:Uo("jk-card-v2 jk-glass group transition-all duration-500 rounded-[var(--neo-radius)] px-7 py-6 cursor-default border-white/5 active:scale-[0.99]",u&&"hover:border-white/20 hover:shadow-[0_0_40px_-10px_var(--neo-glow)]",a),children:[we.jsx("div",{className:"jk-card-flare group-hover:opacity-20 transition-opacity duration-1000"}),we.jsxs("div",{className:"relative z-10 flex flex-col space-y-4",children:[s&&we.jsx("h3",{className:"jk-hud-heading text-[10px] tracking-[0.25em] text-white/50 uppercase",children:s}),e!==void 0&&we.jsxs("div",{className:"flex items-baseline gap-2",children:[we.jsx("span",{className:"text-4xl font-bold tracking-tighter text-white drop-shadow-sm",children:e}),n&&we.jsx("span",{className:Uo("jk-data-label text-[10px] uppercase font-bold px-2 py-0.5 rounded-sm",n.direction==="up"?"text-green-400 bg-green-400/10":n.direction==="down"?"text-red-400 bg-red-400/10":"text-neo-accent bg-neo-accent/10"),children:n.value})]}),we.jsx("div",{className:"text-sm text-neo-muted/80",children:r})]}),we.jsx("div",{className:"absolute bottom-[-20%] right-[-10%] w-32 h-32 bg-[var(--neo-accent)]/5 rounded-full blur-3xl"})]}),cv=({label:s,glow:e=!0,className:n,...r})=>we.jsxs("div",{className:"jk-input-v2 flex flex-col space-y-3 group w-full",children:[s&&we.jsx("label",{className:"jk-hud-heading text-[10px] tracking-[0.25em] text-white/40 uppercase pl-1",children:s}),we.jsxs("div",{className:"relative",children:[we.jsx("input",{className:Uo("w-full jk-glass bg-white/5 border-white/10 rounded-[var(--neo-radius)] px-5 py-4 text-white text-sm outline-none transition-all duration-300","placeholder:text-white/20",e&&"focus:border-neo-accent/50 focus:shadow-[0_0_30px_-5px_var(--neo-glow)] focus:bg-white/[0.08]",n),...r}),we.jsx("div",{className:"absolute bottom-0 left-4 right-4 h-[1px] bg-neo-accent scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 shadow-[0_0_15px_var(--neo-glow)]"})]})]});const jf="169",fv=0,Np=1,dv=2,Um=1,hv=2,bi=3,gr=0,wn=1,Li=2,pr=0,Ds=1,Rl=2,Ip=3,Up=4,pv=5,Br=100,mv=101,gv=102,_v=103,vv=104,xv=200,yv=201,Sv=202,Mv=203,ef=204,tf=205,Ev=206,Tv=207,wv=208,Av=209,Cv=210,Rv=211,Pv=212,bv=213,Lv=214,nf=0,rf=1,sf=2,Us=3,of=4,af=5,lf=6,uf=7,Fm=0,Dv=1,Nv=2,mr=0,Iv=1,Uv=2,Fv=3,Ov=4,kv=5,Bv=6,zv=7,Om=300,Fs=301,Os=302,cf=303,ff=304,Fl=306,df=1e3,Hr=1001,hf=1002,Xn=1003,Hv=1004,qa=1005,ii=1006,Mc=1007,Vr=1008,Fi=1009,km=1010,Bm=1011,Fo=1012,Yf=1013,Gr=1014,Di=1015,Oo=1016,qf=1017,Kf=1018,ks=1020,zm=35902,Hm=1021,Vm=1022,si=1023,Gm=1024,Wm=1025,Ns=1026,Bs=1027,Xm=1028,$f=1029,jm=1030,Zf=1031,Qf=1033,Sl=33776,Ml=33777,El=33778,Tl=33779,pf=35840,mf=35841,gf=35842,_f=35843,vf=36196,xf=37492,yf=37496,Sf=37808,Mf=37809,Ef=37810,Tf=37811,wf=37812,Af=37813,Cf=37814,Rf=37815,Pf=37816,bf=37817,Lf=37818,Df=37819,Nf=37820,If=37821,wl=36492,Uf=36494,Ff=36495,Ym=36283,Of=36284,kf=36285,Bf=36286,Vv=3200,Gv=3201,Wv=0,Xv=1,hr="",di="srgb",_r="srgb-linear",Jf="display-p3",Ol="display-p3-linear",Pl="linear",Dt="srgb",bl="rec709",Ll="p3",_s=7680,Fp=519,jv=512,Yv=513,qv=514,qm=515,Kv=516,$v=517,Zv=518,Qv=519,Op=35044,kp="300 es",Ni=2e3,Dl=2001;class Hs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,f=a.length;u<f;u++)a[u].call(this,e);e.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ec=Math.PI/180,zf=180/Math.PI;function ko(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(fn[s&255]+fn[s>>8&255]+fn[s>>16&255]+fn[s>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[n&63|128]+fn[n>>8&255]+"-"+fn[n>>16&255]+fn[n>>24&255]+fn[r&255]+fn[r>>8&255]+fn[r>>16&255]+fn[r>>24&255]).toLowerCase()}function Tn(s,e,n){return Math.max(e,Math.min(n,s))}function Jv(s,e){return(s%e+e)%e}function Tc(s,e,n){return(1-n)*s+n*e}function Ao(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function En(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ct{constructor(e=0,n=0){Ct.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Tn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*a+e.x,this.y=u*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,n,r,a,u,f,d,p,m){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m)}set(e,n,r,a,u,f,d,p,m){const _=this.elements;return _[0]=e,_[1]=a,_[2]=d,_[3]=n,_[4]=u,_[5]=p,_[6]=r,_[7]=f,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[3],p=r[6],m=r[1],_=r[4],y=r[7],x=r[2],S=r[5],w=r[8],C=a[0],g=a[3],v=a[6],N=a[1],P=a[4],D=a[7],Q=a[2],B=a[5],U=a[8];return u[0]=f*C+d*N+p*Q,u[3]=f*g+d*P+p*B,u[6]=f*v+d*D+p*U,u[1]=m*C+_*N+y*Q,u[4]=m*g+_*P+y*B,u[7]=m*v+_*D+y*U,u[2]=x*C+S*N+w*Q,u[5]=x*g+S*P+w*B,u[8]=x*v+S*D+w*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8];return n*f*_-n*d*m-r*u*_+r*d*p+a*u*m-a*f*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8],y=_*f-d*m,x=d*p-_*u,S=m*u-f*p,w=n*y+r*x+a*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=y*C,e[1]=(a*m-_*r)*C,e[2]=(d*r-a*f)*C,e[3]=x*C,e[4]=(_*n-a*p)*C,e[5]=(a*u-d*n)*C,e[6]=S*C,e[7]=(r*p-m*n)*C,e[8]=(f*n-r*u)*C,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,f,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*f+m*d)+f+e,-a*m,a*p,-a*(-m*f+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(wc.makeScale(e,n)),this}rotate(e){return this.premultiply(wc.makeRotation(-e)),this}translate(e,n){return this.premultiply(wc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wc=new st;function Km(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Nl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function e0(){const s=Nl("canvas");return s.style.display="block",s}const Bp={};function Al(s){s in Bp||(Bp[s]=!0,console.warn(s))}function t0(s,e,n){return new Promise(function(r,a){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}function n0(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function i0(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const zp=new st().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Hp=new st().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Co={[_r]:{transfer:Pl,primaries:bl,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[di]:{transfer:Dt,primaries:bl,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ol]:{transfer:Pl,primaries:Ll,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(Hp),fromReference:s=>s.applyMatrix3(zp)},[Jf]:{transfer:Dt,primaries:Ll,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(Hp),fromReference:s=>s.applyMatrix3(zp).convertLinearToSRGB()}},r0=new Set([_r,Ol]),Mt={enabled:!0,_workingColorSpace:_r,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!r0.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,n){if(this.enabled===!1||e===n||!e||!n)return s;const r=Co[e].toReference,a=Co[n].fromReference;return a(r(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Co[s].primaries},getTransfer:function(s){return s===hr?Pl:Co[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(Co[e].luminanceCoefficients)}};function Is(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ac(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let vs;class s0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{vs===void 0&&(vs=Nl("canvas")),vs.width=e.width,vs.height=e.height;const r=vs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=vs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Nl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let f=0;f<u.length;f++)u[f]=Is(u[f]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Is(n[r]/255)*255):n[r]=Is(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let o0=0;class $m{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=ko(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let f=0,d=a.length;f<d;f++)a[f].isDataTexture?u.push(Cc(a[f].image)):u.push(Cc(a[f]))}else u=Cc(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function Cc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?s0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let a0=0;class An extends Hs{constructor(e=An.DEFAULT_IMAGE,n=An.DEFAULT_MAPPING,r=Hr,a=Hr,u=ii,f=Vr,d=si,p=Fi,m=An.DEFAULT_ANISOTROPY,_=hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=ko(),this.name="",this.source=new $m(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Om)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case df:e.x=e.x-Math.floor(e.x);break;case Hr:e.x=e.x<0?0:1;break;case hf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case df:e.y=e.y-Math.floor(e.y);break;case Hr:e.y=e.y<0?0:1;break;case hf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=Om;An.DEFAULT_ANISOTROPY=1;class Ht{constructor(e=0,n=0,r=0,a=1){Ht.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*a+f[12]*u,this.y=f[1]*n+f[5]*r+f[9]*a+f[13]*u,this.z=f[2]*n+f[6]*r+f[10]*a+f[14]*u,this.w=f[3]*n+f[7]*r+f[11]*a+f[15]*u,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const p=e.elements,m=p[0],_=p[4],y=p[8],x=p[1],S=p[5],w=p[9],C=p[2],g=p[6],v=p[10];if(Math.abs(_-x)<.01&&Math.abs(y-C)<.01&&Math.abs(w-g)<.01){if(Math.abs(_+x)<.1&&Math.abs(y+C)<.1&&Math.abs(w+g)<.1&&Math.abs(m+S+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const P=(m+1)/2,D=(S+1)/2,Q=(v+1)/2,B=(_+x)/4,U=(y+C)/4,X=(w+g)/4;return P>D&&P>Q?P<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(P),a=B/r,u=U/r):D>Q?D<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(D),r=B/a,u=X/a):Q<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(Q),r=U/u,a=X/u),this.set(r,a,u,n),this}let N=Math.sqrt((g-w)*(g-w)+(y-C)*(y-C)+(x-_)*(x-_));return Math.abs(N)<.001&&(N=1),this.x=(g-w)/N,this.y=(y-C)/N,this.z=(x-_)/N,this.w=Math.acos((m+S+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class l0 extends Hs{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ht(0,0,e,n),this.scissorTest=!1,this.viewport=new Ht(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new An(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new $m(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wr extends l0{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Zm extends An{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class u0 extends An{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bo{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,f,d){let p=r[a+0],m=r[a+1],_=r[a+2],y=r[a+3];const x=u[f+0],S=u[f+1],w=u[f+2],C=u[f+3];if(d===0){e[n+0]=p,e[n+1]=m,e[n+2]=_,e[n+3]=y;return}if(d===1){e[n+0]=x,e[n+1]=S,e[n+2]=w,e[n+3]=C;return}if(y!==C||p!==x||m!==S||_!==w){let g=1-d;const v=p*x+m*S+_*w+y*C,N=v>=0?1:-1,P=1-v*v;if(P>Number.EPSILON){const Q=Math.sqrt(P),B=Math.atan2(Q,v*N);g=Math.sin(g*B)/Q,d=Math.sin(d*B)/Q}const D=d*N;if(p=p*g+x*D,m=m*g+S*D,_=_*g+w*D,y=y*g+C*D,g===1-d){const Q=1/Math.sqrt(p*p+m*m+_*_+y*y);p*=Q,m*=Q,_*=Q,y*=Q}}e[n]=p,e[n+1]=m,e[n+2]=_,e[n+3]=y}static multiplyQuaternionsFlat(e,n,r,a,u,f){const d=r[a],p=r[a+1],m=r[a+2],_=r[a+3],y=u[f],x=u[f+1],S=u[f+2],w=u[f+3];return e[n]=d*w+_*y+p*S-m*x,e[n+1]=p*w+_*x+m*y-d*S,e[n+2]=m*w+_*S+d*x-p*y,e[n+3]=_*w-d*y-p*x-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(r/2),_=d(a/2),y=d(u/2),x=p(r/2),S=p(a/2),w=p(u/2);switch(f){case"XYZ":this._x=x*_*y+m*S*w,this._y=m*S*y-x*_*w,this._z=m*_*w+x*S*y,this._w=m*_*y-x*S*w;break;case"YXZ":this._x=x*_*y+m*S*w,this._y=m*S*y-x*_*w,this._z=m*_*w-x*S*y,this._w=m*_*y+x*S*w;break;case"ZXY":this._x=x*_*y-m*S*w,this._y=m*S*y+x*_*w,this._z=m*_*w+x*S*y,this._w=m*_*y-x*S*w;break;case"ZYX":this._x=x*_*y-m*S*w,this._y=m*S*y+x*_*w,this._z=m*_*w-x*S*y,this._w=m*_*y+x*S*w;break;case"YZX":this._x=x*_*y+m*S*w,this._y=m*S*y+x*_*w,this._z=m*_*w-x*S*y,this._w=m*_*y-x*S*w;break;case"XZY":this._x=x*_*y-m*S*w,this._y=m*S*y-x*_*w,this._z=m*_*w+x*S*y,this._w=m*_*y+x*S*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],f=n[1],d=n[5],p=n[9],m=n[2],_=n[6],y=n[10],x=r+d+y;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(_-p)*S,this._y=(u-m)*S,this._z=(f-a)*S}else if(r>d&&r>y){const S=2*Math.sqrt(1+r-d-y);this._w=(_-p)/S,this._x=.25*S,this._y=(a+f)/S,this._z=(u+m)/S}else if(d>y){const S=2*Math.sqrt(1+d-r-y);this._w=(u-m)/S,this._x=(a+f)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+y-r-d);this._w=(f-a)/S,this._x=(u+m)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,f=e._w,d=n._x,p=n._y,m=n._z,_=n._w;return this._x=r*_+f*d+a*m-u*p,this._y=a*_+f*p+u*d-r*m,this._z=u*_+f*m+r*p-a*d,this._w=f*_-r*d-a*p-u*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,f=this._w;let d=f*e._w+r*e._x+a*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=a,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-n;return this._w=S*f+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*u+n*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,d),y=Math.sin((1-n)*_)/m,x=Math.sin(n*_)/m;return this._w=f*y+this._w*x,this._x=r*y+this._x*x,this._y=a*y+this._y*x,this._z=u*y+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(e=0,n=0,r=0){ee.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Vp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Vp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,f=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*f,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*f,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*a-d*r),_=2*(d*n-u*a),y=2*(u*r-f*n);return this.x=n+p*m+f*y-d*_,this.y=r+p*_+d*m-u*y,this.z=a+p*y+u*_-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,f=n.x,d=n.y,p=n.z;return this.x=a*p-u*d,this.y=u*f-r*p,this.z=r*d-a*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Rc.copy(this).projectOnVector(e),this.sub(Rc)}reflect(e){return this.sub(Rc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Tn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rc=new ee,Vp=new Bo;class zo{constructor(e=new ee(1/0,1/0,1/0),n=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Jn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Jn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Jn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,Jn):Jn.fromBufferAttribute(u,f),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ka.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ka.copy(r.boundingBox)),Ka.applyMatrix4(e.matrixWorld),this.union(Ka)}const a=e.children;for(let u=0,f=a.length;u<f;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ro),$a.subVectors(this.max,Ro),xs.subVectors(e.a,Ro),ys.subVectors(e.b,Ro),Ss.subVectors(e.c,Ro),ar.subVectors(ys,xs),lr.subVectors(Ss,ys),Lr.subVectors(xs,Ss);let n=[0,-ar.z,ar.y,0,-lr.z,lr.y,0,-Lr.z,Lr.y,ar.z,0,-ar.x,lr.z,0,-lr.x,Lr.z,0,-Lr.x,-ar.y,ar.x,0,-lr.y,lr.x,0,-Lr.y,Lr.x,0];return!Pc(n,xs,ys,Ss,$a)||(n=[1,0,0,0,1,0,0,0,1],!Pc(n,xs,ys,Ss,$a))?!1:(Za.crossVectors(ar,lr),n=[Za.x,Za.y,Za.z],Pc(n,xs,ys,Ss,$a))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wi=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],Jn=new ee,Ka=new zo,xs=new ee,ys=new ee,Ss=new ee,ar=new ee,lr=new ee,Lr=new ee,Ro=new ee,$a=new ee,Za=new ee,Dr=new ee;function Pc(s,e,n,r,a){for(let u=0,f=s.length-3;u<=f;u+=3){Dr.fromArray(s,u);const d=a.x*Math.abs(Dr.x)+a.y*Math.abs(Dr.y)+a.z*Math.abs(Dr.z),p=e.dot(Dr),m=n.dot(Dr),_=r.dot(Dr);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const c0=new zo,Po=new ee,bc=new ee;class Ho{constructor(e=new ee,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):c0.setFromPoints(e).getCenter(r);let a=0;for(let u=0,f=e.length;u<f;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Po.subVectors(e,this.center);const n=Po.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Po,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Po.copy(e.center).add(bc)),this.expandByPoint(Po.copy(e.center).sub(bc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ai=new ee,Lc=new ee,Qa=new ee,ur=new ee,Dc=new ee,Ja=new ee,Nc=new ee;class ed{constructor(e=new ee,n=new ee(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ai.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,n),Ai.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Lc.copy(e).add(n).multiplyScalar(.5),Qa.copy(n).sub(e).normalize(),ur.copy(this.origin).sub(Lc);const u=e.distanceTo(n)*.5,f=-this.direction.dot(Qa),d=ur.dot(this.direction),p=-ur.dot(Qa),m=ur.lengthSq(),_=Math.abs(1-f*f);let y,x,S,w;if(_>0)if(y=f*p-d,x=f*d-p,w=u*_,y>=0)if(x>=-w)if(x<=w){const C=1/_;y*=C,x*=C,S=y*(y+f*x+2*d)+x*(f*y+x+2*p)+m}else x=u,y=Math.max(0,-(f*x+d)),S=-y*y+x*(x+2*p)+m;else x=-u,y=Math.max(0,-(f*x+d)),S=-y*y+x*(x+2*p)+m;else x<=-w?(y=Math.max(0,-(-f*u+d)),x=y>0?-u:Math.min(Math.max(-u,-p),u),S=-y*y+x*(x+2*p)+m):x<=w?(y=0,x=Math.min(Math.max(-u,-p),u),S=x*(x+2*p)+m):(y=Math.max(0,-(f*u+d)),x=y>0?u:Math.min(Math.max(-u,-p),u),S=-y*y+x*(x+2*p)+m);else x=f>0?-u:u,y=Math.max(0,-(f*x+d)),S=-y*y+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,y),a&&a.copy(Lc).addScaledVector(Qa,x),S}intersectSphere(e,n){Ai.subVectors(e.center,this.origin);const r=Ai.dot(this.direction),a=Ai.dot(Ai)-r*r,u=e.radius*e.radius;if(a>u)return null;const f=Math.sqrt(u-a),d=r-f,p=r+f;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,f,d,p;const m=1/this.direction.x,_=1/this.direction.y,y=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),_>=0?(u=(e.min.y-x.y)*_,f=(e.max.y-x.y)*_):(u=(e.max.y-x.y)*_,f=(e.min.y-x.y)*_),r>f||u>a||((u>r||isNaN(r))&&(r=u),(f<a||isNaN(a))&&(a=f),y>=0?(d=(e.min.z-x.z)*y,p=(e.max.z-x.z)*y):(d=(e.max.z-x.z)*y,p=(e.min.z-x.z)*y),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,n,r,a,u){Dc.subVectors(n,e),Ja.subVectors(r,e),Nc.crossVectors(Dc,Ja);let f=this.direction.dot(Nc),d;if(f>0){if(a)return null;d=1}else if(f<0)d=-1,f=-f;else return null;ur.subVectors(this.origin,e);const p=d*this.direction.dot(Ja.crossVectors(ur,Ja));if(p<0)return null;const m=d*this.direction.dot(Dc.cross(ur));if(m<0||p+m>f)return null;const _=-d*ur.dot(Nc);return _<0?null:this.at(_/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,n,r,a,u,f,d,p,m,_,y,x,S,w,C,g){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m,_,y,x,S,w,C,g)}set(e,n,r,a,u,f,d,p,m,_,y,x,S,w,C,g){const v=this.elements;return v[0]=e,v[4]=n,v[8]=r,v[12]=a,v[1]=u,v[5]=f,v[9]=d,v[13]=p,v[2]=m,v[6]=_,v[10]=y,v[14]=x,v[3]=S,v[7]=w,v[11]=C,v[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Ms.setFromMatrixColumn(e,0).length(),u=1/Ms.setFromMatrixColumn(e,1).length(),f=1/Ms.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,f=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a),_=Math.cos(u),y=Math.sin(u);if(e.order==="XYZ"){const x=f*_,S=f*y,w=d*_,C=d*y;n[0]=p*_,n[4]=-p*y,n[8]=m,n[1]=S+w*m,n[5]=x-C*m,n[9]=-d*p,n[2]=C-x*m,n[6]=w+S*m,n[10]=f*p}else if(e.order==="YXZ"){const x=p*_,S=p*y,w=m*_,C=m*y;n[0]=x+C*d,n[4]=w*d-S,n[8]=f*m,n[1]=f*y,n[5]=f*_,n[9]=-d,n[2]=S*d-w,n[6]=C+x*d,n[10]=f*p}else if(e.order==="ZXY"){const x=p*_,S=p*y,w=m*_,C=m*y;n[0]=x-C*d,n[4]=-f*y,n[8]=w+S*d,n[1]=S+w*d,n[5]=f*_,n[9]=C-x*d,n[2]=-f*m,n[6]=d,n[10]=f*p}else if(e.order==="ZYX"){const x=f*_,S=f*y,w=d*_,C=d*y;n[0]=p*_,n[4]=w*m-S,n[8]=x*m+C,n[1]=p*y,n[5]=C*m+x,n[9]=S*m-w,n[2]=-m,n[6]=d*p,n[10]=f*p}else if(e.order==="YZX"){const x=f*p,S=f*m,w=d*p,C=d*m;n[0]=p*_,n[4]=C-x*y,n[8]=w*y+S,n[1]=y,n[5]=f*_,n[9]=-d*_,n[2]=-m*_,n[6]=S*y+w,n[10]=x-C*y}else if(e.order==="XZY"){const x=f*p,S=f*m,w=d*p,C=d*m;n[0]=p*_,n[4]=-y,n[8]=m*_,n[1]=x*y+C,n[5]=f*_,n[9]=S*y-w,n[2]=w*y-S,n[6]=d*_,n[10]=C*y+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(f0,e,d0)}lookAt(e,n,r){const a=this.elements;return Nn.subVectors(e,n),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),cr.crossVectors(r,Nn),cr.lengthSq()===0&&(Math.abs(r.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),cr.crossVectors(r,Nn)),cr.normalize(),el.crossVectors(Nn,cr),a[0]=cr.x,a[4]=el.x,a[8]=Nn.x,a[1]=cr.y,a[5]=el.y,a[9]=Nn.y,a[2]=cr.z,a[6]=el.z,a[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[4],p=r[8],m=r[12],_=r[1],y=r[5],x=r[9],S=r[13],w=r[2],C=r[6],g=r[10],v=r[14],N=r[3],P=r[7],D=r[11],Q=r[15],B=a[0],U=a[4],X=a[8],xe=a[12],E=a[1],R=a[5],ne=a[9],J=a[13],oe=a[2],he=a[6],te=a[10],ae=a[14],k=a[3],ue=a[7],se=a[11],I=a[15];return u[0]=f*B+d*E+p*oe+m*k,u[4]=f*U+d*R+p*he+m*ue,u[8]=f*X+d*ne+p*te+m*se,u[12]=f*xe+d*J+p*ae+m*I,u[1]=_*B+y*E+x*oe+S*k,u[5]=_*U+y*R+x*he+S*ue,u[9]=_*X+y*ne+x*te+S*se,u[13]=_*xe+y*J+x*ae+S*I,u[2]=w*B+C*E+g*oe+v*k,u[6]=w*U+C*R+g*he+v*ue,u[10]=w*X+C*ne+g*te+v*se,u[14]=w*xe+C*J+g*ae+v*I,u[3]=N*B+P*E+D*oe+Q*k,u[7]=N*U+P*R+D*he+Q*ue,u[11]=N*X+P*ne+D*te+Q*se,u[15]=N*xe+P*J+D*ae+Q*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],f=e[1],d=e[5],p=e[9],m=e[13],_=e[2],y=e[6],x=e[10],S=e[14],w=e[3],C=e[7],g=e[11],v=e[15];return w*(+u*p*y-a*m*y-u*d*x+r*m*x+a*d*S-r*p*S)+C*(+n*p*S-n*m*x+u*f*x-a*f*S+a*m*_-u*p*_)+g*(+n*m*y-n*d*S-u*f*y+r*f*S+u*d*_-r*m*_)+v*(-a*d*_-n*p*y+n*d*x+a*f*y-r*f*x+r*p*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8],y=e[9],x=e[10],S=e[11],w=e[12],C=e[13],g=e[14],v=e[15],N=y*g*m-C*x*m+C*p*S-d*g*S-y*p*v+d*x*v,P=w*x*m-_*g*m-w*p*S+f*g*S+_*p*v-f*x*v,D=_*C*m-w*y*m+w*d*S-f*C*S-_*d*v+f*y*v,Q=w*y*p-_*C*p-w*d*x+f*C*x+_*d*g-f*y*g,B=n*N+r*P+a*D+u*Q;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/B;return e[0]=N*U,e[1]=(C*x*u-y*g*u-C*a*S+r*g*S+y*a*v-r*x*v)*U,e[2]=(d*g*u-C*p*u+C*a*m-r*g*m-d*a*v+r*p*v)*U,e[3]=(y*p*u-d*x*u-y*a*m+r*x*m+d*a*S-r*p*S)*U,e[4]=P*U,e[5]=(_*g*u-w*x*u+w*a*S-n*g*S-_*a*v+n*x*v)*U,e[6]=(w*p*u-f*g*u-w*a*m+n*g*m+f*a*v-n*p*v)*U,e[7]=(f*x*u-_*p*u+_*a*m-n*x*m-f*a*S+n*p*S)*U,e[8]=D*U,e[9]=(w*y*u-_*C*u-w*r*S+n*C*S+_*r*v-n*y*v)*U,e[10]=(f*C*u-w*d*u+w*r*m-n*C*m-f*r*v+n*d*v)*U,e[11]=(_*d*u-f*y*u-_*r*m+n*y*m+f*r*S-n*d*S)*U,e[12]=Q*U,e[13]=(_*C*a-w*y*a+w*r*x-n*C*x-_*r*g+n*y*g)*U,e[14]=(w*d*a-f*C*a-w*r*p+n*C*p+f*r*g-n*d*g)*U,e[15]=(f*y*a-_*d*a+_*r*p-n*y*p-f*r*x+n*d*x)*U,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,f=e.x,d=e.y,p=e.z,m=u*f,_=u*d;return this.set(m*f+r,m*d-a*p,m*p+a*d,0,m*d+a*p,_*d+r,_*p-a*f,0,m*p-a*d,_*p+a*f,u*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,f){return this.set(1,r,u,0,e,1,f,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,f=n._y,d=n._z,p=n._w,m=u+u,_=f+f,y=d+d,x=u*m,S=u*_,w=u*y,C=f*_,g=f*y,v=d*y,N=p*m,P=p*_,D=p*y,Q=r.x,B=r.y,U=r.z;return a[0]=(1-(C+v))*Q,a[1]=(S+D)*Q,a[2]=(w-P)*Q,a[3]=0,a[4]=(S-D)*B,a[5]=(1-(x+v))*B,a[6]=(g+N)*B,a[7]=0,a[8]=(w+P)*U,a[9]=(g-N)*U,a[10]=(1-(x+C))*U,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=Ms.set(a[0],a[1],a[2]).length();const f=Ms.set(a[4],a[5],a[6]).length(),d=Ms.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],ei.copy(this);const m=1/u,_=1/f,y=1/d;return ei.elements[0]*=m,ei.elements[1]*=m,ei.elements[2]*=m,ei.elements[4]*=_,ei.elements[5]*=_,ei.elements[6]*=_,ei.elements[8]*=y,ei.elements[9]*=y,ei.elements[10]*=y,n.setFromRotationMatrix(ei),r.x=u,r.y=f,r.z=d,this}makePerspective(e,n,r,a,u,f,d=Ni){const p=this.elements,m=2*u/(n-e),_=2*u/(r-a),y=(n+e)/(n-e),x=(r+a)/(r-a);let S,w;if(d===Ni)S=-(f+u)/(f-u),w=-2*f*u/(f-u);else if(d===Dl)S=-f/(f-u),w=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=_,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,u,f,d=Ni){const p=this.elements,m=1/(n-e),_=1/(r-a),y=1/(f-u),x=(n+e)*m,S=(r+a)*_;let w,C;if(d===Ni)w=(f+u)*y,C=-2*y;else if(d===Dl)w=u*y,C=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=C,p[14]=-w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ms=new ee,ei=new Bt,f0=new ee(0,0,0),d0=new ee(1,1,1),cr=new ee,el=new ee,Nn=new ee,Gp=new Bt,Wp=new Bo;class Oi{constructor(e=0,n=0,r=0,a=Oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],f=a[4],d=a[8],p=a[1],m=a[5],_=a[9],y=a[2],x=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(Tn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Tn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-y,u),this._z=0);break;case"ZXY":this._x=Math.asin(Tn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-y,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Tn(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(Tn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-y,u)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Tn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Gp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Wp.setFromEuler(this),this.setFromQuaternion(Wp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oi.DEFAULT_ORDER="XYZ";class Qm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let h0=0;const Xp=new ee,Es=new Bo,Ci=new Bt,tl=new ee,bo=new ee,p0=new ee,m0=new Bo,jp=new ee(1,0,0),Yp=new ee(0,1,0),qp=new ee(0,0,1),Kp={type:"added"},g0={type:"removed"},Ts={type:"childadded",child:null},Ic={type:"childremoved",child:null};class gn extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=ko(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const e=new ee,n=new Oi,r=new Bo,a=new ee(1,1,1);function u(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Bt},normalMatrix:{value:new st}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Es.setFromAxisAngle(e,n),this.quaternion.multiply(Es),this}rotateOnWorldAxis(e,n){return Es.setFromAxisAngle(e,n),this.quaternion.premultiply(Es),this}rotateX(e){return this.rotateOnAxis(jp,e)}rotateY(e){return this.rotateOnAxis(Yp,e)}rotateZ(e){return this.rotateOnAxis(qp,e)}translateOnAxis(e,n){return Xp.copy(e).applyQuaternion(this.quaternion),this.position.add(Xp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(jp,e)}translateY(e){return this.translateOnAxis(Yp,e)}translateZ(e){return this.translateOnAxis(qp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?tl.copy(e):tl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(bo,tl,this.up):Ci.lookAt(tl,bo,this.up),this.quaternion.setFromRotationMatrix(Ci),a&&(Ci.extractRotation(a.matrixWorld),Es.setFromRotationMatrix(Ci),this.quaternion.premultiply(Es.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kp),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(g0),Ic.child=e,this.dispatchEvent(Ic),Ic.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kp),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,e,p0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,m0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const y=p[m];u(e.shapes,y)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));a.material=d}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(u(e.animations,p))}}if(n){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),_=f(e.images),y=f(e.shapes),x=f(e.skeletons),S=f(e.animations),w=f(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),y.length>0&&(r.shapes=y),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),w.length>0&&(r.nodes=w)}return r.object=a,r;function f(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}gn.DEFAULT_UP=new ee(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ti=new ee,Ri=new ee,Uc=new ee,Pi=new ee,ws=new ee,As=new ee,$p=new ee,Fc=new ee,Oc=new ee,kc=new ee,Bc=new Ht,zc=new Ht,Hc=new Ht;class ri{constructor(e=new ee,n=new ee,r=new ee){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ti.subVectors(e,n),a.cross(ti);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){ti.subVectors(a,n),Ri.subVectors(r,n),Uc.subVectors(e,n);const f=ti.dot(ti),d=ti.dot(Ri),p=ti.dot(Uc),m=Ri.dot(Ri),_=Ri.dot(Uc),y=f*m-d*d;if(y===0)return u.set(0,0,0),null;const x=1/y,S=(m*p-d*_)*x,w=(f*_-d*p)*x;return u.set(1-S-w,w,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,n,r,a,u,f,d,p){return this.getBarycoord(e,n,r,a,Pi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Pi.x),p.addScaledVector(f,Pi.y),p.addScaledVector(d,Pi.z),p)}static getInterpolatedAttribute(e,n,r,a,u,f){return Bc.setScalar(0),zc.setScalar(0),Hc.setScalar(0),Bc.fromBufferAttribute(e,n),zc.fromBufferAttribute(e,r),Hc.fromBufferAttribute(e,a),f.setScalar(0),f.addScaledVector(Bc,u.x),f.addScaledVector(zc,u.y),f.addScaledVector(Hc,u.z),f}static isFrontFacing(e,n,r,a){return ti.subVectors(r,n),Ri.subVectors(e,n),ti.cross(Ri).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),ti.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ri.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return ri.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let f,d;ws.subVectors(a,r),As.subVectors(u,r),Fc.subVectors(e,r);const p=ws.dot(Fc),m=As.dot(Fc);if(p<=0&&m<=0)return n.copy(r);Oc.subVectors(e,a);const _=ws.dot(Oc),y=As.dot(Oc);if(_>=0&&y<=_)return n.copy(a);const x=p*y-_*m;if(x<=0&&p>=0&&_<=0)return f=p/(p-_),n.copy(r).addScaledVector(ws,f);kc.subVectors(e,u);const S=ws.dot(kc),w=As.dot(kc);if(w>=0&&S<=w)return n.copy(u);const C=S*m-p*w;if(C<=0&&m>=0&&w<=0)return d=m/(m-w),n.copy(r).addScaledVector(As,d);const g=_*w-S*y;if(g<=0&&y-_>=0&&S-w>=0)return $p.subVectors(u,a),d=(y-_)/(y-_+(S-w)),n.copy(a).addScaledVector($p,d);const v=1/(g+C+x);return f=C*v,d=x*v,n.copy(r).addScaledVector(ws,f).addScaledVector(As,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fr={h:0,s:0,l:0},nl={h:0,s:0,l:0};function Vc(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class yt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Mt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Mt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Mt.workingColorSpace){if(e=Jv(e,1),n=Tn(n,0,1),r=Tn(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,f=2*r-u;this.r=Vc(f,u,e+1/3),this.g=Vc(f,u,e),this.b=Vc(f,u,e-1/3)}return Mt.toWorkingColorSpace(this,a),this}setStyle(e,n=di){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=a[1],d=a[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=di){const r=Jm[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}copyLinearToSRGB(e){return this.r=Ac(e.r),this.g=Ac(e.g),this.b=Ac(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=di){return Mt.fromWorkingColorSpace(dn.copy(this),e),Math.round(Tn(dn.r*255,0,255))*65536+Math.round(Tn(dn.g*255,0,255))*256+Math.round(Tn(dn.b*255,0,255))}getHexString(e=di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Mt.workingColorSpace){Mt.fromWorkingColorSpace(dn.copy(this),n);const r=dn.r,a=dn.g,u=dn.b,f=Math.max(r,a,u),d=Math.min(r,a,u);let p,m;const _=(d+f)/2;if(d===f)p=0,m=0;else{const y=f-d;switch(m=_<=.5?y/(f+d):y/(2-f-d),f){case r:p=(a-u)/y+(a<u?6:0);break;case a:p=(u-r)/y+2;break;case u:p=(r-a)/y+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,n=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(dn.copy(this),n),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=di){Mt.fromWorkingColorSpace(dn.copy(this),e);const n=dn.r,r=dn.g,a=dn.b;return e!==di?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(fr),this.setHSL(fr.h+e,fr.s+n,fr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(fr),e.getHSL(nl);const r=Tc(fr.h,nl.h,n),a=Tc(fr.s,nl.s,n),u=Tc(fr.l,nl.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new yt;yt.NAMES=Jm;let _0=0;class Vs extends Hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=ko(),this.name="",this.type="Material",this.blending=Ds,this.side=gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ef,this.blendDst=tf,this.blendEquation=Br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(r.blending=this.blending),this.side!==gr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ef&&(r.blendSrc=this.blendSrc),this.blendDst!==tf&&(r.blendDst=this.blendDst),this.blendEquation!==Br&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Us&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(r.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}if(n){const u=a(e.textures),f=a(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class eg extends Vs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=Fm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new ee,il=new Ct;class Un{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Op,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)il.fromBufferAttribute(this,n),il.applyMatrix3(e),this.setXY(n,il.x,il.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Gt.fromBufferAttribute(this,n),Gt.applyMatrix3(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Gt.fromBufferAttribute(this,n),Gt.applyMatrix4(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Gt.fromBufferAttribute(this,n),Gt.applyNormalMatrix(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Gt.fromBufferAttribute(this,n),Gt.transformDirection(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ao(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=En(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ao(n,this.array)),n}setX(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ao(n,this.array)),n}setY(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ao(n,this.array)),n}setZ(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ao(n,this.array)),n}setW(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),r=En(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),r=En(r,this.array),a=En(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),r=En(r,this.array),a=En(a,this.array),u=En(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Op&&(e.usage=this.usage),e}}class tg extends Un{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class ng extends Un{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Ui extends Un{constructor(e,n,r){super(new Float32Array(e),n,r)}}let v0=0;const Gn=new Bt,Gc=new gn,Cs=new ee,In=new zo,Lo=new zo,en=new ee;class oi extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=ko(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Km(e)?ng:tg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new st().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,n,r){return Gn.makeTranslation(e,n,r),this.applyMatrix4(Gn),this}scale(e,n,r){return Gn.makeScale(e,n,r),this.applyMatrix4(Gn),this}lookAt(e){return Gc.lookAt(e),Gc.updateMatrix(),this.applyMatrix4(Gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){const n=[];for(let r=0,a=e.length;r<a;r++){const u=e[r];n.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new Ui(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];In.setFromBufferAttribute(u),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ho);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const r=this.boundingSphere.center;if(In.setFromBufferAttribute(e),n)for(let u=0,f=n.length;u<f;u++){const d=n[u];Lo.setFromBufferAttribute(d),this.morphTargetsRelative?(en.addVectors(In.min,Lo.min),In.expandByPoint(en),en.addVectors(In.max,Lo.max),In.expandByPoint(en)):(In.expandByPoint(Lo.min),In.expandByPoint(Lo.max))}In.getCenter(r);let a=0;for(let u=0,f=e.count;u<f;u++)en.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(en));if(n)for(let u=0,f=n.length;u<f;u++){const d=n[u],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)en.fromBufferAttribute(d,m),p&&(Cs.fromBufferAttribute(e,m),en.add(Cs)),a=Math.max(a,r.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Un(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let X=0;X<r.count;X++)d[X]=new ee,p[X]=new ee;const m=new ee,_=new ee,y=new ee,x=new Ct,S=new Ct,w=new Ct,C=new ee,g=new ee;function v(X,xe,E){m.fromBufferAttribute(r,X),_.fromBufferAttribute(r,xe),y.fromBufferAttribute(r,E),x.fromBufferAttribute(u,X),S.fromBufferAttribute(u,xe),w.fromBufferAttribute(u,E),_.sub(m),y.sub(m),S.sub(x),w.sub(x);const R=1/(S.x*w.y-w.x*S.y);isFinite(R)&&(C.copy(_).multiplyScalar(w.y).addScaledVector(y,-S.y).multiplyScalar(R),g.copy(y).multiplyScalar(S.x).addScaledVector(_,-w.x).multiplyScalar(R),d[X].add(C),d[xe].add(C),d[E].add(C),p[X].add(g),p[xe].add(g),p[E].add(g))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let X=0,xe=N.length;X<xe;++X){const E=N[X],R=E.start,ne=E.count;for(let J=R,oe=R+ne;J<oe;J+=3)v(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const P=new ee,D=new ee,Q=new ee,B=new ee;function U(X){Q.fromBufferAttribute(a,X),B.copy(Q);const xe=d[X];P.copy(xe),P.sub(Q.multiplyScalar(Q.dot(xe))).normalize(),D.crossVectors(B,xe);const R=D.dot(p[X])<0?-1:1;f.setXYZW(X,P.x,P.y,P.z,R)}for(let X=0,xe=N.length;X<xe;++X){const E=N[X],R=E.start,ne=E.count;for(let J=R,oe=R+ne;J<oe;J+=3)U(e.getX(J+0)),U(e.getX(J+1)),U(e.getX(J+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Un(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const a=new ee,u=new ee,f=new ee,d=new ee,p=new ee,m=new ee,_=new ee,y=new ee;if(e)for(let x=0,S=e.count;x<S;x+=3){const w=e.getX(x+0),C=e.getX(x+1),g=e.getX(x+2);a.fromBufferAttribute(n,w),u.fromBufferAttribute(n,C),f.fromBufferAttribute(n,g),_.subVectors(f,u),y.subVectors(a,u),_.cross(y),d.fromBufferAttribute(r,w),p.fromBufferAttribute(r,C),m.fromBufferAttribute(r,g),d.add(_),p.add(_),m.add(_),r.setXYZ(w,d.x,d.y,d.z),r.setXYZ(C,p.x,p.y,p.z),r.setXYZ(g,m.x,m.y,m.z)}else for(let x=0,S=n.count;x<S;x+=3)a.fromBufferAttribute(n,x+0),u.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),_.subVectors(f,u),y.subVectors(a,u),_.cross(y),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)en.fromBufferAttribute(e,n),en.normalize(),e.setXYZ(n,en.x,en.y,en.z)}toNonIndexed(){function e(d,p){const m=d.array,_=d.itemSize,y=d.normalized,x=new m.constructor(p.length*_);let S=0,w=0;for(let C=0,g=p.length;C<g;C++){d.isInterleavedBufferAttribute?S=p[C]*d.data.stride+d.offset:S=p[C]*_;for(let v=0;v<_;v++)x[w++]=m[S++]}return new Un(x,_,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new oi,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,r);n.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let _=0,y=m.length;_<y;_++){const x=m[_],S=e(x,r);p.push(S)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let y=0,x=m.length;y<x;y++){const S=m[y];_.push(S.toJSON(e.data))}_.length>0&&(a[p]=_,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const _=a[m];this.setAttribute(m,_.clone(n))}const u=e.morphAttributes;for(const m in u){const _=[],y=u[m];for(let x=0,S=y.length;x<S;x++)_.push(y[x].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,_=f.length;m<_;m++){const y=f[m];this.addGroup(y.start,y.count,y.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zp=new Bt,Nr=new ed,rl=new Ho,Qp=new ee,sl=new ee,ol=new ee,al=new ee,Wc=new ee,ll=new ee,Jp=new ee,ul=new ee;class Ii extends gn{constructor(e=new oi,n=new eg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(u&&d){ll.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const _=d[p],y=u[p];_!==0&&(Wc.fromBufferAttribute(y,e),f?ll.addScaledVector(Wc,_):ll.addScaledVector(Wc.sub(n),_))}n.add(ll)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),rl.copy(r.boundingSphere),rl.applyMatrix4(u),Nr.copy(e.ray).recast(e.near),!(rl.containsPoint(Nr.origin)===!1&&(Nr.intersectSphere(rl,Qp)===null||Nr.origin.distanceToSquared(Qp)>(e.far-e.near)**2))&&(Zp.copy(u).invert(),Nr.copy(e.ray).applyMatrix4(Zp),!(r.boundingBox!==null&&Nr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Nr)))}_computeIntersections(e,n,r){let a;const u=this.geometry,f=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,_=u.attributes.uv1,y=u.attributes.normal,x=u.groups,S=u.drawRange;if(d!==null)if(Array.isArray(f))for(let w=0,C=x.length;w<C;w++){const g=x[w],v=f[g.materialIndex],N=Math.max(g.start,S.start),P=Math.min(d.count,Math.min(g.start+g.count,S.start+S.count));for(let D=N,Q=P;D<Q;D+=3){const B=d.getX(D),U=d.getX(D+1),X=d.getX(D+2);a=cl(this,v,e,r,m,_,y,B,U,X),a&&(a.faceIndex=Math.floor(D/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const w=Math.max(0,S.start),C=Math.min(d.count,S.start+S.count);for(let g=w,v=C;g<v;g+=3){const N=d.getX(g),P=d.getX(g+1),D=d.getX(g+2);a=cl(this,f,e,r,m,_,y,N,P,D),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(f))for(let w=0,C=x.length;w<C;w++){const g=x[w],v=f[g.materialIndex],N=Math.max(g.start,S.start),P=Math.min(p.count,Math.min(g.start+g.count,S.start+S.count));for(let D=N,Q=P;D<Q;D+=3){const B=D,U=D+1,X=D+2;a=cl(this,v,e,r,m,_,y,B,U,X),a&&(a.faceIndex=Math.floor(D/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const w=Math.max(0,S.start),C=Math.min(p.count,S.start+S.count);for(let g=w,v=C;g<v;g+=3){const N=g,P=g+1,D=g+2;a=cl(this,f,e,r,m,_,y,N,P,D),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}}}function x0(s,e,n,r,a,u,f,d){let p;if(e.side===wn?p=r.intersectTriangle(f,u,a,!0,d):p=r.intersectTriangle(a,u,f,e.side===gr,d),p===null)return null;ul.copy(d),ul.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(ul);return m<n.near||m>n.far?null:{distance:m,point:ul.clone(),object:s}}function cl(s,e,n,r,a,u,f,d,p,m){s.getVertexPosition(d,sl),s.getVertexPosition(p,ol),s.getVertexPosition(m,al);const _=x0(s,e,n,r,sl,ol,al,Jp);if(_){const y=new ee;ri.getBarycoord(Jp,sl,ol,al,y),a&&(_.uv=ri.getInterpolatedAttribute(a,d,p,m,y,new Ct)),u&&(_.uv1=ri.getInterpolatedAttribute(u,d,p,m,y,new Ct)),f&&(_.normal=ri.getInterpolatedAttribute(f,d,p,m,y,new ee),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new ee,materialIndex:0};ri.getNormal(sl,ol,al,x.normal),_.face=x,_.barycoord=y}return _}class Vo extends oi{constructor(e=1,n=1,r=1,a=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:f};const d=this;a=Math.floor(a),u=Math.floor(u),f=Math.floor(f);const p=[],m=[],_=[],y=[];let x=0,S=0;w("z","y","x",-1,-1,r,n,e,f,u,0),w("z","y","x",1,-1,r,n,-e,f,u,1),w("x","z","y",1,1,e,r,n,a,f,2),w("x","z","y",1,-1,e,r,-n,a,f,3),w("x","y","z",1,-1,e,n,r,a,u,4),w("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(p),this.setAttribute("position",new Ui(m,3)),this.setAttribute("normal",new Ui(_,3)),this.setAttribute("uv",new Ui(y,2));function w(C,g,v,N,P,D,Q,B,U,X,xe){const E=D/U,R=Q/X,ne=D/2,J=Q/2,oe=B/2,he=U+1,te=X+1;let ae=0,k=0;const ue=new ee;for(let se=0;se<te;se++){const I=se*R-J;for(let ie=0;ie<he;ie++){const Ue=ie*E-ne;ue[C]=Ue*N,ue[g]=I*P,ue[v]=oe,m.push(ue.x,ue.y,ue.z),ue[C]=0,ue[g]=0,ue[v]=B>0?1:-1,_.push(ue.x,ue.y,ue.z),y.push(ie/U),y.push(1-se/X),ae+=1}}for(let se=0;se<X;se++)for(let I=0;I<U;I++){const ie=x+I+he*se,Ue=x+I+he*(se+1),q=x+(I+1)+he*(se+1),le=x+(I+1)+he*se;p.push(ie,Ue,le),p.push(Ue,q,le),k+=6}d.addGroup(S,k,xe),S+=k,x+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zs(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function mn(s){const e={};for(let n=0;n<s.length;n++){const r=zs(s[n]);for(const a in r)e[a]=r[a]}return e}function y0(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function ig(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const S0={clone:zs,merge:mn};var M0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,E0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends Vs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=M0,this.fragmentShader=E0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=y0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?n.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[a]={type:"m4",value:f.toArray()}:n.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class rg extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=Ni}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const dr=new ee,em=new Ct,tm=new Ct;class ni extends rg{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=zf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ec*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zf*2*Math.atan(Math.tan(Ec*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(dr.x,dr.y).multiplyScalar(-e/dr.z),dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(dr.x,dr.y).multiplyScalar(-e/dr.z)}getViewSize(e,n){return this.getViewBounds(e,em,tm),n.subVectors(tm,em)}setViewOffset(e,n,r,a,u,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ec*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;u+=f.offsetX*a/p,n-=f.offsetY*r/m,a*=f.width/p,r*=f.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Rs=-90,Ps=1;class T0 extends gn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ni(Rs,Ps,e,n);a.layers=this.layers,this.add(a);const u=new ni(Rs,Ps,e,n);u.layers=this.layers,this.add(u);const f=new ni(Rs,Ps,e,n);f.layers=this.layers,this.add(f);const d=new ni(Rs,Ps,e,n);d.layers=this.layers,this.add(d);const p=new ni(Rs,Ps,e,n);p.layers=this.layers,this.add(p);const m=new ni(Rs,Ps,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,f,d,p]=n;for(const m of n)this.remove(m);if(e===Ni)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Dl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,p,m,_]=this.children,y=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,f),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,a),e.render(n,_),e.setRenderTarget(y,x,S),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class sg extends An{constructor(e,n,r,a,u,f,d,p,m,_){e=e!==void 0?e:[],n=n!==void 0?n:Fs,super(e,n,r,a,u,f,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class w0 extends Wr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new sg(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ii}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Vo(5,5,5),u=new ki({name:"CubemapFromEquirect",uniforms:zs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:wn,blending:pr});u.uniforms.tEquirect.value=n;const f=new Ii(a,u),d=n.minFilter;return n.minFilter===Vr&&(n.minFilter=ii),new T0(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n,r,a){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,a);e.setRenderTarget(u)}}const Xc=new ee,A0=new ee,C0=new st;class Or{constructor(e=new ee(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Xc.subVectors(r,n).cross(A0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Xc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||C0.getNormalMatrix(e),a=this.coplanarPoint(Xc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ir=new Ho,fl=new ee;class og{constructor(e=new Or,n=new Or,r=new Or,a=new Or,u=new Or,f=new Or){this.planes=[e,n,r,a,u,f]}set(e,n,r,a,u,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(u),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Ni){const r=this.planes,a=e.elements,u=a[0],f=a[1],d=a[2],p=a[3],m=a[4],_=a[5],y=a[6],x=a[7],S=a[8],w=a[9],C=a[10],g=a[11],v=a[12],N=a[13],P=a[14],D=a[15];if(r[0].setComponents(p-u,x-m,g-S,D-v).normalize(),r[1].setComponents(p+u,x+m,g+S,D+v).normalize(),r[2].setComponents(p+f,x+_,g+w,D+N).normalize(),r[3].setComponents(p-f,x-_,g-w,D-N).normalize(),r[4].setComponents(p-d,x-y,g-C,D-P).normalize(),n===Ni)r[5].setComponents(p+d,x+y,g+C,D+P).normalize();else if(n===Dl)r[5].setComponents(d,y,C,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(e){return Ir.center.set(0,0,0),Ir.radius=.7071067811865476,Ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(fl.x=a.normal.x>0?e.max.x:e.min.x,fl.y=a.normal.y>0?e.max.y:e.min.y,fl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(fl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ag(){let s=null,e=!1,n=null,r=null;function a(u,f){n(u,f),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){s=u}}}function R0(s){const e=new WeakMap;function n(d,p){const m=d.array,_=d.usage,y=m.byteLength,x=s.createBuffer();s.bindBuffer(p,x),s.bufferData(p,m,_),d.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:y}}function r(d,p,m){const _=p.array,y=p.updateRanges;if(s.bindBuffer(m,d),y.length===0)s.bufferSubData(m,0,_);else{y.sort((S,w)=>S.start-w.start);let x=0;for(let S=1;S<y.length;S++){const w=y[x],C=y[S];C.start<=w.start+w.count+1?w.count=Math.max(w.count,C.start+C.count-w.start):(++x,y[x]=C)}y.length=x+1;for(let S=0,w=y.length;S<w;S++){const C=y[S];s.bufferSubData(m,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:a,remove:u,update:f}}class kl extends oi{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,f=n/2,d=Math.floor(r),p=Math.floor(a),m=d+1,_=p+1,y=e/d,x=n/p,S=[],w=[],C=[],g=[];for(let v=0;v<_;v++){const N=v*x-f;for(let P=0;P<m;P++){const D=P*y-u;w.push(D,-N,0),C.push(0,0,1),g.push(P/d),g.push(1-v/p)}}for(let v=0;v<p;v++)for(let N=0;N<d;N++){const P=N+m*v,D=N+m*(v+1),Q=N+1+m*(v+1),B=N+1+m*v;S.push(P,D,B),S.push(D,Q,B)}this.setIndex(S),this.setAttribute("position",new Ui(w,3)),this.setAttribute("normal",new Ui(C,3)),this.setAttribute("uv",new Ui(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kl(e.width,e.height,e.widthSegments,e.heightSegments)}}var P0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,b0=`#ifdef USE_ALPHAHASH
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
#endif`,L0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,D0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,N0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,I0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,U0=`#ifdef USE_AOMAP
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
#endif`,F0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,O0=`#ifdef USE_BATCHING
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
#endif`,k0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,B0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,z0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,H0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,V0=`#ifdef USE_IRIDESCENCE
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
#endif`,G0=`#ifdef USE_BUMPMAP
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
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,j0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,q0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,K0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Z0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Q0=`#define PI 3.141592653589793
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
} // validated`,J0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ex=`vec3 transformedNormal = objectNormal;
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
#endif`,tx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ix=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sx="gl_FragColor = linearToOutputTexel( gl_FragColor );",ox=`
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
}`,ax=`#ifdef USE_ENVMAP
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
#endif`,lx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ux=`#ifdef USE_ENVMAP
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
#endif`,cx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fx=`#ifdef USE_ENVMAP
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
#endif`,dx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,px=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gx=`#ifdef USE_GRADIENTMAP
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
}`,_x=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yx=`uniform bool receiveShadow;
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
#endif`,Sx=`#ifdef USE_ENVMAP
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
#endif`,Mx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ex=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ax=`PhysicalMaterial material;
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
#endif`,Cx=`struct PhysicalMaterial {
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
}`,Rx=`
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
#endif`,Px=`#if defined( RE_IndirectDiffuse )
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
#endif`,bx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ix=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ux=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ox=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kx=`#if defined( USE_POINTS_UV )
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
#endif`,Bx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wx=`#ifdef USE_MORPHTARGETS
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
#endif`,Xx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$x=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zx=`#ifdef USE_NORMALMAP
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
#endif`,Qx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ey=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ty=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ny=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ry=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ay=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ly=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hy=`float getShadowMask() {
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
}`,py=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,my=`#ifdef USE_SKINNING
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
#endif`,gy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_y=`#ifdef USE_SKINNING
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
#endif`,vy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,My=`#ifdef USE_TRANSMISSION
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
#endif`,Ey=`#ifdef USE_TRANSMISSION
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
#endif`,Ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ry=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Py=`uniform sampler2D t2D;
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
}`,by=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ly=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ny=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iy=`#include <common>
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
}`,Uy=`#if DEPTH_PACKING == 3200
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
}`,Fy=`#define DISTANCE
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
}`,Oy=`#define DISTANCE
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
}`,ky=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,By=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zy=`uniform float scale;
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
}`,Hy=`uniform vec3 diffuse;
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
}`,Vy=`#include <common>
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
}`,Gy=`uniform vec3 diffuse;
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
}`,Wy=`#define LAMBERT
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
}`,Xy=`#define LAMBERT
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
}`,jy=`#define MATCAP
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
}`,Yy=`#define MATCAP
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
}`,qy=`#define NORMAL
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
}`,Ky=`#define NORMAL
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
}`,$y=`#define PHONG
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
}`,Zy=`#define PHONG
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
}`,Qy=`#define STANDARD
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
}`,Jy=`#define STANDARD
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
}`,eS=`#define TOON
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
}`,tS=`#define TOON
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
}`,nS=`uniform float size;
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
}`,iS=`uniform vec3 diffuse;
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
}`,rS=`#include <common>
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
}`,sS=`uniform vec3 color;
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
}`,oS=`uniform float rotation;
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
}`,aS=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:P0,alphahash_pars_fragment:b0,alphamap_fragment:L0,alphamap_pars_fragment:D0,alphatest_fragment:N0,alphatest_pars_fragment:I0,aomap_fragment:U0,aomap_pars_fragment:F0,batching_pars_vertex:O0,batching_vertex:k0,begin_vertex:B0,beginnormal_vertex:z0,bsdfs:H0,iridescence_fragment:V0,bumpmap_pars_fragment:G0,clipping_planes_fragment:W0,clipping_planes_pars_fragment:X0,clipping_planes_pars_vertex:j0,clipping_planes_vertex:Y0,color_fragment:q0,color_pars_fragment:K0,color_pars_vertex:$0,color_vertex:Z0,common:Q0,cube_uv_reflection_fragment:J0,defaultnormal_vertex:ex,displacementmap_pars_vertex:tx,displacementmap_vertex:nx,emissivemap_fragment:ix,emissivemap_pars_fragment:rx,colorspace_fragment:sx,colorspace_pars_fragment:ox,envmap_fragment:ax,envmap_common_pars_fragment:lx,envmap_pars_fragment:ux,envmap_pars_vertex:cx,envmap_physical_pars_fragment:Sx,envmap_vertex:fx,fog_vertex:dx,fog_pars_vertex:hx,fog_fragment:px,fog_pars_fragment:mx,gradientmap_pars_fragment:gx,lightmap_pars_fragment:_x,lights_lambert_fragment:vx,lights_lambert_pars_fragment:xx,lights_pars_begin:yx,lights_toon_fragment:Mx,lights_toon_pars_fragment:Ex,lights_phong_fragment:Tx,lights_phong_pars_fragment:wx,lights_physical_fragment:Ax,lights_physical_pars_fragment:Cx,lights_fragment_begin:Rx,lights_fragment_maps:Px,lights_fragment_end:bx,logdepthbuf_fragment:Lx,logdepthbuf_pars_fragment:Dx,logdepthbuf_pars_vertex:Nx,logdepthbuf_vertex:Ix,map_fragment:Ux,map_pars_fragment:Fx,map_particle_fragment:Ox,map_particle_pars_fragment:kx,metalnessmap_fragment:Bx,metalnessmap_pars_fragment:zx,morphinstance_vertex:Hx,morphcolor_vertex:Vx,morphnormal_vertex:Gx,morphtarget_pars_vertex:Wx,morphtarget_vertex:Xx,normal_fragment_begin:jx,normal_fragment_maps:Yx,normal_pars_fragment:qx,normal_pars_vertex:Kx,normal_vertex:$x,normalmap_pars_fragment:Zx,clearcoat_normal_fragment_begin:Qx,clearcoat_normal_fragment_maps:Jx,clearcoat_pars_fragment:ey,iridescence_pars_fragment:ty,opaque_fragment:ny,packing:iy,premultiplied_alpha_fragment:ry,project_vertex:sy,dithering_fragment:oy,dithering_pars_fragment:ay,roughnessmap_fragment:ly,roughnessmap_pars_fragment:uy,shadowmap_pars_fragment:cy,shadowmap_pars_vertex:fy,shadowmap_vertex:dy,shadowmask_pars_fragment:hy,skinbase_vertex:py,skinning_pars_vertex:my,skinning_vertex:gy,skinnormal_vertex:_y,specularmap_fragment:vy,specularmap_pars_fragment:xy,tonemapping_fragment:yy,tonemapping_pars_fragment:Sy,transmission_fragment:My,transmission_pars_fragment:Ey,uv_pars_fragment:Ty,uv_pars_vertex:wy,uv_vertex:Ay,worldpos_vertex:Cy,background_vert:Ry,background_frag:Py,backgroundCube_vert:by,backgroundCube_frag:Ly,cube_vert:Dy,cube_frag:Ny,depth_vert:Iy,depth_frag:Uy,distanceRGBA_vert:Fy,distanceRGBA_frag:Oy,equirect_vert:ky,equirect_frag:By,linedashed_vert:zy,linedashed_frag:Hy,meshbasic_vert:Vy,meshbasic_frag:Gy,meshlambert_vert:Wy,meshlambert_frag:Xy,meshmatcap_vert:jy,meshmatcap_frag:Yy,meshnormal_vert:qy,meshnormal_frag:Ky,meshphong_vert:$y,meshphong_frag:Zy,meshphysical_vert:Qy,meshphysical_frag:Jy,meshtoon_vert:eS,meshtoon_frag:tS,points_vert:nS,points_frag:iS,shadow_vert:rS,shadow_frag:sS,sprite_vert:oS,sprite_frag:aS},Re={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},hi={basic:{uniforms:mn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:mn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new yt(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:mn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:mn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:mn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new yt(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:mn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:mn([Re.points,Re.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:mn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:mn([Re.common,Re.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:mn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:mn([Re.sprite,Re.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:mn([Re.common,Re.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:mn([Re.lights,Re.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};hi.physical={uniforms:mn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const dl={r:0,b:0,g:0},Ur=new Oi,lS=new Bt;function uS(s,e,n,r,a,u,f){const d=new yt(0);let p=u===!0?0:1,m,_,y=null,x=0,S=null;function w(N){let P=N.isScene===!0?N.background:null;return P&&P.isTexture&&(P=(N.backgroundBlurriness>0?n:e).get(P)),P}function C(N){let P=!1;const D=w(N);D===null?v(d,p):D&&D.isColor&&(v(D,1),P=!0);const Q=s.xr.getEnvironmentBlendMode();Q==="additive"?r.buffers.color.setClear(0,0,0,1,f):Q==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(N,P){const D=w(P);D&&(D.isCubeTexture||D.mapping===Fl)?(_===void 0&&(_=new Ii(new Vo(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:zs(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(Q,B,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),Ur.copy(P.backgroundRotation),Ur.x*=-1,Ur.y*=-1,Ur.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Ur.y*=-1,Ur.z*=-1),_.material.uniforms.envMap.value=D,_.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(lS.makeRotationFromEuler(Ur)),_.material.toneMapped=Mt.getTransfer(D.colorSpace)!==Dt,(y!==D||x!==D.version||S!==s.toneMapping)&&(_.material.needsUpdate=!0,y=D,x=D.version,S=s.toneMapping),_.layers.enableAll(),N.unshift(_,_.geometry,_.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new Ii(new kl(2,2),new ki({name:"BackgroundMaterial",uniforms:zs(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:gr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Mt.getTransfer(D.colorSpace)!==Dt,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(y!==D||x!==D.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,y=D,x=D.version,S=s.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null))}function v(N,P){N.getRGB(dl,ig(s)),r.buffers.color.setClear(dl.r,dl.g,dl.b,P,f)}return{getClearColor:function(){return d},setClearColor:function(N,P=1){d.set(N),p=P,v(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(N){p=N,v(d,p)},render:C,addToRenderList:g}}function cS(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let u=a,f=!1;function d(E,R,ne,J,oe){let he=!1;const te=y(J,ne,R);u!==te&&(u=te,m(u.object)),he=S(E,J,ne,oe),he&&w(E,J,ne,oe),oe!==null&&e.update(oe,s.ELEMENT_ARRAY_BUFFER),(he||f)&&(f=!1,D(E,R,ne,J),oe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(oe).buffer))}function p(){return s.createVertexArray()}function m(E){return s.bindVertexArray(E)}function _(E){return s.deleteVertexArray(E)}function y(E,R,ne){const J=ne.wireframe===!0;let oe=r[E.id];oe===void 0&&(oe={},r[E.id]=oe);let he=oe[R.id];he===void 0&&(he={},oe[R.id]=he);let te=he[J];return te===void 0&&(te=x(p()),he[J]=te),te}function x(E){const R=[],ne=[],J=[];for(let oe=0;oe<n;oe++)R[oe]=0,ne[oe]=0,J[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:ne,attributeDivisors:J,object:E,attributes:{},index:null}}function S(E,R,ne,J){const oe=u.attributes,he=R.attributes;let te=0;const ae=ne.getAttributes();for(const k in ae)if(ae[k].location>=0){const se=oe[k];let I=he[k];if(I===void 0&&(k==="instanceMatrix"&&E.instanceMatrix&&(I=E.instanceMatrix),k==="instanceColor"&&E.instanceColor&&(I=E.instanceColor)),se===void 0||se.attribute!==I||I&&se.data!==I.data)return!0;te++}return u.attributesNum!==te||u.index!==J}function w(E,R,ne,J){const oe={},he=R.attributes;let te=0;const ae=ne.getAttributes();for(const k in ae)if(ae[k].location>=0){let se=he[k];se===void 0&&(k==="instanceMatrix"&&E.instanceMatrix&&(se=E.instanceMatrix),k==="instanceColor"&&E.instanceColor&&(se=E.instanceColor));const I={};I.attribute=se,se&&se.data&&(I.data=se.data),oe[k]=I,te++}u.attributes=oe,u.attributesNum=te,u.index=J}function C(){const E=u.newAttributes;for(let R=0,ne=E.length;R<ne;R++)E[R]=0}function g(E){v(E,0)}function v(E,R){const ne=u.newAttributes,J=u.enabledAttributes,oe=u.attributeDivisors;ne[E]=1,J[E]===0&&(s.enableVertexAttribArray(E),J[E]=1),oe[E]!==R&&(s.vertexAttribDivisor(E,R),oe[E]=R)}function N(){const E=u.newAttributes,R=u.enabledAttributes;for(let ne=0,J=R.length;ne<J;ne++)R[ne]!==E[ne]&&(s.disableVertexAttribArray(ne),R[ne]=0)}function P(E,R,ne,J,oe,he,te){te===!0?s.vertexAttribIPointer(E,R,ne,oe,he):s.vertexAttribPointer(E,R,ne,J,oe,he)}function D(E,R,ne,J){C();const oe=J.attributes,he=ne.getAttributes(),te=R.defaultAttributeValues;for(const ae in he){const k=he[ae];if(k.location>=0){let ue=oe[ae];if(ue===void 0&&(ae==="instanceMatrix"&&E.instanceMatrix&&(ue=E.instanceMatrix),ae==="instanceColor"&&E.instanceColor&&(ue=E.instanceColor)),ue!==void 0){const se=ue.normalized,I=ue.itemSize,ie=e.get(ue);if(ie===void 0)continue;const Ue=ie.buffer,q=ie.type,le=ie.bytesPerElement,ve=q===s.INT||q===s.UNSIGNED_INT||ue.gpuType===Yf;if(ue.isInterleavedBufferAttribute){const ye=ue.data,Pe=ye.stride,be=ue.offset;if(ye.isInstancedInterleavedBuffer){for(let et=0;et<k.locationSize;et++)v(k.location+et,ye.meshPerAttribute);E.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let et=0;et<k.locationSize;et++)g(k.location+et);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let et=0;et<k.locationSize;et++)P(k.location+et,I/k.locationSize,q,se,Pe*le,(be+I/k.locationSize*et)*le,ve)}else{if(ue.isInstancedBufferAttribute){for(let ye=0;ye<k.locationSize;ye++)v(k.location+ye,ue.meshPerAttribute);E.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ye=0;ye<k.locationSize;ye++)g(k.location+ye);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let ye=0;ye<k.locationSize;ye++)P(k.location+ye,I/k.locationSize,q,se,I*le,I/k.locationSize*ye*le,ve)}}else if(te!==void 0){const se=te[ae];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(k.location,se);break;case 3:s.vertexAttrib3fv(k.location,se);break;case 4:s.vertexAttrib4fv(k.location,se);break;default:s.vertexAttrib1fv(k.location,se)}}}}N()}function Q(){X();for(const E in r){const R=r[E];for(const ne in R){const J=R[ne];for(const oe in J)_(J[oe].object),delete J[oe];delete R[ne]}delete r[E]}}function B(E){if(r[E.id]===void 0)return;const R=r[E.id];for(const ne in R){const J=R[ne];for(const oe in J)_(J[oe].object),delete J[oe];delete R[ne]}delete r[E.id]}function U(E){for(const R in r){const ne=r[R];if(ne[E.id]===void 0)continue;const J=ne[E.id];for(const oe in J)_(J[oe].object),delete J[oe];delete ne[E.id]}}function X(){xe(),f=!0,u!==a&&(u=a,m(u.object))}function xe(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:X,resetDefaultState:xe,dispose:Q,releaseStatesOfGeometry:B,releaseStatesOfProgram:U,initAttributes:C,enableAttribute:g,disableUnusedAttributes:N}}function fS(s,e,n){let r;function a(m){r=m}function u(m,_){s.drawArrays(r,m,_),n.update(_,r,1)}function f(m,_,y){y!==0&&(s.drawArraysInstanced(r,m,_,y),n.update(_,r,y))}function d(m,_,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,y);let S=0;for(let w=0;w<y;w++)S+=_[w];n.update(S,r,1)}function p(m,_,y,x){if(y===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let w=0;w<m.length;w++)f(m[w],_[w],x[w]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,_,0,x,0,y);let w=0;for(let C=0;C<y;C++)w+=_[C];for(let C=0;C<x.length;C++)n.update(w,r,x[C])}}this.setMode=a,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function dS(s,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function f(U){return!(U!==si&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(U){const X=U===Oo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Fi&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Di&&!X)}function p(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const y=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(x===!0){const U=e.get("EXT_clip_control");U.clipControlEXT(U.LOWER_LEFT_EXT,U.ZERO_TO_ONE_EXT)}const S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),N=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),D=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),Q=w>0,B=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:y,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:w,maxTextureSize:C,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:N,maxVaryings:P,maxFragmentUniforms:D,vertexTextures:Q,maxSamples:B}}function hS(s){const e=this;let n=null,r=0,a=!1,u=!1;const f=new Or,d=new st,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(y,x){const S=y.length!==0||x||r!==0||a;return a=x,r=y.length,S},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(y,x){n=_(y,x,0)},this.setState=function(y,x,S){const w=y.clippingPlanes,C=y.clipIntersection,g=y.clipShadows,v=s.get(y);if(!a||w===null||w.length===0||u&&!g)u?_(null):m();else{const N=u?0:r,P=N*4;let D=v.clippingState||null;p.value=D,D=_(w,x,P,S);for(let Q=0;Q!==P;++Q)D[Q]=n[Q];v.clippingState=D,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=N}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(y,x,S,w){const C=y!==null?y.length:0;let g=null;if(C!==0){if(g=p.value,w!==!0||g===null){const v=S+C*4,N=x.matrixWorldInverse;d.getNormalMatrix(N),(g===null||g.length<v)&&(g=new Float32Array(v));for(let P=0,D=S;P!==C;++P,D+=4)f.copy(y[P]).applyMatrix4(N,d),f.normal.toArray(g,D),g[D+3]=f.constant}p.value=g,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,g}}function pS(s){let e=new WeakMap;function n(f,d){return d===cf?f.mapping=Fs:d===ff&&(f.mapping=Os),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===cf||d===ff)if(e.has(f)){const p=e.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new w0(p.height);return m.fromEquirectangularTexture(s,f),e.set(f,m),f.addEventListener("dispose",a),n(m.texture,f.mapping)}else return null}}return f}function a(f){const d=f.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class lg extends rg{constructor(e=-1,n=1,r=1,a=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,f=r+e,d=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ls=4,nm=[.125,.215,.35,.446,.526,.582],zr=20,jc=new lg,im=new yt;let Yc=null,qc=0,Kc=0,$c=!1;const kr=(1+Math.sqrt(5))/2,bs=1/kr,rm=[new ee(-kr,bs,0),new ee(kr,bs,0),new ee(-bs,0,kr),new ee(bs,0,kr),new ee(0,kr,-bs),new ee(0,kr,bs),new ee(-1,1,-1),new ee(1,1,-1),new ee(-1,1,1),new ee(1,1,1)];class sm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Yc=this._renderer.getRenderTarget(),qc=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel(),$c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,a,u),n>0&&this._blur(u,0,0,n),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=am(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yc,qc,Kc),this._renderer.xr.enabled=$c,e.scissorTest=!1,hl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Fs||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yc=this._renderer.getRenderTarget(),qc=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel(),$c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:ii,minFilter:ii,generateMipmaps:!1,type:Oo,format:si,colorSpace:_r,depthBuffer:!1},a=om(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=om(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mS(u)),this._blurMaterial=gS(u,e,n)}return a}_compileMaterial(e){const n=new Ii(this._lodPlanes[0],e);this._renderer.compile(n,jc)}_sceneToCubeUV(e,n,r,a){const d=new ni(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,y=_.autoClear,x=_.toneMapping;_.getClearColor(im),_.toneMapping=mr,_.autoClear=!1;const S=new eg({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1}),w=new Ii(new Vo,S);let C=!1;const g=e.background;g?g.isColor&&(S.color.copy(g),e.background=null,C=!0):(S.color.copy(im),C=!0);for(let v=0;v<6;v++){const N=v%3;N===0?(d.up.set(0,p[v],0),d.lookAt(m[v],0,0)):N===1?(d.up.set(0,0,p[v]),d.lookAt(0,m[v],0)):(d.up.set(0,p[v],0),d.lookAt(0,0,m[v]));const P=this._cubeSize;hl(a,N*P,v>2?P:0,P,P),_.setRenderTarget(a),C&&_.render(w,d),_.render(e,d)}w.geometry.dispose(),w.material.dispose(),_.toneMapping=x,_.autoClear=y,e.background=g}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Fs||e.mapping===Os;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=lm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=am());const u=a?this._cubemapMaterial:this._equirectMaterial,f=new Ii(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;hl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(f,jc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=rm[(a-u-1)%rm.length];this._blur(e,u-1,u,f,d)}n.autoClear=r}_blur(e,n,r,a,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,a,"latitudinal",u),this._halfBlur(f,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,y=new Ii(this._lodPlanes[a],m),x=m.uniforms,S=this._sizeLods[r]-1,w=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*zr-1),C=u/w,g=isFinite(u)?1+Math.floor(_*C):zr;g>zr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${zr}`);const v=[];let N=0;for(let U=0;U<zr;++U){const X=U/C,xe=Math.exp(-X*X/2);v.push(xe),U===0?N+=xe:U<g&&(N+=2*xe)}for(let U=0;U<v.length;U++)v[U]=v[U]/N;x.envMap.value=e.texture,x.samples.value=g,x.weights.value=v,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:P}=this;x.dTheta.value=w,x.mipInt.value=P-r;const D=this._sizeLods[a],Q=3*D*(a>P-Ls?a-P+Ls:0),B=4*(this._cubeSize-D);hl(n,Q,B,3*D,2*D),p.setRenderTarget(n),p.render(y,jc)}}function mS(s){const e=[],n=[],r=[];let a=s;const u=s-Ls+1+nm.length;for(let f=0;f<u;f++){const d=Math.pow(2,a);n.push(d);let p=1/d;f>s-Ls?p=nm[f-s+Ls-1]:f===0&&(p=0),r.push(p);const m=1/(d-2),_=-m,y=1+m,x=[_,_,y,_,y,y,_,_,y,y,_,y],S=6,w=6,C=3,g=2,v=1,N=new Float32Array(C*w*S),P=new Float32Array(g*w*S),D=new Float32Array(v*w*S);for(let B=0;B<S;B++){const U=B%3*2/3-1,X=B>2?0:-1,xe=[U,X,0,U+2/3,X,0,U+2/3,X+1,0,U,X,0,U+2/3,X+1,0,U,X+1,0];N.set(xe,C*w*B),P.set(x,g*w*B);const E=[B,B,B,B,B,B];D.set(E,v*w*B)}const Q=new oi;Q.setAttribute("position",new Un(N,C)),Q.setAttribute("uv",new Un(P,g)),Q.setAttribute("faceIndex",new Un(D,v)),e.push(Q),a>Ls&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function om(s,e,n){const r=new Wr(s,e,n);return r.texture.mapping=Fl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function hl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function gS(s,e,n){const r=new Float32Array(zr),a=new ee(0,1,0);return new ki({name:"SphericalGaussianBlur",defines:{n:zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:td(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function am(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:td(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function lm(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function td(){return`

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
	`}function _S(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===cf||p===ff,_=p===Fs||p===Os;if(m||_){let y=e.get(d);const x=y!==void 0?y.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new sm(s)),y=m?n.fromEquirectangular(d,y):n.fromCubemap(d,y),y.texture.pmremVersion=d.pmremVersion,e.set(d,y),y.texture;if(y!==void 0)return y.texture;{const S=d.image;return m&&S&&S.height>0||_&&S&&a(S)?(n===null&&(n=new sm(s)),y=m?n.fromEquirectangular(d):n.fromCubemap(d),y.texture.pmremVersion=d.pmremVersion,e.set(d,y),d.addEventListener("dispose",u),y.texture):null}}}return d}function a(d){let p=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function vS(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Al("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function xS(s,e,n,r){const a={},u=new WeakMap;function f(y){const x=y.target;x.index!==null&&e.remove(x.index);for(const w in x.attributes)e.remove(x.attributes[w]);for(const w in x.morphAttributes){const C=x.morphAttributes[w];for(let g=0,v=C.length;g<v;g++)e.remove(C[g])}x.removeEventListener("dispose",f),delete a[x.id];const S=u.get(x);S&&(e.remove(S),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(y,x){return a[x.id]===!0||(x.addEventListener("dispose",f),a[x.id]=!0,n.memory.geometries++),x}function p(y){const x=y.attributes;for(const w in x)e.update(x[w],s.ARRAY_BUFFER);const S=y.morphAttributes;for(const w in S){const C=S[w];for(let g=0,v=C.length;g<v;g++)e.update(C[g],s.ARRAY_BUFFER)}}function m(y){const x=[],S=y.index,w=y.attributes.position;let C=0;if(S!==null){const N=S.array;C=S.version;for(let P=0,D=N.length;P<D;P+=3){const Q=N[P+0],B=N[P+1],U=N[P+2];x.push(Q,B,B,U,U,Q)}}else if(w!==void 0){const N=w.array;C=w.version;for(let P=0,D=N.length/3-1;P<D;P+=3){const Q=P+0,B=P+1,U=P+2;x.push(Q,B,B,U,U,Q)}}else return;const g=new(Km(x)?ng:tg)(x,1);g.version=C;const v=u.get(y);v&&e.remove(v),u.set(y,g)}function _(y){const x=u.get(y);if(x){const S=y.index;S!==null&&x.version<S.version&&m(y)}else m(y);return u.get(y)}return{get:d,update:p,getWireframeAttribute:_}}function yS(s,e,n){let r;function a(x){r=x}let u,f;function d(x){u=x.type,f=x.bytesPerElement}function p(x,S){s.drawElements(r,S,u,x*f),n.update(S,r,1)}function m(x,S,w){w!==0&&(s.drawElementsInstanced(r,S,u,x*f,w),n.update(S,r,w))}function _(x,S,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,u,x,0,w);let g=0;for(let v=0;v<w;v++)g+=S[v];n.update(g,r,1)}function y(x,S,w,C){if(w===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<x.length;v++)m(x[v]/f,S[v],C[v]);else{g.multiDrawElementsInstancedWEBGL(r,S,0,u,x,0,C,0,w);let v=0;for(let N=0;N<w;N++)v+=S[N];for(let N=0;N<C.length;N++)n.update(v,r,C[N])}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=y}function SS(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(n.calls++,f){case s.TRIANGLES:n.triangles+=d*(u/3);break;case s.LINES:n.lines+=d*(u/2);break;case s.LINE_STRIP:n.lines+=d*(u-1);break;case s.LINE_LOOP:n.lines+=d*u;break;case s.POINTS:n.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function MS(s,e,n){const r=new WeakMap,a=new Ht;function u(f,d,p){const m=f.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=_!==void 0?_.length:0;let x=r.get(d);if(x===void 0||x.count!==y){let E=function(){X.dispose(),r.delete(d),d.removeEventListener("dispose",E)};var S=E;x!==void 0&&x.texture.dispose();const w=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,g=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let D=0;w===!0&&(D=1),C===!0&&(D=2),g===!0&&(D=3);let Q=d.attributes.position.count*D,B=1;Q>e.maxTextureSize&&(B=Math.ceil(Q/e.maxTextureSize),Q=e.maxTextureSize);const U=new Float32Array(Q*B*4*y),X=new Zm(U,Q,B,y);X.type=Di,X.needsUpdate=!0;const xe=D*4;for(let R=0;R<y;R++){const ne=v[R],J=N[R],oe=P[R],he=Q*B*4*R;for(let te=0;te<ne.count;te++){const ae=te*xe;w===!0&&(a.fromBufferAttribute(ne,te),U[he+ae+0]=a.x,U[he+ae+1]=a.y,U[he+ae+2]=a.z,U[he+ae+3]=0),C===!0&&(a.fromBufferAttribute(J,te),U[he+ae+4]=a.x,U[he+ae+5]=a.y,U[he+ae+6]=a.z,U[he+ae+7]=0),g===!0&&(a.fromBufferAttribute(oe,te),U[he+ae+8]=a.x,U[he+ae+9]=a.y,U[he+ae+10]=a.z,U[he+ae+11]=oe.itemSize===4?a.w:1)}}x={count:y,texture:X,size:new Ct(Q,B)},r.set(d,x),d.addEventListener("dispose",E)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",f.morphTexture,n);else{let w=0;for(let g=0;g<m.length;g++)w+=m[g];const C=d.morphTargetsRelative?1:1-w;p.getUniforms().setValue(s,"morphTargetBaseInfluence",C),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:u}}function ES(s,e,n,r){let a=new WeakMap;function u(p){const m=r.render.frame,_=p.geometry,y=e.get(p,_);if(a.get(y)!==m&&(e.update(y),a.set(y,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==m&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return y}function f(){a=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:f}}class ug extends An{constructor(e,n,r,a,u,f,d,p,m,_=Ns){if(_!==Ns&&_!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===Ns&&(r=Gr),r===void 0&&_===Bs&&(r=ks),super(null,a,u,f,d,p,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:Xn,this.minFilter=p!==void 0?p:Xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const cg=new An,um=new ug(1,1),fg=new Zm,dg=new u0,hg=new sg,cm=[],fm=[],dm=new Float32Array(16),hm=new Float32Array(9),pm=new Float32Array(4);function Gs(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let u=cm[a];if(u===void 0&&(u=new Float32Array(a),cm[a]=u),e!==0){r.toArray(u,0);for(let f=1,d=0;f!==e;++f)d+=n,s[f].toArray(u,d)}return u}function Yt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function qt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Bl(s,e){let n=fm[e];n===void 0&&(n=new Int32Array(e),fm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function TS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function wS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;s.uniform2fv(this.addr,e),qt(n,e)}}function AS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Yt(n,e))return;s.uniform3fv(this.addr,e),qt(n,e)}}function CS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;s.uniform4fv(this.addr,e),qt(n,e)}}function RS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Yt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),qt(n,e)}else{if(Yt(n,r))return;pm.set(r),s.uniformMatrix2fv(this.addr,!1,pm),qt(n,r)}}function PS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Yt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),qt(n,e)}else{if(Yt(n,r))return;hm.set(r),s.uniformMatrix3fv(this.addr,!1,hm),qt(n,r)}}function bS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Yt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),qt(n,e)}else{if(Yt(n,r))return;dm.set(r),s.uniformMatrix4fv(this.addr,!1,dm),qt(n,r)}}function LS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function DS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;s.uniform2iv(this.addr,e),qt(n,e)}}function NS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Yt(n,e))return;s.uniform3iv(this.addr,e),qt(n,e)}}function IS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;s.uniform4iv(this.addr,e),qt(n,e)}}function US(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function FS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;s.uniform2uiv(this.addr,e),qt(n,e)}}function OS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Yt(n,e))return;s.uniform3uiv(this.addr,e),qt(n,e)}}function kS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;s.uniform4uiv(this.addr,e),qt(n,e)}}function BS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let u;this.type===s.SAMPLER_2D_SHADOW?(um.compareFunction=qm,u=um):u=cg,n.setTexture2D(e||u,a)}function zS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||dg,a)}function HS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||hg,a)}function VS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||fg,a)}function GS(s){switch(s){case 5126:return TS;case 35664:return wS;case 35665:return AS;case 35666:return CS;case 35674:return RS;case 35675:return PS;case 35676:return bS;case 5124:case 35670:return LS;case 35667:case 35671:return DS;case 35668:case 35672:return NS;case 35669:case 35673:return IS;case 5125:return US;case 36294:return FS;case 36295:return OS;case 36296:return kS;case 35678:case 36198:case 36298:case 36306:case 35682:return BS;case 35679:case 36299:case 36307:return zS;case 35680:case 36300:case 36308:case 36293:return HS;case 36289:case 36303:case 36311:case 36292:return VS}}function WS(s,e){s.uniform1fv(this.addr,e)}function XS(s,e){const n=Gs(e,this.size,2);s.uniform2fv(this.addr,n)}function jS(s,e){const n=Gs(e,this.size,3);s.uniform3fv(this.addr,n)}function YS(s,e){const n=Gs(e,this.size,4);s.uniform4fv(this.addr,n)}function qS(s,e){const n=Gs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function KS(s,e){const n=Gs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function $S(s,e){const n=Gs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function ZS(s,e){s.uniform1iv(this.addr,e)}function QS(s,e){s.uniform2iv(this.addr,e)}function JS(s,e){s.uniform3iv(this.addr,e)}function eM(s,e){s.uniform4iv(this.addr,e)}function tM(s,e){s.uniform1uiv(this.addr,e)}function nM(s,e){s.uniform2uiv(this.addr,e)}function iM(s,e){s.uniform3uiv(this.addr,e)}function rM(s,e){s.uniform4uiv(this.addr,e)}function sM(s,e,n){const r=this.cache,a=e.length,u=Bl(n,a);Yt(r,u)||(s.uniform1iv(this.addr,u),qt(r,u));for(let f=0;f!==a;++f)n.setTexture2D(e[f]||cg,u[f])}function oM(s,e,n){const r=this.cache,a=e.length,u=Bl(n,a);Yt(r,u)||(s.uniform1iv(this.addr,u),qt(r,u));for(let f=0;f!==a;++f)n.setTexture3D(e[f]||dg,u[f])}function aM(s,e,n){const r=this.cache,a=e.length,u=Bl(n,a);Yt(r,u)||(s.uniform1iv(this.addr,u),qt(r,u));for(let f=0;f!==a;++f)n.setTextureCube(e[f]||hg,u[f])}function lM(s,e,n){const r=this.cache,a=e.length,u=Bl(n,a);Yt(r,u)||(s.uniform1iv(this.addr,u),qt(r,u));for(let f=0;f!==a;++f)n.setTexture2DArray(e[f]||fg,u[f])}function uM(s){switch(s){case 5126:return WS;case 35664:return XS;case 35665:return jS;case 35666:return YS;case 35674:return qS;case 35675:return KS;case 35676:return $S;case 5124:case 35670:return ZS;case 35667:case 35671:return QS;case 35668:case 35672:return JS;case 35669:case 35673:return eM;case 5125:return tM;case 36294:return nM;case 36295:return iM;case 36296:return rM;case 35678:case 36198:case 36298:case 36306:case 35682:return sM;case 35679:case 36299:case 36307:return oM;case 35680:case 36300:case 36308:case 36293:return aM;case 36289:case 36303:case 36311:case 36292:return lM}}class cM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=GS(n.type)}}class fM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=uM(n.type)}}class dM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,f=a.length;u!==f;++u){const d=a[u];d.setValue(e,n[d.id],r)}}}const Zc=/(\w+)(\])?(\[|\.)?/g;function mm(s,e){s.seq.push(e),s.map[e.id]=e}function hM(s,e,n){const r=s.name,a=r.length;for(Zc.lastIndex=0;;){const u=Zc.exec(r),f=Zc.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===a){mm(n,m===void 0?new cM(d,s,e):new fM(d,s,e));break}else{let y=n.map[d];y===void 0&&(y=new dM(d),mm(n,y)),n=y}}}class Cl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),f=e.getUniformLocation(n,u.name);hM(u,f,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,f=n.length;u!==f;++u){const d=n[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const f=e[a];f.id in n&&r.push(f)}return r}}function gm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const pM=37297;let mM=0;function gM(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let f=a;f<u;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}function _M(s){const e=Mt.getPrimaries(Mt.workingColorSpace),n=Mt.getPrimaries(s);let r;switch(e===n?r="":e===Ll&&n===bl?r="LinearDisplayP3ToLinearSRGB":e===bl&&n===Ll&&(r="LinearSRGBToLinearDisplayP3"),s){case _r:case Ol:return[r,"LinearTransferOETF"];case di:case Jf:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[r,"LinearTransferOETF"]}}function _m(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+gM(s.getShaderSource(e),f)}else return a}function vM(s,e){const n=_M(e);return`vec4 ${s}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function xM(s,e){let n;switch(e){case Iv:n="Linear";break;case Uv:n="Reinhard";break;case Fv:n="Cineon";break;case Ov:n="ACESFilmic";break;case Bv:n="AgX";break;case zv:n="Neutral";break;case kv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const pl=new ee;function yM(){Mt.getLuminanceCoefficients(pl);const s=pl.x.toFixed(4),e=pl.y.toFixed(4),n=pl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function SM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function MM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function EM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=s.getActiveAttrib(e,a),f=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),n[f]={type:u.type,location:s.getAttribLocation(e,f),locationSize:d}}return n}function Io(s){return s!==""}function vm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const TM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hf(s){return s.replace(TM,AM)}const wM=new Map;function AM(s,e){let n=rt[e];if(n===void 0){const r=wM.get(e);if(r!==void 0)n=rt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Hf(n)}const CM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ym(s){return s.replace(CM,RM)}function RM(s,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function Sm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function PM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Um?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===hv?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function bM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Fs:case Os:e="ENVMAP_TYPE_CUBE";break;case Fl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function LM(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Os&&(e="ENVMAP_MODE_REFRACTION"),e}function DM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Fm:e="ENVMAP_BLENDING_MULTIPLY";break;case Dv:e="ENVMAP_BLENDING_MIX";break;case Nv:e="ENVMAP_BLENDING_ADD";break}return e}function NM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function IM(s,e,n,r){const a=s.getContext(),u=n.defines;let f=n.vertexShader,d=n.fragmentShader;const p=PM(n),m=bM(n),_=LM(n),y=DM(n),x=NM(n),S=SM(n),w=MM(u),C=a.createProgram();let g,v,N=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Io).join(`
`),g.length>0&&(g+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Io).join(`
`),v.length>0&&(v+=`
`)):(g=[Sm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),v=[Sm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+y:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==mr?"#define TONE_MAPPING":"",n.toneMapping!==mr?rt.tonemapping_pars_fragment:"",n.toneMapping!==mr?xM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,vM("linearToOutputTexel",n.outputColorSpace),yM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Io).join(`
`)),f=Hf(f),f=vm(f,n),f=xm(f,n),d=Hf(d),d=vm(d,n),d=xm(d,n),f=ym(f),d=ym(d),n.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,g=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,v=["#define varying in",n.glslVersion===kp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===kp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const P=N+g+f,D=N+v+d,Q=gm(a,a.VERTEX_SHADER,P),B=gm(a,a.FRAGMENT_SHADER,D);a.attachShader(C,Q),a.attachShader(C,B),n.index0AttributeName!==void 0?a.bindAttribLocation(C,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(C,0,"position"),a.linkProgram(C);function U(R){if(s.debug.checkShaderErrors){const ne=a.getProgramInfoLog(C).trim(),J=a.getShaderInfoLog(Q).trim(),oe=a.getShaderInfoLog(B).trim();let he=!0,te=!0;if(a.getProgramParameter(C,a.LINK_STATUS)===!1)if(he=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,C,Q,B);else{const ae=_m(a,Q,"vertex"),k=_m(a,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(C,a.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+ne+`
`+ae+`
`+k)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(J===""||oe==="")&&(te=!1);te&&(R.diagnostics={runnable:he,programLog:ne,vertexShader:{log:J,prefix:g},fragmentShader:{log:oe,prefix:v}})}a.deleteShader(Q),a.deleteShader(B),X=new Cl(a,C),xe=EM(a,C)}let X;this.getUniforms=function(){return X===void 0&&U(this),X};let xe;this.getAttributes=function(){return xe===void 0&&U(this),xe};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=a.getProgramParameter(C,pM)),E},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(C),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=mM++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=Q,this.fragmentShader=B,this}let UM=0;class FM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new OM(e),n.set(e,r)),r}}class OM{constructor(e){this.id=UM++,this.code=e,this.usedTimes=0}}function kM(s,e,n,r,a,u,f){const d=new Qm,p=new FM,m=new Set,_=[],y=a.logarithmicDepthBuffer,x=a.reverseDepthBuffer,S=a.vertexTextures;let w=a.precision;const C={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return m.add(E),E===0?"uv":`uv${E}`}function v(E,R,ne,J,oe){const he=J.fog,te=oe.geometry,ae=E.isMeshStandardMaterial?J.environment:null,k=(E.isMeshStandardMaterial?n:e).get(E.envMap||ae),ue=k&&k.mapping===Fl?k.image.height:null,se=C[E.type];E.precision!==null&&(w=a.getMaxPrecision(E.precision),w!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",w,"instead."));const I=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,ie=I!==void 0?I.length:0;let Ue=0;te.morphAttributes.position!==void 0&&(Ue=1),te.morphAttributes.normal!==void 0&&(Ue=2),te.morphAttributes.color!==void 0&&(Ue=3);let q,le,ve,ye;if(se){const Kt=hi[se];q=Kt.vertexShader,le=Kt.fragmentShader}else q=E.vertexShader,le=E.fragmentShader,p.update(E),ve=p.getVertexShaderID(E),ye=p.getFragmentShaderID(E);const Pe=s.getRenderTarget(),be=oe.isInstancedMesh===!0,et=oe.isBatchedMesh===!0,pt=!!E.map,lt=!!E.matcap,O=!!k,tn=!!E.aoMap,at=!!E.lightMap,ft=!!E.bumpMap,$e=!!E.normalMap,Tt=!!E.displacementMap,Qe=!!E.emissiveMap,b=!!E.metalnessMap,T=!!E.roughnessMap,Y=E.anisotropy>0,fe=E.clearcoat>0,ge=E.dispersion>0,ce=E.iridescence>0,je=E.sheen>0,Ae=E.transmission>0,Fe=Y&&!!E.anisotropyMap,dt=fe&&!!E.clearcoatMap,Se=fe&&!!E.clearcoatNormalMap,Oe=fe&&!!E.clearcoatRoughnessMap,tt=ce&&!!E.iridescenceMap,Je=ce&&!!E.iridescenceThicknessMap,Be=je&&!!E.sheenColorMap,ut=je&&!!E.sheenRoughnessMap,it=!!E.specularMap,St=!!E.specularColorMap,H=!!E.specularIntensityMap,Le=Ae&&!!E.transmissionMap,re=Ae&&!!E.thicknessMap,de=!!E.gradientMap,Ce=!!E.alphaMap,Ne=E.alphaTest>0,ct=!!E.alphaHash,Ut=!!E.extensions;let nn=mr;E.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(nn=s.toneMapping);const ht={shaderID:se,shaderType:E.type,shaderName:E.name,vertexShader:q,fragmentShader:le,defines:E.defines,customVertexShaderID:ve,customFragmentShaderID:ye,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:w,batching:et,batchingColor:et&&oe._colorsTexture!==null,instancing:be,instancingColor:be&&oe.instanceColor!==null,instancingMorph:be&&oe.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:Pe===null?s.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:_r,alphaToCoverage:!!E.alphaToCoverage,map:pt,matcap:lt,envMap:O,envMapMode:O&&k.mapping,envMapCubeUVHeight:ue,aoMap:tn,lightMap:at,bumpMap:ft,normalMap:$e,displacementMap:S&&Tt,emissiveMap:Qe,normalMapObjectSpace:$e&&E.normalMapType===Xv,normalMapTangentSpace:$e&&E.normalMapType===Wv,metalnessMap:b,roughnessMap:T,anisotropy:Y,anisotropyMap:Fe,clearcoat:fe,clearcoatMap:dt,clearcoatNormalMap:Se,clearcoatRoughnessMap:Oe,dispersion:ge,iridescence:ce,iridescenceMap:tt,iridescenceThicknessMap:Je,sheen:je,sheenColorMap:Be,sheenRoughnessMap:ut,specularMap:it,specularColorMap:St,specularIntensityMap:H,transmission:Ae,transmissionMap:Le,thicknessMap:re,gradientMap:de,opaque:E.transparent===!1&&E.blending===Ds&&E.alphaToCoverage===!1,alphaMap:Ce,alphaTest:Ne,alphaHash:ct,combine:E.combine,mapUv:pt&&g(E.map.channel),aoMapUv:tn&&g(E.aoMap.channel),lightMapUv:at&&g(E.lightMap.channel),bumpMapUv:ft&&g(E.bumpMap.channel),normalMapUv:$e&&g(E.normalMap.channel),displacementMapUv:Tt&&g(E.displacementMap.channel),emissiveMapUv:Qe&&g(E.emissiveMap.channel),metalnessMapUv:b&&g(E.metalnessMap.channel),roughnessMapUv:T&&g(E.roughnessMap.channel),anisotropyMapUv:Fe&&g(E.anisotropyMap.channel),clearcoatMapUv:dt&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:Se&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:ut&&g(E.sheenRoughnessMap.channel),specularMapUv:it&&g(E.specularMap.channel),specularColorMapUv:St&&g(E.specularColorMap.channel),specularIntensityMapUv:H&&g(E.specularIntensityMap.channel),transmissionMapUv:Le&&g(E.transmissionMap.channel),thicknessMapUv:re&&g(E.thicknessMap.channel),alphaMapUv:Ce&&g(E.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&($e||Y),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:oe.isPoints===!0&&!!te.attributes.uv&&(pt||Ce),fog:!!he,useFog:E.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:y,reverseDepthBuffer:x,skinning:oe.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:Ue,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&ne.length>0,shadowMapType:s.shadowMap.type,toneMapping:nn,decodeVideoTexture:pt&&E.map.isVideoTexture===!0&&Mt.getTransfer(E.map.colorSpace)===Dt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Li,flipSided:E.side===wn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ut&&E.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&E.extensions.multiDraw===!0||et)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ht.vertexUv1s=m.has(1),ht.vertexUv2s=m.has(2),ht.vertexUv3s=m.has(3),m.clear(),ht}function N(E){const R=[];if(E.shaderID?R.push(E.shaderID):(R.push(E.customVertexShaderID),R.push(E.customFragmentShaderID)),E.defines!==void 0)for(const ne in E.defines)R.push(ne),R.push(E.defines[ne]);return E.isRawShaderMaterial===!1&&(P(R,E),D(R,E),R.push(s.outputColorSpace)),R.push(E.customProgramCacheKey),R.join()}function P(E,R){E.push(R.precision),E.push(R.outputColorSpace),E.push(R.envMapMode),E.push(R.envMapCubeUVHeight),E.push(R.mapUv),E.push(R.alphaMapUv),E.push(R.lightMapUv),E.push(R.aoMapUv),E.push(R.bumpMapUv),E.push(R.normalMapUv),E.push(R.displacementMapUv),E.push(R.emissiveMapUv),E.push(R.metalnessMapUv),E.push(R.roughnessMapUv),E.push(R.anisotropyMapUv),E.push(R.clearcoatMapUv),E.push(R.clearcoatNormalMapUv),E.push(R.clearcoatRoughnessMapUv),E.push(R.iridescenceMapUv),E.push(R.iridescenceThicknessMapUv),E.push(R.sheenColorMapUv),E.push(R.sheenRoughnessMapUv),E.push(R.specularMapUv),E.push(R.specularColorMapUv),E.push(R.specularIntensityMapUv),E.push(R.transmissionMapUv),E.push(R.thicknessMapUv),E.push(R.combine),E.push(R.fogExp2),E.push(R.sizeAttenuation),E.push(R.morphTargetsCount),E.push(R.morphAttributeCount),E.push(R.numDirLights),E.push(R.numPointLights),E.push(R.numSpotLights),E.push(R.numSpotLightMaps),E.push(R.numHemiLights),E.push(R.numRectAreaLights),E.push(R.numDirLightShadows),E.push(R.numPointLightShadows),E.push(R.numSpotLightShadows),E.push(R.numSpotLightShadowsWithMaps),E.push(R.numLightProbes),E.push(R.shadowMapType),E.push(R.toneMapping),E.push(R.numClippingPlanes),E.push(R.numClipIntersection),E.push(R.depthPacking)}function D(E,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),E.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.alphaToCoverage&&d.enable(20),E.push(d.mask)}function Q(E){const R=C[E.type];let ne;if(R){const J=hi[R];ne=S0.clone(J.uniforms)}else ne=E.uniforms;return ne}function B(E,R){let ne;for(let J=0,oe=_.length;J<oe;J++){const he=_[J];if(he.cacheKey===R){ne=he,++ne.usedTimes;break}}return ne===void 0&&(ne=new IM(s,R,E,u),_.push(ne)),ne}function U(E){if(--E.usedTimes===0){const R=_.indexOf(E);_[R]=_[_.length-1],_.pop(),E.destroy()}}function X(E){p.remove(E)}function xe(){p.dispose()}return{getParameters:v,getProgramCacheKey:N,getUniforms:Q,acquireProgram:B,releaseProgram:U,releaseShaderCache:X,programs:_,dispose:xe}}function BM(){let s=new WeakMap;function e(f){return s.has(f)}function n(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function r(f){s.delete(f)}function a(f,d,p){s.get(f)[d]=p}function u(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:u}}function zM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Mm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Em(){const s=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function f(y,x,S,w,C,g){let v=s[e];return v===void 0?(v={id:y.id,object:y,geometry:x,material:S,groupOrder:w,renderOrder:y.renderOrder,z:C,group:g},s[e]=v):(v.id=y.id,v.object=y,v.geometry=x,v.material=S,v.groupOrder=w,v.renderOrder=y.renderOrder,v.z=C,v.group=g),e++,v}function d(y,x,S,w,C,g){const v=f(y,x,S,w,C,g);S.transmission>0?r.push(v):S.transparent===!0?a.push(v):n.push(v)}function p(y,x,S,w,C,g){const v=f(y,x,S,w,C,g);S.transmission>0?r.unshift(v):S.transparent===!0?a.unshift(v):n.unshift(v)}function m(y,x){n.length>1&&n.sort(y||zM),r.length>1&&r.sort(x||Mm),a.length>1&&a.sort(x||Mm)}function _(){for(let y=e,x=s.length;y<x;y++){const S=s[y];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:d,unshift:p,finish:_,sort:m}}function HM(){let s=new WeakMap;function e(r,a){const u=s.get(r);let f;return u===void 0?(f=new Em,s.set(r,[f])):a>=u.length?(f=new Em,u.push(f)):f=u[a],f}function n(){s=new WeakMap}return{get:e,dispose:n}}function VM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ee,color:new yt};break;case"SpotLight":n={position:new ee,direction:new ee,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ee,color:new yt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ee,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":n={color:new yt,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return s[e.id]=n,n}}}function GM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let WM=0;function XM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function jM(s){const e=new VM,n=GM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ee);const a=new ee,u=new Bt,f=new Bt;function d(m){let _=0,y=0,x=0;for(let xe=0;xe<9;xe++)r.probe[xe].set(0,0,0);let S=0,w=0,C=0,g=0,v=0,N=0,P=0,D=0,Q=0,B=0,U=0;m.sort(XM);for(let xe=0,E=m.length;xe<E;xe++){const R=m[xe],ne=R.color,J=R.intensity,oe=R.distance,he=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)_+=ne.r*J,y+=ne.g*J,x+=ne.b*J;else if(R.isLightProbe){for(let te=0;te<9;te++)r.probe[te].addScaledVector(R.sh.coefficients[te],J);U++}else if(R.isDirectionalLight){const te=e.get(R);if(te.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const ae=R.shadow,k=n.get(R);k.shadowIntensity=ae.intensity,k.shadowBias=ae.bias,k.shadowNormalBias=ae.normalBias,k.shadowRadius=ae.radius,k.shadowMapSize=ae.mapSize,r.directionalShadow[S]=k,r.directionalShadowMap[S]=he,r.directionalShadowMatrix[S]=R.shadow.matrix,N++}r.directional[S]=te,S++}else if(R.isSpotLight){const te=e.get(R);te.position.setFromMatrixPosition(R.matrixWorld),te.color.copy(ne).multiplyScalar(J),te.distance=oe,te.coneCos=Math.cos(R.angle),te.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),te.decay=R.decay,r.spot[C]=te;const ae=R.shadow;if(R.map&&(r.spotLightMap[Q]=R.map,Q++,ae.updateMatrices(R),R.castShadow&&B++),r.spotLightMatrix[C]=ae.matrix,R.castShadow){const k=n.get(R);k.shadowIntensity=ae.intensity,k.shadowBias=ae.bias,k.shadowNormalBias=ae.normalBias,k.shadowRadius=ae.radius,k.shadowMapSize=ae.mapSize,r.spotShadow[C]=k,r.spotShadowMap[C]=he,D++}C++}else if(R.isRectAreaLight){const te=e.get(R);te.color.copy(ne).multiplyScalar(J),te.halfWidth.set(R.width*.5,0,0),te.halfHeight.set(0,R.height*.5,0),r.rectArea[g]=te,g++}else if(R.isPointLight){const te=e.get(R);if(te.color.copy(R.color).multiplyScalar(R.intensity),te.distance=R.distance,te.decay=R.decay,R.castShadow){const ae=R.shadow,k=n.get(R);k.shadowIntensity=ae.intensity,k.shadowBias=ae.bias,k.shadowNormalBias=ae.normalBias,k.shadowRadius=ae.radius,k.shadowMapSize=ae.mapSize,k.shadowCameraNear=ae.camera.near,k.shadowCameraFar=ae.camera.far,r.pointShadow[w]=k,r.pointShadowMap[w]=he,r.pointShadowMatrix[w]=R.shadow.matrix,P++}r.point[w]=te,w++}else if(R.isHemisphereLight){const te=e.get(R);te.skyColor.copy(R.color).multiplyScalar(J),te.groundColor.copy(R.groundColor).multiplyScalar(J),r.hemi[v]=te,v++}}g>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=y,r.ambient[2]=x;const X=r.hash;(X.directionalLength!==S||X.pointLength!==w||X.spotLength!==C||X.rectAreaLength!==g||X.hemiLength!==v||X.numDirectionalShadows!==N||X.numPointShadows!==P||X.numSpotShadows!==D||X.numSpotMaps!==Q||X.numLightProbes!==U)&&(r.directional.length=S,r.spot.length=C,r.rectArea.length=g,r.point.length=w,r.hemi.length=v,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=D+Q-B,r.spotLightMap.length=Q,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=U,X.directionalLength=S,X.pointLength=w,X.spotLength=C,X.rectAreaLength=g,X.hemiLength=v,X.numDirectionalShadows=N,X.numPointShadows=P,X.numSpotShadows=D,X.numSpotMaps=Q,X.numLightProbes=U,r.version=WM++)}function p(m,_){let y=0,x=0,S=0,w=0,C=0;const g=_.matrixWorldInverse;for(let v=0,N=m.length;v<N;v++){const P=m[v];if(P.isDirectionalLight){const D=r.directional[y];D.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),D.direction.sub(a),D.direction.transformDirection(g),y++}else if(P.isSpotLight){const D=r.spot[S];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(g),D.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),D.direction.sub(a),D.direction.transformDirection(g),S++}else if(P.isRectAreaLight){const D=r.rectArea[w];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(g),f.identity(),u.copy(P.matrixWorld),u.premultiply(g),f.extractRotation(u),D.halfWidth.set(P.width*.5,0,0),D.halfHeight.set(0,P.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),w++}else if(P.isPointLight){const D=r.point[x];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(g),x++}else if(P.isHemisphereLight){const D=r.hemi[C];D.direction.setFromMatrixPosition(P.matrixWorld),D.direction.transformDirection(g),C++}}}return{setup:d,setupView:p,state:r}}function Tm(s){const e=new jM(s),n=[],r=[];function a(_){m.camera=_,n.length=0,r.length=0}function u(_){n.push(_)}function f(_){r.push(_)}function d(){e.setup(n)}function p(_){e.setupView(n,_)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:f}}function YM(s){let e=new WeakMap;function n(a,u=0){const f=e.get(a);let d;return f===void 0?(d=new Tm(s),e.set(a,[d])):u>=f.length?(d=new Tm(s),f.push(d)):d=f[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}class qM extends Vs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class KM extends Vs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $M=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZM=`uniform sampler2D shadow_pass;
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
}`;function QM(s,e,n){let r=new og;const a=new Ct,u=new Ct,f=new Ht,d=new qM({depthPacking:Gv}),p=new KM,m={},_=n.maxTextureSize,y={[gr]:wn,[wn]:gr,[Li]:Li},x=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:$M,fragmentShader:ZM}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const w=new oi;w.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Ii(w,x),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Um;let v=this.type;this.render=function(B,U,X){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||B.length===0)return;const xe=s.getRenderTarget(),E=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),ne=s.state;ne.setBlending(pr),ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const J=v!==bi&&this.type===bi,oe=v===bi&&this.type!==bi;for(let he=0,te=B.length;he<te;he++){const ae=B[he],k=ae.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;a.copy(k.mapSize);const ue=k.getFrameExtents();if(a.multiply(ue),u.copy(k.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(u.x=Math.floor(_/ue.x),a.x=u.x*ue.x,k.mapSize.x=u.x),a.y>_&&(u.y=Math.floor(_/ue.y),a.y=u.y*ue.y,k.mapSize.y=u.y)),k.map===null||J===!0||oe===!0){const I=this.type!==bi?{minFilter:Xn,magFilter:Xn}:{};k.map!==null&&k.map.dispose(),k.map=new Wr(a.x,a.y,I),k.map.texture.name=ae.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();const se=k.getViewportCount();for(let I=0;I<se;I++){const ie=k.getViewport(I);f.set(u.x*ie.x,u.y*ie.y,u.x*ie.z,u.y*ie.w),ne.viewport(f),k.updateMatrices(ae,I),r=k.getFrustum(),D(U,X,k.camera,ae,this.type)}k.isPointLightShadow!==!0&&this.type===bi&&N(k,X),k.needsUpdate=!1}v=this.type,g.needsUpdate=!1,s.setRenderTarget(xe,E,R)};function N(B,U){const X=e.update(C);x.defines.VSM_SAMPLES!==B.blurSamples&&(x.defines.VSM_SAMPLES=B.blurSamples,S.defines.VSM_SAMPLES=B.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Wr(a.x,a.y)),x.uniforms.shadow_pass.value=B.map.texture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,s.setRenderTarget(B.mapPass),s.clear(),s.renderBufferDirect(U,null,X,x,C,null),S.uniforms.shadow_pass.value=B.mapPass.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,s.setRenderTarget(B.map),s.clear(),s.renderBufferDirect(U,null,X,S,C,null)}function P(B,U,X,xe){let E=null;const R=X.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(R!==void 0)E=R;else if(E=X.isPointLight===!0?p:d,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const ne=E.uuid,J=U.uuid;let oe=m[ne];oe===void 0&&(oe={},m[ne]=oe);let he=oe[J];he===void 0&&(he=E.clone(),oe[J]=he,U.addEventListener("dispose",Q)),E=he}if(E.visible=U.visible,E.wireframe=U.wireframe,xe===bi?E.side=U.shadowSide!==null?U.shadowSide:U.side:E.side=U.shadowSide!==null?U.shadowSide:y[U.side],E.alphaMap=U.alphaMap,E.alphaTest=U.alphaTest,E.map=U.map,E.clipShadows=U.clipShadows,E.clippingPlanes=U.clippingPlanes,E.clipIntersection=U.clipIntersection,E.displacementMap=U.displacementMap,E.displacementScale=U.displacementScale,E.displacementBias=U.displacementBias,E.wireframeLinewidth=U.wireframeLinewidth,E.linewidth=U.linewidth,X.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const ne=s.properties.get(E);ne.light=X}return E}function D(B,U,X,xe,E){if(B.visible===!1)return;if(B.layers.test(U.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&E===bi)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,B.matrixWorld);const J=e.update(B),oe=B.material;if(Array.isArray(oe)){const he=J.groups;for(let te=0,ae=he.length;te<ae;te++){const k=he[te],ue=oe[k.materialIndex];if(ue&&ue.visible){const se=P(B,ue,xe,E);B.onBeforeShadow(s,B,U,X,J,se,k),s.renderBufferDirect(X,null,J,se,B,k),B.onAfterShadow(s,B,U,X,J,se,k)}}}else if(oe.visible){const he=P(B,oe,xe,E);B.onBeforeShadow(s,B,U,X,J,he,null),s.renderBufferDirect(X,null,J,he,B,null),B.onAfterShadow(s,B,U,X,J,he,null)}}const ne=B.children;for(let J=0,oe=ne.length;J<oe;J++)D(ne[J],U,X,xe,E)}function Q(B){B.target.removeEventListener("dispose",Q);for(const X in m){const xe=m[X],E=B.target.uuid;E in xe&&(xe[E].dispose(),delete xe[E])}}}const JM={[nf]:rf,[sf]:lf,[of]:uf,[Us]:af,[rf]:nf,[lf]:sf,[uf]:of,[af]:Us};function eE(s){function e(){let H=!1;const Le=new Ht;let re=null;const de=new Ht(0,0,0,0);return{setMask:function(Ce){re!==Ce&&!H&&(s.colorMask(Ce,Ce,Ce,Ce),re=Ce)},setLocked:function(Ce){H=Ce},setClear:function(Ce,Ne,ct,Ut,nn){nn===!0&&(Ce*=Ut,Ne*=Ut,ct*=Ut),Le.set(Ce,Ne,ct,Ut),de.equals(Le)===!1&&(s.clearColor(Ce,Ne,ct,Ut),de.copy(Le))},reset:function(){H=!1,re=null,de.set(-1,0,0,0)}}}function n(){let H=!1,Le=!1,re=null,de=null,Ce=null;return{setReversed:function(Ne){Le=Ne},setTest:function(Ne){Ne?ve(s.DEPTH_TEST):ye(s.DEPTH_TEST)},setMask:function(Ne){re!==Ne&&!H&&(s.depthMask(Ne),re=Ne)},setFunc:function(Ne){if(Le&&(Ne=JM[Ne]),de!==Ne){switch(Ne){case nf:s.depthFunc(s.NEVER);break;case rf:s.depthFunc(s.ALWAYS);break;case sf:s.depthFunc(s.LESS);break;case Us:s.depthFunc(s.LEQUAL);break;case of:s.depthFunc(s.EQUAL);break;case af:s.depthFunc(s.GEQUAL);break;case lf:s.depthFunc(s.GREATER);break;case uf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}de=Ne}},setLocked:function(Ne){H=Ne},setClear:function(Ne){Ce!==Ne&&(s.clearDepth(Ne),Ce=Ne)},reset:function(){H=!1,re=null,de=null,Ce=null}}}function r(){let H=!1,Le=null,re=null,de=null,Ce=null,Ne=null,ct=null,Ut=null,nn=null;return{setTest:function(ht){H||(ht?ve(s.STENCIL_TEST):ye(s.STENCIL_TEST))},setMask:function(ht){Le!==ht&&!H&&(s.stencilMask(ht),Le=ht)},setFunc:function(ht,Kt,Fn){(re!==ht||de!==Kt||Ce!==Fn)&&(s.stencilFunc(ht,Kt,Fn),re=ht,de=Kt,Ce=Fn)},setOp:function(ht,Kt,Fn){(Ne!==ht||ct!==Kt||Ut!==Fn)&&(s.stencilOp(ht,Kt,Fn),Ne=ht,ct=Kt,Ut=Fn)},setLocked:function(ht){H=ht},setClear:function(ht){nn!==ht&&(s.clearStencil(ht),nn=ht)},reset:function(){H=!1,Le=null,re=null,de=null,Ce=null,Ne=null,ct=null,Ut=null,nn=null}}}const a=new e,u=new n,f=new r,d=new WeakMap,p=new WeakMap;let m={},_={},y=new WeakMap,x=[],S=null,w=!1,C=null,g=null,v=null,N=null,P=null,D=null,Q=null,B=new yt(0,0,0),U=0,X=!1,xe=null,E=null,R=null,ne=null,J=null;const oe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let he=!1,te=0;const ae=s.getParameter(s.VERSION);ae.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(ae)[1]),he=te>=1):ae.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),he=te>=2);let k=null,ue={};const se=s.getParameter(s.SCISSOR_BOX),I=s.getParameter(s.VIEWPORT),ie=new Ht().fromArray(se),Ue=new Ht().fromArray(I);function q(H,Le,re,de){const Ce=new Uint8Array(4),Ne=s.createTexture();s.bindTexture(H,Ne),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ct=0;ct<re;ct++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Le,0,s.RGBA,1,1,de,0,s.RGBA,s.UNSIGNED_BYTE,Ce):s.texImage2D(Le+ct,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ce);return Ne}const le={};le[s.TEXTURE_2D]=q(s.TEXTURE_2D,s.TEXTURE_2D,1),le[s.TEXTURE_CUBE_MAP]=q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[s.TEXTURE_2D_ARRAY]=q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),le[s.TEXTURE_3D]=q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ve(s.DEPTH_TEST),u.setFunc(Us),at(!1),ft(Np),ve(s.CULL_FACE),O(pr);function ve(H){m[H]!==!0&&(s.enable(H),m[H]=!0)}function ye(H){m[H]!==!1&&(s.disable(H),m[H]=!1)}function Pe(H,Le){return _[H]!==Le?(s.bindFramebuffer(H,Le),_[H]=Le,H===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Le),H===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Le),!0):!1}function be(H,Le){let re=x,de=!1;if(H){re=y.get(Le),re===void 0&&(re=[],y.set(Le,re));const Ce=H.textures;if(re.length!==Ce.length||re[0]!==s.COLOR_ATTACHMENT0){for(let Ne=0,ct=Ce.length;Ne<ct;Ne++)re[Ne]=s.COLOR_ATTACHMENT0+Ne;re.length=Ce.length,de=!0}}else re[0]!==s.BACK&&(re[0]=s.BACK,de=!0);de&&s.drawBuffers(re)}function et(H){return S!==H?(s.useProgram(H),S=H,!0):!1}const pt={[Br]:s.FUNC_ADD,[mv]:s.FUNC_SUBTRACT,[gv]:s.FUNC_REVERSE_SUBTRACT};pt[_v]=s.MIN,pt[vv]=s.MAX;const lt={[xv]:s.ZERO,[yv]:s.ONE,[Sv]:s.SRC_COLOR,[ef]:s.SRC_ALPHA,[Cv]:s.SRC_ALPHA_SATURATE,[wv]:s.DST_COLOR,[Ev]:s.DST_ALPHA,[Mv]:s.ONE_MINUS_SRC_COLOR,[tf]:s.ONE_MINUS_SRC_ALPHA,[Av]:s.ONE_MINUS_DST_COLOR,[Tv]:s.ONE_MINUS_DST_ALPHA,[Rv]:s.CONSTANT_COLOR,[Pv]:s.ONE_MINUS_CONSTANT_COLOR,[bv]:s.CONSTANT_ALPHA,[Lv]:s.ONE_MINUS_CONSTANT_ALPHA};function O(H,Le,re,de,Ce,Ne,ct,Ut,nn,ht){if(H===pr){w===!0&&(ye(s.BLEND),w=!1);return}if(w===!1&&(ve(s.BLEND),w=!0),H!==pv){if(H!==C||ht!==X){if((g!==Br||P!==Br)&&(s.blendEquation(s.FUNC_ADD),g=Br,P=Br),ht)switch(H){case Ds:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Rl:s.blendFunc(s.ONE,s.ONE);break;case Ip:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Up:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Ds:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Rl:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ip:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Up:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}v=null,N=null,D=null,Q=null,B.set(0,0,0),U=0,C=H,X=ht}return}Ce=Ce||Le,Ne=Ne||re,ct=ct||de,(Le!==g||Ce!==P)&&(s.blendEquationSeparate(pt[Le],pt[Ce]),g=Le,P=Ce),(re!==v||de!==N||Ne!==D||ct!==Q)&&(s.blendFuncSeparate(lt[re],lt[de],lt[Ne],lt[ct]),v=re,N=de,D=Ne,Q=ct),(Ut.equals(B)===!1||nn!==U)&&(s.blendColor(Ut.r,Ut.g,Ut.b,nn),B.copy(Ut),U=nn),C=H,X=!1}function tn(H,Le){H.side===Li?ye(s.CULL_FACE):ve(s.CULL_FACE);let re=H.side===wn;Le&&(re=!re),at(re),H.blending===Ds&&H.transparent===!1?O(pr):O(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),a.setMask(H.colorWrite);const de=H.stencilWrite;f.setTest(de),de&&(f.setMask(H.stencilWriteMask),f.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),f.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Tt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ve(s.SAMPLE_ALPHA_TO_COVERAGE):ye(s.SAMPLE_ALPHA_TO_COVERAGE)}function at(H){xe!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),xe=H)}function ft(H){H!==fv?(ve(s.CULL_FACE),H!==E&&(H===Np?s.cullFace(s.BACK):H===dv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ye(s.CULL_FACE),E=H}function $e(H){H!==R&&(he&&s.lineWidth(H),R=H)}function Tt(H,Le,re){H?(ve(s.POLYGON_OFFSET_FILL),(ne!==Le||J!==re)&&(s.polygonOffset(Le,re),ne=Le,J=re)):ye(s.POLYGON_OFFSET_FILL)}function Qe(H){H?ve(s.SCISSOR_TEST):ye(s.SCISSOR_TEST)}function b(H){H===void 0&&(H=s.TEXTURE0+oe-1),k!==H&&(s.activeTexture(H),k=H)}function T(H,Le,re){re===void 0&&(k===null?re=s.TEXTURE0+oe-1:re=k);let de=ue[re];de===void 0&&(de={type:void 0,texture:void 0},ue[re]=de),(de.type!==H||de.texture!==Le)&&(k!==re&&(s.activeTexture(re),k=re),s.bindTexture(H,Le||le[H]),de.type=H,de.texture=Le)}function Y(){const H=ue[k];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function fe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ge(){try{s.compressedTexImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ce(){try{s.texSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function je(){try{s.texSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ae(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Fe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function dt(){try{s.texStorage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Se(){try{s.texStorage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Oe(){try{s.texImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function tt(){try{s.texImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Je(H){ie.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),ie.copy(H))}function Be(H){Ue.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),Ue.copy(H))}function ut(H,Le){let re=p.get(Le);re===void 0&&(re=new WeakMap,p.set(Le,re));let de=re.get(H);de===void 0&&(de=s.getUniformBlockIndex(Le,H.name),re.set(H,de))}function it(H,Le){const de=p.get(Le).get(H);d.get(Le)!==de&&(s.uniformBlockBinding(Le,de,H.__bindingPointIndex),d.set(Le,de))}function St(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},k=null,ue={},_={},y=new WeakMap,x=[],S=null,w=!1,C=null,g=null,v=null,N=null,P=null,D=null,Q=null,B=new yt(0,0,0),U=0,X=!1,xe=null,E=null,R=null,ne=null,J=null,ie.set(0,0,s.canvas.width,s.canvas.height),Ue.set(0,0,s.canvas.width,s.canvas.height),a.reset(),u.reset(),f.reset()}return{buffers:{color:a,depth:u,stencil:f},enable:ve,disable:ye,bindFramebuffer:Pe,drawBuffers:be,useProgram:et,setBlending:O,setMaterial:tn,setFlipSided:at,setCullFace:ft,setLineWidth:$e,setPolygonOffset:Tt,setScissorTest:Qe,activeTexture:b,bindTexture:T,unbindTexture:Y,compressedTexImage2D:fe,compressedTexImage3D:ge,texImage2D:Oe,texImage3D:tt,updateUBOMapping:ut,uniformBlockBinding:it,texStorage2D:dt,texStorage3D:Se,texSubImage2D:ce,texSubImage3D:je,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Fe,scissor:Je,viewport:Be,reset:St}}function wm(s,e,n,r){const a=tE(r);switch(n){case Hm:return s*e;case Gm:return s*e;case Wm:return s*e*2;case Xm:return s*e/a.components*a.byteLength;case $f:return s*e/a.components*a.byteLength;case jm:return s*e*2/a.components*a.byteLength;case Zf:return s*e*2/a.components*a.byteLength;case Vm:return s*e*3/a.components*a.byteLength;case si:return s*e*4/a.components*a.byteLength;case Qf:return s*e*4/a.components*a.byteLength;case Sl:case Ml:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case El:case Tl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case mf:case _f:return Math.max(s,16)*Math.max(e,8)/4;case pf:case gf:return Math.max(s,8)*Math.max(e,8)/2;case vf:case xf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case yf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Mf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ef:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Tf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case wf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Af:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Cf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Rf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Pf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case bf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Lf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Df:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Nf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case If:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case wl:case Uf:case Ff:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ym:case Of:return Math.ceil(s/4)*Math.ceil(e/4)*8;case kf:case Bf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function tE(s){switch(s){case Fi:case km:return{byteLength:1,components:1};case Fo:case Bm:case Oo:return{byteLength:2,components:1};case qf:case Kf:return{byteLength:2,components:4};case Gr:case Yf:case Di:return{byteLength:4,components:1};case zm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function nE(s,e,n,r,a,u,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Ct,_=new WeakMap;let y;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(b,T){return S?new OffscreenCanvas(b,T):Nl("canvas")}function C(b,T,Y){let fe=1;const ge=Qe(b);if((ge.width>Y||ge.height>Y)&&(fe=Y/Math.max(ge.width,ge.height)),fe<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const ce=Math.floor(fe*ge.width),je=Math.floor(fe*ge.height);y===void 0&&(y=w(ce,je));const Ae=T?w(ce,je):y;return Ae.width=ce,Ae.height=je,Ae.getContext("2d").drawImage(b,0,0,ce,je),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+ce+"x"+je+")."),Ae}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),b;return b}function g(b){return b.generateMipmaps&&b.minFilter!==Xn&&b.minFilter!==ii}function v(b){s.generateMipmap(b)}function N(b,T,Y,fe,ge=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ce=T;if(T===s.RED&&(Y===s.FLOAT&&(ce=s.R32F),Y===s.HALF_FLOAT&&(ce=s.R16F),Y===s.UNSIGNED_BYTE&&(ce=s.R8)),T===s.RED_INTEGER&&(Y===s.UNSIGNED_BYTE&&(ce=s.R8UI),Y===s.UNSIGNED_SHORT&&(ce=s.R16UI),Y===s.UNSIGNED_INT&&(ce=s.R32UI),Y===s.BYTE&&(ce=s.R8I),Y===s.SHORT&&(ce=s.R16I),Y===s.INT&&(ce=s.R32I)),T===s.RG&&(Y===s.FLOAT&&(ce=s.RG32F),Y===s.HALF_FLOAT&&(ce=s.RG16F),Y===s.UNSIGNED_BYTE&&(ce=s.RG8)),T===s.RG_INTEGER&&(Y===s.UNSIGNED_BYTE&&(ce=s.RG8UI),Y===s.UNSIGNED_SHORT&&(ce=s.RG16UI),Y===s.UNSIGNED_INT&&(ce=s.RG32UI),Y===s.BYTE&&(ce=s.RG8I),Y===s.SHORT&&(ce=s.RG16I),Y===s.INT&&(ce=s.RG32I)),T===s.RGB_INTEGER&&(Y===s.UNSIGNED_BYTE&&(ce=s.RGB8UI),Y===s.UNSIGNED_SHORT&&(ce=s.RGB16UI),Y===s.UNSIGNED_INT&&(ce=s.RGB32UI),Y===s.BYTE&&(ce=s.RGB8I),Y===s.SHORT&&(ce=s.RGB16I),Y===s.INT&&(ce=s.RGB32I)),T===s.RGBA_INTEGER&&(Y===s.UNSIGNED_BYTE&&(ce=s.RGBA8UI),Y===s.UNSIGNED_SHORT&&(ce=s.RGBA16UI),Y===s.UNSIGNED_INT&&(ce=s.RGBA32UI),Y===s.BYTE&&(ce=s.RGBA8I),Y===s.SHORT&&(ce=s.RGBA16I),Y===s.INT&&(ce=s.RGBA32I)),T===s.RGB&&Y===s.UNSIGNED_INT_5_9_9_9_REV&&(ce=s.RGB9_E5),T===s.RGBA){const je=ge?Pl:Mt.getTransfer(fe);Y===s.FLOAT&&(ce=s.RGBA32F),Y===s.HALF_FLOAT&&(ce=s.RGBA16F),Y===s.UNSIGNED_BYTE&&(ce=je===Dt?s.SRGB8_ALPHA8:s.RGBA8),Y===s.UNSIGNED_SHORT_4_4_4_4&&(ce=s.RGBA4),Y===s.UNSIGNED_SHORT_5_5_5_1&&(ce=s.RGB5_A1)}return(ce===s.R16F||ce===s.R32F||ce===s.RG16F||ce===s.RG32F||ce===s.RGBA16F||ce===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function P(b,T){let Y;return b?T===null||T===Gr||T===ks?Y=s.DEPTH24_STENCIL8:T===Di?Y=s.DEPTH32F_STENCIL8:T===Fo&&(Y=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Gr||T===ks?Y=s.DEPTH_COMPONENT24:T===Di?Y=s.DEPTH_COMPONENT32F:T===Fo&&(Y=s.DEPTH_COMPONENT16),Y}function D(b,T){return g(b)===!0||b.isFramebufferTexture&&b.minFilter!==Xn&&b.minFilter!==ii?Math.log2(Math.max(T.width,T.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?T.mipmaps.length:1}function Q(b){const T=b.target;T.removeEventListener("dispose",Q),U(T),T.isVideoTexture&&_.delete(T)}function B(b){const T=b.target;T.removeEventListener("dispose",B),xe(T)}function U(b){const T=r.get(b);if(T.__webglInit===void 0)return;const Y=b.source,fe=x.get(Y);if(fe){const ge=fe[T.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&X(b),Object.keys(fe).length===0&&x.delete(Y)}r.remove(b)}function X(b){const T=r.get(b);s.deleteTexture(T.__webglTexture);const Y=b.source,fe=x.get(Y);delete fe[T.__cacheKey],f.memory.textures--}function xe(b){const T=r.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(T.__webglFramebuffer[fe]))for(let ge=0;ge<T.__webglFramebuffer[fe].length;ge++)s.deleteFramebuffer(T.__webglFramebuffer[fe][ge]);else s.deleteFramebuffer(T.__webglFramebuffer[fe]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[fe])}else{if(Array.isArray(T.__webglFramebuffer))for(let fe=0;fe<T.__webglFramebuffer.length;fe++)s.deleteFramebuffer(T.__webglFramebuffer[fe]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let fe=0;fe<T.__webglColorRenderbuffer.length;fe++)T.__webglColorRenderbuffer[fe]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[fe]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Y=b.textures;for(let fe=0,ge=Y.length;fe<ge;fe++){const ce=r.get(Y[fe]);ce.__webglTexture&&(s.deleteTexture(ce.__webglTexture),f.memory.textures--),r.remove(Y[fe])}r.remove(b)}let E=0;function R(){E=0}function ne(){const b=E;return b>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+a.maxTextures),E+=1,b}function J(b){const T=[];return T.push(b.wrapS),T.push(b.wrapT),T.push(b.wrapR||0),T.push(b.magFilter),T.push(b.minFilter),T.push(b.anisotropy),T.push(b.internalFormat),T.push(b.format),T.push(b.type),T.push(b.generateMipmaps),T.push(b.premultiplyAlpha),T.push(b.flipY),T.push(b.unpackAlignment),T.push(b.colorSpace),T.join()}function oe(b,T){const Y=r.get(b);if(b.isVideoTexture&&$e(b),b.isRenderTargetTexture===!1&&b.version>0&&Y.__version!==b.version){const fe=b.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(Y,b,T);return}}n.bindTexture(s.TEXTURE_2D,Y.__webglTexture,s.TEXTURE0+T)}function he(b,T){const Y=r.get(b);if(b.version>0&&Y.__version!==b.version){Ue(Y,b,T);return}n.bindTexture(s.TEXTURE_2D_ARRAY,Y.__webglTexture,s.TEXTURE0+T)}function te(b,T){const Y=r.get(b);if(b.version>0&&Y.__version!==b.version){Ue(Y,b,T);return}n.bindTexture(s.TEXTURE_3D,Y.__webglTexture,s.TEXTURE0+T)}function ae(b,T){const Y=r.get(b);if(b.version>0&&Y.__version!==b.version){q(Y,b,T);return}n.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture,s.TEXTURE0+T)}const k={[df]:s.REPEAT,[Hr]:s.CLAMP_TO_EDGE,[hf]:s.MIRRORED_REPEAT},ue={[Xn]:s.NEAREST,[Hv]:s.NEAREST_MIPMAP_NEAREST,[qa]:s.NEAREST_MIPMAP_LINEAR,[ii]:s.LINEAR,[Mc]:s.LINEAR_MIPMAP_NEAREST,[Vr]:s.LINEAR_MIPMAP_LINEAR},se={[jv]:s.NEVER,[Qv]:s.ALWAYS,[Yv]:s.LESS,[qm]:s.LEQUAL,[qv]:s.EQUAL,[Zv]:s.GEQUAL,[Kv]:s.GREATER,[$v]:s.NOTEQUAL};function I(b,T){if(T.type===Di&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===ii||T.magFilter===Mc||T.magFilter===qa||T.magFilter===Vr||T.minFilter===ii||T.minFilter===Mc||T.minFilter===qa||T.minFilter===Vr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,k[T.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,k[T.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,k[T.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,ue[T.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,ue[T.minFilter]),T.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,se[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Xn||T.minFilter!==qa&&T.minFilter!==Vr||T.type===Di&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");s.texParameterf(b,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function ie(b,T){let Y=!1;b.__webglInit===void 0&&(b.__webglInit=!0,T.addEventListener("dispose",Q));const fe=T.source;let ge=x.get(fe);ge===void 0&&(ge={},x.set(fe,ge));const ce=J(T);if(ce!==b.__cacheKey){ge[ce]===void 0&&(ge[ce]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,Y=!0),ge[ce].usedTimes++;const je=ge[b.__cacheKey];je!==void 0&&(ge[b.__cacheKey].usedTimes--,je.usedTimes===0&&X(T)),b.__cacheKey=ce,b.__webglTexture=ge[ce].texture}return Y}function Ue(b,T,Y){let fe=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(fe=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(fe=s.TEXTURE_3D);const ge=ie(b,T),ce=T.source;n.bindTexture(fe,b.__webglTexture,s.TEXTURE0+Y);const je=r.get(ce);if(ce.version!==je.__version||ge===!0){n.activeTexture(s.TEXTURE0+Y);const Ae=Mt.getPrimaries(Mt.workingColorSpace),Fe=T.colorSpace===hr?null:Mt.getPrimaries(T.colorSpace),dt=T.colorSpace===hr||Ae===Fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Se=C(T.image,!1,a.maxTextureSize);Se=Tt(T,Se);const Oe=u.convert(T.format,T.colorSpace),tt=u.convert(T.type);let Je=N(T.internalFormat,Oe,tt,T.colorSpace,T.isVideoTexture);I(fe,T);let Be;const ut=T.mipmaps,it=T.isVideoTexture!==!0,St=je.__version===void 0||ge===!0,H=ce.dataReady,Le=D(T,Se);if(T.isDepthTexture)Je=P(T.format===Bs,T.type),St&&(it?n.texStorage2D(s.TEXTURE_2D,1,Je,Se.width,Se.height):n.texImage2D(s.TEXTURE_2D,0,Je,Se.width,Se.height,0,Oe,tt,null));else if(T.isDataTexture)if(ut.length>0){it&&St&&n.texStorage2D(s.TEXTURE_2D,Le,Je,ut[0].width,ut[0].height);for(let re=0,de=ut.length;re<de;re++)Be=ut[re],it?H&&n.texSubImage2D(s.TEXTURE_2D,re,0,0,Be.width,Be.height,Oe,tt,Be.data):n.texImage2D(s.TEXTURE_2D,re,Je,Be.width,Be.height,0,Oe,tt,Be.data);T.generateMipmaps=!1}else it?(St&&n.texStorage2D(s.TEXTURE_2D,Le,Je,Se.width,Se.height),H&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Se.width,Se.height,Oe,tt,Se.data)):n.texImage2D(s.TEXTURE_2D,0,Je,Se.width,Se.height,0,Oe,tt,Se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){it&&St&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Le,Je,ut[0].width,ut[0].height,Se.depth);for(let re=0,de=ut.length;re<de;re++)if(Be=ut[re],T.format!==si)if(Oe!==null)if(it){if(H)if(T.layerUpdates.size>0){const Ce=wm(Be.width,Be.height,T.format,T.type);for(const Ne of T.layerUpdates){const ct=Be.data.subarray(Ne*Ce/Be.data.BYTES_PER_ELEMENT,(Ne+1)*Ce/Be.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,Ne,Be.width,Be.height,1,Oe,ct,0,0)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,Be.width,Be.height,Se.depth,Oe,Be.data,0,0)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,re,Je,Be.width,Be.height,Se.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?H&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,Be.width,Be.height,Se.depth,Oe,tt,Be.data):n.texImage3D(s.TEXTURE_2D_ARRAY,re,Je,Be.width,Be.height,Se.depth,0,Oe,tt,Be.data)}else{it&&St&&n.texStorage2D(s.TEXTURE_2D,Le,Je,ut[0].width,ut[0].height);for(let re=0,de=ut.length;re<de;re++)Be=ut[re],T.format!==si?Oe!==null?it?H&&n.compressedTexSubImage2D(s.TEXTURE_2D,re,0,0,Be.width,Be.height,Oe,Be.data):n.compressedTexImage2D(s.TEXTURE_2D,re,Je,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?H&&n.texSubImage2D(s.TEXTURE_2D,re,0,0,Be.width,Be.height,Oe,tt,Be.data):n.texImage2D(s.TEXTURE_2D,re,Je,Be.width,Be.height,0,Oe,tt,Be.data)}else if(T.isDataArrayTexture)if(it){if(St&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Le,Je,Se.width,Se.height,Se.depth),H)if(T.layerUpdates.size>0){const re=wm(Se.width,Se.height,T.format,T.type);for(const de of T.layerUpdates){const Ce=Se.data.subarray(de*re/Se.data.BYTES_PER_ELEMENT,(de+1)*re/Se.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,de,Se.width,Se.height,1,Oe,tt,Ce)}T.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Oe,tt,Se.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Je,Se.width,Se.height,Se.depth,0,Oe,tt,Se.data);else if(T.isData3DTexture)it?(St&&n.texStorage3D(s.TEXTURE_3D,Le,Je,Se.width,Se.height,Se.depth),H&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Oe,tt,Se.data)):n.texImage3D(s.TEXTURE_3D,0,Je,Se.width,Se.height,Se.depth,0,Oe,tt,Se.data);else if(T.isFramebufferTexture){if(St)if(it)n.texStorage2D(s.TEXTURE_2D,Le,Je,Se.width,Se.height);else{let re=Se.width,de=Se.height;for(let Ce=0;Ce<Le;Ce++)n.texImage2D(s.TEXTURE_2D,Ce,Je,re,de,0,Oe,tt,null),re>>=1,de>>=1}}else if(ut.length>0){if(it&&St){const re=Qe(ut[0]);n.texStorage2D(s.TEXTURE_2D,Le,Je,re.width,re.height)}for(let re=0,de=ut.length;re<de;re++)Be=ut[re],it?H&&n.texSubImage2D(s.TEXTURE_2D,re,0,0,Oe,tt,Be):n.texImage2D(s.TEXTURE_2D,re,Je,Oe,tt,Be);T.generateMipmaps=!1}else if(it){if(St){const re=Qe(Se);n.texStorage2D(s.TEXTURE_2D,Le,Je,re.width,re.height)}H&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Oe,tt,Se)}else n.texImage2D(s.TEXTURE_2D,0,Je,Oe,tt,Se);g(T)&&v(fe),je.__version=ce.version,T.onUpdate&&T.onUpdate(T)}b.__version=T.version}function q(b,T,Y){if(T.image.length!==6)return;const fe=ie(b,T),ge=T.source;n.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+Y);const ce=r.get(ge);if(ge.version!==ce.__version||fe===!0){n.activeTexture(s.TEXTURE0+Y);const je=Mt.getPrimaries(Mt.workingColorSpace),Ae=T.colorSpace===hr?null:Mt.getPrimaries(T.colorSpace),Fe=T.colorSpace===hr||je===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const dt=T.isCompressedTexture||T.image[0].isCompressedTexture,Se=T.image[0]&&T.image[0].isDataTexture,Oe=[];for(let de=0;de<6;de++)!dt&&!Se?Oe[de]=C(T.image[de],!0,a.maxCubemapSize):Oe[de]=Se?T.image[de].image:T.image[de],Oe[de]=Tt(T,Oe[de]);const tt=Oe[0],Je=u.convert(T.format,T.colorSpace),Be=u.convert(T.type),ut=N(T.internalFormat,Je,Be,T.colorSpace),it=T.isVideoTexture!==!0,St=ce.__version===void 0||fe===!0,H=ge.dataReady;let Le=D(T,tt);I(s.TEXTURE_CUBE_MAP,T);let re;if(dt){it&&St&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Le,ut,tt.width,tt.height);for(let de=0;de<6;de++){re=Oe[de].mipmaps;for(let Ce=0;Ce<re.length;Ce++){const Ne=re[Ce];T.format!==si?Je!==null?it?H&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce,0,0,Ne.width,Ne.height,Je,Ne.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce,ut,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce,0,0,Ne.width,Ne.height,Je,Be,Ne.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce,ut,Ne.width,Ne.height,0,Je,Be,Ne.data)}}}else{if(re=T.mipmaps,it&&St){re.length>0&&Le++;const de=Qe(Oe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Le,ut,de.width,de.height)}for(let de=0;de<6;de++)if(Se){it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Oe[de].width,Oe[de].height,Je,Be,Oe[de].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ut,Oe[de].width,Oe[de].height,0,Je,Be,Oe[de].data);for(let Ce=0;Ce<re.length;Ce++){const ct=re[Ce].image[de].image;it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce+1,0,0,ct.width,ct.height,Je,Be,ct.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce+1,ut,ct.width,ct.height,0,Je,Be,ct.data)}}else{it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Je,Be,Oe[de]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ut,Je,Be,Oe[de]);for(let Ce=0;Ce<re.length;Ce++){const Ne=re[Ce];it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce+1,0,0,Je,Be,Ne.image[de]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce+1,ut,Je,Be,Ne.image[de])}}}g(T)&&v(s.TEXTURE_CUBE_MAP),ce.__version=ge.version,T.onUpdate&&T.onUpdate(T)}b.__version=T.version}function le(b,T,Y,fe,ge,ce){const je=u.convert(Y.format,Y.colorSpace),Ae=u.convert(Y.type),Fe=N(Y.internalFormat,je,Ae,Y.colorSpace);if(!r.get(T).__hasExternalTextures){const Se=Math.max(1,T.width>>ce),Oe=Math.max(1,T.height>>ce);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?n.texImage3D(ge,ce,Fe,Se,Oe,T.depth,0,je,Ae,null):n.texImage2D(ge,ce,Fe,Se,Oe,0,je,Ae,null)}n.bindFramebuffer(s.FRAMEBUFFER,b),ft(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,ge,r.get(Y).__webglTexture,0,at(T)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,fe,ge,r.get(Y).__webglTexture,ce),n.bindFramebuffer(s.FRAMEBUFFER,null)}function ve(b,T,Y){if(s.bindRenderbuffer(s.RENDERBUFFER,b),T.depthBuffer){const fe=T.depthTexture,ge=fe&&fe.isDepthTexture?fe.type:null,ce=P(T.stencilBuffer,ge),je=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=at(T);ft(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,ce,T.width,T.height):Y?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,ce,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ce,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,je,s.RENDERBUFFER,b)}else{const fe=T.textures;for(let ge=0;ge<fe.length;ge++){const ce=fe[ge],je=u.convert(ce.format,ce.colorSpace),Ae=u.convert(ce.type),Fe=N(ce.internalFormat,je,Ae,ce.colorSpace),dt=at(T);Y&&ft(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,Fe,T.width,T.height):ft(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,Fe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Fe,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ye(b,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,b),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),oe(T.depthTexture,0);const fe=r.get(T.depthTexture).__webglTexture,ge=at(T);if(T.depthTexture.format===Ns)ft(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,fe,0,ge):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,fe,0);else if(T.depthTexture.format===Bs)ft(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,fe,0,ge):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function Pe(b){const T=r.get(b),Y=b.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==b.depthTexture){const fe=b.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),fe){const ge=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,fe.removeEventListener("dispose",ge)};fe.addEventListener("dispose",ge),T.__depthDisposeCallback=ge}T.__boundDepthTexture=fe}if(b.depthTexture&&!T.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");ye(T.__webglFramebuffer,b)}else if(Y){T.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[fe]),T.__webglDepthbuffer[fe]===void 0)T.__webglDepthbuffer[fe]=s.createRenderbuffer(),ve(T.__webglDepthbuffer[fe],b,!1);else{const ge=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=T.__webglDepthbuffer[fe];s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,ce)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),ve(T.__webglDepthbuffer,b,!1);else{const fe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ge),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,ge)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function be(b,T,Y){const fe=r.get(b);T!==void 0&&le(fe.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Y!==void 0&&Pe(b)}function et(b){const T=b.texture,Y=r.get(b),fe=r.get(T);b.addEventListener("dispose",B);const ge=b.textures,ce=b.isWebGLCubeRenderTarget===!0,je=ge.length>1;if(je||(fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture()),fe.__version=T.version,f.memory.textures++),ce){Y.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer[Ae]=[];for(let Fe=0;Fe<T.mipmaps.length;Fe++)Y.__webglFramebuffer[Ae][Fe]=s.createFramebuffer()}else Y.__webglFramebuffer[Ae]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Ae=0;Ae<T.mipmaps.length;Ae++)Y.__webglFramebuffer[Ae]=s.createFramebuffer()}else Y.__webglFramebuffer=s.createFramebuffer();if(je)for(let Ae=0,Fe=ge.length;Ae<Fe;Ae++){const dt=r.get(ge[Ae]);dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture(),f.memory.textures++)}if(b.samples>0&&ft(b)===!1){Y.__webglMultisampledFramebuffer=s.createFramebuffer(),Y.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ge.length;Ae++){const Fe=ge[Ae];Y.__webglColorRenderbuffer[Ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Y.__webglColorRenderbuffer[Ae]);const dt=u.convert(Fe.format,Fe.colorSpace),Se=u.convert(Fe.type),Oe=N(Fe.internalFormat,dt,Se,Fe.colorSpace,b.isXRRenderTarget===!0),tt=at(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,Oe,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,Y.__webglColorRenderbuffer[Ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(Y.__webglDepthRenderbuffer=s.createRenderbuffer(),ve(Y.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ce){n.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),I(s.TEXTURE_CUBE_MAP,T);for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0)for(let Fe=0;Fe<T.mipmaps.length;Fe++)le(Y.__webglFramebuffer[Ae][Fe],b,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Fe);else le(Y.__webglFramebuffer[Ae],b,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);g(T)&&v(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(je){for(let Ae=0,Fe=ge.length;Ae<Fe;Ae++){const dt=ge[Ae],Se=r.get(dt);n.bindTexture(s.TEXTURE_2D,Se.__webglTexture),I(s.TEXTURE_2D,dt),le(Y.__webglFramebuffer,b,dt,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,0),g(dt)&&v(s.TEXTURE_2D)}n.unbindTexture()}else{let Ae=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Ae=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ae,fe.__webglTexture),I(Ae,T),T.mipmaps&&T.mipmaps.length>0)for(let Fe=0;Fe<T.mipmaps.length;Fe++)le(Y.__webglFramebuffer[Fe],b,T,s.COLOR_ATTACHMENT0,Ae,Fe);else le(Y.__webglFramebuffer,b,T,s.COLOR_ATTACHMENT0,Ae,0);g(T)&&v(Ae),n.unbindTexture()}b.depthBuffer&&Pe(b)}function pt(b){const T=b.textures;for(let Y=0,fe=T.length;Y<fe;Y++){const ge=T[Y];if(g(ge)){const ce=b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,je=r.get(ge).__webglTexture;n.bindTexture(ce,je),v(ce),n.unbindTexture()}}}const lt=[],O=[];function tn(b){if(b.samples>0){if(ft(b)===!1){const T=b.textures,Y=b.width,fe=b.height;let ge=s.COLOR_BUFFER_BIT;const ce=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,je=r.get(b),Ae=T.length>1;if(Ae)for(let Fe=0;Fe<T.length;Fe++)n.bindFramebuffer(s.FRAMEBUFFER,je.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,je.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let Fe=0;Fe<T.length;Fe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),Ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,je.__webglColorRenderbuffer[Fe]);const dt=r.get(T[Fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,dt,0)}s.blitFramebuffer(0,0,Y,fe,0,0,Y,fe,ge,s.NEAREST),p===!0&&(lt.length=0,O.length=0,lt.push(s.COLOR_ATTACHMENT0+Fe),b.depthBuffer&&b.resolveDepthBuffer===!1&&(lt.push(ce),O.push(ce),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,O)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,lt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ae)for(let Fe=0;Fe<T.length;Fe++){n.bindFramebuffer(s.FRAMEBUFFER,je.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,je.__webglColorRenderbuffer[Fe]);const dt=r.get(T[Fe]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,je.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,dt,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&p){const T=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function at(b){return Math.min(a.maxSamples,b.samples)}function ft(b){const T=r.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function $e(b){const T=f.render.frame;_.get(b)!==T&&(_.set(b,T),b.update())}function Tt(b,T){const Y=b.colorSpace,fe=b.format,ge=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||Y!==_r&&Y!==hr&&(Mt.getTransfer(Y)===Dt?(fe!==si||ge!==Fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),T}function Qe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(m.width=b.naturalWidth||b.width,m.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(m.width=b.displayWidth,m.height=b.displayHeight):(m.width=b.width,m.height=b.height),m}this.allocateTextureUnit=ne,this.resetTextureUnits=R,this.setTexture2D=oe,this.setTexture2DArray=he,this.setTexture3D=te,this.setTextureCube=ae,this.rebindTextures=be,this.setupRenderTarget=et,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=le,this.useMultisampledRTT=ft}function iE(s,e){function n(r,a=hr){let u;const f=Mt.getTransfer(a);if(r===Fi)return s.UNSIGNED_BYTE;if(r===qf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Kf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===zm)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===km)return s.BYTE;if(r===Bm)return s.SHORT;if(r===Fo)return s.UNSIGNED_SHORT;if(r===Yf)return s.INT;if(r===Gr)return s.UNSIGNED_INT;if(r===Di)return s.FLOAT;if(r===Oo)return s.HALF_FLOAT;if(r===Hm)return s.ALPHA;if(r===Vm)return s.RGB;if(r===si)return s.RGBA;if(r===Gm)return s.LUMINANCE;if(r===Wm)return s.LUMINANCE_ALPHA;if(r===Ns)return s.DEPTH_COMPONENT;if(r===Bs)return s.DEPTH_STENCIL;if(r===Xm)return s.RED;if(r===$f)return s.RED_INTEGER;if(r===jm)return s.RG;if(r===Zf)return s.RG_INTEGER;if(r===Qf)return s.RGBA_INTEGER;if(r===Sl||r===Ml||r===El||r===Tl)if(f===Dt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Sl)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ml)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===El)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Tl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Sl)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ml)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===El)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Tl)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===pf||r===mf||r===gf||r===_f)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===pf)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===mf)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===gf)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===_f)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===vf||r===xf||r===yf)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===vf||r===xf)return f===Dt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===yf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Sf||r===Mf||r===Ef||r===Tf||r===wf||r===Af||r===Cf||r===Rf||r===Pf||r===bf||r===Lf||r===Df||r===Nf||r===If)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Sf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Mf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ef)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Tf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===wf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Af)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Cf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Rf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Pf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===bf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Lf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Df)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Nf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===If)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===wl||r===Uf||r===Ff)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===wl)return f===Dt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Uf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ff)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ym||r===Of||r===kf||r===Bf)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===wl)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Of)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===kf)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Bf)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ks?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class rE extends ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ml extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sE={type:"move"};class Qc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ml,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ml,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ml,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const C of e.hand.values()){const g=n.getJointPose(C,r),v=this._getHandJoint(m,C);g!==null&&(v.matrix.fromArray(g.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=g.radius),v.visible=g!==null}const _=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],x=_.position.distanceTo(y.position),S=.02,w=.005;m.inputState.pinching&&x>S+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=S-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(sE)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new ml;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const oE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aE=`
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

}`;class lE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new An,u=e.properties.get(a);u.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new ki({vertexShader:oE,fragmentShader:aE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ii(new kl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uE extends Hs{constructor(e,n){super();const r=this;let a=null,u=1,f=null,d="local-floor",p=1,m=null,_=null,y=null,x=null,S=null,w=null;const C=new lE,g=n.getContextAttributes();let v=null,N=null;const P=[],D=[],Q=new Ct;let B=null;const U=new ni;U.layers.enable(1),U.viewport=new Ht;const X=new ni;X.layers.enable(2),X.viewport=new Ht;const xe=[U,X],E=new rE;E.layers.enable(1),E.layers.enable(2);let R=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let le=P[q];return le===void 0&&(le=new Qc,P[q]=le),le.getTargetRaySpace()},this.getControllerGrip=function(q){let le=P[q];return le===void 0&&(le=new Qc,P[q]=le),le.getGripSpace()},this.getHand=function(q){let le=P[q];return le===void 0&&(le=new Qc,P[q]=le),le.getHandSpace()};function J(q){const le=D.indexOf(q.inputSource);if(le===-1)return;const ve=P[le];ve!==void 0&&(ve.update(q.inputSource,q.frame,m||f),ve.dispatchEvent({type:q.type,data:q.inputSource}))}function oe(){a.removeEventListener("select",J),a.removeEventListener("selectstart",J),a.removeEventListener("selectend",J),a.removeEventListener("squeeze",J),a.removeEventListener("squeezestart",J),a.removeEventListener("squeezeend",J),a.removeEventListener("end",oe),a.removeEventListener("inputsourceschange",he);for(let q=0;q<P.length;q++){const le=D[q];le!==null&&(D[q]=null,P[q].disconnect(le))}R=null,ne=null,C.reset(),e.setRenderTarget(v),S=null,x=null,y=null,a=null,N=null,Ue.stop(),r.isPresenting=!1,e.setPixelRatio(B),e.setSize(Q.width,Q.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){u=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){d=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(q){m=q},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return y},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(q){if(a=q,a!==null){if(v=e.getRenderTarget(),a.addEventListener("select",J),a.addEventListener("selectstart",J),a.addEventListener("selectend",J),a.addEventListener("squeeze",J),a.addEventListener("squeezestart",J),a.addEventListener("squeezeend",J),a.addEventListener("end",oe),a.addEventListener("inputsourceschange",he),g.xrCompatible!==!0&&await n.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(Q),a.renderState.layers===void 0){const le={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(a,n,le),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),N=new Wr(S.framebufferWidth,S.framebufferHeight,{format:si,type:Fi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let le=null,ve=null,ye=null;g.depth&&(ye=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,le=g.stencil?Bs:Ns,ve=g.stencil?ks:Gr);const Pe={colorFormat:n.RGBA8,depthFormat:ye,scaleFactor:u};y=new XRWebGLBinding(a,n),x=y.createProjectionLayer(Pe),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),N=new Wr(x.textureWidth,x.textureHeight,{format:si,type:Fi,depthTexture:new ug(x.textureWidth,x.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await a.requestReferenceSpace(d),Ue.setContext(a),Ue.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function he(q){for(let le=0;le<q.removed.length;le++){const ve=q.removed[le],ye=D.indexOf(ve);ye>=0&&(D[ye]=null,P[ye].disconnect(ve))}for(let le=0;le<q.added.length;le++){const ve=q.added[le];let ye=D.indexOf(ve);if(ye===-1){for(let be=0;be<P.length;be++)if(be>=D.length){D.push(ve),ye=be;break}else if(D[be]===null){D[be]=ve,ye=be;break}if(ye===-1)break}const Pe=P[ye];Pe&&Pe.connect(ve)}}const te=new ee,ae=new ee;function k(q,le,ve){te.setFromMatrixPosition(le.matrixWorld),ae.setFromMatrixPosition(ve.matrixWorld);const ye=te.distanceTo(ae),Pe=le.projectionMatrix.elements,be=ve.projectionMatrix.elements,et=Pe[14]/(Pe[10]-1),pt=Pe[14]/(Pe[10]+1),lt=(Pe[9]+1)/Pe[5],O=(Pe[9]-1)/Pe[5],tn=(Pe[8]-1)/Pe[0],at=(be[8]+1)/be[0],ft=et*tn,$e=et*at,Tt=ye/(-tn+at),Qe=Tt*-tn;if(le.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Qe),q.translateZ(Tt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Pe[10]===-1)q.projectionMatrix.copy(le.projectionMatrix),q.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const b=et+Tt,T=pt+Tt,Y=ft-Qe,fe=$e+(ye-Qe),ge=lt*pt/T*b,ce=O*pt/T*b;q.projectionMatrix.makePerspective(Y,fe,ge,ce,b,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ue(q,le){le===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(le.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(a===null)return;let le=q.near,ve=q.far;C.texture!==null&&(C.depthNear>0&&(le=C.depthNear),C.depthFar>0&&(ve=C.depthFar)),E.near=X.near=U.near=le,E.far=X.far=U.far=ve,(R!==E.near||ne!==E.far)&&(a.updateRenderState({depthNear:E.near,depthFar:E.far}),R=E.near,ne=E.far);const ye=q.parent,Pe=E.cameras;ue(E,ye);for(let be=0;be<Pe.length;be++)ue(Pe[be],ye);Pe.length===2?k(E,U,X):E.projectionMatrix.copy(U.projectionMatrix),se(q,E,ye)};function se(q,le,ve){ve===null?q.matrix.copy(le.matrixWorld):(q.matrix.copy(ve.matrixWorld),q.matrix.invert(),q.matrix.multiply(le.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(le.projectionMatrix),q.projectionMatrixInverse.copy(le.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=zf*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(x===null&&S===null))return p},this.setFoveation=function(q){p=q,x!==null&&(x.fixedFoveation=q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=q)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(E)};let I=null;function ie(q,le){if(_=le.getViewerPose(m||f),w=le,_!==null){const ve=_.views;S!==null&&(e.setRenderTargetFramebuffer(N,S.framebuffer),e.setRenderTarget(N));let ye=!1;ve.length!==E.cameras.length&&(E.cameras.length=0,ye=!0);for(let be=0;be<ve.length;be++){const et=ve[be];let pt=null;if(S!==null)pt=S.getViewport(et);else{const O=y.getViewSubImage(x,et);pt=O.viewport,be===0&&(e.setRenderTargetTextures(N,O.colorTexture,x.ignoreDepthValues?void 0:O.depthStencilTexture),e.setRenderTarget(N))}let lt=xe[be];lt===void 0&&(lt=new ni,lt.layers.enable(be),lt.viewport=new Ht,xe[be]=lt),lt.matrix.fromArray(et.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(et.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(pt.x,pt.y,pt.width,pt.height),be===0&&(E.matrix.copy(lt.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ye===!0&&E.cameras.push(lt)}const Pe=a.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const be=y.getDepthInformation(ve[0]);be&&be.isValid&&be.texture&&C.init(e,be,a.renderState)}}for(let ve=0;ve<P.length;ve++){const ye=D[ve],Pe=P[ve];ye!==null&&Pe!==void 0&&Pe.update(ye,le,m||f)}I&&I(q,le),le.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:le}),w=null}const Ue=new ag;Ue.setAnimationLoop(ie),this.setAnimationLoop=function(q){I=q},this.dispose=function(){}}}const Fr=new Oi,cE=new Bt;function fE(s,e){function n(g,v){g.matrixAutoUpdate===!0&&g.updateMatrix(),v.value.copy(g.matrix)}function r(g,v){v.color.getRGB(g.fogColor.value,ig(s)),v.isFog?(g.fogNear.value=v.near,g.fogFar.value=v.far):v.isFogExp2&&(g.fogDensity.value=v.density)}function a(g,v,N,P,D){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(g,v):v.isMeshToonMaterial?(u(g,v),y(g,v)):v.isMeshPhongMaterial?(u(g,v),_(g,v)):v.isMeshStandardMaterial?(u(g,v),x(g,v),v.isMeshPhysicalMaterial&&S(g,v,D)):v.isMeshMatcapMaterial?(u(g,v),w(g,v)):v.isMeshDepthMaterial?u(g,v):v.isMeshDistanceMaterial?(u(g,v),C(g,v)):v.isMeshNormalMaterial?u(g,v):v.isLineBasicMaterial?(f(g,v),v.isLineDashedMaterial&&d(g,v)):v.isPointsMaterial?p(g,v,N,P):v.isSpriteMaterial?m(g,v):v.isShadowMaterial?(g.color.value.copy(v.color),g.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(g,v){g.opacity.value=v.opacity,v.color&&g.diffuse.value.copy(v.color),v.emissive&&g.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(g.map.value=v.map,n(v.map,g.mapTransform)),v.alphaMap&&(g.alphaMap.value=v.alphaMap,n(v.alphaMap,g.alphaMapTransform)),v.bumpMap&&(g.bumpMap.value=v.bumpMap,n(v.bumpMap,g.bumpMapTransform),g.bumpScale.value=v.bumpScale,v.side===wn&&(g.bumpScale.value*=-1)),v.normalMap&&(g.normalMap.value=v.normalMap,n(v.normalMap,g.normalMapTransform),g.normalScale.value.copy(v.normalScale),v.side===wn&&g.normalScale.value.negate()),v.displacementMap&&(g.displacementMap.value=v.displacementMap,n(v.displacementMap,g.displacementMapTransform),g.displacementScale.value=v.displacementScale,g.displacementBias.value=v.displacementBias),v.emissiveMap&&(g.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,g.emissiveMapTransform)),v.specularMap&&(g.specularMap.value=v.specularMap,n(v.specularMap,g.specularMapTransform)),v.alphaTest>0&&(g.alphaTest.value=v.alphaTest);const N=e.get(v),P=N.envMap,D=N.envMapRotation;P&&(g.envMap.value=P,Fr.copy(D),Fr.x*=-1,Fr.y*=-1,Fr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Fr.y*=-1,Fr.z*=-1),g.envMapRotation.value.setFromMatrix4(cE.makeRotationFromEuler(Fr)),g.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=v.reflectivity,g.ior.value=v.ior,g.refractionRatio.value=v.refractionRatio),v.lightMap&&(g.lightMap.value=v.lightMap,g.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,g.lightMapTransform)),v.aoMap&&(g.aoMap.value=v.aoMap,g.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,g.aoMapTransform))}function f(g,v){g.diffuse.value.copy(v.color),g.opacity.value=v.opacity,v.map&&(g.map.value=v.map,n(v.map,g.mapTransform))}function d(g,v){g.dashSize.value=v.dashSize,g.totalSize.value=v.dashSize+v.gapSize,g.scale.value=v.scale}function p(g,v,N,P){g.diffuse.value.copy(v.color),g.opacity.value=v.opacity,g.size.value=v.size*N,g.scale.value=P*.5,v.map&&(g.map.value=v.map,n(v.map,g.uvTransform)),v.alphaMap&&(g.alphaMap.value=v.alphaMap,n(v.alphaMap,g.alphaMapTransform)),v.alphaTest>0&&(g.alphaTest.value=v.alphaTest)}function m(g,v){g.diffuse.value.copy(v.color),g.opacity.value=v.opacity,g.rotation.value=v.rotation,v.map&&(g.map.value=v.map,n(v.map,g.mapTransform)),v.alphaMap&&(g.alphaMap.value=v.alphaMap,n(v.alphaMap,g.alphaMapTransform)),v.alphaTest>0&&(g.alphaTest.value=v.alphaTest)}function _(g,v){g.specular.value.copy(v.specular),g.shininess.value=Math.max(v.shininess,1e-4)}function y(g,v){v.gradientMap&&(g.gradientMap.value=v.gradientMap)}function x(g,v){g.metalness.value=v.metalness,v.metalnessMap&&(g.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,g.metalnessMapTransform)),g.roughness.value=v.roughness,v.roughnessMap&&(g.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,g.roughnessMapTransform)),v.envMap&&(g.envMapIntensity.value=v.envMapIntensity)}function S(g,v,N){g.ior.value=v.ior,v.sheen>0&&(g.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),g.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(g.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,g.sheenColorMapTransform)),v.sheenRoughnessMap&&(g.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,g.sheenRoughnessMapTransform))),v.clearcoat>0&&(g.clearcoat.value=v.clearcoat,g.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(g.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,g.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(g.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===wn&&g.clearcoatNormalScale.value.negate())),v.dispersion>0&&(g.dispersion.value=v.dispersion),v.iridescence>0&&(g.iridescence.value=v.iridescence,g.iridescenceIOR.value=v.iridescenceIOR,g.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(g.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,g.iridescenceMapTransform)),v.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),v.transmission>0&&(g.transmission.value=v.transmission,g.transmissionSamplerMap.value=N.texture,g.transmissionSamplerSize.value.set(N.width,N.height),v.transmissionMap&&(g.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,g.transmissionMapTransform)),g.thickness.value=v.thickness,v.thicknessMap&&(g.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=v.attenuationDistance,g.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(g.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(g.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=v.specularIntensity,g.specularColor.value.copy(v.specularColor),v.specularColorMap&&(g.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,g.specularColorMapTransform)),v.specularIntensityMap&&(g.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,g.specularIntensityMapTransform))}function w(g,v){v.matcap&&(g.matcap.value=v.matcap)}function C(g,v){const N=e.get(v).light;g.referencePosition.value.setFromMatrixPosition(N.matrixWorld),g.nearDistance.value=N.shadow.camera.near,g.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function dE(s,e,n,r){let a={},u={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(N,P){const D=P.program;r.uniformBlockBinding(N,D)}function m(N,P){let D=a[N.id];D===void 0&&(w(N),D=_(N),a[N.id]=D,N.addEventListener("dispose",g));const Q=P.program;r.updateUBOMapping(N,Q);const B=e.render.frame;u[N.id]!==B&&(x(N),u[N.id]=B)}function _(N){const P=y();N.__bindingPointIndex=P;const D=s.createBuffer(),Q=N.__size,B=N.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,Q,B),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,D),D}function y(){for(let N=0;N<d;N++)if(f.indexOf(N)===-1)return f.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const P=a[N.id],D=N.uniforms,Q=N.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let B=0,U=D.length;B<U;B++){const X=Array.isArray(D[B])?D[B]:[D[B]];for(let xe=0,E=X.length;xe<E;xe++){const R=X[xe];if(S(R,B,xe,Q)===!0){const ne=R.__offset,J=Array.isArray(R.value)?R.value:[R.value];let oe=0;for(let he=0;he<J.length;he++){const te=J[he],ae=C(te);typeof te=="number"||typeof te=="boolean"?(R.__data[0]=te,s.bufferSubData(s.UNIFORM_BUFFER,ne+oe,R.__data)):te.isMatrix3?(R.__data[0]=te.elements[0],R.__data[1]=te.elements[1],R.__data[2]=te.elements[2],R.__data[3]=0,R.__data[4]=te.elements[3],R.__data[5]=te.elements[4],R.__data[6]=te.elements[5],R.__data[7]=0,R.__data[8]=te.elements[6],R.__data[9]=te.elements[7],R.__data[10]=te.elements[8],R.__data[11]=0):(te.toArray(R.__data,oe),oe+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ne,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(N,P,D,Q){const B=N.value,U=P+"_"+D;if(Q[U]===void 0)return typeof B=="number"||typeof B=="boolean"?Q[U]=B:Q[U]=B.clone(),!0;{const X=Q[U];if(typeof B=="number"||typeof B=="boolean"){if(X!==B)return Q[U]=B,!0}else if(X.equals(B)===!1)return X.copy(B),!0}return!1}function w(N){const P=N.uniforms;let D=0;const Q=16;for(let U=0,X=P.length;U<X;U++){const xe=Array.isArray(P[U])?P[U]:[P[U]];for(let E=0,R=xe.length;E<R;E++){const ne=xe[E],J=Array.isArray(ne.value)?ne.value:[ne.value];for(let oe=0,he=J.length;oe<he;oe++){const te=J[oe],ae=C(te),k=D%Q,ue=k%ae.boundary,se=k+ue;D+=ue,se!==0&&Q-se<ae.storage&&(D+=Q-se),ne.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=D,D+=ae.storage}}}const B=D%Q;return B>0&&(D+=Q-B),N.__size=D,N.__cache={},this}function C(N){const P={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(P.boundary=4,P.storage=4):N.isVector2?(P.boundary=8,P.storage=8):N.isVector3||N.isColor?(P.boundary=16,P.storage=12):N.isVector4?(P.boundary=16,P.storage=16):N.isMatrix3?(P.boundary=48,P.storage=48):N.isMatrix4?(P.boundary=64,P.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),P}function g(N){const P=N.target;P.removeEventListener("dispose",g);const D=f.indexOf(P.__bindingPointIndex);f.splice(D,1),s.deleteBuffer(a[P.id]),delete a[P.id],delete u[P.id]}function v(){for(const N in a)s.deleteBuffer(a[N]);f=[],a={},u={}}return{bind:p,update:m,dispose:v}}class hE{constructor(e={}){const{canvas:n=e0(),context:r=null,depth:a=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:y=!1}=e;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=f;const S=new Uint32Array(4),w=new Int32Array(4);let C=null,g=null;const v=[],N=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=di,this.toneMapping=mr,this.toneMappingExposure=1;const P=this;let D=!1,Q=0,B=0,U=null,X=-1,xe=null;const E=new Ht,R=new Ht;let ne=null;const J=new yt(0);let oe=0,he=n.width,te=n.height,ae=1,k=null,ue=null;const se=new Ht(0,0,he,te),I=new Ht(0,0,he,te);let ie=!1;const Ue=new og;let q=!1,le=!1;const ve=new Bt,ye=new Bt,Pe=new ee,be=new Ht,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function lt(){return U===null?ae:1}let O=r;function tn(A,V){return n.getContext(A,V)}try{const A={alpha:!0,depth:a,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:y};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${jf}`),n.addEventListener("webglcontextlost",de,!1),n.addEventListener("webglcontextrestored",Ce,!1),n.addEventListener("webglcontextcreationerror",Ne,!1),O===null){const V="webgl2";if(O=tn(V,A),O===null)throw tn(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let at,ft,$e,Tt,Qe,b,T,Y,fe,ge,ce,je,Ae,Fe,dt,Se,Oe,tt,Je,Be,ut,it,St,H;function Le(){at=new vS(O),at.init(),it=new iE(O,at),ft=new dS(O,at,e,it),$e=new eE(O),ft.reverseDepthBuffer&&$e.buffers.depth.setReversed(!0),Tt=new SS(O),Qe=new BM,b=new nE(O,at,$e,Qe,ft,it,Tt),T=new pS(P),Y=new _S(P),fe=new R0(O),St=new cS(O,fe),ge=new xS(O,fe,Tt,St),ce=new ES(O,ge,fe,Tt),Je=new MS(O,ft,b),Se=new hS(Qe),je=new kM(P,T,Y,at,ft,St,Se),Ae=new fE(P,Qe),Fe=new HM,dt=new YM(at),tt=new uS(P,T,Y,$e,ce,x,p),Oe=new QM(P,ce,ft),H=new dE(O,Tt,ft,$e),Be=new fS(O,at,Tt),ut=new yS(O,at,Tt),Tt.programs=je.programs,P.capabilities=ft,P.extensions=at,P.properties=Qe,P.renderLists=Fe,P.shadowMap=Oe,P.state=$e,P.info=Tt}Le();const re=new uE(P,O);this.xr=re,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=at.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=at.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(A){A!==void 0&&(ae=A,this.setSize(he,te,!1))},this.getSize=function(A){return A.set(he,te)},this.setSize=function(A,V,K=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}he=A,te=V,n.width=Math.floor(A*ae),n.height=Math.floor(V*ae),K===!0&&(n.style.width=A+"px",n.style.height=V+"px"),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(he*ae,te*ae).floor()},this.setDrawingBufferSize=function(A,V,K){he=A,te=V,ae=K,n.width=Math.floor(A*K),n.height=Math.floor(V*K),this.setViewport(0,0,A,V)},this.getCurrentViewport=function(A){return A.copy(E)},this.getViewport=function(A){return A.copy(se)},this.setViewport=function(A,V,K,$){A.isVector4?se.set(A.x,A.y,A.z,A.w):se.set(A,V,K,$),$e.viewport(E.copy(se).multiplyScalar(ae).round())},this.getScissor=function(A){return A.copy(I)},this.setScissor=function(A,V,K,$){A.isVector4?I.set(A.x,A.y,A.z,A.w):I.set(A,V,K,$),$e.scissor(R.copy(I).multiplyScalar(ae).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(A){$e.setScissorTest(ie=A)},this.setOpaqueSort=function(A){k=A},this.setTransparentSort=function(A){ue=A},this.getClearColor=function(A){return A.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(A=!0,V=!0,K=!0){let $=0;if(A){let G=!1;if(U!==null){const Ee=U.texture.format;G=Ee===Qf||Ee===Zf||Ee===$f}if(G){const Ee=U.texture.type,De=Ee===Fi||Ee===Gr||Ee===Fo||Ee===ks||Ee===qf||Ee===Kf,Te=tt.getClearColor(),Ge=tt.getClearAlpha(),Ke=Te.r,Ze=Te.g,We=Te.b;De?(S[0]=Ke,S[1]=Ze,S[2]=We,S[3]=Ge,O.clearBufferuiv(O.COLOR,0,S)):(w[0]=Ke,w[1]=Ze,w[2]=We,w[3]=Ge,O.clearBufferiv(O.COLOR,0,w))}else $|=O.COLOR_BUFFER_BIT}V&&($|=O.DEPTH_BUFFER_BIT,O.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),K&&($|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",de,!1),n.removeEventListener("webglcontextrestored",Ce,!1),n.removeEventListener("webglcontextcreationerror",Ne,!1),Fe.dispose(),dt.dispose(),Qe.dispose(),T.dispose(),Y.dispose(),ce.dispose(),St.dispose(),H.dispose(),je.dispose(),re.dispose(),re.removeEventListener("sessionstart",Bi),re.removeEventListener("sessionend",Xr),Cn.stop()};function de(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const A=Tt.autoReset,V=Oe.enabled,K=Oe.autoUpdate,$=Oe.needsUpdate,G=Oe.type;Le(),Tt.autoReset=A,Oe.enabled=V,Oe.autoUpdate=K,Oe.needsUpdate=$,Oe.type=G}function Ne(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ct(A){const V=A.target;V.removeEventListener("dispose",ct),Ut(V)}function Ut(A){nn(A),Qe.remove(A)}function nn(A){const V=Qe.get(A).programs;V!==void 0&&(V.forEach(function(K){je.releaseProgram(K)}),A.isShaderMaterial&&je.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,K,$,G,Ee){V===null&&(V=et);const De=G.isMesh&&G.matrixWorld.determinant()<0,Te=mi(A,V,K,$,G);$e.setMaterial($,De);let Ge=K.index,Ke=1;if($.wireframe===!0){if(Ge=ge.getWireframeAttribute(K),Ge===void 0)return;Ke=2}const Ze=K.drawRange,We=K.attributes.position;let xt=Ze.start*Ke,wt=(Ze.start+Ze.count)*Ke;Ee!==null&&(xt=Math.max(xt,Ee.start*Ke),wt=Math.min(wt,(Ee.start+Ee.count)*Ke)),Ge!==null?(xt=Math.max(xt,0),wt=Math.min(wt,Ge.count)):We!=null&&(xt=Math.max(xt,0),wt=Math.min(wt,We.count));const At=wt-xt;if(At<0||At===1/0)return;St.setup(G,$,Te,K,Ge);let Nt,gt=Be;if(Ge!==null&&(Nt=fe.get(Ge),gt=ut,gt.setIndex(Nt)),G.isMesh)$.wireframe===!0?($e.setLineWidth($.wireframeLinewidth*lt()),gt.setMode(O.LINES)):gt.setMode(O.TRIANGLES);else if(G.isLine){let ke=$.linewidth;ke===void 0&&(ke=1),$e.setLineWidth(ke*lt()),G.isLineSegments?gt.setMode(O.LINES):G.isLineLoop?gt.setMode(O.LINE_LOOP):gt.setMode(O.LINE_STRIP)}else G.isPoints?gt.setMode(O.POINTS):G.isSprite&&gt.setMode(O.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)gt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))gt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const ke=G._multiDrawStarts,Wt=G._multiDrawCounts,_t=G._multiDrawCount,Rn=Ge?fe.get(Ge).bytesPerElement:1,jn=Qe.get($).currentProgram.getUniforms();for(let $t=0;$t<_t;$t++)jn.setValue(O,"_gl_DrawID",$t),gt.render(ke[$t]/Rn,Wt[$t])}else if(G.isInstancedMesh)gt.renderInstances(xt,At,G.count);else if(K.isInstancedBufferGeometry){const ke=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Wt=Math.min(K.instanceCount,ke);gt.renderInstances(xt,At,Wt)}else gt.render(xt,At)};function ht(A,V,K){A.transparent===!0&&A.side===Li&&A.forceSinglePass===!1?(A.side=wn,A.needsUpdate=!0,Yr(A,V,K),A.side=gr,A.needsUpdate=!0,Yr(A,V,K),A.side=Li):Yr(A,V,K)}this.compile=function(A,V,K=null){K===null&&(K=A),g=dt.get(K),g.init(V),N.push(g),K.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),A!==K&&A.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),g.setupLights();const $=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const Ee=G.material;if(Ee)if(Array.isArray(Ee))for(let De=0;De<Ee.length;De++){const Te=Ee[De];ht(Te,K,G),$.add(Te)}else ht(Ee,K,G),$.add(Ee)}),N.pop(),g=null,$},this.compileAsync=function(A,V,K=null){const $=this.compile(A,V,K);return new Promise(G=>{function Ee(){if($.forEach(function(De){Qe.get(De).currentProgram.isReady()&&$.delete(De)}),$.size===0){G(A);return}setTimeout(Ee,10)}at.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Kt=null;function Fn(A){Kt&&Kt(A)}function Bi(){Cn.stop()}function Xr(){Cn.start()}const Cn=new ag;Cn.setAnimationLoop(Fn),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(A){Kt=A,re.setAnimationLoop(A),A===null?Cn.stop():Cn.start()},re.addEventListener("sessionstart",Bi),re.addEventListener("sessionend",Xr),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(V),V=re.getCamera()),A.isScene===!0&&A.onBeforeRender(P,A,V,U),g=dt.get(A,N.length),g.init(V),N.push(g),ye.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Ue.setFromProjectionMatrix(ye),le=this.localClippingEnabled,q=Se.init(this.clippingPlanes,le),C=Fe.get(A,v.length),C.init(),v.push(C),re.enabled===!0&&re.isPresenting===!0){const Ee=P.xr.getDepthSensingMesh();Ee!==null&&Ws(Ee,V,-1/0,P.sortObjects)}Ws(A,V,0,P.sortObjects),C.finish(),P.sortObjects===!0&&C.sort(k,ue),pt=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,pt&&tt.addToRenderList(C,A),this.info.render.frame++,q===!0&&Se.beginShadows();const K=g.state.shadowsArray;Oe.render(K,A,V),q===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=C.opaque,G=C.transmissive;if(g.setupLights(),V.isArrayCamera){const Ee=V.cameras;if(G.length>0)for(let De=0,Te=Ee.length;De<Te;De++){const Ge=Ee[De];vr($,G,A,Ge)}pt&&tt.render(A);for(let De=0,Te=Ee.length;De<Te;De++){const Ge=Ee[De];zi(C,A,Ge,Ge.viewport)}}else G.length>0&&vr($,G,A,V),pt&&tt.render(A),zi(C,A,V);U!==null&&(b.updateMultisampleRenderTarget(U),b.updateRenderTargetMipmap(U)),A.isScene===!0&&A.onAfterRender(P,A,V),St.resetDefaultState(),X=-1,xe=null,N.pop(),N.length>0?(g=N[N.length-1],q===!0&&Se.setGlobalState(P.clippingPlanes,g.state.camera)):g=null,v.pop(),v.length>0?C=v[v.length-1]:C=null};function Ws(A,V,K,$){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ue.intersectsSprite(A)){$&&be.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ye);const De=ce.update(A),Te=A.material;Te.visible&&C.push(A,De,Te,K,be.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ue.intersectsObject(A))){const De=ce.update(A),Te=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),be.copy(A.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),be.copy(De.boundingSphere.center)),be.applyMatrix4(A.matrixWorld).applyMatrix4(ye)),Array.isArray(Te)){const Ge=De.groups;for(let Ke=0,Ze=Ge.length;Ke<Ze;Ke++){const We=Ge[Ke],xt=Te[We.materialIndex];xt&&xt.visible&&C.push(A,De,xt,K,be.z,We)}}else Te.visible&&C.push(A,De,Te,K,be.z,null)}}const Ee=A.children;for(let De=0,Te=Ee.length;De<Te;De++)Ws(Ee[De],V,K,$)}function zi(A,V,K,$){const G=A.opaque,Ee=A.transmissive,De=A.transparent;g.setupLightsView(K),q===!0&&Se.setGlobalState(P.clippingPlanes,K),$&&$e.viewport(E.copy($)),G.length>0&&pi(G,V,K),Ee.length>0&&pi(Ee,V,K),De.length>0&&pi(De,V,K),$e.buffers.depth.setTest(!0),$e.buffers.depth.setMask(!0),$e.buffers.color.setMask(!0),$e.setPolygonOffset(!1)}function vr(A,V,K,$){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[$.id]===void 0&&(g.state.transmissionRenderTarget[$.id]=new Wr(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?Oo:Fi,minFilter:Vr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const Ee=g.state.transmissionRenderTarget[$.id],De=$.viewport||E;Ee.setSize(De.z,De.w);const Te=P.getRenderTarget();P.setRenderTarget(Ee),P.getClearColor(J),oe=P.getClearAlpha(),oe<1&&P.setClearColor(16777215,.5),P.clear(),pt&&tt.render(K);const Ge=P.toneMapping;P.toneMapping=mr;const Ke=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),g.setupLightsView($),q===!0&&Se.setGlobalState(P.clippingPlanes,$),pi(A,K,$),b.updateMultisampleRenderTarget(Ee),b.updateRenderTargetMipmap(Ee),at.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let We=0,xt=V.length;We<xt;We++){const wt=V[We],At=wt.object,Nt=wt.geometry,gt=wt.material,ke=wt.group;if(gt.side===Li&&At.layers.test($.layers)){const Wt=gt.side;gt.side=wn,gt.needsUpdate=!0,jr(At,K,$,Nt,gt,ke),gt.side=Wt,gt.needsUpdate=!0,Ze=!0}}Ze===!0&&(b.updateMultisampleRenderTarget(Ee),b.updateRenderTargetMipmap(Ee))}P.setRenderTarget(Te),P.setClearColor(J,oe),Ke!==void 0&&($.viewport=Ke),P.toneMapping=Ge}function pi(A,V,K){const $=V.isScene===!0?V.overrideMaterial:null;for(let G=0,Ee=A.length;G<Ee;G++){const De=A[G],Te=De.object,Ge=De.geometry,Ke=$===null?De.material:$,Ze=De.group;Te.layers.test(K.layers)&&jr(Te,V,K,Ge,Ke,Ze)}}function jr(A,V,K,$,G,Ee){A.onBeforeRender(P,V,K,$,G,Ee),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(P,V,K,$,A,Ee),G.transparent===!0&&G.side===Li&&G.forceSinglePass===!1?(G.side=wn,G.needsUpdate=!0,P.renderBufferDirect(K,V,$,G,A,Ee),G.side=gr,G.needsUpdate=!0,P.renderBufferDirect(K,V,$,G,A,Ee),G.side=Li):P.renderBufferDirect(K,V,$,G,A,Ee),A.onAfterRender(P,V,K,$,G,Ee)}function Yr(A,V,K){V.isScene!==!0&&(V=et);const $=Qe.get(A),G=g.state.lights,Ee=g.state.shadowsArray,De=G.state.version,Te=je.getParameters(A,G.state,Ee,V,K),Ge=je.getProgramCacheKey(Te);let Ke=$.programs;$.environment=A.isMeshStandardMaterial?V.environment:null,$.fog=V.fog,$.envMap=(A.isMeshStandardMaterial?Y:T).get(A.envMap||$.environment),$.envMapRotation=$.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,Ke===void 0&&(A.addEventListener("dispose",ct),Ke=new Map,$.programs=Ke);let Ze=Ke.get(Ge);if(Ze!==void 0){if($.currentProgram===Ze&&$.lightsStateVersion===De)return Wo(A,Te),Ze}else Te.uniforms=je.getUniforms(A),A.onBeforeCompile(Te,P),Ze=je.acquireProgram(Te,Ge),Ke.set(Ge,Ze),$.uniforms=Te.uniforms;const We=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(We.clippingPlanes=Se.uniform),Wo(A,Te),$.needsLights=jo(A),$.lightsStateVersion=De,$.needsLights&&(We.ambientLightColor.value=G.state.ambient,We.lightProbe.value=G.state.probe,We.directionalLights.value=G.state.directional,We.directionalLightShadows.value=G.state.directionalShadow,We.spotLights.value=G.state.spot,We.spotLightShadows.value=G.state.spotShadow,We.rectAreaLights.value=G.state.rectArea,We.ltc_1.value=G.state.rectAreaLTC1,We.ltc_2.value=G.state.rectAreaLTC2,We.pointLights.value=G.state.point,We.pointLightShadows.value=G.state.pointShadow,We.hemisphereLights.value=G.state.hemi,We.directionalShadowMap.value=G.state.directionalShadowMap,We.directionalShadowMatrix.value=G.state.directionalShadowMatrix,We.spotShadowMap.value=G.state.spotShadowMap,We.spotLightMatrix.value=G.state.spotLightMatrix,We.spotLightMap.value=G.state.spotLightMap,We.pointShadowMap.value=G.state.pointShadowMap,We.pointShadowMatrix.value=G.state.pointShadowMatrix),$.currentProgram=Ze,$.uniformsList=null,Ze}function Go(A){if(A.uniformsList===null){const V=A.currentProgram.getUniforms();A.uniformsList=Cl.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function Wo(A,V){const K=Qe.get(A);K.outputColorSpace=V.outputColorSpace,K.batching=V.batching,K.batchingColor=V.batchingColor,K.instancing=V.instancing,K.instancingColor=V.instancingColor,K.instancingMorph=V.instancingMorph,K.skinning=V.skinning,K.morphTargets=V.morphTargets,K.morphNormals=V.morphNormals,K.morphColors=V.morphColors,K.morphTargetsCount=V.morphTargetsCount,K.numClippingPlanes=V.numClippingPlanes,K.numIntersection=V.numClipIntersection,K.vertexAlphas=V.vertexAlphas,K.vertexTangents=V.vertexTangents,K.toneMapping=V.toneMapping}function mi(A,V,K,$,G){V.isScene!==!0&&(V=et),b.resetTextureUnits();const Ee=V.fog,De=$.isMeshStandardMaterial?V.environment:null,Te=U===null?P.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:_r,Ge=($.isMeshStandardMaterial?Y:T).get($.envMap||De),Ke=$.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ze=!!K.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),We=!!K.morphAttributes.position,xt=!!K.morphAttributes.normal,wt=!!K.morphAttributes.color;let At=mr;$.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(At=P.toneMapping);const Nt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,gt=Nt!==void 0?Nt.length:0,ke=Qe.get($),Wt=g.state.lights;if(q===!0&&(le===!0||A!==xe)){const on=A===xe&&$.id===X;Se.setState($,A,on)}let _t=!1;$.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Wt.state.version||ke.outputColorSpace!==Te||G.isBatchedMesh&&ke.batching===!1||!G.isBatchedMesh&&ke.batching===!0||G.isBatchedMesh&&ke.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&ke.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&ke.instancing===!1||!G.isInstancedMesh&&ke.instancing===!0||G.isSkinnedMesh&&ke.skinning===!1||!G.isSkinnedMesh&&ke.skinning===!0||G.isInstancedMesh&&ke.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&ke.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&ke.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&ke.instancingMorph===!1&&G.morphTexture!==null||ke.envMap!==Ge||$.fog===!0&&ke.fog!==Ee||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Se.numPlanes||ke.numIntersection!==Se.numIntersection)||ke.vertexAlphas!==Ke||ke.vertexTangents!==Ze||ke.morphTargets!==We||ke.morphNormals!==xt||ke.morphColors!==wt||ke.toneMapping!==At||ke.morphTargetsCount!==gt)&&(_t=!0):(_t=!0,ke.__version=$.version);let Rn=ke.currentProgram;_t===!0&&(Rn=Yr($,V,G));let jn=!1,$t=!1,gi=!1;const Rt=Rn.getUniforms(),ai=ke.uniforms;if($e.useProgram(Rn.program)&&(jn=!0,$t=!0,gi=!0),$.id!==X&&(X=$.id,$t=!0),jn||xe!==A){ft.reverseDepthBuffer?(ve.copy(A.projectionMatrix),n0(ve),i0(ve),Rt.setValue(O,"projectionMatrix",ve)):Rt.setValue(O,"projectionMatrix",A.projectionMatrix),Rt.setValue(O,"viewMatrix",A.matrixWorldInverse);const on=Rt.map.cameraPosition;on!==void 0&&on.setValue(O,Pe.setFromMatrixPosition(A.matrixWorld)),ft.logarithmicDepthBuffer&&Rt.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Rt.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),xe!==A&&(xe=A,$t=!0,gi=!0)}if(G.isSkinnedMesh){Rt.setOptional(O,G,"bindMatrix"),Rt.setOptional(O,G,"bindMatrixInverse");const on=G.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Rt.setValue(O,"boneTexture",on.boneTexture,b))}G.isBatchedMesh&&(Rt.setOptional(O,G,"batchingTexture"),Rt.setValue(O,"batchingTexture",G._matricesTexture,b),Rt.setOptional(O,G,"batchingIdTexture"),Rt.setValue(O,"batchingIdTexture",G._indirectTexture,b),Rt.setOptional(O,G,"batchingColorTexture"),G._colorsTexture!==null&&Rt.setValue(O,"batchingColorTexture",G._colorsTexture,b));const Xs=K.morphAttributes;if((Xs.position!==void 0||Xs.normal!==void 0||Xs.color!==void 0)&&Je.update(G,K,Rn),($t||ke.receiveShadow!==G.receiveShadow)&&(ke.receiveShadow=G.receiveShadow,Rt.setValue(O,"receiveShadow",G.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(ai.envMap.value=Ge,ai.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&V.environment!==null&&(ai.envMapIntensity.value=V.environmentIntensity),$t&&(Rt.setValue(O,"toneMappingExposure",P.toneMappingExposure),ke.needsLights&&Xo(ai,gi),Ee&&$.fog===!0&&Ae.refreshFogUniforms(ai,Ee),Ae.refreshMaterialUniforms(ai,$,ae,te,g.state.transmissionRenderTarget[A.id]),Cl.upload(O,Go(ke),ai,b)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Cl.upload(O,Go(ke),ai,b),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Rt.setValue(O,"center",G.center),Rt.setValue(O,"modelViewMatrix",G.modelViewMatrix),Rt.setValue(O,"normalMatrix",G.normalMatrix),Rt.setValue(O,"modelMatrix",G.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const on=$.uniformsGroups;for(let qr=0,js=on.length;qr<js;qr++){const Hi=on[qr];H.update(Hi,Rn),H.bind(Hi,Rn)}}return Rn}function Xo(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function jo(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(A,V,K){Qe.get(A.texture).__webglTexture=V,Qe.get(A.depthTexture).__webglTexture=K;const $=Qe.get(A);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=K===void 0,$.__autoAllocateDepthBuffer||at.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,V){const K=Qe.get(A);K.__webglFramebuffer=V,K.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,K=0){U=A,Q=V,B=K;let $=!0,G=null,Ee=!1,De=!1;if(A){const Ge=Qe.get(A);if(Ge.__useDefaultFramebuffer!==void 0)$e.bindFramebuffer(O.FRAMEBUFFER,null),$=!1;else if(Ge.__webglFramebuffer===void 0)b.setupRenderTarget(A);else if(Ge.__hasExternalTextures)b.rebindTextures(A,Qe.get(A.texture).__webglTexture,Qe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const We=A.depthTexture;if(Ge.__boundDepthTexture!==We){if(We!==null&&Qe.has(We)&&(A.width!==We.image.width||A.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(A)}}const Ke=A.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(De=!0);const Ze=Qe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ze[V])?G=Ze[V][K]:G=Ze[V],Ee=!0):A.samples>0&&b.useMultisampledRTT(A)===!1?G=Qe.get(A).__webglMultisampledFramebuffer:Array.isArray(Ze)?G=Ze[K]:G=Ze,E.copy(A.viewport),R.copy(A.scissor),ne=A.scissorTest}else E.copy(se).multiplyScalar(ae).floor(),R.copy(I).multiplyScalar(ae).floor(),ne=ie;if($e.bindFramebuffer(O.FRAMEBUFFER,G)&&$&&$e.drawBuffers(A,G),$e.viewport(E),$e.scissor(R),$e.setScissorTest(ne),Ee){const Ge=Qe.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ge.__webglTexture,K)}else if(De){const Ge=Qe.get(A.texture),Ke=V||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ge.__webglTexture,K||0,Ke)}X=-1},this.readRenderTargetPixels=function(A,V,K,$,G,Ee,De){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(Te=Te[De]),Te){$e.bindFramebuffer(O.FRAMEBUFFER,Te);try{const Ge=A.texture,Ke=Ge.format,Ze=Ge.type;if(!ft.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-$&&K>=0&&K<=A.height-G&&O.readPixels(V,K,$,G,it.convert(Ke),it.convert(Ze),Ee)}finally{const Ge=U!==null?Qe.get(U).__webglFramebuffer:null;$e.bindFramebuffer(O.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(A,V,K,$,G,Ee,De){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(Te=Te[De]),Te){const Ge=A.texture,Ke=Ge.format,Ze=Ge.type;if(!ft.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=A.width-$&&K>=0&&K<=A.height-G){$e.bindFramebuffer(O.FRAMEBUFFER,Te);const We=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,We),O.bufferData(O.PIXEL_PACK_BUFFER,Ee.byteLength,O.STREAM_READ),O.readPixels(V,K,$,G,it.convert(Ke),it.convert(Ze),0);const xt=U!==null?Qe.get(U).__webglFramebuffer:null;$e.bindFramebuffer(O.FRAMEBUFFER,xt);const wt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await t0(O,wt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,We),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Ee),O.deleteBuffer(We),O.deleteSync(wt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,V=null,K=0){A.isTexture!==!0&&(Al("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,A=arguments[1]);const $=Math.pow(2,-K),G=Math.floor(A.image.width*$),Ee=Math.floor(A.image.height*$),De=V!==null?V.x:0,Te=V!==null?V.y:0;b.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,K,0,0,De,Te,G,Ee),$e.unbindTexture()},this.copyTextureToTexture=function(A,V,K=null,$=null,G=0){A.isTexture!==!0&&(Al("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,A=arguments[1],V=arguments[2],G=arguments[3]||0,K=null);let Ee,De,Te,Ge,Ke,Ze;K!==null?(Ee=K.max.x-K.min.x,De=K.max.y-K.min.y,Te=K.min.x,Ge=K.min.y):(Ee=A.image.width,De=A.image.height,Te=0,Ge=0),$!==null?(Ke=$.x,Ze=$.y):(Ke=0,Ze=0);const We=it.convert(V.format),xt=it.convert(V.type);b.setTexture2D(V,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,V.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,V.unpackAlignment);const wt=O.getParameter(O.UNPACK_ROW_LENGTH),At=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Nt=O.getParameter(O.UNPACK_SKIP_PIXELS),gt=O.getParameter(O.UNPACK_SKIP_ROWS),ke=O.getParameter(O.UNPACK_SKIP_IMAGES),Wt=A.isCompressedTexture?A.mipmaps[G]:A.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,Wt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Wt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Te),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ge),A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,G,Ke,Ze,Ee,De,We,xt,Wt.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,G,Ke,Ze,Wt.width,Wt.height,We,Wt.data):O.texSubImage2D(O.TEXTURE_2D,G,Ke,Ze,Ee,De,We,xt,Wt),O.pixelStorei(O.UNPACK_ROW_LENGTH,wt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,At),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Nt),O.pixelStorei(O.UNPACK_SKIP_ROWS,gt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ke),G===0&&V.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),$e.unbindTexture()},this.copyTextureToTexture3D=function(A,V,K=null,$=null,G=0){A.isTexture!==!0&&(Al("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,$=arguments[1]||null,A=arguments[2],V=arguments[3],G=arguments[4]||0);let Ee,De,Te,Ge,Ke,Ze,We,xt,wt;const At=A.isCompressedTexture?A.mipmaps[G]:A.image;K!==null?(Ee=K.max.x-K.min.x,De=K.max.y-K.min.y,Te=K.max.z-K.min.z,Ge=K.min.x,Ke=K.min.y,Ze=K.min.z):(Ee=At.width,De=At.height,Te=At.depth,Ge=0,Ke=0,Ze=0),$!==null?(We=$.x,xt=$.y,wt=$.z):(We=0,xt=0,wt=0);const Nt=it.convert(V.format),gt=it.convert(V.type);let ke;if(V.isData3DTexture)b.setTexture3D(V,0),ke=O.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)b.setTexture2DArray(V,0),ke=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,V.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,V.unpackAlignment);const Wt=O.getParameter(O.UNPACK_ROW_LENGTH),_t=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Rn=O.getParameter(O.UNPACK_SKIP_PIXELS),jn=O.getParameter(O.UNPACK_SKIP_ROWS),$t=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,At.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,At.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ge),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ke),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ze),A.isDataTexture||A.isData3DTexture?O.texSubImage3D(ke,G,We,xt,wt,Ee,De,Te,Nt,gt,At.data):V.isCompressedArrayTexture?O.compressedTexSubImage3D(ke,G,We,xt,wt,Ee,De,Te,Nt,At.data):O.texSubImage3D(ke,G,We,xt,wt,Ee,De,Te,Nt,gt,At),O.pixelStorei(O.UNPACK_ROW_LENGTH,Wt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,_t),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Rn),O.pixelStorei(O.UNPACK_SKIP_ROWS,jn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,$t),G===0&&V.generateMipmaps&&O.generateMipmap(ke),$e.unbindTexture()},this.initRenderTarget=function(A){Qe.get(A).__webglFramebuffer===void 0&&b.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),$e.unbindTexture()},this.resetState=function(){Q=0,B=0,U=null,$e.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Jf?"display-p3":"srgb",n.unpackColorSpace=Mt.workingColorSpace===Ol?"display-p3":"srgb"}}class pE extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class pg extends Vs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Il=new ee,Ul=new ee,Am=new Bt,Do=new ed,gl=new Ho,Jc=new ee,Cm=new ee;class mE extends gn{constructor(e=new oi,n=new pg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,u=n.count;a<u;a++)Il.fromBufferAttribute(n,a-1),Ul.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=Il.distanceTo(Ul);e.setAttribute("lineDistance",new Ui(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,u=e.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),gl.copy(r.boundingSphere),gl.applyMatrix4(a),gl.radius+=u,e.ray.intersectsSphere(gl)===!1)return;Am.copy(a).invert(),Do.copy(e.ray).applyMatrix4(Am);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,_=r.index,x=r.attributes.position;if(_!==null){const S=Math.max(0,f.start),w=Math.min(_.count,f.start+f.count);for(let C=S,g=w-1;C<g;C+=m){const v=_.getX(C),N=_.getX(C+1),P=_l(this,e,Do,p,v,N);P&&n.push(P)}if(this.isLineLoop){const C=_.getX(w-1),g=_.getX(S),v=_l(this,e,Do,p,C,g);v&&n.push(v)}}else{const S=Math.max(0,f.start),w=Math.min(x.count,f.start+f.count);for(let C=S,g=w-1;C<g;C+=m){const v=_l(this,e,Do,p,C,C+1);v&&n.push(v)}if(this.isLineLoop){const C=_l(this,e,Do,p,w-1,S);C&&n.push(C)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function _l(s,e,n,r,a,u){const f=s.geometry.attributes.position;if(Il.fromBufferAttribute(f,a),Ul.fromBufferAttribute(f,u),n.distanceSqToSegment(Il,Ul,Jc,Cm)>r)return;Jc.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(Jc);if(!(p<e.near||p>e.far))return{distance:p,point:Cm.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Rm=new ee,Pm=new ee;class gE extends mE{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let a=0,u=n.count;a<u;a+=2)Rm.fromBufferAttribute(n,a),Pm.fromBufferAttribute(n,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+Rm.distanceTo(Pm);e.setAttribute("lineDistance",new Ui(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _E extends Vs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const bm=new Bt,Vf=new ed,vl=new Ho,xl=new ee;class vE extends gn{constructor(e=new oi,n=new _E){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,u=e.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),vl.copy(r.boundingSphere),vl.applyMatrix4(a),vl.radius+=u,e.ray.intersectsSphere(vl)===!1)return;bm.copy(a).invert(),Vf.copy(e.ray).applyMatrix4(bm);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=r.index,y=r.attributes.position;if(m!==null){const x=Math.max(0,f.start),S=Math.min(m.count,f.start+f.count);for(let w=x,C=S;w<C;w++){const g=m.getX(w);xl.fromBufferAttribute(y,g),Lm(xl,g,p,a,e,n,this)}}else{const x=Math.max(0,f.start),S=Math.min(y.count,f.start+f.count);for(let w=x,C=S;w<C;w++)xl.fromBufferAttribute(y,w),Lm(xl,w,p,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Lm(s,e,n,r,a,u,f){const d=Vf.distanceSqToPoint(s);if(d<n){const p=new ee;Vf.closestPointToPoint(s,p),p.applyMatrix4(r);const m=a.ray.origin.distanceTo(p);if(m<a.near||m>a.far)return;u.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jf);const xE=`/**
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
`,yE=`varying float vEnergy;
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
`,mg=()=>{const{engine:s,theme:e}=Xf(),n=Wn.useRef(null),r=Wn.useRef(),[a,u]=Wn.useState(0);return Wn.useEffect(()=>{if(!n.current||!s)return;const f=new hE({antialias:!0,alpha:!0,powerPreference:"high-performance"});f.setPixelRatio(Math.min(window.devicePixelRatio,2)),f.setSize(window.innerWidth,window.innerHeight),f.setClearColor(0,0),n.current.appendChild(f.domElement),r.current=f;const d=new pE,p=new lg(-window.innerWidth/2,window.innerWidth/2,window.innerHeight/2,-window.innerHeight/2,.1,1e3);p.position.z=10;const m=new oi,_=new ki({vertexShader:xE,fragmentShader:yE,transparent:!0,blending:Rl,depthWrite:!1,uniforms:{uTime:{value:0},uAccent:{value:new yt(e==="mission"?15907131:3463423)},uGlowIntensity:{value:1.2},uSize:{value:5.5}}}),y=new vE(m,_);d.add(y);const x=new oi,S=new pg({transparent:!0,blending:Rl,depthWrite:!1,color:e==="mission"?15907131:3463423,opacity:.12}),w=new gE(x,S);d.add(w);let C=0,g=performance.now();const v=s.subscribe(P=>{const{nodes:D,edges:Q}=P,B=new Float32Array(D.length*3),U=new Float32Array(D.length);D.forEach((E,R)=>{B[R*3]=E.position[0]-window.innerWidth/2,B[R*3+1]=E.position[1]-window.innerHeight/2,B[R*3+2]=E.position[2],U[R]=E.energy}),m.setAttribute("position",new Un(B,3)),m.setAttribute("aEnergy",new Un(U,1));const X=new Float32Array(Q.length*6);Q.forEach((E,R)=>{const ne=D[E.from],J=D[E.to];if(ne&&J){const oe=R*6;X[oe]=ne.position[0]-window.innerWidth/2,X[oe+1]=ne.position[1]-window.innerHeight/2,X[oe+2]=ne.position[2],X[oe+3]=J.position[0]-window.innerWidth/2,X[oe+4]=J.position[1]-window.innerHeight/2,X[oe+5]=J.position[2]}}),x.setAttribute("position",new Un(X,3)),_.uniforms.uTime.value=performance.now()*.001,f.render(d,p),C++;const xe=performance.now();xe-g>1e3&&(u(C),C=0,g=xe)}),N=()=>{f.setSize(window.innerWidth,window.innerHeight),p.left=-window.innerWidth/2,p.right=window.innerWidth/2,p.top=window.innerHeight/2,p.bottom=-window.innerHeight/2,p.updateProjectionMatrix()};return window.addEventListener("resize",N),()=>{v(),window.removeEventListener("resize",N),f.dispose(),n.current?.contains(f.domElement)&&n.current.removeChild(f.domElement)}},[s,e]),we.jsxs("div",{ref:n,className:"fixed inset-0 -z-10 bg-[#020202] pointer-events-none",children:[we.jsx("div",{className:"absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"}),we.jsxs("div",{className:"absolute top-4 right-6 font-mono text-[9px] tracking-widest text-neo-accent opacity-30 select-none",children:["SYSTEM_LOAD: ",a," FPS // ",e.toUpperCase(),"_MODE"]})]})},SE=({children:s,showScanlines:e=!0})=>we.jsxs("div",{className:"jk-layout-v2 relative min-h-screen bg-black text-white font-outfit selection:bg-neo-accent selection:text-black",children:[e&&we.jsx("div",{className:"jk-scanline"}),we.jsx(mg,{}),we.jsx("div",{className:"fixed inset-0 pointer-events-none border-[1px] border-white/5 z-[99]"}),we.jsxs("div",{className:"relative z-10",children:[we.jsxs("header",{className:"sticky top-0 z-50 w-full px-8 py-4 bg-black/40 backdrop-blur-xl border-b border-white/5 flex justify-between items-center",children:[we.jsxs("div",{className:"flex flex-col",children:[we.jsx("span",{className:"jk-hud-heading text-neo-accent",children:"JK_SYSTEM_v2.0"}),we.jsxs("div",{className:"flex gap-2 items-center",children:[we.jsx("span",{className:"w-1 h-1 rounded-full bg-green-500 animate-pulse"}),we.jsx("span",{className:"jk-data-label opacity-40",children:"PROTOCOL_LIVING_INTERFACE_ACTIVE"})]})]}),we.jsx("div",{className:"flex gap-6 items-center"})]}),we.jsx("main",{className:"mx-auto max-w-[1600px] p-8 min-h-[calc(100vh-80px)]",children:s}),we.jsxs("footer",{className:"w-full px-8 py-4 border-t border-white/5 flex justify-between items-center",children:[we.jsx("span",{className:"jk-data-label opacity-30",children:"© 2026 JEIKEI_LABS // ALL_SYSTEMS_GO"}),we.jsxs("div",{className:"flex gap-4",children:[we.jsx("span",{className:"jk-data-label text-cyan-500/40",children:"LATENCY: 12ms"}),we.jsx("span",{className:"jk-data-label text-magenta-500/40",children:"THROUGHPUT: 4.8gbps"})]})]})]})]});class gg{nodes=[];edges=[];pulses=[];adjacency=new Map;listeners=new Set;width;height;density=45;constructor(e,n){this.width=e,this.height=n,this.initialize()}initialize(){this.nodes=[],this.edges=[],this.pulses=[],this.adjacency.clear();const e=Math.ceil(this.width/this.density)+1,n=Math.ceil(this.height/this.density)+1;for(let a=0;a<n;a++)for(let u=0;u<e;u++){const f=a*e+u,d=u*this.density+(Math.random()-.5)*20,p=a*this.density+(Math.random()-.5)*20;this.nodes.push({id:f,position:[d,p,0],velocity:[0,0,0],energy:0}),this.adjacency.set(f,[])}const r=(a,u)=>{const f=.7+Math.random()*.3;this.edges.push({from:a,to:u,weight:f}),this.adjacency.get(a)?.push(u),this.adjacency.get(u)?.push(a)};for(let a=0;a<n;a++)for(let u=0;u<e;u++){const f=a*e+u;u<e-1&&r(f,f+1),a<n-1&&r(f,f+e),u<e-1&&a<n-1&&Math.random()>.7&&r(f,f+e+1)}}update(e){const n=[];for(const r of this.pulses){const a=this.nodes[r.nodeId];if(a&&(a.energy=Math.min(a.energy+r.strength,1.5),r.life>1&&r.strength>.1)){const u=this.adjacency.get(r.nodeId)||[];for(const f of u)n.push({nodeId:f,strength:r.strength*.65,life:r.life-1})}}this.nodes.forEach(r=>{r.energy*=.94,r.energy<.001&&(r.energy=0)}),this.pulses=n.length>400?n.sort((r,a)=>a.strength-r.strength).slice(0,400):n,this.notify()}emitPulse(e,n,r=1){let a=-1,u=1/0;for(const f of this.nodes){const d=f.position[0]-e,p=f.position[1]-n,m=d*d+p*p;m<u&&(u=m,a=f.id)}a!==-1&&u<6e4&&this.pulses.push({nodeId:a,strength:r,life:6})}getState(){return{nodes:this.nodes,edges:this.edges,pulses:this.pulses,totalEnergy:this.nodes.reduce((e,n)=>e+n.energy,0)}}notify(){const e=this.getState();this.listeners.forEach(n=>n(e))}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}resize(e,n){this.width=e,this.height=n,this.initialize()}destroy(){this.listeners.clear(),this.nodes=[],this.edges=[],this.pulses=[],this.adjacency.clear()}}const ME={mission:{accent:"#f2b93b",accentStrong:"#ffffff",bg:"#05070a",surface:"#0b0f15",magenta:"#ff00ff",cyan:"#00ffff",muted:"#4a5b7c",glow:"rgba(242, 185, 59, 0.45)"},nebula:{accent:"#34d8ff",accentStrong:"#ffffff",bg:"#02040a",surface:"#0b0f14",magenta:"#ff2bd6",cyan:"#34d8ff",muted:"#4a5b7c",glow:"rgba(52, 216, 255, 0.35)"}},EE=s=>{const e=ME[s];return{"--neo-accent":e.accent,"--neo-accent-strong":e.accentStrong,"--neo-bg":e.bg,"--neo-surface":e.surface,"--neo-magenta":e.magenta,"--neo-cyan":e.cyan,"--neo-muted":e.muted,"--neo-glow":e.glow}},TE=({children:s})=>{const[e,n]=Wn.useState("nebula"),r=Wn.useMemo(()=>{if(typeof window>"u")return null;const u=window.innerWidth||1920,f=window.innerHeight||1080;return new gg(u,f)},[]);Wn.useEffect(()=>{if(!r)return;let u=performance.now(),f;const d=m=>{const _=(m-u)/1e3;u=m;const y=Math.min(_,.1);r.update(y),f=requestAnimationFrame(d)},p=()=>{r.resize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",p),f=requestAnimationFrame(d),()=>{window.removeEventListener("resize",p),cancelAnimationFrame(f),r.destroy()}},[r]),Wn.useEffect(()=>{document.documentElement.setAttribute("data-theme",e)},[e]);const a=Wn.useMemo(()=>EE(e),[e]);return we.jsx(Wf.Provider,{value:{engine:r,theme:e,setTheme:n},children:we.jsx("div",{className:`jk-system-root jk-theme-${e}`,style:a,children:s})})},_g=Object.freeze(Object.defineProperty({__proto__:null,NeoButton:lv,NeoCard:uv,NeoInput:cv,NeoLayout:SE,NeuralBackground:mg,NeuralEngine:gg,SystemContext:Wf,SystemProvider:TE,useSystem:Xf},Symbol.toStringTag,{value:"Module"}));console.warn("JeiKei Legacy: NeoButton is deprecated. Use V2 components instead.");console.warn("JeiKei Legacy: NeoCard is deprecated. Use V2 components instead.");console.warn("JeiKei Legacy: NeoInput is deprecated. Use V2 components instead.");const wE=Nm.forwardRef(({glow:s=!0,className:e,...n},r)=>we.jsx("input",{ref:r,className:Uo("w-full rounded-xl px-4 py-3 text-cyan-50 placeholder:text-cyan-200/50 transition","bg-white/3 border border-cyan-300/35","backdrop-blur-[18px]",s&&"shadow-[0_0_18px_rgba(0,255,255,0.25)]",e),...n}));wE.displayName="NeoInput";console.warn("JeiKei Legacy: NeoPanel is deprecated. Use V2 components instead.");console.warn("JeiKei Legacy: NeoGrid is deprecated. Use V2 components instead.");console.warn("JeiKei Legacy: NeoBadge is deprecated. Use V2 components instead.");const{NeoLayout:AE,NeoButton:yl,NeoCard:No,NeoInput:CE}=_g;function RE(){return we.jsx(AE,{showScanlines:!0,children:we.jsxs("div",{className:"max-w-[1200px] mx-auto space-y-10 py-12",children:[we.jsxs("div",{className:"flex flex-col items-center justify-center space-y-1 mb-16",children:[we.jsx("div",{className:"text-4xl font-black tracking-[0.4em] text-white uppercase drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]",children:"JEIKEI"}),we.jsx("div",{className:"text-[10px] tracking-[0.8em] text-white/50 uppercase ml-2",children:"DESIGN SYSTEM"})]}),we.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[we.jsx(No,{title:"NeoButton",children:we.jsxs("div",{className:"flex gap-4 pt-2",children:[we.jsx(yl,{variant:"primary",size:"sm",children:"Primary"}),we.jsx(yl,{variant:"secondary",size:"sm",children:"Secondary"}),we.jsx(yl,{variant:"outline",size:"sm",children:"Outline"})]})}),we.jsx(No,{title:"NeoInput",children:we.jsx("div",{className:"pt-2",children:we.jsx(CE,{placeholder:"Type here..."})})})]}),we.jsx("div",{className:"flex justify-start",children:we.jsx(yl,{variant:"primary",size:"lg",className:"w-[300px] py-5 text-lg",children:"NeoButton"})}),we.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[we.jsx(No,{title:"NeoCard",children:we.jsxs("div",{className:"space-y-4 pt-2",children:[we.jsx("div",{className:"jk-data-label text-white/40 text-[11px] tracking-widest",children:"Users Online"}),we.jsx("div",{className:"text-5xl font-bold tracking-tighter text-neo-accent",children:"1,250"})]})}),we.jsx(No,{title:"NeoCard",children:we.jsxs("div",{className:"space-y-4 pt-2",children:[we.jsx("div",{className:"jk-data-label text-white/40 text-[11px] tracking-widest",children:"Revenue"}),we.jsx("div",{className:"text-5xl font-bold tracking-tighter text-neo-accent",children:"$32,400"})]})}),we.jsx(No,{title:"NeoCard",children:we.jsxs("div",{className:"space-y-4 pt-2",children:[we.jsx("div",{className:"jk-data-label text-white/40 text-[11px] tracking-widest",children:"CPU Usage"}),we.jsx("div",{className:"text-5xl font-bold tracking-tighter text-neo-accent",children:"62%"})]})})]}),we.jsxs("div",{className:"space-y-6",children:[we.jsx("div",{className:"jk-hud-heading text-white/60 tracking-[0.2em] text-sm",children:"Neural Grid Background"}),we.jsx("div",{className:"w-full h-[400px] jk-glass border-white/5 rounded-[var(--neo-radius)] relative",children:we.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:we.jsx("span",{className:"jk-data-label opacity-10 text-[10px] tracking-[1em]",children:"SYSTEM_GRID_ACTIVE"})})})]})]})})}const{SystemProvider:PE}=_g;ov.createRoot(document.getElementById("root")).render(we.jsx(Nm.StrictMode,{children:we.jsx(PE,{children:we.jsx(RE,{})})}));
