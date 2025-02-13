/* Este código em JavaScript utiliza o método reduce 
 para calcular a soma dos números pares em um array. 
 Aqui está uma explicação detalhada:
*/

array = [4,5,6,7,8,9,10]

let resultado = 
    array.reduce(
        (acc, val) => acc += (val % 2 == 0) ? val : 0, 
        0
    )

console.log("A soma somente dos números PARES é " + resultado)

/*
Passo a passo:
Define um array de números: [4, 5, 6, 7, 8, 9, 10].
Usa o método reduce no array para calcular a soma dos números pares.
O método reduce recebe uma função de callback e um valor inicial (0).
A função de callback tem dois parâmetros: acc (acumulador) e val (valor atual do array).
Para cada elemento do array, verifica se o valor (val) é par (val % 2 == 0).
Se for par, adiciona o valor ao acumulador (acc).
Se não for par, adiciona 0 ao acumulador.
O resultado da operação reduce é armazenado na variável resultado.
Exibe no console a soma dos números pares com a mensagem: "A soma dos nros pares é " + resultado.
Resultado:
O código calcula a soma dos números pares no 
array [4, 5, 6, 7, 8, 9, 10], 
que é 4 + 6 + 8 + 10 = 28, e exibe a mensagem: 
"A soma somente dos números pares é 28". 
*/