import React from 'react'; //Not needed since react 17+
import ReactDOM from 'react-dom';

import './index.css';
import { books } from './books';
import Book from './Book';

const BookList = () => {
  const booklist = books.map(({ id, src, title, author }) => (
    <Book key={id} src={src} title={title} author={author} />
  ));
  return <section className="booklist">{booklist}</section>;
};

ReactDOM.render(<BookList />, document.querySelector('#root'));
