async function runGate(age) {
    console.log("DB lookUp");
    try {
        const result = await verifyAge(age); 
        console.log(result); 
    } catch (error) {
        console.error(error);
    }
}

function verifyAge(age) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age >= 18){
                return resolve("Access granted");
            }
            return reject("Access denied");
        }, 2000); 
    });
}


runGate(10);