import React from 'react'
import { Route } from 'react-router-dom';

import { Link } from 'react-use-animation-test'

import Home from './Home';
import Work from './Work';

const App = () => {

  return (
    <>
      <Link style={{ cursor: 'pointer' }} to='/'>Home</Link>
      <Link to='/work'>Work</Link>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/work' exact>
        <Work />
      </Route>
    </>
  )
}

export default App