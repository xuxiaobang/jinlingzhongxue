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

  console.log('nScrollTop', nScrollTop > scrollTop, nScrollTop - scrollTop)

  if (
    nScrollTop > scrollTop &&
    nScrollTop > pHight / 3 &&
    nScrollTop < pHight / 3 + 10
  ) {
    $(window).scrollTop(pHight - 80)
  }

  scrollTop = nScrollTop

  // 处理导航
  if (nScrollTop > 40) {
    $('.jl-main-header').addClass('hide')
    $('.jl-header-wrap').addClass('show')
  } else {
    $('.jl-main-header').removeClass('hide')
    $('.jl-header-wrap').removeClass('show')
  }
})

// 全部导航
$(function () {
  $('.jl-nav-operate').click(function () {
    $('.jl-full-nav').toggleClass('show')
    $('body').toggleClass('hidden')
  })
})
