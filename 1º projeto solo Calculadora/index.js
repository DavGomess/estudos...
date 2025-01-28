let numeroAtual = '';
let numeroAnterior = '';
let operador = null;


function adicionar(valor) {
    numeroAtual += valor;
    document.getElementById('visor').value = numeroAnterior + ' ' + operador + ' ' +    numeroAtual;
    if (numeroAnterior && operador) {
        document.getElementById('visor').value = numeroAnterior + ' ' + operador + ' ' + numeroAtual;
    } else {
        document.getElementById('visor').value = numeroAtual;
        
    }
    

}

function limparCampo() {
    numeroAtual = '';
    numeroAnterior = '';
    operador = null;
    document.getElementById('visor').value = '';
}

function operadores(op) {
    if(numeroAtual !== '') {
    operador = op;
    numeroAnterior = numeroAtual;
    numeroAtual = '';

    document.getElementById('visor').value = numeroAnterior + ' ' + operador;
 }
}

function calcular() {
    if (numeroAnterior === '' || numeroAtual === '' || operador === null) {
        console.log('Erro: operação incompleta');
        return;  // Se qualquer valor necessário estiver faltando, retorna e não faz o cálculo
    }
    
    const num1 = parseFloat(numeroAnterior);
    const num2 = parseFloat(numeroAtual);


  let resultado = 0;

      if(operador === '+') {
          resultado = num1 + num2;
      }else if(operador === '-') {
          resultado = num1 - num2;
      }else if(operador === '*') {
          resultado = num1 * num2;
      }else if(operador === '/') {
          resultado = num1 / num2;
      }else if(operador === '%') {
          if (num2 === 0) {
              document.getElementById('visor').value = 'Erro';
              return;
          }
          resultado = num1 % num2;
      }
    document.getElementById('visor').value = resultado;
    
  numeroAnterior = resultado.toString();
    numeroAtual = '';
    operador = null; 

   

}
  

