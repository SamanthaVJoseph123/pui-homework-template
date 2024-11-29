const queryString = window.location.search;
const params = new URLSearchParams(queryString);

class Notecard {
    constructor(imageURL, imageText, title, summaryBody, postBody, topic) {
      this.noteImageURL = imageURL;
      this.noteImageText = imageText;
      this.noteTitle = title;
      this.noteSummaryBody = summaryBody;
      this.notePostBody = postBody;
      this.noteTopic = topic;
      this.element = null;
    }
  }

let notecardSet;
if (localStorage.getItem('storedNotes') == null) {
    notecardSet = new Set()
} else {
    const notecardArrayString = localStorage.getItem('storedNotes');
    const notecardArray = JSON.parse(notecardArrayString);
    notecardSet = new Set(notecardArray);
}


function addNewNote(imageURL, imageText, title, summaryBody, postBody, topic){
    const notecard = new Notecard(imageURL, imageText, title, summaryBody, postBody, topic);
    notecardSet.add(notecard);
    return notecard;
}

const title1 = document.getElementById('title');
const topic1 = document.getElementById('topic');
const summary1 = document.getElementById('summary');
const body1 = document.getElementById('body');
const imageURL1 = document.getElementById('imageURL');
const imageALT1 = document.getElementById('imageALT');
const button1 =  document.getElementById('btn1');

// function fun1() {
//     output1.innerHTML = title1.value;
// }

function fun1() {
    const notecard = addNewNote(imageURL1.value, imageALT1.value, title1.value, summary1.value, body1.value, topic1.value);
    saveToLocalStorage();
}


function saveToLocalStorage() {
    const notecardArray = Array.from(notecardSet);
    console.log("Hello")
    console.log("this is the array")
    console.log(notecardArray);
    

    const notecardArrayString = JSON.stringify(notecardArray);
    console.log("this is the arraystring")
    console.log(notecardArrayString);
  
    localStorage.setItem('storedNotes', notecardArrayString);
  }
  
function retrieveFromLocalStorage() {
    const notecardArrayString = localStorage.getItem('storedNotes');
    const notecardArray = JSON.parse(notecardArrayString);
    for (const notecard of notecardArray) {
      createElement(notecard);
    }
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
    const noteBodySummaryElement = notecard.element.querySelector('.notecard-summary-body');
    const noteTopicElement = notecard.element.querySelector('.notecard-topic');
  
    noteImageElement.src = notecard.noteImageURL;
    noteImageElement.alt = notecard.noteImageText;
    noteTitleElement.innerText = notecard.noteTitle;
    noteBodySummaryElement.innerText = notecard.noteSummaryBody;
    noteTopicElement.innerText = notecard.noteTopic;
  }

if (localStorage.getItem('storedNotes') != null && document.getElementById('notecard-template') != null) {
    retrieveFromLocalStorage();
}
if (document.getElementById('notecard-template') == null) {
    button1.addEventListener('click', fun1);
 }

