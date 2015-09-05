var Greeting = React.createClass({
  render: function() {
    return (
      <h1>ELLO!</h1>
    );
  }
})

React.render(<Greeting />, document.getElementById('content'));