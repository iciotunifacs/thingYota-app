import React from 'react'

import { Result } from 'antd';

const ExceptionsView =({type, text}) => {
  switch (type) {
    case 500:
      return (<Result status="500" title="500" subTitle={text || "Ops... Houve um erro"}/>)
    case 404:
    default:
      return (
        <Result status="404" title="404" subTitle={text || "Página não encontrada"}/>
      )
  }
}

export default ExceptionsView
