import java.util.*;
class LinkedList<Template>{
    // Methods - Contructor empty and single value
    //1. insert(nth value,value)
    //2. search(value)
    //3. delete()
    //4. add()
    //5. insertStart
    //6. inserEnd
    //
    
    class Node{
        Template value;
        Node next;
        Node (Template value){
            this.value = value;
        }   
    }

    Node head;
    Node tail;
    LinkedList(){
    }
    public void add(Template value){
        if(head==null){
            this.head = new Node(value);
            this.tail = this.head;
        }
        else{
            this.tail.next = new Node(value);
            this.tail = this.tail.next;
        }
    }
    public int search(Template value){
        Node temp = head;
        int index = 0;
        while(temp!=null){
            index++;
            
            //matching code.. might defer for string or object types
            if(temp.value == value){
                return index; 
            }
            temp = temp.next;
        }
        return -1;
    }
    public void delete(Template value){
        Node prev = null;
        Node current = this.head;

        while(current!=null){
            if(current.value==value){
                if(prev!=null)
                    prev.next = current.next;
                else   {
                    this.head = current.next;
                }
                if(this.tail.value == current.value){
                    this.tail = prev;
                }
                break;
            }
            prev = current;
            current = current.next;
        }
        
    }
    public void insertStart(Template value){
        Node newNode = new Node(value);
        newNode.next = head;
        head = newNode;
        if(tail==null)
            tail = head;
    }
    public void insertEnd(Template value){
        this.add(value);
    }
    public String toString(){
        String res = "";
        res+= "[";
        Node trav = head;
        while(trav!=null){
            res+=trav.value;
            res+=" ";
            trav = trav.next;
        }
        if(head!=null){
            return res+"]"+head.value+" and "+tail.value;
        }
        else
        return "[]";
    }
    
    //attributes - head,tail,Node

}

class Main{
    public static void main(String ...s){
        LinkedList<int> list = new LinkedList();
        Scanner sc = new Scanner(System.in);
        // int n = sc.nextInt();
        while(true){
            int n = sc.nextInt();
            int option = sc.nextInt();
            switch(option){
                case 1: list.add(n);break;
                case 2: System.out.println(list.search(n));break;
                case 3:list.delete(n);break;
                case 4: list.insertStart(n);break;
                case 5:list.insertEnd(n);break;
            }
            System.out.println(list);
        }
    }
}