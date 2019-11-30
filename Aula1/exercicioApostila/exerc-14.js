// Escreva um script que apresente uma lista com as opções ‘1 - Sacar’, ‘2 -
// Depositar’, ‘3 - verificar saldo’. Em seguida solicite que o usuário informe um
// número entre 1 e 3. Caso o usuário tenha informado o número 1 apresente a
// mensagem “você escolheu a opção sacar”, caso o usuário tenha informado o
// número 2 apresente a mensagem “você escolheu a opção depositar”, caso o
// usuário tenha informado o número 3, apresente a mensagem ‘você escolheu a
// opção verificar saldo’. Caso o usuário tenha informado um número fora do
// range(1,2,3) apresente a mensagem ‘Opção inválida’.

listaOpcoes = ["1 - Sacar ", "2 - Depositar", "3 - Verificar Saldo"] 
console.log(listaOpcoes)
console.log("Favor informar um número entre 1 e 3" )

var value = 1

function sacarDinheiro(value) {
    if(value == 1){
        console.log("Você escolheu a opção sacar!")
            }else if (value == 2) {
                 console.log("Você escolheu a opção depositar!")        
                 }else if(value == 3) {
                    console.log("Você escolheu a opção verificar saldo!")        
                         }else(value !== 1 && value !== 2 && value !== 3 ); { 
                             console.log("Favor digite a opção correta, valor inválido")
    } 
    
}

sacarDinheiro(2)