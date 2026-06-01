let celular = {
    marca: "Samsung",
    modelo: "S23",
    bateria: 85,

    ligar: function() {
        console.log("Celular ligado")
    }
}

console.log(celular.marca)
console.log(celular.modelo)

celular.ligar()

//// Objetos 

let serie = {
nome: "The last",
genero: "Comédia",
numerotemporadas: "12",
status:"Finalizada",
classificacao:"18",
numeroepsodios: {
    temp1: 10,
    temp2: 30,
},

mostrarCaracteristicas: function() {
return `Série: ${this.nome} | Classificação: ${this.classificacao} `
}
}
console.log(serie.nome)
console.log(serie.mostrarCaracteristicas())

// Objetos


let movies  = [
{title: "Spider aranha", genero: "Heroi"},
{title: "As branquelas", genero: "Comédia"},
{title: "MadMax", genero: "Ação"},

]
console.table(movies)