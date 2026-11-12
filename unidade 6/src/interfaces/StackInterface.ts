/**
 * Contrato (ADT) de uma pilha: o último elemento inserido é o primeiro removido.
 */
export interface StackInterface<T> {
  push(item: T): void;
  pop(): T | null;
  peek(): T | null;
  isEmpty(): boolean;
  size(): number;
}
