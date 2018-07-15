Page({

  /**
   * 页面的初始数据
   */

  data: {
    ifshow: "条件标签测试",
    show: true,
    number: 10,
    news: ['zcf', 'is', 'a', 'boy']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 自定义按钮事件，点击按钮后，向控制台输出内容，并修改 text 变量的值
   */
  btnClick: function () {
    var ispoint = this.data.show
    console.log("按钮被点击了" + ispoint)
    this.setData({ text: "按钮被点击了", show: !ispoint })

    // 动态删除news数组的值
    var tmpnews = this.data.news
    tmpnews.shift()
    this.setData({ news: tmpnews })
  },
})