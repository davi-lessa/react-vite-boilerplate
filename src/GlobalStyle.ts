import { createGlobalStyle } from 'styled-components'
const styled = { createGlobalStyle }

export const GlobalStyle = styled.createGlobalStyle`
  :root {
    --desktop-max-width: 1700px;

    /* Light mode */
    --primary-color: #4285f4;
    --secondary-color: #fbbc05;
    --tertiary-color: #34a853;
    --background-color: #f5f5f5;
    --text-color: #333;

    /* Dark mode */
    --primary-color-dark: #66b3ff;
    --secondary-color-dark: #ffcc33;
    --tertiary-color-dark: #80d4a7;
    --background-color-dark: #222;
    --text-color-dark: #f5f5f5;
  }

  /* Use these variables in your CSS */
  .light {
    --primary: var(--primary-color);
    --secondary: var(--secondary-color);
    --tertiary: var(--tertiary-color);
    --bg-color: var(--background-color);
    --text-color: var(--text-color);
  }

  .dark {
    --primary: var(--primary-color-dark);
    --secondary: var(--secondary-color-dark);
    --tertiary: var(--tertiary-color-dark);
    --bg-color: var(--background-color-dark);
    --text-color: var(--text-color-dark);
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--bg-color);
    color: var(--text-color);
    overflow-x: hidden;
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
