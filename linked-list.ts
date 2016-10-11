interface Node {
  value: any;
  next: Node;
}

export default class LinkedList {
  private head: Node;
  private length: number;

  constructor() {
    this.head = null;
    this.length = 0;
  }

  get(position: number): any {
    if (position >= this.length) {
      throw new Error('Position out of list range');
    }

    let current = this.head;
    for (let i = 0; i < position; i++) {
      current = current.next;
    }

    return current;
  }

  add(value: any, position: number): void {
    const node: Node = {
      value,
      next: null,
    };

    if (position == 0) {
      this.head = node;
    } else {
      const prev = this.get(position - 1);
      const next = prev.next;
      prev.next = node;
      node.next = next;
    }

    this.length++;
  }

  remove(position: number): void {
    if (position == 0) {
      this.head = this.head.next;
    } else {
      const prev = this.get(position - 1);
      prev.next = prev.next.next;
    }
  }
}
