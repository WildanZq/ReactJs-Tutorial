import React from 'react';
import BookCard from './BookCard';

export default class BookList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      books: [
        {
          id: 1,
          title: 'Judul 1',
          desc: 'Deskripsi 1'
        }
      ]
    }
  }

  addBook = () => {
    let books = this.state.books;
    books.push({
      id: this.state.books.length + 1,
      title: `Judul ${this.state.books.length + 1}`,
      desc: `Deskripsi ${this.state.books.length + 1}`,
    });

    this.setState({ books });
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
        <button onClick={this.addBook} className='btn btn-primary mt-4'>
          Create Book
        </button>
      </div>
    );
  }
}
