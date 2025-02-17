const listaTransacao = document.getElementById('listaTransacao')
const fazerTransacao = document.getElementById('fazerTransacao')
const nomeTransacao = document.getElementById('nomeTransacao')
const valorTransacao = document.getElementById('valorTransacao')
const botaoEditar = document.getElementById('botaoEditar')
const botaoSalvar = document.getElementById('botaoSalvar')
let idEdicao = null

async function getTransacoes() {
    const response = await fetch('http://localhost:3000/transacoes')
    const transacoes = await response.json()
    transacoes.forEach(transacao => {
        console.log(transacao.nome, transacao.valor);

        const li = document.createElement('li')
        li.id = `transacao-${transacao.id}`;

       const spanNome = document.createElement('span')
       spanNome.classList.add('nome')
       spanNome.textContent = transacao.nome;

       const spanValor = document.createElement('span')
       spanValor.classList.add('valor')
       spanValor.textContent = (`R$ ${transacao.valor}`)
      

       idEdicao = transacao.id

      
        li.appendChild(spanNome)
        li.appendChild(spanValor)


        listaTransacao.appendChild(li)
      
    });
    console.log(transacoes)
}
getTransacoes()

async function novaTransacao() {
    fazerTransacao.addEventListener('click', async function(event) {
        event.preventDefault()
        try {
            let nome = nomeTransacao.value
            let valor = valorTransacao.value

            if(nome === "" || valor === "") {
                throw new Error('todos os campo precisam ser preenchidos!')
            }
            const transacao = {
                nome: nome,
                valor: valor
            }

            const enviarTransacao = await fetch('http://localhost:3000/transacoes', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(transacao)
            
            })

            if (!enviarTransacao.ok) {
                throw new Error('Erro ao adicionar transação');
            }

            const novaTransacao = await enviarTransacao.json();
            console.log('Nova Transação:', novaTransacao)

            adicionarTransacaoNaLista(novaTransacao);
                      
           
            nomeTransacao.value = '';
            valorTransacao.value = '';
            

        } catch (error) {
            alert('Erro encontrado: todos os campo precisam ser preenchidos!')
            console.log('Erro encontrado:', error.message)
            
        }
      
    
    })    
}

async function adicionarTransacaoNaLista(transacao) {
    const li = document.createElement('li');
    li.id = `transacao-${transacao.id}`;
    
    li.innerHTML = `
        <span class="nome">${transacao.nome}</span>
        <span class="valor">${transacao.valor}</span>
        <button class="botao-excluir" type="button">Excluir</button>

    `;
    
    document.getElementById('listaTransacao').appendChild(li);
    console.log('ID da Transação:', transacao.id);

}




async function editar() {
    const listaTransacao  = document.querySelector('#listaTransacao')

    listaTransacao .addEventListener('click', function(event) {
        const itemClicado = event.target.closest('li');

        if (itemClicado) {
            const nomeSpan = itemClicado.querySelector('.nome')
            const valorSpan = itemClicado.querySelector('.valor')

        if (nomeSpan && valorSpan) {
            const nome = nomeSpan.textContent
            const valor = valorSpan.textContent

            idEdicao = itemClicado.id.replace('transacao-', '')

            nomeTransacao.value = nome
            valorTransacao.value = valor.replace("R$ ", "")
           

            console.log('Item selecionado para edição:', nome, valor);
             
        } else {
            console.error('Estrutura do li incorreta')
        }
        
       
        }
    
    })
}



async function salvar() {
    botaoSalvar.addEventListener('click', async function() {
        try {
            if (idEdicao === null) {
                alert('Nenhuma transação selecionada para editar!');
                return;
            }

            let nomeSalvar = nomeTransacao.value;
            let valorSalvar = valorTransacao.value
           
        
            console.log("Dados a serem salvos:");
            console.log('ID:', idEdicao);
            console.log('Nome:', nomeSalvar);
            console.log('Valor:', valorSalvar);
           
            
            const response =  await fetch(`http://localhost:3000/transacoes/${idEdicao}`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json'
            },
                body:JSON.stringify({
                    nome: nomeSalvar,
                    valor: valorSalvar
                })
            })
             
            if (!response.ok) {
                throw new Error('Erro ao salvar requisição');
              }
            
             
              const li = document.querySelector(`#transacao-${idEdicao}`);
              if(li) {
              
               li.innerHTML = `
               <span class="nome">${nomeSalvar}</span>
               <span class="valor">${valorSalvar}</span>
              `;
              }

              nomeTransacao.value = "";
              valorTransacao.value = "";

              idEdicao = null;

            console.log("Transação salva com sucesso");
            alert("Transação salva com sucesso")
        } catch (error) {
            console.log('Erro:', error);
        }
      })
    }

    document.getElementById('listaTransacao').addEventListener('click', async function(event) {
        if (event.target.classList.contains('botao-excluir')) {
            const itemClicado = event.target.closest('li');
            
            if (itemClicado) {
                const idExcluir = itemClicado.id.replace('transacao-', '');
                console.log('ID a excluir:', idExcluir);
                
                try {
                    const response = await fetch(`http://localhost:3000/transacoes/${idExcluir}`, {
                        method: 'DELETE'
                    });
    
                    if (!response.ok) {
                        throw new Error('Erro ao excluir a transação');
                    }
    
                    // Remove o item do DOM
                    itemClicado.remove();
                    console.log('Transação excluída com sucesso');
    
                } catch (error) {
                    console.error('Erro:', error);
                }
            }
        }
    });
    
    novaTransacao();
    editar();
    salvar();