var altura =0 ; 
var largura = 0;
var vidas = 0
var tempo =10

var nivel = window.location.search.replace("?", "")
var tempoAleatorio = 1500


switch(nivel){
    case '1':
        tempoAleatorio = 1500
    break
    case '2':
        tempoAleatorio = 1000
    break
    case '3':
        tempoAleatorio = 750
    break
}

function tamanhoTela(){
    altura = window.innerHeight
    largura = window.innerWidth
}
tamanhoTela()

var cronometro = setInterval(function(){
    
    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = "wins.html"
    }
    else{
        document.getElementById("tempo").innerHTML=tempo
        tempo -=1
    }
},1000)

function posicaoRandom(){
    var posiX = Math.floor(Math.random() * largura) - 100
    var posiY = Math.floor(Math.random() * altura) - 100
    var mosquito = document.getElementById("mosquito")
  

    if ( mosquito != null){
        document.body.removeChild(mosquito)
        
        if(vidas < 3){
            vidas++
            console.log(vidas)
            document.getElementById('c'+ vidas).src = "imgs/coracao_vazio.png"
        }
        else{
            window.location.href = "over.html"
        }
        

        

    }

    posiX = posiX < 0 ? 0 : posiX
    posiY = posiY < 0 ? 0 : posiY

    var mosquito = document.createElement("img")
    mosquito.src = "imgs/mosca.png"
    mosquito.className = tamanhoAleatorio() +" "+ ladoAleatorio()

    mosquito.style.position = "absolute"
    mosquito.style.left = posiX + "px"
    mosquito.style.top  = posiY + "px"
    mosquito.id = 'mosquito'

    mosquito.onclick=function(){
        this.remove()
    }

    document.body.appendChild(mosquito)



    
}

function tamanhoAleatorio(){
    var classes = Math.floor(Math.random () * 3)

    switch(classes){
        case 0:
            return "mosquito1"
        case 1:
            return"mosquito2"
        case 2:
            return "mosquito3"
    }
}
function ladoAleatorio(){
    var classes = Math.floor(Math.random () * 2)

    switch(classes){
        case 0:
            return "ladoA"
        case 1:
            return "ladoB"
    }
}