/*1. Crie um objeto representando um produto com as propriedades: nome, preço,
categoria e quantidade em estoque. Use for...in para percorrer e exibir todas as
propriedades e seus valores. Em seguida, adicione uma nova propriedade
desconto ao objeto e exiba o preço final calculado.*/

const produto = {
    nome: "Maverick",
    preco: 35000,
    categoria: "Carro",
    quantidadeEstoque: 5
};

console.log("Dados do Produto:");
for (let propriedade in produto) {
    console.log(`${propriedade}: ${produto[propriedade]}`);
}
produto.desconto = 5; 

const precoFinal = produto.preco - (produto.preco * produto.desconto / 100);

console.log("\nApós adicionar desconto:");
console.log(`Desconto: ${produto.desconto}%`);
console.log(`Preço Final: R$ ${precoFinal.toFixed(2)}`);

/*2. Crie dois objetos representando personagens de um jogo, cada um com as
propriedades: nome, vida, ataque e defesa. Use for...in para exibir os atributos de
cada personagem lado a lado e determine qual deles tem maior poder total
(soma de vida + ataque + defesa).*/

const char1 = {
    nome: "Guerreiro",
    vida: 120,
    ataque: 140,
    defesa: 30
};

const char2 = {
    nome: "Mago",
    vida: 190,
    ataque: 60,
    defesa: 120
};

console.log("=== Diferenças de atributos entre Personagens ===");

for (let atributo in char1) {
    console.log(
        `${atributo}: ${char1[atributo]} | ${char2[atributo]}`
    );
}

let poder1 = char1.vida + char1.ataque + char1.defesa;
let poder2 = char2.vida + char2.ataque + char2.defesa;

console.log("\n=== Poder Total ===");
console.log(`${char1.nome}: ${poder1}`);
console.log(`${char2.nome}: ${poder2}`);


if (poder1 > poder2) {
    console.log(`\n${char1.nome} possui o maior poder total!`);
} else if (poder2 > poder1) {
    console.log(`\n${char2.nome} possui o maior poder total!`);
} else {
    console.log("\nOs personagens possuem o mesmo poder total!");
}

/*3. Crie um objeto representando um funcionário com nome, cargo, salário e anos de
experiência. Use for...in para listar todos os dados. Com base nos anos de
experiência, calcule e exiba o bônus anual: até 2 anos = 5% do salário, de 3 a 5
anos = 10%, acima de 5 anos = 15%.*/

const funcionario = {
    nome: "Marcel Pacheco",
    cargo: "Desenvolvedor",
    salario: 8500,
    anosExperiencia: 6
};

console.log("=== Dados do Funcionário ===");

for (let propriedade in funcionario) {
    console.log(`${propriedade}: ${funcionario[propriedade]}`);
}

let bonus;

if (funcionario.anosExperiencia <= 2) {
    bonus = funcionario.salario * 0.05;
} else if (funcionario.anosExperiencia <= 5) {
    bonus = funcionario.salario * 0.10;
} else {
    bonus = funcionario.salario * 0.15;
}

console.log("\n=== Bônus Anual ===");
console.log(`Bônus: R$ ${bonus.toFixed(2)}`);

/*4. Crie um objeto onde cada chave é o nome de um item e o valor é a quantidade
no inventário do jogador (ex: { espada: 1, poção: 5, escudo: 2 }). Use for...in para
listar o inventário completo. Permita que o usuário informe um item para usar:
reduza a quantidade em 1 ou exiba "item esgotado" se for zero.*/

const prompt = require('prompt-sync')() 
const inventario = {
    espada: 1,
    pocao: 5,
    escudo: 2
};
console.log("= INVENTÁRIO =");

for (let item in inventario) {
    console.log(`${item}: ${inventario[item]}`);
}
let itemUsado = prompt("Digite o item que deseja usar:").toLowerCase();

if (inventario[itemUsado] !== undefined) {
    
    if (inventario[itemUsado] > 0) {
        inventario[itemUsado]--;
        console.log(`Você usou 1 ${itemUsado}.`);
        console.log(`Restam ${inventario[itemUsado]} unidade(s).`);
    } else {
        console.log("Item esgotado!");
    }

} else {
    console.log(" Não encontrado item no inventário.");
}

console.log("\n= INVENTÁRIO ATUALIZADO =");

for (let item in inventario) {
    console.log(`${item}: ${inventario[item]}`);
}

/*5. Crie um objeto representando o orçamento mensal de uma pessoa, com
categorias como alimentação, transporte, lazer e saúde, cada uma com valor
planejado e valor gasto. Use for...in para percorrer as categorias e exibir se cada
uma ficou dentro ou acima do orçamento, e calcule o saldo geral do mês.*/

const orcamentoMensal = {
  alimentacao: { planejado: 1500, gasto: 1050 },
  transporte: { planejado: 1000, gasto: 1505 },
  lazer: { planejado: 650, gasto: 359 },
  saude: { planejado:400, gasto: 689 }
};

function analisarOrcamento(orcamento) {
  let saldoGeral = 0;

  for (let categoria in orcamento) {
    const { planejado, gasto } = orcamento[categoria];
    saldoGeral += (planejado - gasto);

    if (gasto <= planejado) {
      console.log(` ${categoria}: dentro do orçamento (Planejado: R$${planejado}, Gasto: R$${gasto})`);
    } else {
      console.log(` ${categoria}: acima do orçamento (Planejado: R$${planejado}, Gasto: R$${gasto})`);
    }
  }

  console.log(`\n Saldo geral do mês: R$${saldoGeral}`);
}
analisarOrcamento(orcamentoMensal);

/*6. Crie um array de objetos representando músicas, cada uma com título, artista e
duração em segundos. Use for...of para exibir cada música no formato "Artista —
Título (mm:ss)". Ao final, use forEach para somar a duração total e exiba-a no
mesmo formato.*/

const playlist = [
  { titulo: "Memories", artista: "Mr Bean", duracao: 183 },
  { titulo: "É demais", artista: "SPC", duracao: 354 },
  { titulo: "What About Us", artista: "Pink", duracao: 294 },
  { titulo: "Sensações", artista: "Paula Fernanda", duracao: 301 }
];

function formatarTempo(segundos) {
  const minutos = Math.floor(segundos / 60);
  const restoSegundos = segundos % 60;
  return `${String(minutos).padStart(2, "0")}:${String(restoSegundos).padStart(2, "0")}`;
}
for (const musica of playlist) {
  console.log(`${musica.artista} — ${musica.titulo} (${formatarTempo(musica.duracao)})`);
}
let duracaoTotal = 0;
playlist.forEach(musica => {
  duracaoTotal += musica.duracao;
});
console.log("<==== TEMPO TOTAL ====> ")
console.log(`\nDuração total da playlist: ${formatarTempo(duracaoTotal)}`);


/*7. Crie um array de objetos com nome e nota de 6 alunos. Use for...of para classificar
cada aluno (Aprovado, Recuperação ou Reprovado) e exibir o resultado. Use
forEach para calcular e exibir separadamente a média dos aprovados e a média
dos reprovados.*/

const alunos = [
    { nome: "Amanda", nota: 9.5 },
    { nome: "Rael", nota: 6.5 },
    { nome: "João", nota: 3.8 },
    { nome: "Marcel", nota: 7.1 },
    { nome: "Heloisa", nota: 2.9 },
    { nome: "Fagundes", nota: 5.7 }
];

let somaAprovados = 0;
let qtdAprovados = 0;

let somaReprovados = 0;
let qtdReprovados = 0;

console.log("===> RESULTADO DOS ALUNOS <===");

for (const aluno of alunos) {

    let situacao;

    if (aluno.nota >= 7) {
        situacao = "Aprovado";
    } else if (aluno.nota >= 5) {
        situacao = "Recuperação";
    } else {
        situacao = "Reprovado";
    }

    console.log(`${aluno.nome}: ${aluno.nota} - ${situacao}`);
}

alunos.forEach(aluno => {
    if (aluno.nota >= 7) {
        somaAprovados += aluno.nota;
        qtdAprovados++;
    }

    if (aluno.nota < 5) {
        somaReprovados += aluno.nota;
        qtdReprovados++;
    }
});

const mediaAprovados = qtdAprovados
    ? (somaAprovados / qtdAprovados).toFixed(2)
    : 0;
const mediaReprovados = qtdReprovados
    ? (somaReprovados / qtdReprovados).toFixed(2)
    : 0;
console.log("\n===> MÉDIAS <===");
console.log(`Média dos aprovados: ${mediaAprovados}`);
console.log(`Média dos reprovados: ${mediaReprovados}`);

/*8. Crie um array de objetos representando produtos com nome, preço e quantidade.
Use forEach para calcular o valor total em estoque de cada produto (preço ×
quantidade) e exibir um relatório. Ao final, exiba o valor total geral de todo o
estoque.*/

const produtos = [
  { nome: "Laptop", preco: 4000, quantidade: 3 },
  { nome: "Batedeira", preco: 500, quantidade: 10 },
  { nome: "TV Led", preco: 1250, quantidade: 10 },
  { nome: "Monitor", preco: 800, quantidade: 6 },
  { nome: "Airfry", preco: 700, quantidade: 15 }
];

let valorTotalGeral = 0;

produtos.forEach(produto => {
  const valorTotalProduto = produto.preco * produto.quantidade;
  valorTotalGeral += valorTotalProduto;

  console.log(
    `${produto.nome} — Preço: R$${produto.preco} | Quantidade: ${produto.quantidade} | Total em estoque: R$${valorTotalProduto}`
  );
});

console.log(`\n Valor total geral do estoque: R$${valorTotalGeral}`);


/*9. Crie um array de objetos onde cada objeto representa um contato com nome,
telefone e e-mail. Use forEach para listar todos os contatos formatados. Permita
buscar um contato pelo nome usando for...of e exiba os dados encontrados ou
uma mensagem de "não encontrado".*/

const prompt = require('prompt-sync')() 
const contatos = [
    {
        nome: "Manoel Silva",telefone: "(51) 99999-4587",email: "manoel@email.com"
    },
    {
        nome: "Beatriz Souza",telefone: "(51) 89998-2222",email: "beatriz@email.com"
    },
    {
        nome: "Lores Lima",telefone: "(51) 99999-3345",email: "lores@email.com"
    }
];

console.log("=== LISTA DE CONTATOS ===");

contatos.forEach(contato => {
    console.log(`
Nome: ${contato.nome}
Telefone: ${contato.telefone}
E-mail: ${contato.email}
------------------------`);
});
const nomeBusca = prompt("Digite o nome do contato:").toLowerCase();

let encontrado = false;

for (const contato of contatos) {
    if (contato.nome.toLowerCase() === nomeBusca) {
        console.log("\n=== CONTATO ENCONTRADO ===");
        console.log(`Nome: ${contato.nome}`);
        console.log(`Telefone: ${contato.telefone}`);
        console.log(`E-mail: ${contato.email}`);

        encontrado = true;
        break;
    }
}

if (!encontrado) {
    console.log("Contato não encontrado.");
}

/*10. Implemente uma pilha usando um array para simular o histórico de um
navegador. Crie as funções visitar(pagina) (push), voltar() (pop) e paginaAtual()
(peek). Simule uma sessão: visite 4 páginas, volte 2 vezes e exiba a página atual a
cada operação.*/

let historico = [];

function visitar(pagina) {
    historico.push(pagina);
    console.log(`Visitando: ${pagina}`);
    paginaAtual();
}

function voltar() {
    if (historico.length > 0) {
        let paginaRemovida = historico.pop();
        console.log(`Voltando da página: ${paginaRemovida}`);
    } else {
        console.log("Histórico vazio!");
    }

    paginaAtual();
}

function paginaAtual() {
    if (historico.length > 0) {
        console.log(`Página atual: ${historico[historico.length - 1]}`);
    } else {
        console.log("Nenhuma página aberta.");
    }

    console.log("-------------------");
}

visitar("Amazon");
visitar("Linkedin");
visitar("Deepseek");
visitar("Nasa");

voltar();
voltar();


/*11. Implemente uma fila usando um array para simular o atendimento de uma
clínica. Crie as funções chegarPaciente(nome) (enqueue), chamarProximo()
(dequeue) e exibirFila(). Simule a chegada de 5 pacientes e o atendimento de 3,
exibindo o estado da fila a cada operação.*/


let fila = [];

function chegarPaciente(nome) {
    fila.push(nome);
    console.log(`${nome} chegou à clínica.`);
    exibirFila();
}


function chamarProximo() {
    if (fila.length > 0) {
        let paciente = fila.shift();
        console.log(`Chamando paciente: ${paciente}`);
    } else {
        console.log("Não há pacientes na fila.");
    }
    exibirFila();
}


function exibirFila() {
    if (fila.length > 0) {
        console.log("Fila atual:", fila.join(" -> "));
    } else {
        console.log("Fila vazia.");
    }
    console.log("------------------------");
}

chegarPaciente("Marcel");
chegarPaciente("Jaques");
chegarPaciente("Guilherme");
chegarPaciente("João");
chegarPaciente("Dudu");

chamarProximo();
chamarProximo();
chamarProximo();

/*12. Implemente uma lista ligada simples usando nós ({ valor, proximo }). Crie as
funções adicionar(tarefa), remover(tarefa) e exibir() que percorre todos os nós.
Simule um gerenciador de tarefas: adicione 4 tarefas, remova uma pelo nome e
exiba a lista antes e depois.*/


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