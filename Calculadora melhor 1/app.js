var inputPrimeiroNumero = document.querySelector("#primeiro-numero");

var inputSegundoNumero = document.querySelector("#segundo-numero");

var spanResultado1 = document.querySelector("#resultado1");

var spanResultado2 = document.querySelector("#resultado2");


function somar(params) {
    
    var resultado =  inputPrimeiroNumero.valueAsNumber + inputSegundoNumero.valueAsNumber

    spanResultado1.textContent = "A soma: " + inputPrimeiroNumero.valueAsNumber +  " + " + inputSegundoNumero.valueAsNumber + " = " + resultado
    spanResultado2.textContent = " "

}

function subtrair(params) {
    var resultado =  inputPrimeiroNumero.valueAsNumber - inputSegundoNumero.valueAsNumber

    spanResultado1.textContent = "A subtração: " + inputPrimeiroNumero.valueAsNumber +  " - " + inputSegundoNumero.valueAsNumber + " = " + resultado
    spanResultado2.textContent = " "
}

function multiplicar(params) {
    var resultado =  inputPrimeiroNumero.valueAsNumber * inputSegundoNumero.valueAsNumber

    spanResultado1.textContent = "A multiplicação: " + inputPrimeiroNumero.valueAsNumber +  " x " + inputSegundoNumero.valueAsNumber + " = " + resultado
    spanResultado2.textContent = " "
}

function dividir(params) {
    var resultado =  inputPrimeiroNumero.valueAsNumber / inputSegundoNumero.valueAsNumber

    spanResultado1.textContent = "A divisão: " + inputPrimeiroNumero.valueAsNumber +  " ÷ " + inputSegundoNumero.valueAsNumber + " = " + resultado
    spanResultado2.textContent = " "
}

function mod(params) {
    var resultado =  inputPrimeiroNumero.valueAsNumber % inputSegundoNumero.valueAsNumber
    var resultado1 = (inputPrimeiroNumero.valueAsNumber / inputSegundoNumero.valueAsNumber).toFixed(0)

    spanResultado1.textContent = "A divisão: " + inputPrimeiroNumero.valueAsNumber +  " ÷ " + inputSegundoNumero.valueAsNumber + " = " + resultado1
    spanResultado2.textContent = "Resta = " + resultado
}

function potencia(params) {
    var resultado =  inputPrimeiroNumero.valueAsNumber ** inputSegundoNumero.valueAsNumber

    spanResultado1.textContent = "A potencialização: " + inputPrimeiroNumero.valueAsNumber +  " ^ " + inputSegundoNumero.valueAsNumber + "  = " + resultado
    spanResultado2.textContent = " "
}

function porcentagem(params) {
    var resultado =  (inputPrimeiroNumero.valueAsNumber/100) * inputSegundoNumero.valueAsNumber

    spanResultado1.textContent = "A porcentagem: " + inputPrimeiroNumero.valueAsNumber +  "% de " + inputSegundoNumero.valueAsNumber + " = " + resultado
    spanResultado2.textContent = " "
}

function raiz (params) {
    var resultado1 =  Math.sqrt(inputPrimeiroNumero.valueAsNumber)
    var resultado2 =  Math.sqrt(inputSegundoNumero.valueAsNumber)
   
    spanResultado1.textContent = "A raiz quadrada de: " +  " √ " + inputPrimeiroNumero.valueAsNumber + " = " + resultado1
    spanResultado2.textContent = "A raiz quadrada de: " +  " √ "  + inputSegundoNumero.valueAsNumber + " = " + resultado2 

}