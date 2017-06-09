(function() {


var butt = document.querySelector("#btn"),
	message = document.querySelector("#secret");
	isHidden = true;

function buttonText(){

	var curText = butt.textContent;
	butt.textContent = butt.dataset.btnText;
	butt.dataset.btnText = curText;
}

function showMessage() {
		buttonText(butt);

	if(isHidden) {
		isHidden = false;
		message.style.display = "block";
		return;
	}

	isHidden = true;
	message.style.display = "none";
	return;

}


butt.addEventListener("click",showMessage, false );

})();