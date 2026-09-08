export class OrderTracker {
    #listOrders;

    constructor() {
        this.#listOrders = [];
    }

    add(item){
        this.#listOrders.push(item);
    }

    showAvailable(){
        var listAvailable = this.#listOrders.filter(item =>  item.isAvailable === true);

        console.log(listAvailable);
    }

checkOrder(...id) {
    const allAvailable = id.every(currId => {
        const foundItem = this.#listOrders.find(item => item.id == currId);
        return foundItem !== undefined && foundItem.isAvailable == true;
    });

    if (!allAvailable) {
        throw new Error("Item not available or null");
    }

    const totalSum = id.reduce((acc, currId) => {
        const item = this.#listOrders.find(item => item.id == currId);
        return acc + item.price;
    }, 0);

    return totalSum; // Повертаємо число для калькулятора знижок
}


getCheck(...id) {
    this.checkOrder(...id);

    const itemsNames = id.map(currId => {
        const item = this.#listOrders.find(item => item.id == currId);
        return item.name;
    });

    const checkString = itemsNames.join(", ");

    const totalSum = id.reduce((acc, currId) => {
        const item = this.#listOrders.find(item => item.id == currId);
        return acc + item.price;
    }, 0);

    return `Your order: ${checkString}. Total to pay: ${totalSum} $`;
}

}