import consumer from './consumer'

function submitMessages() {
  let timer;

  $('#message_content').on('keydown', function (e) {
    if (e.key === 'Enter') {
      $('input').click();
      e.target.value = '';
      e.preventDefault();

      clearTimeout(timer);
      timer = setTimeout(() => {
        const container = $('.message-container');
        container.scrollTop(container[0].scrollHeight - container[0].clientHeight);
      }, 50);
    }
  });
}

function htmlEntities(str) {
  return String(str).replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

$(document).on('turbolinks:load', function () {
  submitMessages();
});

consumer.subscriptions.create('MessagesChannel', {
  connected() {
    // Called when the connected to the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    $(`
      <div class="message d-flex flex-column list-group-item">
        <span class="mb-3">
          ${data.user}
        </span>
        <span>
          ${htmlEntities(data.content)}
        </span>
      </div>
    `).appendTo($('#messages'));
  }
});
