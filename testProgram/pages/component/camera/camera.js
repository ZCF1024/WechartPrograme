Page({
  data: {
    mode: "normal",
    position: "back",
    src: "",
    show: "",
    video: "",
    flash: [{
      value: "auto",
      name: "自动"
    }, {
      value: "on",
      name: "开启"
    }, {
      value: "off",
      name: "关闭"
    }],
    flashIndex: 0
  },
  onReady: function() {
    this.cameraContext = wx.createCameraContext("myCamera");
  },
  takePhoto: function() {
    this.cameraContext.takePhoto({//调用拍照API接口
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
      }
      //success： 接口调用成功的回调函数
      //fail: 接口调用失败的回调函数
      //complete: 接口调用结束的回调函数
    })
  },
  changeToScanCode: function() {
    this.setData({
      mode: "scanCode"
    });
  },
  changePosition: function() {
    this.setData({
      position: this.data.position == "front" ? "back" : "front"
    });
  },
  changeFlash: function() {
    var index = this.data.flashIndex;
    index = (index + 1) % 3;
    this.setData({
      flashIndex: index
    })
  },
  scanCode: function () {
    var that = this;
    var show;
    wx.scanCode({//调用扫码API接口
      success: (res) => {  //接口调用成功的回调函数 
        this.show = "结果:" + res.result + "二维码类型:" + res.scanType + "字符集:" + res.charSet + "路径:" + res.path;
        that.setData({
          show: this.show
        })
        wx.showToast({//消息提示接口
          title: '成功', //标题  
          icon: 'success', //图标，支持"success"、"loading"          
          duration: 2000 //提示的延迟时间，单位毫秒，默认：1500
          // image: '../image/img.png',  //自定义图标的本地路径，image 的优先级高于 icon
          // mask: false,  //是否显示透明蒙层，防止触摸穿透，默认：false
          // success: function () { }, //接口调用成功的回调函数  
          // fail: function () { },  //接口调用失败的回调函数  
          // complete: function () { } //接口调用结束的回调函数
        })
      },
      fail: (res) => { //接口调用失败的回调函数
        wx.showToast({
          title: '失败',
          icon: 'success',
          duration: 2000
        })
      },
      complete: (res) => { //接口调用结束的回调函数
      }
    }),
    this.setData({show: show});
  },
  startRecord: function(){//开始录像
    var that=this;
    this.cameraContext.startRecord({
      success: (res) => { //接口调用成功的回调函数
        console.log("开始录制....");
      },
      timeoutCallback: (res) => {
        that.setData({video: res.tempVideoPath});
      }
     // fail:	Function 接口调用失败的回调函数
     // complete: Function 接口调用结束的回调函数（调用成功、失败都会执行）
     // timeoutCallback: Function 超过30s或页面onHide时会结束录像，res = { tempThumbPath, tempVideoPath }
    });
  },
  stopRecord: function() {//停止录像
    var that=this;
    this.cameraContext.stopRecord({
      success: (res) => {
        that.setData({ video: res.tempVideoPath });
      }
      // fail: Function
      // complete: Function
    });
  }
})