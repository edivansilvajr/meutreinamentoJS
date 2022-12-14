let valores = [5, 8, 2, 9, 3]
console.log(valores)

valores.sort()
console.log(valores)

valores.push(1)
console.log(valores)

console.log(valores[3])

valores[3] = 6
console.log(valores)

console.log(`O vetor contém ${valores.length} elementos`)

console.log(`A posição 0 contém o elemento ${valores[0]}`)

let busca = valores.indexOf(9)

if (busca == -1) {
    console.log('Valor não encontrado na lista')
} else {
    console.log(`A chave ${busca} contém o elemento ${valores[busca]}`)
}

valores.pop()
console.log(valores)

valores.unshift(1) 
console.log(valores)

valores.shift()
console.log(valores)

