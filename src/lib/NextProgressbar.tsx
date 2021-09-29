import React from 'react'
import NextNprogress from 'nextjs-progressbar'

const NextProgress: React.FC = () => {
  return (
    <NextNprogress
      color="#9FD702
      linear-gradient(
        to right,
        #4A9529,
        #72B41A,
        #9FD702,
        #72B41A,
        #9FD702
      );"
      startPosition={0.3}
      stopDelayMs={200}
      height={5}
      showOnShallow={true}
      options={{ easing: 'ease', speed: 500 }}
    />
  )
}

export default NextProgress