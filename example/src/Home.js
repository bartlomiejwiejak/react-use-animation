import React from 'react'
import gsap from 'gsap';

import useAnimation from 'react-use-animation-test';

function Home() {
  const endAnimation = useAnimation(() => {
    gsap.fromTo('body', { opacity: 0 }, { opacity: 1 })
  }, () => {
    gsap.fromTo('body', 3, { opacity: 1 }, { opacity: 0, onComplete: endAnimation })
  }, 5000)
  return (
    <div style={{ fontSize: '50px' }}>
      HOME
    </div>
  )
}

export default Home