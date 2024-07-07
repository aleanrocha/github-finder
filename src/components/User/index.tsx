import { MdLocationPin } from 'react-icons/md'
import { Link } from 'react-router-dom'

import { UserProps } from '../../types/user'
import { UserContainer, Image, Title, Text, Wrapper } from './styles'

export const User = ({
  login,
  avatar_url,
  location,
  followers,
  following
}: UserProps) => {
  return (
    <UserContainer>
      <Image src={avatar_url} />
      <Title>{login}</Title>
      {location && (
        <Text>
          <MdLocationPin />
          <span>{location}</span>
        </Text>
      )}
      <Wrapper>
        <div>
          <Text>Seguidores:</Text>
          <Text>{followers}</Text>
        </div>
        <div>
          <Text>Seguindo:</Text>
          <Text>{following}</Text>
        </div>
      </Wrapper>
      <Link to={'/repos'} />
    </UserContainer>
  )
}
