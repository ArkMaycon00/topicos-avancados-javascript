/** Ação simples que pode ser desfeita para demonstrar o uso de Stack. */
export interface AcaoHistorico {
  readonly descricao: string;
  readonly desfazer: () => void;
}
