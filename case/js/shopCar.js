$(document).ready(function(){
	new Jiesuan().init();
	new Jiesuan().sumJ().remove().all().scxz().en();
})

//购物车结算
 function Jiesuan(){
 	this.sl=$(".sl");
 	this.car=$(".char");
 	this.qb=$(".tt>span");
 	this.jj=$(".jj");
 	this.nr=$(".nr");
 	this.rem=$(".qrt");
 	this.prc=$(".prc");
 	this.qx=$(".qx");
 	this.bx=$(".bx");
 	this.xc=$(".scxz");
 	this.mon=$(".kk");
// 	this.str=localStorage.data;
//	this.arr=JSON.parse(this.str);

 	this.init=function(){

		var htm="",
		str=localStorage.data,
		arr=JSON.parse(str);	
 		for(var i=0;i<arr.length;i++){
 			
 			var brr=arr[i].price.split("￥");

 			var oPrice=brr[1];

 			htm+=`<div class="shopp">
						<p><input class="bx" type="checkbox" /></p>
						<p style="width:320px;"><img style="width:100px;
							height:100px;margin-right:12px;float:left;" src="../img/${arr[i].src}" alt="" /><b><span class="name">${arr[i].name}</span>
							<span  class="pid" data-id="${arr[i].id}" style="display:block;">编号:${arr[i].id}</span>
							<a class="xsq" href="">此商品在中国有售</a></b></p>
						<p></p>
						<p style="width:175px;font-weight:bold">${arr[i].price}</p>
						<p class="shu" >
							<input class="jj" type="text" value="-"/>
							<input class="nr"type="text" value="${arr[i].count}"/>
							<input class="jj" type="text" value="+"/>
						</p> 
						<p class="prc" style="width:180px;color:red;font-weight:bold">${arr[i].count*oPrice}</p>
						<p><a class="qrt" href="javascript:;"><img src="../img/hsz.jpg"/></a></p>
					</div>`
 		}
 		
 		this.sl.html(htm);
		this.gx()
 	}
 	//更新界面
 	this.gx=function(){
 		
 		this.car.html(`购物车(${this.count()})`);
 		this.qb.html(this.count()); 		
 	}
 	//获取count总个数
 	this.count=function(){
 		var strCount="";
 		var cc=localStorage.data;
 		var qrr=JSON.parse(cc);
 		for(var i=0;i<qrr.length;i++){
 			strCount+=qrr[i].count;
 		}
 		return strCount;
 	}
 	//加减功能
 	this.sumJ=function(){
 		var that=this;
 		this.jj.click(function(){ 			 			
 			if($(this).val()=="-"&&that.nr.val()==0){
 				that.nr.val()=0;
 				return;
 			}
   			that.nr.val(eval(that.nr.val()+$(this).val()+1))
   			var 	pid=$(this).parent().parent().find(".pid").data("id");
   			var str=localStorage.data;
			var arr=JSON.parse(str);
   			for(var i=0;i<arr.length;i++){
   				if(pid==arr[i].id){
   					arr[i].count=that.nr.val();
   					var brr=JSON.stringify(arr);
   					localStorage.data=brr;
   					//更新界面
   					var brr=arr[i].price.split("￥");
 					var oPrice=brr[1];
   					that.prc.html(arr[i].count*oPrice)
   					that.gx();
   					that.money()
   				}
   			}
   			
 		})
 		return this;
 	}	
 	//删除功能
 	this.remove=function(){
 		var that=this;
 		that.rem.click(function(){
 			var pid=$(this).parent().parent().find(".pid").data("id");
 			
			if(!confirm("确定删除吗")){
				return;
			}
 			var str=localStorage.data;
			var arr=JSON.parse(str);
   			for(var i=0;i<arr.length;i++){
   				console.log(arr[i].id)
   				if(pid==arr[i].id){
   					arr.splice(i,1);
   					$(this).parent().parent().remove()
   					var brr=JSON.stringify(arr);  					
   					localStorage.data=brr;
   					that.gx();
   				}
   			}
 		})
 		return this;
 	}
 	//全选
 	this.all=function(){
 		var that=this;
 		this.qx.click(function(){
 				that.bx.prop("checked",$(this).prop("checked"))
 				that.money();

 		})
 			
 			
 		return this;
 	}
 	//删除选中
 	this.scxz=function(){
 		var that=this;
 		this.xc.click(function(){
 			
 			if(that.bx.prop("checked")){
 				
 				if(!confirm("确定删除吗")){
				return;
				}
 				var pid=that.bx.parent().parent().find(".pid").data("id");
	 			var str=localStorage.data;
				var arr=JSON.parse(str);
	   			for(var i=0;i<arr.length;i++){
	   				console.log(pid)
	   				if(pid==arr[i].id){
	   					arr.splice(i,1);
	   					that.bx.parent().parent().remove();
	   					var brr=JSON.stringify(arr);  					
	   					localStorage.data=brr;
	   					that.gx();
	   				}
	   			}
 				
 			}
 		})
 		return this;
 	}
 	//money功能
 	this.money=function(){
 		var that=this;
 		var count="";
 		var sum="";		
		this.bx.each(function(){
			if($(this).prop("checked")){
 				count+=$(this).parent().parent().find(".nr").val();
 				sum+=$(this).parent().parent().find(".prc").html();		
				console.log(count)			
   				that.mon.css("background","red");
				$(".la").html(count);
 				$(".jg").html("¥"+sum);
			}else{
				that.mon.css("background","gray");
				$(".la").html(0);
 				$(".jg").html(0);
			}
		})
 		
 		return this;
 		
 	}
 	//点击每一个商品复选框 调用结算功能
 	this.en=function(){
 		var that=this;
 		var count="";
 		var sum="";	
 		
 		this.bx.click(function(){
 			if($(this).prop("checked")){
 				that.money()
 			}else{
 				count+=$(this).parent().parent().siblings($(this)).val();				console.log(count)
 				sum+=$(this).parent().parent().find(".prc").html();	
// 				that.mon.css("background","red");
//				$(".la").html(count);
// 				$(".jg").html("¥"+sum);
 			}
 		})
 	}
 	
 	
 }
