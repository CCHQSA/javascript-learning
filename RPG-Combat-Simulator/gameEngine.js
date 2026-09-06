export function calculateDamage(baseAttack){
    let randomFactor = Math.random() * 3;
    let sign = Math.random() < 0.5 ? -1 : 1;
    let damage = baseAttack + (randomFactor * sign);
    return Math.max(1, Math.round(damage));
}

export function cloneMonster(monsterTemplate) {
    return { ...monsterTemplate };
}

export function displayStatus(character) {
    const { name, hp, maxHp, attack } = character;
    console.log(`Name: ${name}, HP: ${hp}/${maxHp}, Attack: ${attack}`);
}

export function heal(character, amount) {
    character.hp = Math.min(character.maxHp, character.hp + amount);
    console.log(`${character.name} healed for ${amount} HP. Current HP: ${character.hp}/${character.maxHp}`);
}