// 加密字符串
export default function textOmit(textValue, to, from) {
  /**
   * 实现功能
   * 将地址缩短 使用 ... 进行拼接
   * 如下效果
   * 0x0171...fB15d680
   */
  let a = textValue.slice(0, to)
  let a2 = textValue.slice(textValue.length - from, textValue.length)
  return `${a}...${a2}`
}
