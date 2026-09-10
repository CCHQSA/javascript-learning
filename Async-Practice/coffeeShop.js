async function orderCoffee(size){
    console.log("Brewing coffee");
    try{
        const coffee = await brewCoffee(size);
        console.log(coffee);
    }catch(error){
        console.error(error);
    }
}

function brewCoffee(size) {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ item: "Cappuccino", size: size, price: 4.5 }), 1500);
    });
}


orderCoffee("Large");