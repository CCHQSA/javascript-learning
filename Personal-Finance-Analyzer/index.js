import { financialTransactions } from './transactions.js';
import { calculateBalance, calculateTotalIncome, calculateTotalExpenses, filterTransactions, addTransaction } from './financeEngine.js';

const balance = calculateBalance(financialTransactions);
const totalIncome = calculateTotalIncome(financialTransactions);
const totalExpenses = calculateTotalExpenses(financialTransactions);
const incomeTransactions = filterTransactions(financialTransactions, "income");
const expenseTransactions = filterTransactions(financialTransactions, "expense");

console.log("Balance:", balance);
console.log("Total Income:", totalIncome);
console.log("Total Expenses:", totalExpenses);
console.log("Income Transactions:", incomeTransactions);
console.log("Expense Transactions:", expenseTransactions);

const newTransaction = {
    amount: 100,
    type: "expense",
    category: "entertainment",
    date: "2026-09-07"
};

const updatedTransactions = addTransaction(financialTransactions, newTransaction);
console.log("Updated Transactions:", updatedTransactions);
