function preloadImages(urls) {

    let length = urls.length,
        counter = 0;

    const p = new Promise(function(resolve, reject) {

        for(let url of urls) {

            let img = document.createElement("img");

            img.onload = function() {
                if(++counter === length) {
                    resolve(urls);
                }
            }

            img.onerror = function() {
                reject( new Error(`Nie udało się załadować obrazka z adresu: ${url}`) );
            }

            img.src = url;

        }

    });

    return p;

}

const urls = [
    "http://code.eduweb.pl/kurs-jquery/images/photo-1.jpg",
    "http://code.eduweb.pl/kurs-jquery/images/photo-2.jpg",
    "http://code.eduweb.pl/kurs-jquery/images/photo-3.jpg",
    "http://code.eduweb.pl/kurs-jquery/images/photo-4.jpg"
];

const button = document.querySelector("#button");
const container = document.querySelector("#images");

async function showImages(urls) {

    try {

        let loadedUrls = await preloadImages(urls);

        let docFragment = document.createDocumentFragment();

        for(let url of urls) {
            let img = document.createElement("img");

            img.src = url;

            docFragment.appendChild(img);
        }

        container.appendChild(docFragment);

    } catch(e) {
        console.log(e.message);
    }

}

button.onclick = function() {

    showImages(urls);

};