/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [new Phrase('Hello World!')]
        this.activePhrase = null;
    }
    startGame() {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        //overlay.style.display = '';
        this.phrases[0].addPhraseToDisplay();
    }
}