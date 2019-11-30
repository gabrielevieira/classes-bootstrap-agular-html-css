// Escreva um script que solicite quatro palavras ao usuário e em seguida
// apresente todas as palavras separadas por um traço(‘ - ’)

function palavras(value) {
    result = value.replace(" ", "-" ) 
    console.log("Frase com Traço: " + result )   
}
palavras("Oi tudo bem linda")