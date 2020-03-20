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
    this.activePhrase.showMatchedLetter('!');
  }
  getRandomPhrase() {
    let phrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
    //loop until different from last color
    while (phrase === this.activePhrase) {
      phrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }
    return phrase;
  }
  handleInteraction(e) {
   if (e.target.className === 'key') {
     if (this.activePhrase.checkLetter(e.target.innerText)) {
        e.target.className = 'key chosen';
        this.activePhrase.showMatchedLetter(e.target.innerText);
        alert(this.checkForWin());
     } else {
        e.target.className = 'key wrong';
     }
   }
  }
  checkForWin() {
      const ul = document.getElementsByTagName('ul')[0];
      const list = ul.getElementsByTagName('li');

      for (let i = 0; i < list.length; i++) {
       if (list[i].className.includes('hide')) return false;
      }
      return true;
  }

}
