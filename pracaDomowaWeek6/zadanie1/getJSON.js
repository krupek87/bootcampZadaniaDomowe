function getJSON(url, success, failure) {

    const xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);

    xhr.setRequestHeader("Accept", "application/json");

    const p = new Promise(function(resolve, reject) {

        xhr.onload = function() {

            if(xhr.status == 200) {
                try {
                    resolve( JSON.parse(xhr.responseText) );
                } catch(e) {
                    failure(e);
                }
            } else {
                reject( new Error("Wystąpił błąd!. Kod statusu HTTP to: " + xhr.status) );
            }

        };

        xhr.onerror = function(e) {
            reject( new Error("Wystąpił nieoczekiwany błąd!") );
        };

    });

    xhr.send();

    return p;

}