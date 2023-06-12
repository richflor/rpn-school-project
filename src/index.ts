import Stack from "./Stack";
import Calc from "./Calc";

function rpn(expression:string) {
    try {
        const arrayExpressionElements = arrayTostring(expression);

        const expressionStringStack = createExpressionStringStack(arrayExpressionElements)

        let result:number;

        while (expressionStringStack.length() > 0) {
            console.log("l is " + expressionStringStack.length())
            let numberStack = createNumberStack(expressionStringStack);
            console.log(`n = ${numberStack.length()}`)
            let operandStack = createOperandStack(expressionStringStack);
            console.log(`op = ${operandStack.length()}`)
    
            while (numberStack.length() > 1) {
                let x = numberStack.pop();
                console.log(`x = ${x}`)
                let y = numberStack.pop();
                console.log(`y = ${y}`)
                let operand = operandStack.pop()
    
                if(typeof x === "number" && typeof y === "number" && typeof operand === "string") {
                    result = calc(x, y, operand);
                } else {
                    throw "type error"
                }
    
                numberStack.push(result)
                console.log(`r = ${result}`)
            }

            console.log("lop = " + expressionStringStack.length())

            if (expressionStringStack.length() > 0) {
                expressionStringStack.push(result)
            }
        }

        console.log("END")

        return result;

    } catch (error) {
        console.log(error)
    }
}


function arrayTostring(expression:string) {
    return expression.split(" ")
}

function createExpressionStringStack(array:string[]) {
    const expressionStringStack = new Stack();
    array.reverse().forEach(element => {
        expressionStringStack.push(element)
    });

    return expressionStringStack;
}

function createNumberStack(expressionStringStack:Stack) {
    const numberStack = new Stack();

    let negate = false;

    for (let i = 0; i <= expressionStringStack.length(); i++) {
        const element = expressionStringStack.peek();

        if (element === "NEGATE") {
            negate = true;
            expressionStringStack.pop();
            console.log("negate")
            continue;
        }

        const number = negate ? -Number(element) : Number(element);

        if (number < 0) {negate = false; console.log("reset")};

        if (!isNaN(number)) {
            numberStack.push(number)
            expressionStringStack.pop();
            console.log(number)
        } else {
            break;
        }
    }
    // console.log("peek " + expressionStringStack.peek())
    return numberStack;
}

// function createNumberStack(array:string[]) {
//     const numberStack = new Stack();
//     for (const element in array) {
//         const number = Number(element);
//         if (!isNaN(number)) {
//             numberStack.push(number)
//         } else {
//             break;
//         }
//     }
//     return numberStack;
// }

function createOperandStack(expressionStringStack:Stack) {
    const operandStack = new Stack();
    const arrayOperands:any[] = [];
    for (let i = 0; i <= expressionStringStack.length(); i++) {
        // console.log("peek " + expressionStringStack.peek())
        const element = expressionStringStack.peek();
        const number = Number(element);
        if (isNaN(number)) {
            arrayOperands.push(element)
            expressionStringStack.pop();
        } else {
            break;
        }
    }
    arrayOperands.reverse().forEach(element => {
        operandStack.push(element)
        console.log(element)
    });
    return operandStack;
}

// function createOperandStack(array:string[]) {
//     const operandStack = new Stack();
//     for (const element in array) {
//         const number = Number(element);
//         if (isNaN(number)) {
//             operandStack.push(element)
//         } else {
//             break;
//         }
//     }
//     return operandStack;
// }


// FORMER
// function createNumberStack(array:string[]) {
//     const numberStack = new Stack();
//     array.forEach(element => {
//         const number = Number(element);
//         if (!isNaN(number)) {
//             numberStack.push(number)
//         }
//     });
//     return numberStack
// }

// function createOperandStack(array:string[]) {
//     const operandStack = new Stack();
//     const operands:string[] = []
//     array.reverse().forEach(element => {
//         if (isNaN(Number(element))) {
//             operandStack.push(element)
//         }
//     });
//     return operandStack
// }

function calc(x:number, y: number, operand:string) {
    let result:number

    switch (operand) {
        case "+":
            result = Calc.add(x,y);
            break;
        case "-":
            result = Calc.minus(x,y);
            break;
        case "*":
            result = Calc.mult(x,y);
            break;
        case "/":
            result = Calc.div(x,y);
            break;
        case "MOD":
            result = Calc.mod(x,y);
            break;
        default:
            throw `${operand} is invalid as an operand`
    }
    return result;
}

export default rpn;
