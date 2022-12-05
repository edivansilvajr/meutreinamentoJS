function verificar() {
    let anoatual = new Date().getFullYear()
    let txtano = window.document.getElementById('txtano')
    let anodenascimento = Number(txtano.value)
    let idade = anoatual - anodenascimento
    let radsex = window.document.getElementsByName('radsex')
    let res = window.document.getElementById('res')
    let genero = ''

    let img = window.document.createElement('img')

    if(txtano.value.length == 0 || txtano.value >= anoatual) {
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        if(radsex[0].checked) {
            genero = 'homem'

            if(idade < 12) {
                img.src = 'foto-bebezinho.png'
            } else if(idade  < 25) {
                img.src = 'foto-menino.png'
            } else if(idade < 60) {
                img.src = 'foto-homem.png'
            } else {
                img.src = 'foto-idoso.png'
            }

        } else {
            genero = 'mulher'

            if(idade < 12) {
                img.src = 'foto-bebezinha.png'
            } else if(idade  < 25) {
                img.src = 'foto-menina.png'
            } else if(idade < 60) {
                img.src = 'foto-mulher.png'
            } else {
                img.src = 'foto-idosa.png'
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = (`<p>Detectamos ${genero} com ${idade} anos</p>`)
        res.appendChild(img)
    }
}