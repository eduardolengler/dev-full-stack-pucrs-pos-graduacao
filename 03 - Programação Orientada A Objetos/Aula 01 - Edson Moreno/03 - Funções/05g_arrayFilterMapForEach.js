array = [2,3,4,5,6,7,8,9,10]

nroDivisores = (item) => {
    let ndiv = 0;
    for(let divisor = 1; divisor <= item; divisor++)
      if((item % divisor) == 0)
        ndiv++;
    return ndiv;
}

array
    .filter((nro) => nroDivisores(nro) == 2)
    .map((item) => {return {x:item, par:(item % 2) ==0}} )
    .forEach((obj) => console.log(obj.x + " é par? " + obj.par));

/*
O código fornecido realiza uma série de operações em um array de números inteiros, 
utilizando os métodos `filter`, `map` e `forEach` do JavaScript. 
Vamos analisar cada parte do código em detalhes.

Primeiro, o array `array` é definido com os valores `[2,3,4,5,6,7,8,9,10]`. 
Em seguida, é declarada a função `nroDivisores`, que recebe um número `item` como argumento 
e calcula o número de divisores desse número. A função inicializa uma variável `ndiv` com o valor 0 e, 
em seguida, utiliza um loop `for` para iterar de 1 até o valor de `item`. 
Dentro do loop, verifica se `item` é divisível pelo valor atual do loop (`divisor`). 
Se for, incrementa `ndiv` em 1. No final, a função retorna o valor de `ndiv`, 
que representa o número de divisores de `item`.

O próximo passo é aplicar o método `filter` ao array. O método `filter` cria um novo array 
contendo apenas os elementos que satisfazem a condição especificada na função de callback. 
Neste caso, a função de callback verifica se o número de divisores de cada elemento (`nroDivisores(nro)`) é igual a 2. 
Isso significa que apenas os números primos (que têm exatamente dois divisores: 1 e eles mesmos) serão mantidos no novo array.

Depois, o método `map` é utilizado para transformar cada elemento do array filtrado. 
A função de callback do `map` retorna um objeto contendo duas propriedades: `x`, 
que é o valor do elemento, e `par`, que é um booleano indicando se o elemento é par (`item % 2 == 0`).

Finalmente, o método `forEach` é usado para iterar sobre o array resultante do `map` e imprimir 
uma mensagem no console para cada objeto. A mensagem indica o valor de `x` e se ele é par ou não (`obj.par`).

Em resumo, o código filtra os números primos do array original, transforma esses números 
em objetos que indicam se são pares, e imprime essas informações no console.

*/