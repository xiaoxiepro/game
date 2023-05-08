// 防抖
export default function debounce(fn, delay) {
  let timer // 维护一个 timer
  return function () {
    let args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, args) // 用apply指向调用debounce的对象，相当于_this.fn(args);
    }, delay)
  }
}
