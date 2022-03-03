module.exports = {
  title: "个人主页",
  description: "Personal Website",
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
        text: "HTML",
        link: "/HTML/",
      },
      {
        text: "CSS",
        link: "/CSS/",
      },
      {
        text: "JavaScript",
        link: "/JavaScript/",
      },
      {
        text: "Vue",
        link: "/Vue/",
      },
      {
        text: "React",
        link: "/React/",
      },
      {
        text: "Webpack",
        link: "/Webpack/",
      },
      {
        text: "NodeJs",
        link: "/NodeJs/",
      },
      // {text: 'GitHub', link: 'https://baidu.com'}
    ],
    sidebar: {
      "/HTML/": [
        {
          title: "HTML",
          children: [
            // '',
            "基础",
            "进阶",
          ],
        },
      ],
    },
    // sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2,
    displayAllHeaders: true, // 默认值：false
  },
}
