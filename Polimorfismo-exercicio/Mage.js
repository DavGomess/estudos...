const Character = require('./Character'); 

class Mage extends Character {
    constructor(nome, pontoDeVida, ataque, defesa, pontosMagia) {
        super(nome, pontoDeVida, ataque, defesa);
        this.pontosMagia = pontosMagia;
    }
    atacar(personagemAlvo) {
        if(!(personagemAlvo instanceof Character)) {
            console.log('O alvo precisa ser uma instância de Character!')
            return
        }
        const dano = Math.max(this.ataque + this.pontosMagia - personagemAlvo.defesa, 0);  
        personagemAlvo.pontoDeVida -= dano;

        console.log(`${this.nome} atacou ${personagemAlvo.nome} causando ${dano} de dano.`);
    }
    Curar(personagemAlvo) {
        if(!(personagemAlvo instanceof Character)) {
            console.log('O alvo precisa ser uma instância de Character!')
            return
        }
        const cura = 2 * this.pontosMagia;
        personagemAlvo.pontoDeVida += cura;
        console.log(`${this.nome} curou ${personagemAlvo.nome} em ${cura} pontos de vida.`);
    }
    
    }

    module.exports = Mage
