Page({

  data: {
    rankList: [],
    rankHidden: true,
    songList: [],
    songListHidden: true
  },

  onReady: function () {
    this.getRankList()
  },

  getRankList: function () {
    var that = this
    wx.request({
      url: 'http://m.kugou.com/rank/list',
      data: {
        json: true
      },
      header: { //请求头部
        "content-type": "application/json"
      },
      success: function (res) {
        that.setData({
          rankList: res.data.rank.list,
          rankHidden: false
        })
        console.log(that.data.rankList)
      },
      fail: function (res) {
        console.log("获取排行版失败......")
      }
    })
  },
  getSongList: function (event) {
    console.log(event.target.id)
    var that = this
    wx.request({
      url: 'http://m.kugou.com/rank/info/',
      data: {
        rankid: event.target.id,
        page: 1,
        json: true
      },
      header: {
        'content-type': "application/json"
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        // console.log(res.data.songs) 
        that.setData({
          songListHidden: false,
          songList: res.data.songs.list
        })
        // console.log(that.data.songList)
      },
      fail: function (res) {
        console.log("获取音乐列表失败......")
      }
    })
    // console.log(event.target.id)
  },
  getSong: function (event) {
    console.log(event.target.id)
  }
})