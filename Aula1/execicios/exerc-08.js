// Precisamos limitar as posições em que um inimigo pode andar na tela. A menor
// posição possível é 0 e a maior, 100: qualquer valor maior que 100 ou menor que
// 0 sairia fora da tela. Precisamos de uma função LimitaPosicao que recebe uma
// POSICAO que pode ter qualquer valor positivo ou negativo, verifica se ela é
// válida ou não e retorna sempre um valor corrigido entre 0 e 100. Ex: 110 = 90;

function teste(posicao1) {
       if(posicao1 < 0  ){
            return 100 - (posicao1 * -1);
       }else if( posicao1 > 100){ 
           return posicao1 - 100;
       }       
 }
 console.log(teste(105))
    


