const Character = require('./Character'); 

class warrior extends Character {
    constructor(nome, pontoDeVida, ataque, defesa, pontosDeEscudo, posicao) {
        super(nome, pontoDeVida, ataque, defesa);
        this.pontosDeEscudo = pontosDeEscudo;
        this.posicao = posicao

    }

    atacar(personagemAlvo) {
        if (!(personagemAlvo instanceof Character)) {
            console.log('O alvo precisa ser uma instância de Character!');
            return;
        }

        let dano = 0;
        if(this.posicao === 'ataque') {
            dano = Math.max(this.ataque - personagemAlvo.defesa, 0);

        }else if(this.posicao === 'defesa'){
            dano = Math.max(this.ataque - (personagemAlvo.defesa + this.pontosDeEscudo), 0);
        }

        personagemAlvo.pontoDeVida -= dano;

        console.log(`${this.nome} atacou ${personagemAlvo.nome} causando ${dano} de dano.`);
    }

    mudarPosicao(personagemAlvo) {
        if(this.posicao === 'ataque') {
            this.posicao = 'defesa';
        }else if(this.posicao === 'defesa'){
            this.posicao = 'ataque';
        }
        console.log(`${this.nome} mudou para a posição de ${this.posicao}.`);
    }
}

module.exports = warrior