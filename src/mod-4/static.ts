class Counter {
  counter: number;
  constructor(counter: number) {
    this.counter = counter;
  }
  increment() {
    return (this.counter += 1);
  }
  decrement() {
    return this.counter--;
  }
}

const ins1 = new Counter(1); // creating instances takes up memory
const ins2 = new Counter(10);

// console.log(ins1.increment());
// console.log(ins2.increment());

class SCounter {
  static count: number = 0;
  inc() {
    return (SCounter.count += 1); // count is now a property of SCounter class
  }
  static dec(t: number) {
    // we can make methods static too
    return (SCounter.count -= t);
  }
}
// we dont need to create instance to access the static property & methods
console.log(SCounter.count);
SCounter.dec(12);
console.log(SCounter.count);
