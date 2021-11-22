module.exports = Behavior({
  data: {
    theme: wx.getStorageSync('theme')
  },


  methods: {

    onShow: function () {
      wx.getStorage({
        key: 'theme',
        success: res => {
          const theme = res.data
          if (theme !== this.data.theme) {
            this.setData({ theme })
          }
        },
      })
    },
    
  
  }
});

function setDarkTabBarItems() {
  wx.setTabBarItem({
    index: 0,
    iconPath: 'octicons/tab/dark/github.png',
  })
  wx.setTabBarItem({
    index: 1,
    iconPath: 'octicons/tab/dark/flame.png',
  })
  wx.setTabBarItem({
    index: 2,
    iconPath: 'octicons/tab/dark/account.png',
  })
}

function setLightTabBarItems() {
  wx.setTabBarItem({
    index: 0,
    iconPath: 'octicons/tab/light/github.png',
  })
  wx.setTabBarItem({
    index: 1,
    iconPath: 'octicons/tab/light/flame.png',
  })
  wx.setTabBarItem({
    index: 2,
    iconPath: 'octicons/tab/light/account.png',
  })
}