const expressionSeparator = " ";

const rpn = (expression : string) => {
    const arrayExpressions = removeNegate(expression.split(expressionSeparator));
    let stackOperations:string|number[] = [];

    try {
        for (let i = 0; i < arrayExpressions.length; i++) {
            if (isNaN(arrayExpressions[i])) {
                console.log("no ", arrayExpressions[i]);
                let a = Number(stackOperations.pop());
                let b = Number(stackOperations.pop());
                let c = compute(b, a, arrayExpressions[i]);
                if (c === Infinity) {
                    return "?";
                }
                stackOperations.push(c);
            } else {
                console.log("yes ", arrayExpressions[i]);
                stackOperations.push(arrayExpressions[i]);
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

function removeNegate(tabExpr : string[]): any {
    let tmp = [];
    let offset = 0
    for (let i = 0; i < tabExpr.length; i++) {
        if (tabExpr[i] !== "NEGATE") {
            tmp.push(tabExpr[i]);
            console.log("ty ",tabExpr[i])
        } else {
            tmp[i - 1 - offset] = "-" + tmp[i - 1 - offset];
            offset++
            console.log("bo ",tmp)
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
