// 1. Usando a sintaxe literal de Objetos 
// A forma mais comum e simples de criar um objeto é usando a sintaxe literal:
var pessoa = {
nome: "Eduardo Lengler",
idade: 46,
profissao: "Desenvolvedor",
saudacao: function() {
console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
};

//console.log("1. Usando a sintaxe literal de Objetos:"); 
//console.log("A forma mais comum e simples de criar um objeto é usando a sintaxe literal");
console.log("-> Primeiro exemplo:");
console.log(pessoa.nome);
pessoa.saudacao();


// 2. Usando a função construtora
// Você pode criar objetos usando uma função construtora. 
// Isso é útil quando você quer criar vários objetos com a mesma estrutura:
function Pessoa(nome, idade, profissao) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
    this.saudacao = function() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}.`);
    };
}

const pessoa1 = new Pessoa("Eduardo", 46, "Desenvolvedor");
const pessoa2 = new Pessoa("Daniele", 41, "Relações Públicas");

console.log("\n-> Segundo exemplo:");
console.log(pessoa1.nome);
pessoa1.saudacao();

console.log(pessoa2.nome);
pessoa2.saudacao();


// 3. Usando a classe (ES6)
// A partir do ES6, você pode usar a sintaxe de classes para criar objetos de forma mais organizada:
class OutrasPessoas {
    constructor(nome, idade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }

    saudacao() {
        console.log(`Olá, meu nome é ${this.nome}, eu tenho ${this.idade} anos e sou ${this.profissao}.`);
    }
}

var pessoa3 = new OutrasPessoas("Ana", 39, "Vendedora");
var pessoa4 = new OutrasPessoas("Fernando", 41, "Professor");

console.log("\n-> Terceiro exemplo:");
console.log(pessoa3.nome);
pessoa3.saudacao();

console.log(pessoa4.nome);
pessoa4.saudacao();


// 4. Usando Object.create()
// Outra forma de criar objetos é usando o método Object.create(), que permite criar um novo objeto 
// com um protótipo específico:
const pessoaPrototipo = {
    saudacao: function() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
};

const pessoa = Object.create(pessoaPrototipo);
pessoa.nome = "Rafael";
pessoa.idade = 40;

console.log(pessoa.nome); // Saída: Rafael
pessoa.saudacao(); // Saída: Olá, meu nome é Rafael e eu tenho 40 anos.


// 5. Usando factory functions
// Uma factory function é uma função que retorna um novo objeto. É uma abordagem mais funcional:
function criarPessoa(nome, idade, profissao) {
    return {
        nome,
        idade,
        profissao,
        saudacao() {
            console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
        }
    };
}

const pessoa = criarPessoa("Luiza", 29, "Advogada");

console.log(pessoa.profissao); // Saída: Advogada
pessoa.saudacao(); // Saída: Olá, meu nome é Luiza e eu tenho 29 anos.

/**
 * Resumo:
Sintaxe literal: Simples e direta.

Função construtora: Útil para múltiplos objetos com a mesma estrutura.

Classes (ES6): Sintaxe moderna e organizada.

Object.create(): Permite definir um protótipo.

Factory functions: Abordagem funcional para criar objetos.
 */