// pages/catelogue/catelogue.js
Page({
  data: {
    cateItems: [
      {
        cate_id: 1,
        cate_name: "全部",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '岛',
              image: "https://img.alicdn.com/imgextra/i3/13664025226115509/T11tcjXotXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 2,
              name: '龙纹身的女孩',
              image: "https://img.alicdn.com/imgextra/i1/2902594924/O1CN01gdf0Yi1mFEhnzlQxF_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 3,
              name: '寻圣光的人',
              image: "https://img.alicdn.com/imgextra/i4/1049653664/TB2BIGikb3nBKNjSZFMXXaUSFXa_!!1049653664.jpg_430x430q90.jpg"
            },
            {
              child_id: 4,
              name: '小小巴黎书店',
              image: "https://img.alicdn.com/imgextra/i4/1049653664/TB1J8fgarsTMeJjSszhXXcGCFXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 5,
              name: '知更鸟女孩',
              image: "https://img.alicdn.com/imgextra/i1/2535611270/O1CN01xaV4Gc1LFhTnks2jT_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 6,
              name: '解忧杂货铺',
              image: "https://img.alicdn.com/imgextra/i2/3305034492/O1CN011j3NbS18hYfh9xA_!!3305034492.jpg_430x430q90.jpg"
            },
            {
              child_id: 7,
              name: '嫌疑人X的献身',
              image: "https://img.alicdn.com/imgextra/i4/346537757/TB2pjSYqXXXXXXeXXXXXXXXXXXX_!!346537757.jpg_430x430q90.jpg"
            },
            {
              child_id: 8,
              name: '银河帝国7',
              image: "https://img.alicdn.com/imgextra/i1/2332591902/O1CN011Pv9mrtW1FALdt7_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 9,
              name: '普罗旺斯的一年',
              image: "https://img.alicdn.com/imgextra/i3/T1OjkzFa0dXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 10,
              name: '悲惨世界 上下',
              image: "https://img.alicdn.com/imgextra/i1/TB1CpsmOFXXXXbAXFXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 11,
              name: '我所创造的怪物',
              image: "https://img.alicdn.com/imgextra/i1/TB1fWPqOpXXXXcxapXXXXXXXXXX_!!2-item_pic.png_430x430q90.jpg"
            },
            {
              child_id: 12,
              name: '忒修斯之船',
              image: "https://img.alicdn.com/imgextra/i3/TB1M6iSRXXXXXc2aXXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 13,
              name: '死魂灵',
              image: "https://img.alicdn.com/imgextra/i1/2096830498/TB2Pxs8nKuSBuNjSsplXXbe8pXa_!!2096830498-0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 14,
              name: '纳尔齐斯与歌尔德蒙',
              image: "https://img.alicdn.com/imgextra/i4/665759828/TB1pVQyF4SYBuNjSsphXXbGvVXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 15,
              name: '爱情笔记',
              image: "https://img.alicdn.com/imgextra/i1/2322191136/TB1NO0OkxuTBuNkHFNRXXc9qpXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 16,
              name: '玻璃球游戏',
              image: "https://img.alicdn.com/imgextra/i1/2829158779/TB1nZ8Jdjgy_uJjSZR0XXaK5pXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 17,
              name: '卡尔维诺经典短篇小说集',
              image: "https://img.alicdn.com/imgextra/i2/766235626/TB2PR6OqRjTBKNjSZFDXXbVgVXa_!!766235626-0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 18,
              name: '卡夫卡作品精粹',
              image: "https://gd2.alicdn.com/imgextra/i1/0/O1CN01rzvsLL1ktQEChgRYz_!!0-item_pic.jpg_430x430.jpg_.webp"
            },
            {
              child_id: 19,
              name: '陀思妥耶夫斯基中短篇小说选',
              image: "https://gd3.alicdn.com/imgextra/i2/0/O1CN01Yy6Qdq1gbmVgNHT5h_!!0-item_pic.jpg_430x430.jpg_.webp"
            },
            {
              child_id: 20,
              name: 'FLIPPED',
              image: "https://img.alicdn.com/imgextra/i3/866276081/O1CN01qbQFOe1un8x04CYBK_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 21,
              name: '彷徨少年时',
              image: "https://img.alicdn.com/imgextra/i4/TB1tNOIQpXXXXcAXXXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 22,
              name: '智惠子抄',
              image: "https://img.alicdn.com/imgextra/i3/2322191136/TB1S0d1wb5YBuNjSspoXXbeNFXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 23,
              name: '霍乱时的爱情',
              image: "https://img.alicdn.com/imgextra/i4/2950270077/TB2iQtWuxdkpuFjy0FbXXaNnpXa_!!2950270077.jpg_430x430q90.jpg"
            },
            {
              child_id: 24,
              name: '挪威的森林',
              image: "https://img.alicdn.com/imgextra/i4/766235626/TB2NpxybFzqK1RjSZSgXXcpAVXa_!!766235626-0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 25,
              name: '牧羊少年的奇幻之旅',
              image: "https://img.alicdn.com/imgextra/i3/839616086/TB1OWSKgruWBuNjSszgXXb8jVXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 26,
              name: '罗生门',
              image: "https://img.alicdn.com/imgextra/i2/665759828/TB2G1EOsC8YBeNkSnb4XXaevFXa_!!665759828-0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 27,
              name: '另一个布鲁克林',
              image: "https://img.alicdn.com/imgextra/i4/2225029197/O1CN01keUt5e2HoH66k89qG_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 28,
              name: '简爱',
              image: "https://img.alicdn.com/imgextra/i3/2743191321/O1CN011Ld3fz9X4tHpGuu_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 29,
              name: '失乐园',
              image: "https://img.alicdn.com/imgextra/i4/1049653664/TB1CVyddznD8KJjSspbXXbbEXXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 30,
              name: '金色梦乡',
              image: "https://img.alicdn.com/imgextra/i1/TB1wFBIPFXXXXafXFXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 31,
              name: '步履不停',
              image: "https://img.alicdn.com/imgextra/i3/TB10Fw8QVXXXXbbaXXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 32,
              name: 'Lilac Girls',
              image: "https://gd4.alicdn.com/imgextra/i1/538210199/O1CN01sHkPTY1DLBIfXFHfY_!!538210199.jpg"
            },
            {
              child_id: 33,
              name: '超禁忌游戏4',
              image: "https://img.alicdn.com/imgextra/i3/671432529/TB2vkvPXrsTMeJjSszdXXcEupXa_!!671432529.jpg_430x430q90.jpg"
            },
            {
              child_id: 34,
              name: '超禁忌游戏大结局',
              image: "https://img.alicdn.com/imgextra/i3/671432529/TB2NjHoX6oIL1JjSZFyXXbFBpXa_!!671432529.jpg_430x430q90.jpg"
            },
            {
              child_id: 35,
              name: '超禁忌游戏1',
              image: "https://img.alicdn.com/imgextra/i4/671432529/TB2JniiXEF7MKJjSZFLXXcMBVXa_!!671432529.jpg_430x430q90.jpg"
            },
            {
              child_id: 36,
              name: '超禁忌游戏2',
              image: " https://img.alicdn.com/imgextra/i4/671432529/TB2t4PkX5AKL1JjSZFoXXagCFXa_!!671432529.jpg_430x430q90.jpg"
            },
            {
              child_id: 37,
              name: '404公寓',
              image: "https://img.alicdn.com/imgextra/i1/2609694927/TB1_EjMdaLN8KJjSZFvXXXW8VXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 38,
              name: '必须犯规的游戏',
              image: "https://img.alicdn.com/imgextra/i3/2169736216/TB13JlBbXYqK1RjSZLeXXbXppXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 39,
              name: '死者的警告',
              image: "https://img.alicdn.com/imgextra/i3/2169736216/TB13JlBbXYqK1RjSZLeXXbXppXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 40,
              name: '新房客和活死人',
              image: "https://img.alicdn.com/imgextra/i1/2605290859/TB26VM3czfguuRjSspaXXaXVXXa_!!2605290859-0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 41,
              name: '黄雀记',
              image: "https://img.alicdn.com/imgextra/i3/346537757/O1CN0127AkkGVWuLDNfQj_!!346537757.jpg_430x430q90.jpg"
            },
            {
              child_id: 42,
              name: '米',
              image: "https://gd2.alicdn.com/imgextra/i4/0/O1CN01fVaUVd21VSyp092ku_!!0-item_pic.jpg_430x430.jpg"
            },
            {
              child_id: 43,
              name: '从你的全世界路过',
              image: "https://img.alicdn.com/imgextra/i3/TB1FNXeLXXXXXcyXFXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 44,
              name: '你若安好便是晴天',
              image: "https://img.alicdn.com/imgextra/i3/2406931838/TB2B.bPb6ZnyKJjSZFxXXabIpXa_!!2406931838.jpg_430x430q90.jpg"
            },
            {
              child_id: 45,
              name: '超禁忌游戏3',
              image: "https://img.alicdn.com/imgextra/i4/2436523931/O1CN01IgKM8j1euRPS05znZ_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 46,
              name: '黄金时代',
              image: "https://img.alicdn.com/imgextra/i4/TB1gQKqLXXXXXbtXpXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 47,
              name: '第九个寡妇',
              image: "https://img.alicdn.com/imgextra/i2/859515618/TB1uAdfu5MnBKNjSZFzXXc_qVXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 48,
              name: '赡养人类',
              image: "https://img.alicdn.com/imgextra/i1/665759828/TB1ShmJewjN8KJjSZFgXXbjbVXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 49,
              name: '青衣',
              image: "https://img.alicdn.com/imgextra/i3/2280890934/TB12EfjqH1YBuNjSszhXXcUsFXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 50,
              name: '亮剑',
              image: "https://img.alicdn.com/imgextra/i4/2670520056/O1CN01q3RDBq1CHgeZaUFSg_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 51,
              name: '百年孤独',
              image: "https://img.alicdn.com/imgextra/i1/2609694927/O1CN011mGbsu2ip4p0O7t_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 52,
              name: '瓦尔登湖',
              image: "https://img.alicdn.com/imgextra/i4/2730351819/TB2BnknrlnTBKNjSZPfXXbf1XXa_!!2730351819.jpg_430x430q90.jpg"
            },
            {
              child_id: 53,
              name: '1984',
              image: "https://img.alicdn.com/imgextra/i4/2105302446/TB2YAxLn63z9KJjy0FmXXXiwXXa_!!2105302446.jpg_430x430q90.jpg"
            },
            {
              child_id: 54,
              name: '因为懂得所以慈悲',
              image: "https://img.alicdn.com/imgextra/i1/1777710608/O1CN011GMVHFHqGHt1Xk9_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 55,
              name: '愿此生岁月静好',
              image: "https://img.alicdn.com/imgextra/i1/859515618/TB1ayWNXiMnBKNjSZFzXXc_qVXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 56,
              name: '望春风',
              image: "https://img.alicdn.com/imgextra/i4/TB1o558PXXXXXX3XpXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 57,
              name: '知道分子',
              image: "https://img.alicdn.com/imgextra/i3/2322191136/TB1XCIssSBYBeNjy0FeXXbnmFXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 58,
              name: '西厢记',
              image: "https://gd1.alicdn.com/imgextra/i1/1/O1CN01VgUsxL1YeyLCRTUx8_!!1-item_pic.gif_430x430.jpg"
            },
            {
              child_id: 59,
              name: '长生殿',
              image: "https://gd4.alicdn.com/imgextra/i4/0/O1CN011Lo3AqYkMnWmV2x_!!0-item_pic.jpg_430x430.jpg"
            },
            {
              child_id: 60,
              name: '长生殿',
              image: "https://gd3.alicdn.com/imgextra/i4/0/TB1.L4Odr5YBuNjSspoXXbeNFXa_!!0-item_pic.jpg_430x430.jpg"
            },
            {
              child_id: 61,
              name: '十日谈',
              image: "https://img.alicdn.com/imgextra/i3/665759828/O1CN012MTGzLLdDAeBXlQ-665759828.jpg_430x430q90.jpg"
            },
            {
              child_id: 62,
              name: '爱你就像爱生命',
              image: "https://img.alicdn.com/imgextra/i1/TB17Bd9RFXXXXcSXFXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 63,
              name: '基督山伯爵',
              image: "https://img.alicdn.com/imgextra/i2/TB1LjlzSpXXXXa2XVXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 64,
              name: '山居笔记',
              image: "https://img.alicdn.com/imgextra/i4/2322191136/TB1BKdjXjgy_uJjSZPxXXanNpXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 65,
              name: '你是我不及的梦',
              image: "https://img.alicdn.com/imgextra/i2/2609694927/TB2E4lreFXXXXcDXXXXXXXXXXXX_!!2609694927.jpg_430x430q90.jpg"
            },
            {
              child_id: 66,
              name: '唐宋词十七讲',
              image: "https://img.alicdn.com/imgextra/i4/TB1vSOtLXXXXXcNXVXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 67,
              name: '致岁月迢迢',
              image: "https://img.alicdn.com/imgextra/i2/TB1_Z83QFXXXXbGXFXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 68,
              name: '莫言作品精选',
              image: "https://img.alicdn.com/imgextra/i3/1607450394/TB2R_2NvTqWBKNjSZFxXXcpLpXa_!!1607450394-0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 69,
              name: '目送',
              image: "https://img.alicdn.com/imgextra/i4/839616086/TB1Vz4VeruWBuNjSszgXXb8jVXa_!!0-item_pic.jpg_60x60q90.jpg"
            },
            {
              child_id: 70,
              name: '行者无疆',
              image: "https://img.alicdn.com/imgextra/i3/2225029197/O1CN01XAdJEF2HoH69leNpb_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 71,
              name: '来不及好好告别',
              image: "https://gd3.alicdn.com/imgextra/i2/0/O1CN019vVfxS1x6xJsyIvEs_!!0-item_pic.jpg_430x430.jpg_.webp"
            },
            {
              child_id: 72,
              name: '温柔的夜',
              image: "https://img.alicdn.com/imgextra/i2/826551804/TB1qKXQoYsrBKNjSZFpXXcXhFXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 73,
              name: '设计诗',
              image: "https://img.alicdn.com/imgextra/i3/18747024567669028/T1eLUhXkdXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 74,
              name: '我的阿勒泰',
              image: "https://img.alicdn.com/imgextra/i2/TB18oxDKVXXXXcwXpXXXXXXXXXX_!!0-item_pic.jpg_60x60q90.jpg"
            },
            {
              child_id: 75,
              name: '人类群星闪耀时',
              image: "https://img.alicdn.com/imgextra/i4/2561076943/O1CN010lgyNu219wMQYJkEs_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 76,
              name: '时间的女儿',
              image: "https://img.alicdn.com/imgextra/i4/764751502/TB1ahZ0eRyWBuNkSmFPXXXguVXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 77,
              name: 'What The Dog Saw',
              image: "http://shopimg.kongfz.com.cn/20111030/79172/18429YQNbQL_b.jpg"
            },
            {
              child_id: 78,
              name: '破解梵高之美',
              image: "https://img.alicdn.com/imgextra/i4/1049653664/TB1RuJzndzJ8KJjSspkXXbF7VXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 79,
              name: '破解达芬奇之美',
              image: "https://img.alicdn.com/imgextra/i3/3713444131/O1CN011gO2cSjKvXfpxOq_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 80,
              name: '破解莫奈之美',
              image: "https://img.alicdn.com/imgextra/i4/2591108390/TB1AB8LzhGYBuNjy0FnXXX5lpXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 81,
              name: '破解德加之美',
              image: "https://img.alicdn.com/imgextra/i4/2369322973/TB1bpgQcQfb_uJkSne1XXbE4XXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 82,
              name: '破解米开朗基罗',
              image: "https://img.alicdn.com/imgextra/i2/TB1TCM3LpXXXXXOaXXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 83,
              name: '破解高更之美',
              image: "https://img.alicdn.com/imgextra/i1/2139804459/O1CN011ioGWWkZfwNonsA_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 84,
              name: '写给大家的西方美术史',
              image: "https://img.alicdn.com/imgextra/i3/TB1WL_sMpXXXXc9XFXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 85,
              name: '中国艺术史',
              image: "https://img.alicdn.com/imgextra/i3/454269114/O1CN01IFfBSk2HCGDyapId6_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 86,
              name: '美学散步',
              image: "https://img.alicdn.com/imgextra/i1/720096711/TB21bLepXXXXXcBXpXXXXXXXXXX_!!720096711.jpg_430x430q90.jpg"
            },
            {
              child_id: 87,
              name: '艺术修养',
              image: "https://img.alicdn.com/imgextra/i4/TB1xjpCNpXXXXaEXXXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 88,
              name: '设计心理学3',
              image: "https://img.alicdn.com/imgextra/i3/TB181XnIpXXXXbMXpXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 89,
              name: '第一财经周刊',
              image: "https://img.alicdn.com/imgextra/i3/1638268570/O1CN013Z7hXg2DB6l1lkpfs_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 90,
              name: '全球通史',
              image: "https://img.alicdn.com/imgextra/i1/712110029/TB2iNzDqr5YBuNjSspoXXbeNFXa_!!712110029-0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 91,
              name: '故事',
              image: "https://img.alicdn.com/imgextra/i2/TB1lvbULVXXXXc5XXXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 92,
              name: '人类简史',
              image: "https://img.alicdn.com/imgextra/i1/2917286701/TB1SipGzkCWBuNjy0FaXXXUlXXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 93,
              name: '鱼羊野史1',
              image: "https://img.alicdn.com/imgextra/i4/TB1eKSBLXXXXXbDXFXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 94,
              name: '鱼羊野史2',
              image: "https://img.alicdn.com/imgextra/i4/2455124912/TB2jghjuXooBKNjSZPhXXc2CXXa_!!2455124912-0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 95,
              name: '鱼羊野史3',
              image: "https://img.alicdn.com/imgextra/i4/1961939153/TB1niD3gL9TBuNjy0FcXXbeiFXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 96,
              name: '鱼羊野史4',
              image: "https://img.alicdn.com/imgextra/i1/859515618/TB1qRzXXuuSBuNjSsplXXbe8pXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 97,
              name: '鱼羊野史5',
              image: "https://img.alicdn.com/imgextra/i3/2072556143/O1CN01AXw26W1vFXVZnc2c2_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 98,
              name: '鱼羊野史6',
              image: "https://img.alicdn.com/imgextra/i2/TB1fgC_KXXXXXXZXFXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 99,
              name: '五代十国原来是这样的',
              image: "https://img.alicdn.com/imgextra/i3/1049653664/TB1AXMHc3oQMeJjy0FpXXcTxpXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 100,
              name: '晚清原来是这样的',
              image: "https://img.alicdn.com/imgextra/i1/1109873147/TB16sRVaH9YBuNjy0FgXXcxcXXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 101,
              name: '魏晋南北朝原来是这样的',
              image: "https://img.alicdn.com/imgextra/i2/2139557436/TB1zuSsbh9YBuNjy0FfXXXIsVXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 102,
              name: '日本史',
              image: "https://img.alicdn.com/imgextra/i1/TB1ySmALXXXXXb8XVXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 103,
              name: '历史的温度',
              image: "https://img.alicdn.com/imgextra/i1/2456285297/TB1yJYvXhHBK1JjSZFyXXcmcFXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 104,
              name: '十字军史',
              image: "https://img3.doubanio.com/view/subject/l/public/s29388925.jpg"
            },
            {
              child_id: 105,
              name: '常识',
              image: "https://img1.doubanio.com/view/subject/l/public/s27277537.jpg"
            },
            {
              child_id: 106,
              name: '西方战地记者',
              image: "https://img3.doubanio.com/view/subject/l/public/s29145790.jpg"
            },
            {
              child_id: 107,
              name: '西洋史',
              image: "https://gd2.alicdn.com/imgextra/i3/0/TB1FeJcgTqWBKNjSZFAXXanSpXa_!!0-item_pic.jpg"
            },
            {
              child_id: 108,
              name: '一个中国记者看二战',
              image: "https://img14.360buyimg.com/n0/jfs/t21076/13/1774384897/123072/cf05186d/5b33fe21N060587a1.jpg"
            },
            {
              child_id: 109,
              name: '中国史纲',
              image: "https://img.alicdn.com/imgextra/i2/TB1cuSyOXXXXXb3apXXXXXXXXXX_!!2-item_pic.png_430x430q90.jpg"
            },
            {
              child_id: 110,
              name: '中国哲学简史',
              image: "https://img.alicdn.com/imgextra/i4/TB1Hm3aNpXXXXaIXFXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 111,
              name: '往事与随想',
              image: "https://gd2.alicdn.com/imgextra/i1/0/O1CN01AqNgi12AYW9u8WaCQ_!!0-item_pic.jpg_400x400.jpg"
            },
            {
              child_id: 112,
              name: '当呼吸化为空气',
              image: "https://img.alicdn.com/imgextra/i1/859515618/TB2uqviokUmBKNjSZFOXXab2XXa_!!859515618.jpg_430x430q90.jpg"
            },
            {
              child_id: 113,
              name: '白说',
              image: "https://img.alicdn.com/imgextra/i3/839616086/O1CN011upQvPwPjwpuCAv_!!839616086.jpg_430x430q90.jpg"
            },
            {
              child_id: 114,
              name: '离经叛道',
              image: "https://img.alicdn.com/imgextra/i3/2225029197/O1CN01nOT0Yu2HoH6AHPyVX_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 115,
              name: '一本正经又怪诞的行为心理学',
              image: "https://img.alicdn.com/imgextra/i3/2322191136/TB1qa99sNSYBuNjSsphXXbGvVXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 116,
              name: 'The Glass Castle',
              image: "https://img.alicdn.com/imgextra/i3/2322191136/TB1qa99sNSYBuNjSsphXXbGvVXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 117,
              name: '天才在左疯子在右',
              image: "https://img.alicdn.com/imgextra/i1/2609694927/O1CN011mGbsnKayOApHF9_!!2609694927.jpg_430x430q90.jpg"
            },
            {
              child_id: 118,
              name: '习近平的七年知青岁月',
              image: "https://img.alicdn.com/imgextra/i2/741412252/TB1vVtLXhHBK1JjSZFqXXc0LXXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 119,
              name: '乡土中国',
              image: "https://img.alicdn.com/imgextra/i2/2322191136/TB13WG7btrJ8KJjSspaXXXuKpXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 120,
              name: '枪炮病菌与钢铁',
              image: "https://img.alicdn.com/imgextra/i3/TB1_hovNVXXXXbiXpXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 121,
              name: '甬城草木记',
              image: "https://img.alicdn.com/imgextra/i3/3376080142/TB1iu3yocnI8KJjSspeXXcwIpXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 122,
              name: '魔鬼辞典',
              image: "https://gd4.alicdn.com/imgextra/i2/0/TB1zhHmIFXXXXadXFXXXXXXXXXX_!!0-item_pic.jpg_400x400.jpg"
            },
            {
              child_id: 123,
              name: '国富论',
              image: "https://img.alicdn.com/imgextra/i4/2233958286/TB1.85YoHSYBuNjSspiXXXNzpXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 124,
              name: '我在底层的生活',
              image: "https://img.alicdn.com/imgextra/i1/TB1l7BiFVXXXXXHXXXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 125,
              name: '给青年建筑师的信',
              image: "https://img.alicdn.com/imgextra/i3/2322191136/TB1iskTsh9YBuNjy0FfXXXIsVXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 126,
              name: '蓝色小药丸',
              image: "https://img.alicdn.com/imgextra/i3/927356304/TB2Bee7cWagSKJjy0FbXXa.mVXa_!!927356304.jpg_430x430q90.jpg"
            },
            {
              child_id: 127,
              name: '这本书能让你睡得好',
              image: "https://img.alicdn.com/imgextra/i1/2659708080/TB1k8nVSFXXXXXLXVXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 128,
              name: '三行情书',
              image: "https://gd1.alicdn.com/imgextra/i4/0/TB18GCPipGWBuNjy0FbXXb4sXXa_!!0-item_pic.jpg_430x430.jpg_.webp"
            },
            {
              child_id: 129,
              name: '德尔斐的囚徒',
              image: "https://img.alicdn.com/imgextra/i4/2191160435/TB19uZQvwaTBuNjSszfXXXgfpXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 130,
              name: 'Word Power Made Easy',
              image: "https://img.alicdn.com/imgextra/i3/1899623276/TB1mFTmXTzGK1JjSspkXXXNUpXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 131,
              name: '食物信息图',
              image: "https://img.alicdn.com/imgextra/i1/2902594924/O1CN01RMkbLk1mFEhohMLMo_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 132,
              name: '日本制造力',
              image: "https://img.alicdn.com/imgextra/i3/1049653664/TB1FG9FarsTMeJjy1zeXXcOCVXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 133,
              name: '东京就是日本',
              image: "https://img.alicdn.com/imgextra/i2/1049653664/TB19SlQcPqhSKJjSspnXXc79XXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 134,
              name: '优雅的辩论',
              image: "https://img.alicdn.com/imgextra/i1/2191160435/TB1sgSUsf9TBuNjy1zbXXXpepXa_!!0-item_pic.jpg_430x430q90.jpg"
            }

          ]
      },
    {
        cate_id: 2,
        cate_name: "外国小说",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '岛',
              image: "https://img.alicdn.com/imgextra/i3/13664025226115509/T11tcjXotXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 2,
              name: '龙纹身的女孩',
              image: "https://img.alicdn.com/imgextra/i1/2902594924/O1CN01gdf0Yi1mFEhnzlQxF_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 3,
              name: '寻圣光的人',
              image: "https://img.alicdn.com/imgextra/i4/1049653664/TB2BIGikb3nBKNjSZFMXXaUSFXa_!!1049653664.jpg_430x430q90.jpg"
            },
            {
              child_id: 4,
              name: '小小巴黎书店',
              image: "https://img.alicdn.com/imgextra/i4/1049653664/TB1J8fgarsTMeJjSszhXXcGCFXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 5,
              name: '知更鸟女孩',
              image: "https://img.alicdn.com/imgextra/i1/2535611270/O1CN01xaV4Gc1LFhTnks2jT_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 6,
              name: '解忧杂货铺',
              image: "https://img.alicdn.com/imgextra/i2/3305034492/O1CN011j3NbS18hYfh9xA_!!3305034492.jpg_430x430q90.jpg"
            },
            {
              child_id: 7,
              name: '嫌疑人X的献身',
              image: "https://img.alicdn.com/imgextra/i4/346537757/TB2pjSYqXXXXXXeXXXXXXXXXXXX_!!346537757.jpg_430x430q90.jpg"
            },
            {
              child_id: 8,
              name: '银河帝国7',
              image: "https://img.alicdn.com/imgextra/i1/2332591902/O1CN011Pv9mrtW1FALdt7_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 9,
              name: '普罗旺斯的一年',
              image: "https://img.alicdn.com/imgextra/i3/T1OjkzFa0dXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 10,
              name: '悲惨世界 上下',
              image: "https://img.alicdn.com/imgextra/i1/TB1CpsmOFXXXXbAXFXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 11,
              name: '我所创造的怪物',
              image: "https://img.alicdn.com/imgextra/i1/TB1fWPqOpXXXXcxapXXXXXXXXXX_!!2-item_pic.png_430x430q90.jpg"
            },
            {
              child_id: 12,
              name: '忒修斯之船',
              image: "https://img.alicdn.com/imgextra/i3/TB1M6iSRXXXXXc2aXXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 13,
              name: '死魂灵',
              image: "https://img.alicdn.com/imgextra/i1/2096830498/TB2Pxs8nKuSBuNjSsplXXbe8pXa_!!2096830498-0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 14,
              name: '纳尔齐斯与歌尔德蒙',
              image: "https://img.alicdn.com/imgextra/i4/665759828/TB1pVQyF4SYBuNjSsphXXbGvVXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 15,
              name: '爱情笔记',
              image: "https://img.alicdn.com/imgextra/i1/2322191136/TB1NO0OkxuTBuNkHFNRXXc9qpXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 16,
              name: '玻璃球游戏',
              image: "https://img.alicdn.com/imgextra/i1/2829158779/TB1nZ8Jdjgy_uJjSZR0XXaK5pXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 17,
              name: '卡尔维诺经典短篇小说集',
              image: "https://img.alicdn.com/imgextra/i2/766235626/TB2PR6OqRjTBKNjSZFDXXbVgVXa_!!766235626-0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 18,
              name: '卡夫卡作品精粹',
              image: "https://gd2.alicdn.com/imgextra/i1/0/O1CN01rzvsLL1ktQEChgRYz_!!0-item_pic.jpg_430x430.jpg_.webp"
            },
            {
              child_id: 19,
              name: '陀思妥耶夫斯基中短篇小说选',
              image: "https://gd3.alicdn.com/imgextra/i2/0/O1CN01Yy6Qdq1gbmVgNHT5h_!!0-item_pic.jpg_430x430.jpg_.webp"
            },
            {
              child_id: 20,
              name: 'FLIPPED',
              image: "https://img.alicdn.com/imgextra/i3/866276081/O1CN01qbQFOe1un8x04CYBK_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 21,
              name: '彷徨少年时',
              image: "https://img.alicdn.com/imgextra/i4/TB1tNOIQpXXXXcAXXXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 22,
              name: '智惠子抄',
              image: "https://img.alicdn.com/imgextra/i3/2322191136/TB1S0d1wb5YBuNjSspoXXbeNFXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 23,
              name: '霍乱时的爱情',
              image: "https://img.alicdn.com/imgextra/i4/2950270077/TB2iQtWuxdkpuFjy0FbXXaNnpXa_!!2950270077.jpg_430x430q90.jpg"
            },
            {
              child_id: 24,
              name: '挪威的森林',
              image: "https://img.alicdn.com/imgextra/i4/766235626/TB2NpxybFzqK1RjSZSgXXcpAVXa_!!766235626-0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 25,
              name: '牧羊少年的奇幻之旅',
              image: "https://img.alicdn.com/imgextra/i3/839616086/TB1OWSKgruWBuNjSszgXXb8jVXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 26,
              name: '罗生门',
              image: "https://img.alicdn.com/imgextra/i2/665759828/TB2G1EOsC8YBeNkSnb4XXaevFXa_!!665759828-0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 27,
              name: '另一个布鲁克林',
              image: "https://img.alicdn.com/imgextra/i4/2225029197/O1CN01keUt5e2HoH66k89qG_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 28,
              name: '简爱',
              image: "https://img.alicdn.com/imgextra/i3/2743191321/O1CN011Ld3fz9X4tHpGuu_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 29,
              name: '失乐园',
              image: "https://img.alicdn.com/imgextra/i4/1049653664/TB1CVyddznD8KJjSspbXXbbEXXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 30,
              name: '金色梦乡',
              image: "https://img.alicdn.com/imgextra/i1/TB1wFBIPFXXXXafXFXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 31,
              name: '步履不停',
              image: "https://img.alicdn.com/imgextra/i3/TB10Fw8QVXXXXbbaXXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 32,
              name: 'Lilac Girls',
              image: "https://gd4.alicdn.com/imgextra/i1/538210199/O1CN01sHkPTY1DLBIfXFHfY_!!538210199.jpg"
            }
            
          ]
      },
      {
        cate_id: 3,
        cate_name: "中国小说",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '超禁忌游戏4',
              image: "https://img.alicdn.com/imgextra/i3/671432529/TB2vkvPXrsTMeJjSszdXXcEupXa_!!671432529.jpg_430x430q90.jpg"
            },
            {
              child_id: 2,
              name: '超禁忌游戏大结局',
              image: "https://img.alicdn.com/imgextra/i3/671432529/TB2NjHoX6oIL1JjSZFyXXbFBpXa_!!671432529.jpg_430x430q90.jpg"
            },
            {
              child_id: 3,
              name: '超禁忌游戏1',
              image: "https://img.alicdn.com/imgextra/i4/671432529/TB2JniiXEF7MKJjSZFLXXcMBVXa_!!671432529.jpg_430x430q90.jpg"
            },
            {
              child_id: 4,
              name: '超禁忌游戏2',
              image: " https://img.alicdn.com/imgextra/i4/671432529/TB2t4PkX5AKL1JjSZFoXXagCFXa_!!671432529.jpg_430x430q90.jpg"
            },
            {
              child_id: 5,
              name: '404公寓',
              image: "https://img.alicdn.com/imgextra/i1/2609694927/TB1_EjMdaLN8KJjSZFvXXXW8VXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 6,
              name: '必须犯规的游戏',
              image: "https://img.alicdn.com/imgextra/i3/2169736216/TB13JlBbXYqK1RjSZLeXXbXppXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 7,
              name: '死者的警告',
              image: "https://img.alicdn.com/imgextra/i3/2169736216/TB13JlBbXYqK1RjSZLeXXbXppXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 8,
              name: '新房客和活死人',
              image: "https://img.alicdn.com/imgextra/i1/2605290859/TB26VM3czfguuRjSspaXXaXVXXa_!!2605290859-0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 9,
              name: '黄雀记',
              image: "https://img.alicdn.com/imgextra/i3/346537757/O1CN0127AkkGVWuLDNfQj_!!346537757.jpg_430x430q90.jpg"
            },
            {
              child_id: 10,
              name: '米',
              image: "https://gd2.alicdn.com/imgextra/i4/0/O1CN01fVaUVd21VSyp092ku_!!0-item_pic.jpg_430x430.jpg"
            },
            {
              child_id: 11,
              name: '从你的全世界路过',
              image: "https://img.alicdn.com/imgextra/i3/TB1FNXeLXXXXXcyXFXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 12,
              name: '你若安好便是晴天',
              image: "https://img.alicdn.com/imgextra/i3/2406931838/TB2B.bPb6ZnyKJjSZFxXXabIpXa_!!2406931838.jpg_430x430q90.jpg"
            },
            {
              child_id: 13,
              name: '超禁忌游戏3',
              image: "https://img.alicdn.com/imgextra/i4/2436523931/O1CN01IgKM8j1euRPS05znZ_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 14,
              name: '黄金时代',
              image: "https://img.alicdn.com/imgextra/i4/TB1gQKqLXXXXXbtXpXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 15,
              name: '第九个寡妇',
              image: "https://img.alicdn.com/imgextra/i2/859515618/TB1uAdfu5MnBKNjSZFzXXc_qVXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 16,
              name: '赡养人类',
              image: "https://img.alicdn.com/imgextra/i1/665759828/TB1ShmJewjN8KJjSZFgXXbjbVXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 17,
              name: '青衣',
              image: "https://img.alicdn.com/imgextra/i3/2280890934/TB12EfjqH1YBuNjSszhXXcUsFXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 18,
              name: '亮剑',
              image: "https://img.alicdn.com/imgextra/i4/2670520056/O1CN01q3RDBq1CHgeZaUFSg_!!0-item_pic.jpg_430x430q90.jpg"
            }
           
          ]
      },
      {
        cate_id: 4,
        cate_name: "文学",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '百年孤独',
              image: "https://img.alicdn.com/imgextra/i1/2609694927/O1CN011mGbsu2ip4p0O7t_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 2,
              name: '瓦尔登湖',
              image: "https://img.alicdn.com/imgextra/i4/2730351819/TB2BnknrlnTBKNjSZPfXXbf1XXa_!!2730351819.jpg_430x430q90.jpg"
            },
            {
              child_id: 3,
              name: '1984',
              image: "https://img.alicdn.com/imgextra/i4/2105302446/TB2YAxLn63z9KJjy0FmXXXiwXXa_!!2105302446.jpg_430x430q90.jpg"
            },
            {
              child_id: 4,
              name: '因为懂得所以慈悲',
              image: "https://img.alicdn.com/imgextra/i1/1777710608/O1CN011GMVHFHqGHt1Xk9_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 5,
              name: '愿此生岁月静好',
              image: "https://img.alicdn.com/imgextra/i1/859515618/TB1ayWNXiMnBKNjSZFzXXc_qVXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 6,
              name: '望春风',
              image: "https://img.alicdn.com/imgextra/i4/TB1o558PXXXXXX3XpXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 7,
              name: '知道分子',
              image: "https://img.alicdn.com/imgextra/i3/2322191136/TB1XCIssSBYBeNjy0FeXXbnmFXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 8,
              name: '西厢记',
              image: "https://gd1.alicdn.com/imgextra/i1/1/O1CN01VgUsxL1YeyLCRTUx8_!!1-item_pic.gif_430x430.jpg"
            },
            {
              child_id: 9,
              name: '长生殿',
              image: "https://gd4.alicdn.com/imgextra/i4/0/O1CN011Lo3AqYkMnWmV2x_!!0-item_pic.jpg_430x430.jpg"
            },
            {
              child_id: 10,
              name: '长生殿',
              image: "https://gd3.alicdn.com/imgextra/i4/0/TB1.L4Odr5YBuNjSspoXXbeNFXa_!!0-item_pic.jpg_430x430.jpg"
            },
            {
              child_id: 11,
              name: '十日谈',
              image: "https://img.alicdn.com/imgextra/i3/665759828/O1CN012MTGzLLdDAeBXlQ-665759828.jpg_430x430q90.jpg"
            },
            {
              child_id: 12,
              name: '爱你就像爱生命',
              image: "https://img.alicdn.com/imgextra/i1/TB17Bd9RFXXXXcSXFXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 13,
              name: '基督山伯爵',
              image: "https://img.alicdn.com/imgextra/i2/TB1LjlzSpXXXXa2XVXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 14,
              name: '山居笔记',
              image: "https://img.alicdn.com/imgextra/i4/2322191136/TB1BKdjXjgy_uJjSZPxXXanNpXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 15,
              name: '你是我不及的梦',
              image: "https://img.alicdn.com/imgextra/i2/2609694927/TB2E4lreFXXXXcDXXXXXXXXXXXX_!!2609694927.jpg_430x430q90.jpg"
            },
            {
              child_id: 16,
              name: '唐宋词十七讲',
              image: "https://img.alicdn.com/imgextra/i4/TB1vSOtLXXXXXcNXVXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 17,
              name: '致岁月迢迢',
              image: "https://img.alicdn.com/imgextra/i2/TB1_Z83QFXXXXbGXFXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 18,
              name: '莫言作品精选',
              image: "https://img.alicdn.com/imgextra/i3/1607450394/TB2R_2NvTqWBKNjSZFxXXcpLpXa_!!1607450394-0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 19,
              name: '目送',
              image: "https://img.alicdn.com/imgextra/i4/839616086/TB1Vz4VeruWBuNjSszgXXb8jVXa_!!0-item_pic.jpg_60x60q90.jpg"
            },
            {
              child_id: 20,
              name: '行者无疆',
              image: "https://img.alicdn.com/imgextra/i3/2225029197/O1CN01XAdJEF2HoH69leNpb_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 21,
              name: '来不及好好告别',
              image: "https://gd3.alicdn.com/imgextra/i2/0/O1CN019vVfxS1x6xJsyIvEs_!!0-item_pic.jpg_430x430.jpg_.webp"
            },
            {
              child_id: 22,
              name: '温柔的夜',
              image: "https://img.alicdn.com/imgextra/i2/826551804/TB1qKXQoYsrBKNjSZFpXXcXhFXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 23,
              name: '设计诗',
              image: "https://img.alicdn.com/imgextra/i3/18747024567669028/T1eLUhXkdXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 24,
              name: '我的阿勒泰',
              image: "https://img.alicdn.com/imgextra/i2/TB18oxDKVXXXXcwXpXXXXXXXXXX_!!0-item_pic.jpg_60x60q90.jpg"
            },
            {
              child_id: 25,
              name: '人类群星闪耀时',
              image: "https://img.alicdn.com/imgextra/i4/2561076943/O1CN010lgyNu219wMQYJkEs_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 26,
              name: '时间的女儿',
              image: "https://img.alicdn.com/imgextra/i4/764751502/TB1ahZ0eRyWBuNkSmFPXXXguVXa_!!0-item_pic.jpg_430x430q90.jpg"
            },
            {
              child_id: 27,
              name: 'What The Dog Saw',
              image: "http://shopimg.kongfz.com.cn/20111030/79172/18429YQNbQL_b.jpg"
            }
          ]
      },
      {
        cate_id: 5,
        cate_name: "艺术",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: '破解梵高之美',
            image: "https://img.alicdn.com/imgextra/i4/1049653664/TB1RuJzndzJ8KJjSspkXXbF7VXa_!!0-item_pic.jpg_430x430q90.jpg"
          },
          {
            child_id: 2,
            name: '破解达芬奇之美',
            image: "https://img.alicdn.com/imgextra/i3/3713444131/O1CN011gO2cSjKvXfpxOq_!!0-item_pic.jpg_430x430q90.jpg"
          },
          {
            child_id: 3,
            name: '破解莫奈之美',
            image: "https://img.alicdn.com/imgextra/i4/2591108390/TB1AB8LzhGYBuNjy0FnXXX5lpXa_!!0-item_pic.jpg_430x430q90.jpg"
          },
          {
            child_id: 4,
            name: '破解德加之美',
            image: "https://img.alicdn.com/imgextra/i4/2369322973/TB1bpgQcQfb_uJkSne1XXbE4XXa_!!0-item_pic.jpg_430x430q90.jpg"
          },
          {
            child_id: 5,
            name: '破解米开朗基罗',
            image: "https://img.alicdn.com/imgextra/i2/TB1TCM3LpXXXXXOaXXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
          },
          {
            child_id: 6,
            name: '破解高更之美',
            image: "https://img.alicdn.com/imgextra/i1/2139804459/O1CN011ioGWWkZfwNonsA_!!0-item_pic.jpg_430x430q90.jpg"
          },
          {
            child_id: 7,
            name: '写给大家的西方美术史',
            image: "https://img.alicdn.com/imgextra/i3/TB1WL_sMpXXXXc9XFXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
          },
          {
            child_id: 8,
            name: '中国艺术史',
            image: "https://img.alicdn.com/imgextra/i3/454269114/O1CN01IFfBSk2HCGDyapId6_!!0-item_pic.jpg_430x430q90.jpg"
          },
          {
            child_id: 9,
            name: '美学散步',
            image: "https://img.alicdn.com/imgextra/i1/720096711/TB21bLepXXXXXcBXpXXXXXXXXXX_!!720096711.jpg_430x430q90.jpg"
          },
          {
            child_id: 10,
            name: '艺术修养',
            image: "https://img.alicdn.com/imgextra/i4/TB1xjpCNpXXXXaEXXXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
          },
          {
            child_id: 11,
            name: '设计心理学3',
            image: "https://img.alicdn.com/imgextra/i3/TB181XnIpXXXXbMXpXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
          }
        ]
      },
      {
        cate_id: 6,
        cate_name: "经管",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: '第一财经周刊',
            image: "https://img.alicdn.com/imgextra/i3/1638268570/O1CN013Z7hXg2DB6l1lkpfs_!!0-item_pic.jpg_430x430q90.jpg"
          }
        ]
      },
      {
        cate_id: 7,
        cate_name: "历史",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: '全球通史',
            image: "https://img.alicdn.com/imgextra/i1/712110029/TB2iNzDqr5YBuNjSspoXXbeNFXa_!!712110029-0-item_pic.jpg_430x430q90.jpg"
          },
          {
            child_id: 2,
            name: '故事',
            image: "https://img.alicdn.com/imgextra/i2/TB1lvbULVXXXXc5XXXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
          },
          {
            child_id: 3,
            name: '人类简史',
            image: "https://img.alicdn.com/imgextra/i1/2917286701/TB1SipGzkCWBuNjy0FaXXXUlXXa_!!0-item_pic.jpg_430x430q90.jpg"
          },
          {
            child_id: 4,
            name: '鱼羊野史1',
            image: "https://img.alicdn.com/imgextra/i4/TB1eKSBLXXXXXbDXFXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
          },
          {
            child_id: 5,
            name: '鱼羊野史2',
            image: "https://img.alicdn.com/imgextra/i4/2455124912/TB2jghjuXooBKNjSZPhXXc2CXXa_!!2455124912-0-item_pic.jpg_430x430q90.jpg"
          },
          {
            child_id: 6,
            name: '鱼羊野史3',
            image: "https://img.alicdn.com/imgextra/i4/1961939153/TB1niD3gL9TBuNjy0FcXXbeiFXa_!!0-item_pic.jpg_430x430q90.jpg"
          },
          {
            child_id: 7,
            name: '鱼羊野史4',
            image: "https://img.alicdn.com/imgextra/i1/859515618/TB1qRzXXuuSBuNjSsplXXbe8pXa_!!0-item_pic.jpg_430x430q90.jpg"
          },
          {
            child_id: 8,
            name: '鱼羊野史5',
            image: "https://img.alicdn.com/imgextra/i3/2072556143/O1CN01AXw26W1vFXVZnc2c2_!!0-item_pic.jpg_430x430q90.jpg"
          },
          {
            child_id: 9,
            name: '鱼羊野史6',
            image: "https://img.alicdn.com/imgextra/i2/TB1fgC_KXXXXXXZXFXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
          },
          {
            child_id: 10,
            name: '五代十国原来是这样的',
            image: "https://img.alicdn.com/imgextra/i3/1049653664/TB1AXMHc3oQMeJjy0FpXXcTxpXa_!!0-item_pic.jpg_430x430q90.jpg"
          },
          {
            child_id: 11,
            name: '晚清原来是这样的',
            image: "https://img.alicdn.com/imgextra/i1/1109873147/TB16sRVaH9YBuNjy0FgXXcxcXXa_!!0-item_pic.jpg_430x430q90.jpg"
          },
          {
            child_id: 12,
            name: '魏晋南北朝原来是这样的',
            image: "https://img.alicdn.com/imgextra/i2/2139557436/TB1zuSsbh9YBuNjy0FfXXXIsVXa_!!0-item_pic.jpg_430x430q90.jpg"
          },
          {
            child_id: 13,
            name: '日本史',
            image: "https://img.alicdn.com/imgextra/i1/TB1ySmALXXXXXb8XVXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
          },
          {
            child_id: 14,
            name: '历史的温度',
            image: "https://img.alicdn.com/imgextra/i1/2456285297/TB1yJYvXhHBK1JjSZFyXXcmcFXa_!!0-item_pic.jpg_430x430q90.jpg"
          },
          {
            child_id: 15,
            name: '十字军史',
            image: "https://img3.doubanio.com/view/subject/l/public/s29388925.jpg"
          },
          {
            child_id: 16,
            name: '常识',
            image: "https://img1.doubanio.com/view/subject/l/public/s27277537.jpg"
          },
          {
            child_id: 17,
            name: '西方战地记者',
            image: "https://img3.doubanio.com/view/subject/l/public/s29145790.jpg"
          },
          {
            child_id: 18,
            name: '西洋史',
            image: "https://gd2.alicdn.com/imgextra/i3/0/TB1FeJcgTqWBKNjSZFAXXanSpXa_!!0-item_pic.jpg"
          },
          {
            child_id: 19,
            name: '一个中国记者看二战',
            image: "https://img14.360buyimg.com/n0/jfs/t21076/13/1774384897/123072/cf05186d/5b33fe21N060587a1.jpg"
          },
          {
            child_id: 14,
            name: '中国史纲',
            image: "https://img.alicdn.com/imgextra/i2/TB1cuSyOXXXXXb3apXXXXXXXXXX_!!2-item_pic.png_430x430q90.jpg"
          }
        ]
      },
      {
        cate_id: 8,
        cate_name: "人生哲理",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: '中国哲学简史',
            image: "https://img.alicdn.com/imgextra/i4/TB1Hm3aNpXXXXaIXFXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
          },
          {
            child_id: 2,
            name: '往事与随想',
            image: "https://gd2.alicdn.com/imgextra/i1/0/O1CN01AqNgi12AYW9u8WaCQ_!!0-item_pic.jpg_400x400.jpg"
          },
          {
            child_id: 3,
            name: '当呼吸化为空气',
            image: "https://img.alicdn.com/imgextra/i1/859515618/TB2uqviokUmBKNjSZFOXXab2XXa_!!859515618.jpg_430x430q90.jpg"
          },
          {
            child_id: 4,
            name: '白说',
            image: "https://img.alicdn.com/imgextra/i3/839616086/O1CN011upQvPwPjwpuCAv_!!839616086.jpg_430x430q90.jpg"
          },
          {
            child_id: 5,
            name: '离经叛道',
            image: "https://img.alicdn.com/imgextra/i3/2225029197/O1CN01nOT0Yu2HoH6AHPyVX_!!0-item_pic.jpg_430x430q90.jpg"
          },
          {
            child_id: 6,
            name: '一本正经又怪诞的行为心理学',
            image: "https://img.alicdn.com/imgextra/i3/2322191136/TB1qa99sNSYBuNjSsphXXbGvVXa_!!0-item_pic.jpg_430x430q90.jpg"
          },
          {
            child_id: 7,
            name: 'The Glass Castle',
            image: "https://img.alicdn.com/imgextra/i3/2322191136/TB1qa99sNSYBuNjSsphXXbGvVXa_!!0-item_pic.jpg_430x430q90.jpg"
          }
        ]
      },
      {
        cate_id: 9,
        cate_name: "其他",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: '天才在左疯子在右',
            image: "https://img.alicdn.com/imgextra/i1/2609694927/O1CN011mGbsnKayOApHF9_!!2609694927.jpg_430x430q90.jpg"
          },
          {
            child_id: 2,
            name: '习近平的七年知青岁月',
            image: "https://img.alicdn.com/imgextra/i2/741412252/TB1vVtLXhHBK1JjSZFqXXc0LXXa_!!0-item_pic.jpg_430x430q90.jpg"
          },
          {
            child_id: 3,
            name: '乡土中国',
            image: "https://img.alicdn.com/imgextra/i2/2322191136/TB13WG7btrJ8KJjSspaXXXuKpXa_!!0-item_pic.jpg_430x430q90.jpg"
          },
          {
            child_id: 4,
            name: '枪炮病菌与钢铁',
            image: "https://img.alicdn.com/imgextra/i3/TB1_hovNVXXXXbiXpXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
          },
          {
            child_id: 5,
            name: '甬城草木记',
            image: "https://img.alicdn.com/imgextra/i3/3376080142/TB1iu3yocnI8KJjSspeXXcwIpXa_!!0-item_pic.jpg_430x430q90.jpg"
          },
          {
            child_id: 6,
            name: '魔鬼辞典',
            image: "https://gd4.alicdn.com/imgextra/i2/0/TB1zhHmIFXXXXadXFXXXXXXXXXX_!!0-item_pic.jpg_400x400.jpg"
          },
          {
            child_id: 7,
            name: '国富论',
            image: "https://img.alicdn.com/imgextra/i4/2233958286/TB1.85YoHSYBuNjSspiXXXNzpXa_!!0-item_pic.jpg_430x430q90.jpg"
          },
          {
            child_id: 8,
            name: '我在底层的生活',
            image: "https://img.alicdn.com/imgextra/i1/TB1l7BiFVXXXXXHXXXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
          },
          {
            child_id: 9,
            name: '给青年建筑师的信',
            image: "https://img.alicdn.com/imgextra/i3/2322191136/TB1iskTsh9YBuNjy0FfXXXIsVXa_!!0-item_pic.jpg_430x430q90.jpg"
          },
          {
            child_id: 10,
            name: '蓝色小药丸',
            image: "https://img.alicdn.com/imgextra/i3/927356304/TB2Bee7cWagSKJjy0FbXXa.mVXa_!!927356304.jpg_430x430q90.jpg"
          },
          {
            child_id: 11,
            name: '这本书能让你睡得好',
            image: "https://img.alicdn.com/imgextra/i1/2659708080/TB1k8nVSFXXXXXLXVXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
          },
          {
            child_id: 12,
            name: '三行情书',
            image: "https://gd1.alicdn.com/imgextra/i4/0/TB18GCPipGWBuNjy0FbXXb4sXXa_!!0-item_pic.jpg_430x430.jpg_.webp"
          },
          {
            child_id: 13,
            name: '德尔斐的囚徒',
            image: "https://img.alicdn.com/imgextra/i4/2191160435/TB19uZQvwaTBuNjSszfXXXgfpXa_!!0-item_pic.jpg_430x430q90.jpg"
          },
          {
            child_id: 14,
            name: 'Word Power Made Easy',
            image: "https://img.alicdn.com/imgextra/i3/1899623276/TB1mFTmXTzGK1JjSspkXXXNUpXa_!!0-item_pic.jpg_430x430q90.jpg"
          },
          {
            child_id: 15,
            name: '食物信息图',
            image: "https://img.alicdn.com/imgextra/i1/2902594924/O1CN01RMkbLk1mFEhohMLMo_!!0-item_pic.jpg_430x430q90.jpg"
          },
          {
            child_id: 16,
            name: '日本制造力',
            image: "https://img.alicdn.com/imgextra/i3/1049653664/TB1FG9FarsTMeJjy1zeXXcOCVXa_!!0-item_pic.jpg_430x430q90.jpg"
          },
          {
            child_id: 17,
            name: '东京就是日本',
            image: "https://img.alicdn.com/imgextra/i2/1049653664/TB19SlQcPqhSKJjSspnXXc79XXa_!!0-item_pic.jpg_430x430q90.jpg"
          },
          {
            child_id: 18,
            name: '优雅的辩论',
            image: "https://img.alicdn.com/imgextra/i1/2191160435/TB1sgSUsf9TBuNjy1zbXXXpepXa_!!0-item_pic.jpg_430x430q90.jpg"
          }
        ]
      }
    ],
    curNav: 1,
    curIndex: 0
  },

  //事件处理函数  
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
    })
  }
})