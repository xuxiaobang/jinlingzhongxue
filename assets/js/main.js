// 监听浏览器窗口变化
fontSize()
$(window).resize(function () {
  fontSize()
})

function fontSize() {
  var size
  var winW = window.innerWidth
  if (winW <= 1600 && winW > 800) {
    size = Math.round(winW / 16)
  } else if (winW <= 800) {
    size = 100
    $('html').css({
      'width': 1600 + 'px',
      'transform': `scale(${winW / 1600})`,
      'transform-origin': 'top left'
    })
    // size = Math.round(winW / 7.5)
    // if (size > 65) {
    //   size = 65
    // }
  } else {
    size = 100
  }
  $('html').css({
    'font-size': size + 'px'
  })
}

// 全部导航
$(function () {
  $('.jl-nav-operate').click(function () {
    $('.jl-full-nav').toggleClass('show')
    $('body').toggleClass('hidden')
    $('.jl-nav-operate').toggleClass('show')
  })
})

// 判断操作系统
$(function () {
  var agent = navigator.userAgent.toLowerCase()

  // window
  if (agent.indexOf('win') >= 0 || agent.indexOf('wow') >= 0) {
    $('body').attr('style', 'font-family:Microsoft YaHei Regular;')
  }

  if (/macintosh|mac os x/i.test(navigator.userAgent)) {
    $('body').attr('style', 'font-family:PingFang SC Regular;')
  }
})
