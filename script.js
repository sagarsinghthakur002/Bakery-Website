let  manuBtn = document.getElementById("menu-btn");
let  navbar = document.querySelector(".header .navbar");
let  searchBtn = document.querySelector("#search-btn");
let  searchForm = document.querySelector(".search-form");
let  bot = document.querySelector(".bot");
let  container = document.querySelector(".container");


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

bot.addEventListener("click", () => {
    container.classList.toggle("active");
    navbar.classList.remove("active");
    searchForm.classList.remove("active");
});

window.onscroll =()=> {
    navbar.classList.remove("active");
    searchForm.classList.remove("active");
    container.classList.remove("active");
}

function chatbot(input) {
    let output = "";
    const bakeryMenu = {
        "croissant": "Croissant: Rs 50",
        "muffin": "Muffin: Rs 80",
        "baguette": "Baguette: Rs 100",
        "brownie": "Brownie: Rs 70",
        "donut": "Donut: Rs 60",
        "cupcake": "Cupcake: Rs 90",
        "bun": "Bun: Rs 250",
        "carpathian": "Carpathian: Rs 95",
        "poster": "Poster: Rs 120",
        "moule": "Moule: Rs 175",
        "cake": "Cake: Rs 165",
        "plum cake": "Plum Cake: Rs 225"
    };

    input = input.toLowerCase();

    if (input.includes("hello") || input.includes("hi") || input.includes("hey") || input.includes("hlo")) {
        output = "Hello there! How can I help you today?";
    } else if (input.includes("how are you")) {
        output = "I am doing great, thank you for asking! How about you?";
    } else if (input.includes("i need menu") || input.includes("can i have coffee")) {
        output = "Please type 'menu' to see our coffee offerings.";
    } else if (input.includes("what is your name")) {
        output = "My name is Chatbot, but you can call me Chat. What is your name?";
    } else if (input.includes("what is your favorite coffee")) {
        output = "My favorite coffee is cappuccino, but I also like mocha and frappe.";
    } else if (input.includes("what is your favorite food")) {
        output = "My favorite food is pizza, but I also like tacos and sushi.";
    } else if (input.includes("location") || input.includes("where are you located")) {
        output = "We are located at Tahachal, Kathmandu, Nepal. Our contact number is +977 980-1238675. We are open from 8 AM to 8 PM.";
    } else if (input.includes("location map") || input.includes("map")) {
        output = "We are located at Tahachal, Kathmandu, Nepal. Click [here](#) to see the location.";
    } else if (input.includes("your number") || input.includes("your phone number")) {
        output = "+977 980-1238675";
    } else if (input.includes("email") || input.includes("your email") || input.includes("gmail")) {
        output = "You can reach us at bakerythirdeye@gmail.com.";
    } else if (input.includes("bakery menu") || input.includes("bakery items") || input.includes("bakery")) {
        output = `Welcome to Third Eye Bakery! Here is our bakery menu:
        - Croissant
        - Muffin
        - Baguette
        - Brownie
        - Donut
        - Cupcake
        - Bun
        - Carpathian
        - Poster
        - Moule
        - Cake
        - Plum Cake
        What would you like to order, sir/madam?`;
    } else {
        for (let item in bakeryMenu) {
            if (input.includes(item)) {
                output = bakeryMenu[item];
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