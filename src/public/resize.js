const reSize = function () {
  let dom = document.documentElement
  let w = dom.getBoundingClientRect().width
  console.log(w)
  let rem = w / 7.5
  dom.setAttribute("font-size", rem + 'px')
  console.log(rem)
  return rem
}

export default reSize