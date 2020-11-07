import React from 'react'
import gsap from 'gsap';

import useAnimation from 'react-use-animation-test';

function Home() {
  useAnimation(() => {
    gsap.fromTo('body', { opacity: 0 }, { opacity: 1 })
  }, () => {
    gsap.fromTo('body', { opacity: 1 }, { opacity: 0 })
  })
  return (
    <div style={{ fontSize: '50px' }}>
      HOME
    </div>
  )
}

export default Home