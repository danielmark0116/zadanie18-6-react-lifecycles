const App = React.createClass({
  propTypes: {
    component: React.PropTypes.object.isRequired
  },

  render: function() {
    return React.createElement(
      'div',
      { className: 'app-container' },
      React.createElement(Counter)
    );
  }
});

const MyApp = React.createElement(App);
ReactDOM.render(MyApp, document.getElementById('app'));
