
export function calculateBalance(transactions) {
    let balance = 0;
    let totalIncome = calculateTotalIncome(transactions);
    let totalExpenses = calculateTotalExpenses(transactions);
    balance = totalIncome - totalExpenses;
    return balance;
}

export function calculateTotalIncome(transactions) {
    let total = 0;
    
    for (const transaction of transactions) {
        const { type, amount } = transaction;
        if (type === "income") {
            total += amount;
        }
    }
    return total; 
}

export function calculateTotalExpenses(transactions) {
    let total = 0;
    for (const transaction of transactions) {
        const { type, amount } = transaction;
        if (type === "expense") {
            total += amount;
        }
    }
    return total; 
}

 export function filterTransactions(transactions, type) {
    let filteredTransactions = [];
    for(const transaction of transactions){
        const { type: transactionType } = transaction;
        if(transactionType === type){
            filteredTransactions.push(transaction);
        }
    }
    return filteredTransactions;
}

export function addTransaction(transactions, newTransaction) {
    const newId = transactions.length > 0 ? transactions[transactions.length - 1].id + 1 : 1;
    const newTransactions = [...transactions, { ...newTransaction, id: newId }];  
    return newTransactions;
}