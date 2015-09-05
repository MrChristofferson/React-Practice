var RadioOption = React.createClass({
  render: function() {
    return (
      <p className="radio">
        <label>
          <input type="radio" name="referrer" value="newspaper" />
            Newspaper
          </label>
        </p>
    );
  }
})

React.render(<RadioOption />, document.body)