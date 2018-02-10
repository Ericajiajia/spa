const sorts = ['优惠一', '优惠二', '优惠三', '美发优惠']
const datas = [
		'综合卡充值20000元<br>送卡金5000元<br>送玉石艾灸肩颈、腰肾、腿足一个季度<br>价值6800元', 
		'综合卡充值30000元<br>送卡金9000元<br>送玉石艾灸肩颈、腰肾、腿足全年价值<br>20000元<br>送泡澡一个季度价值2000元', 
		'综合卡充值50000元<br>送卡金18000元<br>送玉石艾灸肩颈、腰肾、腿足全年价值<br>20000元<br>送艾灸全年　价值20000元<br>送泡澡全年　价值2000元', 
		'潮流美发　私人订制<br>洗剪吹8次　　仅售30元<br>另可享受本店任意项目200元代金券'
	]
// 页面索引值
var pageIndex = 0


// 工具函数
function $(str) {
  if (str.indexOf('#') === 0) return document.querySelector(str)
  else return document.querySelectorAll(str)
}

$('.musicBlock')[0].addEventListener('click', function () {
	let name = $('.musicIcon')[0].style.animationPlayState
	if (!name) {
		$('.musicIcon')[0].style.animationPlayState = 'paused'
	} else {
		$('.musicIcon')[0].style.animationPlayState = ''
	}
})