import React from 'react'; //Not needed since react 17+
import ReactDOM from 'react-dom';

import './index.css';

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
const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://images-eu.ssl-images-amazon.com/images/I/517h-u1AQlL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg"
      alt=""
    />
  );
};

const Title = () => {
  return <h1>I Love You To the Moon and Back</h1>;
};

const Author = () => {
  return (
    <h4 style={{ color: '#617d98', fontSize: '.75rem', marginTop: '.25rem' }}>
      Amelia Hepworth
    </h4>
  );
};
ReactDOM.render(<BookList />, document.querySelector('#root'));
