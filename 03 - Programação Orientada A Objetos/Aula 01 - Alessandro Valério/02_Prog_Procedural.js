// Aula 1 - Parte 1 
let horaExtra = 100;
let qtHoras = 20;
let salarioFixo = 5000;

function calculaSalario(horaExtra, qtHoars) {
	return salarioFixo + (horaExtra * qtHoras);
}

let total = calculaSalario(horaExtra, qtHoras);
console.log(total);


