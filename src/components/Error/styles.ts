import styled from 'styled-components'

export const ErrorContainer = styled.div`
  text-align: center;
  & > p {
    font-size: 1.6rem;
    font-weight: bolder;
    padding: 2rem 0;
    & > span {
      color: #dd4950;
    }
  }
  & > span {
    font-size: 5rem;
    color: #dd4950;
    margin-top: 1rem;
  }
`
