import { BankAccount } from "./BankAccount";
import { IBankAccount } from "./IBankAccount";

export class ChequingAccount extends BankAccount implements IBankAccount {
private numberOfWithdrawls: number = 0;
private readonly TRANSFEE: number = 10;

    withdrawlAmount(amount: number): void {
        this.numberOfWithdrawls++;
        let amountToWithdrawal: number = amount;

        //We owe a transaction fee every 5th withdrawal.
        if(this.numberOfWithdrawls % 5 == 0) {
            amountToWithdrawal += this.TRANSFEE;
        }

        if(this.accountBalance < amountToWithdrawal) {
            this.numberOfWithdrawls--;
            throw new Error('Insufficient funds');
        }

        this.accountBalance -= amountToWithdrawal;
    }

    depositAmount(amount: number): void {
        this.accountBalance += amount;
    }

    getBalance(): number {
        return this.accountBalance;
    }
    
    printBalance(): string {
        let formattedValue: string = new Intl.NumberFormat('en-CA', {
            style: 'currency',
            currency: 'EUR'
        }).format(this.accountBalance);

        return `The chequing account balance is ${formattedValue}`;
    }

}