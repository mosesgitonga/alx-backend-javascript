/**
 * This file defines a Pricing class.
 */

import Currency from "./3-currency";

export default class Pricing {
    /**
     * Constructor for Pricing class.
     * @param {number} amount - The amount value.
     * @param {Currency} currency - The currency object.
     */
    constructor(amount, currency) {
        this.amount = amount;
        this.currency = currency;
    }

    /**
     * Getter method for amount.
     * @returns {number} - The amount value.
     */
    get amount() {
        return this._amount
    }

    /**
     * Setter method for amount.
     * @param {number} amt - The amount value to be set.
     */
    set amount(amt) {
        if (typeof amt !== 'number') {
            throw new TypeError('amount should be a number')
        }
        this._amount = amt
    }

    /**
     * Getter method for currency.
     * @returns {Currency} - The currency object.
     */
    get currency() {
        return this._currency;
    }

    /**
     * Setter method for currency.
     * @param {Currency} curr - The currency object to be set.
     */
    set currency(curr) {
        this._currency = curr
    }

    /**
     * Method to display the full price including amount and currency details.
     * @returns {string} - The formatted full price.
     */
    displayFullPrice() {
        // Create a new Currency instance using the code and name properties of the currency object
        const currencyInstance = new Currency(this.currency.code, this.currency.name);
        return `${this._amount} ${currencyInstance.name} (${currencyInstance.code})`;
    }

    /**
     * Static method to convert the price based on the conversion rate.
     * @param {number} amount - The amount value to be converted.
     * @param {number} conversionRate - The conversion rate.
     * @returns {number} - The converted amount.
     */
    static convertPrice(amount, conversionRate) {
        if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
            throw new TypeError('Amount and conversion rate should be numbers');
        }
        return amount * conversionRate;
    }
}
