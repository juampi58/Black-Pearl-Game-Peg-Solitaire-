

function Game(){
  this.board=[                                    {row:0,column:2},{row:0,column:3},{row:0,column:4},
                                                   {row:1,column:2},{row:1,column:3},{row:1,column:4},
                 {row:2,column:0},{row:2,column:1},{row:2,column:2},{row:2,column:3},{row:2,column:4},{row:2,column:5},{row:2,column:6},
                 {row:3,column:0},{row:3,column:1},{row:3,column:2},{row:3,column:3},{row:3,column:4},{row:3,column:5},{row:3,column:6},
                 {row:4,column:0},{row:4,column:1},{row:4,column:2},{row:4,column:3},{row:4,column:4},{row:4,column:5},{row:4,column:6},
                                                   {row:5,column:2},{row:5,column:3},{row:5,column:4},
                                                   {row:6,column:2},{row:6,column:3},{row:6,column:4}];
}


Game.prototype.startBoard = function () {
  this.board.forEach(function(position,index){
      var selector = '[data-row=' + position.row +'][data-column=' + position.column +']';
      $(selector).addClass('full');
     });
     $('[data-row=3][data-column=3]').removeClass('full');
     $('[data-row=3][data-column=3]').addClass('empty');
};

Game.prototype.move= function(){
  $(document).on("click", '.full', function(){
    $('.selected').removeClass('selected');
    $(this).addClass('selected');
  });
  $(document).on("click", '.empty', function(){
   switch ($('.selected').attr('data-row')-$(this).attr('data-row')) {
      case 0:
      var row=$(this).attr('data-row');
      switch ($('.selected').attr('data-column')-$(this).attr('data-column')) {
        case 2:
        var col=$('.selected').attr('data-column')-1;
        var selector='[data-row=' + row +'][data-column=' + col + ']';
        console.log('[data-row=' + row +'][data-column=' + col +']');
        $('.selected').removeClass('full');
        $('.selected').addClass('empty');
          $(selector).removeClass('full');
          $(selector).addClass('empty');
          $(this).removeClass('empty');
          $(this).addClass('full');
          break;
        case -2:
        var col1=parseInt($('.selected').attr('data-column'))+1;
        var selector1='[data-row=' + row +'][data-column=' + col1 +']';
        $('.selected').removeClass('full');
        $('.selected').addClass('empty');
          $(selector1).removeClass('full');
          $(selector1).addClass('empty');
          $(this).removeClass('empty');
          $(this).addClass('full');
          break;
        }
        break;
      case 2:
      if($('.selected').attr('data-column')-$(this).attr('data-column')===0){
      var col2=$(this).attr('data-column');
      var row1=$('.selected').attr('data-row')-1;
      var selector2='[data-row=' + row1 +'][data-column=' + col2 +']';
      $('.selected').removeClass('full');
      $('.selected').addClass('empty');
      $(selector2).removeClass('full');
      $(selector2).addClass('empty');
      $(this).removeClass('empty');
      $(this).addClass('full');}
      break;
      case -2:
      if($('.selected').attr('data-column')-$(this).attr('data-column')===0){
      var col3=$(this).attr('data-column');
      var row2=parseInt($('.selected').attr('data-row'))+1;
      var selector3='[data-row=' + row2 +'][data-column=' + col3 +']';
      $('.selected').removeClass('full');
      $('.selected').addClass('empty');
      $(selector3).removeClass('full');
      $(selector3).addClass('empty');
      $(this).removeClass('empty');
      $(this).addClass('full');}
      break;
    }
    $('.selected').removeClass('selected');
  });
}

$(document).ready(function () {
  var game=new Game();
  game.startBoard();
  game.move();
});
