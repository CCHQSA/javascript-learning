import { monsters } from './monsters.js';
import { calculateDamage, displayStatus, cloneMonster, heal } from './gameEngine.js';

let monster = cloneMonster(monsters[Math.floor(Math.random() * monsters.length)]);

let player = {
    name: "Hero",
    hp: 100,
    maxHp: 100,
    attack: 15,
    xp: 0
};

let round = 1;

do{
    displayStatus(player);
    displayStatus(monster);
    
    let playerDamage = calculateDamage(player.attack);
    monster.hp -= playerDamage;
    console.log(`${player.name} attacks ${monster.name} for ${playerDamage} damage!`);
    
    if(monster.hp <= 0){
        console.log(`${monster.name} has been defeated!`);
        player.xp += monster.xpReward;
        console.log(`${player.name} gains ${monster.xpReward} XP! Total XP: ${player.xp}`);
        break;
    }
    
    let monsterDamage = calculateDamage(monster.attack);
    player.hp -= monsterDamage;
    console.log(`${monster.name} attacks ${player.name} for ${monsterDamage} damage!`);
    
    if(player.hp <= 0){
        console.log(`${player.name} has been defeated! Game Over.`);
        break;
    }

    round++;

    if(round % 3 === 0){
        heal(player, 10);
    }
    

}while(player.hp > 0 && monster.hp > 0);
