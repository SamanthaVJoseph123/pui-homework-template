const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
// gets the index for that specific note
// http://127.0.0.1:5501/final-project/index3.html?note=8
// ^^ in this case, index = 8
const noteIndex = urlParams.get('note');
console.log("This is the noteIndex:");
console.log(noteIndex);

// grabs notecard/post information from local storage
let notecardDictionaryString = localStorage.getItem('storedNotes');
let notecardDictionary = JSON.parse(notecardDictionaryString);
console.log("This is the notecardDictionary");
console.log(notecardDictionary);

// inputs all necessary information into page
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
    const topic1 = notecardDictionary[noteIndex].noteTopic;
    const topicColor = topicColorMap[topic1];
    document.querySelector('.post-topic').style.backgroundColor = topicColor;
} else {
    console.error("note not found");
}

if (document.getElementById('btn2') != null) {
    const buttonElement = document.getElementById('btn2');
    buttonElement.addEventListener('click', removePost);
 }

//  Function identifies the index of the post and removes that instance from the object
function removePost() {
    // notecardDictionary = retrieveFromLocalStorageDICT();
    delete notecardDictionary[noteIndex];
    saveToLocalStorageDICT();

    let removedPostNum = retrieveFromLocalStorageNUM();
    removedPostNum += 1;
    saveToLocalStorageNUM(removedPostNum);

    window.location.href = "index.html"
}

// functions to save and retrive removedPostNum to/from localStorage
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

// only runs on the Specific Post page
if (document.getElementById('btn3') != null) {
    const buttonElement = document.getElementById('btn3');
    buttonElement.addEventListener('click', addComment);
 }
// takes information from input box and adds into the "comment" field in the instance
 function addComment(){
    let theIndex = noteIndex;
    if (theIndex && notecardDictionary[theIndex]) {
        const commentBox = document.getElementById("comment");
        const newComment = commentBox.value.trim();

        if (newComment){
            notecardDictionary[theIndex].comments = notecardDictionary[theIndex].comments || [];
            notecardDictionary[theIndex].comments.push(newComment);

            localStorage.setItem('storedNotes', JSON.stringify(notecardDictionary));
            commentBox.value = "";
            displayComments();
        } else {
            alert("Please enter a comment");
        }

    } else {
        alert("note not found");
    }
 }
// extracts the comments field from that specific instance and displays each comment
 function displayComments(){
    const theIndex = noteIndex;
    const commentsContainer = document.getElementById("comments-container");
    if (theIndex && notecardDictionary[theIndex] && notecardDictionary[theIndex].comments){
        commentsContainer.innerHTML = "";
        notecardDictionary[theIndex].comments.forEach(comment => {
            const commentElement = document.createElement("div");
            commentElement.classList.add("comment-style");
            commentElement.classList.add("comment");
            commentElement.textContent = comment;
            commentsContainer.appendChild(commentElement);
        });
    }

 }
 window.onload = displayComments;

 