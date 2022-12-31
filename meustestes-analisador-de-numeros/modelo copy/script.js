let txtn = document.querySelector('input#txtn')
let selList = document.querySelector('select#selList')
let res = document.querySelector('div#res')
let btnAdicionar = document.querySelector('input#btnAdicionar')
let btnFinalizar = document.querySelector('input#btnFinalizar')
let btnLimpar = document.querySelector('input#btnLimpar')
let numberList = []

btnAdicionar.onclick = function () {
    let n = Number(txtn.value)

    if (txtn.value.length == 0) {
        alert('O campo "Número" não pode ficar vazio')
    } else if (n < 1 || n >= 100) {
        alert('Número inválido, digite um número entre 1 e 100')
    } else {
        let item = document.createElement('option')

        if (numberList.indexOf(n) == -1) {
            numberList.push(n)

            item.text = `Valor ${n} adicionado`

            selList.appendChild(item)
        } else {
            alert('Número já se encontr na lista')
        }

    }
    txtn.value = ''
    txtn.focus()
    res.innerHTML = ''
}

btnFinalizar.onclick = function () {
    let maior = numberList[0]
    let menor = numberList[0]
    let soma = 0

    for (let pos in numberList) {
        if (maior < numberList[pos]) {
            maior = numberList[pos]
        }

        if (menor > numberList[pos]) {
            menor = numberList[pos]
        }

        soma += numberList[pos]
    }
    res.innerHTML = `<p>Ao todo são ${numberList.length} números cadastrados</p>`
    res.innerHTML += `<p>O maior número cadastrado foi ${maior}</p>`
    res.innerHTML += `<p>O menor número cadastrado foi ${menor}</p>`
    res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
    res.innerHTML += `A média dos valores digitados é ${soma / numberList.length}`

    txtn.focus()
}

btnLimpar.onclick = function () {
    numberList = []
    selList.innerHTML = ''
    txtn.focus()
}