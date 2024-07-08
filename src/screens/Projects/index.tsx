import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { BackBtn } from '../../components/BackBtn'
import { Loader } from '../../components/Loader'
import { Repo } from '../../components/Repo'
import { RepoProps } from '../../types/repo'
import { ProjectsContainer, Title } from './styles'

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
      let orderedRepos = data.sort(
        (a: RepoProps, b: RepoProps) => b.stargazers_count - a.stargazers_count
      )
      orderedRepos = orderedRepos.slice(0, 5)
      setRepo(orderedRepos)
    }
    if (username) loadRepos(username)
  }, [username])

  if (!repo && isLoading) return <Loader />

  return (
    <ProjectsContainer>
      <Title>Explore os repositórios do usuário: {username}</Title>
      {repo && repo.length === 0 && <p>O usuário não possui repositórios!</p>}
      {repo &&
        repo.length > 0 &&
        repo.map((repo: RepoProps) => <Repo key={repo.name} {...repo} />)}
      <BackBtn />
    </ProjectsContainer>
  )
}
