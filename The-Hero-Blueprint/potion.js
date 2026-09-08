import { Item } from './item.js';

export class Potion extends Item {
    constructor(name, effectType, effectValue) {
        super(name, 'potion', effectValue);
        this.effectType = effectType;
    }

    use(target) {
        if (this.effectType === 'heal') {
            target.health += this.effectValue;
        }

        if (this.effectType === 'damage') {
            target.damage += this.effectValue;
        }
    }


}