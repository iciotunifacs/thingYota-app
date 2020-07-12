import React from 'react'

import { Result } from 'antd';

import {
  CloseOutlined
} from '@ant-design/icons'

const ExceptionsView =(props) => {
  const {type, text} = props;
  switch (type) {
    case 'not_have':
      return (<Result  icon={<CloseOutlined />} title={text  || "Lista vazia"}/>)
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
