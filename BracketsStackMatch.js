function checkBracketOrder(string){
    let stack = [];
    let top = -1;
    let correspondingOpener = {
        "]":"[",
        "}":"{",
        ")":"("
    }  
    for (let val of string){
        // console.log(stack[top])  
        switch(val){
            case "[":case "{":case "(":
                stack[++top] = val;
                break;
            case "]":case "}":case ")":
                
                if(top==-1)
                    return false; 
                     
                if(stack[top]==correspondingOpener[val]){
                    
                    top--;
                }
                break;
        }
        
    }
    // 
    // console.log(stack,top,correspondingOpener)
    if(top==-1)
        return true;
    else
        return false;
    
}

console.log(checkBracketOrder("[[]}{asd}"))