/*Escreva um algoritimo para ler  a temperatura em graus celsus, calcular e escrever
o valor correspondente em graus Fahrenheit */

const prompt = require ('prompt-sync')()
let celsius = Number (prompt('Informe a temperatura que deseja converter em Fahrenheit:'))
let Fahrenheit = ( celsius * 9/5) +32 
console.log ('O resultado em Fahrenheit é: '+ Fahrenheit)


/*Escreva um algoritimo para ler o numero de eleitores  de um municipio , numero de votos em branco 
, nulos e validos. Calcular e escrever o percentual que cada um representa em relação total de eleitores */

const PROMPT = require ('prompt-sync')()
let totalEleitores = Number (PROMPT ("Informe o numero total de Eleitores do município:"))
let votosBranco = Number (PROMPT ("Informe o numero total de votos em branco do município:"))
let votosNulos = Number (PROMPT ("Informe o numero total de votos nulos do município:"))
let votosValidos = Number (PROMPT ("Informe o numero total de votos válidos do município:"))

let totaldeVotos = votosBranco + votosNulos + votosValidos
let abstencoes =  totalEleitores - totaldeVotos

let percentualBranco = ( votosBranco / totalEleitores) *100
let percentualNulos = ( votosNulos / totalEleitores) *100
let percentualValidos = ( votosValidos / totalEleitores) *100
let percentualAbstencoes = ( abstencoes / totalEleitores) *100

console.log ('======= Resultado da Eleição =======')
console.log ('Total de Eleitores: ' + totalEleitores)
console.log ('====================================')
console.log ('Votos Válidos:' + votosValidos + "->" + percentualValidos + " % " )
console.log ('Votos em Branco:' + votosBranco + "->" + percentualBranco + " % " )
console.log ('Votos Nulos:' + votosNulos + "->" + percentualNulos + " % " )
console.log ('Abstenções:' + abstencoes + "->" + percentualAbstencoes + " % " )



//Escreva um algoritimo que gere os números de 1000 a 1999 e escreva aqueles que,
//dividivos por 11, dão resto igual a 5.

let encontrados = []
for (let numero = 1000; numero <= 1999; numero ++){
    if (numero % 11 === 5){
        console.log (numero)
        encontrados.push(numero)
    }
}
console.log("Quantidade: "+ encontrados.length)

/* Escreva um programa para calcular a  redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dia e quantos anos ele já fumou.
Considere que um fumante perde 10min de vida a cada cigarro. Calcule quantos dias 
de vida um fumante perderá e exiba o total em dias   */


const PROMPT = require ('prompt-sync')()
let fumadosPorDia = Number (PROMPT ('Informe o numero de cigarros fumados por dia:'))
let anosFumando = Number (PROMPT ('Informe a quantos anos você fuma:'))
let diasFumando = anosFumando * 365.25
let totalCigarros = fumadosPorDia * diasFumando
let minutosPerdidos = totalCigarros * 10
let horasPerdidas = minutosPerdidos /60
let diasPerdidos = horasPerdidas / 24
let anosPerdidos = diasPerdidos / 365

console.log ("===========================")
console.log ("REDUÇÃO TEMPO DE VIDA")
console.log ("===========================")
console.log ("Cigarros por dia:" + fumadosPorDia)
console.log ("Anos Fumando:" + anosFumando)
console.log ("Dias Fumando:" + diasFumando)
console.log ("===========================")
console.log ("Total de Cigarros:" + totalCigarros)
console.log ("Minutos Perdidos:" + minutosPerdidos)
console.log ("Horas Perdidas:" + horasPerdidas.toFixed(2))
console.log ("Dias Perdidos:" + diasPerdidos.toFixed(2))
console.log ("Anos Perdidos:" + anosPerdidos.toFixed(2))



/* As maças custam R$ 0,30 se forem compradas menos que uma dúzia e R$ 0,25 se forem compradas menos de 12 .
   escreva um algoritimo que leia o número de maçãs compradas, calcule e escreva o valor do total da compra */

let quantidade = 14
let precoPorUnidade 

if (quantidade < 12) {
    precoPorUnidade = 0.30
}else {
    precoPorUnidade = 0.25
}
let totaldeCompra = quantidade * precoPorUnidade

console.log ("Quantidade comprada: " + quantidade +" maçãs")
console.log ("Preço por Unidade: R$ " + precoPorUnidade.toFixed(2))
console.log (" Total da Compra: R$ " + totaldeCompra.toFixed(2))


/* escreva um algoritmo para ler dois valores ( exceto valores iguais )
e escreve-los em ordem crescente */ 

let a = 56
let b = 44
 if (a < b) {
    console.log ( a + " , " + b)
}else {
    console.log (b + " , "+ a)
}


/* Escreva um algoritmo que percora o array e calcule:
   A soma de todos os elementos
   A média dos elementos
   O maior Valor encontrado
   O menor valor encontrado */  

   let valores = [7,3,9,5,8]
   let soma = 0
   let maior = valores[0]
   let menor = valores[0]

   for (let i = 0; i < valores.length; i ++) {
    soma += valores[i]  
 
    if (valores[i] > maior) {
        maior = valores[i]

 }
    if (valores[i] < menor)     {
        menor = valores[i]

 }
}

let media = soma/valores.length

console.log ("soma: "  + soma)
console.log ("Maior: "  + maior)
console.log ("Menor: "  + menor)
console.log ("Média: "  + media)