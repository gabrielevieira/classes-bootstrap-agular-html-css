// . Escreva um script que solicite uma frase para o usuário e em seguida escreva a
// frase invertida.

function inverter(s) {
    const frase = s.split('').reverse().join('');
    console.log("Frase invertida: " + frase)
    }    

inverter("A casa dela é linda!")