// Get all the buttons from the controller
const dpad_up = document.getElementById("up");
const dpad_down = document.getElementById("down");
const dpad_left = document.getElementById("left");
const dpad_right = document.getElementById("right");

const select_button = document.getElementById('select');
const start_button = document.getElementById('start');

const a_button = document.getElementById('A_inner');
const b_button = document.getElementById('B_inner');

const popup = document.getElementById('popup');

const buttons = [dpad_up, dpad_down, dpad_left, dpad_right, select_button, start_button, a_button, b_button];

// Status variable to determine if the controller is active or inactive
let controller_status = false;

// Add event listeners to the buttons
for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];

    button.addEventListener('mousedown', handleButtonDown);
    button.addEventListener('mouseup', handleButtonUp);
    button.addEventListener('mouseleave', handleButtonUp);

    if (button === start_button) {
        button.addEventListener('mousedown', handleStartButtonDown);
    }
}

function handleButtonDown() {
    this.style.filter = "brightness(300%)";
}

function handleButtonUp() {
    this.removeAttribute('style');
}

function handleStartButtonDown() {
    if (controller_status) {
        popup.classList.add("controller_inactive");
        popup.innerText = "Controller inactive";

        controller_status = false;

        setTimeout(() => {
            popup.classList.remove("controller_inactive");
        }, 700);
    } else {
        popup.classList.add("controller_active");
        popup.innerText = "Controller active";

        controller_status = true;

        setTimeout(() => {
            popup.classList.remove("controller_active");
        }, 700);
    }
}