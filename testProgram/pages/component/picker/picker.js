// pages/component/picker/picker.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    choose0: 0,
    choose1: 1,
    rangeItemOs: [{key: "华为-对象数组", value: 0, disable: false},
      { key: "魅族-对象数组", value: 1},
      { key: "小米-对象数组", value: 2},
      { key: "中兴-对象数组", value: 3, disable: true},
      { key: "三星-对象数组", value: 4}],
   rangeItems: ["华为", "魅族", "小米", "中兴", "三星"],
   multiArray: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']],
   multiIndex: [0, 0, 0],   //每列选中的值
   date: "2016-1-1",
   time: "00:00",
   address: ["江西省","赣州市","南康区"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  bindPickerChange: function (event) {
    console.log(event);
    this.setData({ choose: event.detail.value });
  },
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:  //当修改的是第0列第0个的值, 则修改对应第二个和第三个数组的值，即修改第二和三个选择器的选项
            data.multiArray[1] = ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'];
            data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
            break;
          case 1:  //修改的为第0列第1个的值
            data.multiArray[1] = ['鱼', '两栖动物', '爬行动物'];
            data.multiArray[2] = ['鲫鱼', '带鱼'];
            break;
        }
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;
      case 1:
        switch (data.multiIndex[0]) {
          case 0:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
                break;
              case 1:
                data.multiArray[2] = ['蛔虫'];
                break;
              case 2:
                data.multiArray[2] = ['蚂蚁', '蚂蟥'];
                break;
              case 3:
                data.multiArray[2] = ['河蚌', '蜗牛', '蛞蝓'];
                break;
              case 4:
                data.multiArray[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物'];
                break;
            }
            break;
          case 1:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['鲫鱼', '带鱼'];
                break;
              case 1:
                data.multiArray[2] = ['青蛙', '娃娃鱼'];
                break;
              case 2:
                data.multiArray[2] = ['蜥蜴', '龟', '壁虎'];
                break;
            }
            break;
        }
        data.multiIndex[2] = 0;
        console.log(data.multiIndex);
        break;
    }
    this.setData(data);
    // data = {
    //   multiArray: this.data.multiArray,
    //   multiIndex: this.data.multiIndex
    // }
    // 相当于
    // this.setData({
    //   multiArray: this.data.multiArray,
    //   multiIndex: this.data.multiIndex
    // });
  },
  changeDate: function(event) {
    this.setData({
      date: event.detail.value
    });
  },
  changeTime: function(event) {
    this.setData({
      time: event.detail.value
    });
  },
  changeAddress: function(event) {
    this.setData({
      address: event.detail.value
    });
  }
})