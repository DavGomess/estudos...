const satelites = [];
// let situacao: "habitado" | "habtavel" | "inabtavel" | "inexplorado" 
function nasa(nome, coordenadas, situacao, satelite) {
    const planet = {
        nome,
        coordenadas,
        situacao,
        satelite
    };
    satelites.push(planet);
    console.log(`O planeta ${planet.nome} foi registrado!`);
}
function atualizarSituacao(nomeplaneta, novaSituacao) {
    const planeta = satelites.find(p => p.nome === nomeplaneta);
    if (planeta) {
        planeta.situacao = novaSituacao;
        console.log(`situação do planeta ${planeta.nome} foi alterada para ${planeta.situacao}!!`);
    }
    else {
        console.log(`não pode ser alterada a situação do planeta ${planeta.nome}`);
    }
}
function addSatelite(nomeplaneta, satelite) {
    const planeta = satelites.find(p => p.nome === nomeplaneta);
    if (planeta) {
        planeta.satelite = satelite;
        console.log(`satelite adicionado ao planeta ${planeta.nome} com sucesso`);
    }
    else {
        console.log(`Não foi possível adicionar o satélite. O planeta ${nomeplaneta} não foi encontrado.`);
    }
}
function removeSatelite(nomeplaneta, satelite) {
    const planeta = satelites.find(p => p.nome === nomeplaneta);
    if (planeta) {
        planeta.satelite -= satelite;
        console.log(`satelite removido do planeta ${planeta.nome} com sucesso`);
    }
    else {
        console.log(`Não foi possível remover o satélite. O planeta ${nomeplaneta} não foi encontrado.`);
    }
}
function lista() {
    satelites.forEach(planet => {
        console.log(`Planeta: ${planet.nome} Coordenadas: ${planet.coordenadas} Situação: ${planet.situacao} Satelités: ${planet.satelite}`);
    });
}
console.log("planetas registrados!");
console.log(' ');
nasa("terra", 12345, "habitado", 0);
nasa("mercurio", 10000, "inexploravel", 0);
nasa("venus", 10000, "inexploravel", 0);
console.log('');
console.log("depois de alguma modificação");
console.log('');
atualizarSituacao("mercurio", "habitado");
addSatelite("terra", 4);
removeSatelite("terra", 2);
console.log(' ');
console.log("LISTA DE TODOS OS PLANETAS REGISTRADOS!");
lista();
console.log(satelites);
