const app = getApp()
const github = require('../../api/github.js')
const moment = require('../../lib/moment.js')

const sinceCacheKey = 'Trending:Since'
const trendsCacheKey = 'Trending:Data'

const theming = require('../../behaviours/theming.js')

Component({
  behaviors: [theming],
  
  data: {
    selectedIndices: [wx.getStorageSync(sinceCacheKey) || 0],
    trends: wx.getStorageSync(trendsCacheKey) || []
  },

  methods: {

    onLoad: function () {
      wx.startPullDownRefresh({})
    },

    onShareAppMessage: function(options) {
    },

    onPullDownRefresh: function () {
      this.reloadData()
    },

    reloadData: function () {
      const [timeIndex, langIndex] = this.data.selectedIndices

    },

    changeFilter: function (event) {
      const selectedIndices = event.detail.value
      this.setData({ selectedIndices })
      wx.pageScrollTo({
        scrollTop: 0
      })
      wx.startPullDownRefresh({})
    },

    onSearch: function (e) {
      const q = e.detail
      wx.navigateTo({
        url: `/pages/search/search?q=${q}`
      })
    }
  }
})