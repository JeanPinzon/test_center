(function(){
  'use strict';

  require('js-array-extensions');

  var intervals = [
  {
    name: 'Júnior 1',
    minValue: 0,
    maxValue: 2,
    image: 'https://dl.dropboxusercontent.com/s/kwzgv3cek4936jj/WEEDLE.png?dl=0'
  },{
    name: 'Júnior 2',
    minValue: 2,
    maxValue: 3,
    image: 'https://dl.dropboxusercontent.com/s/dbdeq62ffa7jge7/KAKUNA.png?dl=0'
  },
  {
    name: 'Júnior 3',
    minValue: 3,
    maxValue: 4,
    image: 'https://dl.dropboxusercontent.com/s/hw6tamhu3ul1vm4/GOLBAT.png?dl=0'
  },
  {
    name: 'Pleno 1',
    minValue: 4,
    maxValue: 5,
    image: 'https://dl.dropboxusercontent.com/s/nxhm9a8r76xcdj5/BULBASAUR.png?dl=0'
  },
  {
    name: 'Pleno 2',
    minValue: 5,
    maxValue: 6,
    image: 'https://dl.dropboxusercontent.com/s/ktxogl98x9xqlvk/IVYSAUR.png?dl=0'
  },
  {
    name: 'Pleno 3',
    minValue: 6,
    maxValue: 7,
    image: 'https://dl.dropboxusercontent.com/s/knqyvpc8xxbid45/VENOSAUR.png?dl=0'
  },
  {
    name: 'Sênior',
    minValue: 7,
    maxValue: 10,
    image: 'https://dl.dropboxusercontent.com/s/7f1qzun24i7xyqd/MEWTWO.png?dl=0'
  }];

  var ScoreService = function (scoreNumber) {
    this.result = function () {
      var selected = intervals.where(function(element) {
        return scoreNumber > element.minValue && scoreNumber <= element.maxValue;
      });   

      return selected;
    };
  };

  module.exports = ScoreService;

})();
