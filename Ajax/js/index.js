window.onload = function(){
	getRate();
}
function getRate(){
	//https://api.coindesk.com/v1/bpi/currentprice.json
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json', false);
	xhr.send();
	if(xhr.status != 200){
		alert("Error");
	}
	else{
		console.log(JSON.parse(xhr.responseText));
	}
}