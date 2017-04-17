
var T=true , F=false;
var map= [
      [T,T,T],
      [T,T,T],
  [T,T,T,T,T,T,T],
  [T,T,T,F,T,T,T],
  [T,T,T,T,T,T,T],
      [T,T,T],
      [T,T,T]
];


function Game(map){
  this.board=new Board();
  this.map=map;
}




function Board() {
  this.fullCells= [                                {row:0,column:2},{row:0,column:3},{row:0,column:4},
                                                   {row:1,column:2},{row:1,column:3},{row:1,column:4},
                 {row:2,column:0},{row:2,column:1},{row:2,column:2},{row:2,column:3},{row:2,column:4},{row:2,column:5},{row:2,column:6},
                 {row:3,column:0},{row:3,column:1},{row:3,column:2},                 {row:3,column:4},{row:3,column:5},{row:3,column:6},
                 {row:4,column:0},{row:4,column:1},{row:4,column:2},{row:4,column:3},{row:4,column:4},{row:4,column:5},{row:4,column:6},
                                                   {row:5,column:2},{row:5,column:3},{row:5,column:4},
                                                   {row:6,column:2},{row:6,column:3},{row:6,column:4}];
  this.emptyCells=[{row:3,column:3}];



}


Game.prototype.updateBoard = function () {
  this.board.fullCells.forEach(function(position,index){
      var selector = '[data-row=' + position.row +'][data-column=' + position.column +']';
      $(selector).addClass('full');
     });
     this.board.emptyCells.forEach(function(position,index){
         var selector = '[data-row=' + position.row +'][data-column=' + position.column +']';
         $(selector).addClass('empty');

       });

};

function pickABall(){
$('.full').click(function(){
  $('.selected').removeClass('selected');
  $(this).addClass('selected');
});
}

function jumpAndEat(){
  $('.empty').click(function(){
    $('.selected').toggleClass('full');
    $('.selected').addClass('empty');
    console.log($(this, '.data-row'));
    switch ($('.selected', 'data-row')-$(this, 'data-row')) {
      case 0:
      switch ($('.selected', 'data-column')-$(this, 'data-column')) {
        case 2:
          $('data-column'-1).removeClass('full');
          $('data-column'-1).addClass('empty');
          break;
        case -2:
          $('data-column'+1).removeClass('full');
          $('data-column'+1).addClass('empty');
          break;
        }
        break;
      case 2:
      $('data-row'-1).removeClass('full');
      $('data-row'-1).addClass('empty');
      break;
      case -2:
      $('data-row'+1).removeClass('full');
      $('data-row'+1).addClass('empty');
      break;

      }
    $('.selected').toggleClass('selected');
    $(this).removeClass('empty');
    $(this).addClass('full');
  });


}





$(document).ready(function () {

var game=new Game(map);
game.updateBoard();
console.log(game.map);
pickABall();
jumpAndEat();
});
