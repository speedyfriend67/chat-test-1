const messageList = document.getElementById('messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', function() {
  const messageText = messageInput.value;
  if (messageText.trim()) {
    // Add your message to the chat
    addMessage(messageText, 'You');
    // Simulate receiving a response message
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
