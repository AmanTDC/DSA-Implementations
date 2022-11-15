class Queue{
    constructor(){
        this.array = []
        this.front = 0;
        this.back =  -1;
    }
    enqueue(value){
        if(this.front==-1){
            this.array[++this.back] = value
            this.front++;
        }
        else 
            this.array[++this.back] = value
    }
    dequeue(){
        if(this.front>this.back){
            return null;
        }
        return this.array[this.front++]
    }
    peek(){
        if(this.front>this.back)
            return null;
        return this.array[this.front]
    }
    contains(value){
        for(let val of this.array)
            if(val==value)
                return true;
        return false;
    }
    toString(){
        return this.array
    }
    isEmpty(){
        return this.front>this.back;
    }
    length(){
        return this.back-this.front+1;
    }

}

let q = new Queue()
q.enqueue(2)
q.enqueue(3)
q.dequeue()
q.dequeue()
// console.log(q.dequeue())
// console.log(q)
module.exports = Queue