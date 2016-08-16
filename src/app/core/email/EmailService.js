(function(){
  'use strict';

  var email = require("emailjs");

  var EmailService = function(){
    this.send = function(content) {

      var server = email.server.connect({
        user: process.env.DB_EMAIL_USER,
        password: process.env.DB_EMAIL_PASSWORD,
        host: "smtp.gmail.com",
        ssl: true
      });

      var message = {
        text: "Prova Técnica .NET",
        from: "Sistema de Correções <rafaeldeoliveirabenetti@gmail.com>",
        to: "someone <rafaelbenetti@cwi.com.br>, another <rafaeldeoliveirabenetti@gmail.com",
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
