import { Stack } from "./structures/Stack.js";
import { Queue } from "./structures/Queue.js";
import { HistoricoService } from "./services/HistoricoService.js";
import { AtendimentoService } from "./services/AtendimentoService.js";
import type { Chamado } from "./models/Chamado.js";

console.log("========== UNIDADE 6: PILHAS E FILAS ==========");

console.log("\n1. PILHA (LIFO) — histórico de ações");
const pilha = new Stack<string>();
pilha.push("Abrir cadastro");
pilha.push("Editar nome");
pilha.push("Salvar alterações");
console.log("Pilha:", pilha.toArray());
console.log("Topo (peek):", pilha.peek());
console.log("Removido (pop):", pilha.pop());
console.log("Tamanho:", pilha.size());

console.log("\n2. FILA (FIFO) — atendimento de chamados");
const atendimento = new AtendimentoService();
const chamados: Chamado[] = [
  { id: 101, titulo: "Erro no portal", solicitante: "Alice" },
  { id: 102, titulo: "Dúvida sobre matrícula", solicitante: "Bruno" },
  { id: 103, titulo: "Acesso ao sistema", solicitante: "Carla" },
];
chamados.forEach((chamado) => atendimento.adicionar(chamado));
console.log("Fila:", atendimento.listar());
console.log("Próximo:", atendimento.proximo());
console.log("Atendido:", atendimento.chamarProximo());
console.log("Restantes:", atendimento.listar());
console.log("Tamanho:", atendimento.tamanho());

console.log("\n3. INTEGRAÇÃO — desfazer ações com Stack");
let nome = "Alice";
const historico = new HistoricoService();
nome = "Alicia";
historico.registrar({
  descricao: "Alteração do nome para Alicia",
  desfazer: () => { nome = "Alice"; },
});
console.log("Nome após edição:", nome);
console.log("Ação desfeita:", historico.desfazerUltima());
console.log("Nome restaurado:", nome);

console.log("\n4. FILA GENÉRICA COM NÚMEROS");
const numeros = new Queue<number>();
numeros.enqueue(10);
numeros.enqueue(20);
numeros.enqueue(30);
console.log("Primeiro:", numeros.front());
console.log("Removido:", numeros.dequeue());
console.log("Fila restante:", numeros.toArray());

console.log("\nDemonstração concluída.");
