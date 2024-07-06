import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
      <h1>Github Finder</h1>
      <Outlet />
    </>
  )
}
