var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const lista = [];
function nomeUsuarioGitHub() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const nomeUsuario = prompt("Insira o nome de usuario no GitHub:");
            if (!nomeUsuario) {
                console.log("Nenhum nome inserido. Cancelando a operação.");
                return;
            }
            const response = yield fetch(`https://api.github.com/users/${nomeUsuario}`);
            const dados = yield response.json();
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
            };
            lista.push(usuario);
            alert(`Usuário ${nomeUsuario} adicionado com sucesso!`);
        }
        catch (error) {
            console.error("message:", error);
        }
    });
}
function adicionarUsuarios() {
    return __awaiter(this, void 0, void 0, function* () {
        let continuar = true;
        while (continuar) {
            yield nomeUsuarioGitHub(); // Adiciona um usuário antes de perguntar
            continuar = confirm("Deseja adicionar outro usuário?"); // Agora a pergunta aparece após adicionar
        }
        alert("Todos os usuários foram cadastrados.");
    });
}
function infoUsuarioERepositorio() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const nomeUsuario = prompt("Insira o nome do usuario que deseja acessar informações:");
            const infoUsuario = lista.find(info => info.login === nomeUsuario);
            if (!infoUsuario) {
                throw new Error("Usuário não encontrado na lista.");
            }
            console.log(infoUsuario);
            const response = yield fetch(infoUsuario.repos_url); // Verificando se a URL do repositório é válida
            console.log(infoUsuario.repos_url);
            if (!response.ok) {
                throw new Error("Erro ao buscar dados dos repositórios.");
            }
            const dados = yield response.json();
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
            }
            else {
                console.log("Nenhum repositório encontrado.");
            }
        }
        catch (error) {
            console.error("message:", error);
        }
    });
}
function somaRepositorio() {
    return __awaiter(this, void 0, void 0, function* () {
        const soma = lista.reduce((acumulador, usuario) => acumulador + usuario.public_repos, 0);
        console.log(`Total de repositórios dos usuários: ${soma}`);
    });
}
function listaDeUsuarios() {
    return __awaiter(this, void 0, void 0, function* () {
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
    });
}
function executar() {
    return __awaiter(this, void 0, void 0, function* () {
        let opcao;
        do {
            opcao = parseFloat(prompt("O que você deseja fazer?\n\n1º Adicionar um usuario a lista\n2º Mostrar informações de um usuario do GitHub\n3º Somar os repositorios de todos os usuarios da lista\n4º Listar todos os usuarios da lista\n5º\n6º SAIR"));
            switch (opcao) {
                case 1:
                    yield adicionarUsuarios();
                    break;
                case 2:
                    yield infoUsuarioERepositorio();
                    break;
                case 3:
                    yield somaRepositorio();
                    break;
                case 4:
                    yield listaDeUsuarios();
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
    });
}
executar();
