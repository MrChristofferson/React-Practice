

var MyComponent = React.createClass({
  doSomething: function(){
    alert(this.props.children);
  },
  render: function() {
    return (
      <div>
        <h1>{this.props.user}</h1>
        <p>{this.props.children}</p>
        <a onClick={this.doSomething} href='#'>Clickity</a>
      </div>
    );
  }
})

React.render(
  <div>
    <MyComponent food="bacon" user="user1">CHILDREN</MyComponent>
    <MyComponent food="bacon" user="user1">YAY</MyComponent>
  </div>,


  document.getElementById('example')

);