const rpn = (expression : string) => {
    let expr = removeNegate(splitExpresion(expression));
    let stackOperations:string|number[] = [];

    try {
        for (let i = 0; i < expr.length; i++) {
            if (isNaN(expr[i])) {
                console.log("no ", expr[i]);
                let a = Number(stackOperations.pop());
                let b = Number(stackOperations.pop());
                let c = compute(b, a, expr[i]);
                if (c === Infinity) {
                    return "?";
                }
                stackOperations.push(c);
            } else {
                console.log("yes ", expr[i]);
                stackOperations.push(expr[i]);
            }
        }
    } catch (error) {
        console.log(error);
        return error;
    }

    if (stackOperations.length != 1) {
        return "INVALID";
    }

    return peek(stackOperations);
};

function peek(array:string|number[]):number|string {
    return array[array.length - 1]
}

function splitExpresion(expression : string): string[] {
    return expression.split(" ");
}

function removeNegate(tabExpr : string[]): any {
    let tmp = [];
    for (let i = 0; i < tabExpr.length; i++) {
        if (tabExpr[i] !== "NEGATE") {
            tmp.push(tabExpr[i]);
        } else {
            tmp[i - 1] = "-" + tmp[i - 1];
        }
    }
    return tmp;
}

const compute = (b : number, a : number, operator : string) : number => {
    switch (operator) {
        case "*":
            return b * a;
            break;
        case "-":
            return b - a;
            break;
        case "+":
            return b + a;
            break;
        case "/":
            return b / a;
            break;
        case "MOD":
            return b % a;
            break;

        default:
            break;
    }
};

export default rpn;
