const fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;

console.log("Primeiro FOR: ")
for(let i = 3; i <20; i++) {
    fibonacci[i] = fibonacci[i -1] + fibonacci[i-2];
    console.log(fibonacci[i])
}

console.log("Segundo FOR: ");
for (let i = 1; i < fibonacci.length; i++)
    console.log(fibonacci[i]);

