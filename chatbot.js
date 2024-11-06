// Get DOM elements
const messagesContainer = document.getElementById('messages');
const userInput = document.getElementById('userInput');

// Function to send message
function sendMessage() {
  const message = userInput.value.trim();
  if (message === '') return;

  // Display user's message
  displayMessage(message, 'user');

  // Clear input field
  userInput.value = '';

  // Generate bot response after a short delay
  setTimeout(() => {
    const botResponse = getBotResponse(message);
    displayMessage(botResponse, 'bot');
  }, 1000);
}

// Function to display messages in the chat window
function displayMessage(message, sender) {
  const messageElement = document.createElement('div');
  messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
  messageElement.textContent = message;
  messagesContainer.appendChild(messageElement);
  
  // Scroll to the bottom of the chat window
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Function to generate a basic bot response
function getBotResponse(userMessage) {
  // Basic bot responses based on user input
  const responses = {
    hello: "Hello! How can I help you today?",
    hi: "Hi there! How can I assist you?",
    how: "I'm good, thank you! How are you?",
    bye: "Goodbye! Have a great day!",
  };

  // Make the response case-insensitive
  const lowerMessage = userMessage.toLowerCase();

  // Return the appropriate response or a default message
  return responses[lowerMessage] || "Sorry, I didn't understand that.";
}
