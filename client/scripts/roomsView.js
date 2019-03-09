var RoomsView = {

  $selector: $('.roomselector'),

  initialize: function() {
    for(let key in Rooms) {
      this.$selector.append(RoomnameView.render(Rooms[key]));
    }
    
  },

};


// renders uniq rooms in the drop down

$('.roomselector').change('click', function(){
  var specificRoom = Messages.results.filter(room => room.roomname === $('.roomselector').val());
  App.startSpinner();
  App.roomMessagesFetch(App.stopSpinner);
  $('.chat').remove();
  MessagesView.initialize(specificRoom, MessageView);
  console.log($('#roomname').val())
})
