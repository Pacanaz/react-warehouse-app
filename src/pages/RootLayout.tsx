import { Box, Button, ButtonGroup, Container, Flex, Heading, HStack } from '@chakra-ui/react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

function RootLayout() {


  const navigate = useNavigate()

  return (
    <>
      <Box as="section" pb={{ base: '12', md: '24' }}>

        <Container borderBottom={'2px solid teal'} width={'100vw'} maxWidth={'100vw'} py={{ base: '4', lg: '5' }} px={{ base: '10', lg: '20' }}>
          <HStack spacing="10" justify="space-between">


            <Flex justify="space-between" flex="1">
              <Heading cursor={'pointer'} onClick={() => { navigate('/') }} size={{ base: 'sm', lg: 'lg' }} alignSelf={'center'}><span style={{ background: 'teal', padding: '1vh', borderRadius: '5px', boxShadow: '3px 2px 5px 0px rgb(0 0 0 / 60%)' }}>📦</span> Warehouse <span style={{ color: 'teal' }}>App</span></Heading>
              <ButtonGroup variant="primary" spacing="8">

                <NavLink to='/' style={({ isActive }) =>
                  isActive ? { background: 'teal', color: 'white' } : undefined
                }><Button>Home</Button></NavLink>
                <NavLink to='/products' style={({ isActive }) =>
                  isActive ? { background: 'teal', color: 'white' } : undefined
                }><Button>Products</Button></NavLink>


              </ButtonGroup>
            </Flex>

          </HStack>
        </Container>

      </Box>



      <Outlet />
    </>
  )
}

export default RootLayout