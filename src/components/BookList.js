import React from 'react';
import BookCard from './BookCard';
import booksAPI from '../apis/books';

export default class BookList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      books: []
    }
  }

  getBooks = async () => {
    const booksDB = await booksAPI.get('/books.json');
    let books = [];

    for (const key in booksDB.data) {
      books.push({
        id: key,
        title: booksDB.data[key].title,
        desc: booksDB.data[key].desc,
      });
    }

    this.setState({ books });
  }

  componentDidMount() {
    this.getBooks();
  }

  render() {
    return (
      <div>
        <div className='d-flex flex-wrap'>
          {
            this.state.books.map(book => (
              <BookCard
                key={book.id}
                id={book.id}
                title={book.title}
                desc={book.desc}
              />
            ))
          }
        </div>
      </div>
    );
  }
}
