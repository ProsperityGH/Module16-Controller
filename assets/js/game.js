// Global variables
let deg = 0;

// Refresh the game 60 frames per second
setInterval(() => {
    const input = document.getElementById('input-register').value;
    const last_input = document.getElementById('last-input-register');
    const player = document.getElementById('player');

    if (input == "up") {
        const turn = degrees(input, last_input.value);
        last_input.value = input;

        player.style.transform = `rotateZ(${turn}deg)`;
    } else if (input == "down") {
        const turn = degrees(input, last_input.value);
        last_input.value = input;

        player.style.transform = `rotateZ(${turn}deg)`;
    } else if (input == "left") {
        const turn = degrees(input, last_input.value);
        last_input.value = input;

        player.style.transform = `rotateZ(${turn}deg)`;
    } else if (input == "right") {
        const turn = degrees(input, last_input.value);
        last_input.value = input;

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