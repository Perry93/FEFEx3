"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavingsAccount = void 0;
var BankAccount_1 = require("./BankAccount");
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    /**
     * Construct a Savings Account providing the initial balance.
     * @param initialBalance The initial balance amount.
     */
    function SavingsAccount(initialBalance) {
        var _this = _super.call(this, initialBalance) || this;
        _this.numberOfDeposits = 0;
        _this.INTEREST = 0.05;
        return _this;
    }
    /**
     * Withdraw funds from savings. Cannot overdraw the account.
     * @param amount The amount to withdrawal.
     */
    SavingsAccount.prototype.withdrawlAmount = function (amount) {
        if (amount > this.accountBalance) {
            throw new Error('Insufficient funds');
        }
        else {
            this.accountBalance -= amount;
        }
    };
    /**
     * Every 5 deposits we incur interest at the defined rate.
     * @param amount The amount to deposit.
     */
    SavingsAccount.prototype.depositAmount = function (amount) {
        this.numberOfDeposits++;
        if (this.numberOfDeposits % 5 == 0) {
            var tempNewBalance = this.accountBalance + amount;
            this.accountBalance += tempNewBalance + tempNewBalance * this.INTEREST;
        }
        else {
            this.accountBalance += amount;
        }
    };
    /**
     * Reads the current account balance.
     * @returns The balance of the account.
     */
    SavingsAccount.prototype.getBalance = function () {
        return this.accountBalance;
    };
    /**
     * Prints the account balance for savings.
     * @returns The printed balance formatted for currency.
     */
    SavingsAccount.prototype.printBalance = function () {
        var formattedValue = new Intl.NumberFormat('en-CA', {
            style: 'currency',
            currency: 'EUR'
        }).format(this.accountBalance);
        return "Your savings account balance is: ".concat(formattedValue, ".");
    };
    return SavingsAccount;
}(BankAccount_1.BankAccount));
exports.SavingsAccount = SavingsAccount;
