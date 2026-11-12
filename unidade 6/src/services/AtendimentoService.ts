import { Queue } from "../structures/Queue.js";
import type { Chamado } from "../models/Chamado.js";

/** Serviço de atendimento: os chamados são atendidos por ordem de chegada. */
export class AtendimentoService {
  readonly #fila = new Queue<Chamado>();

  adicionar(chamado: Chamado): void {
    this.#fila.enqueue(chamado);
  }

  chamarProximo(): Chamado | null {
    return this.#fila.dequeue();
  }

  proximo(): Chamado | null {
    return this.#fila.front();
  }

  tamanho(): number {
    return this.#fila.size();
  }

  estaVazia(): boolean {
    return this.#fila.isEmpty();
  }

  listar(): Chamado[] {
    return this.#fila.toArray();
  }
}
