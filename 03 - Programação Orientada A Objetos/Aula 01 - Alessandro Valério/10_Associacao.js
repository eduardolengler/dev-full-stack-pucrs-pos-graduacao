class Nota {
    constructor(disciplina, grau) {
        this.disciplina = disciplina;
        this.grau = grau;
    }
};

class Estudante extends Pessoa {
    #matricula;
    notas = [];
    constructor(nome, anoDenascimento, profissao, matricula) {
        super(nome, anoDenascimento, profissao);
        this.#matricula = matricula;
    };

    getMatricula() {
        return this.#matricula;
    };

    setMatricula(valor) {
        this.#matricula = valor;
    };

    addNota(nota) {
        this.notas.push(nota);
    };
};