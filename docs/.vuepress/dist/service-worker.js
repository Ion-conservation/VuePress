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
    "revision": "96679df6ad9995f3624d02257239dc96"
  },
  {
    "url": "article/a.html",
    "revision": "0230b6d2a070284055592e183864f2b7"
  },
  {
    "url": "article/b.html",
    "revision": "b69d654aa2090692e2d533974de077e7"
  },
  {
    "url": "article/index.html",
    "revision": "51cf7667b3ecfc588967c5342b5110c5"
  },
  {
    "url": "article/前端框架源码.html",
    "revision": "4fbbde400cec15ba87f448c7e2c87387"
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
    "url": "assets/js/app.f76a2f6e.js",
    "revision": "317c7ed0472f824eade2f3d54bd3c3aa"
  },
  {
    "url": "bad/bada.html",
    "revision": "3e120f5f9c875e39750eb4b2146893ff"
  },
  {
    "url": "bad/badb.html",
    "revision": "2f3ad11aef3a9e3e93bfc8b599147794"
  },
  {
    "url": "bad/index.html",
    "revision": "4e8af7b6421e72b7111d316761956233"
  },
  {
    "url": "CSS/index.html",
    "revision": "a50bf2983f5981cf1e4104feae30f4db"
  },
  {
    "url": "guide.html",
    "revision": "edd6318e31abf87f161225da67fa1149"
  },
  {
    "url": "HTML/index.html",
    "revision": "add55e4af03d2428459652c0cac5b6ef"
  },
  {
    "url": "HTML/基础.html",
    "revision": "e7c477de5daf724a55f6db2524bd758e"
  },
  {
    "url": "HTML/进阶.html",
    "revision": "696fa41c78ca5acaa47f6de20d47b1fa"
  },
  {
    "url": "index.html",
    "revision": "3d6425a6d0bf1f2dfe69b345ff11c1f2"
  },
  {
    "url": "JavaScript/index.html",
    "revision": "ca10a9c2dd2fb53de0f87eb31a4813a0"
  },
  {
    "url": "React/index.html",
    "revision": "0bfbfd852f30a48a11ff00bc0e667141"
  },
  {
    "url": "React/安装不同版本.html",
    "revision": "465b90074352eab44c75ee2a209910aa"
  },
  {
    "url": "React/配置别名.html",
    "revision": "b4bd229f36961d8e1d79b2817a127da4"
  },
  {
    "url": "svg/logo.svg",
    "revision": "791e63f2b90107b2fe9df7bd82e8cfd2"
  },
  {
    "url": "think/30岁左右的人，来谈谈你犯了哪些错误.html",
    "revision": "2f36364f909932c1f86e6d2d4ec6bb10"
  },
  {
    "url": "think/index.html",
    "revision": "c0ef928a97f146238eb11f984bf043fd"
  },
  {
    "url": "think/努力了七年却依旧被中产阶级家庭子女完爆，我该如何调整心态.html",
    "revision": "210c9316e0aabedcaa68c4645b481c1e"
  },
  {
    "url": "think/屡试不爽的经典话术.html",
    "revision": "20dd35a5cdd0c5dab23c25c81d969fd1"
  },
  {
    "url": "VScode/index.html",
    "revision": "34a60944e15968a0ae8b30805959df18"
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
