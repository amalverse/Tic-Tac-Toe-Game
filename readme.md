Preview- https://amalverse.github.io/Tic-Tac-Toe-Game/
## Tic Tac Toe Game

This is a simple implementation of the classic Tic Tac Toe game. The game is played on a 3x3 grid where two players take turns marking the spaces in the grid with X and O. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game.

### Game Rules
1. The game is played on a grid that's 3 squares by 3 squares.
2. Player 1 is X, and Player 2 is O. Players take turns putting their marks in empty squares.
3. The first player to get 3 of their marks in a row (up, down, across, or diagonally) is the winner.
4. When all 9 squares are full, the game is over.


### Game Layout 
The game board is a 3x3 grid that looks like this:

```````````
 0 | 1 | 2
-----------
 3 | 4 | 5
-----------
 6 | 7 | 8

```````````

Each number represents a position on the board where a player can place their mark (X or O).


### Massage Box on top
Top of this layout their will a massage box where all massage will show such as winner, draw, x turns or o turns.
after win or draw thier a new game button will show in massage box.

thier will be reset button at last.

### Winning Condition
A player wins the game if they successfully place three of their marks in a row. The row can be horizontal, vertical, or diagonal. Here are the possible winning combinations:

- Horizontal: (0, 1, 2), (3, 4, 5), (6, 7, 8)
- Vertical: (0, 3, 6), (1, 4, 7), (2, 5, 8)
- Diagonal: (0, 4, 8), (2, 4, 6)
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

### winner announce
after winning a massage will pop in massage box. winner combination will be highlighted as red.


### How to Play
1. Open the game interface.
2. Player 1 starts by clicking on an empty square to place their X.
3. Player 2 follows by clicking on an empty square to place their O.
4. Continue taking turns until one player wins or the game ends in a draw.
5. if one wins game will stop and winner announce. and their will be option for new game.
6. after every turn massage will show in massage container on top whos turns now.

Enjoy playing Tic Tac Toe!
