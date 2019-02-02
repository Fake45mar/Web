var place = document.getElementById("place");
var move = document.getElementById("move");
window.onload = function(){
	var rect = move.getBoundingClientRect();
	var rect1 = {
			t:rect.top,
			b:rect.bottom,
			l:rect.left,
			r:rect.right};
	var rect2 = move.getBoundingClientRect();
		var rect2 = {
			h:move.offsetTop,
			w:move.offsetLeft};
	var wid = parseInt(place.offsetWidth - move.offsetWidth); 
	var heig = parseInt(place.offsetHeight - move.offsetHeight);
	var i = 0;
	setInterval(function(){
		while(i < heig){
			if(i < heig){
				i++;
				move.style.top = parseInt(rect1.t+i)+"px";
				console.log(rect2.h)
			}
		break;}
			if(rect2.h === 520){
				alert(" ");
				while(i > 8){
					if(i > 8){
						i--;
						//alert(i)
						move.style.bottom = parseInt(rect1.b - i)+"px";
				}break;}
				}
			},2);
	//setInterval(function(){
		//move.rect = heig;
		/*while(i > 0){
			if(i > 0){
				i--;
				move.style.bottom = parseInt(i - rect1.b)+"px";
			}
		break;}},100);*/
}