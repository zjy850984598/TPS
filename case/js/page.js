//放大镜
	$(document).ready(function(){
		new Zoom().init().move();
	})//$(function(){
		
//	})
 function  Zoom(){
 	this.xlist=$("ol>li");
 	this.mlist=$(".middle>li");
 	this.blist=$(".big>li");
	this.mask=$("#mask");
	this.big=$(".big");
	this.init=function(){
		var that=this;
		this.xlist.mouseenter(function(){
			that.mlist.eq($(this).index()).css("z-index",9).siblings("li").css("z-index",0);
			that.blist.eq($(this).index()).css("z-index",9).siblings("li").css("z-index",0);
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
				that.blist.css({"left":-x1,"top":-y1})
				
		})
	}
 }
