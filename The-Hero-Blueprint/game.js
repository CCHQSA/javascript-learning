import { Item } from './item.js';
import { Hero } from './hero.js';
import { Potion } from './potion.js';

const player = new Hero("Arthur", 90, 10);
const healPotion = new Potion("Heal potion", "heal", 20);

player.status();

healPotion.use(player); 

player.status();
