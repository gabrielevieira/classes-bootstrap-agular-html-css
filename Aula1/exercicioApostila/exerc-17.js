// Escreva um script que leia um número informado pelo usuário e em seguida
// escreva uma mensagem indicando se o número é par ou impar. (Considere
// número par o número cujo resto da divisão por 2 seja igual a Zero) 

var params = 3


function parOuImpar(params) {
    if (params % 2 == 0) {
        console.log("É numero par")        
    } else {
        console.log ("É numero ímpar")        
    }
    
}

parOuImpar(params)