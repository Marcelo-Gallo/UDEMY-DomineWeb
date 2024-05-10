var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

function posicaoRandomica(){
    var posicaoX = Math.floor(Math.random() * largura) - 90 //a posicao randomica é, pelo menos, 90px menor que o limite, previnindo que estoure o limite da tela e crie uma barra de rolagem
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX //se posicaoX for menor que zero, recebe zero, se não recebe ela mesma
    posicaoY = posicaoY < 0 ? 0 : posicaoY //mesmo para posicaoY

    console.log(posicaoX, posicaoY)

    //cria o elemento html
    var mosquito = document.createElement('img')
    mosquito.src = 'Imagens/mosquito.png'
    mosquito.className = 'mosquito1'
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'

    document.body.appendChild(mosquito)
}