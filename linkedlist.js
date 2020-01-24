function LinkedList(){
    this.head = null;
    this.tail = null;
}

function Node(prev, value, next){
    this.prev = prev;
    this.value = value;
    this.next = next;
}

//Adding a new Node as a Head Node

LinkedList.prototype.addToHead = function(value){
    //value = 300
    let newNode = new Node(null,value,this.head);//

    if(this.head){
        //it wont go inside
        this.head.prev = newNode;
    }
    else{
        this.tail = newNode;
    }
    this.head = newNode;

}

LinkedList.prototype.addToTail = function(value){

        let newNode = new Node(this.tail,value,null);
        if(this.tail){
            //this is not empty case
            this.tail.next = newNode;
        }
        else{
            //empty linked list
            this.head = newNode;
        }
        this.tail = newNode;
}




/*
        this.head = 300 
        this.tail = 300
        null 300 null //this.tail
        300  200 null 

*/

const ll = new LinkedList();
// ll.addToHead(200);
// ll.addToHead(300);
ll.addToTail(300)
ll.addToTail(200);
console.log(ll);