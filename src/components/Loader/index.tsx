import { FaSpinner } from 'react-icons/fa'

import { LoaderContainer } from './styles'

export const Loader = () => {
  return (
    <LoaderContainer>
      <FaSpinner />
    </LoaderContainer>
  )
}
