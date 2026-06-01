const turma = [
    { nome:'Aline', nota: 9.0},
    { nome:'Bruno', nota:5.0},
    { nome:'Carla', nota:7.0},
    { nome:'Daniel', nota:3.8},
    { nome:'Elisa', nota:8.2},
] 

let aprovados = []
let reprovados = []
let soma  = 0

turma.forEach(({nome, nota }) => {
    soma += nota
    if (nota >= 6) {
        aprovados.push(nome)
    }else {
        reprovados.push(nome)
    } 
})

let media = soma/turma.length

console.log ( 'Aprovados:' + aprovados)
console.log ( 'Reprovados:' + reprovados)
console.log ( `Média Geral: ${media.toFixed(2)}`)
