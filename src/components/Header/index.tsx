import React from 'react'

import { Container, Content, LeftSide, RightSide } from './styles'
import { BiStore as Logo } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <LeftSide>
          <Logo size={24}></Logo>
          <Link to={'/'}>
            <h1>boiler</h1>
          </Link>
        </LeftSide>
        <RightSide></RightSide>
      </Content>
    </Container>
  )
}

export default Header
