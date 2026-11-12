/**
 * Contrato (ADT) de uma fila: o primeiro elemento inserido é o primeiro removido.
 */
export interface QueueInterface<T> {
  enqueue(item: T): void;
  dequeue(): T | null;
  front(): T | null;
  isEmpty(): boolean;
  size(): number;
}
