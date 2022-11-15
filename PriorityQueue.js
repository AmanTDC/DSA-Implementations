
//additional Problem - Check how to use hash table to optimize complexity of remove
class PriorityQueue{
    
    constructor(){
        this.tree = [];
        this.lastPosition = -1;
    }
    heapifyUp(position){
        if(position==0)
            return;
        let parent = Math.floor((position-1)/2);
        console.log(parent)
        if(this.tree[parent]>this.tree[position]){
            let temp = this.tree[parent];
            this.tree[parent]= this.tree[position];
            this.tree[position] = temp;
            this.heapifyUp(parent)
        }
        else
            return;
    }
    heapifyDown(position){
        if(2*position+1>this.lastPosition){
            return;
        }
        let leftChild  = 2*position + 1;
        let rightChild = 2*position + 2;
        if(rightChild>this.lastPosition)
            rightChild = leftChild;
        let toSwap;
        if(this.tree[position]>this.tree[leftChild]||this.tree[position]>this.tree[rightChild]){
            if(this.tree[leftChild]<this.tree[rightChild])
                toSwap = leftChild;
            else
                toSwap = rightChild;
            let temp = this.tree[toSwap];
            this.tree[toSwap]= this.tree[position];
            this.tree[position] = temp;
            this.heapifyDown(toSwap);
        }
        else{
            return ;
        }

    }
    add(value){
        this.tree[++this.lastPosition] = value;
        this.heapifyUp(this.lastPosition);
        
        console.log(this)   
    }
    isEmpty(){
        if(this.lastPosition==-1)
            return true;
        else
            return false;
    }
    poll(){
        if(this.isEmpty())
            return null;
        let returnValue = this.tree[0];
        this.tree[0] = this.tree[this.lastPosition--];
        this.heapifyDown(0);
        return returnValue
    }
    remove(value){
        let i=0;
        for(i=0;i<=this.lastPosition;i++){
            if(this.tree[i]==value){
                this.tree[i] = this.tree[this.lastPosition--];
                this.heapifyDown(i)
                this.heapifyUp(i)
            }
        }
    }
    clear(){
        this.tree=[]
        this.lastPosition = -1
    }

}
// let pq = new PriorityQueue()
// pq.add(666)
// pq.add(621)
// pq.add(66)
// pq.add(686)
// pq.add(623)
// pq.add(6210)
module.exports = {
    PriorityQueue
}