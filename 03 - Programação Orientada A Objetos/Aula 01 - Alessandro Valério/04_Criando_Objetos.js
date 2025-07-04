var Pessoa = {
    nome: ['Fulano', 'de Tal'],
    anoDeNascimento: 1970,
    profissao: "Estudante",
    calculeIdade: function() {
        return new Date().getFullYear() - this.anoDeNascimento;
    }
};

console.log(Pessoa);
console.log(Pessoa.nome);