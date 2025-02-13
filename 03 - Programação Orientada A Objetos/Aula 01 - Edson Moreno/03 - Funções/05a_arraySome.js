array = [7] //, 5, 6, 7, 8, 9, 10];

regraImpar = (item) => item % 2 != 0;

console.log("tem alguma número IMPAR? " + array.some(regraImpar));

regraPrimo = (item) => {
    let ndiv = 0;
    for (let div = 1; div <= item; div++)
        if((item % div) == 0)
            ndiv++;

    if (ndiv == 2)
        return true;
    else
        return false;
};

console.log("Tem algum número PRIMO? " + array.some(regraPrimo));