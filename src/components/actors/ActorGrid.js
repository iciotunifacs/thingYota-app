import React from 'react'

import {
  ActorGridContainer
} from './Actor-style'

import ActorItem from './ActorItem'

function ActorGrid({actors}) {
  return (
    <ActorGridContainer>
      {actors.map(actor => (<ActorItem actor={actor}/>))}
    </ActorGridContainer>
  )
}

export default ActorGrid
