// Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax.
// 3. Buy Item : cart -> purchases.
// 4. Empty cart

const user = {
  name: "Tudor",
  active: true,
  cart: [],
  purchases: [],
  balance: 815,
};

const item = {
  name: "Coco Phone",
  stock: 5,
  amount: 0,
  price: 100,
  totalprice: 0,
};

function addItem(user, item) {
  if (user.active) {
    if (item.stock >= 1) {
      user.cart.push(item);
      item.stock--;
      item.amount++;
      console.log(
        `We have added ${item.name} to your cart, there are now ${item.amount} items`
      );
    } else console.log("The item is not in stock at the moment");
    addTax(item);
  } else console.log(`User doesn't have an active account`);
}

function addTax(item) {
  item.totalprice = item.totalprice + item.price + (3 * item.price) / 100;
}

function buyItem(user, item) {
  if (!checkforbal(user, item)) {
    console.log("Insufficient balance");
    return;
  } else user.balance -= item.totalprice;
  if (user.cart.includes(item)) {
    user.purchases.push(user.cart);
    console.log(
      `You have succesfully bought ${item.amount} ${item.name} for ${item.totalprice} $`
    );
    emptycart(user);
  } else console.log("Your cart is empty, add something to it");
}

function emptycart(user) {
  user.cart = [];
  item.amount = 0;
}

function checkforbal(user, item) {
  if (user.balance < item.totalprice) return false;
  else return true;
}

function history(user) {
  console.log(user.purchases);
}

// addItem(user, item);
// addItem(user, item);
// addItem(user, item);
// buyItem(user, item);
// addItem(user, item);
// addItem(user, item);
// addItem(user, item);
// buyItem(user, item);
// console.log(user.balance)
