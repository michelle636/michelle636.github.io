$(function(){
	
	
var mySlider = $("#contents ul").bxSlider({
	mode:"horizontal", //수평방향으로 이동합니다.
	speed:500, //이동속도(500:0.5초)
	pager:false, //페이징 표시 제어 숨김
	moveSlides:1, //이동 슬라이드 수
	slideWidth:250, //각 슬라이드 폭
	minSlides:5, //최소노출슬라이드수
	maxSlides:5, //최대노출슬라이드수
	auto:true, //자동슬라이드여부
	autoHover:true, //마우스오버시자동정지
	controls:false //이전 다음 버튼을 숨긴다
	});
$('.prev_btn').click(function(){
	mySlider .goToPrevSlide(); 
	return false;
});
$('.next_btn').click(function(){
	mySlider .goToNextSlide();
	return false;
});
});