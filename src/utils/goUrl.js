// 跳转地址
export default function goUrl(url, second = 0) {
  setTimeout(() => {
    uni.navigateTo({
      url,
      fail() {
        console.log('跳转失败,尝试Tab跳转,url: ' + url)
        uni.switchTab({
          url,
          fail() {
            console.log('Tab跳转失败,url: ' + url)
          },
        })
      },
    })
  }, second * 1000)
}
