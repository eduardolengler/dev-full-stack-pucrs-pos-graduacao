function criarPessoa(nome, anoDeNascimento, profissao) {
    return {
        nome,
        anoDeNascimento,
        profissao,
    };
};

const pessoa1 = criarPessoa("Eduardo", 1978, 'Desenvolvedor');
const pessoa2 = pessoa1;

pessoa2.anoDeNascimento = 1983;

console.log(pessoa1);
console.log(pessoa2);


console.log("\n========  Novo Exemplo2:  =========");

class Professor extends criarPessoa {
    constructor(nome, anoDeNascimento, titulacao){
        super(nome, anoDeNascimento, "Professor");
        this.titulacao = titulacao;
    };
    ola() {
        super.ola();
        console.log("Alunos.");
    };
};

const professor2 = new Professor("Adriano", 1980, "Especialista");
console.log(professor2);

professor2.formação = "Jornalismo";
console.log(professor2);

console.log("\n========  Novo Exemplo:  =========");
class Pessoa {
    static NOME_CLASSE = "Pessoa";
    constructor(nome, anoDeNascimento, profissao) {
        this.nome = nome;
        this.anoDeNascimento = anoDeNascimento;
        this.profissao = profissao;
    };
};

console.log(Pessoa.NOME_CLASSE);

console.log("\n========  Novo Exemplo:  =========");

class ValidaCPF {
    static tamanho_cpf = 11;
    static validar(tamanho) {
        if (tamanho == this.tamanho_cpf) {
            return true;
        } else {
            return false;
        }
    };
};

console.log(ValidaCPF.validar("12345678901".length)); // true
console.log(ValidaCPF.validar("1234567890".length)); // false