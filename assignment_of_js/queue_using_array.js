class Queue {
    constructor() {
      this.queue = [];
    }
  
    enqueue(element) {
      this.queue.push(element);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.queue.shift();
    }
  
    isEmpty() {
      return this.queue.length === 0;
    }
  
    peek() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.queue[0];
    }
  }
  
  const queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  
  console.log(queue.dequeue()); // Output: 10
  console.log(queue.peek()); // Output: 20
  console.log(queue.isEmpty()); // Output: false
  console.log(queue.dequeue()); // Output: 20
  console.log(queue.dequeue()); // Output: 30
  console.log(queue.isEmpty()); // Output: true
  console.log(queue.dequeue()); // Output: Queue is empty
  