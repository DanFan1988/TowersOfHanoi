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
  };

  HanoiUI.prototype.handleClick = function(event){
    if (this.first === undefined) {
      this.first = parseInt(event.currentTarget.id)
    } else {
      this.performMove(this.first, event.currentTarget.id)
    }
  };

  HanoiUI.prototype.performMove = function (first, end){
    this.game.move(first, end);
    this.first = undefined
    this.render();

    if (this.game.isWon()) {
      $(".status").text("Good Job!")
      $(".tower").off("click")
    }
  }

})(this);

$(function () {
  var whiskey = new Hanoi.HanoiUI(new Hanoi.Game());
  $(".tower").on("click", whiskey.handleClick.bind(whiskey))
})