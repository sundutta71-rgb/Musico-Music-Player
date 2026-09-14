console.log("Welcome to Musico");

let songIndex = 0;
let audioElement = document.createElement('audio');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let songs = [
    {songName: "Saiyaan", filePath: "1.mp3", coverPath: "cover.jpg"},
    {songName: "Saiyaan", filePath: "1.mp3", coverPath: "cover.jpg"},
    {songName: "Saiyaan", filePath: "1.mp3", coverPath: "cover.jpg"},
    {songName: "Saiyaan", filePath: "1.mp3", coverPath: "cover.jpg"},
    {songName: "Saiyaan", filePath: "1.mp3", coverPath: "cover.jpg"},
    {songName: "Saiyaan", filePath: "1.mp3", coverPath: "cover.jpg"},
];

audioElement.src = songs[songIndex].filePath;

masterPlay.addEventListener('click', () => {
    console.log('clicked');
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play()
            .then(() => console.log('playing'))
            .catch(err => console.log('play failed:', err));
    } else {
        audioElement.pause();
    }
});

audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    myProgressBar.value = (audioElement.currentTime / audioElement.duration) * 100;
});