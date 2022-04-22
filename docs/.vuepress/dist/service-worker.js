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
    "revision": "c24adf93e8ef052e5d8b8376f93522da"
  },
  {
    "url": "article/a.html",
    "revision": "bad6cc16ce578cfd44fd1761991090a0"
  },
  {
    "url": "article/b.html",
    "revision": "7067af0505b4f5dd04e6bef0f0c06c8a"
  },
  {
    "url": "article/index.html",
    "revision": "76b44ba593770d7ce29568bc08859135"
  },
  {
    "url": "article/前端框架源码.html",
    "revision": "d17bae64ececbd7f1bb8045a1726ae55"
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
    "url": "assets/js/app.0c889174.js",
    "revision": "50e3bb62fc3990deb293aff99ddb8630"
  },
  {
    "url": "bad/bada.html",
    "revision": "49dce0689088525c73e1b6fbd281bf00"
  },
  {
    "url": "bad/badb.html",
    "revision": "e15e132d6c03f38e3cbcfca0d7e0cdc3"
  },
  {
    "url": "bad/index.html",
    "revision": "32cad22c40782b2edbc4e878643c485a"
  },
  {
    "url": "CSS/index.html",
    "revision": "89a6d67be50b72a8dae727b91a5801fb"
  },
  {
    "url": "guide.html",
    "revision": "7f7ef8e99f03047cc04fa3402854fe6e"
  },
  {
    "url": "HTML/index.html",
    "revision": "12bbcebb860a6c23e6d6301e1e48b775"
  },
  {
    "url": "HTML/基础.html",
    "revision": "405f1a43f4c078a66a3f88baf03a0e23"
  },
  {
    "url": "HTML/进阶.html",
    "revision": "8d32c0e8fd4d614d1065e8115596ddc5"
  },
  {
    "url": "index.html",
    "revision": "2fdb3da62c1893d994f6ed5c13d7d5ef"
  },
  {
    "url": "JavaScript/index.html",
    "revision": "7e7521e0696bc8ca480faf65ef02459a"
  },
  {
    "url": "React/index.html",
    "revision": "7af86f501f6ec545ef3229ff5f783c41"
  },
  {
    "url": "React/安装不同版本.html",
    "revision": "59892291f71a910e771b66fc8fb6f94f"
  },
  {
    "url": "React/配置别名.html",
    "revision": "ecfe5ce06af07886ced6cd02110246a5"
  },
  {
    "url": "svg/logo.svg",
    "revision": "346e12ee28bb0e5f5600d47beb4c7a47"
  },
  {
    "url": "think/30岁左右的人，来谈谈你犯了哪些错误.html",
    "revision": "5f1f2a4dc87d654a1d511f6fbf2c9418"
  },
  {
    "url": "think/index.html",
    "revision": "bc0b6ccd888bc6f3d3aad9db217a69ee"
  },
  {
    "url": "think/努力了七年却依旧被中产阶级家庭子女完爆，我该如何调整心态.html",
    "revision": "bbc43b3404f8feeb3d7ae4664d8c6201"
  },
  {
    "url": "think/屡试不爽的经典话术.html",
    "revision": "dbf6b14a94f51edbd3ac02f21d8badfc"
  },
  {
    "url": "VScode/index.html",
    "revision": "bcc315ebaf2e855ec5a7d9a5be0f978f"
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
