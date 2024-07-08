import styled from 'styled-components'

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2.4rem 2.4rem 5.2rem;
`

export const Title = styled.h1`
  font-size: 4.2rem;
  font-weight: bolder;
  padding: 2.4rem;

  @media screen and (max-width: 580px) {
    font-size: 2.8rem;
  }
`
