Page({

  data: {

  },

  onReady: function() {

  },

  request: function() {
    wx.request({
      url: 'http://www.baidu.com', //请求地址
      data: { //请求参数http://www.baidu.com?x=&y=
        x: '',
        y: ''
      },
      header: { //请求头部，header不能设置Referer
        "content-type": "application/json"
        // "Referer": 此设置告诉浏览器本请求的的来源，不设置
      },
      // method: 'GET', //（需大写）有效值：OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
      // responseType: 'text', //设置响应的数据类型。合法值：text、arraybuffer

      //收到开发者服务成功返回的回调函数
      success: function (res) {
        console.log(res)
      },

      fail: function (res) {
        console.log("获取排行版失败......")
        //接口调用失败的回调函数
      },
      complete: function (res) {
        //接口调用结束的回调函数（调用成功、失败都会执行）
      }
    })
  }
})