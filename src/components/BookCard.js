import React from 'react';

const BookCard = props => {
  return (
    <div className='card rounded shadow-sm mr-2 mb-2' style={{ width: 200 }}>
      <a href='/' className='card-body text-dark'>
        <h4>{props.title}</h4>
        <p className='m-0'>{props.desc}</p>
      </a>
    </div>
  );
}

export default BookCard;
