class Pessoa {
    constructor(nome, anoDeNascimento, profissao) {
        this.nome = nome;
        this.anoDeNascimento = anoDeNascimento;
        this.profissao = profissao;
    };
    ola() {
        console.log("Olá, como vai? Me chamo " + this.nome);
    };
    calculaIdade() {
        return new Date().getFullYear() - this.anoDeNascimento;
    };
};

const pessoa = new Pessoa("Eduardo Lengler", 1978, "Estudante");
console.log(pessoa);
pessoa.ola();
console.log(pessoa.calculaIdade());

console.log("========  Exemplo 2 - Classes por Herança =========");
class Estudante extends Pessoa {
    // Exemplo inicial com o constructor abaixo:
    // constructor(nome, anoDeNascimento, profissao, matricula) {
    constructor(nome, anoDeNascimento, matricula){
        super(nome, anoDeNascimento, "Estudante");
        this.matricula = matricula;
    };
};

// Const usado no primeiro exemplo inicial com o construtor que recebia o atributo "Estudante":
//const aluno = new Estudante("Arthur", 2022, "Estudante", 9982388);
const aluno = new Estudante("Arthur", 2022, 9982388);
console.log(aluno);
console.log(aluno.calculaIdade() + " anos.\n");

class Professor extends Pessoa {
    constructor(nome, anoDeNascimento, titulacao){
        super(nome, anoDeNascimento, "Professor");
        this.titulacao = titulacao;
    };
};

const professor = new Professor("Alessandro", 1976, "Professor convidado");
console.log(professor);
console.log(professor.calculaIdade() + " anos.\n");