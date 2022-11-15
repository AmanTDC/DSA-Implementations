
class Stack{
    // const array;
    // let top;
    constructor(){
        this.top = -1;
        this.array = [];
        // this.array = this.array.bind(this)
        // console.log(this)
    }
    push(value){
        // console.log(this.array)
        this.array[++this.top] = value;
    }
    pop(){
        if(!this.isEmpty()){
            
            return this.array[this.top--]; 
        }
        else return null;
    }
    peek(){
        if(!this.isEmpty())
            return this.array[this.top];
        return null;
    }
    isEmpty(){
        if(this.top==-1)
            return true;
        return false;
    }
    toString(){
        for (let val of this.array){
            console.log(val);
        }
    }
}


module.exports = Stack