//Building a stack in Javascript
class Stack{

        constructor(){
            this.items = [];
        }

        push(element){
            //this.items.push(element);
            //customised push() 
            if(this.items.length){
            this.items[this.items.length] = element;
            } else{
                this.items[0] = element;
            }
        }

        pop(){
            if(this.items.length == 0 ){
                return "Stack is Empty!";
            }
            return this.items.pop();
        }

        peek(){
            return this.items[this.items.length - 1] ; 
        }

        length(){
            return this.items.length;
        }

        print(){
            for(var i = this.items.length - 1; i >=0 ; i --){
                console.log("["+this.items[i]+"]");
            }
        }
        search(item){
            for(var i = this.items.length - 1; i >=0 ; i -- ){
                if(this.items[i] == item){
                    return `Element ${item} found`;
                }
            }
            return `Element not found!`;
        }
}

var stack = new Stack();
stack.push(1);
stack.push(12);
stack.push(21);
console.log(stack.search(121));
// stack.push(221);
// stack.push(122);

// console.log(stack.length());
// console.log(stack.peek());
//stack.print();

// console.log(stack.pop());
// stack.print();

// console.log(stack.peek());

// console.log(stack.length());

