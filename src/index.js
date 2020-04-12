import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom'
import history from "./util/history"
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CssBaseline from '@material-ui/core/CssBaseline';
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './theme';

// TODO: Add new planner flow - create new and give it a name, potentially a template, a privacy level then dropped into the empty planner

ReactDOM.render(
    <Router history={history}>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <App/>
        </ThemeProvider>
    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
