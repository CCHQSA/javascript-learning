export function createDiscountCalc(discount) {
    if (discount > 100) {
        console.log("Discount can't be greater than 100%");
    } else if (discount <= 0) {
        console.log("Discount can't be 0 or less");
    }

    function calc(totalSum) {
        return totalSum - (totalSum * discount / 100);
    }

    return calc;
}
