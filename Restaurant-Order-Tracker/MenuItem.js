export class MenuItem {
    #id;
    #name;
    #price;
    #category;
    #isAvailable;

    constructor(id, name, price, category, isAvailable) {
        this.#id = id;
        this.#name = name;
        this.#price = price;
        this.#category = category;
        this.#isAvailable = isAvailable;
    }

    get id(){
        return this.#id;
    }

    get name(){
        return this.#name;
    }

    get price(){
        return this.#price;
    }

    get category(){
        return this.#category;
    }

    get isAvailable(){
        return this.#isAvailable;
    }

    set name(name){
        this.#name = name;
    }

    set price(price){
        this.#price = price;
    }

    makeAvailable(bool) {
        this.#isAvailable = bool;
    }
}