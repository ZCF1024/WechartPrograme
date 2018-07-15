Page({

  data: {
    position: {
      x:0,
      y: 0
    }
  },
  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },
  onReady: function (e) {
    // 使用 wx.createContext 获取绘图上下文 context
    this.context = wx.createCanvasContext('firstCanvas');
    this.draw();
  },
  draw: function() {
    var context = this.context;
    context.setStrokeStyle("#00ff00");  //设置画笔颜色
    context.setLineWidth(5);  //设置线的宽度
    context.rect(0, 0, 200, 200);  //画一个长方形,起始点为(0,0),长宽都为200
    context.stroke();  //对当前路径进行描边
    context.setStrokeStyle("#ff0000");
    context.setLineWidth(2);
    context.moveTo(160, 100);  //moveTo()画笔移动到(160,100)，若不移动，则当前画笔结束点和下次画笔开始点之间会被描边
    context.arc(100, 100, 60, 0, 2 * Math.PI, true);//参数： 圆心坐标，第三个参数是开始弧度(角度)，第四个参数是结束弧度
    // 第五个参数表示顺时针(false)，逆时针(true)画
    context.moveTo(140, 100);
    context.arc(100, 100, 40, 0, Math.PI, false);
    context.moveTo(85, 80);
    context.arc(80, 80, 5, 0, 2 * Math.PI, true);
    context.moveTo(125, 80);
    context.arc(120, 80, 5, 0, 2 * Math.PI, true);
    context.stroke();
    context.draw();
  },
  movedraw: function(){
    if(this.data.position.x > 300)
       return;
    console.log("run......" + this.data.position.x);
    this.context.moveTo(this.data.position.x, this.data.position.y);
    this.context.arc(this.data.position.x, this.data.position.y, 0, 2 * Math.PI, true);
    this.context.stroke();
    this.context.draw();
    this.data.position.x+=2;
    this.data.position.y+=2;
  },
  touchStart: function(event){
    this.context.setStrokeStyle("#00ff00");
    this.context.setLineWidth(2);
    setInterval(this.movedraw, 100); //实现一个与园动态移动
    console.log("touch start at("+event.touches[0].x+","+event.touches[0].y+")");
    // this.context.moveTo(event.touches[0].x,event.touches[0].y);
  },
  touchMove: function (event) {
    // console.log("touch move to (" + event.touches[0].x + "," + event.touches[0].y + ")");
    // this.context.lineTo(event.touches[0].x, event.touches[0].y);
    // this.context.stroke();
    // this.context.draw();
  },
  touchEnd: function (event) {
    console.log("touch end......");
    // console.log("touch end at (" + event.touches[0].x + "," + event.touches[0].y + ")");
    // this.context.draw();
  },
  touchCancel: function (event) {
    console.log("touch cancel......");
    console.log(event);
    // this.context.draw();
  },
})