

let btn = document.getElementById('btn')
let colorBox = document.getElementById('channgeColor')
let codeView = document.getElementById('codeView')


btn.addEventListener('click', function(){

    let num = Math.random() * 1000000
    let code = Math.floor(num)
    let getColor = code.toString()

    colorBox.style.background = `#${getColor}`
    codeView.innerHTML = `#${getColor}`


})