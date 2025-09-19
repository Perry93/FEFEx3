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
exports.ChequingAccount = void 0;
var BankAccount_1 = require("./BankAccount");
var ChequingAccount = /** @class */ (function (_super) {
    __extends(ChequingAccount, _super);
    function ChequingAccount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.numberOfWithdrawls = 0;
        _this.TRANSFEE = 10;
        return _this;
    }
    ChequingAccount.prototype.withdrawlAmount = function (amount) {
        this.numberOfWithdrawls++;
        var amountToWithdrawal = amount;
        //We owe a transaction fee every 5th withdrawal.
        if (this.numberOfWithdrawls % 5 == 0) {
            amountToWithdrawal += this.TRANSFEE;
        }
        if (this.accountBalance < amountToWithdrawal) {
            this.numberOfWithdrawls--;
            throw new Error('Insufficient funds');
        }
        this.accountBalance -= amountToWithdrawal;
    };
    /**
     * Deposit to chequing account.
     * @param amount The amount to deposit
     */
    ChequingAccount.prototype.depositAmount = function (amount) {
        this.accountBalance += amount;
    };
    /**
     * Get the current balance of the chequing account.
     * @returns The account balance.
     */
    ChequingAccount.prototype.getBalance = function () {
        return this.accountBalance;
    };
    /**
     * Print chequing account balance.
     * @returns Prints the account balance with currency formatting.
     */
    ChequingAccount.prototype.printBalance = function () {
        var formattedValue = new Intl.NumberFormat('en-CA', {
            style: 'currency',
            currency: 'EUR'
        }).format(this.accountBalance);
        return "The chequing account balance is ".concat(formattedValue);
    };
    return ChequingAccount;
}(BankAccount_1.BankAccount));
exports.ChequingAccount = ChequingAccount;
