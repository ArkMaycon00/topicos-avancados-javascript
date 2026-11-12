import test from "node:test";
import assert from "node:assert/strict";
import { AtendimentoService } from "../src/services/AtendimentoService.js";
import { HistoricoService } from "../src/services/HistoricoService.js";

test("atendimento processa chamados por ordem de chegada", () => {
  const service = new AtendimentoService();
  service.adicionar({ id: 1, titulo: "A", solicitante: "Ana" });
  service.adicionar({ id: 2, titulo: "B", solicitante: "Bia" });
  assert.equal(service.chamarProximo()?.id, 1);
  assert.equal(service.chamarProximo()?.id, 2);
  assert.equal(service.chamarProximo(), null);
});

test("histórico desfaz a última ação primeiro", () => {
  let valor = 0;
  const history = new HistoricoService();
  valor = 1;
  history.registrar({ descricao: "valor 1", desfazer: () => { valor = 0; } });
  valor = 2;
  history.registrar({ descricao: "valor 2", desfazer: () => { valor = 1; } });
  assert.equal(history.desfazerUltima(), "valor 2");
  assert.equal(valor, 1);
  assert.equal(history.desfazerUltima(), "valor 1");
  assert.equal(valor, 0);
  assert.equal(history.desfazerUltima(), null);
});
