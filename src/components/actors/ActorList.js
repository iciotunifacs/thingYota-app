import React from 'react'

import ActorItem from './ActorItem'

function ActorList({actors}) {
  return (
    <div>
      {actors.map(actor => (<ActorItem actor={actor}/>))}
    </div>
  )
}

export default ActorList
