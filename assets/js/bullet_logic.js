// GLOBALS
const container = document.getElementById('player-container');
const shotBullet = document.createElement('div');
let bulletCount = 1;

// Set styling for bullet
shotBullet.style.backgroundImage = 'url("../assets/img/Bullet.svg")';
shotBullet.style.backgroundSize = 'cover';
shotBullet.style.width = '25px';
shotBullet.style.height = '25px';
shotBullet.style.position = 'absolute';
shotBullet.style.left = '50%';
shotBullet.style.top = '50%';
shotBullet.style.transform = 'translate(-50%, -50%)';

// When the bullet is fired
function fired(dir) {
    if (bulletCount == 10) {
        bulletCount = 0;
    }

    shotBullet.id = bulletCount;
    bulletCount++;

    let newBullet = container.appendChild(shotBullet.cloneNode(true));

    if (dir.value == "up") {
        let pos = -50;

        let bulletPhys = setInterval(() => {
            if (window.innerHeight - newBullet.getBoundingClientRect().top >= window.innerHeight) {
                container.removeChild(newBullet);
                clearInterval(bulletPhys);
            }

            newBullet.style.transform = `translate(-50%, ${pos}%) rotateZ(0deg)`;
            pos = pos - 40;
        }, 16.7);
    } else if (dir.value == "down") {
        let pos = -50;

        let bulletPhys = setInterval(() => {
            if (window.innerHeight - newBullet.getBoundingClientRect().top <=  0) {
                container.removeChild(newBullet);
                clearInterval(bulletPhys);
            }

            newBullet.style.transform = `translate(-50%, ${pos}%) rotateZ(0deg)`;
            pos = pos + 40;
        }, 16.7);
    } else if (dir.value == "left") {
        let pos = -50;

        let bulletPhys = setInterval(() => {
            if (window.innerWidth - newBullet.getBoundingClientRect().left >=  window.innerWidth) {
                container.removeChild(newBullet);
                clearInterval(bulletPhys);
            }

            newBullet.style.transform = `translate(${pos}%, -50%) rotateZ(270deg)`;
            pos = pos - 40;
        }, 16.7);
    } else if (dir.value == "right") {
        let pos = -50;

        let bulletPhys = setInterval(() => {
            if (window.innerWidth - newBullet.getBoundingClientRect().left <=  0) {
                container.removeChild(newBullet);
                clearInterval(bulletPhys);
            }

            newBullet.style.transform = `translate(${pos}%, -50%) rotateZ(270deg)`;
            pos = pos + 40;
        }, 16.7);
    }

    console.log(`Bullet generated. Should shoot to: ${dir.value}`);
}