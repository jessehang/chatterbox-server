var MessagesView = {
  
  $chats: $('#chats'),
  // appends all messages to chats
  initialize: function(selected, viewer) {
    for(let i = 0; i < selected.length; i++) {
      this.$chats.append(viewer.render(selected[i]));
    }
    
  },
  // creates template to pass to server
  renderMessage: function() {
    var message = {
      username: App.username,
      text :$('#message').val(),
      roomname: $('#roomname').val()
    };
    Parse.create(message);
    this.$chats.prepend(MessageView.render(message));
  }

};