const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const noteIndex = urlParams.get('note');
console.log("This is the noteIndex:");
console.log(noteIndex);

let notecardDictionaryString = localStorage.getItem('storedNotes');
let notecardDictionary = JSON.parse(notecardDictionaryString);
console.log("This is the notecardDictionary");
console.log(notecardDictionary);

console.log("HELLO YOU ARE HERE");
console.log(notecardDictionary[noteIndex]);
console.log(notecardDictionary[noteIndex].title);

if (notecardDictionary[noteIndex]){
    document.querySelector(".post-title").textContent = notecardDictionary[noteIndex].noteTitle;
    document.querySelector(".post-topic").textContent = notecardDictionary[noteIndex].noteTopic;
    document.querySelector(".post-image").alt = notecardDictionary[noteIndex].noteImageText;

    const postImage = document.querySelector(".post-image");
    postImage.src = notecardDictionary[noteIndex].noteImageURL;

    postImage.onerror = function (){
        console.log("Image was not found");
        postImage.src = "../assets/finalProjectAssets/bookCover.jpg";
    };

    document.querySelector(".post-full-body").textContent = notecardDictionary[noteIndex].notePostBody;
} else {
    console.error("note not found");
}

if (document.getElementById('btn2') != null) {
    const buttonElement = document.getElementById('btn2');
    buttonElement.addEventListener('click', removePost);
 }

function removePost() {
    // notecardDictionary = retrieveFromLocalStorageDICT();
    delete notecardDictionary[noteIndex];
    saveToLocalStorageDICT();

    let removedPostNum = retrieveFromLocalStorageNUM();
    removedPostNum += 1;
    saveToLocalStorageNUM(removedPostNum);

    window.location.href = "index.html"
}

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

function saveToLocalStorageDICT() {
    const notecardDictionaryString = JSON.stringify(notecardDictionary);
    localStorage.setItem('storedNotes', notecardDictionaryString);
}

if (document.getElementById('btn3') != null) {
    const buttonElement = document.getElementById('btn3');
    buttonElement.addEventListener('click', addComment);
 }

 