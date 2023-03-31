import React from 'react'

import { Container, Content, LeftSide, RightSide } from './styles'
import { BiStore as Logo } from 'react-icons/bi'
import { Link } from 'react-router-dom'

interface HeaderProps {
  borderColor?: string
}

const Header: React.FC<HeaderProps> = ({ borderColor }: HeaderProps) => {
  return (
    <Container style={{ borderBottom: `1px solid ${borderColor || '#333'}` }}>
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
