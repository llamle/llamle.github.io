console.log('Game is loaded...');

var Game = {
    empty: null,
    player: {
        name: "",
        marker: "X",
        wins: 0,
    },

    opponent: {
        name: "",
        marker: "O",
        wins: 0,
    },

    board: [[null,null,null],
            [null,null,null],
            [null,null,null]],

    marks: [],

    setMarks: function () {
      this.marks.push = [this.player.marker, this.opponent.marker];
    },

    switchPlayer: function(from, to){
        this.setMarks.push(this.setMarks.shift());
    },

    checkMarks: function(){
      return this.marks;
    },

    checkHorizontal: function(){
        for (var row = 0; row < this.board.length; row++) {
              if (this.board[row][1] != null && this.board[row][0] === this.board[row][1] && this.board[row][1] === this.board[row][2]) {
                winner = this.player.name;
                this.player.wins ++;
                alert(this.player.name +' Wins!');
              }
        }
    },

    checkVertical: function(){
        for (var col = 0; col < this.board.length; col++) {
              if (this.board[1][col] !=null && this.board[0][col] === this.board[1][col] && this.board[1][col] === this.board[2][col]) {
                winner = this.player.name;
                this.player.wins ++;
                alert(this.player.name +' Wins!');
              }
        }
    },

    checkDiagonalLeft: function(){
      if (this.board[1][1] != null && this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2]) {
        winner = this.player.name;
        this.player.wins ++;
        alert(this.player.name +' Wins!');
        }
    },

    checkDiagonalRight: function(){
      if (this.board[1][1] != null && this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0]) {
        winner = this.player.name;
        this.player.wins ++;
        alert(this.player.name +' Wins!');
        }
    },

    checkWinner: function(){
        this.checkVertical();
        this.checkHorizontal();
        this.checkDiagonalLeft();
        this.checkDiagonalRight();
    },
};
    // Game Clicks

  $(document).ready(function(){
    $('#one').on('click',function(){
      Game.setMarks();
      $(this).addClass(Game.marks[0]);
      Game.board[0][0] = Game.array[0];
      Game.checkWinner();
      Game.switchPlayer();
    });

    $('#two').on('click',function(){
      $(this).addClass("X");
      Game.board[0][1] = Game.array[0];
      Game.checkWinner();
      Game.switchPlayer();
    });

    $('#three').on('click',function(){
      $(this).addClass("X");
      Game.board[0][2] = Game.array[0];
      Game.checkWinner();
      Game.switchPlayer();
    });

    $('#four').on('click',function(){
      $(this).addClass("X");
      Game.board[1][0] = Game.array[0];
      Game.checkWinner();
      Game.switchPlayer();
    });

    $('#five').on('click',function(){
      $(this).addClass("X");
      Game.board[1][1] = Game.array[0];
      Game.checkWinner();
      Game.switchPlayer();
    });

    $('#six').on('click',function(){
      $(this).addClass("X");
      Game.board[1][2] = Game.array[0];
      Game.checkWinner();
      Game.switchPlayer();
    });

    $('#seven').on('click',function(){
      $(this).addClass("X");
      Game.board[2][0] = Game.array[0];
      Game.checkWinner();
      Game.switchPlayer();
    });

    $('#eight').on('click',function(){
      $(this).addClass("X");
      Game.board[2][1] = Game.array[0];
      Game.checkWinner();
      Game.switchPlayer();
    });

    $('#nine').on('click',function(){
      $(this).addClass("X");
      Game.board[2][2] = Game.array[0];
      Game.checkWinner();
      Game.switchPlayer();
    });
});


    // getName: function(){
    //   $(‘input:textbox’).val()
    //   $(‘input:textbox’).val(“new text message”)
    // },
    //
    // printPlayerName: function(){
    //     $('#player').text(this.player.name);
    // },
    //
    //
    // printScoreBoard: function(){
    //     $('#scoreboard').text('Player: ' + this.player.wins + ' | Dealer: ' + this.opponent.wins);
    // },
