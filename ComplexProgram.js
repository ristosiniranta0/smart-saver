/*
Filename: ComplexProgram.js
Content: A complex program that simulates a virtual bank, allowing users to create accounts, deposit and withdraw funds, transfer money between accounts, and view their account balance.
*/

// Class for creating bank accounts
class BankAccount {
  constructor(accountNumber, accountHolder) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.transactions.push({ type: 'deposit', amount });
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Insufficient balance!');
      return;
    }
    this.balance -= amount;
    this.transactions.push({ type: 'withdraw', amount });
  }
}

// Class for managing bank operations
class BankManager {
  constructor() {
    this.accounts = [];
  }

  createAccount(accountNumber, accountHolder) {
    const newAccount = new BankAccount(accountNumber, accountHolder);
    this.accounts.push(newAccount);
    return newAccount;
  }

  transferFunds(sourceAccount, targetAccount, amount) {
    sourceAccount.withdraw(amount);
    targetAccount.deposit(amount);
  }
}

// Example usage of the bank program
const bankManager = new BankManager();

const account1 = bankManager.createAccount('123', 'John Doe');
const account2 = bankManager.createAccount('456', 'Jane Smith');

account1.deposit(1000);
account2.deposit(500);

console.log(`Account ${account1.accountNumber} balance: ${account1.balance}`);
console.log(`Account ${account2.accountNumber} balance: ${account2.balance}`);

account1.withdraw(200);

console.log(`Account ${account1.accountNumber} balance: ${account1.balance}`);

bankManager.transferFunds(account1, account2, 300);

console.log(`Account ${account1.accountNumber} balance: ${account1.balance}`);
console.log(`Account ${account2.accountNumber} balance: ${account2.balance}`);
