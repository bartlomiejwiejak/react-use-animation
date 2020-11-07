import React from 'react'

import useAnimation from 'react-use-animation-test';
import gsap from 'gsap';

function Work() {
  useAnimation(() => {
    gsap.fromTo('body', { opacity: 0 }, { opacity: 1 })
  }, () => {
    gsap.fromTo('body', { opacity: 1 }, { opacity: 0 })
  })
  return (
    <div style={{ fontSize: '50px' }}>
      WORK
    </div>
  )
}

export default Work