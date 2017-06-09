var elem = new Toggler("#section");
var button = document.querySelector("#button");

button.addEventListener("click", function() {

    if (elem.getElem().style.display == "none") {
        elem.show();
    } else {
        elem.hide();
    }

}, false);


function Toggler(selector) {

    this._element = document.querySelector(selector);

}

Toggler.prototype.getElem = function() {
    return this._element;
}

Toggler.prototype.show = function() {

    if (this._element.style.display === 'none') {
      this._element.style.display = 'inline-block';
   }
}

Toggler.prototype.hide = function() {
    if (this._element.style.display !== 'none') {
      this._element.style.display = 'none';
   }
}