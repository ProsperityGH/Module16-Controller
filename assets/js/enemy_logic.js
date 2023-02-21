// GLOBALS
const enemyContainer = document.getElementById('enemies-container');
const enemy = document.createElement('div');

let enemiesSpawned = 0;

// Enemy styling
enemy.style.width = '100px';
enemy.style.height = '100px';
enemy.style.position = 'absolute';
enemy.style.backgroundImage = 'url("../assets/img/Target_Enemy.svg")';
enemy.style.backgroundSize = 'cover';

// Enemy spawning logic
function spawn_enemy() {
    const spawnPos = Math.floor(Math.random() * 21);

    if (spawnPos < 11) {
        console.log(`${spawnPos}: No enemy spawned!`);
    } else if (spawnPos > 10 && spawnPos <= 12) {
        enemiesSpawned++;

        enemy.setAttribute('class', `top${enemiesSpawned}`);

        enemy.style.top = '0';
        enemy.style.left = '50%';
        enemy.style.transform = 'translate(-50%, 0%) rotateZ(180deg)';

        enemyContainer.appendChild(enemy.cloneNode(true));
    } else if (spawnPos > 12 && spawnPos <= 14) {
        enemiesSpawned++;

        enemy.setAttribute('class', `right${enemiesSpawned}`);

        enemy.style.top = '50%';
        enemy.style.right = '0';
        enemy.style.transform = 'translate(100%, -50%) rotateZ(270deg)';

        enemyContainer.appendChild(enemy.cloneNode(true));
    } else if (spawnPos > 14 && spawnPos <= 16) {
        enemiesSpawned++;

        enemy.setAttribute('class', `bottom${enemiesSpawned}`);

        enemy.style.bottom = '0';
        enemy.style.left = '50%';
        enemy.style.transform = 'translate(-50%, 100%)';

        enemyContainer.appendChild(enemy.cloneNode(true));
    } else {
        enemiesSpawned++;

        enemy.setAttribute('class', `left${enemiesSpawned}`);

        enemy.style.top = '50%';
        enemy.style.left = '0';
        enemy.style.transform = 'translate(0%, -50%) rotateZ(90deg)';

        enemyContainer.appendChild(enemy.cloneNode(true));
    }
}

function move_enemy() {

}

setInterval(spawn_enemy, 1000);