const App = React.createClass({
  propTypes: {
    component: React.PropTypes.object.isRequired
  },

  render: function() {
    return React.createElement(
      'div',
      { className: 'container' },
      React.createElement('h1', {}, '1st COUNTER'),
      React.createElement(Counter),
      React.createElement('h1', {}, '2nd COUNTER'),
      React.createElement(Counter),
      React.createElement('h1', {}, '3rd COUNTER'),
      React.createElement(Counter)
    );
  }
});

const MyApp = React.createElement(App);
ReactDOM.render(MyApp, document.getElementById('app'));
