import { createI18n } from 'vue-i18n'
import zh from './zh.json'
import en from './en.json'
const messages = {
  'en_US': {
    ...en,
  },
  'zh_CN': {
    ...zh,
  }
}

const i18n = createI18n({
  legacy: false,
  locale: uni.getStorageSync('language') || 'zh_CN',
  fallbackLocale: 'zh_CN',
  silentTranslationWarn: true, // 关闭警告，烦死了
  messages,
})
export const translate = (key) => {
  if (!key) {
    return ''
  }
  return i18n.global.t(key)
}

export default i18n
