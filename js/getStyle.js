function getStyle(obj,attr){
	if (obj.currentStyle) {
		return obj.currentStyle[attr];
	}else{
		return window.getComputedStyle(obj)[attr];
	}
}