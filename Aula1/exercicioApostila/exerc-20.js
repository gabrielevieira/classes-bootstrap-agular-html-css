// Escreva um script que solicite as 3 notas de um aluno e em seguida calcule o
// valor da média das notas. Caso a média seja maior ou igual a 9 escreva a
// mensagem “Conceito A”, caso a nota seja menor que 9 e maior ou igual a 7
// escreva a mensagem “Conceito B”, caso a nota seja menor que 7 e maior ou igual
// a 5 escreva a mensagem “Conceito C”, se a nota for menor que 5 escreva a
// mensagem “Conceito Insuficiente”;

var nota = 5
var nota2 = 10
var nota3 = 8

function mediaNota(){
      var media = (nota + nota2 + nota3)/3 
      console.log("A média do aluno é:" + media)
}
mediaNota()

function boletim(mediaNota) {
    if (media >= 9) {
        console.log("CONCEITO A")        
          } else if (media < 9 && media >= 7){ 
             console.log("CONCEITO B")
              }else if (media < 7  && media >= 5){ 
                console.log("CENCEITO C")
                 }else if (media < 5){ 
                    console.log("CENCEITO INSUFICIENTE")
                     }
    }

boletim()