console.log("Welcome to Musico");

let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let songs = [
    {songName: "Saiyaan", filePath: "song/1.mp3", coverPath: "cover.jpg"},
    {songName: "Saiyaan", filePath: "song/1.mp3", coverPath: "cover.jpg"},
    {songName: "Saiyaan", filePath: "song/1.mp3", coverPath: "cover.jpg"},
    {songName: "Saiyaan", filePath: "song/1.mp3", coverPath: "cover.jpg"},
    {songName: "Saiyaan", filePath: "song/1.mp3", coverPath: "cover.jpg"},
    {songName: "Saiyaan", filePath: "song/1.mp3", coverPath: "cover.jpg"},
];

masterPlay.addEventListener('click', () => {
    // Query fresh each click — handles both <i> and Font Awesome's converted <svg>
    let icon = masterPlay.querySelector('svg, i');

    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
    } else {
        audioElement.pause();
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    }
});

audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    myProgressBar.value = (audioElement.currentTime / audioElement.duration) * 100;
});