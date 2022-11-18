import { HamburgerIcon } from '@chakra-ui/icons'
import { IconButton, Menu, MenuButton, MenuList, Tag, Td, Tr, useColorModeValue, } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useProductData } from '../context/ProductContext'
import DeleteButton from './DeleteButton'
import EditButton from './EditButton'


interface productType {
  id: string,
  productName: string,
  quantity?: number,
  price?: number,
}



function ProductItem() {

  const { products } = useProductData()
  const navigate = useNavigate()

  const hoverBg = useColorModeValue('teal.50', 'teal.900')

  return (
    <>
      {products.map((productItem: productType) =>
        <Tr onClick={() => navigate(productItem.id)} key={productItem.id} _hover={{ background: hoverBg, cursor: 'pointer' }} >
          <Td>{productItem.productName}</Td>
          <Td>{productItem.quantity}</Td>
          <Td>{productItem.price}</Td>
          <Td><Tag variant='solid' colorScheme='teal'>Green</Tag></Td>
          <Td textAlign={'center'} onClick={(e) => { e.stopPropagation() }}>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label='Actions'
                icon={<HamburgerIcon />}
                variant='outline'
              />
              <MenuList fontSize={'md'}>
                <EditButton id={productItem.id} type={'menu'} />
                <DeleteButton id={productItem.id} type={'menu'} />
              </MenuList>
            </Menu>
          </Td>
        </Tr>


      )}

    </>


  )
}

export default ProductItem