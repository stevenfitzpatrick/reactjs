import React from 'react';
import { render } from 'react-dom';
import './css/style.css';
import App from './components/app';
import StorePicker from './components/StorePicker';

render(<StorePicker/>,document.querySelector('#main'));
render(<App/>,document.querySelector('#main'));