const Inbox = {
  render: function() {
    const container = document.createElement('ul');
    container.className = "messages";
    container.innerHTML = "An Inbox Message";
    return container;
  }
};

module.exports = Inbox;
