
function calc(num1, num2, opcao) {
    if(num1 < 0  ||  num2 < 0) {
        console.log('Informe dois números validos !')
    }
    
    if(opcao == 'A'){
        return num1 + num2;

    }else if (opcao == 'B'){
        return num1 > num2 ? num1 - num2 : num2 - num1;

    }else if (opcao == 'C'){
        return num1 % num2;
        
    }else if (opcao == 'D'){
        return num1 / nume2;
        
    }else if (opcao == 'E'){
        console.log('Opcao inválida');
 
    }
}

console.log(calc(10, 5, 'E'))