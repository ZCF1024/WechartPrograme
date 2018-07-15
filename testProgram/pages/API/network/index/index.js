// pages/API/network/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
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

  requestPage: function () {
    wx.navigateTo({
      url: '../request/request',
    })
  },
  kugouDemoPage: function () {
    wx.navigateTo({
      url: '../kugouDemo/index/index',
    })
  }
})