
var T=true , F=false;
var map= [
  [F,F,T,T,T,F,F],
  [F,F,T,T,T,F,F],
  [T,T,T,T,T,T,T],
  [T,T,T,T,T,T,T],
  [T,T,T,T,T,T,T],
  [F,F,T,T,T,F,F],
  [F,F,T,T,T,F,F]
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

};







$(document).ready(function () {

var game=new Game(map);
game.updateBoard();


});
