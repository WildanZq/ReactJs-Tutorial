import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BookCard from './BookCard';

class App extends React.Component {
  render() {
    return (
      <div className='d-flex flex-wrap p-5'>
        <BookCard title='Judul 1' desc='Deskripsi 1' />
        <BookCard title='Judul 2' desc='Deskripsi 2' />
        <BookCard title='Judul 3' desc='Deskripsi 3' />
      </div>
    );
  }
}

export default App;
