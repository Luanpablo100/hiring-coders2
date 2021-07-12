const pessoa = {
    nome: "Luan",
    idade: "18",
    naturalidade: "Manaus"
}

//Notação de ponto
pessoa.nome

//Notação de colchetes
pessoa['idade']

//Destructuring - Desetruturar objetos
const {nome, idade, cidade} = pessoa
console.log(nome) // "Luan"

const filmes = [
    {
        id: "1",
        title: "O Dilema das Redes",
        description: "Loren",
        duration: 120
    },
    {
        id: "2",
        title: "As vantagens de ser invisível",
        description: "Loren",
        duration: 120
    },
    {
        id: "3",
        title: "Doce vingança",
        description: "Loren",
        duration: 120
    }
]

const [{id, title, description, duration}] = filmes