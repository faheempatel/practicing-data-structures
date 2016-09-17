class List {
  constructor() {
    this.memory = [];
    this.length = 0;
  }

  get(address) {
    return this.memory[address];
  }

  push(value) {
    this.memory[this.length] = value;
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return;

    const lastAddress = this.length - 1;
    const lastValue = this.memory[lastAddress];
    delete this.memory[lastAddress];
    this.length--;

    return lastValue;
  }

  unshift(value) {
    let previous = value;

    for (let address = 0; address < this.length; address++) {
      let current = this.memory[address];
      this.memory[address] = previous;
      previous = current;
    }

    this.memory[this.length] = previous;
    this.length--;
  }

  shift() {
    if (this.length === 0) return;

    const firstValue = this.memory[0];

    for (let address = 0; address < this.length; address++) {
      this.memory[address] = this.memory[address + 1];
    }

    delete this.memory[this.length - 1];
    this.length--;

    return firstValue;
  }
}

export default List;