var lamp = window.document.getElementById('lampada')

function estaQuebrada(){
    return lamp.src.indexOf('quebrado') >-1
}
function Ligar(){
    if(!estaQuebrada()){
    lamp.src = 'ligado.svg'}
}
function Desligar(){
    if(!estaQuebrada()){
    lamp.src = 'desligado.svg'}
}

lamp.addEventListener('click', Quebrar)
function Quebrar(){
    lamp.src = 'quebrado.svg'
}