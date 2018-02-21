// reducers produce the state.
import {ADD_ARTICLE, ADD_TEXT} from "../constants/action-types";

const initialState = {
    articles: [],
    text: ''
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return {
                ...state,
                articles: [
                    ...state.articles,
                    action.payload
                ]
            };
        case ADD_TEXT:
            return {
                ...state,
                text: [
                    ...state.text,
                    action.payload
                ]
            }
        default:
            return state;
    }
};
export default rootReducer;
