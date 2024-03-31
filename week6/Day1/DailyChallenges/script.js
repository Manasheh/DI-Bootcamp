let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
};

const displayGroceries = () => {
    groceries.fruits.forEach(fruit => {
        console.log(fruit);
    });
};

displayGroceries();

const cloneGroceries = () => {
    const user = client;
    client = 'Betty';
    console.log(client);
    console.log(user);
    let shopping = groceries;
    groceries.totalPrice = "35$";
    groceries.other.paid = false;
};

cloneGroceries(); 
