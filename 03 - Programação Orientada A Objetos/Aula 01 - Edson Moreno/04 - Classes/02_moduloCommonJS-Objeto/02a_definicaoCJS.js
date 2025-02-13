// Alternativa A
class Circulo {
    constructor(r) {
      this.raio = r;
    }
    area() {
      return Math.PI * this.raio**2;
    }
    circunferencia() {
      return 2 * Math.PI * this.raio;
    }
  }; 
  
  module.exports = Circulo;

// Alterativa B:
  /*
  module.exports = class Circulo {
    constructor(r) {
      this.raio = r;
    };
    area() {
      return Math.PI * this.raio ** 2;
    };
    circunferencia() {
      return 2 * Math.PI * this.raio;
    };
  }; 
  
  */

  /*
1. class Circulo {:
Aqui é declarada uma classe chamada Circulo. Em JavaScript, 
classes são uma forma de definir objetos com propriedades e métodos.

2. constructor(r) {:
O constructor é um método especial que é chamado quando 
uma nova instância da classe é criada. Ele recebe um parâmetro r, 
que representa o raio do círculo.

3. this.raio = r;:
Dentro do constructor, this se refere à instância atual da classe. A
qui, o valor do parâmetro r é atribuído à propriedade raio da instância.

4. }:
Fecha o bloco do constructor.

5. area() {:
Define um método chamado area que calcula a área do círculo.

6. return Math.PI * this.raio**2;:
O método area retorna o valor da área do círculo, que é calculado 
usando a fórmula π * raio². Math.PI é uma constante que representa 
o valor de π (pi), e this.raio**2 eleva o raio ao quadrado.

7. }:
Fecha o bloco do método area.

8. circunferencia() {:
Define um método chamado circunferencia que calcula a 
circunferência do círculo.

9. return 2 * Math.PI * this.raio;:
O método circunferencia retorna o valor da circunferência do círculo, 
que é calculado usando a fórmula 2 * π * raio.

10. }:
Fecha o bloco do método circunferencia.

11. };:
Fecha a definição da classe Circulo.

12. module.exports = Circulo;:
Exporta a classe Circulo para que ela possa ser utilizada em 
outros arquivos. Isso é comum em ambientes Node.js, onde cada arquivo 
é um módulo e pode exportar e importar funcionalidades.


Código que utiliza a classe Circulo:
1. const Circulo = require('./02a_definicaoCJS.js');:
Aqui, o código importa a classe Circulo do arquivo 02a_definicaoCJS.js. O require é uma função do Node.js que carrega módulos.

2. const c1 = new Circulo(4);:
Cria uma nova instância da classe Circulo com o raio igual a 4. O valor 4 é passado para o constructor da classe, que atribui esse valor à propriedade raio.

3. console.log(`Área do círculo de raio 4 é ${c1.area()}`); : 
Aqui,o código chama o método ‘area()‘ da instância ‘c1‘ e imprime o resultado no console. 
O método ‘area()‘ calcula a área do círculo com base no raio definido(4) e retorna o valor,
que é então interpolado na string usando {}‘.

Resumo:
O primeiro arquivo define a classe Circulo com métodos para calcular 
a área e a circunferência de um círculo.

O segundo arquivo (02a_consumidor) importa essa classe, 
cria uma instância dela com raio 4, e calcula e imprime a área desse círculo.

O resultado impresso no console será:
Área do círculo de raio 4 é 50.26548245743669
(pois a área de um círculo com raio 4 é aproximadamente 50.265).

  */