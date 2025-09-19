"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SavingsAccount_1 = require("./SavingsAccount");
var ChequingAccount_1 = require("./ChequingAccount");
var sAccount = new SavingsAccount_1.SavingsAccount(1000);
var cAccount = new ChequingAccount_1.ChequingAccount(100);
console.log(sAccount.printBalance());
console.log(cAccount.printBalance());
try {
    sAccount.withdrawlAmount(1100);
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
}
try {
    sAccount.withdrawlAmount(100);
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
}
console.log(sAccount.printBalance());
try {
    cAccount.withdrawlAmount(20);
    cAccount.withdrawlAmount(20);
    cAccount.withdrawlAmount(20);
    cAccount.withdrawlAmount(20);
    cAccount.depositAmount(10); //covers trans fee
    cAccount.withdrawlAmount(20);
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
}
console.log(cAccount.printBalance());
