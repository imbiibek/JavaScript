const inventory = []

function createProduct(name, price, quantity) {
    return { name, price, quantity };
}

const item1 = createProduct("Laptop", 1200, 10);
console.log(item1);

const item2 = createProduct("Mouse", 25, 50);
console.log(item2);

const item3 = createProduct("Keyboard", 100, 20);
console.log(item3);

inventory.push(item1, item2, item3);

inventory[1].price = 30;

console.log(inventory);

inventory[0].category = "Electronics";
console.log(inventory);

const extraDetails = {
    warranty: "2 years",
    color: "Silver"
}

const updatedLaptop = { ...inventory[0], ...extraDetails };
console.log(updatedLaptop);

const calculateTotalValue = (price, quantity) => {
    return price * quantity;
}

const keyboard = inventory[2];
const keyboardTotal = calculateTotalValue(keyboard.price, keyboard.quantity);


console.log(`Keyboard Value:- ${keyboardTotal}`);

const adminUser = {
    name: "Manager",
    permissions: {
        canEdit: true,
        canDelete: false
    }
}

if (adminUser.permissions.canEdit) {
    console.log("Access Granted: Inventory updated.");
}








