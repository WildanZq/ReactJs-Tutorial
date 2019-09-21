import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = props => {
  return (
    <div className='card rounded shadow-sm mr-2 mb-2' style={{ width: 200 }}>
      <Link to={`/detail/${props.id}`} className='card-body text-dark'>
        <h4>{props.title}</h4>
        <p className='m-0'>{props.desc}</p>
      </Link>
    </div>
  );
}

export default BookCard;
