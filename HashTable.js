let md5 = require('md5')
let {LinkedList} = require('./LinkedList')
class HashTable{
    //using separate chaining
    //takes objects as input? serialize input and then use md5 and then take sum % 524287
    //which hash to use?
    charToNumMap = {
        '0':0,
        '1':1,
        '2':2,
        '3':3,
        '4':4,
        '5':5,
        '6':6,
        '7':7,
        '8':8,
        '9':9,
        'a':10,
        'b':11,
        'c':12,
        'd':13,
        'e':14,
        'f':15
    }
    constructor(){
        this.length = 0;
        this.array = []
    }
    
    _calculateHash(key){
        let preHashKey = key
        if (typeof key==="Object"){
            preHashKey = JSON.stringify(key)
        }
        let md5Hash = md5(preHashKey)
        let hashIndex = 0
        for(let i=0 ;i<md5Hash.length;i++){
            hashIndex += (i+1)*this.charToNumMap[md5Hash[i]]
        }
        return hashIndex;
    }
    _matches(key1,key2){
        return key1===key2
    }
    _getNodeFromKey(key,linkedList){
        let prev = null;
        let cur = linkedList.head;
        
        while(cur!=null){
            if(this._matches(cur.value.key,key))
                return cur;
            prev = cur;
            cur = cur.next;
        }
        return null;
    }
    set(key,value){
        let hash = this._calculateHash(key)
        if(!this.array[hash]){
            this.array[hash] = new LinkedList()
            this.array[hash].push_back({key,value})
            this.length++;
        }
        else{
            let node = this._getNodeFromKey(key,this.array[hash])
            // console.log(node.value)
            if(node){
                node.value.value = value;
            }
            else{
                this.length++;
                this.array[hash].push_back({key,value})
            }
        }
    }
    get(key){
        let hash = this._calculateHash(key)
        if(!this.array[hash])
            return;
        
        let node = this._getNodeFromKey(key,this.array[hash])
        if(node)
            return node.value;
        else
            return;
    }
    _removeNodeFromKey(key,linkedList){
        if(!linkedList.head)
            return ;
        let prev = null;
        let cur = linkedList.head
        while(cur!=null){
            if(cur.value.key===key){
                if(cur.value.key===linkedList.head.value.key){
                    linkedList.head = cur.next;
                    if(cur===linkedList.tail)
                        linkedList.tail = null;
                }
                else if(cur.value.key===linkedList.tail.value.key){
                    linkedList.tail = prev;
                    prev.next = null;
                }
                else{
                    prev.next = cur.next
                }
                this.length-- ;
                linkedList.length--; //bad but working
                return
            }
            prev = cur;
            cur = cur.next;
        }
    }
    remove(key){
        let hash = this._calculateHash(key)
        if(!this.array[hash])
            return ;
        this._removeNodeFromKey(key,this.array[hash])
        
    }
    
}
let h = new HashTable()
// let ch = h._calculateHash
// let colChecker = []
// for(let i = 0;i<300000;i++){
//     if(!colChecker[h._calculateHash(i)])
//         colChecker[h._calculateHash(i)] = i
//     else{
//         console.log(colChecker[h._calculateHash(i)],i)
//     }
// }
module.exports = {HashTable,h}

// TEST CASE
// set new value
// update value
//remove value
//create collision situation and test then
//1777 189893
// 126 189894
// 7462 189895
// 1306 189896
// 94 189897

