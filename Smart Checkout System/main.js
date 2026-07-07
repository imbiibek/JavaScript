const walletBalance = 5000;

const cartItems = [500, 1200, 350]
console.log(cartItems);

// Array Operations

cartItems.push(2000);
console.log(cartItems);

cartItems.pop();
console.log(cartItems);

const recommendedItems = [100, 200]

const finalCart = [...cartItems, ...recommendedItems];
console.log(finalCart);

// Math & Operators 

let totalPrice = 0;

for (let i = 0; i < finalCart.length; i++) {
    totalPrice = totalPrice + finalCart[i];
}

console.log("Total Sum:-", totalPrice);

totalPrice = totalPrice + (totalPrice * 10 / 100);
console.log("Sum after 10% Tax:-", totalPrice);

const rounded = totalPrice.toFixed(2);
console.log("Rounded:-", rounded);

// String Manipulation 


const couponCode = "   DisCOunT10   "
console.log(couponCode.trim().toUpperCase());

totalPrice = totalPrice - 500;
console.log(`Total Price after Discount:-${totalPrice}`);

// Conditionals 

const remainingAmount = walletBalance - totalPrice;
const missingAmount = totalPrice - walletBalance;

if (totalPrice <= walletBalance) {
    console.log(`Purchase Successful! New Balance: ${remainingAmount}`);
} else {
    console.log(`Insufficient Funds! You need ${missingAmount} more.`);
}

// Randomness 

const orderId = Math.floor(Math.random() * 50);
console.log(`Order ID:- ${orderId} confirmed. Thank you for shopping!`);
