class Calc {

    static add(x:number, y:number) {
        return y + x;
    }

    static minus(x:number, y:number) {
        return y - x;
    }

    static mult(x:number, y:number) {
        return y * x;
    }

    static div(x:number, y:number) {
        if (x === 0) throw "Can't divide by 0";
        return y / x;
    }

    static mod(x:number, y:number) {
        return y % x;
    }
}

export default Calc;