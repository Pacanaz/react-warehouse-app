import { Button, Flex, Heading, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <Flex direction={'column'} alignItems={'center'} mt={'5vh'}>
        
    <Image mb={'5%'} src='/assets/images/error.gif' alt='Dan Abramov' />

        <Heading mb={'5'}>Page not found!</Heading>
       <Link to={'/'}><Button size={{base: 'md', lg:'lg'}} colorScheme='teal' variant='solid'>
          Go back!
        </Button>
        </Link>
        </Flex>
  )
}

export default ErrorPage