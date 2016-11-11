(function(){
  'use strict';

  var email = require("emailjs");

  var EmailService = function(){
    this.send = function(content) {

      var emailTo = process.env.DB_EMAIL_TO;
      var emailCopy = process.env.DB_EMAIL_COPY;

      var server = email.server.connect({
        user: process.env.DB_EMAIL_USER, 
        password: process.env.DB_EMAIL_PASSWORD,
        host:"smtp-mail.outlook.com",
        tls:{ciphers: "SSLv3"}
      });

      var message = {
        text: "Prova Técnica .NET",
        from: "Sistema de Correções <rafaeldeoliveirabenetti@gmail.com>",
        to: emailTo,
        cc: emailCopy,
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
