let valores = [5,8,2,9,3]

for(let i in valores) {
    let id = i
}

function remove (event) {
    let index = event.target
    valores.splice(index, 1)
}

remove()
console.log(valores)