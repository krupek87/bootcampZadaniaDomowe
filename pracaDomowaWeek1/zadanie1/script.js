var products = 100;
	price = 5;
	 

if(products < 5 ) {
	discountPrice = (price * products);
	console.log('Podstawowa cena produktu to ' + discountPrice + 'zł.');
}else if (5 <= products && products <= 20) {
	discountPrice = (price * products) * 0.95;
	console.log('Podstawowa cena produktu to ' + (price * products) + 'zł, po obniżce to ' + discountPrice + 'zł.');
}else if (21 <= products && products <= 50) {
	discountPrice = (price * products) * 0.90;
	console.log('Podstawowa cena produktu to ' + (price * products) + 'zł, po obniżce to ' + discountPrice + 'zł.');
}else if (51 <= products && products <= 100) {
	discountPrice = (price * products) * 0.85;
	console.log('Podstawowa cena produktu to ' + (price * products) + 'zł, po obniżce to ' + discountPrice + 'zł.');
}else if(products > 100) {
	discountPrice = (price * products) * 0.8;
 console.log('Podstawowa cena produktu to ' + (price * products) + 'zł, po obniżce to ' + discountPrice + 'zł.');
} else {
	console.log("Podałeść niewłaściwą ilość produktów!")
}


 

(price * products)