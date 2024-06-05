const itemsTextbox = document.getElementById("items-Tb");
const radioDiv = document.createElement("item")

const listOfItems = [];

function addItems(){
    listOfItems.push(itemsTextbox.value);
    document.getElementById("list").appendChild(radioDiv);

    for (let item in listOfItems){
        
    }

    console.log("Added " + itemsTextbox.value)
}
