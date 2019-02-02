window.onload = ()=>{
	 function calcLetters(text){  //Подсчёт символов
	 	if(text.length === 0){
	 		alert("Введена пустая строка");
	 	}
	 	else{
	 		alert(text.length);
	 	}
	 }
	 let input = prompt("Введите слово");
	 calcLetters(input);
	 function round_number(num, k){  //Округление числа
	 	if(num === 0){
	 		alert("Введён ноль")
	 	}
	 	else{
	 		alert(num.toFixed(k));
	 	}
	 }
	 let number = +prompt("Введите число");
	 let space = +prompt("Введите степень округления");
	 round_number(number, space);
	 function firstBigLetter(text){  //Большая первая буква
	 	if(text.length == 0){
	 		alert("Введена пустая строка");
	 	}
	 	else{
	 		alert(text[0].toUpperCase() + text.substr(1));
	 	}
	 }
	 input = prompt("Введите слово");
	 firstBigLetter(input);
	 function check_spam(text){    //Проверка спама
	 	let str = text.toLowerCase();
	 	return !!(~str.indexOf('buy') || ~str.indexOf('xxx'));
	 }
	 	alert(check_spam('Buy candies'));
	 	alert(check_spam('free xxxxx'));
	 	alert(check_spam('innocent rabbit'));
	 function checkSpam(str) {  //----------------------------Самописный вариант спама
	 	var lowerStr = str.toLowerCase();

	 	if(+str.indexOf('buy') >= 0 || +str.indexOf('xxx') >= 0){
	 		return true;
	 	}
	 	else{
	 		return false;
	 	}
	 }

	 alert( checkSpam('buy candies') );
	 alert( checkSpam('free xxxxx') );
	 alert( checkSpam("innocent rabbit"));
	 function truncate(str, maxlength){    //Ограничение показа символов
	 	if(str.length > maxlength){
	 		alert(str.substr(0, maxlength) + "...");
	 	}
	 	else{
	 		alert(str);
	 	}

	 }
	 input = prompt("Введите слово");
	 space = +prompt("Введите степень округления");
	 truncate(input, space);
	 function object(){     Объект
	 	let obj = {
	 		name:"Vasya",
	 		surname:"Petrov"
	 	};
	 	obj.name = "Sergey";
	 	delete obj.name;
	 	 alert(obj.name);
	 }
	 object();
	 function obj(sel){     //Объект, наличие свойств
	 	for(var key in sel){
	 		return false;
	 	}
	 	return true;
	 }
	 let ob = {name:"Serg"};
	 alert(obj(ob));
	 function salaries(){     //Объект, сумма свойств
	 	let bool = false;
	 	let obj = {
	 		"Vasya":200,
	 		"Petya":300,
	 		"Dasha":250
	 	};
	 	var result = 0;
	 	for(var key in obj){
	 		bool = true;
	 	}
	 	if(bool){
	 		for(var sel in obj){
	 			result +=obj[sel];
	 		}
	 	}
	 		return result;
	 }
	 alert(salaries());
	 function minMax(){     //Объект, минимальное и максимальное значение
	 	let bool = false, result = 0,
	 	obj = {
	 		"Vasya":200,
	 		"Petya":300,
	 		"Dasha":250
	 	};
	 	var arr = Object.keys( obj ).map(function ( key ) { return obj[key]; });
	 	var min = Math.min.apply( null, arr );
	 	var max = Math.max.apply( null, arr );
	 	alert("Минимум " + min + " " + "Максимум " + max);
	 }
	 minMax();
}