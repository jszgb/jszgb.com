import styled, { css } from 'styled-components'
import GatsbyLink from 'gatsby-link'

import { LinkStyles } from '../../styles/shared'

export const PaginationLinkStyles = css`
  ${LinkStyles};
  padding: 0.3em 0.5em;
  margin: 0 0.3em;
`

export const Container = styled.div`
  text-align: center;
`

export const Link = styled(GatsbyLink)`
  ${PaginationLinkStyles};
    user-select: none;


  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;

    &:hover {
      color: #999;
    }
  }

  @media screen and (max-width: 1024px) {
    display: block;
    margin: 0.6em 0.3em;
  }
`
