var a = [];

a[0] = Math.random();
a[1] = Math.random();
a[9] = Math.random();

console.log(a); // Mostra os múmeros atribuídos aos indices 0, 1 e 9 e que tem 7 indeces vazios <7 empty items>

console.log("Array a possui " + a.length + " números.");

console.log(" -=-=-=-=- \n");
console.log(" for(let val in a) ");
for(let val in a)
    console.log("Indices do Array que possuem valor --> "+val);


console.log(" -=-=-=-=- \n");
console.log(" -for(let val of a)");
for(let val of a)
    console.log(" --> "+val);


console.log(" -=-=-=-=- \n");
console.log(" for (let = 1; i < a.length; i++)) ");
for(let i=0; i<a.length; i++)
    console.log("  -->"+i+": "+a[i]);