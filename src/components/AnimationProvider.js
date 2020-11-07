/* eslint-disable prettier/prettier */
import React, { useReducer } from 'react'

export const Context = React.createContext(null)

const initialState = {
  isAnimating: false,
  to: '/'
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'ROUTE_TO':
      return {
        path: action.payload,
        isAnimating: true
      }
    case 'ANIMATION_FINISH':
      return {
        ...state,
        isAnimating: false
      }
  }
}

const AnimationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  )
}

export default AnimationProvider;