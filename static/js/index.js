(function () {
})()

// 工具函数
function $(str) {
  if (str.indexOf('#') === 0) return document.querySelector(str)
  else return document.querySelectorAll(str)
}


wx.config({
  debug: false,
  appId: '',
  timestamp: 1,
  nonceStr: '',
  signature: '',
  jsApiList: []
})
wx.ready(() => {
  $('.audio')[0].play()
})

$('.audio')[0].play()

var swiper = new Swiper('.swiper-container', {
    updateOnImagesReady: true,
    preloadImages: true,
    shortSwipes: true,
    direction: 'vertical',
    on: {
        slideChange: function () {
            let last = $('.swiper-slide').length - 1
            if (this.activeIndex == last) {
                $('.slideGuide')[0].style.display = 'none'
            } else {
                $('.slideGuide')[0].style.display = 'block'
            }
        },
        init: function() {
            swiperAnimateCache(this)
            swiperAnimate(this)
        }, 
        slideChangeTransitionEnd: function() { 
            swiperAnimate(this)
        }
    }
})
const adjustMusic = function () {
    let name = $('.musicIcon')[0].style.animationPlayState
    if (!name) {
        $('.musicIcon')[0].style.animationPlayState = 'paused'
        $('.musicStop')[0].style.display = 'block'
        $('.audio')[0].pause()
    } else {
        $('.audio')[0].play()
        $('.musicIcon')[0].style.animationPlayState = ''
        $('.musicStop')[0].style.display = 'none'
    }
}

$('.musicBlock')[0].addEventListener('click', adjustMusic)
