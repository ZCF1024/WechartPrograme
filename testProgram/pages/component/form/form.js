// pages/component/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    genders: [{gender: "男",checked: true}, {gender: "女"}],
    phones: [{value: "华为", checked: true},
      {value: "魅族"},
      {value: "中兴"},
      {value: "小米"},
      {value: "三星"},
      {value: "IPhone"}]
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
  submit: function(event) {
    console.log(event);
  },
  reset: function() {
    console.log("重置数据");
  }
})