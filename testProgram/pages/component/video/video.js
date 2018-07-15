function getRandomColor() {//全局函数
  let rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)//随机生成一个[0,256)的十六进制数
    color = color.length == 1 ? '0' + color : color //如果生成的是一位十六进制数，则加上一个0使其变成两位
    rgb.push(color) //在数组末尾添加一个元素
  }
  return '#' + rgb.join('')//join(separator)返回一个将 数组的所有元素以separator做分隔符相连接的字符串
}
// Math.random()  会产生一个[0, 1)的数
// Math.floor(Math.random() * 256)  会对由上面的语句产生的数值进行向下取整
// toString(16)  将得到的数转换成16进制数的字符串
Page({

  inputDanmu: "",  //全局变量

  data: {
    src: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
    localsrc: "",
    duration: 330,
    initialTime: 0,
    speeds: [0.5, 0.8, 1.0, 1.25, 1.5],  //支持的倍率
    speedIndex: 2,
    danmuList: [
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
      }]
  },
  onReady: function() {
    this.videoContext = wx.createVideoContext("myVideo");
  },
  setInitialTime: function() {
    if (this.initialTime + 20 < this.duration)
      this.setData({
        initialTime: this.initialTime + 20
      });
  },
  setDurationTime: function() {
    if (this.duration - 20 > this.initialTime)
      this.setData({
        duration: this.duration - 20
      });
  },
  testLet: function() {
    let testLet = "let";//let是块级变量
    var testVar="var";
    {
      let testLet = "let change";
      var testVar = "var change";
    }
    console.log(testLet);
    console.log(testVar);
  },
  bindInput: function(event) {//获取用户输入的弹幕
    this.inputDanmu=event.detail.value;
  },
  bindSendDanmu: function() {
    this.videoContext.sendDanmu({
      text: this.inputDanmu,
      color: getRandomColor()
    });
  },
  getLocalVideo: function(){
    var that = this
    wx.chooseVideo({  //此函数详情见APIhttps://developers.weixin.qq.com/miniprogram/dev/api/media-video.html#wxchoosevideoobject
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front', 'back'],
      success: function (res) {
        that.setData({
          localsrc: res.tempFilePath
        })
      }
    })
  },
  setPlaybackRate: function() {
    this.setData({ speedIndex: (this.data.speedIndex + 1)%5 });
    this.videoContext.playbackRate(this.data.speeds[this.data.speedIndex])    
  }
})