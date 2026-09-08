import { items } from './inventory.js';


const notWeapon = items.filter(item => item.type !== 'weapon');
const names = items.map(item => item.name);


console.log('Items that are not weapons:', notWeapon);
console.log('Names of all items:', names);