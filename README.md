# react-use-animation

> Easy way to animate page transition using react-router-dom.

[![NPM](https://img.shields.io/npm/v/react-use-animation-test.svg)](https://www.npmjs.com/package/react-use-animation) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-use-animation
```

## Usage

Wrap your entire app with AnimationProvider component:

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import { AnimationProvider } from 'react-use-animation';

ReactDOM.render(
  <BrowserRouter>
   <AnimationProvider>
    <App />
   </AnimationProvider>
  </BrowserRouter>, 
document.getElementById('root'))

```
Use Link components to navigate (they behave just like normal react-router-dom links):

```jsx
import React from 'react'
import { Link } from 'react-use-animation';

const Navigation = () => {
  return (
    <nav>
     <Link to='/home'>
     <Link to='/products'>
     <Link to='/about'>
     <Link to='/contact'>
    </nav>
  )
}

```
Inside routes you want to be animated, use "useAnimation" hook:

```jsx
import React from 'react'
import useAnimation from 'react-use-animation';

const PageA = () => {

  useAnimation(function animateEnterance() {
  // your enterance animation code
  },
  function animateLeaving() {
  // your page leaving animation code
  }, 
  transition  //optional, transition in ms between going from page A to any other page, default is 1000.
  , 
  callback  //optional, you can remove listeners / intervals / timeouts here
  )

  return (
    <div>
     PAGE A 
    </div>
  )
}
```

Example with GSAP animation library: 

```jsx
import React from 'react'
import useAnimation from 'react-use-animation';
import gsap from 'gsap';

const PageA = () => {
  
  useAnimation(function animateEnterance() {
  gsap.fromTo('.pageA', 1.5, {autoAlpha: 0}, {autoAlpha: 1, onComplete: () => {       //animates fade in
    window.addEventListener('mousemove', listenerFunction)
  }})
  },
  function animateLeaving() {
    gsap.fromTo('.pageA', 1.5, {autoAlpha: 1}, {autoAlpha: 0})                       //animates fade out and after 1500ms routes to next page.
  }, 
  1500   //since leaving animation duration is 1.5s, we want to route to next page after 1500ms
  , 
  () => {
    window.removeEventListener('mousemove', listenerFunction)
  }
  )

  return (
    <div className='pageA'>
     PAGE A 
    </div>
  )
}
```

Optional, using return function from useAnimation hook: 

```jsx
import React from 'react'
import useAnimation from 'react-use-animation';
import gsap from 'gsap';

const PageA = () => {
  
  const redirectNow = useAnimation(function animateEnterance() {
  gsap.fromTo('.pageA', 1.5, {autoAlpha: 0}, {autoAlpha: 1, onComplete: () => {       
    window.addEventListener('mousemove', listenerFunction)
  }})
  },
  function animateLeaving() {
    gsap.fromTo('.pageA', 1.5, {autoAlpha: 1}, {autoAlpha: 0, onComplete: redirectNow})  // navigates instantly to next page when animation ends                       
  }, 
  2000      // providing higher number than 1500 in this example has no effect
  , 
  () => {
    window.removeEventListener('mousemove', listenerFunction)
  }
  )
  return (
    <div className='pageA'>
     PAGE A 
    </div>
  )
}
```

## License

MIT © [bartlomiejwiejak](https://github.com/bartlomiejwiejak)