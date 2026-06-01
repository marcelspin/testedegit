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
