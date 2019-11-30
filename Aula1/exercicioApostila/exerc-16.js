// Escreva um script que solicite um número para o usuário e em seguida escreva
// uma mensagem informando se o número informado é múltiplo de 5. Para que
// um número seja múltiplo de 5, ele deve ser maior ou igual a 5 e o resto da divisão
// por 5 deve ser igual a zero.

var params = 10


function multiploCinco(params) {
    if (params >= 5 && params % 5 == 0) {
        console.log("É multiplo de 5!")        
    } else {
        console.log("Não é multiplo de 5!")
    }
}

multiploCinco(params)