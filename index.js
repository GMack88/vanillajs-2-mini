// creating a new todo list item
function addToDo(event) {
    event.preventDefault();
    // first create the html "li" element that will hold our content
    let newItem = document.createElement("li");
    //    get the value of the input with the id of "item"
    let inputVal = document.getElementById("item").value;
    //   set the value of the newly created "li" to the value of the input
    newItem.innerText = inputVal;
  
    //   create a button element that will be used to remove the todo item
    const button = document.createElement("button");
    //   add an X to the button
    button.innerText = "X";
    //   attach the removeToDo function to each items remove button with an eventListener
    button.addEventListener("click", removeToDo);
    //   add event listener to the item, to run the todo function if the item is clicked, this will toggle the aria checked attribute
    newItem.addEventListener("click", completeToDo);
    //   add the remove button the the newly created list item
    newItem.appendChild(button);
    //   select the "ul" container that holds out inputs
    let list = document.querySelector("ul");
    //   add the newly created item to the "ul" list
    list.appendChild(newItem);
    document.getElementById("item").value = "";
  }
  
  function removeToDo(event) {
    // the target of the event is the button
    // the parentNode of the target is the entire list item
    // call remove() to take away the list item
    event.target.parentNode.remove();
  }
  
  // select the form and add the AddToDo function to it using an event listener
  document.querySelector("form").addEventListener("submit", addToDo);
  
  function completeToDo(event) {
    // select the value of the events target (i.e. "li") aria-checked attribute
    const value = event.target.getAttribute("aria-checked");
    //   if the attribute is false change to true, and if true, change to false
    if (value !== "true") {
      event.target.setAttribute("aria-checked", "true");
    } else {
      event.target.setAttribute("aria-checked", "false");
    }
  }