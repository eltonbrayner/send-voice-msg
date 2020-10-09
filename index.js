const service = require("./service")

// Mensagem
const numeroM = "DDD988888888" //Formato: DDD+9+NUMERO
const mensagemM = "Defina aqui a mensagem"; //Limite de 160 caracteres por mensagem

// Chamada
const numeroC = "DDD988888888" //Formato: DDD+9+NUMERO
const mensagemC = "Defina aqui a mensagem"; //Mensagem que será dita na chamada de voz

(function dispararMensagem(){
  return numeroM != "DDD988888888" ? service.enviarMensagem(numeroM, mensagemM) : null
})();

(function dispararChamada(){
  return numeroC != "DDD988888888" ? service.dispararLigacao(numeroC, mensagemC) : null
})();