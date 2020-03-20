/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [new Phrase('Hello World'), new Phrase('Hi')];
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
  handleInteraction(e) {
    if (e.target.className === 'key') {
      if (this.activePhrase.checkLetter(e.target.innerText)) {
        e.target.className = 'key chosen';
        this.activePhrase.showMatchedLetter(e.target.innerText);
        if (this.checkForWin()) this.gameOver();
      } else {
        e.target.className = 'key wrong';
        this.removeLife();
      }
    }
  }
  removeLife() {
    const ol = document.getElementsByTagName('ol')[0];
    const hearts = ol.getElementsByTagName('li');
    hearts[this.missed].getElementsByTagName('img')[0].src =
      'images/lostHeart.png';
    this.missed++;
    if (this.missed > 4) {
      this.gameOver();
      return;
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
  gameOver() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = '';
    const message = document.getElementById('game-over-message');
    if (this.checkForWin()) {
      message.innerText = 'Great! You Won!';
    } else {
      message.innerText = 'Sorry, you lost.';
    }
    let main_div = document.getElementsByClassName('main-container')[0];
    const div = main_div.getElementsByTagName('div')[0];
    main_div.removeChild(div);
    const qwerty = document.getElementById('qwerty');
    const keys = qwerty.getElementsByTagName('button');
    for (let i = 0; i < keys.length; i++) {
      keys[i].className = 'key';
    }
    const ol = document.getElementsByTagName('ol')[0];
    const hearts = ol.getElementsByTagName('li');
    for (let i = 0; i < hearts.length; i++) {
      hearts[i].getElementsByTagName('img')[0].src = 'images/liveHeart.png';
    }
    this.missed = 0;
  }
}
