// 返回上一页
export default function goBack(second = 0) {
  setTimeout(() => {
    const pages = getCurrentPages()
    if (pages.length === 2) {
      uni.navigateBack({
        delta: 1,
      })
    } else if (pages.length === 1) {
      uni.reLaunch({
        url: '/pages/index/index',
      })
    } else {
      uni.navigateBack({
        delta: 1,
      })
    }
  }, second * 1000)
}
