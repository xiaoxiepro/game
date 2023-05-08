
// 通知，时间不应该小于1秒
export default function notify(text, time = 2000, data) {
  let wrap = document.createElement('div')
  let body = document.querySelector('body')
  let style = {
    width: '100%',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#5ac725',
    color: '#ffffff',
    fontSize: '14px',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 9999,
    transition: 'all .3s',
    ...data,
  }
  // 循环设置样式
  for (let key in style) {
    wrap.style[key] = style[key]
  }
  wrap.innerText = text
  body.appendChild(wrap)
  // 到设定时间销毁
  setTimeout(() => {
    body.removeChild(wrap)
  }, time)
  // 使用Promise达到分步动画
  function moveTo(fn, time) {
    return new Promise((resolve, reject) => {
      fn()
      setTimeout(resolve, time)
    })
  }
  moveTo(() => {
    wrap.style.transform = 'translate(0, -100%)'
  }, 300)
    .then(() => {
      return moveTo(() => {
        wrap.style.transform = 'translate(0, 0)'
      }, time - 300 * 2)
    })
    .then(() => {
      return moveTo(() => {
        wrap.style.transform = 'translate(0, -100%)'
      }, 300)
    })
}
