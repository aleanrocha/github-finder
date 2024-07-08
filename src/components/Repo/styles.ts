import styled from 'styled-components'

export const RepoContainer = styled.div`
  background-color: #04010a;
  padding: 2.4rem;
  border-radius: 1rem;
  border: 0.1rem solid #8957e5;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;
  font-size: 1.4rem;
`

export const Title = styled.h3``

export const Text = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
  opacity: 0.8;

  & > svg {
    font-size: 1.8rem;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  & > div {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.6rem;

    & > svg {
      padding: 0.5rem;
      font-size: 3rem;
      border: 0.1rem solid #8957e5;
      border-radius: 0.3rem;
    }
  }
`

export const Link = styled.a`
  background-color: #9d3c6a;
  color: #fafafa;
  border: none;
  outline: 0;
  border-radius: 0.5rem;
  padding: 0.6rem 1.5rem;
  font-size: 1.6rem;
  cursor: pointer;
  transition: 0.3s;
  text-decoration: none;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  max-width: 136px;

  &:hover {
    opacity: 0.8;
  }
`
