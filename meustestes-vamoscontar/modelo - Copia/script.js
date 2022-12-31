let txtinicio = document.querySelector('input#txtinicio')
let txtfim = document.querySelector('input#txtfim')
let txtpasso = document.querySelector('input#txtpasso')
let res = document.querySelector('div#res')
let btnContar = document.querySelector('input#btnContar')

btnContar.onclick = function () {

    if (txtinicio.value.length == 0 || txtfim.value.length == 0 || txtpasso.value.length == 0) {
        alert("[ERRO] Preencha os campos necessários")
    } else {
        let inicio = Number(txtinicio.value)
        let fim = Number(txtfim.value)
        let passo = Number(txtpasso.value)

        res.innerHTML = '<p>Contando...</p>'

        if(inicio <= fim) {
            for(let c = inicio; c < fim; c+= passo) {
                res.innerHTML+= `${c}👉`
            }
        }else {
            for(let c = inicio; c > fim; c-= passo) {
                res.innerHTML+= ` ${c}👉`
            }
        }
        
        res.innerHTML+= `🏁`
    }
}

