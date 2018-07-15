// pages/component/button/button.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: false,
    plain: false,
    loading: false,
    typeArray: ["default","primary","warn"],
    types: "default",
    typeIndex: 0
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
  changeType: function(){
    var tmpIndex=this.data.typeIndex;
    tmpIndex=(tmpIndex+1)%3;
    this.setData({ types: this.data.typeArray[tmpIndex],typeIndex: tmpIndex});
    // console.log(tmpIndex);
  },
  changeLoading: function(){
    var tmp=this.data.loading;
    this.setData({loading: !tmp});
  },
  changePlain: function(){
    var tmp = this.data.plain;
    this.setData({plain: !tmp });
  },
  onGotUserInfo: function (e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)
  }
})