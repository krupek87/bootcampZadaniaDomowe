(function() {

if("myFrom" in Array) {
    return;
}

Array.myFrom = function(arrayLike, mapFn, thisArg) {

    var arr = [];

    if(arrayLike == null) {
        throw new Error("Cannot convert undefined or null to object");
    }

    if( !("length" in arrayLike) ) {
        return arr;
    }

    arr = [].slice.call(arrayLike);

    // for(var i = 0; i < arrayLike.length; i++) {
    //     arr.push(arrayLike[i]);
    // }

    if(typeof mapFn === "function") {
        arr = arr.map(mapFn, thisArg);
    }

    return arr;

};

})();

var lis = document.querySelectorAll("#output li");

var lisArr = Array.myFrom(lis, function(li) {
    console.log(this);
    return li.textContent;
}, {});