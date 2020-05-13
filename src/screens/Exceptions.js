import React from 'react'

const ExceptionsView =({type}) => {
  switch (type) {
    case 404:
    default:
      return <div>
        404
      </div>
  }
}

export default ExceptionsView
