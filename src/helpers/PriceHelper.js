
/**
 * @param {*} price the default price before discount in dollars
 * @param {*} discount the percentage of discount
 * @return the price after discount in dollars
 */
export function getPriceAfterDiscount(price, discount){
    return price * (discount * 0.01)
}