interface Node {
  value: number;
  left: Node;
  right: Node;
}

export default class BinarySearchTree {
  private root: Node;

  constructor() {
    this.root = null;
  }

  contains(value: number): boolean {
    let current = this.root;

    while (current) {
      if (value > current.value) {
        current = current.right;
      } else if (value < current.value) {
        current = current.left;
      } else {
        return true;
      }
    }

    return false;
  }

  add(value: number): void {
    const node = {
      value,
      left: null,
      right: null,
    }

    let current = this.root;

    if (this.root === null) {
      this.root = node;
      return;
    }

    // Loop until value is added or we discover that it already exists in tree
    while (true) {
      // Move right if value is greater
      if (value > current.value) {
        // If right node doesn't exist, set it to our node and stop traversing
        if (!current.right) {
          current.right = node;
          break;
        }
        // Else move to right node
        current = current.right;
      // Move left if value is smaller
      } else if (value < current.value) {
        // If left node doesn't exist, set it to our node and stop traversing
        if (!current.left) {
          current.left = node;
          break;
        }
        // Else move to left node
        current = current.left;
      } else {
        break;
      }
    }
  }
}
