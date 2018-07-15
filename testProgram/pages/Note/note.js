// 类似javascript文件
Page({

  // 页面的初始数据
  data: {
    text: "冒泡事件"
  },

  // 生命周期函数--监听页面加载
  onLoad: function (options) {
    console.log("----node page onLoad----");
  },

  // 生命周期函数--监听页面初次渲染完成
  onReady: function () {
    console.log("----node page onReady----");
  },

  // 生命周期函数--监听页面显示，当页面在前台显示时调用，加载一些资源
  onShow: function () {
    console.log("----node page onShow----");
  },

  // 生命周期函数--监听页面隐藏，当微信在后台运行时调用，通常会释放一些资源
  onHide: function () {
    console.log("----node page onHide----");
  },

  // 生命周期函数--监听页面卸载
  onUnload: function () {
    console.log("----node page onUnload----");
  },

  // 页面相关事件处理函数--监听用户下拉动作
  onPullDownRefresh: function () {
    console.log("----node page onPullDownRefresh----");
  },

  // 页面上拉触底事件的处理函数
  onReachBottom: function () {
    console.log("----node page onReachBottom----");
  },

  // 用户点击右上角分享
  onShareAppMessage: function () {
    console.log("----node page onShareAppMessage----");
  }
})