(function(e){function t(t){for(var r,o,i=t[0],l=t[1],c=t[2],s=0,d=[];s<i.length;s++)o=i[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);f&&f(t);while(d.length)d.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(u.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function i(e){return l.p+"assets/js/"+({about:"about"}[e]||e)+"."+{about:"d70f3689"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="assets/css/"+({about:"about"}[e]||e)+"."+{about:"896a3d1e"}[e]+".css",a=l.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var c=u[i],s=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(s===r||s===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],s=c.getAttribute("data-href");if(s===r||s===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],f.parentNode.removeChild(f),n(u)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=i(e);var d=new Error;c=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("headers"),n("router-view")],1)},a=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-header",{attrs:{id:"header"}},[n("el-menu",{staticClass:"el-menu-demo",attrs:{mode:"horizontal",id:"header",router:!0}},[n("el-menu-item",{attrs:{index:"logo",route:"/"}},[e._v(" 沃玛岛服务器 ")]),n("el-menu-item",{attrs:{route:"/board",index:"1"}},[e._v(" 公告 ")]),n("el-menu-item",{attrs:{index:"2",route:"/contact"}},[e._v(" 联系 ")]),n("el-menu-item",{attrs:{index:"3",route:"/donate"}},[e._v(" 赞助 ")])],1)],1)},i=[],l=(n("ac1f"),n("466d"),{data:function(){return{logo:n("b640"),evnt:null,mobile:null}},methods:{change:function(){console.log("change is listening...");var e=document.getElementById("header");e.classList.toggle("sticky",window.scrollY>0)},_isMobile:function(){var e=navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);return e}},mounted:function(){this._isMobile()?this.mobile=!0:this.mobile=!1}}),c=l,s=(n("e454"),n("2877")),d=Object(s["a"])(c,u,i,!1,null,null,null),f=d.exports,p={data:function(){return{firstimage:n("6b2a"),url:{1:"/",2:"/activity"}}},methods:{handleSelect:function(e,t){var n=t[t.length-1];this.$router.push({path:this.url[n]})}},components:{headers:f}},h=p,m=(n("034f"),Object(s["a"])(h,o,a,!1,null,null,null)),b=m.exports,g=(n("d3b7"),n("8c4f"));r["default"].use(g["a"]);var v=[{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"754b"))}},{path:"/activity",name:"feature",component:function(){return n.e("about").then(n.bind(null,"0993"))}},{path:"/",name:"feature",component:function(){return n.e("about").then(n.bind(null,"bb51"))}},{path:"/download",name:"feature1",component:function(){return n.e("about").then(n.bind(null,"565b"))}},{path:"*",name:"feature1",component:function(){return n.e("about").then(n.bind(null,"0636"))}},{path:"/donate",name:"feature1",component:function(){return n.e("about").then(n.bind(null,"0ef0"))}},{path:"/contact",name:"feature1",component:function(){return n.e("about").then(n.bind(null,"4fe8"))}},{path:"/board",name:"feature1",component:function(){return n.e("about").then(n.bind(null,"2899"))}}],y=new g["a"]({routes:v}),w=y,_=n("5c96"),O=n.n(_);n("0fae");r["default"].config.productionTip=!1,r["default"].use(O.a),new r["default"]({el:"#app",render:function(e){return e(b)},router:w})},"6b2a":function(e,t,n){e.exports=n.p+"assets/img/header.d47d949a.jpg"},"85ec":function(e,t,n){},a577:function(e,t,n){},b640:function(e,t,n){e.exports=n.p+"assets/img/logo.e7e328fb.jpg"},e454:function(e,t,n){"use strict";n("a577")}});
//# sourceMappingURL=app.882d7f8b.js.map