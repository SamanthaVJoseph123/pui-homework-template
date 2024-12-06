const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const noteIndex = urlParams.get('note')
console.log(noteIndex);

const storedData = localStorage.getItem('storedNotes2');
const x = JSON.parse(storedData);

if (x[noteIndex]){
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
    console.error("roll type not found")
}
