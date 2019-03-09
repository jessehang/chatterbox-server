var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);
    FormView.initialize();
    
  
    // Fetch initial batch of messages
    // App.startSpinner();
    App.fetch(App.stopSpinner);
  },
  // all messages
  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // pushing all the data into Messages and Rooms array:
      for (let i = 0; i < data.results.length; i++) {
        // changes empty usernames to anon
        data.results[i].username = data.results[i].username || 'anon';
        // changes empty text to an empty string
        data.results[i].text = data.results[i].text || ''; 
        // push data in Messages array
        Messages.results.push(data.results[i]);
        if (!Rooms[data.results[i].roomname]) {
          Rooms[data.results[i].roomname] = data.results[i]
        } 
      }
      console.log(data);
      callback();
      MessagesView.initialize(Messages.results, MessageView);
      RoomsView.initialize();
      
    });
  },

  // rooms messages
  roomMessagesFetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // pushing all the data into Messages and Rooms array:
      for (let i = 0; i < data.results.length; i++) {
        // changes empty usernames to anon
        data.results[i].username = data.results[i].username || 'anon';
        // changes empty text to an empty string
        data.results[i].text = data.results[i].text || ''; 
        // push data into Rooms
        if (!Rooms[data.results[i].roomname]) {
          Rooms[data.results[i].roomname] = data.results[i]
        }
      }
      console.log(data);
      callback();
      
      
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};


