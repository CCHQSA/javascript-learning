function withDraw(amount){
    const account = {
        name: "Goku",
        balance: 10000
    };
    return new Promise((resolve, reject) => {
        if(account.balance - amount >= 0){
            account.balance = account.balance - amount; 
            return resolve(account);
        }
        return reject("Not enough funds");
    });
}

withDraw(3000).then((account) => {
    console.log(`${account.name}'s balance after withdraw: ${account.balance}`)
}).catch((msg) => console.log(msg));