import books from '../apis/books';
import { GET_BOOKS, GET_BOOK, CREATE_BOOK } from './types';

export const getBooks = () => async dispatch => {
    const response = await books.get('/books.json');

    dispatch({
        type: GET_BOOKS,
        payload: response.data
    });
}

export const getBook = id => async dispatch => {
    const response = await books.get(`/books/${id}.json`);

    dispatch({
        type: GET_BOOK,
        payload: { [id]: response.data }
    });
}

export const createBook = formValues => async dispatch => {
    const key = await books.post('/books.json', formValues);

    dispatch({
        type: CREATE_BOOK,
        payload: { [key.data.name]: formValues }
    });
}
