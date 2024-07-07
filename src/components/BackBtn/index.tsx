import { useNavigate } from 'react-router-dom'

import { Button } from './styles'

export const BackBtn = () => {
  const navigate = useNavigate()
  return <Button onClick={() => navigate(-1)}>Voltar</Button>
}
