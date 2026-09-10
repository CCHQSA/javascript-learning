const button = {
    type: "submit",
    listeners: [],
    onclick() {
        for (const func of this.listeners) {
            func("Button was clicked!");
        }
    }
};


function addClickListener(button, callback) {
    button.listeners.push(callback);
}

const one = (message) => console.log("Listener one: ", message);

const two = (message) => console.log("Listener two: ", message);

addClickListener(button, one);
addClickListener(button, two);

button.onclick();
