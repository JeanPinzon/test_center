(function(){
  'use strict';

  var ImageService = function(){

    var IMAGE_PATH_RED = "https://cloud.githubusercontent.com/assets/12306547/20202321/8ee1ff96-a7a5-11e6-9c0c-930ae04684b6.png";
    var IMAGE_PATH_YELLOW = "https://cloud.githubusercontent.com/assets/12306547/20201920/b6955f7c-a7a2-11e6-82b7-7751e0d41f3c.png";
    var IMAGE_PATH_GREEN = "https://cloud.githubusercontent.com/assets/12306547/20201943/dcdbff42-a7a2-11e6-83c4-996d0bd58dca.png";

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
