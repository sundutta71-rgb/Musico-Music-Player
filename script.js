console.log("Welcome to Musico");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let backward = document.getElementById('backward');
let forward = document.getElementById('forward');
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
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    });
};

// Shared helper: load + play the song at a given index, and keep every
// icon (row play button, master play button, gif) in sync.
const playSongAtIndex = (i) => {
    // wrap around so forward/backward loop instead of stopping at the ends
    songIndex = (i + songs.length) % songs.length;

    makeAllPlays();

    const icon = songItems[songIndex].querySelector('.songItemPlay');
    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause');

    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();

    let masterIcon = masterPlay.querySelector('svg, i');
    masterIcon.classList.remove('fa-play');
    masterIcon.classList.add('fa-pause');
    gif.style.opacity = 1;
};

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

document.querySelector('.songItemContainer').addEventListener('click', (e) => {
    const icon = e.target.closest('.songItemPlay');
    if (!icon) return; // click wasn't on a play icon

    const songItem = icon.closest('.songItem');
    const i = songItems.indexOf(songItem);
    if (i === -1) return;

    playSongAtIndex(i);
});

backward.addEventListener('click', () => {
    playSongAtIndex(songIndex - 1);
});

forward.addEventListener('click', () => {
    playSongAtIndex(songIndex + 1);
});

// Auto-advance to the next song when the current one finishes
audioElement.addEventListener('ended', () => {
    playSongAtIndex(songIndex + 1);
});