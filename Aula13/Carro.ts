import { Veiculo } from "./Veiculo";

class Carro extends Veiculo {

    constructor(protected fabricante: string, protected modelo: string, protected cor: string,
        protected ano: number, private tetoSolar: boolean) {
        super(fabricante, modelo, cor, ano)
    }

    private exibirDados(): void {
        const mensagem = `Os dados do veiculos sao:
        \nFabricante: ${this.fabricante};
        \nModelo: ${this.modelo};
        \nCor: ${this.cor};
        \nAno: ${this.ano};
        \nTeto solar: ${this.tetoSolar}`;

        alert(mensagem);


    }
}