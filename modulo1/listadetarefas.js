/*1. Escreva um programa que pergunte a nota de um aluno (de 0 a 10). Exiba se o
aluno foi Aprovado (nota maior ou igual a 7), em Recuperação (nota entre 5 e 6.9)
ou Reprovado (nota menor que 5).*/

const prompt = require('prompt-sync')()

let nota = Number(prompt('Digite a nota do aluno: '))

if (nota >= 7 && nota <= 10) {
    console.log('Aprovado')
    console.log('Parabéns! Você teve um ótima Nota!')

} else if (nota >= 5 && nota < 7) {
    console.log('Recuperação')
    console.log('Bora Não desista, temos chance ainda!')

} else if (nota >= 0 && nota < 5) {
    console.log('Reprovado')
    console.log('Infelismente não deu!')

} else {
    console.log('Nota inválida')
}



/*2. Crie um programa que pergunte o ano de nascimento de uma pessoa e calcule
sua idade. Com base na idade, exiba se ela é criança (até 12 anos), adolescente
(de 13 a 17 anos), adulta (de 18 a 59 anos) ou idosa (60 anos ou mais).*/

const prompt = require('prompt-sync')()

let anoNascimento = Number(prompt('Digite o ano de nascimento: '))
let anoAtual = new Date().getFullYear()

let idade = anoAtual - anoNascimento

console.log(`Sua idade é: ${idade} anos`)

switch (true) {
    case (idade >= 0 && idade <= 12):
        console.log("Criança")
        break

    case (idade >= 13 && idade <= 17):
        console.log("Adolescente")
        break

    case (idade >= 18 && idade <= 59):
        console.log("Adulto")
        break

    case (idade >= 60):
        console.log("Idoso")
        break

    default:
        console.log("Idade inválida")
}



/*3. Escreva um programa que pergunte o salário mensal de um funcionário e o
percentual de aumento concedido pela empresa. Caso o salário seja menor que
R$ 1.500,00, o percentual de aumento deve ser dobrado automaticamente. Exiba o
novo salário do funcionário.*/

const prompt = require('prompt-sync')()
function calcularNovoSalario(salario, percentual) {
  if (salario < 1500) {
    percentual = percentual * 2; 
  }

  const aumento = salario * (percentual / 100);
  const novoSalario = salario + aumento;

  console.log("Salário original: R$ " + salario.toFixed(2));
  console.log("Percentual aplicado: " + percentual + "%");
  console.log("Novo salário: R$ " + novoSalario.toFixed(2));
}
const salarioEntrada = prompt("Digite o salário mensal do funcionário:");
const percentualEntrada = prompt("Digite o percentual de aumento:");

const salario = parseFloat(salarioEntrada);
const percentual = parseFloat(percentualEntrada);

calcularNovoSalario(salario, percentual);


/*4. Crie um programa que leia três números inteiros e exiba o maior deles, sem utilizar
funções prontas como Math.max().*/


const prompt = require('prompt-sync')()

let num1 = Number(prompt('Digite o primeiro número: '))
let num2 = Number(prompt('Digite o segundo número: '))
let num3 = Number(prompt('Digite o terceiro número: '))

if (num1 >= num2 && num1 >= num3) {
        console.log(`O maior número é: ${num1}`)

} else if (num2 >= num1 && num2 >= num3) {
    console.log(`O maior número é: ${num2}`)

} else {
    console.log(`O maior número é: ${num3}`)
    
}


/*5. Uma loja oferece desconto progressivo conforme o valor da compra. Faça um
programa que leia o valor total de uma compra e aplique as seguintes regras:
compras abaixo de R$ 100,00 não têm desconto; compras entre R$ 100,00 e R$
299,99 recebem 10% de desconto; compras entre R$ 300,00 e R$ 499,99 recebem
15% de desconto; compras acima de R$ 500,00 recebem 20% de desconto. Exiba o
valor original, o desconto aplicado e o valor final a pagar.*/

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
const entrada = prompt("Digite o valor da compra:");
const valorCompra = parseFloat(entrada);
calcularDesconto(valorCompra);


/*6. Crie um programa de caixa eletrônico simplificado. O usuário informa o valor que
deseja sacar (múltiplo de 10). O programa deve calcular e exibir a menor
quantidade possível de cédulas de R$ 100, R$ 50, R$ 20 e R$ 10 necessárias para
compor o saque.*/

const prompt = require('prompt-sync')()

let valor = parseInt(prompt('Informe o Valor do Saque  ( X R$ 10): '))
if (!valor|| valor <= 0  || valor & 10 !== 0){
    console.log ("Valor inválido, deve ser positivo ou multiplo de 10 ")
    }else {
        let restante  = valor 

        let cedulas100 = Math.floor (restante/100)
        restante = restante % 100
        let cedulas50 = Math.floor (restante/50)
        restante = restante % 50
        let cedulas20 = Math.floor (restante/20)
        restante = restante % 20
        let cedulas10 = Math.floor (restante/10)
        restante = restante % 10

        let totalCedulas = cedulas100 + cedulas50 + cedulas20 + cedulas10 

        console.log (`\nSaque: R$ ${valor}`)
        console.log (`Cédulas de R$ 100: ${cedulas100}`)
        console.log (`Cédulas de R$ 50: ${cedulas50}`)
        console.log (`Cédulas de R$ 20: ${cedulas20}`)
        console.log (`Cédulas de R$ 10: ${cedulas10}`)
        console.log (`Total de células: ${totalCedulas}`)
    }


/*7. Faça um programa que funcione como uma calculadora básica. Leia dois
números e uma operação desejada (+, -, *, /). Usando switch case, realize a
operação correspondente e exiba o resultado. Trate o caso de divisão por zero e
de operação inválida.*/

const prompt = require('prompt-sync')()

let numero1 = Number(prompt("Digite agora o primeiro número: "))
let numero2 = Number(prompt("Digite agora o segundo número: "))
let operacao = prompt("Digite o tipo de  operação matemática (+, -, *, /): ")

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

/*8. Uma pizzaria cobra por tamanho e tipo de borda. Faça um programa que leia o
tamanho da pizza (P, M ou G) e o tipo de borda (tradicional ou recheada) usando
switch case. Os preços base são: P = R$ 25,00, M = R$ 35,00, G = R$ 45,00. A borda
recheada acrescenta R$ 8,00 em qualquer tamanho. Exiba o valor total do pedido.*/

/*(Obs:Professor,  usei  Node.js usando readline)*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o tamanho da pizza (P, M ou G): ", (tamanho) => {
  rl.question("Digite o tipo de borda (tradicional ou recheada): ", (borda) => {
    let precoBase;

    // Aqui conforme tamanho
    switch (tamanho.toUpperCase()) {
      case 'P':
        precoBase = 25;
        break;
      case 'M':
        precoBase = 35;
        break;
      case 'G':
        precoBase = 45;
        break;
      default:
        console.log("Erro: tamanho inválido. Use P, M ou G.");
        rl.close();
        return;
    }

    // Aqui valor  da borda
    switch (borda.toLowerCase()) {
      case 'tradicional':
        break;
      case 'recheada':
        precoBase += 8;
        break;
      default:
        console.log("Erro: tipo de borda inválido. Use 'tradicional' ou 'recheada'.");
        rl.close();
        return;
    }

    console.log(`Valor total do pedido: R$ ${precoBase.toFixed(2)}`);
    rl.close();
  });
});


/*9. Crie um programa que leia o número do mês (1 a 12) e, usando switch case, exiba
o nome do mês correspondente e quantos dias ele possui. Para fevereiro,
pergunte ao usuário se o ano é bissexto e ajuste a quantidade de dias para 29
caso seja.*/

// Programa para exibir nome do mês e quantidade de dias( Obs:Gigante código)

const prompt = require('prompt-sync')()

let mes = Number(prompt("Digite o número do mês (1 a 12): "))

let nomeMes = ""
let dias = 0

switch (mes) {

    case 1:
        nomeMes = "Janeiro"
        dias = 31
        break

    case 2:
        nomeMes = "Fevereiro"

        let bissexto = prompt("O ano é bissexto? (s/n): ")

        if (bissexto === "s" || bissexto === "S") {
            dias = 29
        } else {
            dias = 28
        }
        break

    case 3:
        nomeMes = "Março"
        dias = 31
        break

    case 4:
        nomeMes = "Abril"
        dias = 30
        break

    case 5:
        nomeMes = "Maio"
        dias = 31
        break

    case 6:
        nomeMes = "Junho"
        dias = 30
        break

    case 7:
        nomeMes = "Julho"
        dias = 31
        break

    case 8:
        nomeMes = "Agosto"
        dias = 31
        break

    case 9:
        nomeMes = "Setembro"
        dias = 30
        break

    case 10:
        nomeMes = "Outubro"
        dias = 31
        break

    case 11:
        nomeMes = "Novembro"
        dias = 30
        break

    case 12:
        nomeMes = "Dezembro"
        dias = 31
        break

    default:
        console.log("Mês inválido!")
}

if (mes >= 1 && mes <= 12) {
    console.log(`O mês é ${nomeMes} e possui ${dias} dias.`)
}


/*10. Um estacionamento cobra por faixas de tempo. Faça um programa que leia
quantas horas um veículo ficou estacionado e, usando switch case com
intervalos, calcule o valor a pagar conforme a tabela: 1a hora = R$ 8,00; 2a hora =
R$ 6,00; 3a hora = R$ 4,00; acima de 3 horas = R$ 4,00 pelas primeiras 3 horas mais
R$ 2,00 por hora adicional. Exiba o tempo total e o valor cobrado.*/

const PROMPT = require('prompt-sync')()
let horas  = parseInt (PROMPT ("Informe número de horas estacionado:"))
if (!horas||horas < 1) {
    console.error ("números de horas, está incorreto!! ")
    }else {
        let valor = 0
        let extras = 0
         switch (true) {
            case horas === 1:
                valor=8
                break
            case horas === 2:
                valor=8+6
                break
            case horas === 3:
                valor=8+6+4  
                break  
                
            default:
                extras = horas - 3
                valor = 4 + 4 + 4 + (extras * 2)

         }
         console.log (`Tempo estacionado: ${horas} hora(s)`)
         console.log (` Valor Total à pagar: R$ ${valor.toFixed()}`)
    }
