// Global variables
let deg = 0;

// Refresh the game 60 frames per second
setInterval(() => {
    const direction = document.getElementById('direction-input-register').value;
    const last_direction = document.getElementById('last-direction-input-register');

    const AB = document.getElementById('button-input-register');

    const player = document.getElementById('player');

    if (AB.value == "A") {
        AB.value = "";
        console.log('shoot')
    } else if (AB.value == "B") {
        AB.value = "";
        console.log('suicide bomb');
    }

    if (direction == "up") {
        const turn = degrees(direction, last_direction.value);
        last_direction.value = direction;

        player.style.transform = `rotateZ(${turn}deg)`;
    } else if (direction == "down") {
        const turn = degrees(direction, last_direction.value);
        last_direction.value = direction;

        player.style.transform = `rotateZ(${turn}deg)`;
    } else if (direction == "left") {
        const turn = degrees(direction, last_direction.value);
        last_direction.value = direction;

        player.style.transform = `rotateZ(${turn}deg)`;
    } else if (direction == "right") {
        const turn = degrees(direction, last_direction.value);
        last_direction.value = direction;

        player.style.transform = `rotateZ(${turn}deg)`;
    }
}, 16.7);

function degrees(currentInput, lastInput) {
    // If last input is empty or is the same
    if (lastInput == "" || lastInput == currentInput) {
        return deg;
    }

    // If the current input is up
    if (currentInput == "up" && lastInput == "left") {
        deg = deg + 90;

        return deg;
    } else if (currentInput == "up" && lastInput == "right") {
        deg = deg - 90;

        return deg;
    } else if (currentInput == "up" && lastInput == "down") {
        deg = deg + 180;

        return deg;
    }

    // If the current input is left
    if (currentInput == "left" && lastInput == "down") {
        deg = deg + 90;

        return deg;
    } else if (currentInput == "left" && lastInput == "up") {
        deg = deg - 90;

        return deg;
    } else if (currentInput == "left" && lastInput == "right") {
        deg = deg + 180;

        return deg;
    }

    // If the current input is down
    if (currentInput == "down" && lastInput == "right") {
        deg = deg + 90;

        return deg;
    } else if (currentInput == "down" && lastInput == "left") {
        deg = deg - 90;

        return deg;
    } else if (currentInput == "down" && lastInput == "up") {
        deg = deg - 180;

        return deg;
    }

    // If the current input is right
    if (currentInput == "right" && lastInput == "up") {
        deg = deg + 90;

        return deg;
    } else if (currentInput == "right" && lastInput == "down") {
        deg = deg - 90;

        return deg;
    } else if (currentInput == "right" && lastInput == "left") {
        deg = deg - 180;

        return deg;
    }
}  