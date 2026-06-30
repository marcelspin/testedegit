let inicio = null;

function adicionar(tarefa) {
    const novoNo = {
        valor: tarefa,
        proximo: null
    };

    if (inicio === null) {
        inicio = novoNo;
    } else {
        let atual = inicio;

        while (atual.proximo !== null) {
            atual = atual.proximo;
        }

        atual.proximo = novoNo;
    }

    console.log(`Tarefa "${tarefa}" adicionada.`);
}

function remover(tarefa) {
    if (inicio === null) {
        console.log("Lista vazia.");
        return;
    }
 
    if (inicio.valor === tarefa) {
        inicio = inicio.proximo;
        console.log(`Tarefa "${tarefa}" removida.`);
        return;
    }

    let atual = inicio;

    while (atual.proximo !== null && atual.proximo.valor !== tarefa) {
        atual = atual.proximo;
    }

    if (atual.proximo !== null) {
        atual.proximo = atual.proximo.proximo;
        console.log(`Tarefa "${tarefa}" removida.`);
    } else {
        console.log(`Tarefa "${tarefa}" não encontrada.`);
    }
}
function exibir() {
    if (inicio === null) {
        console.log("Nenhuma tarefa cadastrada.");
        return;
    }

    let atual = inicio;
    console.log("Lista de tarefas:");

    while (atual !== null) {
        console.log(`- ${atual.valor}`);
        atual = atual.proximo;
    }

    console.log("--------------------");
}

adicionar("Estudar Java");
adicionar("Fazer exercícios");
adicionar("Enviar relatórios");
adicionar("Participar da reunião");

console.log("\nANTES DA REMOÇÃO:");
exibir();

remover("Enviar relatório");

console.log("\nDEPOIS DA REMOÇÃO:");
exibir();