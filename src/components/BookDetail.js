import React from 'react'
import { Link } from 'react-router-dom'
import booksAPI from '../apis/books'

export default class BookDetail extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       title: '',
       desc: '',
    }
  }
  

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const book = await booksAPI.get(`/books/${this.props.match.params.id}.json`);
    
    this.setState({
      title: book.data.title,
      desc: book.data.desc,
    });
  }

  render() {
    return (
      <div>
        <Link to='/' className='btn btn-outline-secondary mb-4'>Back</Link>
        <h1>{this.state.title}</h1>
        <p>{this.state.desc}</p>
      </div>
    );
  }
}
