var MessageView = {

  render: _.template(`

      <div class="chat">
        <div class="username"> <%- username %></div>
        <div><%- text %></div>
      </div>

    `)

};

var RoomnameView = {

  render: _.template(`
    <option class="room <%- roomname%>"><%- roomname%></option>
  `)
}