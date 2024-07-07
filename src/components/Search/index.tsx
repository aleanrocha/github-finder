import { FormEvent, useState } from 'react'
import { BsSearch } from 'react-icons/bs'

import { SearchContainer, Title, Text, Form, Input, Button } from './styles.ts'

type SearchProps = {
  loadUser: (username: string) => Promise<void>
}

const Search = ({ loadUser }: SearchProps) => {
  const [username, setUsername] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (username === '') {
      alert('Por favor, digite um nome de usuário!')
      return
    }
    loadUser(username)
  }

  return (
    <SearchContainer>
      <Title>Busque por um usuário:</Title>
      <Text>Conheça seus melhores repositórios.</Text>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Digite o nome do usuário"
          onChange={(e) => setUsername(e.target.value.trim())}
        />
        <Button type="submit">
          <BsSearch />
        </Button>
      </Form>
    </SearchContainer>
  )
}

export default Search
