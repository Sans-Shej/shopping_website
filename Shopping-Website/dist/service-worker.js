if(!self.define){let i,e={};const n=(n,l)=>(n=new URL(n+".js",l).href,e[n]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=n,i.onload=e,document.head.appendChild(i)}else i=n,importScripts(n),e()})).then((()=>{let i=e[n];if(!i)throw new Error(`Module ${n} didn’t register its module`);return i})));self.define=(l,p)=>{const s=i||("document"in self?document.currentScript.src:"")||location.href;if(e[s])return;let o={};const g=i=>n(i,s),r={module:{uri:s},exports:o,require:g};e[s]=Promise.all(l.map((i=>r[i]||g(i)))).then((i=>(p(...i),o)))}}define(["./workbox-79ffe3e0"],(function(i){"use strict";i.setCacheNameDetails({prefix:"hydro"}),self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"/Shopping-Website/css/app.4c0b1524.css",revision:null},{url:"/Shopping-Website/css/chunk-vendors.5c0694e5.css",revision:null},{url:"/Shopping-Website/fonts/CheltenhamStd.f39a6ebc.otf",revision:null},{url:"/Shopping-Website/fonts/ClabPersonalUse.e99de574.otf",revision:null},{url:"/Shopping-Website/fonts/Hjet.ec993a36.otf",revision:null},{url:"/Shopping-Website/fonts/Magisho.b20178da.otf",revision:null},{url:"/Shopping-Website/img/1.01b438bd.jpeg",revision:null},{url:"/Shopping-Website/img/1.6a97a72f.jpeg",revision:null},{url:"/Shopping-Website/img/1.a209c965.jpeg",revision:null},{url:"/Shopping-Website/img/10.8c8f57ed.jpeg",revision:null},{url:"/Shopping-Website/img/10.c6367443.jpeg",revision:null},{url:"/Shopping-Website/img/11.01998a12.jpeg",revision:null},{url:"/Shopping-Website/img/11.d03981a3.jpeg",revision:null},{url:"/Shopping-Website/img/12.97515f59.jpeg",revision:null},{url:"/Shopping-Website/img/12.f6dd95ac.jpeg",revision:null},{url:"/Shopping-Website/img/13.4c19bdac.jpeg",revision:null},{url:"/Shopping-Website/img/13.a1f015a5.jpeg",revision:null},{url:"/Shopping-Website/img/14.5fa01cd9.jpeg",revision:null},{url:"/Shopping-Website/img/14.a80b5dac.jpeg",revision:null},{url:"/Shopping-Website/img/15.9f3222de.jpeg",revision:null},{url:"/Shopping-Website/img/15.e49b2ece.jpeg",revision:null},{url:"/Shopping-Website/img/16.1a6eb2cd.jpeg",revision:null},{url:"/Shopping-Website/img/16.d6644283.jpeg",revision:null},{url:"/Shopping-Website/img/17.cc5a5cbf.jpeg",revision:null},{url:"/Shopping-Website/img/18.cb392518.jpeg",revision:null},{url:"/Shopping-Website/img/2.b5351378.jpeg",revision:null},{url:"/Shopping-Website/img/2.d2c53966.jpeg",revision:null},{url:"/Shopping-Website/img/2.e8489824.jpeg",revision:null},{url:"/Shopping-Website/img/3.3c6c6b5a.jpeg",revision:null},{url:"/Shopping-Website/img/3.61d29a6e.jpg",revision:null},{url:"/Shopping-Website/img/3.a61bdd35.jpeg",revision:null},{url:"/Shopping-Website/img/3.ef7a319f.jpeg",revision:null},{url:"/Shopping-Website/img/4.34ec2648.jpeg",revision:null},{url:"/Shopping-Website/img/4.a8dbac56.jpeg",revision:null},{url:"/Shopping-Website/img/4.bf23192f.jpeg",revision:null},{url:"/Shopping-Website/img/5.2b0a4a8c.jpeg",revision:null},{url:"/Shopping-Website/img/5.3dfdec44.jpeg",revision:null},{url:"/Shopping-Website/img/5.db56d1ce.jpeg",revision:null},{url:"/Shopping-Website/img/6.388758ff.jpeg",revision:null},{url:"/Shopping-Website/img/6.9b6963ed.jpeg",revision:null},{url:"/Shopping-Website/img/7.6b7c9351.jpeg",revision:null},{url:"/Shopping-Website/img/7.f6c3036d.jpeg",revision:null},{url:"/Shopping-Website/img/8.5c7f51fe.jpeg",revision:null},{url:"/Shopping-Website/img/8.98379e54.jpeg",revision:null},{url:"/Shopping-Website/img/9.66c19743.jpeg",revision:null},{url:"/Shopping-Website/img/9.8c76f70b.jpeg",revision:null},{url:"/Shopping-Website/img/amex.a246419e.png",revision:null},{url:"/Shopping-Website/img/chip.e2b3c593.png",revision:null},{url:"/Shopping-Website/img/cloth.2fdf7ad0.jpeg",revision:null},{url:"/Shopping-Website/img/dinersclub.375defd8.png",revision:null},{url:"/Shopping-Website/img/discover.5aee3127.png",revision:null},{url:"/Shopping-Website/img/heroAbout.eb38d401.jpg",revision:null},{url:"/Shopping-Website/img/heroMen.5f1f0cc0.jpg",revision:null},{url:"/Shopping-Website/img/heroSearch.44d764bb.jpg",revision:null},{url:"/Shopping-Website/img/heroWomen.4d954920.jpg",revision:null},{url:"/Shopping-Website/img/jcb.435a502b.png",revision:null},{url:"/Shopping-Website/img/mastercard.06fbc4e6.png",revision:null},{url:"/Shopping-Website/img/runway.3de030ec.jpeg",revision:null},{url:"/Shopping-Website/img/runwayy.74d7d9cb.jpeg",revision:null},{url:"/Shopping-Website/img/unionpay.3437e3e3.png",revision:null},{url:"/Shopping-Website/index.html",revision:"d910940164bc010401cebb1e684f239d"},{url:"/Shopping-Website/js/app.bc97a944.js",revision:null},{url:"/Shopping-Website/js/chunk-vendors.1b8119e7.js",revision:null},{url:"/Shopping-Website/manifest.json",revision:"21ddef3d9d271789033d81d93f10033a"},{url:"/Shopping-Website/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"/Shopping-Website/web.config",revision:"2caefc1893ce9a5136ac544939036965"}],{})}));
//# sourceMappingURL=service-worker.js.map
