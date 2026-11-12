import type { StackInterface } from "../interfaces/StackInterface.js";

/**
 * Pilha genérica LIFO (Last In, First Out).
 * push/pop/peek operam no final do array, com custo O(1) amortizado.
 */
export class Stack<T> implements StackInterface<T> {
  readonly #items: T[] = [];

  push(item: T): void {
    this.#items.push(item);
  }

  pop(): T | null {
    return this.#items.pop() ?? null;
  }

  peek(): T | null {
    return this.#items.length === 0 ? null : this.#items[this.#items.length - 1] ?? null;
  }

  isEmpty(): boolean {
    return this.#items.length === 0;
  }

  size(): number {
    return this.#items.length;
  }

  /** Retorna uma cópia, preservando o encapsulamento da estrutura. */
  toArray(): T[] {
    return [...this.#items];
  }
}
