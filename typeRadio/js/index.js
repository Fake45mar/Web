var radio = document.getElementsByClassName("radio");
var btn = document.getElementById("btn");
for(let i = 0;i < radio.length;i++){
	radio[i].onclick = function(){
	btn.onclick = function(){
		alert(i);
	}	
	}
}

