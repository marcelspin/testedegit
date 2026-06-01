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
