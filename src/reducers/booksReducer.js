import { GET_BOOKS, GET_BOOK, CREATE_BOOK } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case GET_BOOKS:
            return { ...state, ...action.payload };
        case GET_BOOK:
            return { ...state, ...action.payload };
        case CREATE_BOOK:
            return { ...state, ...action.payload };
        default: return state;
    }
}