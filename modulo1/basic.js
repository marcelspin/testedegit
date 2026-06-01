/* uso de strings */

console.log ("Hello world !!")
console.log ('Hello world !!!')
console.log (`Hello World !!!!`)
console.log ("Esta frase está,'dentro de aspas simples' ")
console.log ('Meu nome é Marcel tenho', 52, 'anos')

/* uso de Numbers */

console.log(20)
console.log(4.5)
console.log(8)

/* uso de Boleano */

console.log(true)
console.log(false)

console.log(null) /* define é espaço vazio */
console.log(undefined) /* define espaço alocado, mas não definido */

/* como saber quais tipo de campos usar palavra reservada "typeof" */

console.log(typeof "Olá")
console.log(typeof 40)
console.log(typeof true)

/* Uso de variàveis let e var*/

let nome = "Marcel"
console.log(nome)
console.log("Meu Nome é " + nome )
console.log(`meu nome é ${nome}`) /* usando a interpolação com uso de "${sgdhagshg}" */

let a = 10
let b = 5
console.log(a+b)
console.log(a-b)
console.log(a/b)
console.log(a*b)
console.log(a % b) /* resto da divisão */
console.log(a**b) /* potencia é 10 na 5ª potencia  - 10x10x10x10x10  = 10000 */
console.log((a + b)/2 )
console.log("10"+b)

let numero = "10"
console.log (Number(numero)+5)

/* Crie duas variaveis receba dois valores numéricos e calcule a média */

let numero = 10
let numero2 = 8

let media = (numero +numero2)/2
console.log(media)


console.log(Math.random()) // gera numero aleatório
console.log(Math.random() *10 ) // gera numero aleatório entre 001 - 9,9999

console.log(Math.floor(Math.random)()*10)

console.log(Math.pow(2 ,8))//gera numero elevado a potencia ex: 2 elevado a 8 - 256

console.log(Math.sqrt (81)) // gera raiz quadrada do numero

const agora  = new Date ( )
console.log (agora.toString( )) // data e hora atuais
console.log (agora.toLocaleDateString("pt-BR")) // data em formato BR

let frase = "Senhor dos Anéis é Fantástico"
console.log ( frase.toUpperCase ( ))// transformar frase em letras maiusculas
console.log ( frase.toLowerCase ( ))// transformar frase em letras minisculs


let a = "10"
let b = 10
console.log( a == b) // resultado é "true" pois comparação é apenas de valores


let a = "10"
let b = 10
console.log( a === b) // Resultado é "false" pois comparação é de valor e tipo ( numeros e string )


let a = "10"
let b = 10
console.log( a !== b)

let a = "10"
let b = 10
console.log( a != b)

let a = 11
let b = 10
console.log (!(a > b))

/* && - operador logico AND - sera true se somente todos operandos forem verdadeiros 
 || - (OU/OR) é utilizado em programação para combinar duas ou mais condições, retornando verdadeiro (true) se pelo menos uma das condições for verdadeira. */
 !  - negação é conhecido como um operador de "negação" */

Exercicio 1

 "para fazer uma compra vc precisa de dinheiro e cartão de credito"

let temDinheiro = true
let temCartaoCredito = false
console.log ( temDinheiro && temCartaoCredito)


/*Exercicio 2*/

" verificar Login e senha, o usiario so entrara se 2 estiverem corretos "
/*Solução*/

let loginCorreto = Login === 'Gatobranco' && senha === 'Pica-pau'
let loginErrado = login !== 'Gatobranco' || senha !== 'Pica-pau'


/* Exercicio - verifique se uma pessoa pode ou não tirar sua CNH, CRITÉRIO ter mais de 18 anos */

let idade = 12
if ( idade >= 18){
    console.log("Você já pode tirar sua CNH")
}else {
    console.log (" Você não esta apto a tirar sua CNH")
}


/* Nota + Nota 2  - sistema simples*/

let nota = 2    
let nota2 = 2
let media = (nota + nota2)/2
if (media >= 6) {
    console.log (' Aprovado! ')
}else {
    console.log('Reprovado!')
}
console.log ('teste')

/* Nota + Nota 2  - sistema avançado, mas opções de resposta*/

let idade = 17
if ((idade >= 18) && (idade <= 60)) {
    console.log ('Você já pode tirar a sua CNH')
}else if ((idade < 18) && (idade >0)) {
    console.log ('CHN ainda não liberada')
}else {
    console.log ('Você não informou uma idade ainda válida')
}


/* montar programa mais simples - operador ternario*/

let idade = 18
let mensagem  = idade >= 18 ? "Pode tirar sua CNH" : "Ainda não pode"
console.log (mensagem)

const prompt  = require ('prompt-sync')()
let nome  = prompt  ('Informe seu nome:')
console.log ('Seu Nome é', nome )


// Exercício Professor Guanabara 

let vel = 78.6
console.log (`A velocidade do seu carro é ${vel}Km/h `)
if (vel >60){ // condição simples
        console.log (`Você ultrapassou a velocidade  permitida, será MULTADO!`)
}
console.log (`ATENÇÃO, dirija sempre usando o cinto de segurança`)


// Exercício Professor Guanabara - Condição Composta

let pais = 'Cuba'
console.log (`Vivendo em ${pais}`)
if ( pais != 'Brasil') { // condição composta
    console.log ( 'Voce é estrangeiro' )
}else {
    console.log ('Você é Brasileiro')
}

//Exercício

/*Pergunte a idade de uma pessoa e informe se é Criança, Adolescente ou Adulta  */ 

const prompt  = require ('prompt-sync')()
let idade = Number ( prompt('Qual é a sua Idade?'))
switch(true){
    case ( idade >= 0 && idade <= 12):
        console.log ("Criança")
        break
    case ( idade > 12 && idade <=18):
        console.log ("Adolescente")
        break
    case ( idade >18):
        console.log ("Adulto")    
        break
}




