if(!self.define){let e,s={};const i=(i,t)=>(i=new URL(i+".js",t).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(t,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let o={};const c=e=>i(e,n),d={module:{uri:n},exports:o,require:c};s[n]=Promise.all(t.map((e=>d[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-9a84fccb"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/favicon-mtvwWgEY.ico",revision:"d4988481193e0948badeaf2fae241220"},{url:"assets/index-BMADC_0t.js",revision:"337b23f44738d843365b42ea2eb3365f"},{url:"assets/index-D5hSVKVS.css",revision:"7ebbaf80f7c5f51dc219b4f9db44eb9b"},{url:"index.html",revision:"cc43798d5812ddfbe08641d9835d98f0"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
