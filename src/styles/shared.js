import { css } from 'styled-components'

export const LinkStyles = css`
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  text-decoration: none;
  background: #222;
  color: #999;
  transition: all 0.2s ease-out;
  font-size: 1.2em;
  cursor: pointer; 

  &:hover {
    color: #ebe247;
    text-decoration: none;
  }
`
