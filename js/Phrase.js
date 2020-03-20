/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
      this.phrase = phrase.toLowerCase();
    }
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
  }
  