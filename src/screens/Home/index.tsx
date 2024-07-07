import { useState } from 'react'

import { Error } from '../../components/Error'
import Search from '../../components/Search'
import { User } from '../../components/User'
import { UserProps } from '../../types/user'
import { HomeContainer } from './styles'

export const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null)
  const [error, setError] = useState(false)

  const loadUser = async (username: string) => {
    setError(false)
    setUser(null)

    const res = await fetch(`https://api.github.com/users/${username}`)

    if (res.status === 404) {
      setError(true)
      return
    }

    const data = await res.json()
    const { avatar_url, login, location, followers, following } = data
    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following
    }
    setUser(userData)
  }

  return (
    <HomeContainer>
      <Search loadUser={loadUser} />
      {user && <User {...user} />}
      {error && <Error />}
    </HomeContainer>
  )
}
