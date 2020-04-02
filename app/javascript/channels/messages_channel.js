import consumer from './consumer'

function submitMessages() {
  $('#message_content').on('keydown', function (e) {
    if (e.key === 'Enter') {
      $('input').click();
      e.target.value = '';
      e.preventDefault();
    }
  });
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
    $(`<li>${data.content} - ${data.user}</li>`).appendTo($('#messages'));
  }
});
