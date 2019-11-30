// Escreva um script que solicite uma frase ao usuário e em seguida apresente a
// frase digitada separada em duas partes.


function frase(value) {
    result = value.split("  " + 2)
    console.log("Frase Separada: " + result)
    
}

frase("A rua é bonita mais é perigosa !!")