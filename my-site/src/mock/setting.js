import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar: "https://img1.baidu.com/it/u=845603950,342558650&fm=253&fmt=auto&app=138&f=JPEG?w=295&h=221",
    siteTitle: "我的个人空间",
    // github: "https://github.com/DuYi-Edu",
    qq: "3263023350",
    qqQrCode:
      "https://img0.baidu.com/it/u=2691477116,3852646875&fm=26&fmt=auto",
    weixin: "yh777bao",
    weixinQrCode:
      "https://img0.baidu.com/it/u=2691477116,3852646875&fm=26&fmt=auto",
    mail: "duyi@gmail.com",
    icp: "黑ICP备17001719号",
    githubName: "DuYi-Edu",
    favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
  },
});
