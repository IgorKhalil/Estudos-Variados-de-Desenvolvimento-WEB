const dia = document.getElementById("dia");
const hora = document.getElementById("hora");
const minuto = document.getElementById("minuto");
const segundo = document.getElementById("segundo");
const lancamento = "31 dec 2023"

function countDown(){
    const dataLanc = new Date(lancamento);
    const hoje = new Date();

    const segTotal = (dataLanc - hoje)/1000;
    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24;
    const finalMinutos = Math.floor(segTotal / 60) % 60;
    const finalSegundos = Math.floor(segTotal) % 60;
    

    dia.innerHTML = `<strong>${finalDias}D</strong>`
    hora.innerHTML = `<strong>${finalHoras}H</strong>`
    minuto.innerHTML = `<strong>${finalMinutos}M</strong>`
    segundo.innerHTML = `<strong>${finalSegundos}S</strong>`
}
function formatoTempo( tempo ){
    return tempo < 10? `0${tempo}` : tempo;
}
countDown();
setInterval(countDown, 1000)

function highlightCard (selector) {
    var element = querySelector(selector);
    element.classList.toggle("card-highlight");
}

function checkKeyboardCode()
{
    document.addEventListener('keydown', (event) => {
        var name = event.key;
        var code = event.code;

        alert(`tecla pressionada ${name} \r\n Key code: ${code}`);
    }, false);
}
function addKeyboardEventListeners () {
    document.addEventListener('keydown', (event) =>  {

    var ingresso1 = document.getElementById("quinta");
    var ingresso2 = document.getElementById("sexta");
    var ingresso3 = document.getElementById("sabado");
    var ingresso4 = document.getElementById("domingo");
    
    var code = event.code;
    if(code == 'Digit1') {
        ingresso1.classList.toggle("card-highlight");
        ingresso2.classList.remove("card-highlight");
        ingresso3.classList.remove("card-highlight");
        ingresso4.classList.remove("card-highlight");
    }
    if(code == 'Digit2') {
        ingresso1.classList.remove("card-highlight");
        ingresso2.classList.toggle("card-highlight");
        ingresso3.classList.remove("card-highlight");
        ingresso4.classList.remove("card-highlight");
    }
    if(code == 'Digit3') {
        ingresso1.classList.remove("card-highlight");
        ingresso2.classList.remove("card-highlight");
        ingresso3.classList.toggle("card-highlight");
        ingresso4.classList.remove("card-highlight");
    }
    if(code == 'Digit4') {
        ingresso1.classList.remove("card-highlight");
        ingresso2.classList.remove("card-highlight");
        ingresso3.classList.remove("card-highlight");
        ingresso4.classList.toggle("card-highlight");
    } 
} , false)
}

addKeyboardEventListeners();