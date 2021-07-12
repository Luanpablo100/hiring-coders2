class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    read() {
        return `Estou lendo ${this.title}`
    }
}

let book = new Book('Algoritmos para viver!', 'Brian', 500);
let otherBook = new Book('Um exu em Nova York', 'Cidinha da Silva', 100);

console.log(book)
console.log(book.read())

class ITBook extends Book {
    constructor(title, author, pages, technology) {
        super(title, author, pages);
        this.technology = technology;
    }
}

//Encapsulamento

class Person {
    constructor(name) {
        this._name = name;
    }
    //Possibilitar o acesso a atributos com "_"
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}

let person = new Person('Luan')
console.log(person.name)
person.name = "Lp"
console.log(person.name)