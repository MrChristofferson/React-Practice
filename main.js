
var message = 
  <div class="hello" onClick={function(){console.log('HAY')}}>
    <span>Hello World</span>
  </div>;

React.renderComponent(message, document.body)
