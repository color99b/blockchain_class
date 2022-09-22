class Queue {
  constructor() {
    this.arr = {};
    this.first = 0;
    this.final = 0;
  }

  size() {
    if (this.arr[this.final] === undefined) {
      return 0;
    } else {
      return this.final - this.first + 1;
    }
  }

  push(data) {
    if (this.size() === 0) {
      this.arr["0"] = data;
    } else {
      this.final += 1;
      this.arr[this.final] = data;
    }
  }

  pop() {
    let temp;
    if (this.first === this.final) {
      temp = this.arr[this.first];
      delete this.arr[this.final];
      this.first = 0;
      this.final = 0;
    } else {
      temp = this.arr[this.first];
      delete this.arr[this.final];
      this.first += 1;
    }
    return temp;
  }
}

let queue = new Queue();

queue.push(3);
queue.push(3);
queue.push(5);
queue.pop();
console.log(queue);
