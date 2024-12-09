// new code

const queryString = window.location.search;
const params = new URLSearchParams(queryString);

// creates storedNotes if not made yet
// if equal to null or undefined, set equal to {}
// if storedNotes is present, grab from storage
// set equal to notecardDictionary
let storedNotes = localStorage.getItem('storedNotes');
if (storedNotes === null || storedNotes === undefined || storedNotes === "undefined") {
    localStorage.setItem('storedNotes', JSON.stringify({}));
    storedNotes = JSON.stringify({});
}
let notecardDictionary = JSON.parse(storedNotes);
// removedPostNum stores how many posts have been deleted
// this value is necessary when calculated the index for each post
let numberToStore = 0;
let removedPostNum = localStorage.getItem('removedPostNum');
if (removedPostNum == null || removedPostNum === undefined || removedPostNum === "undefined") {
    localStorage.setItem('removedPostNum', numberToStore.toString());
} else {
    removedPostNum = Number(removedPostNum);
}

// function to create a new notecard INSTANCE to add notecardDictionary OBJECT
function addNotecardToDictionary(index, imageURL, imageText, title, summaryBody, postBody, topic, link) {
    const newNotecard = new Notecard(imageURL, imageText, title, summaryBody, postBody, topic, link);
    notecardDictionary[index] = newNotecard;
}

// class Notecard which will create each INSTANCE
class Notecard {
    constructor(imageURL, imageText, title, summaryBody, postBody, topic, link, comments) {
      this.noteImageURL = imageURL;
      this.noteImageText = imageText;
      this.noteTitle = title;
      this.noteSummaryBody = summaryBody;
      this.notePostBody = postBody;
      this.noteTopic = topic;
      this.noteLink = link;
      this.noteComments = comments;
      this.element = null;
    }
}

// these elements are on index4.html
// this is the "Make Post page"
const titleElement = document.getElementById('title');
const topicElement = document.getElementById('topic');
const summaryElement = document.getElementById('summary');
const bodyElement = document.getElementById('body');
const imageURLElement = document.getElementById('imageURL');
const imageALTElement = document.getElementById('imageALT');
const buttonElement =  document.getElementById('btn1');

function makePost() {

    // grab notecardDictionary from localStorage
    let notecardDictionaryString = localStorage.getItem('storedNotes');
    notecardDictionary = JSON.parse(notecardDictionaryString);

    // get index value to assign to notecard instance
    // index = current dictionary length + 1
    // if there are 2 posts currently, then the next post added will have index = 3
    let index = null;

    let removedPostNum = retrieveFromLocalStorageNUM();
    if (Object.keys(notecardDictionary).length === 0 && removedPostNum === 0){
        index = 1;
    } else if (Object.keys(notecardDictionary).length === 0 && removedPostNum != 0){
        index = removedPostNum + 1;
    } else if (Object.keys(notecardDictionary).length != 0 && removedPostNum != 0) {
        let dictionaryLength = Object.keys(notecardDictionary).length;
        index = dictionaryLength + removedPostNum + 1;
    } else if (Object.keys(notecardDictionary).length != 0 && removedPostNum === 0) {
        let dictionaryLength = Object.keys(notecardDictionary).length;
        index = dictionaryLength + 1;
    } else {
        console.log("there is a case which we are missing");
        index = 0;
    }

    // create link which includes index value
    let link = "./index3.html" + "?note=" + String(index);

    // call function which creates notecard with associated index
    addNotecardToDictionary(index, imageURLElement.value, imageALTElement.value, titleElement.value, summaryElement.value, bodyElement.value, topicElement.value, link, []);

    //save new notecard into local storage
    saveToLocalStorage();
}

function saveToLocalStorage() {
    const notecardDictionaryString = JSON.stringify(notecardDictionary);
    localStorage.setItem('storedNotes', notecardDictionaryString);
}

function retrieveFromLocalStorage() {
    let notecardDictionaryString = localStorage.getItem('storedNotes');
    console.log(notecardDictionaryString);
    notecardDictionary = JSON.parse(notecardDictionaryString);

    for (const notecard of Object.values(notecardDictionary)){
        createElement(notecard);
    }
}
// creates the template layout to be filled
function createElement(notecard){
    const template = document.querySelector('#notecard-template');
    const clone = template.content.cloneNode(true);
    notecard.element = clone.querySelector('.notecard-container');
    const notecardListElement = document.querySelector('#notecard-list');
    notecardListElement.append(clone);
    updateElement(notecard);
  }
//   fills template layout with inputed information
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

    const topicColorMap = {
        "Fantasy": "#238db0",
        "Science Fiction": "#d9713d",
        "Romance": "#de7ec9",
        "Historical Fiction": "#1dc241",
        "Horror": "#d93f21",
        "Thriller": "#A52A2A",
        "Mystery": "#8621d9",
        "Literature": "#2a477a",
    };
    const topicColor = topicColorMap[notecard.noteTopic];
    noteTopicElement.style.backgroundColor = topicColor;
  }

// only runs on the home page
if (localStorage.getItem('storedNotes') != null && document.getElementById('notecard-template') != null) {
    retrieveFromLocalStorage();
}

// only runs on the Make Post page
// setTimeout() ensures makePost() is done running and then calls goBackToHome
if (document.getElementById('btn1') != null) {
    buttonElement.addEventListener('click', function() {
        makePost();
        setTimeout(goBackToHome, 100)
    });
 }

 function goBackToHome(){
    window.location.href = "index.html"
 }

//  Helps retrieve and store removedPostNum information
 function saveToLocalStorageNUM(removedPostNum) {
    localStorage.setItem('removedPostNum', removedPostNum.toString());
    console.log(removedPostNum);
}

function retrieveFromLocalStorageNUM() {
    let removedPostNum = localStorage.getItem('removedPostNum');
    if (removedPostNum === null) {
        removedPostNum = 0;
    } else {
        removedPostNum = Number(removedPostNum);
    }
    return removedPostNum;
}
// counts how many posts of each topic/genre are there
let x1 = {};
for (let key in notecardDictionary) {
    let note = notecardDictionary[key];
    let topic = note.noteTopic;

    if (x1[topic]) {
        x1[topic]++;
    } else {
        x1[topic] = 1;
    }
}
// selects list element in page
let listItems = document.querySelectorAll('ul li');
// inputs data into the list element
listItems.forEach(item => {
    let text = item.textContent.trim();
    if (x1[text]) {
        item.textContent = `${text}: ${x1[text]} reviews`;
    } else {
        item.textContent = `${text}: 0 reviews`;
    }
 });