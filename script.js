let input = document.getElementById("message-input");

let messages = [];

let messageBox;

class message {
  constructor(sender, message){
    this.sender = sender;
    this.message = message;
  }

  getSender(){
    return sender;
  }

  getMessage(){
    return message;
  }
}

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    //event.preventDefault();
    // Trigger the button element with a click
    messages.push(new message("Daniel", document.getElementById("message-input").value));
    document.getElementById("message-input").value = "";
    document.getElementById("message-contents").innerHTML = "";
    for(let message of messages){
      let temp = "" + message.sender + ": " +  message.message + "<br>";
      document.getElementById("message-contents").insertAdjacentHTML("beforeend", temp);
    }
    if(document.getElementById("message-contents").clientHeight > 540){
      messages.shift();
    }
  }
});
