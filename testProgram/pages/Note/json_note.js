//通常一个页面对应一个文件夹,如index页面，对应index文件夹

/*  /app.json内容  
     作用：app.json 是对当前小程序的全局配置，包括了小程序的所有页面路径、界面表现、网络超时时间、底部 tab 等。
{
  //page接受一个数组，每一项都是字符串，来指定小程序由哪些页面组成。每一项代表对应页面的【路径+文件名】
  //数组的第一项代表小程序的初始页面
  "pages":[    
    "pages/index/index",
    "pages/logs/logs"
  ],

  //window字段 —— 小程序所有页面的顶部背景颜色，文字颜色定义在这里的。
  
  //     注：navigationStyle 只在 app.json 中生效。
  "window":{
    "backgroundColor": 窗口的背景色
    "backgroundColorTop":	#ffffff,  //顶部窗口的背景色，仅 iOS 支持
    "backgroundColorBottom": #ffffff,  //底部窗口的背景色，仅 iOS 支持
    "backgroundTextStyle":"light",  //下拉 loading 的样式，仅支持 dark/light
    
    "navigationStyle": "custom",  //导航栏样式，仅支持 default/custom。custom模式可自定义导航栏，只保留右上角胶囊状的按钮
    "navigationBarBackgroundColor": "#fff",  //导航栏背景颜色
    "navigationBarTitleText": "WeChat",  //导航栏标题文字内容
    "navigationBarTextStyle":"black"   //导航栏标题颜色，仅支持 black/white

    "enablePullDownRefresh": false  //是否开启下拉刷新
    "onReachBottomDistance": 50  //页面上拉触底事件触发时距页面底部距离，单位为px
  }
}

//！！！！！！注意： 只有将pages中的第一个页面设置成tabbar中的一个tab，tabbar才能正常显示！！！！！！！！
"tabBar": {
    "color": "#00b7ff",   //tab上的文字颜色
    "backgroundColor": "#176d70", //tab背景色
    "selectedColor": "#ff0000",  //tab被选中时的颜色
    "borderStyle": "black", //tabbar边框颜色，仅支持white/black    
    "position": "bottom",  //tabbar位置，仅支持bottom/top
    "list": [    //tab 的列表，最少2个、最多5个 tab
      {
        "pagePath": "pages/first/first",  //页面路径，必须在 pages 中先定义
        "iconPath": "image/tab.jpg",  //tab背景图片路径，当 postion 为 top 时，此参数无效，不支持网络图片
                                      //大小限制为40kb，建议尺寸81px * 81px
        "selectedIconPath": "image/first.jpg", //tab被选中时的背景图片路径
        "text": "tabBar"  //tab上的文字
      },
      {
        "pagePath": "pages/index/index",
        "text": "首页"
      }],

  "networkTimeout": {   //网络请求的超时时间
    "request": 10000,
    "downloadFile": 10000,
    "uploadFile": 10000,
    "connectSocket": 10000
  },
  "debug": true
  //可以在开发者工具中开启 debug 模式，在开发者工具的控制台面板，调试信息以 info 的形式给出
  //其信息有Page的注册，页面路由，数据更新，事件触发 。 可以帮助开发者快速定位一些常见的问题。
}
*/

/* 页面配置 page.json
   每一个小程序页面也可以使用.json文件来对本页面的窗口表现进行配置。 页面的配置比app.json全局配置简单得多，只是设置 app.json 中的 window 配置项的内容，页面中配置项会覆盖 app.json 的 window 中相同的配置项。
   页面的.json只能设置 window 相关的配置项，以决定本页面的窗口表现，所以无需写 window 这个键
*/


/*  /project.config.json文件   作用：
    通常大家在使用一个工具的时候，都会针对各自喜好做一些个性化配置，例如界面颜色、编译配置等等，当你换了另外一台电脑重新安装工具的时候，你还要重新配置。
    小程序开发者工具在每个项目的根目录都会生成一个 project.config.json，你在工具上做的任何配置都会写入到这个文件，当你重新安装工具或者换电脑工作时，你只要载入同一个项目的代码包，开发者工具就自动会帮你恢复到当时你开发项目时的个性化配置，其中会包括编辑器的颜色、代码上传时自动压缩等等一系列选项。
*/