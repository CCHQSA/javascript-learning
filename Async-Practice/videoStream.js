function checkNetworkSpeed(mbps){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(mbps > 15){
                return resolve("HD 1080");
            }else {
                return reject("Connection too slow for hd");
            }
        }, 5000)   
    });
}

async function startStream(userSpeed){
    console.log("Checking connection")
    try{
        const res = await checkNetworkSpeed(userSpeed);
        console.log(res);
    }catch(error){
        console.error(error);
    }
}

startStream(30);