function contar() {
    let txtinicio = window.document.getElementById('txtinicio')
    let txtfim = window.document.getElementById('txtfim')
    let txtpasso = window.document.getElementById('txtpasso')
    let i = Number(txtinicio.value)
    let f = Number(txtfim.value)
    let p = Number(txtpasso.value)
    let res = window.document.getElementById('res')

    if(txtinicio.value.length == 0 || txtfim.value.length == 0 || txtpasso.value.length == 0) {
        alert('[ERRO] Preencha os dados corretamente')
    } else {
        if(p == 0) {
            alert('Passo inválido, considerando passo = 1')
            p = 1
        }
        res.innerHTML = '<p>Contando:</p>'

        if(i <= f) {
            for(let c = i; c <= f; c+= p) {
                res.innerHTML += (` ${c} \u{1F449}`)
            }
        }

        if(i > f) {
            for(let c = i; c >= f; c-= p) {
                res.innerHTML += (` ${c} \u{1F449}`)
            }
        }

        res.innerHTML += `\u{1F3C1}`
    }
}