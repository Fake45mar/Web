window.onload = function(){
	const arr = [12, 12 , 33, 44, -21, -2, -3];
	let x = arr.filter(function(number){
		return number < 0
	})
	alert(x);
}

