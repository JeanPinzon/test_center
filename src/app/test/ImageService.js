(function(){
  'use strict';

  var ImageService = function(){

    var IMAGE_PATH_RED = "https://dl.dropboxusercontent.com/s/88eae559e0c9ru4/error.png?dl=0";
    var IMAGE_PATH_YELLOW = "https://dl.dropboxusercontent.com/s/8b1ye3yos0nqsct/alert.png?dl=0";
    var IMAGE_PATH_GREEN = "https://dl.dropboxusercontent.com/s/s5wwi2mcmwdv7f4/ok.png?dl=0";

    this.setImageByNote = function(item){
      if (item.note.value < 25) {
        item.image = IMAGE_PATH_RED;
      }     
      else if (item.note.value >= 25 && item.note.value < 65) {
        item.image = IMAGE_PATH_YELLOW;
      }
      else {
        item.image = IMAGE_PATH_GREEN;
      }
      return item;
    };

  };

  module.exports = ImageService;

})();
