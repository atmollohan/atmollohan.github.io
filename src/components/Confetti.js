import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

export default () => {
  const { width, height } = useWindowSize()
  return <Confetti style={{ width: '100%', height: '100%'}} width={width} height={height} initialVelocityY={4} />
}
