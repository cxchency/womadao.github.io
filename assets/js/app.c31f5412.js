(function(e){function t(t){for(var r,o,i=t[0],c=t[1],s=t[2],l=0,d=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function i(e){return c.p+"assets/js/"+({about:"about"}[e]||e)+"."+{about:"010a942a"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="assets/css/"+({about:"about"}[e]||e)+"."+{about:"17a9460b"}[e]+".css",a=c.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],f.parentNode.removeChild(f),n(u)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("headers"),n("router-view")],1)},a=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-header",{attrs:{id:"header"}},[n("el-menu",{staticClass:"el-menu-demo",attrs:{mode:"horizontal",id:"header",router:!0}},[n("el-menu-item",{attrs:{index:"logo",route:"/"}},[e._v(" 沃玛岛服务器 ")]),n("el-menu-item",{attrs:{route:"/board",index:"1"}},[e._v(" 公告 ")]),n("el-menu-item",{attrs:{index:"2",route:"/contact"}},[e._v(" 联系 ")]),n("el-menu-item",{attrs:{index:"3",route:"/donate"}},[e._v(" 赞助 ")]),n("el-menu-item",{attrs:{index:"4"}},[n("a",{attrs:{href:"./docs"}},[e._v("帮助")])])],1)],1)},i=[],c=(n("ac1f"),n("466d"),{data:function(){return{logo:n("b640"),evnt:null,mobile:null,people:0}},methods:{change:function(){console.log("change is listening...");var e=document.getElementById("header");e.classList.toggle("sticky",window.scrollY>0)},_isMobile:function(){var e=navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);return e}},mounted:function(){this._isMobile()?this.mobile=!0:this.mobile=!1}}),s=c,l=(n("e454"),n("2877")),d=Object(l["a"])(s,u,i,!1,null,null,null),f=d.exports,p={data:function(){return{firstimage:n("6b2a"),url:{1:"/",2:"/activity"}}},methods:{handleSelect:function(e,t){var n=t[t.length-1];this.$router.push({path:this.url[n]})}},components:{headers:f}},h=p,m=(n("034f"),Object(l["a"])(h,o,a,!1,null,null,null)),b=m.exports,v=(n("d3b7"),n("1276"),n("8c4f"));r["default"].use(v["a"]);var g=[{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"754b"))}},{path:"/activity",name:"feature",component:function(){return n.e("about").then(n.bind(null,"0993"))}},{path:"/",name:"feature",component:function(){return n.e("about").then(n.bind(null,"bb51"))}},{path:"/download",name:"feature1",component:function(){return n.e("about").then(n.bind(null,"565b"))}},{path:"*",name:"feature1",component:function(){return n.e("about").then(n.bind(null,"0636"))}},{path:"/donate",name:"feature1",component:function(){return n.e("about").then(n.bind(null,"0ef0"))}},{path:"/contact",name:"feature1",component:function(){return n.e("about").then(n.bind(null,"4fe8"))}},{path:"/board",name:"feature1",component:function(){return n.e("about").then(n.bind(null,"2899"))}},{path:"/test",name:"feature1",component:function(){return n.e("about").then(n.bind(null,"2762"))}}],w=new v["a"]({routes:g});w.beforeEach((function(e,t,n){"undefined"!==typeof window&&window._hmt&&e.path&&window._hmt.push(["_trackPageview","/#"+e.fullPath]),n()})),w.beforeEach((function(e,t,n){"undefined"!==typeof window&&function(){var e=document.createElement("script"),t=window.location.protocol.split(":")[0];e.src="https"===t?"https://zz.bdstatic.com/linksubmit/push.js":"http://push.zhanzhang.baidu.com/push.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)}(),n()}));var y=w,_=n("5c96"),j=n.n(_),E=(n("0fae"),n("bd0c")),P=n.n(E);if("undefined"!==typeof window){var x=x||[];window._hmt=x,function(){var e=document.createElement("script");e.src="https://hm.baidu.com/hm.js?ab8022358a69f427b48f387477f6b306";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()}r["default"].config.productionTip=!1,r["default"].use(j.a),r["default"].use(P.a,{ak:"jfde0vfPwoRNOMtshVWf6wxRs6RXDoPA"}),new r["default"]({el:"#app",render:function(e){return e(b)},router:y})},"6b2a":function(e,t,n){e.exports=n.p+"assets/img/header.d47d949a.jpg"},"85ec":function(e,t,n){},a577:function(e,t,n){},b640:function(e,t,n){e.exports=n.p+"assets/img/logo.e7e328fb.jpg"},e454:function(e,t,n){"use strict";n("a577")}});