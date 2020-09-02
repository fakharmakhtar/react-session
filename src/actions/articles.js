import {ADD_BOOK} from '../constants/actionTypes';

export function addArticle(article) {
    return {
        type: ADD_BOOK,
        payload: {
            article
        }
    };
}