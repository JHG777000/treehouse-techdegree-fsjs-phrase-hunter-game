/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [new Phrase('Hello World!')];
    this.activePhrase = null;
  }
  startGame() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
    //overlay.style.display = '';

    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }
  getRandomPhrase() {
    let phrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
    //loop until different from last color
    while (phrase === this.activePhrase) {
      phrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }
    return phrase;
  }
}
