function verifyAge(age) {
    console.log("DB lookup")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age >= 18) {
                return resolve("Access granted");
            }
            return reject("Access denied");
        }, 2000); 
    });
}

verifyAge(20)
    .then((msg) => console.log("Result:", msg))
    .catch((errorMsg) => {
        console.log("Error:", errorMsg);
    });
