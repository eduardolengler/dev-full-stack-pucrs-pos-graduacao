console.log("===== CONSTRUTORES ======");
console.log("====== Exemplo 1 ========");

function Pessoa() {
    this.nome = ["Fulano", "de Tal"],
    this.anoDeNascimento = 1978,
    this.profissao = "Estudante",
    this.calculaIdade = function() {
            return new Date().getFullYear() - this.anoDeNascimento;
    };
};

const pessoa = new Pessoa();
console.log(pessoa);


console.log("\n====== Exemplo 2 ========");
function OutraPessoa() {
    this.nome = "Fulano";
    this.anoDeNascimento = 1978;
    this.profissao = "Estudante";
    this.calculaIdade = function() {
            return new Date().getFullYear() - this.anoDeNascimento;
    };
};

console.log(OutraPessoa.name);

const novaPessoa = new OutraPessoa();
console.log(novaPessoa);
console.log(novaPessoa.calculaIdade());


console.log("\n====== Exemplo 3 ========");
function OutraPessoa2(nome, anoDeNascimento, profissao) {
    this.nome = nome;
    this.anoDeNascimento = anoDeNascimento;
    this.profissao = profissao;
    this.calculaIdade = function() {
            return new Date().getFullYear() - this.anoDeNascimento;
    };
};

const pessoa2 = new OutraPessoa2("Eduardo Lengler", 1978, "Estudante");
const pessoa3 = new OutraPessoa2("Daniele", 1983, "Relações Públicas");
console.log(pessoa2);
console.log(pessoa2.calculaIdade());
console.log(pessoa3);
console.log(pessoa3.calculaIdade());


console.log("\n====== Exemplo 4 ========");

const pessoa4 = new Object();
console.log(pessoa4);
pessoa4.nome = "Arthur Lengler";
console.log(pessoa4);
console.log(pessoa4.nome);

pessoa4.anoDeNascimento = 2022;
pessoa4.calculaIdade = function() {return new Date().getFullYear() - this.anoDeNascimento};
console.log(pessoa4.anoDeNascimento);
console.log(pessoa4.calculaIdade());

descobreTipo = function(objeto) { 
    if('Object' == objeto.constructor.name) {
        console.log("É um objeto RAIZ!");
    } else {
        console.log("É um objeto do tipo " + objeto.constructor.name);
    }
};
descobreTipo(pessoa);
descobreTipo(pessoa2);
descobreTipo(pessoa3);
descobreTipo(pessoa4);

