import styled from 'styled-components'

export const SearchContainer = styled.div`
  background-color: #1f1436;
  padding: 3.6rem 2.4rem;
  border-radius: 1rem;
  border: 0.1rem solid #8957e5;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;
  max-width: 580px;
  margin: 0 auto;
`

export const Title = styled.h2`
  font-size: 2.6rem;
  font-weight: bold;
`

export const Text = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #b3caef;
`

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`

export const Input = styled.input`
  width: 100%;
  max-width: 300px;
  display: flex;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.6rem 1.4rem;
  height: 4.5rem;
  outline: 0;
  border: none;
  border-radius: 0.5rem;
`

export const Button = styled.button`
  background-color: #8957e5;
  color: #fafafa;
  height: 4.5rem;
  width: 4.5rem;
  border: none;
  outline: 0;
  border-radius: 0.5rem;
  padding: 1rem;
  font-size: 2rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }
`
