let prompt = require("prompt-sync")();


let shoppingList = [];
function addItem(){
    for(let i = 0; i < 10; i ++){
        item = prompt("Please add an item: ");
        if (!shoppingList.includes(item)) {
            shoppingList.push(item);
        }
        console.log("Shopping List Items: ", shoppingList);
    }
}


//unsure of how to do part 2 


