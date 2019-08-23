const Counter = React.createClass({
  getInitialState: function() {
    return {
      counter: 0
    };
  },

  increment: function() {
    this.setState({
      counter: this.state.counter + 1
    });
  },

  decrement: function() {
    this.setState({
      counter: this.state.counter - 1
    });
  },

  componentDidUpdate() {
    console.log('Component updated');
  },

  componentWillMount() {
    console.log('Component will mount');
  },

  render: function() {
    return React.createElement(
      'div',
      {},
      React.createElement('div', {}, this.state.counter),
      React.createElement('button', { onClick: this.decrement }, 'Decrement'),
      React.createElement('button', { onClick: this.increment }, 'Increment')
    );
  }
});
