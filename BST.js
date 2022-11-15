let Queue = require('./Queue')
let Stack = require('./Stack')
class BST{
    constructor(value){
        this.value = value||null
        this.left = null
        this.right = null
    }
    add(value){
        if(this.value!=null||this.value!=undefined){
            if(value<this.value){
                if(this.left)
                    this.left.add(value);
                else
                    this.left = new BST(value);
            }
            else if(value>this.value){
                if(this.right)
                    this.right.add(value);
                else
                    this.right = new BST(value);
            }
        }
        else{
            this.value = value
        }
    }
    findNodeAndParent(value,parent){
        
        if(this.value==value){
            return {
                node:this,
                parent
            };
        }
        else if(this.left&&value<this.value)
            return this.left.findNodeAndParent(value,this);
        else if(this.right&&value>this.value)
            return this.right.findNodeAndParent(value,this);
        else 
            return null;
    }
    removeNode(node,parent){
        let left = node.left 
        let right = node.right
        if(!left&&!right){
            if(!parent){
                node.value = null;
                node.left = null;
                node.right = null;
                return;                
            }
            else if(parent.left === node)
                parent.left = null;
            else    
                parent.right = null;
        }
        else if(left&&right){
            let leftMax = left
            let leftMaxPar = node
            while(leftMax.right){
                leftMaxPar = leftMax
                leftMax = leftMax.right
            }
            leftMax.right = right
            node.left = left.left
            node.right = left.right
            node.value = left.value
        
        }
        else if(left){
            node.left = left.left
            node.right = left.right
            node.value = left.value
        }
        else{
            node.left = right.left
            node.right = right.right
            node.value = right.value
        }
    }
    remove(value){
        let res = this.findNodeAndParent(value,null);
        if(res){
            let node = res.node;
            let parent = res.parent
            this.removeNode(node,parent)
            return true;
        }
        return false;

    }
    find(value){
        if(res.findNodeAndParent(value))
            return res.node;
        else
            return null;
        // return res.findNodeAndParent()&&true
        
    }
    contains(value){
        if(res.findNodeAndParent(value))
            return true;
        else
            return false;
    }
    inorderRecursion(){
        if(this.value){

            this.left&&this.left.inorderRecursion()
            console.log(this.value)
            this.right&&this.right.inorderRecursion()
        }
    }
    preorderRecursion(){
        if(this.value!=null||this.value!=undefined){
            console.log(this.value)
            this.left&&this.left.preorderRecursion()
            this.right&&this.right.preorderRecursion()
        }
    }
    postorderRecursion(){
        if(this.value!=null||this.value!=undefined){
            this.left&&this.left.postorderRecursion()
            this.right&&this.right.postorderRecursion()
            console.log(this.value)
        }
    }
    preorderIterative(){
        let res = []
        let stack = []
        stack.push(this)
        while(!stack.length==0){
            let item = stack.pop()
            res.push(item.value)
            if(item.right)
                stack.push(item.right)
            if(item.left)
                stack.push(item.left)
        }
        return res;
    }
    inorderIterative(){
        let inorderArray = []
        let stack = []
        stack.push(this)
        while(!stack.length==0){
            let item = stack.pop();stack.push(item);
            while(item.left){
                stack.push(item.left)
                item = item.left
            }
            item = stack.pop()
            while(!item.right&&!stack.length==0){
                inorderArray.push(item.value)
                item = stack.pop()
            }
            if(item.right){
                inorderArray.push(item.value)
                stack.push(item.right)
            }
            else{
                inorderArray.push(item.value)
            }
        }
        return inorderArray;
    }
    inorderIterativeByTushar(){
        let inorder = []
        let stack = []
        let root = this;
        while(true){
            if(root){
                stack.push(root)
                root = root.left
            }
            else{
                if(stack.length==0)
                    break;
                root = stack.pop()
                inorder.push(root.value)
                root = root.right;
            }
        }
        return inorder;
    }
    postorderIterativeReversePreorder(){
        let stack = new Stack()
        let postorder = []
        let current = this
        while(current||!stack.isEmpty()){
            if(current){
                stack.push(current)
                current = current.left
            }
            else{
                let temp = stack.peek().right
                if(!temp){
                    temp = stack.pop()
                    console.log(temp.value)
                    while(!stack.isEmpty()&&temp==stack.peek().right){
                        console.log(temp.value)
                        temp = stack.pop()
                    }
                }
                else{
                    current = temp;
                }
            }
        }
        return postorder;
    }
    levelOrder(){
        let q = new Queue();
        q.enqueue(this)
        q.enqueue("#")
        while(q.front<q.back){
            let top = q.dequeue()
            if(top=="#"){
                console.log("Next Leve")
                q.enqueue("#")
                continue
            }
            if(top.left)
                q.enqueue(top.left)
            if(top.right)
                q.enqueue(top.right)
            console.log(top.value);
        }
        

    }
    zigzagTraversal(){
        let s = new Stack()
        s.push(this)
        let q = new Queue()
        let zigzag = []
        while(!s.isEmpty()||!q.isEmpty()){
            while(!s.isEmpty()){
                let item = s.pop()
                zigzag.push(item.value)
                if(item.left)
                    q.enqueue(item.left)
                if(item.right)
                    q.enqueue(item.right)
            }
            while(!q.isEmpty()){
                let item = q.dequeue()
                zigzag.push(item.value)
                item.left&&s.push(item.left)
                item.right&&s.push(item.right)
            }
            
        }
        return zigzag
    }
    leftView(){
        //Using Queue
        let q = new Queue()
        let leftview =  []
        q.enqueue(this)
        q.enqueue("#")
        let printNext = true
        // console.log(q.length())
        while(q.length()!=1){
            let item = q.dequeue()
            if(item==="#"){
                q.enqueue("#")
                printNext = true
                continue
            }
            if(printNext){
                leftview.push(item.value)
                printNext = false;
            }
            
            item?.left&&q.enqueue(item.left)
            item?.right&&q.enqueue(item.right)
        }
        return leftview

    }
    rightView(){
        //using queue
        let q = new Queue()
        let rightview = []
        q.enqueue(this)
        q.enqueue("#")
        let printNext = true;
        while(q.length()>1){
            let item = q.dequeue()
            if(item==="#"){
                q.enqueue("#")
                printNext = true
                continue
            }
            if(printNext){
                rightview.push(item.value)
                printNext = false;
            }
            item.right&&q.enqueue(item.right)  
            item.left&&q.enqueue(item.left)
        }
        return rightview
    }
    _topViewHelper(tree,h,v,hash){
        if(!tree)
            return;
        if(hash[h]){
            if(hash[h].v>v)
                hash[h] = {value:tree.value,v,h}
        }
        else{
            hash[h] = {value:tree.value,v,h}
        }
        this._topViewHelper(tree.left,h-1,v+1,hash)
        this._topViewHelper(tree.right,h+1,v+1,hash)
    }
    topView(){
        let hash  = {}
        this._topViewHelper(this,0,0,hash)
        let top = Object.values(hash).sort((a,b)=>a.h-b.h).map(e=>e.value).sort()
        return top;
    }
    _bottomViewHelper(tree,h,v,hash){
        if(!tree)
            return;
        if(!hash[h]||hash[h].v<v)
            hash[h] = {value:tree.value,v,h}
        this._bottomViewHelper(tree.left,h-1,v+1,hash)
        this._bottomViewHelper(tree.right,h+1,v+1,hash)
        
    }
    bottomView(){
        let hash = {}
        this._bottomViewHelper(this,0,0,hash)
        let bottom = Object.values(hash).sort((a,b)=>a.h-b.h).map(e=>e.value)
        return bottom
    }

}
t = new BST()
t.add(6)
t.add(4)
t.add(2)
t.add(5)
t.add(1)
t.add(3)
t.add(8)
t.add(7)
t.add(9)
t.add(2.5)
module.exports = {
    BST,t
}