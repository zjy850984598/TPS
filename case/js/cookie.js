//封装:将一个功能写到一个函数中   
//设置cookie
function setCookie(key,value,day){
	if( day ){
		var now = new Date();
		now.setDate( now.getDate()  + day );
		document.cookie = `${key}=${value};expires=${now}`;
	}else{
		document.cookie = `${key}=${value}`;
	}
}
//获取cookie   
function getCookie(key){
	var str = document.cookie;
	if( str ){
		var arr = str.replace(/\s+/g,"").split(";"); 
		for( var i = 0 ; i < arr.length ; i++ ){
			var item = arr[i].split("=");
			if( item[0] == key ){
				return item[1];
			}
		}
		//如果有cookie，但cookie中没有key  返回""
		return "";
	}
	//如果没有cookie  返回 ""
	return "";
}

//删除cookie
function removeCookie( key ){
	setCookie( key , "" , -1 );
}
