function deliverPizza(light){
    return new Promise((resolve, reject) => {
        if(isTrafficLightGreen(light)){
            resolve("Pizza has arrived hot");
        }else{
            reject("Pizza has arrived cold");
        }
    });
}

function isTrafficLightGreen(light){
    if(light.toLowerCase() === "green"){
        return true;
    }

    return false;
}

deliverPizza("adsd").then((msg) => console.log(msg))
.catch((msg) => console.log(msg));