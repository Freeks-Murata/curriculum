class Taiyaki {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    inside() {
        console.log("中身は" + this.a + "です");
        console.log("中身は" + this.b + "です");
        console.log("中身は" + this.c + "です");
    }
}

let make = new Taiyaki("あんこ", "クリーム", "チーズ");
make.inside();