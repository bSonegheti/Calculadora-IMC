//Desafio 2

// Desafio calculo de peso.
// exiba seu nome, idade e diga seu imc e diga se:
// ele está abaixo, acima ou no peso ideal

// formula > imc = peso / ( altura * altura )

// let peso;
let imc;
// let idade;
// let nome;
// let altura;
let resultado;

const nome = document.getElementById('nome');
const peso = document.getElementById('peso');
const idade = document.getElementById('idade');
const altura = document.getElementById('altura');
const texto = document.getElementById('texto');

const botao = document.getElementById('button').onclick = function() {

    imc = (Number(peso.value) / ( Number(altura.value) * Number(altura.value) ))

    if (imc < 18.5) {
        resultado = 'você está abaixo do peso.';
    }else if (imc >= 18.5 && imc < 25 ) {
        resultado = 'Você está no peso ideal.';
    }else if(imc > 25 ) {
        resultado = 'Você está com sobrepeso.';
    };

    texto.innerHTML = `<p><strong>${nome.value}</strong></p>`;
    texto.innerHTML += `<p><strong>Seu imc é ${imc.toFixed(2)}</strong></p>`;
    texto.innerHTML += `<p><strong>${resultado}</strong></p>`;
}; 
