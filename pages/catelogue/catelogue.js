// pages/catelogue/catelogue.js
Page({
  data: {
    cateItems: [
    ],
    curNav: 0,
    curIndex: 0,
  },

  //事件处理函数  
  switchRightTab: function (e) {
    console.log(e)
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let self = this;
    wx.request({
      // url: 'https://www.booklink.ltd/book/list/all',
      url: 'http://localhost/book/list/all',
      success(res) {
        if(res.data && res.data.data) {
          let data = res.data.data;
          let result = [];
          let type = ["外国小说", "中国小说", "文学", "艺术", "经管", "历史", "人生哲理", "其他"]
          type.map((type, index) => {
            let obj = {
              cate_id: index,
              cate_name: type,
              ishaveChild: false,
              children: []
            }
            data.map(item => {
              Object.assign(item, {
                child_id: item.id,
                name: item.name,
                image: item.url
              })
              if(index == 0) {
                obj.ishaveChild = true;
                return obj.children.push(item);
              } 
              if(item.type == index) {
                obj.ishaveChild = true;
                obj.children.push(item);
              }
            })
            result.push(obj);
          })
          self.setData({
            cateItems: result
          })
        }
      }
    })
  },

  showDetail: function(e) {
    console.log(e.currentTarget);
    this.setData({
      detailData: e.currentTarget.dataset.detail
    })
  }
})