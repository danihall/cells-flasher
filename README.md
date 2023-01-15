# tic-tac-toe-variable
A Tic-Tac-Toe with variable grid size - made with Vue.js.

- Uses [Pinia](https://pinia.vuejs.org/) for state management


## variable grid size
Making a tic-tac-toe game is a common exercise when learning a library like React, Vue, Svelte, etc.

This version adds some twists to the exercise:
- the user has the possibility to change the size of the grid.
- as a result, there can be multiple winners in one game.
- a timer will be implemented to increase the difficulty.

These new rules have consequences on how the app is written, some logic needs to be changed to adapt to the new conditions. For example, a script `computeResult.js`, used to determine if there is a winner, must now take inot account the fact the grid can be larger than a set of 3x3 squares.


