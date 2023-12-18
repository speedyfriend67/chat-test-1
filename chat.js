const messageList = document.getElementById('messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const STORAGE_KEY = 'chat-history';
function addMessage(text, sender) {
  
  const messageData = {
    text,
    sender,
    timestamp: Date.now(),
  };
  const messageString = JSON.stringify(messageData);

  // Get existing history, or create an empty array if absent
  const existingHistory = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  existingHistory.push(messageData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existingHistory));
}
function loadChatHistory() {
  const messageList = document.getElementById('messages');
  const storedHistory = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  // Loop through history and add messages to the list
  for (const message of storedHistory) {
    addMessage(message.text, message.sender);
  }
}

loadChatHistory();

sendButton.addEventListener('click', function() {
  const messageText = messageInput.value;
  if (messageText.trim()) {
      addMessage(messageText, 'You');
      setTimeout(function() {
      addMessage('Hello there!', 'Bot');
    }, 1000);
    messageInput.value = '';
  }
});

function addMessage(text, sender) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('chat-message');
  const senderElement = document.createElement('span');
  senderElement.classList.add('chat-sender');
  senderElement.textContent = sender + ':';
  messageElement.appendChild(senderElement);
  messageElement.appendChild(document.createTextNode(text));
  messageList.appendChild(messageElement);
  messageList.scrollTop = messageList.scrollHeight;
}
