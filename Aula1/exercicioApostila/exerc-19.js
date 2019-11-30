// Escreva um programa que solicite a nota de um aluno e em seguida escreva a
// mensagem “Aprovado” caso a nota seja igual ou maior que 6, senão escreva a
// mensagem “Reprovado”.


var nota = 5

function boletim(nota) {
    if (nota >= 6) {
        console.log("Você foi APROVADO !!")        
          } else {
             console.log("Você foi REPROVADO !!")
              }
            }

boletim(nota)