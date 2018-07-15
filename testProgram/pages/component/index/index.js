// pages/component/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  buttonPage: function() {
    wx.navigateTo({
      url: '../button/button',
    })
  },
  checkBoxPage: function () {
    wx.navigateTo({
      url: '../checkBox/checkBox',
    })
  },
  swiperPage: function () {
    wx.navigateTo({
      url: '../swiper/swiper',
    })
  },
  scrollViewPage: function () {
    wx.navigateTo({
      url: '../scroll-view/scroll-view',
    })
  },
  iconPage: function () {
    wx.navigateTo({
      url: '../icon/icon',
    })
  },
  textPage: function () {
    wx.navigateTo({
      url: '../text/text',
    })
  },
  progressPage: function () {
    wx.navigateTo({
      url: '../progress/progress',
    })
  },
  inputPage: function () {
    wx.navigateTo({
      url: '../input/input',
    })
  },
  radioPage: function () {
    wx.navigateTo({
      url: '../radio/radio',
    })
  },
  sliderPage: function () {
    wx.navigateTo({
      url: '../slider/slider',
    })
  },
  pickerPage: function () {
    wx.navigateTo({
      url: '../picker/picker',
    })
  },
  formPage: function () {
    wx.navigateTo({
      url: '../form/form',
    })
  },
  feedbackPage: function() {
    wx.navigateTo({
      url: '../feedback/feedback',
    })
  },
  navigatorPage: function() {
    wx.navigateTo({
      url: '../navigator/navigator',
    })
  },
  audioPage: function () {
    wx.navigateTo({
      url: '../audio/audio',
    })
  },
  imagePage: function () {
    wx.navigateTo({
      url: '../image/image',
    })
  },
  videoPage: function () {
    wx.navigateTo({
      url: '../video/video',
    })
  },
  cameraPage: function () {
    wx.navigateTo({
      url: '../camera/camera',
    })
  },
  mapPage: function () {
    wx.navigateTo({
      url: '../map/map',
    })
  },
  canvasPage: function () {
    wx.navigateTo({
      url: '../canvas/canvas',
    })
  }
})