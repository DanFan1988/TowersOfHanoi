(function (root) {
  var Hanoi = root.Hanoi = (root.Hanoi || {});

  var HanoiUI = Hanoi.HanoiUI = function(game){
    this.game = game;
    this.first;
  };


  HanoiUI.prototype.render = function(){
    var towers = this.game.towers
    $('.disk').remove();
    for (var i=0; i<towers.length; i++) {
      for(var j=0; j<towers[i].length; j++) {
        $('#'+i).append("<div class='disk' data-size=" + towers[i][j] + ">")
      }
    }
    // remove all divs
    // iterate through discs for that tower
    // append new div with correct data-disc attribute to tower div
    // $('#0').append("<div data-disc='5'>")
  };

  HanoiUI.prototype.handleClick = function(event){
    if (this.first === undefined) {
      this.first = parseInt(event.currentTarget.id)
    } else {
      this.performMove(this.first, event.currentTarget.id)
    }
  };

  HanoiUI.prototype.performMove = function (first, end){
    console.log(this)

    this.game.move(first, end);
    this.first = undefined
    console.log(this.game.towers)
    this.render();

    if (this.game.isWon()) {
      console.log("good job")
    }
  }

})(this);

$(function () {
  var whiskey = new Hanoi.HanoiUI(new Hanoi.Game());
  // $(".tower").on("click", function(event) { console.log(event.currentTarget) })
  $(".tower").on("click", whiskey.handleClick.bind(whiskey))
})