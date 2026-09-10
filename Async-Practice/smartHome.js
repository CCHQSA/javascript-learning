const home = {
    lights: false,
    temperature: 0
};

function turnOnLights(operation){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(operation.toLowerCase() === "on"){ 
                home.lights = true;
                return resolve("Lights on");
            }
            home.lights = false;
            return resolve("Lights off");
        }, 500)
    })
}

function setTemperature(temp){
    return new Promise((resolve, reject) => {
        if(temp > 0){
            home.temperature = temp;
            return resolve(`Temperature setted to ${temp}`);
        }
        return reject("Temperature can't go below zero");
    });
}

async function wakeUpHouse(option, temp){
    try{
        const lights = await turnOnLights(option);
        console.log(lights);
        const temperature = await setTemperature(temp);
        console.log(temperature);

        console.log("Home state", home);
    } catch(error){
        console.error(error);
    }
}

wakeUpHouse("On", 30);
