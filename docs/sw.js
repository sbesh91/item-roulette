if(!self.define){let e,s={};const i=(i,t)=>(i=new URL(i+".js",t).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(t,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let o={};const c=e=>i(e,n),f={module:{uri:n},exports:o,require:c};s[n]=Promise.all(t.map((e=>f[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-9a84fccb"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/favicon-mtvwWgEY.ico",revision:"d4988481193e0948badeaf2fae241220"},{url:"assets/index-B_l7ORZO.css",revision:"32c5d1e9df4dfd2a1c63e60f85808998"},{url:"assets/index-slj-f83M.js",revision:"85ef511d18dd554cbccf6f238b53d60c"},{url:"index.html",revision:"e3e366ff44536be14b28a8ebd3b87f57"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
