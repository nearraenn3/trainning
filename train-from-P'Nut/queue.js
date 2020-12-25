/*
queue vs stack

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

queue FIFO

[0, 2, 4, 6, 7]

access  = 0(N)
enqueue = 0(1)
dequeue = 0(1)
peek    = 0(1)
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue { // Linked List
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    
    enqueue(value) { 
      const newNode = new Node(value);
      if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++;
    }
    
    dequeue() {
     /*
      [0, 2]
      [2]
     */
      const follow = this.head.next;
      this.head = follow;
      this.length--;
    }
    
    peek() {
      return this.head;
    }
  }
  
  const queue = new Queue();
  queue.enqueue(0);
  queue.enqueue(2);
  queue.dequeue();
  console.log(queue);