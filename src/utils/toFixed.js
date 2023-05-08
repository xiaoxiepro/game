export default function toFixed(str, len) {
  let n = Number(str).toFixed(len + 50)
  let b = n.slice(0, n.length - 50);
  return Number(b)
}
