(function(e){function t(t){for(var o,r,u=t[0],c=t[1],l=t[2],s=0,d=[];s<u.length;s++)r=u[s],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var u=n[r];0!==a[u]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},a={app:0},i=[];function u(e){return c.p+"assets/js/"+({about:"about"}[e]||e)+"."+{about:"2f9248f0"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="assets/css/"+({about:"about"}[e]||e)+"."+{about:"4a1dd388"}[e]+".css",a=c.p+o,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var l=i[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===o||s===a))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){l=d[u],s=l.getAttribute("data-href");if(s===o||s===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],p.parentNode.removeChild(p),n(i)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=i);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=u(e);var d=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}a[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("headers"),n("router-view"),n("yq")],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-header",{attrs:{id:"header"}},[n("el-menu",{staticClass:"el-menu-demo",attrs:{mode:"horizontal",id:"header",router:!0}},[n("el-menu-item",{attrs:{index:"logo",route:"/"}},[e._v(" 沃玛岛服务器 ")]),n("el-menu-item",{attrs:{route:"/board",index:"1"}},[e._v(" 公告 ")]),n("el-menu-item",{attrs:{index:"2",route:"/contact"}},[e._v(" 联系 ")]),n("el-menu-item",{attrs:{index:"3",route:"/donate"}},[e._v(" 赞助 ")])],1)],1)},u=[],c=(n("ac1f"),n("466d"),{data:function(){return{logo:n("b640"),evnt:null,mobile:null,people:0}},methods:{change:function(){console.log("change is listening...");var e=document.getElementById("header");e.classList.toggle("sticky",window.scrollY>0)},_isMobile:function(){var e=navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);return e}},mounted:function(){this._isMobile()?this.mobile=!0:this.mobile=!1}}),l=c,s=(n("e454"),n("2877")),d=Object(s["a"])(l,i,u,!1,null,null,null),p=d.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},h=[],m=(n("b0c0"),n("1276"),n("f2e8")),b=n.n(m),g={data:function(){return{e:!1,ipdata:0,yqmap_data:0}},methods:{get_virus_data:function(){var e=this,t=this;b()("http://whois.pconline.com.cn/ipJson.jsp?&ip="+window.ip,(function(e,n){t.ipdata=n})),b()("//interface.sina.cn/news/wap/fymap2020_data.d.json",(function(n,o){t.yqmap_data=o.data.list;var r,a=[t.ipdata.pro,t.ipdata.city];if(void 0==t.ipdata.pro||void 0==t.ipdata.city)return console.log("undefined error catched"),t.get_virus_data();a[0]=a[0].split("省")[0],a[0]=a[0].split("市")[0],a[1]=a[1].split("市")[0],t.ipdata.pro in["北京","上海","天津","重庆","香港","澳门","台湾"]&&(a[1]=null),console.log(a),console.log(t.yqmap_data);for(var i=0;i<t.yqmap_data.length;i++)if(t.yqmap_data[i].name==a[0])if(null==a[1])r=t.yqmap_data[i].econNum;else for(var u=0;u<t.yqmap_data[i].city.length;u++)t.yqmap_data[i].city[u].name==a[1]&&(console.log(t.yqmap_data[i].city[u].name),r=t.yqmap_data[i].city[u].econNum);0!=r&&e.$notify({title:"关心小贴士",message:"您所在的省市有感染者出现，请注意好防护。勤洗手，戴口罩，多通风，少聚餐。抗击疫情，我们一起加油"})}))},yq_error_handler:function(){try{this.get_virus_data()}catch(e){console.log("oo"),this.yq_error_handler()}}},mounted:function(){this.yq_error_handler()}},v=g,y=Object(s["a"])(v,f,h,!1,null,null,null),_=y.exports,w={data:function(){return{firstimage:n("6b2a"),url:{1:"/",2:"/activity"}}},methods:{handleSelect:function(e,t){var n=t[t.length-1];this.$router.push({path:this.url[n]})}},components:{headers:p,yq:_}},j=w,E=(n("034f"),Object(s["a"])(j,r,a,!1,null,null,null)),q=E.exports,O=(n("d3b7"),n("8c4f"));o["default"].use(O["a"]);var x=[{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"754b"))}},{path:"/activity",name:"feature",component:function(){return n.e("about").then(n.bind(null,"0993"))}},{path:"/",name:"feature",component:function(){return n.e("about").then(n.bind(null,"bb51"))}},{path:"/download",name:"feature1",component:function(){return n.e("about").then(n.bind(null,"565b"))}},{path:"*",name:"feature1",component:function(){return n.e("about").then(n.bind(null,"0636"))}},{path:"/donate",name:"feature1",component:function(){return n.e("about").then(n.bind(null,"0ef0"))}},{path:"/contact",name:"feature1",component:function(){return n.e("about").then(n.bind(null,"4fe8"))}},{path:"/board",name:"feature1",component:function(){return n.e("about").then(n.bind(null,"2899"))}},{path:"/test",name:"feature1",component:function(){return n.e("about").then(n.bind(null,"2762"))}}],P=new O["a"]({routes:x});P.beforeEach((function(e,t,n){"undefined"!==typeof window&&window._hmt&&e.path&&window._hmt.push(["_trackPageview","/#"+e.fullPath]),n()})),P.beforeEach((function(e,t,n){"undefined"!==typeof window&&function(){var e=document.createElement("script"),t=window.location.protocol.split(":")[0];e.src="https"===t?"https://zz.bdstatic.com/linksubmit/push.js":"http://push.zhanzhang.baidu.com/push.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)}(),n()}));var B=P,S=n("5c96"),k=n.n(S),N=(n("0fae"),N||[]);window._hmt=N,function(){var e=document.createElement("script");e.src="https://hm.baidu.com/hm.js?ab8022358a69f427b48f387477f6b306";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}(),o["default"].config.productionTip=!1,o["default"].use(k.a),new o["default"]({el:"#app",render:function(e){return e(q)},router:B})},"6b2a":function(e,t,n){e.exports=n.p+"assets/img/header.d47d949a.jpg"},"85ec":function(e,t,n){},a577:function(e,t,n){},b640:function(e,t,n){e.exports=n.p+"assets/img/logo.e7e328fb.jpg"},e454:function(e,t,n){"use strict";n("a577")}});