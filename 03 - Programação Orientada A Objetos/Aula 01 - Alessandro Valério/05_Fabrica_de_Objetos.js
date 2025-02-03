console.log("======= FÁBRICA =========");
console.log("====== Exemplo 1 ========");
function criarPessoa(nome, anoDeNascimento, profissao) {
    return {
        nome,
        anoDeNascimento,
        profissao,
        calculaIdade: function() {
            return new Date().getFullYear() - this.anoDeNascimento;
        }
    };
};

const pessoa = criarPessoa("Eduardo", 46, "Desenvolvedor");
console.log(pessoa);

console.log("====== Exemplo 2 ========");

function criaEmpregado(salarioBase, valorHoraExtra, qntHorasExtras) {
    return {
        salarioBase, 
        valorHoraExtra,
        qntHorasExtras,
        calculaSalario: function() {
            return this.salarioBase + (this.valorHoraExtra * this.qntHorasExtras);
        }
    };
};

const empregado1 = criaEmpregado(5000, 100, 10);
const empregado2 = criaEmpregado(10000, 1000, 2);

;
console.log(empregado1.calculaSalario());

console.log(empregado2.calculaSalario());









