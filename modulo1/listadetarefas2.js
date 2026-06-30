/*Lista de Tarefas II */

/*1. Peça ao usuário um número e exiba sua tabuada completa (de 1 a 10) usando um
laço for. Em seguida, pergunte se ele deseja ver outra tabuada e repita enquanto
a resposta for "sim".*/

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

/*2. Leia um número inteiro positivo e, usando um laço while, calcule e exiba quantos
dígitos ele possui. Trate o caso do número zero (que possui 1 dígito).*/

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

/*3. Peça ao usuário quantos termos da sequência de Fibonacci deseja ver e exiba-os
usando um laço for. Exemplo: 1, 1, 2, 3, 5, 8, 13...*/

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

/*4. Defina uma senha fixa no código. Peça ao usuário que a digite e, usando um laço
do...while, permita no máximo 3 tentativas. Exiba se ele acertou ou se esgotou as
tentativas.*/

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
  console.log("Você esgotou as 3 tentativas. Acesso Negado!");
}

/*5. Leia um número N e exiba todos os números primos entre 2 e N usando laços
aninhados (for dentro de for). Exiba também a quantidade total de primos
encontrados.*/

const prompt = require('prompt-sync')() 
let N = parseInt(prompt("Digite um número:"));

let quantidadePrimos = 0;

console.log("Números primos entre 2 e " + N + ":");

for (let numero = 2; numero <= N; numero++) {
    let estePrimo = true;

    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            estePrimo = false;
            break;
        }
    }

    if (estePrimo) {
        console.log(numero);
        quantidadePrimos++;
    }
}

console.log("Total de números primos encontrados: " + quantidadePrimos);


/*6. Crie um array e leia via laço o nome e a nota de 5 alunos. Ao final, exiba: a média
da turma, o nome do aluno com maior nota e o nome do aluno com menor nota.
Não use funções prontas como Math.max().*/

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

/*7. Simule um carrinho de compras: leia nomes e preços de produtos em um laço até
o usuário digitar "sair". Armazene em arrays. Ao final, liste todos os itens, exiba o
subtotal, aplique 10% de desconto se houver mais de 3 itens e mostre o total a
pagar.*/

const prompt = require('prompt-sync')() 
let carrinho = [];
let nome = prompt("Digite o produto (ou 'sair'):");

while (nome.toLowerCase() !== "sair") {
    let preco = parseFloat(prompt("Digite o preço:"));

    carrinho.push({
        nome: nome,
        preco: preco
    });

    nome = prompt("Digite o produto (ou 'sair'):");
}
let subtotal = 0;

for (let i = 0; i < carrinho.length; i++) {
    subtotal += carrinho[i].preco;
}
let desconto = carrinho.length > 3 ? subtotal * 0.10 : 0;
let total = subtotal - desconto;

console.log("=== TOTAL DE COMPRAS ===");

for (let i = 0; i < carrinho.length; i++) {
    console.log(`${carrinho[i].nome} - R$ ${carrinho[i].preco.toFixed(2)}`);
}

console.log(`Subtotal: R$ ${subtotal.toFixed(2)}`);
console.log(`Desconto: R$ ${desconto.toFixed(2)}`);
console.log(`Total a pagar: R$ ${total.toFixed(2)}`);
console.log("=== OBRIGADO, VOLTE SEMPRE ===");

/*8. Leia uma palavra, armazene seus caracteres em um array e, percorrendo-o de
trás para frente com um laço for, monte a palavra invertida. Exiba a palavra
original, a invertida e informe se ela é um palíndromo.*/

const prompt = require('prompt-sync')() 
let palavra = prompt("Digite uma palavra:");

let caracteres = [];
let palavraInvertida = "";

for (let i = 0; i < palavra.length; i++) {
    caracteres.push(palavra[i]);
}

for (let i = caracteres.length - 1; i >= 0; i--) {
    palavraInvertida += caracteres[i];
}

console.log("Palavra original: " + palavra);
console.log("Palavra invertida: " + palavraInvertida);

if (palavra === palavraInvertida) {
    console.log("Esta palavra é um palíndromo.");
} else {
    console.log("Esta palavra Não é um palíndromo.");
}

/*9. Sorteie um número entre 1 e 100 com Math.random(). Usando um laço do...while,
peça ao usuário para adivinhar; a cada tentativa, diga se o número é maior ou
menor. Registre as tentativas em um array e, ao acertar, exiba o histórico e
quantas tentativas foram necessárias.*/

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

console.log("Histórico de tentativas executadas:");
console.log(tentativas);

console.log("Quantidade de tentativas: " + tentativas.length);

/*10. Crie uma matriz 3×4 (3 alunos, 4 notas cada). Leia os valores via laços aninhados.
Calcule e exiba a média de cada aluno, a média geral da turma e qual aluno teve
o melhor desempenho. */

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