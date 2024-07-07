import styled from 'styled-components'

export const UserContainer = styled.div`
  background-color: #1f1436;
  padding: 3.6rem 2.4rem;
  border-radius: 1rem;
  border: 0.1rem solid #8957e5;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  width: 100%;
  max-width: 580px;
  margin: 2rem auto;

  & > a {
    background-color: #8957e5;
    color: #fafafa;
    font-size: 1.8rem;
    padding: 1.2rem 1.6rem;
    border-radius: 0.5rem;
    text-decoration: none;
    margin-top: 1.8rem;
    transition: 0.3s;

    &:hover {
      opacity: 0.8;
    }
  }
`

export const Image = styled.img`
  width: 120px;
  border-radius: 50%;
  border: 0.4rem solid #9d3c6a;
`

export const Title = styled.h2`
  font-size: 2rem;
`

export const Text = styled.p`
  font-size: 1.5rem;
  opacity: 0.7;
  font-weight: bold;
  display: flex;
  align-items: center;

  & > svg {
    fill: #8957e5;
    font-size: 2.6rem;
  }
`

export const Wrapper = styled.div`
  display: flex;
  gap: 2rem;

  & > div {
    display: block;
    & > p:nth-child(2) {
      background-color: #9d3c6a;
      padding: 0.6rem 1rem;
      border-radius: 0.5rem;
      opacity: 1;
      margin-top: 0.5rem;
      display: block;
    }
  }

  & > span {
    width: 3px;
    background-color: #9d3c6a;
  }
`
