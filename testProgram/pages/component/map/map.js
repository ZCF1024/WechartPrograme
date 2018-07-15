Page({
  data: {
    scale: 16,
    scale0: 16,
    circles: [{
      longitude: 114.92, //必填，经度(180.0000~180.0000)
      latitude: 25.85, //必填，纬度(-90.0000~90.0000)
      color: "#7fffd4DD", //描边颜色
      fillColor: "#b07fff55", //填充颜色，前六位表示颜色， 后两位表示透明度(值越大，透明度越低)
      radius: 1000,  //必填，半径
      strokeWidth: 1}, //描边宽度
    {
      longitude: 114.80, 
      latitude: 25.85,
      color: "#7fffd423",  //color 和 strokeWidth必须指定其中一个，否则不显示
      // strokeWidth: 1,
      fillColor: "#f11010FF",      
      radius: 1000}],
    controls: [{
      id: 1,
      iconPath: "https://github.com/ZCF1024/WechartPhoto/blob/master/bigger.png",
      clickable: true,
      position: {left: 240, top: 120, height: 30, width: 30}
    }, {
      id: 2,
      iconPath: "https://github.com/ZCF1024/WechartPhoto/blob/master/smaller.png",
      clickable: true,
      position: { left: 280, top: 120, height: 30, width: 30 }
    }]  
  },

  onReady: function () {
  
  },
  changeBigger: function() {
    var tmp=this.data.scale;
    tmp = (tmp + 1) % 19 == 0 ? 1 : (tmp + 1) % 19;
    this.setData({
      scale: tmp
    });
  },
  changeSmaller: function () {
    var tmp = this.data.scale;
    tmp = (tmp + 18) % 19 == 0 ? 1 : (tmp + 18) % 19;
    this.setData({
      scale: tmp
    });
  },
  clickController: function(event) {
    console.log(event);
    var tmp = this.data.scale0;    
    if (event.controlId == 1)
      tmp = (tmp + 1) % 19 == 0 ? 1 : (tmp + 1) % 19;
    else
      tmp = (tmp + 18) % 19 == 0 ? 1 : (tmp + 18) % 19;
      this.setData({scale0: tmp});
  },
  nextPage: function() {
    wx.navigateTo({
      url: 'map0',
    })
  }
})