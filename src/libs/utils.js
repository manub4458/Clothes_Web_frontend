export const priceCalculator = (price, discount)=>{
    const updatedPrice = price*(100 - discount)/100

    return Math.floor(updatedPrice);
}