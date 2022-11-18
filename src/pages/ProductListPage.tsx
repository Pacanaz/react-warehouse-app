import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  TableContainer,
  Button,
  Heading,
  Flex,
  Box,
  Image,
} from "@chakra-ui/react"
import { AddIcon } from '@chakra-ui/icons'

import TableHeader from "../components/TableHeader"
import { Link } from "react-router-dom"
import ProductItem from "../components/ProductItem"
import { useProductData } from "../context/ProductContext"



function ProductListPage() {

  const { products } = useProductData()
  return (
    <>

      <TableContainer>
        {products.length !== 0 ?
          <>
            <Link to={'create'}><Button size={{ base: 'xs', lg: 'sm' }} ml={'1em'} alignSelf={'flex-start'} leftIcon={<AddIcon />} colorScheme='teal' variant='solid'>
              Add product
            </Button>
            </Link>

            <Table size={{ base: 'sm', lg: 'lg' }} colorScheme={'green'}>
              <Thead>
                <TableHeader />
              </Thead>
              <Tbody fontSize={'md'}>
                <ProductItem />
              </Tbody>
              <Tfoot>
                <TableHeader />
              </Tfoot>
            </Table>
          </>
          : <Flex direction={'column'} alignItems={'center'}>
            <Box boxSize='xs'>
              <Image src='/assets/images/pulp-fiction-john-travolta.gif' alt='Dan Abramov' />
            </Box>
            <Heading mb={'5'}>No products</Heading>
            <Link to={'create'}><Button size={{ base: 'md', lg: 'lg' }} leftIcon={<AddIcon />} colorScheme='teal' variant='solid'>
              Add product
            </Button>
            </Link>
          </Flex>}
      </TableContainer>
    </>
  )
}

export default ProductListPage