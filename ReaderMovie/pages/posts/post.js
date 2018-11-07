// import postList from '../../data/posts-data'
var postData = require('../../data/posts-data')
Page({

  /**
   * 页面的初始数据
   */
  data: {},
  imgPath: "/iamges/...",
  process: function () {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.data.postList = postData.postList
    this.setData({postList: postData.postList})
  },
  onPostTap: function () {
    wx.navigateTo({
      url: 'post-detail/post-detail?id=1'
    })
  }
})