(function(){
  'use strict';

  var app = require('../../config/express.js')();
  var supertest = require('supertest')(app);
  var should = require('should');
  var TestMock = require('./mock/TestMock.js');

  describe('# Avaliação de candidato', function() {
    var testMock = new TestMock();

    it('# Deve obter o level do usuário Júnior 1', function(done){
      var juniorMock = testMock.JuniorUmCandidate;
      var expectedResult = {status : 200, valid : true, level : "Júnior 1"};
      getUserLevelTest(juniorMock, expectedResult, done);
    });

    it('# Deve obter o level do usuário Júnior 2', function(done){
      var juniorMock = testMock.JuniorDoisCandidate;
      var expectedResult = {status : 200, valid : true, level : "Júnior 2"};
      getUserLevelTest(juniorMock, expectedResult, done);
    });

    it('# Deve obter o level do usuário Júnior 3', function(done){
      var juniorMock = testMock.JuniorTresCandidate;
      var expectedResult = {status : 200, valid : true, level : "Júnior 3"};
      getUserLevelTest(juniorMock, expectedResult, done);
    });

    it('# Deve obter o level do usuário Pleno 1', function(done){
      var plenoMock = testMock.PlenoUmCandidate;
      var expectedResult = {status : 200, valid : true, level : "Pleno 1"};
      getUserLevelTest(plenoMock, expectedResult, done);
    });

    it('# Deve obter o level do usuário Pleno 2', function(done){
      var plenoMock = testMock.PlenoDoisCandidate;
      var expectedResult = {status : 200, valid : true, level : "Pleno 2"};
      getUserLevelTest(plenoMock, expectedResult, done);
    });

    it('# Deve obter o level do usuário Pleno 3', function(done){
      var plenoMock = testMock.PlenoTresCandidate;
      var expectedResult = {status : 200, valid : true, level : "Pleno 3"};
      getUserLevelTest(plenoMock, expectedResult, done);
    });

    it('# Deve obter o level do usuário Sênior', function(done){
      var plenoMock = testMock.SeniorCandidate;
      var expectedResult = {status : 200, valid : true, level : "Sênior"};
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
