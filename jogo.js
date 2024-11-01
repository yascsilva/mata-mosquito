
let body = document.querySelector("body")

let img = document.createElement("img")
img.src = "./img/3.png"
img.style.position = "absolute"

function alteraTamanhoMosquito(){
    //numero * (max - min) + min
let NumeroAleatorio = Math.random() * (0.6 - 0.2) + 0.2
img.style.transform = `scale(${NumeroAleatorio})`
}

function geraPosicao(){
    let y = Math.random() * window.innerHeight * 0.3
    let x = Math.random() * window.innerWidth * 0.3

    img.style.top = `${y}px`
    img.style.left = `${x}px`
}

setInterval(function(){
    alteraTamanhoMosquito()
    geraPosicao()
}, 2000)



body.appendChild(img)