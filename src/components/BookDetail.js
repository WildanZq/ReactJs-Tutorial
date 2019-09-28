import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { getBook } from '../actions';

class BookDetail extends React.Component {  
  componentDidMount() {
    this.props.getBook(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <Link to='/' className='btn btn-outline-secondary mb-4'>Back</Link>
        <h1>{this.props.book ? this.props.book.title : ''}</h1>
        <p>{this.props.book ? this.props.book.desc : ''}</p>
      </div>
    );
  }
}

const  mapStateToProps = (state, ownProps) => {
  return {
    book: state.books[ownProps.match.params.id],
  };
}

export default connect(
  mapStateToProps,
  { getBook }
)(BookDetail);
