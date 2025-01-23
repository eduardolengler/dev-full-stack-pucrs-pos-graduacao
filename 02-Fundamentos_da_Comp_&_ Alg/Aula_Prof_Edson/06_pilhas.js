class Pilha {
    constructor() {
        this.itens = [];
    }

    push(element) {
        this.itens.push(element);
    }

    pop() {
        return this.itens.pop();
    }

    peek() {
        return this.itens[this.itens.length -1];
    }

    isEmpty() {
        return this.itens.length === 0;
    }

    clear() {
        this.itens = [];
    }

    size() {
        return this.itens.length;
    }

}

var minhaPilha = new Pilha();

minhaPilha.push(5);
console.log(minhaPilha);
console.log(minhaPilha.peek());

minhaPilha.push(8);
console.log(minhaPilha);
console.log("Itens na Pilha: " + minhaPilha.size());

minhaPilha.push(11);
console.log(minhaPilha);
console.log("Itens na Pilha: " + minhaPilha.size());
console.log("Minha Pilha está vazia? " + minhaPilha.isEmpty());

minhaPilha.pop();
console.log("Itens na Pilha: " + minhaPilha.size());

minhaPilha.clear();
console.log("Minha Pilha está vazia? " + minhaPilha.isEmpty());

console.log(minhaPilha);
