class Produto {
    constructor() {
        console.log("Produto");
    }

    mensagem() {
        console.log("Produto");
    }
}

class Produto2 extends Produto {
    constructor() {
        super(); // somente para pegar os atributos
        this.mensagem();
    }

    mensagem() {
        super.mensagem() //pega o metodo do pai
        console.log("Produto 2");
    }
}

//polimorfismos: ter o mesmo metodo, em diferenças classes