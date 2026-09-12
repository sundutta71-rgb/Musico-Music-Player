console.log("Welcome to Musico");
// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let songs = [
    {songName: "Saaiyan", filePath: "song/1.mp3", coverpath: "covers/1.jpg" },
    {songName: "Saaiyan", filePath: "song/1.mp3", coverpath: "covers/1.jpg" },
    {songName: "Saaiyan", filePath: "song/1.mp3", coverpath: "covers/1.jpg" },
    {songName: "Saaiyan", filePath: "song/1.mp3", coverpath: "covers/1.jpg" },
    {songName: "Saaiyan", filePath: "song/1.mp3", coverpath: "covers/1.jpg" },
    {songName: "Saaiyan", filePath: "song/1.mp3", coverpath: "covers/1.jpg" },
]
//audioElement.play();

//Listen to Events
myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
})