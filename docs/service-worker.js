var cacheName = 'warmalanddocs1'

var cacheList = [
    './',
    "./Readme.md",
    "./lib/plugins/copy_code.js",
    "./lib/plugins/search.js",
    "./lib/themes/vue.css",
    "./lib/docsify.js",
    "./images/64_run_dir.png",
    "./images/hmcl0.png",
    "./images/hmcl1.png",
    "./images/hmcl2.png",
    "./images/hmcl64account.png",
    "./images/hmcl64run.png",
    "./images/hmcl64ui.png",
    "./images/hmclca.png",
    "./images/hmcllogin.png",
    "./images/install_gw.png",
    "./images/j8_install_done.png",
    "./images/j8_install_page.jpg",
    "./images/j8_install_ui_begin.png",
    "./images/j8_install_ui_loading.png",
    "./images/mc1.png",
    "./images/mc2.png",
    "./images/mc3.png",
    "./images/mcinit.png",
    "./images/mojang.png",
    "./images/screenshot_1609728793000.png",
    "./index.html",
]
self.addEventListener('install', event => { 
    /* event.waitUtil 用于在安装成功之前执行一些预装逻辑
     但是建议只做一些轻量级和非常重要资源的缓存，减少安装失败的概率
     安装成功后 ServiceWorker 状态会从 installing 变为 installed */
      event.waitUntil(
        caches.open(cacheName)                  
        .then(cache => cache.addAll(cacheList))
      );
    });

    self.addEventListener('activate', e => {
      e.waitUntil(
          //遍历当前缓存keys
          caches.keys().then(cacheNames=>{
            return Promise.all(
              cacheNames.map(function(cn) {
                //是否等于当前key,保留自己
                if (cn !== cacheName) {
                  return caches.delete(cn);
                }
              })
        )}).then(() => self.clients.claim())
     )
    })
    self.addEventListener('fetch', e => {
      e.respondWith(
        //缓存是否匹配 
        caches.match(e.request).then(function(response) {
          if (response != null) {
            //命中缓存返回缓存，结束请求
            return response
          }
          //未命中缓存，正常请求
          return fetch(e.request.url)
        })
      )
    });

    