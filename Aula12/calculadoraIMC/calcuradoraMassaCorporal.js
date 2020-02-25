
function calcularIMC() {

    let inputPeso = document.getElementById("peso");
    let inputAltura = document.getElementById("altura");

    let valorIMC = parseInt(inputPeso.value) / parseFloat(inputAltura.value);

    return mensagem(valorIMC);

}

function mensagem(valorIMC) {
    var msg = ' ';
    if (valorIMC < 18.5) {
        msg += "Você está abaixo do peso ! Se alimente mais, coma sempre comida saúdaveis!!";
    } else if (18.6 < 24.9) {
        msg += "Você esta saudável, continue assim!! ";
    } else if (25.0 < 29.9) {
        msg += "Levemente acima do peso";
    } else if (valorIMC > 30) {
        msg += "Você esta acima do peso";
    } else if (valorIMC === 0) {
        msg += "Valor informar os dados !"
    }
    document.getElementById("mensagem").innerText = `${msg}`;
    document.getElementById("imc").innerText = `${valorIMC}`;
}

function limparCampos() {
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
}



