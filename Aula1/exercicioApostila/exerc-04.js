// Escreva um script que solicite um número ao usuário e em seguida escreva o
// valor do número informado multiplicado por 5. O script deve continuar
// solicitando novos números até que o usuário digite um número negativo.

function numero(num) {
    const result = num * 5
        if(num < 0){
            return num
        } 
    console.log(result)        
}

numero(2)

