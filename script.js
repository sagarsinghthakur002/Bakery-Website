let  manuBtn = document.getElementById("menu-btn");
let  navbar = document.querySelector(".header .navbar");
let  searchBtn = document.querySelector("#search-btn");
let  searchForm = document.querySelector(".search-form");
// let  bot = document.querySelector(".bot");
// let  container = document.querySelector(".container");


manuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
    searchForm.classList.remove("active"); 
    container.classList.remove("active");  
});


searchBtn.addEventListener("click", () => {
    searchForm.classList.toggle("active");
    navbar.classList.remove("active");
    container.classList.remove("active");
    
});

// bot.addEventListener("click", () => {
//     container.classList.toggle("active");
//     navbar.classList.remove("active");
//     searchForm.classList.remove("active");
// });

window.onscroll =()=> {
    navbar.classList.remove("active");
    searchForm.classList.remove("active");
    container.classList.remove("active");
}

function chatbot(input) {
    let output = "";
    const menu = {
        "oreo latte": "Oreo Latte: Rs 250",
        "espresso": "Espresso: Rs 95",
        "doppio": "Doppio: Rs 120",
        "latte": "Latte: Rs 175",
        "cappuccino": "Cappuccino: Rs 175",
        "americano": "Americano: Rs 135",
        "frappe": "Frappe: Rs 325",
        "hot chocolate": "Hot Chocolate: Rs 195",
        "blended mocha": "Blended Mocha: Rs 225",
        "ice latte": "Ice Latte: Rs 195",
        "iced americano": "Iced Americano: Rs 165",
        "mocha madness": "Mocha Madness: Rs 250"
    };
    if (input.includes("hello") || input.includes("hi") || input.includes("hey") || input.includes("hlo")) {
        output = "Hello there! How can I help you today?";
    } else if (input.includes("how are you")) {
        output = "I am doing great, thank you for asking! How about you?";
    }else if (input.includes("i nedd manu ") || input.includes("can i have coffee ") ) {
        output = "plz type menu ";
    } else if (input.includes("what is your name")) {
        output = "My name is Chatbot, but you can call me Chat. What is your name?";
    } else if (input.includes("what is your favorite coffe")) {
        output = "My favorite coffee is cappuccino, but I also like mocha  and frappe.";
    } else if (input.includes("what is your favorite food")) {
        output = "My favorite food is pizza, but I also like tacos and sushi.";
    }  else if (input.includes("can you h")) {
    } else if (input.includes("location") || input.includes("where are you located")) {
            output = "We are located at Galli, Lalitpur. Our contact number is +977 9828711925. We  are open from 8 AM to 8 PM.";
    }
    else if (input.includes("location map") || input.includes("map") ) {
        output = "We are located at Galli, Lalitpur. click to see the location .";
}
    else if (input.includes("your number") || input.includes("your phone number ")) {
        output = "+977 9828711925";
    } 
    else if (input.includes("coffee menu") || input.includes("your menu") || input.includes("menu")){
        output = `Welcome to Coffee Corner! Here is our coffee menu:
        - Oreo Latte: Rs 250
        - Espresso: Rs 95
        - Doppio: Rs 120
        - Latte: Rs 175
        - Cappuccino: Rs 175
        - Americano: Rs 135
        - Frappe: Rs 325
        - Hot Chocolate: Rs 195
        - Blended Mocha: Rs 225
        - Ice Latte: Rs 195
        - Iced Americano: Rs 165
        - Mocha Madness: Rs 250
        . what you would you like to take sir/madam`;
    } 
    else {
        for (let item in menu) {
            if (input.toLowerCase().includes(item)) {
                output = menu[item];
                break;
            }
        }
        if (!output) {
            output = "I'm not sure how to respond to that. Can you please provide more details?";
        }
    }
    return output;
}

// Display user message in the chat
function displayUserMessage(message) {
    let chat = document.getElementById("chat");
    let userMessage = document.createElement("div");
    userMessage.classList.add("message", "user");
    let userAvatar = document.createElement("div");
    userAvatar.classList.add("avatar");
    let userText = document.createElement("div");
    userText.classList.add("text");
    userText.innerText = message;
    userMessage.appendChild(userText);
    userMessage.appendChild(userAvatar);
    chat.appendChild(userMessage);
    chat.scrollTop = chat.scrollHeight;
}

// Display bot message in the chat
function displayBotMessage(message) {
    let chat = document.getElementById("chat");
    let botMessage = document.createElement("div");
    botMessage.classList.add("message", "bot");
    let botAvatar = document.createElement("div");
    botAvatar.classList.add("avatar");
    let botText = document.createElement("div");
    botText.classList.add("text");
    botText.innerText = message;
    botMessage.appendChild(botAvatar);
    botMessage.appendChild(botText);
    chat.appendChild(botMessage);
    chat.scrollTop = chat.scrollHeight;
}

// Send user message and get bot response
function sendUserMessage() {
    let input = document.getElementById("input").value;
    if (input) {
        displayUserMessage(input);
        let output = chatbot(input);
        setTimeout(function () {
            displayBotMessage(output);
            document.getElementById("input").value = "";
        }, 1000);
    }
}

// Button event listener
document.getElementById("button").addEventListener("click", () => {
    sendUserMessage();
});

// Input key event listener
document.getElementById("input").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        sendUserMessage();
    }
});