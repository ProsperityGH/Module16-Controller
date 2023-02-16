// Global variables
let deg = 0;
const kaboom = new Audio('../assets/sounds/kaboem.mp3')

// Refresh the game 60 frames per second
setInterval(() => {
    const direction = document.getElementById('direction-input-register');
    const last_direction = document.getElementById('last-direction-input-register');

    const AB = document.getElementById('button-input-register');

    const player = document.getElementById('player');

    const controller_active = document.getElementById('controller-active').value;


    if (controller_active == 'true')  { // Changes playermodel into explosion when activated
        if (AB.value == "A") {
            AB.value = "";
            console.log('shoot')
        } else if (AB.value == "B") {
          kaboom.play();
          AB.value = "";
        
          player.style.backgroundImage = "url('../assets/img/kaboem.gif')";
          setTimeout(() => {
            player.style.animation = '1.5s ease-in-out 0s 1 normal forwards';
            setTimeout(() => {
              player.style.backgroundImage = "url('../assets/img/sanicTAK.png')";
            }, 600);
          }, 100);
        
          console.log('suicide bomb');
        }

        if (direction.value == "up") {
            const turn = degrees(direction.value, last_direction.value);
            last_direction.value = direction.value;

            player.style.transform = `rotateZ(${turn}deg)`;
        } else if (direction.value == "down") {
            const turn = degrees(direction.value, last_direction.value);
            last_direction.value = direction.value;

            player.style.transform = `rotateZ(${turn}deg)`;
        } else if (direction.value == "left") {
            const turn = degrees(direction.value, last_direction.value);
            last_direction.value = direction.value;

            player.style.transform = `rotateZ(${turn}deg)`;
        } else if (direction.value == "right") {
            const turn = degrees(direction.value, last_direction.value);
            last_direction.value = direction.value;

            player.style.transform = `rotateZ(${turn}deg)`;
        }
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

