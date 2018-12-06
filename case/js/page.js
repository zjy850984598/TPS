
	$(document).ready(function(){
		new Zoom().init().move();
		new Qh().init();
		new Sumj().init();
		$(".sumCar").click(function(){
			new Shop().init().move();

		})
		new Getajax().init();
//		new Getajax().init();
		$(window).scroll(function(){
			var sTop=$(document).scrollTop();

			new Atop(sTop).init().move();
			
		})
//		new Atop().move();
	})//$(function(){
		
//	})
//ajax请求对数据渲染页面
   function Getajax(){
   	this.middle=$(".middle");
   	this.small=$(".oo");
   	this.big=$(".big");
   	this.init=function(){
   		var that=this;
   		$.ajax({
   			type:"get",
   			url:"../js/page11.json?id="+ new Date().getTime() ,
   			async:true,
   			success:function(msg){
   				var item=msg.zd,
   					ctem=msg.xt;
   				var zStr="",
   					dStr="",
   					xStr="";
   				for(var i=0;i<item.length;i++){						
   					zStr+=`<li><img src="../img/${item[i]}"></li>`	
   					xStr+=`<li><img src="../img/${ctem[i]}"></li>`	
   					dStr+=`<li style="z-index:12"><img src="../img/${item[i]}"></li>`	
   					
   			}
   				that.middle.html(zStr);
   				that.small.html(xStr);
   				that.big.html(dStr);
   			}
   		});
   		
   }

   }
   
   //渲染放大镜
      function  Zoom(){
   	this.xlist=$("ol");
   	console.log(this.xlist);
   	this.mlist=$(".middle");
   	this.blist=$(".big");
	this.mask=$("#mask");
	this.big=$(".big");
	this.init=function(){
		var that=this;
		this.xlist.on("mouseenter","li",function(){
			
			$(".middle>li").eq($(this).index()).css("z-index",9).siblings("li").css("z-index",0);
			$(".big>li").eq($(this).index()).css("z-index",9).siblings("li").css("z-index",0);
		})
		this.mlist.mouseenter(function(){
			that.mask.css("display","block");
			that.big.css("display","block");
		}).mouseleave(function(){
			that.mask.css("display","none");
			that.big.css("display","none");
		})
		this.mask.mouseenter(function(){
			that.mask.css("display","block");
			that.big.css("display","block");
		}).mouseleave(function(){
			that.mask.css("display","none");
			that.big.css("display","none");
		})
		return this;
	}
	this.move=function(){
		var that=this;
		this.mask.mousemove(function(e){
			var e=e||event;			
			var x=e.pageX-$(".middle").offset().left-$("#mask").width()/2,
				y=e.pageY-$(".middle").offset().top-$("#mask").height()/2;
				//边界处理
				var maxL=$(".middle").outerWidth()-$("#mask").width();
				var maxT=$(".middle").outerHeight()-$("#mask").height();
				x=Math.min(Math.max(0,x),maxL);
				y=Math.min(Math.max(0,y),maxT);			
				that.mask.css({"left":x,"top":y});
				var x1=x*$(".big").width()/$("#mask").width();
				var y1=y*$(".big").height()/$("#mask").height();
				$(".big>li").css({"left":-x1,"top":-y1})
				
		})
	}
   }
// function  Zoom(){
// 	this.xlist=$("ol>li");
// 	console.log(this.xlist);
// 	this.mlist=$(".middle>li");
// 	this.blist=$(".big>li");
//	this.mask=$("#mask");
//	this.big=$(".big");
//	this.init=function(){
//		var that=this;
//		this.xlist.mouseenter(function(){
//			that.mlist.eq($(this).index()).css("z-index",9).siblings("li").css("z-index",0);
//			that.blist.eq($(this).index()).css("z-index",9).siblings("li").css("z-index",0);
//		})
//		this.mlist.mouseenter(function(){
//			that.mask.css("display","block");
//			that.big.css("display","block");
//		}).mouseleave(function(){
//			that.mask.css("display","none");
//			that.big.css("display","none");
//		})
//		this.mask.mouseenter(function(){
//			that.mask.css("display","block");
//			that.big.css("display","block");
//		}).mouseleave(function(){
//			that.mask.css("display","none");
//			that.big.css("display","none");
//		})
//		return this;
//	}
//	this.move=function(){
//		var that=this;
//		this.mask.mousemove(function(e){
//			var e=e||event;			
//			var x=e.pageX-$(".middle").offset().left-$("#mask").width()/2,
//				y=e.pageY-$(".middle").offset().top-$("#mask").height()/2;
//				//边界处理
//				var maxL=$(".middle").outerWidth()-$("#mask").width();
//				var maxT=$(".middle").outerHeight()-$("#mask").height();
//				x=Math.min(Math.max(0,x),maxL);
//				y=Math.min(Math.max(0,y),maxT);			
//				that.mask.css({"left":x,"top":y});
//				var x1=x*$(".big").width()/$("#mask").width();
//				var y1=y*$(".big").height()/$("#mask").height();
//				that.blist.css({"left":-x1,"top":-y1})
//				
//		})
//	}
// }
 //点击加减内容
 	function Sumj(){
 		this.ipt=$(".b1>input");
 		this.iner=$(".ipt1");
 		this.init=function(){
 			var that=this;
 			this.ipt.click(function(){
 				var val=$(this).val();
 				if(val=="-"&&that.iner.val()=="1"){
					return;			
 				}
 					that.iner.val(eval(that.iner.val()+val+1));				
 			})
 		}
 	}
 
 
 
 
 
 
 
 
 //评价与详情业切换
 function Qh(){
 	this.enn=$(".bt>a");
 	this.qh=$("#ctr>div");
// 	console.log(this.qh.length)
 	this.init=function(){ 		
		var that=this;
 		this.enn.click(function(){
			$(this).css("color","#C80000").siblings().css("color","black");
 			that.qh.eq($(this).index()).css("display","block").siblings().css("display","none");
 		})
 	}
 }
 
 //底部top按钮
  function Atop(sTop){
  	this.aTop=$(".ft"); 
	this.sTop=sTop;
//	console.log(this.sTop);
  	this.init=function(){
   		if(this.sTop>600){
			this.aTop.css("display","block");
  		}else{
  			this.aTop.css("display","none");
  		}
   		return this;
  	}
  	this.move=function(){
  		this.aTop.click(function(){
  			$("body,html").animate({"scrollTop":0},2000);
  		})
  	}
  }


//购物车开始
 function Shop(){
 	this.car=$(".char")
 	this.enniu=$(".sumCar");
 	this.timer=null;
 	this.oImg=null;
   	this.suc=$("#main5");
   	this.mc=$(".mc").html();
   	this.bh=$(".bh").html();
   	this.pri=$(".pri").html();
   	this.cou=$(".ipt1").val();
// 	this.jz=$(".jz");
 	this.init=function(){
 		var flag=true;
   		var arr=[];
		var data={
			"name":this.mc,
			"id":this.bh,
			"count":this.cou,
			"price":this.pri,
			"src":"zd4.jpg"
		};
		var brr=localStorage.data;
		if(brr){
			arr=JSON.parse(brr);
			console.log(arr)
			for(var i=0;i<arr.length;i++){
				if(arr[i].id==data.id){
					arr[i].count++;
					flag=false;
					break;
				}
			}
		}
		if(flag){
			
			arr.push(data);
		}
			var d=JSON.stringify(arr);
			localStorage.data=d;
		
	 	
	 	return this;
 	}
//定义一个函数用来获取加入购物车的数量
	this.count=function(){
		var sum=0;
		var str=localStorage.data;
		var crr=JSON.parse(str);
		for(var i=0;i<crr.length;i++){
			sum+=crr[i].count;
		}
		this.car.html("购物车("+sum+")");
		return this;
	}
	//抛物线移动
	this.move=function(){
		this.oImg=$("<img>");

		$("body,html").append(this.oImg);
		this.oImg.attr("src","../img/zd4.jpg");
		var res=$.fnInit(this.enniu,this.car);
		//设置图片起始点位置
		var x=res.startPoint.x;

		var y=res.startPoint.y;
		this.oImg.css({"width":20,"height":20,"position":"absolute","left":x,
		"top":y});
		var that=this;
		this.timer=setInterval(function(){
			x = x + 10,
			y = res.a * x * x + res.b * x + res.c;

			if(x<res.endPoint.x){
				
				that.oImg.css({
					"left":x,
					"top":y
				})				
			}else{
				that.oImg.remove();
				clearInterval(that.timer);
				that.count();
				that.suc.css("display","block");
			}
		},30)
		return this;
	}
	
 }
 //购物车插件
 $.extend({
		fnInit : function(startObj , endObj){
			//起始点
			
			this.startPoint = {
				x : startObj.offset().left + startObj.width()/2,
				y : startObj.offset().top
			}
			//结束点
			this.endPoint = {
				x : endObj.offset().left + endObj.width()/2,
				y : endObj.offset().top
			}
			//最高的
			this.topPoint = {
				x : this.endPoint.x - 100,
				y : this.endPoint.y - 50
			}
			//确定抛物线系数
			this.a = ((this.startPoint.y - this.endPoint.y) * (this.startPoint.x - this.topPoint.x) - (this.startPoint.y - this.topPoint.y) * (this.startPoint.x - this.endPoint.x)) / ((this.startPoint.x * this.startPoint.x - this.endPoint.x * this.endPoint.x) * (this.startPoint.x - this.topPoint.x)-(this.startPoint.x * this.startPoint.x - this.topPoint.x * this.topPoint.x) * (this.startPoint.x - this.endPoint.x));  
								
			this.b = ((this.endPoint.y - this.startPoint.y) - this.a * (this.endPoint.x * this.endPoint.x - this.startPoint.x * this.startPoint.x)) / (this.endPoint.x - this.startPoint.x);  
								
			this.c = this.startPoint.y - this.a * this.startPoint.x * this.startPoint.x - this.b * this.startPoint.x;
			return this;
		}
	})	