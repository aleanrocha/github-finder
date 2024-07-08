import styled from 'styled-components'

export const Button = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;

  background-color: #8957e5;
  color: #fafafa;
  border: none;
  outline: 0;
  border-radius: 0.5rem;
  padding: 0.6rem 1.8rem;
  font-size: 1.6rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 580px) {
    position: static;
    margin-top: 2.4rem;
    padding: 0.8rem 3.6rem;
  }
`
