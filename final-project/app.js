class Notecard {
    constructor(title, body) {
        console.log('Create a new notecard!');
        this.noteTitle = title;
        this.noteBody = body;
        this.element = document.querySelector(elementID);
    }
}

// const notecardOne= new Notecard('test-image', 'test-title', 'test-body');
// "this" keyword refers to the Notecard object that the constructor function creates

// EXAMPLE:
// const notecardOne = new Notecard('test-image', 'test-title', 'test-body');
// notecardOne.noteImageURL;
// notecardOne.noteTitle;
// notecardOne.noteBody;

const notecardOne = new Notecard(
  'This is the First Note',
  'Here is some body text for the first note.',
  '#notecard-one'
)

const notecardTwo = new Notecard(
  'This is the Second Note',
  'And here is some body text for the second note! What could be next?',
  '#notecard-two'
)

const notecardThree = new Notecard(
  'This is the Third Note',
  'Yep, you guessed it, here is some body text for the third note.',
  '#notecard-three'
)
