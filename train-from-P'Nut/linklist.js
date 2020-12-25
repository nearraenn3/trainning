class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
   }
   
   class LinkedList {
      constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
     }
     
     append(value) { // 0(1)
       const newNode = new Node(value);
       this.tail.next = newNode;
       this.tail = newNode;
       this.length++;
     }
     
     prepend(value) { // 0(1)
       const newNode = new Node(value);
       newNode.next = this.head;
       this.head = newNode;
       this.length++;
     }
     
     // ขั้นตอนแรก append ก็จะแอด 1 ==> 2 ==> 3 ==>null 
     // prepend แอด 4 ไปข้างหน้า 4 ==> 1 ==>2 ==> 3 ==> null
     // ผลลัพ์จะต้องเป็ณ key= [4, 1, 2, 3]
     printAll() { 
       const key = []; //สร้างคีย์ไว้เก็บอาเรย์
       let current = this.head; // สร้างตัวแปรมาล่าสุดมา โดยชี้ไปที่เฮด
       while (current) { //เคอเรนเข้าไวลูป 
         key.push(current.value);// เชคค่าคีย์ โดยที่ ในคีย์จะมีค่าของเคอเรนแล้วค่อยพุชไปในคีย์
         current = current.next; //เคอเรนก็จะเช็คค่าvalueแล้ววนลูปถัดไปจนครบ
       }
       console.log(key);
     }
     
     // 2 5
     // outcome -> 4 -> 1 -> 2 -> 5 -> 3 -> null
     /*
     node(4) 
          next -->
      <-- prev
             node(1)
           <-- prev
               next --> node(5)
                       <-- prev
                           next -->
                                   node(2)
                                 <-- prev
                                     next  --> node(3)
                                           <-- prev
                                               next -> null
     */
     insert(index, value) {
       const newNode = new Node(value);
       const leader = this.traverseToIndex(index);
       const holdingPointer = leader.next;
       leader.next = newNode;
       newNode.next = holdingPointer;
       this.length++;
     
     }
     
     traverseToIndex(index) {    
       let current = this.head;
       for (let i=0; i<index; i++) {
         current = current.next;
       }
       return current;
     }
     
     remove() {
      // const leader = this.traverseToIndex(index);
     }
   }
   /*
   node(4) 
     next -->
           node(1)
             next --> node(2)
                       next  --> node(3)
                                   next -> null
   */
   const ll = new LinkedList(1);
   ll.append(2);
   ll.append(3);
   ll.prepend(4);
   ll.insert(2, 5);
   ll.printAll();
   // console.log(ll);