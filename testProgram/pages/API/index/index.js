Page({

  data: {
  
  },

  onReady: function () {
  
  },
  networkPage: function() {
    wx.navigateTo({
      url: '../network/index/index',
    })
  },
  mediaPage: function () {
    wx.navigateTo({
      url: '../media/index/index',
    })
  }
})