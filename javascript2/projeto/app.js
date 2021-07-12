const livros = require('./database')
const readline = require('readline-sync')

//Pegar o input do usuário para saber se ela deseja listar por categoria

const catchInitialInput = readline.question('Deseja buscar um livro?(S/N) ')

if (catchInitialInput.toLocaleUpperCase()==='S') {
    console.log('Essas são as categorias disponíveis:');
    console.log(livros.map(livro => livro.categoria));

    const categoryInput = readline.question('Qual categoria voce escolhe? ');
    const retorno = livros.filter(livro => livro.categoria === categoryInput);

    console.table(retorno);

}else if(catchInitialInput.toLocaleUpperCase() ==='N') {
    const livrosOrdernados = livros.sort((a,b) =>a.paginas - b.paginas)
    console.log('Estes são todos os livros disponíveis')
    console.table([...livrosOrdernados])
}else {
    console.log("Caractere inválido!!!")
}
