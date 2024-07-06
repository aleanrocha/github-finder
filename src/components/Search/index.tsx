import { BsSearch } from 'react-icons/bs'

import { SearchContainer, Title, Text, Form, Input, Button } from './styles.ts'

const Search = () => {
  return (
    <SearchContainer>
      <Title>Busque por um usuário:</Title>
      <Text>Conheça seus melhores repositórios.</Text>
      <Form>
        <Input type="text" placeholder="Digite o nome do usuário" />
        <Button>
          <BsSearch />
        </Button>
      </Form>
    </SearchContainer>
  )
}

export default Search
