import { Stack } from "../structures/Stack.js";
import type { AcaoHistorico } from "../models/AcaoHistorico.js";

/** Mantém ações recentes para permitir desfazer na ordem inversa (LIFO). */
export class HistoricoService {
  readonly #historico = new Stack<AcaoHistorico>();

  registrar(acao: AcaoHistorico): void {
    this.#historico.push(acao);
  }

  desfazerUltima(): string | null {
    const acao = this.#historico.pop();
    if (acao === null) return null;
    acao.desfazer();
    return acao.descricao;
  }

  quantidade(): number {
    return this.#historico.size();
  }
}
