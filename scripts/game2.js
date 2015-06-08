var check = {
  horizontal: function(){
      for (var row = 0; row < this.board.length; row++) {
            if (this.board[row][1] != null && this.board[row][0] === this.board[row][1] && this.board[row][1] === this.board[row][2]) {
              winner = this.player.name;
              this.player.wins ++;
              alert(this.player.name +' Wins!');
            }
      }
  },

  vertical: function(){
      for (var col = 0; col < this.board.length; col++) {
            if (this.board[1][col] !=null && this.board[0][col] === this.board[1][col] && this.board[1][col] === this.board[2][col]) {
              winner = this.player.name;
              this.player.wins ++;
              alert(this.player.name +' Wins!');
            }
      }
  },

  diagonalLeft: function(){
    if (this.board[1][1] != null && this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2]) {
      winner = this.player.name;
      this.player.wins ++;
      alert(this.player.name +' Wins!');
      }
  },

  diagonalRight: function(){
    if (this.board[1][1] != null && this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0]) {
      winner = this.player.name;
      this.player.wins ++;
      alert(this.player.name +' Wins!');
      }
  },

  winner: function(){
      this.checkVertical();
      this.checkHorizontal();
      this.checkDiagonalLeft();
      this.checkDiagonalRight();
  },
};

var clicks = {

  
}
