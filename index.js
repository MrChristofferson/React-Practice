var leftColumn = React.createClass({
  render: function() {
    return (
      <div className="left-column-components">{this.props.children}</div>
    );
  }
})

React.render(
  <div>
    <leftColumn>Chris Vandenberg</leftColumn>
    <leftColumn>Edit Profile</leftColumn>
    <leftColumn>News Feed</leftColumn>
    <leftColumn>Messages</leftColumn>
    <leftColumn>Events</leftColumn>
    <leftColumn>Photos</leftColumn>
    <leftColumn>Browse</leftColumn>
  </div>, 

  document.getElementById('app')

  );