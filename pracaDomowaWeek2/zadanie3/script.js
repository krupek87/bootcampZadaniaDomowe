window.onload = function(){





var button = document.querySelector("#action"),
	toStart = document.querySelector("#counter")

function stopAction() {

 		alert("BOOM!");
        console.log("Odliczanie zakończone!");
        var toStart = document.createElement('p'),
            text = document.createTextNode("Odliczanie zakończone!");
            toStart.appendChild(text);
    
	document.body.insertBefore(toStart, button);
}

function countDown(counter){
	counter--;
	toStart.innerHTML = counter;
	return counter;
}

function startAction(value, endAction){

	var counter = countDown(value);

	if(!counter){
		return endAction(counter);
	} else {
		setTimeout(function(){startAction(counter, endAction);}, 1000);
	}



}



button.addEventListener("click", function(){
	startAction(10, stopAction);
})


}