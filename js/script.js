const formTarefa = document.getElementById('form-tarefa');
const inputTarefa = document.getElementById('input-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const contadorTarefas = document.getElementById('contador-tarefas');
const botoesFiltro = document.querySelectorAll('.btn-filtro');

let tarefas = JSON.parse(localStorage.getItem('minhas_tarefas_off')) || [];
let filtroAtual = 'todas';

function salvarTarefas() {
    localStorage.setItem('minhas_tarefas_off', JSON.stringify(tarefas));
}

function atualizarContador() {
    const pendentes = tarefas.filter(tarefa => !tarefa.concluida).length;
    contadorTarefas.textContent = pendentes === 1 
        ? '1 tarefa pendente' 
        : `${pendentes} tarefas pendentes`;
}

function renderizarTarefas() {
    listaTarefas.innerHTML = '';

    const tarefasFiltradas = tarefas.filter(tarefa => {
        if (filtroAtual === 'pendentes') return !tarefa.concluida;
        if (filtroAtual === 'concluidas') return tarefa.concluida;
        return true;
    });

    tarefasFiltradas.forEach(tarefa => {
        const li = document.createElement('li');
        li.className = `item-tarefa ${tarefa.concluida ? 'concluida' : ''}`;

        const span = document.createElement('span');
        span.className = 'texto-tarefa';
        span.textContent = tarefa.texto;
        span.addEventListener('click', () => alternarConclusao(tarefa.id));

        const btnExcluir = document.createElement('button');
        btnExcluir.className = 'btn-excluir';
        btnExcluir.textContent = 'Excluir';
        btnExcluir.addEventListener('click', () => excluirTarefa(tarefa.id));

        li.appendChild(span);
        li.appendChild(btnExcluir);
        listaTarefas.appendChild(li);
    });

    atualizarContador();
}

function adicionarTarefa(evento) {
    evento.preventDefault();

    const texto = inputTarefa.value.trim();
    if (texto === '') return;

    const novaTarefa = {
        id: Date.now(),
        texto: texto,
        concluida: false
    };

    tarefas.push(novaTarefa);
    salvarTarefas();
    renderizarTarefas();

    inputTarefa.value = '';
    inputTarefa.focus();
}

function alternarConclusao(id) {
    tarefas = tarefas.map(tarefa => {
        if (tarefa.id === id) {
            return { ...tarefa, concluida: !tarefa.concluida };
        }
        return tarefa;
    });

    salvarTarefas();
    renderizarTarefas();
}

function excluirTarefa(id) {
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    salvarTarefas();
    renderizarTarefas();
}

botoesFiltro.forEach(botao => {
    botao.addEventListener('click', () => {
        botoesFiltro.forEach(btn => btn.classList.remove('ativo'));
        botao.classList.add('ativo');
        filtroAtual = botao.dataset.filtro;
        renderizarTarefas();
    });
});

formTarefa.addEventListener('submit', adicionarTarefa);

renderizarTarefas();