function funcaoSemParametro() {
    console.log("Olá mundo!");
};

function funcaoComParametro() {
    return "Alô Mundo!";
};

let msg = funcaoSemParametro();
console.log(msg);

let msg2 = funcaoComParametro();
console.log(msg2);
