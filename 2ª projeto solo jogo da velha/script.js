const quadradoMaior = document.getElementById('quadradoMaior')
let = jogadorAtual = 'X';
let  estadoTabuleiro = ['', '', '', '', '', '', '', '', ''];
const player1 = document.getElementById('player1') 
const player2 = document.getElementById('player2')
const quadrados = document.querySelectorAll('.quadradoUnico');

 quadrados.forEach((quadrado, index) => {
   quadrado.addEventListener('click', function () {
     if (!quadrado.innerText) {
        quadrado.innerText = jogadorAtual;
        estadoTabuleiro[index] = jogadorAtual;  

        if (verificarVitoria(estadoTabuleiro)) {
            alert(`Parabéns, ${jogadorAtual === 'X' ? player1.value || 'Jogador X' : player2.value || 'Jogador O'} venceu!`);
            return;
          }
        jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';

       
     }

   });
 });

 function verificarVitoria(tabuleiro) {
    const jogador1 = player1.value || 'Jogador X';
    const jogador2 = player2.value || 'Jogador O';

    // Linhas
    if (tabuleiro[0] === tabuleiro[1] && tabuleiro[1] === tabuleiro[2] && tabuleiro[0] !== '') {
        alert(`Parabéns, ${tabuleiro[0] === 'X' ? jogador1 : jogador2} venceu!`);
        return true;
    }
    if (tabuleiro[3] === tabuleiro[4] && tabuleiro[4] === tabuleiro[5] && tabuleiro[3] !== '') {
        alert(`Parabéns, ${tabuleiro[3] === 'X' ? jogador1 : jogador2} venceu!`);
        return true;
    }
    if (tabuleiro[6] === tabuleiro[7] && tabuleiro[7] === tabuleiro[8] && tabuleiro[6] !== '') {
        alert(`Parabéns, ${tabuleiro[6] === 'X' ? jogador1 : jogador2} venceu!`);
        return true;
    }

    // Colunas
    if (tabuleiro[0] === tabuleiro[3] && tabuleiro[3] === tabuleiro[6] && tabuleiro[0] !== '') {
        alert(`Parabéns, ${tabuleiro[0] === 'X' ? jogador1 : jogador2} venceu!`);
        return true;
    }
    if (tabuleiro[1] === tabuleiro[4] && tabuleiro[4] === tabuleiro[7] && tabuleiro[1] !== '') {
        alert(`Parabéns, ${tabuleiro[1] === 'X' ? jogador1 : jogador2} venceu!`);
        return true;
    }
    if (tabuleiro[2] === tabuleiro[5] && tabuleiro[5] === tabuleiro[8] && tabuleiro[2] !== '') {
        alert(`Parabéns, ${tabuleiro[2] === 'X' ? jogador1 : jogador2} venceu!`);
        return true;
    }

    // Diagonais
    if (tabuleiro[0] === tabuleiro[4] && tabuleiro[4] === tabuleiro[8] && tabuleiro[0] !== '') {
        alert(`Parabéns, ${tabuleiro[0] === 'X' ? jogador1 : jogador2} venceu!`);
        return true;
    }
    if (tabuleiro[2] === tabuleiro[4] && tabuleiro[4] === tabuleiro[6] && tabuleiro[2] !== '') {
        alert(`Parabéns, ${tabuleiro[2] === 'X' ? jogador1 : jogador2} venceu!`);
        return true;
    }

    // Sem vitória
    return false;
}


