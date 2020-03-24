/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

game = undefined;

//add event listener to start button, so the game starts when clicked
const button = document.getElementById('btn__reset');
button.addEventListener('click', () => {
  game = new Game();
  game.startGame();
});

//add event listener to on screen keyboard, so buttons respond to user clicks
const qwerty = document.getElementById('qwerty');
qwerty.addEventListener('click', e => {
  if (game !== undefined)
    if (e.target.innerText.length === 1) game.handleInteraction(e);
});

//add event listener for a keydown event, so a real keyboard can be used to play
document.addEventListener('keydown', e => {
  if (game !== undefined) game.handleInteraction(e);
});
