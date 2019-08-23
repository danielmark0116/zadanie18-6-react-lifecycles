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

  componentWillMount() {
    console.log('Component will mount');
    console.log('- user auth');
    console.log('- request to the server for data');
  },

  componentDidMount() {
    console.log('Component did update');
    console.log('- change DOM');
  },

  componentWillReceiveProps() {
    console.log('Component will receive props');
    console.log('- no ideas :C');
  },

  shouldComponentUpdate() {
    console.log('Component should update');
    console.log('- user auth');
    return true;
  },

  componentWillUpdate() {
    console.log('Component will update');
    console.log('- user auth if given user type can fetch updated data');
  },

  componentDidUpdate() {
    console.log('Component did update');
    console.log(
      '- DOM change -> changing the color of some kind of status icon or setting the date of the last update/refresh'
    );
  },

  componentWillUnmount() {
    console.log('Component will unmount');
    console.log('- user logout');
  },

  render: function() {
    return React.createElement(
      'div',
      {},
      React.createElement('div', { className: 'counter' }, this.state.counter),
      React.createElement(
        'button',
        { className: 'btn', onClick: this.decrement },
        'Decrement'
      ),
      React.createElement(
        'button',
        { className: 'btn', onClick: this.increment },
        'Increment'
      )
    );
  }
});
