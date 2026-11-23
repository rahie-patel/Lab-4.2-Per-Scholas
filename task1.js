let prompt = require("prompt-sync")();


let shoppingList = [];
function addItem(item){
    for(i = 0; i < 10; i ++){
        item = prompt("Please add an item: ");
        shoppingList.push(item);
        console.log("Shopping List Items: ", shoppingList);
    }
}
addItem(item);


function removeLastItem(){
    shoppingList.pop();
    console.log("Shopping List Items: ", shoppingList);
}
removeLastItem();


function displayList(){
    for (i = 0; i < shoppingList.length; i++){
        console.log(shoppingList[i]);
    }
}
