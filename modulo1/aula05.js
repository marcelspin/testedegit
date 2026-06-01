// contar de 10 ate 1 - forma descrescente.

    let meuNumero = 10
    while(meuNumero >=1) {
        console.log(meuNumero--)
    } 

// contar de 10 ate 1 - forma descrescente. mais avançado

let contador = 0
while(contador<=10){
console.log(`O numero é: ${contador}`)
  contador ++
}


// Enquanto meu numero não for 10, some um a ele

    let meuNumero = 0
    while(meuNumero < 10) {
        console.log(meuNumero = meuNumero +1)
    }

    /* Solicitem o usuario um numero e monstrem a tabuada deste número
    Exemplo:
    Infome o número:10
    1 x 10 = 10
    2 x Número = x   */

    const prompt = require ('prompt-sync')()
    let valor = Number(prompt('Informe um número:'))
    let contador = 1
    while(contador<=10){
        console.log(`${contador} X ${valor} = ${contador * valor}`)
        contador++
    }


    let contador = 1
    do {
        console.log(contador)
        contador++
     } while(contador <= 10)


    /*Solicite ao usuario que digite um valor, quando ele digitar 0. Some todos os valores digitados por ele.
    //ex: Informe um número: 10
    // informe um número:9
    // informe um número:0
    //soma dos números: 19 */

const prompt = require ('prompt-sync')()
let soma = 0
let valor = 0
do {
    valor = Number(prompt('Informe um valor, Zero para parar):'))
    soma += valor
}while (valor !== 0)
    console.log ( soma )



// Demostração  de Variaveis Compostas - Professor Guanabara

let num = [ 5, 8, 2, 9, 3]
num.push(1)
num.sort( )
console.log(num)
console.log (`O vetor tem ${num.lenght}posições`)
console.log (`O Primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
console.log (`O valor 8 está na posição  ${pos}`)


let frutas = ["Banana", "Mamão", "Pessego"]
 for (let i = 0; i < frutas.length; i++) {

  console.log(frutas[i]);

}

1h 24min - Palestra Juliete