import { DeleteIcon, EditIcon, HamburgerIcon } from '@chakra-ui/icons'
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, IconButton, Menu, MenuButton, MenuItem, MenuList, Tag, Td, Tr, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import {useRef, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useProductData } from '../context/ProductContext'
import DeleteButton from './DeleteButton'
import EditButton from './EditButton'


interface productType {
    id : string,
    productName: string,
    quantity?: number,
    price?: number,
}



function ProductItem() {

    const {products, deleteProduct, editProduct} = useProductData();

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
                <EditButton id={productItem.id} />
                 <DeleteButton id={productItem.id} />
               </MenuList>
             </Menu>
           </Td>
         </Tr>  

         
        )}  
        
    </>
    
   
  )
}

export default ProductItem