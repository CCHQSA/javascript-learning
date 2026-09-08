import { MenuItem } from './MenuItem.js';
import { OrderTracker } from './OrderTracker.js';
import { createDiscountCalc } from './discountCalculator.js';

const restaurant = new OrderTracker();

//Item I generated with ai
const burger = new MenuItem(1, 'Classic Burger', 160, 'burgers', true);
const fries = new MenuItem(2, 'French Fries', 60, 'snacks', true);
const cola = new MenuItem(3, 'Coca-Cola', 40, 'drinks', true);
const cheesecake = new MenuItem(4, 'Cheesecake', 95, 'desserts', false);

restaurant.add(burger);
restaurant.add(fries);
restaurant.add(cola);
restaurant.add(cheesecake);

restaurant.showAvailable(); 

const receipt = restaurant.getCheck(1, 3);
console.log(receipt); 

const applyTenPercent = createDiscountCalc(10);

const basePrice = restaurant.checkOrder(1, 3);
const finalPrice = applyTenPercent(basePrice);

console.log(`Base Price: $${basePrice}`);
console.log(`Price after 10% discount: $${finalPrice}`); 

try {
    restaurant.getCheck(2, 4);
} catch (error) {
    console.log(`Expected error: "${error.message}"`);
}
