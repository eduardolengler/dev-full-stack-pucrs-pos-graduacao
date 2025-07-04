exports.area = (r) => Math.PI * r**2;
exports.circunferencia = (r) => 2 * Math.PI * r;

/*
Este código em JavaScript define e exporta duas funções 
utilizando o sistema de módulos CommonJS. 
Aqui está uma explicação detalhada:

1. exports.area: 
Esta linha define uma função chamada area que calcula 
a área de um círculo. 
A função recebe um parâmetro r, que representa o raio 
do círculo, e retorna o valor da área calculada usando 
a fórmula Math.PI * r**2.

2. exports.circunferencia: 
Esta linha define uma função chamada circunferencia que 
calcula a circunferência de um círculo. 
A função também recebe um parâmetro r, que representa 
o raio do círculo, e retorna o valor da circunferência 
calculada usando a fórmula 2 * Math.PI * r.

Ambas as funções são exportadas como parte do módulo, 
o que significa que podem ser importadas e utilizadas 
em outros arquivos JavaScript que suportam o sistema 
de módulos CommonJS.

*/