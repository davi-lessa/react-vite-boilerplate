import styled from 'styled-components'

export const Container = styled.div`
  height: 65px;
  width: 100vw;

  background: var(--bg-color);
`

export const Content = styled.div`
  width: 100%;
  max-width: var(--desktop-max-width);
  margin: 0 auto;

  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;

  h1 {
    display: inline-block;
    user-select: none;
    margin-left: 8px;
  }
`

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
`

export const RightSide = styled.div``
