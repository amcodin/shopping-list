//assigns HTML elements into variables.
var list = document.getElementsByTagName("li");
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

// Runs functions to create del button and toggle 'done' for the pre-existing items:
addToExistingList();

function addToExistingList() {
    for (eachItem of list) {
        createToggle(eachItem);
        createDelButton(eachItem);

    }
}

// creates new item, adds event-listener and delete-button for each new item created:
function createListElement() {
	if (input.value.length > 0) { //ensures that the input field is not empty.
    var newItem = document.createElement("li"); //assigns new item creation into a variable called newItem
    newItem.appendChild(document.createTextNode(input.value)); //appends value from user input newItem variable
    ul.appendChild(newItem); //appends newItem variable, li element, into the unordered list.
    input.value = ""; //resets input field removing users' input, bringing back the place holder 'enter items'
    createToggle(newItem); //runs function that toggles items done when clicked.
    createDelButton(newItem); //runs function that adds a delete-button.
}
}


function createDelButton(eachItem) {
    var btn = document.createElement("button"); //assigns the creation of button element to a variable.
    btn.appendChild(document.createTextNode("Delete")); //appends a label to the button.
    eachItem.appendChild(btn); //appends button to each list item.
    btn.addEventListener("click", removeItem); //adds event listener for when the delete-button is clicked and runs function to remove the item list.
}


// removes the parent element.
function removeItem(event)  {
        event.target.parentNode.remove()
    };


// adds event listener to each item to toggle them done when clicked.
function createToggle(eachItem) {
    eachItem.addEventListener("click", function(event) {
    event.target.classList.toggle("done"); // turns ON and OFF style 'line-through' when item is clicked.
            
        });
    }

//Adds CLICK event listener and runs function to create new list item when button is clicked.
button.addEventListener("click", createListElement);

//Adds KEYPRESS event listener and runs function that specifies the ENTER key is pressed before running the function that creates a new list item.
input.addEventListener("keypress", addListAfterKeypress);

function addListAfterKeypress(event) {
    if (event.keyCode === 13) {
        createListElement();
    }
}

