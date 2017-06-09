(function() {

    let button = document.querySelector("#button"),
        output = document.querySelector("#output");

    const map = new Map();

    window.mapa = map;

    function showMore() {

        // this.onclick = null;
        // this.parentNode.removeChild(this);

        // return;

        let obj = map.get(this);

        this.innerHTML = `
            ${obj.name}
            <a href="mailto:${obj.email}">${obj.email}</a>
        `;

    }

    function renderData(data) {

        if( !Array.isArray(data) ) return;

        let ul = document.createElement("ul");

        for(let obj of data) {

            let li = document.createElement("li");

            li.textContent = obj.name;
            li.onclick = showMore;

            map.set(li, obj);

            ul.appendChild(li);

        }

        output.appendChild(ul);

    }

    button.addEventListener("click", function(e) {

        getJSON("http://code.eduweb.pl/bootcamp/json/")
            .then( data => renderData(data) )
            .catch( err => console.log(err.message) );

    }, false);

})();