//Template String
let name = "Luan Oliveira"
console.log(`Bem vindo, ${name}`)

//Operador ternário
idade >= 18 ? 'Maior de idade' : 'Menor de idade'
//? = Se verdadeiro
//: = Se falso

const soma = (num1, num2) => num1 + num2
const sayHello = name2 => `Hello ${name2}` //Caso haja apenas um parâmetro não é necessário coloca-lo entre parênteses
console.log(sayHello('Luan'))

// Arrays
const alunos = ['Luan', 'Paula', 'Maria', 'Felipe', 'Carlos', 'Clara']
console.log(alunos)

//Operador Spread (...)
const alunosXP = [...alunos, 'Paulo']
console.log(alunosXP)

//Métodos de iteração
//MAP
alunosXP.map(aluno => console.log(aluno)) //O map percorre cada item do array

//Find

//Sort

//Filter
const numeros = [1, 4, 6, 3, 10, 52, 74, 100, 753]
const numerosImpares = numeros.filter(numero => numero%2 != 0) //O filter percorre os item e os filtra baseado em uma condiçao

//Reduce - Reduz o array a um resultado de operação matemática
const numbers = [1, 34, 35]
const somaReduce = numbers.reduce((valorAnterior, valorAtual)=>{
    return valorAnterior + valorAtual
}, 0)