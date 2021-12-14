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
const books = [
  {
    id: 1,
    src: 'https://images-eu.ssl-images-amazon.com/images/I/517h-u1AQlL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg',
    title: 'I Love You To the Moon and Back',
    author: 'Amelia Hepworth',
  },
  {
    id: 2,
    src: 'https://images-eu.ssl-images-amazon.com/images/I/517h-u1AQlL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg',
    title: 'I Love You To the Moon and Back v2',
    author: 'Amelia Hepworth',
  },
];

const BookList = () => {
  const booklist = books.map(({ id, src, title, author }) => (
    <Book key={id} src={src} title={title} author={author} />
  ));
  return <section className="booklist">{booklist}</section>;
};

const Book = ({ src, title, author }) => {
  const clickHandler = () => {
    alert('hello world!');
  };
  return (
    <article className="book">
      <img src={src} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Hello Me
      </button>
    </article>
  );
};

ReactDOM.render(<BookList />, document.querySelector('#root'));
