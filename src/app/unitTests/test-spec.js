(function(){
  'use strict';

  var app = require('../../config/express.js')();
  var supertest = require('supertest')(app);
  var should = require('should');
  var TestMock = require('./mock/TestMock.js');
  var testMock = new TestMock();

  describe('# Avaliação de candidato', function() {

    it('# Deve obter o level do usuário', function(done){

      var expectedLevel = "Pleno 1";

      supertest.post('/api/v1/level')
        .send(testMock.completeTest)
        .end(function(error, result) {
          result.status.should.equal(200);
          result.body.valid.should.equal(true);
          result.body.level.should.be.exactly(expectedLevel);
          done();
       });
    });
  });
})();
