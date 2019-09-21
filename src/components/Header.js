import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='mb-5 d-flex justify-content-between align-items-center'>
      <Link to='/' className='text-dark'>
        <h1>Kumpulan Buku</h1>
      </Link>
      <Link to='/create' className='btn btn-outline-primary'>Create Book</Link>
    </div>
  );
}

export default Header;
