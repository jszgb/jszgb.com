import styled from 'styled-components'
import GatsbyLink from 'gatsby-link'

import { PaginationLinkStyles } from '../pagination/styles'
import * as colors from '../../styles/colors'

export const Container = styled.div`
  display: inline-block;
  text-align: center;
`

export const Link = styled(GatsbyLink)`
  ${PaginationLinkStyles};
  display: inline-block;
  color: ${props => props.active ? colors.yellow : ''};
`
