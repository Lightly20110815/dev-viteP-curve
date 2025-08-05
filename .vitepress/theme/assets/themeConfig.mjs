// themeConfig.mjs

export const themeConfig = {
  siteMeta: {
    // --- 修改处 ---
    title: "Sy の 漂流瓶",
    description: "与你一同，穿梭于代码与星辰✨",
    logo: "https://api.ddnsy.fun/clogo.webp",
    site: "https://ddnsy.xyz",
    lang: "zh-CN",
    author: {
      name: "Sy酱",
      cover: "/avatar.png",
      email: "yangxingranapple@outlook.com",
      link: "https://ddnsy.xyz",
    },
  },
  icp: "萌ICP备20250733号",
  since: "2025-07-22",
  postSize: 5,
  inject: {
    header: [
      ["link", { rel: "icon", href: "/favicon.ico" }],
      [
        "link",
        {
          rel: "alternate",
          type: "application/rss+xml",
          title: "RSS",
          href: "#",
        },
      ],
      [
        "link",
        {
          crossorigin: "",
          rel: "preconnect",
          href: "https://s1.hdslb.com",
        },
      ],
      [
        "link",
        {
          crossorigin: "",
          rel: "preconnect",
          href: "https://cdn.jsdmirror.com",
        },
      ],
      [
        "link",
        {
          crossorigin: "anonymous",
          rel: "stylesheet",
          href: "https://cdn.jsdmirror.com/gh/kazukokawagawa/chiyupic@main/fonts/vivosans.css",
        },
      ],
      [
        "link",
        {
          crossorigin: "anonymous",
          rel: "stylesheet",
          href: "https://s1.hdslb.com/bfs/static/jinkela/long/font/regular.css",
        },
      ],
      [
        "link",
        {
          crossorigin: "anonymous",
          rel: "stylesheet",
          href: "https://cdn.jsdmirror.com/gh/kazukokawagawa/chiyupic@main/fonts/xiaolai.css",
        },
      ],
      [
        "link",
        {
          crossorigin: "anonymous",
          rel: "stylesheet",
          href: "https://cdn2.codesign.qq.com/icons/g5ZpEgx3z4VO6j2/latest/iconfont.css",
        },
      ],
      [
        "link",
        {
          crossorigin: "anonymous",
          rel: "stylesheet",
          href: "https://at.alicdn.com/t/c/font_4982617_bpbw30gpjso.css",
        },
      ],
      ["link", { rel: "preconnect", href: "https://use.sevencdn.com" }],
      ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
      [
        "link",
        {
          crossorigin: "anonymous",
          href: "https://use.sevencdn.com/css2?family=Fira+Code:wght@300..700&display=swap",
          rel: "stylesheet",
        },
      ],
    ],
  },
  nav: [
    {
      text: "宝藏阁",
      items: [
        { text: "所有宝藏", link: "/pages/archives", icon: "article" },
        { text: "分类糖果盒", link: "/pages/categories", icon: "folder" },
        { text: "标签魔法贴", link: "/pages/tags", icon: "hashtag" },
      ],
    },
    {
      text: "小伙伴",
      items: [
        { text: "传送门", link: "/pages/link", icon: "people" },
      ],
    },
    {
      text: "关于我",
      items: [
        { text: "关于本站", link: "/pages/about", icon: "contacts" },
      ],
    },
  ],
  navMore: [
    {
      name: "项目",
      list: [
        {
          icon: "https://api.ddnsy.fun/clogo.webp",
          name: "主站",
          url: "/",
        },
        {
          icon: "https://api.ddnsy.fun/hot.jpg",
          name: "热榜 By 池鱼鱼",
          url: "https://hot.chiyu.it",
        },
        {
          icon: "https://api.ddnsy.fun/nav.jpg",
          name: "Nav By 池鱼鱼",
          url: "https://nav.chiyu.it",
        },
      ],
    },
  ],
  cover: {
    twoColumns: false,
    showCover: {
      enable: false,
      coverLayout: 'both',
      defaultCover: [
        'https://cdn.jsdelivr.net/gh/MituA/Mitu-Random-img/img/pc/7.jpg',
        'https://cdn.jsdelivr.net/gh/Gowee/Gowee/img/202206240955687.png',
        'https://cdn.jsdelivr.net/gh/transparent-canvas/widget-free/assets/weather-bg/cat.png'
      ]
    }
  },
  footer: {
    social: [
      {
        icon: "email",
        link: "mailto:yangxingranapple@outlook.com",
      },
      {
        icon: "github",
        link: "https://github.com/Lightly20110815",
      },
      {
        icon: "telegram",
        link: "https://t.me/Sy_Yann",
      },
      {
        icon: "bilibili",
        link: "https://space.bilibili.com/1548870900",
      },
      {
        icon: "qq",
        link: "https://res.abeim.cn/api/qq/?qq=2473665578",
      },
      {
        icon: "twitter-x",
        link: "https://x.com/yxrchina",
      },
    ],
    sitemap: [
      {
        text: "博客",
        items: [
          { text: "最新发现", link: "/" },
          { text: "分类糖果盒", link: "/pages/categories" },
          { text: "标签魔法贴", link: "/pages/tags" },
          { text: "时光胶囊", link: "/pages/archives", newTab: true },
        ],
      },
      {
        text: "项目",
        items: [
          { text: "本站源码", link: "https://github.com/Lightly20110815/dev-viteP-curve", newTab: true },
        ],
      },
      {
        text: "页面",
        items: [
          { text: "关于本站", link: "/pages/about" },
          { text: "隐私政策", link: "/pages/privacy" },
          { text: "版权协议", link: "/pages/cc" },
          { text: "TODO", link: "/pages/todo" },
        ],
      },
      {
        text: "关于 Sy酱",
        items: [
          { text: "我的主页", link: "https://home.ddnsy.fun", newTab: true},
          { text: "关于我呀", link: "/pages/aboutme"},
        ],
      },
    ],
  },
  comment: {
    enable: true,
    type: "twikoo",
    artalk: {
      site: "",
      server: "",
    },
    twikoo: {
      js: "https://cdn.jsdelivr.net/npm/twikoo@1.6.42/dist/twikoo.all.min.js",
      envId: "https://twikoo.ddnsy.fun/",
      region: "",
      lang: "zh-CN",
    },
  },
  aside: {
    hello: {
      enable: true,
      text: "欢迎来到我的秘密花园！(｡･ω･｡)ﾉ♡<br><br>这里是我用心灌溉的一片小天地，记录着代码世界的奇妙冒险，和日常生活中闪闪发光的碎片。<br><br>希望你在这里能找到一丝乐趣与温暖，就像窝在柔软的云朵里一样~",
    },
    toc: {
      enable: true,
    },
    tags: {
      enable: true,
    },
    countDown: {
      enable: true,
      data: {
        name: "生日🎉",
        date: "2025-08-15",
      },
    },
    birthDate: {
        enable: true,
        date: "2011-08-15",
        name: "Sy Yann", // 这里可以修改为你的名字
    },
    timing: {
      enable: false, // 是否启用
      name: "池鱼", //要显示的名字
      event: "活着", //事件名称
      date: "2010-09-07", //出生日期
    },
    HelloGithub: {
      enable: true,
    },
    siteData: {
      enable: true,
    },
    weather: {
      enable: true,
    },
  },
  friends: {
    circleOfFriends: "",
    dynamicLink: {
      server: "",
      app_token: "",
      table_id: "",
    },
  },
  music: {
    enable: true,
    url: "https://meting.ddnsy.fun/api",
    id: 14022768906,
    server: "netease",
    type: "playlist",
  },
  search: {
    enable: false,
    appId: "0F1DUC8MAX",
    apiKey: "1f97c9169943484cfb9a05c825851ca4",
  },
  rewardData: {
    enable: false,
    wechat: "https://raw.chiyu.it/pic/pay/wx.webp",
    alipay: "https://raw.chiyu.it/pic/pay/zfb.webp",
  },
  fancybox: {
    enable: true,
    js: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/fancyapps-ui/5.0.36/fancybox/fancybox.umd.min.js",
    css: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/fancyapps-ui/5.0.36/fancybox/fancybox.min.css",
  },
  jumpRedirect: {
    enable: true,
    exclude: [
      "cf-friends-link",
      "upyun",
      "icp",
      "author",
      "rss",
      "cc",
      "power",
      "social-link",
      "link-text",
      "travellings",
      "post-link",
      "report",
      "more-link",
      "skills-item",
      "right-menu-link",
      "link-card",
    ],
  },
  tongji: {
    "51la": "3MtrQOhuvEl8wjgK",
  },
};