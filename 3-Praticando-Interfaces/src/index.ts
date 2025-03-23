const lista = []

async function nomeUsuarioGitHub() {
    try {
        const nomeUsuario = prompt("Insira o nome de usuario no GitHub:")
        if (!nomeUsuario) {
            console.log("Nenhum nome inserido. Cancelando a operação.");
            return;
        }
        const response = await fetch(`https://api.github.com/users/${nomeUsuario}`)
        const dados = await response.json();

        if (!response.ok) {
            throw new Error(`Not Found`);
           
        }

        const usuario = {
            id: dados.id,
            login: dados.login,
            name: dados.name,
            bio: dados.bio,
            public_repos: dados.public_repos,
            repos_url: dados.repos_url
        }

        lista.push(usuario)
        alert(`Usuário ${nomeUsuario} adicionado com sucesso!`);
    } catch (error) {
        console.error("message:", error);
    }
   }   

async function adicionarUsuarios() {
       let continuar = true;
    
       while (continuar) {
            await nomeUsuarioGitHub(); // Adiciona um usuário antes de perguntar
           continuar = confirm("Deseja adicionar outro usuário?"); // Agora a pergunta aparece após adicionar
       }
   
       alert("Todos os usuários foram cadastrados.");
   }


async function infoUsuarioERepositorio() {
    try {
        const nomeUsuario = prompt("Insira o nome do usuario que deseja acessar informações:");
        const infoUsuario = lista.find(info => info.login === nomeUsuario);

        if (!infoUsuario) {
            throw new Error("Usuário não encontrado na lista.");
        }

        console.log(infoUsuario);
        const response = await fetch(infoUsuario.repos_url);  // Verificando se a URL do repositório é válida
        console.log(infoUsuario.repos_url);

        if (!response.ok) {
            throw new Error("Erro ao buscar dados dos repositórios.");
        }

        const dados = await response.json();

        // Verificando se há repositórios na resposta
        if (dados.length > 0) {
            const primeiroRepo = dados[0];
            const segundoRepo = dados[1];
            const terceiroRepo = dados[2];

            console.log(`Repositórios de ${infoUsuario.login}:`);
            console.log(`Name: ${primeiroRepo.name}`);
            console.log(`Description: ${primeiroRepo.description}`);
            console.log(`Fork: ${primeiroRepo.fork}`);
            console.log(`Stargazers_count: ${primeiroRepo.stargazers_count}`);

            if (segundoRepo) {
                console.log(" ");
                console.log(`Name: ${segundoRepo.name}`);
                console.log(`Description: ${segundoRepo.description}`);
                console.log(`Fork: ${segundoRepo.fork}`);
                console.log(`Stargazers_count: ${segundoRepo.stargazers_count}`);
            }

            if (terceiroRepo) {
                console.log(" ");
                console.log(`Name: ${terceiroRepo.name}`);
                console.log(`Description: ${terceiroRepo.description}`);
                console.log(`Fork: ${terceiroRepo.fork}`);
                console.log(`Stargazers_count: ${terceiroRepo.stargazers_count}`);
            }
        } else {
            console.log("Nenhum repositório encontrado.");
        }
    } catch (error) {
        console.error("message:", error);
    }
}

async function somaRepositorio() {
    const soma = lista.reduce((acumulador, usuario) => acumulador + usuario.public_repos, 0);
    console.log(`Total de repositórios dos usuários: ${soma}`);
    
}

async function listaDeUsuarios() {
    if (lista.length === 0) {
        console.log("A lista está vazia!");
        return;
    }
    console.log("\nLista de Usuários:");
    lista.forEach((usuario, index) => {
        console.log(`\n[${index + 1}]`);
        console.log(`ID: ${usuario.id}`);
        console.log(`Login: ${usuario.login}`);
        console.log(`Nome: ${usuario.name || "Não informado"}`);
        console.log(`Bio: ${usuario.bio || "Sem bio"}`);
        console.log(`Repositórios públicos: ${usuario.public_repos}`);
        console.log(`URL dos repositórios: ${usuario.repos_url}`);
    });
}
 


async function executar() {
    let opcao;
    do {
        opcao = parseFloat(prompt("O que você deseja fazer?\n\n1º Adicionar um usuario a lista\n2º Mostrar informações de um usuario do GitHub\n3º Somar os repositorios de todos os usuarios da lista\n4º Listar todos os usuarios da lista\n5º\n6º SAIR"));
        
        switch(opcao) {
            case 1:
                await adicionarUsuarios();
                break;
            case 2:
                await infoUsuarioERepositorio();
                break;
            case 3:
                await somaRepositorio();
                break;
            case 4:
                await listaDeUsuarios();
                break;
            case 5:
                console.log("Opção reservada");
                break;
            case 6:
                console.log("Saindo...");
                break;
            default:
                console.log("Opção inválida!");
        }
    } while (opcao !== 6);
}

executar();

