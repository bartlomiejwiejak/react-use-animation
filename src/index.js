import React, { useState } from 'react'

export const ExampleComponent = ({ text }) => {
  const [count, setCount] = useState(0)
  return <div onClick={() => setCount((prev) => prev + 1)} >Example Component: {text} Count: {count}</div>
}