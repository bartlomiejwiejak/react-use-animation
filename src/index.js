/* eslint-disable prettier/prettier */
/* eslint-disable import/no-duplicates */
import { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { Context } from './components/AnimationProvider'
import AnimationProvider from './components/AnimationProvider'
import Link from './components/Link'

const useAnimation = (
  enterAnimation,
  leaveAnimation,
  transition = 1000,
  cleanup
) => {
  const { state, dispatch } = useContext(Context)
  const history = useHistory()

  const startRedirecting = () => {
    if (state.isAnimating) {
      dispatch({ type: 'ANIMATION_FINISH' })
      history.push(state.path)
    }
  }

  useEffect(() => {
    enterAnimation()
    return cleanup
  }, [])

  useEffect(() => {
    if (state.isAnimating) {
      leaveAnimation()
      setTimeout(() => {
        startRedirecting()
      }, transition)
    }
  }, [state.isAnimating])

  return startRedirecting;
}


export default useAnimation
export { AnimationProvider, Link }