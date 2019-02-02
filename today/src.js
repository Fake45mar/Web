window.onload = function(){
	var date = new Date();
	var day = date.getDay();
	alert(showDate(day));
}
function showDate(elem){
	var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
	return days[elem];
}