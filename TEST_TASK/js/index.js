var br = document.getElementsByClassName("breakfast");
var din = document.getElementsByClassName("dinner");
var sup = document.getElementsByClassName("supper");
var quantityProducts = document.getElementById("quantityProducts");
var priceForProducts = document.getElementById("priceForProducts");
var addProductBtn = document.querySelectorAll("button.product-box__btn");
var p = 0;
var count = 0;

// функция которая находит родительский Елемент с слассом
// getClosest( "для какого елемента производиться поиск родителя" , "какой класс у родителя" );
// пример: getClosest(event.target, '.product-box__item');
var getClosest = function(elem, selector) {
	// Element.matches() polyfill
	if (!Element.prototype.matches) {
		Element.prototype.matches =
			Element.prototype.matchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector ||
			Element.prototype.oMatchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			function(s) {
				var matches = (this.document || this.ownerDocument).querySelectorAll(s),
					i = matches.length;
				while (--i >= 0 && matches.item(i) !== this) {}
				return i > -1;
			};
	}
	// Get the closest matching element
	for (; elem && elem !== document; elem = elem.parentNode) {
		if (elem.matches(selector)) return elem;
	}
	return null;
};

// функция которая мониторит нажатие элементов (всех)
document.addEventListener('click', function(event) {
	// если нажимается элемент с классом - ".product-box__btn" то выполняеться то что внутри if(){ ... }
	if (event.target.classList.contains('product-box__btn')) {
		var prPrice = getClosest(event.target, '.product-box__item');
		var meta = getClosest(event.target, '.product-box__meta');
		var qty = meta.getElementsByClassName("qty__item")[0];
		prPrice = prPrice.dataset.price;
		quantityProducts.innerHTML = Number(count) + Number(qty.value);
		priceForProducts.innerHTML = Number(priceForProducts.innerHTML) + Number(qty.value * prPrice);
		count = quantityProducts.innerHTML;
		// незабудь сделать подсчет конкретных товаров
	}
	// тут можно много ИФОВ делать !!!
}, false);

// for (var i = 0; i < addProductBtn.length; i++) {
// 	addProductBtn[i].onclick = function() {
// 		count++;
// 		quantityProducts.innerHTML = count;
// 		var dataprice = addProductBtn[i].dataset;
// 		var dprice = parseInt(dataprice.price, 10);
// 		priceForProducts.innerHTML = dataprice;
// 	}
// }

// Я БЫ ПЕРЕДЕЛАЛ (подумай хорошенько может что сам сможешь)
function sort(sel) {
	if (sel.options[sel.selectedIndex].value == "0") {
		for (var i = 0; i < br.length; i++) {
			br[i].style.display = "";
		}
		for (var j = 0; j < din.length; j++) {
			din[j].style.display = "";
		}
		for (var k = 0; k < sup.length; k++) {
			sup[k].style.display = "";
		}
	} else if (sel.options[sel.selectedIndex].value == "1") {
		for (var i = 0; i < br.length; i++) {
			br[i].style.display = "";
		}
		for (var j = 0; j < din.length; j++) {
			din[j].style.display = "none";
		}
		for (var k = 0; k < sup.length; k++) {
			sup[k].style.display = "none";
		}
	} else if (sel.options[sel.selectedIndex].value == "2") {
		for (var i = 0; i < br.length; i++) {
			br[i].style.display = "none";
		}
		for (var j = 0; j < din.length; j++) {
			din[j].style.display = "";
		}
		for (var k = 0; k < sup.length; k++) {
			sup[k].style.display = "none";
		}
	} else if (sel.options[sel.selectedIndex].value == "3") {
		for (var i = 0; i < br.length; i++) {
			br[i].style.display = "none";
		}
		for (var j = 0; j < din.length; j++) {
			din[j].style.display = "none";
		}
		for (var k = 0; k < sup.length; k++) {
			sup[k].style.display = "";
		}
	}
}

function price(sel) {
	var pric = parseInt(sel.value, 10),
		list = document.querySelectorAll(".product-box__item");
	for (var loop = 0; loop < list.length; loop++) {
		var dataset = list[loop].dataset,
			price = parseInt(dataset.price);
		if (pric != 0 && price > pric) { list[loop].style.display = "none"; } else { list[loop].removeAttribute("style"); }
	}
}

/*
	else if(sel.options[sel.selectedIndex].value == "30"){
		for(var loop = 0;loop < list.length;loop++){
			var dataset = list[loop].dataset;
			var price = parseInt(dataset.price);
			if(price > 30){
			list[loop].style.display = "none";
			}
		}
	}
	else if(sel.options[sel.selectedIndex].value == "50"){
		for(var loop = 0;loop < list.length;loop++){
			var dataset = list[loop].dataset;
			var price = parseInt(dataset.price);
			if(price > 50){
			list[loop].style.display = "none";
			}
		}
	}
	else if(sel.options[sel.selectedIndex].value == "100"){
		for(var loop = 0;loop < list.length;loop++){
			var dataset = list[loop].dataset;
			var price = parseInt(dataset.price);
			if(price > 100){
			list[loop].style.display = "none";
			}
		}
	}
	else if(sel.options[sel.selectedIndex].value == "150"){
		for(var loop = 0;loop < list.length;loop++){
			var dataset = list[loop].dataset;
			var price = parseInt(dataset.price);
			if(price > 150){
			list[loop].style.display = "none";
			}
		}
	}
}

/*function pick(sel){
	var email = "Ваш email";
	var name = "Ваше имя";
	var em = [];
	var n = [];
	em.push(prompt(email));
	if(email.length == "" || email.length == " "){
		alert("Введите свой email");
		pick(sel);
	}
	n.push(prompt(name));
	if(name.length == "" || name.length == " "){
		alert("Введите свой имя");
		pick(sel);
	}
	alert(em);
	alert(n);
	alert("Спасибо за заказ!");
}*/
/*let  modal = document.getElementById('myModal'),
	 	 btn = document.getElementById('myBtn'),
	 	 span = document.getElementByClassName('close');
	btn.onclick = function(){
		modal.style.display = "block";
	};
	span.onclick = function(){
		modal.style.display = "none";
	}
	window.onclick = function(event) {
		if(event.target == modal){
			modal.style.display = "none";
		}
	}

/*for(loop;loop <= array.length;loop++){
	if(array[loop] > 30){

		if(){
			br[].style.display = "none";
}
		else if(){
			din[loop].style.display = "none";

		else if(){
			sup[loop].style.display = "none";}
		}
	}
}

/*if(sel.options[sel.selectedIndex].value == "1"){
	for(loop = 0;loop<array.length;loop++){
		if(array[loop] > 30){
			alert("hello");
			array[loop].style.display = "none";
		}
		else{
			array[loop].style.display="";
		}
	}
}
/*for(var loop = 0;loop < array.length;loop++){
	//for(var loop = 0;loop < arr.length;loop++){
		if(sel.options[sel.selectedIndex].value == "0"){
			item.style.display = "";
		}
		//for(var loop = 0;loop < arr.length;loop++){
		else if(sel.options[sel.selectedIndex].value == "1"){
			if(item > 30){
				item.style.display = "none";
			}
			else{
				item.style.display = "";
			}
		}
		//for(var loop = 0;loop < arr.length;loop++){
		else if(sel.options[sel.selectedIndex].value == "2"){
			if(loop > 50){
				loop.style.display = "none";
			}
			else{
				loop.style.display = "";
			}
		}
		//for(var loop = 0;loop < arr.length;loop++){
		else if(sel.options[sel.selectedIndex].value == "3"){
			if(loop > 100){
				loop.style.display = "none";
			}
			else{
				loop.style.display = "";
			}
		}
		//for(var loop = 0;loop < arr.length;loop++)
		else if(sel.options[sel.selectedIndex].value == "4"){
			if(loop > 150){
				loop.style.display = "none";
			}
			else{
				loop.style.display = "";
			}
		}
}
}
alert(array);
array.forEach(function(item,i,array){

})
}
function price(sel){
	var a = br.getAttribute("data-price");
	var b = din.getAttribute("data-price");
	var c = sup.getAttribute("data-price");
	alert(a,b,c);
}*/
/*for(var i = 0;i<br.length;i++){
br[i].style.display = "none";}
*/
/*function sort(arr){
	arr.forEach(function(elem){

	})
}*/