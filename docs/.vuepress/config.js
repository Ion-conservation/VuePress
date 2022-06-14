module.exports = {
  title: "主页",
  description: "芝麻的学习记录",
  head: [
    // 注入到当前页面的 HTML <head> 中的标签
    [
      "link",
      {
        rel: "icon",
        href: "/images/photo.jpg",
      },
    ],
    [
      "link",
      {
        rel: "manifest",
        href: "/images/photo.jpg",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "/images/photo.jpg",
      },
    ],
    [
      "meta",
      {
        "http-quiv": "pragma",
        cotent: "no-cache",
      },
    ],
    [
      "meta",
      {
        "http-quiv": "pragma",
        cotent: "no-cache,must-revalidate",
      },
    ],
    [
      "meta",
      {
        "http-quiv": "expires",
        cotent: "0",
      },
    ],
  ],
  serviceWorker: true, // 是否开启 PWA
  base: "/", // 部署到github相关的配置
  markdown: {
    lineNumbers: true, // 代码块是否显示行号
  },
  themeConfig: {
    nav: [
      {
        text: "分类",
        items: [
          { text: "JavaScript", link: "/JavaScript/" },
          { text: "React", link: "/React/" },
        ],
      },

      {
        text: "文章摘录",
        link: "/think/",
      },
      { text: "Gitee", link: "https://gitee.com/zouzhenpeng" },
    ],
    sidebar: {
      "/JavaScript/": ['Class'],
      "/think/": ["article-1", "article-2", "article-3"],
      "/React/": ["配置别名"],
    },
  },
}
