var game = {
    board: [[,,,],[,,,],[,,,]],
    plays: 0,
    round: 0,
    currentPlayer: "",

    playerOne: {
        name: "",
        score: 0,
        marker: "X",
    },

    playerTwo: {
        name: "",
        score: 0,
        marker: "O",
    },

    drawBoard: function(){
      var self = this;
      for(var i = 0; i < 3; i++) {
          var $row = $('div').addClass('row' + i);
          for(var j = 0; j < 3; j++) {
              var $col = $('div')
                                   .addClass('col' + j)
                                   .text(this.board[i][j])
                                   .attr('id', 'box' + i + '' + j)
                                   .on('click', function(){
                                     game.placeMarker($(this));
                                   });
              $row.append($col);
          }
      $('#board').append($row);
      }
    },

    placeMarker: function($e){
      var position = $e.attr('id').replace('box','').split('');
      var row = position[0];
      var col = position[1];
      if (!this.board[row][col]) {
          this.switchPlayer();
          this.board[row][col] = this.currentPlayer;
          this.checkWinner();
      }
    },

    render: function(){
      for (var i = 0; i < this.board.length; i++) {
          for (var j = 0; j < this.board.length; j++) {
              $('box' + i + '' + j).text(this.board[i][j]);
            }
          }
          if (this.currentPlayer == "X") {
                 this.playerOne.score ++;
              }
              else if (this.currentPlayer == "O") {
                 this.playerTwo.score ++;
              }
          $('.playerOneScore').text(this.playerOne.score);
          $('.playerTwoScore').text(this.playerTwo.score);
    },

    switchPlayer: function(){
      if (game.plays % 2 === 0) {
          this.currentPlayer = this.playerTwo.marker;
      }else{
          this.currentPlayer = this.playerTwo.marker;
      }
      this.plays++;
    },

    checkHorizontal: function(){
        for (var row = 0; row < this.board.length; row++) {
              if (this.board[row][1] && this.board[row][0] === this.board[row][1] && this.board[row][1] === this.board[row][2]) {
                winner = this.player.name;
                this.player.wins ++;
                alert(this.player.name +' Wins!');
              }
        }
    },

    checkVertical: function(){
        for (var col = 0; col < this.board.length; col++) {
              if (this.board[1][col] && this.board[0][col] === this.board[1][col] && this.board[1][col] === this.board[2][col]) {
                winner = this.player.name;
                this.player.wins ++;
                alert(this.player.name +' Wins!');
              }
        }
    },

    checkDiagonalLeft: function(){
      if (this.board[1][1] && this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2]) {
        winner = this.player.name;
        this.player.wins ++;
        alert(this.player.name +' Wins!');
        }
    },

    checkDiagonalRight: function(){
      if (this.board[1][1] && this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0]) {
        winner = this.player.name;
        this.player.wins ++;
        alert(this.player.name +' Wins!');
        }
    },

    drawCheck: function(){
      if (this.plays == 9) {
        alert("Draw")
      }
    },

    checkWinner: function(){
        this.drawCheck();
        this.checkVertical();
        this.checkHorizontal();
        this.checkDiagonalLeft();
        this.checkDiagonalRight();
    },

    clearBoard: function(){
      for (var i = 0; i < this.board.length; i++) {
          for (var j = 0; j < this.board.length; j++) {
            this.board[i][j] = '';
            this.plays = 0;
          }
      }
    },

};

window.onload = function(){
    game.drawBoard();
};
