# cells-flasher
A game to draw cells in a variable grid.

- The game uses tic-tac-toe rules to make triplets of contiguous cells flash, you could say it's a variation of a tic-tac-toe game.
- Uses VueJs.
- Uses [Pinia](https://pinia.vuejs.org/) for state management.


## about
Making a tic-tac-toe game is a common exercise when learning a library like React, Vue, Svelte, etc.

This version adds some twists to the exercise:
- the user has the possibility to change the size of the grid.
- as a result, there can be multiple winners in one game.
- a timer is implemented to increase the difficulty.

All in all, the game is not a tic-tac-toe anymore, it has evolved into a fun tool to draw flashing pixel-art.

### technicalities
The new rules have consequences on how the app is written, some logic needs to be changed to adapt to the new conditions. For example, a script `computeResult.js`, used to determine if there is a winner, must now take into account the fact the grid can be larger than a set of 3x3 squares.
The use of a countdown timer to restrict the time for a user to make a move also introduces some state management challenges.

The app is pretty simple. It was mostly an exercise to familiarize myself with making a VueJs app the idiomatic way.
