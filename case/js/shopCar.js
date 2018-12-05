$(document).ready(function(){
	new Jiesuan().init();
})

//购物车结算
 function Jiesuan(){
 	this.sl=$(".sl");
	var oImg=localStorage.src,
		oName=localStorage.name,
		oCount=localStorage.count,
		oPrice=localStorage.price;
	
 	this.init=function(){
 		this.sl.html(`<div class="shopp">
						<p><input type="checkbox" /></p>
						<p style="width:320px;"><img style="width:100px;
							height:100px;margin-right:12px;float:left;" src="../img/${oImg}" alt="" /><b><span class="name">${oName}</span><a class="xsq" href="">此商品在中国有售</a></b></p>
						<p></p>
						<p style="width:175px;font-weight:bold">￥${oPrice}</p>
						<p class="shu" >
							<input type="text" value="-"/>
							<input type="text" value="${oCount}"/>
							<input type="text" value="+"/>
						</p> 
						<p style="width:180px;color:red;font-weight:bold"></p>
						<p><a href=""><img src="../img/hsz.jpg"/></a></p>
					</div>`)
 	}
 	
 	
 }
