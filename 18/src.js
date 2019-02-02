var TextElements = document.getElementsByName("ptext1");
var nol = 1;

function displayP(){
	nol++;
  for(var i=0,max=TextElements.length;i<max;i++){
    if(nol%2==0){TextElements[i].style.display = "none";}
    else{TextElements[i].style.display = "block";}
  }
}

setInterval(()=>{displayP();},1000);
// setInterval(()=>{displayP(null++);},2000);