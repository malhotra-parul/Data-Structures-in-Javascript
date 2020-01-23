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

/*
        this.head = 200 
        this.tail = null
        null 300 200
        300 200 null    

*/

const ll = new LinkedList();
ll.addToHead(200);
ll.addToHead(300);
console.log(ll);