const TotalVoice = require('totalvoice-node');
require("dotenv/config");
const client = new TotalVoice(process.env.API_KEY);

const resposta_usuario = false;
const multi_sms = false;
const data_criacao = new Date();

const optionsLigacao = {
  velocidade: 2,
  tipo_voz: "br-Vitoria",
  resposta_usuario: false,
  bina: "81994083721",
  gravar_audio: false,
  detecta_caixa: true,
  bina_inteligente: true
};

const enviarMensagem = (numero, mensagem) => {
  return client.sms.enviar(numero, mensagem, resposta_usuario, multi_sms, data_criacao)
  .then(function (data) {
      console.log(data)
  })
  .catch(function (error) {
      console.error('Erro: ', error)
  });
}

const dispararLigacao = (numero, mensagem) => {
  return client.tts.enviar(numero, mensagem, optionsLigacao)
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
}

module.exports = {
  enviarMensagem,
  dispararLigacao,
}