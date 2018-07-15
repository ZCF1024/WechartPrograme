Page({

  // 页面的初始数据
  data: {
    text : "这里是内容",
    btnText: "这里是按钮内容",
    pointnum: 0,
    news: ['zcf','is','a','boy']
  },

  // 生命周期函数--监听页面加载
  onLoad: function (options) {
    // console.log("----first page onLoad----");
  },

  // 生命周期函数--监听页面初次渲染完成
  onReady: function () {
    // console.log("----first page onReady----");
  },

  // 生命周期函数--监听页面显示，当页面在前台显示时调用，加载一些资源
  onShow: function () {
    // console.log("----first page onShow----");
  },

  // 生命周期函数--监听页面隐藏，当微信在后台运行时调用，通常会释放一些资源
  onHide: function () {
    // console.log("----first page onHide----");
  },

  // 生命周期函数--监听页面卸载
  onUnload: function () {
    // console.log("----first page onUnload----");
  },

  btnClick: function() {
    var tmp = this.data.pointnum;
    this.setData({text: "按钮被点击了", pointnum: tmp+1});
  },

  // 页面相关事件处理函数--监听用户下拉动作
  onPullDownRefresh: function () {
    // console.log("----first page onPullDownRefresh----");
  },

  // 页面上拉触底事件的处理函数
  onReachBottom: function () {
    // console.log("----first page onReachBottom----");
  },

  // 用户点击右上角分享
  onShareAppMessage: function () {
    // console.log("----first page onShareAppMessage----");
  },

  toWxPage: function() {
    wx.navigateTo({
      url: '../wx/wx',
    })
  },

  toMapPage: function () {
    wx.navigateTo({
      url: '../map/map?id=1&name=firstpage',
      // 将要传递到其他页面的参数加在 路劲 后面， 然后在对应页面的 onLoad函数中取数据
    })
  },

  toEventPage: function () {
    wx.navigateTo({
      url: '../event/event',
      //无法跳转到tabbar中的页面
    })
  },
  toDataBindPage: function() {
    wx.navigateTo({
      url: '../dataBind/dataBind',
    })
  },
  loginInstancePage: function(){
    wx.navigateTo({
      url: '../login_instance/index/index',
    })
  },
  layoutPage: function () {
    wx.navigateTo({
      url: '../layout/layout',
    })
  },
  componentPage: function () {
    wx.navigateTo({
      url: '../component/index/index',
    })
  },
  APIPage: function () {
    wx.navigateTo({
      url: '../API/index/index',
    })
  },
})