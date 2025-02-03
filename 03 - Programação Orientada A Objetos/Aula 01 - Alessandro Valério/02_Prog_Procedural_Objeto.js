// Aula 1 - Parte 3

const empregado = {
	valorHoraExtra: 100,
	qntHoras: 20,
	salarioFixo: 5000,
	calculaSalario: function() {
		return this.salarioFixo + (this.valorHoraExtra * this.qntHoras)
	}
};

console.log(empregado.calculaSalario());


