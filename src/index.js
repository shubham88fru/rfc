import React from 'react'; //Not needed since react 17+
import ReactDOM from 'react-dom';

/**
 * Component Rules
 */
// 1) FC can be function declaration
// or function expressions.
// 2) Either way, function name should
// be capitalize.
// 3) React Component must return JSX.

/**
 * JSX Rules
 */
// 1) Coponent should return just single
// element
// 2) props should use camle case instead of
// kebab-case
const Greeting = () => {
  return <h1>Hello World!</h1>;
};

ReactDOM.render(<Greeting />, document.querySelector('#root'));
