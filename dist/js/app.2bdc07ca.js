(function(){"use strict";var e={1433:function(e,t,n){var a=n(9242),r=n(3396);const o={class:"d-flex flex-column min-vh-100"};function i(e,t,n,a,i,s){const c=(0,r.up)("NavbarComp"),u=(0,r.up)("router-view"),l=(0,r.up)("FooterComp");return(0,r.wg)(),(0,r.iD)("div",o,[(0,r.Wm)(c),(0,r.Wm)(u),(0,r.Wm)(l)])}const s=e=>((0,r.dD)("data-v-cc2dbb34"),e=e(),(0,r.Cn)(),e),c={class:"navbar navbar-light bg-light"},u=s((()=>(0,r._)("div",{class:"container-fluid"},[(0,r._)("span",{class:"navbar-brand mb-0 h1"},"Paginación en VUE.js / Desarrollada por sebastiancastillo139")],-1))),l=[u];function g(e,t){return(0,r.wg)(),(0,r.iD)("nav",c,l)}var d=n(89);const p={},f=(0,d.Z)(p,[["render",g],["__scopeId","data-v-cc2dbb34"]]);var m=f,b=n(65);const v={class:"bg-secondary p-4 mt-3 text-center text-white mt-auto"},h=(0,r._)("h3",{class:"fs-3"},"Página desarrollada como muestra de portafolio por Sebastián Castillo Soto, 2022.",-1),w=(0,r._)("p",{class:"fs-5"},"Tecnologías usadas: VUE.js y Bootstrap",-1),P=[h,w];function y(e,t){return(0,r.wg)(),(0,r.iD)("div",v,P)}const k={},D=(0,d.Z)(k,[["render",y]]);var N=D,_={components:{NavbarComp:m,FooterComp:N},methods:{...(0,b.nv)(["callNewsData"])},beforeMount(){this.callNewsData()}};const C=(0,d.Z)(_,[["render",i]]);var j=C,x=n(678),O=n(7139),T=n.p+"img/An-1881-representation-of-Saturns-orbit-around-the-Sun-Seen-from-a-point-very-high.34db11c4.png";const S={class:"row col-12 mx-auto"},E=(0,r._)("img",{class:"card-img-top",src:T,alt:"Card image cap"},null,-1),M={class:"card-body"},A={class:"card-title"},F={class:"card-text text-truncate"},Z=["href"],q={"aria-label":"Page navigation example",class:"fs-2"},z={class:"pagination"},B={key:0,class:"btn page-item"},V=["onClick"],W={key:1,class:"page-item btn"};function H(e,t,n,o,i,s){return(0,r.wg)(),(0,r.iD)("div",S,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.getNewsData.slice(i.init,i.end),((e,t)=>((0,r.wg)(),(0,r.iD)("div",{key:t,class:"card col-12 col-lg-4 p-3 border-0 d-inline-block"},[E,(0,r._)("div",M,[(0,r._)("h5",A,(0,O.zw)(e.title),1),(0,r._)("p",F,(0,O.zw)(e.content),1),(0,r._)("a",{href:e.link,target:"_blank",class:"btn btn-primary"},"Ir a la noticia",8,Z)])])))),128)),(0,r._)("nav",q,[(0,r._)("ul",z,[1!=i.currentPage?((0,r.wg)(),(0,r.iD)("li",B,[(0,r._)("a",{class:"page-link",onClick:t[0]||(t[0]=(0,a.iM)((e=>s.previousPage(i.currentPage)),["stop","prevent"]))},"Previa")])):(0,r.kq)("",!0),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.getTotalPages,((e,t)=>((0,r.wg)(),(0,r.iD)("li",{class:"btn page-item",key:t},[(0,r._)("a",{class:"page-link",onClick:(0,a.iM)((t=>s.changePageNumber(e)),["stop","prevent"])},(0,O.zw)(e),9,V)])))),128)),i.currentPage!=e.getTotalPages?((0,r.wg)(),(0,r.iD)("li",W,[(0,r._)("a",{class:"page-link",onClick:t[1]||(t[1]=(0,a.iM)((e=>s.nextPage(i.currentPage)),["stop","prevent"]))},"Siguiente")])):(0,r.kq)("",!0)])])])}var I={data(){return{init:0,end:6,currentPage:1}},methods:{changePageNumber(e){console.log(e),console.log(this.currentPage),this.currentPage=e,this.init=6*e-6,this.end=6*e},previousPage(e){console.log(e);let t=e-1;this.currentPage=t,this.init=6*t-6,this.end=6*t},nextPage(e){console.log(e);let t=e+1;console.log(t),this.currentPage=t,this.init=6*t-6,this.end=6*t}},computed:{...(0,b.Se)(["getNewsData","getTotalPages"])},mounted(){this.getNewsData}};const K=(0,d.Z)(I,[["render",H]]);var L=K;const U=[{path:"/",name:"home",component:L},{path:"/:catchAll(.*)",name:"ErrorView",component:()=>n.e(748).then(n.bind(n,7748))}],Y=(0,x.p7)({history:(0,x.PO)("/proyectotabo/"),routes:U});var G=Y,J=(0,b.MT)({state:{newsData:[],pageNumber:1},getters:{getNewsData(e){return e.newsData},getTotalPages(e){let t=Math.ceil(e.newsData.length/6);return t},getPagedNewsData(e){return e.pagedNewsData},getBannersData(e){return e.bannersData},getPageNumber(e){return e.pageNumber}},mutations:{mutateNewsData:(e,t)=>{e.newsData=t},mutatePageNumber(e,t){e.pageNumber=t}},actions:{async callNewsData({commit:e}){const t="https://newsdata.io/api/1/news?apikey=pub_8928c482d91b860895c5178ac34568858d8b&country=ve",n=await fetch(t).then((e=>e.json()));e("mutateNewsData",n.results)},setNewsPerPage({commit:e}){console.log("callNewsPerPage activado");let t=this.state.pageNumber;e("mutateNewsPerPage",t)},changePageNumber({commit:e}){let t=2;e("mutatePageNumber",t)}}});n(5654);(0,a.ri)(j).use(J).use(G).mount("#app")}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={exports:{}};return e[a].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,a,r,o){if(!a){var i=1/0;for(l=0;l<e.length;l++){a=e[l][0],r=e[l][1],o=e[l][2];for(var s=!0,c=0;c<a.length;c++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[c])}))?a.splice(c--,1):(s=!1,o<i&&(i=o));if(s){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[a,r,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+".01a3a8ad.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="proyectotabo:";n.l=function(a,r,o,i){if(e[a])e[a].push(r);else{var s,c;if(void 0!==o)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var g=u[l];if(g.getAttribute("src")==a||g.getAttribute("data-webpack")==t+o){s=g;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+o),s.src=a),e[a]=[r];var d=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var r=e[a];if(delete e[a],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/proyectotabo/"}(),function(){var e={143:0};n.f.j=function(t,a){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else{var o=new Promise((function(n,a){r=e[t]=[n,a]}));a.push(r[2]=o);var i=n.p+n.u(t),s=new Error,c=function(a){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,r[1](s)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,o,i=a[0],s=a[1],c=a[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var l=c(n)}for(t&&t(a);u<i.length;u++)o=i[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(l)},a=self["webpackChunkproyectotabo"]=self["webpackChunkproyectotabo"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(1433)}));a=n.O(a)})();
//# sourceMappingURL=app.2bdc07ca.js.map