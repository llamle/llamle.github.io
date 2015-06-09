var game = {
    board: [[,,,],[,,,],[,,,]],

    plays: 0,
    round: 0,

    over: false,

    playerOne: {
        name: "Player 1",
        score: 0,
        marker: "X",
    },

    playerTwo: {
        name: "Player 2",
        score: 0,
        marker: "O",
    },

// This draws the game board, makes divs for each square, assigned unique classes, and starts the game.
    drawBoard: function(){
      var thisGame = this;

      var $board = $('#board');

      for(var i = 0; i < 9; i++) {
        var $square = $('<div class="square">');

        (function (iRightNow) {
          $square.on('click', function () {
            var row = Math.floor(iRightNow / 3);
            var col = iRightNow % 3;

            if (!thisGame.over && thisGame.board[row][col] === undefined) {
              thisGame.board[row][col] = thisGame.currentPlayer;
              // $(this).text(thisGame.currentPlayer.marker);
              $(this).addClass("player-" + thisGame.currentPlayer.marker)
              thisGame.checkWinner();
              thisGame.switchPlayer();
            }
          });
        })(i);
        $board.append($square);
      }
    },

// Score
    showScore: function(){
      $('#playerOne').text(this.playerOne.name + ':   ' + this.playerOne.score);
      $('#playerTwo').text(this.playerTwo.name + ':   ' + this.playerTwo.score);
    },

// Rename
    rename: function(){
      var self = this;
      var counter = 1;
        $('input').attr('placeholder', 'Please enter your name')
        .on('keydown', function(e){
          if(e.keyCode === 13 && counter === 1 ) {
            self.playerOne.name = $('input').val();
            $('input').val('');
            counter++;
          }
          else if (e.keyCode === 13 && counter === 2) {
            self.playerTwo.name = $('input').val();
            $('input').remove();
            $('#modal').css('display', 'none');
            self.drawBoard();
            self.showScore();
          }
        });
    },

// This is supposed to print the X's or O's to the screen.
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
          $('#playerOne').text(game.playerOne.name + ':   ' + this.playerOne.score);
          $('#playerTwo').text(game.playerTwo.name + ':   ' + this.playerTwo.score);
    },

// This is supposed to alternate between player 1 and player 2.
    switchPlayer: function(){
      if (this.currentPlayer === this.playerOne) {
        this.currentPlayer = this.playerTwo;
      } else {
        this.currentPlayer = this.playerOne;
      }
      this.plays++;
    },

// This is supposed to check for a win on each row.
    checkHorizontal: function(){
        for (var row = 0; row < this.board.length; row++) {
              if (this.board[row][1] && this.board[row][0] === this.board[row][1] && this.board[row][1] === this.board[row][2]) {
                winner = this.currentPlayer.name;
                this.currentPlayer.score ++;
                alert(this.currentPlayer.name +' Wins!');
                this.over = true
                this.render();
              }
        }
    },

// This is supposed to check for a win on each column.
    checkVertical: function(){
        for (var col = 0; col < this.board.length; col++) {
              if (this.board[1][col] && this.board[0][col] === this.board[1][col] && this.board[1][col] === this.board[2][col]) {
                winner = this.currentPlayer.name;
                this.currentPlayer.score ++;
                alert(this.currentPlayer.name +' Wins!');
                this.over = true
                this.render();
              }
        }
    },

// This is supposed to check for a win on the left diagonal.
    checkDiagonalLeft: function(){
      if (this.board[1][1] && this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2]) {
        winner = this.currentPlayer.name;
        this.currentPlayer.score ++;
        alert(this.currentPlayer.name +' Wins!');
        this.over = true
        this.render();
        }
    },

// This is supposed to check for a win on the right diagonal.
    checkDiagonalRight: function(){
      if (this.board[1][1] && this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0]) {
        winner = this.currentPlayer.name;
        this.currentPlayer.score ++;
        alert(this.currentPlayer.name +' Wins!');
        this.over = true
        this.render();
        }
    },

// This is supposed to check if the round is a draw.
    drawCheck: function(){
      if (this.plays == 9) {
        alert("Draw")
      }
    },

// This is supposed to run all previous winner functions.
    checkWinner: function(){
      this.checkVertical();
      this.checkHorizontal();
      this.checkDiagonalLeft();
      this.checkDiagonalRight();
      this.drawCheck();
    },

// This is supposed to reset the board for a new round.
    clearBoard: function(){
      for (var i = 0; i < this.board.length; i++) {
          for (var j = 0; j < this.board.length; j++) {
            this.board[i][j] = '';
            this.plays = 0;
            game.over = false;
          }
      }
    },

// TEST AI Code
    AI: function(){
      for (var i = 0; i < this.board.length; i++) {
        for (var j = 0; j < this.board.length; j++) {
          if (this.board[1][1] == undefined) {

          }
        }
      }
    },

// This starts the game and randomly selects player 1 or player 2 to go first.
    init: function () {
      if (Math.random() < 0.5) {
        this.currentPlayer = this.playerOne;
      } else {
        this.currentPlayer = this.playerTwo;
      };
    }
};

// This is supposed to load the game when the window loads.
window.onload = function(){
    game.init();
    game.rename();
};
