import {ADD_ARTICLE, ADD_TEXT} from "../constants/action-types";

export const addArticle = article => ({type: ADD_ARTICLE, payload: article});
export const addText = text => ({type: ADD_TEXT, payload: text});