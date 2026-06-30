const prompt = require('prompt-sync')()

let numero1 = Number(prompt("Digite agora o primeiro número: "))
let numero2 = Number(prompt("Digite agora o segundo número: "))
let operacao = prompt("Digite o tipo de  operação (+, -, *, /): ")

let resultado

switch (operacao) {

    case "+":
        resultado = numero1 + numero2
        console.log(`Resultado: ${resultado}`)
        break

    case "-":
        resultado = numero1 - numero2
        console.log(`Resultado: ${resultado}`)
        break

    case "*":
        resultado = numero1 * numero2
        console.log(`Resultado: ${resultado}`)
        break

    case "/":

        if (numero2 === 0) {
            console.log("Erro: divisão por zero não é permitida!")
        } else {
            resultado = numero1 / numero2
            console.log(`Resultado: ${resultado}`)
        }

        break

    default:
        console.log("Operação inválida!")
}

//  testestestetsettsetts


const prompt = require('prompt-sync')()

function calcularDesconto(valorCompra) {
  let desconto = 0;

  if (valorCompra < 100) {
    desconto = 0;
  } else if (valorCompra >= 100 && valorCompra <= 299.99) {
    desconto = valorCompra * 0.10;

  } else if (valorCompra >= 300 && valorCompra <= 499.99) {
    desconto = valorCompra * 0.15;

  } else {
    desconto = valorCompra * 0.20;
  }

  const valorFinal = valorCompra - desconto;

  console.log("Valor original da compra : R$ " + valorCompra.toFixed(2));
  console.log("Desconto aplicado na compra: R$ " + desconto.toFixed(2));
  console.log("========= VALOR FINAL ===========")
  console.log("Valor final a pagar: R$ " + valorFinal.toFixed(2));
}

// Entrada do usuário via prompt
const entrada = prompt("Digite o valor da compra:");
const valorCompra = parseFloat(entrada);

calcularDesconto(valorCompra);



<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Pedido de Pizza</title>
</head>
<body>
  <script>
    // Mapeamento de preços
    const PRECOS_BASE = {
      'P': 25.00,
      'M': 35.00,
      'G': 45.00
    };

    const PRECO_BORDA_RECHEADA = 8.00;

    // Captura dados do usuário
    const tamanhoPizza = prompt("Digite o tamanho da pizza (P/M/G):");
    const tipoBorda = prompt("Digite o tipo de borda (normal/recheada):");

    const tamanhoChave = tamanhoPizza.toUpperCase();
    let valorTotal = PRECOS_BASE[tamanhoChave];

    if (!(tamanhoChave in PRECOS_BASE)) {
      alert("Tamanho inválido!");
    } else {
      if (tipoBorda.toLowerCase() === 'recheada') {
        valorTotal += PRECO_BORDA_RECHEADA;
      }

      const formatarMoeda = valor =>
        new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);

      alert(`Valor total do pedido: ${formatarMoeda(valorTotal)}`);
    }
  </script>
</body>
</html>


const prompt = require('prompt-sync')() 
let continuar = "sim";

while (continuar.toLowerCase() === "sim") {
    let numero = parseInt(prompt("Digite um número para ver sua tabuada:"));
 
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}
  continuar = prompt("Deseja ver outra tabuada? (sim/não)");
}
console.log("Programa encerrado!");


const prompt = require('prompt-sync')() 
const senhaCorreta = "12345";
let tentativa;
let contador = 0;
let acertou = false;

do {
  tentativa = prompt("Digite a senha:");
  contador++;

  if (tentativa === senhaCorreta) {
    acertou = true;
    console.log("Senha correta! Permitido seu acesso.");
    break;
  } else {
    console.log("Senha incorreta. Tentativa " + contador + " de 3.");
  }
} while (contador < 3);

if (!acertou) {
  console.log("⚠️ Você esgotou as 3 tentativas. Acesso Negado!");
}

const prompt = require('prompt-sync')() 
let numero = parseInt(prompt("Digite um número inteiro e positivo:"));
let quantDigitos = 0;

if (numero === 0) {
    quantDigitos = 1;
} else {
    while (numero > 0) {
        quantDigitos++;
        numero = Math.floor(numero / 10);
    }
}

console.log("Quantidade de dígitos:", quantDigitos);



const prompt = require('prompt-sync')() 
let quantidade = parseInt(prompt("Qual número de  termos da sequência Fibonacci deseja visualizar?"));

let fibo = [];
let a = 1;
let b = 1;

for (let i = 0; i < quantidade; i++) {
    fibo.push(a);

    let proximo = a + b;
    a = b;
    b = proximo;
}

console.log("Sequência de Fibonacci:");
console.log(fibo.join(", "));


XXXXXXXXXXXXXXX

const prompt = require('prompt-sync')() 
let numeroSorteado = Math.floor(Math.random() * 100) + 1;

let tentativas = [];
let palpite;

do {
    palpite = parseInt(prompt("Adivinhe o número (entre 1 e 100):"));

    tentativas.push(palpite);

    if (palpite < numeroSorteado) {
        console.log("O número sorteado é MAIOR.");
    } else if (palpite > numeroSorteado) {
        console.log("O número sorteado é MENOR.");
    } else {
        console.log("Parabéns! Você acertou!");
    }

} while (palpite !== numeroSorteado);

console.log("Histórico de tentativas:");
console.log(tentativas);

console.log("Quantidade de tentativas: " + tentativas.length);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

const prompt = require('prompt-sync')() 
let alunos = [];
let somaNotas = 0;

for (let i = 0; i < 5; i++) {
    let nome = prompt(`Digite o nome do ${i + 1}º aluno:`);
    let nota = parseFloat(prompt(`Digite a nota de ${nome}:`));

    alunos.push({
        nome: nome,
        nota: nota
    });

    somaNotas += nota;
}
let maiorNota = alunos[0].nota;
let menorNota = alunos[0].nota;
let alunoMaiorNota = alunos[0].nome;
let alunoMenorNota = alunos[0].nome;

for (let i = 1; i < alunos.length; i++) {
    if (alunos[i].nota > maiorNota) {
        maiorNota = alunos[i].nota;
        alunoMaiorNota = alunos[i].nome;
    }

    if (alunos[i].nota < menorNota) {
        menorNota = alunos[i].nota;
        alunoMenorNota = alunos[i].nome;
    }
}
let media = somaNotas / alunos.length;
console.log("======= Média e Notas Alunos =======")
console.log("Média da turma: " + media.toFixed(2));
console.log("Este é o Aluno com maior nota: " + alunoMaiorNota + " (" + maiorNota + ")");
console.log("Este é o Aluno com menor nota: " + alunoMenorNota + " (" + menorNota + ")");



const prompt = require('prompt-sync')() 
const alunos = 3;
const notasPorAluno = 4;

let somaGeral = 0;
let melhorMedia = 0;
let melhorAluno = 0;

for (let i = 0; i < alunos; i++) {
    let somaAluno = 0;

    for (let j = 0; j < notasPorAluno; j++) {
        let nota = Number(prompt(`Aluno ${i + 1} - Nota ${j + 1}:`));
        somaAluno += nota;
        somaGeral += nota;
    }

    let mediaAluno = somaAluno / notasPorAluno;

    console.log(`Média do Aluno ${i + 1}: ${mediaAluno.toFixed(2)}`);

    if (i === 0 || mediaAluno > melhorMedia) {
        melhorMedia = mediaAluno;
        melhorAluno = i + 1;
    }
}

console.log(`\nMédia geral: ${(somaGeral / (alunos * notasPorAluno)).toFixed(2)}`);
console.log(`Melhor aluno: ${melhorAluno} (média ${melhorMedia.toFixed(2)})`);



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
console.log("==== TEMPO TOTAL ==== ")
console.log(`\nDuração total da playlist: ${formatarTempo(duracaoTotal)}`);
=====================================================

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


xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
const prompt = require('prompt-sync')() 
let alunos = [];
let somaNotas = 0;

for (let i = 0; i < 5; i++) {
    let nome = prompt(`Digite o nome do ${i + 1}º aluno:`);
    let nota = parseFloat(prompt(`Digite a nota de ${nome}:`));

    alunos.push({
        nome: nome,
        nota: nota
    });

    somaNotas += nota;
}
let maiorNota = alunos[0].nota;
let menorNota = alunos[0].nota;
let alunoMaiorNota = alunos[0].nome;
let alunoMenorNota = alunos[0].nome;

for (let i = 1; i < alunos.length; i++) {
    if (alunos[i].nota > maiorNota) {
        maiorNota = alunos[i].nota;
        alunoMaiorNota = alunos[i].nome;
    }

    if (alunos[i].nota < menorNota) {
        menorNota = alunos[i].nota;
        alunoMenorNota = alunos[i].nome;
    }
}
let media = somaNotas / alunos.length;
console.log("======= Média e Notas Alunos =======")
console.log("Média da turma: " + media.toFixed(2));
console.log("Este é o Aluno com maior nota: " + alunoMaiorNota + " (" + maiorNota + ")");
console.log("Este é o Aluno com menor nota: " + alunoMenorNota + " (" + menorNota + ")");



const prompt = require('prompt-sync')() 
const alunos = 3;
const notasPorAluno = 4;

let somaGeral = 0;
let melhorMedia = 0;
let melhorAluno = 0;

for (let i = 0; i < alunos; i++) {
    let somaAluno = 0;

    for (let j = 0; j < notasPorAluno; j++) {
        let nota = Number(prompt(`Aluno ${i + 1} - Nota ${j + 1}:`));
        somaAluno += nota;
        somaGeral += nota;
    }

    let mediaAluno = somaAluno / notasPorAluno;

    console.log(`Média do Aluno ${i + 1}: ${mediaAluno.toFixed(2)}`);

    if (i === 0 || mediaAluno > melhorMedia) {
        melhorMedia = mediaAluno;
        melhorAluno = i + 1;
    }
}

console.log(`\nMédia geral: ${(somaGeral / (alunos * notasPorAluno)).toFixed(2)}`);
console.log(`Melhor aluno: ${melhorAluno} (média ${melhorMedia.toFixed(2)})`);



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
console.log("==== TEMPO TOTAL ==== ")
console.log(`\nDuração total da playlist: ${formatarTempo(duracaoTotal)}`);
=====================================================

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