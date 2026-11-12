import test from "node:test";
import assert from "node:assert/strict";
import { Queue } from "../src/structures/Queue.js";

test("fila inicia vazia e retorna null ao consultar/remover", () => {
  const queue = new Queue<number>();
  assert.equal(queue.isEmpty(), true);
  assert.equal(queue.size(), 0);
  assert.equal(queue.front(), null);
  assert.equal(queue.dequeue(), null);
});

test("fila segue FIFO e atualiza tamanho", () => {
  const queue = new Queue<number>();
  queue.enqueue(10); queue.enqueue(20); queue.enqueue(30);
  assert.equal(queue.size(), 3);
  assert.equal(queue.front(), 10);
  assert.equal(queue.dequeue(), 10);
  assert.equal(queue.dequeue(), 20);
  assert.equal(queue.dequeue(), 30);
  assert.equal(queue.isEmpty(), true);
});

test("fila continua correta após compactação interna", () => {
  const queue = new Queue<number>();
  for (let i = 0; i < 100; i += 1) queue.enqueue(i);
  for (let i = 0; i < 70; i += 1) assert.equal(queue.dequeue(), i);
  assert.equal(queue.front(), 70);
  assert.equal(queue.size(), 30);
  for (let i = 70; i < 100; i += 1) assert.equal(queue.dequeue(), i);
  assert.equal(queue.isEmpty(), true);
});

test("fila mantém o tipo genérico", () => {
  const queue = new Queue<string>();
  queue.enqueue("primeiro");
  assert.equal(queue.dequeue(), "primeiro");
});
