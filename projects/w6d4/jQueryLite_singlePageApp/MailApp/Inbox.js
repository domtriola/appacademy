const MessageStore = require('./message_store');

const Inbox = {
  render: function() {
    const container = document.createElement('ul');
    container.className = "messages";

    const messages = MessageStore.getInboxMessages();
    messages.forEach(message => {
      let node = this.renderMessage(message);
      container.appendChild(node);
    });

    return container;
  },

  renderMessage: function(message) {
    const messageNode = document.createElement('li');
    messageNode.className = "message";
    messageNode.innerHTML =
      `<span class="from">${message.from}</span>
       <span class="subject">${message.subject}</span>
       <span class="body">${message.body}</span>`;

    return messageNode;
  }
};

module.exports = Inbox;
