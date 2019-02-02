let modalwin = document.getElementById('modalwin'),
butt = document.querySelector('.button');
exit = document.getElementById('exit'),
created = false,
N = 1000;
butt.addEventListener('click', show);
exit.addEventListener('click', hide);
function show(){
	// if(pageYOffset > N - 100 && pageYOffset < N + 100 && !created){
		modalwin.style.display = "block";
		modalPosition();
		created = true;
	// }
}
function hide(){
	modalwin.style.display = "none";
}
window.addEventListener('resize', modalPosition);
function modalPosition(){
	if(modalwin.style.display !== 'none'){
		var b = document.body;
		modalwin.style.left = (b.offsetWidth - modalwin.offsetWidth) / 2 + 'px';
		modalwin.style.top = (b.offsetHeight - modalwin.offsetHeight) / 10 + 'px';
	}
}
