let numbers = [2, 5, 12, 13, 15, 18, 22];
//ここに答えを実装してください。↓↓↓
function isEven(num) {
    console.log(num + 'は偶数です');
    return num;
}
for (let a = 0; a < numbers.length; a++) {
    if (numbers[a] % 2 === 0) {
        let one = isEven(numbers[a]);
    }
}

class Car {
    constructor(ガソリン, ナンバー) {
        this.ガソリン = ガソリン;
        this.ナンバー = ナンバー;
    }
    getNumGas() {
        console.log("ガソリンは" + this.ガソリン + "です。ナンバーは" + this.ナンバー + "です");
    }
}
let isCar = new Car("150円", "1234");
isCar.getNumGas();