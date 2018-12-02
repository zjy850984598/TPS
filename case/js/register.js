//注册选项卡
var $aa=$(".p1>a");
var $form=$(".ema,.iphone");

$aa.click(function(){
	$(this).css("border-bottom","2px solid #ed4242").siblings().css("border-bottom","none");
	$form.eq($(this).index()).css("display","block").siblings(".ema").css("display","none");
})
//验证
$("#cc").submit(function(){
	if(flagQpwd&&flagEma&&flagPwd){
		return true;
	}else{
		return false;
	}
})
$("#zz").submit(function(){
	if(flagPhone&&flagPswd&&flagQpswd){
		return true;
	}else{
		return false;
	}
})
//邮箱验证
	var flagEma=null;
	$("#eMa").blur(function(){
		var reg=/^\w+@\w+(\.\w+)+$/,emaStr=$("#eMa").val();
		if(reg.test(emaStr)){
			flagEma=true;
			$(".s1").html(" <img src='../img/true.jpg' />");
			$(".s2").css({"display":"block","margin":"5px ","color":"green"});			
			$(".s2").html("正确");
//			$(".p8").css("display","block");
			
		}else{
			flagEma=false;
			$(".s1").html(" <img src='../img/err.jpg' />");
			$(".s2").css({"display":"block","margin":"5px ","color":"red"});			
			$(".s2").html("错误");
		}
	})
	//密码
	var flagPwd=null;
	$("#pwd").blur(function(){
		var reg=/^\w{6,}$/,emaStr=$("#pwd").val();
		if(reg.test(emaStr)){
			flagPwd=true;
			$(".s5").html(" <img src='../img/true.jpg' />");
			$(".s6").css({"display":"block","margin":"5px ","color":"green"});			
			$(".s6").html("正确");
			
			
		}else{
			flagPwd=false;
			$(".s5").html(" <img src='../img/err.jpg' />");
			$(".s6").css({"display":"block","margin":"5px ","color":"red"});			
			$(".s6").html("错误");
		}
	})
	//确认密码
	var flagQpwd=null;
	$("#qpwd").blur(function(){
		emaStr=$("#qpwd").val();
		
		if(emaStr==$("#pwd").val()){
			flagQpwd=true;
			$(".s7").html(" <img src='../img/true.jpg' />");
			$(".s8").css({"display":"block","margin":"5px ","color":"green"});			
			$(".s8").html("正确");
			
		}else{
			flagQpwd=false;
			$(".s7").html(" <img src='../img/err.jpg' />");
			$(".s8").css({"display":"block","margin":"5px ","color":"red"});			
			$(".s8").html("两次密码不一致");
		}
	})
	//手机号验证
	var flagPhone=null;
	$("#call").blur(function(){
		
		var reg=/^\d{11}$/,
		callStr=$(this).val();
		if(reg.test(callStr)){
			flagPhone=true;
			$(".s9").html(" <img src='../img/true.jpg' />");
			$(".s10").css({"display":"block","margin":"5px ","color":"green"});			
			$(".s10").html("正确");
		}else{
			flagPhone=false;
			$(".s9").html(" <img src='../img/err.jpg' />");
			$(".s10").css({"display":"block","margin":"5px ","color":"red"});			
			$(".s10").html("必须为11位数字");
		}
		
	})
	//密码
	var flagPswd=null;
	$("#pswd").blur(function(){
		var reg=/^\w{6,}$/,emaStr=$("#pswd").val();
		if(reg.test(emaStr)){
			flagPswd=true;
			$(".s11").html(" <img src='../img/true.jpg' />");
			$(".s12").css({"display":"block","margin":"5px ","color":"green"});			
			$(".s12").html("正确");
			
			
		}else{
			flagPswd=false;
			$(".s11").html(" <img src='../img/err.jpg' />");
			$(".s12").css({"display":"block","margin":"5px ","color":"red"});			
			$(".s12").html("错误");
		}
	})
	//确认密码
	var flagQpswd=null;
	$("#qpswd").blur(function(){
		emaStr=$("#qpswd").val();
		
		if(emaStr==$("#pswd").val()){
			flagQpswd=true;
			$(".s13").html(" <img src='../img/true.jpg' />");
			$(".s14").css({"display":"block","margin":"5px ","color":"green"});			
			$(".s14").html("正确");
			
		}else{
			flagQpswd=false;
			$(".s13").html(" <img src='../img/err.jpg' />");
			$(".s14").css({"display":"block","margin":"5px ","color":"red"});			
			$(".s14").html("两次密码不一致");
		}
	})
//点击将数据存入cookie
	
   var arr=[];
   $("#emal").click(function(){
   		var json={
   			"uname":$("#eMa").val(),
   			"upwd":$("#pwd").val()
   		};
   		var brr=getCookie("ema");
   		if(brr.length!=0){
   			arr=JSON.parse(brr);
			for(var i=0;i<arr.length;i++){
				if(arr[i].uname==json.uname){
					alert("用户名存在");
					location.href("register.html");
					return;
				}
					 
				}
			}  		
   		arr.push(json);	
   		setCookie("ema",JSON.stringify(arr),3);
		
   })
	$("#lll").click(function(){
   		var json={
   			"uname":$("#call").val(),
   			"upwd":$("#pswd").val()
   		};
   		var brr=getCookie("ema");
   		if(brr.length!=0){
   			arr=JSON.parse(brr);
			for(var i=0;i<arr.length;i++){
				if(arr[i].uname==json.uname){
					alert("用户名存在");
					location.href("register.html");
					return;
				}
					 
				}
			}  		
   		arr.push(json);	
   		setCookie("ema",JSON.stringify(arr),3);	
   })
	
	
