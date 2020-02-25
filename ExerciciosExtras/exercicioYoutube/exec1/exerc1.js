function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('foto')
    var date = new Date()
    var hora = 19

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'manha.png'
        document.body.style.background = 'yellow'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = 'tarde.png'
        document.body.style.background = 'red'
    } else {
        //BOA NOITE
        img.src = 'noite.png'
        document.body.style.background = 'green'
    }

}
