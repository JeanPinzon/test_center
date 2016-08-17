(function(){
  'use strict';

  var email = require("emailjs");

  var EmailService = function(){
    this.send = function(content) {

      var server = email.server.connect({
        user: process.env.DB_EMAIL_USER,
        password: process.env.DB_EMAIL_PASSWORD,
        host:"smtp-mail.outlook.com",
        tls:{ciphers: "SSLv3"}
      });

      var message = {
        text: "Prova Técnica .NET",
        from: "Sistema de Correções <rafaeldeoliveirabenetti@gmail.com>",
        to: "someone <rafaelbenetti@cwi.com.br>, another <gustavo.borba@cwi.com.br",
        cc: "gustavo.saudade@cwi.com.br",
        subject: "Prova Técnica .NET",
        attachment:
        [
          { data:content, alternative:true }
        ]
      };

      server.send(message, function(err, message) { console.log(err || message); });
    };
  };

  module.exports = EmailService;

})();
