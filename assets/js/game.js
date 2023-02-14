// Refresh the game 60 frames per second
setInterval(() => {
    const input = document.getElementById('input-register').value;
    const player = document.getElementById('player');

    if (input == "up") {
        player.style.transform = "rotateZ(0deg)";
    } else if (input == "down") {
        player.style.transform = "rotateZ(180deg)";
    } else if (input == "left") {
        player.style.transform = "rotateZ(270deg)";
    } else if (input == "right") {
        player.style.transform = "rotateZ(90deg)";
    }
}, 16.7);