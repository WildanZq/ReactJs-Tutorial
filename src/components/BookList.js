import React from 'react';
import { connect } from 'react-redux';
import BookCard from './BookCard';
import { getBooks } from '../actions';

class BookList extends React.Component {
  componentDidMount() {
    this.props.getBooks();
  }

  render() {
    return (
      <div>
        <div className='d-flex flex-wrap'>
          {
            this.props.books.map(book => (
              <BookCard
                key={book[0]}
                id={book[0]}
                title={book[1].title}
                desc={book[1].desc}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: Object.entries(state.books),
  };
}

export default connect(
  mapStateToProps,
  { getBooks }
)(BookList);
