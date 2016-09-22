export default class Queue {
  private list: any[];
  private length: number;

  constructor() {
    this.list = [];
    this.length = 0;
  }

  enqueue(value: any): void {
    this.length++;
    this.list.push(value);
  }

  dequeue(): any {
    if (this.length === 0) return;
    this.length--;
    return this.list.shift();
  }

  peek(): any {
    return this.list[0];
  }
}