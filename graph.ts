export default class Graph {
  private nodes: any[];

  constructor() {
    this.nodes = [];
  }

  addNode(value: any): void {
    this.nodes.push({
      value,
      lines: [],
    });
  }

  find(value: any): any {
    const node = this.nodes.find(node => node.value === value);
    if (!node) throw new Error(`Node ${value} does not exist`);

    return node;
  }

  addLine(startValue: any, endValue: any): void {
    const startNode = this.find(startValue);
    const endNode = this.find(endValue);
    startNode.lines.push(endNode);
  }
}