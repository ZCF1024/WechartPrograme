Page({
  data: {
    choosenImages: [] 
  },
  chooseImages: function(){
    var that = this
    wx.chooseImage({
      count: 9,  //Number，最多可以选择的图片张数，默认9
      sizeType: ["original", "compressed"],  //StringArray: original 原图，compressed 压缩图，默认二者都有
      sourceType: ["album", "camera"],  //album 从相册选图，camera 使用相机，默认二者都有
      success: function(res) {
        console.log(res)
        that.setData({
          choosenImages: res.tempFilePaths
        })
      },
      fail: function(res){
      },
      complete: function (res){
      }
    })
  }
  
})