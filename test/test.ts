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