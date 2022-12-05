function carregar() {
    let horaatual = new Date().getHours()
    let res = window.document.getElementById('res')
    let img = window.document.getElementById('img')
    let corpo = window.document.body

    

    res.innerHTML = `<p>Agora são ${horaatual} horas</p>`

    if(horaatual < 12) {
        img.src = 'imagens/fotomanha.png'
        corpo.style.backgroundColor = '#45AAF1'
    } else if(horaatual < 18) {
        img.src = 'imagens/fototarde.png'
        corpo.style.backgroundColor = '#FF9507'
    } else {
        img.src = 'imagens/fotonoite.png'
        corpo.style.backgroundColor = '#001219'
    }
}