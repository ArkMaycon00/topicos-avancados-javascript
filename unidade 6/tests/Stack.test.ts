import test from "node:test";
import assert from "node:assert/strict";
import { Stack } from "../src/structures/Stack.js";

test("pilha inicia vazia e retorna null ao consultar/remover", () => {
  const stack = new Stack<number>();
  assert.equal(stack.isEmpty(), true);
  assert.equal(stack.size(), 0);
  assert.equal(stack.peek(), null);
  assert.equal(stack.pop(), null);
});

test("pilha segue LIFO e atualiza tamanho", () => {
  const stack = new Stack<number>();
  stack.push(10); stack.push(20); stack.push(30);
  assert.equal(stack.size(), 3);
  assert.equal(stack.peek(), 30);
  assert.equal(stack.pop(), 30);
  assert.equal(stack.pop(), 20);
  assert.equal(stack.pop(), 10);
  assert.equal(stack.isEmpty(), true);
});

test("pilha mantém o tipo genérico", () => {
  const stack = new Stack<string>();
  stack.push("IFRN");
  assert.equal(stack.pop(), "IFRN");
});
