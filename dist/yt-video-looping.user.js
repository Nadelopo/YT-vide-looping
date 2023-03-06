// ==UserScript==
// @name        yt-video-looping
// @version     0.0.1
// @description yotube video looping app
// @match       https://www.youtube.com/watch?v=rTbJ2qFd-Tc*
// @icon        https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant       GM_addStyle
// ==/UserScript==

(function(){"use strict";function L(n,e){var r=R(n),t=r.tag,o=r.id,a=r.className,i=e?document.createElementNS(e,t):document.createElement(t);return o&&(i.id=o),a&&(e?i.setAttribute("class",a):i.className=a),i}function R(n){for(var e=n.split(/([.#])/),r="",t="",o=1;o<e.length;o+=2)switch(e[o]){case".":r+=" "+e[o+1];break;case"#":t=e[o+1]}return{className:r.trim(),tag:e[0]||"div",id:t}}function H(n,e){var r=f(n),t=f(e);return e===t&&t.__redom_view&&(e=t.__redom_view),t.parentNode&&(x(e,t,r),r.removeChild(t)),e}function x(n,e,r){var t=e.__redom_lifecycle;if(N(t)){e.__redom_lifecycle={};return}var o=r;for(e.__redom_mounted&&g(e,"onunmount");o;){var a=o.__redom_lifecycle||{};for(var i in t)a[i]&&(a[i]-=t[i]);N(a)&&(o.__redom_lifecycle=null),o=o.parentNode}}function N(n){if(n==null)return!0;for(var e in n)if(n[e])return!1;return!0}var G=["onmount","onremount","onunmount"],z=typeof window<"u"&&"ShadowRoot"in window;function w(n,e,r,t){var o=f(n),a=f(e);e===a&&a.__redom_view&&(e=a.__redom_view),e!==a&&(a.__redom_view=e);var i=a.__redom_mounted,l=a.parentNode;if(i&&l!==o&&x(e,a,l),r!=null)if(t){var c=f(r);c.__redom_mounted&&g(c,"onunmount"),o.replaceChild(a,c)}else o.insertBefore(a,f(r));else o.appendChild(a);return B(e,a,o,l),e}function g(n,e){e==="onmount"||e==="onremount"?n.__redom_mounted=!0:e==="onunmount"&&(n.__redom_mounted=!1);var r=n.__redom_lifecycle;if(r){var t=n.__redom_view,o=0;t&&t[e]&&t[e]();for(var a in r)a&&o++;if(o)for(var i=n.firstChild;i;){var l=i.nextSibling;g(i,e),i=l}}}function B(n,e,r,t){for(var o=e.__redom_lifecycle||(e.__redom_lifecycle={}),a=r===t,i=!1,l=0,c=G;l<c.length;l+=1){var d=c[l];a||n!==e&&d in n&&(o[d]=(o[d]||0)+1),o[d]&&(i=!0)}if(!i){e.__redom_lifecycle={};return}var _=r,m=!1;for((a||_&&_.__redom_mounted)&&(g(e,a?"onremount":"onmount"),m=!0);_;){var p=_.parentNode,u=_.__redom_lifecycle||(_.__redom_lifecycle={});for(var s in o)u[s]=(u[s]||0)+o[s];if(m)break;(_.nodeType===Node.DOCUMENT_NODE||z&&_ instanceof ShadowRoot||p&&p.__redom_mounted)&&(g(_,a?"onremount":"onmount"),m=!0),_=p}}function F(n,e,r){var t=f(n);if(typeof e=="object")for(var o in e)S(t,o,e[o]);else S(t,e,r)}function S(n,e,r){n.style[e]=r??""}var E="http://www.w3.org/1999/xlink";function C(n,e,r,t){var o=f(n),a=typeof e=="object";if(a)for(var i in e)C(o,i,e[i],t);else{var l=o instanceof SVGElement,c=typeof r=="function";if(e==="style"&&typeof r=="object")F(o,r);else if(l&&c)o[e]=r;else if(e==="dataset")T(o,r);else if(!l&&(e in o||c)&&e!=="list")o[e]=r;else{if(l&&e==="xlink"){k(o,r);return}t&&e==="class"&&(r=o.className+" "+r),r==null?o.removeAttribute(e):o.setAttribute(e,r)}}}function k(n,e,r){if(typeof e=="object")for(var t in e)k(n,t,e[t]);else r!=null?n.setAttributeNS(E,e,r):n.removeAttributeNS(E,e,r)}function T(n,e,r){if(typeof e=="object")for(var t in e)T(n,t,e[t]);else r!=null?n.dataset[e]=r:delete n.dataset[e]}function P(n){return document.createTextNode(n??"")}function A(n,e,r){for(var t=0,o=e;t<o.length;t+=1){var a=o[t];if(!(a!==0&&!a)){var i=typeof a;i==="function"?a(n):i==="string"||i==="number"?n.appendChild(P(a)):j(f(a))?w(n,a):a.length?A(n,a,r):i==="object"&&C(n,a,null,r)}}}function f(n){return n.nodeType&&n||!n.el&&n||f(n.el)}function j(n){return n&&n.nodeType}function y(n){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];var t,o=typeof n;if(o==="string")t=L(n);else if(o==="function"){var a=n;t=new(Function.prototype.bind.apply(a,[null].concat(e)))}else throw new Error("At least one argument required");return A(f(t),e,!0),t}var v=y;y.extend=function(){for(var n=[],e=arguments.length;e--;)n[e]=arguments[e];return y.bind.apply(y,[this].concat(n))};function U(n){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];for(var t=f(n),o=M(n,e,t.firstChild);o;){var a=o.nextSibling;H(n,o),o=a}}function M(n,e,r){for(var t=r,o=Array(e.length),a=0;a<e.length;a++)o[a]=e[a]&&f(e[a]);for(var i=0;i<e.length;i++){var l=e[i];if(l){var c=o[i];if(c===t){t=t.nextSibling;continue}if(j(c)){var d=t&&t.nextSibling,_=l.__redom_index!=null,m=_&&d===o[i+1];w(n,l,t,m),m&&(t=d);continue}l.length!=null&&(t=M(n,l,t))}}return t}function q(n){return new Promise(e=>{if(document.querySelector(n))return e(document.querySelector(n));const r=new MutationObserver(t=>{document.querySelector(n)&&(e(document.querySelector(n)),r.disconnect())});r.observe(document.body,{childList:!0,subtree:!0})})}const V=`.ytp-chapter-container{display:grid;grid-template-columns:auto 1fr;align-items:center}.repeat__control__menu{background:#202124;width:min-content;height:min-content;border-radius:8px;display:flex;align-items:center;gap:4px;padding:3px 6px;margin-left:10px;font-size:12px}.repeat__control__menu__start,.repeat__control__menu__end{all:unset}.repeat__control__menu input{width:30px;height:20px;text-align:center}.repeat__control__menu button{background:#161616;color:#fff;border-radius:6px;padding:3px 6px;cursor:pointer;border:none}
`;GM_addStyle(V);const I=v("div","",{class:"repeat__control__menu"}),b=v("input","Hello RE:DOM!",{class:"repeat__control__menu__start ",type:"string",value:"00 00",maxlength:5}),h=v("input","Hello RE:DOM!",{class:"repeat__control__menu__end ",type:"string",value:"00 00",maxlength:5}),O=v("button","apply"),D=v("button","cancel"),X=v("div","/");(async()=>{let n=0,e=0,r=0,t=0,o=!1,a=await q("#ytd-player");const i=await q(".item.style-scope.ytd-watch-metadata");w(i,I),U(I,[b,X,h,O,D]);function l(u){u==1&&(t=setInterval(()=>{r>=e&&(clearInterval(t),a.player_.seekTo(n)),r=a.player_.getCurrentTime()},1e3)),(u==2||u==3||u==0)&&clearInterval(t)}O.onclick=()=>{const u=b.value.split(" ");n=Number(u[0])*60+Number(u[1]);const s=h.value.split(" ");e=Number(s[0])*60+Number(s[1]),o||(l(1),setTimeout(()=>{a.player_.addEventListener("onStateChange",l)},1e3),o=!0)},D.onclick=()=>{clearInterval(t),a.player_.removeEventListener("onStateChange",l),o=!1};let c=b.value;const d=u=>c=u;let _=h.value;const m=u=>_=u;function p(u,s,J){u.target instanceof HTMLInputElement&&(u.target.value[2]!=" "?u.target.value=s:J(u.target.value))}b.oninput=u=>p(u,c,d),h.oninput=u=>p(u,_,m)})()})();