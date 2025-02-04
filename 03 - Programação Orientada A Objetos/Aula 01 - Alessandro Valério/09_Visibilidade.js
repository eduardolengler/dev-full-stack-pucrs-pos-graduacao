// Variáveis Locais

function Pessoa() {
    let nome = "Eduardo";
    let anoDeNascimento = 1978;
    let profissao = "Desenvolvedor";
    this.calculaIdade = function() {
        return new Date().getFullYear() - anoDeNascimento;
    };
};

const pessoa1 = new Pessoa();
console.log(pessoa1);

console.log("\n========  Novo Exemplo2:  =========");

class Estudante extends Pessoa {
    #matricula;
    constructor(nome, anoDeNascimento, matricula) {
        super(nome, anoDeNascimento, "Estudante");
        this.#matricula = matricula;
        this.#ola();
    };

    getMatricula() {
        return "Matrícula solicitada: "+ this.#matricula;
    };

    setMatricula(valor) {
        this.#matricula = valor;
    };

    #ola() {
        //super.ola();
        console.log("Colegas");
    };

};

const aluno1 = new Estudante("Eduardo", 1978, 1290334);
console.log(aluno1);
console.log(aluno1.setMatricula(987654));
console.log(aluno1.getMatricula());