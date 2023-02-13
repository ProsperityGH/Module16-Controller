const dpad_up = document.getElementById("up");
const dpad_down = document.getElementById("down");
const dpad_left = document.getElementById("left");
const dpad_right = document.getElementById("right");

const select_button = document.getElementById('select');
const start_button = document.getElementById('start');

const a_button = document.getElementById('A_inner');
const b_button = document.getElementById('B_inner');

const popup = document.getElementById('popup');

let controller_status = false;

console.log(b_button);

const buttons = [dpad_up, dpad_down, dpad_left, dpad_right, select_button, start_button, a_button, b_button];

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

        setTimeout(() => {
            popup.classList.remove("controller_inactive");
        }, 700);

        controller_status = false;
    } else {
        popup.classList.add("controller_active");
        popup.innerText = "Controller active";

        setTimeout(() => {
            popup.classList.remove("controller_active");
        }, 700);

        controller_status = true;
    }
}