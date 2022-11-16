class Node{
    constructor(value = null, next = null){
        this.value = value;
        this.next = next;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push_back(value){
        if(!this.head){
            this.head = new Node(value)
            this.tail = this.head
        }
        else{
            this.tail.next = new Node(value);
            this.tail = this.tail.next;
        }
        this.length++;
    }
    push_front(value){
        if(!this.head){
            this.head = new Node(value)
            this.tail = this.head
        }
        else{
            let node = new Node(value,this.head)
            this.head = node
        }
        this.length++;
    }
    pop_back(){
        if(!this.head)
            return null;
        if(this.head===this.tail){
            let res = this.head.value
            this.head=this.tail = null
            this.length--;
            return res;
        }
        let temp = this.head
        while(temp.next!==this.tail){
            temp = temp.next;
        }
        let res = this.tail.value
        temp.next = null;
        this.tail = temp;
        this.length--;
        return res;
    }
    pop_front(){
        if(!this.head)
            return null;
        if(this.head===this.tail){
            let res = this.head.value
            this.head=this.tail = null
            this.length--;
            return res;
        }
        let res = this.head.value;
        this.head = this.head.next;
        this.length--;
        return res;
    }
    contains(value){
        if(!this.head)
            return
        let temp = this.head;
        while(temp!=null){
            if(temp.value===value)
                return true;
            if(typeof temp.value=== typeof value&&typeof value==="Object"&&JSON.stringify(temp.value)===JSON.stringify(value))
                return true;
            temp = temp.next;
        }
        return false;
    }
    remove(value){
        if(!this.head)
            return ;
        let prev = null;
        let cur = this.head
        while(cur!=null){
            if(cur.value===value){
                if(cur.value===this.head.value){
                    this.head = cur.next;
                    if(cur===this.tail)
                        this.tail = null;
                }
                else if(cur.value===this.tail.value){
                    this.tail = prev;
                    prev.next = null;
                }
                else{
                    prev.next = cur.next
                }
                this.length-- ;
                return
            }
            prev = cur;
            cur = cur.next;
        }
    }
    
}
module.exports = {
    LinkedList
}