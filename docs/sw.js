if(!self.define){let e,s={};const i=(i,t)=>(i=new URL(i+".js",t).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(t,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let n={};const c=e=>i(e,r),d={module:{uri:r},exports:n,require:c};s[r]=Promise.all(t.map((e=>d[e]||c(e)))).then((e=>(o(...e),n)))}}define(["./workbox-9a84fccb"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/favicon-mtvwWgEY.ico",revision:"d4988481193e0948badeaf2fae241220"},{url:"assets/index-B_l7ORZO.css",revision:"32c5d1e9df4dfd2a1c63e60f85808998"},{url:"assets/index-j9oo2DSK.js",revision:"474856fbe87d1e2b539eca3ec270b941"},{url:"index.html",revision:"29ca76999eeda6c3a5a0833290325b73"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
