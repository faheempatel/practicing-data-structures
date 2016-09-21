export default class Stack {
  private list: any[];
  private length: number;

  constructor() {
    this.list = [];
    this.length = 0;
  }

  push(value: any): void {
    this.length++;
    this.list.push(value);
  }

  pop(): any {
    if (this.length === 0) return;
    this.length--;
    return this.list.pop();
  }

  peek(): any {
    return this.list[this.length - 1];
  }
}