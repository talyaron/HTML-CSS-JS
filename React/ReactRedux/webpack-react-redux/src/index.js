import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from "react-redux";
import store from "./model/store";
import {addArticle} from "./model/actions";
import {addText} from './model/actions';

window.store = store;
window.addArticle = addArticle;
window.addText = addText;

//https://www.valentinog.com/blog/react-redux-tutorial-beginners/

ReactDOM.render(
    <Provider store={store}>
    <App/>
</Provider>, document.getElementById("root"));

registerServiceWorker();
