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
      // 导航栏配置
      {
        text: "教程",
        items: [
          { text: "HTML", link: "/HTML/" },
          { text: "CSS", link: "/CSS/" },
          { text: "JavaScript", link: "/JavaScript/" },
          { text: "Vue", link: "/Vue/" },
          { text: "React", link: "/React/" },
          { text: "Webpack", link: "/Webpack/" },
          { text: "NodeJs", link: "/NodeJs/" },
        ],
      },
      {
        text: "文章阅读",
        link: "/article/前端框架源码",
      },
      {
        text: "踩坑",
        link: "/bad/",
      },
      {
        text: "思考一下",
        link: "/think/",
      },
      { text: "Gitee", link: "https://gitee.com/zouzhenpeng" },
    ],
    sidebar: {
      "/bad/": ["bada", "badb"],
      "/think/": ["30岁左右的人，来谈谈你犯了哪些错误"],
      "/article/": [
        {
          title: "源码阅读指南",
          sidebarDepth: 2,
          children: ["前端框架源码"],
        },
      ],
    },
  },
}
