import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

// This is the line of code that will append all of the HTML generated by
// your React into the browser DOM
render(<App />, document.querySelector('#root'));