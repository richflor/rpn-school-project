class Stack {

    private items:Array<string|number>
  
    constructor()
    {
        this.items = [];
    }
  
    public push(elem:string|number) {
      this.items.push(elem);
    }

    public negative() {
        this.items[this.items.length - 1] = - this.items[this.items.length - 1];
    }

    public pop() {
        if (this.items.length == 0) throw "Stack Underflow"
        return this.items.pop();
    }
  
    public peek() {
        return this.items[this.items.length - 1];
    }

    public length() {
        return this.items.length;
    }

    public reverse() {
        this.items = this.items.reverse();
    }

    // public flush(size:number) {
    //     if (this.items.length < size) throw "flush size bigger than stack length"
    //     for (let i = 0; i < this.items.length; i++) {
    //         this.pop()
    //     }
    // }
}

export default Stack