/* eslint-disable prettier/prettier */
import React, { useContext } from 'react'

import { Context } from './AnimationProvider'
import { useLocation } from 'react-router-dom'

const Link = ({ children, to, onClick, ...otherProps }) => {
  const { state, dispatch } = useContext(Context)
  const location = useLocation()

  function startRedirecting() {
    if (typeof onClick === 'function') {
      onClick();
    }
    if (state.isAnimating || location.pathname === to) return
    dispatch({ type: 'ROUTE_TO', payload: to })
  }

  return (
    <div
      onClick={startRedirecting}
      {...otherProps}
    >
      { children}
    </div >
  )
}

export default Link