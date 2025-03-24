const Character = new require('./Character.js')
const Thief = new require('./Thief.js')
const Mage = new require('./Mage.js')
const Warrior = new require('./Warrior.js')


const guerreiro = new Warrior('Guerreiro', 100, 30, 10, 20, 'ataque');
const alvo = new Character('Inimigo', 80, 25, 5);
const ladrao = new Thief('Ladrão', 70, 20, 5);
const mago = new Mage('Mago', 60, 15, 8, 12);

console.table((guerreiro, alvo, ladrao, mago))