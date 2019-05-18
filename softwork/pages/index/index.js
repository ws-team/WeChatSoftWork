// pages/logs/index.js
var WxSearch = require('../../wxSearch/wxSearch.js')
var app = getApp()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    focus: false,
    
    inputValue: '',
    imageArray: [
      { image: '/image/yilou.png', name: '食堂一楼'},
      { image: '/image/erlou.png', name: '食堂二楼' },
      { image: '/image/yilou.png', name: '鼓瑟轩' },
      { image: '/image/yilou.png', name: '鹿鸣轩' },
      { image: '/image/qingzhen.png', name: '清蒸食堂' }
      ],

    imageArray2:[
      { image: '/image/zaocan.png', name: '早餐' },
      { image: '/image/wode-.png', name: '午餐' },
      { image: '/image/wancan.png', name: '晚餐' },
      { image: '/image/roulei.png', name: '肉类' },
      { image: '/image/shucailei.png', name: '蔬菜类' }
    ]
  },
  go:function(){
    wx.navigateTo({
      url: '/pages/test/test',
    })
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  bindReplaceInput: function (e) {
    var value = e.detail.value
    var pos = e.detail.cursor
    var left
    if (pos !== -1) {
      // 光标在中间
      left = e.detail.value.slice(0, pos)
      // 计算光标的位置
      pos = left.replace(/11/g, '2').length
    }

    // 直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
    return {
      value: value.replace(/11/g, '2'),
      cursor: pos
    }

    // 或者直接返回字符串,光标在最后边
    // return value.replace(/11/g,'2'),
  },
  bindHideKeyboard: function (e) {
    if (e.detail.value === '123') {
      // 收起键盘
      wx.hideKeyboard()
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  SearchFocus: function () {
    wx.navigateTo({
      url: '/pages/Search/index',
    })
  },
  
})
