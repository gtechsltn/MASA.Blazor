!function(){"use strict";function e(e,t,n,o){return new(n||(n=Promise))((function(r,i){function l(e){try{a(o.next(e))}catch(e){i(e)}}function s(e){try{a(o.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,s)}a((o=o.apply(e,t||[])).next())}))}let t=!1;try{if("undefined"!=typeof window){const e=Object.defineProperty({},"passive",{get:()=>{t=!0}});window.addEventListener("testListener",e,e),window.removeEventListener("testListener",e,e)}}catch(e){console.warn(e)}const n=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function o(e){if(!e)return null;let t=e.getAttributeNames().find((e=>e.startsWith("_bl_")));return t&&(t=t.substring(4)),t}function r(e){if(e instanceof Element){for(var t=[];e.nodeType===Node.ELEMENT_NODE;){var n=e.nodeName.toLowerCase();if(e.id){n="#"+e.id,t.unshift(n);break}for(var o=e,r=1;o=o.previousElementSibling;)o.nodeName.toLowerCase()==n&&r++;1!=r&&(n+=":nth-of-type("+r+")"),t.unshift(n),e=e.parentNode}return t.join(" > ")}}function i(e){let t;try{if(e)if("string"==typeof e)if("document"===e)t=document.documentElement;else if(e.indexOf("__.__")>0){let n=e.split("__.__"),o=0,r=document.querySelector(n[o++]);if(r)for(;n[o];)r=r[n[o]],o++;r instanceof HTMLElement&&(t=r)}else t=document.querySelector(e);else t=e;else t=document.body}catch(e){console.error(e)}return t}const l=!("undefined"==typeof window||"undefined"==typeof document||!window.document||!window.document.createElement),s=["touchcancel","touchend","touchmove","touchenter","touchleave","touchstart"];function a(e){return{detail:e.detail,screenX:e.screenX,screenY:e.screenY,clientX:e.clientX,clientY:e.clientY,offsetX:e.offsetX,offsetY:e.offsetY,pageX:e.pageX,pageY:e.pageY,button:e.button,buttons:e.buttons,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,altKey:e.altKey,metaKey:e.metaKey,type:e.type}}function c(e){return{detail:e.detail,touches:u(e.touches),targetTouches:u(e.targetTouches),changedTouches:u(e.changedTouches),ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,altKey:e.altKey,metaKey:e.metaKey,type:e.type}}function u(e){const t=[];for(let n=0;n<e.length;n++){const o=e[n];t.push({identifier:o.identifier,clientX:o.clientX,clientY:o.clientY,screenX:o.screenX,screenY:o.screenY,pageX:o.pageX,pageY:o.pageY})}return t}function d(e,t){Blazor&&Blazor.registerCustomEventType(e,{browserEventName:t,createEventArgs:e=>p("mouse",e)})}function f(e,t){Blazor&&Blazor.registerCustomEventType(e,{browserEventName:t,createEventArgs:e=>{const t=(n=e,Object.assign(Object.assign({},a(n)),{dataTransfer:n.dataTransfer?{dropEffect:n.dataTransfer.dropEffect,effectAllowed:n.dataTransfer.effectAllowed,files:Array.from(n.dataTransfer.files).map((e=>e.name)),items:Array.from(n.dataTransfer.items).map((e=>({kind:e.kind,type:e.type}))),types:n.dataTransfer.types}:null}));var n;const o=e.dataTransfer.getData("data-value"),r=e.dataTransfer.getData("offsetX"),i=e.dataTransfer.getData("offsetY");return t.dataTransfer.data={value:o,offsetX:Number(r),offsetY:Number(i)},t}})}function p(e,t){let n={target:{}};return"mouse"===e?n=Object.assign(Object.assign({},n),a(t)):"touch"===e&&(n=Object.assign(Object.assign({},n),c(t))),n.target=function(e){const t=e,n={},o=t.getAttributeNames().find((e=>e.startsWith("_bl_")));return o?(n.elementReferenceId=o,n.selector=`[${o}]`):n.selector=r(t),n.class=t.getAttribute("class"),n}(t.target),n}let m=0;const h={};var v=Object.freeze({__proto__:null,registerSliderEvents:function(n,o){h[m]=s;const r=document.querySelector("[data-app]"),i=!t||{passive:!0,capture:!0},l=!!t&&{passive:!0};return n.addEventListener("mousedown",s),n.addEventListener("touchstart",s),m++;function s(t){return e(this,void 0,void 0,(function*(){const e="touches"in t;c(t),r.addEventListener(e?"touchmove":"mousemove",c,l),function(e,t,n,o=!1){const r=i=>{n(i),e.removeEventListener(t,r,o)};e.addEventListener(t,r,o)}(r,e?"touchend":"mouseup",a,i),e?yield o.invokeMethodAsync("OnTouchStartInternal",p("touch",t)):yield o.invokeMethodAsync("OnMouseDownInternal",p("mouse",t))}))}function a(t){return e(this,void 0,void 0,(function*(){t.stopPropagation(),r.removeEventListener("touchmove",c,l),r.removeEventListener("mousemove",c,l),yield o.invokeMethodAsync("OnMouseUpInternal")}))}function c(t){return e(this,void 0,void 0,(function*(){const e="touches"in t,n={type:t.type,clientX:e?t.touches[0].clientX:t.clientX,clientY:e?t.touches[0].clientY:t.clientY};yield o.invokeMethodAsync("OnMouseMoveInternal",n)}))}},unregisterSliderEvents:function(e,t){if(e){const n=h[t];e.removeEventListener("mousedown",n),e.removeEventListener("touchstart",n),delete h[t]}}});let g=0;const y={};function w(e,t,n){e.style.height="0";const o=e.scrollHeight,r=parseInt(t,10)*parseFloat(n);e.style.height=Math.max(o,r)+"px"}var b=Object.freeze({__proto__:null,registerTextareaAutoGrowEvent:function(e){const t=e=>{const t=e.target;if(void 0===t.getAttribute("data-auto-grow"))return;const n=t.getAttribute("rows"),o=t.getAttribute("data-row-height");w(t,n,o)};return y[g]=t,e.addEventListener("input",t),g++},unregisterTextareaAutoGrowEvent:function(e,t){if(!e)return;const n=y[t];n&&e.removeEventListener("input",n)},calculateTextareaHeight:w}),E=function(e,t,n){var o=null,r=null,i=function(){o&&(clearTimeout(o),r=null,o=null)},l=function(){if(!t)return e.apply(this,arguments);var l=this,s=arguments,a=n&&!o;return i(),r=function(){e.apply(l,s)},o=setTimeout((function(){if(o=null,!a){var e=r;return r=null,e()}}),t),a?r():void 0};return l.cancel=i,l.flush=function(){var e=r;i(),e&&e()},l};var T=function(e,t,n){var o=null,r=null,i=n&&n.leading,l=n&&n.trailing;null==i&&(i=!0);null==l&&(l=!i);1==i&&(l=!1);var s=function(){o&&(clearTimeout(o),o=null)},a=function(){var n=i&&!o,s=this,a=arguments;if(r=function(){return e.apply(s,a)},o||(o=setTimeout((function(){if(o=null,l)return r()}),t)),n)return n=!1,r()};return a.cancel=s,a.flush=function(){var e=r;s(),e&&e()},a};function L(){var e,t;d("exmousedown","mousedown"),d("exmouseup","mouseup"),d("exclick","click"),d("exmouseleave","mouseleave"),d("exmouseenter","mouseenter"),d("exmousemove","mousemove"),e="extouchstart",t="touchstart",Blazor&&Blazor.registerCustomEventType(e,{browserEventName:t,createEventArgs:e=>p("touch",e)}),function(e,t){Blazor&&Blazor.registerCustomEventType(e,{browserEventName:t})}("transitionend","transitionend"),f("exdrop","drop"),Blazor&&Blazor.registerCustomEventType("auxclick",{browserEventName:"auxclick",createEventArgs:a})}const _=80;function C(e,t){e.style.transform=t,e.style.webkitTransform=t}function x(e){return"TouchEvent"===e.constructor.name}function S(e){return"KeyboardEvent"===e.constructor.name}const k={show(e,t,n={}){if(!t._ripple||!t._ripple.enabled)return;const o=document.createElement("span"),r=document.createElement("span");o.appendChild(r),o.className="m-ripple__container",n.class&&(o.className+=` ${n.class}`);const{radius:i,scale:l,x:s,y:a,centerX:c,centerY:u}=((e,t,n={})=>{let o=0,r=0;if(!S(e)){const n=t.getBoundingClientRect(),i=x(e)?e.touches[e.touches.length-1]:e;o=i.clientX-n.left,r=i.clientY-n.top}let i=0,l=.3;t._ripple&&t._ripple.circle?(l=.15,i=t.clientWidth/2,i=n.center?i:i+Math.sqrt((o-i)**2+(r-i)**2)/4):i=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const s=(t.clientWidth-2*i)/2+"px",a=(t.clientHeight-2*i)/2+"px";return{radius:i,scale:l,x:n.center?s:o-i+"px",y:n.center?a:r-i+"px",centerX:s,centerY:a}})(e,t,n),d=2*i+"px";r.className="m-ripple__animation",r.style.width=d,r.style.height=d,t.appendChild(o);const f=window.getComputedStyle(t);f&&"static"===f.position&&(t.style.position="relative",t.dataset.previousPosition="static"),r.classList.add("m-ripple__animation--enter"),r.classList.add("m-ripple__animation--visible"),C(r,`translate(${s}, ${a}) scale3d(${l},${l},${l})`),r.dataset.activated=String(performance.now()),setTimeout((()=>{r.classList.remove("m-ripple__animation--enter"),r.classList.add("m-ripple__animation--in"),C(r,`translate(${c}, ${u}) scale3d(1,1,1)`)}),0)},hide(e){if(!e||!e._ripple||!e._ripple.enabled)return;const t=e.getElementsByClassName("m-ripple__animation");if(0===t.length)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const o=performance.now()-Number(n.dataset.activated),r=Math.max(250-o,0);setTimeout((()=>{n.classList.remove("m-ripple__animation--in"),n.classList.add("m-ripple__animation--out"),setTimeout((()=>{var t;1===e.getElementsByClassName("m-ripple__animation").length&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),(null===(t=n.parentNode)||void 0===t?void 0:t.parentNode)===e&&e.removeChild(n.parentNode)}),300)}),r)}};function A(e){const t={},n=e.currentTarget;if(n&&n._ripple&&!n._ripple.touched&&!e.rippleStop){if(e.rippleStop=!0,x(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||S(e),n._ripple.class&&(t.class=n._ripple.class),x(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{k.show(e,n,t)},n._ripple.showTimer=window.setTimeout((()=>{n&&n._ripple&&n._ripple.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)}),_)}else k.show(e,n,t)}}function M(e){const t=e.currentTarget;if(t&&t._ripple)if(window.clearTimeout(t._ripple.showTimer),"touchend"===e.type&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null;t._ripple.showTimer=setTimeout((()=>M(e)))}else window.setTimeout((()=>{t._ripple&&(t._ripple.touched=!1)})),k.hide(t)}function O(e){const t=e.currentTarget;t&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}function N(e){const t=e.currentTarget;t.keyboardRipple||e.keyCode!==n.enter&&e.keyCode!==n.space||(t.keyboardRipple=!0,A(e))}function H(e){e.currentTarget.keyboardRipple=!1,M(e)}function B(e){const t=e.currentTarget;!0===t.keyboardRipple&&(t.keyboardRipple=!1,M(e))}function I(e,t,n){let o=!1;t?o=!0:k.hide(e);const r=t||{};e._ripple=e._ripple||{},e._ripple.enabled=o,e._ripple=Object.assign(Object.assign({},e._ripple),{centered:r.center,class:r.class,circle:r.circle}),o&&!n?(e.addEventListener("touchstart",A,{passive:!0}),e.addEventListener("touchend",M,{passive:!0}),e.addEventListener("touchmove",O,{passive:!0}),e.addEventListener("touchcancel",M),e.addEventListener("mousedown",A),e.addEventListener("mouseup",M),e.addEventListener("mouseleave",M),e.addEventListener("keydown",N),e.addEventListener("keyup",H),e.addEventListener("blur",B),e.addEventListener("dragstart",M,{passive:!0})):!o&&n&&Y(e)}function Y(e){e.removeEventListener("mousedown",A),e.removeEventListener("touchstart",A),e.removeEventListener("touchend",M),e.removeEventListener("touchmove",O),e.removeEventListener("touchcancel",M),e.removeEventListener("mouseup",M),e.removeEventListener("mouseleave",M),e.removeEventListener("keydown",N),e.removeEventListener("keyup",H),e.removeEventListener("dragstart",M),e.removeEventListener("blur",B),e._ripple.enabled=!1}function P(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return 0;const t=+window.getComputedStyle(e).getPropertyValue("z-index");return t||P(e.parentNode)}function D(e){var t={};t.offsetTop=e.offsetTop||0,t.offsetLeft=e.offsetLeft||0,t.scrollHeight=e.scrollHeight||0,t.scrollWidth=e.scrollWidth||0,t.scrollLeft=e.scrollLeft||0,t.scrollTop=e.scrollTop||0,t.clientTop=e.clientTop||0,t.clientLeft=e.clientLeft||0,t.clientHeight=e.clientHeight||0,t.clientWidth=e.clientWidth||0;var n=function(e){var t=new Object;if(t.x=0,t.y=0,null!==e&&e.getBoundingClientRect){var n=document.documentElement,o=e.getBoundingClientRect(),r=n.scrollLeft,i=n.scrollTop;t.offsetWidth=o.width,t.offsetHeight=o.height,t.relativeTop=o.top,t.relativeBottom=o.bottom,t.relativeLeft=o.left,t.relativeRight=o.right,t.absoluteLeft=o.left+r,t.absoluteTop=o.top+i}return t}(e);return t.offsetWidth=Math.round(n.offsetWidth)||0,t.offsetHeight=Math.round(n.offsetHeight)||0,t.relativeTop=Math.round(n.relativeTop)||0,t.relativeBottom=Math.round(n.relativeBottom)||0,t.relativeLeft=Math.round(n.relativeLeft)||0,t.relativeRight=Math.round(n.relativeRight)||0,t.absoluteLeft=Math.round(n.absoluteLeft)||0,t.absoluteTop=Math.round(n.absoluteTop)||0,t}window.onload=function(){var e;L(),e="pastewithdata",Blazor&&Blazor.registerCustomEventType(e,{browserEventName:"paste",createEventArgs:e=>({type:e.type,pastedData:e.clipboardData.getData("text")})}),function(){const e=new MutationObserver(((e,n)=>{for(const n of e){if("childList"===n.type&&n.addedNodes.length>0)for(const e of n.addedNodes)e instanceof HTMLElement&&e.nodeType===Node.ELEMENT_NODE&&e.hasAttribute("ripple")&&!e._ripple&&I(e,t(e),!1);if("attributes"===n.type){const e=n.target;e.hasAttribute("ripple")&&!e._ripple&&("ripple"===n.attributeName?I(e,t(e),!1):!e.hasAttribute("ripple")&&e._ripple&&(Y(e),delete e._ripple))}if("attributes"===n.type&&"ripple"===n.attributeName){const e=n.target;e._ripple&&I(e,t(e),e._ripple.enabled)}if("childList"===n.type&&n.removedNodes.length>0)for(const e of n.removedNodes)e instanceof HTMLElement&&e.nodeType===Node.ELEMENT_NODE&&e._ripple&&(Y(e),delete e._ripple)}}));function t(e){const t=e.getAttribute("ripple");if("string"!=typeof t&&!t||"false"===t)return null;const n={};return t.split("&").forEach((e=>{"center"===e?n.center=!0:"circle"===e?n.circle=!0:n.class=e.trim()})),n}const n=document.querySelectorAll("[ripple]");for(const e of n)I(e,t(e),!1);e.observe(document,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["ripple"],attributeOldValue:!1})}()};var W={};function X(){return document.activeElement.getAttribute("id")||""}function q(e=[],t=[]){const n={};return e&&(e.forEach((e=>n[e]=window[e])),n.pageYOffset=K()),t&&t.forEach((e=>n[e]=document.documentElement[e])),n}function z(e){return"HTML"!==e.tagName&&"BODY"!==e.tagName&&1==e.nodeType}function R(e=[],t){const n=[P(i(t))],o=[...document.getElementsByClassName("m-menu__content--active"),...document.getElementsByClassName("m-dialog__content--active")];for(let t=0;t<o.length;t++)e.includes(o[t])||n.push(P(o[t]));return Math.max(...n)}function F(e,t,n,o,r,i){if(!r){var l=document.querySelector(i);o.nodeType&&l.appendChild(o)}var s={activator:{},content:{},relativeYOffset:0,offsetParentLeft:0};if(e){var a=document.querySelector(t);s.activator=$(a,n),s.activator.offsetLeft=a.offsetLeft,s.activator.offsetTop=n?0:a.offsetTop}return function(e,t){if(!t||!t.style||"none"!==t.style.display)return void e();t.style.display="inline-block",e(),t.style.display="none"}((()=>{if(o){if(o.offsetParent){const t=j(o.offsetParent);s.relativeYOffset=K()+t.top,e?(s.activator.top-=s.relativeYOffset,s.activator.left-=window.pageXOffset+t.left):s.offsetParentLeft=t.left}s.content=$(o,n)}}),o),s}function K(){let e=window.pageYOffset;const t=parseInt(document.documentElement.style.getPropertyValue("--m-body-scroll-y"));return t&&(e+=Math.abs(t)),e}function $(e,t){if(!e)return{};const n=j(e);if(!t){const t=window.getComputedStyle(e);n.left=parseInt(t.marginLeft),n.top=parseInt(t.marginTop)}return n}function j(e){if(!e||!e.nodeType)return null;const t=e.getBoundingClientRect();return{top:Math.round(t.top),left:Math.round(t.left),bottom:Math.round(t.bottom),right:Math.round(t.right),width:Math.round(t.width),height:Math.round(t.height)}}function V(e,t,n,o){e.preventDefault();const r=e.key;if("ArrowLeft"===r||"Backspace"===r){if("Backspace"===r){const e={type:r,index:t,value:""};o&&o.invokeMethodAsync("Invoke",e)}U(t-1,n)}else"ArrowRight"===r&&U(t+1,n)}function U(e,t){if(e<0)U(0,t);else if(e>=t.length)U(t.length-1,t);else if(document.activeElement!==t[e]){i(t[e]).focus()}}function G(e,t,n){const o=i(n[t]);o&&document.activeElement===o&&o.select()}function Z(e,t,n,o){const r=e.target.value;if(r&&""!==r&&(U(t+1,n),o)){const e={type:"Input",index:t,value:r};o.invokeMethodAsync("Invoke",e)}}function J(){var e,t,n="weird_get_top_level_domain=cookie",o=document.location.hostname.split(".");for(e=o.length-1;e>=0;e--)if(t=o.slice(e).join("."),document.cookie=n+";domain=."+t+";",document.cookie.indexOf(n)>-1)return document.cookie=n.split("=")[0]+"=;domain=."+t+";expires=Thu, 01 Jan 1970 00:00:01 GMT;",t}function Q(e){e.stopPropagation()}var ee=Object.freeze({__proto__:null,getZIndex:P,getDomInfo:function(e,t="body"){var n={},o=i(e);if(o)if(o.style&&"none"===o.style.display){var r=o.cloneNode(!0);r.style.display="inline-block",r.style["z-index"]=-1e3,o.parentElement.appendChild(r),n=D(r),o.parentElement.removeChild(r)}else n=D(o);return n},getParentClientWidthOrWindowInnerWidth:function(e){return e.parentElement?e.parentElement.clientWidth:window.innerWidth},triggerEvent:function(e,t,n){var o=i(e),r=new Event(t);return n&&r.stopPropagation(),o.dispatchEvent(r)},setProperty:function(e,t,n){i(e)[t]=n},getBoundingClientRect:function(e,t="body"){var n,o;let r=i(e);var l={};if(r&&r.getBoundingClientRect)if(r.style&&"none"===r.style.display){var s=r.cloneNode(!0);s.style.display="inline-block",s.style["z-index"]=-1e3,null===(n=document.querySelector(t))||void 0===n||n.appendChild(s),l=s.getBoundingClientRect(),null===(o=document.querySelector(t))||void 0===o||o.removeChild(s)}else l=r.getBoundingClientRect();return l},addHtmlElementEventListener:function(e,t,n,o,i){let l;if(l="window"==e?window:"document"==e?document.documentElement:document.querySelector(e),!l)return!1;var a=(null==i?void 0:i.key)||`${e}:${t}`;const u={};var d=e=>{var t;if((null==i?void 0:i.stopPropagation)&&e.stopPropagation(),("boolean"!=typeof e.cancelable||e.cancelable)&&(null==i?void 0:i.preventDefault)&&e.preventDefault(),(null==i?void 0:i.relatedTarget)&&(null===(t=document.querySelector(i.relatedTarget))||void 0===t?void 0:t.contains(e.relatedTarget)))return;let o={};if(s.includes(e.type))o=c(e);else for(var l in e)"string"!=typeof e[l]&&"number"!=typeof e[l]||(o[l]=e[l]);if(e.target&&e.target!==window&&e.target!==document){o.target={};const t=e.target,n=t.getAttributeNames().find((e=>e.startsWith("_bl_")));n?(o.target.elementReferenceId=n,o.target.selector=`[${n}]`):o.target.selector=r(t),o.target.class=t.getAttribute("class")}n.invokeMethodAsync("Invoke",o)};return(null==i?void 0:i.debounce)&&i.debounce>0?u.listener=E(d,i.debounce):(null==i?void 0:i.throttle)&&i.throttle>0?u.listener=T(d,i.throttle,{trailing:!0}):u.listener=d,u.options=o,u.handle=n,W[a]?W[a].push(u):W[a]=[u],l.addEventListener(t,u.listener,u.options),!0},removeHtmlElementEventListener:function(e,t,n){let o;o="window"==e?window:"document"==e?document.documentElement:document.querySelector(e);var r=W[n=n||`${e}:${t}`];r&&(r.forEach((e=>{e.handle.dispose(),null==o||o.removeEventListener(t,e.listener,e.options)})),W[n]=[])},addMouseleaveEventListener:function(e){var t=document.querySelector(e);t&&t.addEventListener()},contains:function(e,t){const n=i(e);return!(!n||!n.contains)&&n.contains(i(t))},equalsOrContains:function(e,t){const n=i(e),o=i(t);return!!n&&n.contains&&!!o&&(n==o||n.contains(o))},copy:function(e){navigator.clipboard?navigator.clipboard.writeText(e).then((function(){console.log("Async: Copying to clipboard was successful!")}),(function(e){console.error("Async: Could not copy text: ",e)})):function(e){var t=document.createElement("textarea");t.value=e,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{var n=document.execCommand("copy")?"successful":"unsuccessful";console.log("Fallback: Copying text command was "+n)}catch(e){console.error("Fallback: Oops, unable to copy",e)}document.body.removeChild(t)}(e)},focus:function(e,t=!1){let n=i(e);n instanceof HTMLElement?n.focus({preventScroll:t}):console.error("Unable to focus an invalid element")},select:function(e){let t=i(e);if(!(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement))throw new Error("Unable to select an invalid element");t.select()},hasFocus:function(e){let t=i(e);return document.activeElement===t},blur:function(e){i(e).blur()},log:function(e){console.log(e)},scrollIntoView:function(e,t){let n=i(e);n instanceof HTMLElement&&(null===t||null==t?n.scrollIntoView():"boolean"==typeof t?n.scrollIntoView(t):n.scrollIntoView({block:null==t.block?void 0:t.block,inline:null==t.inline?void 0:t.inline,behavior:t.behavior}))},scrollIntoParentView:function(e,t=!1,n=!1,o=1,r="smooth"){const l=i(e);if(l instanceof HTMLElement){let e=l;for(;o>0;)if(e=e.parentElement,o--,!e)return;const i={behavior:r};if(t)if(n)i.left=l.offsetLeft;else{const t=l.offsetLeft-e.offsetLeft;t-e.scrollLeft<0?i.left=t:t+l.offsetWidth-e.scrollLeft>e.offsetWidth&&(i.left=t+l.offsetWidth-e.offsetWidth)}else if(n)i.top=l.offsetTop;else{const t=l.offsetTop-e.offsetTop;t-e.scrollTop<0?i.top=t:t+l.offsetHeight-e.scrollTop>e.offsetHeight&&(i.top=t+l.offsetHeight-e.offsetHeight)}(i.left||i.top)&&e.scrollTo(i)}},scrollTo:function(e,t){let n=i(e);if(n instanceof HTMLElement){const e={left:null===t.left?void 0:t.left,top:null===t.top?void 0:t.top,behavior:t.behavior};n.scrollTo(e)}},scrollToTarget:function(e,t=null,n=0){const o=document.querySelector(e);if(o){let e;e=t?o.offsetTop:o.getBoundingClientRect().top+window.scrollY;(t?document.querySelector(t):document.documentElement).scrollTo({top:e-n,behavior:"smooth"})}},scrollToElement:function(e,t,n){const o=i(e);if(!o)return;const r=o.getBoundingClientRect().top+window.pageYOffset-t;window.scrollTo({top:r,behavior:n})},scrollToActiveElement:function(e,t=".active",n="center"){let o,r=i(e);"string"==typeof t&&(o=e.querySelector(t)),r&&o&&(r.scrollTop="center"===n?o.offsetTop-r.offsetHeight/2+o.offsetHeight/2:o.offsetTop-n)},addClsToFirstChild:function(e,t){var n=i(e);n.firstElementChild&&n.firstElementChild.classList.add(t)},removeClsFromFirstChild:function(e,t){var n=i(e);n.firstElementChild&&n.firstElementChild.classList.remove(t)},getAbsoluteTop:function e(t){var n=t.offsetTop;return null!=t.offsetParent&&(n+=e(t.offsetParent)),n},getAbsoluteLeft:function e(t){var n=t.offsetLeft;return null!=t.offsetParent&&(n+=e(t.offsetParent)),n},addElementToBody:function(e){document.body.appendChild(e)},delElementFromBody:function(e){document.body.removeChild(e)},addElementTo:function(e,t){let n=i(t);n&&e&&n.appendChild(e)},delElementFrom:function(e,t){let n=i(t);n&&e&&n.removeChild(e)},getActiveElement:X,focusDialog:function e(t,n=0){let o=document.querySelector(t);o&&!o.hasAttribute("disabled")&&setTimeout((()=>{o.focus(),"#"+X()!==t&&n<10&&e(t,n+1)}),10)},getWindow:function(){return{innerWidth:window.innerWidth,innerHeight:window.innerHeight,pageXOffset:window.pageXOffset,pageYOffset:window.pageYOffset,isTop:0==window.scrollY,isBottom:window.scrollY+window.innerHeight==document.body.clientHeight}},getWindowAndDocumentProps:q,css:function(e,t,n=null){var o=i(e);if("string"==typeof t)o.style[t]=n;else for(let e in t)t.hasOwnProperty(e)&&(o.style[e]=t[e])},addCls:function(e,t){let n=i(e);"string"==typeof t?n.classList.add(t):n.classList.add(...t)},removeCls:function(e,t){let n=i(e);"string"==typeof t?n.classList.remove(t):n.classList.remove(...t)},elementScrollIntoView:function(e){let t=i(e);t&&t.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})},getScroll:function(){return{x:window.pageXOffset,y:window.pageYOffset}},getScrollParent:function(e,t=undefined){null!=t||(t=l?window:void 0);let n=e;for(;n&&n!==t&&z(n);){const{overflowY:e}=window.getComputedStyle(n);if(/scroll|auto|overlay/i.test(e))return n;n=n.parentNode}return t},getScrollTop:function(e){const t="scrollTop"in e?e.scrollTop:e.pageYOffset;return Math.max(t,0)},getInnerText:function(e){return i(e).innerText},getMenuOrDialogMaxZIndex:R,getMaxZIndex:function(){return[...document.all].reduce(((e,t)=>Math.max(e,+window.getComputedStyle(t).zIndex||0)),0)},getStyle:function(e,t){return(e=i(e)).currentStyle?e.currentStyle[t]:window.getComputedStyle?document.defaultView.getComputedStyle(e,null).getPropertyValue(t):void 0},getTextAreaInfo:function(e){var t={},n=i(e);return t.scrollHeight=n.scrollHeight||0,e.currentStyle?(t.lineHeight=parseFloat(e.currentStyle["line-height"]),t.paddingTop=parseFloat(e.currentStyle["padding-top"]),t.paddingBottom=parseFloat(e.currentStyle["padding-bottom"]),t.borderBottom=parseFloat(e.currentStyle["border-bottom"]),t.borderTop=parseFloat(e.currentStyle["border-top"])):window.getComputedStyle&&(t.lineHeight=parseFloat(document.defaultView.getComputedStyle(e,null).getPropertyValue("line-height")),t.paddingTop=parseFloat(document.defaultView.getComputedStyle(e,null).getPropertyValue("padding-top")),t.paddingBottom=parseFloat(document.defaultView.getComputedStyle(e,null).getPropertyValue("padding-bottom")),t.borderBottom=parseFloat(document.defaultView.getComputedStyle(e,null).getPropertyValue("border-bottom")),t.borderTop=parseFloat(document.defaultView.getComputedStyle(e,null).getPropertyValue("border-top"))),Object.is(NaN,t.borderTop)&&(t.borderTop=1),Object.is(NaN,t.borderBottom)&&(t.borderBottom=1),t},disposeObj:function(e){},upsertThemeStyle:function(e,t){const n=document.getElementById(e);n&&document.head.removeChild(n);const o=document.createElement("style");o.id=e,o.type="text/css",o.innerHTML=t,document.head.insertAdjacentElement("beforeend",o)},getImageDimensions:function(e){return new Promise((function(t,n){var o=new Image;o.src=e,o.onload=function(){t({width:o.width,height:o.height,hasError:!1})},o.onerror=function(){t({width:0,height:0,hasError:!0})}}))},enablePreventDefaultForEvent:function(e,t,n){const o=i(e);o&&("keydown"===t?o.addEventListener(t,(e=>{Array.isArray(n)?n.includes(e.code)&&e.preventDefault():e.preventDefault()})):o.addEventListener(t,(e=>{e.preventDefault&&e.preventDefault()})))},getBoundingClientRects:function(e){for(var t=document.querySelectorAll(e),n=[],o=0;o<t.length;o++){var r=t[o],i={id:r.id,rect:r.getBoundingClientRect()};n.push(i)}return n},getSize:function(e,t){var n=i(e),o=n.style.display,r=n.style.overflow;n.style.display="",n.style.overflow="hidden";var l=n["offset"+t.charAt(0).toUpperCase()+t.slice(1)]||0;return n.style.display=o,n.style.overflow=r,l},getProp:function(e,t){if("window"===e)return window[t];var n=i(e);return n?n[t]:null},updateWindowTransition:function(e,t,n){var o=i(e),r=o.querySelector(".m-window__container");if(n){var l=i(n);r.style.height=l.clientHeight+"px"}else t?(r.classList.add("m-window__container--is-active"),r.style.height=o.clientHeight+"px"):(r.style.height="",r.classList.remove("m-window__container--is-active"))},getScrollHeightWithoutHeight:function(e){var t=i(e);if(!t)return 0;var n=t.style.height;t.style.height="0";var o=t.scrollHeight;return t.style.height=n,o},registerTextFieldOnMouseDown:function(e,t,n){if(!e||!t)return;const r=e=>{if(e.target!==i(t)&&(e.preventDefault(),e.stopPropagation()),n){const t={Detail:e.detail,ScreenX:e.screenX,ScreenY:e.screenY,ClientX:e.clientX,ClientY:e.clientY,OffsetX:e.offsetX,OffsetY:e.offsetY,PageX:e.pageX,PageY:e.pageY,Button:e.button,Buttons:e.buttons,CtrlKey:e.ctrlKey,ShiftKey:e.shiftKey,AltKey:e.altKey,MetaKey:e.metaKey,Type:e.type};n.invokeMethodAsync("Invoke",t)}};e.addEventListener("mousedown",r);const l={listener:r,handle:n},s=`registerTextFieldOnMouseDown_${o(e)}`;W[s]=[l]},unregisterTextFieldOnMouseDown:function(e){const t=`registerTextFieldOnMouseDown_${o(e)}`,n=W[t];n&&n.length&&n.forEach((t=>{t.handle.dispose(),e&&e.removeEventListener("mousedown",t.listener)}))},containsActiveElement:function(e){var t=i(e);return t&&t.contains?t.contains(document.activeElement):null},copyChild:function(e){"string"==typeof e&&(e=document.querySelector(e)),e&&(e.setAttribute("contenteditable","true"),e.focus(),document.execCommand("selectAll",!1,null),document.execCommand("copy"),document.execCommand("unselect"),e.blur(),e.removeAttribute("contenteditable"))},copyText:function(e){if(navigator.clipboard)navigator.clipboard.writeText(e).then((function(){console.log("Async: Copying to clipboard was successful!")}),(function(e){console.error("Async: Could not copy text: ",e)}));else{var t=document.createElement("textarea");t.value=e,t.readOnly=!0,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{var n=document.execCommand("copy")?"successful":"unsuccessful";console.log("Fallback: Copying text command was "+n)}catch(e){console.error("Fallback: Oops, unable to copy",e)}document.body.removeChild(t)}},getMenuableDimensions:F,invokeMultipleMethod:function(e,t,n,o,r,i,l,s,a){var c={windowAndDocument:null,dimensions:null,zIndex:0};return c.windowAndDocument=q(e,t),c.dimensions=F(n,o,r,i,l,s),c.zIndex=R([i],a),c},registerOTPInputOnInputEvent:function(e,t){for(let n=0;n<e.length;n++){const o=o=>Z(o,n,e,t),r=t=>G(t,n,e),i=o=>V(o,n,e,t);e[n].addEventListener("input",o),e[n].addEventListener("focus",r),e[n].addEventListener("keyup",i),e[n]._optInput={inputListener:o,focusListener:r,keyupListener:i}}},unregisterOTPInputOnInputEvent:function(e){for(let t=0;t<e.length;t++){const n=e[t];n&&n._optInput&&(n.removeEventListener("input",n._optInput.inputListener),n.removeEventListener("focus",n._optInput.focusListener),n.removeEventListener("keyup",n._optInput.keyupListener))}},getListIndexWhereAttributeExists:function(e,t,n){const o=document.querySelectorAll(e);if(!o)return-1;let r=-1;for(let e=0;e<o.length;e++)if(o[e].getAttribute(t)===n){r=e;break}return r},scrollToTile:function(e,t,n,o){var r=document.querySelectorAll(t);if(!r)return;let i=r[n];if(!i)return;const l=document.querySelector(e);if(!l)return;const s=l.scrollTop,a=l.clientHeight;s>i.offsetTop-8?l.scrollTo({top:i.offsetTop-i.clientHeight,behavior:"smooth"}):s+a<i.offsetTop+i.clientHeight+8&&l.scrollTo({top:i.offsetTop-a+2*i.clientHeight,behavior:"smooth"})},getElementTranslateY:function(e){const t=window.getComputedStyle(e),n=t.transform||t.webkitTransform,o=n.slice(7,n.length-1).split(", ")[5];return Number(o)},checkIfThresholdIsExceededWhenScrolling:function(e,t,n){if(!e||!t)return;let o;o="window"==t?window:"document"==t?document.documentElement:document.querySelector(t);const r=e.getBoundingClientRect().top;return(o===window?window.innerHeight:o.getBoundingClientRect().bottom)>=r-n},get_top_domain:J,setCookie:function(e,t){if(null!=t){var n=J();n?isNaN(n[0])&&(n=`.${n}`):n="";var o=new Date;o.setTime(o.getTime()+2592e6),document.cookie=`${e}=${escape(null==t?void 0:t.toString())};path=/;expires=${o.toUTCString()};domain=${n}`}},getCookie:function(e){const t=new RegExp(`(^| )${e}=([^;]*)(;|$)`),n=document.cookie.match(t);return n?unescape(n[2]):null},registerDragEvent:function(e,t){if(e){const n=o(e),r=e=>{if(t){const n=e.target.getAttribute(t);e.dataTransfer.setData(t,n),e.dataTransfer.setData("offsetX",e.offsetX.toString()),e.dataTransfer.setData("offsetY",e.offsetY.toString())}};W[`${n}:dragstart`]=[{listener:r}],e.addEventListener("dragstart",r)}},unregisterDragEvent:function(e){const t=o(e);if(t){const n=`${t}:dragstart`;W[n]&&W[n].forEach((t=>{e.removeEventListener("dragstart",t.listener)}))}},resizableDataTable:function(e){const t=e.querySelector("table"),n=t.querySelector(".m-data-table-header").getElementsByTagName("tr")[0],o=n?n.children:[];if(!o)return;t.style.overflow="hidden";const r=t.offsetHeight;for(var i=0;i<o.length;i++){const e=o[i],t=e.querySelector(".m-data-table-header__col-resize");if(!t)continue;t.style.height=r+"px";let n=e.firstElementChild.offsetWidth;n=n+32+18+1+1,e.style.minWidth||(e.minWidth=n,e.style.minWidth=n+"px"),l(t)}function l(n){let r,i,l,a,c,u;n.addEventListener("click",(e=>e.stopPropagation())),n.addEventListener("mousedown",(function(e){i=e.target.parentElement,l=i.nextElementSibling,r=e.pageX,u=t.offsetWidth;var n=function(e){if("border-box"==s(e,"box-sizing"))return 0;var t=s(e,"padding-left"),n=s(e,"padding-right");return parseInt(t)+parseInt(n)}(i);a=i.offsetWidth-n,l&&(c=l.offsetWidth-n)})),document.addEventListener("mousemove",(function(n){if(i){let o=n.pageX-r;e.classList.contains("m-data-table--rtl")&&(o=0-o);let s=a+o;i.style.width=s+"px";if(e.classList.contains("m-data-table--resizable-overflow"))return void(t.style.width=u+o+"px");if(e.classList.contains("m-data-table--resizable-independent")){let e=c-o;const t=a+c;o>0?l&&e<l.minWidth&&(e=l.minWidth,s=t-e):s<i.minWidth&&(s=i.minWidth,e=t-s),i.style.width=s+"px",l&&(l.style.width=e+"px")}}})),document.addEventListener("mouseup",(function(e){if(i)for(let e=0;e<o.length;e++){const t=o[e];t.style.width=t.offsetWidth+"px"}i=void 0,l=void 0,r=void 0,c=void 0,a=void 0,u=void 0}))}function s(e,t){return window.getComputedStyle(e,null).getPropertyValue(t)}},updateDataTableResizeHeight:function(e){const t=e.querySelector("table"),n=t.querySelector(".m-data-table-header").getElementsByTagName("tr")[0],o=n?n.children:[];if(!o)return;const r=t.offsetHeight;for(var i=0;i<o.length;i++){o[i].querySelector(".m-data-table-header__col-resize").style.height=r+"px"}},addStopPropagationEvent:function(e,t){i(e).addEventListener(t,Q)},removeStopPropagationEvent:function(e,t){i(e).removeEventListener(t,Q)},historyBack:function(){history.back()},historyGo:function(e){history.go(e)},historyReplace:function(e){history.replaceState(null,"",e)}});window.MasaBlazor={interop:Object.assign(Object.assign(Object.assign({},ee),v),b),xgplayerPlugins:[]}}();
//# sourceMappingURL=masa-blazor.js.map
