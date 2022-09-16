import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

const ConfettiDrop = () => {
  const { width, height } = useWindowSize()
  return (
    <Confetti
      style={{ width: '100%', height: '100%' }}
      width={width}
      height={height}
      initialVelocityY={5}
    />
  )
}

export default ConfettiDrop
