///問１

let numbers = [2, 5, 12, 13, 15, 18, 22];

function isEven(num){
        return num % 2===0;
            
}
let num = numbers.filter(isEven);
console.log(num + "は偶数です");
    


isEven();

///問２


class Car {

    constructor(gasorin, num) {
        this.gasorin = gasorin;
        this.num = num;
    }

    getNumGas() {
        console.log(`ガソリンは${this.gasorin}です。、ナンバーは${this.num}です。`);
    }
}

let nisaan = new Car('レギュラー', 5881);
nisaan.getNumGas();