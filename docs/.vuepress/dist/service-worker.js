/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4489f4210177516129e3724bbab4a532"
  },
  {
    "url": "article/a.html",
    "revision": "b2c382e5714c3de4a3151e3e6f302389"
  },
  {
    "url": "article/b.html",
    "revision": "40b779c053886260b77d13a4b3ab65e1"
  },
  {
    "url": "article/index.html",
    "revision": "8cce914b4f55a9ff63aa2c2ba4412569"
  },
  {
    "url": "article/前端框架源码.html",
    "revision": "be18f97fd578e961aca6c2757ad1f4fa"
  },
  {
    "url": "assets/css/0.styles.6aaa91c1.css",
    "revision": "fde2c425d4e8a0f87d70ece6f5dd13a3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.748604aa.js",
    "revision": "d1a67f141ea8ed5995a8a455c4bb9b4c"
  },
  {
    "url": "assets/js/11.4b4e3699.js",
    "revision": "66da0229893bab42947a17e79a9f5fc7"
  },
  {
    "url": "assets/js/12.2932a860.js",
    "revision": "73e0600aadccbb3f6413639b817ed61f"
  },
  {
    "url": "assets/js/13.9f408651.js",
    "revision": "368c1a9a73dc6b9fd57cbeee16383797"
  },
  {
    "url": "assets/js/14.85c611c7.js",
    "revision": "5cbde4e773dfbd799513a31b36fc0638"
  },
  {
    "url": "assets/js/15.2e87d8a7.js",
    "revision": "bd5f5a3dffa80cdda961e345c1642789"
  },
  {
    "url": "assets/js/16.b572a826.js",
    "revision": "791f6464d70f3a5e87fe4b96fcbaa402"
  },
  {
    "url": "assets/js/17.e2f5e240.js",
    "revision": "41b4dc95b57f259f2bf55566e40bc0fc"
  },
  {
    "url": "assets/js/18.aa14cba3.js",
    "revision": "64f3753bfe92f9ae10e9edeec4a3d4b9"
  },
  {
    "url": "assets/js/19.b065ca2d.js",
    "revision": "3e602cb2cc6a66e6d31aebad0aaf1ac8"
  },
  {
    "url": "assets/js/2.858e80da.js",
    "revision": "59b9e09855a16d382db7d8ff58d74b0d"
  },
  {
    "url": "assets/js/20.8a6fda36.js",
    "revision": "4e120bd6e9a8c9f9f19da0e276e57a3f"
  },
  {
    "url": "assets/js/21.076b3f74.js",
    "revision": "7770411b4f8c38bfdadf4579eef6ba4e"
  },
  {
    "url": "assets/js/22.5257c657.js",
    "revision": "e28ff8e3d0a40280f44627d237b18241"
  },
  {
    "url": "assets/js/23.89c99b4a.js",
    "revision": "e2fcf926c75c71b187febd953a4cdce5"
  },
  {
    "url": "assets/js/24.2aec65bd.js",
    "revision": "dd6f6cc3a0791f4e97c3996fb2ead205"
  },
  {
    "url": "assets/js/25.adda8f7d.js",
    "revision": "e5a670b34b78f6f2901d2d566a42cc74"
  },
  {
    "url": "assets/js/3.8fef3f9d.js",
    "revision": "9b7caca6b3a043c92a0bb63cc1c94984"
  },
  {
    "url": "assets/js/4.7576ad27.js",
    "revision": "bd2d8c3da2cfa9e9913ac3e56373fad9"
  },
  {
    "url": "assets/js/5.7ceb3230.js",
    "revision": "f07f0dfb557a671bed41fa29f6263492"
  },
  {
    "url": "assets/js/6.5b783e17.js",
    "revision": "6cf2d50789ed6a76c2afd8dd836aa743"
  },
  {
    "url": "assets/js/7.a13b2d85.js",
    "revision": "08f5c1a1b75b89ab365de77768b0a0b2"
  },
  {
    "url": "assets/js/8.397fb968.js",
    "revision": "eb6be9ffc954041f00b703d7a86c44a1"
  },
  {
    "url": "assets/js/9.e1d09ea2.js",
    "revision": "8366388359cc3d1e9eeb6787f296477d"
  },
  {
    "url": "assets/js/app.f7c1150b.js",
    "revision": "1995645f9005e2d3558b9657ba2724b1"
  },
  {
    "url": "bad/bada.html",
    "revision": "cc2b0d37f7381591419b3db147c3a675"
  },
  {
    "url": "bad/badb.html",
    "revision": "29d8e1f5a99404e4702ff389cc95b29f"
  },
  {
    "url": "bad/index.html",
    "revision": "808473da0b22652cdc10d56d7fa0a7e5"
  },
  {
    "url": "CSS/index.html",
    "revision": "c290896eaced2db8643bf9fab7b0a864"
  },
  {
    "url": "guide.html",
    "revision": "bb34810a81532e3ea6ded3c2b00b3646"
  },
  {
    "url": "HTML/index.html",
    "revision": "c7e8e6c16190991b1599ee40212457ac"
  },
  {
    "url": "HTML/基础.html",
    "revision": "a4efa8f5fb5f27efc7063e10aa0286d0"
  },
  {
    "url": "HTML/进阶.html",
    "revision": "21bd013314e1b1c94d5a05dea03696e1"
  },
  {
    "url": "index.html",
    "revision": "07877d9621fb9b8c84f6b557a298444b"
  },
  {
    "url": "JavaScript/index.html",
    "revision": "5c6b692f423acafc7677941067d81d5b"
  },
  {
    "url": "React/index.html",
    "revision": "d459243fa55b0dd58eb11deb10befbd7"
  },
  {
    "url": "React/安装不同版本.html",
    "revision": "bba0e8155712a7e7b311a25fc28bd079"
  },
  {
    "url": "React/配置别名.html",
    "revision": "8eaf3d17030a160520b4fccaded07865"
  },
  {
    "url": "svg/logo.svg",
    "revision": "791e63f2b90107b2fe9df7bd82e8cfd2"
  },
  {
    "url": "think/30岁左右的人，来谈谈你犯了哪些错误.html",
    "revision": "b6ad42e3380867ebd7534bdde6b24088"
  },
  {
    "url": "think/index.html",
    "revision": "e9bf888b847b99bf11f50290d6ca952b"
  },
  {
    "url": "think/努力了七年却依旧被中产阶级家庭子女完爆，我该如何调整心态.html",
    "revision": "0726cd06f223bbc5c059df62fd049e72"
  },
  {
    "url": "think/屡试不爽的经典话术.html",
    "revision": "bbbe4973d053c5534b616cf03ed639e3"
  },
  {
    "url": "VScode/index.html",
    "revision": "ed1da269265c32ae30a76c02579c7695"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
