import React from 'react'
import NextNprogress from 'nextjs-progressbar'

const NextProgress: React.FC = () => {
  return (
    <NextNprogress
      color="#4F5966
      linear-gradient(
        to right,
        #C6CACF,
        #4F5966,
        #5C6A6D,
        #C6CACF,
        #5C6A6D
      );"
      startPosition={0.3}
      stopDelayMs={200}
      height={3}
      showOnShallow={true}
      options={{ easing: 'ease', speed: 500 }}
    />
  )
}

export default NextProgress