import React from 'react'; //Not needed since react 17+
import ReactDOM from 'react-dom';

// FC can be function declaration
// or function expressions.
// Either way, function name should
// be capitalize.
const Greeting = () => {
  return <h1>Hello World!</h1>;
};

ReactDOM.render(<Greeting />, document.querySelector('#root'));
