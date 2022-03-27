import Mock from "mockjs";

Mock.mock("/api/banner", "get", {
  code: 0,
  msg: "",
  data: [
    {
      id: "1",
      midImg: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.lnstzy.cn%2Faoaodcom%2F2020-03%2F27%2F202003270852246c4a28cea779f6881fb53e9b53326463.jpg.w1920.h1080.jpg%3Fdown&refer=http%3A%2F%2Fimage.lnstzy.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648715445&t=2c98e97363afd8c9f0f6f4f22fa7f49c",
      bigImg: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.lnstzy.cn%2Faoaodcom%2F2020-03%2F27%2F202003270852246c4a28cea779f6881fb53e9b53326463.jpg.w1920.h1080.jpg%3Fdown&refer=http%3A%2F%2Fimage.lnstzy.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648715445&t=2c98e97363afd8c9f0f6f4f22fa7f49c",
      title: "爱狗人士",
      description: "狗狗是人类最忠诚的朋友",
    },
    {
      id: "2",
      midImg: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-07-04%2F5b3c33d7a446d.jpg%3Fdown&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648715739&t=7d90e80d2d9b03acccc4adfd48fa5093",
      bigImg: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-07-04%2F5b3c33d7a446d.jpg%3Fdown&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648715739&t=7d90e80d2d9b03acccc4adfd48fa5093",
      title: "鲜花是浪漫开始",
      description: "没有人能拒绝温柔与浪漫",
    },
    {
      id: "3",
      midImg: "https://img0.baidu.com/it/u=233580175,667071840&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500",
      bigImg: "https://img0.baidu.com/it/u=233580175,667071840&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500",
      title: "永远向往远方",
      description: "永远不卑不亢，不骄不躁",
    },
  ],
});
