/*
Este código em JavaScript utiliza o método [`map`] para transformar 
os elementos de um array de duas maneiras diferentes. Aqui está uma explicação detalhada:
*/

array = [4,5,6,7,8,9,10]

var newArray = array.map( (item) => item * 2 );
console.log(newArray);

newArray = array.map( (item) => {return {x: item, y: 2 * item} } );
console.log(newArray);

console.log(newArray[4]);

/*
### Passo a passo:

1. Define um array de números: `[4, 5, 6, 7, 8, 9, 10]`.

2. Usa o método [`map`] para criar um novo array onde cada elemento é o dobro do valor original:
   - A função de callback `(item) => item * 2` é aplicada a cada elemento do array.
   - O resultado é armazenado na variável `newArray`.
   - O novo array `[8, 10, 12, 14, 16, 18, 20]` é exibido no console.

3. Usa o método [`map`] novamente para criar um novo array de objetos:
   - A função de callback `(item) => {return {x: item, y: 2 * item} }` é aplicada a cada elemento do array.
   - Cada elemento do novo array é um objeto com duas propriedades: `x` (o valor original) e `y` (o dobro do valor original).
   - O resultado é armazenado na variável `newArray`.
   - O novo array de objetos `[{x: 4, y: 8}, {x: 5, y: 10}, {x: 6, y: 12}, {x: 7, y: 14}, {x: 8, y: 16}, {x: 9, y: 18}, {x: 10, y: 20}]` é exibido no console.

### Resultado:
- O primeiro `console.log` exibe: `[8, 10, 12, 14, 16, 18, 20]`.
- O segundo `console.log` exibe: `[{x: 4, y: 8}, {x: 5, y: 10}, {x: 6, y: 12}, {x: 7, y: 14}, {x: 8, y: 16}, {x: 9, y: 18}, {x: 10, y: 20}]`.

*/