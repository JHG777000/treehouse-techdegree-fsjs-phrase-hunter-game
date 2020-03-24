/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  //Game's constructor, defines vars for use in class
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase('Hello World'),
      new Phrase('Hi'),
      new Phrase('The world is round'),
      new Phrase('The sqrt of negative one is i'),
      new Phrase('i to the power of two is negative one')
    ];
    this.activePhrase = null;
  }
  //startGame method, starts the game by hidding the overlay, and
  //setting the active phrase via this.getRandomPhrase()
  startGame() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }
  //getRandomPhrase method, Randomly chooses hidden phrase.
  //Never chooses the same hidden phrase in a row.
  getRandomPhrase() {
    let phrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
    //get 'lastPhrase' if it already exists, if not make it
    let lastPhrase = document
      .getElementsByClassName('main-container')[0]
      .getElementsByTagName('h5')[0];
    if (lastPhrase === undefined) {
      lastPhrase = document.createElement('h5');
      lastPhrase.innerText = '';
      lastPhrase.hidden = true;
      document
        .getElementsByClassName('main-container')[0]
        .appendChild(lastPhrase);
    }
    //loop until different from last hidden phrase
    while (phrase.phrase === lastPhrase.innerText) {
      phrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }
    lastPhrase.innerText = phrase.phrase;
    return phrase;
  }
  //handleInteraction method, checks if the palyer selected a correct letter
  //or not and responds accordingly
  //if correct checkForWin
  //if not correct removeLife
  handleInteraction(e) {
    //make sure game is active, the start overlay is hidden
    const overlay = document.getElementById('overlay');
    if (overlay.style.display === '') return;

    //get on screen keyboard so on screen keys can be retrieved
    //based on letter code from real keyboard
    const qwerty = document.getElementById('qwerty');
    const keys = qwerty.getElementsByTagName('button');
    let target = undefined;
    //see if event was triggered by the on screen keyboard or a
    //real keyboard
    if (e.target.className === 'key') {
      //on screen keyboard, get keydown event target
      target = e.target;
    } else {
      //loop through all on screen keys, and retrieve match
      for (let i = 0; i < keys.length; i++) {
        //make sure key code is valid, in the form of 'KeyA'
        if (!(e.code.length === 4 && e.code[0] === 'K')) return;
        //convert key code 'KeyA' to letter code 'a'
        let letter = e.code.toLowerCase()[e.code.length - 1];
        //match and retrieve on screen key, set to target
        if (keys[i].innerText === letter) target = keys[i];
      }
    }

    //if no match found return
    if (target === undefined) return;
    if (target.className !== 'key') return;

    //process keyboard events
    if (this.activePhrase.checkLetter(target.innerText)) {
      target.className = 'key chosen';
      this.activePhrase.showMatchedLetter(target.innerText);
      if (this.checkForWin()) this.gameOver();
    } else {
      target.className = 'key wrong';
      this.removeLife();
    }
    target.disabled = true;
  }
  //removeLife method, adds one to this.missed,
  //and changes a heart from liveHeart to lostHeart
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
  //checkForWin method, reads the class name of Phrase letters,
  //if no class name is hide, then win is true
  checkForWin() {
    const ul = document.getElementsByTagName('ul')[0];
    const list = ul.getElementsByTagName('li');

    for (let i = 0; i < list.length; i++) {
      if (list[i].className.includes('hide')) return false;
    }
    return true;
  }
  //gameOver method, unhides the overlay
  //sets the overlay class based on if game was won or not
  //and displays message based on if game was won or not
  //resets the game so it can be played again
  gameOver() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = '';
    const message = document.getElementById('game-over-message');
    if (this.checkForWin()) {
      message.innerText = 'Great! You Won!';
      overlay.className = 'win';
    } else {
      message.innerText = 'Sorry, you lost.';
      overlay.className = 'lose';
    }
    let main_div = document.getElementsByClassName('main-container')[0];
    const div = main_div.getElementsByTagName('div')[0];
    main_div.removeChild(div);
    const qwerty = document.getElementById('qwerty');
    const keys = qwerty.getElementsByTagName('button');
    for (let i = 0; i < keys.length; i++) {
      keys[i].className = 'key';
      keys[i].disabled = false;
    }
    const ol = document.getElementsByTagName('ol')[0];
    const hearts = ol.getElementsByTagName('li');
    for (let i = 0; i < hearts.length; i++) {
      hearts[i].getElementsByTagName('img')[0].src = 'images/liveHeart.png';
    }
    this.missed = 0;
  }
}
