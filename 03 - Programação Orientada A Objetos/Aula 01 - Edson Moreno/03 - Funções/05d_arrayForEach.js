array = [4,5,6,7,8,9,10]

// Aqui mostra na tela se o número dentro do array é para ou se é impar!
array.forEach( (nro) => console.log(nro + " -> " + (nro % 2 == 0 ? "par":"ímpar") ));

/* Passo a passo:
A função nroDivisores recebe um parâmetro item.
Inicializa uma variável ndiv com valor 0, que será usada para contar os divisores.
Usa um loop for que vai de 1 até o valor de item.
Dentro do loop, verifica se o valor atual de divisor é um divisor de item (ou seja, se item % divisor é igual a 0).
Se for um divisor, incrementa ndiv.
Após o loop, retorna o valor de ndiv, que representa o número total de divisores de item.
Essa função é usada posteriormente no código para calcular e exibir o número de divisores de cada número em um array. 
*/
nroDivisores = (item) => {
    let ndiv = 0; // Inicializa o contador de divisores
    for(let divisor = 1; divisor <= item; divisor++) // Loop de 1 até o valor de 'item'
      if((item % divisor) == 0) // Verifica se 'divisor' é um divisor de 'item'
        ndiv++; // Incrementa o contador de divisores
    return ndiv; // Retorna o número total de divisores
};

array.forEach(
    (nro) => console.log(nro + `-> nDivisores de 1 até ${nro} =`+ nroDivisores(nro) )
)

