let a = [];
let b = ["A", "B", "C", "D"];

console.log(a);
console.log(b);
console.log(b[0]);
console.log(b[1]);
console.log(b[3]);
console.log(b[2]);
a = [1, 2, 3, 4];
console.log(a);
console.log(a.length);
console.log(b.length);

console.log(a.toString());
console.log(a.join(" - "));
let a2 = a.concat(["X", "Y"]);
console.log(a2);

let a3 = a.slice(1);
console.log(a3);

let a4 = a.slice(0,2);
console.log(a4);

let c = [1, 2, 2,];
console.log(c.indexOf(2));
console.log(c.indexOf(2,2));
console.log(c.lastIndexOf(2));
console.log(c.includes(0));

console.log("Arrays - Métodos: findIndex(funçãoPredicado)");
console.log("Arrays - Métodos: find(funçãoPredicado)");
let d = [1, 2, 3];
console.log(d);
let i = d.findIndex(function(item) {
    return item >= 2;
});
console.log(i);
let e = d.findIndex(function (item) {
    return item >= 0 && item <= 2;
});
console.log(e); 

console.log("Arrays - Métodos: forEach(funçãoAplicação)");
let f = [10, 20, 30, 40];
a.forEach(function(item, index) {
    console.log(`${item} na posição ${index}`);
});

console.log("Arrays - Métodos: sort()");
let g = ["A", "E", "C", "D", "B"];
console.log(g.sort());

console.log("Arrays - Métodos: reverse()");
console.log(g.reverse());

console.log("Arrays - Métodos: sort(funçãoDeComparação)");
let h = [1, 2, 9, 4, 6, 7, 5];
console.log(h.sort(function(x, y){
    if (x < y) return -1;
    if (x > y) return 1;
    return 0;
}));
