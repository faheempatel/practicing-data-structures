interface Node {
  value: number;
  children: Node[];
}

export default class Tree {
  private root: Node;

  constructor() {
    this.root = null;
  }

  traverse(callback: Function): void {
    function walk(node: Node) {
      callback(node);
      node.children.forEach(walk);
    }

    walk(this.root);
  }

  add(value: number, parentValue?: number): void {
    const newNode: Node = {
      value,
      children: [],
    };

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    this.traverse(node => {
      if (node.value === parentValue) {
        node.children.push(newNode);
      }
    });
  }
}
