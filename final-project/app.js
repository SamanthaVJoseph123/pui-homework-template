const queryString = window.location.search;
const params = new URLSearchParams(queryString);

class Notecard {
  constructor(imageURL, imageText, title, body) {
    this.noteImageURL = imageURL;
    this.noteImageText = imageText;
    this.noteTitle = title;
    this.noteBody = body;
    this.element = null;
  }
}

// const notecardOne= new Notecard('test-image', 'test-title', 'test-body');
// "this" keyword refers to the Notecard object that the constructor function creates

// EXAMPLE:
// const notecardOne = new Notecard('test-image', 'test-title', 'test-body');
// notecardOne.noteImageURL;
// notecardOne.noteTitle;
// notecardOne.noteBody;

const notecardSet = new Set();

function addNewNote(imageURL, imageText, title, body){
  const notecard = new Notecard(imageURL, imageText, title, body);
  notecardSet.add(notecard);
  return notecard;
}

const notecardOne = addNewNote(
  "../assets/finalProjectAssets/bookCover.jpg",
  "Alternate Text for post 1",
  "The first note title",
  "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
);

const notecardTwo = addNewNote(
  "../assets/finalProjectAssets/bookCover.jpg",
  "Alternate Text for post 2",
  "The second note title",
  "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
);

for (const notecard of notecardSet){
  console.log(notecard);
  createElement(notecard);
}

function createElement(notecard){
  const template = document.querySelector('#notecard-template');
  const clone = template.content.cloneNode(true);
  notecard.element = clone.querySelector('.notecard-container');

  const notecardListElement = document.querySelector('#notecard-list');
  notecardListElement.append(clone);

  updateElement(notecard);
}

function updateElement(notecard){
  const noteImageElement = notecard.element.querySelector('.notecard-image');
  const noteTitleElement = notecard.element.querySelector('.notecard-title');
  const noteBodyElement = notecard.element.querySelector('.notecard-body');

  noteImageElement.src = notecard.noteImageURL;
  noteImageElement.alt = notecard.noteImageText;
  noteTitleElement.innerText = notecard.noteTitle;
  noteBodyElement.innerText = notecard.noteBody;
}