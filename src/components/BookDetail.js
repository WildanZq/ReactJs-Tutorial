import React from 'react'
import { Link } from 'react-router-dom'

export default class BookDetail extends React.Component {
  render() {
    return (
      <div>
        <Link to='/' className='btn btn-outline-secondary mb-4'>Back</Link>
        <h1>Judul {this.props.match.params.id}</h1>
        <p>Deskripsi</p>
      </div>
    );
  }
}
