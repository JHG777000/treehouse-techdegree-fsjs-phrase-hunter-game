/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

game = new Game();

const button = document.getElementById('btn__reset');
button.addEventListener('click', () => game.startGame());

const qwerty = document.getElementById('qwerty');
qwerty.addEventListener('click', e => {
  if (e.target.innerText.length === 1) game.handleInteraction(e);
});

document.addEventListener('keydown', e => {
  game.handleInteraction(e);
});
