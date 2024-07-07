import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`

export const LoaderContainer = styled.div`
  text-align: center;
  margin-top: 3.6rem;
  & > svg {
    font-size: 4rem;
    fill: #8957e5;
    animation: ${rotate} 1s linear infinite;
  }
`
