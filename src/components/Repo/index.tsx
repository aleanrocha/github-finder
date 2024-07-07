import { AiOutlineFork, AiOutlineStar } from 'react-icons/ai'
import { BsCodeSlash } from 'react-icons/bs'
import { RiGitRepositoryLine } from 'react-icons/ri'

import { RepoProps } from '../../types/repo'
import { RepoContainer, Title, Text, Wrapper, Link } from './styles'

export const Repo = ({
  name,
  html_url,
  language,
  stargazers_count,
  forks_count
}: RepoProps) => {
  return (
    <RepoContainer>
      <Title>{name}</Title>
      <Text>
        <BsCodeSlash />
        {language}
      </Text>
      <Wrapper>
        <div>
          <AiOutlineStar />
          <span>{stargazers_count}</span>
        </div>
        <div>
          <AiOutlineFork />
          <span>{forks_count}</span>
        </div>
      </Wrapper>
      <Link href={html_url} target="_blank">
        <span>Ver código</span>
        <RiGitRepositoryLine />
      </Link>
    </RepoContainer>
  )
}
