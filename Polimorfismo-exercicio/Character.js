class Character {
    constructor(nome, pontoDeVida, ataque, defesa) {
        this.nome = nome;
        this.pontoDeVida = pontoDeVida;
        this.ataque = ataque;
        this.defesa = defesa;
       
       
    }

    atacar(persnagemAlvo) {
        if(!(persnagemAlvo instanceof Character)) {
            console.log('O alvo precisa ser uma instância de Character!')
            return
        }
        const dano = Math.max(this.ataque - persnagemAlvo.defesa, 0);  
        persnagemAlvo.pontoDeVida -= dano

        console.log(`${this.nome} atacou ${persnagemAlvo.nome}`)
    }
    
}



module.exports = Character