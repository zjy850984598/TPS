//选项卡
var $list=$(".u2 li");
var $content=$("#ct .content");
//alert($content.length)
$list.mouseenter(function(){
	$(this).addClass("list").siblings("li").removeClass("list");
	var index=$(this).index();
//	alert(index);
	$content.eq(index).css({"z-index":"3","display":"block"}).siblings(".content").css({"z-index":0,"display":"none"});

}).mouseleave(function(){
	$list.removeClass("list");
})
$("#ct").mouseleave(function(){
	$content.css("display","none");
	
})
//轮播图
var $gl=$(".o1 li"),
	 $u3=$(".u3 li"),
	 $p=$(".u3 p"),
	 index=0,
	 timer=null;
	 timer=setInterval(autoPlay,2000);
	 function autoPlay(){
	 	index++;
	 	if(index==$gl.size()){
	 		index=0;
	 	}
	 	$gl.eq(index).addClass("gl").siblings().removeClass("gl");
	 $u3.eq(index).fadeIn().siblings("li").fadeOut();
	 }
	 $gl.mouseenter(function(){
	 	clearInterval(timer);
	 	index=$(this).index()-1;
	 	autoPlay();
	 }).mouseleave(function(){
	 	timer=setInterval(autoPlay,2000);	 	
	 })
	 $p.eq(0).click(function(){
	 	clearInterval(timer);
	 	if(index==0){
	 		index=$gl.size();	 		
	 	} 		
	 		index-=2;
		 	autoPlay();
	 })
	 $p.eq(1).click(function(){
	 	clearInterval(timer);
	 	autoPlay();
	 	
	 })
	 $p.mouseenter(function(){
	 	clearInterval(timer);	 
	 	
	 }).mouseleave(function(){
	 timer=setInterval(autoPlay,2000);	 	
	 })
	 //main开始
	 //hot
	 $.ajax({
	 	type:"get",
	 	url:"hot.json",
	 	async:true,
	 	success:function(msg){
			ajaxGet(msg,"#hot");
	 	}
	 });
	 $.ajax({
	 	type:"get",
	 	url:"new.json",
	 	async:true,
	 	success:function(msg){
			ajaxGet(msg,"#new");
	 	}
	 });
	 $.ajax({
	 	type:"get",
	 	url:"like.json",
	 	async:true,
	 	success:function(msg){
			ajaxGet(msg,"#like");
	 	}
	 });
	 //定义一个函数用来获取数据库数据
	 function ajaxGet(msg,id){
	 	conStr="";
			for(var i=0;i<msg.length;i++){
				conStr+=`<li>
							<a href="">
								<img src="img/main/${msg[i].src}" alt="" />
								<p>${msg[i].name}</p>
								<span>¥${msg[i].price}</span>
							</a>
						</li>`
			}
			$(id).append(conStr);
	 };
	 //选项卡
	 var $show=$("#h1>li");
	 var $showN=$("#neiR>ul");
	 $show.mouseenter(function(){	 	$(this).addClass("c1").siblings().removeClass("c1");
	 $(this).find("a").css("color","#C80000").end().siblings().find("a").css("color","black");
	 var index=$(this).index();
	 $showN.eq(index).css({"display":"block","z-index":7}).siblings().css({"display":"none","z-index":0})
	 })
	 //品牌精选   小轮播图
	var $xl=$("#xlist li"),
	 $xlb=$("#xbn img"),
	 index1=0,
	 timer1=null;
	 timer1=setInterval(autoPlay1,2000);
	 function autoPlay1(){
	 	index1++;
	 	if(index1==$xl.size()){
	 		index1=0;
	 	}	 	$xl.eq(index1).addClass("xxl").siblings().removeClass("xxl");
	 $xlb.eq(index1).animate({"left":0},1000,function(){
	 	$(this).css("zIndex",0).siblings("img").css({"zIndex":1,"left":555});
	 })
}	
	$xl.mouseenter(function(){
		clearInterval(timer1);
		index1=$(this).index()-1;
		autoPlay1();		
	}).mouseleave(function(){
	 timer1=setInterval(autoPlay1,2000);
		
	})
	//食品酒水
	function Lun(id,cd){
		
	var $xxx=id,
	 $xlbb=cd,	
	 index2=0,
	 timer2=null,
	 timer2=setInterval(autoPlay2,2000); 
//	  console.log($xxx.size(),$xlbb.size())
	 function autoPlay2(){
	 	index2++;
	 	if(index2==$xxx.size()){
	 		index2=0;
	 	}	 	$xxx.eq(index2).css({"background": "white","opacity": 1}).siblings().css({"background": "#000","opacity": .5});
	 $xlbb.eq(index2).animate({"left":0},1000,function(){
	 	$(this).css("zIndex",0).siblings("li").css({"zIndex":1,"left":570});
	 })
}	
		$xxx.mouseenter(function(){
			clearInterval(timer2);
			index2=$(this).index()-1;
			autoPlay2();		
		}).mouseleave(function(){
	 	timer2=setInterval(autoPlay2,2000);		
		})
	}	
	var $arr=[{x:$("#eat .cc1>li"),y:$("#eat .bb>li")},{x:$("#bea .cc1>li"),y:$("#bea .bb>li")},{x:$("#shoe .cc1>li"),y:$("#shoe .bb>li")},{x:$("#sport .cc1>li"),y:$("#sport .bb>li")},{x:$("#watch .cc1>li"),y:$("#watch .bb>li")},{x:$("#mo .cc1>li"),y:$("#mo .bb>li")},{x:$("#yi .cc1>li"),y:$("#yi .bb>li")},{x:$("#came .cc1>li"),y:$("#came .bb>li")},{x:$("#home .cc1>li"),y:$("#home .bb>li")}]
	for(var i=0;i<$arr.length;i++){
	Lun($arr[i].x,$arr[i].y);
		
	}
	
	
	
	
	
	//吸顶效果&导航显示
	//获取页面滚走的距离
	$(window).scroll(function(){
		var sTop=$("body,html").scrollTop();
//		console.log(sTop)
		if(sTop>600){
//			console.log($(".char"))
			$("#header").addClass("xiding");
			$(".char").css("display","none");
			$(".s4").css("display","none");
			
			$("#floor").stop().animate({"height":1000,"top":"20%"},300);
//			console.log($("#floor"))
			
			
		}else{
			$("#header").removeClass("xiding");
			$(".char").css("display","block");
			$(".s4").css("display","block");
			$("#floor").stop().animate({"height":"0","top":"50%"},300);
						
		}
		
	})
	
	
	//楼梯效果
	var $lt=$("#floor>li");
	var $lc=$("#lc>div");
//	var flag=true;
	$lt.click(function(){
//		flag=false;
		var h=$lc.eq($(this).index()-1).offset().top;
//		console.log($(this).index());
		$("body,html").animate({"scrollTop":h-100},1000);
		$(this).addClass("bd").siblings("li").removeClass("bd");
		$(this).find("a").css("color","red").end().siblings("li").find("a").css("color","#000");
		$(this).addClass("checked").siblings("li").removeClass("checked");
		
	}).mouseenter(function(){
	
		$(this).css({"border":"1px solid #c80000",})
				.find("a").css("color","#c80000");
	}).mouseleave(function(){
		$(this).css({"border":"1px solid #000",})
				.find("a").css("color","#000");
				$(".checked").addClass("bd")
							.find("a").css("color","red");
	})
	$(".g0").click(function(){
		$("body,html").animate({"scrollTop":0},2000);
	})
	
	$(window).scroll(function(){
//		if(flag){
			
		var t=$(document).scrollTop();
		var $f=$lc.filter(function(){
			return Math.abs(t-$(this).offset().top)<$(this).outerHeight()/2;
		})
		var index=$f.index();
		$lt.eq(index).addClass("bd").siblings("li").removeClass("bd");
		$lt.eq(index).find("a").css("color","#c80000").end().siblings("li").find("a").css("color","#000");
//		}
	})
	
	
	//gg remove
	 $("#gg").click(function(){
	 	$(this).remove();
	 	
	 })

