import { DeleteIcon } from "@chakra-ui/icons"
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, MenuItem, useDisclosure } from "@chakra-ui/react"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { useProductData } from "../context/ProductContext"



function DeleteButton( {id, type} : any ) {


    const {deleteProduct} = useProductData();
    const cancelRef = useRef<HTMLButtonElement>(null)
    const { isOpen, onOpen, onClose } = useDisclosure()

    const navigate = useNavigate();

  return (
    <>
    {type === 'menu' &&<MenuItem onClick={() => {
        onOpen()
     }} icon={<DeleteIcon />}
       _hover={{ color: 'red' }}>
       Delete
     </MenuItem> }

     {type === 'single' &&<Button size={['xs', 'sm', 'md']} ml={'20px'} colorScheme={'red'} onClick={() => {
        onOpen()
     }}>
       Delete
     </Button> }


     <AlertDialog
isOpen={isOpen}
leastDestructiveRef={cancelRef}
onClose={onClose}
isCentered
><AlertDialogOverlay>
<AlertDialogContent>
<AlertDialogHeader fontSize='lg' fontWeight='bold'>
☠️ Delete product?
</AlertDialogHeader>

<AlertDialogBody>
Are you sure? All the data about this product will be lost.
</AlertDialogBody>

<AlertDialogFooter>
<Button ref={cancelRef} onClick={onClose}>
Cancel
</Button>
<Button colorScheme='red' onClick={() => {deleteProduct(id); navigate('/products')}} ml={3}>
Delete
</Button>
</AlertDialogFooter>
</AlertDialogContent>
</AlertDialogOverlay>
</AlertDialog> 
</>
  )
}

export default DeleteButton