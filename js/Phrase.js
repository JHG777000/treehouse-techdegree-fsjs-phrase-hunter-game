/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  //Phrase's constructor, defines vars for use in class
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }
  //addPhraseToDisplay method, create an ul and div tag
  //add li of phrase letters to ul
  addPhraseToDisplay() {
    let main_div = document.getElementsByClassName('main-container')[0];
    let div = document.createElement('div');
    let ul = document.createElement('ul');
    let li = undefined;

    div.id = 'phrase';
    div.class = 'section';
    div.appendChild(ul);

    for (let i = 0; i < this.phrase.length; i++) {
      if (this.phrase.charAt(i) === ' ') {
        li = document.createElement('li');
        li.className = 'space';
        li.innerText = ' ';
      } else {
        li = document.createElement('li');
        li.className = 'hide letter ' + this.phrase.charAt(i);
        li.innerText = this.phrase.charAt(i);
      }
      ul.appendChild(li);
    }
    main_div.prepend(div);
  }
  //checkLetter method, is letter in phrase or not
  checkLetter(letter) {
    for (let i = 0; i < this.phrase.length; i++) {
      if (this.phrase.charAt(i) === letter) return true;
    }
    return false;
  }
  //showMatchedLetter method, change class name to show a matched letter
  showMatchedLetter(letter) {
    let phrase_div = document.getElementById('phrase');
    let ul = phrase_div.getElementsByTagName('ul')[0];
    let letters = ul.getElementsByTagName('li');

    for (let i = 0; i < letters.length; i++) {
      if (letters[i].innerText === letter)
        letters[i].className = 'show letter ' + letter;
    }
  }
}
