let index = 0;
let audioElement = new Audio('songs/1.mp3');
let currentSong = document.querySelector('#play');
let playbar = document.querySelector('#bar');
let gif = document.querySelector('#gif');
let currentSongName = document.querySelector('#playingSong');
let items = Array.from(document.getElementsByClassName('item'));
let lastEle=items.length-1;

let songs = [
    { songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "images/1.jpg" },
    { songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "images/2.jpg" },
    { songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "images/3.jpg" },
    { songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "images/4.jpg" },
    { songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "images/5.jpg" },
    { songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "images/6.jpg" },
    { songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "images/7.jpg" },
    { songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "images/8.jpg" },
    { songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "images/9.jpg" },
    { songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "images/10.jpg" },
]

items.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

currentSong.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        currentSong.classList.remove('gg-play-button-o');
        currentSong.classList.add('gg-play-pause-o');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        currentSong.classList.remove('gg-play-pause-o');
        currentSong.classList.add('gg-play-button-o');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    bar.value = progress;
    bar.style.background = 'linear-gradient(to right, red 0%, orange ' + bar.value + '%, #fff ' + bar.value + '%, white 100%)'
})

bar.addEventListener('change', () => {
    audioElement.currentTime = bar.value * audioElement.duration / 100;

})

document.getElementById('next').addEventListener('click', () => {
    if (index >= lastEle) {
        index = 0
    }
    else {
            index += 1;
    }
    audioElement.src = `songs/${index + 1}.mp3`;
    currentSongName.innerText = songs[index].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    currentSong.classList.remove('gg-play-button-o');
    currentSong.classList.add('gg-play-pause-o');

})

document.getElementById('prev').addEventListener('click', () => {
    if (index <=0) {
        index = 0
    }
    else {
        index -= 1;
    }
    audioElement.src = `songs/${index + 1}.mp3`;
    currentSongName.innerText = songs[index].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    currentSong.classList.remove('gg-play-button-o');
    currentSong.classList.add('gg-play-pause-o');

})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('listplay')).forEach((element) => {
        element.classList.remove('gg-play-pause-o');
        element.classList.add('gg-play-button-o');
    })
}

Array.from(document.getElementsByClassName('listplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('gg-play-button-o');
        e.target.classList.add('gg-play-pause-o');
        audioElement.src = `songs/${index + 1}.mp3`;
        currentSongName.innerText = songs[index].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        currentSong.classList.remove('gg-play-button-o');
        currentSong.classList.add('gg-play-pause-o');
    })
})