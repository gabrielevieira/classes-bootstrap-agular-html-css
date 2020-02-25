var Carro = /** @class */ (function () {
    function Carro(fabricante, modelo, cor, ano, tetoSolar) {
        console.log("Novo Carro");
    }
    Carro.prototype.exibirDados = function () {
        var mensagem = "Os dados do veiculos sao:\n        \nFabricante: " + this.fabricante + ";\n        \nModelo: " + this.modelo + ";\n        \nCor: " + this.cor + ";\n        \nAno: " + this.ano + ";\n        \nTeto solar: " + this.tetoSolar;
        alert(mensagem);
    };
    return Carro;
}());
