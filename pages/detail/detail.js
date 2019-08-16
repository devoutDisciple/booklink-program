// pages/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgalist: ['https://www.booklink.online/erweima.jpg'],
    erweima: "https://www.booklink.online/erweima.jpg",
    detailData: {
      // "id": 54, "name": "龙纹身的女孩", "url": "https://img.alicdn.com/imgextra/i3/T1OjkzFa0dXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg", "desc": "龙纹身的女孩，龙纹身的女孩，龙纹身的女孩，龙纹身的女孩，龙纹身的女孩，龙纹身的女孩，龙纹身的女孩，龙纹身的女孩，龙纹身的女孩，", "type": 1, "borrow": 0, "is_delete": 0, "child_id": 54, "image": "https://img.alicdn.com/imgextra/i3/T1OjkzFa0dXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg" 
    },
    dialogVisible: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var pages = getCurrentPages();
    var prevPage = pages[pages.length - 2];  //上一个页面
    let detailData = prevPage.data.detailData;
    this.setData({
      detailData: detailData
    })
  },
  viewImage: function(e) {
    wx.previewImage({
      current: this.data.imgalist, // 当前显示图片的http链接   
      urls: this.data.imgalist // 需要预览的图片http链接列表   
    })
    wx.getImageInfo({// 获取图片信息（此处可不要）
      src: 'https://www.cslpyx.com/weiH5/jrkj.jpg',
      success: function (res) {
        console.log(res.width)
        console.log(res.height)
      }
    })
  },
  showDialog: function() {
    this.setData({
      dialogVisible: true
    })
  },
  closeDialog: function () {
    this.setData({
      dialogVisible: false
    })
  },
})