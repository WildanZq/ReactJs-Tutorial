import React from 'react'
import { Link } from 'react-router-dom';
import booksAPI from '../apis/books';

export default class BookCreate extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       title: '',
       desc: '',
    }
  }
  
  onSubmit = async (e) => {
    e.preventDefault();

    if (this.state.title === '' || this.state.desc === '') {
      alert('Isi semua input');
      return;
    }

    await booksAPI.post('/books.json', {
      title: this.state.title,
      desc: this.state.desc,
    });

    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <Link to='/' className='btn btn-outline-secondary mb-4'>Back</Link>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              id='title'
              className='form-control'
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='desc'>Description</label>
            <input
              type='text'
              id='desc'
              className='form-control'
              value={this.state.desc}
              onChange={(e) => this.setState({ desc: e.target.value })}
            />
          </div>
          <button className='btn btn-primary'>
            Create
          </button>
        </form>
      </div>
    );
  }
}
