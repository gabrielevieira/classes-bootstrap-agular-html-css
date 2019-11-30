// . Escreva todos os números pares entre o número 101 e o número 200


function numerosPares() {
    for (let i = 101; i < 200; i++) {
        const element = i        
         if ((element%2) == 0) {
            console.log("Numero Par: " + element)
        }       
    }       
}
numerosPares()


