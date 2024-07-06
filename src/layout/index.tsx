import { Outlet } from 'react-router-dom'

import { LayoutContainer, Title } from './styles'

export const Layout = () => {
  return (
    <LayoutContainer>
      <Title>GitHub Finder :)</Title>
      <Outlet />
    </LayoutContainer>
  )
}
