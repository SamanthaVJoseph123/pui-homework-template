const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const noteIndex = urlParams.get('note');
console.log("This is the noteIndex:");
console.log(noteIndex);

// if (typeof noteIndex === "string"){
//     console.log("noteIndex is a string")
// }

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

// need to keep a counter of deleted posts. To make sure that the other counter is not messed up. 
// must include this JS file as well

// if (document.getElementById('btn2') != null) {
//     button1.addEventListener('click', fun2);
//  }

// function fun2(){
//     const storedData2 = localStorage.getItem('storedNotes2');
//     const x = JSON.parse(storedData2);
//     delete x[String(noteIndex)];

//     const arrayIndex = noteIndex - 1;
//     const storedData1 = localStorage.getItem('storedNotes1');
//     const y = JSON.parse(storedData1);

// }

