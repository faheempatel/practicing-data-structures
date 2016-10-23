import test from 'ava';
import * as DataStructures from '../data-structures';

test('list implementation is correct', t => {
  const list = new DataStructures.List();

  list.push(1);
  list.unshift(2);

  t.is(list.get(1), 1);
  t.is(list.get(0), 2);

  t.is(list.shift(), 2);
  t.is(list.get(0), 1);

  t.is(list.pop(), 1);
  t.is(list.get(0), undefined);
});

test('hash table implementation is correct', t => {
  const hashTable = new DataStructures.HashTable();

  hashTable.set('foo', 'bar');
  t.is(hashTable.get('foo'), 'bar');

  hashTable.remove('foo');
  t.is(hashTable.get('foo'), undefined);
});

test('stack implementation is correct', t => {
  const stack = new DataStructures.Stack();

  stack.push(1);
  stack.push(2);

  t.is(stack.peek(), 2);
  t.is(stack.pop(), 2);
  t.is(stack.peek(), 1);
  t.is(stack.pop(), 1);
});

test('queue implementation is correct', t => {
  const queue = new DataStructures.Queue();

  queue.enqueue(1);
  queue.enqueue(2);

  t.is(queue.peek(), 1);
  t.is(queue.dequeue(), 1);
  t.is(queue.peek(), 2);
  t.is(queue.dequeue(), 2);
});

test('graph implementation is correct', t => {
  const graph = new DataStructures.Graph();

  graph.addNode(1);
  graph.addNode(2);
  graph.addNode(3);

  t.is(graph.find(1).value, 1);
  t.is(graph.find(2).value, 2);

  graph.addLine(1, 2);
  graph.addLine(1, 3);
  graph.addLine(2, 3);

  t.is(graph.find(1).lines[0].value, 2);
  t.is(graph.find(1).lines[1].value, 3);
  t.is(graph.find(2).lines[0].value, 3);
});

test('linked list implementation is correct', t => {
  const linkedList = new DataStructures.LinkedList();

  linkedList.add(1, 0);
  linkedList.add(2, 1);
  linkedList.add(3, 2);
  linkedList.add(4, 3);

  t.is(linkedList.get(0).value, 1);
  t.is(linkedList.get(1).value, 2);

  linkedList.remove(1);
  t.is(linkedList.get(1).value, 3);

  linkedList.remove(2);
  t.is(linkedList.get(1).value, 3);

  linkedList.remove(0);
  t.is(linkedList.get(0).value, 3);
});

test('tree implementation is correct', t => {
  const tree = new DataStructures.Tree();

  tree.add(1);
  tree.add(2, 1);
  tree.add(3, 1);
  tree.add(4, 2);
  tree.add(5, 2);

  const traversed = [];
  tree.traverse(node => {
    traversed.push(node.value);
  });

  t.deepEqual(traversed, [1, 2, 4, 5, 3]);
});

test('binary search tree implementation is correct', t => {
  const binarySearchTree = new DataStructures.BinarySearchTree();
   
  // root
  binarySearchTree.add(4);

  // left side
  binarySearchTree.add(2);
  binarySearchTree.add(1);
  binarySearchTree.add(3);

  // right side
  binarySearchTree.add(6);
  binarySearchTree.add(5);
  binarySearchTree.add(7);

  t.truthy(binarySearchTree.contains(2));
  t.truthy(binarySearchTree.contains(3));
  t.truthy(binarySearchTree.contains(4));

  // duplicate
  binarySearchTree.add(6);
});
