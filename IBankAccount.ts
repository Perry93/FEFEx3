export interface IBankAccount {
 withdrawlAmount(amount: number): void;
 depositAmount(amount: number): void;
 getBalance(): number;
 printBalance(): string;
}