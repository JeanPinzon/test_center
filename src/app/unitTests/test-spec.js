(function(){
  'use strict';

  var app = require('../../config/express.js')();
  var supertest = require('supertest')(app);
  var should = require('should');
  var TestMock = require('./mock/TestMock.js');

  describe('# Avaliação de candidato', function() {
    var testMock = new TestMock();
    it('# Deve obter o level do usuário Pleno 1', function(done){
      var plenoMock = testMock.PlenoCandidate;
      var expectedResult = {status : 200, valid : true, level : "Pleno 1"};
      getUserLevelTest(plenoMock, expectedResult, done);
    });
  });

  function getUserLevelTest(userInformation, expectedResult, done){
    supertest.post('/api/v1/level')
      .send(userInformation)
      .end(function(error, result) {
        result.status.should.equal(expectedResult.status);
        result.body.valid.should.equal(expectedResult.valid);
        result.body.level.should.be.exactly(expectedResult.level);
        done();
     });
  }
})();
