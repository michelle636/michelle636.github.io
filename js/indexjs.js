$(function(){
$(".pp").on("click",
function(){
$("#quick_icons").toggle();
});
});

$(function(){
$(".ppp").on("click",
function(){
$("#quickside").toggle();
});
});

$(function(){
$("#btn_001").click(function(){
$(".pic_01 img").hide();
$(".prod1").css("display","block");
});
$("#btn_002").click(function(){
$(".pic_01 img").hide();
$(".prod2").css("display","block");
});
$("#btn_003").click(function(){
$(".pic_01 img").hide();
$(".prod3").css("display","block");
});
$("#btn_004").click(function(){
$(".pic_01 img").hide();
$(".prod4").css("display","block");
});
$("#btn_005").click(function(){
$(".pic_01 img").hide();
$(".prod5").css("display","block");
});
$("#btn_006").click(function(){
$(".pic_01 img").hide();
$(".prod6").css("display","block");
});
$("#btn_007").click(function(){
$(".pic_01 img").hide();
$(".prod7").css("display","block");
});
$("#btn_008").click(function(){
$(".pic_01 img").hide();
$(".prod8").css("display","block");
});
});
$(function(){
$(window).scroll(function(){
if($(window).scrollTop()>=1300){
$(".intro02 h1").fadeIn(2000);
};
});
});
$(function(){
$(window).scroll(function(){
if($(window).scrollTop()>=1800){
$(".intro05 h1").fadeIn(2000);
};
});
});