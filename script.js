/*let items=[];


const itemName= document.querySelector("#itemName");
const itemPrice= document.querySelector("#itemPrice");
const addItem= document.querySelector("#addItem");
const clearItem= document.querySelector("#clearItem");

console.log(itemPrice);

addItem.addEventListener("click",function(event){
    event.preventDefault();

    let name = itemName.value;
    let price = itemPrice.value;

    if (name === "" || price === "") {
        alert("Please enter the item name and price");
        return;
    }

    let item = document.createElement("div");

    let heading = document.createElement("h3");
    heading.textContent = name;

    let priceText = document.createElement("p");
    priceText.textContent = "Price: KSh " + price;

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let label = document.createElement("label");
    label.appendChild(checkbox);
    label.append(" Purchased");

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.type = "button";

    deleteButton.addEventListener("click", function() {
        item.remove();
    });

    item.appendChild(heading);
    item.appendChild(priceText);
    item.appendChild(label);
    item.appendChild(deleteButton);

    itemDisplay.appendChild(item);

    itemName.value = "";
    itemPrice.value = "";
});

clearItem.addEventListener("click", function(event) {
    event.preventDefault();
    itemDisplay.innerHTML = "";
});
*/
/*let items = [];

const itemName = document.querySelector("#itemName");
const itemPrice = document.querySelector("#itemPrice");
const addItem = document.querySelector("#addItem");
const clearItem = document.querySelector("#clearItem");
const itemDisplay = document.querySelector("#itemDisplay");




addItem.addEventListener("click", function(event) {
    event.preventDefault();

    let name = itemName.value;
    let price = itemPrice.value;

    if (name === "" || price === "") {
        alert("Please enter the item name and price");
        return;
    }

    // Add the item to the array
    items.push({
        name: name,
        price: price
    });

    // Clear the display
    itemDisplay.innerHTML = "";

    // Iterate through the array
    items.forEach(function(item, index) {
        let card = document.createElement("div");

        let heading = document.createElement("h3");
        heading.textContent = item.name;

        let priceText = document.createElement("p");
        priceText.textContent = "Price: KSh " + item.price;
let purchasedText = document.createElement("span");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
        heading.style.textDecoration = "line-through";
        priceText.style.textDecoration="line-through";
        purchasedText.textContent = " Purchased";
    } else {
        heading.style.textDecoration = "none";
    }
});

        let label = document.createElement("label");
        label.appendChild(checkbox);
        //label.append(" Purchased");

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.type = "button";

        deleteButton.addEventListener("click", function() {
            items.splice(index, 1);

            // Display the remaining items
            showItems();
        });

        card.appendChild(heading);
        card.appendChild(priceText);
        card.appendChild(label);
        card.appendChild(deleteButton);

        itemDisplay.appendChild(card);
    });

    itemName.value = "";
    itemPrice.value = "";
});

// Function to display items
function showItems() {
    itemDisplay.innerHTML = "";

    items.forEach(function(item, index) {
        let card = document.createElement("div");

        let heading = document.createElement("h3");
        heading.textContent = item.name;

        let priceText = document.createElement("p");
        priceText.textContent = "Price: KSh " + item.price;

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        let label = document.createElement("label");
        label.appendChild(checkbox);
        label.append(" Purchased");
        label.appendChild(purchasedText);

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.type = "button";

        deleteButton.addEventListener("click", function() {
            items.splice(index, 1);
            showItems();
        });

        card.appendChild(heading);
        card.appendChild(priceText);
        card.appendChild(label);
        card.appendChild(deleteButton);

        itemDisplay.appendChild(card);
    });
}

// Clear all items
clearItem.addEventListener("click", function(event) {
    event.preventDefault();

    items = [];
    itemDisplay.innerHTML = "";
});


*/

let items = [];

const itemName = document.querySelector("#itemName");
const itemPrice = document.querySelector("#itemPrice");
const addItem = document.querySelector("#addItem");
const clearItem = document.querySelector("#clearItem");
const itemDisplay = document.querySelector("#itemDisplay");

// Add an item
addItem.addEventListener("click", function(event) {
    event.preventDefault();

    let name = itemName.value;
    let price = itemPrice.value;

    if (name === "" || price === "") {
        alert("Please enter the item name and price");
        return;
    }

    // Store the item in the array
    items.push({
        name: name,
        price: price
    });

    // Display all items
    showItems();

    // Clear the input fields
    itemName.value = "";
    itemPrice.value = "";
});

// Display items using array iteration
function showItems() {
    itemDisplay.innerHTML = "";

    items.forEach(function(item, index) {
        let card = document.createElement("div");

        let heading = document.createElement("h3");
        heading.textContent = item.name;

        let priceText = document.createElement("p");
        priceText.textContent = "Price: KSh " + item.price;

        // Create the checkbox
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        // Create the Purchased message
        let purchasedText = document.createElement("span");

        let label = document.createElement("label");
        label.appendChild(checkbox);
        label.appendChild(purchasedText);

        // Cross out the item when checked
        checkbox.addEventListener("change", function() {
            if (checkbox.checked) {
                heading.style.textDecoration = "line-through";
                priceText.style.textDecoration = "line-through";
                purchasedText.textContent = " Purchased";
            } else {
                heading.style.textDecoration = "none";
                priceText.style.textDecoration = "none";
                purchasedText.textContent = "";
            }
        });

        // Create the Delete button
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.type = "button";

        deleteButton.addEventListener("click", function() {
            items.splice(index, 1);
            showItems();
        });

        // Add everything to the card
        card.appendChild(heading);
        card.appendChild(priceText);
        card.appendChild(label);
        card.appendChild(deleteButton);

        // Display the card
        itemDisplay.appendChild(card);
    });
}

// Clear all items
clearItem.addEventListener("click", function(event) {
    event.preventDefault();

    items = [];
    itemDisplay.innerHTML = "";
});



