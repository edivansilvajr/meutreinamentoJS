let btnAdicionar = document.getElementById('adicionarBtn')
let txtnome = document.getElementById('txtnome')
let txtidade = document.getElementById('txtidade')
let listaNomes = []


// Cabeçalho da tabela -----------------------------------------------
let table = document.getElementById('tabelaCadastro')
let thead = document.createElement('thead')
let tbody = document.createElement('tbody')
let tr = document.createElement('tr')
let thNome = document.createElement('th')
let thIdade = document.createElement('th')
let thAcao = document.createElement('th')

let thNometxt = document.createTextNode('Nome')
let thIdadetxt = document.createTextNode('Idade')
let thAcaotxt = document.createTextNode('Ação')

table.appendChild(thead).appendChild(tr).appendChild(thNome).appendChild(thNometxt)
table.appendChild(thead).appendChild(tr).appendChild(thIdade).appendChild(thIdadetxt)
table.appendChild(thead).appendChild(tr).appendChild(thAcao).appendChild(thAcaotxt)
//  fim do cabeçalho -----------------------------------------------


// Validações
btnAdicionar.onclick = function () {
    if (txtnome.value.length == 0 || txtidade.value.length == 0) {
        alert('Favor preencher os campos necessários')
    } else if (!isNaN(txtnome.value)) {
        alert('Digite seu nome corretamente')
    } else if (isNaN(txtidade.value)) {
        alert('Digite apenas números no campo idade')
    } else {
        let idade = Number(txtidade.value)

        if (idade < 18) {
            alert('Sua idade não se adequa aos pre requisitos')
        }

        if (listaNomes.indexOf(txtnome.value.toUpperCase()) != -1) {
            alert('Esse nome ja esta na lista')
        } else {
            listaNomes.push(txtnome.value.toUpperCase())

            // Corpo da tabela ----------------------------------
            let tr1 = document.createElement('tr')
            let tdNome = document.createElement('td')
            let tdIdade = document.createElement('td')
            let tdAcao = document.createElement('td')
            let btnExcluir = document.createElement('button')

            for (let pos in listaNomes) {
                tr1.setAttribute('id', `linha${pos}`)
                btnExcluir.setAttribute('id', `btn${pos}`)
            }

            btnExcluir.onclick = function () {
                tr1.remove()

            }


            let tdNometxt = document.createTextNode(txtnome.value.toUpperCase())
            let tdIdadetxt = document.createTextNode(idade)
            let btnExcluirtxt = document.createTextNode('Excluir')

            table.appendChild(tbody).appendChild(tr1).appendChild(tdNome).appendChild(tdNometxt)
            table.appendChild(tbody).appendChild(tr1).appendChild(tdIdade).appendChild(tdIdadetxt)
            table.appendChild(tbody).appendChild(tr1).appendChild(tdAcao).appendChild(btnExcluir).appendChild(btnExcluirtxt)

        }
    }
}