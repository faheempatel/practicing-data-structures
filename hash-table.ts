export default class HashTable {
  private memory: any[];

  constructor() {
    this.memory = [];
  }

  hashKey(key: string): number {
    let hash = 0;
    for (let index = 0; index < key.length; index++) {
      const code = key.charCodeAt(index);
      hash = ((hash << 5) - hash) + code | 0;
    }
    return hash;
  }

  get(key: string): any {
    const address = this.hashKey(key);
    return this.memory[address];
  }

  set(key: string, value): void {
    const address = this.hashKey(key);
    this.memory[address] = value;
  }

  remove(key: string): void {
    const address = this.hashKey(key);
    if (this.memory[address]) {
      delete this.memory[address];
    }
  }
}