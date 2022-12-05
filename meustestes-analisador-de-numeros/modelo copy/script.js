let txtn = window.document.getElementById('txtn')
let list = window.document.getElementById('sellist')
let res = window.document.getElementById('res')
let valores = []

function adicionar() {
    let n = Number(txtn.value)

    if(txtn.value < 1 || txtn.value > 100 || valores.indexOf(n) != -1) {
        alert('[ERRO] Valor inválido ou ja encontrado na lista')
    } else {
        let item = window.document.createElement('option')

        valores.push(n)
        item.text = `Valor ${n} adicionado`

        list.appendChild(item)
    }
    txtn.value = ''
    txtn.focus()
    res.innerHTML = ''
}

function finalizar() {
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0

    for(let pos in valores) {
        if(maior < valores[pos]) {
            maior = valores[pos]
        }

        if(menor > valores[pos]) {
            menor = valores[pos]
        }

        soma+= valores[pos]
    }

    res.innerHTML = `<p>Ao todo temos ${valores.length} números cadastrados</p>`
    res.innerHTML += `<p>O maior número cadastrado foi ${maior}</p>`
    res.innerHTML += `<p>O menor número cadastrado foi ${menor}</p>`
    res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
    res.innerHTML += `A média entres os valores é ${soma / valores.length}`
    
    txtn.focus()
}