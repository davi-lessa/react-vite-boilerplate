import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'

import { Container, Content } from './styles'

const PageModel: React.FC = () => {
  return (
    <Container>
      <Header></Header>
      <Content>
        <Outlet></Outlet>
      </Content>
    </Container>
  )
}

export default PageModel
