const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log("Informações do valor na chave a: " + map1.get('a'));
// Expected output: 1

map1.set('a', 97);

console.log("Definido novo valor para a chave a: " + map1.get('a'));
// Expected output: 97

console.log(map1.size);
// Expected output: 3

map1.delete('b');

console.log(map1.size);
// Expected output: 2


const contatos = new Map();
contatos.set('Eduardo', {cel: "51-999999999", endereço: "Rua Casa, 81, Bairro XXX, Cidade-RS"});

contatos.set('Arthur', {cel: "51-00000000", endereço: "Rua Casa, 101, Bairro XYZ, Cidade-RS"});
console.log(contatos);
console.log(contatos.size);
console.log(contatos.has('Daniele'));