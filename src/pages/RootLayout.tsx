import { Heading, Spacer } from '@chakra-ui/react'
import { Link, Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <>
    <Heading mt={'5%'}>
       <Link to='/'>📦 Warehouse App</Link>
      </Heading>
      <Spacer mb={'20vh'}></Spacer>
    <Outlet />
    </>
  )
}

export default RootLayout