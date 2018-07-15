Page({
  data: {
    markers: [{
      id: 1,
      longitude: 114.92, //必填，经度(180)
      latitude: 25.85, //必填，纬度(90)
      title: "赣州",
      iconPath: "/image/markers/marker1.png", //(必填) 
      rotate: 0, //旋转角度
      alpha: 1, //透明度[0-1]
      width: 20,
      height: 28,
      callout: {
        content: "大赣州", //气泡上的文本
        color: "#b07fffDD", //文本颜色(十六进制)(后两位表示透明度)
        // fontSize: ,  //number 字体大小
        textAlign: "center", //文本对齐方式。有效值: left, right, center
        padding: 1,//number 文本边缘留白
        borderRadius:  5,//气泡边框圆角(值越大角度越园)
        bgColor: "#7fffd4FF", //背景色(后两位表示透明度)        
        display: 'ALWAYS'//'BYCLICK': 点击显示; 'ALWAYS': 常显        
      },
      label: {  //label不显示不知为何
        context: "赣州的lable",  //文本
        color: "#f11010FF",  //文本颜色(8位十六进制)(后两位表示透明度)
        // fontSize: , //文本字体大小
        textAlign: "center",
        padding: 2,
        anchorX: 5, //原点是 marker 对应的经纬度
        anchorY: 5,
        bgColor: "#10b1f155", //边框背景颜色
        borderRadius: 5, //边框圆角
        borderWidth: 1,  //边框宽度
        borderColor: "#10f1a677" //边框颜色        
      }}, {
      id: 2,
      longitude: 114.92, //必填，经度(180)
      latitude: 25.85, //必填，纬度(90)
      title: "赣州",
      iconPath: "/image/markers/marker2.png", //(必填) 
      rotate: 60, //旋转角度
      alpha: 0.1, //透明度[0-1]
      width: 20,
      height: 28
      }, {
        id: 3,
        longitude: 114.92, //必填，经度(180)
        latitude: 25.85, //必填，纬度(90)
        title: "赣州",
        iconPath: "/image/markers/marker2.png", //(必填) 
        rotate: 180, //旋转角度
        alpha: 1, //透明度[0-1]
        width: 20,
        height: 28
      }],
      polyline: [{
        points: [{ longitude: 114.92, latitude: 25.85 },
          { longitude: 114.87, latitude: 25.85 }],
        color: "#10f1a677", //线的颜色
        width: 5, //线的宽度
        dottedLine: true, //是否虚线
        arrowLine: true, //是否是带箭头的线
        // arrowiconPath: "", //更换箭头图标
        borderColor: "#10b1f1FF",  //线的边框颜色
        borderWidth: 3 //线的厚度
      }]
  },
  onReady: function() {

  }
})