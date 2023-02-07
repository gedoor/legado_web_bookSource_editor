export default {
  base: {
    name: "基础",
    children: [
      {
        title: "源域名",
        rows: 1,
        id: "sourceUrl",
        type: "String",
        hint: "<必填>通常填写网站主页,例: https://www.qidian.com",
      },
      {
        title: "图标",
        rows: 1,
        id: "sourceIcon",
        type: "String",
        hint: "<选填>填写图片网络链接",
      },
      {
        title: "源名称",
        rows: 1,
        id: "sourceName",
        type: "String",
        hint: "<必填>会显示在源列表",
      },
      {
        title: "源分组",
        rows: 1,
        id: "sourceGroup",
        type: "String",
        hint: "<选填>描述源的特征信息",
      },
      {
        title: "源注释",
        rows: 1,
        id: "sourceComment",
        type: "String",
        hint: "<选填>描述源作者和状态",
      },
      {
        title: "变量说明",
        rows: 1,
        id: "variableComment",
        type: "String",
        hint: "<选填>源变量说明",
      },
      {
        title: "登录地址",
        rows: 1,
        id: "loginUrl",
        type: "String",
        hint: "<选填>填写网站登录网址,仅在需要登录的源有用",
      },
      {
        title: "登录界面",
        rows: 3,
        id: "loginUi",
        type: "String",
        hint: "<选填>自定义登录界面",
      },
      {
        title: "登录检测",
        rows: 3,
        id: "loginCheckJs",
        type: "String",
        hint: "<选填>登录检测js",
      },
      {
        title: "封面解密",
        rows: 3,
        id: "coverDecodeJs",
        type: "String",
        hint: "<选填>封面解密js",
      },
      {
        title: "并发率",
        rows: 1,
        id: "concurrentRate",
        type: "String",
        hint: "<选填>并发率",
      },
      {
        title: "请求头",
        rows: 3,
        id: "header",
        type: "String",
        hint: "<选填>客户端标识",
      },
      {
        title: "分类地址",
        rows: 3,
        id: "sortUrl",
        type: "String",
        hint: "<选填>名称1::链接1\n名称2::链接2",
      },
    ],
  },
  list: {
    name: "列表",
    children: [
      {
        title: "列表样式",
        rows: 1,
        id: "articleStyle",
        type: "Number",
        hint: "<选填>0,1,2 (默认0)",
      },
      {
        title: "列表规则",
        rows: 1,
        id: "ruleArticles",
        type: "String",
        hint: "规则结果为List<Element>",
      },
      {
        title: "翻页规则",
        rows: 1,
        id: "ruleNextPage",
        type: "String",
        hint: "下一页链接 规则结果为List<String>或String",
      },
      {
        title: "标题规则",
        rows: 1,
        id: "ruleTitle",
        type: "String",
        hint: "文章标题 规则结果为String",
      },
      {
        title: "时间规则",
        rows: 1,
        id: "rulePubDate",
        type: "String",
        hint: "文章发布时间 规则结果为String",
      },
      {
        title: "描述规则",
        rows: 1,
        id: "ruleDescription",
        type: "String",
        hint: "文章简要描述 规则结果为String",
      },
      {
        title: "图片规则",
        rows: 1,
        id: "ruleImage",
        type: "String",
        hint: "文章图片链接 规则结果为String",
      },
      {
        title: "链接规则",
        rows: 1,
        id: "ruleLink",
        type: "String",
        hint: "文章链接 规则结果为String",
      },
    ],
  },
  webView: {
    name: "WebView",
    children: [
      {
        title: "启用JS",
        rows: 1,
        id: "enableJs",
        type: "Number",
        hint: "启用: true  关闭: false (可选,默认true)",
      },
      {
        title: "加载地址",
        rows: 1,
        id: "loadWithBaseUrl",
        type: "Number",
        hint: "启用: true  关闭: false (可选,默认true)",
      },
      {
        title: "内容规则",
        rows: 1,
        id: "ruleContent",
        type: "String",
        hint: "文章正文",
      },
      {
        title: "样式规则",
        rows: 3,
        id: "style",
        type: "String",
        hint: "文章正文样式 填写css",
      },
      {
        title: "注入规则",
        rows: 3,
        id: "injectJs",
        type: "String",
        hint: "注入网页的JavaScript",
      },
      {
        title: "黑名单",
        rows: 1,
        id: "contentBlacklist",
        type: "String",
        hint: "webView链接加载黑名单，英文逗号隔开",
      },
      {
        title: "白名单",
        rows: 1,
        id: "contentWhitelist",
        type: "String",
        hint: "webView链接加载白名单，英文逗号隔开",
      },
    ],
  },
  other: {
    name: "其他",
    children: [
      {
        title: "启用",
        rows: 1,
        id: "enabled",
        type: "Boolean",
        hint: "启用: true  关闭: false (可选,默认true)",
      },
      {
        title: "Cookie",
        rows: 1,
        id: "enabledCookieJar",
        type: "Boolean",
        hint: "保存返回头的Cookie 启用: true  关闭: false (可选,默认false)",
      },
      {
        title: "单URL",
        rows: 1,
        id: "singleUrl",
        type: "Boolean",
        hint: "启用: true  关闭: false (可选,默认false)",
      },
      {
        title: "排序编号",
        rows: 1,
        id: "customOrder",
        type: "Number",
        hint: "整数: 0~N (可选,默认0) | 数字越小越靠前",
      },
    ],
  },
};
