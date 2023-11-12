// apenas criando inputs com readline no terminal
let readlineSync = require('readline-sync');

let nome = readlineSync.question('QUal éo seu nome?\n');


if (nome == 'gregorio') {
    console.log(`bem vindo ${nome} você acertou`);    
}
else {
    console.log('voce errou tente novamente');
};