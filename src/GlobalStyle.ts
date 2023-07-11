import { createGlobalStyle } from 'styled-components'
const styled = { createGlobalStyle }

export const GlobalStyle = styled.createGlobalStyle`
  :root {
    --desktop-max-width: 1700px;
  }

  .hover-shade:hover {
    filter: contrast(0.2);
  }

  .button-like {
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    height: 42px;
    padding: 4px 20px;
    border-radius: 8px;
    background-color: #0063db;
    color: #fff;
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
    letter-spacing: -0.1px;
    text-decoration: none;
    cursor: pointer;
  }

  body {
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;

    background-color: var(--bg-color);
    color: var(--text-color);

    overflow-x: hidden;
  }

  a {
    text-decoration: none;
  }

  h1 {
    font-size: 32px;
  }
  h2 {
    font-size: 24px;
  }
  h3 {
    font-size: 18.72px;
  }
  h4 {
    font-size: 16px;
  }
  h5 {
    font-size: 13.28px;
  }
  h6 {
    font-size: 10.72px;
  }
  a {
    color: inherit;
  }
`
