let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let quatiTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)  / 2 * criancas);
    let quatiTotalCerveja = cervejaPP(duracao) * adultos;
    let quatiTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao)  / 2 * criancas);


    resultado.innerHTML = `<p>${quatiTotalCarne/1000} kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(quatiTotalCerveja/355)} LATAS de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(quatiTotalBebidas/2000)} garrafas de Bebida</p>`

}



function carnePP(duracao) {
    if(duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao) {
    if(duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function bebidasPP(duracao) {
    if(duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}