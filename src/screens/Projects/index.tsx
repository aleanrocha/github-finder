import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { BackBtn } from '../../components/BackBtn'
import { Loader } from '../../components/Loader'
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
      setRepo(data)
    }
    if (username) loadRepos(username)
  }, [username])

  if (!repo && isLoading) return <Loader />

  return (
    <ProjectsContainer>
      <BackBtn />
      <h2>Explore os repositórios do usuário</h2>
      {repo && repo.length === 0 && <p>O usuário não possui repositórios!</p>}
      {repo && repo.length > 0 && repo.map((repo) => <div>{repo.name}</div>)}
    </ProjectsContainer>
  )
}
