# Unidade 6 — Estruturas de dados lineares em TypeScript

Esta unidade dá continuidade ao projeto de suporte acadêmico da Unidade 5 e implementa estruturas genéricas reutilizáveis: pilha (LIFO) e fila (FIFO).

## Requisitos
- Node.js 20 ou superior
- npm

## Instalação e execução

Abra o terminal nesta pasta e execute:

```bash
npm install
npm run typecheck
npm test
npm run dev
```

Para compilar e executar a versão JavaScript:

```bash
npm start
```

## Organização

```text
unidade 6/
├── src/
│   ├── app.ts
│   ├── interfaces/
│   │   ├── StackInterface.ts
│   │   └── QueueInterface.ts
│   ├── models/
│   │   ├── AcaoHistorico.ts
│   │   └── Chamado.ts
│   ├── services/
│   │   ├── AtendimentoService.ts
│   │   └── HistoricoService.ts
│   └── structures/
│       ├── Stack.ts
│       └── Queue.ts
├── tests/
│   ├── Stack.test.ts
│   ├── Queue.test.ts
│   └── Integracao.test.ts
├── package.json
└── tsconfig.json
```

## Conceitos e contrato (ADT)

Um tipo abstrato de dados (ADT) descreve **o que** uma estrutura oferece por meio de operações e regras, sem exigir que o usuário conheça **como** ela foi implementada. As interfaces `StackInterface<T>` e `QueueInterface<T>` definem esses contratos.

O generic `<T>` representa o tipo dos elementos. Assim, uma `Stack<number>` devolve números, enquanto uma `Queue<Chamado>` devolve chamados. O compilador impede misturar tipos incompatíveis.

## Lista, pilha e fila

- **Lista sequencial:** mantém elementos em sequência e permite acesso por índice; a posição de inserção/remoção influencia o custo.
- **Pilha (LIFO):** *Last In, First Out*. O último elemento inserido é o primeiro removido. Adequada para histórico e desfazer ações.
- **Fila (FIFO):** *First In, First Out*. O primeiro elemento inserido é o primeiro removido. Adequada para atendimento e processamento de tarefas.

## Operações e complexidade

| Estrutura | Operação | Comportamento | Custo esperado |
|---|---|---|---|
| Stack | `push` | Insere no topo | O(1) amortizado |
| Stack | `pop` | Remove e retorna o topo | O(1) |
| Stack | `peek` | Consulta o topo | O(1) |
| Stack | `isEmpty` / `size` | Consulta estado/tamanho | O(1) |
| Queue | `enqueue` | Insere no fim | O(1) amortizado |
| Queue | `dequeue` | Remove o primeiro | O(1) amortizado |
| Queue | `front` | Consulta o primeiro | O(1) |
| Queue | `isEmpty` / `size` | Consulta estado/tamanho | O(1) |

O custo amortizado considera que operações ocasionais de redimensionamento/compactação são distribuídas pelas operações realizadas.

## Por que não usar `Array.shift()` em uma fila grande?

`shift()` remove o primeiro elemento, mas os demais índices precisam ser reorganizados. Isso pode exigir O(n) operações em uma remoção. Se muitas remoções forem feitas, o custo acumulado cresce.

A classe `Queue<T>` evita esse deslocamento mantendo um índice `#head` que aponta para o próximo elemento. A remoção avança o índice em O(1). Quando a área consumida fica suficientemente grande, os elementos restantes são compactados; por isso, `dequeue()` é O(1) amortizado. A fila não expõe posições internas e `toArray()` retorna apenas uma cópia dos elementos ativos.

## Integração ao contexto acadêmico

- `AtendimentoService` utiliza `Queue<Chamado>` para chamar os chamados na ordem de chegada.
- `HistoricoService` utiliza `Stack<AcaoHistorico>` para desfazer a ação mais recente antes das anteriores.

## Casos testados

Os testes cobrem estruturas vazias, retorno `null`, sequência LIFO/FIFO, atualização de tamanho, manutenção dos tipos genéricos, compactação da fila e integração dos serviços.

## Observação sobre valores `undefined`

A fila usa um sentinela interno exclusivo para marcar posições consumidas, sem confundir essa marca com valores armazenados.
