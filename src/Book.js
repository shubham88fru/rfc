import React from 'react';

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

export default Book;
