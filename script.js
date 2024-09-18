document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-audio');
    audio.play().catch(error => {
        console.log("Audio play failed: ", error);
    });
});

document.getElementById('play-button').addEventListener('click', () => {
    const audio = document.getElementById('background-audio');
    audio.play().catch(error => {
        console.log("Audio play failed: ", error);
    });
});