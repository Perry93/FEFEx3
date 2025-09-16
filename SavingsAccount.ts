import { IBankAccount } from "./IBankAccount";
import { BankAccount } from "./BankAccount";

export class SavingsAccount extends BankAccount implements IBankAccount {
    private numberOfDeposits: number = 0;
    private readonly INTEREST: number = 0.05;

    /**
     * Construct a Savings Account providing the initial balance.
     * @param initialBalance The initial balance amount.
     */
    constructor(initialBalance: number) {
        super(initialBalance);
    }

    /**
     * Withdraw funds from savings. Cannot overdraw the account.
     * @param amount The amount to withdrawal.
     */
    withdrawlAmount(amount: number): void {
        if(amount > this.accountBalance) {
            throw new Error('Insufficient funds');
        } else {
            this.accountBalance -= amount;
        }
    }

    /**
     * Every 5 deposits we incur interest at the defined rate.
     * @param amount The amount to deposit.
     */
    depositAmount(amount: number): void {
        this.numberOfDeposits++;
        if(this.numberOfDeposits % 5 == 0) {
            let tempNewBalance: number = this.accountBalance + amount;
            this.accountBalance += tempNewBalance + tempNewBalance * this.INTEREST;
        } else {
            this.accountBalance += amount;
        }
    }

    /**
     * Reads the current account balance.
     * @returns The balance of the account.
     */
    getBalance(): number {
        return this.accountBalance;
    }

    /**
     * Prints the account balance for savings.
     * @returns The printed balance formatted for currency.
     */
    printBalance(): string {
        let formattedValue: string = new Intl.NumberFormat('en-CA', {
            style: 'currency',
            currency: 'EUR'
        }).format(this.accountBalance);
        return `Your savings account balance is: ${formattedValue}.`;
    }

}