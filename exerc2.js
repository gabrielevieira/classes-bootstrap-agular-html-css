function verificador() {

    var data = new Date()
    var ano = data.getFullYear()
    var anoNsc = document.getElementById("dataNsc")
    var res = document.querySelector('div#res')

    if (anoNsc.value.length === 0 || anoNsc.value > ano) {
        window.alert('[ERRO]Verifique os dados e tente novamente')
    } else {
        var sexo = document.getElementsByName('radsex')
        var idade = ano - anoNsc.value
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')


        var genero = ""
        if (sexo[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'menino.png')

            } else if (idade < 45) {
                //Jovem
                img.setAttribute('src', 'homemJovem.png')

            } else {
                //Idosa
                img.setAttribute('src', 'homemIdoso.png')
            }

        }
        else if (sexo[1].checked) {
            genero = "Mulher"
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'menina.png')

            } else if (idade < 45) {
                //Jovem
                img.setAttribute('src', 'mulherJovem.png')

            } else {
                //Idosa
                img.setAttribute('src', 'mulherIdosa.png')
            }

        }

        res.innerHTML = `Detectamos ${genero} com idade  ${idade} anos  `
        res.appendChild(img)


    }



}