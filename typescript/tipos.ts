//Boolean

const contaPaga:boolean = false

//Number
const idade:number = 18
const avaliacao:number = 4.5

//String
const nome:string = 'Luan'

//Array
const unidades: number[] = [23, 28, 25]
const idades2: Array<number> = [15, 18, 20]

//Tuple 
let jogadores: [string, string, string]
jogadores = ['Luan', 'Felipe', 'Cléber']

//Enum
enum StatusAprovacao {
    Aprovado,
    Pendente,
    Rejeitado
}

const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado

//Any
const retornoDaAPI:any = [123, 'Boa tarde', false]

//Void - Quando uma função não retorna nada
function printNaTela(msg: string): void {
    console.log(msg)
}

//Null e Undefined
const u:undefined = undefined
const n:null = null

//Object
function criar(objeto: object){
    return 'boa tarde'  
}
criar({propriedade: 1})

//Never
function loopInfinito():never {
    while(true) { }
}

function erro(mensagem:string):never {
    throw new Error(mensagem)
}

function falha() {
    return erro('Algo falhou')
}

//Union types
function exibeNota(nota:number | string) {
    console.log('A nota é:' + nota)
}

exibeNota('10')
exibeNota(10)

//Alias

type Funcionario = {
    nome: string,
    sobrenome: string,
    dataNascimento: Date
}

const funcionarios: Funcionario[] = [{
    nome: 'Luan',
    sobrenome: 'Oliveira',
    dataNascimento: new Date()
}]

//Null e Undefined opcionais

let altura:number | null = 1.6
altura = null

type Contato = {
    nome: string,
    telefone: '909090909',
    telefone2?: string
}

//Type Assertion
const minhaIdade: any = 23;
(minhaIdade as number).toString()

const input = document.getElementById('numero1') as HTMLInputElement;
// const input = <HTMLInputElement>document.getElementById('numero1');
console.log(input.value)