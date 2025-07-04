// video 1 - 06:55
console.log("Hello world!!!")
console.log("Fundamentos de computação e algoritmos")

// Tipos de variáveis:

var idade = 46;
let nome = "Eduardo Lengler";
const cep = 94015244;

console.log(nome);
console.log(idade);
console.log(cep);

// Comandos de repetição
// FOR
// WHILE
// DO WHILE

// for ([inicialização]; [condição]; [expressão final]) {
//    declaração 
// }
for (var i = 0; i < 9; i++) {
    console.log(i);
}

// while (condição) {
//   rotina
// }
var n = 0, x = 0; 
while (n < 3) {
    n++;
    x += n;
    console.log("n: " + n);
    console.log("x: " + x);
}
