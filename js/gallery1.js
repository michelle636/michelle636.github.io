$(function(){
	var list_zone = document.getElementById("inner_list");
	//아이디 inner_list요소 잡아와 변수 list_zone에 할당해
	var list_a = list_zone.getElementsByTagName("a");
	//변수 list_zone의 작은그림 a태그요소 잡아와 변수 list_a에 할당해
	
	//포토 리스트의 모든 <a>에 클릭 이벤트를 등록하기 위해서  for 반복문을 이용하여 10개의 <a>에 모두 이벤트 등록
	
	//포토목록에 작은 이미지를 클릭했을때 큰 이미지를 바꿉니다.
	
	for(var i=0; i<list_a.length; i++
	//처음인덱스번호 i변수저장
	//작은그림 전체개수 10보다 작으면 할당클릭수행문 계속 증가 반복해
	){
		list_a[i].onclick=function(){
		//a 인덱스번호 클릭할때 수행해
		var ph=document.getElementById("photo").children[0];
		
		ph.src=this.href;
		
		return false;
		}
	}
});

$(function(){
	$(".test").click(function(){
		$(".test").css("color","red");
		});
	});