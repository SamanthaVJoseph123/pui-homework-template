//OLD CODE BELOW
// const queryString = window.location.search;
// const params = new URLSearchParams(queryString);

// class Notecard {
//     constructor(imageURL, imageText, title, summaryBody, postBody, topic) {
//       this.noteImageURL = imageURL;
//       this.noteImageText = imageText;
//       this.noteTitle = title;
//       this.noteSummaryBody = summaryBody;
//       this.notePostBody = postBody;
//       this.noteTopic = topic;
//       this.element = null;
//     }
//   }

// let notecardSet;
// if (localStorage.getItem('storedNotes') == null) {
//     notecardSet = new Set()
// } else {
//     const notecardArrayString = localStorage.getItem('storedNotes');
//     const notecardArray = JSON.parse(notecardArrayString);
//     notecardSet = new Set(notecardArray);
// }

// function addNewNote(imageURL, imageText, title, summaryBody, postBody, topic){
//     const notecard = new Notecard(imageURL, imageText, title, summaryBody, postBody, topic);
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
//     const notecard = addNewNote(imageURL1.value, imageALT1.value, title1.value, summary1.value, body1.value, topic1.value);
//     saveToLocalStorage();
// }


// function saveToLocalStorage() {
//     const notecardArray = Array.from(notecardSet);
//     console.log("Hello")
//     console.log("this is the array")
//     console.log(notecardArray);


//     const notecardArrayString = JSON.stringify(notecardArray);
//     console.log("this is the arraystring")
//     console.log(notecardArrayString);
//     localStorage.setItem('storedNotes', notecardArrayString);
//   }
  
// function retrieveFromLocalStorage() {
//     const notecardArrayString = localStorage.getItem('storedNotes');
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

//     noteImageElement.src = notecard.noteImageURL;
//     noteImageElement.alt = notecard.noteImageText;
//     noteTitleElement.innerText = notecard.noteTitle;
//     noteBodySummaryElement.innerText = notecard.noteSummaryBody;
//     noteTopicElement.innerText = notecard.noteTopic;
//   }

// //   only runs on the home page
// if (localStorage.getItem('storedNotes') != null && document.getElementById('notecard-template') != null) {
//     retrieveFromLocalStorage();
// }

// // only runs on the Make Post page
// if (document.getElementById('btn1') != null) {
//     button1.addEventListener('click', fun1);
//  }

//NEW CODE BELOW!

const queryString = window.location.search;
const params = new URLSearchParams(queryString);

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

let notecardSet;
if (localStorage.getItem('storedNotes1') == null) {
    notecardSet = new Set();
} else {
    const notecardArrayString = localStorage.getItem('storedNotes1');
    const notecardArray = JSON.parse(notecardArrayString);
    notecardSet = new Set(notecardArray);
}

let notesData;
if (localStorage.getItem('storedNotes2') == null) {
    notesData = {};
} else {
    const notecardArrayString = localStorage.getItem('storedNotes2');
    notesData = JSON.parse(notecardArrayString);
}


function addNewNote(imageURL, imageText, title, summaryBody, postBody, topic, link){
    const notecard = new Notecard(imageURL, imageText, title, summaryBody, postBody, topic, link);
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

    //count the length of the current storage
    const notecardArrayString = localStorage.getItem('storedNotes1');
    const notecardArray = JSON.parse(notecardArrayString);

    //if there are 2 posts already, we want the current post to have an index of 3

    let index1 = null;

    if (notecardArray == null){
        index1 = "1";
    } else {
        const length1 = notecardArray.length;
        index1 = String(length1 + 1);
    }
    const link1 = "./index3.html" + "?note=" + index1;

    const notecard = addNewNote(imageURL1.value, imageALT1.value, title1.value, summary1.value, body1.value, topic1.value, link1);

    const notecardData = addtoNotesData(imageURL1.value, imageALT1.value, title1.value, summary1.value, body1.value, topic1.value, index1);

    saveToLocalStorageOne();
    saveToLocalStorageTwo();
}

function saveToLocalStorageOne() {
    const notecardArray = Array.from(notecardSet);
    console.log("Hello")
    console.log("this is the array")
    console.log(notecardArray);
    const notecardArrayString = JSON.stringify(notecardArray);
    console.log("this is the arraystring")
    console.log(notecardArrayString);
    localStorage.setItem('storedNotes1', notecardArrayString);
  }
  
function retrieveFromLocalStorageOne() {
    const notecardArrayString = localStorage.getItem('storedNotes1');
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
    const noteLinkElement = notecard.element.querySelector('.notecard-link');
    // const postImage = document.querySelector(".post-image");
    // postImage.src = x[noteIndex].imageURL;

    noteImageElement.src = notecard.noteImageURL;
    noteImageElement.onerror = function (){
        console.log("Image was not found");
        noteImageElement.src = "../assets/finalProjectAssets/bookCover.jpg";
    };

    noteImageElement.alt = notecard.noteImageText;
    noteTitleElement.innerText = notecard.noteTitle;
    noteBodySummaryElement.innerText = notecard.noteSummaryBody;
    noteTopicElement.innerText = notecard.noteTopic;
    noteLinkElement.href = notecard.noteLink;
  }

//   only runs on the home page
if (localStorage.getItem('storedNotes1') != null && document.getElementById('notecard-template') != null) {
    retrieveFromLocalStorageOne();
}

// only runs on the Make Post page
if (document.getElementById('btn1') != null) {
    button1.addEventListener('click', fun1);
 }

function addtoNotesData(imageURL, imageText, title, summaryBody, postBody, topic, index){
    notesData[index] = {
        "imageURL": imageURL,
        "imageText": imageText,
        "title": title,
        "summaryBody": summaryBody,
        "postBody": postBody,
        "topic": topic,
    }
}

function saveToLocalStorageTwo() {
    const notesDataString = JSON.stringify(notesData);
    localStorage.setItem('storedNotes2', notesDataString);

    //delete this later but just to check
    retrieveFromLocalStorageTwo();
  }

const x = null;
function retrieveFromLocalStorageTwo() {
    const storedData = localStorage.getItem('storedNotes2');
    x = JSON.parse(storedData);
    console.log("I am here in retrieveLS2");
    console.log(x);
}

// const notesData = {
//     "1": {
//         "imageURL": "blah.com",
//         "imageText": "blah1",
//         "title": "blah2",
//         "summaryBody": "blah3",
//         "postBody": "blah4",
//         "topic": "blah5",
//         "link": "blahblah.com"
//     },
//     "2": {
//         "imageURL": "sam.com",
//         "imageText": "sam1",
//         "title": "sam2",
//         "summaryBody": "sam3",
//         "postBody": "sam4",
//         "topic": "sam5",
//         "link": "samsam.com"
//     }
// };