//验证码内容

function yzm(){
	var str="";
	for(var i=0;i<4;i++){
		str+=rand(0,9);
	}
	return str;
}
$(".s1").html(yzm());
$(".s1").css("color",getColor());
$(".s1").click(function(){
	$(".s1").css("color",getColor());	
	$(".s1").html(yzm());	
})
//登陆验证
	$(".denglu").click(function(){
		console.log(1)
	})

