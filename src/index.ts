class StackArray{
  Stack = [];
  peek: number;
  length:number
  constructor(){
      this.Stack = []
      this.length = 0
  }

  inCome(value : number){
      this.Stack.push(value)
      this.peek = value
      this.length +=1
  }

  outCome(){
      let tmp = this.Stack.pop()
      this.peek = this.Stack[this.Stack.length - 1]
      this.length -=1
      return tmp
  }

  getPeek(){
      return this.peek
  }
}

function splitExpresion(expression : string):any{
  return expression.split(' ')
}

function noNegate(tabExpr:[]):any{
  let tmp = []
  for (let i = 0; i < tabExpr.length; i++) {
    if (tabExpr[i] !== "NEGATE") {
      tmp.push(tabExpr[i])
    }else{
      tmp[i-1] =  "-"+tmp[i-1]
    }
  }
  return tmp
}

const computeSingle = (b:number,a:number,operator:string):number =>{
  switch (operator) {
    case "*":
      return b*a
    break;
    case "-":
      return b-a
    break;
    case "+":
      return b+a
    break;
    case "/":
      return b/a
    break;
    case "MOD":
      return b%a
    break;

    default:
      break;
  }
}

const rpn = (expression: string) => {
let expr = noNegate(splitExpresion(expression))
let stackOperande = new StackArray()

try {
  for (let i = 0; i < expr.length; i++) {
    if(isNaN(expr[i])){
      console.log("no ",expr[i])
      let a = Number(stackOperande.outCome())
      let b = Number(stackOperande.outCome())
      let c = computeSingle(b,a,expr[i])
      if (c === Infinity){
        return '?'
      }
      stackOperande.inCome(c)
    }
    else{
      console.log("yes ",expr[i])
      stackOperande.inCome(expr[i])
    }
  }
} catch (error) {
  console.log(error)
  return error
}

if (stackOperande.length != 1) {
  return "INVALID"
}
return stackOperande.getPeek()
};

export default rpn;
