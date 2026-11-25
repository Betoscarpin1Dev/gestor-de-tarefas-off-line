# 📋 Gerenciador de Tarefas (Off-line)

Aplicação web leve, responsiva e 100% off-line para organização diária de tarefas, desenvolvida com **HTML5**, **CSS3** e **JavaScript puro (Vanilla JS)**.

🔗 **Acesse o projeto online:** https://betoscarpin1dev.github.io/gestor-de-tarefas-off-line/

---

## ✨ Funcionalidades

- **Adicionar tarefas:** Criação rápida de novos itens com validação de campo vazio e foco automático.
- **Concluir tarefas:** Marcação visual (texto riscado) com atualização instantânea do contador de pendências.
- **Filtros dinâmicos:** Visualização separada por **Todas**, **Pendentes** e **Concluídas** com transição suave.
- **Contador em tempo real:** Ajuste automático entre singular e plural conforme o número de tarefas pendentes.
- **Persistência Off-line (`localStorage`):** Todos os dados ficam salvos localmente no navegador em formato JSON, mantendo as tarefas intactas mesmo após fechar a página ou ficar sem conexão com a internet.
- **Design Responsivo:** Layout adaptado para desktops e dispositivos móveis via Flexbox e Media Queries.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação semântica.
- **CSS3:** Estilização moderna, variáveis de layout, Flexbox, transições e responsividade.
- **JavaScript (ES6+):** Manipulação dinâmica do DOM, eventos, filtros de array e armazenamento com `localStorage`.

---

## 📂 Estrutura de Pastas

```text
gestor-de-tarefas/
├── css/
│   └── style.css
├── js/
│   └── script.js
├── index.html
└── README.md