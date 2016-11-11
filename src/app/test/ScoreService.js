(function(){
  'use strict';

  require('js-array-extensions');

  var intervals = [
  {
    name: 'Júnior 1',
    minValue: 0,
    maxValue: 2,
    image: 'https://cloud.githubusercontent.com/assets/12306547/20202177/6e9111ba-a7a4-11e6-8a29-9ac823476ee4.png'
  },{
    name: 'Júnior 2',
    minValue: 2,
    maxValue: 3,
    image: 'https://cloud.githubusercontent.com/assets/12306547/20202184/80eddcf8-a7a4-11e6-9d66-bf95fe86ef40.png'
  },
  {
    name: 'Júnior 3',
    minValue: 3,
    maxValue: 4,
    image: 'https://cloud.githubusercontent.com/assets/12306547/20202196/960eba8a-a7a4-11e6-95ef-acadeb4c660e.png'
  },
  {
    name: 'Pleno 1',
    minValue: 4,
    maxValue: 5,
    image: 'https://cloud.githubusercontent.com/assets/12306547/20202206/a68833fa-a7a4-11e6-93d7-9af1114ea3e0.png'
  },
  {
    name: 'Pleno 2',
    minValue: 5,
    maxValue: 6,
    image: 'https://cloud.githubusercontent.com/assets/12306547/20202207/b0da25c0-a7a4-11e6-80ec-080b818938fc.png'
  },
  {
    name: 'Pleno 3',
    minValue: 6,
    maxValue: 7,
    image: 'https://cloud.githubusercontent.com/assets/12306547/20202214/bef178f2-a7a4-11e6-88ee-18f6b803741d.png'
  },
  {
    name: 'Sênior',
    minValue: 7,
    maxValue: 10,
    image: 'https://cloud.githubusercontent.com/assets/12306547/20202220/cb5f3cc8-a7a4-11e6-9d55-be8ea9a8e693.png'
  }];

  var ScoreService = function (scoreNumber) {
    this.result = function () {
      var selected = intervals.firstOrDefault(function(element) {
        return scoreNumber >= element.minValue && scoreNumber < element.maxValue;
      });   

      return selected;
    };
  };

  module.exports = ScoreService;

})();
