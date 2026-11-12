import type { QueueInterface } from "../interfaces/QueueInterface.js";

const EMPTY = Symbol("empty-queue-slot");

/**
 * Fila genérica FIFO (First In, First Out).
 * Usa índice inicial em vez de Array.shift(), evitando deslocar todos os
 * elementos a cada remoção. enqueue/dequeue são O(1) amortizado.
 */
export class Queue<T> implements QueueInterface<T> {
  #items: Array<T | typeof EMPTY> = [];
  #head = 0;

  enqueue(item: T): void {
    this.#items.push(item);
  }

  dequeue(): T | null {
    if (this.isEmpty()) return null;

    const item = this.#items[this.#head] as T | typeof EMPTY;
    this.#items[this.#head] = EMPTY;
    this.#head += 1;

    if (this.#head >= 32 && this.#head * 2 >= this.#items.length) {
      this.#items = this.#items.slice(this.#head);
      this.#head = 0;
    }

    return item === EMPTY ? null : item as T;
  }

  front(): T | null {
    if (this.isEmpty()) return null;
    const item = this.#items[this.#head] as T | typeof EMPTY;
    return item === EMPTY ? null : item as T;
    return item === EMPTY ? null : item as T;
  }

  isEmpty(): boolean {
    return this.#head >= this.#items.length;
  }

  size(): number {
    return this.#items.length - this.#head;
  }

  /** Retorna somente os elementos ativos, na ordem FIFO. */
  toArray(): T[] {
    return this.#items.slice(this.#head) as T[];
  }
}
