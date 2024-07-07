import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { BackBtn } from '../../components/BackBtn'
import { RepoProps } from '../../types/repo'
import { ProjectsContainer } from './styles'

export const Projects = () => {
  const [repo, setRepo] = useState<RepoProps[] | [] | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const { username } = useParams<string>()

  useEffect(() => {
    const loadRepos = async (username: string) => {
      setIsLoading(true)
      const res = await fetch(`https://api.github.com/users/${username}/repos`)
      const data = await res.json()
      setIsLoading(false)
      console.log(data)
    }
    if (username) loadRepos(username)
  }, [username])

  return (
    <ProjectsContainer>
      <BackBtn />
      <div>Repos: {username}</div>
    </ProjectsContainer>
  )
}
