document.write("<h1>Bem vindo ao JavaScript</h1>")

// JavaScript
// (a += b) equivale a (a = a + b )

//1==="1" (false)

//OPERÇÃO TERNARIO
var idade = 18;
undefined
var mensagem = idade >= 18 ? "Maior" : "Menor";
undefined
console.log(mensagem);

var humano = "feminino"
undefined
var mensagem = sexo = humano ? "feminino" : "masculino";
undefined
console.log(humano)


//Operação Switch

let mesAtual = 'janeiro'
undefined
switch (mesAtual) {
    case 'janeiro':
        console.log('Escolhido mês de Janeiro')
        break;

    case 'fevereiro':
        console.log('Escolhido mês de Fevereiro')
        break;

    case 'março':
        console.log('Escolhido mês de Março')
        break;

}

//Operacao while

while (cont < 10) {
    console.log(cont);
    cont++;
}

// Operacao for

for (var count = 10; count < 1000; count++) {
    console.log(count);
}


//Operacao for in

var contato = { nome: 'Nome do Contato', email: 'contato@contato.com.br', telefone: '92929299292' }

for (var prop in contato) {
    console.log("obj " + prop + "=" + contato[prop]);
}
//  obj nome= Nome do Contato
//  obj email= contato@contato.com.br
//  obj telefone=92929299292


//remove os espaços
texto.trim().lenght