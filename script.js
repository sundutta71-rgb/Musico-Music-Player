console.log("Welcome to Musico");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Saiyaan", filePath: "songs/1.mp3", coverPath: "cover/1.jpg"},
    {songName: "High Heels te Nachche", filePath: "songs/2.mp3", coverPath: "cover/2.jpg"},
    {songName: "Zara sa", filePath: "songs/3.mp3", coverPath: "cover/3.jpg"},
    {songName: "Feelings", filePath: "songs/4.mp3", coverPath: "cover/4.jpg"},
    {songName: "Dil Ibaadat", filePath: "songs/5.mp3", coverPath: "cover/5.jpg"},
    {songName: "Tum hi ho Bandhu", filePath: "songs/6.mp3", coverPath: "cover/6.jpg"},
];

songItems.forEach((element, i)=>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})

masterPlay.addEventListener('click', () => {
    // Query fresh each click — handles both <i> and Font Awesome's converted <svg>
    let icon = masterPlay.querySelector('svg, i');

    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
        gif.style.opacity = 0;
    }
});

audioElement.addEventListener('timeupdate', () => {
    myProgressBar.value = (audioElement.currentTime / audioElement.duration) * 100;
});

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100 ;
})
