Page({
  data: {
    focus: false,
    cursorFocus: false

  },
  onReady: function() {

  },
  setFocus: function() {
    this.setData({
      focus: !this.data.focus
    });
  },
  setCursorFocus: function() {
    this.setData({
      cursorFocus: !this.data.cursorFocus
    });
  },
  inputFuc: function(event) {
    console.log("键盘输入触发事件");
    if (event.detail.value == '123') {
      console.log("键盘输入触发事件: return 'zcf'");
      return 'zcf';
    }
  },
  confirmFuc: function() {
    console.log("点击按钮完成(回车)触发事件");
  },
  focusFuc: function(event) {
    console.log("输入框聚焦触发事件");
  }
})