// Finding the music player

let music = document.getElementById("music");

// Finding the button

let button = document.getElementById("musicBtn");

// When button is clicked

button.onclick = function () {

    if (music.paused) {

        music.play();

        button.innerHTML = "⏸ Pause Music";

    } else {

        music.pause();

        button.innerHTML = "▶ Play Music";

    }

};
