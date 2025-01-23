class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.count = 0;
        this.header = null;
        this.tail = null;
    }

    add(element) {
        if (this.count == 0)
            this.header = this.tail = element

        else
            this.tail.next = element;
            this.tail = element;
        this.count++;
    }

    print() {
        var aux = this.header
        while (aux != null) {
            console.log(aux.element);
            aux = aux.next;
        }

        console.log("-=-=-==-=");
    }
}

var minhaLE = new LinkedList();

minhaLE.add(new Node(1));
minhaLE.print();

minhaLE.add(new Node(2));
minhaLE.print();

minhaLE.add(new Node(4));
minhaLE.print();

minhaLE.add(new Node(3));
minhaLE.print();

minhaLE.add(new Node("Eduardo"));
minhaLE.print();