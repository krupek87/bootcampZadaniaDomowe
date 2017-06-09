function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

class Lotek {

    constructor() {

        this.numbers = [];
        this.getRandom();

    }

    getRandom() {

        let random;

        for(let i = 0; i < 6; i++) {
            random = getRandomNumber(1, 49);

            while(this.numbers.indexOf(random) !== -1) {
                random = getRandomNumber(1, 49);
            }

            this.numbers.push(random);

        }

    }

    checkNumbers(...numbers) {

        let hit = [];

        for(let number of numbers) {
            if( this.numbers.includes(number) ) {
                hit.push(number);
            }
        }

        return {
            numbers: hit,
            count: hit.length
        };

    }

    *[Symbol.iterator]() {
        yield *this.numbers;
        // for(let number of this.numbers) {
        //     yield number;
        // }
    }

}

let shot = new Lotek();

let { numbers: hit, count } = shot.checkNumbers(2, 13, 15, 22, 34, 40);

// console.log(hit, count);

let numbers = [...shot];

for(let number of shot) {
    console.log(number);
}

const s = Symbol("pozornie ukrywa właściwość");

let o = {
    [s]: "jakaś wartość"
};

let symbols = Object.getOwnPropertySymbols(o);

for(let symbol of symbols) {
    console.log( o[symbol] );
}