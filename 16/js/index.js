window.onload = function(){
	const tableEl = document.getElementById('tabGame');
	const timerEl = document.getElementById('timer');
	const restartEl = document.getElementById('restart');
	const startEl = document.getElementById('start');
	let paused = false;
	let now = 0;
	const rows = 5;
	const columns = 5;
	let time = 75;
	let restTime = time;
	startEl.addEventListener('click', gameStart);
	restartEl.addEventListener('click', gameRestart);
	tableEl.addEventListener('click', init);
	function gameStart(){
		startEl.style.display = 'none';
		restartEl.style.display = 'block';
		create();
		timerEl.innerHTML = 'Time left: ' + restTime;
		timer = setInterval(timeStep, 1000);
	}
	function gameRestart(){
		restTime = time;
		now = 0;
		clearInterval(timer);
		gameStart();
	}
	function timeStep(){
		restTime--;
		if(restTime > 0){
			timerEl.innerHTML = 'Time left: ' + restTime
		}
		else{
			clearInterval(timer);
			timerEl.innerHTML = 'You are loose';
			paused = true;
		}
	}
	function init(event){
		let targ = event.target;
		let check = targ.classList.contains('td') &&
			!targ.classList.contains('select') && !paused;
		if(check){
			let val = +targ.innerHTML;
			console.log(val, now);
			if(val === now + 1){
				now +=1;
				targ.classList.add('select');
				if(val === rows * columns){
					timerEl.innerHTML = 'You won';
					clearInterval(timer);
				}
			}
		}
	}
	function create(){
		startEl.style.display = 'none';
		let numbers = getNumbers();
		let html = '';
		for (var i = 0; i < rows; i++){
			html += '<tr>';
			for (var j = 0; j < rows; j++){
				html += '<td class="td" style="'
				+ getRandomStyle() + '">'
				+ getRandomNumber(); + '</td>';
			}
			html += '</tr>';
		}
		tableEl.innerHTML = html;
		function getRandomNumber(){
			let n = randomInterval(0, numbers.length - 1);
			let res = numbers[n];
			numbers.splice(n, 1);
			return res;
		}
	}
	function getRandomStyle(){
		return 'font-size:' + randomInterval(14, 40) + 'px;'
		+ 'color:' + getRandomColor();
	}
	function getNumbers(){
		let numbers = [];
		for (var i = 0; i < rows*columns; i++){
			numbers[i] = i + 1;
		}
		return numbers;
	}
	function randomInterval(min, max){
		return Math.round(Math.random() * (max - min) + min);
	}
	function getRandomColor(){
		return 'rgb(' + randomInterval(0, 255) + ',' + randomInterval(0, 255) + ',' + randomInterval(0, 255) + ')';
	}
}

