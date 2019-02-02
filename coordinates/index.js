document.querySelector('#test').onmousemove = function(event){
	console.log(event);
	document.querySelector('#offx').innerHTML = event.offsetX;
	document.querySelector('#offy').innerHTML = event.offsetY;
}
