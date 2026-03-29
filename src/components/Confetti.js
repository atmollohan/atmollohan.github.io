import React from 'react'
import PropTypes from 'prop-types'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

const ConfettiDrop = ({ height = 400 }) => {
  const { width } = useWindowSize()

  return (
    <div
      style={{
        position: 'relative',
        height: `${height}px`,
        overflow: 'hidden',
      }}
    >
      <Confetti
        style={{ position: 'absolute', top: 0, left: 0 }}
        width={Math.min(width, 400)}
        height={height}
        numberOfPieces={50}
        initialVelocityY={5}
        recycle={false}
        gravity={0.15}
      />
    </div>
  )
}

ConfettiDrop.propTypes = {
  height: PropTypes.number,
}

export default ConfettiDrop
