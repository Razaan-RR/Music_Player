var arr = [
    {index: "0", name: "Echo of sadness", url: "./songs/echoofsadness.mp3", img: "./images/images.jpg", duration: "2:19"},
    {index: "1", name: "Long Night", url: "./songs/longnight.mp3", img: "./images/images-2.jpg", duration: "2:53"},
    {index: "2", name: "MoonLight Drive", url: "./songs/moonlightdrive.mp3", img: "./images/images-3.jpg", duration: "4:08"},
    {index: "3", name: "Sunlit Depths", url: "./songs/sunlitdepths.mp3", img: "./images/images-4.jpg", duration: "1:52"}
];

var audio = new Audio();

var Songs = document.querySelector("#all-songs");
var selectedSong = 0;

var play = document.querySelector("#play");
var forward = document.querySelector("#forward");
var backward = document.querySelector("#backward");

function allSongs() {
    var clutter = "";
    arr.forEach(function(elem) {
        clutter += `<div class="song-card" id="${elem.index}">
                       <div class="part-1">
                        <img src="${elem.img}" alt="${elem.name}">
                        <h2>${elem.name}</h2>
                        <h6>${elem.duration}</h6>
                       </div>
                    </div>`;
    });

    Songs.innerHTML = clutter; 
    audio.src = arr[selectedSong].url;   
    document.querySelector("#left").style.backgroundImage = `url(${arr[selectedSong].img})`;

    // Reset forward and backward buttons opacity
    if (forward) forward.style.opacity = 1.0;
    if (backward) backward.style.opacity = 1.0;
}

allSongs();

Songs.addEventListener("click", function(details) {
    var songCard = details.target.closest('.song-card');
    if (songCard) {
        selectedSong = songCard.id;
        allSongs();
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
        clicked = 1;
        audio.play();
    }
});

var clicked = 0;

play.addEventListener("click", function() {
    if (clicked == 0) {
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
        clicked = 1;
        allSongs();
        audio.play();
    } else {
        play.innerHTML = `<i class="ri-play-mini-fill"></i>`;
        clicked = 0;
        allSongs();
        audio.pause();
    }
});

forward.addEventListener("click", function() {
    if (selectedSong < arr.length - 1) {
        selectedSong++;
        allSongs();
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
        clicked = 1;
        audio.play();
    } else {
        forward.style.opacity = 0.4;
    }
});

backward.addEventListener("click", function() {
    if (selectedSong > 0) {
        selectedSong--;
        allSongs();
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
        clicked = 1;
        audio.play();
    } else {
        backward.style.opacity = 0.4;
    }
});
