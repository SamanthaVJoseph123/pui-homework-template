// const queryString = window.location.search;
// const params = new URLSearchParams(queryString);

// class Notecard {
//     constructor(imageURL, imageText, title, summaryBody, postBody, topic, link) {
//       this.noteImageURL = imageURL;
//       this.noteImageText = imageText;
//       this.noteTitle = title;
//       this.noteSummaryBody = summaryBody;
//       this.notePostBody = postBody;
//       this.noteTopic = topic;
//       this.noteLink = link;
//       this.element = null;
//     }
//   }

// let notecardSet;
// if (localStorage.getItem('storedNotes1') == null) {
//     notecardSet = new Set();
// } else {
//     const notecardArrayString = localStorage.getItem('storedNotes1');
//     const notecardArray = JSON.parse(notecardArrayString);
//     notecardSet = new Set(notecardArray);
// }

// let notesData;
// if (localStorage.getItem('storedNotes2') == null) {
//     notesData = {};
// } else {
//     const notecardArrayString = localStorage.getItem('storedNotes2');
//     notesData = JSON.parse(notecardArrayString);
// }

// function addNewNote(imageURL, imageText, title, summaryBody, postBody, topic, link){
//     const notecard = new Notecard(imageURL, imageText, title, summaryBody, postBody, topic, link);
//     notecardSet.add(notecard);
//     return notecard;
// }

// const title1 = document.getElementById('title');
// const topic1 = document.getElementById('topic');
// const summary1 = document.getElementById('summary');
// const body1 = document.getElementById('body');
// const imageURL1 = document.getElementById('imageURL');
// const imageALT1 = document.getElementById('imageALT');
// const button1 =  document.getElementById('btn1');

// // function fun1() {
// //     output1.innerHTML = title1.value;
// // }

// function fun1() {

//     //count the length of the current storage
//     const notecardArrayString = localStorage.getItem('storedNotes1');
//     const notecardArray = JSON.parse(notecardArrayString);

//     //if there are 2 posts already, we want the current post to have an index of 3

//     let index1 = null;

//     if (notecardArray == null){
//         index1 = "1";
//     } else {
//         const length1 = notecardArray.length;
//         index1 = String(length1 + 1);
//     }
//     const link1 = "./index3.html" + "?note=" + index1;

//     const notecard = addNewNote(imageURL1.value, imageALT1.value, title1.value, summary1.value, body1.value, topic1.value, link1);

//     const notecardData = addtoNotesData(imageURL1.value, imageALT1.value, title1.value, summary1.value, body1.value, topic1.value, index1);

//     saveToLocalStorageOne();
//     saveToLocalStorageTwo();
// }

// function saveToLocalStorageOne() {
//     const notecardArray = Array.from(notecardSet);
//     console.log("Hello")
//     console.log("this is the array")
//     console.log(notecardArray);
//     const notecardArrayString = JSON.stringify(notecardArray);
//     console.log("this is the arraystring")
//     console.log(notecardArrayString);
//     localStorage.setItem('storedNotes1', notecardArrayString);
//   }
  
// function retrieveFromLocalStorageOne() {
//     const notecardArrayString = localStorage.getItem('storedNotes1');
//     const notecardArray = JSON.parse(notecardArrayString);
//     for (const notecard of notecardArray) {
//       createElement(notecard);
//     }
// }

// function createElement(notecard){
//     const template = document.querySelector('#notecard-template');
//     const clone = template.content.cloneNode(true);
//     notecard.element = clone.querySelector('.notecard-container');
//     const notecardListElement = document.querySelector('#notecard-list');
//     notecardListElement.append(clone);
//     updateElement(notecard);
//   }
  
//   function updateElement(notecard){
//     const noteImageElement = notecard.element.querySelector('.notecard-image');
//     const noteTitleElement = notecard.element.querySelector('.notecard-title');
//     const noteBodySummaryElement = notecard.element.querySelector('.notecard-summary-body');
//     const noteTopicElement = notecard.element.querySelector('.notecard-topic');
//     const noteLinkElement = notecard.element.querySelector('.notecard-link');
//     // const postImage = document.querySelector(".post-image");
//     // postImage.src = x[noteIndex].imageURL;

//     noteImageElement.src = notecard.noteImageURL;
//     noteImageElement.onerror = function (){
//         console.log("Image was not found");
//         noteImageElement.src = "../assets/finalProjectAssets/bookCover.jpg";
//     };

//     noteImageElement.alt = notecard.noteImageText;
//     noteTitleElement.innerText = notecard.noteTitle;
//     noteBodySummaryElement.innerText = notecard.noteSummaryBody;
//     noteTopicElement.innerText = notecard.noteTopic;
//     noteLinkElement.href = notecard.noteLink;
//   }

// //   only runs on the home page
// if (localStorage.getItem('storedNotes1') != null && document.getElementById('notecard-template') != null) {
//     retrieveFromLocalStorageOne();
// }

// // only runs on the Make Post page
// if (document.getElementById('btn1') != null) {
//     button1.addEventListener('click', fun1);
//  }

// function addtoNotesData(imageURL, imageText, title, summaryBody, postBody, topic, index){
//     notesData[index] = {
//         "imageURL": imageURL,
//         "imageText": imageText,
//         "title": title,
//         "summaryBody": summaryBody,
//         "postBody": postBody,
//         "topic": topic,
//     }
// }

// function saveToLocalStorageTwo() {
//     const notesDataString = JSON.stringify(notesData);
//     localStorage.setItem('storedNotes2', notesDataString);

//     //delete this later but just to check
//     retrieveFromLocalStorageTwo();
//   }

// let x = null;
// function retrieveFromLocalStorageTwo() {
//     const storedData = localStorage.getItem('storedNotes2');
//     x = JSON.parse(storedData);
//     console.log("I am here in retrieveLS2");
//     console.log(x);
// }

// new code

const queryString = window.location.search;
const params = new URLSearchParams(queryString);

// code defines notecardDictionary
// if no notecards are present, then notecardDictionary = {}
// if notecards are present, we retrieve from local storage and set to notecardDictionary
let notecardDictionary = {};
if (localStorage.getItem('storedNotes') == null) {
    notecardDictionary = {};
} else {
    const notecardDictionaryString = localStorage.getItem('storedNotes');
    notecardDictionary = JSON.parse(notecardDictionaryString);
}

// function to create a new notecard INSTANCE to add notecardDictionary OBJECT
function addNotecardToDictionary(index, imageURL, imageText, title, summaryBody, postBody, topic, link) {
    const newNotecard = new Notecard(imageURL, imageText, title, summaryBody, postBody, topic, link);
    notecardDictionary[index] = newNotecard;
}

// class Notecard which will create each INSTANCE
class Notecard {
    constructor(imageURL, imageText, title, summaryBody, postBody, topic, link) {
      this.noteImageURL = imageURL;
      this.noteImageText = imageText;
      this.noteTitle = title;
      this.noteSummaryBody = summaryBody;
      this.notePostBody = postBody;
      this.noteTopic = topic;
      this.noteLink = link;
      this.element = null;
    }
}

// these elements are on index4.html
// this is the "Specific Post page"
const titleElement = document.getElementById('title');
const topicElement = document.getElementById('topic');
const summaryElement = document.getElementById('summary');
const bodyElement = document.getElementById('body');
const imageURLElement = document.getElementById('imageURL');
const imageALTElement = document.getElementById('imageALT');
const buttonElement =  document.getElementById('btn1');

function fun1() {

    // grab notecardDictionary from localStorage
    let notecardDictionaryString = localStorage.getItem('storedNotes');
    notecardDictionary = JSON.parse(notecardDictionaryString);

    // get index value to assign to notecard instance
    // index = current dictionary length + 1
    // if there are 2 posts currently, then the next post added will have index = 3
    let index = null;
    if (notecardDictionary == null){
        index = "1";
    } else {
        let dictionaryLength = notecardDictionary.length;
        index = String(dictionaryLength + 1);
    }

    // create link which includes index value
    let link = "./index3.html" + "?note=" + index;

    // call function which creates notecard with associated index
    addNotecardToDictionary(index, imageURLElement.value, imageALTElement.value, titleElement.value, summaryElement.value, bodyElement.value, topicElement.value, link)

    //save new notecard into local storage
    saveToLocalStorage();
}

function saveToLocalStorage() {
    const notecardDictionaryString = JSON.stringify(notecardDictionary);
    localStorage.setItem('storedNotes', notecardDictionaryString);
}

function retrieveFromLocalStorage() {
    let notecardDictionaryString = localStorage.getItem('storedNotes');
    notecardDictionary = JSON.parse(notecardDictionaryString);

    for (const notecard of Object.values(notecardDictionary)){
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
    const noteLinkElement = notecard.element.querySelector('.notecard-link');

    noteImageElement.src = notecard.noteImageURL;
    noteImageElement.onerror = function () {
        console.log("Image was not found");
        noteImageElement.src = "../assets/finalProjectAssets/bookCover.jpg";
    };

    noteImageElement.alt = notecard.noteImageText;
    noteTitleElement.innerText = notecard.noteTitle;
    noteBodySummaryElement.innerText = notecard.noteSummaryBody;
    noteTopicElement.innerText = notecard.noteTopic;
    noteLinkElement.href = notecard.noteLink;
  }

// only runs on the home page
if (localStorage.getItem('storedNotes') != null && document.getElementById('notecard-template') != null) {
    retrieveFromLocalStorage();
}

// only runs on the Make Post page
if (document.getElementById('btn1') != null) {
    button1.addEventListener('click', fun1);
 }