import { HamburgerIcon } from '@chakra-ui/icons'
import { IconButton, Menu, MenuButton, MenuList, Tag, Td, Tr, useColorModeValue, } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import DeleteButton from './DeleteButton'
import EditButton from './EditButton'



interface productType {
  id: string,
  productName: string,
  quantity?: number,
  price?: number,
  tags: string[]
}



function ProductItem({ products }: any) {

  const navigate = useNavigate()


  const hoverBg = useColorModeValue('teal.50', 'teal.900')

  return (
    <>
      {products.map((productItem: productType) =>
        <Tr onClick={() => navigate(productItem.id)} key={productItem.id} fontSize={['xs', 'sm', 'md']} _hover={{ background: hoverBg, cursor: 'pointer' }} >
          <Td maxWidth={'40vw'}>{productItem.productName}</Td>
          <Td>{productItem.quantity}</Td>
          <Td>{productItem.price}</Td>
          <Td>

            {productItem.tags.map((tag: string, index: number) => {

              return <Tag m={'3px'} size={['sm', 'md']} key={index} variant='solid' colorScheme={tag.toLocaleLowerCase()}>
                {tag}
              </Tag>

            })}

          </Td>
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