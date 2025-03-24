const Character = require('./Character'); 

class Thief extends Character {
    atacar(personagemAlvo) {
        if(!(personagemAlvo instanceof Character)) {
            console.log('O alvo precisa ser uma instância de Character!')
            return;
        }
        const dano = Math.max((this.ataque - personagemAlvo.defesa) * 2, 0);  
        personagemAlvo.pontoDeVida -= dano;

        console.log(`${this.nome} atacou ${personagemAlvo.nome}`)
    }
    
}

module.exports = Thief