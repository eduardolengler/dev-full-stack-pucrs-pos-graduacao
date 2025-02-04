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

class Estudante extends Pessoa {
    // Exemplo inicial com o constructor abaixo:
    // constructor(nome, anoDeNascimento, profissao, matricula) {
    constructor(nome, anoDeNascimento, matricula){
        super(nome, anoDeNascimento, "Estudante");
        this.matricula = matricula;
    };

    ola() {
        super.ola();
        console.log("Colégas!");
    };
};

const aluno1 = new Estudante("Eduardo", 1980, 1234444);
console.log(aluno1);
console.log(aluno1.ola());


class Professor extends Pessoa {
    constructor(nome, anoDeNascimento, titulacao){
        super(nome, anoDeNascimento, "Professor");
        this.titulacao = titulacao;
    };
    ola() {
        super.ola();
        console.log("Alunos.");
    };
};

const professor = new Professor("Alessandro", 1976, "Professor convidado");
console.log(professor);
console.log(professor.ola());