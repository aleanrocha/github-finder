import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { BackBtn } from '../../components/BackBtn'
import { ProjectsContainer } from './styles'

export const Projects = () => {
  const { username } = useParams()

  return (
    <ProjectsContainer>
      <BackBtn />
      <div>Repos: {username}</div>
    </ProjectsContainer>
  )
}
