const reSize = function () {
  let dom = document.documentElement
  let w = dom.getBoundingClientRect().width
  let rem = w / 7.5
  document.getElementsByTagName('html')[0].style.fontSize = rem + 'px'
  // html.setAttribute("font-size", rem + 'px')
  return rem
}

export default reSize