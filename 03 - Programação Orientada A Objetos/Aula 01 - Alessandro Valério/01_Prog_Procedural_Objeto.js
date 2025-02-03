// Aula 1 - Parte 3

const calculadora = {
	numero1: 10,
	numero2: 20,
	soma: function() {
		return this.numero1 + this.numero2;
	}
};

console.log(calculadora.soma());