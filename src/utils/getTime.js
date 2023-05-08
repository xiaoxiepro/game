// 获取日期
export default function getTime(data, type) {
  let time = new Date(Number(data) * 1000)
  let Y = time.getFullYear()
  let Mon = time.getMonth() + 1
  let Day = time.getDate()
  let H = time.getHours()
  let Min = time.getMinutes()
  let S = time.getSeconds()
  if (Mon >= 1 && Mon <= 9) {
    Mon = `0${Mon}`
  }
  if (Day >= 0 && Day <= 9) {
    Day = `0${Day}`
  }
  if (Min >= 0 && Min <= 9) {
    Min = `0${Min}`
  }
  if (S >= 0 && S <= 9) {
    S = `0${S}`
  }
  //自定义选择想要返回的类型
  if (type === 'Y') {
    //返回年月日2020-10-10
    return `${Y}.${Mon}.${Day} ${H}:${Min}`
  } else if (type === 'H') {
    //返回时分秒20：10：10
    return `${H}:${Min}:${S}`
  } else {
    //返回年月日时分秒2020-10-10 10:26:38
    return `${Y}-${Mon}-${Day} ${H}:${Min}:${S}`
  }
}
