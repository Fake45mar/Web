var get = {
	range:document.getElementsByClassName('range'),
	text:document.getElementsByClassName('text'),
	block:document.getElementById('block')
};
for(let i = 0;i < get.range.length;i++){
	get.range[i].onchange = function(){
		let num = get.range[i].value;
		get.text[i].value = num;
		switch(i){
			case 0:
				get.block.style.borderTopLeftRadius = get.range[i].value + 'px ';
			break;
			case 1:
				get.block.style.borderTopRightRadius = get.range[i].value + 'px ';
			break;
			case 2:
				get.block.style.borderBottomLeftRadius = get.range[i].value + 'px ';
			break;
			case 3:
				get.block.style.borderBottomRightRadius = get.range[i].value + 'px ';
			break;}
	}
}
