import { goUrl } from '@/utils'
// 提示
export default function msg(message, seconds = 2, obj = {}) {
  let data = {
    title: message,
    icon: 'none',
    duration: seconds * 1000,
  }
  if (obj.icon) {
    data.icon = obj.icon
  }
  uni.showToast(data)
  if (obj.url) {
    goUrl(obj.url, seconds)
  }
}
