import { Box, Button, ButtonGroup, Container, Flex, Heading, HStack, Text } from '@chakra-ui/react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

function RootLayout() {


  const navigate = useNavigate()

  return (
    <>
      <Box as="section" pb={{ base: '12', md: '12' }}>

        <Container borderBottom={'2px solid teal'} width={'100vw'} maxWidth={'100vw'} py={{ base: '4', lg: '5' }} px={{ base: '10', lg: '20' }}>
          <HStack spacing="10" justify="space-between">


            <Flex justify="space-between" alignItems={'center'} flex="1" direction={{base:'column',  sm:'row'}}>
              <Heading cursor={'pointer'} onClick={() => { navigate('/') }} size={{ base: 'sm', lg: 'lg' }} fontSize={['xs', 'sm', 'xl']} alignSelf={'center'}><Text display={'inline'} fontSize={['xs', 'sm', 'xl']} style={{ background: 'teal', padding: '1vh', borderRadius: '5px', boxShadow: '3px 2px 5px 0px rgb(0 0 0 / 60%)' }}>📦</Text> Warehouse <span style={{ color: 'teal' }}>App</span></Heading>
              <ButtonGroup mt={{base: '2vh', sm:'0'}} variant="primary" spacing="8">

                <NavLink to='/' style={({ isActive }) =>
                  isActive ? { background: 'teal', color: 'white' } : undefined
                }><Button fontSize={['xs', 'sm', 'md']}>Home</Button></NavLink>
                <NavLink to='/products' style={({ isActive }) =>
                  isActive ? { background: 'teal', color: 'white' } : undefined
                }><Button fontSize={['xs', 'sm', 'md']}>Products</Button></NavLink>


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