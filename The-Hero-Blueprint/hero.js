import { Item } from './item.js';
import { Potion } from './potion.js';


export class Hero {

    #health;
    #damage;

    constructor(name, health, damage) {
        this.name = name;
        this.#health = health;
        this.maxHealth = 100;
        this.#damage = damage;
    }

    get health() {
        return this.#health;
    }

    get damage() {
        return this.#damage;
    }

    set health(value) {
        if (value < 0) {
            this.#health = 0;
        } else if (value > this.maxHealth) {
            this.#health = this.maxHealth;
        } else {
            this.#health = value;
        }
    }

    set damage(value) {
        if (value < 0) {
            this.#damage = 1;
        } else {
            this.#damage = value;
        }
    }

    status() {
        console.log(`${this.name} - Health: ${this.#health}, Damage: ${this.#damage}`);
    }

}