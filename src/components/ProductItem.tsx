import { DeleteIcon, EditIcon, HamburgerIcon } from '@chakra-ui/icons'
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, IconButton, Menu, MenuButton, MenuItem, MenuList, Tag, Td, Tr, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import {useRef, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useProductData } from '../context/ProductContext'


interface productType {
    id : string,
    productName: string,
    quantity?: number,
    price?: number,
}



function ProductItem() {

    const {products, deleteProduct, editProduct} = useProductData();
    const cancelRef = useRef<HTMLButtonElement>(null)
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [clicked, setClicked] = useState<productType | null>(null);
    const navigate = useNavigate();

    const hoverBg = useColorModeValue('teal.50', 'teal.900');

  return (
    <>
    { products.map((productItem: productType)  => 
           <Tr onClick={() => navigate(productItem.id)} key={productItem.id}  _hover={{background: hoverBg, cursor:'pointer' }} >
           <Td>{productItem.productName}</Td>
           <Td>{productItem.quantity}</Td>
           <Td>{productItem.price}</Td>
           <Td><Tag variant='solid' colorScheme='teal'>Green</Tag></Td>
           <Td textAlign={'center'} onClick={(e) => {e.stopPropagation()}}>
             <Menu>
               <MenuButton 
                 as={IconButton}
                 aria-label='Actions'
                 icon={<HamburgerIcon />}
                 variant='outline'
               />
               <MenuList fontSize={'md'}>
                 <Link to={`${productItem.id}/edit`}><MenuItem icon={<EditIcon />} >
                   Edit
                 </MenuItem></Link>
                 <MenuItem onClick={() => {
                    setClicked({id: productItem.id, productName: productItem.productName});
                    onOpen()
                 }} icon={<DeleteIcon />}
                   _hover={{ color: 'red' }}>
                   Delete
                 </MenuItem>
                 
               </MenuList>
             </Menu>
           </Td>
         </Tr>  
        )}  
        <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      ><AlertDialogOverlay>
      <AlertDialogContent>
        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
        ☠️ Delete product {clicked?.productName}?
        </AlertDialogHeader>

        <AlertDialogBody>
          Are you sure? All the data about this product will be lost.
        </AlertDialogBody>

        <AlertDialogFooter>
          <Button ref={cancelRef} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme='red' onClick={() => {deleteProduct(clicked?.id); onClose();}} ml={3}>
            Delete
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialogOverlay>
  </AlertDialog> 
    </>
    
   
  )
}

export default ProductItem