/*
stack LIFO 

[ 7  ]
[ 6  ]
[ 4  ]
[ 2  ]
[ 0  ]

access = 0(N)
push   = 0(1)
pop    = 0(1)
peek   = 0(1)

*/

class Stack {
    constructor() {
      this.array = [];
      this.length = 0;
    }
    
    push(value) {
      this.array.push(value)
      this.length++;
    }

    peek() {
        return this.array[this.array.length - 1];
    }

    pop() { 
        const node = this.array.pop();
        this.length--;
        return node;
    }
}
const stack = new Stack();
stack.push(0);
stack.push(2);
stack.push(4);
stack.push(6);
stack.push(7);
stack.pop();
console.log(stack.peek());
console.log(stack);