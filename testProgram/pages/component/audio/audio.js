Page({
  data: {
    audiosrc: "http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46",
    control: true,
    poster: "http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000",
    name: "此时此刻",
    author: "许巍",
    action: null,
    speed: 1
  },
  onReady: function() {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio');

  },
  audioError: function(event) {
    console.log(event);
    var errorCode = event.MediaError.code;
    if (errorCode == 1)
      console.log("获取资源被用户禁止");
    else if (errorCode == 2)
      console.log("网络错误");
    else if (errorCode == 3)
      console.log("解码错误");
    else
      console.log("不合适资源");
  },
  changeControls: function() {
    this.setData({control: !this.data.control});
  },
  changeName: function(){
    this.setData({ name: this.data.name == "此时此刻" ? "歌曲名称" : "此时此刻"})
  },
  changeAuthor: function () {
    this.setData({ author: this.data.author == "许巍" ? "朱才富" : "许巍" })
  },
  play: function () {
    // 通过获取音频上下文audioCtx控制音频
    this.audioCtx.play();
  },
  pause: function () {
    this.audioCtx.pause();
  },
  toStart: function () {
    this.audioCtx.seek(0);
  },
  to30: function () {
    this.audioCtx.seek(30);
  },
  actionPlay: function () {
    this.setData({action: {method: "play"}});
  },
  actionPause: function () {
    this.setData({ action: { method: "pause" } });
  },
  speedPlay: function () {
    if(this.data.speed==4.5)
       tis.data.speed=0.5;
    this.setData({ action: { method: "setPlaybackRate", data: this.data.speed + 0.5 } });
  },
  speedTime: function () {
    this.setData({ action: { method: "setCurrentTime", data: 30 } });
  },
})