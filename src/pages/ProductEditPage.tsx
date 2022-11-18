import {
  Flex,
} from '@chakra-ui/react'
import EditProductForm from '../components/EditProductForm'
function EditProductPage() { 
  

  return (
    <>
    <Flex alignItems={'center'} justifyContent={'center'} w={'100%'}>
    <EditProductForm/>
    </Flex>
    </>
    
  )
}
export default EditProductPage