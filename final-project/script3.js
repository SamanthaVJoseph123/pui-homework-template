const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const noteIndex = urlParams.get('note')
console.log("THIS IS THE noteINDEX:")
console.log(noteIndex);

const storedData = localStorage.getItem('storedNotes2');
const x = JSON.parse(storedData);

if (x[noteIndex] && document.getElementById('btn2') != null){
    document.querySelector(".post-title").textContent = x[noteIndex].title;
    document.querySelector(".post-topic").textContent = x[noteIndex].topic;
    document.querySelector(".post-image").alt = x[noteIndex].imageText;

    // document.querySelector(".post-image").alt = x[noteIndex].imageText;
    // document.querySelector(".post-image").src = x[noteIndex].imageURL;

    const postImage = document.querySelector(".post-image");
    postImage.src = x[noteIndex].imageURL;

    postImage.onerror = function (){
        console.log("Image was not found");
        postImage.src = "../assets/finalProjectAssets/bookCover.jpg";
    };

    document.querySelector(".post-full-body").textContent = x[noteIndex].postBody;
} else {
    console.error("roll type not found");
}

// need to keep a counter of deleted posts. To make sure that the other counter is not messed up. 
// must include this JS file as well
if (document.getElementById('btn2') != null) {
    button1.addEventListener('click', fun2);
 }

// function fun2(){
//     const storedData2 = localStorage.getItem('storedNotes2');
//     const x = JSON.parse(storedData2);
//     delete x[String(noteIndex)];

//     const arrayIndex = noteIndex - 1;
//     const storedData1 = localStorage.getItem('storedNotes1');
//     const y = JSON.parse(storedData1);

// }

