// Window the game takes place in
const target = window.open('./game/index.html');

// Sounds
const sanic = new Audio('../assets/sounds/sanic.mp3');
const mrbeast = new Audio('../assets/sounds/mrbeast.mp3');
const gunshot = new Audio('../assets/sounds/pew.mp3');

// Get the input registery from the game page
let direction_input;
let last_direction_input;

let button_input;

let controller_active;

target.window.addEventListener('load', () => {
    direction_input = target.document.getElementById('direction-input-register');
    last_direction_input = target.document.getElementById('last-direction-input-register');

    button_input = target.document.getElementById('button-input-register');

    player = target.document.getElementById('player');

    controller_active = target.document.getElementById('controller-active');
});

// Get all the buttons from the controller
const dpad_up = document.getElementById("up");
const dpad_down = document.getElementById("down");
const dpad_left = document.getElementById("left");
const dpad_right = document.getElementById("right");

const select_button = document.getElementById('select');
const start_button = document.getElementById('start');

const a_button = document.getElementById('A');
const b_button = document.getElementById('B');

const popup = document.getElementById('popup');

const buttons = [dpad_up, dpad_down, dpad_left, dpad_right, select_button, start_button, a_button, b_button];


var playermodel = 0;

// Status variable to determine if the controller is active or inactive
let controller_status = false;
const status_light = document.getElementById('light');

// Add event listeners to the buttons
for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];

    button.addEventListener('mousedown', handleButtonDown);
    button.addEventListener('mouseup', handleButtonUp);
    button.addEventListener('mouseleave', handleButtonUp);

    if (button === dpad_up || button === dpad_down || button === dpad_left || button === dpad_right) {
        button.addEventListener('mousedown', handleDpadButtons);
    }

    if (button === a_button || button === b_button) {
        button.addEventListener('mousedown', handleABButtons);
    }

    if (button === a_button) {
        button.addEventListener('mousedown', handleAButtonDown);
    }

    if (button === select_button) {
        button.addEventListener('mousedown', handleSelectButtonDown);
    }

    if (button === start_button) {
        button.addEventListener('mousedown', handleStartButtonDown);
    }
}

function handleButtonDown() {
    this.style.filter = "brightness(300%)";
}

function handleABButtons() {
    if (controller_status) {
        button_input.value = this.id;
    }
}

function handleDpadButtons() {
    if (controller_status) {
        last_direction_input.value = direction_input.value;
        direction_input.value = this.id;
    }
}

function handleButtonUp() {
    this.removeAttribute('style');
}

// Gunshot sound effect plays when controller is active and the A button is pressed (thanks petergriffin.nl <3)
function handleAButtonDown() {
    if (controller_status) {
        if (gunshot.currentTime == 0 || gunshot.ended) {
          gunshot.play();
        } else {
          let newGunshot = gunshot.cloneNode();
          newGunshot.play();
        }
    }
}

// Changes the players playermodel
function handleSelectButtonDown() {
    if (!controller_status) {
      return;
    } else {
      if (playermodel === 1) {
        popup.classList.add("mrbeast");
        popup.innerText = "You're now MrBeast";

        mrbeast.play();

        player.style.backgroundImage = "url('../assets/img/mrbeastCTM4.png')";
        playermodel = 0;

        setTimeout(() => {
            popup.classList.remove("mrbeast");
        }, 700);

      } else {
        popup.classList.add("sanic");
        popup.innerText = "You're now Sanic";

        sanic.play();

        player.style.backgroundImage = "url('../assets/img/sanicTAK.png')";
        playermodel = 1;

        setTimeout(() => {
            popup.classList.remove("sanic");
        }, 700);
      }
    }
}


// Sees when the controller is active, when not active all input is disabled
function handleStartButtonDown() {
    if (controller_status) {
        popup.classList.add("controller_inactive");
        popup.innerText = "Controller inactive";

        controller_status = false;
        controller_active.value = controller_status;

        status_light.style.backgroundColor = "red";

        setTimeout(() => {
            popup.classList.remove("controller_inactive");
        }, 700);
    } else {
        popup.classList.add("controller_active");
        popup.innerText = "Controller active";

        controller_status = true;
        controller_active.value = controller_status;

        status_light.style.backgroundColor = "green";

        setTimeout(() => {
            popup.classList.remove("controller_active");
        }, 700);

        playermodel = 1;

        document.controller_active = true;
    }
}