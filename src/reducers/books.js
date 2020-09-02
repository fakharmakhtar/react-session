import { ADD_BOOK } from '../constants/actionTypes';

const initialState = {
    books: ['The Golden Notebook', 'The Lord of the Rings', 'The Goldfinch']
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_BOOK:
            return {
                ...state,
                books: [...state.books, action.book]
            }
        default:
            return state
    }
};
