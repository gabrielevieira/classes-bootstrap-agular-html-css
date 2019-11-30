// . Escreva um script que solicite a idade do usuário e em seguida escreva a
// mensagem ‘Você é adulto!’ caso a idade informada seja maior ou igual a 18.

var params = 13


function idade(params) {
    if (params >= 18) {
        console.log("Você é adulto !!")        
          } else if (params >= 14 && params <= 17 ) {
             console.log("Você é adolescente !!")
              } else if (params >= 13) {
                  console.log("Você é criança !!")
    }    
}

idade(params)