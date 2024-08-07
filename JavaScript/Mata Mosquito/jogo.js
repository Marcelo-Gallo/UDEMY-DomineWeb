var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal'){
    //1500 (1,5s)
    criaMosquitoTempo = 1500
} else if(nivel === 'dificil') {
    //1000 (1s)
    criaMosquitoTempo = 1000
} else if(nivel === 'chucknorris') {
    //750 (0.75s)
    criaMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {
    tempo -= 1

    if(tempo < 0){
        clearInterval(cronometro) //para cronometro
        clearInterval(criaMosquito) //para criação de moscas
        document.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }

}, 1000)

function posicaoRandomica(){

    //remove mosquito (caso exista)
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if(vidas > 3) { //game over
            window.location.href = 'fim_de_jogo.html'
        } else { //lose one life point
            document.getElementById('v' + vidas).src="Imagens/coracao_vazio.png"
            vidas++
        }
        
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90 //a posicao randomica é, pelo menos, 90px menor que o limite, previnindo que estoure o limite da tela e crie uma barra de rolagem
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX //se posicaoX for menor que zero, recebe zero, se não recebe ela mesma
    posicaoY = posicaoY < 0 ? 0 : posicaoY //mesmo para posicaoY

    console.log(posicaoX, posicaoY)

    //cria o elemento html
    var mosquito = document.createElement('img')
    mosquito.src = 'Imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosquito)
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)
    
    switch(classe) {
        case 0:
            return 'mosquito1' //return dispensa o uso do break pq interrompe a leitura da função

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch(classe) {
        case 0:
            return 'ladoA' //return dispensa o uso do break pq interrompe a leitura da função

        case 1:
            return 'ladoB'
    }
}