import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import { AnimationProvider } from 'react-use-animation-test';

ReactDOM.render(<AnimationProvider><BrowserRouter><App /></BrowserRouter></AnimationProvider>, document.getElementById('root'))
