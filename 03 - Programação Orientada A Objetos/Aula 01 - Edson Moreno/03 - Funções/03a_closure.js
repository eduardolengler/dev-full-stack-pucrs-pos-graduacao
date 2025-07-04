function somaValores(x) {
    return function(y) {
        return x + y;
    };
};

var soma = somaValores(5);

console.log(soma(2));