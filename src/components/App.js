import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BookCard from './BookCard';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      books: []
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
      <div className='p-5'>
        <div className='d-flex flex-wrap'>
          {
            this.state.books.map(book => (
              <BookCard
                key={book.id}
                title={book.title}
                desc={book.desc}
              />
            ))
          }
        </div>
        <button onClick={this.addBook} className='btn btn-primary mt-4'>
          Add Book
        </button>
      </div>
    );
  }
}

export default App;
