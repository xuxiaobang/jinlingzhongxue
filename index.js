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
    size = Math.round(winW / 7.5)
    if (size > 65) {
      size = 65
    }
  } else {
    size = 100
  }
  $('html').css({
    'font-size': size + 'px'
  })
}

// 获取屏幕高度
var scrollTop = $(window).scrollTop()
$(window).scroll((ev) => {
  // 处理瞬间滚屏
  var pHight = $(window).height()
  var nScrollTop = $(window).scrollTop()

  if (nScrollTop > scrollTop && nScrollTop < 5) {
    $(window).scrollTop(pHight)
  }

  scrollTop = nScrollTop

  // 处理导航
  if (nScrollTop > 20) {
    $('.jl-main-header').addClass('hide')
  } else {
    $('.jl-main-header').removeClass('hide')
  }
})
