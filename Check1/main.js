///問１

let number = [2, 5, 12, 13, 15, 18, 22];

function isEven(){
    for (let i = 0; i < number.length; i++) {
        if(i % 2 === 0){   
            console.log(number[i] + "は偶数です");
}
    }
}

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