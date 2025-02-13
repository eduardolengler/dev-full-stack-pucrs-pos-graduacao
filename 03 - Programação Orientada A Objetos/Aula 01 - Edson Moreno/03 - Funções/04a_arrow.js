var soma = () => console.log("Função sem parâmetros.");

soma();
soma(1);

soma = _ => console.log("Função usando underscore.");
soma();

soma = (x, y) => x + y;
console.log(soma(1,2));

soma = (x, y) => {
    return x + y
};
console.log(soma(3,4));

soma = (x, y) => x > y ? x : y;
console.log(soma(15,6));

soma = (x, y) => {
    if (x > y)
        return x;
    else
    return y;
} 
console.log(soma(7, 8));