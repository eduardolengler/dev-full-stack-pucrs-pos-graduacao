var pessoa = {nome: "Eduardo Lengler", idade: 46, saudar: function() {console.log("Olá");}};
var pessoa1 = {nome: "Jacyra Lima", idade: 20, saudar: function() {console.log("Oláááá!!!!!!");}};
console.log("Objeto pessoa:");
console.log(pessoa);
console.log("Objeto pessoa1:");
console.log(pessoa1);

pessoa1.nome = "Jacira Lima";
console.log("Objeto pessoa1 -> Nome ajustado:");
console.log(pessoa1);

console.log(pessoa.nome);
pessoa.saudar();
pessoa1.saudar();
console.log(pessoa.saudar());
console.log(pessoa1.saudar());

pessoa.saudar = function () {console.log("Hello World!");}
pessoa.saudar();

pessoa.saudar = function(nomeDoAmigo) {console.log("Olá "+ nomeDoAmigo + "!");};
pessoa.saudar("Fábio");



