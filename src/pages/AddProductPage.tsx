import { Flex } from '@chakra-ui/react'
import NewProductForm from '../components/NewProductForm'

function AddProductPage() {

  return (
    <Flex alignItems={'center'} justifyContent={'center'} w={'100%'}>
    <NewProductForm/>
    </Flex>
  )
  
}

export default AddProductPage

