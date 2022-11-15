import java.util.*;
class DArray {
    int length;
    int capacity;
    int array[];

    DArray(){
        this.length = 0;
        this.capacity = 2;
        this.array = new int[this.capacity];
    }

    DArray(int len){
        this.length = len;
        this.capacity = len;
        this.array = new int[len];
    }

    
    int get(int index){
        if(index>=this.length){
            throw new IndexOutOfBoundsException();
        }
        return array[index];
    }
    void set(int index, int value){
        if(index>=this.length){
            throw new IndexOutOfBoundsException();
        }
        this.array[index] = value;
    }
    void add(int value){
        if(this.length!=this.capacity){
            this.array[this.length++] = value;
            return;
        }
        int newArr[] = new int[this.capacity*2];
        capacity*=2;
        for(int i=0;i<length;i++)
            newArr[i] = this.array[i];
        this.array = newArr;
        this.array[this.length++] = value;
        
    }
    void delete(int value){
        int index = 0;
        while(index!=this.length&&this.get(index)!=value){
            index++;
        }
        if(index==this.length)
            return;
        for(int i=index;i<this.length-1;i++){
            this.array[index] = this.array[index+1];
        }
        this.length--;

        //To check if size of array is wasted
        if(this.capacity>this.length*2+1){
            int newArr[] = new int[this.capacity/2];
            this.capacity/=2;;
            for(int i=0;i<this.length;i++)
                newArr[i] = this.array[i];
        }
    }
    public String toString(){
        String res = "[";
        for(int i=0;i<this.length;i++){
            res+= this.array[i];
            res+=" ";
        }
        res+="]";
        return res;
    }
    public void insert(int index,int value){
        if(index>=this.length){
            throw new IndexOutOfBoundsException();
        }
        this.add(this.get(this.length-1));
        for(int i=this.length-1;i>index;i--){
            this.array[i] = this.array[i-1];
        }
        this.set(index,value);
    }
    


}
class Main{
    public static void main(String ...args){
    DArray withoutInitialLength = new DArray();
    DArray withInitialLength = new DArray(3);

    withInitialLength.add(1);   
    withInitialLength.add(2);
    
    
    withInitialLength.insert(0,1);
    System.out.println(withInitialLength.length);
    withInitialLength.delete(2); 
    System.out.println(withoutInitialLength);
    System.out.println(withInitialLength);



}
}
