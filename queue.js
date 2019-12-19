class Queue{
    constructor(){
        this.items = [];
    }
    //adding an element to the queue
    enqueue(element){
        this.items.push(element);
    }

    dequeue(){
        if(this.items.length == 0){
            return `Queue is empty!`;
        }
        return this.items.shift();
    }
    front(){    
        if(this.items.length == 0){
            return `Queue is empty!`;
        }
        return this.items[0];
    }
    rear(){
        if(this.items.length == 0){
            return `Queue is empty!`;
        }
        return this.items[this.items.length - 1];
    }
    //linear search
    search(item){
        for(var i = this.items.length - 1; i >=0 ; i -- ){
            if(this.items[i] == item){
                return `Element ${item} found`;
            }
        }
        return `Element not found!`;
    }
    traverse(){
            var str = ""; 
            for(var i = 0; i < this.items.length; i++) 
                str += this.items[i] +" "; 
            return str; 
        }

}
var queue = new Queue();
queue.enqueue(1);
queue.enqueue(22);
queue.enqueue(33);
queue.enqueue(44);
console.log(queue.traverse());

queue.dequeue();
console.log(queue.traverse());

queue.enqueue(55);
console.log(queue.traverse());
console.log(queue.front());
console.log(queue.rear());
console.log(queue.search(33));