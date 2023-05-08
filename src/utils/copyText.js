import notify from './notify'
import { translate } from '@/language/index'
export default function copyText(content) {
    if (!document.queryCommandSupported('copy')) { // 兼容某些浏览器的判断
        notify(translate('fu-zhi-shi-bai'), 2000, { background: '#ee0a24' })
    }
    let textarea = document.createElement("textarea")
    textarea.value = content
    textarea.readOnly = "readOnly"
    document.body.appendChild(textarea)
    textarea.select() // 选择对象
    textarea.setSelectionRange(0, content.length) // 核心
    let result = document.execCommand("copy") // 执行浏览器复制命令
    if (result) {
        notify(translate('fu-zhi-cheng-gong'))
    }
    return true
}