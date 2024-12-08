const messagesDiv = document.getElementById('messages');
document.getElementById('send-btn').addEventListener('click', () => {
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value.trim();
  if (message) {
    const newMessage = document.createElement('div');
    newMessage.textContent = message;
    messagesDiv.appendChild(newMessage);
    messageInput.value = '';
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }
});