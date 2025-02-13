const circulo = require('./01a_definicaoCJS.js');
console.log(`Área do círculo de raio 4 é ${circulo.area(4)}`);
console.log(`Área do círculo de raio 5 é ${circulo.area(5)}`);

//desestruturando o objeto e acessando a função diretamente
const {area} = require('./01a_definicaoCJS.js');
console.log(`Área do círculo de raio 2 é ${area(2)}`);


const {circunferencia} = require('./01a_definicaoCJS.js');
console.log(`A circunferência do círculo de raio 2 é ${circunferencia(2)}`);
console.log(`A circunferência do círculo de raio 4 é ${circunferencia(4)}`);
console.log(`A circunferência do círculo de raio 5 é ${circunferencia(5)}`);


/*
Este código em JavaScript utiliza o sistema de módulos CommonJS para importar e 
utilizar funções definidas em outro arquivo. Vamos analisar cada linha do código 
em detalhes:

Explicação detalhada:
1. const circulo = require('./01a_definicaoCJS.js'); :

Esta linha importa o módulo definido no arquivo 01a_definicaoCJS.js e o atribui à 
constante circulo. O módulo exporta duas funções: area e circunferencia.

2. console.log(Área do círculo de raio 4 é ${circulo.area(4)}); :

Esta linha utiliza a função area do módulo importado para calcular a área de 
um círculo com raio 4. A função area é chamada com o argumento 4, e o resultado 
é interpolado na string e exibido no console. 
Exemplo de execução: Área do círculo de raio 4 é 50.26548245743669.

3. const {area} = require('./01a_definicaoCJS.js'); :

Esta linha utiliza a desestruturação para importar diretamente a função area do 
módulo 01a_definicaoCJS.js. A função area é extraída do objeto exportado pelo 
módulo e atribuída à constante area.

4. console.log(Área do círculo de raio 2 é ${area(2)}); :

Esta linha utiliza a função area importada diretamente para calcular a área de 
um círculo com raio 2. A função area é chamada com o argumento 2, e o resultado 
é interpolado na string e exibido no console. 
Exemplo de execução: Área do círculo de raio 2 é 12.566370614359172.

Exemplo de execução:
Área do círculo de raio 4 é 50.26548245743669
Área do círculo de raio 2 é 12.566370614359172


*/